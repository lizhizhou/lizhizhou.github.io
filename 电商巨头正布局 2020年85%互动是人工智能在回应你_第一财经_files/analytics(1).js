(function () {

    var p = {};

    p.t = 1;

    if(document) {
        p.pdo = document.domain || "";
        p.pur = document.URL || "";
        p.pre = document.referrer || "";
        p.pti = document.title || "";

        var co = {};
        co.set = function (a, b, c) {
            var d = new Date();
            d.setTime(d.getTime() + c);
            document.cookie = a + "=" + b + (d ? "; expires=" + d.toGMTString() : "");
        };
        co.get = function (a) {
            return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : "";
        };

        if(!co.get("yu_id")) {
            var i = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
            co.set("yu_id", i, 31536000000);
        }
        p.cid = co.get("yu_id");
    }

    if(navigator) {
        p.pla = navigator.language || "";
    }

    if(_pb) {
        for(var i in _pb) {
            eval( "p.ud_" + _pb[i][0] + "='" + _pb[i][1] + "'");
        }
    }

    p.pra = Math.floor(Math.random() * (1E8 - 1E7)) + 1E7;

    var args = "";
    for(var i in p) {
        if(args !== "") {
            args += "&";
        }
        args += i + "=" + encodeURIComponent(p[i]);
    }

    var img = new Image(1, 1);
    img.src = "//analytics.yicai.com/yc.gif?" + args;
})();

function trackEvent(category, action, label) {

    var p = {};

    p.t = 2;

    if(document) {
        var co = {};
        co.set = function (a, b, c) {
            var d = new Date();
            d.setTime(d.getTime() + c);
            document.cookie = a + "=" + b + (d ? "; expires=" + d.toGMTString() : "");
        };
        co.get = function (a) {
            return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : "";
        };

        if(!co.get("yu_id")) {
            var i = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
            co.set("yu_id", i, 31536000000);
        }
        p.cid = co.get("yu_id");
    }

    if(navigator) {
        p.pla = navigator.language || "";
    }

    if(_pb) {
        for(var i in _pb) {
            eval( "p.ud_" + _pb[i][0] + "='" + _pb[i][1] + "'");
        }
    }

    p.eca = category;
    p.eac = action;
    p.ela = label ? label : "";

    p.pra = Math.floor(Math.random() * (1E8 - 1E7)) + 1E7;

    var args = "";
    for(var i in p) {
        if(args !== "") {
            args += "&";
        }
        args += i + "=" + encodeURIComponent(p[i]);
    }

    var img = new Image(1, 1);
    img.src = "//analytics.yicai.com/yc.gif?" + args;
}
