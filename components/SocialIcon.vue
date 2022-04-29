<template>
    <v-btn  class="mx-2"
              fab
              medium
              dark
              :href="link"
              target="_blank"
            >
            
            <v-icon> {{ `mdi-${icon}` }} </v-icon>
            </v-btn>

</template>

<script>
export default {
    props: {
        icon: String,
        link: String,
    },
  data () {
    return {

    }
  }
}
</script>