<template lang="pug">
    .movie-card
        .movie-info
            img.movie-info__poster(:src="movie.Poster")
            a.movie-info__title(:href="imdbLink + movie.imdbID" target="_blank") {{ movie.Title }}
            span.movie-info__year {{ movie.Year }}
            span.movie-info__type {{ movie.Type[0].toUpperCase() + movie.Type.slice(1) }}
        button.favs-add(@click="$emit('addToFavs')" v-if="!isFavs") Add to favs
        button.favs-delete(@click="$emit('deleteFromFavs')" v-else) Delete
</template>

<script>
    export default {
        name: 'MovieCard',
        props: {
            movie: {
                type: Object
            },
            isFavs: {
                type: Boolean
            }
        },
        data() {
            return {
                imdbLink: 'https://www.imdb.com/title/'
            }
        },
    }
</script>
