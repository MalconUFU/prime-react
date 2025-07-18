import axios from 'axios'

//Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=964de70a6686d7965b40abae264eb587&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;