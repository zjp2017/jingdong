// components/childpages/storeinformation/headercoupontips/HeaderCouponTips.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	resultConpon:{
		type:Object,
		observer:function(val){
			this.setData({
				resultConpon:val
			})
		}
	},
	arrLength:{
		type:Number,
		observer:function(val){
			this.setData({
				tagsLength:val
			})
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	resultConpon:{},
	tagsLength:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
