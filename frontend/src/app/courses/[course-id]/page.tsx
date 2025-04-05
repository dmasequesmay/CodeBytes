"use client"

import { LightbulbIcon, HomeIcon, UserIcon } from "lucide-react";

export default function Course({ params }: { params: { courseId: string } }) {
  const courseId = null; // TODO: access the courseId attribute from params

  // placeholder (for now)
  const courseTitle = "[Course Title]";
  
  // for now, use placeholder text for goals. refer to Mid-Fi for details.
  const courseSections = [
    // TODO: add 4 js objects. each should have a "title" and "goals" attribute
    // make 1 for each possible difficulty as defined in the DB Model
    // title: difficulty, goals: learning path + goals (refer to Mid-Fi)
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* TODO: Add hover effects and active state for sidebar navigation */}
      <div className="w-20 bg-gray-200 flex flex-col items-center py-8 space-y-8">
        {/* TODO: Create a icon for each of the 3 components imported above
            that follow this format:
            <div className="...">
                <IconName className="..." />
            </div>
            
            Each icon should have:
            - 2 units of padding on all sides
            - Width and height of 6 units
            
            Refer to Tailwind CSS documentation for more details:
            https://tailwindcss.com/docs/padding
            https://tailwindcss.com/docs/width
            https://tailwindcss.com/docs/height
        */}
        
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* TODO: Dynamically add courseTitle here */}
        <h1 className="text-3xl font-bold text-center mb-8">...</h1>

        <div className="space-y-4 max-w-3xl mx-auto">
          {/* TODO: Dynamically loop through courseSections, generating a <div> for each one 
          that follows this format:
            <div key={index} className="...">
              <h2 className="...">{title}</h2>
              <p className="...">{content}</p>
            </div>
          
          Each section should have:
          - Light gray background
          - 4 units of padding
          - Rounded corners
          - Title with semibold font weight
          - 2 units of bottom margin on title
          - Content text in dark gray
          
          Refer to Tailwind CSS documentation for more details:
          https://tailwindcss.com/docs/background-color
          https://tailwindcss.com/docs/padding
          https://tailwindcss.com/docs/border-radius
          https://tailwindcss.com/docs/font-weight
          https://tailwindcss.com/docs/margin
          https://tailwindcss.com/docs/text-color
          */}
        </div>
      </div>
    </div>
  )
}
