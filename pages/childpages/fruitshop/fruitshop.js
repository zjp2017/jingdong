// pages/childpages/fruitshop/fruitshop.js
import {homeAllApiObj,nearShops,supermarket} from '../../../utils/api.js';
import {getAjax} from '../../../utils/ajaxRequest.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
	searchAndConfig:{},
	bannerAndChannel:{},
	searchCondition:{}, //排序方式
	nearShopDataArr:[] //附近的店铺
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  wx.setNavigationBarTitle({
		title:options.title
	  });
	// 1.请求数据
	let that=this;
	let nearShopData=nearShops;
	wx.getStorage({
	  key: 'location',
	  success (res) {
			if(res.data){
				that.getAjaxRequest(supermarket.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=channel%2FgetChannelDetail&body=%7B%22longitude%22:'+JSON.parse(res.data).lng+',%22latitude%22:'+JSON.parse(res.data).lat+',%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22,%22address%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%BD%AF%E4%BB%B6%E4%BA%A7%E4%B8%9A%E5%9F%BA%E5%9C%B0%22,%22coordType%22:%222%22,%22channelId%22:%224038%22,%22ref%22:%22%2Fhtml%2Findex.html%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+supermarket.data.jda+'&poi='+supermarket.data.poi+'&signKey=67b0b15efb3bef80a58215e740e17df6&traceId=H5_DEV_DFCD7890-0B62-416E-97F6-2DFDB8236F571583994123870');	
				that.getNearShop(nearShopData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22:%224038%22,%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22,%22longitude%22:'+JSON.parse(res.data).lng+',%22latitude%22:'+JSON.parse(res.data).lat+',%22currentPage%22:1,%22pageSize%22:10,%22rankType%22:0,%22filterTagIds%22:%22%22,%22lastStoreId%22:%22%22,%22coordType%22:%222%22,%22platform%22:%221%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+nearShopData.data.jda+'&poi='+nearShopData.data.poi+'&signKey=ac05fb56f716668635dc007659c9101d&traceId=H5_DEV_DFCD7890-0B62-416E-97F6-2DFDB8236F571584000923426');
			}
	  }
	});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getAjaxRequest(parmas){
  	  let that=this;
  	  //1. 关键字和banner
  	 getAjax(parmas).then(function(res){
  		
  		 let result=res.data.result;
  		  console.log(result);
  	    that.setData({
  	 		searchAndConfig:result.config.searchConfig,
  	 		bannerAndChannel:result.data
  	 	});
  	 });
  	 // 2.附近的店铺	 
  },
  getNearShop(parmas){
  	  let that=this;
  	  getAjax(parmas).then(function(res){
  		   // console.log(res.data.result.config);
  	     that.setData({
  	  		searchCondition:res.data.result.config,
  	  		nearShopDataArr:res.data.result.data.data	
  	  	});
  	  });
  }
})