import axios from 'axios';

interface Judge0Submission {
  source_code: string;
  language_id: number;
  stdin?: string;
  expected_output?: string;
  cpu_time_limit?: number;
  memory_limit?: number;
  number_of_runs?: number;
}

export class Judge0Service {
  private readonly baseUrl = 'https://judge0-ce.p.rapidapi.com';
  private readonly headers = {
    'X-RapidAPI-Key': process.env.JUDGE0_API_KEY!,
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  };

  async submitCode(submission: Judge0Submission) {
    try {
      const response = await axios.post(`${this.baseUrl}/submissions`, submission, {
        headers: this.headers
      });
      return response.data;
    } catch (error) {
      console.error('Judge0 API Error:', error);
      throw error;
    }
  }

  async getSubmissionStatus(token: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/submissions/${token}`, {
        headers: this.headers
      });
      return response.data;
    } catch (error) {
      console.error('Judge0 API Error:', error);
      throw error;
    }
  }

  async submitAndCheckStatus(submission: Judge0Submission) {
    const result = await this.submitCode(submission);
    const token = result.token;

    // Wait for the submission to complete
    let status = await this.getSubmissionStatus(token);
    while (status.status.id < 3) { // 3 means "judging"
      await new Promise(resolve => setTimeout(resolve, 1000));
      status = await this.getSubmissionStatus(token);
    }

    return {
      status: status.status.description,
      output: status.stdout,
      correct: status.status.id === 3
    };
  }

  async submitMultipleAndCheckStatus(submissions: Judge0Submission[]) : Promise<boolean> {
    const results = await Promise.all(
      submissions.map(submission => this.submitAndCheckStatus(submission))
    );
    for (let i = 0; i < results.length; i++) {
      if (!results[i].correct) {
        return false;
      }
    }
    return true;
  }
}