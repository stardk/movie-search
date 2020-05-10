<template lang="pug">
    .movie-card
        img.movie-poster(:src="movie.Poster")
        .movie-info
            span.movie-info__title {{ movie.Title }}
            span.movie-info__year {{ movie.Year }}
            span.movue-info__type {{ movie.Type }}
            a.movie-info__link(:href="imdbLink + movie.imdbID") IMDb
</template>

<script>
    export default {
        name: 'movieCard',
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

<style lang="scss" scoped>
$white: #dddddd;
$light-grey: #7c7c7c;
$blue: #0066b9;

.movie-card {
    background-color: $white;
    border: 2px solid transparent;
    padding: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    &:hover {
        border-color: $blue;
    }
    .movie-poster {
        height: 150px;
        width: auto;
    }
    .movie-info {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .movie-info__title {
            font-weight: 500;
            font-size: 24px;
        }
        .movie-info__year {
            margin-top: 5px;
            font-size: 18px;
            color: $light-grey;
        }
        .movie-info__type {
            margin-top: 5px;
            font-size: 16px;
            color: $light-grey;
        }
        .movie-info__link {
            margin-top: 10px;
            background-color: $blue;
            color: $white;
            text-decoration: none;
            border-radius: 5px;
            padding: 5px 8px;
            cursor: pointer;
        }
    }
}
</style>