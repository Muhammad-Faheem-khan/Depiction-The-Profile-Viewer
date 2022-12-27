<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12" lg="6" class="my-auto hidden-md-and-down">
        <div class="d-flex flex-column align-center">
          <v-img src="../assets/5.jpg" width="100%"></v-img>
        </div>
      </v-col>

      <v-col cols="12" lg="6" class="pa-13 my-auto">
        <div class="d-flex flex-column align-center">
                    <v-img src="../assets/logo.png" width="70"></v-img>
                </div>

        <h1 class="mt-6 mb-6">Login</h1>
        <v-form>
          <v-text-field
            v-model="loginEmail"
            :rules="loginEmailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="loginPassword"
            :append-icon="show1 ? 'eye' : 'eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <div class="text-end mb-5">
            <small><a>Forgot Password? </a></small>
          </div>

          <div class="d-flex flex-column align-center py-3 buttons_padding">
            <v-btn
              rounded
              color="primary"
              large
              class="sign_btn"
              :disabled="!valid"
              @click="validate"
            >
              Login
            </v-btn>

            <div class="d-flex flex-column align-center">
              <p><span>or</span></p>
            </div>

            <v-btn rounded color="secondary" large class="sign_btn">
              <v-icon class="mx-2">mdi-google</v-icon> Login with Google
            </v-btn>
          </div>
          <small>Not Register Yet? <a>Sign Up</a></small>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
export default {
  name: "LoginPage",
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    // reset() {
    //   this.$refs.form.reset();
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },
  },
  data: () => ({
    valid: true,
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
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

@media only screen and (max-width: 600px) {
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