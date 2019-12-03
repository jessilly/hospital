//ui-search 定义
$.fn.UiSearch = function(){
	var ui = $(this);//当前html元素
	// debugger;
	$('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-select-list').show();
		return false;
	});
	$('.ui-search-select-list a',ui).on('click',function(){
		$('.ui-search-selected').text($(this).text());
		$('.ui-search-select-list').hide();
	});
	$('body').on('click',function(){
		$('.ui-search-select-list').hide();
	})
}

//ui-tab 定义
/**@param {string} header TAB組件,的所有選項卡item
  *@param {string} content TAB組件，內容區，所有 item
  *@param {string} focus_prefix 選項卡高粱樣式前綴 可選
  **/
$.fn.UiTab = function(header,content,focus_prefix){
	var ui = $(this);
	var tabs = $(header,ui);
	var cons = $(content,ui);
	var focus_prefix = focus_prefix || '';

	tabs.on('click',function(){
		var index = $(this).index();
		// debugger;
		tabs.removeClass(focus_prefix+'item_focus').eq(index).addClass(focus_prefix+'item_focus');
		cons.hide().eq(index).show();

		return false;
	})
}

// ui-backTop
$.fn.UiBackTop = function(){
	var ui = $(this);
	var el = $('<a href="#" class="ui-backTop"></a>');
	ui.append(el);
	var windowHeight = $(window).height();

	$(window).on('scroll',function(){
		var top = $(document).scrollTop();
		top > windowHeight ? el.show() : el.hide() ;		
	});
	el.on('click',function(){
		$(window).scrollTop(0);
	})
}

//ui-slider 幻灯片

//ui-cascading         
$.fn.UiCascading = function(){
	// debugger;
	var ui = $(this);
	var selects = $('select',ui);

	selects
	.on('change',function(){
		var val = $(this).val();
		var index = selects.index(this);

		// debugger;
	})
	.on('reloadOptions',function(){

	})
}
//页面的脚本逻辑
$(function(){
	$('.ui-search').UiSearch();
	$('.content-tab').UiTab('.caption > .item','.block > .item');
	$('.content-tab .block .item').UiTab('.block-caption > a','.block-content > .block-wrap','block-caption-')
	$('body').UiBackTop();
	$('.ui-cascading').UiCascading();
})