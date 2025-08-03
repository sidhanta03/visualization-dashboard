import axios from 'axios';

const API_URL = 'http://localhost:5000/api/insights'; // Update if deployed

export const fetchInsights = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
