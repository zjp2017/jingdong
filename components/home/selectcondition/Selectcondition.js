// components/home/selectcondition/Selectcondition.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	selectContion:{
		type:Array,
		value:[],
		observer:function(newVal){
			// console.log(newVal);
			if(newVal.length>0){
				this.setData({
					itemList:newVal
				})
			}
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	itemList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
