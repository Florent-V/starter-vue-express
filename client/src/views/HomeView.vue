<script setup>
import { ref, onMounted } from 'vue';
import { client } from '@/utils/requestMaker.js';

import WelcomeComponent from '@/components/WelcomeComponent.vue'

// Déclaration des variables réactives
const data = ref(null);
const error = ref(null);

// Fonction pour récupérer les données
const fetchData = async () => {
  try {
    data.value = await client.get('/');
    console.log('data', data.value)
  } catch (err) {
    error.value = 'Erreur lors de la récupération des données';
  }
};

// Appeler fetchData lorsque le composant est monté
onMounted(fetchData);

// test axios
</script>

<template>
  <main>
    <WelcomeComponent />
  </main>
  <p>{{ data }}</p>
</template>
