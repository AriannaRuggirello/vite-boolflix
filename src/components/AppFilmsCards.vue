<script >
import { store } from '../store.js';


export default {
    name: 'AppFilmsCards',
    props: {
        filmDetails: Object
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        convertToIntegerNum() {
            let stars = filmDetails.vote_average / 10;

            const star = Math.round(stars * 5);

            return star;
        }
    }
}

</script>

<template>
    <div class="col col-sm-4 film-card">
        <img :src="'https://image.tmdb.org/t/p/w342/' + filmDetails.poster_path" alt="">

        <div class="col col-sm-4 film-card">
            <img :src="'https://image.tmdb.org/t/p/w342/' + filmDetails.poster_path" alt="">

            <h4>TITLE : {{ filmDetails.original_title }}</h4>
            <h4>ORIGINAL TITLE: {{ filmDetails.title }}</h4>
            <img class='icon' :src="'../../img/' + filmDetails.original_language + '.png'" alt="img not found!">
            <h6>{{ filmDetails.vote_average }}</h6>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>


        </div>
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
