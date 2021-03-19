import Vue from 'vue'
import Vuex from 'vuex'
import { Card } from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsList: [],
    card: null,
    search: ''
  },

  getters: {
    cardsList (state) {
      return state.cardsList
    },

    card (state) {
      return state.card
    },

    search (state) {
      return state.search
    }
  },

  mutations: {
    setCardsList (state, cardsList) {
      state.cardsList = cardsList
    },

    setCard (state, card) {
      state.card = card
    },

    setSearch (state, search) {
      state.search = search
    }
  },

  actions: {
    loadCardsList ({ commit }, payload) {
      return Card.getCardsList(payload).then(response => {
        commit('setCardsList', response.data.data)
        return response
      }).catch((error) => error)
    },

    loadCard ({ commit }, payload) {
      return Card.getCard(payload).then(response => {
        commit('setCard', response.data)
        return response
      }).catch(error => error)
    },

    inputSearch ({ commit }, payload) {
      commit('setSearch', payload)
    }
  }
})
