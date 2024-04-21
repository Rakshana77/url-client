
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const shortenUrl = async (originalUrl) => {
  try {
    const response = await axios.post(`${API_URL}/shorten`, { originalUrl });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to shorten URL');
  }
};

export const getOriginalUrl = async (shortId) => {
  try {
    const response = await axios.get(`${API_URL}/${shortId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to retrieve original URL');
  }
};
