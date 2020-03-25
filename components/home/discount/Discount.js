// components/home/discount/Discount.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
	discountArr:{
		type:Object,
		value:{},
		observer:function(newVal){
			console.log(newVal);
		}
	},
	discountArrTwo:{
		type:Array,
		value:[],
		observer:function(newVal){
			console.log(newVal);
		}
	}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
	
  },
  attached(){
	 
  }
})
