import axios from 'axios'

export default{
    getSingerSongs (id) {
        const url = '/api' + `/artists?id=${id}`
        
        return axios.get(url)
    },
    getInfoDetail (id) {
        const url = '/api' + `/artist/desc?id=${id}`
        
        return axios.get(url)
    },
    getInfoDetail (id) {
        const url = '/api' + `/artist/desc?id=${id}`
        
        return axios.get(url)
    },
    getSingerTopList () {
        const url = '/api' + `/toplist/artist`
        
        return axios.get(url)
    }
}