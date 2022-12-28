<template>

  <div class="pa-2 ">
    <!-- starting coading-->

    <v-text-field append-icon="mdi-magnify" label="Search" single-line outlined></v-text-field>
      <template>
        <div class="text-center">
          <h1 class="text-h5 font-weight-medium">Trading Sequences</h1>
          <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value" color="primary">
            {{ value }}
          </v-progress-circular>
          <h2 class="text-h6 font-weight-medium mb-3">Active Clients</h2>
          <v-progress-circular :rotate="90" :size="100" :width="15" :value="value" color="red">
            {{ value }}
          </v-progress-circular>
          <h2 class="text-h6 font-weight-medium mb-3">Active Clients</h2>
        </div>
      </template>
    
    <h2 class="text-h5 font-weight-medium mt-4" >Why Is A Profile Blurb Important?</h2>

    <!-- card starting-->
    <v-card class="mx-auto rounded-lg   blue-grey lighten-5 mt-5" outlined>
      <v-list-item three-line>

        <v-icon color="green" size="30" class="rounded-circle   white pa-2">
          mdi-face-agent
        </v-icon>
        <!-- list content-->
        <v-list-item-content class="pl-4">

          <v-list-item-title class="text-h5 mb-1">
            Customer
          </v-list-item-title>
          <v-list-item-subtitle>They give potential business contacts and customers the most relevant
            information about you! </v-list-item-subtitle>
        </v-list-item-content>


      </v-list-item>
    </v-card>

    <!--ending chip-->
  </div>

</template>
<script>
export default {
  name: 'LastGrid'
}
</script>
<script>
  export default {
    data () {
      return {
        interval: {},
        value: 0,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },
  }
</script>
<style scoped>
ul {
  list-style: none;

}

.v-progress-circular {
  margin: 1rem;
}

</style>