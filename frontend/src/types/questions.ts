export interface QuestionBase {
  prompt: string;
  questionType: 'code' | 'multiple-choice';
}

export interface CodeQuestion extends QuestionBase {
  questionType: 'code';
  languageId: number;
  languageName: string;
  codeTemplate?: string;
  inputOutput: {
    input: string;
    expectedOutput: string;
  };
}

export interface MultipleChoiceQuestion extends QuestionBase {
  questionType: 'multiple-choice';
  choices: string[];
  correctAnswer: number; // index of the correct answer
}

export type Question = CodeQuestion | MultipleChoiceQuestion;