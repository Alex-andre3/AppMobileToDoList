<template>
<div>
    <div class="testing">
      <h1>This is an testing page</h1>
    </div>

  <sidebar />

</div>
</template>

<script>
import sidebar from "../components/sidebar";
import { mapActions, mapState, mapGetters} from 'vuex'
export default ({
    name:"testing",
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

