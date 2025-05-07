export interface QuestionBase {
  id: number;
  question: string;
  difficulty: string;
  source: string;
  is_coding: boolean;
}

export interface CodeQuestion extends QuestionBase {
  is_coding: true;
  language: string;
  judge0_language_id: number;
  time_limit: number;
  memory_limit: number;
  answers: {
    id: number;
    input: string;
    expected_output: string;
    is_sample: boolean;
    score: number;
  }[];
}

export interface MultipleChoiceQuestion extends QuestionBase {
  is_coding: false;
  answers: {
    id: number;
    choice_text: string;
    is_correct: boolean;
    choice_order: number;
  }[];
}

export type Question = CodeQuestion | MultipleChoiceQuestion;