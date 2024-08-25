<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';


// const data = ref(null); // On initialise la référence réactive pour les données
// console.log('VUE_APP_API_URL', import.meta.env.VITE_CLIENT_PORT)
// onMounted(async () => {
//   try {
//     const response = await axios.get(import.meta.env.VITE_APP_API_URL);
//     console.log('response', response.data)
//     data.value = response.data; // On assigne les données lorsqu'elles sont disponibles
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// });


</script>

<template>

    <h2 class="text-3xl font-bold mb-4">Bienvenue sur My Vue Starter</h2>
    <p class="text-gray-700 dark:text-gray-300">
      Ce projet est une base de démarrage pour vos applications Vue.js modernes. Il inclut :
    </p>
    <ul class="list-disc pl-5 mt-4 text-gray-700 dark:text-gray-300">
      <li>Vue 3 avec l'API Composition</li>
      <li>Vue Router pour la navigation</li>
      <li>Tailwind CSS pour un style moderne et réactif</li>
      <li>Un thème clair/foncé facile à basculer</li>
    </ul>
    <p class="mt-4 text-gray-700 dark:text-gray-300">
      Utilisez ce starter pour accélérer le développement de vos applications Vue.js avec les meilleures pratiques et les dernières technologies.
    </p>

</template>

<style scoped>

</style>