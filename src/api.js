import axios from 'axios';

const API_URL = 'https://api.openai.com/';
const API_KEY = 'API_KEY';

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
