<template lang="pug">
    .movie-card
        .movie-info
            img.movie-info__poster(:src="movie.Poster")
            a.movie-info__title(:href="imdbLink + movie.imdbID" :title="movie.Title" target="_blank") {{ movie.Title | truncate }}
            span.movie-info__year {{ movie.Year }}
            span.movie-info__type {{ movie.Type | capitalize }}
        button.favs-added(@click="$emit('deleteFromFavs')" v-if="!isFavsMode && inFavs") In favs!
        button.favs-add(@click="$emit('addToFavs')" v-else-if="!isFavsMode") Add to favs
        button.favs-delete(@click="$emit('deleteFromFavs')" v-else) Delete
</template>

<script>
import capitalizeFunc from '@/libs/capitalize.js';
import truncateFunc from '@/libs/truncate.js'

export default {
    name: 'MovieCard',
    props: {
        movie: {
            type: Object
        },
        isFavsMode: {
            type: Boolean
        },
        inFavs: {
            type: Boolean
        }
    },
    data() {
        return {
            imdbLink: 'https://www.imdb.com/title/'
        }
    },
    filters: {
        capitalize: function (value) {
            return capitalizeFunc(value);
        },
        truncate: function (value) {
            return truncateFunc(value);
        }
    }
}
</script>
