// components/home/buyscroll/Buyscroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
		limitedTimeArr:{
			type:Array,
			value:[],
			observer:function(val){
				this.setData({
					limitedTimeArrTwo:val
				},function(){
					// console.log(this.data.limitedTimeArrTwo);	
				})	
			}
		},
  },

  /**
   * 组件的初始数据
   */
  data: {
	limitedTimeArrTwo:[]
	
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready:function(){
	  
  }
})
