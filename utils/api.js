let domain='https://daojia.jd.com';
console.log(33);
// 首页所有请求
// ?_jdrandom=1583217397315&platCode=h5&appName=paidaojia&channel=&appVersion=7.4.5&jdDevice=&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&signKey=de28f530c1a969259cf0f039f4d6fd3b&lng=113.9387&lat=22.52483&city_id=1607&poi=%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%BD%AF%E4%BB%B6%E4%BA%A7%E4%B8%9A%E5%9F%BA%E5%9C%B0&jda=76161171.1876201136.1559192773.1578967802.1581850119.30&traceId=H5_DEV_DFCD7890-0B62-416E-97F6-2DFDB8236F571583217397315
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
	},
	
	
}
// let homeAllApi=domain+'/client';

module.exports={
	homeAllApiObj:homeAllApiObj
};
//https://daojia.jd.com/client?_jdrandom=1583228655187&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%252FgetIndex&body=%257B%2522coordType%2522%3A%25222%2522%2C%2522currentPage%2522%3A%2522%2522%2C%2522storeId%2522%3A%2522%2522%2C%2522activityId%2522%3A%2522%2522%2C%2522h5From%2522%3A%2522%2522%2C%2522isglb%2522%3A%2522%2522%2C%2522previewDate%2522%3Anull%2C%2522isIndex%2522%3Afalse%257D&city_id=1607&lng=114.05956&lat=22.54286
//https://daojia.jd.com/client?_jdrandom=1583228440401&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%252FgetIndex&body=%25257B%252522coordType%252522%253A%2525222%252522%252C%252522currentPage%252522%253A%252522%252522%252C%252522storeId%252522%253A%252522%252522%252C%252522activityId%252522%253A%252522%252522%252C%252522h5From%252522%253A%252522%252522%252C%252522isglb%252522%253A%252522%252522%252C%252522previewDate%252522%253Anull%252C%252522isIndex%252522%253Afalse%25257D&city_id=1607&lng=114.05956&lat=22.54286
//https://daojia.jd.com/client?_jdrandom=1583217397315&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=indexh5%2FgetIndex&body=%7B%22coordType%22:%222%22,%22currentPage%22:%22%22,%22storeId%22:%22%22,%22activityId%22:%22%22,%22h5From%22:%22%22,%22isglb%22:%22%22,%22previewDate%22:null,%22isIndex%22:false%7D&lng=114.05956&lat=22.54286&city_id=1607