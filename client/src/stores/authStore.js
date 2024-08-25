import { defineStore } from 'pinia';
import { client } from '@/utils/requestMaker.js';
const baseUrl = import.meta.env.VITE_API_BASE_URL;
// //const baseUrl = "http://localhost:3002"
// console.log('baseUrl:', baseUrl);

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(email, password) {
      try {
        console.log('Tentative de connexion...');
        console.log('url:', `${baseUrl}/api/auth/signin`);
        const test = await client.get(`/`);
        console.log('test:', test);
        const data = await client.post(
          '/api/auth/signin',
          { email, password }
        );
        console.log('Connexion réussie:', data);
        this.token = data.token;
        this.user = data.username;        
        return data;
      } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        throw error;
      }
    },
    setToken(token) {
      this.token = token;
      // Stockage sécurisé du token dans un cookie HttpOnly
      // document.cookie = `authToken=${token}; HttpOnly; Secure; SameSite=Strict`;
      // Configuration d'Axios pour inclure le token CSRF dans les en-têtes
      //axios.defaults.headers.common['X-CSRF-TOKEN'] = getCsrfToken();
    },
    async logout() {
      await client.post(`${baseUrl}/api/auth/logout`, {});
      this.token = null;
      this.user = null;
      // Supprimer le cookie
      document.cookie = 'authToken=; Max-Age=0; path=/; HttpOnly; Secure; SameSite=Strict';
    },
    async checkAuth() {
      if (this.token) {
        try {
          // Vérifier l'authentification côté serveur
          // Le cookie sera automatiquement envoyé avec la requête
          const response = await client.get('/auth/check');
          this.isAuthenticated = response.data.isAuthenticated;
        } catch (error) {
          this.logout();
        }
      }
    },
    setUser(userData) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    },
  },
});


// Fonction pour obtenir le jeton CSRF (à implémenter selon votre configuration serveur)
function getCsrfToken() {
  // Logique pour récupérer le jeton CSRF
}