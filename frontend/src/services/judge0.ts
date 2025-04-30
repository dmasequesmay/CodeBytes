import axios from 'axios';


export const executeCode = async (code: string, problemId: number) => {
  try {
    const response = await axios.post('/execute-code', {
      code,
      problemId
    });
    return response.data;
  } catch (error) {
    console.error('Error executing code:', error);
    throw error;
  }
};