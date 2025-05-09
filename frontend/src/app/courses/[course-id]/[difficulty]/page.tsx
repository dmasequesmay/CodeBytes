"use client";

import { useState, useEffect } from "react";
import { LightbulbIcon, HomeIcon, UserIcon } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import AnswerResult from "../../../../components/AnswerResult";
import Results from "../../../../components/Results";
import { useParams } from 'next/navigation';
import { executeCode } from '../../../../services/judge0';

type QuestionType = "code" | "multiple-choice";

interface ProblemProps {
  problemNumber: number;
  prompt: string;
  questionType: QuestionType;
  codeTemplate?: string;
  choices?: string[];
  totalProblems?: number;
  currentProgress?: number;
  language?: string;
}

const lessonDifficulty = {
  easy: 1,
  medium: 2,
  hard: 3,
  extreme: 4
};

export default function ProblemDisplay({
  problemNumber = 1,
  totalProblems = 2,
  currentProgress = 1,
}: ProblemProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswerResult, setShowAnswerResult] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [code, setCode] = useState('');
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [result, setResult] = useState<{ correct?: boolean }>(null);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);  // Dynamic questions
  const params = useParams();
  const difficulty = params.difficulty;
  const courseId = params['course-id'];  // Assuming you have a course-id in params

  if (typeof difficulty !== 'string') {
    throw new Error('Difficulty must be a string');
  }

  const difficultyInt = parseInt(difficulty);

  // Fetching course questions based on the courseId and difficulty level
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}/difficulty/${difficulty}`);
        const data = await response.json();
        setQuestions(data.questions);  // Assuming the response contains the questions
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [courseId, difficulty]);

  const currentQuestionData = questions[currentQuestion];

  if (!currentQuestionData) {
    return <div>Loading...</div>;  // Display a loading state until questions are fetched
  }

  const isCodeQuestion = currentQuestionData.questionType === 'code';

  const handleRunCode = async () => {
    if (isCodeQuestion && !code) return;
    if (!isCodeQuestion && selectedChoice === null) return;

    setLoading(true);
    try {
      if (isCodeQuestion) {
        const question = currentQuestionData;
        const result = await executeCode(code, question.id);
        setResult({
          correct: result.correct
        });
        if (result.correct) {
          handleContinue();
        }
      } else {
        const question = currentQuestionData;
        const isCorrect = selectedChoice === question.correctAnswer;
        setResult({
          correct: isCorrect
        });
        if (isCorrect) {
          handleContinue();
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setResult({
        correct: false
      });
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setCode('');
      setSelectedChoice(null);
      setShowAnswerResult(false);
    }
  };

  const handleChoiceSelect = (index: number) => {
    setSelectedChoice(index);
  };

  if (showResults) {
    return (
      <div className="flex min-h-screen bg-white items-center justify-center">
        <div className="p-8">
          <Results 
            current={currentProgress} 
            total={totalProblems} 
            difficulty={lessonDifficulty[difficultyInt]} 
            subject="[Course Name]" // Get course name from API or state
            message="Great job! You've completed this section." 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 p-8 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-4">Problem {currentQuestion + 1}</h1>

        <div className="w-full max-w-2xl h-6 bg-gray-300 rounded-full mb-8">
          <div 
            className="h-full bg-green-500 rounded-full" 
            style={{ width: `${(currentQuestion + 1) / totalProblems * 100}%` }}
          />
        </div>

        <div className="w-full max-w-2xl mb-6 text-center">
          <p className="text-lg">{currentQuestionData.prompt}</p>
        </div>

        {isCodeQuestion ? (
          <div className="w-full max-w-2xl bg-gray-200 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
            <div className="w-full h-[400px] border rounded-md overflow-hidden">
              <Editor
                height="100%"
                language={currentQuestionData.languageName}
                defaultValue={code}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
                onChange={(value) => setCode(value || '')}
              />
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestionData.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoiceSelect(index)}
                className={`px-4 py-2 rounded ${selectedChoice === index ? 'bg-purple-500 text-white' : 'bg-gray-100'}`}
              >
                {choice}
              </button>
            ))}
          </div>
        )}

        {showAnswerResult && (
          <AnswerResult message={result?.correct ? "Correct!" : "Incorrect"} isSuccess={result?.correct || false} />
        )}

        <div className="mt-6">
          <button
            onClick={handleRunCode}
            disabled={loading}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}
