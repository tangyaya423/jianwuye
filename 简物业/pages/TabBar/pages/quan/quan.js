var util = require('../../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: [{
      name: '张数源',
      user_pic: 'http://img5.imgtn.bdimg.com/it/u=3359316317,2611527202&fm=26&gp=0.jpg'
    },
    ],
    quan_data: [
      {
        pic: 'http://img18.3lian.com/d/file/201710/25/a5ac553d84a468b7e08dd9bb936b0543.jpg',
        name: '张三@摄影师',
        content: [],
        mpic: [],
        zanst: 1,
        like: 1
      },

      {
        pic: 'http://img0.imgtn.bdimg.com/it/u=2729595223,1846007871&fm=26&gp=0.jpg',
        name: '李喵喵',
        content: [],
        mpic: [],
        zanst: 0,
        like: 1
      },

      {
        pic: 'http://img5.imgtn.bdimg.com/it/u=3944451820,2982202721&fm=26&gp=0.jpg',
        name: '五哥',
        content: [],
        mpic: [],
        zanst: 0,
        like: 1

      }
    ]

  },



  ToPublish: function (event) {
    wx.navigateTo({
      url: '../publish/publish',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  select_zan: function (event) {
    var that = this;
    var zandata = that.data.quan_data;
    var index = event.currentTarget.dataset.index;
    for (let i in zandata) {
      if (i == index) { //根据下标找到目标
        if (zandata[i].zanst == 0) { //如果是没点赞+1
          zandata[i].zanst = 1;
        } else {
          zandata[i].zanst = 0
        }
        wx.showToast({
          title: zandata[i].zanst == 0 ? '点赞成功' : '取消点赞'
        })
      }
    }
    that.setData({
      quan_data: zandata

    })
  },


  select: function (event) {
    var that = this;
    var data = that.data.quan_data;
    var index = event.currentTarget.dataset.index;
    for (let i in data) {
      if (i == index) { //根据下标找到目标
        if (data[i].like == 0) {
          data[i].like = 1;
        } else {
          data[i].like = 0
        }
        wx.showToast({
          title: data[i].like == 0 ? '收藏成功' : '取消收藏'
        })
      }
    }
    that.setData({
      quan_data: data

    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date())
    //为页面中time赋值
    this.setData({
      time: time
    })
    //打印
    console.log(time)


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

