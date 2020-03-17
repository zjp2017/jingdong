// components/find/recommendandfahion/RecommendAndFahion.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	resultData:{
		type:Array,
		value:[],
		observer:function(newVal){
			this.setData({
				resultData:newVal
			})
		}
	}
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

  }
})
