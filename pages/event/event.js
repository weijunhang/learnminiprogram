// pages/event/event.js
Page({
  data: {
    name:'',
    age:'',
    even:'',
    xundata:['衣服','裤子','鞋子']
  },
  handleobj(e){
    console.log(e)
  },
  handleBtn(){
    console.log("dianji")
  },
  handleTouchStart(){
    console.log("触摸开始")
  },
  handleTap() {
    console.log("点击")
  },
  handleTouchEnd(){
    console.log("触摸结束")
  },
  handleTouchMove(){
    console.log("移动中")
  },
  handleTouchCancel(){
    console.log("被打断")
  },
  
  handleLongPress(){
    console.log("超时未松开")
  },
  handleTouchStart(e){
    console.log(e);
    console.log(e.currentTarget.dataset.even)
    this.setData({
      name: '姓名：'+e.currentTarget.dataset.name,
      age: '年龄：'+ e.currentTarget.dataset.age + '岁',
      even: '事件：'+e.currentTarget.dataset.even,

    })
  },
  handleEvenCan(e){
    console.log(e)
    const index = e.currentTarget.dataset.index
    const title = e.currentTarget.dataset.item
    console.log(index, title)
  },
  handleCaptrueBind1(){
    console.log("handleCaptrueBind1")
  },
  handleBind1(){
    console.log("handleBind1")
  },
  handleCaptrueBind2() {
    console.log("handleCaptrueBind2")
  },
  handleBind2() {
    console.log("handleBind2")
  },
  handleCaptrueBind3() {
    console.log("handleCaptrueBind3")
  },
  handleBind3() {
    console.log("handleBind3")
  }


})