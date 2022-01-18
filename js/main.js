new Vue({
  el: "#app",
  data: {
    todoList: [
      {
        text: "Fare la spesa",
        isDone: false,
      },
      {
        text: "Telefonare il meccanico per riparazione auto",
        isDone: false,
      },
      {
        text: "Pagare affitto",
        isDone: false,
      },
    ],
    newTodo: "",
  },
  methods: {
    setDone(element) {
      element.isDone = !element.isDone;
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
    addTodo() {
      this.todoList.push({ text: this.newTodo, isDone: false });
      this.newTodo = "";
    },
  },
});
