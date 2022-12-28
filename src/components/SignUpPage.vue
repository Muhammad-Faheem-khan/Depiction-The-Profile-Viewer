<template>
  <v-container class="text-center">
    <v-row class="d-flex justify-space-around">
      <v-col cols="12" md="6" class="my-auto hidden-sm-and-down">
        <div class="d-flex flex-column align-center">
          <v-img src="../assets/signupSideImg.svg" width="100%"></v-img>
        </div>
      </v-col>

      <v-col cols="12" md="6" sm="9" class="px-13 my-auto">
        <div class="d-flex flex-column align-center">
          <v-img src="../assets/logo.png" width="150"></v-img>
        </div>
        <h1 class="mt-4 mb-2 text-h5 ml-3 font-weight-medium">Sign Up</h1>

        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6" class="f-name">
            <v-text-field
            class="pt-0"
              v-model="firstName"
              :rules="validation.nameValidation"
              label="First Name"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="6" class="l-name">
            <v-text-field
            class="pt-0"
              v-model="lastName"
              :rules="validation.nameValidation"
              label="Last Name"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
        class="pt-0"
          v-model="email"
          :rules="validation.emailValidation"
          label="E-mail"
          required
          width="100"
        ></v-text-field>

        <v-text-field
        class="pt-0"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="validation.passwordValidation"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
        class="pt-0"
          v-model="verify"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordMatch]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Confirm Password"
          @click:append="show1 = !show1"
          required
        ></v-text-field>

        <div class="d-flex flex-column align-center py-3 buttons_padding">
          <v-btn
            rounded
            color="#9f75b4"
            large
            class="sign_btn white--text pt-0"
            :disabled="!valid"
            @click="validate"
          >
            Sign Up
          </v-btn>
          <div class="d-flex flex-column align-center">
            <p><span>or</span></p>
          </div>
          <v-btn rounded color="secondary" large class="sign_btn">
            <v-icon class="mx-2">mdi-google</v-icon> Sign Up with Google
          </v-btn>
          <small class="mt-3">Already have an account? <router-link to="/"><a>Login</a></router-link></small>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as validations from '../validations'
export default {
  name: "SignUpPage",
  created(){
    this.validation = validations
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  methods: {
    validate() {
    },
  },
  data: () => ({
    valid: true,
    show1: false,
    validation: null, 
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    
  }),
};
</script>
<style scoped>
p {
  width: 35%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 20px 0 20px;
}

p span {
  background: #fff;
  padding: 0 10px;
}

.sign_btn {
  width: 18rem;
}

@media only screen and (min-width: 601px) and (max-width: 1263px) {
  .image_none {
    display: none !important;
  }
}

@media only screen and (max-width: 600px) {
  .sign_btn {
    width: 15rem;
  }
  .l-name {
    padding-top: 0px;
  }
  .f-name {
    padding-bottom: 0px;
  }
}
</style>