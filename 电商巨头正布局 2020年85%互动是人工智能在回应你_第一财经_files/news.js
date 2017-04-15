/**
 * Created by jhh on 2016/1/25.
 */
;
function textPageLink(pageNo){
    var url = location.href;
    if($(".m-text").find(".m-textPage").length > 0){
        $(".m-textPage:eq("+pageNo+")").show().siblings(".m-textPage").hide();
        if(url.indexOf("#page")>0){
            if(pageNo!=0) location.href= url.substr(0,url.indexOf(".html")+5)+'#page'+pageNo;
            else location.href= url.substr(0,url.indexOf(".html")+5);
        }
        else {
            if(pageNo!=0) location.href= url+'#page'+pageNo;
            else location.href= url;
        }
        $(".m-page a:eq("+pageNo+")").addClass("z-crt").siblings("a").removeClass("z-crt");
        $("html,body").animate({scrollTop:0});
    }
}
function initTextPage(){
    var url = location.href;
    if(url.indexOf("#page")>0){
        idx = parseInt(url.substr(url.indexOf("#page")+5));
    }
    else {
       idx = 0;
    }
    if($(".m-text").find(".m-textPage").length > 0){
        $(".m-page a:eq("+idx+")").addClass("z-crt").siblings("a").removeClass("z-crt");
        $(".m-textPage:eq("+idx+")").show().siblings(".m-textPage").hide();
        $("html,body").animate({scrollTop:0});
    }
}
$(function(){
    initTextPage();
    //新闻图说的处理
    /*if($(".m-text").find("img").length >0) {
        $(".m-text img").each(function(){
            var alts = $(this).attr("alt");
            if(alts.length){
                $(this).parent().append("<p class='imgNotes'>"+alts+"</p>");
            }
        });
    }*/
});

