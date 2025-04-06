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
  const sidebarIcons = [
    { icon: Menu, tooltip: "Menu" },
    { icon: Trophy, tooltip: "Trophies" },
    { icon: BookOpen, tooltip: "Courses" },
    { icon: UserPlus, tooltip: "Invite" }
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
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
            <span>logo</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-black">
            home
          </Link>
          {/* TODO: When clicked, this button will either open/close the sidebar (i.e. reverse its current state).
          Implement the onClick listener below */}
          <button className="rounded-full p-2 bg-black text-white" onClick={}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        {/* TODO: If this sidebar is open, it should be 16 units wide. If it is closed, it should be 0 units wide and be hidden 16 units to the left (hint: -ml-xx). */}
        {/* Add to the stylings so that it reflects the Midfi (current implementation is only partially correct*/}
        <div
          className={`transition-all duration-300 bg-[#a5a6f6] flex`}
        >
          {sidebarIcons.map((item, index) => (
            // TODO: For each item in sidebarIcons, add a button element (height and with of 6 units, add some padding as well)
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Programming Language Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {courses.map((language, index) => (
              <div 
                key={index}
                className=""
              >
                <h2 className=""></h2>
                {/* TODO: Implement a ContinueButton with imgSrc pointing to an image of a monitor
                (can be a placeholder for now) */}
                <div className="mt-4 relative">
                  <div className="">
                    {/* The width of the progress bar should be the progress percentage from language */}
                    <div className="" style={{  }}></div>
                  </div>
                  {/* add language.progress here */}
                  <span className=""></span>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Progress and Trophies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Learning Progress */}
            {/* TODO: adjust the classNames of the next two divs to reflect the Midflow design */}
            <div className="">
              <div className="">
                LEARNING PROGRESS 
                {/* TODO: Add Monitor icon with height & width of 5 units*/}
              </div>
              {/* TODO: add make the border of this gray with a width of 400*/}
              <div className="h-64 flex items-end justify-between gap-4 pt-4 border-t border-l">
                {/* Chart bars */}
                {chartData.map((item, index) => (
                    // TODO: have each outer div use flex and items-center. the height of the inner div should be dynamic based on item.progress
                    // Inner div should use #1a1a5c and a width of 16
                    // Outer div should have a width of 1/3
                    // Refer to Tailwind Docs for the specific classNames
                  <div key={index} className="">
                    <div 
                      className=""
                      style={{ }}
                    ></div>
                    <span className=""></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trophies */}
            {/* TODO: Adjust the styling of this div to reflect the Midfi design */}
            <div className="bg-[#a5a6f6]">
                {/* TODO: Adjust the styling of this div to reflect the Midif design */}
              <div className="bg-white text-black inline-flex">
                TROPHIES 
                {/* TODO: Add Trophy icon with height & width of 5 units*/}
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
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
