const searchHistoryCookie = 'vuemisic-search-history';
const playHistoryCookie = 'vuemisic-play-history';
const searchHistoryTag = '*/*';
const playHistoryTag = '*/*';

function addHistory(cookie, tag, query) {
    let history = localStorage.getItem(cookie) === null ? '' : localStorage.getItem(cookie);
    if (!history.includes(query)) {
        history = history ? query + tag + history : query + history;
        localStorage.setItem(cookie, history);
        // alert(history)
    }
    // 占位提前
    else {
        console.log('重复')
        let newHistory = '';
        history.split(tag).forEach((item, index) => {
            if (item === query) {
                let historyArray = history.split(tag);
                historyArray.splice(index, 1);
                newHistory = query + tag + historyArray.join(tag);
                localStorage.setItem(cookie, newHistory);
            }
        });
        // alert(newHistory);
    }
}

export function addSearchHistory(query) {
    addHistory(searchHistoryCookie, searchHistoryTag, query);
}

export function clearHistory() {
    localStorage.setItem('vuemisic-search-history', '');
}

export function getHistory() {
    return localStorage.getItem('vuemisic-search-history');
}

export function addPlayHistory(query) {
    addHistory(playHistoryCookie, playHistoryTag, query);
}

export function getPlayHistory() {
    return localStorage.getItem('vuemisic-play-history');
}