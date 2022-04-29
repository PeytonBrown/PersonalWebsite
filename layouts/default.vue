<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
    <router-link to="/" style="text-decoration: none; color: inherit;">
    <v-avatar class="mx-2"
     size="42">
      <img
        src="../static/Avatar.png"
        alt="Peyton Brown"
      >
    </v-avatar>
    Peyton Brown
    </router-link>

    <v-spacer/>
    <v-btn
        depressed
        outlined
        color="orange"
        to="/projects"
      >
      Projects
    </v-btn>

    </v-app-bar>
    <v-main>
        <Nuxt />
    </v-main>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Peyton Brown</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
