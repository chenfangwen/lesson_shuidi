import axios from 'axios'

export default{
    getSingerSongs (id) {
        const url = '/api' + `/artists?id=${id}`
        
        return axios.get(url)
    }
}