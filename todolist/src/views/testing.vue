<template>
<div>
    <div class="testing">
      <h1>This is an testing page</h1>
    </div>
    <p> {{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <ul>

    <li v-for="todo in getTodolists" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" color="dark">
      <label v-bind:style="colorForTodo(todo)"> {{todo.name}} , La tâche est complétée : {{todo.completed}}</label>
      <button v-on:click="suppTodo(todo)" >Supprimer la tâche</button>
    </li>
  </ul>  

  <sidebar></sidebar>

</div>
</template>

<script>
import sidebar from "@/components/sidebar";
import { mapActions, mapState, mapGetters} from 'vuex'
export default ({
    name:"testing",
    component: {sidebar},
    methods: {
        ...mapActions("todolist",['increment','decrement','suppTodo']),
        colorForTodo(todo){
    if(todo.completed == true){
      return "color:green";
    }
    else{
      return "color:red";
    }
  }
 
    },
    computed: {
        ...mapState("todolist", ['count']),
        ...mapGetters("todolist",['getTodolists'])
    }

})
</script>

