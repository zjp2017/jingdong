// components/home/store/StoreList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	nearShopDataArr:{
		type:Array,
		value:[],
		observer:function(newVal){
			console.log(newVal);
			if(newVal.length>0){
				this.setData({
					itemListArr:newVal
				})
			}
		}
	},
	searchCondition:{
		type:Object,
		value:{},
		observer:function(newVal){
			if(JSON.stringify(newVal) != "{}"){
				this.setData({
					sortArr:newVal.storeTags.sortList,
					selectContion:newVal.storeTags.storeFilterTags,
				});
			}	
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	sortArr:[],
	selectContion:[],
	itemListArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
