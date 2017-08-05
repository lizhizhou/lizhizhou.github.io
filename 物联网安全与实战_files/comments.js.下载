/*
 * 【评论页】专用于评论页类。
 *  by: zhaoxin@csdn.net
 *  2012-10-05 AM
 */
(function (window) {

    var csdn = window.csdn || {}, comment_type = "last",

    //页面模板
        tpl = '\
    <div class="reply topreply"></div>\
    <div id="csdnTab" class="comments_reply">\
    <h2 class="comments_tit">\
        已有<span>0</span>条评论\
    </h2>\
        <div class="tit tab_1">\
            <ul>\
                <li class="hover">最新</li>\
                <li>最热</li>\
            </ul>\
        </div>\
        <div class="con last"></div>\
        <div class="con hot" style="display:none"></div>\
        <div id="get_more_comment" class="text-center get_more" style="display: none"><i class="fa fa-spinner fa-spin"></i></div>\
    </div>';
    var LOCALHOST = "comments.csdn.net";
    //数据接口host
    var HOST = "http://test.ptcms.csdn.net";
    if (location.host.indexOf(LOCALHOST) < 0) {
        HOST = "http://ptcms.csdn.net";
    }
    //字数限制
    var TEXTLIMIT = 500,

    //投票者简短显示限制个数
        limitNum = 5,

    //分页粒度（每页多少条评论）
        PAGESIZE = 2,

    //分页显示个数（显示多少页）
        SHOWPAGES = 2,

    //当前页
        PATH = "",

    //当前TITLE
        TITLE = "",

    //文章数据接口URL
        URL = "",
    //空间地址URL
        //SPACEURL = "http://my.csdn.net/",
        SPACEURL = "http://"+ document.domain + "/user/publishlist/",

    //cssURL
        CSSURL = "",

    //是否登录
        ISLOGINED = false;

    //是否在csdn.net域名下
    ISCSDNDOMAIN = window.location.host.lastIndexOf("csdn.net")>0;
    //登录用户对象
    var currUser = {};
    currUser.username = "";

    csdn.comments = function (conf) {

        //配置项
        this.conf = conf;

        //当前总评论数
        this.total = "";

        //最新评论数据
        this.dataLastComm = {};

        //总回复数
        this.replyCount = 0;

        //当前所有评论数据
        this.currData = this.dataLastComm;

        //分页配置
        if (conf.pagination) {
            PAGESIZE = conf.pagination.pagesize || PAGESIZE;
            SHOWPAGES = conf.pagination.showpages || SHOWPAGES;
        }

        //当前页
        PATH = conf.path || PATH;

        //文章页URL

        URL = conf.articleURL || URL;

        CSSURL = conf.cssUrl || CSSURL;

        HOST = conf.datapath || HOST;

        TITLE = conf.title || TITLE;

        //初始化
        //$(document).scrollTop(0);
        this.init.apply(this, []);
    };

    if(typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        }
    }

    function getScript(url, callback){
        $.ajax({
            url: url + (~url.indexOf('?') ? '&' : '?') + (new Date()/300000|0) + '=',
            cache: true,
            dataType: 'script',
            success: callback
        });
    }

    function parallelLoad(ctx, tasks, success){
        var bit = parseInt(Array(tasks.length + 1).join('1'), 2),
            cb = function(n){
                return function(){
                    bit &= ~(1 << n);
                    if(bit === 0) success.call(ctx);
                };
            };
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].call(ctx, cb(i));
        };
    }

    csdn.comments.prototype = {

        /*
         *   初始化入口
         */
        init:function () {

            var has_more = true;
            //var size = 2;
            var pagea = 1;
            var pageb = 1;

            var that = this;
            this.wrap = "#" + this.conf.id;
            this.currUser = {name:"user1"};

            var totalheight = 0;
            function loadData(){
                $('#get_more_comment').show();
                if (has_more){
                    if (comment_type == 'last'){
                        pagea += 1;
                        that.getLastComm({curr:pagea}, function (data) {
                            if (data.status == 104){
                                has_more = false;
                                return
                            };
                            that.initReply();
                            that.initTitle();
                            //that.initPagination({curr:1});

                        });
                    } else if(comment_type == 'hot'){
                        pageb += 1;
                        that.getHotComm({curr:pageb}, function (data) {
                            if (data.status == 104){
                                has_more = false;
                                return
                            };
                            that.initReply();
                            that.initTitle();
                            //that.initPagination({curr:1});
                        });
                    }

                } else{
                    $('#get_more_comment').html('加载到底了');
                }
            }
            
            $(document).bind('scroll', function() {
                var st = $(document).scrollTop();
                totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                if($('body').height() < $(window).height()){
                    return
                }
                if ($(document).height() <= totalheight) {
                    var lasthtml = $('.con.last').text().trim();
                    if(lasthtml==""){
                        return
                    }
                    $(document).scrollTop(st -10);
                    loadData();
                }
            });


            $('.right_cont_body').bind('scroll', function(){
                var st = $('.right_cont_body').scrollTop(),
                    winh = $('.right_cont_body').height(),
                    bodyh = $('.right_cont_body')[0].scrollHeight;
                if (st < 200){
                    $('.scrolltop_bar').addClass('affix-top').removeClass('affix ccss');
                }else{
                    $('.scrolltop_bar').addClass('affix ccss').removeClass('affix-top');
                }
                var _cmsH = $('.right_cont_body .header ').height() + $('.right_cont_body .news_description ').height() + $('.right_cont_body #comments ').height() + 101;
                if(_cmsH < $('.right_cont_body').height()){
                    //console.log($('.right_cont_body').height());
                    //console.log('777777');
                    //console.log(_cmsH);
                    return
                }
                if (winh + st >= bodyh){
                    $('.right_cont_body').scrollTop(st -10);
                    loadData();
                }
            });


            parallelLoad(this, [
                this.initToolkit,
                this.initComponent,
                function(callback){
                    this.loadCss(CSSURL, "head", callback);
                },
                function(callback){
                    this.initTpl();
                    callback();
                },
                function(callback){
                    // 预加载cnick.js，避免可能存在重复加载的问题
                    getScript('http://csdnimg.cn/rabbit/cnick/cnick.js', callback);
                },
                this.checkLogin
            ], function(){
                //that.initTxtCounter();
                that.initTab();
                that.addEvent();
                that.getLastComm({curr:1}, function (data) {
                    that.initReply();
                    that.initTitle();
                    that.initPagination({curr:1});
                }, function () {
                    that.detectEmpty($('.last', that.wrap));
                });
                that.getHotComm({curr:1}, function (data) {
                    that.initReply();
                }, function () {
                    that.detectEmpty($('.hot', that.wrap));
                });

            });
        },
        /*
         *   初始化主模板
         <h6>还可以再输入<span>' + TEXTLIMIT + '</span>个字</h6>\
         <dl>\
         <dt class="user_img"><img src="' + PATH + '/images/user_01.gif" alt="' + currUser.username + '"></dt>\
         <dd><textarea class="reply_box" placeholder="有什么感想，你也来说说吧！" name="" rows="4"></textarea>\
         <div class="reply_submit note_grey clearfix">\
         <div class="fr"><span class="btn btn-primary start_cmmde" data-target="comment">fdsfsafad</span></div>\
         <span class="loginwrap"></span>\
         </div>\
         </dd>\
         </dl>\
         */
        initTpl:function () {
            $(this.wrap).html(tpl);
            var topTpl = '\
            <div class="reply topreply">\
            <input id="user" value="发表评论" type="submit" class="reply_btn btn btn-primary">\
            </div>';
            $('.topreply').replaceWith(topTpl);
            var lEl = '<div id="l_a_pop_win" style="display:none ;position: absolute; z-index: 10000; border: 1px solid rgb(220, 220, 220); top: 222.5px; left: 630px; opacity: 1; background: none 0px 0px repeat scroll rgb(255, 255, 255);"></div>' +
                      '<div id="l_a_popup_mask" style="display: none;position: absolute;width: 100%;height: 100%;background: #000;z-index: 9999;left: 0px;top: 0px;opacity: 0.3;filter: alpha(opacity=30);"></div>';
            $("body").append(lEl);
        },

        /*
         *   初始化评论数
         */
        initTitle:function (count) {
            count = count || this.dataLastComm.count * 1 + this.dataLastComm.reply_count * 1||"0";
            var el = $(".comments_tit span").html(count*1);
            this.commentCount = count * 1;
            var oncountchange = this.conf.oncountchange || function () {
            };
            oncountchange(this.commentCount);
        },

        /*
         *   初始化评论
         */
        initReply:function (data) {
            data = data || this.currData;
            var type = data.type;
            if (type == "last" || type == "hot") {
                wrap = $(this.wrap + " ." + type)[0];
                //wrap.innerHTML = "";
                this.renderReply(data.data, wrap);

                // 转化评论中用户名称为相应的昵称
                this.getCNick(function(nick){
                    nick.showNickname();
                });
                $('#get_more_comment').hide();
            }
        },
        detectEmpty: function (container) {
          if(container.children().length === 0){
            container.html('<div class="empty-placeholder">\
                <div class="empty-tip">还没有评论，赶快来抢沙发吧。</div>\
            </div>')
          }
        },
        /*
         *   渲染单体评论
         * @param <Object> 数据
         * @param <Object> 渲染目标DOM节点
         */
        renderReply:function (data, wrap) {
            if(!data){
                return
            }
            var that = this;
            var childReply = "childReply";
            var len = data.length, i = 0, item, _conf = {};
            //wrap.innerHTML="";
            //渲染每一个评论者
            while (i < len) {
                item = data[i];
                _conf = {
                    id:item.id,
                    time:item.create_time,
                    userName:item.username,
                    content:item.body,
                    from:item.from,
                    num:item.like_count - item.dislike_count,
                    voteUser:item.like_people,
                    dislike_count: item.dislike_count,
                    dislike_people: item.dislike_people,
                    avatar:item.avatar,
                    userPage:item.user_page,
                    is_markdown:item.is_markdown,
                    parentId:item.parent_id
                };

                //追加回复到wrap
                $(that.buildReplyTpl(_conf)).appendTo(wrap);
                if (item.children && item.parent_id * 1 == 0) {
                    //that.replyCount += item.children.length * 1;
                    //var el = $(wrap).children().eq(i);
                    var el = $(wrap).children("[lang="+data[i].id+"]");
                    var _wrap = el.find(".childReply")[0];
                    var dd = el.find("dd");
                    if (!_wrap && wrap.className != "childReply") {
                        _wrap = $("<div class=\"childReply\"></div>").appendTo(dd)[0];
                    }
                    arguments.callee.call(this, item.children, _wrap);
                }
                i++;
            }
        },

        /*
         *   初始化工具箱（来自于tookit.js）
         */
        initToolkit:function (callback) {
            var that = this;
            var url = this.conf.toolkitUrl;
            getScript(url, function () {
                /*
                 var userName = csdn.toolkit.getUserName()
                 if(userName){
                 currUser.username = userName;
                 }
                 that.setLogin(userName);
                 */
                callback instanceof Function && callback();
            });
        },

        /*
         * 加载通用组件 （来自于component.js）
         *
         */
        initComponent:function (callback) {
            var that = this;
            var url = this.conf.componentsUrl;
            getScript(url, callback);
        },

        /*
         * 初始化tab
         *
         */
        initTab:function () {
            var that = this;
            var conf = this.conf.tab;
            conf.callback = function (i) {
                //当点击最新评论
                if (i == 0) {
                    comment_type = "last";
                    //that.getLastComm({curr:1}, function (data) {
                    //    that.initReply();
                    //    that.initTitle();
                    //    that.initPagination({curr:1});
                    //    close_cmmde();
                    //});
                    //return;
                }
                //当点击热门评论
                if (i == 1) {
                    comment_type = "hot";
                    //that.getHotComm({curr:1}, function (data) {
                    //    that.initReply();
                    //    close_cmmde();
                    //});
                }
            };
            if (csdn.comp) {
                this.tab = new csdn.comp.tab(conf);
            }
        },

        /*
         * 初始化字符数量限制
         *
         */
        //initTxtCounter:function (conf) {
        //    conf = {
        //        btn:$(this.wrap).find(".topreply .reply_btn"),
        //        textarea:$(this.wrap).find(".topreply .reply_box"),
        //        tip:$(this.wrap).find(".topreply h6"),
        //        max:TEXTLIMIT
        //    };
        //    if(csdn.comp && csdn.comp.txtCounter){
        //      this.txtCounter = new csdn.comp.txtCounter(conf);
        //    }
        //},

        /*
         * 初始化分页
         *
         */
        initPagination:function (data) {
            data = data || this.currData;
            var that = this, wrap,
                count = data.count || this.currData.count,
                curr = data.curr || 1;
            //if(count<PAGESIZE){ return}
//            if ($(this.wrap + " .page_nav").length > 0) {
//                wrap = $("#page_nav");
//            } else {
//                wrap = $("<div id=\"page_nav\" class=\"page_nav\"></div>").insertAfter($(this.wrap + " .con").filter(".last"));
//            }

            var conf = {
                wrap:wrap,
                pagesize:PAGESIZE, //分页粒度
                shownum:SHOWPAGES,
                curr:curr, //当前页码
                total:count * 1,
                hlClass:"on", //highlight class name
                callback:function (i) {
                    that.getLastComm({curr:i}, function (data) {
                        conf.curr = i;
                        that.initTitle();
                        $("#page_nav").remove();
                        that.initReply();
                        //conf.wrap = $("<div id=\"page_nav\" class=\"page_nav\"></div>").insertAfter($(that.wrap + " .con").filter(".last"));

                        //最外层容器距离顶部高度
                        var top = $(".csdn_comments").offset().top - 15;

                        //morden browser
                        document.body.scrollTop = top;

                        //ie
                        //document.documentElement.scrollTop = top;

                        //重新创建分页
                        //that.pagination = new csdn.comp.pagination(conf);
                    });
                }
            };
            if (csdn.comp) {
                //this.pagination = new csdn.comp.pagination(conf);
            }
        },

        /*
         *   初始化CSS
         */
        initCss:function () {

        },

        /*
         * 渲染回复模板
         * @param <sring> conf.id           用户id
         * @param <sring> conf.avatar       头像
         * @param <sring> conf.userName     用户名
         * @param <sring> conf.paraentId    层级ID
         * @param <sring> conf.time         发布时间
         * @param <sring> conf.from         评论/回复来源
         * @param <sring> conf.voteUser     投票者
         * @param <sring> conf.num          投票数
         * @param <sring> conf.content      内容
         */
        buildReplyTpl:function (conf) {
            //console.log(conf);
            conf = conf || {};
            var id = conf.id,
            //回复者用户头像
                avatar = conf.avatar || "images/user_01.gif",
            //回复者用户名
                userName = conf.userName,
            //层级
                parentId = conf.parentId,
            //发布时间
                time = conf.time,
            //来自
                from = conf.from == 1 ? " 来自 新浪微博" : (conf.from == 2 ? " 来自 移动客户端" : ""),

            //顶的投票数
                num = conf.num * 1,
            //顶的投票者
                voteUser = conf.voteUser,
            //更多顶的投票者
                voteUserMore = "",
            //踩的投票数
                dislike_count = conf.dislike_count * 1 || 0,
            //踩的投票者
                dislike_people = conf.dislike_people
            //用户个人页
                userPage = conf.userPage||"",
                //userPage = SPACEURL = postsite + "/user/publishlist/" + conf.userName ||"",
            //内容
                //content = this.HTMLEncode(conf.content),
                content = conf.content,
            content = this.replaceTpl(content),
            isPublisher = conf.userName == currUser.username,
            
            //是否markdown
            is_markdown = conf.is_markdown,

            isSpam = dislike_count - num >= 10
                // || Math.random() > .5 // TODO
                ,
            ishidden = num == 0 ? 'style="display:none;"' : '',
            ismorehidden = num <= limitNum ? 'style="display:none;"' : '',
            username = currUser.username,
            isVoted = (function(u){
                if((u+'').trim() === "") return;
                if(~(',' + voteUser + ',').indexOf(',' + u + ',')) return 'like';
                if(~(',' + dislike_people + ',').indexOf(',' + u + ',')) return 'dislike';
                return '';
            }(currUser.username)),
            replayId = userName + id;

            //展现投票人
            if (voteUser && typeof voteUser == "string") {
                var voteUsers = voteUser.split(',');
                var len = voteUsers.length;
                voteUser = '';
                var i = 0;
                while (i < len && i < 20) {
                	var _SPACEURL = SPACEURL + this.HTMLEncode(voteUsers[i]);
                    if (i < limitNum) {
                        
                        voteUser += '<a target="_blank" class="user_name" href="' + _SPACEURL + '">' + this.HTMLEncode(voteUsers[i]) + '</a>';
                    } else {
                        voteUserMore += '<a target="_blank" class="user_name" href="' + _SPACEURL + '">' + this.HTMLEncode(voteUsers[i]) + '</a>';
                    }
                    i++;
                }
            }
            var forum_id = 1;
            return ('\
        <div lang="' + id + '" class="reply parentId_' + parentId + '">\
            <span id="' + replayId + '_btn" class="reply_btn btn btn-primary">回复评论</span>\
            <dl>\
                <dt class="user_img"><a target="_blank" href="' + userPage + '"><img src="' + avatar + '"></a></dt>\
                <dd>\
                    <div class="note_grey"><a target="_blank" href="' + userPage + '" class="user_name" realName="'+ this.HTMLEncode(userName) +'">' + this.HTMLEncode(userName) + '</a>   <span class="time">' + time + '</span>   <span class="from">' + from + '</span></div>\
                    <div class="cont_wrap' + (isSpam ? ' isspam' : '') + '">' + (isSpam ? '<div class="spam-text">\
                        该内容评分较低，已经被隐藏，<a class="spam_text_btn" href="javascript:void 0">点击可查看</a>\
                    </div>' : '') + '\
                    <div class="'+(is_markdown==1?'markdown_views ':'')+'reply_content rcont_'+ id +'">' + content + '</div>\
                    <div class="btn_wrap"><div class="btn-group"> \
                        ' + (isPublisher ? '<span class="start_cmmde" data-target="comment_geek" commentid="' + id + '" >生成新文章</span> ' : '') + '\
                        <span class="reply_comments start_cmmde" data-target="comment_reply" replayid="' + id + '">回复<a class="user_name" realName="'+ this.HTMLEncode(userName) +'">' + this.HTMLEncode(userName) + '</a></span> \
                        ' + (isPublisher ? ' ' : '<span class="complaint" onclick=report("comments","' + this.HTMLEncode(userName) + '","' + id +'")>投诉</span> ') + '\
                    </div> \
                    <div class="comment-btns note_grey clearfix '+ (isVoted === 'like' ? ' isup' : '') +' '+ (isVoted === 'dislike' ? 'isdown' : '') + ' '+ (isPublisher ? 'disabled': '') + '">\
                        <span class="votewrap"><span class="num">' + num + '</span><span class="from" ' + ishidden + '><div class="more more_close"  id="' + replayId + '_more"  ' + ismorehidden + '>更多</div><div class="child_body">' + voteUser + '<div class="vote_user " style="display:none;">' + voteUserMore + '</div></div></span></span>\
                        <i class="vote vote-like fa fa-sort-up' + (isVoted || isPublisher ? ' voted ' : '' ) + '" id="' + replayId + '_vote"></i>\
                        <i class="vote vote-dislike fa fa-sort-down' + (isVoted || isPublisher ? ' voted ': '' ) + '" id="' + replayId + '_vote_dislike"></i>\
                    </div></div></div>\
                </dd>\
            </dl>\
        </div>').trim();
        },

        /*
         *  事件绑定
         */
        addEvent:function () {
            function replysend(e){
                var wrap = $('body').find('.reply.rel_cmmde')[0];
                var cont_length = $('#wmd-input').text().trim().length;
                if(wrap){
                    if (!ISLOGINED) {
                        that.showLoginBox(wrap, e);
                        return;
                    }
                    if (cont_length < 5) {
                        $('.cmmde_tips').html("最少回复5个字，如果对这个主题感兴趣，可以多说两句");
                        return;
                    }
                    if (cont_length > 3000) {
                        $('.cmmde_tips').html("评论建议在10-3000个字符以内，当前字符数为" + cont_length);
                        return;
                    }
                    that.replyHandler(wrap, e, function (wrap, e) {
                        that.warning(wrap);
                    });
                }
            };
            var that = this;
            $(this.wrap).bind("mousedown", function (e) {
                var el = e.target;
                if(e.which !== 1) return;
                var wrap = $(el).parents().filter(".reply")[0];
                that.eventHandler(wrap, e);
            });
            $('body').bind("keydown", function (e) {
                if (e.keyCode === 13 && e.ctrlKey) {
                    //console.log('111111');
                    if($('.cmmde_comment_btn').hasClass('disabled') == false){
                        replysend (e);
                    }
                }
            });
            //modified by liwz 2016-2-3 17:23
            $('body').delegate('.cmmde_comment_btn','click',function(e)
            {
                replysend (e);
                return false;
            });


            /*$('.cmmde_comment_btn').bind("click", function (e) {
                console.log(123456);
                replysend (e);
            });*/

            //$('body').delegate('.reply_btn', 'click', function(){
            //    alert(7899);
            //});
            //$('.reply_btn').bind("click", function (e) {
            //    var wrap = $('body').find('.reply.rel_cmmde')[0];
            //    var cont_length = $('#wmd-input').text().trim().length;
            //    if(wrap){
            //        if (!ISLOGINED) {
            //            that.showLoginBox(wrap, e);
            //            return;
            //        }
            //        if (cont_length < 5) {
            //            $('.cmmde_tips').html("最少回复5个字，如果对这个主题感兴趣，可以多说两句");
            //            return;
            //        }
            //        if (cont_length > 3000) {
            //            $('.cmmde_tips').html("评论建议在10-3000个字符以内，当前字符数为" + cont_length);
            //            return;
            //        }
            //        that.replyHandler(wrap, e, function (wrap, e) {
            //            that.warning(wrap);
            //        });
            //    }
            //})
        },

        /*
         * 事件处理
         * @ param <object> 外层节点
         * @ param <object> 事件对象
         */
        eventHandler:function (wrap, e) {
            var that = this,
                target = e.target;
                hook = {
                    "spam_text_btn": function(){
                        $(target).parent().addClass('hide').parents('.isspam').removeClass('isspam');
                    },
                    "reply_btn":function () {
                        var cont_length = $('#wmd-input').text().trim().length;
                        if (!ISLOGINED) {
                            that.showLoginBox(wrap, e);
                            return;
                        }
                        if (cont_length < 5) {
                            $('.cmmde_tips').html("最少回复5个字，如果对这个主题感兴趣，可以多说两句");
                            return;
                        }
                        if (cont_length > 3000) {
                            $('.cmmde_tips').html("评论建议在10-3000个字符以内，当前字符数为" + cont_length);
                            return;
                        }
                        that.replyHandler(wrap, e, function (wrap, e) {
                            that.warning(wrap);
                        });
                    },
                    "vote":function () {
                        if (!ISLOGINED) {
                            that.showLoginBox(wrap, e);
                            return;
                        }
                        that.doVote(wrap, e);
                    },
                    "more":function () {
                        that.showMoreVoter(wrap, e);
                    },
                    "reply_comments":function () {
                        if (!ISLOGINED) {
                            that.showLoginBox(wrap, e);
                            return;
                        }
                        that.showReplyBox(wrap, e);
                    },
                    "dologin":function () {
                        that.showLoginBox(wrap, e);
                    },
                    "loginout":function () {
                        that.loginout(wrap, e);
                    }
                };

            if ($(target).parents().filter(".topreply")[0] || $(target).parents().filter(".con")[0]) {

                target = $(target);
                //弹出窗口的需要特殊处理，否则拦截
                if (target.hasClass("weibo")) {
                    this.shareSina(wrap, e);
                } else {
                    for (i in hook) {
                        if (hook.hasOwnProperty(i) && target.hasClass(i)) {
                            hook[i]();
                        }
                    }
                }
            }
        },
        /*
         * 投票
         * @param <object> 当前回复框外层节点
         * @param <object> 目标节点
         */
        shareSina:function (wrap, e) {
            var el = $(e.target);
            wrap = $(el).parents().filter(".reply");
            var con = wrap.find(".reply_content").get(0).innerHTML;
            csdn.comp.shareSina({
                url:location.href,
                title:con
            })
        },
        /*
         * 投票
         * @param <object> 当前回复框外层节点
         * @param <object> 目标节点
         */
        showMoreVoter:function (wrap, e) {
            var el = $(e.target);
            wrap = $(el).parents().filter(".reply").get(0);
            var moreVoter = $(wrap).find(".vote_user").get(0);
            $(moreVoter).slideToggle("fast", function () {
                el.toggleClass("more_close");
            });
        },

        /*
         * 投票
         * @param <object> 当前回复框外层节点
         * @param <object> 目标节点
         */
        doVote:function (wrap, e) {
            csdn.comp.tip = function (el, txt) {
                if (!txt) {
                    return
                }
                var tip;
                if ($(el).parent().find('.noticetip').length > 0) {
                    $(el).parent().find('.noticetip').remove();
                }
                tip = $("<div class=\"noticetip\">" + txt + "</div>").insertBefore(el);
                tip[0].style.left = '0px';
                tip[0].style.top = '0px';
                tip.animate({
                    top:'-=30'
                }, 300, function (e) {
                    $(this).delay(500).animate({
                        opacity:0,
                        top:'-=10'
                    }, 200)
                });
            };

            var id = wrap.getAttribute("lang");
            var msg = {
                "503":"您已经投过票了！",
                "500":"+1"
            };
            var className = (' ' + e.target.className + ' ');
            if(~className.indexOf('voted')) {
                //return;
            }
            var isDislike = ~className.indexOf(' vote-dislike ')

            var self = this;
            self.asyVote(id, isDislike, function (data) {
                if (data.status != 500) {
                    //console.log(data);
                    data.msg = data.status==506 ?  '' : data.msg;
                    //csdn.comp.tip(e.target, msg(data.status));
                    csdn.comp.tip(e.target, data.msg);
                } else {
                    var $votewarp = $(wrap).children('dl').children('dd').children('.cont_wrap').find(".comment-btns");
                    //console.log($votewarp);
                    $($votewarp).removeClass('isup isdown');
                    $($votewarp).find(".num:first").text(data.like_count - data.dislike_count);
                    if(data.type == 1){
                        $($votewarp).addClass('isup');
                    }else if(data.type == 2){
                        $($votewarp).addClass('isdown');
                    }
                    //console.log(data);

                	//$('.comment-btns:first .vote', wrap).toggleClass('voted').filter(isDislike ? '.vote-dislike' : '.vote-like').toggleClass('voted-current');
                    

                    if(isDislike){
                        var ele_dislike_count = $('.comment-btns:first .dislike_count', wrap).html(function(i, h){
                            return h.replace(/\d+/, data.dislike_count);
                        }).attr('title', function(i, t){
                            return t.replace(/\d+/, data.dislike_count);
                        });
                        
                        //if(data.dislike_count>0){
                        //	if(!ele_dislike_count.is(':visible')) ele_dislike_count.fadeIn();
                        //}else{
                        //	ele_dislike_count.fadeOut();
                        //}
                    }else{
                        var voteUser = $(wrap).find(".vote_user:first");
                        var num = $(wrap).find(".num:first");
                        var from = $(wrap).find(".votewrap .from:first");
                        //data.like_count = 4;
                        //data.like_people = "1asdasd,2asdasd,3sdfsdf,4gfgfg";
                        var moreBtn = $(wrap).find(".more:first");                       
                        //if(data.like_count>0){
                        //	$(wrap).find(".votewrap:first").fadeIn();
                        //}else{
                        //	$(wrap).find(".votewrap:first").fadeOut();
                        //}
                        if (data.like_count && data.like_count > limitNum) {
                            voteUser.fadeIn();
                            moreBtn.fadeIn();
                        }
                        //num.html(parseInt(data.like_count) - parseInt(data.dislike_count));
                        var voters = data.like_people.split(",");
                        var votersShort = voters.slice(0, limitNum);
                        var renderVoters = function (data, len) {
                            len = data.length;
                            var i = 0, votersHtml = "";
                            while (i < len) {
                                votersHtml += '<a class="user_name" href="' + SPACEURL + voters[i] + '" target="_blank">' + voters[i] + '</a>';
                                i++;
                            }
                            return votersHtml;
                        };

                        from.html(renderVoters(votersShort));
                        if (voters.length > limitNum) {
                            voters = voters.slice(limitNum);
                            voteUser.html(renderVoters(voters));
                            voteUser.slideDown('fast');
                        }
                        self.getCNick(function(nick){
                            nick.showNickname();
                        });
                        
                    }
                }
            })
        },

        /*
         * 显示回复框
         * @param <object> 当前回复框外层节点
         * @param <object> 目标节点
         */
        showReplyBox:function (wrap, e) {
            //alert(2);
            //$(wrap).find(".reply_reply:first").toggle("fast");
            var $cmmde = $('#wmd-input');
            if($cmmde){
                $('.reply').removeClass("rel_cmmde");
                $(wrap).addClass("rel_cmmde");
            }
        },

        /*
         * 子回复处理
         * @param <object> 当前回复框外层节点
         * @param <object> 目标节点
         */
        replyHandler:function (wrap, e, callback) {
            if ($(wrap).find(".reply_btn").hasClass("disabled")) {
                return false;
            }
            var that = this;
            var _userName;
            //var publisher = $(wrap).find('.user_name').html();
            var publisher = $(wrap).find('.user_name').attr( 'realName' );
            var reply_box = $(wrap).find('.reply_box');
            //var content = reply_box.val();
            //var content = $('#wmd-input').text();
            $('#wmd-preview').html("");
            $('.wmd-preview-section.preview-content').children().clone().appendTo('#wmd-preview');
            var content = $('#wmd-preview').html();
            if (!content) {
                if (typeof callback == 'function') {
                    callback(wrap, e);
                }
                return;
            }
            $(wrap).hasClass("topreply") || $(wrap).hasClass("parentId_0") ? content : content = "回复@{#?'" + publisher + "}:" + content;

            //层级限定3
            var len = 3;
            while (len--) {
                if (wrap.className.indexOf("parentId_" + len) > 0) {
                    parentId = len;
                }
            }
            if ($(wrap).hasClass("topreply")) {
                topId = "";
                parentId = '';
                _type = "do_comment";
            } else {
                var _type = '';
                //如果不是顶层
                if ($(wrap).parents().filter(".reply").length > 0) {
                    var _replys = $(wrap).parents().filter(".reply");
                    var topWrap = _replys[_replys.length - 1];
                    //_userName = $(topWrap).find(".user_name").html();
                    _userName = $(topWrap).find(".user_name").attr( 'realName' );
                    _wrap = topWrap;
                } else {
                    _userName = publisher;
                    _wrap = wrap;
                }
                var topId = _wrap.getAttribute("lang") * 1;
            }

            var _data = {
                id:topId,
                parentId:parentId,
                content:content,
                type:_type,
                is_markdown:1,
                username:_userName
            };

            //为避免重复提交，设置回复按钮不可用，并改变字样为"loading..."
            //var rbtn = $(wrap).find(".reply_btn");
            var rbtn = $(".cmmde_comment_btn");
            //var rbtnVal =rbtn.val();
            function showLoading(isShow){
                if(isShow){
                  rbtn.text("正在发送...");
                  rbtn.addClass("disabled");
                }else{
                  rbtn.text("评论");
                  rbtn.removeClass("disabled");
                }
            };
            showLoading(true);

            //发送回复数据
            this.sendComm(_data, function (data) {
            //回复提交按钮可用
            showLoading();
                var msg = {
                    "301":"请先登录",
                    "302":"评论次数过快",
                    "303":"url不能为空",
                    "305":"内容不能为空",
                    "306":"评论失败",
                    "309":"您因违反规则被禁言，不能发布内容",
                    "310":"评论中有不合法信息，请编辑后重新评论",
                    "410":"回复中有不合法信息，请编辑后重新评论",
                    "414":"内容过长"
                };
                $('.cmmde_tips').html(msg[data.status]);
                //csdn.comp.tip(e.target, msg[data.status]);
                data = data.data || data;
                currUser.username = data.username || "";
                var conf = {
                    id:data.id,
                    avatar:data.avatar,
                    userName:data.username,
                    parentId:data.parent_id,
                    time:data.create_time,
                    from:data.from,
                    voteUser:data.like_people,
                    num:data.like_count,
                    content:data.body,
                    is_markdown:data.is_markdown
                };
                that.appendReply(conf, wrap);
                //清空内容
                //$('#wmd-input').text('');
                if(data.parent_id == 0){
                    $('[data-counts="comment"]').each(function(){
                        $(this).text(parseInt($(this).text()) + 1);
                    });
                };
                //关闭编辑器
                localStorage.cmmdecontent = "";
                $('#wmd-input .editor-content').html('');
                close_cmmde();
                $('.right_cont_body').focus();
                //reply_box.val('');

            });
        },

        /*
         * 评论处理
         * @ param <object> 外层节点
         * @ param <object> 事件源对象
         */
        topreplyHandler:function (wrap, target) {
            this.replyHandler(wrap, "", function () {

            })
        },

        /*
         * 追加回复
         * @ param <object> 配置
         * @ param <object> 外层节点
         */
        appendReply:function (conf, wrap) {
            var parentId = conf.parentId;
            var tpl = $(this.buildReplyTpl(conf));
            var _target;
            $('.last .empty-placeholder', this.wrap).fadeOut();
            if (parentId == 0) {
                _target = $(this.wrap + " .con").filter(".last");
                if (_target.children().length > 0) {
                    tpl.insertBefore(_target.children().get(0)).hide().slideDown('slow');
                } else {
                    tpl.appendTo(_target[0]).hide().slideDown('slow');
                }
            } else if (parentId == 1) {
                if ($(wrap).hasClass("parentId_0")) { //根节点
                    var _wrap = $(wrap).find(".childReply")[0];
                    if (!_wrap && wrap.className != "childReply") {
                        var dd = $(wrap).find("dd");
                        $("<div class=\"childReply\"></div>").appendTo(dd)[0];
                    }
                    _target = $(wrap).find(".childReply");
                } else if ($(wrap).hasClass("parentId_1")) {
                    _target = wrap;
                }
                if ($(_target).children().length > 0 && parentId == 0) {
                    tpl.insertBefore($(_target).children()).hide().slideDown('slow');
                } else {
                    if ($(_target).hasClass("parentId_1")) {
                        _target = _target.parentNode;
                    }
                    tpl.appendTo(_target).hide().slideDown('slow');
                }
            }

            // 转化评论中用户名称为相应的昵称
            this.getCNick(function(nick){
                nick.showNickname();
                //console.log(nick);
            });

            this.afterReply(parentId, wrap);
        },

        /*
         * 回复/评论 操作以后的行为
         * @ param <object> 外层节点
         */
        afterReply:function (parentId, wrap) {
            if (parentId == 0) {
                $(wrap).find("h6 span").html(TEXTLIMIT);
            } else {
                //$(wrap).find(".reply_reply").slideUp("fast");
                $(wrap).removeClass("rel_cmmde");
            }
            if ($(wrap).parents().filter(".last").length == 1 || $(wrap).hasClass("topreply")) {
                this.initTitle(this.commentCount + 1);
            }
        },

        /*
         * 加载CSS
         * @ param <string> CSS地址
         * @ param <string> 加载目标
         * @ param <function> 回调
         */
        loadCss:function (src, target, callback) {
            var node = document.createElement('link'), outEl;
            switch (target) {
                case 'body':
                    outEl = document.body;
                    break;
                case 'head':
                    outEl = document.getElementsByTagName('head')[0];
                    break;
                default:
                    outEl = document.getElementsByTagName('head')[0];
            }
            node.rel = "stylesheet";
            node.type = 'text/css';
            if (node.addEventListener) {
                node.addEventListener('load', callback, false);
                node.addEventListener('error', function () {
                    //error function
                    //callback();
                }, false);
            }
            else { // for IE6-8
                node.onreadystatechange = function () {
                    var rs = node.readyState;
                    if (rs === 'loaded' || rs === 'complete') {
                        node.onreadystatechange = null;
                        callback();
                    }
                };
            }
            node.href = src;
            outEl.appendChild(node);
        },
        createIframe:function (el, src, callback) {
            var node = el || document.createElement('IFRAME'), outEl = document.body;
            if (node.addEventListener) {
                node.addEventListener('load', callback, false);
            }
            else { // for IE6-8
                node.onreadystatechange = function () {
                    var rs = node.readyState;
                    if (rs === 'loaded' || rs === 'complete') {
                        node.onreadystatechange = null;
                        callback(node);
                    }
                };
            }
            node.src = src;
            outEl.appendChild(node);
        },

        /*
         * 【数据层】发送评论
         * @ param <function> 请求回调
         */
        sendComm:function (data, callback) {

                parentId = data.parentId,
                type = data.type || "do_reply",
                parentId = (type == 'do_reply') ? 'parent_id=' + parentId : '',
                content = encodeURIComponent(data.content),
                TITLE = TITLE || document.title;
            var _url, comment_id;

            if (type == "do_reply") {
                comment_id = 'comment_id=' + data.id + '&to_user='+data.username+'&';
            } else {
                comment_id = "";
            }
            _url = HOST + '/comment/comment/' + type + '?' + comment_id + 'url=' + URL + '&' + parentId + '&title=' + TITLE + '&body=' + content+'&is_markdown=1';
            var _purl = "http://" + document.domain;
            if( _purl == postsite){
                $.ajax({
                    type:"post",
                    url:_url,
                    dataType:"jsonp",
                    jsonp:"jsonpcallback",
                    scriptCharset:"utf-8",
                    contentType:"application/x-www-form-urlencoded",
                    success:function (data) {
                        if (typeof callback == "function") {
                            callback(data);
                        }
                    }
                });
            }else{
                ajaxProxy(HOST + '/proxy.html',{
                    type:"post",
                    url:_url,
                    dataType:"jsonp",
                    jsonp:"jsonpcallback",
                    scriptCharset:"utf-8",
                    contentType:"application/x-www-form-urlencoded",
                    success:function (data) {
                        if (typeof callback == "function") {
                            callback(data);
                        }
                    }
                });
            }

        },

        /*
         * 【数据层】获取最新评论
         * @ param <function> 请求回调
         */
        getLastComm:function (data, callback, complete) {
            //alert(1111);
            var that = this,
                curr = data.curr,
                _url = HOST + "/comment/comment/newest?url=" + URL + "&pageno=" + curr + "&pagesize=" + PAGESIZE;
            $.ajax({
                url:_url,
                dataType:"jsonp",
                jsonp:"jsonpcallback",
                scriptCharset:"utf-8",
                success:function (data) {
                    data.type = "last";
                    that.currData = that.dataLastComm = data;

                    //if (typeof callback == "function" && data.status == 100) {
                    if (typeof callback == "function") {
                        callback(data);
                    }
                },
                complete: complete
            });

        },

        /*
         * 【数据层】获取最热评论
         * @ param <function> 请求回调
         */
        getHotComm:function (data, callback, complete) {
            var that = this,
                curr = data.curr,
                _url = HOST + "/comment/comment/hot?url=" + URL + "&pageno=" + curr + "&pagesize=" + PAGESIZE;
            $.ajax({
                url:_url,
                dataType:"jsonp",
                jsonp:"jsonpcallback",
                scriptCharset:"utf-8",
                success:function (data) {
                    data.type = "hot";
                    that.currData = that.dataLastComm = data;
                    if (typeof callback == "function" && data.status == 200) {
                        callback(data);
                    }
                },
                complete: complete
            });
        },

        /*
         * 【数据层】获取最新评论
         * @ param <function> 请求回调
         */
        getUMOnCSDNDomain:function (callback) {
            var that = this,
                _url = "http://ptcms.csdn.net/comment/comment/login_username";
            $.ajax({
                url:_url,
                dataType:"jsonp",
                jsonp:"jsonpcallback",
                scriptCharset:"utf-8",
                success:function (data) {
                    if (typeof callback == "function") {
                        callback(data.username);
                    }
                }
            });
        },

        /*
         * 【数据层】获取最新投票
         * @ param <function> 请求回调
         * @param {Boolean} isDislike 是否是踩
         */
        asyVote:function (id, isDislike, callback) {
            var that = this,
                _url = HOST + "/comment/comment/" + (isDislike ? 'dislike' : 'like') + "?id=" + id;
            $.ajax({
                url:_url,
                dataType:"jsonp",
                jsonp:"jsonpcallback",
                scriptCharset:"utf-8",
                success:function (data) {
                    if (typeof callback == "function") {
                        callback(data);
                    }
                }
            });
        },

        /*
         * 检测登录
         */
        checkLogin:function (callback) {
            var that = this;
            var url = this.conf.loginUrl;
            //如果在csdn.net域名下
            if(ISCSDNDOMAIN){
                $.getScript(url, function (data) {
                    var getCookie = csdn.getCookie||csdn.toolkit.getCookie;
                    currUser.username = getCookie("UserName") || currUser.username;
                    that.setLogin(currUser.username, callback);
                });
            }else{
            //todo：如果没在csdn.net域名下，通过jsonp接口，来取当前域cookie
                that.getUMOnCSDNDomain(function(username){
                    that.setLogin(username, callback);
                });
            }
        },
        /*
         * 获取用户头像
         */
        getAvatar:function (un, callback) {
            var that = this;
            var url = this.conf.md5;
            getScript(url, function () {
                var m5 = md5(un.toLowerCase());
                var url = m5.substr(0, 3).split('').join('/') + '/3_' + un.toLowerCase() + '.jpg';
                callback('http://avatar.csdn.net/' + url);
            });
        },

        /*
         * 设置登录
         *
         */
        setLogin:function (userName, callback) {
            var that = this;
            if (userName) {
                ISLOGINED = true;
                currUser.username = userName;
                //var loginTpl = '<a href="javascript:;;" style="cursor: text; color: #000" class="user_name" realName="'+ userName +'">' + userName + '</a>欢迎您！<a class="loginout" href="javascript:void(0)">退出</a>';
                var loginTpl = '<a href="javascript:;;" style="cursor: text; color: #000" class="user_name" realName="'+ userName +'">' + userName + '</a>欢迎您！';
                $(".topreply").find(".loginwrap").html(loginTpl);
                this.getAvatar(userName, function (src) {
                    $(".topreply .user_img img").attr("src", src);
                });
                if (typeof callback == "function") {
                    callback();
                }
            } else {
                ISLOGINED = false;
                currUser.username = "";
                var unLoginTpl = '<span class="error">您还没有登录! </span> 请<a class="dologin" href="javascript:viod(0);"> 登录 </a> 或<a href="https://passport.csdn.net/account/register">  注册 </a>';
                $(".topreply").find(".loginwrap").html(unLoginTpl);
                if (typeof callback == "function") {
                    callback();
                }
            }
        },

        /*
         * 显示登陆框
         *
         */
        showLoginBox:function () {
          //使用iframe重新实现该登录功能。
          //为登录窗口嵌入irame
          document.domain = "csdn.net";
          var $logpop = $("#l_a_pop_win");
          $logpop.html('<iframe src="https://passport.csdn.net/account/loginbox?service=http://static.blog.csdn.net/callback.htm" frameborder="0" height="600" width="400" scrolling="no"></iframe>');
          //设置灰色遮罩层的透明度和高宽
          var $mask = $('#l_a_popup_mask');
          $mask.css({
            opacity: 0.5,
            width: $( document ).width() + 'px',
            height:  $( document ).height() + 'px'
          });
          //弹出灰色遮罩
          $mask.css("display","block");
          //设置登录窗口DIV页面居中
          $logpop.css( {
            top: ($( window ).height() - $logpop.height())/ 2  + $( window
            ).scrollTop() + 'px',
            left:($( window ).width() - $logpop.width())/ 2
          } );
          //显示登录弹窗
          setTimeout( function () {
            $logpop.show();
            $logpop.css( {
              opacity: 1
            } );
          }, 200 );
          //绑定事件，当出现弹窗后，点击灰色遮罩区域，弹窗消失
          $mask.unbind("click");
          $mask.bind("click", function(){
            $mask.hide();
            var $clopop = $("#pop_win");
            //$("#common_ask_div_sc").css("display","none");
            $logpop.css( {
              opacity: 0
            } );
            setTimeout( function () {
              $logpop.hide();
            }, 350 );
            return false;
          });



//            //在csdn域下，支持异步登录，否则，跳到登录页
//            if(!ISCSDNDOMAIN){
//                window.location.href="https://passport.csdn.net/account/login";
//            }
//            var that = this;
//            csdn.showLogin(function (data) {
//                data = data.data;
//                var userName = data.userName || csdn.getCookie('UserName');
//                currUser.username = userName;
//                that.setLogin(userName)
//            });
        },

        /*
         * 显示登陆框
         *
         */
        loginout:function (wrap, e) {
            var that = this;
            var src = "https://passport.csdn.net/account/logout";
            var el = $("<iframe id=\"passport\" src=\"\" height=0 width=0 /></iframe>")[0];
            this.createIframe(el, src, function (el) {
            });
            ISLOGINED = false;
            this.setLogin();
            //csdn.comp.tip($('.dologin'),"退出成功");
        },

        /*
         * 输入错误提示
         * @ param <object> 外层节点
         */
        warning:function (wrap) {
            csdn.comp.tip(e.target, '不能发空评论');
            //alert('不能发空评论');
            csdn.toolkit && csdn.toolkit.shake($(wrap).find(".reply_box"), "reply_box_red", 3);
        },

        /*
         * 替换前端模板
         * @ param <string> 包含前端模板的内容
         */
        replaceTpl:function (content) {
            if (content.indexOf("回复@") < 0) {
                return content;
            }
            var reg = /[{\#\?'].*\}/;
            var tpl = content.match(reg);

            if (tpl && tpl.length > 0) {
                var usernameTpl = tpl[0];
                var username = usernameTpl.replace(/\{#\?\'|}/g, '');
                var dom = '<a class="user_name" href="' + SPACEURL + this.HTMLEncode(username) + '" target="_blank">' + this.HTMLEncode(username) + '</a>';
                return content.replace(usernameTpl, dom);
            }else{
              return content;
            }
        },

        /*
         * 异步加载js
         */
        loadJS:function (url, success) {
            var domScript = document.createElement('script');
            domScript.src = url;
            success = success || function () {
            };
            domScript.onload = domScript.onreadystatechange = function () {
                if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                    this.onload = this.onreadystatechange = null;
                    success();
                    this.parentNode.removeChild(this);
                }
            }
            document.getElementsByTagName('head')[0].appendChild(domScript);
        },
        getCNick : function(callback){
            callback({
                showNickname: csdn.cnick
            });
        },
        HTMLEncode : function(str) {
          var s = "";
          if(str.length == 0) return "";
          s = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
          return s;
        }
    };

//公开CSDN 对象
    window["csdn"] = csdn;

})(window);











