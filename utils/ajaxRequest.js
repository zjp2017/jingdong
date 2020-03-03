import {homeAllApiObj} from './api.js';
	// wx.setStorage({
	// 	  key: 'location',
	// 	  data:JSON.stringify({"lat":22.52483,"lng":113.9387})
	// 	})
const getAjax=()=>{
	wx.hideLoading();
	wx.showLoading({
	  title: '加载中...',
	});
	return new Promise((resolve, reject)=>{
		let requestData=homeAllApiObj;
		wx.getStorage({
		  key: 'location',
		  success (res) {
			if(res.data){
				getAjax(JSON.parse(res.data).lat,JSON.parse(res.data).lng);
			}else{
				getLocationFn();
			}
		  }
		})
		function getLocationFn(){
			wx.getLocation({
				success:function(result){
					console.log(result.latitude);
					getAjax(result.latitude,result.longitude);
				}
			});
		};	
		function getAjax(latitude,longitude){
			wx.request({
				method:'GET',
				url:requestData.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng='+longitude+'&lat='+latitude+'&city_id=1607',
				success:function(res){
					console.log(res);
					if(Number(res.data.code)!=0){
						wx.showToast({
						  title: '数据请求失败',
						  duration: 2000
						});
					}else{
						resolve(res);
					}
				},
				fail:function(){
					wx.showToast({
					  title: '数据请求失败',
					  duration: 2000
					});
				},
				complete:function(){
					wx.hideLoading();
				}
			})
		}
		
		
	})
};
const postAjax=()=>{
	wx.hideLoading();
	wx.showLoading({
	  title: '加载中...',
	});
	return new Promise((resolve, reject)=>{
		wx.request({
			method:'POST',
			url:homeAllApi,
			data:data,
			success:function(res){
				
			},
			fail:function(){
				wx.showToast({
				  title: '数据请求失败',
				  duration: 2000
				});
			},
			complete:function(){
				wx.hideLoading();
			}
		})
	})
};
module.exports={
	getAjax:getAjax,
	postAjax:postAjax
}
