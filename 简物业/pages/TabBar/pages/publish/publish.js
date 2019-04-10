Page({

  /**
   * 页面的初始数据
   */
  data: {
    getpic:[],
  },


  chooseImage:function(event){
    var that=this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:function(res) {
        var list=that.data.getpic.concat(res.tempFilePaths)
          that.setData({
            getpic: list
          })
      if(list.length>9){
        console.log(list.length)
        wx.showModal({
          title: '提示',
          content: '最多只能选择9张图片',
        })
      }
      }
    })
  
    //   wx.chooseVideo({
    //     sourceType: ['album', 'camera'],
    //     maxDuration: 60,
    //     camera: 'back',
    //     success(res) {
    //       var list = that.data.getpic.concat(res.tempFilePaths)
    //       that.setData({
    //         getpic: list
    //       })
    //     }
    //   })
  },

  previewImage:function(e) {
    var that=this;
    var dataid = e.currentTarget.dataset.id;
    var getpic = that.data.getpic;
    wx.previewImage({
      current: getpic[dataid], // 当前显示图片的http链接
      urls: this.data.getpic // 需要预览的图片http链接列表
    })
  },

  deleteImg:function(event){
    var that=this;
    var id = event.currentTarget.dataset.id; 
    var ngetpic = that.data.getpic; 
    ngetpic.splice(id,1);
    that.setData({
      getpic: ngetpic
    })
    console.log("11")
  },


  publish:function(e){
    var that = this;
    var user_id = wx.getStorageSync('userid')
    wx.showLoading({
      title: '上传中',
    })
    that.img_upload()
  },

  img_upload:function(e){
    let that = this;
    let all= that.data.getpic;
    for(let i = 0 ; i < all.length; i++){
      wx.uploadFile({
        url: 'http://localhost/1/', // 仅为示例，非真实的接口地址
        filePath: all[i],
        name: 'file',
        formData: {
          user: 'test'
        },
        success(res) {
          const data = res.data
          // do something
        }
      })
    }
   
  }

  



  







  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
    
  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {
    
  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {
    
  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {
    
  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {
    
  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {
    
  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {
    
  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {
    
  // }
})