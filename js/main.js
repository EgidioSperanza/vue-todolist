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
    errorAddTodo: false,
  },
  methods: {
    //flag as completed class
    //When is a single element in Todo List add a class for Border
    getListElClasses(element) {
      let classesList = element.isDone ? "completed" : "incomplete";
      if (this.todoList.length === 1) {
        classesList += ' only-one';
      }
      console.log(classesList);
      return classesList;
    },

    setDone(element) {
      element.isDone = !element.isDone;
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
    addTodo() {
      if (this.newTodo.length >= 1) {
        this.todoList.push({ text: this.newTodo, isDone: false });
        this.newTodo = "";
        this.errorAddTodo = false;
      } else {
        this.errorAddTodo = true;
      }
    },
  },
});
