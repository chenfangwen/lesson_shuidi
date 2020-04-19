
import axios from 'axios'

export default{
    geMvDetial (id) {
        const url = '/api' + `/mv/detail?mvid=${id}`
        
        return axios.get(url)
    }
}