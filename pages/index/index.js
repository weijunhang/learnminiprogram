import {
  getMultiDate,
  getShopData
} from '../../service/testwork.js'

const types = ['pop','new','sell']
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totopSwiper: [],
    tuijian:[],
    popularlike:[],
    titles:['流行','新款','推荐'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]},
    },
    currentType:'pop',
    currentPage:0,

    TOP_Back :1000,
    isback:false,
    isTabFixed:false,
    tabFixed:0,
    

    // textindex:3
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._getMultiDate()


    this._getShopData('pop',1)
    this._getShopData('new',2)
    this._getShopData('sell',3)
    
  },
  // <------------------网络请求函数-------------->
  _getMultiDate(){
    getMultiDate().then(res => {
      // console.log(res.data.data)
      const totopSwiper = res.data.data.splice(0, 4);
      const tuijian = res.data.data.splice(0, 4);
      const popularlike = res.data.data.splice(0, 8)
      // console.log(res.data.data)
      this.setData({
        totopSwiper,
        tuijian,
        popularlike
      })
    }).catch(err => console.log(err))
    // console.log(res.data.data)
    // this.setData({
    //   topSwiper: resolve
    // })
  },

  // 商品数据
  _getShopData(type,textindex) {
    // 获取页码
    const page = this.data.goods[type].page + 1

    // const textindex = this.data.textindex

    getShopData(type,page).then( res => {
      // console.log(res)
      const list = res.data.result[textindex].content
      const oldlist = this.data.goods[type].list
      oldlist.push(...list)

      const typekey = `goods.${type}.list`
      const pagekey = `goods.${type}.page`
      // console.log(typekey)
      this.setData({
        [typekey] : oldlist,
        [pagekey]:page
      })

    })
  },
 // <------------------事件监听函数-------------->
  handletab(e) {
    // console.log(e.detail.index)
    const index = e.detail.index
    this.setData({
      currentType : types[index],
      currentPage : index
      // textindex : index
    })

  },
  backtop(){
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  handleImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabFixed = rect.top
      }).exec()
  },
  onPageScroll(options){
    // console.log(options.scrollTop)
    const flag1 = options.scrollTop >= this.data.TOP_Back
    if (this.data.isback != flag1){
      this.setData({
        isback: flag1
      })
    }

    const flag2 = options.scrollTop >= this.data.tabFixed
    if (flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed : flag2
      })
    }
   
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
    this._getShopData(this.data.currentType, this.data.currentPage)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})