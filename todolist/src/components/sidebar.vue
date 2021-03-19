<template>
    <h1>Listes</h1>
    <ul>
        <li v-for="todolist in getTodoLists" v-bind:key="todolist.id">
            <sidebarItem :todolist="todolist" v-on:click="selectList(todolist.id)"/>

        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import sidebarItem from "@/components/sidebarItem"

export default {
    name:"sidebar",
    components:{sidebarItem},
    methods:{
        ...mapActions("todolist",["fetchTodoLists","createTodolist"])
    },
    computed:{
        ...mapGetters('todolist',["getTodoLists"])
    }
}

</script>
