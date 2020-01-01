// components/childpages/scrollitemdetail/ScrollItemDetailInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
	searchContent:'初冬御寒'
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
