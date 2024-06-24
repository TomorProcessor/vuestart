import {defineStore} from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [
            { id: 1, title: "Buy some milk", isFav: false },
            { id: 2, title: "Go for a run", isFav: false },
            { id: 3, title: "Read a book", isFav: false },
            { id: 4, title: "Call a friend", isFav: false },
            { id: 5, title: "Cook dinner", isFav: false },
            { id: 6, title: "Water the plants", isFav: false },
            { id: 7, title: "Write code", isFav: true },
            { id: 8, title: "Learn a new language", isFav: false },
            { id: 9, title: "Watch a movie", isFav: false },
            { id: 10, title: "Take a walk", isFav: true }
        ],
        name: 'Alison Young'
    }),
    getters: {
        favs() {
            return this.tasks.filter((task) => task.isFav);
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        },
        toggleFav(id) {
            const task = this.tasks.find((task) => task.id === id);
            task.isFav = !task.isFav;
        }
    }
})