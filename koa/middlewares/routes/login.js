const Router = require('koa-router');
const auth = require('../middlewares/auth.js')
const router = new Router({
    prefix:'/login'
})

router.get('/',async (ctx) => {
    ctx.body = '登录成功'
})

module.exports = router