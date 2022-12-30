<template>
  <div>
    <!--Responsive-View-Navbar-->
    <v-app>
      <!--App-Bar-->
      <v-app-bar color="#9f75b4" height="80" dark class="hidden-md-and-up">
        <!--Logo-Image-->
        <div class="d-flex">
          <v-img
            src="../assets/logo2.png"
            width="100"
            height="100"
            contain
          ></v-img>
          <v-toolbar-title class="mt-9">Depiction</v-toolbar-title>
        </div>
        <v-spacer></v-spacer>
        <!--Search-Field-->
        <v-text-field
          append-icon="mdi-magnify"
          label="Search"
          single-line
          outlined
          class="mt-6 rounded-pill hidden-xs-only"
        ></v-text-field>
        <v-app-bar-nav-icon
          class="mr-2"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <!--Toggle-Button-->
      <v-navigation-drawer
        color="#9f75b4"
        width="220"
        v-model="drawer"
        dark
        absolute
        left
        temporary
      >
        <NavBar />
      </v-navigation-drawer>
      <div class="hidden-sm-and-down navbar">
        <NavBar />
      </div>
      <!--Dashboard-Route-->
      <v-container class="main">
        <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import NavBar from "../components/HomeChildComponents/NavBar.vue";
export default {
  name: "HomePage",
  created() {
    this.$store.dispatch('friendListData')
    this.$store.dispatch('getUserData')
  },
  components: {
    NavBar,
  },
  data() {
    return {
      drawer: false,
    }
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20%;
}

.main {
  width: 80%;
  margin-left: 20%;
}

@media screen and (max-width:959px) {
  .main {
    width: 100%;
    margin-left: 0;
  }
}
</style>
