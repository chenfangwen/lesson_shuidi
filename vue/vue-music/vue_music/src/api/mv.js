
import axios from 'axios'

export default{
    geMvDetial (id) {
        const url = '/api' + `/mv/detail?mvid=${id}`
        
        return axios.get(url)
    },
    getMvUrl (id) {
        const url = '/api' + `/mv/url?id=${id}`
        return axios.get(url)
    }
}