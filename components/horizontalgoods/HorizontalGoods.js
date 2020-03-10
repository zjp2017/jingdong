// components/horizontalgoods/HorizontalGoods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	itemListArr:{
		type:Object,
		value:{},
		observer:function(newVal){
			if(JSON.stringify(newVal) != "{}"){
				this.setData({
					listItem:newVal
				})
			}
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	listItem:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
