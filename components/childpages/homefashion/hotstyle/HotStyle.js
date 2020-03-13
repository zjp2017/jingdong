// components/childpages/homefashion/hotstyle/HotStyle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	listArr:{
		type:Array,
		value:[],
		observer:function(newVal){
			this.setData({
				listArr:newVal
			})
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
