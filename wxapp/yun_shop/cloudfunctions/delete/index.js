// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "chenfangwen-iigtn"
})
const db = cloud.database();


// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('indent').doc(event.dataId).remove()
  } catch (err) {
    console.log(err)
  }
}