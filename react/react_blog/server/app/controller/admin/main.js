'use strict';

const Controller = require('egg').Controller

class MainController extends Controller{

    // async index(){
    //     //首页的文章列表数据
    //     this.ctx.body='hi api'
    // }
    //判断用户名密码是否正确
    async checkLogin(){
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = " SELECT userName FROM user WHERE userName = '"+userName +
                    "' AND password = '"+password+"'"

        const res = await this.app.mysql.query(sql)
        // console.log(res)
        if(res.length>0){
            //登录成功,进行session缓存
            let openId1=new Date().getTime()
            this.ctx.session.openId1={ 'openId1':openId1 }
            // console.log(this.ctx.session.openId1,'+++')
            this.ctx.body={'data':'登录成功','openId':openId1}

        }else{
            this.ctx.session.openId1=[]
            this.ctx.body={data:'登录失败'}
        } 
    }
    //后台文章分类信息
    async getTypeInfo(){
        const resType = await this.app.mysql.select('type')
        this.ctx.body={data:resType}
    }


}

module.exports = MainController
