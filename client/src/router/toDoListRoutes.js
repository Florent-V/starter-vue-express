import ToDoListView from "@/views/ToDoList/ToDoListView.vue";

export default [
    {
        path: '/todolist',
        name: 'toDolist',
        meta: {
            title: 'ToDoList',
            description: 'This is the ToDoList page'
        },
        component: ToDoListView
    },
]