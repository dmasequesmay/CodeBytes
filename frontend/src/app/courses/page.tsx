"use client"

import { useState } from "react"
import { Search, Home, User, Lightbulb } from "lucide-react"

// TODO: Add interface for CourseProps with required properties
interface CourseProps {
  name: string;
  progress: number;
}

// TODO: Create CourseCard component that displays course progress
const CourseCard = ({ name, progress }: CourseProps) => {
  // TODO: Calculate circle circumference based on radius
  // Radius should be 45 units
  const circumference = 2 * Math.PI * 45;
  
  // TODO: Calculate strokeDashoffset based on progress
  // Formula: circumference - (progress / 100) * circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    // TODO: Create outer container with these properties:
    // - Light gray background
    // - 6 units of padding
    // - Rounded corners
    // - Flex layout with column direction and centered items
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
      {/* TODO: Add course name heading with these properties:
          - Medium font weight
          - Large text size
          - 4 units of bottom margin
          - use name parameter here
      */}
      <h3 className="font-medium text-lg mb-4">{name}</h3>
      
      {/* TODO: Create container for circular progress indicator with:
          - 24 units width and height
          - Relative positioning
      */}
      <div className="w-24 h-24 relative">
        {/* TODO: Add SVG container with:
            - Full width and height
            - Viewbox of 0 0 100 100
        */}
        <svg className="w-full h-full" Viewbox="0 0 100 100">
          {/* TODO: Add background circle with:
              - Gray color (Font size 300)
              - 10 units stroke width
              - Center at 50,50
              - Radius of 45
              - Transparent fill

              https://tailwindcss.com/docs/stroke
          */}
          <circle 
            className="text-gray-300 stroke-current"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            fill="transparent" 
          />
          {/* TODO: Add progress circle with:
              - Green color (Font size 300)
              - 10 units stroke width
              - Round line cap
              - Center at 50,50
              - Radius of 45
              - Transparent fill
              - Dynamic strokeDasharray and strokeDashoffset
              - Rotated -90 degrees around center

              https://tailwindcss.com/docs/stroke
          */}
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
        
        {/* TODO: Add absolute positioned container for percentage text with:
            - Full width and height
            - Flex layout with centered items
        */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          {/* TODO: Add percentage text with:
              - Extra large font size
              - Bold font weight
          */}
          <span className="text-xl font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

export default function CourseLanding() {
  // TODO: Add state management for user name
  const [userName, setUserName] = useState("");
  
  // TODO: Add state management for current course
  const [currentCourse, setCurrentCourse] = useState("");
  // note: this should be the last course the user interacted with; where to update?

  // TODO: Add course data structure with these properties:
  // - name: string (course name)
  // - progress: number (0-100)
  const courses = [
    { name: "Java", progress: 70 },
    { name: "C++", progress: 100 },
    { name: "Python", progress: 55 },
    { name: "React", progress: 20 },
    // static for now; will be getting this info dynamically later
  ]

  return (
    // TODO: Create main container with:
    // - Maximum width of 4xl
    // - Center horizontally
    // - 4 units of padding
    <div className="">
      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          {/* TODO: Create search input container with:
              - Flex layout with centered items
              - White background
              - Rounded corners
              - Border
              - Overflow hidden
          */}
          <div className="">
            {/* TODO: Add search text and initials avatar */}
            <div className="pl-4 pr-2 flex items-center">
              <span className="text-gray-700">Find Course</span>

            </div>
            {/* TODO: Add search input field with:
                - Flex layout with 1 unit
                - 2 units top/bottom padding
                - 4 units left/right padding
                - No outline
            */}
            <input type="text" className="" placeholder="" />
            {/* TODO: Add search button with:
                - Gray background (200)
                - 3 units padding
                - Rounded corners on right side
                - Search icon
            */}
            <button className="">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* User Greeting */}
      {/* TODO: Create user greeting section with:
          - Light gray background (200)
          - 4 units padding
          - Rounded corners
          - 6 units bottom margin
      */}
      <div className="">
        {/* TODO: Add dynamic user greeting text with:
            - Centered text (use in outer <p> tag below)
            - Semi-Bold font weight for user name and course name (use within inner <span>)
        */}
        <p className="">
          Hello <span className=""></span>! You are currently taking{" "}
          <span className=""></span>
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        {/* TODO: Create sidebar with:
            - 20 units width
            - Light gray background (200)
            - Rounded corners
            - 4 units right margin
            - 4 units padding
            - Flex layout with column direction
            - Centered items
            - 8 units spacing between items
        */}
        <div className="">
          <button className="p-2 hover:bg-gray-300 rounded-full">
            <Lightbulb className="h-6 w-6" />
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-full">
            <Home className="h-6 w-6" />
          </button>
          <button className="p-2 hover:bg-gray-300 rounded-full">
            <User className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content */}
        {/* TODO: Create main content area with:
            - Flex layout with 1 unit flex
            - Large heading
            - 4 units bottom margin
        */}
        <div className="flex-1">
          {/* TODO: Add heading<h2> Below: use text "Choose a Course"*/}
          

          {/* Scrollable Course Grid */}
          {/* TODO: Create scrollable container with:
              - Auto overflow in y direction
              - Maximum height of 400 units
              - 2 units right padding
          */}
          <div className="">
            {/* TODO: Create grid layout with:
                - 2 columns
                - 4 units gap between items
            */}
            <div className="">
              {/* TODO: Map through courses and render CourseCard component */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
