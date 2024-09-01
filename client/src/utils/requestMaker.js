import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

console.log('VITE_API_BASE_URL', import.meta.env.VITE_API_BASE_URL)
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const authStore = useAuthStore();
      await authStore.logout();
      // Rediriger vers la page de connexion si nécessaire
      // router.push('/login');
    }
    return Promise.reject(error);
  }
);

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
   // Méthodes spécifiques pour l'envoi de fichiers
  postWithFile: (url, formData, withCredentials = true) =>
    request(apiClient.post(url, formData, {
      withCredentials,
      headers: { 'Content-Type': 'multipart/form-data' },
    })),

  patchWithFile: (url, formData, withCredentials = true) =>
    request(apiClient.patch(url, formData, {
      withCredentials,
      headers: { 'Content-Type': 'multipart/form-data' },
    })),
};
