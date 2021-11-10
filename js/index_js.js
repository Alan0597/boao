// 导航栏悬停下划线
$(function(){
	$('#link li').hover(function(){
		$('span',this).stop().css('height','3px');
		$('span',this).animate({
			left:'0',
			width:'100%',
			right:'0'
		},250);
	},function(){
		$('span',this).stop().animate({
			left:'50%',
			width:'0'
		},250);
	});
});


// banner单次轮播图
var first = 1;
var last = 4;
function show(num){
	if(Number(num)){
		clearTimeout(theTimer);
		first = num;
	}
	for (var i = 1; i <= last; i++) {
		if (first == i) {
			document.getElementById('div'+i).style.display = 'block';
		}else{
			document.getElementById('div'+i).style.display = 'none';
		}
	}
	if (first != last) {
		first++;
	}
	theTimer = setTimeout('show()', 3000);		
}
window.onload = function(){
	show();
}

// 会议动态
// id代表的是标签，因为ul标签没有设置id
// height为正数时，文字从上往下，为负数时，文字从下往上
// height值的大小根据流畅度调整
function td_linkage(id, height) {
	var ul = $(id);
	var liFirst = ul.find('li:first');
	var fun = 
	$(id).animate({ top: height }).animate({ "top": 0 }, 0, 
	function () {
		var clone = liFirst.clone(true);
		$(id).append(clone);
		liFirst.remove();
		});
	}
setInterval("td_linkage('#ulid','-30px')", 3500);

// 新闻动态和声明公告
// 第一条新闻
function news_time01_over(){
	$("#news_list_time01").css("backgroundColor", "#055F98");
	$("#news_time_d01").css("color", "#FFFFFF");
}
function news_time01_out(){
	$("#news_list_time01").css("backgroundColor", "#ECECEC");
	$("#news_time_d01").css("color", "#000000");
}
// 第二条新闻
function news_time02_over(){
	$("#news_list_time02").css("backgroundColor", "#055F98");
	$("#news_time_d02").css("color", "#FFFFFF");
}
function news_time02_out(){
	$("#news_list_time02").css("backgroundColor", "#ECECEC");
	$("#news_time_d02").css("color", "#000000");
}
// 第三题新闻
function news_time03_over(){
	$("#news_list_time03").css("backgroundColor", "#055F98");
	$("#news_time_d03").css("color", "#FFFFFF");
}
function news_time03_out(){
	$("#news_list_time03").css("backgroundColor", "#ECECEC");
	$("#news_time_d03").css("color", "#000000");
}
// 第一条声明公告
function announcement_time01_over(){
	$("#announcement_list_time01").css("backgroundColor", "#055F98");
	$("#announcement_time_d01").css("color", "#FFFFFF");
}
function announcement_time01_out(){
	$("#announcement_list_time01").css("backgroundColor", "#ECECEC");
	$("#announcement_time_d01").css("color", "#000000");
}
// 第二条声明公告
function announcement_time02_over(){
	$("#announcement_list_time02").css("backgroundColor", "#055F98");
	$("#announcement_time_d02").css("color", "#FFFFFF");
}
function announcement_time02_out(){
	$("#announcement_list_time02").css("backgroundColor", "#ECECEC");
	$("#announcement_time_d02").css("color", "#000000");
}
// 第三题声明公告
function announcement_time03_over(){
	$("#announcement_list_time03").css("backgroundColor", "#055F98");
	$("#announcement_time_d03").css("color", "#FFFFFF");
}
function announcement_time03_out(){
	$("#announcement_list_time03").css("backgroundColor", "#ECECEC");
	$("#announcement_time_d03").css("color", "#000000");
}


// Viewpoints滑动轮播图
var autoplay = true;
var autoplay_Delay = 2000; // ms
var autoplayId;
var intervalId;
	
var slider;
var slider_item_container;
var slider_items;
var indicator_container;
	
var slider_item_width;
var curIndex = 0;
	
window.onload = function() {
	show();
	initElement();
	initEvent();
	if (autoplay) {
		startAnimation(slider_item_container);
	}
}
	
function initElement() {
	slider = document.getElementById("slider");
	slider_items = slider.getElementsByTagName("li");
	slider_item_container = slider.getElementsByClassName("slieder-item-container")[0];
	indicator_container = slider.getElementsByClassName("indicator-container")[0];
	    
	var firstItem = slider_items[0].cloneNode(true);
	slider_item_container.appendChild(firstItem);
	    
	slider_item_width = slider_items[0].offsetWidth;
}
	
function initEvent() {
	slider.addEventListener("mouseover", function () {
		clearTimeout(autoplayId);
		autoplay = false;
	});
	slider.addEventListener("mouseout", function () {
		autoplay = true;
		startAnimation(slider_item_container);
	});
	    
	var indicators = indicator_container.children;
	for (var i = 0; i < indicators.length; i++) {
		indicators[i].setAttribute("index", i);
		indicators[i].addEventListener("click", function () {
		var index = parseInt(this.getAttribute("index"));
		next(index);
	});
	}
	    
	var left_arrow = slider.getElementsByClassName("left-arrow")[0];
	var right_arrow = slider.getElementsByClassName("right-arrow")[0];
	left_arrow.addEventListener("click", function () {
		prev();
	});
	right_arrow.addEventListener("click", function () {
		next();
	});
}
	
function animate(element, target) {
	var step = 10;
	var time = 10;
	var gap = (Math.abs(target - element.offsetLeft) / slider_item_width);
	if (gap > 1) {
		step = step * gap;
		time = time / gap;
	}
	if (element) {
		step = (element.offsetLeft > target) ? -step : step;
		clearInterval(intervalId);
		setCurrentActiveIndicator(curIndex);
		intervalId = setInterval(function () {
			if ((step < 0) && (Math.abs(element.offsetLeft + step) < Math.abs(target))) {
				element.style.left = element.offsetLeft + step + "px";
			} else {
				if (Math.abs(target - element.offsetLeft) > Math.abs(step)) {
					element.style.left = element.offsetLeft + step + "px";
				} else {
					clearInterval(intervalId);
					intervalId = -1;
					element.style.left = target + "px";
					if (autoplay) {
						startAnimation(element);
					}
				}
			}
		}, time);
	}
}
	
function prev() {
	var element = slider_item_container;
	var li = element.children;
	curIndex = curIndex - 1;
	if (curIndex < 0) {
		element.style.left = -((li.length-1)*slider_item_width) + "px";
		curIndex = li.length-2;
	}
	animate(element, -(curIndex*slider_item_width));
}
	
function next(nextIndex) {
	var element = slider_item_container;
	var li = element.children;
	if ((nextIndex != null) && (typeof(nextIndex) != "undefined")) {
		curIndex = nextIndex;
	} else {
		curIndex = curIndex + 1;
		if (curIndex > (li.length-1)) {
		element.style.left = 0 + "px";
		curIndex = 1;
		}
	}
	animate(element, -(curIndex*slider_item_width));
}
	
function startAnimation(element) {
	if (autoplayId) {
		clearTimeout(autoplayId);
	}
	autoplayId = setTimeout(function () {
		next();
	}, autoplay_Delay);
}
	
function setCurrentActiveIndicator(index) {
	var indicators = indicator_container.children;
	if (index == indicators.length) {
		index = 0;
	}
	for (var i = 0; i < indicators.length; i++) {
		if (i == index) {
			indicators[i].className = "indicator active";
		} else {
			indicators[i].className = "indicator";
		}
	}
}


// 历年年会
function annual_time_over01(){
	$("#details_box01").css("backgroundColor", "#164185");
	$("#details_box01").css("color", "#FFFFFF");
	$("#annual_time01").css("color", "#164185");
}
function annual_time_out01(){
	$("#details_box01").css("backgroundColor", "#e6e4e2");
	$("#details_box01").css("color", "#000000");
	$("#annual_time01").css("color", "#000000");
}
function annual_time_over02(){
	$("#details_box02").css("backgroundColor", "#164185");
	$("#details_box02").css("color", "#FFFFFF");
	$("#annual_time02").css("color", "#164185");
}
function annual_time_out02(){
	$("#details_box02").css("backgroundColor", "#e6e4e2");
	$("#details_box02").css("color", "#000000");
	$("#annual_time02").css("color", "#000000");
}
function annual_time_over03(){
	$("#details_box03").css("backgroundColor", "#164185");
	$("#details_box03").css("color", "#FFFFFF");
	$("#annual_time03").css("color", "#164185");
}
function annual_time_out03(){
	$("#details_box03").css("backgroundColor", "#e6e4e2");
	$("#details_box03").css("color", "#000000");
	$("#annual_time03").css("color", "#000000");
}
// 专题会议
function annual_time_over04(){
	$("#details_box04").css("backgroundColor", "#164185");
	$("#details_box04").css("color", "#FFFFFF");
	$("#themed_time04").css("color", "#164185");
	$("#themed_time04").css("border-right", "20px solid #164185");
}
function annual_time_out04(){
	$("#details_box04").css("backgroundColor", "#e6e4e2");
	$("#details_box04").css("color", "#000000");
	$("#themed_time04").css("color", "#000000");
	$("#themed_time04").css("border-right", "none");
}
function annual_time_over05(){
	$("#details_box05").css("backgroundColor", "#164185");
	$("#details_box05").css("color", "#FFFFFF");
	$("#themed_time05").css("color", "#164185");
	$("#themed_time05").css("border-right", "20px solid #164185");
}
function annual_time_out05(){
	$("#details_box05").css("backgroundColor", "#e6e4e2");
	$("#details_box05").css("color", "#000000");
	$("#themed_time05").css("color", "#000000");
	$("#themed_time05").css("border-right", "none");
}
function annual_time_over06(){
	$("#details_box06").css("backgroundColor", "#164185");
	$("#details_box06").css("color", "#FFFFFF");
	$("#themed_time06").css("color", "#164185");
	$("#themed_time06").css("border-right", "20px solid #164185");
}
function annual_time_out06(){
	$("#details_box06").css("backgroundColor", "#e6e4e2");
	$("#details_box06").css("color", "#000000");
	$("#themed_time06").css("color", "#000000");
	$("#themed_time06").css("border-right", "none");
}
//地区会议
function annual_time_over07(){
	$("#details_box07").css("backgroundColor", "#164185");
	$("#details_box07").css("color", "#FFFFFF");
	$("#regional_time07").css("color", "#164185");
	$("#regional_time07").css("font-weight", "bold");
	$("#regional_time07").css("font-size", "24px");
}
function annual_time_out07(){
	$("#details_box07").css("backgroundColor", "#e6e4e2");
	$("#details_box07").css("color", "#000000");
	$("#regional_time07").css("color", "#000000");
	$("#regional_time07").css("font-size", "16px");
	$("#regional_time07").css("font-weight", "400");
}
function annual_time_over08(){
	$("#details_box08").css("backgroundColor", "#164185");
	$("#details_box08").css("color", "#FFFFFF");
	$("#regional_time08").css("color", "#164185");
	$("#regional_time08").css("font-weight", "bold");
	$("#regional_time08").css("font-size", "24px");
}
function annual_time_out08(){
	$("#details_box08").css("backgroundColor", "#e6e4e2");
	$("#details_box08").css("color", "#000000");
	$("#regional_time08").css("color", "#000000");
	$("#regional_time08").css("font-size", "16px");
	$("#regional_time08").css("font-weight", "400");
}
function annual_time_over09(){
	$("#details_box09").css("backgroundColor", "#164185");
	$("#details_box09").css("color", "#FFFFFF");
	$("#regional_time09").css("color", "#164185");
	$("#regional_time09").css("font-weight", "bold");
	$("#regional_time09").css("font-size", "24px");
}
function annual_time_out09(){
	$("#details_box09").css("backgroundColor", "#e6e4e2");
	$("#details_box09").css("color", "#000000");
	$("#regional_time09").css("color", "#000000");
	$("#regional_time09").css("font-size", "16px");
	$("#regional_time09").css("font-weight", "400");
}

// switch模块的切换效果
function switch01(){
	$("#switch_new_list02").css("display", "none");
	$("#switch_new_list03").css("display", "none");
	$("#switch_new_list01").css("display", "block");
	
	$("#sth_li02").css("backgroundColor", "#164185");
	$("#sth_li02").css("color", "#FFFFFF");
	$("#sth_li03").css("backgroundColor", "#164185");
	$("#sth_li03").css("color", "#FFFFFF");
	$("#sth_li01").css("backgroundColor", "#FFFFFF");
	$("#sth_li01").css("color", "#164185");
}
function switch02(){
	$("#switch_new_list01").css("display", "none");
	$("#switch_new_list03").css("display", "none");
	$("#switch_new_list02").css("display", "block");
	
	$("#sth_li01").css("backgroundColor", "#164185");
	$("#sth_li01").css("color", "#FFFFFF");
	$("#sth_li03").css("backgroundColor", "#164185");
	$("#sth_li03").css("color", "#FFFFFF");
	$("#sth_li02").css("backgroundColor", "#FFFFFF");
	$("#sth_li02").css("color", "#164185");
}
function switch03(){
	$("#switch_new_list01").css("display", "none");
	$("#switch_new_list02").css("display", "none");
	$("#switch_new_list03").css("display", "block");
	
	$("#sth_li01").css("backgroundColor", "#164185");
	$("#sth_li01").css("color", "#FFFFFF");
	$("#sth_li02").css("backgroundColor", "#164185");
	$("#sth_li02").css("color", "#FFFFFF");
	$("#sth_li03").css("backgroundColor", "#FFFFFF");
	$("#sth_li03").css("color", "#164185");
}


// 登入弹窗
function open_login(){
	document.getElementById("mask").style.display = "block";
}
function close_login(){
	document.getElementById("mask").style.display = "none";
}
