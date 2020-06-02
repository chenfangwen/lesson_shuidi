import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    const { config } = ctx.app;
    const data = {
      client_id: config.github.client_id,
      scope: config.github.scope
    }
    await ctx.render('login.html', data)
    console.log(data)
  }
}
