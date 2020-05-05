let apiUrl = 'http://127.0.0.1:7001/admin/'
let servicePath = {
    checkLogin: apiUrl + 'checkLogin' ,
    getTypeInfo: apiUrl + 'getTypeInfo',
    addArticle:apiUrl + 'addArticle',
    updateArticle: apiUrl + 'updateArticle',
    getArticleList: apiUrl + 'getArticleList',
    delArticle: apiUrl + 'delArticle/',
    getArticleById: apiUrl + 'getArticleById/',
    
}
export default servicePath;