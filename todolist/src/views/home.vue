<template>


<ul>

<li v-for="todo in filterTodos" :key="todo.id">

  <input type="checkbox" v-model="todo.completed" color="dark">
  <label v-bind:style="colorForTodo(todo)"> {{todo.name}} , La tâche est complété : {{todo.completed}}</label>
  <button v-on:click="suppTodo(todo)" >Supprimer la tâche</button>
</li>

</ul>  

Nombres de tâches restantes : {{ numberTodosDone }}
<button v-on:click="filter ='all'">Toutes</button>
<button v-on:click="filter ='todo'">A faire</button>
<button v-on:click="filter ='done'">Accomplis</button>


</template>

<script>

export default ({
name: 'Home',
components: {
},
data (){
  return {
    allChecked: 'false',
    newTodo: '',
    counter: 0,
    todos: [
              {
                id: 1,
                name: 'Faire la vaisselle',
                completed : false 
              },
              {
                id: 2,
                name : 'Aller manger',
                completed: true
              },
              {
                id: 3,
                name : 'Casser une télé',
                completed: true
              },
              {
                id: 4,
                name : 'Courir car c\'est bon pour la santé',
                completed: false
              }
            ],
            
            filter: 'all',

  }
},

methods: {
  colorForTodo(todo){
    if(todo.completed == true){
      return "color:green";
    }
    else{
      return "color:red";
    }
  },
  suppTodo(todo){
    console.log(todo.name);
    const index = this.todos.indexOf(todo);
    console.log(this.todos.splice(index,1));
    
  }
},
computed: {
  


filterTodos(){
  console.log(this.filter);
    return this[this.filter];
  },
  all(){
    return this.todos;
  },
  done(){
    return this.todos.filter((todo)=> todo.completed == true);
  },
  todo(){
    console.log("salt");
    return this.todos.filter((todo)=> todo.completed == false);
  },
  numberTodosDone(){
    let cpt = 0;
    for (let i = 0; i < this.todos.length; i++) {     
      if(this.todos[i].completed == false){
        cpt++;
      }    
  }
  return cpt;
  }
}
});
</script>

<style>
</style>
