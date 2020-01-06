// components/childpages/storeinformation/notice/Notice.js
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
	// 拨打电话
	makePhone(){
		console.log('adsfas');
		wx.makePhoneCall({
			phoneNumber:'1846578456',
			success:function(res){
				cconsole.log('拨打电话');
			}
		})
	},
	// 查看全部评价
	seeAllEvaluate(){
		wx.navigateTo({
			url:'/pages/childpages/allevaluate/allevaluate',
			success:function(){
				
			}
		})
	}
  }
})
