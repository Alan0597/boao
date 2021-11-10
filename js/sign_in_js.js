// 轮播图
var first = 1;
var last = 3;
function show(num){
	if(Number(num)){
		clearTimeout(theTimer);
		first = num;
	}
	for (var i = 1; i <= last; i++) {
		if (first == i) {
			document.getElementById('pit_'+i).style.display = 'block';
		}else{
			document.getElementById('pit_'+i).style.display = 'none';
		}
	}
	if (first == last) {
		first = 1;
	}else{
		first++;
	}
	theTimer = setTimeout('show()', 5000);
}
window.onload = function(){
	show();
}

// 验证昵称、密码、手机号、协议
// 昵称验证
function checkNickname(){
	var nickname = document.getElementById("nickname").value;
	var limit = new RegExp("^[a-zA-Z0-9\u4E00-\u9fa5]{1,24}$");
	// alert("测试昵称长度："+nickname.length);
	if(limit.test(nickname.value)==false || nickname.length>24){
		$("#nickname").css("outline:focus", "none");
		$("#nickname").css("border", "1px solid #f00");
		document.getElementById("tick1").style.display="none";
		document.getElementById("nError1").style.display="none";
		document.getElementById("nError2").style.display="block";
	}else if(nickname == ''){
		$("#nickname").css("outline:focus", "none");
		$("#nickname").css("border", "1px solid #f00");
		document.getElementById("tick1").style.display="none";
		document.getElementById("nError2").style.display="none";
		document.getElementById("nError1").style.display="block";
	}else{
		$("#nickname").css("outline:focus", "none");
		$("#nickname").css("border", "1px solid #B8B8B8");
		document.getElementById("nError1").style.display="none";
		document.getElementById("nError2").style.display="none";
		document.getElementById("tick1").style.display="block";
	}
}

// 密码验证
function checkPassword(){
	var password = document.getElementById("password").value;
	var limit = new RegExp("^[a-zA-Z0-9~!@#$%^&*()_|?></*-+\';,.]{8-16}$");
	var num = /[0-9]/;
	var letter = /[a-zA-Z]/;
	var character = /[~!@#$%^&*()_|?></*-+\';,.]/;
	// alert("测试密码的值："+password);
	// alert("测试密码长度："+password.length);
	// alert(num.test(password));	// 测试密码这个字符串是否包含/[0-9]/
	if(password == ''){
		$("#password").css("outline:focus", "none");
		$("#password").css("border", "1px solid #f00");
		document.getElementById("tick2").style.display="none";
		document.getElementById("pError2").style.display="none";
		document.getElementById("pError3").style.display="none";
		document.getElementById("pError1").style.display="block";
	}else if(limit.test(password.value)==false && password.length<8 || password.length>16){
		$("#password").css("outline:focus", "none");
		$("#password").css("border", "1px solid #f00");
		document.getElementById("tick2").style.display="none";
		document.getElementById("pError1").style.display="none";
		document.getElementById("pError3").style.display="none";
		document.getElementById("pError2").style.display="block";
	}else if(num.test(password)==false && letter.test(password)==false){
		$("#password").css("outline:focus", "none");
		$("#password").css("border", "1px solid #f00");
		document.getElementById("tick2").style.display="none";
		document.getElementById("pError1").style.display="none";
		document.getElementById("pError2").style.display="none";
		document.getElementById("pError3").style.display="block";
	}else if(num.test(password)==false && character.test(password)==false){
		$("#password").css("outline:focus", "none");
		$("#password").css("border", "1px solid #f00");
		document.getElementById("tick2").style.display="none";
		document.getElementById("pError1").style.display="none";
		document.getElementById("pError2").style.display="none";
		document.getElementById("pError3").style.display="block";
	}else if (letter.test(password)==false && character.test(password)==false) {
		$("#password").css("outline:focus", "none");
		$("#password").css("border", "1px solid #f00");
		document.getElementById("tick2").style.display="none";
		document.getElementById("pError1").style.display="none";
		document.getElementById("pError2").style.display="none";
		document.getElementById("pError3").style.display="block";
	}else{
		$("#password").css("outline:focus", "none");
		$("#password").css("border", "1px solid #B8B8B8");
		document.getElementById("pError1").style.display="none";
		document.getElementById("pError2").style.display="none";
		document.getElementById("pError3").style.display="none";
		document.getElementById("tick2").style.display="block";
	}
}

// 手机号验证
function phoneNumber(){
	var phoneNumber = document.getElementById("phoneNumber").value;
	// var limit = /^1[345789](\d{9})+$/;
	// alert("测试手机号"+phoneNumber);
	// alert(limit.test(phoneNumber.value));
	if(phoneNumber =='' || phoneNumber.length != 11){
		$("#phoneNumber").css("outline:focus", "none");
		$("#phoneNumber").css("border", "1px solid #f00");
		document.getElementById("info").style.display="none";
		document.getElementById("tick3").style.display="none";
		document.getElementById("phoneNumberError").style.display="block";
	}else{
		$("#phoneNumber").css("outline:focus", "none");
		$("#phoneNumber").css("border", "1px solid #B8B8B8");
		document.getElementById("phoneNumberError").style.display="none";
		document.getElementById("tick3").style.display="block";
		document.getElementById("info").style.display="block";
	}
}

// 发送验证码
function verificationCode() {
	alert("短信发送成功！");
}

// 短信验证
function sms(){
	document.getElementById("sms").style.display="block";
}

// 协议
var temp = 1;	// 向下
var jiantou_img = document.getElementById("jiantou_img");
var xieyi_div = document.getElementById("xieyi_div");
xieyi_div.style.display = "none";
function jiantou(){
	if(temp == 1){
		jiantou_img.src="images/up.png";
		xieyi_div.style.display="block";
		temp = 2;
	}else{
		jiantou_img.src="images/down.png";
		xieyi_div.style.display="none";
		temp = 1;
	}
}

// 协议验证
function checkXieyi(){
	falg = 0;
	var checkbox = document.getElementById("checkbox");
	if(checkbox.checked){
		document.getElementById("xieyiError").style.display = "none";
		falg = 1
		if(falg == 1){
			alert("注册成功！");
		}
	}else{
		document.getElementById("xieyiError").style.display = "block";
	}
}