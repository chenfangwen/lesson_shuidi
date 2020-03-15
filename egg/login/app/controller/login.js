const Controller = require('egg').Controller;
class LoginController extends Controller{
    async register() {
        //村一条数据
        const {ctx} = this;
        const { password,username,email }= ctx.request.body;   
        //service 负责数据存储
        await ctx.service.user.register({password,username,email});
        // ctx.body = 'hi,刘姿依';
    }
    async loginIn() {
        //村一条数据
        const {ctx} = this;
        // console.log(ctx.request.body);
        const { username,password }= ctx.request.body;
        console.log(name,password);
        ctx.body = '登录成功';
    }
}

module.exports = LoginController;