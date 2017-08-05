function showFollowUser()
{
    var username = new Array();
    
	$("[nodeType=followUser]").each(function(i, item){	
        var item = $(item).attr("nodeUser");
        username.push(item)	
	});
	if(login_username){
		var url = 'http://my.csdn.net/index.php/follow/check_is_followed_m/'+login_username+'/'+username.join(',')+'?jsonpcallback=?';
		$.getJSON(url,
			function(result){
				$.each(result, function(i){
					if(result[i])
					{
						$("[nodeUser="+i+"]").addClass('focus_cancel');
					}
			    });
		},'json');
	}
}
$(function(){
	//关注
	$('body').delegate('[nodeType=followUser]', 'click', function(){
		if(!login_username)
		{
			window.location.href="https://passport.csdn.net/";
		}
		var button = $(this);
		var item = $(this).attr('nodeUser');		
		var type = $(this).hasClass('focus_cancel') ? "do_unfollow" : "do_follow";
		var url = 'http://my.csdn.net/index.php/follow/'+type+'?&jsonpcallback=?';
		$.getJSON(url,
			{'username':item,'fans':login_username},function(data){
				if(data.succ){
					if($(button).hasClass('focus_cancel'))
					{
						$(button).removeClass('focus_cancel');
					}
					else{
						$(button).addClass('focus_cancel');
					}
				}else{
					alert(data.msg);
				}
		},'json');
	});
	
});