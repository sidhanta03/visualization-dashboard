import axios from 'axios';

const API_URL = 'https://visualization-dashboard-backend-ehib.onrender.com/api/insights'; // Update if deployed

export const fetchInsights = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
