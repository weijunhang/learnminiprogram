// pages/tab-component/tab-component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navdata: ['流行', '特惠', '本地', '全部']
  },
  handlecurrer(e){
    console.log(e.detail.name)
  },
  // 页面内直接操作组件的一种方法（不推荐）
  // handlesun(){
  //   // console.log('kkkk')
  //     // 通过方法selectComponent('.class/#id')获取组件对象
  //   const my_nav = this.selectComponent('#sunn')
  //   // console.log(my_nav)
  //   my_nav.setData({
  //     // 直接修改contner
  //    contner : my_nav.data.contner +1
  //   })
  // },
  handlesun(){
    const my_nav =this.selectComponent('#sunn')
    my_nav.sunaa(10)
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