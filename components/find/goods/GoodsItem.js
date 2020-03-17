// components/find/goods/GoodsItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	itemData:{
		type:Object,
		value:{},
		observer:function(newVal){
			this.setData({
				itemData:newVal
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	itemData:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
