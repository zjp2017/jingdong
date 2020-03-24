//index.js
//获取应用实例
const app = getApp();
import {homeAllApiObj,nearShops} from '../../utils/api.js';
import {getAjax} from '../../utils/ajaxRequest.js';
var bmap = require('../../libs/bmap-wx.min.js');
Page({
  data: {
	addressName:"",
	backgroundImg:{'topImg':'','borderImg':''},
	bannerImg:'',        //第一个中心大图
    hasUserInfo: false,
	bannerList:[],     
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
	responseData:'',    //返回的总的数据
	centerBanner:[],	//第一个banner
	discountArr:[],  //优惠专区列表
	limitedTime:[] ,//限时抢购
	limitedTimeTitle:'限时抢购',
	searchCondition:{}, //排序方式
	nearShopDataArr:[] //附近的店铺
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
 
	  let that=this;
		wx.getSetting({
		  success(res) {

			if (!res.authSetting['scope.userLocation']) { 
				// 发起授权，再获取位置信息
			  wx.authorize({
				scope: 'scope.userLocation',
				success (res) {
					that.getAddress(); 
				}
			  })
			}else{
				// 已经授权，直接获取地理位置信息
				that.getAddress();    
			}
		  }
		 });
		if (app.globalData.userInfo) {
		  this.setData({
			userInfo: app.globalData.userInfo,
			hasUserInfo: true
		  })
		} else if (this.data.canIUse){
		  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
		  // 所以此处加入 callback 以防止这种情况
		  app.userInfoReadyCallback = res => {
			this.setData({
			  userInfo: res.userInfo,
			  hasUserInfo: true
			})
		  }
		} else {
		  // 在没有 open-type=getUserInfo 版本的兼容处理
		  wx.getUserInfo({
			success: res => {
			  app.globalData.userInfo = res.userInfo
			  this.setData({
				userInfo: res.userInfo,
				hasUserInfo: true
			  })
			}
		  })
		}
  },
  onReady:function(){
 
  },
  getUserInfo: function(e) {
	  console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    app.globalData.location = {
		lat:22.52483,
		lng:113.9387,
		locationName:'深圳市'
	};
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getAddress:function(){
	  let that=this;
	  var BMap = new bmap.BMapWX({
	       ak: '4OHrnndmXKzOiuTFav7QGBX8On4SAY9G' 
	   }); 
	   var fail = function(data) { 
	       console.log(data) 
		  
	   }; 
	   var success = function(data) {
		  
		   homeAllApiObj.data.body.currentPage=1;
		   homeAllApiObj.data.lng=data.originalData.result.location.lng;
		   homeAllApiObj.data.lat=data.originalData.result.location.lat;
		   homeAllApiObj.data.poi=data.originalData.result.formatted_address;
		    homeAllApiObj.data.body= JSON.stringify(homeAllApiObj.data.body);
		    console.log(homeAllApiObj);
		   that.setData({
			   addressName:{"lat":data.originalData.result.location.lat,"lng":data.originalData.result.location.lng,address:data.originalData.result.formatted_address}
		   });
			wx.setStorage({
			  key: 'location',
			  data:JSON.stringify({"lat":data.originalData.result.location.lat,"lng":data.originalData.result.location.lng,address:data.originalData.result.formatted_address})
			});
			// that.getAllData(homeAllApiObj.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+data.originalData.result.location.lng+'&lat='+data.originalData.result.location.lat+'&city_id=1607')
			that.getAllData(homeAllApiObj)
			
			// that.getNearShop(nearShops.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22:%22%22,%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22,%22longitude%22:'+data.originalData.result.location.lng+',%22latitude%22:'+data.originalData.result.location.lat+',%22currentPage%22:1,%22pageSize%22:10,%22rankType%22:0,%22filterTagIds%22:%22%22,%22lastStoreId%22:%22%22,%22coordType%22:%222%22,%22platform%22:%221%22%7D&lng='+data.originalData.result.location.lng+'&lat='+data.originalData.result.location.lat+'&city_id=1607&jda='+nearShops.data.jda+'&lat='+data.originalData.result.location.lat+'&lng='+data.originalData.result.location.lng+'&poi='+nearShops.data.poi+'&signKey='+nearShops.data.signKey+'&traceId='+nearShops.data.traceId);
	   }; 
	   BMap.regeocoding({ 
	       fail: fail, 
	       success: success
	   });

  },
 
  getAllData:function(parmas){
	let that=this;
  	getAjax(parmas).then(function(res){
		 let resultData=res.data.result;
		   if(resultData&&resultData.data.length>0){
			   let responseData=resultData;
			   let backgroundImg={};
			   let bannerImg="";
			   let bannerList=[];
			   let centerBanner=[];//第一个banner
			   let discountArr=[]; //优惠专区的上2个
			   let limitedTime=[]; //限时抢购
			   let limitedTimeTitle="" //限时抢购标题
			   let bootomBanner=[]; //底部的banner
			   for(let i=0;i<resultData.data.length;i++){
				   if(resultData.data[i].data.length>0){
					 for(let j=0;j<resultData.data[i].data.length;j++){
					   if(resultData.data[i].data[j].floorStyle=='ball'){//小图滚动部分
							console.log(resultData.data[i].data[j].data);
						     bannerList=resultData.data[i].data[j].data;
					   }else if(resultData.data[i].data[j].floorStyle=='marketing'){//弹框
							console.log(resultData.data[i].data[j].data);
					   }else if(resultData.data[i].data[j].floorStyle=='banner'){  //第一个banner
								centerBanner=resultData.data[i].data[j].data;		   
					   }else if(resultData.data[i].data[j].floorStyle=='act2'){ //优惠专区的上2个
								console.log(resultData.data[i].data[j].data);		   
					   }else if(resultData.data[i].data[j].floorStyle=='act4'){ //优惠专区的下4个
						    console.log(resultData.data[i].data[j].data);
					   }else if(resultData.data[i].data[j].floorStyle=='seckill'){//限时抢购
						     console.log(resultData.data[i].data[j].data);
					   }else if(resultData.data[i].data[j].floorStyle=='floorBanner'){//底部的banner
						   bootomBanner=resultData.data[i].data[j].data;
					   }
					 }  
				   }
				   
			   };
			  
			    that.setData({
					responseData:responseData,
					bannerList:bannerList,
					centerBanner:centerBanner,
					discountArr:discountArr,
					limitedTime:limitedTime,
					limitedTimeTitle:"ss",
					bootomBanner:bootomBanner
				});
		   }
  			// let temBannerList=res.data.result.data[1].data[0].data;
  		// 	for(let i=0;i<temBannerList.length;i++){
				// console.log(temBannerList[i].floorCellData);
  		// 		if(temBannerList[i].floorCellData.title.indexOf("超")>-1){
  		// 			temBannerList[i].floorCellData["url"]="supermarket/supermarket";
  		// 		}else if(temBannerList[i].floorCellData.title.indexOf("菜")>-1){
  		// 			temBannerList[i].floorCellData["url"]="foodmarket/foodmarket";
  		// 		}else if(temBannerList[i].floorCellData.title.indexOf("果")>-1){
  		// 			temBannerList[i].floorCellData["url"]="fruitshop/fruitshop";
  		// 		}else if(temBannerList[i].floorCellData.title.indexOf("花")>-1){
  		// 			temBannerList[i].floorCellData["url"]="flowersandplants/flowersandplants";
  		// 		}else if(temBannerList[i].floorCellData.title.indexOf("药")>-1){
  		// 			temBannerList[i].floorCellData["url"]="medicalhealth/medicalhealth";
  		// 		}else if(temBannerList[i].floorCellData.title.indexOf("家居")>-1){
  		// 			temBannerList[i].floorCellData["url"]="homefashion/homefashion";
  		// 		}else if(temBannerList[i].floorCellData.title.indexOf("蛋糕")>-1){
  		// 			temBannerList[i].floorCellData["url"]="bakecake/bakecake";
  		// 		}else{
  		// 			temBannerList[i].floorCellData["url"]="";
  		// 		}
  		// 	};
  	
  	  //  that.setData({
  			// 	responseData:res.data.result,
  			// 	backgroundImg:{'topImg':res.data.result.config.searchConfig.topImg,'borderImg':res.data.result.config.searchConfig.borderImg},
  			// 	bannerImg:res.data.result.data[0].data[0].data[0].floorCellData.imgUrl,
  			// 	bannerList:temBannerList,
  			// 	centerBanner:res.data.result.data[2].data[0].data,
  			// 	discountArr:res.data.result.data[3].data,
  			// 	limitedTime:res.data.result.data[4].data[0].data,
  			// 	limitedTimeTitle:res.data.result.data[4].data[0].floorTitle.floorName,
  			// 	bootomBanner:res.data.result.data[5].data[0].data
  				
  			// });
  	});
  },
  // 2.首页附近店铺数据
  getNearShop:function (parmas){
	let that=this;
  	getAjax(parmas).then(function(res){
  	   that.setData({
  			searchCondition:res.data.result.config,
  			nearShopDataArr:res.data.result.data.data	
  		});
  	});
  }
})
