<template lang="pug">
  .home-container
    .home-header
      Search.home-header__search(@startSearch="startSearch")
      .home-header__modes
        span Global
        .switch(:class="{ toFavs: switchedToFavs }" @click="switchedToFavs = !switchedToFavs")
        span My favs
    .home-content
      MovieCard.movie-card(v-for="(movie, index) in curMovies" :key="index" :movie="movie" @addToFavs="addToFavs(movie)")
</template>

<script>
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
    if (localStorage.movies) {
      this.favs = JSON.parse(localStorage.movies);
    };
  },
  methods: {
    startSearch(searchText) {
      if (!this.switchedToFavs) { 
        this.$store.dispatch('searchMovies', { searchText })
        .then(() => {
          this.curMovies = this.$store.getters.getMovies;
        })
      }
      else {
        this.curMovies = this.favs.filter(movie => {
          let searchExp = new RegExp(searchText, 'i');
          return searchExp.test(movie.Title);
        });
      }
    },
    addToFavs(movie) {
      let index = this.favs.findIndex(item => item.imdbID === movie.imdbID);
      if (index === -1) this.favs.push(movie);
    }
  },
  watch: {
    favs(newFavsArray) {
      localStorage.movies = JSON.stringify(newFavsArray);
    },
    switchedToFavs(newMode) {
      this.curMovies = newMode ? this.favs : [];
    }
  },
}
</script>