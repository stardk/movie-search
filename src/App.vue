<template lang="pug">
  .app
    Search.search(@startSearch="startSearch")
    .content
      MovieCard.movie-card(v-for="(movie, index) in curMovies" :key="index" :movie="movie" @addToFavs="addToFavs(movie)")
</template>

<script>
import Search from '@/components/Search.vue';
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'app',
  components: {
    Search,
    MovieCard
  },
  data() {
    return {
      curMovies: [],
      favs: []
    }
  },
  mounted () {
    if (localStorage.movies) {
      this.favs = JSON.parse(localStorage.movies);
    };
  },
  methods: {
    startSearch(searchText) {
      this.$store.dispatch('searchMovies', { searchText })
        .then(() => {
          this.curMovies = this.$store.getters.getMovies;
        })
    },
    addToFavs(movie) {
      let index = this.favs.findIndex(item => item.imdbID === movie.imdbID);
      if (index === -1) this.favs.push(movie);
    }
  },
  watch: {
    favs(newFavsArray) {
      localStorage.movies = JSON.stringify(newFavsArray);
    }
  },
}
</script>

<style lang="scss">
@import '@/styles/colors.scss';
@import '@/styles/app.scss';
@import '@/styles/search.scss';
@import '@/styles/movie-card.scss';
</style>
