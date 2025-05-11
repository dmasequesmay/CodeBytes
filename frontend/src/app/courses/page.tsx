"use client";

import { useEffect, useState } from "react";
import { Search, Home, User, Lightbulb } from "lucide-react";
import { getCourses } from "../../services/mockDataService";
import Link from "next/link";

// Interface for course data
interface CourseProps {
  name: string;
  progress: number;
}

// Custom hook to fetch user data and progress
const useUserData = (email: string) => {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user name
        const userResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user-info/${email}`);
        const userData = await userResponse.json();
        setUserName(userData.firstName);

        // Fetch user progress in courses
        const progressResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user-progress/${email}`);
        const progressData = await progressResponse.json();

        // Transform backend data to the format needed for CourseCard
        const transformedCourses = progressData.map((course) => ({
          id: course.language, // Assuming `language` is a unique identifier for the course
          name: course.course_name,
          progress: course.progress,
        }));

        setCourses(transformedCourses);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [email]);

  return { courses, userName };
};

// CourseCard component that displays course progress
const CourseCard = ({ name, progress }: CourseProps) => {
  // Calculate circle circumference (Radius = 45 units)
  const circumference = 2 * Math.PI * 45;

  // Calculate strokeDashoffset based on progress
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
      <h3 className="font-medium text-lg mb-4">{name}</h3>

      {/* Container for circular progress indicator */}
      <div className="w-24 h-24 relative">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-300 stroke-current"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            className="text-green-600 stroke-current"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          />
        </svg>

        {/* Absolute positioned container for percentage text */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          <span className="text-xl font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default function CourseLanding() {
  // Get the user's email from localStorage
  const email = localStorage.getItem("userEmail"); // Example: Replace with actual method to get user email

  // Fetch courses and userName using the custom hook
  const { courses, userName } = useUserData(email);

  // Handle case when no courses are available
  if (!courses.length) return <div>Loading courses...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <div className="flex items-center bg-white rounded-lg border overflow-hidden">
            <div className="pl-4 pr-2 flex items-center">
              <span className="text-gray-700">Find Course</span>
            </div>
            <input
              type="text"
              className="flex-1 py-2 px-4 outline-none"
              placeholder="Search courses..."
            />
            <button className="bg-gray-200 p-3 rounded-r-lg">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* User Greeting */}
      <div className="bg-gray-200 p-4 rounded-lg mb-6">
        <p className="text-center">
          Hello <span className="font-semibold">{userName || "Guest"}</span>! You are currently taking{" "}
          <span className="font-semibold">no course yet</span>
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-20 bg-gray-200 rounded-lg mr-4 p-4 flex flex-col items-center space-y-8">
          <button className="p-2 hover:bg-gray-300 rounded-full">
            <Lightbulb className="h-6 w-6" />
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-full">
            <Link href="/dashboard">
              <Home className="h-6 w-6" />
            </Link>
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-full">
            <Link href="/profile">
              <User className="h-6 w-6" />
            </Link>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Choose a Course</h2>

          {/* Scrollable Course Grid */}
          <div className="overflow-y-auto max-h-[400px] pr-2">
            <div className="grid grid-cols-2 gap-4">
              {courses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`}>
                  <CourseCard name={course.name} progress={course.progress} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
