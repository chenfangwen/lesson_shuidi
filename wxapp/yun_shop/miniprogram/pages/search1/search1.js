// miniprogram/pages/search1/search1.js
const data = require('../../data/data3');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    value: "",
    searchResult:[],
    search_thing: [
      {
        id: 1,
        thing: '好吃的'
      },
      {
        id: 2,
        thing: '干烧猪脚'
      },
      {
        id: 3,
        thing: '变美了'
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
  show(e) {

    const cur = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../goodsshow/goodsshow?id=' + cur,
    })
  },
  onChange(event) {
    this.setData({
      value: event.detail
    });
    this.onClick();
  },
  onSearch() {
    this.onClick();
  },
  onClick() {
    this.setData({
      searchResult: []
    })
    let arr = [];
    for (let i = 0; i < this.data.data.length; i++) {
      let data = this.data.data[i];
      let a = '';
      a = data.type;
      let b = '';
      b = data.basic_info.food_name;
      if (a.indexOf(this.data.value)>-1 && this.data.value.length > 0) {
        arr.push(data)
      }
      if (b.indexOf(this.data.value) > -1 && this.data.value.length > 0) {
        arr.push(data)
      }
    }
    this.setData({
      searchResult: arr
    })
  },
  search2(e){
    const content = e.currentTarget.dataset.content;
    this.setData({
      value: content
    });
    this.onClick();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data:data.data
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