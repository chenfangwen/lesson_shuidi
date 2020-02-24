// miniprogram/pages/buy.js
const cfclick = require('../../utils/util');
const db = wx.cloud.database(); //云数据库
const productsCollection = db.collection('indent'); //表 collection
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodid:'1acf1de95e1fb4ec0247eccc3c19f705',
    buttonClicked:false,
    product:{},
    num:1,
    rednum:0,
    membernum:0,
    money:0,
    newmoney:0,
    select1:1,
    select2:1,
    select3:1,
    curid:'',
    isred:'true',
    isHidden:'true',
    isAll:'全部',
    isTop:'../../images/down.png',
    selectimg:'../../images/select.png',
    selectsimg:'../../images/selects.png'
  },
  add(){
    var n = this.data.num+1;
    this.setData({
      num:n,
      money: this.data.product[0].basic_info.calories_value*n,
      newmoney: this.data.product[0].basic_info.calories_value*n+this.data.membernum-this.data.rednum
    })
    // console.log(this.data.num)
  },
  decrese(){
    if(this.data.num>1){
      var n = this.data.num-1;
      this.setData({
        num:n,
        money: this.data.product[0].basic_info.calories_value * n,
        newmoney: this.data.product[0].basic_info.calories_value * n +this.data.membernum - this.data.rednum
      })
    }
    
  },
  member(e){
    let id = e.currentTarget.dataset.id;
    // console.log(id);
     if(id == '1'){
      if(this.data.select1==2){
        this.setData({
          select1:1,
          rednum:0,
          membernum:0
        })
      }else{
        this.setData({
          curid:id,
          rednum:10,
          select1:2,
          select2:1,
          select3:1,
          membernum:99
        })
      }
      // let n = this.data.money-this.data.rednum;
      // this.setData({
      //   newmoney:n
      // })
    }else if(id == '2'){
      if(this.data.select2==2){
        this.setData({
          select2:1,
          rednum:0,
          membernum:0
        })
      }else{
        this.setData({
          curid:id,
          select1:1,
          rednum:10,
          select2:2,
          select3:1,
          membernum:29.9
        })
      }
      // let n = this.data.money-this.data.rednum;
      // this.setData({
      //   newmoney:n
      // })
    }else if(id == '3'){
      if(this.data.select3==2){
        this.setData({
          select3:1,
          rednum:0,
          membernum:0
        })
      }else{
        this.setData({
          curid:id,
          select1:1,
          rednum:10,
          select2:1,
          select3:2,
          membernum:9.9
        })
      }
    }
    let n = this.data.money+this.data.membernum-this.data.rednum;
      this.setData({
        newmoney:n
      })
    if(this.data.rednum==10){
      this.setData({
        isred:''
      })
    }else{
      this.setData({
        isred:'true'
      })
    }
    console.log(this.data.money, this.data.membernum, this.data.rednum)
    // console.log(this.data.select1,this.data.rednum,this.data.newmoney)
  },
  buysuc(){
    // console.log(this.data.buttonClicked)
    // console.log(cfclick)
    cfclick.ButtonClicked(this);
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let today = year+"年"+month+"月"+day+"日 "+hours+"时"+minute+"分"+second+"秒";
    let pro = this.data.product[0];
      productsCollection.add({
        data:{
          productid:pro._id,
          productimg: pro.basic_info.traffic_light_img_href,
          productprice: pro.basic_info.calories_value,
          tags: pro.basic_info.food_name,
          num:this.data.num,
          membernum:this.data.membernum,
          rednum:this.data.rednum,
          pay:this.data.newmoney,
          isuse:'未使用',
          date: today
        }
      }).then(res => {
        console.log(res);
    })
    setTimeout(function() {
      wx.showToast({
        title: '支付成功',
        icon: 'success',
        duration: 2000
      })
      wx.switchTab({
        url:'../indent/indent',
        success() {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad();
        }
      })
    }, 1000)
     
  },
  isShowAll(){
    if(this.data.isAll=='全部'){
      this.setData({
        isHidden:'',
        isAll:'收起',
        isTop:'../../images/top.png'
      })
      console.log(this.data.isHidden)
    }else{
      this.setData({
        isHidden:'true',
        isAll:'全部',
        isTop:'../../images/down.png'
      })
    }

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      this.setData({
        goodid: options.id
      })
    }
    var that = this;
    db.collection('goods').where({
      _id:this.data.goodid
    }).get({
      success(res){
        console.log('查寻成功',res.data);
        that.setData({
          product:res.data,
          money: res.data[0].basic_info.calories_value,
          newmoney: res.data[0].basic_info.calories_value
        })
      }
    })
    // console.log(this.data.money)
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