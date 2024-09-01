import { defineStore } from 'pinia';
import { client } from '@/utils/requestMaker.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    user: localStorage.getItem('user') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(email, password) {
      try {
        console.log('Tentative de connexion...');
        const data = await client.post(
          '/api/auth/signin',
          { email, password }
        );
        console.log('Connexion réussie:', data);
        localStorage.setItem('user', data.username);
        this.user = data.username;
        this.authenticated = true;
        return data;
      } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        throw error;
      }
    },
    async signup(signupForm) {
      try {
        console.log('Tentative d\'inscription...');
        const data = await client.post(
          '/api/auth/signup',
          signupForm
        );
        console.log('Inscription réussie:', data);
        return data;
      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        throw error;
      }
    },
    setToken(token) {
      // this.token = token;
      // Stockage sécurisé du token dans un cookie HttpOnly
      // document.cookie = `authToken=${token}; HttpOnly; Secure; SameSite=Strict`;
      // Configuration d'Axios pour inclure le token CSRF dans les en-têtes
      //axios.defaults.headers.common['X-CSRF-TOKEN'] = getCsrfToken();
    },
    async logout() {
      try {
        console.log('Tentative de déconnexion...');
        await client.post(`/api/auth/logout`, {});
        console.log('Déconnexion réussie');
        localStorage.removeItem('user');
        this.user = null;
        this.authenticated = false;
        document.cookie = 'authToken=; Max-Age=0; path=/; HttpOnly; Secure; SameSite=Strict';
      } catch (error) {
        console.log('Erreur lors de la déconnexion:', error);
      }
    },
    async checkAuth() {
        try {
          console.log('Vérification de l\'authentification...');
          const data = await client.get('/api/auth/check');
          this.authenticated = data.isAuthenticated;
          this.user = data.user.username;
        } catch (error) {
          console.error('Erreur lors de la vérification de l\'authentification:', error);
          this.logout();
        }
    },
    setUser(userData) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    },
  },
  persist: true,
});


// Fonction pour obtenir le jeton CSRF (à implémenter selon votre configuration serveur)
function getCsrfToken() {
  // Logique pour récupérer le jeton CSRF
}