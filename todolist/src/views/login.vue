<template>
<div>
  <div class="login">
    <h1>Login</h1>
  </div>
  <div>
    <label for="email">Nom d'utilisateur  : </label>
    <input type="text" name="email" v-model="email">
    <label for="password">Mot de passe : </label>
    <input type="text" name="password" v-model="password">
    <button v-on:click="login">Se connecter</button>
  </div>
</div>
</template>

<script>

import { mapActions } from 'vuex'
export default ({
    name:"login",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions("account",['login'])
    },
    computed: {
    }
})

</script>