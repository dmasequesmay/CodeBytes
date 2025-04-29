// frontend/src/services/judge0.ts
import axios from 'axios';

interface Judge0Submission {
  source_code: string;
  language_id: number;
  stdin?: string;
}

export const executeCode = async (code: string, languageId: number, stdin?: string) => {
  try {
    const response = await axios.post('/execute-code', {
      code,
      languageId,
      stdin
    });
    return response.data;
  } catch (error) {
    console.error('Error executing code:', error);
    throw error;
  }
};