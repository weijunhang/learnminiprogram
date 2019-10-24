// pages/request/request.js
import request from '../../until/until.js'

Page({

  data: {
    name: '',
    age: '',
    data1: ''
  },
  handleshu(e) {
    // console.log(e)
    this.setData({
      age: e.currentTarget.dataset.age
    })
  },
  handleTap() {
    const that = this;
    wx.request({
      url: 'https://api.yrw365.com/admin-web/api/user/mobile/bind',
      // success:function(res){
      //   that.setData({
      //     re : res.data
      //   })
      //   console.log(res)
      // } 
      success:res=>{
        console.log(res)
        this.setData({
          re : res.data
        })
        wx.showToast({
          title: '已提交',
        })
      }
    })
   
  },
  handledata1() {
    request({
      url: 'http://httpbin.org/get',
      method: 'get'
    }).then(res =>
      console.info(res)

    ).catch(err =>
      console.log(err)
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {



    wx.request({
      url: 'http://httpbin.org/post',
      method: ('post'),
      data: {
        name: 'jiak',
        age: 20
      },
      success: (res) => {
        // console.log(res)
        // console.log(typeof (JSON.stringify(JSON.parse(res.data.data))))
        // console.log(JSON.stringify(JSON.parse(res.data.data)))
        this.setData({
          name: JSON.parse(res.data.data).name,
          // age: res.data.json.age
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})