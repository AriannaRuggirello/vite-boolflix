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
    <div class="col-lg-3 figure">

        <img :src="'https://image.tmdb.org/t/p/w342/' + serieDetails.poster_path" alt="">
        <h4>TITLE : {{ serieDetails.original_name }}</h4>
        <h4>ORIGINAL TITLE: {{ serieDetails.name }}</h4>
        <img class="icon" :src="'../../img/' + serieDetails.original_language + '.png'" alt="img not found!">
        <h6>{{ serieDetails.vote_average }}</h6>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;



.icon {
    width: 20px;
}
</style>
