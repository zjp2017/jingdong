// components/find/recommend/Recommend.js
import {homeAllApiObj,nearShops,supermarket} from '../../../utils/api.js';
import {getAjax} from '../../../utils/ajaxRequest.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
	resultData:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
	
	getAjaxData(parmas){
		  let that=this;
		  getAjax(parmas).then(function(res){	    		
			 let result=res.data.result;
		     that.setData({
		  		resultData:result.data
		  	});
		  });
	}
  },
  ready:function(){
	  
	  let that=this;
	  let nearShopData=nearShops;
	  wx.getStorage({
	    key: 'location',
	    success (res) {
	  		if(res.data){
	  			that.getAjaxData(supermarket.url+'?_jdrandom='+(new Date().getTime())+'&platCode=h5&appName=paidaojia&appVersion=7.4.5&functionId=newFeed%2FcontentList&body=%7B%22longitude%22:'+JSON.parse(res.data).lng+',%22latitude%22:'+JSON.parse(res.data).lat+',%22cityId%22:1607,%22currentPage%22:1,%22careType%22:1,%22pageSize%22:21,%22tabType%22:%22recommend%22%7D&lng='+JSON.parse(res.data).lng+'&lat='+JSON.parse(res.data).lat+'&city_id=1607&jda='+supermarket.data.jda+'&poi='+supermarket.data.poi+'&signKey=70aadbc8329567571563e17dfc94a2c2&traceId=H5_DEV_7D87288D-A7B8-4603-9E2E-1F209A9C38131584321192245');	
	  			
			}
	    }
	  });
  }
})
