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
	requestParmas:"",
	rightArr:[]
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
				that.getUserinfor(supermarket.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=store%2FstoreDetailV220&body=%7B%22storeId%22:%2211801247%22,%22skuId%22:%22%22,%22activityId%22:%22%22,%22promotionType%22:%22%22,%22longitude%22:113.94276,%22latitude%22:22.524586,%22missionId%22:%22%22,%22sourcePage%22:%22%22,%22keyWord%22:%22%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+supermarket.data.jda+'&poi='+supermarket.data.poi+'&signKey=dd132ed227ed5d4647d842f3fc1cd72e&traceId=H5_DEV_7D87288D-A7B8-4603-9E2E-1F209A9C38131584344059333');				
				that.getLeftItem(supermarket.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=store%2FactArea&body=%7B%22storeId%22:%2211801247%22,%22orgCode%22:%2281372%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+supermarket.data.jda+'&poi='+supermarket.data.poi+'&signKey=dd132ed227ed5d4647d842f3fc1cd72e&traceId=H5_DEV_7D87288D-A7B8-4603-9E2E-1F209A9C38131584344059333');	
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
	  this.setData({
		  couponShow:true
	  })
  },
  getUserinfor(parmas){
	  let that=this;
	  getAjax(parmas).then(function(res){
		  that.setData({
			  resultData1:res.data.result
		  });
		  if(res.data.result.cateList.length>0){
			  let ajaxParmasId=res.data.result.cateList[0].catId?res.data.result.cateList[0].catId:res.data.result.cateList[0].type;
			  let ajaxTitle=res.data.result.cateList[0].title;
			  that.getRightResult(ajaxParmasId,ajaxTitle);
		  }  
	  }); 
  },
  getLeftItem(parmas){
	let that=this;
	getAjax(parmas).then(function(res){
	  that.setData({
		resultData2:res.data.result
	  });	 
	})
  },
  getRightResult(parmas1,parmas2){
	  let that=this;
	  let reqData=storeInfor.data;
	  let tempBody=JSON.parse(reqData.body);
	  tempBody.catIds[0].catId=parmas1;
	  tempBody.catIds[0].catName=parmas2;
	  tempBody.orgCode=this.data.requestParmas.orgCode;
	  tempBody.storeId=this.data.requestParmas.storeId;
	  reqData.body=JSON.stringify(tempBody);
	  postAjax(storeInfor.url,reqData).then(function(res){

		 if(res.data.result.searchCatResultVOList.length>0){
			 that.setData({
				 rightArr:res.data.result.searchCatResultVOList[0].searchResultVOList
			 });
		 }
		 
	  });
  },
  getItemAjax(parmas){
  		this.getRightResult(parmas.detail.catid,parmas.detail.title);	
  }
})