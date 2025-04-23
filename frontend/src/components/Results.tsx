"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import { lessonDifficulty } from "../../../backend/app/types/enums"
import ContinueButton from "./ContinueButton"

// Define difficulty settings
const difficultySettings = {
  [lessonDifficulty.easy]: {
    label: "BEGINNER",
    level: "Beginner",
    color: "#00c853",
    image: "/placeholder.svg?height=80&width=80"
  },
  // TODO: Implement the objects for medium, hard, and extreme.
  // Use orange for medium, red for hard, and purple for extreme
  [lessonDifficulty.medium]: {
    label: "",
    level: "",
    color: "",
    image: "/placeholder.svg?height=80&width=80"
  },
  [lessonDifficulty.hard]: {
    label: "",
    level: "",
    color: "",
    image: "/placeholder.svg?height=80&width=80"
  },
  [lessonDifficulty.extreme]: {
    label: "",
    level: "",
    color: "",
    image: "/placeholder.svg?height=80&width=80"
  }
};

interface ResultWindowProps {
  current: number
  total: number
  difficulty: lessonDifficulty
  subject: string
  message:string
}

export default function Results({
  current,
  total,
  difficulty,
  subject,
  message
}: ResultWindowProps) {
  // TODO: Use the difficulty params to get the settings for the window's color and label(s)
  const settings = null;
  
  // TODO: Calculate percentage of the number of problems correct
  const percentage = null;

  // SVG parameters
  const size = 200
  const strokeWidth = 12
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  // TODO: the below const controls how much of the progress bar will be filled. Implement strokeDashoffset such that the percentage of the progress bar filled is equal to the percentage of problems correct.
  const strokeDashoffset = null;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-200 rounded-xl max-w-md mx-auto relative">

      {/* Progress circle */}
      <div className="relative">
        {/* TODO: the svg tag below should use size for dimensions width & height */}
        <svg  className="transform -rotate-90">
          {/* TODO: The two circle elements below should have a center at (size/2, size/2). also use the radius attribute */}
          {/* Background circle */}
          <circle
            
            fill="transparent"
            stroke="#e0e0e0"
            strokeWidth={strokeWidth}
          />

          {/* Progress circle 
          TODO: Integrate the strokeDashoffset const here to have the progress show up visually
          - for stroke, use the color within the settings object
          */}
          <circle
            
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative w-20 h-20 mb-1">
            {/* TODO: use the image found in settings for the belwo <img> */}
            <img src={} alt="Badge" className="object-contain w-full h-full" />
            {/* Ribbon with label */}
            {/* TODO: use the color found in settings for the below <div>'s style attribute */}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-3 py-0.5 text-xs font-bold text-white rounded-sm"
              style={}
            >
              <div className="relative">
                <div
                  className="absolute -left-3 bottom-0 w-3 h-3"
                  style={{
                    
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                ></div>
                <div
                  className="absolute -right-3 bottom-0 w-3 h-3"
                  style={{
                    
                    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                  }}
                ></div>
                {/* TODO: Display the label found in settings here */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Display the percentage */}
      <div className="mt-4 text-4xl font-bold">%</div>

      {/* TODO: Display the message */}
      <div className="mt-1 text-xl font-semibold text-center">
        
      </div>

      {/* TODO: Implement Continue Button. use the image found in settings as well */}
      
    </div>
  )
}
