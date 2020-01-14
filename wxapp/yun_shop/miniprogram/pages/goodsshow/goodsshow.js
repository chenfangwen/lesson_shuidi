// miniprogram/pages/goodsshow/goodsshow.jsconst db = wx.cloud.database();
const db = wx.cloud.database();
const _ = db.command;


const app=getApp();

Page({

  /**
   * 页面的初始数据
   */

  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    c:'',
    i:'',
    product:[]
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var href = this.data.imghref;
    var goodsimg = this.data.goods_img;
    var imglist = [];
    for (var i = 0; i < goodsimg.length; i++) {
      imglist[i] = href + goodsimg[i].img
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imglist// 需要预览的图片http链接列表  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     c:options.id,
     i:options.img
    
    });
    var that = this;
    db.collection('products').where({
      _id:this.data.c
    }).get({
      success(res){
        console.log('查寻成功',res.data);
        that.setData({
          product:res.data
        })
      }
    })
    //  console.log(c);
    // const productsCollection = db.collection("products").where({
    //   _id:c
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