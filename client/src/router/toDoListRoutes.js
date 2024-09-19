import LegacyToDoListView from "@/views/ToDoList/LegacyToDoListView.vue";
import ToDoListView from "@/views/ToDoList/ToDoListView.vue";
export default [
    {
        path: '/localtodolist',
        name: 'localtodolist',
        meta: {
            title: 'Local ToDoList',
            description: 'This is the Local ToDoList page'
        },
        component: LegacyToDoListView
    },
    {
        path: '/toDoList',
        name: 'ToDoList',
        meta: {
            title: 'ToDoList',
            description: 'This is the ToDoList page'
        },
        component: ToDoListView
    },
]