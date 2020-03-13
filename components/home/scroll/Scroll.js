// components/home/scroll/Scroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	bannerList:{
		type:Array,
		value:[]
	}
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
		console.log(e.currentTarget.dataset);
		console.log(e.currentTarget.dataset.goto);
		
		// if(e.currentTarget.dataset.index!=-1){
		// 	wx.navigateTo({
		// 		url:'/pages/childpages/'+e.currentTarget.dataset.url+'?id='+e.currentTarget.dataset.index+'&title='+e.currentTarget.dataset.title,
		// 		success:function(){
					
		// 			// console.log('进入页面成功');
		// 		}
		// 	})
		// }
		if(e.currentTarget.dataset.goto=='channelPage'){
			wx.navigateTo({
				url:'/pages/scrollItemPagesDetail/scrollItemPagesDetail?id='+e.currentTarget.dataset.index+'&title='+e.currentTarget.dataset.title,
				success:function(){
					
					// console.log('进入页面成功');
				}
			})
		}else if(e.currentTarget.dataset.goto=='web'){
			
		}
	}
  }
})
