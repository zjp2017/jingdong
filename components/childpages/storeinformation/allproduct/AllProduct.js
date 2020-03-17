// components/childpages/storeinformation/allproduct/AllProduct.js
import {homeAllApiObj,nearShops,supermarket,storeInfor} from '../../../../utils/api.js';
import {postAjax} from '../../../../utils/ajaxRequest.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	dataList:{
		type:Array,
		observer:function(newVal){
			if(newVal.length>0){
				this.setData({
					leftData:newVal
				})
			}
		}
	},
	requestParmas:{
		type:Object,
		observer:function(newVal){
			this.setData({
				urlParmas:newVal
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	leftData:['秒杀','直降','年货一条街','火锅季','新鲜水果','时令蔬菜','肉蛋家禽','肉蛋家禽','肉蛋家禽','肉蛋家禽','肉蛋家禽','母婴呵护','个护美妆','文娱用品','服装家纺','服装家纺','服装家纺'],
	activeIndex:0,
	urlParmas:{}
	
  },

  /**
   * 组件的方法列表
   */
  methods: {
	  // 左侧点击
	leftBarClick(e){
		console.log(e.currentTarget.dataset);
		this.setData({
			activeIndex:e.currentTarget.dataset.index
		});
	},
	// 请求
	getAjaxRequest(parmas){
		 let that=this;
		 let reqData=storeInfor.data;
		 let tempBody=JSON.parse(reqData.body);
		 tempBody.storeId=this.data.urlParmas.orgCode;
		 tempBody.storeId=this.data.urlParmas.storeId;
		 // tempBody.storeId=urlParmas.catIds[0].storeId=this.data.urlParmas.storeId;
		 // console.log(JSON.parse(reqData.body));
		 reqData.body=JSON.stringify(tempBody);
		 console.log(reqData);
		 postAjax(storeInfor.url,reqData).then(function(res){
			 // let result=res.data.result;
			  console.log(res);
		    
		 });
		 // 2.附近的店铺	 
	}
  },
  ready:function(){
	  // 请求
	  let that=this;
	 wx.getStorage({
	   key: 'location',
	   success (res) {
		   console.log(res.data);
	 		if(res.data){
	 			that.getAjaxRequest(1);
	 		}
	   }
	 });
  }
})
