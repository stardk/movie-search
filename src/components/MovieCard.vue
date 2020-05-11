<template lang="pug">
    .movie-card
        .movie-info
            img.movie-info__poster(:src="movie.Poster")
            a.movie-info__title(:href="imdbLink + movie.imdbID" target="_blank") {{ movie.Title }}
            span.movie-info__year {{ movie.Year }}
            span.movue-info__type {{ movie.Type }}
        button.add-to-favs(@click="$emit('addToFavs')") Add to favs
</template>

<script>
    export default {
        name: 'MovieCard',
        props: {
            movie: {
                type: Object
            },
        },
        data() {
            return {
                imdbLink: 'https://www.imdb.com/title/'
            }
        },
    }
</script>
