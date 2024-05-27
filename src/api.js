import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions'h;
const API_KEY = 'Ask-proj-2Pnc9zTZtRst6ChMswUnT3BlbkFJxhHLinr93EJayoIq1tFO';

export const generateContent = async (prompt, type) => {
  const response = await axios.post(API_URL, {
    prompt: `${type}: ${prompt}`,
    max_tokens: 100,
  }, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data.choices[0].text;
};
