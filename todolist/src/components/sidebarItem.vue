<template>
    <p> - {{todolist.name}} ( Nombre de tâche restantes à faire : {{remainingTodosByList(todolist.id)}})</p>
</template>

<script>
import { mapGetters} from "vuex"

export default {
    name: "sidebarItem",
    props:['todolist'],
    computed:{
        ...mapGetters("todolist",["remainingTodosByList"])
    }
}
</script>
