//index.js
//获取应用实例
const app=getApp();
Page({
  data:{
    currentTab:3,
    navData:[
      {
        id:1,
        name:'专车'
      },
      {
        id:2,
        name:'快车'
      },
      {
        id:3,
        name:'黑车'
      }
    ],
    navScrollLeft:0
  },
  switchNav(e){
    const cur = e.currentTarget.dataset.current;
    // console.log(cur);
    this.setData({
      currentTab:cur
    })
  },
  showUSer(){
    console.log(app);
    wx.navigateTo({
      url: 'pages/login/login'
    })
  },
  onLoad(){
    //取数据有专门的API
    wx.request({
      url:'http://localhost:1314/indexPage',
      success:(res)=>{
        // console.log(res)
        const navData=res.data.navData;
        this.setData({
          navData
        })
      }
    })
  }
  
})
