<script >
import { store } from './store.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import AppCards from './components/AppCards.vue'

export default {
  components: {
    AppHeader,
    AppCards,

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilms() {

      let myUrl = store.apiURL;
      if (store.searchFilm !== '') {
        myUrl += `${store.searchFilm}`
        console.log(myUrl);
      }

      // chiamata axios
      axios.get(myUrl)
        // che cosa deve ritornare la chiamata
        .then(res => {
          // cards array vuoto 
          store.filmArr = res.data.results;

        })
        // gestire eventuali errori
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getFilms();
  }
}


</script>

<template>
  <AppHeader @search="getFilms" />
  <main class="container">
    <div class="class row justify-content-center ">
      <AppCards v-for="card in store.filmArr" :details="card" />
    </div>

  </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixin.scss' as *;
@use './styles/general.scss' as *;
</style>
