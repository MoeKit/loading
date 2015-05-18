# Demo

---

## 定时关闭

````html
<a id="show1" class="demo-btn" href="javascript:">点我,1s后消失</a>
````

````javascript
var Loading = require('loading');
document.getElementById('show1').onclick = function(){
	var loader = new Loading('骚等一下')
	.on('show',function(){
		console.log('出现啦');
	})
	.on('hide',function(){
		console.log('消失啦');
	})
	.show(1000);
};
````


## 手动关闭

````html
<a id="show2" class="demo-btn" href="javascript:">点我,2s后手动调用hide函数</a>
````

````javascript
var Loading = require('loading');
document.getElementById('show2').onclick = function(){
	var loader = new Loading('骚等两秒')
	.on('show',function(){
		console.log('出现啦');
	})
	.on('hide',function(){
		console.log('消失啦');
	})
	.show();
	setTimeout(function(){
		loader.hide();
	},2000);
};
````

## 改变内容实现loading

````html
<a id="show3" class="demo-btn" href="javascript:">点我,有进度条显示哦</a>
````

````javascript
var Loading = require('loading');
document.getElementById('show3').onclick = function(){
	var loader = new Loading('上传中...')
	.on('show',function(){
		console.log('出现啦');
	})
	.on('hide',function(){
		console.log('消失啦');
	})
	.show();
	var a =1;
	setInterval(function(){
		if(a<=99){
			loader.setContent((++a)+'%');
		}else{
			loader.setContent('上传完成鸟');
		}
	},50);
};
````