// components/home/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	searchWord:{
		type:'String',
		value:'搜索你想要的商品'
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	searchContent:'搜索附近的商家商品'
  },
  /**
   * 组件的方法列表
   */
  methods: {
	enterSearch(){
		// 进入搜索页面
		wx.navigateTo({
			url:'/pages/childpages/home/search/search?data='+this.data.searchContent,
			success:function(){
				
			}
			
		})
	}
  }
})
