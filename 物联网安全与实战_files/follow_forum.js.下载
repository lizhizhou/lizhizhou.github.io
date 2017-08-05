function showFollowForum()
{
    var forum_id = new Array();

    $("[nodeType=followForum]").each(function(i, item){
        var item = $(item).attr("nodeForum");
        forum_id.push(item)
    });
    if(login_username){
        var url = '/service/forum/check_is_followed?jsonpcallback=?';
        $.getJSON(url,
            {'forum_id':forum_id.join(','),'username':login_username},function(data){
                if(data.succ){
                    for(var i = 0 ;i < data.info.length; i++){
                        if(data.info[i].followed){
                            $("[nodeForum="+data.info[i].forum_id+"]").addClass('focus_cancel');
                        }
                    }
                }else{
                    alert(data.msg);
                }
            },'json');
    }
}
$(function(){
    //关注
    $('body').delegate('[nodeType=followForum]', 'click', function(){
        if(!login_username)
        {
            window.location.href="https://passport.csdn.net/";
        }
        var button = $(this);
        var forum_id = $(this).attr('nodeForum');

        var type = $(this).hasClass('focus_cancel') ? "do_unfollow" : "do_follow";
        var url = '/service/forum/'+type+'?&jsonpcallback=?';
        $.getJSON(url,
            {'forum_id':forum_id,'username':login_username},function(data){
                if(data.succ){
                    var li_count = $('.my_subnav li').length;
                    var subnav = $('.my_subnav');
                    if($(button).hasClass('focus_cancel'))
                    {
                        $('[nodeforum="'+ forum_id +'"]').removeClass('focus_cancel');
                        if(li_count){
                            $('li[data-forum='+forum_id+']').remove();
                            var follows = $('[forum-follows="'+ forum_id +'"]').eq(0).text();
                            $('[forum-follows="'+ forum_id +'"]').text(parseInt(follows)-1);
                        }

                        li_count = $('.my_subnav li').length;
                        if(li_count == 0 && !$(subnav).hasClass("hide")){
                            $(subnav).addClass('hide');
                        }
                    }
                    else{
                        $('[nodeforum="'+ forum_id +'"]').addClass('focus_cancel');
                        if($('.my_subnav').length){
                            $('.my_subnav ul').prepend('<li data-forum="'+forum_id+'"><a href="/forum/'+forum_id+'" target="_blank">'+data.data.name+'</a></li>');
                            var follows = $('[forum-follows="'+ forum_id +'"]').eq(0).text();
                            $('[forum-follows="'+ forum_id +'"]').text(parseInt(follows)+1);


                            if($(subnav).hasClass("hide")){
                                $(subnav).removeClass("hide");
                            }

                        }
                    }
                }else{
                    console.log(data);
                }
            },'json');
    });
});