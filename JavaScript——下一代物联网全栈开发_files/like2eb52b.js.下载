define("biz_wap/utils/wapsdk.js",["biz_common/utils/wxgspeedsdk.js"],function(e){
"use strict";
function s(e){
var s=.001;
"number"==typeof e.sample&&(s=e.sample);
var n=Math.random();
s>n&&o.saveSpeeds(e);
}
function n(e){
var s=e.sample||.001,n=Math.random();
s>n&&o.setBasicTime(e);
}
function i(){
o.send();
}
function a(e){
var e=e||[];
if(!e.length){
var s=e;
e=[],e.push(s);
}
for(var n=[],i=0;i<e.length;i++){
var s=e[i],a=s.id,o=s.key,t=s.value||1;
a&&o&&n.push(a+"_"+o+"_"+t);
}
0!=n.length&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";"));
}
var o=e("biz_common/utils/wxgspeedsdk.js");
return{
saveSpeeds:s,
setBasicTime:n,
send:i,
jsmonitor:a
};
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
var n=[],t={};
return t.setAvg=function(i,e,o){
return n.push(i+"_"+e+"_"+o),n.push(i+"_"+(e-1)+"_1"),t;
},t.setSum=function(i,e,o){
return n.push(i+"_"+e+"_"+o),t;
},t.send=function(){
if(0!=n.length){
var t=new Image;
t.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";")+"&t="+Math.random(),n=[];
}
},t;
});define("biz_common/utils/report.js",[],function(){
"use strict";
return function(n){
var e=new Image;
e.src=n;
};
});define("appmsg/open_url_with_webview.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var r=e("biz_wap/jsapi/core.js"),i=function(e,i){
i=i||{};
var o=i.sample||0;
o*=1e3;
var t=top.window.user_uin||0,n=0!==t&&Math.floor(t/100)%1e3<o;
return n?void r.invoke("openUrlWithExtraWebview",{
url:e,
openType:i.openType||1
},function(e){
e&&"openUrlWithExtraWebview:ok"===e.err_msg?i.resolve&&i.resolve():i.reject&&i.reject();
}):void(i.reject&&i.reject());
};
return i;
});define("biz_common/utils/http.js",[],function(){
"use strict";
function t(){
var t=document.getElementsByTagName("html");
if(t&&1==!!t.length){
t=t[0].innerHTML;
var e=t.replace(/[\x00-\xff]/g,""),n=t.replace(/[^\x00-\xff]/g,"");
return 1*n.length+3*e.length+"<!DOCTYPE html><html></html>".length;
}
return 0;
}
return{
htmlSize:t()
};
});define("biz_common/utils/cookie.js",[],function(){
"use strict";
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t,n){
var o=new Date;
return o.setDate(o.getDate()+(n||1)),n=o.toGMTString(),document.cookie=e+"="+t+";expires="+n,
!0;
}
};
return e;
});define("appmsg/topic_tpl.html.js",[],function(){
return'<span class="db topic_wrp">\n    <span class="topic_thumb" style="background-image:url({img_url});"></span>\n    <span class="topic_content">\n        <strong class="topic_title">{title}</strong>\n        <span class="topic_desc">{author}</span>\n        <span class="topic_info">\n            <span class="topic_info_extra"><span class="icon_topic"></span>话题</span>\n            <span class="topic_info_primary">相关文章{msg_num}篇</span>\n        </span>\n    </span>\n</span>\n';
});define("pages/weapp_tpl.html.js",[],function(){
return'<!-- <span class="weapp_card flex_context">\n    <span class="weapp_card_hd">\n        <span class="radius_avatar weapp_card_avatar">\n            <img src="<#=avatar#>">\n        </span>\n    </span>\n    <span class="weapp_card_bd flex_bd">\n        <strong class="weapp_card_nickname"><#=nickname#></strong>\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span> -->\n<span class="weapp_card app_context">\n    <span class="weapp_card_bd">\n        <span class="weapp_card_profile flex_context">\n            <span class="radius_avatar weapp_card_avatar">\n                <img src="<#=avatar#>">\n            </span>\n            <span class="weapp_card_nickname flex_bd"><#=nickname#></span>\n        </span>\n        <span class="weapp_card_info">\n            <span class="weapp_card_title"><#=title#></span>\n            <span class="weapp_card_thumb_wrp" style="background-image:url(<#=imageUrl#>);"></span>\n        </span>\n    </span>\n    <span class="weapp_card_ft">\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span>\n';
});define("pages/voice_tpl.html.js",[],function(){
return'<span id="voice_main_<#=voiceid#>_<#=posIndex#>" class="db audio_area <#if(!musicSupport){#> unsupport<#}#>">\n    <span class="tc tips_global unsupport_tips" <#if(show_not_support!==true){#>style="display:none;"<#}#>>\n    当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放    </span>\n    <span class="audio_wrp db">\n        <span id="voice_play_<#=voiceid#>_<#=posIndex#>" class="audio_play_area">\n            <i class="icon_audio_default"></i>\n            <i class="icon_audio_playing"></i>\n            <img src="<#=window.icon_audio_unread#>" alt="" class="pic_audio_default">\n        </span>\n        <span class="audio_length tips_global"><#=duration_str#></span>\n        <span class="db audio_info_area">\n            <strong class="db audio_title"><#=title#></strong>\n            <span class="audio_source tips_global"><#if(window.nickname){#>来自<#=window.nickname#><#}#></span>\n        </span>\n        <span id="voice_progress_<#=voiceid#>_<#=posIndex#>" class="progress_bar" style="width:0px;"></span>\n    </span>\n</span>\n';
});define("pages/voice_component.js",["biz_common/dom/event.js","biz_common/tmpl.js","pages/loadscript.js","pages/music_player.js","biz_common/dom/class.js","pages/report.js","biz_common/utils/monitor.js"],function(e,t,r,o){
"use strict";
function i(e){
this._o={
type:0,
comment_id:"",
src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
debug:!1,
needVioceMutex:!0,
appPlay:!0,
title:"",
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
playingCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:"",
fileSize:0
},this._init(e);
}
function s(e,t,r,o){
I.num++,t.musicSupport=I.musicSupport,t.show_not_support=!1,I.musicSupport||1!=I.num||(t.show_not_support=!0);
var i=document.createElement("div"),s="";
s=o?l.render(e,t):l.tmpl(e,t),i.innerHTML=s;
var n=r.parentNode;
n&&(n.lastChild===r?n.appendChild(i.children[0]):n.insertBefore(i.children[0],r.nextSibling));
}
function n(){
"undefined"==typeof window.reportVoiceid&&(window.reportVoiceid=[]),"undefined"==typeof window.reportMid&&(window.reportMid=[]);
}
function a(){
m.on(window,"unload",p);
}
function p(){
for(var e in I.reportData)g.musicreport({
data:I.reportData[e]
});
}
function c(e){
f.setSum(I.reportId,18,1),f.send();
var t=+new Date,r="//open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id=#songid#&mid=#mid#&format=json&app_id=1034002693&app_key=cjjDaueOyPYRJFeTqG&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
r=r.replace("#mid#",e.mid).replace("#songid#",e.id),_({
url:r,
timeout:3e4,
callbackName:"get_song_info_back",
callback:function(r){
var o=+new Date-t;
if(!r||"undefined"==typeof r.ret){
var i=1;
return d({
type:"error",
time:o,
code:i
}),void("function"==typeof e.onError&&e.onError({
errcode:i
}));
}
var s;
s=0==r.ret?r.play_url?0:6:1001==r.ret?1:1002==r.ret?2:1003==r.ret?3:1004==r.ret?4:5,
d({
type:"success",
time:o,
code:s
}),e.onSuc({
status:s,
play_url:r.play_url
});
},
onerror:function(r){
var o=+new Date-t,i=4;
switch(1*r){
case 400:
i=2;
break;

case 500:
i=3;
break;

default:
i=4;
}
d({
type:"error",
time:o,
code:i
}),"function"==typeof e.onError&&e.onError({
errcode:i
});
}
});
}
function d(e){
var t=Math.max(e.time,0);
if(t=Math.min(t,6e4),e.time>=0&&e.time<200?f.setSum(I.reportId,24,1):e.time>=200&&e.time<500?f.setSum(I.reportId,25,1):e.time>=500&&e.time<1e3?f.setSum(I.reportId,26,1):e.time>=1e3&&e.time<2e3?f.setSum(I.reportId,27,1):e.time>=2e3&&e.time<1e4?f.setSum(I.reportId,28,1):e.time>=1e4&&f.setSum(I.reportId,29,1),
f.setAvg(I.reportId,23,t),"error"==e.type){
switch(1*e.code){
case 1:
f.setSum(I.reportId,9,1);
break;

case 2:
f.setSum(I.reportId,10,1);
break;

case 3:
f.setSum(I.reportId,11,1);
break;

case 4:
f.setSum(I.reportId,12,1);
}
f.setSum(I.reportId,19,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
f.setSum(I.reportId,8,1);
break;

case 0:
f.setSum(I.reportId,17,1);
break;

case 2:
f.setSum(I.reportId,13,1);
break;

case 3:
f.setSum(I.reportId,14,1);
break;

case 4:
f.setSum(I.reportId,15,1);
break;

case 5:
f.setSum(I.reportId,16,1);
break;

case 6:
f.setSum(I.reportId,47,1);
}
f.setSum(I.reportId,20,1);
}
f.send();
}
function u(e){
return new i(e);
}
var m=e("biz_common/dom/event.js"),l=e("biz_common/tmpl.js"),_=e("pages/loadscript.js"),y=e("pages/music_player.js"),h=e("biz_common/dom/class.js"),g=e("pages/report.js"),f=e("biz_common/utils/monitor.js"),I={
reportId:"28306",
musicSupport:y.getSurportType(),
reportData:{},
posIndex:{},
qqMusiceSongId:"http://thirdparty.gtimg.com/#songId#.m4a?fromtag=38&songid=#songId#",
qqMusiceMid:"http://thirdparty.gtimg.com/C100#mid#.m4a?fromtag=38&songid=#songId#",
num:0
};
return n(),a(),i.prototype._init=function(e){
this._extend(e),this._g={
copyright:-1,
check_copyright:!1
},this._initQQmusicLyric(),this._initReportData(),this._initPlayer(),this._playEvent();
},i.prototype._initQQmusicLyric=function(){
var e=this._o;
e.webUrl=0==e.type||1==e.type?e.webUrl.replace("#songId#",e.songId||"").replace("#referFrom#","music.qq.com"):e.webUrl.replace("#songId#","").replace("#referFrom#","");
},i.prototype._initReportData=function(){
var e=this._o;
2==e.type||3==e.type?window.reportVoiceid.push(e.songId):(0==e.type||1==e.type)&&window.reportMid.push(e.songId),
"undefined"==typeof I.reportData[e.type]&&(I.reportData[e.type]=g.getMusicReportData(e),
I.posIndex[e.type]=0),this._g.posIndex=I.posIndex[e.type]++;
var t=I.reportData[e.type];
t.musicid.push(e.songId),t.commentid.push(e.comment_id),t.hasended.push(0),t.mtitle.push(e.title),
t.detail_click.push(0),t.duration.push(parseInt(1e3*e.duration)),t.errorcode.push(0),
t.play_duration.push(0);
},i.prototype._initPlayer=function(){
I.musicSupport&&(this._o.onStatusChange=this._statusChangeCallBack(),this._o.onTimeupdate=this._timeupdateCallBack(),
this._o.onError=this._errorCallBack(),this.player=new y.init(this._o));
},i.prototype._playEvent=function(){
var e=this,t=this._o,r=this._g;
if(I.musicSupport){
var o=0;
2==t.type||3==t.type?o=3:(0==t.type||1==t.type)&&(o=1),m.tap(t.playArea,function(){
return h.hasClass(t.playCssDom,t.playingCss)?(e.player.stop(),g.report({
type:o,
comment_id:t.comment_id,
voiceid:t.songId,
action:5
})):3==o?e._playMusic(3):1==o&&e._checkCopyright(function(){
e.player.setSrc(r.play_url),e._playMusic(1);
}),!1;
});
}
t.detailUrl&&t.detailArea&&m.tap(t.detailArea,function(){
e._checkCopyright(function(){
I.reportData[t.type].detail_click[r.posIndex]=1,window.location.href=t.detailUrl;
});
});
},i.prototype._checkCopyright=function(e){
var t=this,r=this._o,o=this._g;
return o.play_url&&this._musicCopyrightWarnning(!1)===!1?void("function"==typeof e&&e()):void(o.check_copyright||(o.check_copyright=!0,
c({
id:r.songId,
mid:r.mid,
onSuc:function(r){
o.check_copyright=!1,o.copyright=1*r.status,t._musicCopyrightWarnning(!0)===!1&&"function"==typeof e&&(o.play_url=r.play_url,
e({
play_url:r.play_url
}));
},
onError:function(){
o.check_copyright=!1;
}
})));
},i.prototype._musicCopyrightWarnning=function(e){
var t=this._g,r=!0,i="";
switch(1*t.copyright){
case 0:
r=!1;
break;

case 1:
r=!0,i="该歌曲版权已过期，无法播放。";
break;

case 2:
r=!0,i="抱歉，应版权方要求，当前国家或地区暂不提供此歌曲服务。";
break;

case 3:
r=!0,i="该歌曲版权已过期，无法播放。";
break;

case 4:
r=!0,i="抱歉，歌曲信息不正确。";
break;

case 5:
r=!0,i="系统错误，请稍后再试。";
break;

case 6:
r=!0,i="系统错误，请稍后再试。";
break;

default:
r=!0,i="系统错误，请稍后再试。";
}
return r===!0&&e===!0&&(i+="错误码："+t.copyright,setTimeout(function(){
o(i);
},0)),r;
},i.prototype._playMusic=function(e){
var t=this._o,r=this._g;
this.player.play(0),I.reportData[t.type].hasended[r.posIndex]=1,g.report({
type:e,
comment_id:t.comment_id,
voiceid:t.songId,
action:4
});
},i.prototype._extend=function(e){
for(var t in e)this._o[t]=e[t];
},i.prototype._statusChangeCallBack=function(){
var e=this;
return function(t,r){
e._updatePlayerCss(this,r);
};
},i.prototype._timeupdateCallBack=function(){
var e=this,t=this._o,r=this._g;
return function(o,i){
e._updateProgress(this,i),0!=i&&(I.reportData[t.type].play_duration[r.posIndex]=parseInt(1e3*i));
};
},i.prototype._errorCallBack=function(){
var e=this,t=this._o,r=this._g;
return function(o,i){
I.reportData[t.type].errorcode[r.posIndex]=i,e._updatePlayerCss(this,3);
};
},i.prototype._updatePlayerCss=function(e,t){
var r=this._o,o=r.playCssDom,i=r.progress;
2==t||3==t?(h.removeClass(o,r.playingCss),!!i&&(i.style.width=0)):1==t&&h.addClass(o,r.playingCss);
},i.prototype._updateProgress=function(e,t){
var r=this._o,o=r.progress,i=e.getDuration();
i&&o&&(o.style.width=this._countProgress(i,t));
},i.prototype._countProgress=function(e,t){
return t/e*100+"%";
},{
init:u,
renderPlayer:s
};
});define("pages/qqmusic_tpl.html.js",[],function(){
return'<span id="qqmusic_main_<#=comment_id#>_<#=posIndex#>" class="db qqmusic_area <#if(!musicSupport){#> unsupport<#}#>">\n    <span class="tc tips_global unsupport_tips" <#if(show_not_support!==true){#>style="display:none;"<#}#>>\n    当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放    </span>\n    <span class="db qqmusic_wrp">\n        <span class="db qqmusic_bd">\n            <span id="qqmusic_play_<#=musicid#>_<#=posIndex#>" class="play_area">\n                <i class="icon_qqmusic_switch"></i>\n                <img src="<#=window.icon_qqmusic_default#>" alt="" class="pic_qqmusic_default">\n                <img src="<#=music_img#>" data-autourl="<#=audiourl#>" data-musicid="<#=musicid#>" class="qqmusic_thumb" alt="">\n            </span>\n            <!--\n            <%@if($show_comment.DATA$=1)%>\n            <span id="qqmusic_love_icon_<#=musicid#>_<#=posIndex#>" class="qqmusic_love">\n                <i class="icon_love"></i>\n                <span id="love_text_<#=comment_id#>_<#=posIndex#>" class="love_num">赞</span>\n            </span>\n            <%@endif%>\n            -->\n            <a id="qqmusic_home_<#=musicid#>_<#=posIndex#>" class="access_area">\n                <span class="qqmusic_songname"><#=music_name#></span>\n                <span class="qqmusic_singername"><#=singer#></span>\n                <span class="qqmusic_source"><img src="<#=window.icon_qqmusic_source#>" alt=""></span>\n            </a>\n        </span>\n    </span>       \n</span>\n';
});define("new_video/ctl.js",["biz_wap/utils/ajax.js"],function(i){
"use strict";
var e=top.window.user_uin,t=Math.floor(top.window.user_uin/100)%20;
e||(t=-1);
var o=function(){
return t>=0;
};
top.window.__webviewid||(top.window.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var i=top.window.mid,t=top.window.idx,o="";
o=i&&t?i+"_"+t:"";
var d=top.window.__webviewid,r=[e,o,d].join("_");
return r;
},r=function(e){
if(20>t)try{
var r=e.vid||"",w={};
w.__biz=top.window.biz||"",w.vid=r,w.clienttime=+new Date;
var n=top.window.mid,a=top.window.idx,p="";
n&&a?(w.type=1,p=n+"_"+a):(w.type=2,p=r),w.id=p,w.webviewid=d(),w.step=e.step||0,
w.orderid=e.orderid||0,w.ad_source=e.ad_source||0,w.traceid=e.traceid||0,w.ext1=e.ext1||"",
w.ext2=e.ext2||"",w.r=Math.random(),w.devicetype=top.window.devicetype,w.version=top.window.clientversion,
w.is_gray=o()?1:0;
var _=i("biz_wap/utils/ajax.js");
_({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:w
});
}catch(v){}
};
return{
report:r,
getWebviewid:d,
showAd:o
};
});define("a/testdata.js",[],function(){
"use strict";
var p=[{
hint_txt:"",
url:"http://p.weixin.qq.com/promotion/ad_detail_info?key=30eb0e9b5ecc495af46b69e0d34e048a7ecab19188a2cf401b8572c09f2de30768b0263bd398b432283e01f2bf4df374",
type:"0",
rl:"http://c.gdt.qq.com/gdt_mclick.fcg?viewid=lBVtRb2mL!XAQbJ6ufVt!LQ9kcp5Is0QJCPSy4ohVW7C!_AWskP5eMlSdzl4ksNQvkmB6Uu!xc2JpGYuGh2qJUdnqUjSUTfKhkgciU7GR9!PeAr5mQce5B4cgZiRmWTnGvq52igNyBzorOLKhFAEOGONcPnMSXyfO8eFPpweJqk&jtype=0&i=1",
apurl:"http://v.gdt.qq.com/gdt_stats.fcg?viewid=lBVtRb2mL!XAQbJ6ufVt!LQ9kcp5Is0QJCPSy4ohVW7C!_AWskP5eMlSdzl4ksNQvkmB6Uu!xc2JpGYuGh2qJUdnqUjSUTfKhkgciU7GR9!PeAr5mQce5B4cgZiRmWTnGvq52igNyBzorOLKhFAEOGONcPnMSXyfO8eFPpweJqk&i=1",
traceid:"qh4u7udwhuwlg01",
group_id:"",
url_scheme:"asdsd",
ticket:"29tcgyfz3xfqf",
watermark_type:2,
aid:"48928",
image_url:"http://pgdt.gtimg.cn/gdt/0/CAAAE95CdBUkWUKACq5F2vZ.png/0?ck=bd6949105af97639d0ab95551e9539fb",
pt:104,
is_cpm:1,
app_info:{
url_scheme:"asd",
app_rating:4.5,
app_name:"妈妈圈-怀孕育儿",
app_id:100497157,
apk_name:"cn.mama.activity",
icon_url:"http://pp.myapp.com/ma_icon/0/icon_1221109_20044009_1419991372/96",
apk_url:"http://dd.myapp.com/16891/8332CC95CF6C0656270CA82EB65950EC.apk?fsname=cn%2Emama%2Eactivity%5F5%2E0%2E8%5F35.apk&asr=2d3d",
app_md5:"8332CC95CF6C0656270CA82EB65950EC",
version_code:35,
appinfo_url:"http://a.app.qq.com/o/simple.jsp?pkgname=cn.mama.activity",
app_size:12897787,
down_count:3840230,
category:[],
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_1_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_2_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_3_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_4_1419991365/330|http://pp.myapp.com/ma_pic2/0/shot_1221109_20044009_5_1419991365/330",
signature_md5:"749C945CB88BEBF085CC7AADA57E5364",
desc:"妈妈圈(q.mama.cn)—辣妈们必备的备孕、怀孕、育儿、家庭生活，娱乐休闲应用，3000万妈妈的选择。从备孕、孕期、 宝宝成长、早教、亲子娱乐到购物、瘦身、美食、家庭闲谈、国内外旅游攻略，只要妈妈关心的内容， 只要妈妈感兴趣的人，无所不包，无所不有。妈妈的精彩生活，上妈妈圈一手掌握。\n妈妈圈——\n她是【孕育神器】\n孕前准备、怀孕、育儿，休闲娱乐，家庭生活经营，妈妈圈沉淀了十年的专业知识和真实经验，贴心呵护妈妈的每一天。\n她是【辣妈乐园】\n寻找志趣相投的姐妹，孕育圈、兴趣圈、娱乐圈、同城圈、购物圈，圈圈相扣，要寻找的内容，要认识的姐妹这里啥都有。\n她是【同城利器】\n本地资讯、周边旅游、同城活动，折扣情报，教育医疗，只要一个妈妈圈，本地吃、喝、住、行、玩、 乐、购尽在掌握之中。\n她是【购物宝典】\n非买不可-妈妈专属的购物天地，专业的选品团队为您精挑细选, 海外淘、新奇特、白菜价，免费试用，各种玩法和商品，买得开心，败得有理！",
new_feature:"1、Android 推送样式优化\n2、针对部分Bug&问题修复"
},
card_info:{
card_logo_url:"http://pgdt.gtimg.cn/gdt/0/CAAAE95CdBUkWUKACq5F2vZ.png/0?ck=bd6949105af97639d0ab95551e9539fb",
card_titile:"测试卡券",
card_brand_name:"腾讯公司",
card_id:"123",
card_ext:"abc"
},
ad_desc:"",
biz_appid:"",
pos_type:0
}];
return{
data:p
};
});define("appmsg/reward_entry.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","rt/appmsg/getappmsgext.rt.js"],function(e,t,n,r){
"use strict";
function a(e){
e&&(e.style.display="block");
}
function o(e){
e&&(e.style.display="none");
}
function i(){
p({
url:"/mp/getappmsgext?&f=json"+(window.send_time?"&send_time="+send_time:""),
data:{
__biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
scene:source,
title:encodeURIComponent(msg_title.htmlDecode()),
ct:ct,
devicetype:devicetype.htmlDecode(),
version:version.htmlDecode(),
is_need_reward:is_need_reward,
reward_uin_count:is_need_reward?3*w:0,
r:Math.random()
},
type:"post",
dataType:"json",
async:!0,
rtId:27613,
rtKey:50,
rtDesc:f,
success:function(e){
e&&(document.getElementById("js_reward_link")&&u.off(document.getElementById("js_reward_link"),"click",x),
s({
reward_total:e.reward_total_count,
reward_head_imgs:e.reward_head_imgs||[],
can_reward:e.can_reward,
timestamp:e.timestamp
}));
}
});
}
function d(e){
return function(t){
return"0"==window.wx_user_can_reward?void r("你已成为该公众号的黑名单用户，暂时无法赞赏。"):(t.preventDefault(),
void g.invoke("openUrlWithExtraWebview",{
url:e
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
}));
};
}
function s(e){
var t=window.innerWidth||document.documentElement.innerWidth,n=(Math.ceil((h-188)/42)+1)*Math.floor((t-15)/42);
_="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+n+"&source=1#wechat_redirect";
var r="#wechat_redirect",s="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+r,l=document.getElementById("js_reward_link");
l&&(g.on("activity:state_change",function(e){
if("onResume"==e.state_change||"onResume"==e.state){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=j)return;
localStorage.setItem("lastOnresumeTime",t),g.invoke("setNavigationBarColor",{
actionCode:"1"
}),i();
}
}),x=d(s),u.on(l,"click",x)),y=e.reward_head_imgs;
var w=c();
v.reward&&1==e.can_reward?(a(v.reward),u.on(window,"load",function(){
m&&(u.off(window,"scroll",m),u.on(window,"scroll",m));
})):o(v.reward);
var p=document.getElementById("js_reward_inner");
p&&w>0&&a(p);
var f=document.getElementById("js_reward_total");
f&&(f.innerText=e.reward_total,f.setAttribute("href",_));
}
function l(e,t){
var n=document.createElement("span");
n.className="reward_user_avatar";
var r=new Image;
return r.onload=function(){
window.logs&&window.logs.reward_heads_total++,r.onload=r.onerror=null;
},r.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
r.onload=r.onerror=null;
},r.src=t,n.appendChild(r),e.appendChild(n),n;
}
function c(){
if(y.length){
var e=document.getElementById("js_reward_list"),t=0,n=document.createDocumentFragment();
if(e){
for(var r=0,a=y.length;a>r&&(t++,l(n,y[r]),t!=3*w);++r);
t>w&&(e.className+=" tl"),e.innerHTML="",e.appendChild(n);
}
return t;
}
}
function m(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+h>v.reward.offsetTop&&(p({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),u.off(window,"scroll",m),m=null);
}
var w,_,u=e("biz_common/dom/event.js"),p=e("biz_wap/utils/ajax.js"),g=e("biz_wap/jsapi/core.js"),f=e("rt/appmsg/getappmsgext.rt.js"),h=window.innerHeight||document.documentElement.clientHeight,v={
reward:document.getElementById("js_reward_area")
},y=[],j=500;
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var x=function(){};
return{
handle:function(e,t){
w=t,s(e);
},
render:function(e){
w=e,c();
}
};
});define("appmsg/comment.js",["appmsg/cmt_tpl.html.js","biz_common/utils/wxgspeedsdk.js","biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js"],function(e,t,n,o){
"use strict";
function m(e,t){
e&&(e.style.display=t?t:"block");
}
function i(e){
e&&(e.style.display="none");
}
function c(){
setTimeout(function(){
m(J.toast);
},750),setTimeout(function(){
i(J.toast);
},1500);
}
function s(e){
return e.replace(/^\s+|\s+$/g,"");
}
function a(e,t){
if(!(Math.random()<.999)){
var n=window.location.protocol,o=9;
"https:"==n&&(o=18),q.saveSpeeds({
uin:uin,
pid:o,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:t
}]
}),q.send();
}
}
function l(){
var e=window.innerHeight||document.documentElement.clientHeight,t=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight;
if(!(S||-1==U||U>0&&n-t-e>500)){
var o=+new Date;
S=!0,i(J.tips),m(J.loading);
var c="/mp/appmsg_comment?action=getcomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id+"&offset="+U+"&limit="+A+(window.send_time?"&send_time="+send_time:"");
try{
$++,$>1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=27&content="+encodeURIComponent(c)),
Z.indexOf(c)>-1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=25&content="+encodeURIComponent(c)),
Z.push(c);
}catch(s){}
L("[Appmsg comment] start get comment data, url:"+c),D({
url:c,
type:"get",
success:function(e){
var t=+new Date,n=t-o,m={};
try{
m=window.eval.call(window,"("+e+")");
}catch(i){}
var s=m.base_resp&&m.base_resp.ret;
if(0==s){
r(m);
var l=+new Date-t;
a(n,l);
}else R.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(c)+";ret="+s+"&r="+Math.random();
L("[Appmsg comment] get comment success, text: "+e);
},
error:function(){
R.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(c)+"&r="+Math.random(),
L("[Appmsg comment] get comment ajax error");
},
complete:function(){
S=!1,i(J.loading),z.off(window,"scroll",E);
}
});
}
}
function r(e){
var t,n=document.createDocumentFragment();
K++,K>1&&(X.src="http://mp.weixin.qq.com/mp/jsreport?key=26&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
offset:U,
url:location.href
}))),0==U?(F=e.logo_url,P=e.nick_name,t=e.elected_comment,t&&t.length?(u(t,n,"elected"),
J.list.appendChild(n),m(J.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn1")):m(document.getElementById("js_cmt_nofans1"),"block"),
e.elected_comment_total_cnt<=10&&(m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa")))):(i(J.main),window.adDatas=window.adDatas||{},
1==copyright_stat&&0==window.adDatas.num&&T.addClass(document.body,"rich_media_empty_extra"),
0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?m(document.getElementById("js_cmt_addbtn2")):m(document.getElementById("js_cmt_nofans2"),"block")),
function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(t=e.elected_comment,t&&t.length&&(u(t,n,"elected"),J.list.appendChild(n))),
0==e.elected_comment_total_cnt?(U=-1,z.off(window,"scroll",l),i(document.getElementById("js_cmt_loading")),
i(document.getElementById("js_cmt_statement")),i(document.getElementById("js_cmt_qa"))):U+A>=e.elected_comment_total_cnt?(U=-1,
z.off(window,"scroll",l),i(document.getElementById("js_cmt_loading")),m(document.getElementById("js_cmt_statement")),
m(document.getElementById("js_cmt_qa"))):U+=e.elected_comment.length;
}
function d(){
O.log("tag1");
var e=s(J.input.value);
if(O.log("tag2"),!T.hasClass(J.submit,"btn_disabled")){
if(O.log("tag3"),e.length<1)return y("留言不能为空");
if(O.log("tag4"),e.length>600)return y("字数不能多于600个");
O.log("tag5"),T.addClass(J.submit,"btn_disabled"),O.log("tag6");
var t=document.getElementById("activity-name");
O.log("tag7");
var n="/mp/appmsg_comment?action=addcomment&comment_id="+comment_id+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
D({
url:n,
data:{
content:e,
title:t&&s(t.innerText),
head_img:F,
nickname:P
},
type:"POST",
success:function(t){
O.log("tag8"),N.hidePannel();
var o={},i=document.createDocumentFragment();
try{
o=window.eval.call(window,"("+t+")");
}catch(s){}
switch(+o.ret){
case 0:
c(),u([{
content:e,
nick_name:P,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:F,
like_status:0,
content_id:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:o.my_id
}],i,"mine"),J.mylist.insertBefore(i,J.mylist.firstChild),m(J.mylist.parentNode),
J.input.value="";
break;

case-6:
y("你留言的太频繁了，休息一下吧");
break;

case-7:
y("你还未关注该公众号，不能参与留言");
break;

case-10:
y("字数不能多于600个");
break;

case-15:
y("留言已关闭");
break;

default:
y("系统错误，请重试");
}
0!=o.ret&&(R.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:resperr;url:"+encodeURIComponent(n)+";ret="+o.ret+"&r="+Math.random());
},
error:function(e){
O.log("shit;"+e.status+";"+e.statusText),R.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:ajaxerr;url:"+encodeURIComponent(n)+"&r="+Math.random();
},
complete:function(){
""!=J.input.value&&T.removeClass(J.submit,"btn_disabled");
}
});
}
}
function p(){
if(0==Y){
var e="/mp/appmsg_comment?action=getmycomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id,t=document.getElementById("js_mycmt_loading");
Y=1,m(t),D({
url:e,
type:"get",
success:function(t){
var n={};
try{
n=window.eval.call(window,"("+t+")");
}catch(o){}
var i=n.base_resp&&n.base_resp.ret;
if(0==i){
var c=n.my_comment,s=document.createDocumentFragment();
c&&c.length&&(u(c,s,"mine"),J.mylist.appendChild(s),m(J.mylist.parentNode)),Y=2;
}else Y=0,R.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(e)+";ret="+i+"&r="+Math.random();
},
error:function(){
Y=0,R.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(e)+"&r="+Math.random();
},
complete:function(){
i(t);
}
});
}
}
function _(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var o=t/1e3-e,m=n/1e3-e,i=new Date(n).getFullYear(),c=new Date(1e3*e);
return 3600>o?Math.ceil(o/60)+"分钟前":86400>m?Math.floor(o/60/60)+"小时前":172800>m?"昨天":604800>m?Math.floor(m/24/60/60)+"天前":c.getFullYear()==i?c.getMonth()+1+"月"+c.getDate()+"日":c.getFullYear()+"年"+(c.getMonth()+1)+"月"+c.getDate()+"日";
}
function u(e,t,n){
var o,m="",i=document.createElement("div"),c="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
Q={};
for(var s,a=0;s=e[a];++a){
s.time=_(s.create_time),s.status="",s.logo_url=s.logo_url||c,s.logo_url=-1!=s.logo_url.indexOf("wx.qlogo.cn")?s.logo_url.replace(/\/132$/,"/96"):s.logo_url,
s.content=s.content.htmlDecodeLite().htmlEncodeLite(),s.nick_name=s.nick_name.htmlDecodeLite().htmlEncodeLite(),
s.like_num_format=parseInt(s.like_num)>=1e4?(s.like_num/1e4).toFixed(1)+"万":s.like_num,
s.is_from_friend=s.is_from_friend||0,s.is_from_me="mine"==n?1:s.is_from_me||0,s.reply=s.reply||{
reply_list:[]
},s.is_mine=n?!1:!0,s.is_elected="elected"==n?1:s.is_elected,s.reply.reply_list.length>0&&(s.reply.reply_list[0].time=_(s.reply.reply_list[0].create_time),
s.reply.reply_list[0].content=(s.reply.reply_list[0].content||"").htmlEncodeLite(),
s.reply.reply_list[0].reply_like_status=s.reply.reply_list[0].reply_like_status||0,
s.reply.reply_list[0].reply_like_num=s.reply.reply_list[0].reply_like_num||0),m+=M.tmpl(x,s);
try{
var l=s.nick_name+s.content,r=!1,d=23;
Q[l]&&(r=!0,d=24),G.indexOf(s.content_id)>-1&&(r=!0,d=23),G.push(s.content_id),Q[l]=!0,
r&&(X.src="http://mp.weixin.qq.com/mp/jsreport?key="+d+"&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
content_id:s.content_id,
offset:U,
length:e.length,
url:location.href
})));
}catch(p){}
}
for(i.innerHTML=m,g(i);o=i.children.item(0);)t.appendChild(o);
}
function g(e){
O.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=N.encode(e.innerHTML);
});
}
function y(e){
return setTimeout(function(){
o(e);
});
}
function f(){
var e="1"===C.getParam("js_my_comment");
e&&h(!0);
}
function h(e){
i(J.article),m(J.mine),window.scrollTo(0,0),p(),e||O.later(function(){
J.input.focus();
});
}
function w(){
i(J.mine),m(J.article),window.scrollTo(0,document.documentElement.scrollHeight),
J.input.blur();
}
function j(e){
var t=e.delegatedTarget||e.srcElement,n=null;
if(T.hasClass(t,"js_comment_praise")&&(n=t),n){
var o=parseInt(n.dataset.status),m=0==o?1:0,i=n.dataset.contentId,c="/mp/appmsg_comment?action=likecomment&&like="+m+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&content_id="+i;
v(n),D({
url:c,
type:"GET"
});
}
}
function b(e){
var t=e.delegatedTarget,n=parseInt(t.dataset.status),o=n?0:1,m=t.dataset.contentId,i=t.dataset.replyId;
v(t),D({
url:"/mp/appmsg_comment?action=like_author_reply",
type:"post",
data:{
comment_id:comment_id,
content_id:m,
reply_id:i,
like:o
}
});
}
function v(e){
var t=T.hasClass(e,"praised"),n=e.querySelector(".praise_num"),o=n.innerHTML,m=o.indexOf("万"),i=parseInt(o)?parseInt(o):0;
t?(-1==m&&(n.innerHTML=i-1>0?i-1:""),T.removeClass(e,"praised"),e.dataset.status=0):(-1==m&&(n.innerHTML=i+1),
T.addClass(e,"praised"),e.dataset.status=1);
}
function I(e){
var t=e.delegatedTarget,n=t.getAttribute("data-my-id"),c="/mp/appmsg_comment?action=delete&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&my_id="+n;
confirm("确定删除吗？")&&D({
url:c,
success:function(e){
var c,s=t;
try{
e=JSON.parse(e);
}catch(a){
e={};
}
if(0==e.ret){
for(;s&&(s.nodeType!=s.ELEMENT_NODE||"li"!=s.tagName.toLowerCase());)s=s.parentNode;
s&&(s.parentNode.removeChild(s),c=document.getElementById("cid"+n),c&&c.parentNode.removeChild(c),
0==J.list.children.length&&(i(J.main),i(document.getElementById("js_cmt_statement")),
i(document.getElementById("js_cmt_qa")),m(document.getElementById("js_cmt_addbtn2"))),
0==J.mylist.children.length&&i(J.mylist.parentNode));
}else o("删除失败，请重试");
},
error:function(){
o("网络错误，请重试");
}
});
}
function E(){
try{
var e=J.loading.getBoundingClientRect(),t=Math.random()<1;
e.top<window.innerHeight&&S&&t&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_45_1&lc=1&log0",
z.off(window,"scroll",E));
}catch(n){}
}
function k(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var x=e("appmsg/cmt_tpl.html.js"),B=document.getElementById("js_cmt_area"),C=new k(window.location.href),q=e("biz_common/utils/wxgspeedsdk.js");
if(0!=comment_id&&uin&&key){
if(-1==navigator.userAgent.indexOf("MicroMessenger"))return void(B&&(B.style.display="none"));
B&&(B.style.display="block");
var z=e("biz_common/dom/event.js"),T=e("biz_common/dom/class.js"),D=e("biz_wap/utils/ajax.js"),M=(e("biz_common/utils/string/html.js"),
e("biz_common/tmpl.js")),H=e("biz_wap/utils/fakehash.js"),L=e("appmsg/log.js");
!function(){
var t=e("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n.innerHTML=M.tmpl(t,{}),document.body.appendChild(n);
}();
var N=e("appmsg/emotion/emotion.js"),O=e("appmsg/emotion/dom.js"),R=new Image,U=0,A=100,S=!1,F="",P="我",Y=0,J={
article:document.getElementById("js_article"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading")
},G=[],Q={},X=new Image,Z=[],$=0,K=0;
!function(){
l(),f(),N.init();
}(),H.on("comment",function(){
h();
}),H.on(function(e){
"comment"==e&&w();
}),z.on(J.input,"input",function(){
var e=s(J.input.value);
e.length<1?T.addClass(J.submit,"btn_disabled"):T.removeClass(J.submit,"btn_disabled");
}),z.on(J.list,"tap",".js_comment_praise",j),z.on(J.mylist,"tap",".js_comment_praise",j),
z.on(J.list,"tap",".js_reply_praise",b),z.on(J.list,"tap",".js_del",I),z.on(J.mylist,"tap",".js_del",I),
z.on(J.list,"tap",".js_del",function(e){
e.preventDefault();
}),z.on(J.mylist,"tap",".js_del",function(e){
e.preventDefault();
}),z.on(J.submit,"tap",d),z.on(J.submit,"click",function(e){
e.preventDefault();
}),z.on(window,"scroll",E),z.on(document.getElementById("js_cmt_write1"),"click",function(e){
e.preventDefault(),H.push("comment");
}),z.on(document.getElementById("js_cmt_write2"),"click",function(e){
e.preventDefault(),H.push("comment");
});
}
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js"],function(require,exports,module,alert){
"use strict";
function like_report(e){
var tmpAttr=el_like.getAttribute("like"),tmpHtml=el_likeNum.innerHTML,isLike=parseInt(tmpAttr)?parseInt(tmpAttr):0,like=isLike?0:1,likeNum=parseInt(tmpHtml)?parseInt(tmpHtml):0;
ajax({
url:"/mp/appmsg_like?__biz="+biz+"&mid="+mid+"&idx="+idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:window.is_temp_url||0
},
type:"POST",
success:function(res){
var data=eval("("+res+")");
0==data.base_resp.ret&&(isLike?(Class.removeClass(el_like,"praised"),el_like.setAttribute("like",0),
likeNum>0&&"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum-1==0?"赞":likeNum-1)):(el_like.setAttribute("like",1),
Class.addClass(el_like,"praised"),"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum+1)));
},
async:!0
});
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),el_toolbar=document.getElementById("js_toobar3");
if(el_toolbar&&el_toolbar.querySelector){
var el_like=el_toolbar.querySelector("#like3"),el_likeNum=el_toolbar.querySelector("#likeNum3"),el_readNum=el_toolbar.querySelector("#readNum3");
DomEvent.on(el_like,"click",function(e){
return like_report(e),!1;
});
}
});