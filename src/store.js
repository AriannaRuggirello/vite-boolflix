
import { reactive } from 'vue'

export const store = reactive({
    // url della chiamata api
    apiUrlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=ea01ac0b06b542fd7860fe34a3b02f03&language=it_IT&query=',
    filmsArr: [],
    searchText: '',

    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=ea01ac0b06b542fd7860fe34a3b02f03&language=it_IT&query=',
    seriesArr: [],

});
