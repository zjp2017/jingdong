// components/childpages/storeinformation/shopheader/ShopHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	resultHeader:{
		type:Object,
		value:{},
		observer:function(newVal){
			console.log(newVal);
			this.setData({
				resultHeader:newVal
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	resultHeader:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
