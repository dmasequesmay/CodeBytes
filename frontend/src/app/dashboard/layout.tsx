"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Trophy, BookOpen, UserPlus, Monitor, User2Icon, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const sidebarIcons = [
    { icon: Menu, tooltip: "Menu", href: "" },
    { icon: Shield, tooltip: "Badges", href: "" },
    { icon: BookOpen, tooltip: "Courses", href: "/courses" },
    { icon: User2Icon, tooltip: "Profile", href: "/profile" }
  ];

  return (
    <div className="min-h-screen bg-white">
    {/* Top Navigation */}
    <nav className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
            <img src="/assets/Frame 1.png" alt="Logo" className="w-8 h-8" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-black">
            home
          </Link>
          {/* TODO: When clicked, this button will either open/close the sidebar (i.e. reverse its current state).
          Implement the onClick listener below */}
          <button className="rounded-full p-2 bg-black text-white" 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
    </nav>

      <div className="flex">
        {/* Sidebar */}
        {/* TODO: If this sidebar is open, it should be 16 units wide. If it is closed, it should be 0 units wide and be hidden 16 units to the left (hint: -ml-xx). */}
        {/* Add to the stylings so that it reflects the Midfi (current implementation is only partially correct*/}
        <div
          className={`transition-all duration-300 bg-[#a5a6f6] flex flex-col items-center py-6 ${
            isSidebarOpen ? "w-16" : "w-0 -ml-16"
          }`}
        >
          {isSidebarOpen && sidebarIcons.map((item, index) => (
            // TODO: For each item in sidebarIcons, add a button element (height and with of 6 units, add some padding as well)
            <Link key={index} href={item.href}>
              <button
                key={index}
                className="h-12 w-12 mb-4 p-2 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
                title={item.tooltip}
              >
                <item.icon className="h-6 w-6 text-black" />
              </button>
            </Link>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  )
}