// components/childpages/flowersandplants/activeitem/ActiveItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	dataArr:{
		type:Array,
		value:[],
		observer:function(newVal){
			if(newVal.length>0){
				this.setData({
					listArr:newVal
				})
			}
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	listArr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
