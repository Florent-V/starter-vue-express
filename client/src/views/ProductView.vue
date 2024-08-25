<script setup>
import { reactive, ref, onMounted } from 'vue';
import { client } from '@/utils/requestMaker.js';

const product = reactive({
  name: 'Awesome Product'
});

const plans = reactive([
  {
    name: 'Free',
    price: '$0/month',
    features: [
      { name: 'Basic Support', included: true },
      { name: 'Access to Basic Features', included: true },
      { name: 'Advanced Analytics', included: false },
      { name: 'Custom Branding', included: false }
    ]
  },
  {
    name: 'Pro',
    price: '$20/month',
    features: [
      { name: 'Priority Support', included: true },
      { name: 'Access to All Features', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Custom Branding', included: false }
    ]
  },
  {
    name: 'Enterprise',
    price: '$50/month',
    features: [
      { name: 'Dedicated Support', included: true },
      { name: 'Access to All Features', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Custom Branding', included: true }
    ]
  }
]);

// Déclaration des variables réactives
const data = ref(null);
const error = ref(null);

// Fonction pour récupérer les données
const fetchData = async () => {
  try {
    data.value = await client.get('/api/product');
    console.log('data', data.value)
  } catch (err) {
    error.value = 'Erreur lors de la récupération des données';
  }
};

// Appeler fetchData lorsque le composant est monté
onMounted(fetchData);











</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div class="product-page text-center">
      <h1 class="text-4xl mb-8">{{ product.name }}</h1>
      <div class="flex flex-wrap justify-center gap-8">
        <div class="bg-gray-800 dark:bg-gray-700 text-white p-6 rounded-lg shadow-md w-64" v-for="(plan, index) in plans" :key="index">
          <h2 class="text-2xl font-semibold mb-4">{{ plan.name }}</h2>
          <p class="text-xl text-yellow-400 mb-6">{{ plan.price }}</p>
          <ul class="list-none p-0">
            <li class="flex items-center mb-3" v-for="(feature, index) in plan.features" :key="index">
              <span :class="{'text-green-500': feature.included, 'text-red-500': !feature.included}">
                {{ feature.included ? '✔️' : '❌' }}
              </span>
              <span class="ml-2">{{ feature.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-page {
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
