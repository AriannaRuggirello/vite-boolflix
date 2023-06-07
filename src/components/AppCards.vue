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
    <div class="col-lg-2 film-card">
        <h2>{{ details.original_title }}</h2>
        <h2>{{ details.title }}</h2>
        <span>{{ details.original_language }}</span>
        <h4>{{ details.vote_average }}</h4>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;

.film-card {
    border: 1px solid black;

}
</style>
