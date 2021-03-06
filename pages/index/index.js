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
	nearShopDataArr:[], //附近的店铺
	backgroundBgImg:'',
	discountArrTwo:[]
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
		   console.log(data.originalData.result.addressComponent.city);
		  //第一部分参数
		   homeAllApiObj.data.body.currentPage=1;
		   homeAllApiObj.data.lng=data.originalData.result.location.lng;
		   homeAllApiObj.data.lat=data.originalData.result.location.lat;
		   homeAllApiObj.data.poi=data.originalData.result.formatted_address;
		   homeAllApiObj.data.body= JSON.stringify(homeAllApiObj.data.body);
		   // 附近店铺参数
		   nearShops.data.poi=data.originalData.result.formatted_address;
		   nearShops.data.body.city=data.originalData.result.addressComponent.city;
		   nearShops.data.body.longitude=data.originalData.result.location.lng;
		   nearShops.data.body.latitude=data.originalData.result.location.lat;
		   nearShops.data.body= JSON.stringify(nearShops.data.body);
		  
		   that.setData({
			   addressName:{"lat":data.originalData.result.location.lat,"lng":data.originalData.result.location.lng,address:data.originalData.result.formatted_address}
		   });
			wx.setStorage({
			  key: 'location',
			  data:JSON.stringify({"lat":data.originalData.result.location.lat,"lng":data.originalData.result.location.lng,address:data.originalData.result.formatted_address})
			});
			// that.getAllData(homeAllApiObj.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+data.originalData.result.location.lng+'&lat='+data.originalData.result.location.lat+'&city_id=1607')
			that.getAllData(homeAllApiObj)
			
			that.getNearShop(nearShops);
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
			   let backgroundImg={'topImg':res.data.result.config.searchConfig.topImg,'borderImg':res.data.result.config.searchConfig.borderImg};
			   let bannerImg="";
			   let bannerList=[];
			   let centerBanner=[];//第一个banner
			   let discountArr=[]; //优惠专区的上2个
			   let discountArrTwo=[];//优惠专区的下4个
			   let limitedTime=[]; //限时抢购
			   let limitedTimeTitle="" //限时抢购标题
			   let bootomBanner=[]; //底部的banner
			   let backgroundBgImg="";//滚动的底部图
			   for(let i=0;i<resultData.data.length;i++){
				   if(resultData.data[i].data.length>0){
					 for(let j=0;j<resultData.data[i].data.length;j++){
					   if(resultData.data[i].data[j].styleTpl=='tpl3'){//小图滚动部分
						     bannerList=resultData.data[i].data[j].data;
							 backgroundBgImg=resultData.data[i].data[j].floorBgImg;
					   }else if(resultData.data[i].data[j].floorStyle=='marketing'){//弹框
							// console.log(resultData.data[i].data[j].data);
					   }else if(resultData.data[i].data[j].floorStyle=='banner'){  //第一个banner
							centerBanner=resultData.data[i].data[j].data;		   
					   }else if(resultData.data[i].data[j].styleTpl=='tpl9'){ //优惠专区的上2个
								
							discountArr=resultData.data[i].data[j];
					   }else if(resultData.data[i].data[j].styleTpl=='tpl8'){ //优惠专区的下4个
							discountArrTwo=resultData.data[i].data[j].data;
						    
					   }else if(resultData.data[i].data[j].styleTpl=='tpl1'){//限时抢购
							limitedTime=resultData.data[i].data[j].data;
							limitedTimeTitle=resultData.data[i].data[j].floorTitle.floorName;

					   }else if(resultData.data[i].data[j].styleTpl=='tpl5'){//底部的banner
						   bootomBanner=resultData.data[i].data[j].data;
					   }else if(resultData.data[i].data[j].styleTpl=='tpl6'){ //最上面的大图
						   bannerImg=resultData.data[i].data[j].data[0].floorCellData.imgUrl;
					   }
					 }  
				   }
				   
			   };
			    that.setData({
					responseData:responseData,
					bannerList:bannerList,
					backgroundImg:backgroundImg,
					centerBanner:centerBanner,
					discountArr:discountArr,
					limitedTime:limitedTime,
					limitedTimeTitle:limitedTimeTitle,
					bootomBanner:bootomBanner,
					bannerImg:bannerImg,
					backgroundBgImg:backgroundBgImg,
					discountArrTwo:discountArrTwo
				});
		   }

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
	console.log(1);
  	getAjax(parmas).then(function(res){
  	   that.setData({
  			searchCondition:res.data.result.config,
  			nearShopDataArr:res.data.result.data.data	
  		});
  	});
  }
})
