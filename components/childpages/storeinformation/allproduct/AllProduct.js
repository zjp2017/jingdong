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
	},
	rightArr:{
		type:Array,
		observer:function(newVal){
			this.setData({
				rightArr:newVal
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	leftData:[],
	activeIndex:0,
	urlParmas:{},
	rightArr:[],
	clickIndexs:0
	
  },

  /**
   * 组件的方法列表
   */
  methods: {
	  // 左侧点击
	leftBarClick(e){
		this.setData({
			activeIndex:e.currentTarget.dataset.index,
			dataListArr:this.data.leftData[e.currentTarget.dataset.index].childCategoryList
		});
		let reqType=4;
		if(this.data.leftData[e.currentTarget.dataset.index].catId==""){
			reqType=4;
		}else if(this.data.leftData[e.currentTarget.dataset.index].catId&&this.data.leftData[e.currentTarget.dataset.index].childCategoryList.length==0){
			reqType=1;
		}else if(this.data.leftData[e.currentTarget.dataset.index].catId&&this.data.leftData[e.currentTarget.dataset.index].childCategoryList.length>0){
			reqType=2;
		};
		if(this.data.leftData[e.currentTarget.dataset.index].catId==''){
			e.currentTarget.dataset.catid=this.data.leftData[e.currentTarget.dataset.index].type;
			e.currentTarget.dataset.title=this.data.leftData[e.currentTarget.dataset.index].title;
		}else if(this.data.leftData[e.currentTarget.dataset.index].childCategoryList.length==0){
			e.currentTarget.dataset.catid=this.data.leftData[e.currentTarget.dataset.index].catId;
			e.currentTarget.dataset.title=this.data.leftData[e.currentTarget.dataset.index].title;
		}else if(this.data.leftData[e.currentTarget.dataset.index].childCategoryList.length>=0){
			e.currentTarget.dataset.catid=this.data.leftData[e.currentTarget.dataset.index].childCategoryList[0].catId;
			e.currentTarget.dataset.title=this.data.leftData[e.currentTarget.dataset.index].childCategoryList[0].title;
		}
		e.currentTarget.dataset.type=reqType;
		this.triggerEvent("getItemList",e.currentTarget.dataset);
	},
	// 请求
	getAjaxRequest(parmas){
		 let that=this;
		 let reqData=storeInfor.data;
		 let tempBody=JSON.parse(reqData.body);
		 tempBody.storeId=this.data.urlParmas.orgCode;
		 tempBody.storeId=this.data.urlParmas.storeId;
		 reqData.body=JSON.stringify(tempBody);
		 console.log(reqData);
		 postAjax(storeInfor.url,reqData).then(function(res){
			  console.log(res);    
		 });
		 // 2.附近的店铺	 
	},
	// 每个标签的点击
	labelClick(e){
		this.setData({
			clickIndexs:e.currentTarget.dataset.index
		});
		e.currentTarget.dataset.type=2;
		this.triggerEvent("getItemList",e.currentTarget.dataset);
	}
  },
  ready:function(){
	  // 请求
	 let that=this;
	 wx.getStorage({
	   key: 'location',
	   success (res) {
	 		if(res.data){
	 			// that.getAjaxRequest(1);
	 		}
	   }
	 });
  }
})
