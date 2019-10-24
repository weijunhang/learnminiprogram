// components/w-nav/w-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lists:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tapindex:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabText(e){
      // console.log(e)
      const index = e.currentTarget.dataset.index
      const name = e.currentTarget.dataset.name
      this.setData({
        tapindex: e.currentTarget.dataset.index
      })
      this.triggerEvent('tab', { index:index,name: name})
    }
  }
})
