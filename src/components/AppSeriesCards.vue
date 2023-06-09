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
    },
    methods: {
        startValutation() {

            return Math.round((this.filmDetails.vote_average / 10) * 5);
        }
    }
}

</script>

<template>
    <div class="figure">
        <div class="row">
            <div class="col-lg-4 front-card">
                <img :src="'https://image.tmdb.org/t/p/w342/' + serieDetails.poster_path" alt="">
            </div>
        </div>


        <div class="row">
            <div class="col-lg-4  back-card">
                <!-- title -->
                <h4>Title:</h4>
                <span>{{ serieDetails.original_name }}</span>
                <!-- original title -->
                <h4>Original title:</h4>
                <span>{{ serieDetails.name }}</span>
                <!-- score -->

                <div class="row ">
                    <div class="col">
                        <!-- valutation -->
                        <i v-for="count in 5" class="fa-solid fa-star"
                            :class="(startValutation()) >= count ? 'active' : ''"></i>
                    </div>

                </div>
                <img class="icon" :src="'../../img/' + serieDetails.original_language + '.png'" alt="img not found!">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;


.figure {
    position: relative;
}

.figure:hover {
    transform: rotateY(180deg);
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.back-card {
    display: none;
    width: 342px;
    height: 512px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    z-index: 1;
    background-color: black;
    color: white;
    border: 1px solid white;


}

.figure:hover .back-card {
    display: block;
}

.icon {
    width: 20px;
}
</style>
