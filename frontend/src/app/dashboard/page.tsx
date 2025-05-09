"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Trophy, BookOpen, UserPlus, Monitor } from "lucide-react";
import ContinueButton from "../../components/ContinueButton";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getUserEmail } from "../../lib/authUtils";

interface Course {
  name: string;
  progress: number;
  languageId: number;
}

interface Badge{
  badge_name: string;
  badge_desc: string;
  requirement: string;
  badge_image_src: string;
  date_earned: string;
}

export default function DashboardLanding() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

  const userEmail = getUserEmail() || "user@example.com"; // fallback to hardcoded value if no email in localStorage

  useEffect(() => {
    async function fetchData() {
      try{
        const [progressRes, badgeRes] = await Promise.all([
          axios.get(`/api/user-progress/${userEmail}`),
          axios.get(`/api/user-badges/${userEmail}`),
        ]);
        setCourses(progressRes.data.map((c: any) => ({
          name: c.course_name,
          progress: c.progress,
          languageId: c.language
        })));
        setBadges(badgeRes.data.map((b: any) => ({
          badge_name: b.badge_name,
          badge_desc: b.badge_desc,
          requirement: b.requirement,
          badge_image_src: b.badge_image_src,
          date_earned: b.date_earned,
        })));
        
      } catch(err) {
        console.error("Failed to fetch data", err);
      } finally{
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  // const courses = [
  //   { name: "Java", progress: 70, id: 1 },
  //   { name: "C++", progress: 100, id: 2 },
  //   { name: "Python", progress: 55, id: 3 },
  //   { name: "React", progress: 20, id: 4 },
  //   // Static for now; will be getting this info dynamically later
  // ];

  // const chartData = [
  //   { name: "C++", progress: 30 },
  //   { name: "Python", progress: 60 },
  //   { name: "JavaScript", progress: 95 }
  //    // Static for now; will be getting this info dynamically later
  // ];
  // const trophyIcons = [
  //   { content: "8K", isBold: true },
  //   { content: <Trophy className="" /> },
  //   { content: "☺" },
  //   { content: "⚔️" },
  //   { content: "AR", isBold: true },
  //   { content: "★" },
  //   { content: "👥" },
  //   { content: "🔄" }
  // ];

  return (
    <div className="flex-1 p-6">{/* Main Content */}
      {/* Programming Language Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {courses.length === 0 && !loading && (
          <p className="text-black">You are not enrolled in any courses.</p>
        )}
        {courses.map((course, index) => (
          <div 
            key={index}
            className="bg-[#a5a6f6] p-6 rounded-lg shadow-lg relative"
          >
            <h2 className="text-3xl font-bold mb-2">{course.name}</h2>
              {/* TODO: Implement a ContinueButton with imgSrc pointing to an image of a monitor
            (can be a placeholder for now) */}
            <ContinueButton imgSrc="" onClickEvent={() => {router.push(`/courses/${course.languageId}`)}} />
            <div className="mt-4 relative">
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                {/* The width of the progress bar should be the progress percentage from language */}
                <div className="h-2 bg-purple-700 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              {/* add language.progress here */}
              <span className="absolute right-0 -top-6 text-black">{course.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Progress and Trophies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Learning Progress */}
        {/* TODO: adjust the classNames of the next two divs to reflect the Midflow design */}
        <div className="bg-[#a5a6f6] p-6 rounded-lg shadow-lg">
          <div className="bg-white text-black font-bold py-2 px-4 rounded-full inline-flex items-center mb-4">
            LEARNING PROGRESS 
            {/* TODO: Add Monitor icon with height & width of 5 units*/}
            <Monitor className="w-5 h-5" />
          </div>
          {/* TODO: add make the border of this gray with a width of 400*/}
          <div className="h-64 flex items-center justify-between gap-4 pt-4 border-t border-l border-gray-400">
            {/* Chart bars */}
            {courses.map((course, index) => (
              <div key={index} className="flex flex-col items-center w-1/3 h-full">
                <div 
                  className="w-4 h-0 mt-auto rounded-full bg-purple-700"
                  style={{ height: `${course.progress}%` }}
                ></div>
                <span className="text-black mt-2">{course.name}</span>
              </div>
            ))}
          </div>
      </div>
      </div>

      {/* Trophies */}
      {/* TODO: Adjust the styling of this div to reflect the Midfi design */}
      <div className="bg-[#a5a6f6] p-6 rounded-lg shadow-lg">
          {/* TODO: Adjust the styling of this div to reflect the Midif design */}
        <div className="bg-white text-black font-bold py-2 px-4 rounded-full inline-flex items-center mb-4">
          TROPHIES 
          {/* TODO: Add Trophy icon with height & width of 5 units*/}
          <Trophy className="w-5 h-5 ml-2" />
        </div>
        {badges.length === 0 && !loading ? (
          <p className="text-black">No badges earned yet.</p>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {/* Trophy icons */}
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="bg-black h-16 w-16 rounded-lg flex items-center justify-center"
              >
                {/* TODO: Dynamically ad the icon here.
                Add appropriate text styling based on the Midfi design */}
                <span className="text-white text-2xl">{badge.badge_name}</span>
              </div>
            ))}
        </div>
        )}
      </div>
    </div>
  );
}
