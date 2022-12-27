<template>
  <v-container class="mt-16">
    <v-row class="text-center d-flex">
      <v-col cols="12">
        <v-icon class="icon-key" size="50">mdi-key-variant</v-icon>
      </v-col>

      <v-col class="mb-1" cols="12">
        <h1 class="display-1 font-weight-bold mb-3">Forget Password?</h1>

        <p class="subheading font-weight-regular">
          No worries we will send you reset instructions
        </p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <label>Email</label>
        <v-text-field class="mt-1" outlined label="Enter your Email">
        </v-text-field>
        <v-btn block color="primary">Reset Password</v-btn>
      </v-col>
    </v-row>
    <div class="d-flex justify-center mt-4">
      <v-btn text> <v-icon>mdi-arrow-left-thin</v-icon> Back to Log In </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ComponentOne",

  data: () => ({}),
};
</script>
<style scoped>
.icon-key {
  color: rgb(152, 45, 188);
  border-radius: 50%;
  background-color: rgba(239, 227, 253);
  padding: 8px;
  outline: 8px solid rgb(247, 243, 254);
}
</style>
