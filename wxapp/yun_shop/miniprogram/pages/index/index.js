const db = wx.cloud.database();
const productsCollection = db.collection("products");
const data = require('../../data/data3');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */ 
  search(){
    wx.navigateTo({
      url: '../search1/search1',
    })
  },
  recommend(e){
    let type = e.currentTarget.dataset.recommendtype;
    wx.navigateTo({
      url: '../recommend/recommend?type=' + type,
    })
  },
  show (e) {
    const cur = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../goodsshow/goodsshow?id='+cur,
    })
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    goods:[],
    data1:[],
    data2:[],
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
    var that=this;
    let arr1 = [];
    for (let i = data.data.length-4;i<data.data.length-1;i++){
      arr1.push(data.data[i])
    }
    this.setData({
      data1: arr1
    })
    let arr2 = [];
    for (let i = data.data.length - 11; i < data.data.length-5; i++) {
      arr2.push(data.data[i])
    }
    console.log(arr1,arr2)
    this.setData({
      data2: arr2
    })
    db.collection('goods').get({
      success(res) {
        console.log('查寻成功', res.data);
        that.setData({
          goods: res.data
        })
      }
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