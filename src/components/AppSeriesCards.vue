<script >
import { store } from '../store.js';

export default {
    name: 'AppSeriesCards',
    props: {
        serieDetails: Object
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="col col-sm-4 film-card">
        <img :src="'https://image.tmdb.org/t/p/w342/' + serieDetails.poster_path" alt="">
        <h4>TITLE : {{ serieDetails.original_name }}</h4>
        <h4>ORIGINAL TITLE: {{ serieDetails.name }}</h4>
        <img class="icon" :src="'../../img/' + serieDetails.original_language + '.png'" alt="img not found!">
        <h6>{{ serieDetails.vote_average }}</h6>
        <i class="fa-regular fa-star"></i>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;

.film-card {

    padding: 10px;

    .icon {
        width: 20px;
    }

}
</style>
