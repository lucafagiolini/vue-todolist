// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {


        return {
            // tutti i nostri dati
            mainTitle: "to do list",

            newTask: "",


            taskList: [

            ],
        }
    },

    methods: {
        deleteTask(TaskIndex) {
            this.taskList.splice(TaskIndex, 1);
        },

        addTask() {
            this.taskList.push({ title: this.newTask, done: false });
            console.log(this.newTask);
            console.log(this.taskList);
            this.newTask = "";

        }
    },





}).mount("#app");
// ******** VUE ********