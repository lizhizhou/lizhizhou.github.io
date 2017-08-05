define("appmsg/wxtopic.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","appmsg/topic_tpl.html.js"],function(t){
"use strict";
function e(t){
t.parentNode.removeChild(t);
}
function i(t,e){
var i=c;
e.img_url||(e.img_url=topic_default_img);
for(var o in e){
var a=new RegExp("{"+o+"}","g");
i=i.replace(a,e[o]);
}
var p=document.createElement("span");
p.className="db topic_area",p.innerHTML=i,t.parentNode.insertBefore(p,t),t.parentNode.removeChild(t),
r.tap(p,function(){
var e=location.protocol+"//mp.weixin.qq.com/mp/topic?action=topic_detail_page&topic_id="+t.getAttribute("data-topic-id")+"&topic_type="+t.getAttribute("data-topic-type")+"&sn="+t.getAttribute("data-topic-sn")+"&scene=101#wechat_redirect";
n.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t&&-1!==t.err_msg.indexOf(":ok")||(location.href=e);
});
});
}
function o(t){
var o={
topic_id:t.getAttribute("data-topic-id"),
topic_type:t.getAttribute("data-topic-type"),
sn:t.getAttribute("data-topic-sn"),
biz:biz
};
p({
url:"/mp/topic?action=get_topic_info",
type:"post",
data:o,
success:function(o){
if(console.log(o),o=JSON.parse(o),0!=o.base_resp.ret)return void e(t);
var a={
title:o.title,
author:o.author||(o.leading_actor?o.leading_actor.replace(/\$\$/g," / "):"-"),
img_url:o.img_url,
msg_num:o.msg_num
};
i(t,a);
},
error:function(){
e(t);
}
});
}
function a(){
var t=document.getElementsByTagName("wxtopic");
t[0]&&o(t[0]);
}
var p=t("biz_wap/utils/ajax.js"),n=t("biz_wap/jsapi/core.js"),r=t("biz_common/dom/event.js"),c=t("appmsg/topic_tpl.html.js");
a();
});define("appmsg/weapp.js",["biz_common/utils/string/html.js","pages/weapp_tpl.html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/tmpl.js","biz_wap/jsapi/core.js"],function(e,t,n,p){
"use strict";
function i(e,t,n){
var p=new Image;
p.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=106&content="+n+",biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(t.toString())+"&r="+Math.random()).substr(0,1024),
console&&t&&console.error(t);
}
function a(e,t,n,p,i){
_({
url:"/mp/appmsgreport?action=appmsg_weapp_report",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
weapp_appid:e||"",
weapp_pos:t||0,
weapp_title:p||0,
weapp_nickname:n||0,
type:i||0,
scene:window.source||-1
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
function r(){
var e=l("js_content");
if(!e)return!1;
if(h=e.getElementsByTagName("mp-weapp")||[],h.length<=0)return!1;
try{
y=JSON.parse(weapp_sn_arr_json).weapp_card_list;
}catch(t){
return!1;
}
return!0;
}
function o(e){
return e=e||"",e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function s(e,t,n,p){
a(e,t,n,p,4),window.__addIdKeyReport&&window.__addIdKeyReport("28307",103),location.href="https://mp.weixin.qq.com/mp/waerrpage?type=upgrade&appid="+encodeURIComponent(e)+"#wechat_redirect";
}
function d(e,t,n,i){
a(e,t,n,i,5),p("请在微信内打开小程序");
}
function c(){
var e={
__biz:biz,
mid:mid,
idx:idx,
uin:uin,
key:key,
pass_ticket:pass_ticket,
weapp_num:y.length
};
window.reportWeappid=[];
for(var t=0;t<y.length;t++)e["weapp_appid_"+t]=y[t].appid,e["weapp_sn_"+t]=y[t].sn,
window.reportWeappid.push(y[t].appid);
var n="/mp/appmsg_weapp?action=batch_get_weapp";
for(var p in e)n+="&"+p+"="+encodeURIComponent(e[p]);
_({
url:n,
type:"GET",
dataType:"json",
async:!0,
success:function(e){
try{
if(e.base_resp.ret)throw new Error("Fetch weapp info but get ret="+e.base_resp.ret);
var t=!1,n=!1,p=navigator.userAgent.match(/MicroMessenger\/(\d+)\.(\d+)\.(\d+)/);
if(p){
var r=Number(p[1]),c=Number(p[2]),m=Number(p[3]);
r>6?t=!0:6===r&&c>5?t=!0:6===r&&5===c&&m>=3&&(t=!0);
}else navigator.userAgent.match(/MicroMessenger\//)||(n=!0);
for(var l=e.weapp_info,_={},h="appid="+encodeURIComponent(e.appid)+(e.appmsg_compact_url?"&appmsg_compact_url="+encodeURIComponent(e.appmsg_compact_url):""),b=0;b<l.length;b++)_[l[b].weapp_appid]=l[b];
for(b=0;b<v.length;b++)(function(e){
var p=v[e].appid,r=v[e].path,c=v[e].imageUrl,m=v[e].title,l=v[e].description,b=v[e].elem,y=_[p];
b.innerHTML=g.tmpl(u,{
imageUrl:o(c),
title:o(m),
description:o(l),
nickname:o(y.nickname),
avatar:o(y.logo_url)
});
var j=r.indexOf("?");
r.indexOf("?")>=0?r=r.slice(0,j)+".html"+r.slice(j)+"&"+h:r+=".html?"+h,w.tap(b,function(){
var o={
userName:y.weapp_username,
scene:1058,
sceneNote:encodeURIComponent(location.href),
relativeURL:r
};
return void 0!==y.app_version&&(o.appVersion=y.app_version),t?(f.invoke("openWeApp",o,function(t){
return"openWeApp:ok"===t.err_msg?window.__addIdKeyReport&&window.__addIdKeyReport("28307",102):"system:function_not_exist"===t.err_msg?n?d(p,e,y.nickname,m):s(p,e,y.nickname,m):void i(107,new Error(t.err_msg),"");
}),window.__addIdKeyReport&&window.__addIdKeyReport("28307",100),void a(p,e,y.nickname,m,3)):n?d(p,e,y.nickname,m):s(p,e,y.nickname,m);
});
})(b);
var y=null,k=function(){
y=null;
for(var e=window.innerHeight||document.documentElement.clientHeight,t=0;t<j.length;t++){
var n=j[t].elem.getBoundingClientRect();
n.top<e&&n.bottom>0&&(setTimeout(function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307",101);
},0),a(j[t].appid,t,_[j[t].appid].nickname,j[t].title,2),j.splice(t--,1));
}
};
k(),w.on(window,"scroll",function(){
y||(y=setTimeout(k,100));
});
}catch(z){
i(106,z,"parsing weapp info error");
}
},
error:function(){}
});
}
function m(){
for(var e=0;e<h.length;e++){
var t=h[e],n=t.getAttribute("data-weapp-appid"),p=t.getAttribute("data-weapp-path"),i=t.getAttribute("data-weapp-imageUrl"),a=t.getAttribute("data-weapp-title"),r=t.getAttribute("data-weapp-description"),o=document.createElement("span");
t.setAttribute("class",""),o.setAttribute("class","weapp_display_element js_weapp_display_element"),
v.push({
appid:n,
path:p,
imageUrl:i,
title:a,
description:r,
elem:o
}),j.push({
appid:n,
elem:o,
title:a
}),t.parentNode.insertBefore(o,t.nextSibling);
}
}
function l(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var u=e("pages/weapp_tpl.html.js"),_=e("biz_wap/utils/ajax.js"),w=e("biz_common/dom/event.js"),g=e("biz_common/tmpl.js"),f=e("biz_wap/jsapi/core.js"),h=null,b={},v=[],y=[],j=[];
return r()?(m(),c(),b):void 0;
});define("appmsg/voice.js",["biz_common/utils/string/html.js","pages/voice_tpl.html.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=p("js_content");
return e?(d._oElements=e.getElementsByTagName("mpvoice")||[],d._oElements.length<=0?!1:!0):!1;
}
function t(){
d.musicLen=d._oElements.length;
}
function n(){
for(var e=0,i=0;i<d.musicLen;i++){
var t=d._oElements[i],n={};
n.voiceid=a(decodeURIComponent(t.getAttribute("voice_encode_fileid")||"")),n.voiceid=n.voiceid.replace(/&#61;/g,"=").replace(/^\s/,"").replace(/\s$/,""),
n.src=d.srcRoot.replace("#meidaid#",n.voiceid),n.voiceid&&"undefined"!=n.voiceid&&(o(t,n,e),
e++);
}
}
function o(e,i,t){
i.duration=1*e.getAttribute("play_length")||0,i.duration_str=s(i.duration),i.posIndex=t,
i.title=a(decodeURIComponent(e.getAttribute("name")||"")).replace(/^\s/,"").replace(/\s$/,""),
i.fileSize=1*e.getAttribute("high_size")||0,m.renderPlayer(g,i,e),c(i),d.musicList[i.voiceid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.voiceid+"_"+e.posIndex,t=r(e.title);
e.player=m.init({
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
duration:1*(e.duration/1e3).toFixed(2),
title:t,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"playing",
playCssDom:p("voice_main_"+i),
playArea:p("voice_main_"+i),
progress:p("voice_progress_"+i),
fileSize:e.fileSize
});
}
function r(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function a(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function s(e){
if(isNaN(e))return"0:00";
var i=new Date(0),t=new Date(1*e),n=t.getHours()-i.getHours(),o=t.getMinutes()+60*n,c="i:ss".replace(/i|I/g,o).replace(/ss|SS/,l(t.getSeconds(),2));
return c;
}
function l(e,i){
for(var t=0,n=i-(e+"").length;n>t;t++)e="0"+e;
return e+"";
}
function p(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var g=e("pages/voice_tpl.html.js"),m=e("pages/voice_component.js"),d={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
return i()?(t(),n(),d.musicList):void 0;
});define("appmsg/qqmusic.js",["biz_common/utils/string/html.js","pages/qqmusic_tpl.html.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=u("js_content");
return e?(p._oElements=e.getElementsByTagName("qqmusic")||[],p._oElements.length<=0?!1:!0):!1;
}
function t(){
p.musicLen=p._oElements.length;
}
function m(){
for(var e=0,i=0;i<p.musicLen;i++){
var t=p._oElements[i],m={};
m.musicid=r(t.getAttribute("musicid")||"").replace(/^\s/,"").replace(/\s$/,""),m.comment_id=r(t.getAttribute("commentid")||"").replace(/^\s/,"").replace(/\s$/,""),
m.musicid&&"undefined"!=m.musicid&&m.comment_id&&"undefined"!=m.comment_id&&(c(t,m,e),
e++);
}
}
function c(e,i,t){
i.media_id=r(e.getAttribute("mid")||"").replace(/^\s/,"").replace(/\s$/,""),i.duration=e.getAttribute("play_length")||0,
i.posIndex=t,i.musicImgPart=r(e.getAttribute("albumurl")||"").replace(/^\s/,"").replace(/\s$/,"");
var m="";
m=i.musicImgPart.split("/");
try{
m=m[m.length-1],m=m.split(".")[0];
}catch(c){
m="";
}
i.music_img=m?p.imgroot2.replace("#mid#",m):p.imgroot+i.musicImgPart,i.audiourl=r(e.getAttribute("audiourl")||"").replace(/^\s/,"").replace(/\s$/,""),
i.singer=r(e.getAttribute("singer")||"").replace(/^\s/,"").replace(/\s$/,""),i.music_name=r(e.getAttribute("music_name")||"").replace(/^\s/,"").replace(/\s$/,""),
o.renderPlayer(l,i,e),n(i),p.musicList[i.musicid+"_"+i.posIndex]=i;
}
function n(e){
var i=e.musicid+"_"+e.posIndex,t=e.comment_id+"_"+e.posIndex,m=["http://i.y.qq.com/v8/playsong.html?songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),c=s(e.music_name);
e.player=o.init({
type:0,
comment_id:e.comment_id,
mid:e.media_id,
songId:e.musicid,
duration:1*(e.duration/1e3).toFixed(2),
title:c,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"QQ音乐",
coverImgUrl:e.music_img,
playingCss:"qqmusic_playing",
playCssDom:u("qqmusic_main_"+t),
playArea:u("qqmusic_play_"+i),
detailUrl:m,
detailArea:u("qqmusic_home_"+i)
});
}
function s(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function r(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function a(){}
function u(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var l=e("pages/qqmusic_tpl.html.js"),o=e("pages/voice_component.js"),p={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_68",
imgroot2:"https://y.gtimg.cn/music/photo_new/T002R68x68M000#mid#.jpg",
musicList:{},
musicLen:0
};
return i()?(t(),m(),a(),p.musicList):void 0;
});define("appmsg/iframe.js",["biz_common/utils/string/html.js","new_video/ctl.js","pages/version4video.js","biz_common/dom/attr.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(e){
var t=0;
try{
e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight);
var i=e.parentElement;
if(i&&(e.style.height=t+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var o=e.contentWindow.document.getElementsByTagName("html");
o&&o.length&&(o[0].style.overflow="hidden");
}
}catch(n){}
}
function i(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=r.video_top.length,o=e+r.innerHeight,d=0,s=0;t>s;s++){
var m=r.video_top[s];
m.reported?d++:o>=m.start&&o<=m.end&&(m.reported=!0,n.report({
step:1,
vid:m.vid
}));
}
d==t&&(c.off(window,"scroll",i),r.video_top=r.video_iframe=i=null);
}
e("biz_common/utils/string/html.js");
{
var o,n=e("new_video/ctl.js"),r={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
video_iframe:[],
video_top:[]
},d=e("pages/version4video.js"),s=e("biz_common/dom/attr.js"),c=(s.setProperty,e("biz_common/dom/event.js")),m=document.getElementsByTagName("iframe"),a=[];
/MicroMessenger/.test(navigator.userAgent);
}
window.reportVid=[];
for(var p=Math.ceil(1e4*Math.random()),l=0,v=m.length;v>l;++l){
o=m[l];
var f=o.getAttribute("data-src")||"",u=o.className||"",w=o.getAttribute("src")||f;
if(!f||"#"==f){
var _=o.getAttribute("data-display-src");
if(_&&(0==_.indexOf("/cgi-bin/readtemplate?t=vote/vote-new_tmpl")||0==_.indexOf("https://mp.weixin.qq.com/cgi-bin/readtemplate?t=vote/vote-new_tmpl"))){
_=_.replace(/&amp;/g,"&");
for(var h=_.split("&"),g=["/mp/newappmsgvote?action=show"],l=0;l<h.length;l++)(0==h[l].indexOf("__biz=")||0==h[l].indexOf("supervoteid="))&&g.push(h[l]);
g.length>1&&(f=g.join("&")+"#wechat_redirect");
}
}
if(d.isShowMpVideo()&&w&&(0==w.indexOf("http://v.qq.com/iframe/player.html")||0==w.indexOf("http://v.qq.com/iframe/preview.html")||0==w.indexOf("https://v.qq.com/iframe/player.html")||0==w.indexOf("https://v.qq.com/iframe/preview.html"))){
f=f.replace(/^https:/,location.protocol),f=f.replace(/^http:/,location.protocol),
f=f.replace(/preview.html/,"player.html");
var x=w.match(/[\?&]vid\=([^&]*)/);
if(!x||!x[1])continue;
var y=x[1],b=document.getElementById("js_content").offsetWidth,k=Math.ceil(3*b/4);
y=y.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),window.reportVid.push(y),r.video_iframe.push({
dom:o,
vid:y
}),w=["/mp/videoplayer?video_h=",k,"&scene=",window.source,"&random_num=",p,"&article_title=",encodeURIComponent(window.msg_title.htmlDecode()),"&source=4&vid=",y,"&mid=",appmsgid,"&idx=",itemidx||idx,"&__biz=",biz,"&nodetailbar=",window.is_temp_url?1:0,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&version=",version,"&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join(""),
uin||window.__addIdKeyReport&&window.__addIdKeyReport("28307",21),window.__addIdKeyReport&&window.__addIdKeyReport("28307",11),
setTimeout(function(e,t,i,o){
return function(){
o.removeAttribute("style"),o.setAttribute("width",e),o.setAttribute("height",t),
o.setAttribute("marginWidth",0),o.setAttribute("marginHeight",0),o.style.top="0",
o.setAttribute("src",i);
};
}(b,k,w,o),0);
}else if(f&&(f.indexOf("newappmsgvote")>-1&&u.indexOf("js_editor_vote_card")>=0||0==f.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&u.indexOf("card_iframe")>=0||f.indexOf("appmsgvote")>-1||f.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(window.is_transfer_msg&&!window.reprint_ticket&&f.indexOf(window.biz)<0){
a.push(o);
continue;
}
if(f=f.replace(/^http:/,location.protocol),u.indexOf("card_iframe")>=0){
var O=f.replace("#wechat_redirect",["&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||"","&child_biz=",biz,"&wxtoken=",window.wxtoken||""].join(""));
reprint_ticket&&(O+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join("")),
o.setAttribute("src",O);
}else{
var j=f.indexOf("#wechat_redirect")>-1,q=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&wxtoken=",window.wxtoken||""].join("");
reprint_ticket?q+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join(""):u.indexOf("vote_iframe")>=0&&(q+=["&mid=",mid,"&idx=",idx].join(""));
var O=j?f.replace("#wechat_redirect",q):f+q;
o.setAttribute("src",O);
}
-1==f.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&!function(e){
e.onload=function(){
t(e);
};
}(o),o.appmsg_idx=l;
}
if(f&&f.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&b>0){
var A=b,z=3*A/4;
o.width=A,o.height=z,o.style.setProperty&&(o.style.setProperty("width",A+"px","important"),
o.style.setProperty("height",z+"px","important"));
}
}
for(var H=0;H<a.length;H++){
var E=a[H];
E.parentNode.removeChild(E);
}
if(window.iframe_reload=function(){
for(var e=0,i=m.length;i>e;++e){
o=m[e];
var n=o.getAttribute("src");
n&&(n.indexOf("newappmsgvote")>-1||n.indexOf("appmsgvote")>-1)&&t(o);
}
},"getElementsByClassName"in document)for(var D,I=document.getElementsByClassName("video_iframe"),l=0;D=I.item(l++);)D.setAttribute("scrolling","no"),
D.style.overflow="hidden";
r.video_iframe.length>0&&setTimeout(function(){
for(var e=r.video_iframe,t=document.getElementById("js_article"),o=0,n=e.length;n>o;o++){
var d=e[o];
if(!d||!d.dom)return;
for(var s=d.dom,m=s.offsetHeight,a=0;s&&t!==s;)a+=s.offsetTop,s=s.offsetParent;
r.video_top.push({
start:a+m/2,
end:a+m/2+r.innerHeight,
reported:!1,
vid:d.vid
});
}
i(),c.on(window,"scroll",i);
},0);
});define("appmsg/review_image.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js","appmsg/log.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
function t(e,t){
s.invoke("imagePreview",{
current:e,
urls:t
},function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
}),p("[Appmsg] click image, src: "+e);
}
function a(e){
var a=[],s=e.container,p=e.imgs||[];
if(s)for(var n=s.getElementsByTagName("img")||[],o=0,m=n.length;m>o;o++)p.push(n.item(o));
for(var o=0,m=p.length;m>o;o++){
var c=p[o],g=c.getAttribute("data-src")||c.getAttribute("src"),d=c.getAttribute("data-type");
if(g&&!g.isGif()){
for(;-1!=g.indexOf("?tp=webp");)g=g.replace("?tp=webp","");
c.dataset&&c.dataset.s&&g.isCDN()&&(g=g.replace(/\/640$/,"/0"),g=g.replace(/\/640\?/,"/0?")),
g.isCDN()&&(g=r.addParam(g,"wxfrom","3",!0)),g=e.is_https_res?g.http2https():g.https2http(),
d&&(g=r.addParam(g,"wxtype",d,!0)),a.push(g),function(e){
i.on(c,"click",function(i){
return i&&i.target&&i.target.className&&i.target.className.indexOf("img_loadederror")>-1?!1:(t(e,a),
!1);
});
}(g);
}
}
}
var i=e("biz_common/dom/event.js"),s=e("biz_wap/jsapi/core.js"),r=e("biz_common/utils/url/parse.js"),p=e("appmsg/log.js");
return e("appmsg/cdn_img_lib.js"),a;
});define("appmsg/outer_link.js",["biz_common/dom/event.js"],function(e){
"use strict";
function n(e){
var n=e.container;
if(!n)return!1;
for(var r=n.getElementsByTagName("a")||[],i=0,o=r.length;o>i;++i)!function(n){
var i=r[n],o=i.getAttribute("href");
if(!o)return!1;
var a=0,c=i.innerHTML;
/^[^<>]+$/.test(c)?a=1:/^<img[^>]*>$/.test(c)&&(a=2),!!e.changeHref&&(o=e.changeHref(o,a)),
t.on(i,"click",function(){
return location.href=o,!1;
},!0);
}(i);
}
var t=e("biz_common/dom/event.js");
return n;
});define("biz_wap/jsapi/core.js",[],function(e,o,n,i){
"use strict";
document.domain="qq.com";
var t=window.__moon_report||function(){},d=8,r={
ready:function(e){
var o=function(){
try{
e&&e();
}catch(o){
throw t([{
offset:d,
log:"ready",
e:o
}]),o;
}
};
"undefined"!=typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?o():top.window.document.addEventListener?top.window.document.addEventListener("WeixinJSBridgeReady",o,!1):top.window.document.attachEvent&&(top.window.document.attachEvent("WeixinJSBridgeReady",o),
top.window.document.attachEvent("onWeixinJSBridgeReady",o));
},
invoke:function(e,o,n){
this.ready(function(){
return"object"!=typeof top.window.WeixinJSBridge?(i("请在微信中打开此链接！"),!1):void top.window.WeixinJSBridge.invoke(e,o,function(o){
try{
if(n){
n.apply(window,arguments);
var i=o&&o.err_msg?", err_msg-> "+o.err_msg:"";
console.info("[jsapi] invoke->"+e+i);
}
}catch(r){
throw t([{
offset:d,
log:"invoke;methodName:"+e,
e:r
}]),r;
}
});
});
},
call:function(e){
this.ready(function(){
if("object"!=typeof top.window.WeixinJSBridge)return!1;
try{
top.window.WeixinJSBridge.call(e);
}catch(o){
throw t([{
offset:d,
log:"call;methodName:"+e,
e:o
}]),o;
}
});
},
on:function(e,o){
this.ready(function(){
return"object"==typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.on?void top.window.WeixinJSBridge.on(e,function(){
try{
o&&o.apply(window,arguments);
}catch(n){
throw t([{
offset:d,
log:"on;eventName:"+e,
e:n
}]),n;
}
}):!1;
});
}
};
return r;
});define("appmsg/copyright_report.js",["biz_common/dom/event.js"],function(t){
"use strict";
function o(t){
var o=["/mp/copyrightreport?action=report&biz=",biz,"&scene=",t.scene,"&user_uin=",user_uin,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&t=",Math.random()].join("");
window.isSg&&(o+="&from=sougou");
var e=new Image;
e.src=o.substr(0,1024);
}
function e(){
var t=__appmsgCgiData;
if("2"==t.copyright_stat){
for(var o=r("copyright_info"),e=r("js_article");o&&e!==o;)c.copyright_top+=o.offsetTop,
o=o.offsetParent;
i.on(window,"scroll",n);
}
}
function n(){
var t=window.pageYOffset||document.documentElement.scrollTop;
t+c.innerHeight>c.copyright_top&&(o({
scene:"1",
card_pos:"0"
}),i.off(window,"scroll",n),n=c.copyright_top=null);
}
function r(t){
return document.getElementById(t);
}
var i=t("biz_common/dom/event.js"),c={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
copyright_top:0
};
return{
card_click_report:o,
card_pv_report:e
};
});define("appmsg/async.js",["biz_common/utils/string/html.js","appmsg/img_copyright_tpl.html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","biz_wap/utils/storage.js","appmsg/log.js","rt/appmsg/getappmsgext.rt.js","a/a.js","biz_wap/utils/mmversion.js","pages/version4video.js","appmsg/like.js","appmsg/comment.js","appmsg/reward_entry.js","a/testdata.js","appmsg/iframe.js"],function(e,t,r,n){
"use strict";
function i(e){
if(e&&e.img_copy_info&&e.img_copy_info.list){
for(var t={},r=e.img_copy_info.list,n=window.__appmsgCgiData.copyright_stat,i=window.__appmsgCgiData.source_biz,a=0,o=r.length;o>a;a++){
var d=r[a];
if(2==d.type){
if(2==n&&i==d.source_uin)continue;
t[d.img_url]={
source_nickname:d.source_nickname,
source_uin:d.source_uin,
source_encode_biz:d.source_encode_biz||""
};
}
}
for(var s=document.getElementsByTagName("img"),a=0,o=s.length;o>a;a++){
var d=s[a],m=d.getAttribute("data-src")||d.getAttribute("data-backsrc")||"";
if(t[m]){
var _=document.createElement("div");
_.innerHTML=j.tmpl(p,t[m]);
{
var c=_.children[0],l=d.parentNode,w=l.insertBefore(c,d),g=w.children[0];
(function(e,t){
u.on(t,"click",function(){
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene=112#wechat_redirect";
return-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?(location.href=t,
!1):(v.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}),!1);
});
})(t[m],g);
}
w.insertBefore(d,g);
}
}
}
}
function a(e){
if(B&&B.length>0)for(var t,r,n,i=0,a=B.length;a>i;++i)t=B[i],r=t.iframe,n=t.src,
e&&(n=n.replace(/\&encryptVer=[^\&]*/gi,""),n=n.replace(/\&platform=[^\&]*/gi,""),
n=n.replace(/\&cKey=[^\&]*/gi,""),n=n+"&encryptVer=6.0&platform=61001&cKey="+e),
r.setAttribute("src",n);
}
function o(t){
var r=t.appmsgstat||{};
if(window.appmsgstat||(window.appmsgstat=r),r.show&&(!function(){
var e=document.getElementById("js_read_area3"),t=document.getElementById("like3");
e.style.display="block",t.style.display="inline",r.liked=window.is_temp_url?window.liked:r.liked,
r.liked&&h.addClass(t,"praised"),t.setAttribute("like",r.liked?"1":"0");
var n=document.getElementById("likeNum3"),i=document.getElementById("readNum3"),a=window.is_temp_url?window.read_num:r.read_num,o=window.is_temp_url?window.like_num:r.like_num;
a||(a=1),o||(o="赞"),parseInt(a)>1e5?a="100000+":"",parseInt(o)>1e5?o="100000+":"",
i&&(i.innerHTML=a),n&&(n.innerHTML=o);
}(),e("appmsg/like.js")),1==t.comment_enabled&&(window.can_fans_comment_only=t.only_fans_can_comment,
e("appmsg/comment.js")),-1==w.indexOf("WindowsWechat")&&-1!=w.indexOf("MicroMessenger"))if(I.isIOS){
if(1==t.reward.can_reward&&1==t.reward.user_can_reward)if(1==t.reward.is_ios_reward_open){
document.getElementById("js_reward_qrcode")&&(document.getElementById("js_reward_qrcode").style.display="block");
var i=document.getElementById("js_reward_qrcode_img"),a="/wap/rewardqrcode?sn="+sn+"&t="+t.reward.reward_qrcode_ticket+"&pass_ticket="+pass_ticket;
i&&i.setAttribute("src",a);
}else document.getElementById("js_reward_close")&&(document.getElementById("js_reward_close").style.display="block");
}else _=e("appmsg/reward_entry.js"),_.handle(t.reward,s());
1==t.reward_entrance_enable_for_preview&&(I.isIOS?1==t.is_ios_reward_open?(document.getElementById("js_preview_reward_qrcode")&&(document.getElementById("js_preview_reward_qrcode").style.display="block"),
t.reward_wording&&document.getElementById("js_preview_reward_ios_wording")&&(document.getElementById("js_preview_reward_ios_wording").innerText=t.reward_wording,
document.getElementById("js_preview_reward_ios_wording").style.display="block")):document.getElementById("js_preview_reward_close")&&(document.getElementById("js_preview_reward_close").style.display="block"):(document.getElementById("js_preview_reward")&&(document.getElementById("js_preview_reward").style.display="block"),
t.reward_wording&&document.getElementById("js_preview_reward_wording")&&(document.getElementById("js_preview_reward_wording").innerText=t.reward_wording,
document.getElementById("js_preview_reward_wording").style.display="block"),u.on(document.getElementById("js_preview_reward_link"),"tap",function(e){
e.preventDefault(),n("预览状态下无法操作。");
}))),t.comment_entrance_enable_for_preview&&(document.getElementById("js_preview_cmt")&&(document.getElementById("js_preview_cmt").style.display="block"),
u.on(document.getElementById("js_preview_cmt_write"),"tap",function(e){
e.preventDefault(),n("预览状态下无法操作。");
}));
}
function d(){
var t="";
B&&B.length>0&&(t="&is_need_ticket=1");
var r=x.checkNeedAds(),n=r.is_need_ad,d=(r._adInfo,r.both_ad),m=-1!=location.href.indexOf("&mock_ad=1");
m&&(r.is_need_ad=n=1),b("[Appmsg] start get asycn data, is_need_ad:"+n),f({
url:"/mp/getappmsgext?__biz="+biz+"&appmsg_type="+appmsg_type+"&mid="+mid+"&sn="+sn+"&idx="+idx+"&scene="+source+"&title="+encodeURIComponent(msg_title.htmlDecode())+"&ct="+ct+"&abtest_cookie="+abtest_cookie+"&devicetype="+devicetype.htmlDecode()+"&version="+version.htmlDecode()+"&f=json&r="+Math.random()+t+"&is_need_ad="+n+"&comment_id="+comment_id+"&is_need_reward="+is_need_reward+"&both_ad="+d+"&reward_uin_count="+(is_need_reward?3*s():0)+(window.send_time?"&send_time="+send_time:"")+"&msg_daily_idx="+msg_daily_idx,
data:{
is_only_read:is_only_read,
req_id:window.req_id||"",
pass_ticket:pass_ticket,
is_temp_url:window.is_temp_url||0
},
type:"POST",
dataType:"json",
rtId:"27613",
rtKey:"50",
rtDesc:k,
async:!0,
success:function(t){
if(b("[Appmsg] success get async data"),t){
try{
if(m){
t.advertisement_num=1;
var n=e("a/testdata.js");
t.advertisement_info=n.data;
}
if(t&&t.base_resp&&t.base_resp.wxtoken&&(window.wxtoken=t.base_resp.wxtoken),window.fromWeixinCached&&e("appmsg/iframe.js"),
a(t.appmsgticket?t.appmsgticket.ticket:""),i(t),t.ret)return;
x.afterGetAdData(r,t),window.wx_user_can_reward=t.user_can_reward,o({
appmsgstat:t.appmsgstat,
comment_enabled:t.comment_enabled,
only_fans_can_comment:t.only_fans_can_comment,
reward:{
reward_total:t.reward_total_count,
reward_head_imgs:t.reward_head_imgs||[],
can_reward:t.can_reward,
user_can_reward:t.user_can_reward,
reward_qrcode_ticket:t.reward_qrcode_ticket,
is_ios_reward_open:t.is_ios_reward_open,
timestamp:t.timestamp
},
reward_entrance_enable_for_preview:t.reward_entrance_enable_for_preview,
reward_wording:t.reward_wording,
is_ios_reward_open:t.is_ios_reward_open,
comment_entrance_enable_for_preview:t.comment_entrance_enable_for_preview
});
}catch(d){
b("[Appmsg] error parse async data, biz="+biz+", mid="+mid);
var s=new Image;
return s.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(d.toString())+"&r="+Math.random()).substr(0,1024),
void(console&&console.error(d));
}
b("[Appmsg] success get async data, async data is: "+JSON.stringify(t));
}
},
error:function(){
b("[Appmsg] error get async data, biz="+biz+", mid="+mid);
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
}
});
}
function s(){
return u.on(window,"resize",function(){
m(),_&&_.render(s());
}),m();
}
function m(){
var e=window.innerWidth||document.documentElement.clientWidth;
try{
var t=document.getElementById("page-content").getBoundingClientRect();
t.width&&(e=t.width);
}catch(r){}
var n=30,i=34,a=Math.floor(.9*(e-n)/i);
return document.getElementById("js_reward_inner")&&(document.getElementById("js_reward_inner").style.width=a*i+"px"),
s=function(){
return a;
},a;
}
e("biz_common/utils/string/html.js");
var _,c,p=e("appmsg/img_copyright_tpl.html.js"),l=!1,w=navigator.userAgent,g=-1!=w.indexOf("MicroMessenger"),u=(-1!=navigator.userAgent.indexOf("WindowsWechat"),
e("biz_common/dom/event.js")),y=200,f=e("biz_wap/utils/ajax.js"),h=e("biz_common/dom/class.js"),v=e("biz_wap/jsapi/core.js"),j=e("biz_common/tmpl.js"),b=(e("biz_wap/utils/storage.js"),
e("appmsg/log.js")),k=e("rt/appmsg/getappmsgext.rt.js"),x=e("a/a.js"),I=e("biz_wap/utils/mmversion.js"),E=document.getElementsByTagName("iframe"),z=document.getElementById("js_content"),B=[],q=z.offsetWidth,O=3*q/4;
window.logs.video_cnt=0;
for(var A=0,M=E.length;M>A;++A){
c=E[A];
var T=c.getAttribute("data-src")||"",W=c.getAttribute("src")||T;
if(W){
var D=e("pages/version4video.js");
if(0==W.indexOf("http://v.qq.com/iframe/player.html")||0==W.indexOf("https://v.qq.com/iframe/player.html")||0==W.indexOf("http://v.qq.com/iframe/preview.html")||0==W.indexOf("https://v.qq.com/iframe/preview.html")||0==W.indexOf("http://z.weishi.com/weixin/player.html")){
D.isShowMpVideo()||(-1==W.indexOf("http://z.weishi.com/weixin/player.html")&&-1==T.indexOf("http://z.weixin.com/weixin/player.html")&&(T=T.replace(/^https:/,location.protocol),
T=T.replace(/^http:/,location.protocol),T=T.replace(/preview.html/,"player.html"),
W=W.replace(/^https:/,location.protocol),W=W.replace(/^http:/,location.protocol),
W=W.replace(/preview.html/,"player.html")),W=W.replace(/width=\d+/g,"width="+q),
W=W.replace(/height=\d+/g,"height="+O),g&&(0==W.indexOf("http://v.qq.com/iframe/player.html")||0==W.indexOf("https://v.qq.com/iframe/player.html"))||g&&(0==W.indexOf("http://v.qq.com/iframe/preview.html")||0==W.indexOf("https://v.qq.com/iframe/preview.html"))?B.push({
iframe:c,
src:W
}):c.setAttribute("src",W),c.width=q,c.height=O,c.style.setProperty&&(c.style.setProperty("width",q+"px","important"),
c.style.setProperty("height",O+"px","important")),window.__addIdKeyReport&&window.__addIdKeyReport("28307",10)),
window.logs.video_cnt++;
continue;
}
}
}
var C=document.getElementById("js_toobar3"),N=window.innerHeight||document.documentElement.clientHeight,S=function(){
var e=window.pageYOffset||document.documentElement.scrollTop,t=C.offsetTop;
e+N+y>=t&&(d(),u.off(window,"scroll",S));
};
l?(u.on(window,"scroll",S),S()):d();
});define("biz_wap/ui/lazyload_img.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/dom/attr.js","biz_common/ui/imgonepx.js"],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=e+40,n=this.offset||20,s=0;
if("wifi"==window.networkType){
var m={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(m=this.lazyloadHeightWhenWifi()),n=Math.max(m.bottom*e,n),
s=Math.max(m.top*e,s);
}
for(var c=+new Date,d=[],u=this.sw,g=this,w=-1,p=0,A=t.length;A>p;p++)!function(t,e){
var m=a(t.el),c=t.src;
if(c){
(c.match(/\:\/\/[^\/]+\/mmbiz\//)&&c.indexOf("wx_fmt=gif")>-1||c.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&w++;
var g=s,p=n;
(c.match(/\:\/\/[^\/]+\/mmbiz\//)&&c.indexOf("wx_fmt=gif")>-1||c.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&f&&(g=0,
p=20),!t.show&&(i>=m&&i<=m+t.height+g||m>i&&i+o+p>m)&&(e.inImgRead&&(i>=m&&i<=m+t.height||m>i&&i+o>m)&&e.inImgRead(c,networkType),
e.changeSrc&&(c=e.changeSrc(t.el,c,w)),t.el.onerror=function(){
var t=this;
!!e.onerror&&e.onerror(c,t);
},t.el.onload=function(){
var t=this;
"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="!=t.src&&(l(t,"height","auto","important"),
t.getAttribute("_width")?l(t,"width",t.getAttribute("_width"),"important"):l(t,"width","auto","important"),
!!e.onload&&e.onload(c,t));
},h(t.el,"src",c),d.push(c),t.show=!0,l(t.el,"visibility","visible","important")),
r.isWp&&1*t.el.width>u&&(t.el.width=u);
}
}(t[p],g);
d.length>0&&this.detect&&this.detect({
time:c,
loadList:d,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,r=0,s=this.imgOccupied||!1;
o.currentStyle?r=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(r=getComputedStyle(o).width),
this.sw=1*r.replace("px","");
for(var m=0,d=t.length;d>m;m++){
var f=t.item(m),u=h(f,n),g=h(f,"src");
if(u&&!(g&&g.indexOf("data:image/gif;base64")<0)){
var w=100;
if(f.dataset&&f.dataset.ratio){
var p=1*f.dataset.ratio,A=1*f.dataset.w||a;
"number"==typeof p&&p>0?(A=a>=A?A:a,w=A*p,s||(f.style.width&&f.setAttribute("_width",f.style.width),
l(f,"width",A+"px","important"),l(f,"visibility","visible","important"),f.setAttribute("src",c))):l(f,"visibility","hidden","important");
}else l(f,"visibility","hidden","important");
s||l(f,"height",w+"px","important"),e.push({
el:f,
src:u,
height:w,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
var e=this,o=e.timer;
clearTimeout(o),e.timer=setTimeout(function(){
i.call(e,t);
},300);
}
function n(t){
s.on(window,"scroll",function(i){
o.call(t,i);
}),setTimeout(function(){
e.call(t,{});
},0),s.on(document,"touchmove",function(i){
o.call(t,i);
}),o.call(t,{});
}
function a(t){
for(var i=t.offsetTop;t=t.offsetParent;)i+=t.offsetTop;
return i>=111&&(i-=111),i;
}
var r=t("biz_wap/utils/mmversion.js"),s=t("biz_common/dom/event.js"),m=t("biz_common/dom/attr.js"),h=m.attr,l=m.setProperty,c=t("biz_common/ui/imgonepx.js"),d=new Date,f=(d.getHours(),
!0);
return n;
});define("biz_common/log/jserr.js",[],function(){
function e(e,n){
return e?(r.replaceStr&&(e=e.replace(r.replaceStr,"")),n&&(e=e.substr(0,n)),encodeURIComponent(e.replace("\n",","))):"";
}
var r={};
return window.onerror=function(n,o,t,c,i){
return"Script error."==n||o?"undefined"==typeof r.key||"undefined"==typeof r.reporturl?!0:void setTimeout(function(){
c=c||window.event&&window.event.errorCharacter||0;
var l=[];
if(l.push("msg:"+e(n,100)),o&&(o=o.replace(/[^\,]*\/js\//g,"")),l.push("url:"+e(o,200)),
l.push("line:"+t),l.push("col:"+c),i&&i.stack)l.push("info:"+e(i.stack.toString(),200));else if(arguments.callee){
for(var s=[],u=arguments.callee.caller,a=3;u&&--a>0&&(s.push(u.toString()),u!==u.caller);)u=u.caller;
s=s.join(","),l.push("info:"+e(s,200));
}
var p=new Image;
if(p.src=(r.reporturl+"&key="+r.key+"&content="+l.join("||")).substr(0,1024),window.console&&window.console.log){
var f=l.join("\n");
try{
f=decodeURIComponent(f);
}catch(d){}
console.log(f);
}
},0):!0;
},function(e){
r=e;
};
});define("appmsg/share.js",["biz_common/utils/string/html.js","appmsg/cdn_img_lib.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
function i(e,i){
var n="",o="";
try{
""!=tid&&(o="tid="+tid+"&aid=54");
var t=e.split("?")[1]||"";
if(t=t.split("#")[0],""==t);else{
var m=[t,"mpshare=1","scene="+i,"srcid="+srcid];
""!=o&&m.push(o),t=m.join("&"),n=e.split("?")[0]+"?"+t+"#"+(e.split("#")[1]||"");
}
}catch(s){
n="";
}
return n||(n=location.href+"#wechat_redirect",(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_47_1&lc=1&log0=[share_link]["+encodeURIComponent(location.href)+"]["+encodeURIComponent(e)+"]["+encodeURIComponent(msg_link)+"]"),
n;
}
function n(e,i,n){
var o=e.split("?").pop();
if(o=o.split("#").shift(),""!=o){
var t=[o,"action=share","action_type="+n,"scene="+window.source,"req_id="+(window.req_id||""),"vid="+("undefined"!=typeof window.reportVid?window.reportVid.join(";"):""),"musicid="+("undefined"!=typeof window.reportMid?window.reportMid.join(";"):""),"voiceid="+("undefined"!=typeof window.reportVoiceid?window.reportVoiceid.join(";"):""),"weappid="+("undefined"!=typeof window.reportWeappid?window.reportWeappid.join(";"):"")].join("&");
s({
url:"/mp/appmsgreport",
type:"POST",
data:t
});
}
}
function o(e,i){
return e.isCDN()&&(e=t.addParam(e,"wxfrom",i,!0)),e;
}
e("biz_common/utils/string/html.js"),e("appmsg/cdn_img_lib.js");
var t=(e("biz_common/dom/event.js"),e("biz_common/utils/url/parse.js")),m=e("biz_wap/utils/mmversion.js"),s=e("biz_wap/utils/ajax.js"),r=e("biz_wap/jsapi/core.js");
r.call("hideToolbar"),r.call("showOptionMenu");
var a=msg_title.htmlDecode(),c=(msg_source_url.htmlDecode(),""),d=msg_cdn_url||ori_head_img_url||round_head_img,l=d,p=msg_link.htmlDecode(),a=msg_title.htmlDecode(),u=msg_desc.htmlDecode();
u=u||p,u=u.replace(/<br\/>/g,"\n"),idx>1&&document.getElementById("js_content")&&1446652800>ct&&(u=document.getElementById("js_content").innerHTML.replace(/<\/?[^>]*\/?>/g,"").htmlDecode().replace(/^(\s*)|(\s*)$/g,"").substr(0,54)),
d.isCDN()&&(d=d.replace(/\/0$/,"/300"),d=d.replace(/\/0\?/,"/300?")),l.isCDN()&&(l=l.replace(/\/0$/,"/640"),
l=l.replace(/\/0\?/,"/640?")),"1"==is_limit_user&&r.call("hideOptionMenu"),window.is_temp_url&&r.invoke("hideMenuItems",{
menuList:["menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:qzone","menuitem:share:weibo","menuItem:share:WeiboApp","menuItem:share:QZone","menuitem:facebook","menuItem:copyUrl","menuItem:share:email","menuitem:copy_url"]
},function(){}),r.on("menu:share:appmessage",function(e){
var t=1,m=o(d,"1");
e&&"favorite"==e.scene&&(t=24,m=o(d,"4")),r.invoke("sendAppMessage",{
appid:c,
img_url:m,
img_width:"640",
img_height:"640",
link:i(p,t),
desc:u,
title:a
},function(){
n(p,fakeid,t);
});
}),r.on("menu:share:timeline",function(){
var e=d;
m.isIOS||(e=o(d,"2")),n(p,fakeid,2),r.invoke("shareTimeline",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(p,2),
desc:u,
title:a
},function(){});
});
r.on("menu:share:weiboApp",function(){
r.invoke("shareWeiboApp",{
img_url:d,
link:i(p,3),
title:a
},function(){
n(p,fakeid,3);
});
}),r.on("menu:share:facebook",function(){
n(p,fakeid,7),r.invoke("shareFB",{
img_url:l,
img_width:"640",
img_height:"640",
link:i(p,43),
desc:u,
title:a
},function(){});
}),r.on("menu:share:QZone",function(){
var e=o(d,"6");
n(p,fakeid,5),r.invoke("shareQZone",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(p,22),
desc:u,
title:a
},function(){});
}),r.on("menu:share:qq",function(){
var e=o(d,"7");
n(p,fakeid,5),r.invoke("shareQQ",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(p,23),
desc:u,
title:a
},function(){});
}),r.on("menu:share:email",function(){
n(p,fakeid,5),r.invoke("sendEmail",{
content:i(p,5),
title:a
},function(){});
});
});define("appmsg/cdn_img_lib.js",[],function(){
"use strict";
function t(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=gif")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_gif\//);
}
function i(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=png")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_png\//);
}
function n(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=jpg")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_jpg\//);
}
function r(t){
return t.indexOf("tp=webp")>-1;
}
function p(t){
return t.indexOf("tp=wxpic")>-1;
}
String.prototype.http2https=function(){
return this.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qpic.cn/");
},String.prototype.https2http=function(){
var t=this.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/");
return t=t.replace(/https:\/\/mmbiz\.qpic\.cn\//g,"http://mmbiz.qpic.cn/");
},String.prototype.isCDN=function(){
return 0==this.indexOf("http://mmbiz.qpic.cn/")||0==this.indexOf("https://mmbiz.qpic.cn/")||0==this.indexOf("https://mmbiz.qlogo.cn/");
},String.prototype.nogif=function(){
var i=this.toString();
return t(i)?i.replace("/0?","/s640?").replace(/\/0\//g,"/s640/").replace("wx_fmt=gif",""):i;
},String.prototype.isGif=function(){
var i=this.toString();
return t(i);
},String.prototype.isWxpic=function(){
var t=this.toString();
return p(t);
},String.prototype.isWebp=function(){
var t=this.toString();
return r(t);
},String.prototype.getImgType=function(){
var e=this.toString();
return t(e)?"gif":r(e)?"webp":p(e)?"wxpic":i(e)?"png":n(e)?"jpg":"unknow";
};
});define("biz_common/utils/url/parse.js",[],function(){
"use strict";
function r(r){
var e=r.length,n=r.indexOf("?"),t=r.indexOf("#");
t=-1==t?e:t,n=-1==n?t:n;
var a=r.substr(0,n),i=r.substr(n+1,t-n-1),s=r.substr(t+1);
return{
host:a,
query_str:i,
hash:s
};
}
function e(e,n){
var t=r(e),a=t.query_str,i=[];
for(var s in n)n.hasOwnProperty(s)&&i.push(s+"="+encodeURIComponent(n[s]));
return i.length>0&&(a+=(""!=a?"&":"")+i.join("&")),t.host+(""!=a?"?"+a:"")+(""!=t.hash?"#"+t.hash:"");
}
function n(r,e,n,t){
r=r||location.href;
var a=r.indexOf("&"),i=r.length,s=r.replace(/^[\w\d]+:[\/\\]+/g,"").split("").reverse();
Array.prototype.indexOf||(Array.prototype.indexOf=function(r,e){
var n;
if(null==this)throw new TypeError('"this" is null or not defined');
var t=Object(this),a=t.length>>>0;
if(0===a)return-1;
var i=+e||0;
if(1/0===Math.abs(i)&&(i=0),i>=a)return-1;
for(n=Math.max(i>=0?i:a-Math.abs(i),0);a>n;){
if(n in t&&t[n]===r)return n;
n++;
}
return-1;
});
var o=i-1-s.indexOf("/");
-1!=a&&-1==r.indexOf("?")&&a>o&&(r=r.replace("&","?"));
var u=new RegExp("([\\?&]"+e+"=)[^&#]*");
if(!r.match(u)){
var h=r.indexOf("?");
return-1==h?r+"?"+e+"="+n:h==r.length-1?r+e+"="+n:r+"&"+e+"="+n;
}
return t===!0?r.replace(u,"$1"+n):r;
}
return{
parseUrl:r,
join:e,
addParam:n
};
});;define('page/appmsg/not_in_mm.css', [], function(require, exports, module) {
	return ".rich_media_meta_list{position:relative;z-index:1}.rich_media_content{position:relative}.profile_container{width:535px;position:absolute;top:100%;left:65px;font-size:14px;*margin-top:10px}.profile_inner{position:relative;padding:30px 22px 36px 144px;background-color:#fff;border:1px solid #d9dadc;*zoom:1}.profile_arrow_wrp{position:absolute;left:22px;top:-8px}.profile_arrow{display:inline-block;width:0;height:0;border-width:8px;border-style:dashed;border-color:transparent;border-top-width:0;border-bottom-color:#d9dadc;border-bottom-style:solid;position:absolute;top:0}.profile_arrow.arrow_in{margin-top:1px;border-bottom-color:#fff}.profile_avatar{position:absolute;width:100px;left:24px;top:24px;height:100px!important}.profile_nickname{font-size:16px;font-weight:400}.profile_meta{margin-top:5px;overflow:hidden;*zoom:1}.profile_meta_label{float:left;width:4em;margin-right:1em}.profile_meta_value{display:block;overflow:hidden;*zoom:1;color:#adadad}.icon_verify{width:16px;height:16px;vertical-align:middle;display:inline-block;line-height:9em;overflow:hidden}.icon_verify.success{background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/wxverify\/icon_verify_success238f07.png) no-repeat 0 0}.not_in_mm span.rich_media_meta_nickname{display:inline-block}.not_in_mm a.rich_media_meta_nickname{display:none}.not_in_mm .rich_media_inner{position:relative}.not_in_mm .qr_code_pc_outer{display:none!important;position:fixed;left:0;right:0;top:20px;color:#717375;text-align:center}.not_in_mm .qr_code_pc_inner{position:relative;width:740px;margin-left:auto;margin-right:auto}.not_in_mm .qr_code_pc{position:absolute;right:-140px;top:0;width:140px;padding:16px;border:1px solid #d9dadc;background-color:#fff;word-wrap:break-word;word-break:break-all}.not_in_mm .qr_code_pc p{font-size:14px;line-height:20px}.not_in_mm .qr_code_pc_img{width:102px;height:102px}@media screen and (min-width:1025px){.not_in_mm .qr_code_pc_outer{display:block!important}}";
});