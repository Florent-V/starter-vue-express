//import { useAuthStore } from '@/stores';
import axios from "axios";

console.log('VITE_API_BASE_URL', import.meta.env.VITE_API_BASE_URL)
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const request = async (requestPromise) => {
  try {
    const response = await requestPromise;
    console.log('Request Maker API response:', response);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la requête:`, error);
    throw error;
  }
};

export const client = {
  get: (url, withCredentials = true) =>
    request(apiClient.get(url, { withCredentials })),
  
  post: (url, data, withCredentials = true) =>
    request(apiClient.post(url, data, { withCredentials })),
  
  put: (url, data, withCredentials = true) =>
    request(apiClient.put(url, data, { withCredentials })),
  
  delete: (url, withCredentials = true) =>
    request(apiClient.delete(url, { withCredentials })),
};
