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
    // methods: {
    //     convertToIntegerNum(n) {
    //         let stars = n / 10;
    //         const star = Math.round(stars * 5);
    //         return star;
    //     }
    // }

}

</script>

<template>
    <div class="col-lg-3  card">
        <img :src="'https://image.tmdb.org/t/p/w342/' + filmDetails.poster_path" alt="">

        <h4>TITLE : {{ filmDetails.original_title }}</h4>
        <h4>ORIGINAL TITLE: {{ filmDetails.title }}</h4>
        <img class='icon' :src="'../../img/' + filmDetails.original_language + '.png'" alt="img not found!">

        <!-- <i v-for="(star, index) in 5" :class="convertTointegerNum(filmDetails.vote_average) >= index ? 'active' : ''"
                        class="fa-regular fa-star"></i> -->


    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;



.icon {
    width: 30px;
}

.active {
    background-color: yellow;
}
</style>
