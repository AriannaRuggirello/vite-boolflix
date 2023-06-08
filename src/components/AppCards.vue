<script >
import { store } from '../store.js';

export default {
    name: 'AppCards',
    props: {
        details: Object
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="col-lg-2 col-sm-4 film-card">
        <h4>TITLE : {{ details.original_title }}</h4>
        <h4>ORIGINAL TITLE: {{ details.title }}</h4>
        <img :src="'../../img/' + details.original_language + '.png'" alt="img not found!">
        <h6>{{ details.vote_average }}</h6>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;

.film-card {
    border: 1px solid red;
    padding: 10px;

    img {
        width: 20px;
    }

}
</style>
