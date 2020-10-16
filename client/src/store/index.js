import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const api = 'http://localhost:3000/'

export default new Vuex.Store({
  state: {
    message : [],
    owner : {},
    employee : {}
  },
  mutations: {
    fetchMessage(state, payload){
      state.message = payload
    },
    postMessage( _ ,payload){
      axios.post(`${api}chat`, payload).then((res) => {
        console.log(res + 'send message')
      })
    }
  },
  actions: {
    fetchMessage({commit}){
      axios.get(`${api}chat/emp`).then((res) => {
        commit('fetchMessage', res.data)
      })
    },
  },
  modules: {
  }
})
