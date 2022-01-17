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
    getDone(index) {
      if (this.todoList[index].isDone) return "completed";
      else return "incomplete";
    },
    setDone(e) {
      if (e.isDone) e.isDone = false;
      else e.isDone = true;
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
