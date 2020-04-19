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
    },
    getSingerAlbum(id){
        const url = '/api' + `/artist/album?id=${id}&limit=30`
        
        return axios.get(url)
        
    },
    getSingerMv(id){
        const url = '/api' + `/artist/mv?id=${id}`
        
        return axios.get(url)
        
    },
    getConnectMv(id){
        const url = '/api' + `/related/allvideo?id=${id}`
        
        return axios.get(url)
        
    }
    
}