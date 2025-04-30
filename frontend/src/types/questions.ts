export interface QuestionBase {
  prompt: string;
  questionType: 'code' | 'multiple-choice';
  id: number;
}

export interface CodeQuestion extends QuestionBase {
  questionType: 'code';
  languageId: number;
  languageName: string;
  codeTemplate?: string;
  testCases: {
    input: string;
    expectedOutput: string;
    isSample: boolean;
    score: number;
  }[];
}

export interface MultipleChoiceQuestion extends QuestionBase {
  questionType: 'multiple-choice';
  choices: string[];
  correctAnswer: number; // index of the correct answer
}

export type Question = CodeQuestion | MultipleChoiceQuestion;