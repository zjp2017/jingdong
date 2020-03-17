// components/find/cookbookbanner/CookBookBanner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	resultDataBanner:{
		type:Array,
		value:[],
		observer:function(newVal){
			console.log(newVal);
			this.setData({
				dataArray:newVal
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	dataArray:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
