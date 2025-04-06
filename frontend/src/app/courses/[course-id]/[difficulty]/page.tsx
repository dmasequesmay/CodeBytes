"use client"

import { useParams } from "next/navigation"
import { LightbulbIcon, HomeIcon, UserIcon } from "lucide-react"

export default function ProblemDisplay() {
//   TODO: hook into the parameters course-id and difficulty using the useParams hook
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar - same as parent component */}
      <div className="w-20 bg-gray-200 flex flex-col items-center py-8 space-y-8">
        <div className="p-2 w-6 h-6">
          <HomeIcon className="w-full h-full" />
        </div>
        <div className="p-2 w-6 h-6">
          <LightbulbIcon className="w-full h-full" />
        </div>
        <div className="p-2 w-6 h-6">
          <UserIcon className="w-full h-full" />
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* TBD */}
      </div>
    </div>
  )
}