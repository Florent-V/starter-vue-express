<script setup>
import { ref, onMounted } from 'vue';
import { client } from '@/utils/requestMaker.js';

// State for dark mode
const isDarkMode = ref(document.documentElement.classList.contains('dark'));

// Toggle dark mode
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  isDarkMode.value = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

// Features data
const features = ref([]);

// Testimonials data
const testimonials = ref([]);

// Fetch features from API
onMounted(async () => {
  try {
    const [featuresResponse, testimonialsResponse] = await Promise.all([
      client.get('/api/feature'),
      client.get('/api/testimonial')
    ]);

    console.log("Features Data:", featuresResponse);
    console.log("Testimonials Data:", testimonialsResponse);

    features.value = featuresResponse.features;
    testimonials.value = testimonialsResponse.testimonials;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <div :class="{'dark': isDarkMode}" class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <!-- Navbar -->
    <nav class="bg-white dark:bg-gray-800 shadow-md">
      <div class="container mx-auto p-4 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400">MonSaaS</h1>
        <!-- Dark/Light Mode Toggle -->
        <button @click="toggleDarkMode"
                class="darkMode relative inline-flex items-center justify-center w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300 focus:outline-none">
            <span v-if="isDarkMode"
                  class="w-4 h-4 bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 translate-x-6">🌜</span>
          <span v-else
                class="w-4 h-4 bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 translate-x-0">🌞</span>
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-24">
      <div class="container mx-auto text-center">
        <h2 class="text-6xl font-bold mb-4">Transformez Votre Productivité</h2>
        <p class="text-xl mb-8">Optimisez votre gestion de projets avec notre plateforme intuitive.</p>
        <button class="bg-white text-purple-500 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition">Essai Gratuit</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto py-20">
      <h3 class="text-5xl font-bold text-center mb-16">Pourquoi Nous Choisir ?</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="feature in features" :key="feature.id" class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <div class="text-blue-500 dark:text-blue-400 mb-4">
            <!-- Icône ici -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm2-12h-4v4h-2V8H8v4H6V8H4v6h12V8z" />
            </svg>
          </div>
          <h4 class="text-3xl font-semibold mb-2">{{ feature.name }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gray-100 dark:bg-gray-900 py-20">
      <div class="container mx-auto text-center">
        <h3 class="text-5xl font-bold mb-16">Ce que Disent Nos Clients</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
            <p class="italic text-lg mb-4">"{{ testimonial.content }}"</p>
            <div class="flex items-center justify-center">
              <img :src="testimonial.avatar || 'https://i.pravatar.cc/150?img=3'" alt="Avatar" class="w-12 h-12 rounded-full mr-4">
              <p class="font-semibold text-blue-500 dark:text-blue-400">{{ testimonial.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-indigo-600 text-white text-center py-20">
      <div class="container mx-auto">
        <h3 class="text-5xl font-bold mb-4">Prêt à Commencer ?</h3>
        <p class="text-lg mb-8">Rejoignez-nous et découvrez comment nous pouvons transformer votre façon de travailler.</p>
        <button class="bg-white text-indigo-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition">S'inscrire Maintenant</button>
      </div>
    </section>
  </div>
</template>


<style scoped>
button.darkMode {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button.darkMode span {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>