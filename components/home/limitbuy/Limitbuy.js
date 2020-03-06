// components/home/limitbuy/Limitbuy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	limitedTime:{
		type:Array,
		value:[],
		observer:function(val){
			this.setData({
				limitedTimeArr:val
			})	
		}
	},
	limitedTimeTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
	limitedTimeArr:[],
	arr:[12,4,567]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

})
