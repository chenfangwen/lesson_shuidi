'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async new() {
    //渲染模板
    // const { ctx } = this;
    // ctx.body = 'hi, post';
    await this.ctx.render('new.tpl');
  }
  async create() {
    //渲染模板
    const { ctx } = this;
    let {title,body}=ctx.request.body;
    await ctx.service.post.newPost(title,body)
    // console.log(title,body)
    // await this.ctx.render('new.tpl');
    ctx.redirect('/posts');
  }
  async index(){
    await this.ctx.render('index.tpl');
  }
}

module.exports = PostController;
