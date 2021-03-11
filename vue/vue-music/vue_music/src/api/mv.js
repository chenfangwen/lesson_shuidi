
import axios from 'axios'

export default{
    geMvDetial (id) {
        const url = '/api' + `/mv/detail?mvid=${id}`
        
        return axios.get(url)
    },
    getMvUrl (id) {
        const url = '/api' + `/mv/url?id=${id}`
        return axios.get(url)
    },
    getVideoUrl(id) {
        const url = '/api' + `/video/url?id=${id}`
        return axios.get(url)
    },
    getAllVideo(offset) {
        const url = '/api' + '/video/timeline/all'
        return axios.get(url, {
            params: {
                offset
            }
        })
    },
    getVideoDetail(id) {
        const url = '/api' + `/video/detail?id=${id}`
        return axios.get(url)
    },
    login() {
        const url = '/api/login/cellphone?phone=15717078739&password=18206057853fw???'
        return axios.get(url)
    }
}