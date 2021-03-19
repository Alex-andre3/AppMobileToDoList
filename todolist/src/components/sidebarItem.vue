<template>
    <p> {{todolist.name}} ( {{remainingTodosByList(todolist.id)}})</p>
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
