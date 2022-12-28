import Vue from "vue";
import Vuex from "vuex";

const appId = '6379b53d84d948d558465a98'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        socialContact: ''
    },
    mutations: {
        friendListData(state, data){
            state.socialContact = data
        }
    },
    actions: {
        friendListData(context){
                fetch('https://dummyapi.io/data/v1/user?limit=10', {
                  headers: { 'app-id': appId }
                }).then((response) => response.json())
                  .then(response => {
                    console.log(response)
                    context.commit('friendListData',response)
                  })
                  .catch(error => {
                    console.error(`Api is not working properly due to ${error.message}`);
                  })
        }
    }
 })