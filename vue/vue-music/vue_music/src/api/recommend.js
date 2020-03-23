import axios from "axios"

export default{
    getBanner () {
        const url = "/api" + '/banner'
        return axios.get(url)
    },
    getRecommendList () {
        const url = "/api" + '/personalized'
        return axios.get(url)
    },
    getRecommendMusic () {
        const url = "/api" + '/personalized/newsong'
        return axios.get(url)
    },
    getRecommendListDetail (id) {
        const url = "/api" + `/playlist/detail?id=${id}`
        return axios.get(url)
    }
}