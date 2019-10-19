// components/my-even/my-even.js
Component({

  properties: {

  },

  data: {

  },
  methods: {
    handleIcon(e){
      // console.log(e)
      this.triggerEvent('icon',{name:'wei',age:20},{})
    }
  }
})
