// components/my-nav/my-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navdata:{
      type:Array,
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex : 0,
    contner: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem1(event){
      console.log(this)
      const index = event.currentTarget.dataset.index 
      const name = event.currentTarget.dataset.name 
      this.setData({
        currentIndex:index,
      })
      // this.triggerEvent('currer',{name:name,index:index})
      this.triggerEvent('currer',{index,name:this.properties.navdata[index]})
    },
    sunaa(num){
      this.setData({
        contner:this.data.contner + num
      })
    }
  }
})
