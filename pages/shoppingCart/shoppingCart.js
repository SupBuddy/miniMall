// pages/shoppingCart/shoppingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      hasItem: true,
      isAllSelect: false,
      totalMoney: 0,
      products: [
        {
          isSelect: false,
          productImgPath: '/images/items/i04.jpg',
          productName: '蓝色百事可乐',
          productDescription: '热处理风味酸奶 高端畅饮',
          productPrice: 16.80,
          productNum: 1,
          slaesVolume: '888'
        },
        {
          isSelect: false,
          productImgPath: '/images/items/i05.jpg',
          productName: '榙榙草莓干 50g',
          productDescription: '热处理风味酸奶 高端畅饮',
          productPrice: 11.80,
          productNum: 1,
          slaesVolume: '666'
        }
      ]
    })
  },

  

  switchSelect(e){
    const idx = e.currentTarget.dataset.index;
    let products = this.data.products;
    const isSelect = products[idx].isSelect;
    let isAllSelect = this.data.isAllSelect;
    products[idx].isSelect = !isSelect;
    if ( products[idx].isSelect ){
      for (let i = 0; i < products.length; i++){
        if (products[i].isSelect != products[idx].isSelect){
          isAllSelect = false;
          break;
        }
        else {
          isAllSelect = true;
        }
      }
    }
    else {
      isAllSelect = false;
    }

    this.setData({
      products: products,
      isAllSelect: isAllSelect
    });
    this.getTotalPrice();
  },

  removeItem(e){
    const idx = e.currentTarget.dataset.index;
    let products = this.data.products;
    products.splice( idx, 1);
    this.setData({
      products: products
    });
    if ( !products.length ){
      this.setData({
        hasItem: false
      });
    }
    else{
      this.getTotalPrice();
    }
  },
  
  allSelect(e){
    let isAllSelect = this.data.isAllSelect;
    isAllSelect = !isAllSelect;
    let products = this.data.products;
    for ( let i = 0; i < products.length; i++ ){
      products[i].isSelect = isAllSelect;
    }
    this.setData({
      isAllSelect: isAllSelect,
      products: products
    });
    this.getTotalPrice();
  },

  addCount(e){
    const idx = e.currentTarget.dataset.index;
    let products = this.data.products;
    let num = products[idx].productNum;
    num += 1;
    products[idx].productNum = num;
    this.setData({
      products: products
    });
    this.getTotalPrice();
  },

  minusCount(e){
    const idx = e.currentTarget.dataset.index;
    let products = this.data.products;
    let num = products[idx].productNum;
    if ( num <= 1 ){
      return false;
    }
    num -= 1;
    products[idx].productNum = num;
    this.setData({
      products: products
    });
    this.getTotalPrice();
  },

  getTotalPrice(){
    let products = this.data.products;
    let total = 0;
    for ( let i = 0; i < products.length; i++){
      if (products[i].isSelect){
        total += products[i].productNum * products[i].productPrice;
      }
    } 
    this.setData({
      products: products,
      totalMoney: total.toFixed(1)
    })
  }



  // switchSelect: function(e){
  //   var totalPrice = 0, i = 0;
  //   let id = e.target.dataset.id,
  //   index = parseInt(e.target.dataset.index);
  //   this.data.products[index].isSelect = !this.data.products[index].isSelect;
  //   if (this.data.products[index].isSelect){
  //     this.data.totalMoney = this.data.totalMoney + this.data.products[index].productPrice;
  //   }
  //   else {
  //     this.data.totalMoney = this.data.totalMoney - this.data.products[index].productPrice;
  //   }

  //   //判断是否全选
  //   for (i=0; i<this.data.products.length; i++){
  //     totalPrice = totalPrice + this.data.products[i].productPrice;
  //   } 
  //   if (totalPrice == this.data.totalMoney){
  //     this.data.isAllSelect = true;
  //   }
  //   else{
  //     this.data.isAllSelect = false;
  //   }
  //   this.setData({
  //     products: this.data.products,
  //     totalMoney: this.data.totalMoney,
  //     isAllSelect: this.data.isAllSelect
  //   })
  // },

  // allSelect: function(e){
  //   let i = 0;
  //   if (!this.data.isAllSelect){
  //     for (i = 0; i < this.data.products.legth; i++){
  //       this.data.products[i].isSelcet = true;
  //       this.data.totalMoney = this.data.totalMoney + this.data.products[i].productPrice;
  //     }
  //   }
  //   else{
  //     for (i = 0; i < this.data.products.legth; i++){
  //       this.data.products[i].isSelcet = false;
  //     }
  //     this.data.totalMoney = 0;
  //   }
  //   this.setData({
  //     products: this.data.products,
  //     totalMoney: this.data.totalMoney,
  //     isAllSelect: this.data.isAllSelect
  //   })
  // },

  // openConfirm: function () {
  //   wx.showModal({
  //     title: '弹窗标题',
  //     content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
  //     confirmText: "主操作",
  //     cancelText: "辅助操作",
  //     success: function (res) {
  //       console.log(res);
  //       if (res.confirm) {
  //         console.log('用户点击主操作')
  //       } else {
  //         console.log('用户点击辅助操作')
  //       }
  //     }
  //   });
  // },
  // openAlert: function () {
  //   wx.showModal({
  //     content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
  //     showCancel: false,
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //       }
  //     }
  //   });
  // }
})