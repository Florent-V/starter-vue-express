<script setup>
import { ref } from 'vue';

// State for dark mode
const isDarkMode = ref(false);

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <div :class="{'dark': isDarkMode}" class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <!-- Navbar -->
    <nav class="bg-white dark:bg-gray-800 shadow-md">
      <div class="container mx-auto p-4 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400">MonSaaS</h1>
        <button @click="toggleDarkMode" class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          {{ isDarkMode ? 'Thème Clair' : 'Thème Sombre' }}
        </button>
      </div>
    </nav>

    <!-- Pricing Section -->
    <section class="container mx-auto py-20">
      <h2 class="text-5xl font-bold text-center mb-16">Nos Plans de Tarification</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Basic Plan -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-green-500">
          <h3 class="text-3xl font-semibold mb-4">Basic</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6">Idéal pour les débutants</p>
          <p class="text-5xl font-bold mb-6">Gratuit</p>
          <ul class="mb-6 space-y-2">
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Gestion de Projets</li>
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Suivi du Temps</li>
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Facturation de Base</li>
          </ul>
          <button class="w-full bg-green-500 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition">Choisir Basic</button>
        </div>

        <!-- Premium Plan -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-blue-500">
          <h3 class="text-3xl font-semibold mb-4">Premium</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6">Parfait pour les freelances établis</p>
          <p class="text-5xl font-bold mb-6">19,99€ / mois</p>
          <ul class="mb-6 space-y-2">
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Toutes les fonctionnalités Basic</li>
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Collaboration</li>
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Rapports Avancés</li>
          </ul>
          <button class="w-full bg-blue-500 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition">Choisir Premium</button>
        </div>

        <!-- Enterprise Plan -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-purple-500">
          <h3 class="text-3xl font-semibold mb-4">Enterprise</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6">Solution pour les grandes équipes</p>
          <p class="text-5xl font-bold mb-6">49,99€ / mois</p>
          <ul class="mb-6 space-y-2">
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Toutes les fonctionnalités Premium</li>
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Support Prioritaire</li>
            <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Intégrations Personnalisées</li>
          </ul>
          <button class="w-full bg-purple-500 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition">Choisir Enterprise</button>
        </div>
      </div>
    </section>
  </div>
</template>



<style scoped>
/* Add any additional styles here */
</style>
