//index.js
//获取应用实例
const app = getApp();
import {homeAllApiObj,nearShops} from '../../utils/api.js';
import {getAjax} from '../../utils/ajaxRequest.js';
Page({
  data: {
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
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
	 let that=this;
	wx.getSetting({
	  success(res) {		
	    if (!res.authSetting['scope.userLocation']) {
	      wx.authorize({
	        scope: 'scope.userLocation',
	        success () {
	          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
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
	    }
	  }
	}); 
	 // 请求数据
		 let requestData=homeAllApiObj;
		 wx.getStorage({
		   key: 'location',
		   success (res) {
			if(res.data){
				getAllData(requestData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607')
			}else{
				getLocationFn();
			}
		   }
		 })
		 function getLocationFn(){
			wx.getLocation({
				success:function(result){
					getAllData(requestData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+ result.longitude+'&lat='+result.latitude+'&city_id=1607');
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
		}
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
