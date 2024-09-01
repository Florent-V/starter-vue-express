<script setup>
import { reactive, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductFormComponent from '@/components/Product/ProductFormComponent.vue';
import { client } from '@/utils/requestMaker.js';

const route = useRoute();
const state = reactive({
  isEditMode: !!route.params.id,
  product: {
    name: '',
    price: null,
    description: '',
    image: null,
    available: false,
    quantity: null,
    releaseDate: ''
  }
});

onMounted(async () => {
  if (state.isEditMode) {
    try {
      const data = await client.get(`/api/product/${route.params.id}`);
      // Mettre à jour l'objet product entier
      state.product = { ...data };
      console.log('product in productFormView', state.product);
    } catch (error) {
      console.error("Erreur lors de la récupération du produit", error);
    } 
  } 
});

// Utilisez computed pour créer une version réactive de product
const productComputed = computed(() => state.product);
</script>

<template>
  <ProductFormComponent
    :product="productComputed"
    :isEditMode="state.isEditMode"
  />
</template>

<!-- Ref version
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductFormComponent from '@/components/Product/ProductFormComponent.vue';
import { client } from '@/utils/requestMaker.js';

const route = useRoute();
const isEditMode = ref(!!route.params.id);
const product = ref({
  name: '',
  price: null,
  description: '',
  image: null,
  available: false,
  quantity: null,
  releaseDate: ''
});

console.log('route.params.id', route.params.id);

onMounted(async () => {
  if (isEditMode.value) {
    try {
      const data = await client.get(`/api/product/${route.params.id}`);
      product.value = data;
      console.log('product in productFormView', product.value);
    } catch (error) {
      console.error("Erreur lors de la récupération du produit", error);
    } 
  } 
});
</script>

<template>
  <ProductFormComponent
    :product="product"
    :isEditMode="isEditMode"
  />
</template>
-->
