"use client"

import type React from "react"

import { useState } from "react"
import { LightbulbIcon, HomeIcon, UserIcon } from "lucide-react"
import { Editor } from "@monaco-editor/react"

type QuestionType = "code" | "multiple-choice"

interface ProblemProps {
  problemNumber: number
  prompt: string
  questionType: QuestionType
  codeTemplate?: string
  choices?: string[]
  totalProblems?: number
  currentProgress?: number
  language?: string
}

export default function ProblemDisplay({
  problemNumber = 1,
  prompt = "Write a function that returns the sum of two numbers",
  questionType = "code",
  codeTemplate = "function sum(a, b) {\n  // Your code here\n}",
  choices = ["Option 1", "Option 2", "Option 3", "Option 4"],
  totalProblems = 10,
  currentProgress = 3,
  language = "javascript",
}: ProblemProps) {
  const [code, setCode] = useState(codeTemplate)
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)

  const handleCodeChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value)
    }
  }

  const handleChoiceSelect = (index: number) => {
    setSelectedChoice(index)
  }

  const handleTryNow = () => {
    console.log("Try Now clicked")
    // Implement code execution or choice validation
  }

  const handleContinue = () => {
    console.log("Continue clicked")
    // Implement navigation to next problem
  }

  // TODO: Calculate progress percentage
  const progressPercentage = null;

  return (
    <div className="flex min-h-screen bg-white">

      {/* Main content */}
      <div className="flex-1 p-8 flex flex-col items-center">
        {/* TOOD: Dynamically display the current problem number (Problem N)
        adjust styling to reflect the Midfis */}
        <h1 className=""></h1>

        {/* TODO: Dynamically display the progress bar (width = progressPercentage)
        adjust styling to reflect the Midfis */}
        <div className="w-full max-w-2xl h-6 bg-gray-300 rounded-full mb-8">
          <div className="" style={{}} />
        </div>

        {/* TODO: display the prompt within the <p> tag. text should be of size large (lg) */}
        <div className="w-full max-w-2xl mb-6 text-center">
          <p className=""></p>
        </div>

        {/* TODO: display the question area */}
        <div className="w-full max-w-2xl bg-gray-200 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
          {questionType === "code" ? (
        <div className="w-full h-[400px] border rounded-md overflow-hidden">
          {/* TODO: Implement the editor
          
          height should take up the remaining space,
          should use the language parameter,
          use a medium font size (12-16)*/}
          <Editor
            height=""
            language={}
            defaultValue="// Start coding here"
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: ,
            }}
          />
        </div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {choices.map((choice, index) => (
                <button
                  key={index}
                  className={`p-4 rounded-md text-left ${
                    selectedChoice === index ? "bg-green-500 text-white" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => handleChoiceSelect(index)}
                >
                  {choice}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TODO: display the action buttons 
        
        Implement the onClick listener functions 
        (use the handle funcs defined above)*/}
        <div className="flex space-x-4">
          <button
            className="px-8 py-3 bg-gray-400 hover:bg-gray-500 text-black font-medium rounded-md"
            onClick={}
          >
            Try Now
          </button>
          <button
            className="px-8 py-3 bg-gray-400 hover:bg-gray-500 text-black font-medium rounded-md"
            onClick={}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

