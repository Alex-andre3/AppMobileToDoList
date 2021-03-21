<template>
<div>

    <ul>
        <li v-for="todolist in getTodoLists" v-bind:key="todolist.id">
            <sidebarItem :todolist="todolist" v-on:click='changeTodos(todolist)'/>
            
        </li>
    </ul>


    <ul>
        <li v-for="todo in currentTodos" :key="todo.id">   
                <input type="checkbox" v-model="todo.completed">
                <label v-bind:style="colorForTodo(todo)"> {{todo.name}} , La tâche est complété : {{todo.completed}}</label>
                <button v-on:click="suppTodo(todo)" >Supprimer la tâche</button>
        </li>
    </ul>

     <div>
   
    <button v-on:click="filter ='all'">Toutes</button>
    <button v-on:click="filter ='todo'">A faire</button>
    <button v-on:click="filter ='done'">Accomplies</button>
  </div>
    
    <button> Créer une nouvelle liste</button>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import sidebarItem from "@/components/sidebarItem"

export default {
    name:"sidebar",
    components:{sidebarItem},
    data (){
        return {
            currentTodolists : [],
            
        }
    },
    methods:{
        ...mapActions("todolist",["createTodolist"]),

        changeTodos(todolist){
            console.log(todolist.name)
            this.currentTodolists = todolist;
            console.log(this.currentTodolists)
        },
        colorForTodo(todo){
            if(todo.completed == true){
            return "color:green";
            }
            else{
            return "color:red";
            }
  },
//   suppTodo(todo){
//     console.log("la todo s'appelle ",todo.name);
//     const index = this.currentTodolists.indexOf(todo);
//     console.log(this.currentTodolists.splice(index,1));
//     this.id --;
//   },
  createNewTodo(){
    this.id ++;
    this.todos.push({
      id: this.id,
      name: this.newTodoName,
      completed: false
    });
    this.newTodoName = '';
  }
        // selectList(id){
        //     console.log("click");
        //     this.$emit("change-selected-list",id)
        // }
    },
    computed:{
        ...mapGetters('todolist',["getTodoLists","getListByID"]),
        filterTodos(){
            console.log(this.filter);
                return this[this.filter];
  },
  all(){
    return this.currentTodolists;
  },
  done(){
    return this.currentTodolists.filter((todo)=> todo.completed == true);
  },
  todo(){
    console.log("salt");
    return this.currentTodolists.filter((todo)=> todo.completed == false);
  },
  numberTodosDone(){
    let cpt = 0;
    for (let i = 0; i < this.currentTodolists.length; i++) {     
      if(this.currentTodolists[i].completed == false){
        cpt++;
      }    
  }
  return cpt;
  },
  currentTodos(){
      return this.currentTodolists.todos;
  }
    },
    
}

</script>
