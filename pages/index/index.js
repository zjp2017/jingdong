//index.js
//获取应用实例
const app = getApp();
import {homeAllApiObj,nearShops} from '../../utils/api.js';
import {getAjax} from '../../utils/ajaxRequest.js';
var bmap = require('../../libs/bmap-wx.min.js');
<<<<<<< HEAD


=======
const { $Toast } = require('../../dist/base/index');
>>>>>>> 9604bad2f08150966cafa8a64e008637071b6363
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
<<<<<<< HEAD
			  console.log(res);
			if (!res.authSetting['scope.userLocation']) {
				// 发起授权
			  wx.authorize({
				scope: 'scope.userLocation',
				success (res) {
				  wx.getStorage({
					key: 'location',
					success (res) {
						if(res.data){
							wx.setStorage({
							  key: 'location',
							  data:JSON.stringify({"lat":res.data.lat,"lng":res.data.lng})
							})
						}
					}
				  })
				 
				}
			  })
			}else{
=======
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
>>>>>>> 9604bad2f08150966cafa8a64e008637071b6363
				that.getAddress();    
			}
		  }
		});
<<<<<<< HEAD
	 // 请求数据
		 let requestData=homeAllApiObj;
		 let nearShopData=nearShops;
		 wx.getStorage({
		   key: 'location',
		   success (res) {
			if(res.data){
				nearShopData.data.body.latitude=JSON.parse(res.data).lat;
				nearShopData.data.body.longitude=JSON.parse(res.data).lng;
				nearShopData.data.lat=JSON.parse(res.data).lat;
				nearShopData.data.lng=JSON.parse(res.data).lng;
				
				getAllData(requestData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607')
				
				getNearShop(nearShopData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22:%22%22,%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22,%22longitude%22:'+JSON.parse(res.data).lng+',%22latitude%22:'+JSON.parse(res.data).lat+',%22currentPage%22:1,%22pageSize%22:10,%22rankType%22:0,%22filterTagIds%22:%22%22,%22lastStoreId%22:%22%22,%22coordType%22:%222%22,%22platform%22:%221%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+nearShopData.data.jda+'&lat='+nearShopData.data.lat+'&lng='+nearShopData.data.lng+'&poi='+nearShopData.data.poi+'&signKey='+nearShopData.data.signKey+'&traceId='+nearShopData.data.traceId);
				

			}else{
				getLocationFn();
			}
		   }
		 });
		 
		 function getLocationFn(){
			 console.log(3);
			wx.getLocation({
				success:function(result){
					// app.globalData.location = {
					// 	lat:'',
					// 	lng:'',
					// 	locationName:'深圳市'
					// };
					console.log(4);
					nearShopData.data.body.latitude=JSON.parse(res.data).lat;
					nearShopData.data.body.longitude=JSON.parse(res.data).lng;
					nearShopData.data.lat=JSON.parse(res.data).lat;
					nearShopData.data.lng=JSON.parse(res.data).lng;
					getAllData(requestData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+ result.longitude+'&lat='+result.latitude+'&city_id=1607');
					
					getNearShop(nearShopData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22:%22%22,%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22,%22longitude%22:'+JSON.parse(res.data).lng+',%22latitude%22:'+JSON.parse(res.data).lat+',%22currentPage%22:1,%22pageSize%22:10,%22rankType%22:0,%22filterTagIds%22:%22%22,%22lastStoreId%22:%22%22,%22coordType%22:%222%22,%22platform%22:%221%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+nearShopData.data.jda+'&lat='+nearShopData.data.lat+'&lng='+nearShopData.data.lng+'&poi='+nearShopData.data.poi+'&signKey='+nearShopData.data.signKey+'&traceId='+nearShopData.data.traceId);
					
				}
			});
		 };
		//1.首页大部分数据
		function getAllData(parmas){
			getAjax(parmas).then(function(res){
					
					let temBannerList=res.data.result.data[1].data[0].data;
					for(let i=0;i<temBannerList.length;i++){
						if(temBannerList[i].floorCellData.title.indexOf("超")>-1){
							temBannerList[i].floorCellData["url"]="supermarket/supermarket";
						}else if(temBannerList[i].floorCellData.title.indexOf("菜")>-1){
							temBannerList[i].floorCellData["url"]="foodmarket/foodmarket";
						}else if(temBannerList[i].floorCellData.title.indexOf("果")>-1){
							temBannerList[i].floorCellData["url"]="fruitshop/fruitshop";
						}else if(temBannerList[i].floorCellData.title.indexOf("花")>-1){
							temBannerList[i].floorCellData["url"]="flowersandplants/flowersandplants";
						}else if(temBannerList[i].floorCellData.title.indexOf("药")>-1){
							temBannerList[i].floorCellData["url"]="medicalhealth/medicalhealth";
						}else if(temBannerList[i].floorCellData.title.indexOf("家居")>-1){
							temBannerList[i].floorCellData["url"]="homefashion/homefashion";
						}else if(temBannerList[i].floorCellData.title.indexOf("蛋糕")>-1){
							temBannerList[i].floorCellData["url"]="bakecake/bakecake";
						}else{
							temBannerList[i].floorCellData["url"]="";
						}
					};
			
			   that.setData({
						responseData:res.data.result,
						backgroundImg:{'topImg':res.data.result.config.searchConfig.topImg,'borderImg':res.data.result.config.searchConfig.borderImg},
						bannerImg:res.data.result.data[0].data[0].data[0].floorCellData.imgUrl,
						bannerList:temBannerList,
						centerBanner:res.data.result.data[2].data[0].data,
						discountArr:res.data.result.data[3].data,
						limitedTime:res.data.result.data[4].data[0].data,
						limitedTimeTitle:res.data.result.data[4].data[0].floorTitle.floorName,
						bootomBanner:res.data.result.data[5].data[0].data
						
					});
			});
		};
		// 2.首页附近店铺数据
		function getNearShop(parmas){
			getAjax(parmas).then(function(res){
			   that.setData({
					searchCondition:res.data.result.config,
					nearShopDataArr:res.data.result.data.data	
				});
			});
		};
=======

>>>>>>> 9604bad2f08150966cafa8a64e008637071b6363
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
<<<<<<< HEAD
=======
	  let that=this;
>>>>>>> 9604bad2f08150966cafa8a64e008637071b6363
	  var BMap = new bmap.BMapWX({
	       ak: '4OHrnndmXKzOiuTFav7QGBX8On4SAY9G' 
	   }); 
	   var fail = function(data) { 
	       console.log(data) 
		  
	   }; 
	   var success = function(data) {
<<<<<<< HEAD
		  
=======
		   that.setData({
			   addressName:{"lat":data.originalData.result.location.lat,"lng":data.originalData.result.location.lng,address:data.originalData.result.formatted_address}
		   });
>>>>>>> 9604bad2f08150966cafa8a64e008637071b6363
			wx.setStorage({
			  key: 'location',
			  data:JSON.stringify({"lat":data.originalData.result.location.lat,"lng":data.originalData.result.location.lng,address:data.originalData.result.formatted_address})
			});
<<<<<<< HEAD
=======
			that.getAllData(homeAllApiObj.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+data.originalData.result.location.lng+'&lat='+data.originalData.result.location.lat+'&city_id=1607')
			
			that.getNearShop(nearShops.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22:%22%22,%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22,%22longitude%22:'+data.originalData.result.location.lng+',%22latitude%22:'+data.originalData.result.location.lat+',%22currentPage%22:1,%22pageSize%22:10,%22rankType%22:0,%22filterTagIds%22:%22%22,%22lastStoreId%22:%22%22,%22coordType%22:%222%22,%22platform%22:%221%22%7D&lng='+data.originalData.result.location.lng+'&lat='+data.originalData.result.location.lat+'&city_id=1607&jda='+nearShops.data.jda+'&lat='+data.originalData.result.location.lat+'&lng='+data.originalData.result.location.lng+'&poi='+nearShops.data.poi+'&signKey='+nearShops.data.signKey+'&traceId='+nearShops.data.traceId);
			
>>>>>>> 9604bad2f08150966cafa8a64e008637071b6363
	   }; 
	   BMap.regeocoding({ 
	       fail: fail, 
	       success: success
	   });
<<<<<<< HEAD
=======
  },
 
  getAllData:function(parmas){
	   let that=this;
  	getAjax(parmas).then(function(res){
  			let temBannerList=res.data.result.data[1].data[0].data;
  			for(let i=0;i<temBannerList.length;i++){
  				if(temBannerList[i].floorCellData.title.indexOf("超")>-1){
  					temBannerList[i].floorCellData["url"]="supermarket/supermarket";
  				}else if(temBannerList[i].floorCellData.title.indexOf("菜")>-1){
  					temBannerList[i].floorCellData["url"]="foodmarket/foodmarket";
  				}else if(temBannerList[i].floorCellData.title.indexOf("果")>-1){
  					temBannerList[i].floorCellData["url"]="fruitshop/fruitshop";
  				}else if(temBannerList[i].floorCellData.title.indexOf("花")>-1){
  					temBannerList[i].floorCellData["url"]="flowersandplants/flowersandplants";
  				}else if(temBannerList[i].floorCellData.title.indexOf("药")>-1){
  					temBannerList[i].floorCellData["url"]="medicalhealth/medicalhealth";
  				}else if(temBannerList[i].floorCellData.title.indexOf("家居")>-1){
  					temBannerList[i].floorCellData["url"]="homefashion/homefashion";
  				}else if(temBannerList[i].floorCellData.title.indexOf("蛋糕")>-1){
  					temBannerList[i].floorCellData["url"]="bakecake/bakecake";
  				}else{
  					temBannerList[i].floorCellData["url"]="";
  				}
  			};
  	
  	   that.setData({
  				responseData:res.data.result,
  				backgroundImg:{'topImg':res.data.result.config.searchConfig.topImg,'borderImg':res.data.result.config.searchConfig.borderImg},
  				bannerImg:res.data.result.data[0].data[0].data[0].floorCellData.imgUrl,
  				bannerList:temBannerList,
  				centerBanner:res.data.result.data[2].data[0].data,
  				discountArr:res.data.result.data[3].data,
  				limitedTime:res.data.result.data[4].data[0].data,
  				limitedTimeTitle:res.data.result.data[4].data[0].floorTitle.floorName,
  				bootomBanner:res.data.result.data[5].data[0].data
  				
  			});
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
>>>>>>> 9604bad2f08150966cafa8a64e008637071b6363
  }
})
