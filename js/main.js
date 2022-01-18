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
    getOnlyOneClass(element){
      let classList = [];
      if (element.isDone) {
        classList.push('completed')
      } else {
        classList.push('incomplete')
      }
      if (this.todoList.length===1) {
        classList.push('only-one')
      }
      return classList;
    },
    setDone(element) {
      element.isDone = !element.isDone;
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
    addTodo() {
      if (this.newTodo.length>=1){
        this.todoList.push({ text: this.newTodo, isDone: false });
        this.newTodo = "";
        this.errorAddTodo=false
      }else{
        this.errorAddTodo=true;
      }
    },
  },
});
