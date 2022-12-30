import Vue from "vue";
import Vuex from "vuex";
import { router } from './router'
import * as userDataHandling from './userDataHandling'
const appId = '6379b53d84d948d558465a98'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    socialContact: '',
    userData: '',
    alert: false,
    img: ''
  },
  mutations: {
    // mutation for img setting
    uploadImg(state, img) {
      state.img = img
    },
    // mutation for setting  contact detail
    friendListData(state, data) {
      state.socialContact = data
    },
    // mutation for setting user data from local storage or Api response
    getUserData(state, data) {
      state.userData = data
    },
    // mutations to handle alert showing on profile update
    alertOn(state) {
      state.alert = true
    },
    alertOff(state) {
      state.alert = false
    }

  },
  actions: {
    // action get user data from local storage after user sign up
    getUserData(context) {
      let userData = JSON.parse(localStorage.getItem('currentUser'))
      context.commit('getUserData', userData)
    },
    // action to fetch contact data from dummy JSON Api
    friendListData(context) {
      fetch('https://dummyapi.io/data/v1/user?limit=10', {
        headers: { 'app-id': appId }
      }).then((response) => response.json())
        .then(response => {
          context.commit('friendListData', response)
        })
        .catch(error => {
          console.error(`Api is not working properly due to ${error.message}`);
        })
    },
    // check user info from local storage as well as from Api response
    loginValidation(context, data) {
      let users = userDataHandling.getAllUsers()
      let recordIndex = users.findIndex(x => x.email == data.userID)
      if (users[recordIndex] && users[recordIndex].password == data.password) {
        if(users[recordIndex].id){
        sessionStorage.setItem('token', users[recordIndex].id)
      
        localStorage.setItem('currentUser', JSON.stringify(users[recordIndex]))
        router.push('/home')
        }
      } else {
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: data.userID,
            password: data.password,
          })
        }).then(response => response.json()).then(
          res => {
            if (!res.message ) {

              sessionStorage.setItem('token', res.token)
              localStorage.setItem('currentUser', JSON.stringify({ ...res, password: data.password }))
              context.commit("uploadImg", res.image)
              router.push('/home')
            }
          }
        )
      }
    }
  }
})