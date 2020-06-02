import { Context } from 'egg'
export default class UtilsConnector {
  ctx: Context;
  constructor(ctx: Context) {
    this.ctx = ctx
  }
  public githubURL() {
    const {login_url, client_id, scope} = this.ctx.app.config.github
    return `${login_url}?client_id=${client_id}&scope=${scope}&state=${Date.now()}`
  }
}
