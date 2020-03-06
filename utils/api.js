let domain='https://daojia.jd.com';
// 首页所有请求
// ?_jdrandom=1583217397315&platCode=h5&appName=paidaojia&channel=&appVersion=7.4.5&jdDevice=&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&signKey=de28f530c1a969259cf0f039f4d6fd3b&lng=113.9387&lat=22.52483&city_id=1607&poi=%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%BD%AF%E4%BB%B6%E4%BA%A7%E4%B8%9A%E5%9F%BA%E5%9C%B0&jda=76161171.1876201136.1559192773.1578967802.1581850119.30&traceId=H5_DEV_DFCD7890-0B62-416E-97F6-2DFDB8236F571583217397315

//首页更多秒杀
//https://daojia.jd.com/client?_jdrandom=1583473132885&platCode=H5&appName=paidaojia&channel=&appVersion=7.5.0&jdDevice=&functionId=grab%2FgrabList&body=%7B%22longitude%22:%22113.9387%22,%22latitude%22:%2222.52483%22,%22coordType%22:2,%22timeId%22:%22%22,%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22%7D&signKey=0343ec1dcb5107f6e195b8fc3cb6666e&lng=113.9387&lat=22.52483&city_id=1607&poi=%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%BD%AF%E4%BB%B6%E4%BA%A7%E4%B8%9A%E5%9F%BA%E5%9C%B0&jda=76161171.1876201136.1559192773.1578967802.1581850119.30&traceId=H5_DEV_DFCD7890-0B62-416E-97F6-2DFDB8236F571583473132885

// 首页 附近店铺
//https://daojia.jd.com/client?_jdrandom=1583476176034&platCode=h5&appName=paidaojia&channel=&appVersion=7.5.0&jdDevice=&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22:%22%22,%22city%22:%22%E6%B7%B1%E5%9C%B3%E5%B8%82%22,%22longitude%22:113.94276,%22latitude%22:22.524586,%22currentPage%22:1,%22pageSize%22:10,%22rankType%22:0,%22filterTagIds%22:%22%22,%22lastStoreId%22:%22%22,%22coordType%22:%222%22,%22platform%22:%221%22%7D&signKey=ed7540154f55e774fffcfbfa19a38150&lng=113.94276&lat=22.524586&city_id=1607&poi=%E6%B7%B1%E5%9C%B3%E7%99%BE%E5%BA%A6%E5%9B%BD%E9%99%85%E5%A4%A7%E5%8E%A6&traceId=H5_DEV_7D87288D-A7B8-4603-9E2E-1F209A9C38131583476176033
let bodyContent=encodeURI({
    "coordType": "2",
    "currentPage": "",
    "storeId": "",
    "activityId": "",
    "h5From": "",
    "isglb": "",
    "previewDate": null,
    "isIndex": false
});
let bodyContent2={
	"city":"深圳",
	"channelId":"",
	"longitude":113.94276,
	"latitude":22.524586,
	"currentPage":1,
	"pageSize":10,
	"rankType":0,
	"filterTagIds":"",
	"lastStoreId":"",
	"coordType":"2",
	"platform":"1"
}
let homeAllApiObj={
	url:domain+'/client',
	data:{
		'_jdrandom':(new Date()).getTime(),
		'platCode':'h5',
		'appName':'paidaojia',
		'appVersion':'7.4.5',
		'functionId':encodeURI('indexh5/getIndex'),
		'body':bodyContent,
		
		'city_id':1607		
	}	
};
let moreMiaoSha={
	
};
let nearShops={
	url:domain+'/client',
	data:{
		'_jdrandom':(new Date()).getTime(),
		'platCode':'h5',
		'appName':'paidaojia',
		'appVersion':'7.5.0',
		'functionId':encodeURI('zone/recommendStoreList'),
		'body':bodyContent2	
	}	
}

module.exports={
	homeAllApiObj:homeAllApiObj,
	nearShops:nearShops
};
