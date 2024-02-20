// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {

        return {
            // tutti i nostri dati
            mainTitle: "to do list",

            newTodo: [
                { title: "Fare la spesa", done: false },
                { title: "Fare il bucato", done: true },
                { title: "Fare il letto", done: false },
                { title: "Fare la doccia", done: true },
                { title: "Fare la cena", done: false },
            ],
        }
    },

    methods: {
        deleteTask(TaskIndex) {
            this.newTodo.splice(TaskIndex, 1);
        },

    },

}).mount("#app");
// ******** VUE ********