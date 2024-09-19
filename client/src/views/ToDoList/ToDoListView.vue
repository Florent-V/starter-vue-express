<script setup>
import { ref, onMounted } from 'vue';
import { client } from '@/utils/requestMaker.js';
import ToDoListFormComponent from "@/components/ToDoList/ToDoListFormComponent.vue";

const toDoLists = ref([]);
const showForm = ref(false);
const selectedToDo = ref(null); // For editing

const handleFormSubmit = async (data) => {
  if (selectedToDo.value) {
    // Update existing to-do
    const response = await client.put(`/api/todolist/${selectedToDo.value.id}`, data);
    const index = toDoLists.value.findIndex(list => list.id === selectedToDo.value.id);
    toDoLists.value[index] = response.toDoList;
  } else {
    // Create new to-do
    const response = await client.post('/api/todolist', data);
    toDoLists.value.push(response.toDoList);
  }
  closeForm();
};

const openCreateForm = () => {
  selectedToDo.value = null;
  showForm.value = true;
};
const openEditForm = (list) => {
  selectedToDo.value = {...list};
  showForm.value = true;
};

const closeForm = () => {
  selectedToDo.value = null;
  showForm.value = false;
};

const fetchToDoLists = async () => {
  const data = await client.get('/api/todolist');
  toDoLists.value = data.toDoLists;
};

onMounted(fetchToDoLists);

</script>

<template>

  <div class="container mx-auto px-4 py-12">

    <div class="flex justify-between items-center mb-6 px-6">
      <h1 class="text-4xl font-bold my-4 text-center text-blue-800 dark:text-yellow-300">Mes ToDo Listes</h1>
      <!-- Add button -->
      <div v-if="!showForm" class="text-right">
        <button @click="openCreateForm" class="bg-blue-600 dark:bg-yellow-400 text-white px-6 py-3 rounded-full">
          <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"/>
          </svg>
          Ajouter une ToDo Liste
        </span>
        </button>
      </div>
    </div>

    <!-- ToDoForm -->
    <ToDoListFormComponent
        v-if="showForm"
        :initialData="selectedToDo"
        @submit="handleFormSubmit"
        @cancel="closeForm"
    />

    <!--    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-700">-->
    <!--      &lt;!&ndash; Title: Add a new product &ndash;&gt;-->
    <!--      <h2 class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-t-lg text-xl font-semibold">Créer une ToDo List</h2>-->

    <!--      <div class="p-4">-->
    <!--        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">-->
    <!--          &lt;!&ndash; Name field &ndash;&gt;-->
    <!--          <div class="relative order-1">-->
    <!--            <input type="text" id="title" placeholder=" " class="peer border border-gray-300 dark:border-gray-600 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-400 transition w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white" v-model="newtoDoList.title" />-->
    <!--            <label for="title" class="rounded absolute left-3 -top-2 bg-white dark:bg-transparent peer-focus:bg-white dark:peer-focus:bg-gray-800 px-1 text-gray-600 dark:text-gray-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-100 transition-all peer-focus:-top-4 peer-focus:left-3 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400">Titre</label>-->
    <!--          </div>-->

    <!--          &lt;!&ndash; Add button (takes full width in its column) &ndash;&gt;-->
    <!--          <div class="text-right md:text-left order-3 md:order-2">-->
    <!--            <button @click="addToDoList" class="w-full bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 hover:bg-blue-700 dark:hover:bg-yellow-500 px-6 py-3 rounded-lg text-lg transition duration-300 font-semibold">Add</button>-->
    <!--          </div>-->

    <!--          &lt;!&ndash; Description field (second row on desktop, second on mobile as well) &ndash;&gt;-->
    <!--          <div class="relative order-2 md:col-span-2">-->
    <!--            <textarea id="description" rows="4" placeholder=" " class="peer border border-gray-300 dark:border-gray-600 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-yellow-400 transition w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white" v-model="newtoDoList.description"></textarea>-->
    <!--            <label for="description" class="rounded absolute left-3 -top-2 bg-white dark:bg-transparent peer-focus:bg-white dark:peer-focus:bg-gray-800 px-1 text-gray-600 dark:text-gray-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-100 transition-all peer-focus:-top-4 peer-focus:left-3 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400">Description</label>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    spacing div -->
    <div class="h-6"></div>


    <div class="w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-700">

      <!-- Title: Product List -->
      <h2 class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-t-lg text-xl font-semibold">
        ToDo Listes</h2>

      <div class="overflow-x-auto py-4">
        <table class="min-w-full table-auto">
          <thead>
          <tr class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-md">
            <th class="px-6 py-3 text-left">Titre</th>
            <th class="px-6 py-3 text-left">Description</th>
            <th class="px-6 py-3 text-center">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="list in toDoLists" :key="list.id" class="hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            <td class="border-t border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-900 dark:text-gray-300">
              {{ list.title }}
            </td>
            <td class="border-t border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-900 dark:text-gray-300">
              {{ list.description }}
            </td>
            <td class="border-t border-gray-300 dark:border-gray-600 px-6 py-4 text-center">
              <button @click="openEditForm(list)"
                      class="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-500 mr-2">
                <i class="fas fa-edit"></i>
              </button>
              <button class="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-500 mr-2">
                <i class="fas fa-trash-alt"></i>
              </button>
              <button class="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-500">
                <i class="fas fa-eye"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>


<style scoped>
/* Optional styles to make it look nicer */
.container {
  max-width: 1200px;
}

button {
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}
</style>
