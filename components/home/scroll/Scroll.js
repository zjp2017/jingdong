// components/home/scroll/Scroll.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
	  //进入滚动item的详情页面
	enterDetail(e){
		console.log(e.currentTarget.dataset.index);
		wx.navigateTo({
			url:'/pages/childpages/scrollitemdetail/scrollitemdetail?id='+e.currentTarget.dataset.index,
			success:function(){
				console.log('进入页面成功');
			}
		})
	}
  }
})
