
// wx.setStorage({
// 	  key: 'location',
// 	  data:JSON.stringify({"lat":22.52483,"lng":113.9387})
// 	})
const getAjax=(parmas)=>{
	wx.hideLoading();
	wx.showLoading({
	  title: '加载中...',
	});
	return new Promise((resolve, reject)=>{
			wx.request({
				method:'GET',
				url:parmas.url,
				data:parmas.data,
				success:function(res){
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
		
	})
};
const postAjax=(url,data)=>{
	wx.hideLoading();
	wx.showLoading({
	  title: '加载中...',
	});
	return new Promise((resolve, reject)=>{
		wx.request({
			method:'POST',
			url:url,
			header: {'content-type': 'application/x-www-form-urlencoded'},
			data:data,
			success:function(res){
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
	})
};
module.exports={
	getAjax:getAjax,
	postAjax:postAjax
}

