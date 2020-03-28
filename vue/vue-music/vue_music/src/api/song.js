import axios from 'axios'

export default{
    getLyric (id) {
        const url = 'api' + `/lyric?id=${id}`
        
        return axios.get(url)
    }
}