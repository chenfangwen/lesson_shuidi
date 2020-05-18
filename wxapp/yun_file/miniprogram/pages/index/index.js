
const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
Page({
  navigateTo(event){

  },
  getUserInfo:function(result){
    // console.log(result);   反馈的信息有限
    wx.cloud.callFunction({    //云里会给足够的信息，包括id
      name:'getOpenId',
      complete: res => {
        console.log(res);
        userInfo
          .where({
            _openid: res.result.openid
          })
          .count()
          .then(res => {
            if(res.total==0){
              userInfo.add({
                data:result.detail.userInfo
              })
              .then(res => {
                console.log(res);
                wx.navigateTo({
                  url:'../add/add',
                })
              })
              .catch(err=>{
                  console.error(err)
              })
            }else{
              wx.navigateTo({
                url:'../add/add',
              })
            }
          })
      }
    })
  }
})