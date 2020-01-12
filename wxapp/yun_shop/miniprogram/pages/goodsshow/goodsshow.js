// miniprogram/pages/goodsshow/goodsshow.jsconst db = wx.cloud.database();
const db = wx.cloud.database();
const _ = db.command;


const app=getApp();

Page({

  /**
   * 页面的初始数据
   */

  data: {
    c:'',
    i:'',
    // product:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.img);
    this.setData({
     c:options.id,
     i:options.img
    
    });
    console.log(this.c)
    //  console.log(c);
    // const productsCollection = db.collection("products").where({
    //   _id: _.eq(c)
    // });
    // const that =this;
    // productsCollection
    //   .get()
    //   .then(res => {
    //     that.setData({
    //       product: res.data
    //     })
    //   });
    // console(product);
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