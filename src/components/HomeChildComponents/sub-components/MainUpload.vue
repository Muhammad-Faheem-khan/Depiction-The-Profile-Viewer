<template>
<div class="check">
      
        <image-input v-model="avatar" >
          <div slot="activator">
            <v-avatar size="150px" v-ripple v-if="!avatar" class="grey lighten-3 mb-3">
              <span>Click to add avatar</span>
            </v-avatar>
            <v-avatar size="150px" v-ripple v-else class="mb-3">
              <img :src="avatar.imageURL" alt="avatar">
            </v-avatar>
          </div>
        </image-input>
   
    </div>
    
  </template>
  
  <script>
  import ImageInput from './ImageInput.vue'
  export default {
    name: 'app',
    data () {
      return {
        avatar: null,
        saving: false,
        saved: false
      }
    },
    components: {
      ImageInput: ImageInput
    },
    watch:{
      avatar: {
        handler: function() {
          this.saved = false
        },
        deep: true
      }
    },
   
  }
  </script>
  
  <style>

  .check{
    position: relative;
   bottom: 15%;
   left: 4%;

  }
  
  </style>