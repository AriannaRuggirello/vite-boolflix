<script >
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}




</script>

<template>
    <header>
        <div class="row justify-content-between align-items-center">
            <div class="col">
                <h1>BOOLFLIX</h1>
            </div>

            <div class="col text-end">
                <input type="text" placeholder="search film or tv series" v-model="store.searchText">
                <button @click="$emit('search')">Search</button>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixin.scss' as *;

header {
    background-color: black;
    color: red;
    padding: 0 30px;

    input,
    button {
        border-radius: 5px;
        padding: 3px;
        border-style: none;
    }

    button {
        background-color: red;
        color: white;
        margin-left: 10px;
    }

    button:hover {
        background: rgb(214, 2, 2);
    }
}
</style>
