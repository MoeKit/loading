var Eventor = require('eventor');
var $ = require('zepto');

// 默认模板
var tpl = '<div class="ui-dialog ui-dialog-notice ui-dialog-hide">' +
	'<div class="ui-dialog-cnt">' +
	'<i class="ui-loading-bright"></i>' +
	'<p class="ui-dialog-content"></p>' +
	'</div>' +
	'</div>';

var $el = $(tpl).appendTo('body');
var $content = $el.find('p.ui-dialog-content');
var defaults = {

};
// 构造函数
var Loading = function(content, option) {
	this.$element = $el;
	this.$content = $content;
	this.$content.text(content);
	this.option = $.extend(defaults, option);
};

Eventor.mixTo(Loading);

Loading.prototype.show = function(time) {
	var _this = this;
	if (time) {
		this.time = time;
	}
	this.emit('show');
	this.$element.addClass('ui-dialog-show').show();
	if (this.time) {
		setTimeout(function() {
			_this.hide();
		}, _this.time);
	}
	return this;
};


Loading.prototype.hide = function() {
	this.$element.hide().removeClass('ui-dialog-show');
	this.emit('hide');
	return this;
}

module.exports = Loading;