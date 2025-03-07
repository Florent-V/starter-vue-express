<script setup>
import { RouterView } from 'vue-router'
import PWABadge from '@/components/PWABadge.vue'
</script>

<template>
    <main class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <RouterView />
    </main>
    <PWABadge />
</template>

<style scoped>
#mainFrame {
  min-height: 70vh;
}

</style>
