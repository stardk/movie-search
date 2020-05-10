import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foundMovies: []
  },
  getters: {
    getMovies: state => state.foundMovies,
  },
  mutations: {
    setMovies: (state, movies) => {
      movies.forEach(item => {
        state.foundMovies.push(item);
      });
    },
    unsetMovies: state => {
      state.foundMovies = [];
    }
  },
  actions: {
    searchMovies(context, payload) {
      let url = api.url.concat('s=', payload.searchText, '&apikey=', api.key);
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(res => res.json())
          .then(res => {
            context.commit('unsetMovies');
            context.commit('setMovies', res.Search);
            resolve();
          })
      })
    } 
  },
})
