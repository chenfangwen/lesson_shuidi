// miniprogram/pages/member/member.js
const data = require('../../data/data3');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[]
  },
  show(e) {
    const cur = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../goodsshow/goodsshow?id=' + cur,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr1 = [];
    for (let i = data.data.length - 15; i < data.data.length - 5; i++) {
      arr1.push(data.data[i])
    }
    this.setData({
      data: arr1
    })
    console.log(this.data.data)
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