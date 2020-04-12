import axios from 'axios'

export default{
    getTopList () {
        const url = '/api' + `/toplist`
        return axios.get(url)
    },
    getTopList_Id(id) {
        const url = '/api' + `/top/list?idx=${id}`
        return axios.get(url)
    },
    getListDetail (id) {
        const url = "/api" + `/playlist/detail?id=${id}`
        return axios.get(url)
    }
}