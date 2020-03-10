// components/home/sort/SortTag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	sortArr:{
		type:Array,
		value:[],
		observer:function(newVal){
			if(newVal){
				this.setData({
					sortList:newVal
				})
			}
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	sortList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
