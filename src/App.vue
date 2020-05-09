<template lang="pug">
  .app
    search.search(@startSearch="startSearch")
    .content {{ test_searched }}
</template>

<script>
import search from '@/components/Search.vue';

export default {
  name: 'app',
  components: {
    search,
  },
  data() {
    return {
      test_searched: ''
    }
  },
  methods: {
    startSearch(searchText) {
      // this.$store.dispatch('search', searchText)
      this.test_searched = searchText;
    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100vw;
  height: 100vh;
}
.app {
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .search {
    margin-top: 50px;
  }
  .content {
    margin-top: 150px;
  }
}
</style>
