<template lang="pug">
  .home-container
    .home-header
      Search.home-header__search(@startSearch="startSearch")
      .home-header__modes
        span Global
        .switch(:class="{ toFavs: switchedToFavs }" @click="switchedToFavs = !switchedToFavs")
        span My favs
    .home-content
      MovieCard.movie-card(v-for="(movie, index) in curMovies" :key="index" 
      :movie="movie" :isFavsMode="switchedToFavs" :inFavs="incudedInFavs(movie.imdbID)" @addToFavs="addToFavs(movie)" @deleteFromFavs="deleteFromFavs(movie)")
</template>

<script>
import cacheStore from '@/libs/cache.js';
import Search from '@/components/Search.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'Home',
  components: {
    Search,
    MovieCard
  },
  data() {
    return {
      curMovies: [],
      favs: [],
      switchedToFavs: false
    }
  },
  mounted () {
    this.favs = cacheStore.getItem('movies') || [];
  },
  methods: {
    startSearch(searchText) {
      if (!this.switchedToFavs) { 
        this.$store.dispatch('searchMovies', { searchText })
        .then(() => {
          this.curMovies = this.getFoundMovies();
        })
      }
      else {
        this.curMovies = this.favs.filter(movie => {
          let searchExp = new RegExp(searchText, 'i');
          return searchExp.test(movie.Title);
        });
      }
    },
    getFoundMovies() {
      return this.$store.getters.getMovies;
    },
    addToFavs(movie) {
      let index = this.favs.findIndex(item => item.imdbID === movie.imdbID);
      if (index === -1) this.favs.push(movie);
    },
    deleteFromFavs(movie) {
      this.favs = this.favs.filter(item => item.imdbID !== movie.imdbID);
      if (this.switchedToFavs) this.curMovies = this.favs;
    },
    incudedInFavs(movieID) {
      return this.favs.some(item => item.imdbID === movieID);
    }
  },
  watch: {
    favs(newFavsArray) {
      cacheStore.setItem('movies', newFavsArray);
    },
    switchedToFavs(newMode) {
      this.curMovies = newMode ? this.favs : this.getFoundMovies();
    }
  },
}
</script>