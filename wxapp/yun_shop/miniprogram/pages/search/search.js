// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_thing1:[
      {
        id:1,
        thing:"全部"
      },
      {
        id: 2,
        thing: "好吃的"
      },
      {
        id: 3,
        thing: "变美了"
      },
      {
        id: 4,
        thing: "出去浪"
      },
      {
        id: 5,
        thing: "宝贝玩"
      }
    ],
    search_thing2: [
      {
        id: 6,
        thing: "全部"
      },
      {
        id: 7,
        thing: "红谷滩"
      },
      {
        id: 8,
        thing: "西湖区"
      },
      {
        id: 9,
        thing: "东湖区"
      },
      {
        id: 10,
        thing: "青山湖"
      }
    ],
    search_thing3: [
      {
        id: 11,
        thing: "高新区"
      },
      {
        id: 12,
        thing: "南昌县"
      },
      {
        id: 13,
        thing: "新建区"
      },
      {
        id: 14,
        thing: "青云谱"
      }
    ],
    search_thing4: [
      {
        id: 15,
        thing: "湾里区"
      },
      {
        id: 16,
        thing: "经开区"
      },
      {
        id: 17,
        thing: "安义县"
      },
      {
        id: 18,
        thing: "附近的"
      }
    ],
    currentIndex:1
  },
  showactive(e) {
    let index = e.target.dataset.index;
   
    this.setData({
      currentIndex: index
    })
    
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