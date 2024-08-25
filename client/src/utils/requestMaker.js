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
    console.log('API response:', response);
    return response.data; // Retourner les données en cas de succès
  } catch (error) {
    // Gestion des erreurs ici
    console.error(`Erreur lors de la requête:`, error);
    throw error; // Propager l'erreur si nécessaire
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

// const myRequestMaker = {
//   get(url, withCredentials = true) {
//     return handleRequest(apiClient.get(url, { withCredentials }));
//   },
//   post(url, data, withCredentials = true) {
//     return handleRequest(apiClient.post(url, data, { withCredentials }));
//   },
//   put(url, data, withCredentials = true) {
//     return handleRequest(apiClient.put(url, data, { withCredentials }));
//   },
//   delete(url, withCredentials = true) {
//     return handleRequest(apiClient.delete(url, { withCredentials }));
//   },
// };


const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

// function request(method) {
//     return (url, body) => {
//         const requestOptions = {
//             method,
//             headers: authHeader(url)
//         };
//         if (body) {
//             requestOptions.headers['Content-Type'] = 'application/json';
//             requestOptions.body = JSON.stringify(body);
//         }
//         return fetch(url, requestOptions).then(handleResponse);
//     }
// }

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.token;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}    
