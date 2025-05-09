"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LightbulbIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from 'next/link';

// The course section interface
interface CourseSection {
  title: string;
  goals: string;
}

export default function Course() {
  // Access the courseId from the URL params
  const params = useParams();
  const courseId: string = params['course-id'].toString();

  // State to store course details and loading/error state
  const [course, setCourse] = useState<any>(null);  // Update the type as needed for course data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch course data on mount
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        // Make an API request to get the course details by ID
        const response = await fetch(`/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        const data = await response.json();
        setCourse(data);  // Assuming the response contains the course object
        setLoading(false);
      } catch (err) {
        setError("Failed to load course data");
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  // If loading, show loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If error occurred during fetching, display error message
  if (error) {
    return <div>{error}</div>;
  }

  // If no course data available, show an error message
  if (!course) {
    return <div>No course found</div>;
  }

  // Destructure course data (adjust based on your API response)
  const { title, courseSections } = course;

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-20 bg-gray-200 flex flex-col items-center py-8 space-y-8">
        <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
          <LightbulbIcon className="h-6 w-6 text-gray-700" />
        </div>
        <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
          <HomeIcon className="h-6 w-6 text-gray-700" />
        </div>
        <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
          <UserIcon className="h-6 w-6 text-gray-700" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Course Title */}
        <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Course Sections */}
          {courseSections.map((section: CourseSection, index: number) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <Link
                href={{
                  pathname: `/courses/${courseId}/${index}`,
                  query: { totalProblems: 2, currentProgress: 1 }, // Example query parameters, adjust as needed
                }}
                className="block"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
                <p className="text-gray-600">{section.goals}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
