// components/find/cookbooklist/CookBookList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	resultDataContentItem:{
		type:Object,
		value:[],
		observer:function(newVal){
			this.setData({
				dataItem:newVal
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	dataItem:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
