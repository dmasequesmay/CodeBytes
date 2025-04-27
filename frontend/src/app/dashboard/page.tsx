"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Trophy, BookOpen, UserPlus, Monitor } from "lucide-react"
import ContinueButton from "../../components/ContinueButton";

export default function DashboardLanding() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const courses = [
    { name: "Java", progress: 70 },
    { name: "C++", progress: 100 },
    { name: "Python", progress: 55 },
    { name: "React", progress: 20 },
    // Static for now; will be getting this info dynamically later
  ];

  const chartData = [
    { name: "C++", progress: 30 },
    { name: "Python", progress: 60 },
    { name: "JavaScript", progress: 95 }
     // Static for now; will be getting this info dynamically later
  ];
  const trophyIcons = [
    { content: "8K", isBold: true },
    { content: <Trophy className="" /> },
    { content: "☺" },
    { content: "⚔️" },
    { content: "AR", isBold: true },
    { content: "★" },
    { content: "👥" },
    { content: "🔄" }
  ];

  return (
    <div className="flex-1 p-6">{/* Main Content */}
      {/* Programming Language Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {courses.map((language, index) => (
          <div 
            key={index}
            className="bg-[#a5a6f6] p-6 rounded-lg shadow-lg relative"
          >
            <h2 className="text-3xl font-bold mb-2">{language.name}</h2>
            {/* TODO: Implement a ContinueButton with imgSrc pointing to an image of a monitor
            (can be a placeholder for now) */}
            <ContinueButton imgSrc="" onClickEvent={() => {}} />
            <div className="mt-4 relative">
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                {/* The width of the progress bar should be the progress percentage from language */}
                <div className="h-2 bg-purple-700 rounded-full" style={{ width: `${language.progress}%` }}></div>
              </div>
              {/* add language.progress here */}
              <span className="absolute right-0 -top-6 text-black">{language.progress}%</span>
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
          <div className="h-64 flex items-end justify-between gap-4 pt-4 border-t border-l border-gray-400">
            {/* Chart bars */}
            {chartData.map((item, index) => (
                // TODO: have each outer div use flex and items-center. the height of the inner div should be dynamic based on item.progress
                // Inner div should use #1a1a5c and a width of 16
                // Outer div should have a width of 1/3
                // Refer to Tailwind Docs for the specific classNames
              <div key={index} className="flex items-center w-1/3">
                <div 
                  className="bg-[#1a1a5c] w-4 h-full rounded-full"
                  style={{ height: `${item.progress}%` }}
                ></div>
                <span className="text-black mt-2">{item.name}</span>
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
        <div className="grid grid-cols-4 gap-4">
          {/* Trophy icons */}
          {trophyIcons.map((icon, index) => (
            <div 
              key={index}
              className="bg-black h-16 w-16 rounded-lg flex items-center justify-center"
            >
              {/* TODO: Dynamically ad the icon here.
              Add appropriate text styling based on the Midfi design */}
              <span className="text-white text-2xl">{icon.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
