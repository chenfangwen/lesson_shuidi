// miniprogram/pages/indent/indent.js
const db = wx.cloud.database(); //云数据库
// const indentCollection = db.collection('indent'); //表 collection
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    isselect1: 1,
    isselect2:1,
    isselect2_2: 1,
    isselect2_3: 1,
    indent: [],
    unuseindent: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    db.collection('indent').where({
      isuse:'未使用'
    }).get({
      success(res) {
        console.log('查寻成功', res.data);
        that.setData({
          unuseindent:res.data
        })
      }
    })
    db.collection('indent').get({
      success(res) {
        console.log('查寻成功', res.data);
        that.setData({
          indent: res.data
        })
      }
    })
  },
  select1(e){
    let id = e.currentTarget.dataset.id;
    this.setData({
      isselect1:id
    })
  },
  select2(e) {
    let id = e.currentTarget.dataset.id2;
    this.setData({
      isselect2: id
    })
    // console.log(this.data.isselect2)
  },
  select2_2(e) {
    let id = e.currentTarget.dataset.id2;
    this.setData({
      isselect2_2: id
    })
    // console.log(this.data.isselect2)
  },
  select2_3(e) {
    let id = e.currentTarget.dataset.id2;
    this.setData({
      isselect2_3: id
    })
    // console.log(this.data.isselect2)
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