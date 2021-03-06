/**
 * 8dianhou - 8dianhou Project
 * @authors David Liu
 * @version v0.0.1
 * @link 
 * @license 
 */
! function() {
    "use strict";
    angular.module("app.advisor-details", ["app.core", "ui.bootstrap", "app.security", "app.advisor.favorite"])
}(),
function() {
    "use strict";
    angular.module("app.advisor.favorite", ["app.core"])
}(),
function() {
    "use strict";
    angular.module("app", ["app.core", "app.advisor-details", "app.weibo", "app.weixin", "app.gatracking"]), $(document).ready(function() {
        $("#tutor-about").find("a").attr("target", "_blank");
        var e, n = $(".tutorMenu-box").find("a"),
            t = $(".tutorMenu-box"),
            a = t.outerHeight() + 15,
            i = n.map(function() {
                var e = $($(this).attr("href"));
                return e.length ? e : void 0
            });
        n.click(function(e) {
            var n = $(this).attr("href"),
                t = "#" === n ? 0 : $(n).offset().top - a;
            $("html, body").stop().animate({
                scrollTop: t
            }, 300), e.preventDefault()
        }), $(window).on("scroll", function(t) {
            var a = $(this).scrollTop(),
                o = $(this).scrollTop(),
                s = i.map(function() {
                    return $(this).offset().top < a + 60 ? this : void 0
                });
            s = s[s.length - 1];
            var r = s && s.length ? s[0].id : "";
            if (e !== r && (e = r, n.parent().removeClass("active").end().filter("[href=#" + r + "]").parent().addClass("active")), o >= 334) {
                if ($(".nav").hasClass("fixed")) return !1;
                $(".nav").addClass("fixed")
            } else $(".nav").removeClass("fixed")
        }), $(".question").click(function() {
            $(this).siblings().toggle()
        })
    })
}(),
function() {
    "use strict";
    angular.module("app.message", ["app.core"])
}(),
function() {
    "use strict";
    angular.module("app.prompt", ["app.core", "ui.bootstrap"])
}(),
function() {
    "use strict";
    angular.module("blocks.restful", [])
}(),
function() {
    "use strict";
    angular.module("blocks.router", ["ui.router"])
}(),
function() {
    "use strict";
    angular.module("blocks.utils", [])
}(),
function() {
    "use strict";
    angular.module("app.core", ["ngAnimate", "ngSanitize", "blocks.router", "blocks.restful", "blocks.utils", "ui.router", "app.message"])
}(),
function() {
    "use strict";
    angular.module("app.gatracking", ["app.core"])
}(),
function() {
    "use strict";
    angular.module("app.security", ["app.core"])
}(),
function() {
    "use strict";
    angular.module("app.weibo", ["app.core"])
}(),
function() {
    "use strict";
    angular.module("app.weixin", ["app.core"])
}(),
function() {
    "use strict";

    function e(e, n, t, a, i, o, s, r, l) {
        function c() {
            u.answers = [], p = t.answers(f), p.success(function(e) {
                angular.forEach(e, function(e) {
                    u.answers.push(e)
                })
            }), p.next(), u.reviews = [], d = t.reviews(f), d.success(function(e) {
                angular.forEach(e, function(e) {
                    u.reviews.push(e)
                })
            }), d.next()
        }
        var u = this,
            p = null,
            d = null,
            f = ADVISOR_ID,
            m = !1;
        u.SERVER_API_URL = a, c(), u.selectService = function(e) {
            var t = e.target.attributes["data-sid"].value || "";
            s.flow(function() {
                n.location.href = a + "consultation/booking/" + f + "/service/" + t
            })
        }, u.isNextAnswers = function() {
            return !p.last()
        }, u.nextAnswers = function() {
            p.next()
        }, u.nextReviews = function() {
            d.next()
        }, u.isNextReviews = function() {
            return !d.last()
        }, u.openAskQuestion = function() {
            l.ga("web-quick-ans", "ask-mentor-btn"), s.flow(function() {
                i.open({
                    animation: !0,
                    templateUrl: "app/advisor-details/advisor-question.html",
                    controller: "AdvisorQuestionController",
                    controllerAs: "vm",
                    size: "lg",
                    resolve: {
                        advisorId: function() {
                            return f
                        }
                    },
                    opened: l.ga("web-quick-ans", "ask-mentor-page")
                })
            })
        }, u.favorite = function() {
            s.login(!0, function() {
                m = !m, m ? r.favorite(f) : r.unfavorite(f)
            })
        }, u.favoriteClass = function() {
            return m ? "fa-heart" : "fa-heart-o"
        }, u.favoriteInit = function(e) {
            m = e
        }
    }
    angular.module("app.advisor-details").controller("AdvisorDetailsController", e), e.$inject = ["$scope", "$window", "AdvisorDetailsService", "SERVER_API_URL", "$modal", "authModal", "LoginHelper", "AdvisorFavoriteService", "GatrackingService"]
}(),
function() {
    "use strict";

    function e(e, n, t, a) {
        function i(e) {
            return a.query(n + "api/reviews/" + e + "?p_size=5")
        }

        function o(e) {
            return a.query(n + "api/qa/replier/" + e + "/answers?p_size=5")
        }
        var s = {
            reviews: i,
            answers: o
        };
        return s
    }
    angular.module("app.advisor-details").factory("AdvisorDetailsService", e), e.$inject = ["$http", "SERVER_API_URL", "restfulHelper", "restfulQuery"]
}(),
function() {
    "use strict";

    function e(e, n, t, a, i, o, s) {
        function r() {
            var e = {
                title: l.question.title,
                content: l.question.content,
                anonymous: l.question.anonymous || !1,
                tags: l.question.tags ? l.question.tags.split(",") : [],
                advisorId: t
            };
            return o.post(a + "api/question", e)
        }
        var l = this,
            c = !1;
        l.formValidator = i, l.question = {}, l.validatorTags = function() {
            if (!l.question.tags) return !1;
            var e = l.question.tags.split(",");
            return !e || e.length < 2
        }, l.cancel = function() {
            n.dismiss("cancel")
        }, l.confirm = function() {
            n.close()
        }, l.askQuestion = function() {
            var e = r();
            e.then(function() {
                c = !0, s.ga("web-quick-ans", "ask-mentor-success")
            })
        }, l.isSuccess = function() {
            return c
        }
    }
    angular.module("app.advisor-details").controller("AdvisorQuestionController", e), e.$inject = ["$scope", "$modalInstance", "advisorId", "SERVER_API_URL", "formValidator", "restfulHelper", "GatrackingService"]
}(),
function() {
    "use strict";

    function e(e, n, t) {
        function a() {
            o = n.favorites(), o.begin(function() {
                s = !0
            }), o.end(function() {
                s = !1
            }), o.success(function(e) {
                angular.forEach(e, function(e) {
                    e.favorite = !0, i.advisors.push(e)
                })
            }), o.next()
        }
        var i = this,
            o = null,
            s = !1;
        i.advisors = [], a(), i.hasNext = function() {
            return s ? !1 : !o.last()
        }, i.isEmpty = function() {
            return s ? !1 : 0 == i.advisors.length
        }, i.isRequesting = function() {
            return s
        }, i.nextAdvisors = function() {
            o.next()
        }, i.avatarUrl = function(e) {
            return e ? e : t + "images/anonymous.jpg"
        }, i.advisorUrl = function(e) {
            return t + "advisor/" + e
        }, i.trashFavorite = function(e) {
            if (!s) {
                s = !0;
                var t = n.unfavorite(e.advisorId);
                t.then(function() {
                    for (var n = i.advisors.length, t = 0; n > t; t++)
                        if (i.advisors[t].advisorId == e.advisorId) {
                            i.advisors.splice(t, 1);
                            break
                        }
                    s = !1
                }, function() {
                    s = !1
                })
            }
        }
    }
    angular.module("app.advisor.favorite").controller("AdvisorFavoriteController", e), e.$inject = ["$scope", "AdvisorFavoriteService", "SERVER_API_URL"]
}(),
function() {
    "use strict";

    function e(e, n, t) {
        function a() {
            return n.query(t + "api/advisor-favorite/favorites")
        }

        function i(n) {
            return e.get(t + "api/advisor-favorite/" + n + "/favorite")
        }

        function o(n) {
            return e.get(t + "api/advisor-favorite/" + n + "/unfavorite")
        }
        var s = {
            favorite: i,
            unfavorite: o,
            favorites: a
        };
        return s
    }
    angular.module("app.advisor.favorite").factory("AdvisorFavoriteService", e), e.$inject = ["restfulHelper", "restfulQuery", "SERVER_API_URL"]
}(),
function() {
    "use strict";

    function e(e, n, t, a) {
        function i() {
            var e = s();
            e.then(function(e) {
                r.messages = e
            })
        }

        function o(e) {
            return a.post(t + "api/member/message/read/" + e.messageId, {})
        }

        function s() {
            return a.get(t + "api/member/message/unread-list")
        }
        var r = this;
        r.messages = [], i(), r.hoverMessage = function() {
            r.hasUnreadMessage() || i()
        }, r.hasUnreadMessage = function() {
            return r.messages && r.messages.length > 0
        }, r.readMessage = function(e) {
            var t = o(e);
            t.then(function() {
                n.location.href = e.url
            })
        }
    }
    angular.module("app.message").controller("MessageController", e), e.$inject = ["$scope", "$window", "SERVER_API_URL", "restfulHelper"]
}(),
function() {
    "use strict";

    function e(e, n) {
        function t(n, t, a) {
            a = a || angular.noop;
            var i = e.open({
                animation: !0,
                templateUrl: "app/blocks/prompt/prompt.html",
                controller: "PromptController",
                controllerAs: "vm",
                size: "small",
                resolve: {
                    successed: function() {
                        return n
                    },
                    message: function() {
                        return t
                    }
                }
            });
            i.result.then(function() {
                a.apply()
            }, function() {
                a.apply()
            })
        }

        function a(e, n) {
            t(!0, e, n)
        }

        function i(e, n) {
            t(!1, e, n)
        }

        function o(e, n, t) {
            r(e, !0, n, t)
        }

        function s(e, n, t) {
            r(e, !1, n, t)
        }

        function r(e, t, a, i) {
            i = i || angular.noop;
            var o = {
                show: !0,
                successed: t,
                message: a
            };
            e.prompt_alter = o, n(function() {
                e.prompt_alter.show = !1, i.apply()
            }, 2e3)
        }
        var l = {
            success: a,
            error: i,
            alterSuccess: o,
            alterError: s
        };
        return l
    }
    angular.module("app.prompt").factory("PromptHelper", e), e.$inject = ["$modal", "$timeout"]
}(),
function() {
    "use strict";

    function e(e, n, t, a, i) {
        var o = this;
        o.successed = a, o.message = i, n(function() {
            t.close()
        }, 2e3)
    }
    angular.module("app.prompt").controller("PromptController", e), e.$inject = ["$scope", "$timeout", "$modalInstance", "successed", "message"]
}(),
function() {
    "use strict";
    angular.module("app.prompt").directive("prompt", [function() {
        return {
            restrict: "A",
            link: function(e, n, t) {
                e.$watch("prompt_alter.show", function(e) {
                    e ? n.find(".submit-status").slideDown() : n.find(".submit-status").slideUp()
                })
            },
            template: "<div class=\"submit-status\" ng-class=\"{'submit-status-success' : prompt_alter.successed , 'submit-status-false' : !prompt_alter.successed}\">    <span ng-class=\"{'icon-green' : prompt_alter.successed , 'icon-red' : !prompt_alter.successed }\"> {{prompt_alter.message}} </span></div>"
        }
    }]), angular.module("app.prompt").directive("prompt2", ["$timeout", function(e) {
        return {
            restrict: "A",
            link: function(n, t, a) {
                n.$watch(a.prompt2, function(n) {
                    if (n && n.show) {
                        var a = n.successed ? "submit-status-success" : "submit-status-false",
                            i = n.successed ? "icon-green" : "icon-red";
                        t.find(".submit-status").addClass(a).find("span").addClass(i).text(n.message), t.find(".submit-status").slideDown(), e(function() {
                            t.find(".submit-status").removeClass(a).find("span").removeClass(i), n.show = !1;
                            var e = n.callback || angular.noop;
                            t.find(".submit-status").slideUp(), e.apply()
                        }, 2e3)
                    }
                })
            },
            template: '<div class="submit-status">   <span> {{prompt_alter_message}} </span></div>'
        }
    }])
}(),
function() {
    "use strict";

    function e(e, n, t) {
        function a(e, n, t) {
            var a = t || !1,
                i = {
                    method: "GET",
                    url: e,
                    params: n || {},
                    cache: a
                };
            return l(i)
        }

        function i(e, n, t, a, i) {
            n = n || {}, i = i || !1;
            var o = {
                method: "POST",
                url: e,
                data: n,
                params: t
            };
            return o = angular.extend(o, a || {}), l(o, i)
        }

        function o(e, n) {
            n = n || {};
            var t = {
                method: "PUT",
                url: e,
                data: n
            };
            return l(t)
        }

        function s(e) {
            var n = {
                method: "DELETE",
                url: e
            };
            return l(n)
        }

        function r(e, n) {
            var t = {
                callback: "JSON_CALLBACK"
            };
            t = angular.extend(t, n || {});
            var a = {
                method: "JSONP",
                url: e,
                params: t
            };
            return l(a)
        }

        function l(t, a) {
            var i = n.defer();
            a = a || !1;
            var o = !1;
            return e(t).success(function(e, n, t) {
                if (o = !0, "SUCCESS" == e.status)
                    if (a) {
                        var s = [];
                        s.data = e.result, s.headers = t, i.resolve(s)
                    } else i.resolve(e.result, n, t());
                else i.reject(c(e.result.code, e.result.arguments))
            }).error(function(e, n) {
                o = !0, i.reject("远程服务故障，请稍后再试！")
            }), i.promise
        }

        function c(e, n) {
            n = n || [];
            for (var t = e, a = 0; a < n.length; a++) t = t.replace("${" + a + "}", n[a]);
            return t
        }
        var u = {
            get: a,
            post: i,
            put: o,
            "delete": s,
            jsonp: r
        };
        return u
    }
    angular.module("blocks.restful").factory("restfulHelper", e), e.$inject = ["$http", "$q", "$timeout"]
}(),
function() {
    "use strict";

    function e(e, n, t) {
        function a(e, n, t) {
            var a = t || !1,
                i = {
                    method: "GET",
                    url: e,
                    params: n || {},
                    cache: a
                };
            return l(i)
        }

        function i(e, n, t, a, i) {
            n = n || {}, i = i || !1;
            var o = {
                method: "POST",
                url: e,
                data: n,
                params: t
            };
            return o = angular.extend(o, a || {}), l(o, i)
        }

        function o(e, n) {
            n = n || {};
            var t = {
                method: "PUT",
                url: e,
                data: n
            };
            return l(t)
        }

        function s(e) {
            var n = {
                method: "DELETE",
                url: e
            };
            return l(n)
        }

        function r(e, n) {
            var t = {
                callback: "JSON_CALLBACK"
            };
            t = angular.extend(t, n || {});
            var a = {
                method: "JSONP",
                url: e,
                params: t
            };
            return l(a)
        }

        function l(t, a) {
            var i = n.defer();
            a = a || !1;
            var o = !1;
            return e(t).success(function(e, n, t) {
                if (o = !0, a) {
                    var s = [];
                    s.data = e, s.headers = t, i.resolve(s)
                } else i.resolve(e, n, t())
            }).error(function(e, n) {
                o = !0, i.reject(e, n)
            }), i.promise
        }
        var c = {
            get: a,
            post: i,
            put: o,
            "delete": s,
            jsonp: r
        };
        return c
    }
    angular.module("blocks.restful").factory("restfulOriginHelper", e), e.$inject = ["$http", "$q", "$timeout"]
}(),
function() {
    "use strict";

    function e(e, n) {
        function t(e, t) {
            function a(e) {
                u = e
            }

            function i(e) {
                p = e
            }

            function o(e) {
                d = e
            }

            function s(e) {
                f = e
            }

            function r() {
                return c && null == c.linkNext
            }

            function l() {
                if (!r()) {
                    var a = d || angular.noop,
                        i = f || angular.noop,
                        o = p || angular.noop;
                    a.apply();
                    var s = null;
                    s = c ? n.get(c.linkNext.href) : n.get(e, t), s.then(function(e) {
                        return c && c.id == e.id ? void i.apply() : (c = e, u(c.data), void i.apply())
                    }, function(e) {
                        o(e), i.apply()
                    })
                }
            }
            var c = null,
                u = null,
                p = null,
                d = null,
                f = null,
                m = {
                    success: a,
                    fail: i,
                    begin: o,
                    end: s,
                    last: r,
                    next: l
                };
            return m
        }

        function a(e, n, a) {
            function i() {
                return u ? !1 : !d.last()
            }

            function o() {
                return u ? !1 : 0 == p.length
            }

            function s() {
                return u
            }

            function r(e) {
                f = e, d.next()
            }

            function l() {
                return p
            }

            function c(e) {
                u = !0, e = e || angular.noop;
                for (var n = p.length, t = !1, a = 0; n > a; a++)
                    if (t = e(p[a])) {
                        p.splice(a, 1);
                        break
                    }
                u = !1
            }
            var u = !1,
                p = [],
                d = null,
                f = a;
            d = t(e, n), d.begin(function() {
                u = !0
            }), d.end(function() {
                u = !1
            }), d.success(function(e) {
                angular.forEach(e, function(e) {
                    p.push(e)
                }), f && f(e)
            }), d.next();
            var m = {
                hasNext: i,
                isEmpty: o,
                isRequesting: s,
                next: r,
                results: l,
                remove: c
            };
            return m
        }
        var i = {
            query: t,
            createQueryBuilder: a
        };
        return i
    }
    angular.module("blocks.restful").factory("restfulQuery", e), e.$inject = ["$q", "restfulHelper"]
}(),
function() {
    "use strict";

    function e(e, n, t) {
        function a(e, a, o) {
            function s(e, a) {
                e.forEach(function(e) {
                    e.config.resolve = angular.extend(e.config.resolve || {}, i.resolveAlways), n.state(e.state, e.config)
                }), a && !f && (f = !0, t.otherwise(a)), t.when("", "/")
            }

            function r(e, n) {
                o.go(e, n || {})
            }

            function l() {
                return o.get()
            }

            function c() {
                u(), p()
            }

            function u() {
                a.$on("$stateChangeError", function(n, t, a, i, o, s) {
                    if (!d) {
                        m.errors++, d = !0;
                        var r = t && (t.title || t.name || t.loadedTemplateUrl) || "unknown target";
                        "Error routing to " + r + ". " + (s.data || "") + ". <br/>" + (s.statusText || "") + ": " + (s.status || "");
                        e.path("/")
                    }
                })
            }

            function p() {
                a.$on("$stateChangeSuccess", function(e, n, t, o, s) {
                    m.changes++, d = !1;
                    var r = i.docTitle + " " + (n.title || "");
                    a.title = r
                })
            }
            var d = !1,
                f = !1,
                m = {
                    errors: 0,
                    changes: 0
                },
                g = {
                    configureStates: s,
                    getStates: l,
                    go: r,
                    stateCounts: m
                };
            return c(), g
        }
        var i = {
            docType: void 0,
            resolveAlways: {}
        };
        e.html5Mode(!1), this.configure = function(e) {
            angular.extend(i, e)
        }, this.$get = a, a.$inject = ["$location", "$rootScope", "$state"]
    }
    angular.module("blocks.router").provider("routerHelper", e), e.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"]
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("activeUrl", ["$parse", "$location", "SERVER_API_URL", function(e, n, t) {
        return {
            restrict: "A",
            link: function(e, a, i) {
                var o = i.activeUrl,
                    s = o.split(",");
                if (s && s.length > 0) {
                    var r = n.absUrl();
                    r.indexOf("?") > -1 && (r = r.substring(0, r.indexOf("?")));
                    for (var l = 0; l < s.length; l++)
                        if (s[l] == r || t + s[l] == r) {
                            a.addClass("active");
                            break
                        }
                }
            }
        }
    }])
}(),
function() {
    "use strict";

    function e(e) {
        function n(n) {
            var t = new Date,
                a = t - n,
                i = Math.floor(a / 36e5),
                o = t.getHours(),
                s = t.getDate(),
                r = t.getMonth();
            return 0 === i ? Math.floor(a / 6e4) + "分钟前" : o > i ? i + "小时前" : o + 24 > i ? "昨天 " + e("date")(n, "HH-mm") : o + 24 * (s + 7 * r) > i ? e("date")(n, "MM-dd") : e("date")(n, "y-MM-dd")
        }

        function t(n, t) {
            return e("date")(n, t)
        }
        var a = {
            formatChinaTime: n,
            format: t
        };
        return a
    }
    angular.module("blocks.utils").factory("dateFormatter", e), e.$inject = ["$filter"]
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("fileInput", ["$parse", function(e) {
        return {
            restrict: "A",
            link: function(n, t, a) {
                t.bind("change", function() {
                    e(a.fileInput).assign(n, t[0].files[0]), n.$apply()
                })
            }
        }
    }])
}(),
function() {
    "use strict";

    function e() {
        function e(e, n, t) {
            void 0 === t && (t = !0);
            var a = t ? e.$dirty : !0;
            if (void 0 !== e && a) {
                n = n || [], "string" == typeof n && (n = [n]);
                var i = n.reduce(function(n, t) {
                    return void 0 !== e.$error[t] ? n || e.$error[t] : n
                }, !1);
                return i
            }
            return !1
        }

        function n(e, n, t) {
            if (void 0 !== e && e.$dirty) {
                var a = n || "state-error",
                    i = t || "state-success";
                return e.$invalid ? a : i
            }
            return ""
        }

        function t(e, n, t) {
            if (void 0 !== e) {
                var a = n || "state-error",
                    i = t || "state-success";
                return e.$invalid ? a : i
            }
            return ""
        }

        function a(e) {
            e.$setPristine()
        }

        function i(e) {
            var n = angular.element("[name=" + e.$name + "]").find(":input"),
                t = {};
            return angular.forEach(n, function(e) {
                var n = angular.element(e);
                n.attr("name") && n.val() && (t[n.attr("name")] = n.val())
            }), t
        }
        var o = {
            isValidatedOf: e,
            getValidationClass: n,
            getValidationClassIngoreDirtry: t,
            resetForm: a,
            adapterValueForm: i
        };
        return o
    }
    angular.module("blocks.utils").factory("formValidator", e), e.$inject = []
}(),
function() {
    "use strict";

    function e(e) {
        return {
            set: function(n, t) {
                e.localStorage[n] = t
            },
            get: function(n, t) {
                return e.localStorage[n] || t
            },
            setObject: function(n, t) {
                e.localStorage[n] = angular.toJson(t)
            },
            getObject: function(n) {
                return JSON.parse(e.localStorage[n] || "[]")
            },
            destroy: function(n) {
                e.localStorage.removeItem(n)
            },
            log: function(n, t) {
                console.log(e.localStorage[n] || t)
            },
            logObject: function(n) {
                console.log(JSON.parse(e.localStorage[n] || "{}"))
            }
        }
    }
    angular.module("blocks.utils").factory("localStorage", e), e.$inject = ["$window"]
}(),
function() {
    "use strict";

    function e(e) {
        function n(e) {
            var n = parseFloat(e);
            return isNaN(n) ? 0 : n = Math.round(100 * e) / 100
        }
        var t = {
            decimal: n
        };
        return t
    }
    angular.module("blocks.utils").factory("NumberFormatter", e), e.$inject = []
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("passwordMatch", function() {
        return {
            restrict: "A",
            scope: !0,
            require: "ngModel",
            link: function(e, n, t, a) {
                var i = function() {
                    var n = e.$eval(t.ngModel),
                        a = e.$eval(t.passwordMatch);
                    return a == n
                };
                e.$watch(i, function(e) {
                    a.$setValidity("matched", e)
                })
            }
        }
    })
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("passwordValidate", function() {
        return {
            require: "ngModel",
            link: function(e, n, t, a) {
                a.$parsers.unshift(function(n) {
                    return e.pwdValidLength = n && n.length <= 20 && n.length >= 6 ? "valid" : void 0, e.pwdHasLetter = n && /[A-z]/.test(n) ? "valid" : void 0, e.pwdHasNumber = n && /\d/.test(n) ? "valid" : void 0, e.pwdValidLength && e.pwdHasLetter && e.pwdHasNumber ? (a.$setValidity("pwd", !0), n) : void a.$setValidity("pwd", !1)
                })
            }
        }
    })
}(),
function() {
    "use strict";

    function e(e, n, t) {
        var a = document.createElement("form");
        a.setAttribute("method", n), a.setAttribute("action", e);
        for (var o in t)
            if (i.call(t, o)) {
                var s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", o), s.setAttribute("value", t[o]), a.appendChild(s)
            }
        document.body.appendChild(a), a.submit()
    }

    function n(e, n, t) {
        "undefined" == typeof t && (t = !1);
        var a = [];
        for (var i in e)("bfb_wap" != n || "url" != i) && ("yeepay_wap" != n || "mode" != i) && a.push(i + "=" + (t ? encodeURIComponent(e[i]) : e[i]));
        return a.join("&")
    }

    function t(e, n, t, a) {
        function i(e, i) {
            var o = a.defer(),
                r = t.post(n + "api/member/order/pingxx", {
                    consultationId: e,
                    channel: i
                });
            return r.then(function(e) {
                s.createPayment(e, function(e, n) {
                    "success" == e ? o.resolve(e) : o.reject(n)
                })
            }, function(e) {
                o.reject(e)
            }), o.promise
        }
        var s = new o,
            r = {
                payment: i
            };
        return r
    }
    var a = "2.0.6",
        i = {}.hasOwnProperty,
        o = function() {},
        s = {
            PINGPP_NOTIFY_URL: "https://api.pingxx.com/notify/charges/",
            UPACP_WAP_URL: "https://gateway.95516.com/gateway/api/frontTransReq.do",
            ALIPAY_WAP_URL: "http://wappaygw.alipay.com/service/rest.htm",
            UPMP_WAP_URL: "uppay://uppayservice/?style=token&paydata=",
            JDPAY_WAP_URL: "https://m.jdpay.com/wepay/web/pay",
            BFB_SUCCESS: '<html><head><meta name="VIP_BFB_PAYMENT" content="BAIFUBAO"></head><body></body></html>',
            YEEPAY_WAP_URL: "https://ok.yeepay.com/paymobile/api/pay/request",
            YEEPAY_WAP_TEST_URL: "http://mobiletest.yeepay.com/paymobile/api/pay/request",
            PINGPP_MOCK_URL: "http://sissi.pingxx.com/mock.php"
        },
        r = {
            alipay_wap: "alipay_wap",
            upmp_wap: "upmp_wap",
            upacp_wap: "upacp_wap",
            bfb_wap: "bfb_wap",
            wx_pub: "wx_pub",
            yeepay_wap: "yeepay_wap",
            jdpay_wap: "jdpay_wap"
        };
    o.prototype = {
        version: a,
        _resultCallback: void 0,
        _jsApiParameters: {},
        _debug: !1,
        _signature: void 0,
        createPayment: function(t, a, o, l) {
            "function" == typeof a && (this._resultCallback = a), "undefined" != typeof o && (this._signature = o), "boolean" == typeof l && (this._debug = l);
            var c;
            if ("string" == typeof t) try {
                c = JSON.parse(t)
            } catch (u) {
                return void this._innerCallback("fail", this._error("json_decode_fail"))
            } else c = t;
            if ("undefined" == typeof c) return void this._innerCallback("fail", this._error("json_decode_fail"));
            if (!i.call(c, "id")) return void this._innerCallback("fail", this._error("invalid_charge", "no_charge_id"));
            if (!i.call(c, "channel")) return void this._innerCallback("fail", this._error("invalid_charge", "no_channel"));
            var p = c.channel;
            if (!i.call(c, "credential")) return void this._innerCallback("fail", this._error("invalid_charge", "no_credential"));
            if (!c.credential) return void this._innerCallback("fail", this._error("invalid_credential", "credential_is_undefined"));
            if (!i.call(r, p)) return void this._innerCallback("fail", this._error("invalid_charge", "no_such_channel:" + p));
            if (!i.call(c.credential, p)) return void this._innerCallback("fail", this._error("invalid_credential", "no_valid_channel_credential"));
            if (!i.call(c, "livemode")) return void this._innerCallback("fail", this._error("invalid_charge", "no_livemode"));
            if (0 == c.livemode) return void this._testModeNotify(c);
            var d = c.credential[p];
            if (p == r.upmp_wap) location.href = s.UPMP_WAP_URL + d.paydata;
            else if (p == r.upacp_wap) e(s.UPACP_WAP_URL, "post", d);
            else if (p == r.alipay_wap)
                if (d._input_charset = "utf-8", "undefined" != typeof _AP) {
                    var f = n(d, p, !0);
                    _AP.pay(s.ALIPAY_WAP_URL + "?" + f)
                } else e(s.ALIPAY_WAP_URL, "get", d);
            else if (p == r.bfb_wap) {
                if (!i.call(d, "url")) return void this._innerCallback("fail", this._error("invalid_credential", "missing_field:url"));
                location.href = d.url + "?" + n(d, p)
            } else if (p == r.yeepay_wap) {
                var m = ["merchantaccount", "encryptkey", "data"];
                for (var g in m)
                    if ("function" != typeof m[g] && !i.call(d, m[g])) return void this._innerCallback("fail", this._error("invalid_credential", "missing_field_" + m[g]));
                i.call(d, "mode") && "test" == d.mode ? location.href = s.YEEPAY_WAP_TEST_URL + "?" + n(d, p, !0) : location.href = s.YEEPAY_WAP_URL + "?" + n(d, p, !0)
            } else if (p == r.wx_pub) {
                var m = ["appId", "timeStamp", "nonceStr", "package", "signType", "paySign"];
                for (var g in m)
                    if ("function" != typeof m[g] && !i.call(d, m[g])) return void this._innerCallback("fail", this._error("invalid_credential", "missing_field_" + m[g]));
                this._jsApiParameters = d, this._callpay()
            } else p == r.jdpay_wap && e(s.JDPAY_WAP_URL, "post", d)
        },
        _jsApiCall: function() {
            var e = this;
            e._jsApiParameters != {} && WeixinJSBridge.invoke("getBrandWCPayRequest", e._jsApiParameters, function(n) {
                "get_brand_wcpay_request:ok" == n.err_msg ? e._innerCallback("success") : "get_brand_wcpay_request:cancel" == n.err_msg ? e._innerCallback("cancel") : e._innerCallback("fail", e._error("wx_result_fail", n.err_msg))
            })
        },
        _callpay: function() {
            var e = this;
            if ("undefined" != typeof wx && "undefined" != typeof e._signature) {
                var n = !1;
                wx.config({
                    debug: e._debug,
                    appId: e._jsApiParameters.appId,
                    timestamp: e._jsApiParameters.timeStamp,
                    nonceStr: e._jsApiParameters.nonceStr,
                    signature: e._signature,
                    jsApiList: ["chooseWXPay"]
                }), wx.ready(function() {
                    n || wx.chooseWXPay({
                        timestamp: e._jsApiParameters.timeStamp,
                        nonceStr: e._jsApiParameters.nonceStr,
                        "package": e._jsApiParameters["package"],
                        signType: e._jsApiParameters.signType,
                        paySign: e._jsApiParameters.paySign,
                        success: function(n) {
                            "chooseWXPay:ok" == n.errMsg ? e._innerCallback("success") : e._innerCallback("fail", e._error("wx_result_fail", n.errMsg))
                        },
                        cancel: function(n) {
                            e._innerCallback("cancel")
                        },
                        fail: function(n) {
                            e._innerCallback("fail", e._error("wx_result_fail", n.errMsg))
                        }
                    })
                }), wx.error(function(t) {
                    n = !0, e._innerCallback("fail", e._error("wx_config_error", t.errMsg))
                })
            } else "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", e._jsApiCall, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e._jsApiCall), document.attachEvent("onWeixinJSBridgeReady", e._jsApiCall)) : this._jsApiCall()
        },
        _error: function(e, n) {
            return e = "undefined" == typeof e ? "" : e, n = "undefined" == typeof n ? "" : n, {
                msg: e,
                extra: n
            }
        },
        _innerCallback: function(e, n) {
            "function" == typeof this._resultCallback && ("undefined" == typeof n && (n = this._error()), this._resultCallback(e, n))
        },
        _testModeNotify: function(e) {
            var t = this;
            if (e.channel == r.wx_pub) {
                var a = confirm("模拟付款？");
                if (a) {
                    var o = new XMLHttpRequest;
                    o.open("GET", s.PINGPP_NOTIFY_URL + e.id + "?livemode=false", !0), o.onload = function() {
                        if (o.status >= 200 && o.status < 400 && "success" == o.responseText) t._innerCallback("success");
                        else {
                            var e = "http_code:" + o.status + ";response:" + o.responseText;
                            t._innerCallback("fail", t._error("testmode_notify_fail", e))
                        }
                    }, o.onerror = function() {
                        t._innerCallback("fail", t._error("network_err"))
                    }, o.send()
                } else t._innerCallback("cancel")
            } else {
                var l = {
                    ch_id: e.id,
                    scheme: "http",
                    channel: e.channel
                };
                i.call(e, "order_no") && (l.order_no = e.order_no), i.call(e, "extra") && (l.extra = encodeURIComponent(JSON.stringify(e.extra))), location.href = s.PINGPP_MOCK_URL + "?" + n(l)
            }
        }
    }, angular.module("blocks.utils").factory("PingppService", t), t.$inject = ["$http", "SERVER_API_URL", "restfulHelper", "$q"]
}(),
function() {
    "use strict";

    function e(e) {
        return function(n) {
            if (!n) return e.trustAsHtml("");
            var t = n.replace(/(\r\n|\r|\n)/g, "<br/>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;").replace(/ /g, "&nbsp;");
            return e.trustAsHtml(t)
        }
    }
    angular.module("blocks.utils").filter("rawHtml", e), e.$inject = ["$sce"]
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("selectpicker", ["$parse", function(e) {
        return {
            restrict: "A",
            scope: {
                model: "=ngModel"
            },
            link: function(e, n, t) {
                n.selectpicker(), e.$watch("model", function() {
                    n.selectpicker("val", e.model)
                })
            }
        }
    }])
}(),
function() {
    "use strict";

    function e() {
        function e() {
            function e(e) {
                n(e) || i.push(e)
            }

            function n(e) {
                for (var n = 0; n < i.length; n++)
                    if (i[n] == e) return !0;
                return !1
            }

            function t() {
                return i
            }

            function a() {
                return i.length
            }
            var i = [],
                o = {
                    add: e,
                    values: t,
                    size: a,
                    contains: n
                };
            return o
        }
        var n = {
            create: e
        };
        return n
    }

    function n() {
        function e() {
            function e() {
                return null == i || 0 == i.length
            }

            function n() {
                return i.length
            }

            function t(e) {
                i.push(e)
            }

            function a() {
                return e() ? null : i.shift()
            }
            var i = [],
                o = {
                    isEmpty: e,
                    size: n,
                    add: t,
                    pop: a
                };
            return o
        }
        var n = {
            create: e
        };
        return n
    }

    function t() {
        function e() {
            function e() {
                return 0 == s
            }

            function n() {
                return s
            }

            function t(e) {
                return r[e] ? !0 : !1
            }

            function a(e, n) {
                r[e] = n
            }

            function i(e) {
                return t(e) ? r[e] : null
            }

            function o(e) {
                t(e) && delete r[e]
            }
            var s = 0,
                r = {},
                l = {
                    isEmpty: e,
                    size: n,
                    contains: t,
                    put: a,
                    get: i,
                    remove: o
                };
            return l
        }
        var n = {
            create: e
        };
        return n
    }
    angular.module("blocks.utils").factory("Set", e), e.$inject = [], angular.module("blocks.utils").factory("Queue", n), n.$inject = [], angular.module("blocks.utils").factory("Map", t), t.$inject = []
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("spinner", [function() {
        return {
            restrict: "A",
            replace: !0,
            scope: {
                spinner: "=spinner"
            },
            template: '<div class="spinner" ng-show="spinner">  <div class="rect1"></div>  <div class="rect2"></div>  <div class="rect3"></div>  <div class="rect4"></div>  <div class="rect5"></div></div>'
        }
    }])
}(),
function() {
    "use strict";

    function e() {
        function e(e) {
            function n(e) {
                o = e || 1
            }

            function t() {
                return 1 == o
            }

            function a() {
                return 2 == o
            }

            function i() {
                o = t() ? 2 : 1
            }
            var o = null;
            n(e);
            var e = {
                isOn: t,
                isOff: a,
                "switch": i,
                reset: n
            };
            return e
        }
        var n = {
            create: e
        };
        return n
    }
    angular.module("blocks.utils").factory("StatusFactory", e), e.$inject = []
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("tags", ["$parse", function(e) {
        return {
            restrict: "A",
            scope: {
                model: "=ngModel"
            },
            link: function(e, n, t) {
                n.tagsinput({
                    confirmKeys: [13, 32],
                    maxTags: t.maxTags || 8,
                    maxChars: t.maxChars || 14
                }), e.$watch("model", function() {
                    if (e.model) {
                        var t = angular.isArray(e.model) ? e.model : e.model.split(",");
                        n.tagsinput("removeAll"), n.tagsinput("refresh");
                        for (var a = 0; a < t.length; a++) n.tagsinput("add", t[a])
                    }
                }, !0)
            }
        }
    }])
}(),
function() {
    "use strict";

    function e(e) {
        function n(n) {
            return e.localStorage.setItem(i, n)
        }

        function t() {
            return e.localStorage.getItem(i)
        }

        function a() {
            return e.localStorage.removeItem(i)
        }
        var i = "auth_token",
            o = {
                store: n,
                retrieve: t,
                clear: a
            };
        return o
    }
    angular.module("blocks.utils").factory("tokenStorage", e), e.$inject = ["$window"]
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("wordCount", ["$parse", function(e) {
        return {
            restrict: "A",
            link: function(n, t, a) {
                e(a.wordCount).assign(n, 0), t.bind("keydown", function() {
                    var i = t.val();
                    e(a.wordCount).assign(n, i ? i.length : 0)
                }), t.bind("change", function() {
                    var i = t.val();
                    e(a.wordCount).assign(n, i ? i.length : 0)
                }), n.$watch(a.ngModel, function(t) {
                    e(a.wordCount).assign(n, t ? t.length : 0)
                })
            }
        }
    }])
}(),
function() {
    "use strict";
    angular.module("blocks.utils").directive("wordHeight", ["$compile", function(e) {
        return {
            restrict: "A",
            link: function(e, n, t) {
                var a = parseInt(t.wordHeight),
                    i = n.height();
                if (i > a) {
                    var o = a / i >= .8;
                    o || (n.height(parseInt(t.wordHeight)), n.parent().append('<button class="btn-simple toggle-content btn-word-height">展开</button>'), n.parent().find(".btn-word-height").click(function() {
                        n.height(i), n.parent().find(".btn-word-height").hide()
                    }))
                }
            }
        }
    }])
}(),
function() {
    "use strict";
    var e = angular.module("app.core"),
        n = {
            appTitle: "8dianhou"
        };
    e.value("config", n)
}(),
function() {
    "use strict";
    angular.module("app.core").constant("SERVER_API_URL", "http://www.8dianhou.com/").constant("QINIU_URL", "http://public.8dianhou.com").constant("QINIU_UPLOAD_URL", "http://upload.qiniu.com")
}(),
function() {
    "use strict";

    function e(e) {}
    angular.module("app.core").run(e), e.$inject = ["routerHelper"]
}(),
function() {
    "use strice";
    angular.module("app.gatracking").directive("ga", ["GatrackingService", function(e) {
        return {
            restrict: "A",
            scope: {
                cat: "@gaCat",
                act: "@gaAct"
            },
            link: function(n, t, a) {
                e.ga(n.cat)
            }
        }
    }])
}(),
function() {
    "use strice";

    function e(e) {
        function n(e, n) {
            try {
                ga("send", "event", e, n)
            } catch (t) {
                console.log(t)
            }
        }
        var t = {
            ga: n
        };
        return t
    }
    angular.module("app.gatracking").factory("GatrackingService", e), e.$inject = ["authService"]
}(),
function() {
    "use strict";

    function e(e, n, t) {
        function a(e, a, i) {
            e = e || "", a = a || angular.noop, t.userIsLoggedIn().then(function(t) {
                if (t) a(!0);
                else {
                    i && i.modal("hide");
                    n.open({
                        animation: !0,
                        templateUrl: "app/security/auth.html",
                        controller: "AuthController",
                        controllerAs: "vm",
                        size: "small",
                        resolve: {
                            title: function() {
                                return e
                            },
                            successCallBack: function() {
                                return a
                            }
                        }
                    })
                }
            })
        }

        function i(e) {
            e = e || angular.noop;
            n.open({
                animation: !0,
                templateUrl: "app/security/match-password.html",
                controller: "MatchPasswordController",
                controllerAs: "vm",
                size: "small",
                backdrop: "static",
                resolve: {
                    successCallBack: function() {
                        return e
                    }
                }
            })
        }
        var o = {
            show: a,
            showPassword: i
        };
        return o
    }
    angular.module("app.security").factory("authModal", e), e.$inject = ["$q", "$modal", "authService"]
}(),
function() {
    "use strict";

    function e() {
        function e(e, n, t, a, i, o, s) {
            function r(e) {
                return i.jsonp(s + "api/user/verify_phone", {
                    phone: e
                })
            }

            function l(e, n) {
                return i.post(s + "api/phone/verify", {
                    countryCode: e,
                    phone: n
                })
            }

            function c() {
                var e = t.defer();
                return i.get(s + "api/is-signined").then(function(n, t) {
                    e.resolve(n)
                }, function() {
                    e.resolve(!1)
                }), e.promise
            }

            function u(e) {
                var n = t.defer();
                return i.post(s + "api/user/authentication", e, {}, {}, !0).then(function(e, t, a) {
                    n.resolve(!0)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            }

            function p(e) {
                var n = t.defer(),
                    a = {
                        phoneNumber: e.phone,
                        code: e.verifyCode,
                        username: e.email,
                        fullName: e.fullName,
                        password: e.password,
                        countryCode: e.countryCode ? e.countryCode : ""
                    };
                return i.post(s + "api/signup", a).then(function(e) {
                    n.resolve(e)
                }, function(e) {
                    n.reject(e)
                }), n.promise
            }

            function d() {
                return i.get(s + "api/is-signined-lead")
            }

            function f(e) {
                var a = t.defer();
                return n.jsonp(s + "user/retrieve_password/?user_login=" + e + "&callback=JSON_CALLBACK").success(function(e) {
                    a.resolve(e)
                }).error(function(e) {
                    a.reject(e)
                }), a.promise
            }

            function m(e) {
                return i.post(s + "api/user/match-password", {
                    password: e
                })
            }

            function g() {}

            function v(e) {
                return i.post(s + "api/user/completed", e)
            }

            function h(e) {
                return i.post(s + "api/user/signin", e)
            }
            var b = {
                verifyPhone: r,
                verifyPhone2: l,
                userIsLoggedIn: c,
                userIsLoggedInForLead: d,
                doLogin: u,
                doRegister: p,
                doForgotPassword: f,
                logOut: g,
                matchPassword: m,
                completedUser: v,
                completedUserAndSignin: h
            };
            return b
        }
        this.$get = e, e.$inject = ["$rootScope", "$http", "$q", "localStorage", "restfulHelper", "tokenStorage", "SERVER_API_URL"]
    }
    angular.module("app.security").provider("authService", e), e.$inject = []
}(),
function() {
    "use strict";

    function e(e, n, t, a, i, o) {
        function s(e) {
            return m == e
        }

        function r() {
            m = "signin" == m ? "signup" : "signin"
        }

        function l() {
            e.dismiss("cancel")
        }

        function c() {
            f.user = {}
        }

        function u() {
            var n = {
                username: f.user.userName,
                password: f.user.password
            };
            o.doLogin(n).then(function(n) {
                t(), e.dismiss("cancel")
            }, function(e) {
                f.loginError = e
            })
        }

        function p() {
            var e = f.signupUser.phoneNumber || "";
            if (0 !== e.length) o.verifyPhone(e).then(function(e) {}, function(e) {});
            else;
        }

        function d() {
            var n = {
                phone: f.signupUser.phoneNumber,
                verifyCode: f.signupUser.code,
                email: f.signupUser.username,
                fullName: f.signupUser.fullName,
                password: f.signupUser.password
            };
            o.doRegister(n).then(function(n) {
                t(), e.dismiss("cancel")
            }, function(e) {
                f.signupError = e
            })
        }
        var f = this,
            m = "signin";
        f.currentState = s, f.switchState = r, f.title = n, f.cancel = l, f.user = {}, f.signupUser = {
            countryCode: "cn"
        }, f.formValidator = i, f.loginError = !1, f.signupError = !1, f.doLogin = u, f.doSignup = d, f.doVerifyPhone = p, f.closeLogin = c, f.sendMsnBtnMessage = "发送"
    }
    angular.module("app.security").controller("AuthController", e), e.$inject = ["$modalInstance", "title", "successCallBack", "$state", "formValidator", "authService"]
}(),
function() {
    "use strict";

    function e(e, n, t, a, i, o, s) {
        function r() {
            u = !0, f = 60, l.btnMessage = f + "s";
            var e = t(function() {
                1 == f ? (u = !1, t.cancel(e), l.btnMessage = "获取验证码") : (f -= 1, l.btnMessage = f + "s")
            }, 1e3)
        }
        var l = this,
            c = !0,
            u = !1,
            p = !1,
            d = !1;
        l.formValidator = n, l.user = {
            countryCode: "cn"
        }, l.user2 = {
            countryCode: "cn"
        }, l.cancel2 = function() {
            i.dismiss("cancel")
        }, l.isFinished = function() {
            return c
        }, l.isMigrated = function() {
            return !c
        }, l.activeFinished = function() {
            c = !0
        }, l.activeMigrated = function() {
            c = !1, p && (l.user2.countryCode = l.user.countryCode || "", l.user2.phoneNumber = l.user.phoneNumber || "")
        }, l.url = function(e) {
            return s + e
        }, l.sendVerifyPhone = function() {
            p = !1, d = !1;
            var e = a.verifyPhone2(l.user.countryCode, l.user.phoneNumber);
            e.then(function() {
                r()
            }, function(e) {
                (e = "已验证过的手机") ? p = !0: d = e
            })
        }, l.submitCompletedUser = function() {
            l.completedError = null;
            var e = a.completedUser(l.user);
            e.then(function() {
                i.close(), o()
            }, function(e) {
                l.completedUser = e
            })
        }, l.submitCompletedUserSignin = function() {
            l.completedSigninError = null;
            var e = a.completedUserAndSignin(l.user2);
            e.then(function() {
                i.close(), o()
            }, function(e) {
                l.completedSigninError = e
            })
        }, l.isUniquedPhone = function() {
            return p
        }, l.getCodeErrorMessage = function() {
            return d
        }, l.isSendVerifyPhone = function() {
            return u ? !1 : l.user && l.user.countryCode && l.user.phoneNumber
        }, l.isRequiredCountryError = function() {
            return l.user && !l.user.countryCode
        }, l.isRequiredCountryError2 = function() {
            return l.user2 && !l.user2.countryCode
        }, l.initFinishedForm = function(e) {
            l.user = l.formValidator.adapterValueForm(e)
        }, l.initMigrateForm = function(e) {
            l.user2 = l.formValidator.adapterValueForm(e)
        }, l.initActivePanel = function(e) {
            c = e
        };
        var f = 60;
        l.btnMessage = "获取验证码"
    }
    angular.module("app.security").controller("CompletedController", e), e.$inject = ["$scope", "formValidator", "$interval", "authService", "$modalInstance", "success", "SERVER_API_URL"]
}(),
function() {
    "use strict";

    function e(e, n, t, a, i, o, s, r, l) {
        function c() {
            f = !0, m = 60, u.btnMessage = m + "s";
            var e = r(function() {
                1 == m ? (f = !1, r.cancel(e), u.btnMessage = "获取验证码") : (m -= 1, u.btnMessage = m + "s")
            }, 1e3)
        }
        var u = this,
            p = t,
            d = null,
            f = !1;
        u.formValidator = s, u.signupUser = {
            countryCode: "cn"
        }, u.cancel = function() {
            n.dismiss("cancel")
        }, u.isActiveSignin = function() {
            return p
        }, u.isActiveSignup = function() {
            return !p
        }, u.activeSignin = function() {
            p = !0
        }, u.activeSignup = function() {
            p = !1
        }, u.url = function(e) {
            return i + e
        }, u.signinThreePartySubmit = function(e) {
            var n = angular.element(e.target),
                t = n.attr("action"),
                a = i + t;
            a = a.lastIndexOf("?") > -1 ? a + "&ourl=" + l.absUrl() : a + "?ourl=" + l.absUrl(), n.attr("action", a), n.submit()
        }, u.signinSubmit = function() {
            var e = {
                username: u.user.userName,
                password: u.user.password
            };
            a.doLogin(e).then(function(e) {
                n.close(e), o(e)
            }, function(e) {
                u.loginError = e
            })
        }, u.signupSubmit = function() {
            var e = u.signupUser;
            a.doRegister(e).then(function(t) {
                n.close(t), o(e)
            }, function(e) {
                u.registerError = e
            })
        }, u.sendVerifyPhone = function() {
            d = !1;
            var e = a.verifyPhone2(u.signupUser.countryCode, u.signupUser.phone);
            e.then(function() {
                c()
            }, function(e) {
                d = e
            })
        }, u.isRequiredCountryError = function() {
            return u.signupUser && !u.signupUser.countryCode
        }, u.isSendVerifyPhone = function() {
            return f ? !1 : u.signupUser && u.signupUser.countryCode && u.signupUser.phone
        }, u.getCodeErrorMessage = function() {
            return d
        };
        var m = 60;
        u.btnMessage = "获取验证码"
    }
    angular.module("app.security").controller("LoginController", e), e.$inject = ["$scope", "$modalInstance", "signin", "authService", "SERVER_API_URL", "success", "formValidator", "$interval", "$location"]
}(),
function() {
    "use strict";

    function e(e, n, t) {
        function a(e, n) {
            o(!0, e, n)
        }

        function i(e, n) {
            o(!1, e, n)
        }

        function o(t, a, i) {
            a = a || angular.noop, i = i || angular.noop, n.userIsLoggedIn().then(function(n) {
                if (n) a(!0);
                else {
                    var o = e.open({
                        animation: !0,
                        templateUrl: "app/security/login.html",
                        controller: "LoginController",
                        controllerAs: "vm",
                        size: "small",
                        resolve: {
                            signin: function() {
                                return t
                            },
                            success: function() {
                                return a
                            }
                        }
                    });
                    o.result.then(function() {}, function(e) {
                        i(e)
                    })
                }
            })
        }

        function s(n, t) {
            t = t || angular.noop;
            e.open({
                animation: !0,
                templateUrl: "app/security/login.html",
                controller: "LoginController",
                controllerAs: "vm",
                size: "small",
                resolve: {
                    signin: function() {
                        return n
                    },
                    success: function() {
                        return t
                    }
                }
            })
        }

        function r(e) {
            e = e || angular.noop;
            var n = l();
            n.then(function() {
                e()
            }, function() {
                s(!0, function() {
                    var n = l();
                    n.then(function() {
                        e()
                    })
                })
            })
        }

        function l() {
            var e = t.defer();
            return n.userIsLoggedInForLead().then(function(n) {
                n.isUserLoggedin && n.isUserLead ? c(function() {
                    e.resolve({})
                }) : n.isUserLoggedin ? e.resolve({}) : e.reject()
            }, function() {
                e.reject()
            }), e.promise
        }

        function c(n) {
            n = n || angular.noop;
            e.open({
                animation: !0,
                templateUrl: "app/security/completed.html",
                controller: "CompletedController",
                controllerAs: "vm",
                size: "lg",
                backdrop: "static",
                resolve: {
                    success: function() {
                        return n
                    }
                }
            })
        }
        var u = {
            show: s,
            login: o,
            flow: r,
            signin: a,
            signup: i
        };
        return u
    }
    angular.module("app.security").factory("LoginHelper", e), e.$inject = ["$modal", "authService", "$q"]
}(),
function() {
    "use strict";

    function e(e, n, t, a) {
        var i = this;
        i.cancel = function() {
            e.dismiss("cancel")
        }, i.submit = function() {
            i.passwordError = !1;
            var t = a.matchPassword(i.password);
            t.then(function(t) {
                t ? (n(t), e.close()) : i.passwordError = !0
            }, function() {
                i.passwordError = !0
            })
        }
    }
    angular.module("app.security").controller("MatchPasswordController", e), e.$inject = ["$modalInstance", "successCallBack", "formValidator", "authService"]
}(),
function() {
    "use strict";
    angular.module("app.weibo").directive("weiboShare", ["$location", "SERVER_API_URL", function(e, n) {
        return {
            restrict: "A",
            scope: {
                url: "@weiboShare",
                title: "@wbTitle",
                pic: "@wbPic"
            },
            link: function(t, a, i) {
                var o = t.url ? n + t.url : e.absUrl(),
                    s = t.title ? t.title : i.title,
                    r = n + "share/weibo?url=" + encodeURIComponent(o) + "&title=" + encodeURIComponent(s);
                t.pic && (r += "&pic=" + encodeURIComponent(t.pic)), a.attr("href", r), a.attr("target", "_blank")
            }
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app.weixin").directive("wxMenuShare", ["WeixinService", "$location", function(e, n) {
        return {
            restrict: "A",
            scope: {
                title: "@wxTitle",
                title2: "@wxTitle2",
                imageUrl: "@wxImgUrl",
                desc: "@wxDesc"
            },
            link: function(t, a, i) {
                t.title && e.share(t.title, n.absUrl(), t.imageUrl, t.desc, t.title2)
            }
        }
    }])
}(),
function() {
    "use strict";
    angular.module("app.weixin").directive("wxShare", ["$location", "SERVER_API_URL", function(e, n) {
        return {
            restrict: "A",
            scope: {
                type: "@wxShare",
                imageId: "@wxShareId"
            },
            template: '<span class="qr-code"><img ng-src="{{imageUrl}}"></span>',
            link: function(e, t, a) {
                e.imageUrl = n + "api/qrcode/" + e.type + "/" + e.imageId
            }
        }
    }])
}(),
function() {
    "use strict";

    function e(e, n, t, a) {
        function i() {
            var e = angular.element("#weixin_title").val(),
                n = angular.element("#weixin_img_url").val(),
                t = angular.element("#weixin_desc").val();
            e && o(e, a.absUrl(), n, t)
        }

        function o(e, n, a, i, o) {
            var r = t.defer(),
                l = s(n);
            return l.then(function(t) {
                wx.config({
                    debug: !1,
                    appId: t.appId,
                    timestamp: t.timestamp,
                    nonceStr: t.nonceStr,
                    signature: t.signature,
                    jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage"]
                }), wx.ready(function() {
                    wx.onMenuShareTimeline({
                        title: o || e,
                        link: n,
                        imgUrl: a,
                        success: function(e) {
                            r.resolve(e)
                        },
                        cancel: function(e) {
                            r.reject(e)
                        },
                        fail: function(e) {
                            r.reject(e)
                        }
                    }), wx.onMenuShareAppMessage({
                        title: e,
                        desc: i || "",
                        link: n,
                        imgUrl: a,
                        success: function() {
                            r.resolve(res)
                        },
                        cancel: function() {
                            r.reject(res)
                        }
                    })
                })
            }), r.promise
        }

        function s(t) {
            return e.post(n + "api/weixin/generate-config", {
                url: t
            })
        }
        var r = {
            share: o,
            autoShare: i
        };
        return r
    }
    angular.module("app.weixin").factory("WeixinService", e), e.$inject = ["restfulHelper", "SERVER_API_URL", "$q", "$location"]
}(), angular.module("app.core").run(["$templateCache", function(e) {
    e.put("app/security/auth.html", "<div class=\"modal-body no-padding tab-container\"><div class=\"row tab-header\" ng-class=\"vm.currentState('signin') ? 'active' : ''\"><div class=\"col-xs-6 text-left\"><p>登录8点后</p></div></div><p>{{vm.title}}</p><div id=signin-tab class=tab-content ng-class=\"vm.currentState('signin') ? 'active' : ''\"><div ng-include=\"'app/security/signin.html'\"></div></div><div id=signup-tab class=tab-content ng-class=\"vm.currentState('signup') ? 'active' : ''\"><div ng-include=\"'app/security/signup.html'\"></div></div></div>"), e.put("app/security/completed.html", '<div class="modal-content modal-login"><div class=modal-header><button type=button class=close ng-click=vm.cancel2()></button><h4 class="modal-title text-center" id=myModalLabel>完善信息</h4><ul class="nav nav-tabs" role=tablist><li class=col-xs-6 ng-class="{active : vm.isFinished()}"><a ng-click=vm.activeFinished()>新用户，补充信息</a></li><li class=col-xs-6 ng-class="{active : vm.isMigrated()}"><a ng-click=vm.activeMigrated()>已有账号，立即绑定</a></li></ul></div><div class=modal-body><div class=tab-content><div role=tabpanel class=tab-pane ng-class="{active : vm.isFinished()}" id=completeInfo><form name=signupForm method=post class=no-padding ng-submit=vm.submitCompletedUser() novalidate><fieldset><div class=row><section class=col-xs-5><select data-style=btn-nax id=countryCode name=countryCode ng-model=vm.user.countryCode class=form-control selectpicker><option value>选择国家码</option><option class="fa-nax fa-CN" value=cn>中国(+86)</option><option class="fa-nax fa-US" value=us>美国(+1)</option><option class="fa-nax fa-CA" value=ca>加拿大(+1)</option><option class="fa-nax fa-UK" value=uk>英国(+44)</option><option class="fa-nax fa-AU" value=au>澳大利亚(+61)</option><option class="fa-nax fa-GE" value=ge>德国(+49)</option><option class="fa-nax fa-FR" value=fr>法国(+33)</option><option class="fa-nax fa-JP" value=jp>日本(+81)</option><option class="fa-nax fa-HK" value=hk>香港(+852)</option><option class="fa-nax fa-SI" value=si>新加坡(+65)</option><option class="fa-nax fa-TW" value=tw>台湾(+886)</option><option class="fa-nax fa-NE" value=ne>新西兰(+64)</option><option class="fa-nax fa-KO" value=ko>韩国(+82)</option><option class="fa-nax fa-IR" value=ir>爱尔兰(+353)</option><option class="fa-nax fa-HO" value=ho>荷兰(+31)</option></select></section><section class=col-xs-7><label><input class=form-control type=text id=phoneNumber maxlength=11 name=phoneNumber ng-model=vm.user.phoneNumber placeholder=手机号 required></label></section><em class="col-xs-12 error-line-message"><span ng-show=vm.isRequiredCountryError()>请选择国家</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.phoneNumber, \'required\')">请输入电话号码</span></em></div><div class=row><section class=col-xs-8><label><span><i class="icon-append fa fa-qrcode"></i></span> <input class=form-control type=text name=code ng-model=vm.user.code placeholder=验证码 required></label></section><section class=col-xs-3><button type=button class="btn btn-liang ng-cloak" ng-disabled=!vm.isSendVerifyPhone() ng-click=vm.sendVerifyPhone() style="width: 85px;">{{vm.btnMessage}}</button></section><em class="col-xs-12 error-line-message"><span ng-show="vm.formValidator.isValidatedOf(signupForm.code, \'required\')">请输入验证码</span> <span ng-show=vm.getCodeErrorMessage()>{{vm.getCodeErrorMessage()}}</span> <span ng-show=vm.isUniquedPhone()>已验证过的手机，请尝试 <a ng-click=vm.activeMigrated()>绑定帐号</a></span></em></div><section><label><span><i class="icon-append fa fa-envelope"></i></span> <input class=form-control type=email name=email ng-model=vm.user.email required placeholder=邮箱(必须)> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.email, \'required\')">请输入有效邮箱</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.email, \'email\')">请输入有效邮箱</span></em></label></section><section><label><span><i class="icon-append fa fa-lock"></i></span> <input class=form-control type=password ng-model=vm.user.password id=password required ng-minlength=6 name=password placeholder="密码 (至少 6 个字符)"> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.password, \'required\')">请输入密码</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.password , \'minlength\')">密码长度不够</span></em></label></section></fieldset><section class=text-center><button type=submit class="btn btn-liang form-control" id=signup-link ng-disabled=signupForm.$invalid>提交</button> <em class="col-xs-12 error-line-message"><span ng-show=vm.completedError>{{vm.completedError}}</span></em></section></form></div><div role=tabpanel class=tab-pane ng-class="{active : vm.isMigrated()}"><form name=signinForm method=post class=no-padding ng-submit=vm.submitCompletedUserSignin() novalidate><fieldset><div class=row><section class=col-xs-5><select data-style=btn-nax name=countryCode ng-model=vm.user2.countryCode class=form-control selectpicker><option value>选择国家码</option><option class="fa-nax fa-CN" value=cn>中国(+86)</option><option class="fa-nax fa-US" value=us>美国(+1)</option><option class="fa-nax fa-CA" value=ca>加拿大(+1)</option><option class="fa-nax fa-UK" value=uk>英国(+44)</option><option class="fa-nax fa-AU" value=au>澳大利亚(+61)</option><option class="fa-nax fa-GE" value=ge>德国(+49)</option><option class="fa-nax fa-FR" value=fr>法国(+33)</option><option class="fa-nax fa-JP" value=jp>日本(+81)</option><option class="fa-nax fa-HK" value=hk>香港(+852)</option><option class="fa-nax fa-SI" value=si>新加坡(+65)</option><option class="fa-nax fa-TW" value=tw>台湾(+886)</option><option class="fa-nax fa-NE" value=ne>新西兰(+64)</option><option class="fa-nax fa-KO" value=ko>韩国(+82)</option><option class="fa-nax fa-IR" value=ir>爱尔兰(+353)</option><option class="fa-nax fa-HO" value=ho>荷兰(+31)</option></select></section><section class=col-xs-7><label><input class=form-control type=text id=phoneNumber name=phoneNumber ng-model=vm.user2.phoneNumber placeholder=手机号 required></label></section><em class="col-xs-12 error-line-message"><span ng-show=vm.isRequiredCountryError2()>请选择国家</span> <span ng-show="vm.formValidator.isValidatedOf(signinForm.phoneNumber, \'required\')">请输入电话号码</span></em></div><section><label><span><i class="icon-append fa fa-lock"></i></span> <input type=password class=form-control name=password ng-model=vm.user2.password placeholder=密码 required> <em><span ng-show="vm.formValidator.isValidatedOf(signinForm.password, \'required\')" class=ng-hide>请输入密码</span></em> <a href=# ng-href="{{vm.url(\'request-password-reset\')}}" class=pull-right target=_self>忘记密码</a></label></section></fieldset><section class=text-center><button type=submit class="btn btn-liang form-control" id=signup-link ng-disabled=signinForm.$invalid>绑定账号</button> <em class="col-xs-12 error-line-message"><span ng-show=vm.completedSigninError>{{vm.completedSigninError}}</span></em></section></form></div></div></div></div>'), e.put("app/security/login.html", '<div class="modal-content modal-login"><div class=modal-header><button type=button class=close ng-click=vm.cancel()></button><h4 class="modal-title text-center" id=myModalLabel>「在线一对一，经验分享」</h4><ul class="nav nav-tabs" role=tablist><li class=col-xs-6 ng-class="{active: vm.isActiveSignin()}"><a href=javascript:void(0); ng-click=vm.activeSignin()>登录</a></li><li class=col-xs-6 ng-class="{active: vm.isActiveSignup()}"><a href=javascript:void(0); ng-click=vm.activeSignup()>注册</a></li></ul></div><div class=modal-body><div class=tab-content><div role=tabpanel class=tab-pane ng-class="{active : vm.isActiveSignin()}"><form method=POST name=signinForm ng-submit=vm.signinSubmit() novalidate><fieldset><section><label><span><i class="icon-append fa fa-user"></i></span> <input type=text name=username class=form-control placeholder=用户名/手机号 ng-model=vm.user.userName required> <em><span ng-show="vm.formValidator.isValidatedOf(signinForm.username, \'required\')">请输入登录名</span></em></label></section><section><label><span><i class="icon-append fa fa-lock"></i></span> <input type=password class=form-control name=password ng-model=vm.user.password placeholder=密码 required> <em><span ng-show="vm.formValidator.isValidatedOf(signinForm.password, \'required\')">请输入密码</span></em> <a href=# ng-href="{{vm.url(\'request-password-reset\')}}" class=pull-right>忘记密码</a></label></section><div class=row><div class="col-xs-12 text-center"><button type=submit class="form-control btn btn-liang" id=signin-link ng-disabled=signinForm.$invalid>登录</button></div></div><p ng-show=vm.loginError class="message error btn-danger">{{vm.loginError}}</p></fieldset></form><div class=modal-footer><span class=footer-header>第三方账号登录</span><div class="row text-center"><form class=form-wechat name=li_signin action=signin/weixin th:action=@{/signin/weixin} method=POST ng-submit=vm.signinThreePartySubmit($event)><button type=submit><i class="fa fa-wechat"></i></button></form><form class=form-weibo name=li_signin action=signin/weibo th:action=@{/signin/weibo} method=POST target=_self ng-submit=vm.signinThreePartySubmit($event)><button type=submit><i class="fa fa-weibo"></i></button></form></div></div></div><div role=tabpanel class=tab-pane ng-class="{active : vm.isActiveSignup()}"><form name=signupForm novalidate ng-submit=vm.signupSubmit() class=no-padding method=post><fieldset><div class=row><section class=col-xs-5><select data-style=btn-nax ng-model=vm.signupUser.countryCode name=countryCode class=form-control selectpicker><option value>选择国家码</option><option class="fa-nax fa-CN" value=cn>中国(+86)</option><option class="fa-nax fa-US" value=us>美国(+1)</option><option class="fa-nax fa-CA" value=ca>加拿大(+1)</option><option class="fa-nax fa-UK" value=uk>英国(+44)</option><option class="fa-nax fa-AU" value=au>澳大利亚(+61)</option><option class="fa-nax fa-GE" value=ge>德国(+49)</option><option class="fa-nax fa-FR" value=fr>法国(+33)</option><option class="fa-nax fa-JP" value=jp>日本(+81)</option><option class="fa-nax fa-HK" value=hk>香港(+852)</option><option class="fa-nax fa-SI" value=si>新加坡(+65)</option><option class="fa-nax fa-TW" value=tw>台湾(+886)</option><option class="fa-nax fa-NE" value=ne>新西兰(+64)</option><option class="fa-nax fa-KO" value=ko>韩国(+82)</option><option class="fa-nax fa-IR" value=ir>爱尔兰(+353)</option><option class="fa-nax fa-HO" value=ho>荷兰(+31)</option></select></section><section class=col-xs-7><label ng-class=vm.formValidator.getValidationClass(signupForm.phone)><input class=form-control type=text ng-model=vm.signupUser.phone name=phone placeholder=手机号 ng-maxlength=11 required></label></section><em class="col-xs-12 error-line-message"><span ng-show=vm.isRequiredCountryError()>请选择国家</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.phone, \'required\')">请输入电话号码</span></em></div><div class=row><section class=col-xs-8><label><span><i class="icon-append fa fa-qrcode"></i></span> <input class=form-control type=text ng-model=vm.signupUser.verifyCode name=verifyCode placeholder=验证码 required></label></section><section class=col-xs-3><button type=button class="btn btn-liang ng-cloak" ng-disabled=!vm.isSendVerifyPhone() ng-click=vm.sendVerifyPhone() style="width: 95px;">{{vm.btnMessage}}</button></section><em class="col-xs-12 error-line-message"><span ng-show="vm.formValidator.isValidatedOf(signupForm.verifyCode, \'required\')">请输入验证码</span> <span ng-show=vm.getCodeErrorMessage()>{{vm.getCodeErrorMessage()}}</span></em></div><section><label><span><i class="icon-append fa fa-envelope"></i></span> <input class=form-control type=email name=email ng-model=vm.signupUser.email required placeholder=邮箱(必须)> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.email, \'required\')">请输入有效邮箱</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.email, \'email\')">请输入有效邮箱</span></em></label></section><section><label><span><i class="icon-append fa fa-lock"></i></span> <input class=form-control type=password ng-model=vm.signupUser.password required ng-minlength=6 name=password placeholder="密码 (至少 6 个字符)"> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.password, \'required\')">请输入密码</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.password , \'minlength\')">密码长度不够</span></em></label></section><section><label ng-class=vm.formValidator.getValidationClass(signupForm.fullName)><span><i class="icon-append fa fa-user"></i></span> <input class=form-control type=text ng-model=vm.signupUser.fullName name=fullName placeholder=姓名(必须) required> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.fullName, \'required\')">请输入姓名</span></em></label></section><section><p><i class="fa fa-check-circle-o"></i>我已阅读并同意遵守8点后用户协议和隐私条款</p></section></fieldset><section class=text-center><button type=submit class="btn btn-liang form-control" id=signup-link ng-disabled=signupForm.$invalid>注册</button><p ng-show=vm.registerError class="message error btn-danger">{{vm.registerError}}</p></section></form><div class=modal-footer><span class=footer-header>第三方账号登录</span><div class="row text-center"><form class=form-wechat name=li_signin action=signin/weixin th:action=@{/signin/weixin} method=POST ng-submit=vm.signinThreePartySubmit($event)><button type=submit><i class="fa fa-wechat"></i></button></form><form class=form-weibo name=li_signin action=signin/weibo th:action=@{/signin/weibo} method=POST target=_self ng-submit=vm.signinThreePartySubmit($event)><button type=submit><i class="fa fa-weibo"></i></button></form></div></div></div></div></div></div>'), e.put("app/security/match-password.html", '<div class="modal-body no-padding tab-container"><div class="row tab-header active"><div class="col-xs-6 text-left"><p>请输入密码</p></div></div><div id=signin-tab class="tab-content active"><form method=POST name=matchPasswordForm id=matchPasswordForm novalidate ng-submit=vm.submit()><fieldset><section><label><i class="icon-append fa fa-lock"></i> <input type=password class=form-control name=password ng-model=vm.password placeholder=密码 required> <b class="tooltip tooltip-top-right"><i class="fa fa-lock txt-color-teal"></i> 请输入密码</b></label> <em><span ng-show="vm.formValidator.isValidatedOf(matchPasswordForm.password, \'required\')" class=ng-hide>请输入密码</span></em></section><p ng-show=vm.passwordError class="message error btn-danger">密码错误!!</p><div class=row><div class="col-xs-6 text-left"><button type=submit class="btn btn-liang" id=signin-link ng-disabled=matchPasswordForm.$invalid>确定</button></div><div class="col-xs-6 text-right"><a class="btn btn-default left" ng-click=vm.cancel()>取消</a></div></div></fieldset></form></div></div>'), e.put("app/security/signin.html", '<form method=POST name=signinForm id=signinForm novalidate ng-submit=vm.doLogin()><fieldset><section><label><i class="icon-append fa fa-envelope"></i> <input type=text name=username class=form-control placeholder=用户名/手机号 ng-model=vm.user.userName required> <b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 请输入登录名</b></label> <em><span ng-show="vm.formValidator.isValidatedOf(signinForm.username, \'required\')" class>请输入登录名</span></em></section><section><label><i class="icon-append fa fa-lock"></i> <input type=password class=form-control name=password ng-model=vm.user.password placeholder=密码 required> <b class="tooltip tooltip-top-right"><i class="fa fa-lock txt-color-teal"></i> 请输入密码</b></label> <em><span ng-show="vm.formValidator.isValidatedOf(signinForm.password, \'required\')" class=ng-hide>请输入密码</span></em></section><p ng-show=vm.loginError class="message error btn-danger">{{vm.loginError}}</p><div class=row><div class="col-xs-6 text-left"><button type=submit class="btn btn-liang" id=signin-link ng-disabled=signinForm.$invalid>登录</button></div><div class="col-xs-6 text-right"><a class="btn btn-default left" ng-click=vm.cancel()>取消</a></div></div></fieldset></form>'), e.put("app/security/signup.html", '<form id=signup-form name=signupForm novalidate ng-submit=vm.doSignup() class=no-padding method=post><input type=hidden name=signupUrl th:value=@{/api/signup}><fieldset><section><label ng-class=vm.formValidator.getValidationClass(signupForm.username)><i class="icon-append fa fa-envelope"></i> <input class=form-control type=email name=username ng-model=vm.signupUser.username required placeholder=邮箱(必须)> <b class="tooltip tooltip-bottom-right">请输入有效邮箱</b></label> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.username, \'required\')">请输入有效邮箱</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.username, \'email\')">请输入有效邮箱</span></em></section><section><label ng-class=vm.formValidator.getValidationClass(signupForm.password)><i class="icon-append fa fa-lock"></i> <input class=form-control type=password ng-model=vm.signupUser.password required ng-minlength=6 name=password placeholder="密码 (至少 6 个字符)"> <b class="tooltip tooltip-bottom-right">请记住你的密码(不少于 6 个字符))</b></label> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.password, \'required\')">请输入密码</span> <span ng-show="vm.formValidator.isValidatedOf(signupForm.password , \'minlength\')">密码长度不够</span></em></section><section><label ng-class=vm.formValidator.getValidationClass(signupForm.fullName)><i class="icon-append fa fa-user"></i> <input class=form-control type=text ng-model=vm.signupUser.fullName name=fullName placeholder=姓名(必须) required> <b class="tooltip tooltip-bottom-right">我们尊重你的隐私，你的姓名将仅你自己可见。</b></label> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.fullName, \'required\')">请输入姓名</span></em></section><div class=row><section class=col-xs-4><label class=select ng-class=vm.formValidator.getValidationClass(signupForm.countryCode)><select tabindex=1 ng-model=vm.signupUser.countryCode placeholder=国家(必须) name=countryCode required><option class="fa-nax fa-CN" value=cn>中国(+86)</option><option class="fa-nax fa-US" value=us>美国(+86)</option><option class="fa-nax fa-CA" value=ca>加拿大(+86)</option><option class="fa-nax fa-UK" value=uk>英国(+86)</option><option class="fa-nax fa-AU" value=au>澳大利亚(+86)</option><option class="fa-nax fa-GE" value=ge>德国(+86)</option><option class="fa-nax fa-FR" value=fr>法国(+86)</option><option class="fa-nax fa-JP" value=jp>日本(+86)</option><option class="fa-nax fa-HK" value=hk>香港(+86)</option><option class="fa-nax fa-SI" value=si>新加坡(+86)</option><option class="fa-nax fa-TW" value=tw>台湾(+86)</option><option class="fa-nax fa-NE" value=ne>新西兰(+86)</option><option class="fa-nax fa-KO" value=ko>韩国(+86)</option><option class="fa-nax fa-IR" value=ir>爱尔兰(+86)</option><option class="fa-nax fa-HO" value=ho>荷兰(+86)</option></select><i></i></label> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.countryCode, \'required\')">请选择国家</span></em></section><section class=col-xs-8><label ng-class=vm.formValidator.getValidationClass(signupForm.phoneNumber)><i class="icon-append fa fa-mobile"></i> <input class=form-control type=text ng-model=vm.signupUser.phoneNumber name=phoneNumber placeholder=手机号 required></label> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.phoneNumber, \'required\')">请输入电话号码</span></em></section></div><div class=row><section class=col-xs-9><label ng-class=vm.formValidator.getValidationClass(signupForm.code)><i class="icon-append fa fa-qrcode"></i> <input class=form-control type=text ng-model=vm.signupUser.code name=code placeholder=验证码 required></label> <em><span ng-show="vm.formValidator.isValidatedOf(signupForm.code, \'required\')">请输入验证码</span></em></section><section class=col-xs-3><button type=button class="btn btn-liang ng-cloak" ng-disabled="vm.formValidator.isValidatedOf(signupForm.phoneNumber, \'required\', false)" ng-click=vm.doVerifyPhone() style="width: 85px;">{{vm.sendMsnBtnMessage}}</button></section></div><p ng-show=vm.signupError class="message error btn-danger">{{vm.signupError}}</p><section><label>*加入8点后即代表您同意8点后的用户协议、隐私权政策及 Cookie 政策</label></section></fieldset><section class=text-right><button type=submit class="btn btn-liang" id=signup-link ng-disabled=signupForm.$invalid>登录</button> <a class="btn btn-default" ng-click=vm.cancel()>取消</a></section></form>'), e.put("app/advisor-details/advisor-question.html", '<div class=modal-content><div class=modal-header><h4 ng-hide=vm.isSuccess() class="modal-title text-center" id=myModalLabel>向TA提问</h4><h4 ng-show=vm.isSuccess() class="modal-title text-center" id=myModalLabel>提交成功</h4><button type=button class=close ng-click=vm.cancel()></button></div><div class=modal-body><div ng-hide=vm.isSuccess()><p class=text-center>24小时内，我们将邀请相关导师为您解答</p><form name=questionForm novalidate ng-submit=vm.askQuestion()><div class="row space-4"><label class=text-right for=username>问题标题</label> <input name=title class=form-control type=text value ng-model=vm.question.title ng-maxlength=25 ng-minlength=5 word-count=vm.titleCount required> <em class=pull-left><span ng-show="vm.formValidator.isValidatedOf(questionForm.title, \'minlength\')">问题标题不得少于5字</span></em> <em class=pull-left><span ng-show="vm.formValidator.isValidatedOf(questionForm.title, \'maxlength\')">问题标题不得多于25字</span></em><div class="word-count pull-right"><span class=word-counted>{{vm.titleCount}}</span>/<span>25</span></div></div><div class="row space-4"><label class=text-right for=question-description>问题描述</label> <textarea class=form-control name=content maxlength=280 ng-maxlength=140 ng-minlength=10 rows=5 ng-model=vm.question.content word-count=vm.contentCount required></textarea> <em class=pull-left><span ng-show="vm.formValidator.isValidatedOf(questionForm.content, \'minlength\')">回答内容不得少于10字</span></em> <em class=pull-left><span ng-show="vm.formValidator.isValidatedOf(questionForm.content, \'maxlength\')">回答内容不得多于280字</span></em><div class="word-count pull-right"><span class=word-counted>{{vm.contentCount}}</span>/<span>140</span></div></div><div class="row space-4"><label class=text-right for=question-tag>问题标签</label> <input name=tags class=form-control type=text value ng-model=vm.question.tags ng-maxlength=100 ng-minlength=1 tags> <em ng-show="vm.formValidator.isValidatedOf(questionForm.tags, \'maxlength\')"><span>请不要输入太多标签</span></em></div><div class="row space-4"><label class=text-right for=anonymous>匿名 <input name=anonymous type=checkbox ng-true-value=true ng-false-value=false ng-model=vm.question.anonymous></label></div><div class="row space-4 text-center"><button class="btn btn-liang" type=submit ng-disabled=questionForm.$invalid>提问</button></div></form></div><div ng-show=vm.isSuccess()><div class="alert alert-success" role=alert>导师一旦回复，我们将给您发送短信提醒</div><div class="row space-4 text-center"><button class="btn btn-liang" type=button ng-click=vm.confirm()>确定</button></div></div></div></div>'), e.put("app/blocks/prompt/prompt.html", "<div class=modal-content><div class=modal-body ng-show=vm.successed><span class=icon-green>{{vm.message}}</span></div><div class=modal-body ng-hide=vm.successed><span class=icon-red>{{vm.message}}</span></div></div>")
}]);