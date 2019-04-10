//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tooldata:[
      {
        pic:'/images/pay.jpg',
        name:'生活缴费',
        pic1: '/images/car.png',
        name1: '车位管理',
        pic2: '/images/aeg.jpg',
        name2: '维修管理',
        pic3: '/images/Medkit.png',
        name3: '社区医疗',
       pic4: '/images/sao.jpg',
        name4: '家政服务',
      },
   
      {
        pic: '/images/Shop.png',
        name: '附近商家',
        pic1: '/images/Credit-Card.png',
        name1: ' 门禁服务',
        pic2: '/images/House.png',
        name2: '闲置托管',
        pic3: '/images/Snapchat.png',
        name3: '失物招领',
        pic4: '/images/pet.jpg',
        name4: '宠物护理',
      },
    ],
    notice:[
      {
        title1:'1.停水通知',
        content: '小区将于2018年4月23日停水，请各位业主做好储水。',
      },   
    ],
    notice1: [
       {
        title2: '2.小区活动',
        content: '五一将近，小区特在活动中心开展“五一劳动节·我最光荣”活动，活动内容有义卖、社区垃圾打扫、绿化剪裁等，望大家积极踊跃参加。',
       },     
    ],
    quan:[
      {
        content:'张三@摄影师：最近小区的花园开花了，春天真的来了~',
        quan_pic:'/images/1111.jpg',
        quan_pic1: '/images/park1.jpg',
      },
    ],
    share0:[
      {
        share_pic:'http://bpic.588ku.com/element_origin_min_pic/01/48/43/3357442691ddd15.jpg'
      },
    ],
    share1: [
      {
        collect_pic: 'http://pic.51yuansu.com/pic2/cover/00/43/42/5811c7a75a898_610.jpg'
      },
    ],
    share2: [
      {
        comment_pic: 'http://www.51yuansu.com/pic2/cover/00/33/65/58112b45d4b1c_610.jpg'
      },
    ],
  }, 

  Toquan:function(event){
    wx.switchTab({
      url: '../quan/quan',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

    ToLifePay: function(event) {
      wx.navigateTo({
        url: '../life_pay/life_pay',
      })
  },

})

