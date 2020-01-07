// components/childpages/storeinformation/allproduct/AllProduct.js
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
	leftData:['秒杀','直降','年货一条街','火锅季','新鲜水果','时令蔬菜','肉蛋家禽','肉蛋家禽','肉蛋家禽','肉蛋家禽','肉蛋家禽','母婴呵护','个护美妆','文娱用品','服装家纺','服装家纺','服装家纺'],
	activeIndex:0
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
	  // 左侧点击
	leftBarClick(e){
		this.setData({
			activeIndex:e.currentTarget.dataset.index
		});
	}
  }
})
