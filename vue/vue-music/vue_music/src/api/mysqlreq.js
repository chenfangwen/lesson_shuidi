import axios from 'axios'

export default{
    login (data) {
        const url = '/mysql' + `/users/login`
        return axios.post(url, data)
    },
    addUser(data) {
        const url = '/mysql' + `/users/addUser`
        return axios.post(url, data)
    },
    getSearchHistory(userId) {
        const url = '/mysql' + `/searchHistory/getSearchHistory`
        return axios.get(url, {
            params: {
                userId
            }
        })
    },
    addSearchHistory(data) {
        const url = '/mysql' + `/searchHistory/addSearchHistory`
        return axios.post(url, data)
    },
    getPlayHistory(userId) {
        const url = '/mysql' + `/playHistory/getPlayHistory`
        return axios.get(url, {
            params: {
                userId
            }
        })
    },
    addPlayHistory(data) {
        const url = '/mysql' + `/playHistory/addPlayHistory`
        return axios.post(url, data)
    }
}