<template>
<div>
    <div class="todolist">
      <h1>Votre page avec vos Todolists</h1>
    </div>

  <sidebar />

</div>
</template>

<script>
import sidebar from "../components/sidebar";
import { mapActions, mapState, mapGetters} from 'vuex'
export default ({
    name:"todolist",
    components: {sidebar},
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
        ...mapGetters("todolist",['getTodoLists'])
    }

})
</script>

