// components/childpages/listcommodities/ListCommodities.js
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
	direFlg:0,
	showGift:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
	getMore(){
		// 点击获得更多优惠券
		console.log('a');
		let flg=this.data.direFlg==0?1:0;

		this.setData({direFlg:flg,showGift:!this.data.showGift});
	}
  }
})
