// components/childpages/fruitshop/fruitshopbanner/FruitShopBanner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	scrollBanner:{
		type:Array,
		value:[],
		observer:function(newVal){
			console.log(newVal);
			if(newVal.length>0){
				this.setData({
					scrollArr:newVal
				})
			}
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	scrollArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
