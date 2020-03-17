// pages/childpages/storeinformation/storeinformation.js
import {homeAllApiObj,nearShops,supermarket,storeInfor} from '../../../utils/api.js';
import {getAjax,postAjax} from '../../../utils/ajaxRequest.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
	couponShow:true,
	resultData1:{},
	resultData2:[],
	resultData3:[],
	requestParmas:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  console.log(options);
	  let that=this;
	  this.setData({
		  requestParmas:options
	  })
	  wx.setNavigationBarTitle({
	  	title:options.title
	  });
	  wx.getStorage({
	    key: 'location',
	    success (res) {
	  		if(res.data){
	  			var promise1 =getAjax(supermarket.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=store%2FstoreDetailV220&body=%7B%22storeId%22:%2211801247%22,%22skuId%22:%22%22,%22activityId%22:%22%22,%22promotionType%22:%22%22,%22longitude%22:113.94276,%22latitude%22:22.524586,%22missionId%22:%22%22,%22sourcePage%22:%22%22,%22keyWord%22:%22%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+supermarket.data.jda+'&poi='+supermarket.data.poi+'&signKey=dd132ed227ed5d4647d842f3fc1cd72e&traceId=H5_DEV_7D87288D-A7B8-4603-9E2E-1F209A9C38131584344059333');
	  			var promise2 =getAjax(supermarket.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=store%2FactArea&body=%7B%22storeId%22:%2211801247%22,%22orgCode%22:%2281372%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+supermarket.data.jda+'&poi='+supermarket.data.poi+'&signKey=dd132ed227ed5d4647d842f3fc1cd72e&traceId=H5_DEV_7D87288D-A7B8-4603-9E2E-1F209A9C38131584344059333');
	  			Promise.all([promise1,promise2]).then(function([res1,res2]) {
					that.setData({
						resultData1:res1.data.result,
						resultData2:res2.data.result
					})
	  			});
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
  // 点击收起
  retract(){
	  console.log(123);
	  this.setData({
		  couponShow:true
	  })
  }
})