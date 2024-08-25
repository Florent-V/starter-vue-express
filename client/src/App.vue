<script setup>
import { RouterView } from 'vue-router'
import PWABadge from '@/components/PWABadge.vue'
import HeaderNavbar from '@/components/HeaderNavbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <HeaderNavbar />
    <PWABadge />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
