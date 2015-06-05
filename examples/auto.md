# 预配置显示弹窗

---

````javascript
window.pre_loading = {
	id:'heyhey',
	content:'登录中，请稍候'
};
````

````javascript
var Loading = require('loading');

setTimeout(function(){
	window['heyhey'].hide();
},5000);
````