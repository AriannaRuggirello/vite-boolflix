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
    <div class="figure">

        <div class="col-lg-4 front-card">
            <img :src="'https://image.tmdb.org/t/p/w342/' + filmDetails.poster_path" alt="">
        </div>



        <div class="col-lg-4  back-card">
            <!-- title -->
            <h4>Title:</h4>
            <span>
                {{ filmDetails.original_title }}
            </span>
            <!-- original title -->
            <h4>Original title: </h4>
            <span>
                {{ filmDetails.title }}
            </span>
            <!-- score -->

            <div class="row">
                <div class="col">
                    <!-- valutation -->
                    <i v-for="count in 5" class="fa-solid fa-star"
                        :class="(startValutation()) >= count ? 'active' : ''"></i>
                </div>

            </div>
            <img class='icon' :src="'../../img/' + filmDetails.original_language + '.png'" alt="img not found!">

        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;


.figure {
    position: relative;
    margin: 5px;
}

.figure:hover {
    transform: rotateY(180deg);
    transition: transform 0.6s;
}

.figure:hover .back-card {
    display: block;
}

.back-card {
    display: none;
    width: 342px;
    height: 512px;
    padding-top: 30px;
    padding-left: 30px;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    z-index: 1;
    background-color: black;
    color: white;



}



.icon {
    width: 30px;
}

.active {
    color: orange;
}
</style>
