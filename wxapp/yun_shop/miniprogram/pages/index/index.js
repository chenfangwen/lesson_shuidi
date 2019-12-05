const db = wx.cloud.database();
const productsCollection = db.collection("products");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */ 
  
  show (e) {
    wx.navigateTo({
      url: '../goodsshow/goodsshow',
    })
    const cur = e.currentTarget.dataset.current;
    const curimg = e.currentTarget.dataset.image;
     app.globalData.currentId=cur;
    app.globalData.image=curimg;
    
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    products: [],
    imgUrls:[
      "../../images/1.jpg",
      "../../images/2.jpg",
      "../../images/3.jpg"
    ],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    interval: 2000,
    duration: 500
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    productsCollection
      .get()
      .then(res => {
        this.setData({
          products: res.data
        })

      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})