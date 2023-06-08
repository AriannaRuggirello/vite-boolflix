<script >
import { store } from './store.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import AppFilmsCards from './components/AppFilmsCards.vue'
import AppSeriesCards from './components/AppSeriesCards.vue'


export default {
  components: {
    AppHeader,
    AppFilmsCards,
    AppSeriesCards
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilms() {

      let myUrlFilm = store.apiUrlFilm;

      if (store.searchText !== '') {
        myUrlFilm += `${store.searchText}`
        console.log(myUrlFilm);
      }
      // chiamata axios
      axios.get(myUrlFilm)
        // che cosa deve ritornare la chiamata
        .then(res => {
          // cards array vuoto 
          store.filmsArr = res.data.results;

        })
        // gestire eventuali errori
        .catch(err => {
          console.log(err);
        })

      let myUrlSerie = store.apiUrlSeries;

      if (store.searchText !== '') {
        myUrlSerie += `${store.searchText}`
        console.log(myUrlSerie);
      }
      // chiamata axios
      axios.get(myUrlSerie)
        // che cosa deve ritornare la chiamata
        .then(res => {
          // cards array vuoto 
          store.seriesArr = res.data.results;

        })
        // gestire eventuali errori
        .catch(err => {
          console.log(err);
        })
    },

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
      <h2>FILM</h2>
      <AppFilmsCards v-for="film in store.filmsArr" :filmDetails="film" />
      <h2>TV SERIES</h2>
      <AppSeriesCards v-for="serie in store.seriesArr" :serieDetails="serie" />

    </div>

  </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixin.scss' as *;
@use './styles/general.scss' as *;
</style>
