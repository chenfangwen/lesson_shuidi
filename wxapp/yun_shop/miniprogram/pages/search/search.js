// miniprogram/pages/search/search.js
const db = wx.cloud.database();
const productsCollection = db.collection("products");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[],
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
    currentIndex1:1,
    currentIndex2:6,
    currentType:'全部',
    currentSite:'全部'
  },
  showactive1(e) {
    let index = e.target.dataset.index;
    let type = e.target.dataset.type;
    this.setData({
      currentIndex1: index,
      currentType:type
    })
    if(type=='全部'){
      var that = this;
      db.collection('products').get({
        success(res) {
          console.log('查寻成功', res.data);
          that.setData({
            products: res.data
          })
        }
      })
    }
    if (this.data.currentType !== '全部'&&this.data.currentSite=='全部'){
      var that = this;
      db.collection('products').where({
        type: this.data.currentType,
      }).get({
        success(res) {
          console.log('查寻成功', res.data);
          that.setData({
            products: res.data
          })
        }
      })
    }
    if (this.data.currentSite !== '全部'){
      var that = this;
      db.collection('products').where({
        type: this.data.currentType,
        site: this.data.currentSite
      }).get({
        success(res) {
          console.log('查寻成功', res.data);
          that.setData({
            products: res.data
          })
        }
      })
    }
  },
  showactive2(e) {
    let index = e.target.dataset.index;
    let site = e.target.dataset.site;
    this.setData({
      currentIndex2: index,
      currentSite: site
    })
    if (this.data.currentSite == '全部') {
      var that = this;
      db.collection('products').where({
        type: this.data.currentType
      }).get({
        success(res) {
          console.log('查寻成功', res.data);
          that.setData({
            products: res.data
          })
        }
      })
    }
    if (this.data.currentType == '全部' && this.data.currentSite !== '全部'){
      var that = this;
      db.collection('products').where({
        site: this.data.currentSite
      }).get({
        success(res) {
          console.log('查寻成功', res.data);
          that.setData({
            products: res.data
          })
        }
      })
    }
    if (this.data.currentType !== '全部' && this.data.currentSite !== '全部'){
      var that = this;
      db.collection('products').where({
        type: this.data.currentType,
        site: this.data.currentSite
      }).get({
        success(res) {
          console.log('查寻成功', res.data);
          that.setData({
            products: res.data
          })
        }
      })
    }
    if (this.data.currentType == '全部' && this.data.currentSite == '全部') {
      var that = this;
      db.collection('products').get({
        success(res) {
          console.log('查寻成功', res.data);
          that.setData({
            products: res.data
          })
        }
      })
    }
  },
  search(){
    wx:wx.navigateTo({
      url: '../search1/search1',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  show(e) {

    const cur = e.currentTarget.dataset.current;
    const curimg = e.currentTarget.dataset.image;
    //  app.globalData.currentId=cur;
    // app.globalData.image=curimg;
    wx.navigateTo({
      url: '../goodsshow/goodsshow?id=' + cur + '&img=' + curimg,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    productsCollection
      .get()
      .then(res => {
        that.setData({
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