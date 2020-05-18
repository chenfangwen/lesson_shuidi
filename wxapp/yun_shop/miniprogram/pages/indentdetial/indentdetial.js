// miniprogram/pages/indentdetial/indentdetial.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indent:[],
    id:''
  },
  update(){
    var that = this;
    db.collection('indent').where({
      _id: this.data.id
    }).get({
      success(res) {
        console.log('查寻成功', res.data);
        that.setData({
          indent: res.data
        })
      }
    })
  },
  switch(){
    wx.switchTab({
      url: '../indent/indent',   //不刷新页面
      success:function(e){
        var page = getCurrentPages().pop();
        if(page == undefined || page == null) return;
        page.onLoad();
      }
    })
  },
  delete(){
    wx.cloud.callFunction({
      name: 'delete',
      data: {
        dataId: this.data.id
      },
      success: function (res) {
        if (res.result.errMsg == 'document.remove:ok') {
          console.log('调用成功----')
        }
      },
      fail: console.error
    })
    var that = this;
    setTimeout(that.switch, 500)
  },
  use(e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    var that = this;
    wx.cloud.callFunction({
      name: 'use',
      data: {
        dataId: id
      },
      success: function (res) {
        if (res.result.errMsg == 'document.remove:ok') {
          console.log('调用成功----')
        }
      },
      fail: console.error
    })
    // this.update;   立即执行，数据还未更新
    setTimeout(that.update, 500)
    setTimeout(that.switch,1500)
  },
  goodsdetial(e){
    let id = e.currentTarget.dataset.productid;
    wx.navigateTo({
      url: '../goodsshow/goodsshow?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let id = options.id;
    db.collection('indent').where({
      _id:id
    }).get({
      success(res){
        console.log('查寻成功', res.data);
        that.setData({
          indent: res.data,
          id:id
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