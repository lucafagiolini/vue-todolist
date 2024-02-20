// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {
        return {
            // tutti i nostri dati
            mainTitle: "to do list",

            newTodo: [
                { title: "Fare la spesa", completed: false },
                { title: "Fare il bucato", completed: false },
                { title: "Fare il letto", completed: false },
                { title: "Fare la doccia", completed: false },
                { title: "Fare la cena", completed: false },
            ],
        }
    }
}).mount("#app");
// ******** VUE ********