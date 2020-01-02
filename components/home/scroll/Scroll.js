// components/home/scroll/Scroll.js
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
	contentData:[
		{title:'超市便利',id:0,url:'supermarket/supermarket',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png'},
		{title:'菜市场',id:1,url:'foodmarket/foodmarket',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/54218/17/15626/10939/5dc943c1E83ec6248/5d79f0aa0409960c.png'},
		{title:'水果店',id:2,url:'fruitshop/fruitshop',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/91711/37/2068/9948/5dc943fbE521063a3/f7bb4a0bff29de56.png'},
		{title:'鲜花绿植',id:3,url:'flowersandplants/flowersandplants',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/78727/5/15223/9818/5dcd0af1Eedadaf17/4e3ede9e1046b17f.png'},
		{title:'医药健康',id:4,url:'medicalhealth/medicalhealth',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/72878/4/15403/9388/5dcd0b1bEdc09cb1e/7d8eb3bd65d9e457.png'},
		{title:'红包套餐',id:-1,url:'',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/59442/13/15390/7654/5dcd0cc5Ea7149839/3a042e0d1d299376.png'},
		{title:'家居时尚',id:6,url:'homefashion/homefashion',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/85459/31/2223/7469/5dcd0bccE231f1acd/3e9a7e6117c23567.png'},
		{title:'烘焙蛋糕',id:7,url:'bakecake/bakecake',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/59203/20/15701/7963/5dcd0be9E90052f56/e977ade50ca758d3.png'},
		{title:'签到',id:-1,url:'',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/58944/6/15355/7008/5dcd0c2cEd8dd594f/4639f5e3ed6e1463.png'},
		{title:'鲜豆庄园',id:-1,url:'',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/100645/4/8403/7469/5e0482f6E3158988e/6fc2fcc20a9f3c41.png'},
		{title:'领大牌券',id:-1,url:'',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/109123/21/421/8110/5df4baeeE3b8feaa5/13121768b9ac72bc.png'},
		{title:'平台公示',id:-1,url:'',img:'https://img30.360buyimg.com/mobilecms/jfs/t1/74568/14/15299/7923/5dcd0f19E785953c0/ca7b732ab0851ff4.png'}
	]
  },

  /**
   * 组件的方法列表
   */
  methods: {
	  //进入滚动item的详情页面
	enterDetail(e){
		if(e.currentTarget.dataset.index!=-1){
			wx.navigateTo({
				url:'/pages/childpages/'+e.currentTarget.dataset.url+'?id='+e.currentTarget.dataset.index,
				success:function(){
					console.log('进入页面成功');
				}
			})
		}
		// wx.navigateTo({
		// 	url:'/pages/childpages/scrollitemdetail/scrollitemdetail?id='+e.currentTarget.dataset.index,
		// 	success:function(){
		// 		console.log('进入页面成功');
		// 	}
		// });
	}
  }
})
