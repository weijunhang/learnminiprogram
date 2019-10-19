// pages/home/home.js
const app = getApp()
const name=app.globalData.name
Page({
  data: {
    list:[],
    imgPath:'',
    nowTime: new Date().toLocaleString(),
    isjm: 1,
    two:[
      [2,2,3,4],
      [4,35,64,23],
      [3,3],
      [3,22,2]
    ],
    isact:false
  },
  handleinput(e){
    console.log("用户输入",e)
  },
  tabhuan(){
    this.setData({
      isact:!this.data.isact
    })
  },
  handlechossAlbum(){
    wx.chooseImage({
      success:(res)=> {
        console.log(res)
        const path=res.tempFilePaths[0]
        this.setData({
          imgPath:path
        })
      },
    })
  },
  onLoad(){
    wx.request({
      url: 'https://api.yrw365.com/admin-web/api/user/mobile/bind',
      success: (res) => {
        console.log(res);
        const data = res.data
        this.setData({
          list:data
        })
      }
    }),
    // handleNowTime(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  // },
    console.log('onload 在调用')
  }
})