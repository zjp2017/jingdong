// components/childpages/home/searchinput/SearchInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
	searchContent:'',
	clearIconShow:false
  },
	ready(){
		
	},
  /**
   * 组件的方法列表
   */
  methods: {
	inputChange(e){
		// 输入框发生变化时显示或者隐藏清除按钮
		this.setData({
			clearIconShow:e.detail.value.replace(/\s+/g, "").length>0 ? 'true':'false'
		})
	},
	clearContent(){
		// 清除输入框的内容
		console.log(234);
		this.setData({
			searchContent:'',
			clearIconShow:false
		})
	}
  }
})
