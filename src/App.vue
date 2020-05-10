<template lang="pug">
  .app
    search.search(@startSearch="startSearch")
    .content
      movieCard.movie-card(v-for="(movie, index) in curMovies" :key="index" :movie="movie")
</template>

<script>
import search from '@/components/Search.vue';
import movieCard from '@/components/MovieCard.vue';

export default {
  name: 'app',
  components: {
    search,
    movieCard
  },
  data() {
    return {
      curMovies: []
    }
  },
  methods: {
    async startSearch(searchText) {
      this.$store.dispatch('searchMovies', { searchText })
        .then(() => {
          console.log(searchText);      
          this.curMovies = this.$store.getters.getMovies;
        })
    }
  },
}
</script>

<style lang="scss">
$light-grey: #cccccc;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100vw;
}
.app {
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $light-grey;
  .search {
    margin-top: 50px;
  }
  .content {
    margin-top: 50px;
    padding: 0 15%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

}
</style>
