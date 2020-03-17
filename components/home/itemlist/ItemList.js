// components/home/itemlist/ItemList.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
	  multipleSlots:true
  },
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
	direFlg:0,
	showGift:true,
	listItem:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
	getMore(){
		// 点击获得更多优惠券
		let flg=this.data.direFlg==0?1:0;
		this.setData({direFlg:flg,showGift:!this.data.showGift});
	},
	//进入商家页面
	enterStore(e){
		wx.navigateTo({
			url:'/pages/childpages/storeinformation/storeinformation?storeId='+e.currentTarget.dataset.storeid+'&orgCode='+e.currentTarget.dataset.orgcode,
			success:function(){
				console.log('进入商家页面成功');
			}
		})
	}
  }
})
