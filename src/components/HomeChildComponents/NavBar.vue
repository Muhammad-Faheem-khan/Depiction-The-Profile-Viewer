<template>
  <v-navigation-drawer
    color="#9f75b4"
    dark
    permanent
    height="100vh"
    width="100%"
  >
    <v-list>
      <div class="d-flex flex-column align-center my-3">
        <v-img src="../../assets/logo2.png" width="100"></v-img>
        <h3>Taimoor Ali</h3>
        <small>Web Developer</small>
      </div>

      <v-list-item  class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-shield-crown-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Admin</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="link mb-2">
        <v-list-item-icon>
          <v-icon>mdi-shield-crown-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pb-4 text-center">
        <v-btn rounded color="dark">
          <v-icon class="mx-2">mdi-logout-variant</v-icon>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: "NavBar",
};
</script>
<style>
.link {
  transition: ease-in-out 1s;
}
.link:hover {
  background-color: rgb(145, 26, 156);
  color: rgb(255, 251, 251) !important;
  border-radius: 15px 50px;
}
</style>