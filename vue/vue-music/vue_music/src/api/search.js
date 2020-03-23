import axios from 'axios'

export default{
    searchResult(query){
        return axios.get(`/api/search?keywords=${query}`)
    },
    getSearchSinger (name) {
        const url = "/api" + `/search?keywords=${name}&type=100`
        return axios.get(url)
    },
    getSearchSongs (name, page) {
        const url = "/api" + `/search?keywords=${name}&offset=${page}`
      
        return axios.get(url)
    },
    getSearchSuggest (name) {
        const url = "/api" + `/search/suggest?keywords=${name}`
      
        return axios.get(url)
    },
    getSongDetail (id) {
        const url = "/api" + `/song/detail?ids=${id}`
      
        return axios.get(url)
    },
    getSearchHot (id) {
        const url = "/api" + `/search/hot`
      
        return axios.get(url)
    }
}