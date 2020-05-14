<template lang="pug">
  .search-container
    input.search-input(type="text" placeholder="Type and press Enter" v-model="searchText" @keyup.enter="$emit('startSearch', searchText)")
    SearchIcon.search-submit(@click="$emit('startSearch', searchText)")
</template>

<script>
import SearchIcon from '@/components/icons/SearchIcon.vue';

export default {
  name: 'Search',
  components: {
    SearchIcon
  },
  data() {
    return {
      searchText: '',
    }
  },
}
</script>
