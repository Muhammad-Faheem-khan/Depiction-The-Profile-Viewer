<template>
  <!--Main-Container-->
  <v-container class="text-center">
    <!--Main-Row-->
    <v-row class="d-flex justify-space-around">
      <!--First-Column-->
      <v-col cols="12" md="6" class="my-auto hidden-sm-and-down">
        <!--Animated-Image-->
        <div class="d-flex flex-column align-center">
          <v-img src="../assets/signupSideImg.svg" width="100%"></v-img>
        </div>
      </v-col>
      <!--Second-Column-->
      <v-col cols="12" md="6" sm="9" class="px-13 my-auto">
        <!--Logo=Image-->
        <div class="d-flex flex-column align-center">
          <v-img src="../assets/logo.png" width="150"></v-img>
        </div>
        <!--Main-Heading-->
        <h1 class="mt-4 mb-2 text-h5 ml-3 font-weight-medium">Sign Up</h1>
        <!--Signup-Form-->
        <v-row>
          <!--FirstName-Field-->
          <v-col cols="12" lg="6" md="6" sm="6" class="f-name mb-2">
            <v-text-field class="pt-0" v-model="signUpData.firstName" :rules="validation.nameValidation"
              label="First Name" maxlength="20" required @keypress.enter="validate"></v-text-field>
          </v-col>
          <!--LastName-Field-->
          <v-col cols="12" lg="6" md="6" sm="6" class="l-name mb-2">
            <v-text-field class="pt-0" v-model="signUpData.lastName" :rules="validation.nameValidation"
              label="Last Name" maxlength="20" required @keypress.enter="validate"></v-text-field>
          </v-col>
        </v-row>
        <!--Email-Field-->
        <v-text-field class="pt-0 my-2" v-model="signUpData.email" :rules="validation.emailValidation" label="E-mail"
          required width="100" @keypress.enter="validate"></v-text-field>
        <!--Password-Field-->
        <v-text-field class="pt-0 my-2" v-model="signUpData.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="validation.passwordValidation" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
          @click:append="show1 = !show1" @keypress.enter="validate"></v-text-field>
        <!--ConfirmPassword-Field-->
        <v-text-field class="pt-0 my-2" v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password"
          @click:append="show1 = !show1" required @keypress.enter="validate"></v-text-field>
        <!--Submit-Button-->
        <div class="d-flex flex-column align-center py-0 buttons_padding">
          <v-btn rounded color="#9f75b4" large class="sign_btn white--text pt-0" @click="validate">
            Sign Up
          </v-btn>
          <div class="d-flex flex-column align-center">
            <p><span>or</span></p>
          </div>
          <v-btn rounded color="secondary" large class="sign_btn">
            <v-icon class="mx-2">mdi-google</v-icon> Sign Up with Google
          </v-btn>
          <!--Already-Account-->
          <small class="mt-1">Already have an account?
            <router-link to="/"><a>Login</a></router-link></small>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as validations from '../validations'
import * as userDataHandling from '../userDataHandling'
export default {
  name: "SignUpPage",
  created() {
    this.validation = validations
    this.userMethods = userDataHandling
  },
  computed: {
    // check password and confirm password are same
    passwordMatch() {
      return () => this.signUpData.password === this.verify || "Password must match";
    },
  },

  methods: {
    // check signUp fields are all filled up 
    validate() {
      if (this.signUpData.firstName && this.signUpData.lastName && this.signUpData.email && this.signUpData.password) {
        this.userMethods.insertUserData(this.signUpData)
        this.$router.push('/')
      }
    },
  },
  data() {
    return {
      show1: false,
      verify: "",
      validation: null,
      userMethods: null,
      signUpData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }
    }
  },
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