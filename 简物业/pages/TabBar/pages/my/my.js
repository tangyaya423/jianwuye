Page({

  /**
   * 页面的初始数据
   */
  data: {
    mydata:[
      {
        image:'https://i02piccdn.sogoucdn.com/d73eb306ac08d778',
      name:'张数源',
      phone:'手机号：12345678910',
    },
    ],
    otherm:[
      {
        monery:'125',
        score:'5',
        monery1:'0.00',
      },
    ],
    middledata: [
      {
        content: '消息通知',
        pic: '/images/notice.png',
      },
   
      {
        pic: '/images/cart.png',
        content: '银行卡',
      },
   
      {
        pic: '/images/install.png',
        content: '设置',
      },
    
      {
        pic: '/images/login.png',
        content: '退出登录',
      },
    ],
    primarySize: 'mini',
    disabled: false,
     plain: false,
    loading: false
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