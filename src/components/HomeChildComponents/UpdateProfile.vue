<template>
  <div>
    <div>
      <v-img
        max-height="250"
        class="round"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
      <div>
        <v-row>
          <v-col md="8">
            <v-row>
              <v-col class="d-flex justify-start mt-n10">
                <MainUpload />
              </v-col>
            </v-row>
          </v-col>
          <v-col md="4" class="d-flex justify-end">
            <v-btn class="mx-2 my-2 mt-4" depressed> Cancel </v-btn>
            <v-btn depressed dark class="mx-2 my-2 mr-4 mt-4"> Save </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <div>
      <h1 class="mt-6 mb-4 text-h5 ml-3 font-weight-medium text-center">
        Profile Update
      </h1>
      <v-row class="d-flex justify-around">
        <v-col md="3" sm="3" class="d-flex justify-center">
          <h4 class="ma-5">Full Name</h4>
        </v-col>
        <v-col md="8" sm="9" class="d-flex justify-start">
          <v-text-field
            required
            :rules="validation.nameValidation"
            label="First Name"
            color="indigo"
          ></v-text-field>
          <v-text-field
            required
            :rules="validation.nameValidation"
            label="Last Name "
            color="indigo"
            class="ml-4 mr-4"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-around">
        <v-col md="3" sm="3" class="d-flex justify-center">
          <h4 class="ma-5">Email</h4>
        </v-col>
        <v-col md="8" sm="9" class="d-flex justify-start">
          <v-text-field
            :rules="validation.emailValidation"
            color="indigo"
            label="Email"
            class="mr-4"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-around">
        <v-col md="3" sm="3" class="d-flex justify-center">
          <h4 class="ma-5">Password</h4>
        </v-col>
        <v-col md="8" sm="9" class="d-flex justify-start">
          <v-text-field
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="validation.passwordValidation"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 8 characters"
            counter
            color="indigo"
            @click:append="show1 = !show1"
            label="Password"
            class="mr-4"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="3" sm="3" class="d-flex justify-center">
          <h4 class="ma-5">Age</h4>
        </v-col>
        <v-col md="8" sm="9" class="d-flex justify-start">
          <v-slider
            class="mr-4 mt-4"
            required
            :rules="validation.age"
            color="indigo"
            label="Age"
            min="1"
            max="100"
            value="20"
            thumb-label
          ></v-slider>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="3" sm="3" class="d-flex justify-center">
          <h4 class="ma-5">Gender</h4>
        </v-col>
        <v-col md="8" sm="9" class="d-flex justify-start">
          <v-select
            class="mr-4"
            :items="gender"
            :rules="validation.gender"
            label="Gender"
            color="indigo"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="3" sm="3" class="d-flex justify-center">
          <h4 class="ma-5">Job Title</h4>
        </v-col>
        <v-col md="8" sm="9" class="d-flex justify-start">
          <v-text-field
            required
            :rules="validation.nameValidation"
            label="Name"
            color="indigo"
            class="mr-4"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>

    <div class="box"></div>
  </div>
</template>
   
   <script>
import MainUpload from "./sub-components/MainUpload.vue";
import * as validations from "../../validations";
export default {
  name: "MainProfile",
  components: {
    MainUpload,
  },
  created() {
    this.validation = validations;
  },
  data() {
    return {
      validation: "",
      show1: false,
      gender: ["Male", "Female", "Other"],
    };
  },

  methods: {},
};
</script>
   

   <style>
.got {
  white-space: pre-wrap;
}

.round {
  border-top-left-radius: 75px;
}

.box {
  height: 20px;
}
</style>