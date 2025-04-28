"use client"

import type React from "react"

import { useState } from "react"
import { LightbulbIcon, HomeIcon, UserIcon } from "lucide-react"
import { Editor } from "@monaco-editor/react"
import  AnswerResult  from "../../../../components/AnswerResult"
import  Results  from "../../../../components/Results"
import { mockQuestions, mockResults } from "../../../../mockData"
import { useParams, useRouter } from 'next/navigation';

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
  totalProblems = 2,
  currentProgress = 1,
}: ProblemProps) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswerResult, setShowAnswerResult] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const params = useParams();
  const difficulty = params.difficulty;

  const handleContinue = () => {
    if (currentQuestion === mockQuestions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleTryNow = () => {
    setShowAnswerResult(true);
    setTimeout(() => {
      setShowAnswerResult(false);
      handleContinue();
    }, 2000);
  };

  const handleChoiceSelect = (index: number) => {
    // Mock selection for multiple choice
    console.log('Selected choice:', index);
  };

  if (showResults) {
    return (
      <div className="flex min-h-screen bg-white">
        <div className="flex-1 p-8">
          <Results {...mockResults} />
          <div className="mt-8">
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = mockQuestions[currentQuestion];
  const { prompt, questionType, codeTemplate, choices } = currentQuestionData;

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 p-8 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-4">Problem {currentQuestion + 1}</h1>
        
        <div className="w-full max-w-2xl h-6 bg-gray-300 rounded-full mb-8">
          <div 
            className="h-full bg-green-500 rounded-full" 
            style={{ width: `${(currentQuestion + 1) / totalProblems * 100}%`}}
          />
        </div>

        {/* TODO: display the prompt within the <p> tag. text should be of size large (lg) */}
        <div className="w-full max-w-2xl mb-6 text-center">
          <p className="text-lg">{prompt}</p>
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
                height="100%"
                language={currentQuestionData.language || "javascript"}
                defaultValue={codeTemplate || "// Start coding here"}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {choices?.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoiceSelect(index)}
                  className="w-full px-4 py-2 bg-white rounded-lg border hover:bg-gray-100"
                >
                  {choice}
                </button>
              ))}
            </div>
          )}
        </div>

        {showAnswerResult && (
          <AnswerResult message="Correct!" isSuccess={true} />
        )}
        
        <div className="mt-6">
          <button
            onClick={handleTryNow}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}
