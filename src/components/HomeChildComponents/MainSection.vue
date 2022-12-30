<template>
  <!--Profile-Section-->
  <div class="d-flex">
    <v-row>
      <v-col class="col-md-8 col-sm-12 col-12">
        <!--Main-Container-->
        <v-container style="position: relative">
          <!--Alert-->
          <div style="position: absolute; right: 0; width: 14rem">
            <v-alert :value="alertOn" style="z-index: 100" dismissible color="#703b8a" border="left" elevation="2"
              colored-border icon="mdi-check-circle">
              User profile is Updated!
            </v-alert>
          </div>
          <!--User-Profile-->
          <div class="d-flex userData1">
            <div class="d-flex userData my-5">
              <!--User-Image-->
              <v-img :src="userData.image ? userData.image : `https://www.pngitem.com/pimgs/m/551-5510463_default-user-image-png-transparent-png.png`" alt="loading" class="rounded-lg image1"></v-img>
              <div class="pl-3 userData">
                <!--User-Tag-->
                <v-btn depressed color="#703b8a" class="white--text mt-4" height="1.5rem">
                  New user
                </v-btn>
                <!--User-FullName-->
                <h2 class="text-capitalize mt-3">
                  {{ userData ? userData.firstName : "User Name" }}
                  {{ userData ? userData.lastName : "" }}
                </h2>
                <!--User-Email-->
                <p class="mb-0">
                  <b>Email: </b>
                  <span>{{ userData ? userData.email : "***@gmail.com" }}</span>
                </p>
                <!--User-Age-->
                <p class="mb-0">
                  <b>Age: </b>
                  <span>{{userData ? (userData.age ? userData.age : "21") : "21"}}</span>
                </p>
                <!--User-Role-->
                <p>
                  <b>Job Role: </b>
                  <span>{{ userData ? userData.job ? userData.job : "Web Developer" : "Web Developer" }}</span>
                </p>
                <!--Update-Route-->
                <router-link class="text-decoration-none" to="/home/updateprofile">
                  <!--Update-Button-->
                  <v-btn class="ma-2" outlined height="2rem" color="purple">
                    Update
                  </v-btn>
                </router-link>
              </div>
            </div>
          </div>
          <!--Second-Section-->
          <div>
            <v-row class="d-flex justify-space-around mb-4">
              <v-col cols="12" sm="5">
                <div>
                  <span class="d-flex justify-space-between mb-3">
                    <!--Heading-->
                    <h3 class="text-h5 font-weight-medium">
                      Areas of interest
                    </h3>
                    <v-icon> mdi-chart-bubble </v-icon>
                  </span>
                  <!--About-->
                  <span>
                    <h6>
                      <span style="color: gray">Key interest - </span>
                      Development,Research
                    </h6>
                  </span>
                  <!--Progress-Bars-->
                  <!--ML-Bar-->
                  <div class="d-flex mt-4">
                    <h5>ML</h5>
                    <v-progress-linear color="green darken-2" rounded value="20" class="mt-2 ml-14"></v-progress-linear>
                  </div>
                  <!--AI-Bar-->
                  <div class="d-flex mt-4">
                    <h5>AI</h5>
                    <v-progress-linear color="green darken-2" rounded value="70" class="mt-2 ml-15"></v-progress-linear>
                  </div>
                  <!--Tech-Bar-->
                  <div class="d-flex mt-4">
                    <h5>Tech</h5>
                    <v-progress-linear color="green darken-2" rounded value="40" class="mt-2 ml-12"></v-progress-linear>
                  </div>
                  <!--Web Design-Bar-->
                  <div class="d-flex mt-4">
                    <h5>Web Designs</h5>
                    <v-progress-linear color="red darken-2" rounded value="90" class="mt-2 ml-5"></v-progress-linear>
                  </div>
                  <!--Mobile Development-Bar-->
                  <div class="d-flex mt-4">
                    <h5>Mobile Development</h5>
                    <v-progress-linear color="green darken-2" rounded value="50" class="mt-2 ml-0"></v-progress-linear>
                  </div>
                </div>
              </v-col>
              <!--Third-Section-->
              <v-col cols="12" sm="5">
                <!--Heading-->
                <span class="d-flex justify-space-between mb-3">
                  <h3 class="text-h5 font-weight-medium">Performance</h3>
                  <v-icon> mdi-bookshelf </v-icon>
                </span>
                <template>
                  <!--Briefcase-icon-->
                  <v-icon :color="checking ? 'red lighten-2' : 'indigo'" class="mr-12" size="64" @click="takePulse">
                    mdi-briefcase
                  </v-icon>
                  <v-row align="start">
                    <div class="text-caption grey--text text-uppercase mt-2">
                      Success Rate
                    </div>
                    <!--Reviews-->
                    <div>
                      <span class="ml-3 text-h3 font-weight-black" v-text="avg || '—'"></span>
                      <strong v-if="avg">reviews</strong>
                    </div>
                  </v-row>

                  <v-spacer></v-spacer>
                  <!--Arrow-Icon-->
                  <v-btn icon class="align-self-start" size="28">
                    <v-icon>mdi-arrow-right-thick</v-icon>
                  </v-btn>
                  <!--Chart-->
                  <v-sheet color="transparent">
                    <v-sparkline :key="String(avg)" :smooth="16" :gradient="['#f72047', '#ffd200', '#1feaea']"
                      :line-width="3" :value="reviews" auto-draw stroke-linecap="round"></v-sparkline>
                  </v-sheet>
                </template>
              </v-col>
            </v-row>
            <!--Clients-Section-->
            <div>
              <!--Heading-->
              <h3 class="text-h5 font-weight-medium text-center my-3">
                Top Reviewed Clients
              </h3>
              <!--Clients-->
              <div class="d-flex justify-center flex-wrap">
                <div class="mr-5 mb-4 d-flex flex-column align-center" style="width: 8rem"
                  v-for="contact in socialContact.data" :key="contact.id">
                  <!--Clients-Image-->
                  <img :src="contact.picture" alt="image" width="70" class="rounded-pill" />
                  <!--Clients-FullName-->
                  <p class="fonty text-center text-capitalize">
                    {{ contact.firstName }} {{ contact.lastName }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </v-col>
      <!--Summary-Section-->
      <v-col class="col-md-4 py-6">
        <v-card class="py-3">
          <h3 class="text-center text-h5 font-weight-medium mb-4">
            Summary Section
          </h3>
          <SummarySection />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
const exhale = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import SummarySection from "../HomeChildComponents/SummarySection.vue";
export default {
  name: "ProfileDetail",

  components: {
    SummarySection,
  },
  data() {
    return {
      checking: false,
      reviews: [],
      alert: false
    }
  },

  computed: {
    // store img to local storage
    imageUpload() {
      return JSON.parse(localStorage.getItem('image'))
    },
    // calculate value for performance section
    avg() {
      const sum = this.reviews.reduce((acc, cur) => acc + cur, 0);
      const length = this.reviews.length;
      if (!sum && !length) return 0;
      return Math.ceil(sum / length);
    },
    // get social contact data from store
    socialContact() {
      return this.$store.state.socialContact;
    },
    // get userData from store
    userData() {
      return this.$store.state.userData;
    },
    alertOn() {
      this.alertHandle()
      return this.$store.state.alert
    }
  },

  created() {
    this.takePulse(false);
  },

  methods: {
    // function to dismiss alert
    alertHandle() {
      setTimeout(() => {
        this.$store.commit("alertOff")
      }, 4000)
    },
    // function to handle reviews value
    review() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    },
    async takePulse(inhale = true) {
      this.checking = true;
      inhale && (await exhale(1000));
      this.reviews = Array.from({ length: 20 }, this.review);
      this.checking = false;
    },
  },
};
</script>
<style scoped>
.image1 {
  height: 10rem;
  width: 10rem;
}

.font-userlist {
  font-family: sans-serif;
}

@media screen and (max-width: 959px) {
  .userData1 {
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .userData {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>