import api from '../../api/mysqlreq' 

const searchHistoryCookie = 'vuemisic-search-history';
const playHistoryCookie = 'vuemisic-play-history';
const curMusicUser = 'vuemusic-user'
const searchHistoryTag = '*/*';
const playHistoryTag = '*/*';

export function setUser(userId) {
    localStorage.setItem(curMusicUser, userId);
}

export function getUser() {
    return localStorage.getItem(curMusicUser);
}

export function clearLogin() {
    localStorage.setItem(curMusicUser, '');
}

function addSearchHistory2(cookie, tag, data) {
    console.log(data, 'data')
    // let history = localStorage.getItem(cookie) === null ? '' : localStorage.getItem(cookie);
    let history = '';
    api.getSearchHistory(data.userId).then(res => {
        // console.log(res, 'lastSearch')
        history = res.data.data.length > 0 ? res.data.data[0].lastSearch : '';
        // console.log(history, 'oldHistory')
        if (!history.includes(data.lastSearch)) {
            history = history ? data.lastSearch + tag + history : data.lastSearch + history;
            // localStorage.setItem(cookie, history);
            api.addSearchHistory({
                userId: data.userId,
                lastSearch: history
            });
            // alert(history)
        }
        // 占位提前
        else {
            console.log('重复')
            let newHistory = '';
            history.split(tag).forEach((item, index) => {
                if (item === data.lastSearch) {
                    let historyArray = history.split(tag);
                    historyArray.splice(index, 1);
                    newHistory = data.lastSearch + tag + historyArray.join(tag);
                    // localStorage.setItem(cookie, newHistory);
                    api.addSearchHistory({
                        userId: data.userId,
                        lastSearch: newHistory
                    });
                }
            });
            // alert(newHistory);
        }
    })
}

function addPlayHistory2(cookie, tag, data) {
    // console.log(data, 'data')
    // let history = localStorage.getItem(cookie) === null ? '' : localStorage.getItem(cookie);
    let history = '';
    api.getPlayHistory(data.userId).then(res => {
        // console.log(res, 'lastPlay')
        history = res.data.data.length > 0 && res.data.data[0].lastPlay? res.data.data[0].lastPlay : '';
        // console.log(history, 'oldHistory')
        if (!history.includes(data.lastPlay)) {
            // console.log(data.lastPlay, 'data.lastPlay')
            history = history ? data.lastPlay + tag + history : data.lastPlay + history;
            // console.log(history, 'newhistory')
            // localStorage.setItem(cookie, history);
            api.addPlayHistory({
                userId: data.userId,
                lastPlay: history
            });
            // alert(history)
        }
        // 占位提前
        else {
            console.log('重复')
            let newHistory = '';
            history.split(tag).forEach((item, index) => {
                if (item === data.lastPlay) {
                    let historyArray = history.split(tag);
                    historyArray.splice(index, 1);
                    newHistory = data.lastPlay + tag + historyArray.join(tag);
                    // localStorage.setItem(cookie, newHistory);
                    api.addPlayHistory({
                        userId: data.userId,
                        lastPlay: newHistory
                    });
                }
            });
            // alert(newHistory);
        }
    })
}

export function addSearchHistory(data) {
    addSearchHistory2(searchHistoryCookie, searchHistoryTag, data);
    // api.addSearchHistory(data);
}

export function clearHistory(userId) {
    // localStorage.setItem('vuemisic-search-history', '');
    api.addSearchHistory({
        userId,
        lastSearch: ''
    });
}

export function getHistory(userId) {
    // return localStorage.getItem('vuemisic-search-history');
    return api.getSearchHistory(userId);
}

export function addPlayHistory(item) {
    addPlayHistory2(playHistoryCookie, playHistoryTag, {
        userId: getUser(),
        lastPlay: item
    });
}

export function getPlayHistory(userId) {
    // return localStorage.getItem('vuemisic-play-history');
    return api.getPlayHistory(userId);
}