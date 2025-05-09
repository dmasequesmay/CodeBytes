"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LightbulbIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from "react";

// The course section interface
interface CourseSection {
  title: string;
  goals: string;
}

export default function Course() {
  // TODO: access the courseId attribute from params (hint: look at the top import)
  const params = useParams(); // TODO: access the courseId attribute from params
  const courseId:string = params['course-id'].toString();
  const [courseTitle, setCourseTitle] = useState('');
  const [totalProblems, setTotalProblems] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      const course = await axios.get(`/api/courses/${courseId}`);
      setCourseTitle(course.data.language);
      const totalProblems = await axios.get(`/api/problems-count/${courseId}`);
      // TODO: Limit this to a maximum!
      setTotalProblems(totalProblems.data[0].count);
      setLoading(false);
    }
    fetchData();
  }, []);

  // for now, use placeholder text for goals. refer to Mid-Fi for details.
  const courseSections = [
    {
      title: "Beginner",
      goals: "Learn the basics and understand the foundations of the subject.",
    },
    {
      title: "Intermediate",
      goals: "Build upon core concepts with practical examples and challenges.",
    },
    {
      title: "Advanced",
      goals: "Master advanced topics and explore real-world applications.",
    },
    {
      title: "Expert",
      goals: "Demonstrate deep expertise through complex, project-based learning.",
    },
  ];
    
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

          {/* TODO: Dynamically loop through courseSections, generating a <div> for each one 
          that follows this format:
            <div key={index} className="...">
              <h2 className="...">{title}</h2>
              <p className="...">{content}</p>
            </div>

          Refer to Tailwind CSS documentation for more details:
          https://tailwindcss.com/docs/background-color
          https://tailwindcss.com/docs/padding
          https://tailwindcss.com/docs/border-radius
          https://tailwindcss.com/docs/font-weight
          https://tailwindcss.com/docs/margin
          https://tailwindcss.com/docs/text-color
          */}
          {courseSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-sm"
            >
              {/* TODO: change the queries to be dynamic! */}
              <Link href={{pathname: `/courses/${courseId}/${index}`, query: { totalProblems: totalProblems, currentProgress: 1 }}} className="block">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.goals}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
