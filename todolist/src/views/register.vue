<template>
<div>
  <div class="register">
    <h1>Register</h1>
  </div>
  <div>
    <label for="user">Nom d'utilisateur  : </label>
    <input type="text" name="user" v-model="user">
    <label for="email">E-mail : </label>
    <input type="text" name="email" v-model="email">
    <label for="password">Mot de passe : </label>
    <input type="text" name="password" v-model="password">
    <button v-on:click="register">Créer</button>
  </div>
</div>
</template>

<script>

import { mapActions} from 'vuex'
export default ({
    name:"register",
    methods: {
        ...mapActions("account",['register']),
    },
    computed: {

    }

})

</script>