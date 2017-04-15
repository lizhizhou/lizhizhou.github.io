// JavaScript Document
jQuery.cookie = function(name, value, options) {
	if (typeof value != 'undefined') { // name and value given, set cookie
		options = options || {};
		if (value === null) {
			value = '';
			options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		}
		// NOTE Needed to parenthesize options.path and options.domain
		// in the following expressions, otherwise they evaluate to undefined
		// in the packed version for some reason...
		var path = options.path ? '; path=' + (options.path) : '';
		var domain = options.domain ? '; domain=' + (options.domain) : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else { // only name given, get cookie
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};
var isAndroid=navigator.userAgent.match(/android|Linux/ig),isIos=navigator.userAgent.match(/iphone|ipod|ipad/ig),isWechat=navigator.userAgent.match(/MicroMessenger/ig);
function getDataByChannel(cid,pagecount,page,ac,objid,callback){
	var _objid = typeof(objid) == "undefined" ? 'news_List' : objid;
	$.ajax({
		url: mDomain+'ajax/'+ac+'/'+cid+'/'+pagecount+'/'+page,
		beforeSend: function() {
			$("#"+_objid).next(".f-tac").html('<img src="'+mDomain+'images/loader.gif" class="m-loading" />');
			$("#clickMore").parent().addClass("f-dn");
		},
		success: function(msg) {
			try {
				$("#"+_objid).next(".f-tac").empty();
				var _data = eval("("+msg+")");
				var _tpl = document.getElementById('tpl').innerHTML;
				$("#"+_objid).append(juicer(_tpl, _data));
				if(typeof(callback)!='undefined'){
					eval("var cb = " + callback+";");
				}
				if(_data.anyMore == 'yes') {
					var p = page+1;
					if(typeof(callback)=='undefined')
						$("#clickMore").text("点击加载更多").attr("href","javascript:getDataByChannel("+cid+","+pagecount+","+p+",'"+ac+"','"+_objid+"');");
					else
						$("#clickMore").text("点击加载更多").attr("href","javascript:getDataByChannel("+cid+","+pagecount+","+p+",'"+ac+"','"+_objid+"','"+callback+"');");
					$("#clickMore").parent().removeClass("f-dn");
				}
				else {
					$("#clickMore").text("无更多内容").removeAttr("href");
					$("#clickMore").parent().removeClass("f-dn");
				}
			}
			catch (err) {
				//alert(err);
			}
		},
		error: function(s) {
			$("#"+_objid).next(".f-tac").text('加载失败，请稍后再试');
		}
	});
}
function getDataByType(type,pagecount,page,ac){
	$.ajax({
		url: mDomain+'ajax/'+ac+'/'+type+'/'+pagecount+'/'+page,
		beforeSend: function() {
			$("#news_List").next(".f-tac").html('<img src="'+mDomain+'images/loader.gif" />');
			$("#clickMore").parent().addClass("f-dn");
		},
		success: function(msg) {
			try {
				$("#news_List").next(".f-tac").empty();
				var _data = eval("("+msg+")");
				var _tpl = document.getElementById('tpl').innerHTML;
				$("#news_List").append(juicer(_tpl, _data));			
				if(_data.anyMore == 'yes') {
					var p = page+1;
					$("#clickMore").text("点击加载更多").attr("href","javascript:getDataByType("+type+","+pagecount+","+p+",'"+ac+"');");
					$("#clickMore").parent().removeClass("f-dn");
				}
				else {
					$("#clickMore").text("无更多内容").removeAttr("href");
					$("#clickMore").parent().removeClass("f-dn");
				}
			}
			catch (err) {
				//alert(err);
			}
		},
		error: function(s) {
			$("#news_List").next(".f-tac").text('加载失败，请稍后再试');
		}
	});
}
function ajaxGetHTML(url,obj,callback){
	$.ajax({
		type: 'get',
		url: url,
		success: function(s) {
			if($(s).length>0)
				$('#'+obj).html(s);
			else
				$('#'+obj).html('暂无内容');
		},
		complete :function() {
			if(typeof(callback)!='undefined'){
				eval("var cb = " + callback+";");
			}
		},
		error: function(s) {
			$('#'+obj).html('加载失败，请稍后再试');
		}
	});
}
function ajaxGetAddHTML(url,obj,pagesize,callback,reflesh){
	var _pagesize = typeof(pagesize) == "undefined" ? 5 : pagesize;
	var _reflesh = typeof(reflesh) == "undefined" ? 0 : reflesh;
	$.ajax({
		type: 'get',
		url: url,
		success: function(s) {
			if($(s).length>0){
				if(_reflesh == 1){
					$("#nomorenews").fadeOut();
					var _idnum2 = $(s).first().attr("id");
					var _idnum = $("#twzbList").find("li:first").attr("id");
					if(_idnum2 == _idnum){
						$("#nomorenews").html('<a href="javascript:void(0);">还没有新内容哦</a>').fadeIn().delay(3000).fadeOut();
					}
					$('#'+obj).html(s);
					if($(s).siblings().length < _pagesize)
					{
						$('#divNoMore').fadeIn();
						$('#divMore').fadeOut();
					}
					else {
						$('#divNoMore').fadeOut();
						$('#divMore').fadeIn();
					}
				}
				else if(_reflesh == 2 && $("#nomorenews").hasClass('f-dn')){
					var _idnum2 = $(s).first().attr("id");
					var _idnum = $("#twzbList").find("li:first").attr("id");
					if(_idnum2 != _idnum){
						$(".m-refresh").find("img").attr("src",""+mDomain+"images/refresh_01.png");
					}
					
				}
				else {					
					$('#'+obj).append(s);
					if($(s).siblings().length < _pagesize)
					{
						$('#divNoMore').fadeIn();
						$('#divMore').fadeOut();
					}
					else {
						$('#divNoMore').fadeOut();
						$('#divMore').fadeIn();
					}
				}
			}
			else {
				$('#divNoMore').fadeIn();
				$('#divMore').fadeOut();
			}

		},
		complete :function() {
		},
		error: function(s) {
			$('#'+obj).append('加载失败，请稍后再试');
		}
	});
}
function showNewBroadLists(objid,tagname,page,pagesize){
	for(i=0;i<pagesize;i++){
		j = page*pagesize+i;
		//console.log($("#"+objid+" "+tagname+":eq("+j+")").html());
		$("#"+objid+" "+tagname+":eq("+j+")").removeClass("f-dn");
	}
	var size = $("#"+objid).find(tagname).size();
	var allPage = Math.ceil(size/pagesize);
	if(allPage >1){
		$("#"+objid+" .u-btn").find("a").attr("href","javascript:showNewBroadLists('"+objid+"','"+tagname+"',"+(page+1)+","+pagesize+");");
		if((page+1) == allPage)
			$("#"+objid+" .u-btn").find('a').attr("href","javascript:void(0);").text("无更多新闻");
		$("#"+objid+" .u-btn").removeClass('f-dn');
	}
}
function playVideo(objid){
	var _videoObj = document.getElementById(objid);
	_videoObj.play();
	$("#"+objid).next(".span1").hide();
}

function setCookieName() {
    var uname = $.cookie('uam_username');
    if(uname == null) {
        if($.cookie('uam_phone_number') != null){
            uname = $.cookie('uam_phone_number');
        }
        else if($.cookie('uam_email') != null) {
            uname = $.cookie('uam_email');

        }
        else uname = '佚名';
    }
    if(/^(1[34578][0-9])\d{8}$/i.test(uname))
    {
        uname = uname.substr(0,3)+"***"+uname.substr(8,3);
    }
    else if(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(uname)){
        uname = uname.substr(0,3)+"***"+uname.substr(uname.lastIndexOf("@"));
    }
    return uname;
}
function GetUserInfo() { //取cookie
    //console.log(document.cookie);
    var uid = $.cookie('uam_id'),atvar = $.cookie("uam_avater");
    if(uid != null){
        uname = setCookieName();
		$("#login_name").html(uname);
		$("#login_href").attr("href","https://passport.yicai.com/user/webusermanage/webusercenter");
    }
}
$(function() {
	$('nav#menu').mmenu({
		offCanvas: {
			position  : "right",
			zposition : "next"
		}
	});
	if(isWechat){
		if($('.m-share').length >0 ){
			$(".m-share-weixin").html('<div class="u-img1"><img src="'+mDomain+'images/main_50.png"></div><div class="u-img2"><img src="'+mDomain+'images/main_52.png"></div>');
		}
	}
	$(".bds_weixin").click(function () {
		$('.m-share-weixin').show();
	});
	//$(".u-searchIcon").before('<span class="f-ff1 u-yhm" id="login_name"></span><a class="u-loginIcon" id="login_href" href="javascript:window.location.href=\'https://passport.yicai.com/user/webusermanage/weblogin?return_url=\'+encodeURIComponent(document.location.href);void(0);"></a>');
	//GetUserInfo();
});
(function ($) {
	$.getUrlParam = function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURI(r[2]); return null;
	}
})(jQuery);

function removeHTMLTag(str) {
	str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
	str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
	str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
	str = str.replace(/&quot;/g,'\"');
	str = str.replace(/&#039;/g,"\'");
	str = str.replace(/&amp;/g,"\&");
	//str=str.replace(/ /ig,'');//去掉
	return str;
}
function ajaxGetVideoUrl(nid,obj){
	var _nid = typeof(nid) == "undefined" ? 0 : nid;
	if(_nid){
		$.ajax({
			url: mDomain+"/ajax/getVideoURL/"+_nid+"/",
			type:'GET',
			success: function(s){
				$("#"+obj+",#"+obj+" source").attr("src",s);
			},
			error:function(){
				alert("视频加载失败，请稍候再试");
			}
		});
	}
}