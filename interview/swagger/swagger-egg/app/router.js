// api 从哪里开始的
// 后端 router -> api -> controller
module.exports = function(app) {
    app.router.get('/','home.index')
}