<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12" lg="6" class="my-auto image_none">
        <div class="d-flex flex-column align-center">
          <v-img
            src="../assets/6.jpg"
            width="100%"
          ></v-img>
        </div>
      </v-col>

      <v-col cols="12" lg="6" class="pa-13 my-auto">
        <!-- 
        <div class="d-flex flex-column align-center">
          <v-img src="../assets/logo.png" width="70"></v-img>
        </div> -->

        <h1 class="mt-6 mb-6">Sign Up</h1>

        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6" class="f_name">
            <v-text-field
              v-model="firstName"
              :rules="[rules.required]"
              label="First Name"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="6" class="l_name">
            <v-text-field
              v-model="lastName"
              :rules="[rules.required]"
              label="Last Name"
              maxlength="20"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          width="100"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
          v-model="verify"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, passwordMatch]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Confirm Password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>

        <div class="d-flex flex-column align-center py-3 buttons_padding">
          <v-btn
            rounded
            color="primary"
            large
            class="sign_btn"
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
          <small>Already have an account? <a>Login</a></small>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignUpPage",
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
  },
  data: () => ({
    valid: true,

    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
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

/* @media only screen and (max-width: 767px) {
  .image_none {
    display: none !important;
  }
} */

@media only screen and (max-width: 600px) {
  .image_none {
    display: none !important;
  }

  .sign_btn {
    width: 15rem;
  }

  .l_name {
    padding-top: 0px;
  }

  .f_name {
    padding-bottom: 0px;
  }
}
</style>