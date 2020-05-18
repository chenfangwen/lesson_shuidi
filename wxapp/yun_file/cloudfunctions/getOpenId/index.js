const cloud = require('wx-server-sdk');
exports.main = async (event,context) => {   //async函数修饰符
  return event.userInfo;
}