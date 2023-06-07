import { string } from 'i/lib/util'
import { reactive } from 'vue'

export const store = reactive({
    // url della chiamata api
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=ea01ac0b06b542fd7860fe34a3b02f03&query=',
    filmArr: [],

    searchFilm: '',




})