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
            { id: 7, title: "Write code", isFav: false },
            { id: 8, title: "Learn a new language", isFav: false },
            { id: 9, title: "Watch a movie", isFav: false },
            { id: 10, title: "Take a walk", isFav: false }
        ]
    })
})