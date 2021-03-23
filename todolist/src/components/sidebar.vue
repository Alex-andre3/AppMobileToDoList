<template>
<div> 
      <div v-for="todolist in getTodoLists" v-bind:key="todolist.id">
          <sidebarItem :todolist="todolist" v-on:click='changeTodos(todolist)'/>       
      </div>

      <div>
        <label for="newTodoList">Nouvelle Liste : </label>
        <input type="text" name="newTodoList" v-model="newTodoList" @keyup.enter="createTodolist(newTodoList)">
        <button v-on:click="createTodolist(newTodoList)" >Créer une nouvelle liste</button>
      </div>
      

    <div class="test">
      <h1>{{currentTodolists.name}}</h1>
    <ul>
        <li v-for="todo in filterTodos" :key="todo.id">   
                <input type="checkbox" v-model="todo.completed">
                <label v-bind:style="colorForTodo(todo)"> {{todo.name}} , La tâche est complété : {{todo.completed}}, {{todo.id}} </label>
                <button v-on:click="deleteTodo([currentTodolists.id,todo])" >Supprimer la tâche</button>
        </li>
    </ul>

      
    <label for="newTodoName">Nouvelle tâche : </label>
    <input type="text" name="newTodoName" v-model="newTodoName" @keyup.enter="createTodo([currentTodolists.id,newTodoName])">
    <button v-on:click="createTodo([currentTodolists.id,newTodoName])">Créer</button>
    <br>
    <div class="afficheOrNot" v-if="currentTodos != ''">
    <button v-on:click="filter ='all'">Toutes</button>
    <button v-on:click="filter ='todo'">A faire</button>
    <button v-on:click="filter ='done'">Accomplies</button>
      </div>
    </div>
    
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
            newTodoList: '',
            newTodoName: '',
            filter: 'all'
            
        }
    },
    methods:{
        ...mapActions("todolist",["createTodolist","createTodo","deleteTodo"]),

        changeTodos(todolist){
            this.currentTodolists = todolist;
        },
        colorForTodo(todo){
            if(todo.completed == true){
            return "color:green";
            }
            else{
            return "color:red";
            }

  },
      
    },
    computed:{
        ...mapGetters('todolist',["getTodoLists"]),
        filterTodos(){
            console.log(this.filter);
                return this[this.filter];
        },
        all(){
          return this.currentTodolists.todos;
        },
        done(){
          return this.currentTodolists.todos.filter((todo)=> todo.completed == true);
        },
        todo(){
          return this.currentTodolists.todos.filter((todo)=> todo.completed == false);
        },

        currentTodos(){
            return this.currentTodolists.todos;
        }
    },
    
}

</script>

<style>
.test{
  text-align: center;
}
li {
  list-style: none;
}
</style>