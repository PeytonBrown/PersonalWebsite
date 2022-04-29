<template>
  <v-container fill-height>
    <v-row style="height: 90%" justify="center" align="center">
      <v-card class="justify-center" color="rgb(0, 0, 0, 0.0)" elevation="0">
        <div class="d-flex">
          <v-avatar size="175" class="mx-auto">
            <img src="../static/Avatar.png" alt="Peyton Brown" />
          </v-avatar>
        </div>
        <v-card-title class="justify-center"> Hey, I'm Peyton </v-card-title>
        <v-card-text class="justify-center">
          Software Engineer, B.S. degree in Cybersecurity, C/C++, C#,
          Javascript, and Python.
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="#BC2F4E" to="/projects">
            See what I've been working on
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row align="end" justify="center">
      <SocialIcon icon="github"
      link="https://github.com/PeytonBrown"
      />
      <SocialIcon
        icon="linkedin"
        link="https://www.linkedin.com/in/peyton-brown-892b49220/"
      />
      <SocialIcon
        icon="youtube"
        link="https://www.youtube.com/channel/UCy4ktkDjS6EPZvz_wCzGGog"
      />
      <SocialIcon icon="twitter"
      link="https://twitter.com/ImPeytonBrown"
      />
      <SocialIcon icon="instagram"
      link="https://instagram.com/ImPeytonBrown"
      />
    </v-row>
  </v-container>
</template>


<script>
import SocialIcon from "../components/SocialIcon.vue";
export default {
  data() {
    return {};
  },
};
</script>