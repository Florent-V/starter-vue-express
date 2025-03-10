<script setup>
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-blue-900 dark:bg-gray-900 text-white py-12 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">About Techverse</h3>
          <p>A few description about your website. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/">
                Présentation
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/home">
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/product">
                Product
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/toDoList">
                To Do List
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Stay Connected</h3>
          <p class="mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <form class="flex">
            <input
              type="email"
              placeholder="Your email"
              class="flex-grow px-4 py-2 rounded-l-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800"
            >
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; {{ currentYear }} TechVerse. All rights reserved.</p>
      </div>
    </div>
  </footer>

</template>