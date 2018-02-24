// pages/myOrders/myOrders.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['全部', '待付款', '待发货','待收货'],
    currentTab: 0,
    products: [
      {
        productImgPath: '/images/items/i04.jpg',
        productName: '蓝色百事可乐',
        productDescription: '热处理风味酸奶 高端畅饮',
        productPrice: 16.80,
        slaesVolume: '888'
      },
      {
        productImgPath: '/images/items/i05.jpg',
        productName: '榙榙草莓干 50g',
        productDescription: '热处理风味酸奶 高端畅饮',
        productPrice: 11.80,
        slaesVolume: '666'
      }
    ]
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
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