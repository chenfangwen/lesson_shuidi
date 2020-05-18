'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 网站，多个模块 /register ?  /login/register
  // 注册   Req res
  router.post('/login/register',controller.login.register);
// 登录
  router.post('/login',controller.login.loginIn)
};
