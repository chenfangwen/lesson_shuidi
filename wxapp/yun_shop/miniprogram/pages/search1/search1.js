// miniprogram/pages/search1/search1.js
Page({

  /**
   * 页面的初始数据
   */
  cancel(){
    wx.navigateBack({
      
    })
  },
  search(e){
    const content = e.currentTarget.dataset.content;
    this.setData({
      search_content: content
    })
   
  },
  data: {
    search_content:'',
    search_thing:[
      {
        id:1,
        thing:'火锅'
      },
      {
        id: 2,
        thing: '美容'
      },
      {
        id: 3,
        thing: '烤肉'
      },
      {
        id: 4,
        thing: '2-3人餐'
      },
      {
        id: 5,
        thing: '中餐'
      },
      {
        id: 6,
        thing: '世茂'
      }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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