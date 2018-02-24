// pages/myAddresses/myAddresses.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses: [
      {
        isDefault: false,
        consignee: '静静',
        phoneNumber: '13766664321',
        detailedAddress: '云南省昆明市官渡区大都摩天A座12层'
      },
      {
        isDefault: false,
        consignee: '小明',
        phoneNumber: '13956786666',
        detailedAddress: '云南省昆明市官渡区关上金汁路100号城投综合楼A区15楼（顺兴时代正对面）'
      }
    ]
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
  
  },

  setDefault: function(e){
    this.setData({
      isDefault: this.data.addresses.isDefault
    })
    for ( var i = 0; i < this.data.addresses.length; i++){
      if (this.data.addresses[i].isDefault != true) {
        this.setData({
          isDefault: true
        })
      }
    } 
  }
})