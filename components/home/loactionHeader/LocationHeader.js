// components/home/loactionHeader/LocationHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	addressName:{
		type:Object,
		observer:function(newVal){
			this.setData({
				addressName:newVal
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	addressName:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
