// components/my-prop/my-prop.js
Component({
  properties: {
    // props : String
    props:{
      type: String,
      value: "这是默认的标题",
      observer:function(data1,data2){
        console.log(data1,data2)
      }
    }
  },
  externalClasses: ['titleclass','titleclass1']
})
