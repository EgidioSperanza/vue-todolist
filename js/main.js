new Vue({
    el: "#app",
    data:{
        todoList:[
            {
                text: "Fare la spesa",
                isDone: false
            },
            {
                text: "Telefonare il meccanico per riparazione auto",
                isDone: false
            },
            {
                text: "Pagare affitto",
                isDone: false
            }
        ],
    },
    methods:{
        getDone(index){
            if (this.todoList[index].isDone)
                return "completed";
            else return "incomplete";
        },
        setDone(e){
            e.isDone ? e.isDone=false : e.isDone=true;
        },
        deleteTodo(index){
            this.todoList.splice(index, 1);
        }
    }
});  