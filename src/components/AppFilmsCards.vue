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
    methods: {
        startValutation() {

            return Math.round((this.filmDetails.vote_average / 10) * 5);
        }
    }

}

</script>

<template>
    <div class="col-lg-3  card">
        <img :src="'https://image.tmdb.org/t/p/w342/' + filmDetails.poster_path" alt="">

        <h4>Title : {{ filmDetails.original_title }}</h4>
        <h4>Original title: {{ filmDetails.title }}</h4>
        <img class='icon' :src="'../../img/' + filmDetails.original_language + '.png'" alt="img not found!">
        <div class="row ">
            <div class="col">
                <span>Score:</span>
                <i v-for="count in 5" class="fa-solid fa-star" :class="(startValutation()) >= count ? 'active' : ''"></i>
            </div>

        </div>



    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;



.icon {
    width: 30px;
}

.active {
    color: orange;
}
</style>
