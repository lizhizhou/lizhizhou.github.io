if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = "length" in e && e.length,
                n = Z.type(e);
            return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function r(e, t, n) {
            if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return Z.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (se.test(t)) return Z.filter(t, e, n);
                t = Z.filter(t, e)
            }
            return Z.grep(e, function(e) {
                return W.call(t, e) >= 0 !== n
            })
        }

        function i(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = he[e] = {};
            return Z.each(e.match(fe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            Q.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
        }

        function s() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Z.expando + s.uid++
        }

        function l(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ye.test(n) ? Z.parseJSON(n) : n
                    } catch (i) {}
                    $e.set(e, t, n)
                } else n = void 0;
            return n
        }

        function u() {
            return !0
        }

        function c() {
            return !1
        }

        function p() {
            try {
                return Q.activeElement
            } catch (e) {}
        }

        function d(e, t) {
            return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function f(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function h(e) {
            var t = qe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n = 0, r = e.length; r > n; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
        }

        function v(e, t) {
            var n, r, i, o, a, s, l, u;
            if (1 === t.nodeType) {
                if (ge.hasData(e) && (o = ge.access(e), a = ge.set(t, o), u = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in u)
                        for (n = 0, r = u[i].length; r > n; n++) Z.event.add(t, i, u[i][n])
                }
                $e.hasData(e) && (s = $e.access(e), l = Z.extend({}, s), $e.set(t, l))
            }
        }

        function g(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
        }

        function $(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function y(t, n) {
            var r, i = Z(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
            return i.detach(), o
        }

        function b(e) {
            var t = Q,
                n = Le[e];
            return n || (n = y(e, t), "none" !== n && n || (He = (He || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = y(e, t), He.detach()), Le[e] = n), n
        }

        function w(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || Be(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Ue.test(a) && Re.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function x(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function C(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ke.length; i--;)
                if (t = Ke[i] + n, t in e) return t;
            return r
        }

        function k(e, t, n) {
            var r = ze.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function S(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + xe[o], !0, i)), r ? ("content" === n && (a -= Z.css(e, "padding" + xe[o], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + xe[o] + "Width", !0, i))) : (a += Z.css(e, "padding" + xe[o], !0, i), "padding" !== n && (a += Z.css(e, "border" + xe[o] + "Width", !0, i)));
            return a
        }

        function E(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = Be(e),
                a = "border-box" === Z.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ue.test(i)) return i;
                r = a && (X.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + S(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function T(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ge.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[a] = ge.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ge.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
            for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function D(e, t, n, r, i) {
            return new D.prototype.init(e, t, n, r, i)
        }

        function A() {
            return setTimeout(function() {
                Xe = void 0
            }), Xe = Z.now()
        }

        function O(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = xe[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function M(e, t, n) {
            for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; a > o; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function N(e, t, n) {
            var r, i, o, a, s, l, u, c, p = this,
                d = {},
                f = e.style,
                h = e.nodeType && Ce(e),
                m = ge.get(e, "fxshow");
            n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = Z.css(e, "display"), c = "none" === u ? ge.get(e, "olddisplay") || b(e.nodeName) : u, "inline" === c && "none" === Z.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], Je.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        h = !0
                    }
                    d[r] = m && m[r] || Z.style(e, r)
                } else u = void 0;
            if (Z.isEmptyObject(d)) "inline" === ("none" === u ? b(e.nodeName) : u) && (f.display = u);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = ge.access(e, "fxshow", {}), o && (m.hidden = !h), h ? Z(e).show() : p.done(function() {
                    Z(e).hide()
                }), p.done(function() {
                    var t;
                    ge.remove(e, "fxshow");
                    for (t in d) Z.style(e, t, d[t])
                });
                for (r in d) a = M(h ? m[r] : 0, r, p), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function j(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
        }

        function P(e, t, n) {
            var r, i, o = 0,
                a = tt.length,
                s = Z.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (i) return !1;
                    for (var t = Xe || A(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                    return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: Z.extend({}, t),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Xe || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = Z.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (j(c, u.opts.specialEasing); a > o; o++)
                if (r = tt[o].call(u, e, c, u.opts)) return r;
            return Z.map(c, M, u), Z.isFunction(u.opts.start) && u.opts.start.call(e, u), Z.fx.timer(Z.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function I(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(fe) || [];
                if (Z.isFunction(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function q(e, t, n, r) {
            function i(s) {
                var l;
                return o[s] = !0, Z.each(e[s] || [], function(e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
                }), l
            }
            var o = {},
                a = e === yt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function F(e, t) {
            var n, r, i = Z.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && Z.extend(!0, e, r), e
        }

        function V(e, t, n) {
            for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (i in s)
                    if (s[i] && s[i].test(r)) {
                        l.unshift(i);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (i in n) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function H(e, t, n, r) {
            var i, o, a, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a)
                    for (i in u)
                        if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (p) {
                        return {
                            state: "parsererror",
                            error: a ? p : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function L(e, t, n, r) {
            var i;
            if (Z.isArray(t)) Z.each(t, function(t, i) {
                n || kt.test(e) ? r(e, i) : L(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== Z.type(t)) r(e, t);
            else
                for (i in t) L(e + "[" + i + "]", t[i], n, r)
        }

        function R(e) {
            return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var U = [],
            B = U.slice,
            _ = U.concat,
            z = U.push,
            W = U.indexOf,
            G = {},
            Y = G.toString,
            K = G.hasOwnProperty,
            X = {},
            Q = e.document,
            J = "2.1.4",
            Z = function(e, t) {
                return new Z.fn.init(e, t)
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            re = function(e, t) {
                return t.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: J,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return B.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
            },
            pushStack: function(e) {
                var t = Z.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return Z.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(Z.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(B.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: z,
            sort: U.sort,
            splice: U.splice
        }, Z.extend = Z.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], r = e[t], a !== r && (u && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(u, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, Z.extend({
            expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === Z.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[Y.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, re)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r), i === !1) break
                } else if (s)
                    for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : W.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
                else
                    for (o in e) i = t(e[o], o, r), null != i && l.push(i);
                return _.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = B.call(arguments, 2), i = function() {
                    return e.apply(t || this, r.concat(B.call(arguments)))
                }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
            },
            now: Date.now,
            support: X
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            G["[object " + t + "]"] = t.toLowerCase()
        });
        var ie = function(e) {
            function t(e, t, n, r) {
                var i, o, a, s, l, u, p, f, h, m;
                if ((t ? t.ownerDocument || t : L) !== N && M(t), t = t || N, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!r && P) {
                    if (11 !== s && (i = $e.exec(e)))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && V(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && w.getElementsByClassName) return J.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && (!I || !I.test(e))) {
                        if (f = p = H, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (u = S(e), (p = t.getAttribute("id")) ? f = p.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                            h = ye.test(e) && c(t.parentNode) || t, m = u.join(",")
                        }
                        if (m) try {
                            return J.apply(n, h.querySelectorAll(m)), n
                        } catch (v) {} finally {
                            p || t.removeAttribute("id")
                        }
                    }
                }
                return T(e.replace(le, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[H] = !0, e
            }

            function i(e) {
                var t = N.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) x.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function p() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function f(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = U++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, u = [R, o];
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) {
                                if (l = t[H] || (t[H] = {}), (s = l[r]) && s[0] === R && s[1] === o) return u[2] = s[2];
                                if (l[r] = u, u[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, r) {
                for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                return r
            }

            function v(e, t, n, r, i) {
                for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function g(e, t, n, i, o, a) {
                return i && !i[H] && (i = g(i)), o && !o[H] && (o = g(o, a)), r(function(r, a, s, l) {
                    var u, c, p, d = [],
                        f = [],
                        h = a.length,
                        g = r || m(t || "*", s.nodeType ? [s] : s, []),
                        $ = !e || !r && t ? g : v(g, d, e, s, l),
                        y = n ? o || (r ? e : h || i) ? [] : a : $;
                    if (n && n($, y, s, l), i)
                        for (u = v(y, f), i(u, [], s, l), c = u.length; c--;)(p = u[c]) && (y[f[c]] = !($[f[c]] = p));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = y.length; c--;)(p = y[c]) && u.push($[c] = p);
                                o(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(p = y[c]) && (u = o ? ee(r, p) : d[c]) > -1 && (r[u] = !(a[u] = p))
                        }
                    } else y = v(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : J.apply(a, y)
                })
            }

            function $(e) {
                for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, a, !0), u = f(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), c = [function(e, n, r) {
                        var i = !o && (r || n !== D) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                        return t = null, i
                    }]; i > s; s++)
                    if (n = x.relative[e[s].type]) c = [f(h(c), n)];
                    else {
                        if (n = x.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                            for (r = ++s; i > r && !x.relative[e[r].type]; r++);
                            return g(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, r > s && $(e.slice(s, r)), i > r && $(e = e.slice(r)), i > r && d(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function y(e, n) {
                var i = n.length > 0,
                    o = e.length > 0,
                    a = function(r, a, s, l, u) {
                        var c, p, d, f = 0,
                            h = "0",
                            m = r && [],
                            g = [],
                            $ = D,
                            y = r || o && x.find.TAG("*", u),
                            b = R += null == $ ? 1 : Math.random() || .1,
                            w = y.length;
                        for (u && (D = a !== N && a); h !== w && null != (c = y[h]); h++) {
                            if (o && c) {
                                for (p = 0; d = e[p++];)
                                    if (d(c, a, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (R = b)
                            }
                            i && ((c = !d && c) && f--, r && m.push(c))
                        }
                        if (f += h, i && h !== f) {
                            for (p = 0; d = n[p++];) d(m, g, a, s);
                            if (r) {
                                if (f > 0)
                                    for (; h--;) m[h] || g[h] || (g[h] = X.call(l));
                                g = v(g)
                            }
                            J.apply(l, g), u && !r && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (R = b, D = $), m
                    };
                return i ? r(a) : a
            }
            var b, w, x, C, k, S, E, T, D, A, O, M, N, j, P, I, q, F, V, H = "sizzle" + 1 * new Date,
                L = e.document,
                R = 0,
                U = 0,
                B = n(),
                _ = n(),
                z = n(),
                W = function(e, t) {
                    return e === t && (O = !0), 0
                },
                G = 1 << 31,
                Y = {}.hasOwnProperty,
                K = [],
                X = K.pop,
                Q = K.push,
                J = K.push,
                Z = K.slice,
                ee = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ie = re.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(ae),
                fe = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                Ce = function() {
                    M()
                };
            try {
                J.apply(K = Z.call(L.childNodes), L.childNodes), K[L.childNodes.length].nodeType
            } catch (ke) {
                J = {
                    apply: K.length ? function(e, t) {
                        Q.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, M = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : L;
                return r !== N && 9 === r.nodeType && r.documentElement ? (N = r, j = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), P = !k(r), w.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function(e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ge.test(r.getElementsByClassName), w.getById = i(function(e) {
                    return j.appendChild(e).id = H, !r.getElementsByName || !r.getElementsByName(H).length
                }), w.getById ? (x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return P ? t.getElementsByClassName(e) : void 0
                }, q = [], I = [], (w.qsa = ge.test(r.querySelectorAll)) && (i(function(e) {
                    j.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
                }), i(function(e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (w.matchesSelector = ge.test(F = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), q.push("!=", ae)
                }), I = I.length && new RegExp(I.join("|")), q = q.length && new RegExp(q.join("|")), t = ge.test(j.compareDocumentPosition), V = t || ge.test(j.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t) return O = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === L && V(L, e) ? -1 : t === r || t.ownerDocument === L && V(L, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return O = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; l[i] === u[i];) i++;
                    return i ? a(l[i], u[i]) : l[i] === L ? -1 : u[i] === L ? 1 : 0
                }, r) : N
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== N && M(e), n = n.replace(pe, "='$1']"), w.matchesSelector && P && (!q || !q.test(n)) && (!I || !I.test(n))) try {
                    var r = F.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return t(n, N, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && M(e), V(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== N && M(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && Y.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== r ? r : w.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (O = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(W), O) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return A = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += C(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, d, f, h, m = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = s && t.nodeName.toLowerCase(),
                                $ = !l && !s;
                            if (v) {
                                if (o) {
                                    for (; m;) {
                                        for (p = t; p = p[m];)
                                            if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && $) {
                                    for (c = v[H] || (v[H] = {}), u = c[e] || [], f = u[0] === R && u[1], d = u[0] === R && u[2], p = f && v.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++d && p === t) {
                                            c[e] = [R, f, d];
                                            break
                                        }
                                } else if ($ && (u = (t[H] || (t[H] = {}))[e]) && u[0] === R) d = u[1];
                                else
                                    for (;
                                        (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++d || ($ && ((p[H] || (p[H] = {}))[e] = [R, d]), p !== t)););
                                return d -= i, d === r || d % r === 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            i = E(e.replace(le, "$1"));
                        return i[H] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(we, xe),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === j
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ve.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[b] = s(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[b] = l(b);
            return p.prototype = x.filters = x.pseudos, x.setFilters = new p, S = t.tokenize = function(e, n) {
                var r, i, o, a, s, l, u, c = _[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = x.preFilter; s;) {
                    (!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(le, " ")
                    }), s = s.slice(r.length));
                    for (a in x.filter) !(i = he[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : _(e, l).slice(0)
            }, E = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = z[e + " "];
                if (!o) {
                    for (t || (t = S(e)), n = t.length; n--;) o = $(t[n]), o[H] ? r.push(o) : i.push(o);
                    o = z(e, y(i, r)), o.selector = e
                }
                return o
            }, T = t.select = function(e, t, n, r) {
                var i, o, a, s, l, u = "function" == typeof e && e,
                    p = !r && S(e = u.selector || e);
                if (n = n || [], 1 === p.length) {
                    if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && x.relative[o[1].type]) {
                        if (t = (x.find.ID(a.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                        if ((l = x.find[s]) && (r = l(a.matches[0].replace(we, xe), ye.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e) return J.apply(n, r), n;
                            break
                        }
                }
                return (u || E(e, p))(r, t, !P, n, ye.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = H.split("").sort(W).join("") === H, w.detectDuplicates = !!O, M(), w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
        Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
        var oe = Z.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            se = /^.[^:#\[\.,]*$/;
        Z.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, Z.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    r = [],
                    i = this;
                if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (Z.contains(i[t], this)) return !0
                }));
                for (t = 0; n > t; t++) Z.find(e, i[t], r);
                return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
            }
        });
        var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ce = Z.fn.init = function(e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ae.test(n[1]) && Z.isPlainObject(t))
                            for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
            };
        ce.prototype = Z.fn, le = Z(Q);
        var pe = /^(?:parents|prev(?:Until|All))/,
            de = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.extend({
            dir: function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && Z(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), Z.fn.extend({
            has: function(e) {
                var t = Z(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (Z.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? Z.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? W.call(Z(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), Z.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Z.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Z.dir(e, "parentNode", n)
            },
            next: function(e) {
                return i(e, "nextSibling")
            },
            prev: function(e) {
                return i(e, "previousSibling")
            },
            nextAll: function(e) {
                return Z.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return Z.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Z.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Z.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Z.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Z.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || Z.merge([], e.childNodes)
            }
        }, function(e, t) {
            Z.fn[e] = function(n, r) {
                var i = Z.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (de[e] || Z.unique(i), pe.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var fe = /\S+/g,
            he = {};
        Z.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
            var t, n, r, i, a, s, l = [],
                u = !e.once && [],
                c = function(o) {
                    for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = l.length, r = !0; l && a > s; s++)
                        if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    r = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function o(t) {
                                Z.each(t, function(t, n) {
                                    var r = Z.type(n);
                                    "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                                })
                            }(arguments), r ? a = l.length : t && (i = n, c(t))
                        }
                        return this
                    },
                    remove: function() {
                        return l && Z.each(arguments, function(e, t) {
                            for (var n;
                                (n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], a = 0, this
                    },
                    disable: function() {
                        return l = u = t = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, t || p.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, t) {
                        return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : c(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return p
        }, Z.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return Z.Deferred(function(n) {
                                Z.each(t, function(t, o) {
                                    var a = Z.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? Z.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, Z.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, i = 0,
                    o = B.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : Z.Deferred(),
                    u = function(e, n, r) {
                        return function(i) {
                            n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
                return s || l.resolveWith(r, o), l.promise()
            }
        });
        var me;
        Z.fn.ready = function(e) {
            return Z.ready.promise().done(e), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (me.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
            }
        }), Z.ready.promise = function(t) {
            return me || (me = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), me.promise(t)
        }, Z.ready.promise();
        var ve = Z.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === Z.type(n)) {
                i = !0;
                for (s in n) Z.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(Z(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        };
        Z.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
            key: function(e) {
                if (!s.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = s.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (r) {
                        t[this.expando] = n, Z.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var r, i = this.key(e),
                    o = this.cache[i];
                if ("string" == typeof t) o[t] = n;
                else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
                else
                    for (r in t) o[r] = t[r];
                return o
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r, i, o = this.key(e),
                    a = this.cache[o];
                if (void 0 === t) this.cache[o] = {};
                else {
                    Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(fe) || [])), n = r.length;
                    for (; n--;) delete a[r[n]]
                }
            },
            hasData: function(e) {
                return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var ge = new s,
            $e = new s,
            ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            be = /([A-Z])/g;
        Z.extend({
            hasData: function(e) {
                return $e.hasData(e) || ge.hasData(e)
            },
            data: function(e, t, n) {
                return $e.access(e, t, n)
            },
            removeData: function(e, t) {
                $e.remove(e, t)
            },
            _data: function(e, t, n) {
                return ge.access(e, t, n)
            },
            _removeData: function(e, t) {
                ge.remove(e, t)
            }
        }), Z.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = $e.get(o), 1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), l(o, r, i[r])));
                        ge.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    $e.set(this, e)
                }) : ve(this, function(t) {
                    var n, r = Z.camelCase(e);
                    if (o && void 0 === t) {
                        if (n = $e.get(o, e), void 0 !== n) return n;
                        if (n = $e.get(o, r), void 0 !== n) return n;
                        if (n = l(o, r, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = $e.get(this, r);
                        $e.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && $e.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    $e.remove(this, e)
                })
            }
        }), Z.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = ge.get(e, t), n && (!r || Z.isArray(n) ? r = ge.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Z.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = Z._queueHooks(e, t),
                    a = function() {
                        Z.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ge.get(e, n) || ge.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        ge.remove(e, [t + "queue", n])
                    })
                })
            }
        }), Z.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = Z.queue(this, e, t);
                    Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    Z.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = Z.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ge.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xe = ["Top", "Right", "Bottom", "Left"],
            Ce = function(e, t) {
                return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
            },
            ke = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = Q.createDocumentFragment(),
                t = e.appendChild(Q.createElement("div")),
                n = Q.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), X.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Se = "undefined";
        X.focusinBubbles = "onfocusin" in e;
        var Ee = /^key/,
            Te = /^(?:mouse|pointer|contextmenu)|click/,
            De = /^(?:focusinfocus|focusoutblur)$/,
            Ae = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, l, u, c, p, d, f, h, m, v = ge.get(e);
                if (v)
                    for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                            return typeof Z !== Se && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(fe) || [""], u = t.length; u--;) s = Ae.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f && (p = Z.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, p = Z.event.special[f] || {}, c = Z.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && Z.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a, !1)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[f] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, l, u, c, p, d, f, h, m, v = ge.hasData(e) && ge.get(e);
                if (v && (l = v.events)) {
                    for (t = (t || "").match(fe) || [""], u = t.length; u--;)
                        if (s = Ae.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (p = Z.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                            a && !d.length && (p.teardown && p.teardown.call(e, h, v.handle) !== !1 || Z.removeEvent(e, f, v.handle), delete l[f])
                        } else
                            for (f in l) Z.event.remove(e, f + t[u], n, r, !0);
                    Z.isEmptyObject(l) && (delete v.handle, ge.remove(e, "events"))
                }
            },
            trigger: function(t, n, r, i) {
                var o, a, s, l, u, c, p, d = [r || Q],
                    f = K.call(t, "type") ? t.type : t,
                    h = K.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[Z.expando] ? t : new Z.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), p = Z.event.special[f] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
                    if (!i && !p.noBubble && !Z.isWindow(r)) {
                        for (l = p.delegateType || f, De.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                        s === (r.ownerDocument || Q) && d.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                        (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : p.bindType || f, c = (ge.get(a, "events") || {})[t.type] && ge.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = f, i || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Z.acceptData(r) || u && Z.isFunction(r[f]) && !Z.isWindow(r) && (s = r[u], s && (r[u] = null), Z.event.triggered = f, r[f](), Z.event.triggered = void 0, s && (r[u] = s)), t.result
                }
            },
            dispatch: function(e) {
                e = Z.event.fix(e);
                var t, n, r, i, o, a = [],
                    s = B.call(arguments),
                    l = (ge.get(this, "events") || {})[e.type] || [],
                    u = Z.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = Z.event.handlers.call(this, e, l), t = 0;
                        (i = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== e.type) {
                            for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(l) >= 0 : Z.find(i, this, null, [l]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[Z.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Te.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== p() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return Z.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = Z.extend(new Z.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, Z.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, Z.Event = function(e, t) {
            return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
        }, Z.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            Z.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), X.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                Z.event.simulate(t, e.target, Z.event.fix(e), !0)
            };
            Z.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = ge.access(r, t);
                    i || r.addEventListener(e, n, !0), ge.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = ge.access(r, t) - 1;
                    i ? ge.access(r, t, i) : (r.removeEventListener(e, n, !0), ge.remove(r, t))
                }
            }
        }), Z.fn.extend({
            on: function(e, t, n, r, i) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], i);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
                else if (!r) return this;
                return 1 === i && (o = r, r = function(e) {
                    return Z().off(e), o.apply(this, arguments)
                }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                    Z.event.add(this, e, r, n, t)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                    Z.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    Z.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? Z.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Me = /<([\w:]+)/,
            Ne = /<|&#?\w+;/,
            je = /<(?:script|style|link)/i,
            Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ie = /^$|\/(?:java|ecma)script/i,
            qe = /^true\/(.*)/,
            Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ve = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, Z.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0),
                    l = Z.contains(e.ownerDocument, e);
                if (!(X.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                    for (a = g(s), o = g(e), r = 0, i = o.length; i > r; r++) $(o[r], a[r]);
                if (t)
                    if (n)
                        for (o = o || g(e), a = a || g(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
                    else v(e, s);
                return a = g(s, "script"), a.length > 0 && m(a, !l && g(e, "script")), s
            },
            buildFragment: function(e, t, n, r) {
                for (var i, o, a, s, l, u, c = t.createDocumentFragment(), p = [], d = 0, f = e.length; f > d; d++)
                    if (i = e[d], i || 0 === i)
                        if ("object" === Z.type(i)) Z.merge(p, i.nodeType ? [i] : i);
                        else if (Ne.test(i)) {
                    for (o = o || c.appendChild(t.createElement("div")), a = (Me.exec(i) || ["", ""])[1].toLowerCase(), s = Ve[a] || Ve._default, o.innerHTML = s[1] + i.replace(Oe, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;
                    Z.merge(p, o.childNodes), o = c.firstChild, o.textContent = ""
                } else p.push(t.createTextNode(i));
                for (c.textContent = "", d = 0; i = p[d++];)
                    if ((!r || -1 === Z.inArray(i, r)) && (l = Z.contains(i.ownerDocument, i), o = g(c.appendChild(i), "script"), l && m(o), n))
                        for (u = 0; i = o[u++];) Ie.test(i.type || "") && n.push(i);
                return c
            },
            cleanData: function(e) {
                for (var t, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (Z.acceptData(n) && (i = n[ge.expando], i && (t = ge.cache[i]))) {
                        if (t.events)
                            for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                        ge.cache[i] && delete ge.cache[i]
                    }
                    delete $e.cache[n[$e.expando]]
                }
            }
        }), Z.fn.extend({
            text: function(e) {
                return ve(this, function(e) {
                    return void 0 === e ? Z.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(g(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(g(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return Z.clone(this, e, t)
                })
            },
            html: function(e) {
                return ve(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !Ve[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Oe, "<$1></$2>");
                        try {
                            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, Z.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = _.apply([], e);
                var n, r, i, o, a, s, l = 0,
                    u = this.length,
                    c = this,
                    p = u - 1,
                    d = e[0],
                    m = Z.isFunction(d);
                if (m || u > 1 && "string" == typeof d && !X.checkClone && Pe.test(d)) return this.each(function(n) {
                    var r = c.eq(n);
                    m && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
                });
                if (u && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                    for (i = Z.map(g(n, "script"), f), o = i.length; u > l; l++) a = n, l !== p && (a = Z.clone(a, !0, !0), o && Z.merge(i, g(a, "script"))), t.call(this[l], a, l);
                    if (o)
                        for (s = i[i.length - 1].ownerDocument, Z.map(i, h), l = 0; o > l; l++) a = i[l], Ie.test(a.type || "") && !ge.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Fe, "")))
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            Z.fn[e] = function(e) {
                for (var n, r = [], i = Z(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[t](n), z.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var He, Le = {},
            Re = /^margin/,
            Ue = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
            Be = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                var t = e.getComputedStyle(a, null);
                n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
            }
            var n, r, i = Q.documentElement,
                o = Q.createElement("div"),
                a = Q.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(X, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(Q.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
                }
            }))
        }(), Z.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
        var _e = /^(none|table(?!-c[ea]).+)/,
            ze = new RegExp("^(" + we + ")(.*)$", "i"),
            We = new RegExp("^([+-])=(" + we + ")", "i"),
            Ge = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ye = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ke = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = w(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = Z.camelCase(t),
                        l = e.style;
                    return t = Z.cssProps[s] || (Z.cssProps[s] = C(l, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = We.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), X.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = Z.camelCase(t);
                return t = Z.cssProps[s] || (Z.cssProps[s] = C(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
            }
        }), Z.each(["height", "width"], function(e, t) {
            Z.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? _e.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ge, function() {
                        return E(e, t, r)
                    }) : E(e, t, r) : void 0
                },
                set: function(e, n, r) {
                    var i = r && Be(e);
                    return k(e, n, r ? S(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), Z.cssHooks.marginRight = x(X.reliableMarginRight, function(e, t) {
            return t ? Z.swap(e, {
                display: "inline-block"
            }, w, [e, "marginRight"]) : void 0
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            Z.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + xe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, Re.test(e) || (Z.cssHooks[e + t].set = k)
        }), Z.fn.extend({
            css: function(e, t) {
                return ve(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Z.isArray(t)) {
                        for (r = Be(e), i = t.length; i > a; a++) o[t[a]] = Z.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return T(this, !0)
            },
            hide: function() {
                return T(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ce(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }), Z.Tween = D, D.prototype = {
            constructor: D,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = D.propHooks[this.prop];
                return e && e.get ? e.get(this) : D.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = D.propHooks[this.prop];
                return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, Z.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, Z.fx = D.prototype.init, Z.fx.step = {};
        var Xe, Qe, Je = /^(?:toggle|show|hide)$/,
            Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
            et = /queueHooks$/,
            tt = [N],
            nt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Ze.exec(t),
                        o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                        a = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, Z.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };
        Z.Animation = Z.extend(P, {
                tweener: function(e, t) {
                    Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }), Z.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? Z.extend({}, e) : {
                    complete: n || !n && t || Z.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !Z.isFunction(t) && t
                };
                return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
                }, r
            }, Z.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Ce).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = Z.isEmptyObject(e),
                        o = Z.speed(t, n, r),
                        a = function() {
                            var t = P(this, Z.extend({}, e), o);
                            (i || ge.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = Z.timers,
                            a = ge.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        (t || !n) && Z.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ge.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = Z.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, Z.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function(e, t) {
                var n = Z.fn[t];
                Z.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
                }
            }), Z.each({
                slideDown: O("show"),
                slideUp: O("hide"),
                slideToggle: O("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                Z.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), Z.timers = [], Z.fx.tick = function() {
                var e, t = 0,
                    n = Z.timers;
                for (Xe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || Z.fx.stop(), Xe = void 0
            }, Z.fx.timer = function(e) {
                Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
            }, Z.fx.interval = 13, Z.fx.start = function() {
                Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
            }, Z.fx.stop = function() {
                clearInterval(Qe), Qe = null
            }, Z.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Z.fn.delay = function(e, t) {
                return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var e = Q.createElement("input"),
                    t = Q.createElement("select"),
                    n = t.appendChild(Q.createElement("option"));
                e.type = "checkbox", X.checkOn = "" !== e.value, X.optSelected = n.selected, t.disabled = !0, X.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", X.radioValue = "t" === e.value
            }();
        var rt, it, ot = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(e, t) {
                return ve(this, Z.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    Z.removeAttr(this, e)
                })
            }
        }), Z.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Se ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    o = t && t.match(fe);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!X.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), it = {
            set: function(e, t, n) {
                return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ot[t] || Z.find.attr;
            ot[t] = function(e, t, r) {
                var i, o;
                return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
            }
        });
        var at = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(e, t) {
                return ve(this, Z.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[Z.propFix[e] || e]
                })
            }
        }), Z.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var r, i, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), X.optSelected || (Z.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Z.propFix[this.toLowerCase()] = this
        });
        var st = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s = "string" == typeof e && e,
                    l = 0,
                    u = this.length;
                if (Z.isFunction(e)) return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(fe) || []; u > l; l++)
                        if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                            for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a = Z.trim(r), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                    l = 0,
                    u = this.length;
                if (Z.isFunction(e)) return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(fe) || []; u > l; l++)
                        if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                            for (o = 0; i = t[o++];)
                                for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                            a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
                    Z(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, r = 0, i = Z(this), o = e.match(fe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else(n === Se || "boolean" === n) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ge.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var lt = /\r/g;
        Z.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0]; {
                    if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
                }
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Z.find.attr(e, "value");
                        return null != t ? t : Z.trim(Z.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                            if (n = r[l], (n.selected || l === i) && (X.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                                if (t = Z(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = Z.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(e, t) {
                    return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
                }
            }, X.checkOn || (Z.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            Z.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), Z.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var ut = Z.now(),
            ct = /\?/;
        Z.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, Z.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (r) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
        };
        var pt = /#.*$/,
            dt = /([?&])_=[^&]*/,
            ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            mt = /^(?:GET|HEAD)$/,
            vt = /^\/\//,
            gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            $t = {},
            yt = {},
            bt = "*/".concat("*"),
            wt = e.location.href,
            xt = gt.exec(wt.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt,
                type: "GET",
                isLocal: ht.test(xt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? F(F(e, Z.ajaxSettings), t) : F(Z.ajaxSettings, e)
            },
            ajaxPrefilter: I($t),
            ajaxTransport: I(yt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var l, c, g, $, b, x = t;
                    2 !== y && (y = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && ($ = V(p, w, n)), $ = H(p, $, w, l), l ? (p.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === p.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = $.state, c = $.data, g = $.error, l = !g)) : (g = x, (e || !x) && (x = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || x) + "", l ? h.resolveWith(d, [c, x, w]) : h.rejectWith(d, [w, x, g]), w.statusCode(v), v = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? c : g]), m.fireWith(d, [w, x]), u && (f.trigger("ajaxComplete", [w, p]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, a, s, l, u, c, p = Z.ajaxSetup({}, t),
                    d = p.context || p,
                    f = p.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                    h = Z.Deferred(),
                    m = Z.Callbacks("once memory"),
                    v = p.statusCode || {},
                    g = {},
                    $ = {},
                    y = 0,
                    b = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === y) {
                                if (!a)
                                    for (a = {}; t = ft.exec(o);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return y || (e = $[n] = $[n] || e, g[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return y || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > y)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || b;
                            return r && r.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || wt) + "").replace(pt, "").replace(vt, xt[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = Z.trim(p.dataType || "*").toLowerCase().match(fe) || [""], null == p.crossDomain && (l = gt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === xt[1] && l[2] === xt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (xt[3] || ("http:" === xt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Z.param(p.data, p.traditional)), q($t, p, t, w), 2 === y) return w;
                u = Z.event && p.global, u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !mt.test(p.type), i = p.url, p.hasContent || (p.data && (i = p.url += (ct.test(i) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = dt.test(i) ? i.replace(dt, "$1_=" + ut++) : i + (ct.test(i) ? "&" : "?") + "_=" + ut++)), p.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : p.accepts["*"]);
                for (c in p.headers) w.setRequestHeader(c, p.headers[c]);
                if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === y)) return w.abort();
                b = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[c](p[c]);
                if (r = q(yt, p, t, w)) {
                    w.readyState = 1, u && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        y = 1, r.send(g, n)
                    } catch (x) {
                        if (!(2 > y)) throw x;
                        n(-1, x)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return Z.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return Z.get(e, void 0, t, "script")
            }
        }), Z.each(["get", "post"], function(e, t) {
            Z[t] = function(e, n, r, i) {
                return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }), Z._evalUrl = function(e) {
            return Z.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, Z.fn.extend({
            wrapAll: function(e) {
                var t;
                return Z.isFunction(e) ? this.each(function(t) {
                    Z(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return Z.isFunction(e) ? this.each(function(t) {
                    Z(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = Z(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = Z.isFunction(e);
                return this.each(function(n) {
                    Z(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, Z.expr.filters.visible = function(e) {
            return !Z.expr.filters.hidden(e)
        };
        var Ct = /%20/g,
            kt = /\[\]$/,
            St = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) L(n, e[n], t, i);
            return r.join("&").replace(Ct, "+")
        }, Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Z.prop(this, "elements");
                    return e ? Z.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Z(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !ke.test(e))
                }).map(function(e, t) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(St, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var Dt = 0,
            At = {},
            Ot = {
                0: 200,
                1223: 204
            },
            Mt = Z.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in At) At[e]()
        }), X.cors = !!Mt && "withCredentials" in Mt, X.ajax = Mt = !!Mt, Z.ajaxTransport(function(e) {
            var t;
            return X.cors || Mt && !e.crossDomain ? {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Dt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) o.setRequestHeader(i, n[i]);
                    t = function(e) {
                        return function() {
                            t && (delete At[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Ot[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), o.onerror = t("error"), t = At[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (s) {
                        if (t) throw s
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }), Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return Z.globalEval(e), e
                }
            }
        }), Z.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), Z.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = Z("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), Q.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Nt = [],
            jt = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Nt.pop() || Z.expando + "_" + ut++;
                return this[e] = !0, e
            }
        }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (jt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(jt, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return a || Z.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                a = arguments
            }, r.always(function() {
                e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Nt.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), Z.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Q;
            var r = ae.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
        };
        var Pt = Z.fn.load;
        Z.fn.load = function(e, t, n) {
            if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({
                url: e,
                type: i,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
            }).complete(n && function(e, t) {
                a.each(n, o || [e.responseText, t, e])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            Z.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), Z.expr.filters.animated = function(e) {
            return Z.grep(Z.timers, function(t) {
                return e === t.elem
            }).length
        };
        var It = e.document.documentElement;
        Z.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, l, u, c = Z.css(e, "position"),
                    p = Z(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = p.offset(), o = Z.css(e, "top"), l = Z.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = p.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : p.css(d)
            }
        }, Z.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    Z.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    },
                    o = r && r.ownerDocument;
                if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = R(o), {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - r.top - Z.css(n, "marginTop", !0),
                        left: t.left - r.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || It; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                    return e || It
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var r = "pageYOffset" === n;
            Z.fn[t] = function(i) {
                return ve(this, function(t, i, o) {
                    var a = R(t);
                    return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), Z.each(["top", "left"], function(e, t) {
            Z.cssHooks[t] = x(X.pixelPosition, function(e, n) {
                return n ? (n = w(e, t), Ue.test(n) ? Z(e).position()[t] + "px" : n) : void 0
            })
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            Z.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                Z.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return ve(this, function(t, n, r) {
                        var i;
                        return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }), Z.fn.size = function() {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Z
        });
        var qt = e.jQuery,
            Ft = e.$;
        return Z.noConflict = function(t) {
            return e.$ === Z && (e.$ = Ft), t && e.jQuery === Z && (e.jQuery = qt), Z
        }, typeof t === Se && (e.jQuery = e.$ = Z), Z
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            r = this;
        e(this).one(e.support.transition.end, function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function() {
        e.support.transition = t()
    })
}(jQuery), + function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function(t) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }
        var r = e(this),
            i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e(i);
        t && t.preventDefault(), o.length || (o = r.hasClass("alert") ? r : r.parent()), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this)), "string" == typeof t && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery), + function(e) {
    "use strict";
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.isLoading = !1
    };
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(t) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            o = r.data();
        t += "Text", o.resetText || r.data("resetText", r[i]()), r[i](o[t] || this.options[t]), setTimeout(e.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.button"),
                o = "object" == typeof n && n;
            i || r.data("bs.button", i = new t(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, t.prototype.to = function(t) {
        var n = this,
            r = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(t)
        }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function(t, n) {
        var r = this.$element.find(".item.active"),
            i = n || r[t](),
            o = this.interval,
            a = "next" == t ? "left" : "right",
            s = "next" == t ? "first" : "last",
            l = this;
        if (!i.length) {
            if (!this.options.wrap) return;
            i = this.$element.find(".item")[s]()
        }
        if (i.hasClass("active")) return this.sliding = !1;
        var u = e.Event("slide.bs.carousel", {
            relatedTarget: i[0],
            direction: a
        });
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var t = e(l.$indicators.children()[l.getActiveIndex()]);
            t && t.addClass("active")
        })), e.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, r.addClass(a), i.addClass(a), r.one(e.support.transition.end, function() {
            i.removeClass([t, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.carousel"),
                o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n),
                a = "string" == typeof n ? n : o.slide;
            i || r.data("bs.carousel", i = new t(this, o)), "number" == typeof n ? i.to(n) : a ? i[a]() : o.interval && i.pause().cycle()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var n, r = e(this),
            i = e(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = e.extend({}, i.data(), r.data()),
            a = r.attr("data-slide-to");
        a && (o.interval = !1), i.carousel(o), (a = r.attr("data-slide-to")) && i.data("bs.carousel").to(a), t.preventDefault()
    }), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = e.Event("show.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var r = n.data("bs.collapse");
                    if (r && r.transitioning) return;
                    n.collapse("hide"), r || n.data("bs.collapse", null)
                }
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                var o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!e.support.transition) return o.call(this);
                var a = e.camelCase(["scroll", i].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(o, this)).emulateTransitionEnd(350)[i](this.$element[0][a])
            }
        }
    }, t.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return e.support.transition ? void this.$element[n](0).one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
            }
        }
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.collapse"),
                o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
            !i && o.toggle && "show" == n && (n = !n), i || r.data("bs.collapse", i = new t(this, o)), "string" == typeof n && i[n]()
        })
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n, this
    }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var n, r = e(this),
            i = r.attr("data-target") || t.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = e(i),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : r.data(),
            l = r.attr("data-parent"),
            u = l && e(l);
        a && a.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(s)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        e(r).remove(), e(i).each(function() {
            var r = n(e(this)),
                i = {
                    relatedTarget: this
                };
            r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", i)), t.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    var r = ".dropdown-backdrop",
        i = "[data-toggle=dropdown]",
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i),
                a = o.hasClass("open");
            if (t(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(r = e.Event("show.bs.dropdown", s)), r.isDefaultPrevented()) return;
                o.toggleClass("open").trigger("shown.bs.dropdown", s), i.focus()
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var r = e(this);
            if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
                var o = n(r),
                    a = o.hasClass("open");
                if (!a || a && 27 == t.keyCode) return 27 == t.which && o.find(i).focus(), r.click();
                var s = " li:not(.divider):visible a",
                    l = o.find("[role=menu]" + s + ", [role=listbox]" + s);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == t.keyCode && u > 0 && u--, 40 == t.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).focus()
                }
            }
        }
    };
    var a = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)), "string" == typeof t && r[t].call(n)
        })
    }, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = a, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, o.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu], [role=listbox]", o.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(e) {
        return this[this.isShown ? "hide" : "show"](e)
    }, t.prototype.show = function(t) {
        var n = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var r = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                n.$element.focus().trigger(i)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(i)
        }))
    }, t.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
        }, this))
    }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    };
    var n = e.fn.modal;
    e.fn.modal = function(n, r) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.modal"),
                a = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
            o || i.data("bs.modal", o = new t(this, a)), "string" == typeof n ? o[n](r) : a.show && o.show(r)
        })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this),
            r = n.attr("href"),
            i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = i.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, i.data(), n.data());
        n.is("a") && t.preventDefault(), i.modal(o, this).one("hide", function() {
            n.is(":visible") && n.focus()
        })
    }), e(document).on("show.bs.modal", ".modal", function() {
        e(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        e(document.body).removeClass("modal-open")
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function(t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, t.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(t), t.isDefaultPrevented()) return;
            var n = this,
                r = this.tip();
            this.setContent(), this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                a = o.test(i);
            a && (i = i.replace(o, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var s = this.getPosition(),
                l = r[0].offsetWidth,
                u = r[0].offsetHeight;
            if (a) {
                var c = this.$element.parent(),
                    p = i,
                    d = document.documentElement.scrollTop || document.body.scrollTop,
                    f = "body" == this.options.container ? window.innerWidth : c.outerWidth(),
                    h = "body" == this.options.container ? window.innerHeight : c.outerHeight(),
                    m = "body" == this.options.container ? 0 : c.offset().left;
                i = "bottom" == i && s.top + s.height + u - d > h ? "top" : "top" == i && s.top - d - u < 0 ? "bottom" : "right" == i && s.right + l > f ? "left" : "left" == i && s.left - l < m ? "right" : i, r.removeClass(p).addClass(i)
            }
            var v = this.getCalculatedOffset(i, s, l, u);
            this.applyPlacement(v, i), this.hoverState = null;
            var g = function() {
                n.$element.trigger("shown.bs." + n.type)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, g).emulateTransitionEnd(150) : g()
        }
    }, t.prototype.applyPlacement = function(t, n) {
        var r, i = this.tip(),
            o = i[0].offsetWidth,
            a = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            l = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(l) && (l = 0), t.top = t.top + s, t.left = t.left + l, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var u = i[0].offsetWidth,
            c = i[0].offsetHeight;
        if ("top" == n && c != a && (r = !0, t.top = t.top + a - c), /bottom|top/.test(n)) {
            var p = 0;
            t.left < 0 && (p = -2 * t.left, t.left = 0, i.offset(t), u = i[0].offsetWidth, c = i[0].offsetHeight), this.replaceArrow(p - o + u, u, "left")
        } else this.replaceArrow(c - a, c, "top");
        r && i.offset(t)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = e.Event("hide.bs." + this.type);
        return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function() {
        var t = this.$element[0];
        return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.tooltip", i = new t(this, o)), "string" == typeof n && i[n]())
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(jQuery), + function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.popover"),
                o = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.popover", i = new t(this, o)), "string" == typeof n && i[n]())
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, r) {
        var i, o = e.proxy(this.process, this);
        this.$element = e(e(n).is("body") ? window : n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", o), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
    }
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function() {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this;
        this.$body.find(this.selector).map(function() {
            var r = e(this),
                i = r.data("target") || r.attr("href"),
                o = /^#./.test(i) && e(i);
            return o && o.length && o.is(":visible") && [
                [o[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            r = n - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (t >= r) return a != (e = o.last()[0]) && this.activate(e);
        if (a && t <= i[0]) return a != (e = o[0]) && this.activate(e);
        for (e = i.length; e--;) a != o[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this, o)), "string" == typeof n && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0],
                o = e.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (t.trigger(o), !o.isDefaultPrevented()) {
                var a = e(r);
                this.activate(t.parent("li"), n), this.activate(a, a.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, t.prototype.activate = function(t, n, r) {
        function i() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }
        var o = n.find("> .active"),
            a = r && e.support.transition && o.hasClass("fade");
        a ? o.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(), o.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new t(this)), "string" == typeof n && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show")
    })
}(jQuery), + function(e) {
    "use strict";
    var t = function(n, r) {
        this.options = e.extend({}, t.DEFAULTS, r), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$window.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - e
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = e(document).height(),
                r = this.$window.scrollTop(),
                i = this.$element.offset(),
                o = this.options.offset,
                a = o.top,
                s = o.bottom;
            "top" == this.affixed && (i.top += r), "object" != typeof o && (s = a = o), "function" == typeof a && (a = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var l = null != this.unpin && r + this.unpin <= i.top ? !1 : null != s && i.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= r ? "top" : !1;
            if (this.affixed !== l) {
                this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = e.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(u).trigger(e.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: n - s - this.$element.height()
                }))
            }
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.affix"),
                o = "object" == typeof n && n;
            i || r.data("bs.affix", i = new t(this, o)), "string" == typeof n && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
        return e.fn.affix = n, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(jQuery),
function(e, t, n) {
    "use strict";

    function r(e, t) {
        return t = t || Error,
            function() {
                var n, r, i = 2,
                    o = arguments,
                    a = o[0],
                    s = "[" + (e ? e + ":" : "") + a + "] ",
                    l = o[1];
                for (s += l.replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1),
                            n = t + i;
                        return n < o.length ? ye(o[n]) : e
                    }), s += "\nhttp://errors.angularjs.org/1.4.8/" + (e ? e + "/" : "") + a, r = i, n = "?"; r < o.length; r++, n = "&") s += n + "p" + (r - i) + "=" + encodeURIComponent(ye(o[r]));
                return new t(s)
            }
    }

    function i(e) {
        if (null == e || D(e)) return !1;
        if (Rr(e) || C(e) || Ar && e instanceof Ar) return !0;
        var t = "length" in Object(e) && e.length;
        return k(t) && (t >= 0 && t - 1 in e || "function" == typeof e.item)
    }

    function o(e, t, n) {
        var r, a;
        if (e)
            if (E(e))
                for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
            else if (Rr(e) || i(e)) {
            var s = "object" != typeof e;
            for (r = 0, a = e.length; a > r; r++)(s || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
        else if (x(e))
            for (r in e) t.call(n, e[r], r, e);
        else if ("function" == typeof e.hasOwnProperty)
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        else
            for (r in e) kr.call(e, r) && t.call(n, e[r], r, e);
        return e
    }

    function a(e, t, n) {
        for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
        return r
    }

    function s(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function l() {
        return ++Hr
    }

    function u(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function c(e, t, n) {
        for (var r = e.$$hashKey, i = 0, o = t.length; o > i; ++i) {
            var a = t[i];
            if (w(a) || E(a))
                for (var s = Object.keys(a), l = 0, p = s.length; p > l; l++) {
                    var d = s[l],
                        f = a[d];
                    n && w(f) ? S(f) ? e[d] = new Date(f.valueOf()) : T(f) ? e[d] = new RegExp(f) : f.nodeName ? e[d] = f.cloneNode(!0) : q(f) ? e[d] = f.clone() : (w(e[d]) || (e[d] = Rr(f) ? [] : {}), c(e[d], [f], !0)) : e[d] = f
                }
        }
        return u(e, r), e
    }

    function p(e) {
        return c(e, Nr.call(arguments, 1), !1)
    }

    function d(e) {
        return c(e, Nr.call(arguments, 1), !0)
    }

    function f(e) {
        return parseInt(e, 10)
    }

    function h(e, t) {
        return p(Object.create(e), t)
    }

    function m() {}

    function v(e) {
        return e
    }

    function g(e) {
        return function() {
            return e
        }
    }

    function $(e) {
        return E(e.toString) && e.toString !== Ir
    }

    function y(e) {
        return "undefined" == typeof e
    }

    function b(e) {
        return "undefined" != typeof e
    }

    function w(e) {
        return null !== e && "object" == typeof e
    }

    function x(e) {
        return null !== e && "object" == typeof e && !qr(e)
    }

    function C(e) {
        return "string" == typeof e
    }

    function k(e) {
        return "number" == typeof e
    }

    function S(e) {
        return "[object Date]" === Ir.call(e)
    }

    function E(e) {
        return "function" == typeof e
    }

    function T(e) {
        return "[object RegExp]" === Ir.call(e)
    }

    function D(e) {
        return e && e.window === e
    }

    function A(e) {
        return e && e.$evalAsync && e.$watch
    }

    function O(e) {
        return "[object File]" === Ir.call(e)
    }

    function M(e) {
        return "[object FormData]" === Ir.call(e)
    }

    function N(e) {
        return "[object Blob]" === Ir.call(e)
    }

    function j(e) {
        return "boolean" == typeof e
    }

    function P(e) {
        return e && E(e.then)
    }

    function I(e) {
        return e && k(e.length) && Ur.test(Ir.call(e))
    }

    function q(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function F(e) {
        var t, n = {},
            r = e.split(",");
        for (t = 0; t < r.length; t++) n[r[t]] = !0;
        return n
    }

    function V(e) {
        return Cr(e.nodeName || e[0] && e[0].nodeName)
    }

    function H(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n
    }

    function L(e, t) {
        function n(e, t) {
            var n, i = t.$$hashKey;
            if (Rr(e))
                for (var o = 0, a = e.length; a > o; o++) t.push(r(e[o]));
            else if (x(e))
                for (n in e) t[n] = r(e[n]);
            else if (e && "function" == typeof e.hasOwnProperty)
                for (n in e) e.hasOwnProperty(n) && (t[n] = r(e[n]));
            else
                for (n in e) kr.call(e, n) && (t[n] = r(e[n]));
            return u(t, i), t
        }

        function r(e) {
            if (!w(e)) return e;
            var t = i.indexOf(e);
            if (-1 !== t) return a[t];
            if (D(e) || A(e)) throw Fr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var r, o = !1;
            return Rr(e) ? (r = [], o = !0) : I(e) ? r = new e.constructor(e) : S(e) ? r = new Date(e.getTime()) : T(e) ? (r = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), r.lastIndex = e.lastIndex) : E(e.cloneNode) ? r = e.cloneNode(!0) : (r = Object.create(qr(e)), o = !0), i.push(e), a.push(r), o ? n(e, r) : r
        }
        var i = [],
            a = [];
        if (t) {
            if (I(t)) throw Fr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (e === t) throw Fr("cpi", "Can't copy! Source and destination are identical.");
            return Rr(t) ? t.length = 0 : o(t, function(e, n) {
                "$$hashKey" !== n && delete t[n]
            }), i.push(e), a.push(t), n(e, t)
        }
        return r(e)
    }

    function R(e, t) {
        if (Rr(e)) {
            t = t || [];
            for (var n = 0, r = e.length; r > n; n++) t[n] = e[n]
        } else if (w(e)) {
            t = t || {};
            for (var i in e)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = e[i])
        }
        return t || e
    }

    function U(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var n, r, i, o = typeof e,
            a = typeof t;
        if (o == a && "object" == o) {
            if (!Rr(e)) {
                if (S(e)) return S(t) ? U(e.getTime(), t.getTime()) : !1;
                if (T(e)) return T(t) ? e.toString() == t.toString() : !1;
                if (A(e) || A(t) || D(e) || D(t) || Rr(t) || S(t) || T(t)) return !1;
                i = ve();
                for (r in e)
                    if ("$" !== r.charAt(0) && !E(e[r])) {
                        if (!U(e[r], t[r])) return !1;
                        i[r] = !0
                    }
                for (r in t)
                    if (!(r in i) && "$" !== r.charAt(0) && b(t[r]) && !E(t[r])) return !1;
                return !0
            }
            if (!Rr(t)) return !1;
            if ((n = e.length) == t.length) {
                for (r = 0; n > r; r++)
                    if (!U(e[r], t[r])) return !1;
                return !0
            }
        }
        return !1
    }

    function B(e, t, n) {
        return e.concat(Nr.call(t, n))
    }

    function _(e, t) {
        return Nr.call(e, t || 0)
    }

    function z(e, t) {
        var n = arguments.length > 2 ? _(arguments, 2) : [];
        return !E(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, B(n, arguments, 0)) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function W(e, r) {
        var i = r;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : D(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : A(r) && (i = "$SCOPE"), i
    }

    function G(e, t) {
        return "undefined" == typeof e ? n : (k(t) || (t = t ? 2 : null), JSON.stringify(e, W, t))
    }

    function Y(e) {
        return C(e) ? JSON.parse(e) : e
    }

    function K(e, t) {
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n
    }

    function X(e, t) {
        return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
    }

    function Q(e, t, n) {
        n = n ? -1 : 1;
        var r = K(t, e.getTimezoneOffset());
        return X(e, n * (r - e.getTimezoneOffset()))
    }

    function J(e) {
        e = Ar(e).clone();
        try {
            e.empty()
        } catch (t) {}
        var n = Ar("<div>").append(e).html();
        try {
            return e[0].nodeType === Jr ? Cr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + Cr(t)
            })
        } catch (t) {
            return Cr(n)
        }
    }

    function Z(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }

    function ee(e) {
        var t = {};
        return o((e || "").split("&"), function(e) {
            var n, r, i;
            e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), i = e.substring(n + 1)), r = Z(r), b(r) && (i = b(i) ? Z(i) : !0, kr.call(t, r) ? Rr(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
        }), t
    }

    function te(e) {
        var t = [];
        return o(e, function(e, n) {
            Rr(e) ? o(e, function(e) {
                t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)))
            }) : t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function ne(e) {
        return re(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function re(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function ie(e, t) {
        var n, r, i = Gr.length;
        for (r = 0; i > r; ++r)
            if (n = Gr[r] + t, C(n = e.getAttribute(n))) return n;
        return null
    }

    function oe(e, t) {
        var n, r, i = {};
        o(Gr, function(t) {
            var i = t + "app";
            !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
        }), o(Gr, function(t) {
            var i, o = t + "app";
            !n && (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
        }), n && (i.strictDi = null !== ie(n, "strict-di"), t(n, r ? [r] : [], i))
    }

    function ae(n, r, i) {
        w(i) || (i = {});
        var a = {
            strictDi: !1
        };
        i = p(a, i);
        var s = function() {
                if (n = Ar(n), n.injector()) {
                    var e = n[0] === t ? "document" : J(n);
                    throw Fr("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                r = r || [], r.unshift(["$provide", function(e) {
                    e.value("$rootElement", n)
                }]), i.debugInfoEnabled && r.push(["$compileProvider", function(e) {
                    e.debugInfoEnabled(!0)
                }]), r.unshift("ng");
                var o = et(r, i.strictDi);
                return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), o
            },
            l = /^NG_ENABLE_DEBUG_INFO!/,
            u = /^NG_DEFER_BOOTSTRAP!/;
        return e && l.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(l, "")), e && !u.test(e.name) ? s() : (e.name = e.name.replace(u, ""), Vr.resumeBootstrap = function(e) {
            return o(e, function(e) {
                r.push(e)
            }), s()
        }, void(E(Vr.resumeDeferredBootstrap) && Vr.resumeDeferredBootstrap()))
    }

    function se() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function le(e) {
        var t = Vr.element(e).injector();
        if (!t) throw Fr("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
    }

    function ue(e, t) {
        return t = t || "_", e.replace(Yr, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function ce() {
        var t;
        if (!Kr) {
            var r = Wr();
            Or = y(r) ? e.jQuery : r ? e[r] : n, Or && Or.fn.on ? (Ar = Or, p(Or.fn, {
                scope: gi.scope,
                isolateScope: gi.isolateScope,
                controller: gi.controller,
                injector: gi.injector,
                inheritedData: gi.inheritedData
            }), t = Or.cleanData, Or.cleanData = function(e) {
                var n;
                if (Lr) Lr = !1;
                else
                    for (var r, i = 0; null != (r = e[i]); i++) n = Or._data(r, "events"), n && n.$destroy && Or(r).triggerHandler("$destroy");
                t(e)
            }) : Ar = De, Vr.element = Ar, Kr = !0
        }
    }

    function pe(e, t, n) {
        if (!e) throw Fr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function de(e, t, n) {
        return n && Rr(e) && (e = e[e.length - 1]), pe(E(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function fe(e, t) {
        if ("hasOwnProperty" === e) throw Fr("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function he(e, t, n) {
        if (!t) return e;
        for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++) r = i[s], e && (e = (o = e)[r]);
        return !n && E(e) ? z(o, e) : e
    }

    function me(e) {
        for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = Ar(Nr.call(e, 0, i))), t.push(n));
        return t || e
    }

    function ve() {
        return Object.create(null)
    }

    function ge(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var n = r("$injector"),
            i = r("ng"),
            o = t(e, "angular", Object);
        return o.$$minErr = o.$$minErr || r, t(o, "module", function() {
            var e = {};
            return function(r, o, a) {
                var s = function(e, t) {
                    if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                };
                return s(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                    function e(e, t, n, r) {
                        return r || (r = i),
                            function() {
                                return r[n || "push"]([e, t, arguments]), c
                            }
                    }

                    function t(e, t) {
                        return function(n, o) {
                            return o && E(o) && (o.$$moduleName = r), i.push([e, t, arguments]), c
                        }
                    }
                    if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var i = [],
                        s = [],
                        l = [],
                        u = e("$injector", "invoke", "push", s),
                        c = {
                            _invokeQueue: i,
                            _configBlocks: s,
                            _runBlocks: l,
                            requires: o,
                            name: r,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            decorator: t("$provide", "decorator"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            config: u,
                            run: function(e) {
                                return l.push(e), this
                            }
                        };
                    return a && u(a), c
                })
            }
        })
    }

    function $e(e) {
        var t = [];
        return JSON.stringify(e, function(e, n) {
            if (n = W(e, n), w(n)) {
                if (t.indexOf(n) >= 0) return "...";
                t.push(n)
            }
            return n
        })
    }

    function ye(e) {
        return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : y(e) ? "undefined" : "string" != typeof e ? $e(e) : e
    }

    function be(t) {
        p(t, {
            bootstrap: ae,
            copy: L,
            extend: p,
            merge: d,
            equals: U,
            element: Ar,
            forEach: o,
            injector: et,
            noop: m,
            bind: z,
            toJson: G,
            fromJson: Y,
            identity: v,
            isUndefined: y,
            isDefined: b,
            isString: C,
            isFunction: E,
            isObject: w,
            isNumber: k,
            isElement: q,
            isArray: Rr,
            version: ni,
            isDate: S,
            lowercase: Cr,
            uppercase: Sr,
            callbacks: {
                counter: 0
            },
            getTestability: le,
            $$minErr: r,
            $$csp: zr,
            reloadWithDebugInfo: se
        }), (Mr = ge(e))("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: yn
            }), e.provider("$compile", ct).directive({
                a: $o,
                input: Io,
                textarea: Io,
                form: Co,
                script: Ta,
                select: Oa,
                style: Na,
                option: Ma,
                ngBind: Vo,
                ngBindHtml: Lo,
                ngBindTemplate: Ho,
                ngClass: Uo,
                ngClassEven: _o,
                ngClassOdd: Bo,
                ngCloak: zo,
                ngController: Wo,
                ngForm: ko,
                ngHide: wa,
                ngIf: Ko,
                ngInclude: Xo,
                ngInit: Jo,
                ngNonBindable: da,
                ngPluralize: va,
                ngRepeat: ga,
                ngShow: ba,
                ngStyle: xa,
                ngSwitch: Ca,
                ngSwitchWhen: ka,
                ngSwitchDefault: Sa,
                ngOptions: ma,
                ngTransclude: Ea,
                ngModel: ua,
                ngList: Zo,
                ngChange: Ro,
                pattern: Pa,
                ngPattern: Pa,
                required: ja,
                ngRequired: ja,
                minlength: qa,
                ngMinlength: qa,
                maxlength: Ia,
                ngMaxlength: Ia,
                ngValue: Fo,
                ngModelOptions: pa
            }).directive({
                ngInclude: Qo
            }).directive(yo).directive(Go), e.provider({
                $anchorScroll: tt,
                $animate: Ni,
                $animateCss: ji,
                $$animateQueue: Mi,
                $$AnimateRunner: Oi,
                $browser: st,
                $cacheFactory: lt,
                $controller: mt,
                $document: vt,
                $exceptionHandler: gt,
                $filter: jn,
                $$forceReflow: Vi,
                $interpolate: Mt,
                $interval: Nt,
                $http: Tt,
                $httpParamSerializer: yt,
                $httpParamSerializerJQLike: bt,
                $httpBackend: At,
                $xhrFactory: Dt,
                $location: Wt,
                $log: Gt,
                $parse: fn,
                $rootScope: $n,
                $q: hn,
                $$q: mn,
                $sce: Cn,
                $sceDelegate: xn,
                $sniffer: kn,
                $templateCache: ut,
                $templateRequest: Sn,
                $$testability: En,
                $timeout: Tn,
                $window: On,
                $$rAF: gn,
                $$jqLite: Ke,
                $$HashMap: wi,
                $$cookieReader: Nn
            })
        }])
    }

    function we() {
        return ++ii
    }

    function xe(e) {
        return e.replace(si, function(e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(li, "Moz$1")
    }

    function Ce(e) {
        return !di.test(e)
    }

    function ke(e) {
        var t = e.nodeType;
        return t === Xr || !t || t === ei
    }

    function Se(e) {
        for (var t in ri[e.ng339]) return !0;
        return !1
    }

    function Ee(e, t) {
        var n, r, i, a, s = t.createDocumentFragment(),
            l = [];
        if (Ce(e)) l.push(t.createTextNode(e));
        else {
            for (n = n || s.appendChild(t.createElement("div")), r = (fi.exec(e) || ["", ""])[1].toLowerCase(), i = mi[r] || mi._default, n.innerHTML = i[1] + e.replace(hi, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
            l = B(l, n.childNodes), n = s.firstChild, n.textContent = ""
        }
        return s.textContent = "", s.innerHTML = "", o(l, function(e) {
            s.appendChild(e)
        }), s
    }

    function Te(e, n) {
        n = n || t;
        var r;
        return (r = pi.exec(e)) ? [n.createElement(r[1])] : (r = Ee(e, n)) ? r.childNodes : []
    }

    function De(e) {
        if (e instanceof De) return e;
        var t;
        if (C(e) && (e = Br(e), t = !0), !(this instanceof De)) {
            if (t && "<" != e.charAt(0)) throw ci("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new De(e)
        }
        t ? Ve(this, Te(e)) : Ve(this, e)
    }

    function Ae(e) {
        return e.cloneNode(!0)
    }

    function Oe(e, t) {
        if (t || Ne(e), e.querySelectorAll)
            for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) Ne(n[r])
    }

    function Me(e, t, n, r) {
        if (b(r)) throw ci("offargs", "jqLite#off() does not support the `selector` argument");
        var i = je(e),
            a = i && i.events,
            s = i && i.handle;
        if (s)
            if (t) {
                var l = function(t) {
                    var r = a[t];
                    b(n) && H(r || [], n), b(n) && r && r.length > 0 || (ai(e, t, s), delete a[t])
                };
                o(t.split(" "), function(e) {
                    l(e), ui[e] && l(ui[e])
                })
            } else
                for (t in a) "$destroy" !== t && ai(e, t, s), delete a[t]
    }

    function Ne(e, t) {
        var r = e.ng339,
            i = r && ri[r];
        if (i) {
            if (t) return void delete i.data[t];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Me(e)), delete ri[r], e.ng339 = n
        }
    }

    function je(e, t) {
        var r = e.ng339,
            i = r && ri[r];
        return t && !i && (e.ng339 = r = we(), i = ri[r] = {
            events: {},
            data: {},
            handle: n
        }), i
    }

    function Pe(e, t, n) {
        if (ke(e)) {
            var r = b(n),
                i = !r && t && !w(t),
                o = !t,
                a = je(e, !i),
                s = a && a.data;
            if (r) s[t] = n;
            else {
                if (o) return s;
                if (i) return s && s[t];
                p(s, t)
            }
        }
    }

    function Ie(e, t) {
        return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
    }

    function qe(e, t) {
        t && e.setAttribute && o(t.split(" "), function(t) {
            e.setAttribute("class", Br((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Br(t) + " ", " ")));
        })
    }

    function Fe(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(t.split(" "), function(e) {
                e = Br(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", Br(n))
        }
    }

    function Ve(e, t) {
        if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var r = 0; n > r; r++) e[e.length++] = t[r]
                } else e[e.length++] = t
            }
    }

    function He(e, t) {
        return Le(e, "$" + (t || "ngController") + "Controller")
    }

    function Le(e, t, n) {
        e.nodeType == ei && (e = e.documentElement);
        for (var r = Rr(t) ? t : [t]; e;) {
            for (var i = 0, o = r.length; o > i; i++)
                if (b(n = Ar.data(e, r[i]))) return n;
            e = e.parentNode || e.nodeType === ti && e.host
        }
    }

    function Re(e) {
        for (Oe(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function Ue(e, t) {
        t || Oe(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function Be(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : Ar(n).on("load", t)
    }

    function _e(e, t) {
        var n = $i[t.toLowerCase()];
        return n && yi[V(e)] && n
    }

    function ze(e) {
        return bi[e]
    }

    function We(e, t) {
        var n = function(n, r) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            };
            var i = t[r || n.type],
                o = i ? i.length : 0;
            if (o) {
                if (y(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return n.immediatePropagationStopped === !0
                };
                var s = i.specialHandlerWrapper || Ge;
                o > 1 && (i = R(i));
                for (var l = 0; o > l; l++) n.isImmediatePropagationStopped() || s(e, n, i[l])
            }
        };
        return n.elem = e, n
    }

    function Ge(e, t, n) {
        n.call(e, t)
    }

    function Ye(e, t, n) {
        var r = t.relatedTarget;
        (!r || r !== e && !vi.call(e, r)) && n.call(e, t)
    }

    function Ke() {
        this.$get = function() {
            return p(De, {
                hasClass: function(e, t) {
                    return e.attr && (e = e[0]), Ie(e, t)
                },
                addClass: function(e, t) {
                    return e.attr && (e = e[0]), Fe(e, t)
                },
                removeClass: function(e, t) {
                    return e.attr && (e = e[0]), qe(e, t)
                }
            })
        }
    }

    function Xe(e, t) {
        var n = e && e.$$hashKey;
        if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
        var r = typeof e;
        return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || l)() : r + ":" + e
    }

    function Qe(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        o(e, this.put, this)
    }

    function Je(e) {
        var t = e.toString().replace(Si, ""),
            n = t.match(xi);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Ze(e, t, n) {
        var r, i, a, s;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t) throw C(n) && n || (n = e.name || Je(e)), Ei("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = e.toString().replace(Si, ""), a = i.match(xi), o(a[1].split(Ci), function(e) {
                        e.replace(ki, function(e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else Rr(e) ? (s = e.length - 1, de(e[s], "fn"), r = e.slice(0, s)) : de(e, "fn", !0);
        return r
    }

    function et(e, t) {
        function r(e) {
            return function(t, n) {
                return w(t) ? void o(t, s(e)) : e(t, n)
            }
        }

        function i(e, t) {
            if (fe(e, "service"), (E(t) || Rr(t)) && (t = k.instantiate(t)), !t.$get) throw Ei("pget", "Provider '{0}' must define $get factory method.", e);
            return x[e + v] = t
        }

        function a(e, t) {
            return function() {
                var n = T.invoke(t, this);
                if (y(n)) throw Ei("undef", "Provider '{0}' must return a value from $get factory method.", e);
                return n
            }
        }

        function l(e, t, n) {
            return i(e, {
                $get: n !== !1 ? a(e, t) : t
            })
        }

        function u(e, t) {
            return l(e, ["$injector", function(e) {
                return e.instantiate(t)
            }])
        }

        function c(e, t) {
            return l(e, g(t), !1)
        }

        function p(e, t) {
            fe(e, "constant"), x[e] = t, S[e] = t
        }

        function d(e, t) {
            var n = k.get(e + v),
                r = n.$get;
            n.$get = function() {
                var e = T.invoke(r, n);
                return T.invoke(t, null, {
                    $delegate: e
                })
            }
        }

        function f(e) {
            pe(y(e) || Rr(e), "modulesToLoad", "not an array");
            var t, n = [];
            return o(e, function(e) {
                function r(e) {
                    var t, n;
                    for (t = 0, n = e.length; n > t; t++) {
                        var r = e[t],
                            i = k.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }
                if (!b.get(e)) {
                    b.put(e, !0);
                    try {
                        C(e) ? (t = Mr(e), n = n.concat(f(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : E(e) ? n.push(k.invoke(e)) : Rr(e) ? n.push(k.invoke(e)) : de(e, "module")
                    } catch (i) {
                        throw Rr(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Ei("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function h(e, n) {
            function r(t, r) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === m) throw Ei("cdep", "Circular dependency found: {0}", t + " <- " + $.join(" <- "));
                    return e[t]
                }
                try {
                    return $.unshift(t), e[t] = m, e[t] = n(t, r)
                } catch (i) {
                    throw e[t] === m && delete e[t], i
                } finally {
                    $.shift()
                }
            }

            function i(e, n, i, o) {
                "string" == typeof i && (o = i, i = null);
                var a, s, l, u = [],
                    c = et.$$annotate(e, t, o);
                for (s = 0, a = c.length; a > s; s++) {
                    if (l = c[s], "string" != typeof l) throw Ei("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
                    u.push(i && i.hasOwnProperty(l) ? i[l] : r(l, o))
                }
                return Rr(e) && (e = e[a]), e.apply(n, u)
            }

            function o(e, t, n) {
                var r = Object.create((Rr(e) ? e[e.length - 1] : e).prototype || null),
                    o = i(e, r, t, n);
                return w(o) || E(o) ? o : r
            }
            return {
                invoke: i,
                instantiate: o,
                get: r,
                annotate: et.$$annotate,
                has: function(t) {
                    return x.hasOwnProperty(t + v) || e.hasOwnProperty(t)
                }
            }
        }
        t = t === !0;
        var m = {},
            v = "Provider",
            $ = [],
            b = new Qe([], !0),
            x = {
                $provide: {
                    provider: r(i),
                    factory: r(l),
                    service: r(u),
                    value: r(c),
                    constant: r(p),
                    decorator: d
                }
            },
            k = x.$injector = h(x, function(e, t) {
                throw Vr.isString(t) && $.push(t), Ei("unpr", "Unknown provider: {0}", $.join(" <- "))
            }),
            S = {},
            T = S.$injector = h(S, function(e, t) {
                var r = k.get(e + v, t);
                return T.invoke(r.$get, r, n, e)
            });
        return o(f(e), function(e) {
            e && T.invoke(e)
        }), T
    }

    function tt() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
            function i(e) {
                var t = null;
                return Array.prototype.some.call(e, function(e) {
                    return "a" === V(e) ? (t = e, !0) : void 0
                }), t
            }

            function o() {
                var e = s.yOffset;
                if (E(e)) e = e();
                else if (q(e)) {
                    var n = e[0],
                        r = t.getComputedStyle(n);
                    e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else k(e) || (e = 0);
                return e
            }

            function a(e) {
                if (e) {
                    e.scrollIntoView();
                    var n = o();
                    if (n) {
                        var r = e.getBoundingClientRect().top;
                        t.scrollBy(0, r - n)
                    }
                } else t.scrollTo(0, 0)
            }

            function s(e) {
                e = C(e) ? e : n.hash();
                var t;
                e ? (t = l.getElementById(e)) ? a(t) : (t = i(l.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
            }
            var l = t.document;
            return e && r.$watch(function() {
                return n.hash()
            }, function(e, t) {
                (e !== t || "" !== e) && Be(function() {
                    r.$evalAsync(s)
                })
            }), s
        }]
    }

    function nt(e, t) {
        return e || t ? e ? t ? (Rr(e) && (e = e.join(" ")), Rr(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
    }

    function rt(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.nodeType === Di) return n
        }
    }

    function it(e) {
        C(e) && (e = e.split(" "));
        var t = ve();
        return o(e, function(e) {
            e.length && (t[e] = !0)
        }), t
    }

    function ot(e) {
        return w(e) ? e : {}
    }

    function at(e, t, n, r) {
        function i(e) {
            try {
                e.apply(null, _(arguments, 1))
            } finally {
                if ($--, 0 === $)
                    for (; b.length;) try {
                        b.pop()()
                    } catch (t) {
                        n.error(t)
                    }
            }
        }

        function a(e) {
            var t = e.indexOf("#");
            return -1 === t ? "" : e.substr(t)
        }

        function s() {
            S = null, u(), c()
        }

        function l() {
            try {
                return f.state
            } catch (e) {}
        }

        function u() {
            w = l(), w = y(w) ? null : w, U(w, D) && (w = D), D = w
        }

        function c() {
            (C !== p.url() || x !== w) && (C = p.url(), x = w, o(E, function(e) {
                e(p.url(), w)
            }))
        }
        var p = this,
            d = (t[0], e.location),
            f = e.history,
            h = e.setTimeout,
            v = e.clearTimeout,
            g = {};
        p.isMock = !1;
        var $ = 0,
            b = [];
        p.$$completeOutstandingRequest = i, p.$$incOutstandingRequestCount = function() {
            $++
        }, p.notifyWhenNoOutstandingRequests = function(e) {
            0 === $ ? e() : b.push(e)
        };
        var w, x, C = d.href,
            k = t.find("base"),
            S = null;
        u(), x = w, p.url = function(t, n, i) {
            if (y(i) && (i = null), d !== e.location && (d = e.location), f !== e.history && (f = e.history), t) {
                var o = x === i;
                if (C === t && (!r.history || o)) return p;
                var s = C && Ft(C) === Ft(t);
                return C = t, x = i, !r.history || s && o ? ((!s || S) && (S = t), n ? d.replace(t) : s ? d.hash = a(t) : d.href = t, d.href !== t && (S = t)) : (f[n ? "replaceState" : "pushState"](i, "", t), u(), x = w), p
            }
            return S || d.href.replace(/%27/g, "'")
        }, p.state = function() {
            return w
        };
        var E = [],
            T = !1,
            D = null;
        p.onUrlChange = function(t) {
            return T || (r.history && Ar(e).on("popstate", s), Ar(e).on("hashchange", s), T = !0), E.push(t), t
        }, p.$$applicationDestroyed = function() {
            Ar(e).off("hashchange popstate", s)
        }, p.$$checkUrlChange = c, p.baseHref = function() {
            var e = k.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, p.defer = function(e, t) {
            var n;
            return $++, n = h(function() {
                delete g[n], i(e)
            }, t || 0), g[n] = !0, n
        }, p.defer.cancel = function(e) {
            return g[e] ? (delete g[e], v(e), i(m), !0) : !1
        }
    }

    function st() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new at(e, r, t, n)
        }]
    }

    function lt() {
        this.$get = function() {
            function e(e, n) {
                function i(e) {
                    e != d && (f ? f == e && (f = e.n) : f = e, o(e.n, e.p), o(e, d), d = e, d.n = null)
                }

                function o(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var a = 0,
                    s = p({}, n, {
                        id: e
                    }),
                    l = ve(),
                    u = n && n.capacity || Number.MAX_VALUE,
                    c = ve(),
                    d = null,
                    f = null;
                return t[e] = {
                    put: function(e, t) {
                        if (!y(t)) {
                            if (u < Number.MAX_VALUE) {
                                var n = c[e] || (c[e] = {
                                    key: e
                                });
                                i(n)
                            }
                            return e in l || a++, l[e] = t, a > u && this.remove(f.key), t
                        }
                    },
                    get: function(e) {
                        if (u < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            i(t)
                        }
                        return l[e]
                    },
                    remove: function(e) {
                        if (u < Number.MAX_VALUE) {
                            var t = c[e];
                            if (!t) return;
                            t == d && (d = t.p), t == f && (f = t.n), o(t.n, t.p), delete c[e]
                        }
                        e in l && (delete l[e], a--)
                    },
                    removeAll: function() {
                        l = ve(), a = 0, c = ve(), d = f = null
                    },
                    destroy: function() {
                        l = null, s = null, c = null, delete t[e]
                    },
                    info: function() {
                        return p({}, s, {
                            size: a
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return o(t, function(t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function(e) {
                return t[e]
            }, e
        }
    }

    function ut() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }

    function ct(e, r) {
        function i(e, t, n) {
            var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                i = {};
            return o(e, function(e, o) {
                var a = e.match(r);
                if (!a) throw Pi("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                i[o] = {
                    mode: a[1][0],
                    collection: "*" === a[2],
                    optional: "?" === a[3],
                    attrName: a[4] || o
                }
            }), i
        }

        function a(e, t) {
            var n = {
                isolateScope: null,
                bindToController: null
            };
            if (w(e.scope) && (e.bindToController === !0 ? (n.bindToController = i(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = i(e.scope, t, !1)), w(e.bindToController) && (n.bindToController = i(e.bindToController, t, !0)), w(n.bindToController)) {
                var r = e.controller,
                    o = e.controllerAs;
                if (!r) throw Pi("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                if (!ht(r, o)) throw Pi("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
            }
            return n
        }

        function l(e) {
            var t = e.charAt(0);
            if (!t || t !== Cr(t)) throw Pi("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", e);
            if (e !== e.trim()) throw Pi("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
        }
        var u = {},
            c = "Directive",
            d = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            $ = F("ngSrc,ngSrcset,src,srcset"),
            x = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            k = /^(on[a-z]+|formaction)$/;
        this.directive = function T(t, n) {
            return fe(t, "directive"), C(t) ? (l(t), pe(n, "directiveFactory"), u.hasOwnProperty(t) || (u[t] = [], e.factory(t + c, ["$injector", "$exceptionHandler", function(e, n) {
                var r = [];
                return o(u[t], function(i, o) {
                    try {
                        var s = e.invoke(i);
                        E(s) ? s = {
                            compile: g(s)
                        } : !s.compile && s.link && (s.compile = g(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || t, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA";
                        var l = s.$$bindings = a(s, s.name);
                        w(l.isolateScope) && (s.$$isolateBindings = l.isolateScope), s.$$moduleName = i.$$moduleName, r.push(s)
                    } catch (u) {
                        n(u)
                    }
                }), r
            }])), u[t].push(n)) : o(t, s(T)), this
        }, this.aHrefSanitizationWhitelist = function(e) {
            return b(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return b(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        };
        var S = !0;
        this.debugInfoEnabled = function(e) {
            return b(e) ? (S = e, this) : S
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, i, a, s, l, g, b, T, D, O) {
            function M(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {}
            }

            function N(e, t, n, r, i) {
                e instanceof Ar || (e = Ar(e)), o(e, function(t, n) {
                    t.nodeType == Jr && t.nodeValue.match(/\S+/) && (e[n] = Ar(t).wrap("<span></span>").parent()[0])
                });
                var a = P(e, t, e, n, r, i);
                N.$$addScopeClass(e);
                var s = null;
                return function(t, n, r) {
                    pe(t, "scope"), i && i.needsNewScope && (t = t.$parent.$new()), r = r || {};
                    var o = r.parentBoundTranscludeFn,
                        l = r.transcludeControllers,
                        u = r.futureParentElement;
                    o && o.$$boundTransclude && (o = o.$$boundTransclude), s || (s = j(u));
                    var c;
                    if (c = "html" !== s ? Ar(Z(s, Ar("<div>").append(e).html())) : n ? gi.clone.call(e) : e, l)
                        for (var p in l) c.data("$" + p + "Controller", l[p].instance);
                    return N.$$addScopeInfo(c, t), n && n(c, t), a && a(t, c, c, o), c
                }
            }

            function j(e) {
                var t = e && e[0];
                return t && "foreignobject" !== V(t) && t.toString().match(/SVG/) ? "svg" : "html"
            }

            function P(e, t, r, i, o, a) {
                function s(e, r, i, o) {
                    var a, s, l, u, c, p, d, f, v;
                    if (h) {
                        var g = r.length;
                        for (v = new Array(g), c = 0; c < m.length; c += 3) d = m[c], v[d] = r[d]
                    } else v = r;
                    for (c = 0, p = m.length; p > c;) l = v[m[c++]], a = m[c++], s = m[c++], a ? (a.scope ? (u = e.$new(), N.$$addScopeInfo(Ar(l), u)) : u = e, f = a.transcludeOnThisElement ? I(e, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && t ? I(e, t) : null, a(s, u, l, i, f)) : s && s(e, l.childNodes, n, o)
                }
                for (var l, u, c, p, d, f, h, m = [], v = 0; v < e.length; v++) l = new ae, u = q(e[v], [], l, 0 === v ? i : n, o), c = u.length ? R(u, e[v], l, t, r, null, [], [], a) : null, c && c.scope && N.$$addScopeClass(l.$$element), d = c && c.terminal || !(p = e[v].childNodes) || !p.length ? null : P(p, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), (c || d) && (m.push(v, c, d), f = !0, h = h || c), a = null;
                return f ? s : null
            }

            function I(e, t, n) {
                var r = function(r, i, o, a, s) {
                    return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                };
                return r
            }

            function q(e, t, n, r, i) {
                var o, a, s = e.nodeType,
                    l = n.$attr;
                switch (s) {
                    case Xr:
                        z(t, pt(V(e)), "E", r, i);
                        for (var u, c, p, h, m, v, g = e.attributes, $ = 0, y = g && g.length; y > $; $++) {
                            var b = !1,
                                x = !1;
                            u = g[$], c = u.name, m = Br(u.value), h = pt(c), (v = de.test(h)) && (c = c.replace(Ii, "").substr(8).replace(/_(.)/g, function(e, t) {
                                return t.toUpperCase()
                            }));
                            var k = h.match(fe);
                            k && W(k[1]) && (b = c, x = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)), p = pt(c.toLowerCase()), l[p] = c, (v || !n.hasOwnProperty(p)) && (n[p] = m, _e(e, p) && (n[p] = !0)), te(e, t, m, p, v), z(t, p, "A", r, i, b, x)
                        }
                        if (a = e.className, w(a) && (a = a.animVal), C(a) && "" !== a)
                            for (; o = f.exec(a);) p = pt(o[2]), z(t, p, "C", r, i) && (n[p] = Br(o[3])), a = a.substr(o.index + o[0].length);
                        break;
                    case Jr:
                        if (11 === Dr)
                            for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === Jr;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                        Q(t, e.nodeValue);
                        break;
                    case Zr:
                        try {
                            o = d.exec(e.nodeValue), o && (p = pt(o[1]), z(t, p, "M", r, i) && (n[p] = Br(o[2])))
                        } catch (S) {}
                }
                return t.sort(K), t
            }

            function F(e, t, n) {
                var r = [],
                    i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw Pi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        e.nodeType == Xr && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (i > 0)
                } else r.push(e);
                return Ar(r)
            }

            function L(e, t, n) {
                return function(r, i, o, a, s) {
                    return i = F(i[0], t, n), e(r, i, o, a, s)
                }
            }

            function R(e, r, o, a, s, u, c, p, d) {
                function f(e, t, n, r) {
                    e && (n && (e = L(e, n, r)), e.require = g.require, e.directiveName = $, (O === g || g.$$isolateScope) && (e = re(e, {
                        isolateScope: !0
                    })), c.push(e)), t && (n && (t = L(t, n, r)), t.require = g.require, t.directiveName = $, (O === g || g.$$isolateScope) && (t = re(t, {
                        isolateScope: !0
                    })), p.push(t))
                }

                function h(e, t, n, r) {
                    var i;
                    if (C(t)) {
                        var o = t.match(x),
                            a = t.substring(o[0].length),
                            s = o[1] || o[3],
                            l = "?" === o[2];
                        if ("^^" === s ? n = n.parent() : (i = r && r[a], i = i && i.instance), !i) {
                            var u = "$" + a + "Controller";
                            i = s ? n.inheritedData(u) : n.data(u)
                        }
                        if (!i && !l) throw Pi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, e)
                    } else if (Rr(t)) {
                        i = [];
                        for (var c = 0, p = t.length; p > c; c++) i[c] = h(e, t[c], n, r)
                    }
                    return i || null
                }

                function m(e, t, n, r, i, o) {
                    var a = ve();
                    for (var s in r) {
                        var u = r[s],
                            c = {
                                $scope: u === O || u.$$isolateScope ? i : o,
                                $element: e,
                                $attrs: t,
                                $transclude: n
                            },
                            p = u.controller;
                        "@" == p && (p = t[u.name]);
                        var d = l(p, c, !0, u.controllerAs);
                        a[u.name] = d, V || e.data("$" + u.name + "Controller", d.instance)
                    }
                    return a
                }

                function v(e, t, i, a, s) {
                    function l(e, t, r) {
                        var i;
                        return A(e) || (r = t, t = e, e = n), V && (i = v), r || (r = V ? $.parent() : $), s(e, t, i, r, j)
                    }
                    var u, d, f, v, g, $, y, b, w;
                    r === i ? (y = o, $ = o.$$element) : ($ = Ar(i), y = new ae($, o)), f = t, O ? d = t.$new(!0) : T && (f = t.$parent), s && (g = l, g.$$boundTransclude = s), D && (v = m($, y, g, D, d, t)), O && (N.$$addScopeInfo($, d, !0, !(M && (M === O || M === O.$$originalDirective))), N.$$addScopeClass($, !0), d.$$isolateBindings = O.$$isolateBindings, b = oe(t, y, d, d.$$isolateBindings, O), b && d.$on("$destroy", b));
                    for (var x in v) {
                        var C = D[x],
                            k = v[x],
                            S = C.$$bindings.bindToController;
                        k.identifier && S && (w = oe(f, y, k.instance, S, C));
                        var E = k();
                        E !== k.instance && (k.instance = E, $.data("$" + C.name + "Controller", E), w && w(), w = oe(f, y, k.instance, S, C))
                    }
                    for (z = 0, W = c.length; W > z; z++) u = c[z], ie(u, u.isolateScope ? d : t, $, y, u.require && h(u.directiveName, u.require, $, v), g);
                    var j = t;
                    for (O && (O.template || null === O.templateUrl) && (j = d), e && e(j, i.childNodes, n, s), z = p.length - 1; z >= 0; z--) u = p[z], ie(u, u.isolateScope ? d : t, $, y, u.require && h(u.directiveName, u.require, $, v), g)
                }
                d = d || {};
                for (var g, $, y, b, k, S = -Number.MAX_VALUE, T = d.newScopeDirective, D = d.controllerDirectives, O = d.newIsolateScopeDirective, M = d.templateDirective, j = d.nonTlbTranscludeDirective, P = !1, I = !1, V = d.hasElementTranscludeDirective, H = o.$$element = Ar(r), R = u, U = a, z = 0, W = e.length; W > z; z++) {
                    g = e[z];
                    var K = g.$$start,
                        Q = g.$$end;
                    if (K && (H = F(r, K, Q)), y = n, S > g.priority) break;
                    if ((k = g.scope) && (g.templateUrl || (w(k) ? (X("new/isolated scope", O || T, g, H), O = g) : X("new/isolated scope", O, g, H)), T = T || g), $ = g.name, !g.templateUrl && g.controller && (k = g.controller, D = D || ve(), X("'" + $ + "' controller", D[$], g, H), D[$] = g), (k = g.transclude) && (P = !0, g.$$tlb || (X("transclusion", j, g, H), j = g), "element" == k ? (V = !0, S = g.priority, y = H, H = o.$$element = Ar(t.createComment(" " + $ + ": " + o[$] + " ")), r = H[0], ne(s, _(y), r), U = N(y, a, S, R && R.name, {
                            nonTlbTranscludeDirective: j
                        })) : (y = Ar(Ae(r)).contents(), H.empty(), U = N(y, a, n, n, {
                            needsNewScope: g.$$isolateScope || g.$$newScope
                        }))), g.template)
                        if (I = !0, X("template", M, g, H), M = g, k = E(g.template) ? g.template(H, o) : g.template, k = ce(k), g.replace) {
                            if (R = g, y = Ce(k) ? [] : ft(Z(g.templateNamespace, Br(k))), r = y[0], 1 != y.length || r.nodeType !== Xr) throw Pi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", $, "");
                            ne(s, H, r);
                            var ee = {
                                    $attr: {}
                                },
                                te = q(r, [], ee),
                                se = e.splice(z + 1, e.length - (z + 1));
                            (O || T) && B(te, O, T), e = e.concat(te).concat(se), G(o, ee), W = e.length
                        } else H.html(k);
                    if (g.templateUrl) I = !0, X("template", M, g, H), M = g, g.replace && (R = g), v = Y(e.splice(z, e.length - z), H, o, s, P && U, c, p, {
                        controllerDirectives: D,
                        newScopeDirective: T !== g && T,
                        newIsolateScopeDirective: O,
                        templateDirective: M,
                        nonTlbTranscludeDirective: j
                    }), W = e.length;
                    else if (g.compile) try {
                        b = g.compile(H, o, U), E(b) ? f(null, b, K, Q) : b && f(b.pre, b.post, K, Q)
                    } catch (le) {
                        i(le, J(H))
                    }
                    g.terminal && (v.terminal = !0, S = Math.max(S, g.priority))
                }
                return v.scope = T && T.scope === !0, v.transcludeOnThisElement = P, v.templateOnThisElement = I, v.transclude = U, d.hasElementTranscludeDirective = V, v
            }

            function B(e, t, n) {
                for (var r = 0, i = e.length; i > r; r++) e[r] = h(e[r], {
                    $$isolateScope: t,
                    $$newScope: n
                })
            }

            function z(t, n, r, o, a, s, l) {
                if (n === a) return null;
                var p = null;
                if (u.hasOwnProperty(n))
                    for (var d, f = e.get(n + c), m = 0, v = f.length; v > m; m++) try {
                        d = f[m], (y(o) || o > d.priority) && -1 != d.restrict.indexOf(r) && (s && (d = h(d, {
                            $$start: s,
                            $$end: l
                        })), t.push(d), p = d)
                    } catch (g) {
                        i(g)
                    }
                return p
            }

            function W(t) {
                if (u.hasOwnProperty(t))
                    for (var n, r = e.get(t + c), i = 0, o = r.length; o > i; i++)
                        if (n = r[i], n.multiElement) return !0;
                return !1
            }

            function G(e, t) {
                var n = t.$attr,
                    r = e.$attr,
                    i = e.$$element;
                o(e, function(r, i) {
                    "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                }), o(t, function(t, o) {
                    "class" == o ? (M(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
                })
            }

            function Y(e, t, n, r, i, s, l, u) {
                var c, p, d = [],
                    f = t[0],
                    m = e.shift(),
                    v = h(m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    g = E(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl,
                    $ = m.templateNamespace;
                return t.empty(), a(g).then(function(a) {
                        var h, y, b, x;
                        if (a = ce(a), m.replace) {
                            if (b = Ce(a) ? [] : ft(Z($, Br(a))), h = b[0], 1 != b.length || h.nodeType !== Xr) throw Pi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, g);
                            y = {
                                $attr: {}
                            }, ne(r, t, h);
                            var C = q(h, [], y);
                            w(m.scope) && B(C, !0), e = C.concat(e), G(n, y)
                        } else h = f, t.html(a);
                        for (e.unshift(v), c = R(e, h, n, i, t, m, s, l, u), o(r, function(e, n) {
                                e == h && (r[n] = t[0])
                            }), p = P(t[0].childNodes, i); d.length;) {
                            var k = d.shift(),
                                S = d.shift(),
                                E = d.shift(),
                                T = d.shift(),
                                D = t[0];
                            if (!k.$$destroyed) {
                                if (S !== f) {
                                    var A = S.className;
                                    u.hasElementTranscludeDirective && m.replace || (D = Ae(h)), ne(E, Ar(S), D), M(Ar(D), A)
                                }
                                x = c.transcludeOnThisElement ? I(k, c.transclude, T) : T, c(p, k, D, r, x)
                            }
                        }
                        d = null
                    }),
                    function(e, t, n, r, i) {
                        var o = i;
                        t.$$destroyed || (d ? d.push(t, n, r, o) : (c.transcludeOnThisElement && (o = I(t, c.transclude, i)), c(p, t, n, r, o)))
                    }
            }

            function K(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function X(e, t, n, r) {
                function i(e) {
                    return e ? " (module: " + e + ")" : ""
                }
                if (t) throw Pi("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, J(r))
            }

            function Q(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0,
                    compile: function(e) {
                        var t = e.parent(),
                            r = !!t.length;
                        return r && N.$$addBindingClass(t),
                            function(e, t) {
                                var i = t.parent();
                                r || N.$$addBindingClass(i), N.$$addBindingInfo(i, n.expressions), e.$watch(n, function(e) {
                                    t[0].nodeValue = e
                                })
                            }
                    }
                })
            }

            function Z(e, n) {
                switch (e = Cr(e || "html")) {
                    case "svg":
                    case "math":
                        var r = t.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function ee(e, t) {
                if ("srcdoc" == t) return T.HTML;
                var n = V(e);
                return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? T.RESOURCE_URL : void 0
            }

            function te(e, t, n, i, o) {
                var a = ee(e, i);
                o = $[i] || o;
                var s = r(n, !0, a, o);
                if (s) {
                    if ("multiple" === i && "select" === V(e)) throw Pi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", J(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, l) {
                                    var u = l.$$observers || (l.$$observers = ve());
                                    if (k.test(i)) throw Pi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var c = l[i];
                                    c !== n && (s = c && r(c, !0, a, o), n = c), s && (l[i] = s(e), (u[i] || (u[i] = [])).$$inter = !0, (l.$$observers && l.$$observers[i].$$scope || e).$watch(s, function(e, t) {
                                        "class" === i && e != t ? l.$updateClass(e, t) : l.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ne(e, n, r) {
                var i, o, a = n[0],
                    s = n.length,
                    l = a.parentNode;
                if (e)
                    for (i = 0, o = e.length; o > i; i++)
                        if (e[i] == a) {
                            e[i++] = r;
                            for (var u = i, c = u + s - 1, p = e.length; p > u; u++, c++) p > c ? e[u] = e[c] : delete e[u];
                            e.length -= s - 1, e.context === a && (e.context = r);
                            break
                        }
                l && l.replaceChild(r, a);
                var d = t.createDocumentFragment();
                d.appendChild(a), Ar.hasData(a) && (Ar.data(r, Ar.data(a)), Or ? (Lr = !0, Or.cleanData([a])) : delete Ar.cache[a[Ar.expando]]);
                for (var f = 1, h = n.length; h > f; f++) {
                    var m = n[f];
                    Ar(m).remove(), d.appendChild(m), delete n[f]
                }
                n[0] = r, n.length = 1
            }

            function re(e, t) {
                return p(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function ie(e, t, n, r, o, a) {
                try {
                    e(t, n, r, o, a)
                } catch (s) {
                    i(s, J(n))
                }
            }

            function oe(e, t, n, i, a) {
                var l = [];
                return o(i, function(i, o) {
                    var u, c, p, d, f = i.attrName,
                        h = i.optional,
                        v = i.mode;
                    switch (v) {
                        case "@":
                            h || kr.call(t, f) || (n[o] = t[f] = void 0), t.$observe(f, function(e) {
                                C(e) && (n[o] = e)
                            }), t.$$observers[f].$$scope = e, C(t[f]) && (n[o] = r(t[f])(e));
                            break;
                        case "=":
                            if (!kr.call(t, f)) {
                                if (h) break;
                                t[f] = void 0
                            }
                            if (h && !t[f]) break;
                            c = s(t[f]), d = c.literal ? U : function(e, t) {
                                return e === t || e !== e && t !== t
                            }, p = c.assign || function() {
                                throw u = n[o] = c(e), Pi("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", t[f], a.name)
                            }, u = n[o] = c(e);
                            var g = function(t) {
                                return d(t, n[o]) || (d(t, u) ? p(e, t = n[o]) : n[o] = t), u = t
                            };
                            g.$stateful = !0;
                            var $;
                            $ = i.collection ? e.$watchCollection(t[f], g) : e.$watch(s(t[f], g), null, c.literal), l.push($);
                            break;
                        case "&":
                            if (c = t.hasOwnProperty(f) ? s(t[f]) : m, c === m && h) break;
                            n[o] = function(t) {
                                return c(e, t)
                            }
                    }
                }), l.length && function() {
                    for (var e = 0, t = l.length; t > e; ++e) l[e]()
                }
            }
            var ae = function(e, t) {
                if (t) {
                    var n, r, i, o = Object.keys(t);
                    for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = t[i]
                } else this.$attr = {};
                this.$$element = e
            };
            ae.prototype = {
                $normalize: pt,
                $addClass: function(e) {
                    e && e.length > 0 && D.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && e.length > 0 && D.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = dt(e, t);
                    n && n.length && D.addClass(this.$$element, n);
                    var r = dt(t, e);
                    r && r.length && D.removeClass(this.$$element, r)
                },
                $set: function(e, t, n, r) {
                    var a, s = this.$$element[0],
                        l = _e(s, e),
                        u = ze(e),
                        c = e;
                    if (l ? (this.$$element.prop(e, t), r = l) : u && (this[u] = t, c = u), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e], r || (this.$attr[e] = r = ue(e, "-"))), a = V(this.$$element), "a" === a && "href" === e || "img" === a && "src" === e) this[e] = t = O(t, "src" === e);
                    else if ("img" === a && "srcset" === e) {
                        for (var p = "", d = Br(t), f = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(d) ? f : /(,)/, m = d.split(h), v = Math.floor(m.length / 2), g = 0; v > g; g++) {
                            var $ = 2 * g;
                            p += O(Br(m[$]), !0), p += " " + Br(m[$ + 1])
                        }
                        var b = Br(m[2 * g]).split(/\s/);
                        p += O(Br(b[0]), !0), 2 === b.length && (p += " " + Br(b[1])), this[e] = t = p
                    }
                    n !== !1 && (null === t || y(t) ? this.$$element.removeAttr(r) : this.$$element.attr(r, t));
                    var w = this.$$observers;
                    w && o(w[c], function(e) {
                        try {
                            e(t)
                        } catch (n) {
                            i(n)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = ve()),
                        i = r[e] || (r[e] = []);
                    return i.push(t), g.$evalAsync(function() {
                            i.$$inter || !n.hasOwnProperty(e) || y(n[e]) || t(n[e])
                        }),
                        function() {
                            H(i, t)
                        }
                }
            };
            var se = r.startSymbol(),
                le = r.endSymbol(),
                ce = "{{" == se || "}}" == le ? v : function(e) {
                    return e.replace(/\{\{/g, se).replace(/}}/g, le)
                },
                de = /^ngAttr[A-Z]/,
                fe = /^(.+)Start$/;
            return N.$$addBindingInfo = S ? function(e, t) {
                var n = e.data("$binding") || [];
                Rr(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : m, N.$$addBindingClass = S ? function(e) {
                M(e, "ng-binding")
            } : m, N.$$addScopeInfo = S ? function(e, t, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                e.data(i, t)
            } : m, N.$$addScopeClass = S ? function(e, t) {
                M(e, t ? "ng-isolate-scope" : "ng-scope")
            } : m, N
        }]
    }

    function pt(e) {
        return xe(e.replace(Ii, ""))
    }

    function dt(e, t) {
        var n = "",
            r = e.split(/\s+/),
            i = t.split(/\s+/);
        e: for (var o = 0; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)
                if (a == i[s]) continue e;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function ft(e) {
        e = Ar(e);
        var t = e.length;
        if (1 >= t) return e;
        for (; t--;) {
            var n = e[t];
            n.nodeType === Zr && jr.call(e, t, 1)
        }
        return e
    }

    function ht(e, t) {
        if (t && C(t)) return t;
        if (C(e)) {
            var n = Fi.exec(e);
            if (n) return n[3]
        }
    }

    function mt() {
        var e = {},
            t = !1;
        this.register = function(t, n) {
            fe(t, "controller"), w(t) ? p(e, t) : e[t] = n
        }, this.allowGlobals = function() {
            t = !0
        }, this.$get = ["$injector", "$window", function(i, o) {
            function a(e, t, n, i) {
                if (!e || !w(e.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                e.$scope[t] = n
            }
            return function(r, s, l, u) {
                var c, d, f, h;
                if (l = l === !0, u && C(u) && (h = u), C(r)) {
                    if (d = r.match(Fi), !d) throw qi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    f = d[1], h = h || d[3], r = e.hasOwnProperty(f) ? e[f] : he(s.$scope, f, !0) || (t ? he(o, f, !0) : n), de(r, f, !0)
                }
                if (l) {
                    var m = (Rr(r) ? r[r.length - 1] : r).prototype;
                    c = Object.create(m || null), h && a(s, h, c, f || r.name);
                    var v;
                    return v = p(function() {
                        var e = i.invoke(r, c, s, f);
                        return e !== c && (w(e) || E(e)) && (c = e, h && a(s, h, c, f || r.name)), c
                    }, {
                        instance: c,
                        identifier: h
                    })
                }
                return c = i.instantiate(r, s, f), h && a(s, h, c, f || r.name), c
            }
        }]
    }

    function vt() {
        this.$get = ["$window", function(e) {
            return Ar(e.document)
        }]
    }

    function gt() {
        this.$get = ["$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function $t(e) {
        return w(e) ? S(e) ? e.toISOString() : G(e) : e
    }

    function yt() {
        this.$get = function() {
            return function(e) {
                if (!e) return "";
                var t = [];
                return a(e, function(e, n) {
                    null === e || y(e) || (Rr(e) ? o(e, function(e, r) {
                        t.push(re(n) + "=" + re($t(e)))
                    }) : t.push(re(n) + "=" + re($t(e))))
                }), t.join("&")
            }
        }
    }

    function bt() {
        this.$get = function() {
            return function(e) {
                function t(e, r, i) {
                    null === e || y(e) || (Rr(e) ? o(e, function(e, n) {
                        t(e, r + "[" + (w(e) ? n : "") + "]")
                    }) : w(e) && !S(e) ? a(e, function(e, n) {
                        t(e, r + (i ? "" : "[") + n + (i ? "" : "]"))
                    }) : n.push(re(r) + "=" + re($t(e))))
                }
                if (!e) return "";
                var n = [];
                return t(e, "", !0), n.join("&")
            }
        }
    }

    function wt(e, t) {
        if (C(e)) {
            var n = e.replace(Bi, "").trim();
            if (n) {
                var r = t("Content-Type");
                (r && 0 === r.indexOf(Hi) || xt(n)) && (e = Y(n))
            }
        }
        return e
    }

    function xt(e) {
        var t = e.match(Ri);
        return t && Ui[t[0]].test(e)
    }

    function Ct(e) {
        function t(e, t) {
            e && (r[e] = r[e] ? r[e] + ", " + t : t)
        }
        var n, r = ve();
        return C(e) ? o(e.split("\n"), function(e) {
            n = e.indexOf(":"), t(Cr(Br(e.substr(0, n))), Br(e.substr(n + 1)))
        }) : w(e) && o(e, function(e, n) {
            t(Cr(n), Br(e))
        }), r
    }

    function kt(e) {
        var t;
        return function(n) {
            if (t || (t = Ct(e)), n) {
                var r = t[Cr(n)];
                return void 0 === r && (r = null), r
            }
            return t
        }
    }

    function St(e, t, n, r) {
        return E(r) ? r(e, t, n) : (o(r, function(r) {
            e = r(e, t, n)
        }), e)
    }

    function Et(e) {
        return e >= 200 && 300 > e
    }

    function Tt() {
        var e = this.defaults = {
                transformResponse: [wt],
                transformRequest: [function(e) {
                    return !w(e) || O(e) || N(e) || M(e) ? e : G(e)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: R(Li),
                    put: R(Li),
                    patch: R(Li)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            t = !1;
        this.useApplyAsync = function(e) {
            return b(e) ? (t = !!e, this) : t
        };
        var i = !0;
        this.useLegacyPromiseExtensions = function(e) {
            return b(e) ? (i = !!e, this) : i
        };
        var a = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(s, l, u, c, d, f) {
            function h(t) {
                function a(e) {
                    var t = p({}, e);
                    return t.data = St(e.data, e.headers, e.status, u.transformResponse), Et(e.status) ? t : d.reject(t)
                }

                function s(e, t) {
                    var n, r = {};
                    return o(e, function(e, i) {
                        E(e) ? (n = e(t), null != n && (r[i] = n)) : r[i] = e
                    }), r
                }

                function l(t) {
                    var n, r, i, o = e.headers,
                        a = p({}, t.headers);
                    o = p({}, o.common, o[Cr(t.method)]);
                    e: for (n in o) {
                        r = Cr(n);
                        for (i in a)
                            if (Cr(i) === r) continue e;
                        a[n] = o[n]
                    }
                    return s(a, R(t))
                }
                if (!Vr.isObject(t)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                var u = p({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse,
                    paramSerializer: e.paramSerializer
                }, t);
                u.headers = l(t), u.method = Sr(u.method), u.paramSerializer = C(u.paramSerializer) ? f.get(u.paramSerializer) : u.paramSerializer;
                var c = function(t) {
                        var r = t.headers,
                            i = St(t.data, kt(r), n, t.transformRequest);
                        return y(i) && o(r, function(e, t) {
                            "content-type" === Cr(t) && delete r[t]
                        }), y(t.withCredentials) && !y(e.withCredentials) && (t.withCredentials = e.withCredentials), g(t, i).then(a, a)
                    },
                    h = [c, n],
                    m = d.when(u);
                for (o(k, function(e) {
                        (e.request || e.requestError) && h.unshift(e.request, e.requestError), (e.response || e.responseError) && h.push(e.response, e.responseError)
                    }); h.length;) {
                    var v = h.shift(),
                        $ = h.shift();
                    m = m.then(v, $)
                }
                return i ? (m.success = function(e) {
                    return de(e, "fn"), m.then(function(t) {
                        e(t.data, t.status, t.headers, u)
                    }), m
                }, m.error = function(e) {
                    return de(e, "fn"), m.then(null, function(t) {
                        e(t.data, t.status, t.headers, u)
                    }), m
                }) : (m.success = zi("success"), m.error = zi("error")), m
            }

            function m(e) {
                o(arguments, function(e) {
                    h[e] = function(t, n) {
                        return h(p({}, n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                })
            }

            function v(e) {
                o(arguments, function(e) {
                    h[e] = function(t, n, r) {
                        return h(p({}, r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                })
            }

            function g(r, i) {
                function o(e, n, r, i) {
                    function o() {
                        a(n, e, r, i)
                    }
                    f && (Et(e) ? f.put(k, [e, n, Ct(r), i]) : f.remove(k)), t ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
                }

                function a(e, t, n, i) {
                    t = t >= -1 ? t : 0, (Et(t) ? v.resolve : v.reject)({
                        data: e,
                        status: t,
                        headers: kt(n),
                        config: r,
                        statusText: i
                    })
                }

                function u(e) {
                    a(e.data, e.status, R(e.headers()), e.statusText)
                }

                function p() {
                    var e = h.pendingRequests.indexOf(r); - 1 !== e && h.pendingRequests.splice(e, 1)
                }
                var f, m, v = d.defer(),
                    g = v.promise,
                    C = r.headers,
                    k = $(r.url, r.paramSerializer(r.params));
                if (h.pendingRequests.push(r), g.then(p, p), !r.cache && !e.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (f = w(r.cache) ? r.cache : w(e.cache) ? e.cache : x), f && (m = f.get(k), b(m) ? P(m) ? m.then(u, u) : Rr(m) ? a(m[1], m[0], R(m[2]), m[3]) : a(m, 200, {}, "OK") : f.put(k, g)), y(m)) {
                    var S = An(r.url) ? l()[r.xsrfCookieName || e.xsrfCookieName] : n;
                    S && (C[r.xsrfHeaderName || e.xsrfHeaderName] = S), s(r.method, k, i, o, C, r.timeout, r.withCredentials, r.responseType)
                }
                return g
            }

            function $(e, t) {
                return t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
            }
            var x = u("$http");
            e.paramSerializer = C(e.paramSerializer) ? f.get(e.paramSerializer) : e.paramSerializer;
            var k = [];
            return o(a, function(e) {
                k.unshift(C(e) ? f.get(e) : f.invoke(e))
            }), h.pendingRequests = [], m("get", "delete", "head", "jsonp"), v("post", "put", "patch"), h.defaults = e, h
        }]
    }

    function Dt() {
        this.$get = function() {
            return function() {
                return new e.XMLHttpRequest
            }
        }
    }

    function At() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(e, t, n, r) {
            return Ot(e, r, e.defer, t.angular.callbacks, n[0])
        }]
    }

    function Ot(e, t, n, r, i) {
        function a(e, t, n) {
            var o = i.createElement("script"),
                a = null;
            return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                ai(o, "load", a), ai(o, "error", a), i.body.removeChild(o), o = null;
                var s = -1,
                    l = "unknown";
                e && ("load" !== e.type || r[t].called || (e = {
                    type: "error"
                }), l = e.type, s = "error" === e.type ? 404 : 200), n && n(s, l)
            }, oi(o, "load", a), oi(o, "error", a), i.body.appendChild(o), a
        }
        return function(i, s, l, u, c, p, d, f) {
            function h() {
                $ && $(), w && w.abort()
            }

            function v(t, r, i, o, a) {
                b(k) && n.cancel(k), $ = w = null, t(r, i, o, a), e.$$completeOutstandingRequest(m)
            }
            if (e.$$incOutstandingRequestCount(), s = s || e.url(), "jsonp" == Cr(i)) {
                var g = "_" + (r.counter++).toString(36);
                r[g] = function(e) {
                    r[g].data = e, r[g].called = !0
                };
                var $ = a(s.replace("JSON_CALLBACK", "angular.callbacks." + g), g, function(e, t) {
                    v(u, e, r[g].data, "", t), r[g] = m
                })
            } else {
                var w = t(i, s);
                w.open(i, s, !0), o(c, function(e, t) {
                    b(e) && w.setRequestHeader(t, e)
                }), w.onload = function() {
                    var e = w.statusText || "",
                        t = "response" in w ? w.response : w.responseText,
                        n = 1223 === w.status ? 204 : w.status;
                    0 === n && (n = t ? 200 : "file" == Dn(s).protocol ? 404 : 0), v(u, n, t, w.getAllResponseHeaders(), e)
                };
                var x = function() {
                    v(u, -1, null, null, "")
                };
                if (w.onerror = x, w.onabort = x, d && (w.withCredentials = !0), f) try {
                    w.responseType = f
                } catch (C) {
                    if ("json" !== f) throw C
                }
                w.send(y(l) ? null : l)
            }
            if (p > 0) var k = n(h, p);
            else P(p) && p.then(h)
        }
    }

    function Mt() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
            function o(e) {
                return "\\\\\\" + e
            }

            function a(n) {
                return n.replace(d, e).replace(f, t)
            }

            function s(e) {
                if (null == e) return "";
                switch (typeof e) {
                    case "string":
                        break;
                    case "number":
                        e = "" + e;
                        break;
                    default:
                        e = G(e)
                }
                return e
            }

            function l(o, l, d, f) {
                function h(e) {
                    try {
                        return e = D(e), f && !b(e) ? e : s(e)
                    } catch (t) {
                        r(Wi.interr(o, t))
                    }
                }
                f = !!f;
                for (var m, v, g, $ = 0, w = [], x = [], C = o.length, k = [], S = []; C > $;) {
                    if (-1 == (m = o.indexOf(e, $)) || -1 == (v = o.indexOf(t, m + u))) {
                        $ !== C && k.push(a(o.substring($)));
                        break
                    }
                    $ !== m && k.push(a(o.substring($, m))), g = o.substring(m + u, v), w.push(g), x.push(n(g, h)), $ = v + c, S.push(k.length), k.push("")
                }
                if (d && k.length > 1 && Wi.throwNoconcat(o), !l || w.length) {
                    var T = function(e) {
                            for (var t = 0, n = w.length; n > t; t++) {
                                if (f && y(e[t])) return;
                                k[S[t]] = e[t]
                            }
                            return k.join("")
                        },
                        D = function(e) {
                            return d ? i.getTrusted(d, e) : i.valueOf(e)
                        };
                    return p(function(e) {
                        var t = 0,
                            n = w.length,
                            i = new Array(n);
                        try {
                            for (; n > t; t++) i[t] = x[t](e);
                            return T(i)
                        } catch (a) {
                            r(Wi.interr(o, a))
                        }
                    }, {
                        exp: o,
                        expressions: w,
                        $$watchDelegate: function(e, t) {
                            var n;
                            return e.$watchGroup(x, function(r, i) {
                                var o = T(r);
                                E(t) && t.call(this, o, r !== i ? n : o, e), n = o
                            })
                        }
                    })
                }
            }
            var u = e.length,
                c = t.length,
                d = new RegExp(e.replace(/./g, o), "g"),
                f = new RegExp(t.replace(/./g, o), "g");
            return l.startSymbol = function() {
                return e
            }, l.endSymbol = function() {
                return t
            }, l
        }]
    }

    function Nt() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(e, t, n, r) {
            function i(i, a, s, l) {
                var u = arguments.length > 4,
                    c = u ? _(arguments, 4) : [],
                    p = t.setInterval,
                    d = t.clearInterval,
                    f = 0,
                    h = b(l) && !l,
                    m = (h ? r : n).defer(),
                    v = m.promise;
                return s = b(s) ? s : 0, v.then(null, null, u ? function() {
                    i.apply(null, c)
                } : i), v.$$intervalId = p(function() {
                    m.notify(f++), s > 0 && f >= s && (m.resolve(f), d(v.$$intervalId), delete o[v.$$intervalId]), h || e.$apply()
                }, a), o[v.$$intervalId] = m, v
            }
            var o = {};
            return i.cancel = function(e) {
                return e && e.$$intervalId in o ? (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0) : !1
            }, i
        }]
    }

    function jt(e) {
        for (var t = e.split("/"), n = t.length; n--;) t[n] = ne(t[n]);
        return t.join("/")
    }

    function Pt(e, t) {
        var n = Dn(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = f(n.port) || Yi[n.protocol] || null
    }

    function It(e, t) {
        var n = "/" !== e.charAt(0);
        n && (e = "/" + e);
        var r = Dn(e);
        t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = ee(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function qt(e, t) {
        return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }

    function Ft(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function Vt(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function Ht(e) {
        return e.substr(0, Ft(e).lastIndexOf("/") + 1)
    }

    function Lt(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function Rt(e, t, n) {
        this.$$html5 = !0, n = n || "", Pt(e, this), this.$$parse = function(e) {
            var n = qt(t, e);
            if (!C(n)) throw Ki("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
            It(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = te(this.$$search),
                n = this.$$hash ? "#" + ne(this.$$hash) : "";
            this.$$url = jt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a, s;
            return b(o = qt(e, r)) ? (a = o, s = b(o = qt(n, o)) ? t + (qt("/", o) || o) : e + a) : b(o = qt(t, r)) ? s = t + o : t == r + "/" && (s = t), s && this.$$parse(s), !!s
        }
    }

    function Ut(e, t, n) {
        Pt(e, this), this.$$parse = function(r) {
            function i(e, t, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
            }
            var o, a = qt(e, r) || qt(t, r);
            y(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", y(a) && (e = r, this.replace())) : (o = qt(n, a), y(o) && (o = a)), It(o, this), this.$$path = i(this.$$path, o, e), this.$$compose()
        }, this.$$compose = function() {
            var t = te(this.$$search),
                r = this.$$hash ? "#" + ne(this.$$hash) : "";
            this.$$url = jt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function(t, n) {
            return Ft(e) == Ft(t) ? (this.$$parse(t), !0) : !1
        }
    }

    function Bt(e, t, n) {
        this.$$html5 = !0, Ut.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return e == Ft(r) ? o = r : (a = qt(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o
        }, this.$$compose = function() {
            var t = te(this.$$search),
                r = this.$$hash ? "#" + ne(this.$$hash) : "";
            this.$$url = jt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url
        }
    }

    function _t(e) {
        return function() {
            return this[e]
        }
    }

    function zt(e, t) {
        return function(n) {
            return y(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function Wt() {
        var e = "",
            t = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.html5Mode = function(e) {
            return j(e) ? (t.enabled = e, this) : w(e) ? (j(e.enabled) && (t.enabled = e.enabled), j(e.requireBase) && (t.requireBase = e.requireBase), j(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
            function s(e, t, n) {
                var i = u.url(),
                    o = u.$$state;
                try {
                    r.url(e, t, n), u.$$state = r.state()
                } catch (a) {
                    throw u.url(i), u.$$state = o, a
                }
            }

            function l(e, t) {
                n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
            }
            var u, c, p, d = r.baseHref(),
                f = r.url();
            if (t.enabled) {
                if (!d && t.requireBase) throw Ki("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                p = Lt(f) + (d || "/"), c = i.history ? Rt : Bt
            } else p = Ft(f), c = Ut;
            var h = Ht(p);
            u = new c(p, h, "#" + e), u.$$parseLinkUrl(f, f), u.$$state = r.state();
            var m = /^\s*(javascript|mailto):/i;
            o.on("click", function(e) {
                if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                    for (var i = Ar(e.target);
                        "a" !== V(i[0]);)
                        if (i[0] === o[0] || !(i = i.parent())[0]) return;
                    var s = i.prop("href"),
                        l = i.attr("href") || i.attr("xlink:href");
                    w(s) && "[object SVGAnimatedString]" === s.toString() && (s = Dn(s.animVal).href), m.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(s, l) && (e.preventDefault(), u.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), Vt(u.absUrl()) != Vt(f) && r.url(u.absUrl(), !0);
            var v = !0;
            return r.onUrlChange(function(e, t) {
                return y(qt(h, e)) ? void(a.location.href = e) : (n.$evalAsync(function() {
                    var r, i = u.absUrl(),
                        o = u.$$state;
                    e = Vt(e), u.$$parse(e), u.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, u.absUrl() === e && (r ? (u.$$parse(i), u.$$state = o, s(i, !1, o)) : (v = !1, l(i, o)))
                }), void(n.$$phase || n.$digest()))
            }), n.$watch(function() {
                var e = Vt(r.url()),
                    t = Vt(u.absUrl()),
                    o = r.state(),
                    a = u.$$replace,
                    c = e !== t || u.$$html5 && i.history && o !== u.$$state;
                (v || c) && (v = !1, n.$evalAsync(function() {
                    var t = u.absUrl(),
                        r = n.$broadcast("$locationChangeStart", t, e, u.$$state, o).defaultPrevented;
                    u.absUrl() === t && (r ? (u.$$parse(e), u.$$state = o) : (c && s(t, a, o === u.$$state ? null : u.$$state), l(e, o)))
                })), u.$$replace = !1
            }), u
        }]
    }

    function Gt() {
        var e = !0,
            t = this;
        this.debugEnabled = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.$get = ["$window", function(n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function i(e) {
                var t = n.console || {},
                    i = t[e] || t.log || m,
                    a = !1;
                try {
                    a = !!i.apply
                } catch (s) {}
                return a ? function() {
                    var e = [];
                    return o(arguments, function(t) {
                        e.push(r(t))
                    }), i.apply(t, e)
                } : function(e, t) {
                    i(e, null == t ? "" : t)
                }
            }
            return {
                log: i("log"),
                info: i("info"),
                warn: i("warn"),
                error: i("error"),
                debug: function() {
                    var n = i("debug");
                    return function() {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function Yt(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Qi("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
        return e
    }

    function Kt(e, t) {
        if (e += "", !C(e)) throw Qi("iseccst", "Cannot convert object to primitive value! Expression: {0}", t);
        return e
    }

    function Xt(e, t) {
        if (e) {
            if (e.constructor === e) throw Qi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e.window === e) throw Qi("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Qi("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Object) throw Qi("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
        }
        return e
    }

    function Qt(e, t) {
        if (e) {
            if (e.constructor === e) throw Qi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Ji || e === Zi || e === eo) throw Qi("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
        }
    }

    function Jt(e, t) {
        if (e && (e === 0..constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor)) throw Qi("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
    }

    function Zt(e, t) {
        return "undefined" != typeof e ? e : t
    }

    function en(e, t) {
        return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
    }

    function tn(e, t) {
        var n = e(t);
        return !n.$stateful
    }

    function nn(e, t) {
        var n, r;
        switch (e.type) {
            case io.Program:
                n = !0, o(e.body, function(e) {
                    nn(e.expression, t), n = n && e.expression.constant
                }), e.constant = n;
                break;
            case io.Literal:
                e.constant = !0, e.toWatch = [];
                break;
            case io.UnaryExpression:
                nn(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                break;
            case io.BinaryExpression:
                nn(e.left, t), nn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                break;
            case io.LogicalExpression:
                nn(e.left, t), nn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case io.ConditionalExpression:
                nn(e.test, t), nn(e.alternate, t), nn(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case io.Identifier:
                e.constant = !1, e.toWatch = [e];
                break;
            case io.MemberExpression:
                nn(e.object, t), e.computed && nn(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
                break;
            case io.CallExpression:
                n = e.filter ? tn(t, e.callee.name) : !1, r = [], o(e.arguments, function(e) {
                    nn(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = e.filter && tn(t, e.callee.name) ? r : [e];
                break;
            case io.AssignmentExpression:
                nn(e.left, t), nn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                break;
            case io.ArrayExpression:
                n = !0, r = [], o(e.elements, function(e) {
                    nn(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case io.ObjectExpression:
                n = !0, r = [], o(e.properties, function(e) {
                    nn(e.value, t), n = n && e.value.constant, e.value.constant || r.push.apply(r, e.value.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case io.ThisExpression:
                e.constant = !1, e.toWatch = []
        }
    }

    function rn(e) {
        if (1 == e.length) {
            var t = e[0].expression,
                r = t.toWatch;
            return 1 !== r.length ? r : r[0] !== t ? r : n
        }
    }

    function on(e) {
        return e.type === io.Identifier || e.type === io.MemberExpression
    }

    function an(e) {
        return 1 === e.body.length && on(e.body[0].expression) ? {
            type: io.AssignmentExpression,
            left: e.body[0].expression,
            right: {
                type: io.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function sn(e) {
        return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === io.Literal || e.body[0].expression.type === io.ArrayExpression || e.body[0].expression.type === io.ObjectExpression)
    }

    function ln(e) {
        return e.constant
    }

    function un(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function cn(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function pn(e) {
        return "constructor" == e
    }

    function dn(e) {
        return E(e.valueOf) ? e.valueOf() : ao.call(e)
    }

    function fn() {
        var e = ve(),
            t = ve();
        this.$get = ["$filter", function(r) {
            function i(e, t) {
                return null == e || null == t ? e === t : "object" == typeof e && (e = dn(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
            }

            function a(e, t, r, o, a) {
                var s, l = o.inputs;
                if (1 === l.length) {
                    var u = i;
                    return l = l[0], e.$watch(function(e) {
                        var t = l(e);
                        return i(t, u) || (s = o(e, n, n, [t]), u = t && dn(t)), s
                    }, t, r, a)
                }
                for (var c = [], p = [], d = 0, f = l.length; f > d; d++) c[d] = i, p[d] = null;
                return e.$watch(function(e) {
                    for (var t = !1, r = 0, a = l.length; a > r; r++) {
                        var u = l[r](e);
                        (t || (t = !i(u, c[r]))) && (p[r] = u, c[r] = u && dn(u))
                    }
                    return t && (s = o(e, n, n, p)), s
                }, t, r, a)
            }

            function s(e, t, n, r) {
                var i, o;
                return i = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    o = e, E(t) && t.apply(this, arguments), b(e) && r.$$postDigest(function() {
                        b(o) && i()
                    })
                }, n)
            }

            function l(e, t, n, r) {
                function i(e) {
                    var t = !0;
                    return o(e, function(e) {
                        b(e) || (t = !1)
                    }), t
                }
                var a, s;
                return a = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    s = e, E(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function() {
                        i(s) && a()
                    })
                }, n)
            }

            function u(e, t, n, r) {
                var i;
                return i = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    E(t) && t.apply(this, arguments), i()
                }, n)
            }

            function c(e, t) {
                if (!t) return e;
                var n = e.$$watchDelegate,
                    r = !1,
                    i = n !== l && n !== s,
                    o = i ? function(n, i, o, a) {
                        var s = r && a ? a[0] : e(n, i, o, a);
                        return t(s, n, i)
                    } : function(n, r, i, o) {
                        var a = e(n, r, i, o),
                            s = t(a, n, r);
                        return b(a) ? s : a
                    };
                return e.$$watchDelegate && e.$$watchDelegate !== a ? o.$$watchDelegate = e.$$watchDelegate : t.$stateful || (o.$$watchDelegate = a, r = !e.inputs, o.inputs = e.inputs ? e.inputs : [e]), o
            }
            var p = zr().noUnsafeEval,
                d = {
                    csp: p,
                    expensiveChecks: !1
                },
                f = {
                    csp: p,
                    expensiveChecks: !0
                };
            return function(n, i, o) {
                var p, h, v;
                switch (typeof n) {
                    case "string":
                        n = n.trim(), v = n;
                        var g = o ? t : e;
                        if (p = g[v], !p) {
                            ":" === n.charAt(0) && ":" === n.charAt(1) && (h = !0, n = n.substring(2));
                            var $ = o ? f : d,
                                y = new ro($),
                                b = new oo(y, r, $);
                            p = b.parse(n), p.constant ? p.$$watchDelegate = u : h ? p.$$watchDelegate = p.literal ? l : s : p.inputs && (p.$$watchDelegate = a), g[v] = p
                        }
                        return c(p, i);
                    case "function":
                        return c(n, i);
                    default:
                        return m
                }
            }
        }]
    }

    function hn() {
        this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
            return vn(function(t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function mn() {
        this.$get = ["$browser", "$exceptionHandler", function(e, t) {
            return vn(function(t) {
                e.defer(t)
            }, t)
        }]
    }

    function vn(e, t) {
        function i(e, t, n) {
            function r(t) {
                return function(n) {
                    i || (i = !0, t.call(e, n))
                }
            }
            var i = !1;
            return [r(t), r(n)]
        }

        function a() {
            this.$$state = {
                status: 0
            }
        }

        function s(e, t) {
            return function(n) {
                t.call(e, n)
            }
        }

        function l(e) {
            var r, i, o;
            o = e.pending, e.processScheduled = !1, e.pending = n;
            for (var a = 0, s = o.length; s > a; ++a) {
                i = o[a][0], r = o[a][e.status];
                try {
                    E(r) ? i.resolve(r(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                } catch (l) {
                    i.reject(l), t(l)
                }
            }
        }

        function u(t) {
            !t.processScheduled && t.pending && (t.processScheduled = !0, e(function() {
                l(t)
            }))
        }

        function c() {
            this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
        }

        function d(e) {
            var t = new c,
                n = 0,
                r = Rr(e) ? [] : {};
            return o(e, function(e, i) {
                n++, $(e).then(function(e) {
                    r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                }, function(e) {
                    r.hasOwnProperty(i) || t.reject(e)
                })
            }), 0 === n && t.resolve(r), t.promise
        }
        var f = r("$q", TypeError),
            h = function() {
                return new c
            };
        p(a.prototype, {
            then: function(e, t, n) {
                if (y(e) && y(t) && y(n)) return this;
                var r = new c;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && u(this.$$state), r.promise
            },
            "catch": function(e) {
                return this.then(null, e)
            },
            "finally": function(e, t) {
                return this.then(function(t) {
                    return g(t, !0, e)
                }, function(t) {
                    return g(t, !1, e)
                }, t)
            }
        }), p(c.prototype, {
            resolve: function(e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(f("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
            },
            $$resolve: function(e) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    (w(e) || E(e)) && (n = e && e.then), E(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, u(this.promise.$$state))
                } catch (o) {
                    r[1](o), t(o)
                }
            },
            reject: function(e) {
                this.promise.$$state.status || this.$$reject(e)
            },
            $$reject: function(e) {
                this.promise.$$state.value = e, this.promise.$$state.status = 2, u(this.promise.$$state)
            },
            notify: function(n) {
                var r = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && r && r.length && e(function() {
                    for (var e, i, o = 0, a = r.length; a > o; o++) {
                        i = r[o][0], e = r[o][3];
                        try {
                            i.notify(E(e) ? e(n) : n)
                        } catch (s) {
                            t(s)
                        }
                    }
                })
            }
        });
        var m = function(e) {
                var t = new c;
                return t.reject(e), t.promise
            },
            v = function(e, t) {
                var n = new c;
                return t ? n.resolve(e) : n.reject(e), n.promise
            },
            g = function(e, t, n) {
                var r = null;
                try {
                    E(n) && (r = n())
                } catch (i) {
                    return v(i, !1)
                }
                return P(r) ? r.then(function() {
                    return v(e, t)
                }, function(e) {
                    return v(e, !1)
                }) : v(e, t)
            },
            $ = function(e, t, n, r) {
                var i = new c;
                return i.resolve(e), i.promise.then(t, n, r)
            },
            b = $,
            x = function C(e) {
                function t(e) {
                    r.resolve(e)
                }

                function n(e) {
                    r.reject(e)
                }
                if (!E(e)) throw f("norslvr", "Expected resolverFn, got '{0}'", e);
                if (!(this instanceof C)) return new C(e);
                var r = new c;
                return e(t, n), r.promise
            };
        return x.defer = h, x.reject = m, x.when = $, x.resolve = b, x.all = d, x
    }

    function gn() {
        this.$get = ["$window", "$timeout", function(e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                i = !!n,
                o = i ? function(e) {
                    var t = n(e);
                    return function() {
                        r(t)
                    }
                } : function(e) {
                    var n = t(e, 16.66, !1);
                    return function() {
                        t.cancel(n)
                    }
                };
            return o.supported = i, o
        }]
    }

    function $n() {
        function e(e) {
            function t() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = l(), this.$$ChildScope = null
            }
            return t.prototype = e, t
        }
        var t = 10,
            n = r("$rootScope"),
            a = null,
            s = null;
        this.digestTtl = function(e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, u, c, p) {
            function d(e) {
                e.currentScope.$$destroyed = !0
            }

            function f(e) {
                9 === Dr && (e.$$childHead && f(e.$$childHead), e.$$nextSibling && f(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
            }

            function h() {
                this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function v(e) {
                if (S.$$phase) throw n("inprog", "{0} already in progress", S.$$phase);
                S.$$phase = e
            }

            function g() {
                S.$$phase = null
            }

            function $(e, t) {
                do e.$$watchersCount += t; while (e = e.$parent)
            }

            function b(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function x() {}

            function C() {
                for (; A.length;) try {
                    A.shift()()
                } catch (e) {
                    u(e)
                }
                s = null
            }

            function k() {
                null === s && (s = p.defer(function() {
                    S.$apply(C)
                }))
            }
            h.prototype = {
                constructor: h,
                $new: function(t, n) {
                    var r;
                    return n = n || this, t ? (r = new h, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", d), r
                },
                $watch: function(e, t, n, r) {
                    var i = c(e);
                    if (i.$$watchDelegate) return i.$$watchDelegate(this, t, n, i, e);
                    var o = this,
                        s = o.$$watchers,
                        l = {
                            fn: t,
                            last: x,
                            get: i,
                            exp: r || e,
                            eq: !!n
                        };
                    return a = null, E(t) || (l.fn = m), s || (s = o.$$watchers = []), s.unshift(l), $(this, 1),
                        function() {
                            H(s, l) >= 0 && $(o, -1), a = null
                        }
                },
                $watchGroup: function(e, t) {
                    function n() {
                        l = !1, u ? (u = !1, t(i, i, s)) : t(i, r, s)
                    }
                    var r = new Array(e.length),
                        i = new Array(e.length),
                        a = [],
                        s = this,
                        l = !1,
                        u = !0;
                    if (!e.length) {
                        var c = !0;
                        return s.$evalAsync(function() {
                                c && t(i, i, s)
                            }),
                            function() {
                                c = !1
                            }
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
                        i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                    }) : (o(e, function(e, t) {
                        var o = s.$watch(e, function(e, o) {
                            i[t] = e, r[t] = o, l || (l = !0, s.$evalAsync(n))
                        });
                        a.push(o)
                    }), function() {
                        for (; a.length;) a.shift()()
                    })
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        o = e;
                        var t, n, r, s, l;
                        if (!y(o)) {
                            if (w(o))
                                if (i(o)) {
                                    a !== f && (a = f, v = a.length = 0, p++), t = o.length, v !== t && (p++, a.length = v = t);
                                    for (var u = 0; t > u; u++) l = a[u], s = o[u], r = l !== l && s !== s, r || l === s || (p++, a[u] = s)
                                } else {
                                    a !== h && (a = h = {}, v = 0, p++), t = 0;
                                    for (n in o) kr.call(o, n) && (t++, s = o[n], l = a[n], n in a ? (r = l !== l && s !== s, r || l === s || (p++, a[n] = s)) : (v++, a[n] = s, p++));
                                    if (v > t) {
                                        p++;
                                        for (n in a) kr.call(o, n) || (v--, delete a[n])
                                    }
                                }
                            else a !== o && (a = o, p++);
                            return p
                        }
                    }

                    function r() {
                        if (m ? (m = !1, t(o, o, l)) : t(o, s, l), u)
                            if (w(o))
                                if (i(o)) {
                                    s = new Array(o.length);
                                    for (var e = 0; e < o.length; e++) s[e] = o[e]
                                } else {
                                    s = {};
                                    for (var n in o) kr.call(o, n) && (s[n] = o[n])
                                }
                        else s = o
                    }
                    n.$stateful = !0;
                    var o, a, s, l = this,
                        u = t.length > 1,
                        p = 0,
                        d = c(e, n),
                        f = [],
                        h = {},
                        m = !0,
                        v = 0;
                    return this.$watch(d, r)
                },
                $digest: function() {
                    var e, r, i, o, l, c, d, f, h, m, $ = t,
                        y = this,
                        b = [];
                    v("$digest"), p.$$checkUrlChange(), this === S && null !== s && (p.defer.cancel(s), C()), a = null;
                    do {
                        for (c = !1, f = y; T.length;) {
                            try {
                                m = T.shift(), m.scope.$eval(m.expression, m.locals)
                            } catch (w) {
                                u(w)
                            }
                            a = null
                        }
                        e: do {
                            if (o = f.$$watchers)
                                for (l = o.length; l--;) try {
                                    if (e = o[l])
                                        if ((r = e.get(f)) === (i = e.last) || (e.eq ? U(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                            if (e === a) {
                                                c = !1;
                                                break e
                                            }
                                        } else c = !0, a = e, e.last = e.eq ? L(r, null) : r, e.fn(r, i === x ? r : i, f), 5 > $ && (h = 4 - $, b[h] || (b[h] = []), b[h].push({
                                            msg: E(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                            newVal: r,
                                            oldVal: i
                                        }))
                                } catch (w) {
                                    u(w)
                                }
                            if (!(d = f.$$watchersCount && f.$$childHead || f !== y && f.$$nextSibling))
                                for (; f !== y && !(d = f.$$nextSibling);) f = f.$parent
                        } while (f = d);
                        if ((c || T.length) && !$--) throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, b)
                    } while (c || T.length);
                    for (g(); D.length;) try {
                        D.shift()()
                    } catch (w) {
                        u(w)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === S && p.$$applicationDestroyed(), $(this, -this.$$watchersCount);
                        for (var t in this.$$listenerCount) b(this, this.$$listenerCount[t], t);
                        e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = m, this.$on = this.$watch = this.$watchGroup = function() {
                            return m
                        }, this.$$listeners = {}, this.$$nextSibling = null, f(this)
                    }
                },
                $eval: function(e, t) {
                    return c(e)(this, t)
                },
                $evalAsync: function(e, t) {
                    S.$$phase || T.length || p.defer(function() {
                        T.length && S.$digest()
                    }), T.push({
                        scope: this,
                        expression: e,
                        locals: t
                    })
                },
                $$postDigest: function(e) {
                    D.push(e)
                },
                $apply: function(e) {
                    try {
                        v("$apply");
                        try {
                            return this.$eval(e)
                        } finally {
                            g()
                        }
                    } catch (t) {
                        u(t)
                    } finally {
                        try {
                            S.$digest()
                        } catch (t) {
                            throw u(t), t
                        }
                    }
                },
                $applyAsync: function(e) {
                    function t() {
                        n.$eval(e)
                    }
                    var n = this;
                    e && A.push(t), k()
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var i = this;
                    return function() {
                        var r = n.indexOf(t); - 1 !== r && (n[r] = null, b(i, 1, e))
                    }
                },
                $emit: function(e, t) {
                    var n, r, i, o = [],
                        a = this,
                        s = !1,
                        l = {
                            name: e,
                            targetScope: a,
                            stopPropagation: function() {
                                s = !0
                            },
                            preventDefault: function() {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        c = B([l], arguments, 1);
                    do {
                        for (n = a.$$listeners[e] || o, l.currentScope = a, r = 0, i = n.length; i > r; r++)
                            if (n[r]) try {
                                n[r].apply(null, c)
                            } catch (p) {
                                u(p)
                            } else n.splice(r, 1), r--, i--;
                        if (s) return l.currentScope = null, l;
                        a = a.$parent
                    } while (a);
                    return l.currentScope = null, l
                },
                $broadcast: function(e, t) {
                    var n = this,
                        r = n,
                        i = n,
                        o = {
                            name: e,
                            targetScope: n,
                            preventDefault: function() {
                                o.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!n.$$listenerCount[e]) return o;
                    for (var a, s, l, c = B([o], arguments, 1); r = i;) {
                        for (o.currentScope = r, a = r.$$listeners[e] || [], s = 0, l = a.length; l > s; s++)
                            if (a[s]) try {
                                a[s].apply(null, c)
                            } catch (p) {
                                u(p)
                            } else a.splice(s, 1), s--, l--;
                        if (!(i = r.$$listenerCount[e] && r.$$childHead || r !== n && r.$$nextSibling))
                            for (; r !== n && !(i = r.$$nextSibling);) r = r.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var S = new h,
                T = S.$$asyncQueue = [],
                D = S.$$postDigestQueue = [],
                A = S.$$applyAsyncQueue = [];
            return S
        }]
    }

    function yn() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return b(e) ? (t = e, this) : t
        }, this.$get = function() {
            return function(n, r) {
                var i, o = r ? t : e;
                return i = Dn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function bn(e) {
        if ("self" === e) return e;
        if (C(e)) {
            if (e.indexOf("***") > -1) throw so("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
            return e = _r(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (T(e)) return new RegExp("^" + e.source + "$");
        throw so("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function wn(e) {
        var t = [];
        return b(e) && o(e, function(e) {
            t.push(bn(e))
        }), t
    }

    function xn() {
        this.SCE_CONTEXTS = lo;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = wn(t)), e
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = wn(e)), t
        }, this.$get = ["$injector", function(n) {
            function r(e, t) {
                return "self" === e ? An(t) : !!e.exec(t.href)
            }

            function i(n) {
                var i, o, a = Dn(n.toString()),
                    s = !1;
                for (i = 0, o = e.length; o > i; i++)
                    if (r(e[i], a)) {
                        s = !0;
                        break
                    }
                if (s)
                    for (i = 0, o = t.length; o > i; i++)
                        if (r(t[i], a)) {
                            s = !1;
                            break
                        }
                return s
            }

            function o(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }

            function a(e, t) {
                var n = p.hasOwnProperty(e) ? p[e] : null;
                if (!n) throw so("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                if (null === t || y(t) || "" === t) return t;
                if ("string" != typeof t) throw so("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                return new n(t)
            }

            function s(e) {
                return e instanceof c ? e.$$unwrapTrustedValue() : e
            }

            function l(e, t) {
                if (null === t || y(t) || "" === t) return t;
                var n = p.hasOwnProperty(e) ? p[e] : null;
                if (n && t instanceof n) return t.$$unwrapTrustedValue();
                if (e === lo.RESOURCE_URL) {
                    if (i(t)) return t;
                    throw so("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                }
                if (e === lo.HTML) return u(t);
                throw so("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var u = function(e) {
                throw so("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            n.has("$sanitize") && (u = n.get("$sanitize"));
            var c = o(),
                p = {};
            return p[lo.HTML] = o(c), p[lo.CSS] = o(c), p[lo.URL] = o(c), p[lo.JS] = o(c), p[lo.RESOURCE_URL] = o(p[lo.URL]), {
                trustAs: a,
                getTrusted: l,
                valueOf: s
            }
        }]
    }

    function Cn() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > Dr) throw so("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = R(lo);
            r.isEnabled = function() {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                return t
            }, r.valueOf = v), r.parseAs = function(e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function(t) {
                    return r.getTrusted(e, t)
                })
            };
            var i = r.parseAs,
                a = r.getTrusted,
                s = r.trustAs;
            return o(lo, function(e, t) {
                var n = Cr(t);
                r[xe("parse_as_" + n)] = function(t) {
                    return i(e, t)
                }, r[xe("get_trusted_" + n)] = function(t) {
                    return a(e, t)
                }, r[xe("trust_as_" + n)] = function(t) {
                    return s(e, t)
                }
            }), r
        }]
    }

    function kn() {
        this.$get = ["$window", "$document", function(e, t) {
            var n, r, i = {},
                o = f((/android (\d+)/.exec(Cr((e.navigator || {}).userAgent)) || [])[1]),
                a = /Boxee/i.test((e.navigator || {}).userAgent),
                s = t[0] || {},
                l = /^(Moz|webkit|ms)(?=[A-Z])/,
                u = s.body && s.body.style,
                c = !1,
                p = !1;
            if (u) {
                for (var d in u)
                    if (r = l.exec(d)) {
                        n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in u && "webkit"), c = !!("transition" in u || n + "Transition" in u), p = !!("animation" in u || n + "Animation" in u), !o || c && p || (c = C(u.webkitTransition), p = C(u.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > o || a),
                hasEvent: function(e) {
                    if ("input" === e && 11 >= Dr) return !1;
                    if (y(i[e])) {
                        var t = s.createElement("div");
                        i[e] = "on" + e in t
                    }
                    return i[e]
                },
                csp: zr(),
                vendorPrefix: n,
                transitions: c,
                animations: p,
                android: o
            }
        }]
    }

    function Sn() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(e, t, n, r) {
            function i(o, a) {
                function s(e) {
                    if (!a) throw Pi("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", o, e.status, e.statusText);
                    return n.reject(e)
                }
                i.totalPendingRequests++, C(o) && e.get(o) || (o = r.getTrustedResourceUrl(o));
                var l = t.defaults && t.defaults.transformResponse;
                Rr(l) ? l = l.filter(function(e) {
                    return e !== wt
                }) : l === wt && (l = null);
                var u = {
                    cache: e,
                    transformResponse: l
                };
                return t.get(o, u)["finally"](function() {
                    i.totalPendingRequests--
                }).then(function(t) {
                    return e.put(o, t.data), t.data
                }, s)
            }
            return i.totalPendingRequests = 0, i
        }]
    }

    function En() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
            var r = {};
            return r.findBindings = function(e, t, n) {
                var r = e.getElementsByClassName("ng-binding"),
                    i = [];
                return o(r, function(e) {
                    var r = Vr.element(e).data("$binding");
                    r && o(r, function(r) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + _r(t) + "(\\s|\\||$)");
                            o.test(r) && i.push(e)
                        } else -1 != r.indexOf(t) && i.push(e)
                    })
                }), i
            }, r.findModels = function(e, t, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var o = n ? "=" : "*=",
                        a = "[" + r[i] + "model" + o + '"' + t + '"]',
                        s = e.querySelectorAll(a);
                    if (s.length) return s
                }
            }, r.getLocation = function() {
                return n.url()
            }, r.setLocation = function(t) {
                t !== n.url() && (n.url(t), e.$digest())
            }, r.whenStable = function(e) {
                t.notifyWhenNoOutstandingRequests(e)
            }, r
        }]
    }

    function Tn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
            function o(o, s, l) {
                E(o) || (l = s, s = o, o = m);
                var u, c = _(arguments, 3),
                    p = b(l) && !l,
                    d = (p ? r : n).defer(),
                    f = d.promise;
                return u = t.defer(function() {
                    try {
                        d.resolve(o.apply(null, c))
                    } catch (t) {
                        d.reject(t), i(t)
                    } finally {
                        delete a[f.$$timeoutId]
                    }
                    p || e.$apply()
                }, s), f.$$timeoutId = u, a[u] = d, f
            }
            var a = {};
            return o.cancel = function(e) {
                return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
            }, o
        }]
    }

    function Dn(e) {
        var t = e;
        return Dr && (uo.setAttribute("href", t), t = uo.href), uo.setAttribute("href", t), {
            href: uo.href,
            protocol: uo.protocol ? uo.protocol.replace(/:$/, "") : "",
            host: uo.host,
            search: uo.search ? uo.search.replace(/^\?/, "") : "",
            hash: uo.hash ? uo.hash.replace(/^#/, "") : "",
            hostname: uo.hostname,
            port: uo.port,
            pathname: "/" === uo.pathname.charAt(0) ? uo.pathname : "/" + uo.pathname
        }
    }

    function An(e) {
        var t = C(e) ? Dn(e) : e;
        return t.protocol === co.protocol && t.host === co.host
    }

    function On() {
        this.$get = g(e)
    }

    function Mn(e) {
        function t(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var n = e[0] || {},
            r = {},
            i = "";
        return function() {
            var e, o, a, s, l, u = n.cookie || "";
            if (u !== i)
                for (i = u, e = i.split("; "), r = {}, a = 0; a < e.length; a++) o = e[a], s = o.indexOf("="), s > 0 && (l = t(o.substring(0, s)), y(r[l]) && (r[l] = t(o.substring(s + 1))));
            return r
        }
    }

    function Nn() {
        this.$get = Mn
    }

    function jn(e) {
        function t(r, i) {
            if (w(r)) {
                var a = {};
                return o(r, function(e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(r + n, i)
        }
        var n = "Filter";
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + n)
            }
        }], t("currency", Vn), t("date", Qn), t("filter", Pn), t("json", Jn), t("limitTo", Zn), t("lowercase", vo), t("number", Hn), t("orderBy", er), t("uppercase", go)
    }

    function Pn() {
        return function(e, t, n) {
            if (!i(e)) {
                if (null == e) return e;
                throw r("filter")("notarray", "Expected array but received: {0}", e)
            }
            var o, a, s = Fn(t);
            switch (s) {
                case "function":
                    o = t;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    a = !0;
                case "object":
                    o = In(t, n, a);
                    break;
                default:
                    return e
            }
            return Array.prototype.filter.call(e, o)
        }
    }

    function In(e, t, n) {
        var r, i = w(e) && "$" in e;
        return t === !0 ? t = U : E(t) || (t = function(e, t) {
            return y(e) ? !1 : null === e || null === t ? e === t : w(t) || w(e) && !$(e) ? !1 : (e = Cr("" + e), t = Cr("" + t), -1 !== e.indexOf(t))
        }), r = function(r) {
            return i && !w(r) ? qn(r, e.$, t, !1) : qn(r, e, t, n)
        }
    }

    function qn(e, t, n, r, i) {
        var o = Fn(e),
            a = Fn(t);
        if ("string" === a && "!" === t.charAt(0)) return !qn(e, t.substring(1), n, r);
        if (Rr(e)) return e.some(function(e) {
            return qn(e, t, n, r)
        });
        switch (o) {
            case "object":
                var s;
                if (r) {
                    for (s in e)
                        if ("$" !== s.charAt(0) && qn(e[s], t, n, !0)) return !0;
                    return i ? !1 : qn(e, t, n, !1)
                }
                if ("object" === a) {
                    for (s in t) {
                        var l = t[s];
                        if (!E(l) && !y(l)) {
                            var u = "$" === s,
                                c = u ? e : e[s];
                            if (!qn(c, l, n, u, u)) return !1
                        }
                    }
                    return !0
                }
                return n(e, t);
            case "function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function Fn(e) {
        return null === e ? "null" : typeof e
    }

    function Vn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, r) {
            return y(n) && (n = t.CURRENCY_SYM), y(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : Ln(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function Hn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null == e ? e : Ln(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function Ln(e, t, n, r, i) {
        if (w(e)) return "";
        var o = 0 > e;
        e = Math.abs(e);
        var a = e === 1 / 0;
        if (!a && !isFinite(e)) return "";
        var s = e + "",
            l = "",
            u = !1,
            c = [];
        if (a && (l = "∞"), !a && -1 !== s.indexOf("e")) {
            var p = s.match(/([\d\.]+)e(-?)(\d+)/);
            p && "-" == p[2] && p[3] > i + 1 ? e = 0 : (l = s, u = !0)
        }
        if (a || u) i > 0 && 1 > e && (l = e.toFixed(i), e = parseFloat(l), l = l.replace(po, r));
        else {
            var d = (s.split(po)[1] || "").length;
            y(i) && (i = Math.min(Math.max(t.minFrac, d), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i);
            var f = ("" + e).split(po),
                h = f[0];
            f = f[1] || "";
            var m, v = 0,
                g = t.lgSize,
                $ = t.gSize;
            if (h.length >= g + $)
                for (v = h.length - g, m = 0; v > m; m++)(v - m) % $ === 0 && 0 !== m && (l += n), l += h.charAt(m);
            for (m = v; m < h.length; m++)(h.length - m) % g === 0 && 0 !== m && (l += n), l += h.charAt(m);
            for (; f.length < i;) f += "0";
            i && "0" !== i && (l += r + f.substr(0, i))
        }
        return 0 === e && (o = !1), c.push(o ? t.negPre : t.posPre, l, o ? t.negSuf : t.posSuf), c.join("")
    }

    function Rn(e, t, n) {
        var r = "";
        for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function Un(e, t, n, r) {
        return n = n || 0,
            function(i) {
                var o = i["get" + e]();
                return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), Rn(o, t, r)
            }
    }

    function Bn(e, t) {
        return function(n, r) {
            var i = n["get" + e](),
                o = Sr(t ? "SHORT" + e : e);
            return r[o][i]
        }
    }

    function _n(e, t, n) {
        var r = -1 * n,
            i = r >= 0 ? "+" : "";
        return i += Rn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Rn(Math.abs(r % 60), 2)
    }

    function zn(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function Wn(e) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
    }

    function Gn(e) {
        return function(t) {
            var n = zn(t.getFullYear()),
                r = Wn(t),
                i = +r - +n,
                o = 1 + Math.round(i / 6048e5);
            return Rn(o, e)
        }
    }

    function Yn(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function Kn(e, t) {
        return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
    }

    function Xn(e, t) {
        return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
    }

    function Qn(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                var r = new Date(0),
                    i = 0,
                    o = 0,
                    a = t[8] ? r.setUTCFullYear : r.setFullYear,
                    s = t[8] ? r.setUTCHours : r.setHours;
                t[9] && (i = f(t[9] + t[10]), o = f(t[9] + t[11])), a.call(r, f(t[1]), f(t[2]) - 1, f(t[3]));
                var l = f(t[4] || 0) - i,
                    u = f(t[5] || 0) - o,
                    c = f(t[6] || 0),
                    p = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                return s.call(r, l, u, c, p), r
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, i) {
            var a, s, l = "",
                u = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, C(n) && (n = mo.test(n) ? f(n) : t(n)), k(n) && (n = new Date(n)), !S(n) || !isFinite(n.getTime())) return n;
            for (; r;) s = ho.exec(r), s ? (u = B(u, s, 1), r = u.pop()) : (u.push(r), r = null);
            var c = n.getTimezoneOffset();
            return i && (c = K(i, n.getTimezoneOffset()), n = Q(n, i, !0)), o(u, function(t) {
                a = fo[t], l += a ? a(n, e.DATETIME_FORMATS, c) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), l
        }
    }

    function Jn() {
        return function(e, t) {
            return y(t) && (t = 2), G(e, t)
        }
    }

    function Zn() {
        return function(e, t, n) {
            return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : f(t), isNaN(t) ? e : (k(e) && (e = e.toString()), Rr(e) || C(e) ? (n = !n || isNaN(n) ? 0 : f(n), n = 0 > n ? Math.max(0, e.length + n) : n, t >= 0 ? e.slice(n, n + t) : 0 === n ? e.slice(t, e.length) : e.slice(Math.max(0, n + t), n)) : e)
        }
    }

    function er(e) {
        function t(t, n) {
            return n = n ? -1 : 1, t.map(function(t) {
                var r = 1,
                    i = v;
                if (E(t)) i = t;
                else if (C(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (r = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t), i.constant))) {
                    var o = i();
                    i = function(e) {
                        return e[o]
                    }
                }
                return {
                    get: i,
                    descending: r * n
                }
            })
        }

        function n(e) {
            switch (typeof e) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function r(e, t) {
            return "function" == typeof e.valueOf && (e = e.valueOf(), n(e)) ? e : $(e) && (e = e.toString(), n(e)) ? e : t
        }

        function o(e, t) {
            var n = typeof e;
            return null === e ? (n = "string", e = "null") : "string" === n ? e = e.toLowerCase() : "object" === n && (e = r(e, t)), {
                value: e,
                type: n
            }
        }

        function a(e, t) {
            var n = 0;
            return e.type === t.type ? e.value !== t.value && (n = e.value < t.value ? -1 : 1) : n = e.type < t.type ? -1 : 1, n
        }
        return function(e, n, r) {
            function s(e, t) {
                return {
                    value: e,
                    predicateValues: u.map(function(n) {
                        return o(n.get(e), t)
                    })
                }
            }

            function l(e, t) {
                for (var n = 0, r = 0, i = u.length; i > r && !(n = a(e.predicateValues[r], t.predicateValues[r]) * u[r].descending); ++r);
                return n
            }
            if (!i(e)) return e;
            Rr(n) || (n = [n]), 0 === n.length && (n = ["+"]);
            var u = t(n, r);
            u.push({
                get: function() {
                    return {}
                },
                descending: r ? -1 : 1
            });
            var c = Array.prototype.map.call(e, s);
            return c.sort(l), e = c.map(function(e) {
                return e.value
            })
        }
    }

    function tr(e) {
        return E(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", g(e)
    }

    function nr(e, t) {
        e.$name = t
    }

    function rr(e, t, r, i, a) {
        var s = this,
            l = [];
        s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(t.name || t.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, s.$$parentForm = bo, s.$rollbackViewValue = function() {
            o(l, function(e) {
                e.$rollbackViewValue()
            })
        }, s.$commitViewValue = function() {
            o(l, function(e) {
                e.$commitViewValue()
            })
        }, s.$addControl = function(e) {
            fe(e.$name, "input"), l.push(e), e.$name && (s[e.$name] = e), e.$$parentForm = s
        }, s.$$renameControl = function(e, t) {
            var n = e.$name;
            s[n] === e && delete s[n], s[t] = e, e.$name = t
        }, s.$removeControl = function(e) {
            e.$name && s[e.$name] === e && delete s[e.$name], o(s.$pending, function(t, n) {
                s.$setValidity(n, null, e)
            }), o(s.$error, function(t, n) {
                s.$setValidity(n, null, e)
            }), o(s.$$success, function(t, n) {
                s.$setValidity(n, null, e)
            }), H(l, e), e.$$parentForm = bo
        }, $r({
            ctrl: this,
            $element: e,
            set: function(e, t, n) {
                var r = e[t];
                if (r) {
                    var i = r.indexOf(n); - 1 === i && r.push(n)
                } else e[t] = [n]
            },
            unset: function(e, t, n) {
                var r = e[t];
                r && (H(r, n), 0 === r.length && delete e[t])
            },
            $animate: i
        }), s.$setDirty = function() {
            i.removeClass(e, na), i.addClass(e, ra), s.$dirty = !0, s.$pristine = !1, s.$$parentForm.$setDirty()
        }, s.$setPristine = function() {
            i.setClass(e, na, ra + " " + wo), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(l, function(e) {
                e.$setPristine()
            })
        }, s.$setUntouched = function() {
            o(l, function(e) {
                e.$setUntouched()
            })
        }, s.$setSubmitted = function() {
            i.addClass(e, wo), s.$submitted = !0, s.$$parentForm.$setSubmitted()
        }
    }

    function ir(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function or(e, t, n, r, i, o) {
        ar(e, t, n, r, i, o), ir(r)
    }

    function ar(e, t, n, r, i, o) {
        var a = Cr(t[0].type);
        if (!i.android) {
            var s = !1;
            t.on("compositionstart", function(e) {
                s = !0
            }), t.on("compositionend", function() {
                s = !1, l()
            })
        }
        var l = function(e) {
            if (u && (o.defer.cancel(u), u = null), !s) {
                var i = t.val(),
                    l = e && e.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (i = Br(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, l)
            }
        };
        if (i.hasEvent("input")) t.on("input", l);
        else {
            var u, c = function(e, t, n) {
                u || (u = o.defer(function() {
                    u = null, t && t.value === n || l(e)
                }))
            };
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || c(e, this, this.value)
            }), i.hasEvent("paste") && t.on("paste cut", c)
        }
        t.on("change", l), r.$render = function() {
            var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            t.val() !== e && t.val(e)
        }
    }

    function sr(e, t) {
        if (S(e)) return e;
        if (C(e)) {
            Mo.lastIndex = 0;
            var n = Mo.exec(e);
            if (n) {
                var r = +n[1],
                    i = +n[2],
                    o = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    u = zn(r),
                    c = 7 * (i - 1);
                return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), l = t.getMilliseconds()), new Date(r, 0, u.getDate() + c, o, a, s, l)
            }
        }
        return NaN
    }

    function lr(e, t) {
        return function(n, r) {
            var i, a;
            if (S(n)) return n;
            if (C(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), So.test(n)) return new Date(n);
                if (e.lastIndex = 0, i = e.exec(n)) return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, o(i, function(e, n) {
                    n < t.length && (a[t[n]] = +e)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return NaN
        }
    }

    function ur(e, t, r, i) {
        return function(o, a, s, l, u, c, p) {
            function d(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }

            function f(e) {
                return b(e) && !S(e) ? r(e) || n : e
            }
            cr(o, a, s, l), ar(o, a, s, l, u, c);
            var h, m = l && l.$options && l.$options.timezone;
            if (l.$$parserName = e, l.$parsers.push(function(e) {
                    if (l.$isEmpty(e)) return null;
                    if (t.test(e)) {
                        var i = r(e, h);
                        return m && (i = Q(i, m)), i
                    }
                    return n
                }), l.$formatters.push(function(e) {
                    if (e && !S(e)) throw sa("datefmt", "Expected `{0}` to be a date", e);
                    return d(e) ? (h = e, h && m && (h = Q(h, m, !0)), p("date")(e, i, m)) : (h = null, "")
                }), b(s.min) || s.ngMin) {
                var v;
                l.$validators.min = function(e) {
                    return !d(e) || y(v) || r(e) >= v
                }, s.$observe("min", function(e) {
                    v = f(e), l.$validate()
                })
            }
            if (b(s.max) || s.ngMax) {
                var g;
                l.$validators.max = function(e) {
                    return !d(e) || y(g) || r(e) <= g
                }, s.$observe("max", function(e) {
                    g = f(e), l.$validate()
                })
            }
        }
    }

    function cr(e, t, r, i) {
        var o = t[0],
            a = i.$$hasNativeValidators = w(o.validity);
        a && i.$parsers.push(function(e) {
            var r = t.prop(xr) || {};
            return r.badInput && !r.typeMismatch ? n : e
        })
    }

    function pr(e, t, r, i, o, a) {
        if (cr(e, t, r, i), ar(e, t, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(e) {
                return i.$isEmpty(e) ? null : Do.test(e) ? parseFloat(e) : n
            }), i.$formatters.push(function(e) {
                if (!i.$isEmpty(e)) {
                    if (!k(e)) throw sa("numfmt", "Expected `{0}` to be a number", e);
                    e = e.toString()
                }
                return e
            }), b(r.min) || r.ngMin) {
            var s;
            i.$validators.min = function(e) {
                return i.$isEmpty(e) || y(s) || e >= s
            }, r.$observe("min", function(e) {
                b(e) && !k(e) && (e = parseFloat(e, 10)), s = k(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
        if (b(r.max) || r.ngMax) {
            var l;
            i.$validators.max = function(e) {
                return i.$isEmpty(e) || y(l) || l >= e
            }, r.$observe("max", function(e) {
                b(e) && !k(e) && (e = parseFloat(e, 10)), l = k(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
    }

    function dr(e, t, n, r, i, o) {
        ar(e, t, n, r, i, o), ir(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || Eo.test(n)
        }
    }

    function fr(e, t, n, r, i, o) {
        ar(e, t, n, r, i, o), ir(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
            var n = e || t;
            return r.$isEmpty(n) || To.test(n)
        }
    }

    function hr(e, t, n, r) {
        y(n.name) && t.attr("name", l());
        var i = function(e) {
            t[0].checked && r.$setViewValue(n.value, e && e.type)
        };
        t.on("click", i), r.$render = function() {
            var e = n.value;
            t[0].checked = e == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function mr(e, t, n, r, i) {
        var o;
        if (b(r)) {
            if (o = e(r), !o.constant) throw sa("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
            return o(t)
        }
        return i
    }

    function vr(e, t, n, r, i, o, a, s) {
        var l = mr(s, e, "ngTrueValue", n.ngTrueValue, !0),
            u = mr(s, e, "ngFalseValue", n.ngFalseValue, !1),
            c = function(e) {
                r.$setViewValue(t[0].checked, e && e.type)
            };
        t.on("click", c), r.$render = function() {
            t[0].checked = r.$viewValue
        }, r.$isEmpty = function(e) {
            return e === !1
        }, r.$formatters.push(function(e) {
            return U(e, l)
        }), r.$parsers.push(function(e) {
            return e ? l : u
        })
    }

    function gr(e, t) {
        return e = "ngClass" + e, ["$animate", function(n) {
            function r(e, t) {
                var n = [];
                e: for (var r = 0; r < e.length; r++) {
                    for (var i = e[r], o = 0; o < t.length; o++)
                        if (i == t[o]) continue e;
                    n.push(i)
                }
                return n
            }

            function i(e) {
                var t = [];
                return Rr(e) ? (o(e, function(e) {
                    t = t.concat(i(e))
                }), t) : C(e) ? e.split(" ") : w(e) ? (o(e, function(e, n) {
                    e && (t = t.concat(n.split(" ")))
                }), t) : e
            }
            return {
                restrict: "AC",
                link: function(a, s, l) {
                    function u(e) {
                        var t = p(e, 1);
                        l.$addClass(t)
                    }

                    function c(e) {
                        var t = p(e, -1);
                        l.$removeClass(t)
                    }

                    function p(e, t) {
                        var n = s.data("$classCounts") || ve(),
                            r = [];
                        return o(e, function(e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function d(e, t) {
                        var i = r(t, e),
                            o = r(e, t);
                        i = p(i, 1), o = p(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                    }

                    function f(e) {
                        if (t === !0 || a.$index % 2 === t) {
                            var n = i(e || []);
                            if (h) {
                                if (!U(e, h)) {
                                    var r = i(h);
                                    d(r, n)
                                }
                            } else u(n)
                        }
                        h = R(e)
                    }
                    var h;
                    a.$watch(l[e], f, !0), l.$observe("class", function(t) {
                        f(a.$eval(l[e]))
                    }), "ngClass" !== e && a.$watch("$index", function(n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(l[e]));
                            o === t ? u(s) : c(s)
                        }
                    })
                }
            }
        }]
    }

    function $r(e) {
        function t(e, t, l) {
            y(t) ? r("$pending", e, l) : i("$pending", e, l), j(t) ? t ? (p(s.$error, e, l), c(s.$$success, e, l)) : (c(s.$error, e, l), p(s.$$success, e, l)) : (p(s.$error, e, l), p(s.$$success, e, l)), s.$pending ? (o(aa, !0), s.$valid = s.$invalid = n, a("", null)) : (o(aa, !1), s.$valid = yr(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
            var u;
            u = s.$pending && s.$pending[e] ? n : s.$error[e] ? !1 : s.$$success[e] ? !0 : null, a(e, u), s.$$parentForm.$setValidity(e, u, s)
        }

        function r(e, t, n) {
            s[e] || (s[e] = {}), c(s[e], t, n)
        }

        function i(e, t, r) {
            s[e] && p(s[e], t, r), yr(s[e]) && (s[e] = n)
        }

        function o(e, t) {
            t && !u[e] ? (d.addClass(l, e), u[e] = !0) : !t && u[e] && (d.removeClass(l, e), u[e] = !1)
        }

        function a(e, t) {
            e = e ? "-" + ue(e, "-") : "", o(ea + e, t === !0), o(ta + e, t === !1)
        }
        var s = e.ctrl,
            l = e.$element,
            u = {},
            c = e.set,
            p = e.unset,
            d = e.$animate;
        u[ta] = !(u[ea] = l.hasClass(ea)), s.$setValidity = t
    }

    function yr(e) {
        if (e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function br(e) {
        e[0].hasAttribute("selected") && (e[0].selected = !0)
    }
    var wr = /^\/(.+)\/([a-z]*)$/,
        xr = "validity",
        Cr = function(e) {
            return C(e) ? e.toLowerCase() : e
        },
        kr = Object.prototype.hasOwnProperty,
        Sr = function(e) {
            return C(e) ? e.toUpperCase() : e
        },
        Er = function(e) {
            return C(e) ? e.replace(/[A-Z]/g, function(e) {
                return String.fromCharCode(32 | e.charCodeAt(0))
            }) : e
        },
        Tr = function(e) {
            return C(e) ? e.replace(/[a-z]/g, function(e) {
                return String.fromCharCode(-33 & e.charCodeAt(0))
            }) : e
        };
    "i" !== "I".toLowerCase() && (Cr = Er, Sr = Tr);
    var Dr, Ar, Or, Mr, Nr = [].slice,
        jr = [].splice,
        Pr = [].push,
        Ir = Object.prototype.toString,
        qr = Object.getPrototypeOf,
        Fr = r("ng"),
        Vr = e.angular || (e.angular = {}),
        Hr = 0;
    Dr = t.documentMode, m.$inject = [], v.$inject = [];
    var Lr, Rr = Array.isArray,
        Ur = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        Br = function(e) {
            return C(e) ? e.trim() : e
        },
        _r = function(e) {
            return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        zr = function() {
            function e() {
                try {
                    return new Function(""), !1
                } catch (e) {
                    return !0
                }
            }
            if (!b(zr.rules)) {
                var n = t.querySelector("[ng-csp]") || t.querySelector("[data-ng-csp]");
                if (n) {
                    var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                    zr.rules = {
                        noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
                        noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
                    }
                } else zr.rules = {
                    noUnsafeEval: e(),
                    noInlineStyle: !1
                }
            }
            return zr.rules
        },
        Wr = function() {
            if (b(Wr.name_)) return Wr.name_;
            var e, n, r, i, o = Gr.length;
            for (n = 0; o > n; ++n)
                if (r = Gr[n], e = t.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                    i = e.getAttribute(r + "jq");
                    break
                }
            return Wr.name_ = i
        },
        Gr = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Yr = /[A-Z]/g,
        Kr = !1,
        Xr = 1,
        Qr = 2,
        Jr = 3,
        Zr = 8,
        ei = 9,
        ti = 11,
        ni = {
            full: "1.4.8",
            major: 1,
            minor: 4,
            dot: 8,
            codeName: "ice-manipulation"
        };
    De.expando = "ng339";
    var ri = De.cache = {},
        ii = 1,
        oi = function(e, t, n) {
            e.addEventListener(t, n, !1)
        },
        ai = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        };
    De._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var si = /([\:\-\_]+(.))/g,
        li = /^moz([A-Z])/,
        ui = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        ci = r("jqLite"),
        pi = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        di = /<|&#?\w+;/,
        fi = /<([\w:-]+)/,
        hi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        mi = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    mi.optgroup = mi.option, mi.tbody = mi.tfoot = mi.colgroup = mi.caption = mi.thead, mi.th = mi.td;
    var vi = Node.prototype.contains || function(e) {
            return !!(16 & this.compareDocumentPosition(e))
        },
        gi = De.prototype = {
            ready: function(n) {
                function r() {
                    i || (i = !0, n())
                }
                var i = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), De(e).on("load", r))
            },
            toString: function() {
                var e = [];
                return o(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return Ar(e >= 0 ? this[e] : this[this.length + e])
            },
            length: 0,
            push: Pr,
            sort: [].sort,
            splice: [].splice
        },
        $i = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
        $i[Cr(e)] = e
    });
    var yi = {};
    o("input,select,option,textarea,button,form,details".split(","), function(e) {
        yi[e] = !0
    });
    var bi = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    o({
        data: Pe,
        removeData: Ne,
        hasData: Se
    }, function(e, t) {
        De[t] = e
    }), o({
        data: Pe,
        inheritedData: Le,
        scope: function(e) {
            return Ar.data(e, "$scope") || Le(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return Ar.data(e, "$isolateScope") || Ar.data(e, "$isolateScopeNoTemplate")
        },
        controller: He,
        injector: function(e) {
            return Le(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: Ie,
        css: function(e, t, n) {
            return t = xe(t), b(n) ? void(e.style[t] = n) : e.style[t]
        },
        attr: function(e, t, r) {
            var i = e.nodeType;
            if (i !== Jr && i !== Qr && i !== Zr) {
                var o = Cr(t);
                if ($i[o]) {
                    if (!b(r)) return e[t] || (e.attributes.getNamedItem(t) || m).specified ? o : n;
                    r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
                } else if (b(r)) e.setAttribute(t, r);
                else if (e.getAttribute) {
                    var a = e.getAttribute(t, 2);
                    return null === a ? n : a
                }
            }
        },
        prop: function(e, t, n) {
            return b(n) ? void(e[t] = n) : e[t]
        },
        text: function() {
            function e(e, t) {
                if (y(t)) {
                    var n = e.nodeType;
                    return n === Xr || n === Jr ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "", e
        }(),
        val: function(e, t) {
            if (y(t)) {
                if (e.multiple && "select" === V(e)) {
                    var n = [];
                    return o(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            return y(t) ? e.innerHTML : (Oe(e, !0), void(e.innerHTML = t))
        },
        empty: Re
    }, function(e, t) {
        De.prototype[t] = function(t, n) {
            var r, i, o = this.length;
            if (e !== Re && y(2 == e.length && e !== Ie && e !== He ? t : n)) {
                if (w(t)) {
                    for (r = 0; o > r; r++)
                        if (e === Pe) e(this[r], t);
                        else
                            for (i in t) e(this[r], i, t[i]);
                    return this
                }
                for (var a = e.$dv, s = y(a) ? Math.min(o, 1) : o, l = 0; s > l; l++) {
                    var u = e(this[l], t, n);
                    a = a ? a + u : u
                }
                return a
            }
            for (r = 0; o > r; r++) e(this[r], t, n);
            return this
        }
    }), o({
        removeData: Ne,
        on: function(e, t, r, i) {
            if (b(i)) throw ci("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (ke(e)) {
                var o = je(e, !0),
                    a = o.events,
                    s = o.handle;
                s || (s = o.handle = We(e, a));
                for (var l = t.indexOf(" ") >= 0 ? t.split(" ") : [t], u = l.length, c = function(t, n, i) {
                        var o = a[t];
                        o || (o = a[t] = [], o.specialHandlerWrapper = n, "$destroy" === t || i || oi(e, t, s)), o.push(r)
                    }; u--;) t = l[u], ui[t] ? (c(ui[t], Ye), c(t, n, !0)) : c(t)
            }
        },
        off: Me,
        one: function(e, t, n) {
            e = Ar(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            Oe(e), o(new De(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return o(e.childNodes, function(e) {
                e.nodeType === Xr && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            var n = e.nodeType;
            if (n === Xr || n === ti) {
                t = new De(t);
                for (var r = 0, i = t.length; i > r; r++) {
                    var o = t[r];
                    e.appendChild(o)
                }
            }
        },
        prepend: function(e, t) {
            if (e.nodeType === Xr) {
                var n = e.firstChild;
                o(new De(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            t = Ar(t).eq(0).clone()[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        },
        remove: Ue,
        detach: function(e) {
            Ue(e, !0)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            t = new De(t);
            for (var i = 0, o = t.length; o > i; i++) {
                var a = t[i];
                r.insertBefore(a, n.nextSibling), n = a
            }
        },
        addClass: Fe,
        removeClass: qe,
        toggleClass: function(e, t, n) {
            t && o(t.split(" "), function(t) {
                var r = n;
                y(r) && (r = !Ie(e, t)), (r ? Fe : qe)(e, t)
            })
        },
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== ti ? t : null
        },
        next: function(e) {
            return e.nextElementSibling
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: Ae,
        triggerHandler: function(e, t, n) {
            var r, i, a, s = t.type || t,
                l = je(e),
                u = l && l.events,
                c = u && u[s];
            c && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: m,
                type: s,
                target: e
            }, t.type && (r = p(r, t)), i = R(c), a = n ? [r].concat(n) : [r], o(i, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, a)
            }))
        }
    }, function(e, t) {
        De.prototype[t] = function(t, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++) y(i) ? (i = e(this[o], t, n, r), b(i) && (i = Ar(i))) : Ve(i, e(this[o], t, n, r));
            return b(i) ? i : this
        }, De.prototype.bind = De.prototype.on, De.prototype.unbind = De.prototype.off
    }), Qe.prototype = {
        put: function(e, t) {
            this[Xe(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[Xe(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = Xe(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var wi = [function() {
            this.$get = [function() {
                return Qe
            }]
        }],
        xi = /^[^\(]*\(\s*([^\)]*)\)/m,
        Ci = /,/,
        ki = /^\s*(_?)(\S+?)\1\s*$/,
        Si = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Ei = r("$injector");
    et.$$annotate = Ze;
    var Ti = r("$animate"),
        Di = 1,
        Ai = "ng-animate",
        Oi = function() {
            this.$get = ["$q", "$$rAF", function(e, t) {
                function n() {}
                return n.all = m, n.chain = m, n.prototype = {
                    end: m,
                    cancel: m,
                    resume: m,
                    pause: m,
                    complete: m,
                    then: function(n, r) {
                        return e(function(e) {
                            t(function() {
                                e()
                            })
                        }).then(n, r)
                    }
                }, n
            }]
        },
        Mi = function() {
            var e = new Qe,
                t = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                function i(e, t, n) {
                    var r = !1;
                    return t && (t = C(t) ? t.split(" ") : Rr(t) ? t : [], o(t, function(t) {
                        t && (r = !0, e[t] = n)
                    })), r
                }

                function a() {
                    o(t, function(t) {
                        var n = e.get(t);
                        if (n) {
                            var r = it(t.attr("class")),
                                i = "",
                                a = "";
                            o(n, function(e, t) {
                                var n = !!r[t];
                                e !== n && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                            }), o(t, function(e) {
                                i && Fe(e, i), a && qe(e, a)
                            }), e.remove(t)
                        }
                    }), t.length = 0
                }

                function s(n, o, s) {
                    var l = e.get(n) || {},
                        u = i(l, o, !0),
                        c = i(l, s, !1);
                    (u || c) && (e.put(n, l), t.push(n), 1 === t.length && r.$$postDigest(a))
                }
                return {
                    enabled: m,
                    on: m,
                    off: m,
                    pin: m,
                    push: function(e, t, r, i) {
                        return i && i(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && s(e, r.addClass, r.removeClass), new n
                    }
                }
            }]
        },
        Ni = ["$provide", function(e) {
            var t = this;
            this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                if (n && "." !== n.charAt(0)) throw Ti("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                var i = n + "-animation";
                t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
            }, this.classNameFilter = function(e) {
                if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter)) {
                    var t = new RegExp("(\\s+|\\/)" + Ai + "(\\s+|\\/)");
                    if (t.test(this.$$classNameFilter.toString())) throw Ti("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ai)
                }
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function(e) {
                function t(e, t, n) {
                    if (n) {
                        var r = rt(n);
                        !r || r.parentNode || r.previousElementSibling || (n = null)
                    }
                    n ? n.after(e) : t.prepend(e)
                }
                return {
                    on: e.on,
                    off: e.off,
                    pin: e.pin,
                    enabled: e.enabled,
                    cancel: function(e) {
                        e.end && e.end()
                    },
                    enter: function(n, r, i, o) {
                        return r = r && Ar(r), i = i && Ar(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", ot(o))
                    },
                    move: function(n, r, i, o) {
                        return r = r && Ar(r), i = i && Ar(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", ot(o))
                    },
                    leave: function(t, n) {
                        return e.push(t, "leave", ot(n), function() {
                            t.remove()
                        })
                    },
                    addClass: function(t, n, r) {
                        return r = ot(r), r.addClass = nt(r.addclass, n), e.push(t, "addClass", r)
                    },
                    removeClass: function(t, n, r) {
                        return r = ot(r), r.removeClass = nt(r.removeClass, n), e.push(t, "removeClass", r)
                    },
                    setClass: function(t, n, r, i) {
                        return i = ot(i), i.addClass = nt(i.addClass, n), i.removeClass = nt(i.removeClass, r), e.push(t, "setClass", i)
                    },
                    animate: function(t, n, r, i, o) {
                        return o = ot(o), o.from = o.from ? p(o.from, n) : n, o.to = o.to ? p(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = nt(o.tempClasses, i), e.push(t, "animate", o)
                    }
                }
            }]
        }],
        ji = function() {
            this.$get = ["$$rAF", "$q", function(e, t) {
                var n = function() {};
                return n.prototype = {
                        done: function(e) {
                            this.defer && this.defer[e === !0 ? "reject" : "resolve"]()
                        },
                        end: function() {
                            this.done()
                        },
                        cancel: function() {
                            this.done(!0)
                        },
                        getPromise: function() {
                            return this.defer || (this.defer = t.defer()), this.defer.promise
                        },
                        then: function(e, t) {
                            return this.getPromise().then(e, t)
                        },
                        "catch": function(e) {
                            return this.getPromise()["catch"](e)
                        },
                        "finally": function(e) {
                            return this.getPromise()["finally"](e)
                        }
                    },
                    function(t, r) {
                        function i() {
                            return e(function() {
                                o(), a || s.done(), a = !0
                            }), s
                        }

                        function o() {
                            r.addClass && (t.addClass(r.addClass), r.addClass = null), r.removeClass && (t.removeClass(r.removeClass), r.removeClass = null), r.to && (t.css(r.to), r.to = null)
                        }
                        r.cleanupStyles && (r.from = r.to = null), r.from && (t.css(r.from), r.from = null);
                        var a, s = new n;
                        return {
                            start: i,
                            end: i
                        }
                    }
            }]
        },
        Pi = r("$compile");
    ct.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Ii = /^((?:x|data)[\:\-_])/i,
        qi = r("$controller"),
        Fi = /^(\S+)(\s+as\s+(\w+))?$/,
        Vi = function() {
            this.$get = ["$document", function(e) {
                return function(t) {
                    return t ? !t.nodeType && t instanceof Ar && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        },
        Hi = "application/json",
        Li = {
            "Content-Type": Hi + ";charset=utf-8"
        },
        Ri = /^\[|^\{(?!\{)/,
        Ui = {
            "[": /]$/,
            "{": /}$/
        },
        Bi = /^\)\]\}',?\n/,
        _i = r("$http"),
        zi = function(e) {
            return function() {
                throw _i("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
            }
        },
        Wi = Vr.$interpolateMinErr = r("$interpolate");
    Wi.throwNoconcat = function(e) {
        throw Wi("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
    }, Wi.interr = function(e, t) {
        return Wi("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
    };
    var Gi = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Yi = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Ki = r("$location"),
        Xi = {
            $$html5: !1,
            $$replace: !1,
            absUrl: _t("$$absUrl"),
            url: function(e) {
                if (y(e)) return this.$$url;
                var t = Gi.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: _t("$$protocol"),
            host: _t("$$host"),
            port: _t("$$port"),
            path: zt("$$path", function(e) {
                return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
            }),
            search: function(e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (C(e) || k(e)) e = e.toString(), this.$$search = ee(e);
                        else {
                            if (!w(e)) throw Ki("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            e = L(e, {}), o(e, function(t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        y(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: zt("$$hash", function(e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    o([Bt, Ut, Rt], function(e) {
        e.prototype = Object.create(Xi), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== Rt || !this.$$html5) throw Ki("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = y(t) ? null : t, this
        }
    });
    var Qi = r("$parse"),
        Ji = Function.prototype.call,
        Zi = Function.prototype.apply,
        eo = Function.prototype.bind,
        to = ve();
    o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
        to[e] = !0
    });
    var no = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "\x0B",
            "'": "'",
            '"': '"'
        },
        ro = function(e) {
            this.options = e
        };
    ro.prototype = {
        constructor: ro,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if ('"' === t || "'" === t) this.readString(t);
                else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(t)) this.readIdent();
                else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: t
                }), this.index++;
                else if (this.isWhitespace(t)) this.index++;
                else {
                    var n = t + this.peek(),
                        r = n + this.peek(2),
                        i = to[t],
                        o = to[n],
                        a = to[r];
                    if (i || o || a) {
                        var s = a ? r : o ? n : t;
                        this.tokens.push({
                            index: this.index,
                            text: s,
                            operator: !0
                        }), this.index += s.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function(e) {
            var t = e || 1;
            return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        },
        isNumber: function(e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "\x0B" === e || " " === e
        },
        isIdent: function(e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            n = n || this.index;
            var r = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw Qi("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = Cr(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function() {
            for (var e = this.index; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if (!this.isIdent(t) && !this.isNumber(t)) break;
                this.index++
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var s = no[o];
                        n += s || o
                    }
                    i = !1
                } else if ("\\" === o) i = !0;
                else {
                    if (o === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var io = function(e, t) {
        this.lexer = e, this.options = t
    };
    io.Program = "Program", io.ExpressionStatement = "ExpressionStatement", io.AssignmentExpression = "AssignmentExpression", io.ConditionalExpression = "ConditionalExpression", io.LogicalExpression = "LogicalExpression", io.BinaryExpression = "BinaryExpression", io.UnaryExpression = "UnaryExpression", io.CallExpression = "CallExpression", io.MemberExpression = "MemberExpression", io.Identifier = "Identifier", io.Literal = "Literal", io.ArrayExpression = "ArrayExpression", io.Property = "Property", io.ObjectExpression = "ObjectExpression", io.ThisExpression = "ThisExpression", io.NGValueParameter = "NGValueParameter", io.prototype = {
        ast: function(e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        },
        program: function() {
            for (var e = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                    type: io.Program,
                    body: e
                }
        },
        expressionStatement: function() {
            return {
                type: io.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var e, t = this.expression(); e = this.expect("|");) t = this.filter(t);
            return t
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e = this.ternary();
            return this.expect("=") && (e = {
                type: io.AssignmentExpression,
                left: e,
                right: this.assignment(),
                operator: "="
            }), e
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                type: io.ConditionalExpression,
                test: n,
                alternate: e,
                consequent: t
            }) : n
        },
        logicalOR: function() {
            for (var e = this.logicalAND(); this.expect("||");) e = {
                type: io.LogicalExpression,
                operator: "||",
                left: e,
                right: this.logicalAND()
            };
            return e
        },
        logicalAND: function() {
            for (var e = this.equality(); this.expect("&&");) e = {
                type: io.LogicalExpression,
                operator: "&&",
                left: e,
                right: this.equality()
            };
            return e
        },
        equality: function() {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                type: io.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.relational()
            };
            return t
        },
        relational: function() {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                type: io.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.additive()
            };
            return t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                type: io.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.multiplicative()
            };
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                type: io.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.unary()
            };
            return t
        },
        unary: function() {
            var e;
            return (e = this.expect("+", "-", "!")) ? {
                type: io.UnaryExpression,
                operator: e.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var e;
            this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.constants.hasOwnProperty(this.peek().text) ? e = L(this.constants[this.consume().text]) : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                type: io.CallExpression,
                callee: e,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === t.text ? (e = {
                type: io.MemberExpression,
                object: e,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === t.text ? e = {
                type: io.MemberExpression,
                object: e,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return e
        },
        filter: function(e) {
            for (var t = [e], n = {
                    type: io.CallExpression,
                    callee: this.identifier(),
                    arguments: t,
                    filter: !0
                }; this.expect(":");) t.push(this.expression());
            return n
        },
        parseArguments: function() {
            var e = [];
            if (")" !== this.peekToken().text)
                do e.push(this.expression()); while (this.expect(","));
            return e
        },
        identifier: function() {
            var e = this.consume();
            return e.identifier || this.throwError("is not a valid identifier", e), {
                type: io.Identifier,
                name: e.text
            }
        },
        constant: function() {
            return {
                type: io.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    e.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: io.ArrayExpression,
                elements: e
            }
        },
        object: function() {
            var e, t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    e = {
                        type: io.Property,
                        kind: "init"
                    }, this.peek().constant ? e.key = this.constant() : this.peek().identifier ? e.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), e.value = this.expression(), t.push(e)
                } while (this.expect(","));
            return this.consume("}"), {
                type: io.ObjectExpression,
                properties: t
            }
        },
        throwError: function(e, t) {
            throw Qi("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        consume: function(e) {
            if (0 === this.tokens.length) throw Qi("ueoe", "Unexpected end of expression: {0}", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Qi("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            return this.peekAhead(0, e, t, n, r)
        },
        peekAhead: function(e, t, n, r, i) {
            if (this.tokens.length > e) {
                var o = this.tokens[e],
                    a = o.text;
                if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
            }
            return !1
        },
        expect: function(e, t, n, r) {
            var i = this.peek(e, t, n, r);
            return i ? (this.tokens.shift(), i) : !1
        },
        constants: {
            "true": {
                type: io.Literal,
                value: !0
            },
            "false": {
                type: io.Literal,
                value: !1
            },
            "null": {
                type: io.Literal,
                value: null
            },
            undefined: {
                type: io.Literal,
                value: n
            },
            "this": {
                type: io.ThisExpression
            }
        }
    }, un.prototype = {
        compile: function(e, t) {
            var r = this,
                i = this.astBuilder.ast(e);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: t,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, nn(i, r.$filter);
            var a, s = "";
            if (this.stage = "assign", a = an(i)) {
                this.state.computing = "assign";
                var l = this.nextId();
                this.recurse(a, l), this.return_(l), s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var u = rn(i.body);
            r.stage = "inputs", o(u, function(e, t) {
                var n = "fn" + t;
                r.state[n] = {
                    vars: [],
                    body: [],
                    own: {}
                }, r.state.computing = n;
                var i = r.nextId();
                r.recurse(e, i), r.return_(i), r.state.inputs.push(n), e.watchId = t
            }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
            var c = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;",
                p = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", c)(this.$filter, Yt, Xt, Qt, Kt, Jt, Zt, en, e);
            return this.state = this.stage = n, p.literal = sn(i), p.constant = ln(i), p
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var e = [],
                t = this.state.inputs,
                n = this;
            return o(t, function(t) {
                e.push("var " + t + "=" + n.generateFunction(t, "s"))
            }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
        },
        generateFunction: function(e, t) {
            return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        },
        filterPrefix: function() {
            var e = [],
                t = this;
            return o(this.state.filters, function(n, r) {
                e.push(n + "=$filter(" + t.escape(r) + ")")
            }), e.length ? "var " + e.join(",") + ";" : ""
        },
        varsPrefix: function(e) {
            return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
        },
        body: function(e) {
            return this.state[e].body.join("")
        },
        recurse: function(e, t, r, i, a, s) {
            var l, u, c, p, d = this;
            if (i = i || m, !s && b(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, r, i, a, !0));
            switch (e.type) {
                case io.Program:
                    o(e.body, function(t, r) {
                        d.recurse(t.expression, n, n, function(e) {
                            u = e
                        }), r !== e.body.length - 1 ? d.current().body.push(u, ";") : d.return_(u)
                    });
                    break;
                case io.Literal:
                    p = this.escape(e.value), this.assign(t, p), i(p);
                    break;
                case io.UnaryExpression:
                    this.recurse(e.argument, n, n, function(e) {
                        u = e
                    }), p = e.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(t, p), i(p);
                    break;
                case io.BinaryExpression:
                    this.recurse(e.left, n, n, function(e) {
                        l = e
                    }), this.recurse(e.right, n, n, function(e) {
                        u = e
                    }), p = "+" === e.operator ? this.plus(l, u) : "-" === e.operator ? this.ifDefined(l, 0) + e.operator + this.ifDefined(u, 0) : "(" + l + ")" + e.operator + "(" + u + ")", this.assign(t, p), i(p);
                    break;
                case io.LogicalExpression:
                    t = t || this.nextId(), d.recurse(e.left, t), d.if_("&&" === e.operator ? t : d.not(t), d.lazyRecurse(e.right, t)), i(t);
                    break;
                case io.ConditionalExpression:
                    t = t || this.nextId(), d.recurse(e.test, t), d.if_(t, d.lazyRecurse(e.alternate, t), d.lazyRecurse(e.consequent, t)), i(t);
                    break;
                case io.Identifier:
                    t = t || this.nextId(), r && (r.context = "inputs" === d.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), r.computed = !1, r.name = e.name), Yt(e.name), d.if_("inputs" === d.stage || d.not(d.getHasOwnProperty("l", e.name)), function() {
                        d.if_("inputs" === d.stage || "s", function() {
                            a && 1 !== a && d.if_(d.not(d.nonComputedMember("s", e.name)), d.lazyAssign(d.nonComputedMember("s", e.name), "{}")), d.assign(t, d.nonComputedMember("s", e.name))
                        })
                    }, t && d.lazyAssign(t, d.nonComputedMember("l", e.name))), (d.state.expensiveChecks || pn(e.name)) && d.addEnsureSafeObject(t), i(t);
                    break;
                case io.MemberExpression:
                    l = r && (r.context = this.nextId()) || this.nextId(), t = t || this.nextId(), d.recurse(e.object, l, n, function() {
                        d.if_(d.notNull(l), function() {
                            e.computed ? (u = d.nextId(), d.recurse(e.property, u), d.getStringValue(u), d.addEnsureSafeMemberName(u), a && 1 !== a && d.if_(d.not(d.computedMember(l, u)), d.lazyAssign(d.computedMember(l, u), "{}")), p = d.ensureSafeObject(d.computedMember(l, u)), d.assign(t, p), r && (r.computed = !0, r.name = u)) : (Yt(e.property.name), a && 1 !== a && d.if_(d.not(d.nonComputedMember(l, e.property.name)), d.lazyAssign(d.nonComputedMember(l, e.property.name), "{}")), p = d.nonComputedMember(l, e.property.name), (d.state.expensiveChecks || pn(e.property.name)) && (p = d.ensureSafeObject(p)), d.assign(t, p), r && (r.computed = !1, r.name = e.property.name))
                        }, function() {
                            d.assign(t, "undefined")
                        }), i(t)
                    }, !!a);
                    break;
                case io.CallExpression:
                    t = t || this.nextId(), e.filter ? (u = d.filter(e.callee.name), c = [], o(e.arguments, function(e) {
                        var t = d.nextId();
                        d.recurse(e, t), c.push(t)
                    }), p = u + "(" + c.join(",") + ")", d.assign(t, p), i(t)) : (u = d.nextId(), l = {}, c = [], d.recurse(e.callee, u, l, function() {
                        d.if_(d.notNull(u), function() {
                            d.addEnsureSafeFunction(u), o(e.arguments, function(e) {
                                d.recurse(e, d.nextId(), n, function(e) {
                                    c.push(d.ensureSafeObject(e))
                                })
                            }), l.name ? (d.state.expensiveChecks || d.addEnsureSafeObject(l.context), p = d.member(l.context, l.name, l.computed) + "(" + c.join(",") + ")") : p = u + "(" + c.join(",") + ")", p = d.ensureSafeObject(p), d.assign(t, p)
                        }, function() {
                            d.assign(t, "undefined")
                        }), i(t)
                    }));
                    break;
                case io.AssignmentExpression:
                    if (u = this.nextId(), l = {}, !on(e.left)) throw Qi("lval", "Trying to assing a value to a non l-value");
                    this.recurse(e.left, n, l, function() {
                        d.if_(d.notNull(l.context), function() {
                            d.recurse(e.right, u), d.addEnsureSafeObject(d.member(l.context, l.name, l.computed)), d.addEnsureSafeAssignContext(l.context), p = d.member(l.context, l.name, l.computed) + e.operator + u, d.assign(t, p), i(t || p)
                        })
                    }, 1);
                    break;
                case io.ArrayExpression:
                    c = [], o(e.elements, function(e) {
                        d.recurse(e, d.nextId(), n, function(e) {
                            c.push(e)
                        })
                    }), p = "[" + c.join(",") + "]", this.assign(t, p), i(p);
                    break;
                case io.ObjectExpression:
                    c = [], o(e.properties, function(e) {
                        d.recurse(e.value, d.nextId(), n, function(t) {
                            c.push(d.escape(e.key.type === io.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                        })
                    }), p = "{" + c.join(",") + "}", this.assign(t, p), i(p);
                    break;
                case io.ThisExpression:
                    this.assign(t, "s"), i("s");
                    break;
                case io.NGValueParameter:
                    this.assign(t, "v"), i("v")
            }
        },
        getHasOwnProperty: function(e, t) {
            var n = e + "." + t,
                r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
        },
        assign: function(e, t) {
            return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
        },
        filter: function(e) {
            return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
        },
        ifDefined: function(e, t) {
            return "ifDefined(" + e + "," + this.escape(t) + ")"
        },
        plus: function(e, t) {
            return "plus(" + e + "," + t + ")"
        },
        return_: function(e) {
            this.current().body.push("return ", e, ";")
        },
        if_: function(e, t, n) {
            if (e === !0) t();
            else {
                var r = this.current().body;
                r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function(e) {
            return "!(" + e + ")"
        },
        notNull: function(e) {
            return e + "!=null"
        },
        nonComputedMember: function(e, t) {
            return e + "." + t
        },
        computedMember: function(e, t) {
            return e + "[" + t + "]"
        },
        member: function(e, t, n) {
            return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
        },
        addEnsureSafeObject: function(e) {
            this.current().body.push(this.ensureSafeObject(e), ";")
        },
        addEnsureSafeMemberName: function(e) {
            this.current().body.push(this.ensureSafeMemberName(e), ";")
        },
        addEnsureSafeFunction: function(e) {
            this.current().body.push(this.ensureSafeFunction(e), ";")
        },
        addEnsureSafeAssignContext: function(e) {
            this.current().body.push(this.ensureSafeAssignContext(e), ";")
        },
        ensureSafeObject: function(e) {
            return "ensureSafeObject(" + e + ",text)"
        },
        ensureSafeMemberName: function(e) {
            return "ensureSafeMemberName(" + e + ",text)"
        },
        ensureSafeFunction: function(e) {
            return "ensureSafeFunction(" + e + ",text)"
        },
        getStringValue: function(e) {
            this.assign(e, "getStringValue(" + e + ",text)")
        },
        ensureSafeAssignContext: function(e) {
            return "ensureSafeAssignContext(" + e + ",text)"
        },
        lazyRecurse: function(e, t, n, r, i, o) {
            var a = this;
            return function() {
                a.recurse(e, t, n, r, i, o)
            }
        },
        lazyAssign: function(e, t) {
            var n = this;
            return function() {
                n.assign(e, t)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(e) {
            if (C(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (k(e)) return e.toString();
            if (e === !0) return "true";
            if (e === !1) return "false";
            if (null === e) return "null";
            if ("undefined" == typeof e) return "undefined";
            throw Qi("esc", "IMPOSSIBLE")
        },
        nextId: function(e, t) {
            var n = "v" + this.state.nextId++;
            return e || this.current().vars.push(n + (t ? "=" + t : "")), n
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, cn.prototype = {
        compile: function(e, t) {
            var n = this,
                r = this.astBuilder.ast(e);
            this.expression = e, this.expensiveChecks = t, nn(r, n.$filter);
            var i, a;
            (i = an(r)) && (a = this.recurse(i));
            var s, l = rn(r.body);
            l && (s = [], o(l, function(e, t) {
                var r = n.recurse(e);
                e.input = r, s.push(r), e.watchId = t
            }));
            var u = [];
            o(r.body, function(e) {
                u.push(n.recurse(e.expression))
            });
            var c = 0 === r.body.length ? function() {} : 1 === r.body.length ? u[0] : function(e, t) {
                var n;
                return o(u, function(r) {
                    n = r(e, t)
                }), n
            };
            return a && (c.assign = function(e, t, n) {
                return a(e, n, t)
            }), s && (c.inputs = s), c.literal = sn(r), c.constant = ln(r), c
        },
        recurse: function(e, t, r) {
            var i, a, s, l = this;
            if (e.input) return this.inputs(e.input, e.watchId);
            switch (e.type) {
                case io.Literal:
                    return this.value(e.value, t);
                case io.UnaryExpression:
                    return a = this.recurse(e.argument), this["unary" + e.operator](a, t);
                case io.BinaryExpression:
                    return i = this.recurse(e.left), a = this.recurse(e.right), this["binary" + e.operator](i, a, t);
                case io.LogicalExpression:
                    return i = this.recurse(e.left), a = this.recurse(e.right), this["binary" + e.operator](i, a, t);
                case io.ConditionalExpression:
                    return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                case io.Identifier:
                    return Yt(e.name, l.expression), l.identifier(e.name, l.expensiveChecks || pn(e.name), t, r, l.expression);
                case io.MemberExpression:
                    return i = this.recurse(e.object, !1, !!r), e.computed || (Yt(e.property.name, l.expression), a = e.property.name), e.computed && (a = this.recurse(e.property)), e.computed ? this.computedMember(i, a, t, r, l.expression) : this.nonComputedMember(i, a, l.expensiveChecks, t, r, l.expression);
                case io.CallExpression:
                    return s = [], o(e.arguments, function(e) {
                        s.push(l.recurse(e))
                    }), e.filter && (a = this.$filter(e.callee.name)), e.filter || (a = this.recurse(e.callee, !0)), e.filter ? function(e, r, i, o) {
                        for (var l = [], u = 0; u < s.length; ++u) l.push(s[u](e, r, i, o));
                        var c = a.apply(n, l, o);
                        return t ? {
                            context: n,
                            name: n,
                            value: c
                        } : c
                    } : function(e, n, r, i) {
                        var o, u = a(e, n, r, i);
                        if (null != u.value) {
                            Xt(u.context, l.expression), Qt(u.value, l.expression);
                            for (var c = [], p = 0; p < s.length; ++p) c.push(Xt(s[p](e, n, r, i), l.expression));
                            o = Xt(u.value.apply(u.context, c), l.expression)
                        }
                        return t ? {
                            value: o
                        } : o
                    };
                case io.AssignmentExpression:
                    return i = this.recurse(e.left, !0, 1), a = this.recurse(e.right),
                        function(e, n, r, o) {
                            var s = i(e, n, r, o),
                                u = a(e, n, r, o);
                            return Xt(s.value, l.expression), Jt(s.context), s.context[s.name] = u, t ? {
                                value: u
                            } : u
                        };
                case io.ArrayExpression:
                    return s = [], o(e.elements, function(e) {
                            s.push(l.recurse(e))
                        }),
                        function(e, n, r, i) {
                            for (var o = [], a = 0; a < s.length; ++a) o.push(s[a](e, n, r, i));
                            return t ? {
                                value: o
                            } : o
                        };
                case io.ObjectExpression:
                    return s = [], o(e.properties, function(e) {
                            s.push({
                                key: e.key.type === io.Identifier ? e.key.name : "" + e.key.value,
                                value: l.recurse(e.value)
                            })
                        }),
                        function(e, n, r, i) {
                            for (var o = {}, a = 0; a < s.length; ++a) o[s[a].key] = s[a].value(e, n, r, i);
                            return t ? {
                                value: o
                            } : o
                        };
                case io.ThisExpression:
                    return function(e) {
                        return t ? {
                            value: e
                        } : e
                    };
                case io.NGValueParameter:
                    return function(e, n, r, i) {
                        return t ? {
                            value: r
                        } : r
                    }
            }
        },
        "unary+": function(e, t) {
            return function(n, r, i, o) {
                var a = e(n, r, i, o);
                return a = b(a) ? +a : 0, t ? {
                    value: a
                } : a
            }
        },
        "unary-": function(e, t) {
            return function(n, r, i, o) {
                var a = e(n, r, i, o);
                return a = b(a) ? -a : 0, t ? {
                    value: a
                } : a
            }
        },
        "unary!": function(e, t) {
            return function(n, r, i, o) {
                var a = !e(n, r, i, o);
                return t ? {
                    value: a
                } : a
            }
        },
        "binary+": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a),
                    l = t(r, i, o, a),
                    u = en(s, l);
                return n ? {
                    value: u
                } : u
            }
        },
        "binary-": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a),
                    l = t(r, i, o, a),
                    u = (b(s) ? s : 0) - (b(l) ? l : 0);
                return n ? {
                    value: u
                } : u
            }
        },
        "binary*": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) * t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary/": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) / t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary%": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) % t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary===": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) === t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary!==": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) !== t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary==": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) == t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary!=": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) != t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary<": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) < t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary>": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) > t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary<=": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) <= t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary>=": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) >= t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary&&": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) && t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "binary||": function(e, t, n) {
            return function(r, i, o, a) {
                var s = e(r, i, o, a) || t(r, i, o, a);
                return n ? {
                    value: s
                } : s
            }
        },
        "ternary?:": function(e, t, n, r) {
            return function(i, o, a, s) {
                var l = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
                return r ? {
                    value: l
                } : l
            }
        },
        value: function(e, t) {
            return function() {
                return t ? {
                    context: n,
                    name: n,
                    value: e
                } : e
            }
        },
        identifier: function(e, t, r, i, o) {
            return function(a, s, l, u) {
                var c = s && e in s ? s : a;
                i && 1 !== i && c && !c[e] && (c[e] = {});
                var p = c ? c[e] : n;
                return t && Xt(p, o), r ? {
                    context: c,
                    name: e,
                    value: p
                } : p
            }
        },
        computedMember: function(e, t, n, r, i) {
            return function(o, a, s, l) {
                var u, c, p = e(o, a, s, l);
                return null != p && (u = t(o, a, s, l), u = Kt(u), Yt(u, i), r && 1 !== r && p && !p[u] && (p[u] = {}), c = p[u], Xt(c, i)), n ? {
                    context: p,
                    name: u,
                    value: c
                } : c
            }
        },
        nonComputedMember: function(e, t, r, i, o, a) {
            return function(s, l, u, c) {
                var p = e(s, l, u, c);
                o && 1 !== o && p && !p[t] && (p[t] = {});
                var d = null != p ? p[t] : n;
                return (r || pn(t)) && Xt(d, a), i ? {
                    context: p,
                    name: t,
                    value: d
                } : d
            }
        },
        inputs: function(e, t) {
            return function(n, r, i, o) {
                return o ? o[t] : e(n, r, i)
            }
        }
    };
    var oo = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n, this.ast = new io(this.lexer), this.astCompiler = n.csp ? new cn(this.ast, t) : new un(this.ast, t)
    };
    oo.prototype = {
        constructor: oo,
        parse: function(e) {
            return this.astCompiler.compile(e, this.options.expensiveChecks)
        }
    };
    var ao = (ve(), ve(), Object.prototype.valueOf),
        so = r("$sce"),
        lo = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Pi = r("$compile"),
        uo = t.createElement("a"),
        co = Dn(e.location.href);
    Mn.$inject = ["$document"], jn.$inject = ["$provide"], Vn.$inject = ["$locale"], Hn.$inject = ["$locale"];
    var po = ".",
        fo = {
            yyyy: Un("FullYear", 4),
            yy: Un("FullYear", 2, 0, !0),
            y: Un("FullYear", 1),
            MMMM: Bn("Month"),
            MMM: Bn("Month", !0),
            MM: Un("Month", 2, 1),
            M: Un("Month", 1, 1),
            dd: Un("Date", 2),
            d: Un("Date", 1),
            HH: Un("Hours", 2),
            H: Un("Hours", 1),
            hh: Un("Hours", 2, -12),
            h: Un("Hours", 1, -12),
            mm: Un("Minutes", 2),
            m: Un("Minutes", 1),
            ss: Un("Seconds", 2),
            s: Un("Seconds", 1),
            sss: Un("Milliseconds", 3),
            EEEE: Bn("Day"),
            EEE: Bn("Day", !0),
            a: Yn,
            Z: _n,
            ww: Gn(2),
            w: Gn(1),
            G: Kn,
            GG: Kn,
            GGG: Kn,
            GGGG: Xn
        },
        ho = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        mo = /^\-?\d+$/;
    Qn.$inject = ["$locale"];
    var vo = g(Cr),
        go = g(Sr);
    er.$inject = ["$parse"];
    var $o = g({
            restrict: "E",
            compile: function(e, t) {
                return t.href || t.xlinkHref ? void 0 : function(e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === Ir.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function(e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }),
        yo = {};
    o($i, function(e, t) {
        function n(e, n, i) {
            e.$watch(i[r], function(e) {
                i.$set(t, !!e)
            })
        }
        if ("multiple" != e) {
            var r = pt("ng-" + t),
                i = n;
            "checked" === e && (i = function(e, t, i) {
                i.ngModel !== i[r] && n(e, t, i)
            }), yo[r] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: i
                }
            }
        }
    }), o(bi, function(e, t) {
        yo[t] = function() {
            return {
                priority: 100,
                link: function(e, n, r) {
                    if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(wr);
                        if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    e.$watch(r[t], function(e) {
                        r.$set(t, e)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function(e) {
        var t = pt("ng-" + e);
        yo[t] = function() {
            return {
                priority: 99,
                link: function(n, r, i) {
                    var o = e,
                        a = e;
                    "href" === e && "[object SVGAnimatedString]" === Ir.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
                        return t ? (i.$set(a, t), void(Dr && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
                    })
                }
            }
        }
    });
    var bo = {
            $addControl: m,
            $$renameControl: nr,
            $removeControl: m,
            $setValidity: m,
            $setDirty: m,
            $setPristine: m,
            $setSubmitted: m
        },
        wo = "ng-submitted";
    rr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var xo = function(e) {
            return ["$timeout", "$parse", function(t, r) {
                function i(e) {
                    return "" === e ? r('this[""]').assign : r(e).assign || m
                }
                var o = {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: rr,
                    compile: function(r, o) {
                        r.addClass(na).addClass(ea);
                        var a = o.name ? "name" : e && o.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(e, r, o, s) {
                                var l = s[0];
                                if (!("action" in o)) {
                                    var u = function(t) {
                                        e.$apply(function() {
                                            l.$commitViewValue(), l.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    oi(r[0], "submit", u), r.on("$destroy", function() {
                                        t(function() {
                                            ai(r[0], "submit", u)
                                        }, 0, !1)
                                    })
                                }
                                var c = s[1] || l.$$parentForm;
                                c.$addControl(l);
                                var d = a ? i(l.$name) : m;
                                a && (d(e, l), o.$observe(a, function(t) {
                                    l.$name !== t && (d(e, n), l.$$parentForm.$$renameControl(l, t), (d = i(l.$name))(e, l))
                                })), r.on("$destroy", function() {
                                    l.$$parentForm.$removeControl(l), d(e, n), p(l, bo)
                                })
                            }
                        }
                    }
                };
                return o
            }]
        },
        Co = xo(),
        ko = xo(!0),
        So = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Eo = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,
        To = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Do = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Ao = /^(\d{4})-(\d{2})-(\d{2})$/,
        Oo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Mo = /^(\d{4})-W(\d\d)$/,
        No = /^(\d{4})-(\d\d)$/,
        jo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Po = {
            text: or,
            date: ur("date", Ao, lr(Ao, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": ur("datetimelocal", Oo, lr(Oo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: ur("time", jo, lr(jo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: ur("week", Mo, sr, "yyyy-Www"),
            month: ur("month", No, lr(No, ["yyyy", "MM"]), "yyyy-MM"),
            number: pr,
            url: dr,
            email: fr,
            radio: hr,
            checkbox: vr,
            hidden: m,
            button: m,
            submit: m,
            reset: m,
            file: m
        },
        Io = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(i, o, a, s) {
                        s[0] && (Po[Cr(a.type)] || Po.text)(i, o, a, s[0], t, e, n, r)
                    }
                }
            }
        }],
        qo = /^(true|false|\d+)$/,
        Fo = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(e, t) {
                    return qo.test(t.ngValue) ? function(e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function(e, t, n) {
                        e.$watch(n.ngValue, function(e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        },
        Vo = ["$compile", function(e) {
            return {
                restrict: "AC",
                compile: function(t) {
                    return e.$$addBindingClass(t),
                        function(t, n, r) {
                            e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                                n.textContent = y(e) ? "" : e
                            })
                        }
                }
            }
        }],
        Ho = ["$interpolate", "$compile", function(e, t) {
            return {
                compile: function(n) {
                    return t.$$addBindingClass(n),
                        function(n, r, i) {
                            var o = e(r.attr(i.$attr.ngBindTemplate));
                            t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(e) {
                                r.textContent = y(e) ? "" : e
                            })
                        }
                }
            }
        }],
        Lo = ["$sce", "$parse", "$compile", function(e, t, n) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var o = t(i.ngBindHtml),
                        a = t(i.ngBindHtml, function(e) {
                            return (e || "").toString()
                        });
                    return n.$$addBindingClass(r),
                        function(t, r, i) {
                            n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                                r.html(e.getTrustedHtml(o(t)) || "")
                            })
                        }
                }
            }
        }],
        Ro = g({
            restrict: "A",
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        Uo = gr("", !0),
        Bo = gr("Odd", 0),
        _o = gr("Even", 1),
        zo = tr({
            compile: function(e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }),
        Wo = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Go = {},
        Yo = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = pt("ng-" + e);
        Go[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(i, o) {
                    var a = n(o[t], null, !0);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var i = function() {
                                a(t, {
                                    $event: n
                                })
                            };
                            Yo[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var Ko = ["$animate", function(e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, o, a) {
                    var s, l, u;
                    n.$watch(i.ngIf, function(n) {
                        n ? l || a(function(n, o) {
                            l = o, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        }) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), s && (u = me(s.clone), e.leave(u).then(function() {
                            u = null
                        }), s = null))
                    })
                }
            }
        }],
        Xo = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Vr.noop,
                compile: function(r, i) {
                    var o = i.ngInclude || i.src,
                        a = i.onload || "",
                        s = i.autoscroll;
                    return function(r, i, l, u, c) {
                        var p, d, f, h = 0,
                            m = function() {
                                d && (d.remove(), d = null), p && (p.$destroy(), p = null), f && (n.leave(f).then(function() {
                                    d = null
                                }), d = f, f = null)
                            };
                        r.$watch(o, function(o) {
                            var l = function() {
                                    !b(s) || s && !r.$eval(s) || t()
                                },
                                d = ++h;
                            o ? (e(o, !0).then(function(e) {
                                if (d === h) {
                                    var t = r.$new();
                                    u.template = e;
                                    var s = c(t, function(e) {
                                        m(), n.enter(e, null, i).then(l)
                                    });
                                    p = t, f = s, p.$emit("$includeContentLoaded", o), r.$eval(a)
                                }
                            }, function() {
                                d === h && (m(), r.$emit("$includeContentError", o))
                            }), r.$emit("$includeContentRequested", o)) : (m(), u.template = null)
                        })
                    }
                }
            }
        }],
        Qo = ["$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, i, o) {
                    return /SVG/.test(r[0].toString()) ? (r.empty(), void e(Ee(o.template, t).childNodes)(n, function(e) {
                        r.append(e)
                    }, {
                        futureParentElement: r
                    })) : (r.html(o.template), void e(r.contents())(n))
                }
            }
        }],
        Jo = tr({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        Zo = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(e, t, r, i) {
                    var a = t.attr(r.$attr.ngList) || ", ",
                        s = "false" !== r.ngTrim,
                        l = s ? Br(a) : a,
                        u = function(e) {
                            if (!y(e)) {
                                var t = [];
                                return e && o(e.split(l), function(e) {
                                    e && t.push(s ? Br(e) : e)
                                }), t
                            }
                        };
                    i.$parsers.push(u), i.$formatters.push(function(e) {
                        return Rr(e) ? e.join(a) : n
                    }), i.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        ea = "ng-valid",
        ta = "ng-invalid",
        na = "ng-pristine",
        ra = "ng-dirty",
        ia = "ng-untouched",
        oa = "ng-touched",
        aa = "ng-pending",
        sa = r("ngModel"),
        la = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, r, i, a, s, l, u, c, p) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = p(r.name || "", !1)(e), this.$$parentForm = bo;
            var d, f = a(r.ngModel),
                h = f.assign,
                v = f,
                g = h,
                $ = null,
                w = this;
            this.$$setOptions = function(e) {
                if (w.$options = e, e && e.getterSetter) {
                    var t = a(r.ngModel + "()"),
                        n = a(r.ngModel + "($$$p)");
                    v = function(e) {
                        var n = f(e);
                        return E(n) && (n = t(e)), n
                    }, g = function(e, t) {
                        E(f(e)) ? n(e, {
                            $$$p: w.$modelValue
                        }) : h(e, w.$modelValue)
                    }
                } else if (!f.assign) throw sa("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, J(i))
            }, this.$render = m, this.$isEmpty = function(e) {
                return y(e) || "" === e || null === e || e !== e
            };
            var x = 0;
            $r({
                ctrl: this,
                $element: i,
                set: function(e, t) {
                    e[t] = !0
                },
                unset: function(e, t) {
                    delete e[t]
                },
                $animate: s
            }), this.$setPristine = function() {
                w.$dirty = !1, w.$pristine = !0, s.removeClass(i, ra), s.addClass(i, na)
            }, this.$setDirty = function() {
                w.$dirty = !0, w.$pristine = !1, s.removeClass(i, na), s.addClass(i, ra), w.$$parentForm.$setDirty()
            }, this.$setUntouched = function() {
                w.$touched = !1, w.$untouched = !0, s.setClass(i, ia, oa)
            }, this.$setTouched = function() {
                w.$touched = !0, w.$untouched = !1, s.setClass(i, oa, ia)
            }, this.$rollbackViewValue = function() {
                l.cancel($), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
            }, this.$validate = function() {
                if (!k(w.$modelValue) || !isNaN(w.$modelValue)) {
                    var e = w.$$lastCommittedViewValue,
                        t = w.$$rawModelValue,
                        r = w.$valid,
                        i = w.$modelValue,
                        o = w.$options && w.$options.allowInvalid;
                    w.$$runValidators(t, e, function(e) {
                        o || r === e || (w.$modelValue = e ? t : n, w.$modelValue !== i && w.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(e, t, r) {
                function i() {
                    var e = w.$$parserName || "parse";
                    return y(d) ? (l(e, null), !0) : (d || (o(w.$validators, function(e, t) {
                        l(t, null)
                    }), o(w.$asyncValidators, function(e, t) {
                        l(t, null)
                    })), l(e, d), d)
                }

                function a() {
                    var n = !0;
                    return o(w.$validators, function(r, i) {
                        var o = r(e, t);
                        n = n && o, l(i, o)
                    }), n ? !0 : (o(w.$asyncValidators, function(e, t) {
                        l(t, null)
                    }), !1)
                }

                function s() {
                    var r = [],
                        i = !0;
                    o(w.$asyncValidators, function(o, a) {
                        var s = o(e, t);
                        if (!P(s)) throw sa("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                        l(a, n), r.push(s.then(function() {
                            l(a, !0)
                        }, function(e) {
                            i = !1, l(a, !1)
                        }))
                    }), r.length ? c.all(r).then(function() {
                        u(i)
                    }, m) : u(!0)
                }

                function l(e, t) {
                    p === x && w.$setValidity(e, t)
                }

                function u(e) {
                    p === x && r(e)
                }
                x++;
                var p = x;
                return i() && a() ? void s() : void u(!1)
            }, this.$commitViewValue = function() {
                var e = w.$viewValue;
                l.cancel($), (w.$$lastCommittedViewValue !== e || "" === e && w.$$hasNativeValidators) && (w.$$lastCommittedViewValue = e, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function t() {
                    w.$modelValue !== a && w.$$writeModelToScope()
                }
                var r = w.$$lastCommittedViewValue,
                    i = r;
                if (d = y(i) ? n : !0)
                    for (var o = 0; o < w.$parsers.length; o++)
                        if (i = w.$parsers[o](i), y(i)) {
                            d = !1;
                            break
                        }
                k(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = v(e));
                var a = w.$modelValue,
                    s = w.$options && w.$options.allowInvalid;
                w.$$rawModelValue = i, s && (w.$modelValue = i, t()), w.$$runValidators(i, w.$$lastCommittedViewValue, function(e) {
                    s || (w.$modelValue = e ? i : n, t())
                })
            }, this.$$writeModelToScope = function() {
                g(e, w.$modelValue), o(w.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (n) {
                        t(n)
                    }
                })
            }, this.$setViewValue = function(e, t) {
                w.$viewValue = e, (!w.$options || w.$options.updateOnDefault) && w.$$debounceViewValueCommit(t)
            }, this.$$debounceViewValueCommit = function(t) {
                var n, r = 0,
                    i = w.$options;
                i && b(i.debounce) && (n = i.debounce, k(n) ? r = n : k(n[t]) ? r = n[t] : k(n["default"]) && (r = n["default"])), l.cancel($), r ? $ = l(function() {
                    w.$commitViewValue()
                }, r) : u.$$phase ? w.$commitViewValue() : e.$apply(function() {
                    w.$commitViewValue()
                })
            }, e.$watch(function() {
                var t = v(e);
                if (t !== w.$modelValue && (w.$modelValue === w.$modelValue || t === t)) {
                    w.$modelValue = w.$$rawModelValue = t, d = n;
                    for (var r = w.$formatters, i = r.length, o = t; i--;) o = r[i](o);
                    w.$viewValue !== o && (w.$viewValue = w.$$lastCommittedViewValue = o, w.$render(), w.$$runValidators(t, o, m))
                }
                return t
            })
        }],
        ua = ["$rootScope", function(e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: la,
                priority: 1,
                compile: function(t) {
                    return t.addClass(na).addClass(ia).addClass(ea), {
                        pre: function(e, t, n, r) {
                            var i = r[0],
                                o = r[1] || i.$$parentForm;
                            i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(e) {
                                i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                            }), e.$on("$destroy", function() {
                                i.$$parentForm.$removeControl(i)
                            })
                        },
                        post: function(t, n, r, i) {
                            var o = i[0];
                            o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(e) {
                                o.$$debounceViewValueCommit(e && e.type)
                            }), n.on("blur", function(n) {
                                o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        ca = /(\s+|^)default(\s+|$)/,
        pa = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(e, t) {
                    var n = this;
                    this.$options = L(e.$eval(t.ngModelOptions)), b(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Br(this.$options.updateOn.replace(ca, function() {
                        return n.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        da = tr({
            terminal: !0,
            priority: 1e3
        }),
        fa = r("ngOptions"),
        ha = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        ma = ["$compile", "$parse", function(e, n) {
            function r(e, t, r) {
                function o(e, t, n, r, i) {
                    this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                }

                function a(e) {
                    var t;
                    if (!u && i(e)) t = e;
                    else {
                        t = [];
                        for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
                    }
                    return t
                }
                var s = e.match(ha);
                if (!s) throw fa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, J(t));
                var l = s[5] || s[7],
                    u = s[6],
                    c = / as /.test(s[0]) && s[1],
                    p = s[9],
                    d = n(s[2] ? s[1] : l),
                    f = c && n(c),
                    h = f || d,
                    m = p && n(p),
                    v = p ? function(e, t) {
                        return m(r, t)
                    } : function(e) {
                        return Xe(e)
                    },
                    g = function(e, t) {
                        return v(e, C(e, t))
                    },
                    $ = n(s[2] || s[1]),
                    y = n(s[3] || ""),
                    b = n(s[4] || ""),
                    w = n(s[8]),
                    x = {},
                    C = u ? function(e, t) {
                        return x[u] = t, x[l] = e, x
                    } : function(e) {
                        return x[l] = e, x
                    };
                return {
                    trackBy: p,
                    getTrackByValue: g,
                    getWatchables: n(w, function(e) {
                        var t = [];
                        e = e || [];
                        for (var n = a(e), i = n.length, o = 0; i > o; o++) {
                            var l = e === n ? o : n[o],
                                u = (e[l], C(e[l], l)),
                                c = v(e[l], u);
                            if (t.push(c), s[2] || s[1]) {
                                var p = $(r, u);
                                t.push(p);
                            }
                            if (s[4]) {
                                var d = b(r, u);
                                t.push(d)
                            }
                        }
                        return t
                    }),
                    getOptions: function() {
                        for (var e = [], t = {}, n = w(r) || [], i = a(n), s = i.length, l = 0; s > l; l++) {
                            var u = n === i ? l : i[l],
                                c = n[u],
                                d = C(c, u),
                                f = h(r, d),
                                m = v(f, d),
                                x = $(r, d),
                                k = y(r, d),
                                S = b(r, d),
                                E = new o(m, f, x, k, S);
                            e.push(E), t[m] = E
                        }
                        return {
                            items: e,
                            selectValueMap: t,
                            getOptionFromViewValue: function(e) {
                                return t[g(e)]
                            },
                            getViewValueFromOption: function(e) {
                                return p ? Vr.copy(e.viewValue) : e.viewValue
                            }
                        }
                    }
                }
            }

            function a(t, n, i, a) {
                function u(e, t) {
                    e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), e.value !== t.value && (t.value = e.selectValue)
                }

                function c(e, t, n, r) {
                    var i;
                    return t && Cr(t.nodeName) === n ? i = t : (i = r.cloneNode(!1), t ? e.insertBefore(i, t) : e.appendChild(i)), i
                }

                function p(e) {
                    for (var t; e;) t = e.nextSibling, Ue(e), e = t
                }

                function d(e) {
                    var t = m && m[0],
                        n = x && x[0];
                    if (t || n)
                        for (; e && (e === t || e === n || e.nodeType === Zr || "" === e.value);) e = e.nextSibling;
                    return e
                }

                function f() {
                    var e = C && v.readValue();
                    C = k.getOptions();
                    var t = {},
                        r = n[0].firstChild;
                    if (w && n.prepend(m), r = d(r), C.items.forEach(function(e) {
                            var i, o, a;
                            e.group ? (i = t[e.group], i || (o = c(n[0], r, "optgroup", l), r = o.nextSibling, o.label = e.group, i = t[e.group] = {
                                groupElement: o,
                                currentOptionElement: o.firstChild
                            }), a = c(i.groupElement, i.currentOptionElement, "option", s), u(e, a), i.currentOptionElement = a.nextSibling) : (a = c(n[0], r, "option", s), u(e, a), r = a.nextSibling)
                        }), Object.keys(t).forEach(function(e) {
                            p(t[e].currentOptionElement)
                        }), p(r), h.$render(), !h.$isEmpty(e)) {
                        var i = v.readValue();
                        (k.trackBy ? U(e, i) : e === i) || (h.$setViewValue(i), h.$render())
                    }
                }
                var h = a[1];
                if (h) {
                    for (var m, v = a[0], g = i.multiple, $ = 0, y = n.children(), b = y.length; b > $; $++)
                        if ("" === y[$].value) {
                            m = y.eq($);
                            break
                        }
                    var w = !!m,
                        x = Ar(s.cloneNode(!1));
                    x.val("?");
                    var C, k = r(i.ngOptions, n, t),
                        S = function() {
                            w || n.prepend(m), n.val(""), m.prop("selected", !0), m.attr("selected", !0)
                        },
                        E = function() {
                            w || m.remove()
                        },
                        T = function() {
                            n.prepend(x), n.val("?"), x.prop("selected", !0), x.attr("selected", !0)
                        },
                        D = function() {
                            x.remove()
                        };
                    g ? (h.$isEmpty = function(e) {
                        return !e || 0 === e.length
                    }, v.writeValue = function(e) {
                        C.items.forEach(function(e) {
                            e.element.selected = !1
                        }), e && e.forEach(function(e) {
                            var t = C.getOptionFromViewValue(e);
                            t && !t.disabled && (t.element.selected = !0)
                        })
                    }, v.readValue = function() {
                        var e = n.val() || [],
                            t = [];
                        return o(e, function(e) {
                            var n = C.selectValueMap[e];
                            n && !n.disabled && t.push(C.getViewValueFromOption(n))
                        }), t
                    }, k.trackBy && t.$watchCollection(function() {
                        return Rr(h.$viewValue) ? h.$viewValue.map(function(e) {
                            return k.getTrackByValue(e)
                        }) : void 0
                    }, function() {
                        h.$render()
                    })) : (v.writeValue = function(e) {
                        var t = C.getOptionFromViewValue(e);
                        t && !t.disabled ? n[0].value !== t.selectValue && (D(), E(), n[0].value = t.selectValue, t.element.selected = !0, t.element.setAttribute("selected", "selected")) : null === e || w ? (D(), S()) : (E(), T())
                    }, v.readValue = function() {
                        var e = C.selectValueMap[n.val()];
                        return e && !e.disabled ? (E(), D(), C.getViewValueFromOption(e)) : null
                    }, k.trackBy && t.$watch(function() {
                        return k.getTrackByValue(h.$viewValue)
                    }, function() {
                        h.$render()
                    })), w ? (m.remove(), e(m)(t), m.removeClass("ng-scope")) : m = Ar(s.cloneNode(!1)), f(), t.$watchCollection(k.getWatchables, f)
                }
            }
            var s = t.createElement("option"),
                l = t.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "?ngModel"],
                link: {
                    pre: function(e, t, n, r) {
                        r[0].registerOption = m
                    },
                    post: a
                }
            }
        }],
        va = ["$locale", "$interpolate", "$log", function(e, t, n) {
            var r = /{}/g,
                i = /^when(Minus)?(.+)$/;
            return {
                link: function(a, s, l) {
                    function u(e) {
                        s.text(e || "")
                    }
                    var c, p = l.count,
                        d = l.$attr.when && s.attr(l.$attr.when),
                        f = l.offset || 0,
                        h = a.$eval(d) || {},
                        v = {},
                        g = t.startSymbol(),
                        $ = t.endSymbol(),
                        b = g + p + "-" + f + $,
                        w = Vr.noop;
                    o(l, function(e, t) {
                        var n = i.exec(t);
                        if (n) {
                            var r = (n[1] ? "-" : "") + Cr(n[2]);
                            h[r] = s.attr(l.$attr[t])
                        }
                    }), o(h, function(e, n) {
                        v[n] = t(e.replace(r, b))
                    }), a.$watch(p, function(t) {
                        var r = parseFloat(t),
                            i = isNaN(r);
                        if (i || r in h || (r = e.pluralCat(r - f)), r !== c && !(i && k(c) && isNaN(c))) {
                            w();
                            var o = v[r];
                            y(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + d), w = m, u()) : w = a.$watch(o, u), c = r
                        }
                    })
                }
            }
        }],
        ga = ["$parse", "$animate", function(e, a) {
            var s = "$$NG_REMOVED",
                l = r("ngRepeat"),
                u = function(e, t, n, r, i, o, a) {
                    e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
                },
                c = function(e) {
                    return e.clone[0]
                },
                p = function(e) {
                    return e.clone[e.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, d) {
                    var f = d.ngRepeat,
                        h = t.createComment(" end ngRepeat: " + f + " "),
                        m = f.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!m) throw l("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", f);
                    var v = m[1],
                        g = m[2],
                        $ = m[3],
                        y = m[4];
                    if (m = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !m) throw l("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
                    var b = m[3] || m[1],
                        w = m[2];
                    if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($))) throw l("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", $);
                    var x, C, k, S, E = {
                        $id: Xe
                    };
                    return y ? x = e(y) : (k = function(e, t) {
                            return Xe(t)
                        }, S = function(e) {
                            return e
                        }),
                        function(e, t, r, d, m) {
                            x && (C = function(t, n, r) {
                                return w && (E[w] = t), E[b] = n, E.$index = r, x(e, E)
                            });
                            var v = ve();
                            e.$watchCollection(g, function(r) {
                                var d, g, y, x, E, T, D, A, O, M, N, j, P = t[0],
                                    I = ve();
                                if ($ && (e[$] = r), i(r)) O = r, A = C || k;
                                else {
                                    A = C || S, O = [];
                                    for (var q in r) kr.call(r, q) && "$" !== q.charAt(0) && O.push(q)
                                }
                                for (x = O.length, N = new Array(x), d = 0; x > d; d++)
                                    if (E = r === O ? d : O[d], T = r[E], D = A(E, T, d), v[D]) M = v[D], delete v[D], I[D] = M, N[d] = M;
                                    else {
                                        if (I[D]) throw o(N, function(e) {
                                            e && e.scope && (v[e.id] = e)
                                        }), l("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", f, D, T);
                                        N[d] = {
                                            id: D,
                                            scope: n,
                                            clone: n
                                        }, I[D] = !0
                                    }
                                for (var F in v) {
                                    if (M = v[F], j = me(M.clone), a.leave(j), j[0].parentNode)
                                        for (d = 0, g = j.length; g > d; d++) j[d][s] = !0;
                                    M.scope.$destroy()
                                }
                                for (d = 0; x > d; d++)
                                    if (E = r === O ? d : O[d], T = r[E], M = N[d], M.scope) {
                                        y = P;
                                        do y = y.nextSibling; while (y && y[s]);
                                        c(M) != y && a.move(me(M.clone), null, Ar(P)), P = p(M), u(M.scope, d, b, T, w, E, x)
                                    } else m(function(e, t) {
                                        M.scope = t;
                                        var n = h.cloneNode(!1);
                                        e[e.length++] = n, a.enter(e, null, Ar(P)), P = n, M.clone = e, I[M.id] = M, u(M.scope, d, b, T, w, E, x)
                                    });
                                v = I
                            })
                        }
                }
            }
        }],
        $a = "ng-hide",
        ya = "ng-hide-animate",
        ba = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngShow, function(t) {
                        e[t ? "removeClass" : "addClass"](n, $a, {
                            tempClasses: ya
                        })
                    })
                }
            }
        }],
        wa = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngHide, function(t) {
                        e[t ? "addClass" : "removeClass"](n, $a, {
                            tempClasses: ya
                        })
                    })
                }
            }
        }],
        xa = tr(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && o(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        Ca = ["$animate", function(e) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, r, i, a) {
                    var s = i.ngSwitch || i.on,
                        l = [],
                        u = [],
                        c = [],
                        p = [],
                        d = function(e, t) {
                            return function() {
                                e.splice(t, 1)
                            }
                        };
                    n.$watch(s, function(n) {
                        var r, i;
                        for (r = 0, i = c.length; i > r; ++r) e.cancel(c[r]);
                        for (c.length = 0, r = 0, i = p.length; i > r; ++r) {
                            var s = me(u[r].clone);
                            p[r].$destroy();
                            var f = c[r] = e.leave(s);
                            f.then(d(c, r))
                        }
                        u.length = 0, p.length = 0, (l = a.cases["!" + n] || a.cases["?"]) && o(l, function(n) {
                            n.transclude(function(r, i) {
                                p.push(i);
                                var o = n.element;
                                r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                                var a = {
                                    clone: r
                                };
                                u.push(a), e.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }],
        ka = tr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        Sa = tr({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: t
                })
            }
        }),
        Ea = tr({
            restrict: "EAC",
            link: function(e, t, n, i, o) {
                if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", J(t));
                o(function(e) {
                    t.empty(), t.append(e)
                })
            }
        }),
        Ta = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    if ("text/ng-template" == n.type) {
                        var r = n.id,
                            i = t[0].text;
                        e.put(r, i)
                    }
                }
            }
        }],
        Da = {
            $setViewValue: m,
            $render: m
        },
        Aa = ["$element", "$scope", "$attrs", function(e, r, i) {
            var o = this,
                a = new Qe;
            o.ngModelCtrl = Da, o.unknownOption = Ar(t.createElement("option")), o.renderUnknownOption = function(t) {
                var n = "? " + Xe(t) + " ?";
                o.unknownOption.val(n), e.prepend(o.unknownOption), e.val(n)
            }, r.$on("$destroy", function() {
                o.renderUnknownOption = m
            }), o.removeUnknownOption = function() {
                o.unknownOption.parent() && o.unknownOption.remove()
            }, o.readValue = function() {
                return o.removeUnknownOption(), e.val()
            }, o.writeValue = function(t) {
                o.hasOption(t) ? (o.removeUnknownOption(), e.val(t), "" === t && o.emptyOption.prop("selected", !0)) : null == t && o.emptyOption ? (o.removeUnknownOption(), e.val("")) : o.renderUnknownOption(t)
            }, o.addOption = function(e, t) {
                fe(e, '"option value"'), "" === e && (o.emptyOption = t);
                var n = a.get(e) || 0;
                a.put(e, n + 1), o.ngModelCtrl.$render(), br(t)
            }, o.removeOption = function(e) {
                var t = a.get(e);
                t && (1 === t ? (a.remove(e), "" === e && (o.emptyOption = n)) : a.put(e, t - 1))
            }, o.hasOption = function(e) {
                return !!a.get(e)
            }, o.registerOption = function(e, t, n, r, i) {
                if (r) {
                    var a;
                    n.$observe("value", function(e) {
                        b(a) && o.removeOption(a), a = e, o.addOption(e, t)
                    })
                } else i ? e.$watch(i, function(e, r) {
                    n.$set("value", e), r !== e && o.removeOption(r), o.addOption(e, t)
                }) : o.addOption(n.value, t);
                t.on("$destroy", function() {
                    o.removeOption(n.value), o.ngModelCtrl.$render()
                })
            }
        }],
        Oa = function() {
            function e(e, t, n, r) {
                var i = r[1];
                if (i) {
                    var a = r[0];
                    if (a.ngModelCtrl = i, i.$render = function() {
                            a.writeValue(i.$viewValue)
                        }, t.on("change", function() {
                            e.$apply(function() {
                                i.$setViewValue(a.readValue())
                            })
                        }), n.multiple) {
                        a.readValue = function() {
                            var e = [];
                            return o(t.find("option"), function(t) {
                                t.selected && e.push(t.value)
                            }), e
                        }, a.writeValue = function(e) {
                            var n = new Qe(e);
                            o(t.find("option"), function(e) {
                                e.selected = b(n.get(e.value))
                            })
                        };
                        var s, l = NaN;
                        e.$watch(function() {
                            l !== i.$viewValue || U(s, i.$viewValue) || (s = R(i.$viewValue), i.$render()), l = i.$viewValue
                        }), i.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }
                    }
                }
            }
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Aa,
                priority: 1,
                link: {
                    pre: e
                }
            }
        },
        Ma = ["$interpolate", function(e) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(t, n) {
                    if (b(n.value)) var r = e(n.value, !0);
                    else {
                        var i = e(t.text(), !0);
                        i || n.$set("value", t.text())
                    }
                    return function(e, t, n) {
                        var o = "$selectController",
                            a = t.parent(),
                            s = a.data(o) || a.parent().data(o);
                        s && s.registerOption(e, t, n, r, i)
                    }
                }
            }
        }],
        Na = g({
            restrict: "E",
            terminal: !1
        }),
        ja = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    r && (n.required = !0, r.$validators.required = function(e, t) {
                        return !n.required || !r.$isEmpty(t)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        Pa = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, i, o) {
                    if (o) {
                        var a, s = i.ngPattern || i.pattern;
                        i.$observe("pattern", function(e) {
                            if (C(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, J(t));
                            a = e || n, o.$validate()
                        }), o.$validators.pattern = function(e, t) {
                            return o.$isEmpty(t) || y(a) || a.test(t)
                        }
                    }
                }
            }
        },
        Ia = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(e) {
                            var t = f(e);
                            i = isNaN(t) ? -1 : t, r.$validate()
                        }), r.$validators.maxlength = function(e, t) {
                            return 0 > i || r.$isEmpty(t) || t.length <= i
                        }
                    }
                }
            }
        },
        qa = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(e) {
                            i = f(e) || 0, r.$validate()
                        }), r.$validators.minlength = function(e, t) {
                            return r.$isEmpty(t) || t.length >= i
                        }
                    }
                }
            }
        };
    return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ce(), be(Vr), Vr.module("ngLocale", [], ["$provide", function(e) {
        function t(e) {
            e += "";
            var t = e.indexOf(".");
            return -1 == t ? 0 : e.length - t - 1
        }

        function r(e, r) {
            var i = r;
            n === i && (i = Math.min(t(e), 3));
            var o = Math.pow(10, i),
                a = (e * o | 0) % o;
            return {
                v: i,
                f: a
            }
        }
        var i = {
            ZERO: "zero",
            ONE: "one",
            TWO: "two",
            FEW: "few",
            MANY: "many",
            OTHER: "other"
        };
        e.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            pluralCat: function(e, t) {
                var n = 0 | e,
                    o = r(e, t);
                return 1 == n && 0 == o.v ? i.ONE : i.OTHER
            }
        })
    }]), void Ar(t).ready(function() {
        oe(t, ae)
    }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function(e, t, n) {
        "use strict";

        function r() {
            this.$get = ["$$sanitizeUri", function(e) {
                return function(t) {
                    var n = [];
                    return a(t, u(n, function(t, n) {
                        return !/^unsafe/.test(e(t, n))
                    })), n.join("")
                }
            }]
        }

        function i(e) {
            var n = [],
                r = u(n, t.noop);
            return r.chars(e), n.join("")
        }

        function o(e, n) {
            var r, i = {},
                o = e.split(",");
            for (r = 0; r < o.length; r++) i[n ? t.lowercase(o[r]) : o[r]] = !0;
            return i
        }

        function a(e, n) {
            function r(e, r, o, a) {
                if (r = t.lowercase(r), S[r])
                    for (; y.last() && E[y.last()];) i("", y.last());
                k[r] && y.last() == r && i("", r), a = w[r] || !!a, a || y.push(r);
                var l = {};
                o.replace(f, function(e, t, n, r, i) {
                    var o = n || r || i || "";
                    l[t] = s(o)
                }), n.start && n.start(r, l, a)
            }

            function i(e, r) {
                var i, o = 0;
                if (r = t.lowercase(r))
                    for (o = y.length - 1; o >= 0 && y[o] != r; o--);
                if (o >= 0) {
                    for (i = y.length - 1; i >= o; i--) n.end && n.end(y[i]);
                    y.length = o
                }
            }
            "string" != typeof e && (e = null === e || "undefined" == typeof e ? "" : "" + e);
            var o, a, l, u, y = [],
                b = e;
            for (y.last = function() {
                    return y[y.length - 1]
                }; e;) {
                if (u = "", a = !0, y.last() && D[y.last()] ? (e = e.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + y.last() + "[^>]*>", "i"), function(e, t) {
                        return t = t.replace(v, "$1").replace($, "$1"), n.chars && n.chars(s(t)), ""
                    }), i("", y.last())) : (0 === e.indexOf("<!--") ? (o = e.indexOf("--", 4), o >= 0 && e.lastIndexOf("-->", o) === o && (n.comment && n.comment(e.substring(4, o)), e = e.substring(o + 3), a = !1)) : g.test(e) ? (l = e.match(g), l && (e = e.replace(l[0], ""), a = !1)) : m.test(e) ? (l = e.match(d), l && (e = e.substring(l[0].length), l[0].replace(d, i), a = !1)) : h.test(e) && (l = e.match(p), l ? (l[4] && (e = e.substring(l[0].length), l[0].replace(p, r)), a = !1) : (u += "<", e = e.substring(1))), a && (o = e.indexOf("<"), u += 0 > o ? e : e.substring(0, o), e = 0 > o ? "" : e.substring(o), n.chars && n.chars(s(u)))), e == b) throw c("badparse", "The sanitizer was unable to parse the following block of html: {0}", e);
                b = e
            }
            i()
        }

        function s(e) {
            return e ? (P.innerHTML = e.replace(/</g, "&lt;"), P.textContent) : ""
        }

        function l(e) {
            return e.replace(/&/g, "&amp;").replace(y, function(e) {
                var t = e.charCodeAt(0),
                    n = e.charCodeAt(1);
                return "&#" + (1024 * (t - 55296) + (n - 56320) + 65536) + ";"
            }).replace(b, function(e) {
                return "&#" + e.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function u(e, n) {
            var r = !1,
                i = t.bind(e, e.push);
            return {
                start: function(e, o, a) {
                    e = t.lowercase(e), !r && D[e] && (r = e), r || A[e] !== !0 || (i("<"), i(e), t.forEach(o, function(r, o) {
                        var a = t.lowercase(o),
                            s = "img" === e && "src" === a || "background" === a;
                        j[a] !== !0 || O[a] === !0 && !n(r, s) || (i(" "), i(o), i('="'), i(l(r)), i('"'))
                    }), i(a ? "/>" : ">"))
                },
                end: function(e) {
                    e = t.lowercase(e), r || A[e] !== !0 || (i("</"), i(e), i(">")), e == r && (r = !1)
                },
                chars: function(e) {
                    r || i(l(e))
                }
            }
        }
        var c = t.$$minErr("$sanitize"),
            p = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            d = /^<\/\s*([\w:-]+)[^>]*>/,
            f = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            h = /^</,
            m = /^<\//,
            v = /<!--(.*?)-->/g,
            g = /<!DOCTYPE([^>]*?)>/i,
            $ = /<!\[CDATA\[(.*?)]]>/g,
            y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            b = /([^\#-~| |!])/g,
            w = o("area,br,col,hr,img,wbr"),
            x = o("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            C = o("rp,rt"),
            k = t.extend({}, C, x),
            S = t.extend({}, x, o("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            E = t.extend({}, C, o("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            T = o("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use"),
            D = o("script,style"),
            A = t.extend({}, w, S, E, k, T),
            O = o("background,cite,href,longdesc,src,usemap,xlink:href"),
            M = o("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
            N = o("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            j = t.extend({}, O, N, M),
            P = document.createElement("pre");
        t.module("ngSanitize", []).provider("$sanitize", r), t.module("ngSanitize").filter("linky", ["$sanitize", function(e) {
            var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
                r = /^mailto:/i;
            return function(o, a) {
                function s(e) {
                    e && f.push(i(e))
                }

                function l(e, n) {
                    f.push("<a "), t.isDefined(a) && f.push('target="', a, '" '), f.push('href="', e.replace(/"/g, "&quot;"), '">'), s(n), f.push("</a>")
                }
                if (!o) return o;
                for (var u, c, p, d = o, f = []; u = d.match(n);) c = u[0], u[2] || u[4] || (c = (u[3] ? "http://" : "mailto:") + c), p = u.index, s(d.substr(0, p)), l(c, u[0].replace(r, "")), d = d.substring(p + u[0].length);
                return s(d), e(f.join(""))
            }
        }])
    }(window, window.angular),
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            if (!e) throw ngMinErr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function i(e, t) {
            return e || t ? e ? t ? (U(e) && (e = e.join(" ")), U(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function o(e) {
            var t = {};
            return e && (e.to || e.from) && (t.to = e.to, t.from = e.from), t
        }

        function a(e, t, n) {
            var r = "";
            return e = U(e) ? e : e && B(e) && e.length ? e.split(/\s+/) : [], R(e, function(e, i) {
                e && e.length > 0 && (r += i > 0 ? " " : "", r += n ? t + e : e + t)
            }), r
        }

        function s(e, t) {
            var n = e.indexOf(t);
            t >= 0 && e.splice(n, 1)
        }

        function l(e) {
            if (e instanceof L) switch (e.length) {
                case 0:
                    return [];
                case 1:
                    if (e[0].nodeType === K) return e;
                    break;
                default:
                    return L(u(e))
            }
            return e.nodeType === K ? L(e) : void 0
        }

        function u(e) {
            if (!e[0]) return e;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType == K) return n
            }
        }

        function c(e, t, n) {
            R(t, function(t) {
                e.addClass(t, n)
            })
        }

        function p(e, t, n) {
            R(t, function(t) {
                e.removeClass(t, n)
            })
        }

        function d(e) {
            return function(t, n) {
                n.addClass && (c(e, t, n.addClass), n.addClass = null), n.removeClass && (p(e, t, n.removeClass), n.removeClass = null)
            }
        }

        function f(e) {
            if (e = e || {}, !e.$$prepared) {
                var t = e.domOperation || V;
                e.domOperation = function() {
                    e.$$domOperationFired = !0, t(), t = V
                }, e.$$prepared = !0
            }
            return e
        }

        function h(e, t) {
            m(e, t), v(e, t)
        }

        function m(e, t) {
            t.from && (e.css(t.from), t.from = null)
        }

        function v(e, t) {
            t.to && (e.css(t.to), t.to = null)
        }

        function g(e, t, n) {
            var r = (t.addClass || "") + " " + (n.addClass || ""),
                i = (t.removeClass || "") + " " + (n.removeClass || ""),
                o = $(e.attr("class"), r, i);
            n.preparationClasses && (t.preparationClasses = S(n.preparationClasses, t.preparationClasses), delete n.preparationClasses);
            var a = t.domOperation !== V ? t.domOperation : null;
            return H(t, n), a && (t.domOperation = a), o.addClass ? t.addClass = o.addClass : t.addClass = null, o.removeClass ? t.removeClass = o.removeClass : t.removeClass = null, t
        }

        function $(e, t, n) {
            function r(e) {
                B(e) && (e = e.split(" "));
                var t = {};
                return R(e, function(e) {
                    e.length && (t[e] = !0)
                }), t
            }
            var i = 1,
                o = -1,
                a = {};
            e = r(e), t = r(t), R(t, function(e, t) {
                a[t] = i
            }), n = r(n), R(n, function(e, t) {
                a[t] = a[t] === i ? null : o
            });
            var s = {
                addClass: "",
                removeClass: ""
            };
            return R(a, function(t, n) {
                var r, a;
                t === i ? (r = "addClass", a = !e[n]) : t === o && (r = "removeClass", a = e[n]), a && (s[r].length && (s[r] += " "), s[r] += n)
            }), s
        }

        function y(e) {
            return e instanceof t.element ? e[0] : e
        }

        function b(e, t, n) {
            var r = "";
            t && (r = a(t, J, !0)), n.addClass && (r = S(r, a(n.addClass, X))), n.removeClass && (r = S(r, a(n.removeClass, Q))), r.length && (n.preparationClasses = r, e.addClass(r))
        }

        function w(e, t) {
            t.preparationClasses && (e.removeClass(t.preparationClasses), t.preparationClasses = null), t.activeClasses && (e.removeClass(t.activeClasses), t.activeClasses = null)
        }

        function x(e, t) {
            var n = t ? "-" + t + "s" : "";
            return k(e, [de, n]), [de, n]
        }

        function C(e, t) {
            var n = t ? "paused" : "",
                r = q + le;
            return k(e, [r, n]), [r, n]
        }

        function k(e, t) {
            var n = t[0],
                r = t[1];
            e.style[n] = r
        }

        function S(e, t) {
            return e ? t ? e + " " + t : e : t
        }

        function E(e) {
            return [pe, e + "s"]
        }

        function T(e, t) {
            var n = t ? ce : de;
            return [n, e + "s"]
        }

        function D(e, t, n) {
            var r = Object.create(null),
                i = e.getComputedStyle(t) || {};
            return R(n, function(e, t) {
                var n = i[e];
                if (n) {
                    var o = n.charAt(0);
                    ("-" === o || "+" === o || o >= 0) && (n = A(n)), 0 === n && (n = null), r[t] = n
                }
            }), r
        }

        function A(e) {
            var t = 0,
                n = e.split(/\s*,\s*/);
            return R(n, function(e) {
                "s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
            }), t
        }

        function O(e) {
            return 0 === e || null != e
        }

        function M(e, t) {
            var n = P,
                r = e + "s";
            return t ? n += re : r += " linear all", [n, r]
        }

        function N() {
            var e = Object.create(null);
            return {
                flush: function() {
                    e = Object.create(null)
                },
                count: function(t) {
                    var n = e[t];
                    return n ? n.total : 0
                },
                get: function(t) {
                    var n = e[t];
                    return n && n.value
                },
                put: function(t, n) {
                    e[t] ? e[t].total++ : e[t] = {
                        total: 1,
                        value: n
                    }
                }
            }
        }

        function j(e, t, n) {
            R(n, function(n) {
                e[n] = W(e[n]) ? e[n] : t.style.getPropertyValue(n)
            })
        }
        var P, I, q, F, V = t.noop,
            H = t.extend,
            L = t.element,
            R = t.forEach,
            U = t.isArray,
            B = t.isString,
            _ = t.isObject,
            z = t.isUndefined,
            W = t.isDefined,
            G = t.isFunction,
            Y = t.isElement,
            K = 1,
            X = "-add",
            Q = "-remove",
            J = "ng-",
            Z = "-active",
            ee = "ng-animate",
            te = "$$ngAnimateChildren",
            ne = "";
        z(e.ontransitionend) && W(e.onwebkittransitionend) ? (ne = "-webkit-", P = "WebkitTransition", I = "webkitTransitionEnd transitionend") : (P = "transition", I = "transitionend"), z(e.onanimationend) && W(e.onwebkitanimationend) ? (ne = "-webkit-", q = "WebkitAnimation", F = "webkitAnimationEnd animationend") : (q = "animation", F = "animationend");
        var re = "Duration",
            ie = "Property",
            oe = "Delay",
            ae = "TimingFunction",
            se = "IterationCount",
            le = "PlayState",
            ue = 9999,
            ce = q + oe,
            pe = q + re,
            de = P + oe,
            fe = P + re,
            he = ["$$rAF", function(e) {
                function t(e) {
                    r = r.concat(e), n()
                }

                function n() {
                    if (r.length) {
                        for (var t = r.shift(), o = 0; o < t.length; o++) t[o]();
                        i || e(function() {
                            i || n()
                        })
                    }
                }
                var r, i;
                return r = t.queue = [], t.waitUntilQuiet = function(t) {
                    i && i(), i = e(function() {
                        i = null, t(), n()
                    })
                }, t
            }],
            me = [function() {
                return function(e, n, r) {
                    var i = r.ngAnimateChildren;
                    t.isString(i) && 0 === i.length ? n.data(te, !0) : r.$observe("ngAnimateChildren", function(e) {
                        e = "on" === e || "true" === e, n.data(te, e)
                    })
                }
            }],
            ve = "$$animateCss",
            ge = 1e3,
            $e = 3,
            ye = 1.5,
            be = {
                transitionDuration: fe,
                transitionDelay: de,
                transitionProperty: P + ie,
                animationDuration: pe,
                animationDelay: ce,
                animationIterationCount: q + se
            },
            we = {
                transitionDuration: fe,
                transitionDelay: de,
                animationDuration: pe,
                animationDelay: ce
            },
            xe = ["$animateProvider", function(e) {
                var t = N(),
                    n = N();
                this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$animate", function(e, r, i, l, u, c, p, g) {
                    function $(e, t) {
                        var n = "$$ngAnimateParentKey",
                            r = e.parentNode,
                            i = r[n] || (r[n] = ++H);
                        return i + "-" + e.getAttribute("class") + "-" + t
                    }

                    function b(n, r, i, o) {
                        var a = t.get(i);
                        return a || (a = D(e, n, o), "infinite" === a.animationIterationCount && (a.animationIterationCount = 1)), t.put(i, a), a
                    }

                    function w(i, o, s, l) {
                        var u;
                        if (t.count(s) > 0 && (u = n.get(s), !u)) {
                            var c = a(o, "-stagger");
                            r.addClass(i, c), u = D(e, i, l), u.animationDuration = Math.max(u.animationDuration, 0), u.transitionDuration = Math.max(u.transitionDuration, 0), r.removeClass(i, c), n.put(s, u)
                        }
                        return u || {}
                    }

                    function S(e) {
                        L.push(e), p.waitUntilQuiet(function() {
                            t.flush(), n.flush();
                            for (var e = u(), r = 0; r < L.length; r++) L[r](e);
                            L.length = 0
                        })
                    }

                    function A(e, t, n) {
                        var r = b(e, t, n, be),
                            i = r.animationDelay,
                            o = r.transitionDelay;
                        return r.maxDelay = i && o ? Math.max(i, o) : i || o, r.maxDuration = Math.max(r.animationDuration * r.animationIterationCount, r.transitionDuration), r
                    }
                    var N = d(r),
                        H = 0,
                        L = [];
                    return function(e, n) {
                        function u() {
                            d()
                        }

                        function p() {
                            d(!0)
                        }

                        function d(t) {
                            _ || W && z || (_ = !0, z = !1, n.$$skipPreparationClasses || r.removeClass(e, fe), r.removeClass(e, me), C(B, !1), x(B, !1), R(re, function(e) {
                                B.style[e[0]] = ""
                            }), N(e, n), h(e, n), Object.keys(L).length && R(L, function(e, t) {
                                e ? B.style.setProperty(t, e) : B.style.removeProperty(t)
                            }), n.onDone && n.onDone(), G && G.complete(!t))
                        }

                        function b(e) {
                            Pe.blockTransition && x(B, e), Pe.blockKeyframeAnimation && C(B, !!e)
                        }

                        function D() {
                            return G = new i({
                                end: u,
                                cancel: p
                            }), S(V), d(), {
                                $$willAnimate: !1,
                                start: function() {
                                    return G
                                },
                                end: u
                            }
                        }

                        function H() {
                            function t() {
                                if (!_) {
                                    if (b(!1), R(re, function(e) {
                                            var t = e[0],
                                                n = e[1];
                                            B.style[t] = n
                                        }), N(e, n), r.addClass(e, me), Pe.recalculateTimingStyles) {
                                        if (he = B.className + " " + fe, Ce = $(B, he), Ne = A(B, he, Ce), je = Ne.maxDelay, K = Math.max(je, 0), te = Ne.maxDuration, 0 === te) return void d();
                                        Pe.hasTransitions = Ne.transitionDuration > 0, Pe.hasAnimations = Ne.animationDuration > 0
                                    }
                                    if (Pe.applyAnimationDelay && (je = "boolean" != typeof n.delay && O(n.delay) ? parseFloat(n.delay) : je, K = Math.max(je, 0), Ne.animationDelay = je, Ie = T(je, !0), re.push(Ie), B.style[Ie[0]] = Ie[1]), ee = K * ge, ne = te * ge, n.easing) {
                                        var t, s = n.easing;
                                        Pe.hasTransitions && (t = P + ae, re.push([t, s]), B.style[t] = s), Pe.hasAnimations && (t = q + ae, re.push([t, s]), B.style[t] = s)
                                    }
                                    Ne.transitionDuration && u.push(I), Ne.animationDuration && u.push(F), a = Date.now();
                                    var c = ee + ye * ne,
                                        p = a + c,
                                        f = e.data(ve) || [],
                                        h = !0;
                                    if (f.length) {
                                        var m = f[0];
                                        h = p > m.expectedEndTime, h ? l.cancel(m.timer) : f.push(d)
                                    }
                                    if (h) {
                                        var g = l(i, c, !1);
                                        f[0] = {
                                            timer: g,
                                            expectedEndTime: p
                                        }, f.push(d), e.data(ve, f)
                                    }
                                    e.on(u.join(" "), o), n.to && (n.cleanupStyles && j(L, B, Object.keys(n.to)), v(e, n))
                                }
                            }

                            function i() {
                                var t = e.data(ve);
                                if (t) {
                                    for (var n = 1; n < t.length; n++) t[n]();
                                    e.removeData(ve)
                                }
                            }

                            function o(e) {
                                e.stopPropagation();
                                var t = e.originalEvent || e,
                                    n = t.$manualTimeStamp || t.timeStamp || Date.now(),
                                    r = parseFloat(t.elapsedTime.toFixed($e));
                                Math.max(n - a, 0) >= ee && r >= te && (W = !0, d())
                            }
                            if (!_) {
                                if (!B.parentNode) return void d();
                                var a, u = [],
                                    c = function(e) {
                                        if (W) z && e && (z = !1, d());
                                        else if (z = !e, Ne.animationDuration) {
                                            var t = C(B, z);
                                            z ? re.push(t) : s(re, t)
                                        }
                                    },
                                    p = Oe > 0 && (Ne.transitionDuration && 0 === ke.transitionDuration || Ne.animationDuration && 0 === ke.animationDuration) && Math.max(ke.animationDelay, ke.transitionDelay);
                                p ? l(t, Math.floor(p * Oe * ge), !1) : t(), Y.resume = function() {
                                    c(!0)
                                }, Y.pause = function() {
                                    c(!1)
                                }
                            }
                        }
                        var L = {},
                            B = y(e);
                        if (!B || !B.parentNode || !g.enabled()) return D();
                        n = f(n);
                        var _, z, W, G, Y, K, ee, te, ne, re = [],
                            oe = e.attr("class"),
                            se = o(n);
                        if (0 === n.duration || !c.animations && !c.transitions) return D();
                        var le = n.event && U(n.event) ? n.event.join(" ") : n.event,
                            ce = le && n.structural,
                            pe = "",
                            de = "";
                        ce ? pe = a(le, J, !0) : le && (pe = le), n.addClass && (de += a(n.addClass, X)), n.removeClass && (de.length && (de += " "), de += a(n.removeClass, Q)), n.applyClassesEarly && de.length && N(e, n);
                        var fe = [pe, de].join(" ").trim(),
                            he = oe + " " + fe,
                            me = a(fe, Z),
                            be = se.to && Object.keys(se.to).length > 0,
                            xe = (n.keyframeStyle || "").length > 0;
                        if (!xe && !be && !fe) return D();
                        var Ce, ke;
                        if (n.stagger > 0) {
                            var Se = parseFloat(n.stagger);
                            ke = {
                                transitionDelay: Se,
                                animationDelay: Se,
                                transitionDuration: 0,
                                animationDuration: 0
                            }
                        } else Ce = $(B, he), ke = w(B, fe, Ce, we);
                        n.$$skipPreparationClasses || r.addClass(e, fe);
                        var Ee;
                        if (n.transitionStyle) {
                            var Te = [P, n.transitionStyle];
                            k(B, Te), re.push(Te)
                        }
                        if (n.duration >= 0) {
                            Ee = B.style[P].length > 0;
                            var De = M(n.duration, Ee);
                            k(B, De), re.push(De)
                        }
                        if (n.keyframeStyle) {
                            var Ae = [q, n.keyframeStyle];
                            k(B, Ae), re.push(Ae)
                        }
                        var Oe = ke ? n.staggerIndex >= 0 ? n.staggerIndex : t.count(Ce) : 0,
                            Me = 0 === Oe;
                        Me && !n.skipBlocking && x(B, ue);
                        var Ne = A(B, he, Ce),
                            je = Ne.maxDelay;
                        K = Math.max(je, 0), te = Ne.maxDuration;
                        var Pe = {};
                        if (Pe.hasTransitions = Ne.transitionDuration > 0, Pe.hasAnimations = Ne.animationDuration > 0, Pe.hasTransitionAll = Pe.hasTransitions && "all" == Ne.transitionProperty, Pe.applyTransitionDuration = be && (Pe.hasTransitions && !Pe.hasTransitionAll || Pe.hasAnimations && !Pe.hasTransitions), Pe.applyAnimationDuration = n.duration && Pe.hasAnimations, Pe.applyTransitionDelay = O(n.delay) && (Pe.applyTransitionDuration || Pe.hasTransitions), Pe.applyAnimationDelay = O(n.delay) && Pe.hasAnimations, Pe.recalculateTimingStyles = de.length > 0, (Pe.applyTransitionDuration || Pe.applyAnimationDuration) && (te = n.duration ? parseFloat(n.duration) : te, Pe.applyTransitionDuration && (Pe.hasTransitions = !0, Ne.transitionDuration = te, Ee = B.style[P + ie].length > 0, re.push(M(te, Ee))), Pe.applyAnimationDuration && (Pe.hasAnimations = !0, Ne.animationDuration = te, re.push(E(te)))), 0 === te && !Pe.recalculateTimingStyles) return D();
                        if (null != n.delay) {
                            var Ie = parseFloat(n.delay);
                            Pe.applyTransitionDelay && re.push(T(Ie)), Pe.applyAnimationDelay && re.push(T(Ie, !0))
                        }
                        return null == n.duration && Ne.transitionDuration > 0 && (Pe.recalculateTimingStyles = Pe.recalculateTimingStyles || Me), ee = K * ge, ne = te * ge, n.skipBlocking || (Pe.blockTransition = Ne.transitionDuration > 0, Pe.blockKeyframeAnimation = Ne.animationDuration > 0 && ke.animationDelay > 0 && 0 === ke.animationDuration), n.from && (n.cleanupStyles && j(L, B, Object.keys(n.from)), m(e, n)), Pe.blockTransition || Pe.blockKeyframeAnimation ? b(te) : n.skipBlocking || x(B, !1), {
                            $$willAnimate: !0,
                            end: u,
                            start: function() {
                                return _ ? void 0 : (Y = {
                                    end: u,
                                    cancel: p,
                                    resume: null,
                                    pause: null
                                }, G = new i(Y), S(H), G)
                            }
                        }
                    }
                }]
            }],
            Ce = ["$$animationProvider", function(e) {
                function t(e) {
                    return e.parentNode && 11 === e.parentNode.nodeType
                }
                e.drivers.push("$$animateCssDriver");
                var n = "ng-animate-shim",
                    r = "ng-anchor",
                    i = "ng-anchor-out",
                    o = "ng-anchor-in";
                this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(e, a, s, l, u, c, p) {
                    function f(e) {
                        return e.replace(/\bng-\S+\b/g, "")
                    }

                    function h(e, t) {
                        return B(e) && (e = e.split(" ")), B(t) && (t = t.split(" ")), e.filter(function(e) {
                            return -1 === t.indexOf(e)
                        }).join(" ")
                    }

                    function m(t, a, l) {
                        function u(e) {
                            var t = {},
                                n = y(e).getBoundingClientRect();
                            return R(["width", "height", "top", "left"], function(e) {
                                var r = n[e];
                                switch (e) {
                                    case "top":
                                        r += $.scrollTop;
                                        break;
                                    case "left":
                                        r += $.scrollLeft
                                }
                                t[e] = Math.floor(r) + "px"
                            }), t
                        }

                        function c() {
                            var t = e(v, {
                                addClass: i,
                                delay: !0,
                                from: u(a)
                            });
                            return t.$$willAnimate ? t : null
                        }

                        function p(e) {
                            return e.attr("class") || ""
                        }

                        function d() {
                            var t = f(p(l)),
                                n = h(t, g),
                                r = h(g, t),
                                a = e(v, {
                                    to: u(l),
                                    addClass: o + " " + n,
                                    removeClass: i + " " + r,
                                    delay: !0
                                });
                            return a.$$willAnimate ? a : null
                        }

                        function m() {
                            v.remove(), a.removeClass(n), l.removeClass(n)
                        }
                        var v = L(y(a).cloneNode(!0)),
                            g = f(p(v));
                        a.addClass(n), l.addClass(n), v.addClass(r), w.append(v);
                        var b, x = c();
                        if (!x && (b = d(), !b)) return m();
                        var C = x || b;
                        return {
                            start: function() {
                                function e() {
                                    n && n.end()
                                }
                                var t, n = C.start();
                                return n.done(function() {
                                    return n = null, !b && (b = d()) ? (n = b.start(), n.done(function() {
                                        n = null, m(), t.complete()
                                    }), n) : (m(), void t.complete())
                                }), t = new s({
                                    end: e,
                                    cancel: e
                                })
                            }
                        }
                    }

                    function v(e, t, n, r) {
                        var i = g(e, V),
                            o = g(t, V),
                            a = [];
                        return R(r, function(e) {
                            var t = e.out,
                                r = e["in"],
                                i = m(n, t, r);
                            i && a.push(i)
                        }), i || o || 0 !== a.length ? {
                            start: function() {
                                function e() {
                                    R(t, function(e) {
                                        e.end()
                                    })
                                }
                                var t = [];
                                i && t.push(i.start()), o && t.push(o.start()), R(a, function(e) {
                                    t.push(e.start())
                                });
                                var n = new s({
                                    end: e,
                                    cancel: e
                                });
                                return s.all(t, function(e) {
                                    n.complete(e)
                                }), n
                            }
                        } : void 0
                    }

                    function g(t) {
                        var n = t.element,
                            r = t.options || {};
                        t.structural && (r.event = t.event, r.structural = !0, r.applyClassesEarly = !0, "leave" === t.event && (r.onDone = r.domOperation)), r.preparationClasses && (r.event = S(r.event, r.preparationClasses));
                        var i = e(n, r);
                        return i.$$willAnimate ? i : null
                    }
                    if (!u.animations && !u.transitions) return V;
                    var $ = p[0].body,
                        b = y(l),
                        w = L(t(b) || $.contains(b) ? b : $);
                    d(c);
                    return function(e) {
                        return e.from && e.to ? v(e.from, e.to, e.classes, e.anchors) : g(e)
                    }
                }]
            }],
            ke = ["$animateProvider", function(e) {
                this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(t, n, r) {
                    function i(n) {
                        n = U(n) ? n : n.split(" ");
                        for (var r = [], i = {}, o = 0; o < n.length; o++) {
                            var a = n[o],
                                s = e.$$registeredAnimations[a];
                            s && !i[a] && (r.push(t.get(s)), i[a] = !0)
                        }
                        return r
                    }
                    var o = d(r);
                    return function(e, t, r, a) {
                        function s() {
                            a.domOperation(), o(e, a)
                        }

                        function l(e, t, r, i, o) {
                            var a;
                            switch (r) {
                                case "animate":
                                    a = [t, i.from, i.to, o];
                                    break;
                                case "setClass":
                                    a = [t, m, v, o];
                                    break;
                                case "addClass":
                                    a = [t, m, o];
                                    break;
                                case "removeClass":
                                    a = [t, v, o];
                                    break;
                                default:
                                    a = [t, o]
                            }
                            a.push(i);
                            var s = e.apply(e, a);
                            if (s)
                                if (G(s.start) && (s = s.start()), s instanceof n) s.done(o);
                                else if (G(s)) return s;
                            return V
                        }

                        function u(e, t, r, i, o) {
                            var a = [];
                            return R(i, function(i) {
                                var s = i[o];
                                s && a.push(function() {
                                    var i, o, a = !1,
                                        u = function(e) {
                                            a || (a = !0, (o || V)(e), i.complete(!e))
                                        };
                                    return i = new n({
                                        end: function() {
                                            u()
                                        },
                                        cancel: function() {
                                            u(!0)
                                        }
                                    }), o = l(s, e, t, r, function(e) {
                                        var t = e === !1;
                                        u(t)
                                    }), i
                                })
                            }), a
                        }

                        function c(e, t, r, i, o) {
                            var a = u(e, t, r, i, o);
                            if (0 === a.length) {
                                var s, l;
                                "beforeSetClass" === o ? (s = u(e, "removeClass", r, i, "beforeRemoveClass"), l = u(e, "addClass", r, i, "beforeAddClass")) : "setClass" === o && (s = u(e, "removeClass", r, i, "removeClass"), l = u(e, "addClass", r, i, "addClass")), s && (a = a.concat(s)), l && (a = a.concat(l))
                            }
                            if (0 !== a.length) return function(e) {
                                var t = [];
                                return a.length && R(a, function(e) {
                                        t.push(e())
                                    }), t.length ? n.all(t, e) : e(),
                                    function(e) {
                                        R(t, function(t) {
                                            e ? t.cancel() : t.end()
                                        })
                                    }
                            }
                        }
                        3 === arguments.length && _(r) && (a = r, r = null), a = f(a), r || (r = e.attr("class") || "", a.addClass && (r += " " + a.addClass), a.removeClass && (r += " " + a.removeClass));
                        var p, d, m = a.addClass,
                            v = a.removeClass,
                            g = i(r);
                        if (g.length) {
                            var $, y;
                            "leave" == t ? (y = "leave", $ = "afterLeave") : (y = "before" + t.charAt(0).toUpperCase() + t.substr(1), $ = t), "enter" !== t && "move" !== t && (p = c(e, t, a, g, y)), d = c(e, t, a, g, $)
                        }
                        return p || d ? {
                            start: function() {
                                function t(t) {
                                    l = !0, s(), h(e, a), u.complete(t)
                                }

                                function r(e) {
                                    l || ((i || V)(e), t(e))
                                }
                                var i, o = [];
                                p && o.push(function(e) {
                                    i = p(e)
                                }), o.length ? o.push(function(e) {
                                    s(), e(!0)
                                }) : s(), d && o.push(function(e) {
                                    i = d(e)
                                });
                                var l = !1,
                                    u = new n({
                                        end: function() {
                                            r()
                                        },
                                        cancel: function() {
                                            r(!0)
                                        }
                                    });
                                return n.chain(o, t), u
                            }
                        } : void 0
                    }
                }]
            }],
            Se = ["$$animationProvider", function(e) {
                e.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(e, t) {
                    function n(t) {
                        var n = t.element,
                            r = t.event,
                            i = t.options,
                            o = t.classes;
                        return e(n, r, o, i)
                    }
                    return function(e) {
                        if (e.from && e.to) {
                            var r = n(e.from),
                                i = n(e.to);
                            if (!r && !i) return;
                            return {
                                start: function() {
                                    function e() {
                                        return function() {
                                            R(o, function(e) {
                                                e.end()
                                            })
                                        }
                                    }

                                    function n(e) {
                                        a.complete(e)
                                    }
                                    var o = [];
                                    r && o.push(r.start()), i && o.push(i.start()), t.all(o, n);
                                    var a = new t({
                                        end: e(),
                                        cancel: e()
                                    });
                                    return a
                                }
                            }
                        }
                        return n(e)
                    }
                }]
            }],
            Ee = "data-ng-animate",
            Te = "$ngAnimatePin",
            De = ["$animateProvider", function(e) {
                function t(e, t, n, r) {
                    return a[e].some(function(e) {
                        return e(t, n, r)
                    })
                }

                function n(e, t) {
                    e = e || {};
                    var n = (e.addClass || "").length > 0,
                        r = (e.removeClass || "").length > 0;
                    return t ? n && r : n || r
                }
                var i = 1,
                    o = 2,
                    a = this.rules = {
                        skip: [],
                        cancel: [],
                        join: []
                    };
                a.join.push(function(e, t, r) {
                    return !t.structural && n(t.options)
                }), a.skip.push(function(e, t, r) {
                    return !t.structural && !n(t.options)
                }), a.skip.push(function(e, t, n) {
                    return "leave" == n.event && t.structural
                }), a.skip.push(function(e, t, n) {
                    return n.structural && n.state === o && !t.structural
                }), a.cancel.push(function(e, t, n) {
                    return n.structural && t.structural
                }), a.cancel.push(function(e, t, n) {
                    return n.state === o && t.structural
                }), a.cancel.push(function(e, t, n) {
                    var r = t.options,
                        i = n.options;
                    return r.addClass && r.addClass === i.removeClass || r.removeClass && r.removeClass === i.addClass
                }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(a, s, c, p, m, v, $, x, C, k) {
                    function S() {
                        var e = !1;
                        return function(t) {
                            e ? t() : s.$$postDigest(function() {
                                e = !0, t()
                            })
                        }
                    }

                    function E(e, t) {
                        return g(e, t, {})
                    }

                    function T(e, t, n) {
                        var r = y(t),
                            i = y(e),
                            o = [],
                            a = V[n];
                        return a && R(a, function(e) {
                            e.node.contains(r) ? o.push(e.callback) : "leave" === n && e.node.contains(i) && o.push(e.callback)
                        }), o
                    }

                    function D(e, r, u) {
                        function c(t, n, r, i) {
                            C(function() {
                                var t = T(m, e, n);
                                t.length && a(function() {
                                    R(t, function(t) {
                                        t(e, r, i)
                                    })
                                })
                            }), t.progress(n, r, i)
                        }

                        function p(t) {
                            w(e, u), Q(e, u), h(e, u), u.domOperation(), x.complete(!t)
                        }
                        var d, m;
                        e = l(e), e && (d = y(e), m = e.parent()), u = f(u);
                        var x = new $,
                            C = S();
                        if (U(u.addClass) && (u.addClass = u.addClass.join(" ")), u.addClass && !B(u.addClass) && (u.addClass = null), U(u.removeClass) && (u.removeClass = u.removeClass.join(" ")), u.removeClass && !B(u.removeClass) && (u.removeClass = null), u.from && !_(u.from) && (u.from = null), u.to && !_(u.to) && (u.to = null), !d) return p(), x;
                        var k = [d.className, u.addClass, u.removeClass].join(" ");
                        if (!X(k)) return p(), x;
                        var D = ["enter", "move", "leave"].indexOf(r) >= 0,
                            M = !q || I.get(d),
                            F = !M && P.get(d) || {},
                            V = !!F.state;
                        if (M || V && F.state == i || (M = !N(e, m, r)), M) return p(), x;
                        D && A(e);
                        var H = {
                            structural: D,
                            element: e,
                            event: r,
                            close: p,
                            options: u,
                            runner: x
                        };
                        if (V) {
                            var L = t("skip", e, H, F);
                            if (L) return F.state === o ? (p(), x) : (g(e, F.options, u), F.runner);
                            var z = t("cancel", e, H, F);
                            if (z)
                                if (F.state === o) F.runner.end();
                                else {
                                    if (!F.structural) return g(e, F.options, H.options), F.runner;
                                    F.close()
                                }
                            else {
                                var W = t("join", e, H, F);
                                if (W) {
                                    if (F.state !== o) return b(e, D ? r : null, u), r = H.event = F.event, u = g(e, F.options, H.options), F.runner;
                                    E(e, u)
                                }
                            }
                        } else E(e, u);
                        var G = H.structural;
                        if (G || (G = "animate" === H.event && Object.keys(H.options.to || {}).length > 0 || n(H.options)), !G) return p(), O(e), x;
                        var Y = (F.counter || 0) + 1;
                        return H.counter = Y, j(e, i, H), s.$$postDigest(function() {
                            var t = P.get(d),
                                i = !t;
                            t = t || {};
                            var a = e.parent() || [],
                                s = a.length > 0 && ("animate" === t.event || t.structural || n(t.options));
                            if (i || t.counter !== Y || !s) return i && (Q(e, u), h(e, u)), (i || D && t.event !== r) && (u.domOperation(), x.end()), void(s || O(e));
                            r = !t.structural && n(t.options, !0) ? "setClass" : t.event, j(e, o);
                            var l = v(e, r, t.options);
                            l.done(function(t) {
                                p(!t);
                                var n = P.get(d);
                                n && n.counter === Y && O(y(e)), c(x, r, "close", {})
                            }), x.setHost(l), c(x, r, "start", {})
                        }), x
                    }

                    function A(e) {
                        var t = y(e),
                            n = t.querySelectorAll("[" + Ee + "]");
                        R(n, function(e) {
                            var t = parseInt(e.getAttribute(Ee)),
                                n = P.get(e);
                            switch (t) {
                                case o:
                                    n.runner.end();
                                case i:
                                    n && P.remove(e)
                            }
                        })
                    }

                    function O(e) {
                        var t = y(e);
                        t.removeAttribute(Ee), P.remove(t)
                    }

                    function M(e, t) {
                        return y(e) === y(t)
                    }

                    function N(e, t, n) {
                        var r, i = L(p[0].body),
                            o = M(e, i) || "HTML" === e[0].nodeName,
                            a = M(e, c),
                            s = !1,
                            l = e.data(Te);
                        for (l && (t = l); t && t.length;) {
                            a || (a = M(t, c));
                            var u = t[0];
                            if (u.nodeType !== K) break;
                            var d = P.get(u) || {};
                            if (s || (s = d.structural || I.get(u)), z(r) || r === !0) {
                                var f = t.data(te);
                                W(f) && (r = f)
                            }
                            if (s && r === !1) break;
                            a || (a = M(t, c), a || (l = t.data(Te), l && (t = l))), o || (o = M(t, i)), t = t.parent()
                        }
                        var h = !s || r;
                        return h && a && o
                    }

                    function j(e, t, n) {
                        n = n || {}, n.state = t;
                        var r = y(e);
                        r.setAttribute(Ee, t);
                        var i = P.get(r),
                            o = i ? H(i, n) : n;
                        P.put(r, o)
                    }
                    var P = new m,
                        I = new m,
                        q = null,
                        F = s.$watch(function() {
                            return 0 === x.totalPendingRequests
                        }, function(e) {
                            e && (F(), s.$$postDigest(function() {
                                s.$$postDigest(function() {
                                    null === q && (q = !0)
                                })
                            }))
                        }),
                        V = {},
                        G = e.classNameFilter(),
                        X = G ? function(e) {
                            return G.test(e)
                        } : function() {
                            return !0
                        },
                        Q = d(C);
                    return {
                        on: function(e, t, n) {
                            var r = u(t);
                            V[e] = V[e] || [], V[e].push({
                                node: r,
                                callback: n
                            })
                        },
                        off: function(e, t, n) {
                            function r(e, t, n) {
                                var r = u(t);
                                return e.filter(function(e) {
                                    var t = e.node === r && (!n || e.callback === n);
                                    return !t
                                })
                            }
                            var i = V[e];
                            i && (V[e] = 1 === arguments.length ? null : r(i, t, n))
                        },
                        pin: function(e, t) {
                            r(Y(e), "element", "not an element"), r(Y(t), "parentElement", "not an element"), e.data(Te, t)
                        },
                        push: function(e, t, n, r) {
                            return n = n || {}, n.domOperation = r, D(e, t, n)
                        },
                        enabled: function(e, t) {
                            var n = arguments.length;
                            if (0 === n) t = !!q;
                            else {
                                var r = Y(e);
                                if (r) {
                                    var i = y(e),
                                        o = I.get(i);
                                    1 === n ? t = !o : (t = !!t, t ? o && I.remove(i) : I.put(i, !0))
                                } else t = q = !!e
                            }
                            return t
                        }
                    }
                }]
            }],
            Ae = ["$$rAF", function(e) {
                function t(t) {
                    n.push(t), n.length > 1 || e(function() {
                        for (var e = 0; e < n.length; e++) n[e]();
                        n = []
                    })
                }
                var n = [];
                return function() {
                    var e = !1;
                    return t(function() {
                            e = !0
                        }),
                        function(n) {
                            e ? n() : t(n)
                        }
                }
            }],
            Oe = ["$q", "$sniffer", "$$animateAsyncRun", function(e, t, n) {
                function r(e) {
                    this.setHost(e), this._doneCallbacks = [], this._runInAnimationFrame = n(), this._state = 0
                }
                var i = 0,
                    o = 1,
                    a = 2;
                return r.chain = function(e, t) {
                    function n() {
                        return r === e.length ? void t(!0) : void e[r](function(e) {
                            return e === !1 ? void t(!1) : (r++, void n())
                        })
                    }
                    var r = 0;
                    n()
                }, r.all = function(e, t) {
                    function n(n) {
                        i = i && n, ++r === e.length && t(i)
                    }
                    var r = 0,
                        i = !0;
                    R(e, function(e) {
                        e.done(n)
                    })
                }, r.prototype = {
                    setHost: function(e) {
                        this.host = e || {}
                    },
                    done: function(e) {
                        this._state === a ? e() : this._doneCallbacks.push(e)
                    },
                    progress: V,
                    getPromise: function() {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function(e, n) {
                                t.done(function(t) {
                                    t === !1 ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(e, t) {
                        return this.getPromise().then(e, t)
                    },
                    "catch": function(e) {
                        return this.getPromise()["catch"](e)
                    },
                    "finally": function(e) {
                        return this.getPromise()["finally"](e)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function(e) {
                        var t = this;
                        t._state === i && (t._state = o, t._runInAnimationFrame(function() {
                            t._resolve(e)
                        }))
                    },
                    _resolve: function(e) {
                        this._state !== a && (R(this._doneCallbacks, function(t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = a)
                    }
                }, r
            }],
            Me = ["$animateProvider", function(e) {
                function t(e, t) {
                    e.data(s, t)
                }

                function n(e) {
                    e.removeData(s)
                }

                function r(e) {
                    return e.data(s)
                }
                var o = "ng-animate-ref",
                    a = this.drivers = [],
                    s = "$$animationRunner";
                this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(e, s, l, u, c, p) {
                    function m(e) {
                        function t(e) {
                            if (e.processed) return e;
                            e.processed = !0;
                            var n = e.domNode,
                                r = n.parentNode;
                            o.put(n, e);
                            for (var a; r;) {
                                if (a = o.get(r)) {
                                    a.processed || (a = t(a));
                                    break
                                }
                                r = r.parentNode
                            }
                            return (a || i).children.push(e), e
                        }

                        function n(e) {
                            var t, n = [],
                                r = [];
                            for (t = 0; t < e.children.length; t++) r.push(e.children[t]);
                            var i = r.length,
                                o = 0,
                                a = [];
                            for (t = 0; t < r.length; t++) {
                                var s = r[t];
                                0 >= i && (i = o, o = 0, n.push(a), a = []), a.push(s.fn), s.children.forEach(function(e) {
                                    o++, r.push(e)
                                }), i--
                            }
                            return a.length && n.push(a), n
                        }
                        var r, i = {
                                children: []
                            },
                            o = new c;
                        for (r = 0; r < e.length; r++) {
                            var a = e[r];
                            o.put(a.domNode, e[r] = {
                                domNode: a.domNode,
                                fn: a.fn,
                                children: []
                            })
                        }
                        for (r = 0; r < e.length; r++) t(e[r]);
                        return n(i)
                    }
                    var v = [],
                        g = d(e);
                    return function(c, d, $) {
                        function b(e) {
                            var t = "[" + o + "]",
                                n = e.hasAttribute(o) ? [e] : e.querySelectorAll(t),
                                r = [];
                            return R(n, function(e) {
                                var t = e.getAttribute(o);
                                t && t.length && r.push(e)
                            }), r
                        }

                        function w(e) {
                            var t = [],
                                n = {};
                            R(e, function(e, r) {
                                var i = e.element,
                                    a = y(i),
                                    s = e.event,
                                    l = ["enter", "move"].indexOf(s) >= 0,
                                    u = e.structural ? b(a) : [];
                                if (u.length) {
                                    var c = l ? "to" : "from";
                                    R(u, function(e) {
                                        var t = e.getAttribute(o);
                                        n[t] = n[t] || {}, n[t][c] = {
                                            animationID: r,
                                            element: L(e)
                                        }
                                    })
                                } else t.push(e)
                            });
                            var r = {},
                                i = {};
                            return R(n, function(n, o) {
                                var a = n.from,
                                    s = n.to;
                                if (!a || !s) {
                                    var l = a ? a.animationID : s.animationID,
                                        u = l.toString();
                                    return void(r[u] || (r[u] = !0, t.push(e[l])))
                                }
                                var c = e[a.animationID],
                                    p = e[s.animationID],
                                    d = a.animationID.toString();
                                if (!i[d]) {
                                    var f = i[d] = {
                                        structural: !0,
                                        beforeStart: function() {
                                            c.beforeStart(), p.beforeStart()
                                        },
                                        close: function() {
                                            c.close(), p.close()
                                        },
                                        classes: x(c.classes, p.classes),
                                        from: c,
                                        to: p,
                                        anchors: []
                                    };
                                    f.classes.length ? t.push(f) : (t.push(c), t.push(p))
                                }
                                i[d].anchors.push({
                                    out: a.element,
                                    "in": s.element
                                })
                            }), t
                        }

                        function x(e, t) {
                            e = e.split(" "), t = t.split(" ");
                            for (var n = [], r = 0; r < e.length; r++) {
                                var i = e[r];
                                if ("ng-" !== i.substring(0, 3))
                                    for (var o = 0; o < t.length; o++)
                                        if (i === t[o]) {
                                            n.push(i);
                                            break
                                        }
                            }
                            return n.join(" ")
                        }

                        function C(e) {
                            for (var t = a.length - 1; t >= 0; t--) {
                                var n = a[t];
                                if (l.has(n)) {
                                    var r = l.get(n),
                                        i = r(e);
                                    if (i) return i
                                }
                            }
                        }

                        function k() {
                            c.addClass(ee), M && e.addClass(c, M)
                        }

                        function S(e, t) {
                            function n(e) {
                                r(e).setHost(t)
                            }
                            e.from && e.to ? (n(e.from.element), n(e.to.element)) : n(e.element)
                        }

                        function E() {
                            var e = r(c);
                            !e || "leave" === d && $.$$domOperationFired || e.end()
                        }

                        function T(t) {
                            c.off("$destroy", E), n(c), g(c, $), h(c, $), $.domOperation(), M && e.removeClass(c, M), c.removeClass(ee), A.complete(!t)
                        }
                        $ = f($);
                        var D = ["enter", "move", "leave"].indexOf(d) >= 0,
                            A = new u({
                                end: function() {
                                    T()
                                },
                                cancel: function() {
                                    T(!0)
                                }
                            });
                        if (!a.length) return T(), A;
                        t(c, A);
                        var O = i(c.attr("class"), i($.addClass, $.removeClass)),
                            M = $.tempClasses;
                        return M && (O += " " + M, $.tempClasses = null), v.push({
                            element: c,
                            classes: O,
                            event: d,
                            structural: D,
                            options: $,
                            beforeStart: k,
                            close: T
                        }), c.on("$destroy", E), v.length > 1 ? A : (s.$$postDigest(function() {
                            var e = [];
                            R(v, function(t) {
                                r(t.element) ? e.push(t) : t.close()
                            }), v.length = 0;
                            var t = w(e),
                                n = [];
                            R(t, function(e) {
                                n.push({
                                    domNode: y(e.from ? e.from.element : e.element),
                                    fn: function() {
                                        e.beforeStart();
                                        var t, n = e.close,
                                            i = e.anchors ? e.from.element || e.to.element : e.element;
                                        if (r(i)) {
                                            var o = C(e);
                                            o && (t = o.start)
                                        }
                                        if (t) {
                                            var a = t();
                                            a.done(function(e) {
                                                n(!e)
                                            }), S(e, a)
                                        } else n()
                                    }
                                })
                            }), p(m(n))
                        }), A)
                    }
                }]
            }];
        t.module("ngAnimate", []).directive("ngAnimateChildren", me).factory("$$rAFScheduler", he).factory("$$AnimateRunner", Oe).factory("$$animateAsyncRun", Ae).provider("$$animateQueue", De).provider("$$animation", Me).provider("$animateCss", xe).provider("$$animateCssDriver", Ce).provider("$$animateJs", ke).provider("$$animateJsDriver", Se)
    }(window, window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return H(new(H(function() {}, {
                prototype: e
            })), t)
        }

        function i(e) {
            return V(arguments, function(t) {
                t !== e && V(t, function(t, n) {
                    e.hasOwnProperty(n) || (e[n] = t)
                })
            }), e
        }

        function o(e, t) {
            var n = [];
            for (var r in e.path) {
                if (e.path[r] !== t.path[r]) break;
                n.push(e.path[r])
            }
            return n
        }

        function a(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            return V(e, function(e, n) {
                t.push(n)
            }), t
        }

        function s(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
            var n = e.length >>> 0,
                r = Number(arguments[2]) || 0;
            for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }

        function l(e, t, n, r) {
            var i, l = o(n, r),
                u = {},
                c = [];
            for (var p in l)
                if (l[p].params && (i = a(l[p].params), i.length))
                    for (var d in i) s(c, i[d]) >= 0 || (c.push(i[d]), u[i[d]] = e[i[d]]);
            return H({}, u, t)
        }

        function u(e, t, n) {
            if (!n) {
                n = [];
                for (var r in e) n.push(r)
            }
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (e[o] != t[o]) return !1
            }
            return !0
        }

        function c(e, t) {
            var n = {};
            return V(e, function(e) {
                n[e] = t[e]
            }), n
        }

        function p(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return V(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }

        function d(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in e) - 1 == s(n, r) && (t[r] = e[r]);
            return t
        }

        function f(e, t) {
            var n = F(e),
                r = n ? [] : {};
            return V(e, function(e, i) {
                t(e, i) && (r[n ? r.length : i] = e)
            }), r
        }

        function h(e, t) {
            var n = F(e) ? [] : {};
            return V(e, function(e, r) {
                n[r] = t(e, r)
            }), n
        }

        function m(e, t) {
            var r = 1,
                o = 2,
                l = {},
                u = [],
                c = l,
                p = H(e.when(l), {
                    $$promises: l,
                    $$values: l
                });
            this.study = function(l) {
                function f(e, n) {
                    if ($[n] !== o) {
                        if (g.push(n), $[n] === r) throw g.splice(0, s(g, n)), new Error("Cyclic dependency: " + g.join(" -> "));
                        if ($[n] = r, I(e)) v.push(n, [function() {
                            return t.get(e)
                        }], u);
                        else {
                            var i = t.annotate(e);
                            V(i, function(e) {
                                e !== n && l.hasOwnProperty(e) && f(l[e], e)
                            }), v.push(n, e, i)
                        }
                        g.pop(), $[n] = o
                    }
                }

                function h(e) {
                    return q(e) && e.then && e.$$promises
                }
                if (!q(l)) throw new Error("'invocables' must be an object");
                var m = a(l || {}),
                    v = [],
                    g = [],
                    $ = {};
                return V(l, f), l = g = $ = null,
                    function(r, o, a) {
                        function s() {
                            --b || (w || i(y, o.$$values), g.$$values = y, g.$$promises = g.$$promises || !0, delete g.$$inheritedValues, f.resolve(y))
                        }

                        function l(e) {
                            g.$$failure = e, f.reject(e)
                        }

                        function u(n, i, o) {
                            function u(e) {
                                p.reject(e), l(e)
                            }

                            function c() {
                                if (!j(g.$$failure)) try {
                                    p.resolve(t.invoke(i, a, y)), p.promise.then(function(e) {
                                        y[n] = e, s()
                                    }, u)
                                } catch (e) {
                                    u(e)
                                }
                            }
                            var p = e.defer(),
                                d = 0;
                            V(o, function(e) {
                                $.hasOwnProperty(e) && !r.hasOwnProperty(e) && (d++, $[e].then(function(t) {
                                    y[e] = t, --d || c()
                                }, u))
                            }), d || c(), $[n] = p.promise
                        }
                        if (h(r) && a === n && (a = o, o = r, r = null), r) {
                            if (!q(r)) throw new Error("'locals' must be an object")
                        } else r = c;
                        if (o) {
                            if (!h(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else o = p;
                        var f = e.defer(),
                            g = f.promise,
                            $ = g.$$promises = {},
                            y = H({}, r),
                            b = 1 + v.length / 3,
                            w = !1;
                        if (j(o.$$failure)) return l(o.$$failure), g;
                        o.$$inheritedValues && i(y, d(o.$$inheritedValues, m)), H($, o.$$promises), o.$$values ? (w = i(y, d(o.$$values, m)), g.$$inheritedValues = d(o.$$values, m), s()) : (o.$$inheritedValues && (g.$$inheritedValues = d(o.$$inheritedValues, m)), o.then(s, l));
                        for (var x = 0, C = v.length; C > x; x += 3) r.hasOwnProperty(v[x]) ? s() : u(v[x], v[x + 1], v[x + 2]);
                        return g
                    }
            }, this.resolve = function(e, t, n, r) {
                return this.study(e)(t, n, r)
            }
        }

        function v(e, t, n) {
            this.fromConfig = function(e, t, n) {
                return j(e.template) ? this.fromString(e.template, t) : j(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : j(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
            }, this.fromString = function(e, t) {
                return P(e) ? e(t) : e
            }, this.fromUrl = function(n, r) {
                return P(n) && (n = n(r)), null == n ? null : e.get(n, {
                    cache: t,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(e) {
                    return e.data
                })
            }, this.fromProvider = function(e, t, r) {
                return n.invoke(e, null, r || {
                    params: t
                })
            }
        }

        function g(e, t, i) {
            function o(t, n, r, i) {
                if (v.push(t), h[t]) return h[t];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                if (m[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                return m[t] = new R.Param(t, n, r, i), m[t]
            }

            function a(e, t, n, r) {
                var i = ["", ""],
                    o = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!t) return o;
                switch (n) {
                    case !1:
                        i = ["(", ")" + (r ? "?" : "")];
                        break;
                    case !0:
                        i = ["?(", ")?"];
                        break;
                    default:
                        i = ["(" + n + "|", ")?"]
                }
                return o + i[0] + t + i[1]
            }

            function s(i, o) {
                var a, s, l, u, c;
                return a = i[2] || i[3], c = t.params[a], l = e.substring(d, i.index), s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), u = R.type(s || "string") || r(R.type("string"), {
                    pattern: new RegExp(s, t.caseInsensitive ? "i" : n)
                }), {
                    id: a,
                    regexp: s,
                    segment: l,
                    type: u,
                    cfg: c
                }
            }
            t = H({
                params: {}
            }, q(t) ? t : {});
            var l, u = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                p = "^",
                d = 0,
                f = this.segments = [],
                h = i ? i.params : {},
                m = this.params = i ? i.params.$$new() : new R.ParamSet,
                v = [];
            this.source = e;
            for (var g, $, y;
                (l = u.exec(e)) && (g = s(l, !1), !(g.segment.indexOf("?") >= 0));) $ = o(g.id, g.type, g.cfg, "path"), p += a(g.segment, $.type.pattern.source, $.squash, $.isOptional), f.push(g.segment), d = u.lastIndex;
            y = e.substring(d);
            var b = y.indexOf("?");
            if (b >= 0) {
                var w = this.sourceSearch = y.substring(b);
                if (y = y.substring(0, b), this.sourcePath = e.substring(0, d + b), w.length > 0)
                    for (d = 0; l = c.exec(w);) g = s(l, !0), $ = o(g.id, g.type, g.cfg, "search"), d = u.lastIndex
            } else this.sourcePath = e, this.sourceSearch = "";
            p += a(y) + (t.strict === !1 ? "/?" : "") + "$", f.push(y), this.regexp = new RegExp(p, t.caseInsensitive ? "i" : n), this.prefix = f[0], this.$$paramNames = v
        }

        function $(e) {
            H(this, e)
        }

        function y() {
            function e(e) {
                return null != e ? e.toString().replace(/\//g, "%2F") : e
            }

            function i(e) {
                return null != e ? e.toString().replace(/%2F/g, "/") : e
            }

            function o() {
                return {
                    strict: m,
                    caseInsensitive: d
                }
            }

            function l(e) {
                return P(e) || F(e) && P(e[e.length - 1])
            }

            function u() {
                for (; x.length;) {
                    var e = x.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    t.extend(b[e.name], p.invoke(e.def))
                }
            }

            function c(e) {
                H(this, e || {})
            }
            R = this;
            var p, d = !1,
                m = !0,
                v = !1,
                b = {},
                w = !0,
                x = [],
                C = {
                    string: {
                        encode: e,
                        decode: i,
                        is: function(e) {
                            return null == e || !j(e) || "string" == typeof e
                        },
                        pattern: /[^/]*/
                    },
                    "int": {
                        encode: e,
                        decode: function(e) {
                            return parseInt(e, 10)
                        },
                        is: function(e) {
                            return j(e) && this.decode(e.toString()) === e
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(e) {
                            return e ? 1 : 0
                        },
                        decode: function(e) {
                            return 0 !== parseInt(e, 10)
                        },
                        is: function(e) {
                            return e === !0 || e === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(e) {
                            return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function(e) {
                            if (this.is(e)) return e;
                            var t = this.capture.exec(e);
                            return t ? new Date(t[1], t[2] - 1, t[3]) : n
                        },
                        is: function(e) {
                            return e instanceof Date && !isNaN(e.valueOf())
                        },
                        equals: function(e, t) {
                            return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: t.toJson,
                        decode: t.fromJson,
                        is: t.isObject,
                        equals: t.equals,
                        pattern: /[^/]*/
                    },
                    any: {
                        encode: t.identity,
                        decode: t.identity,
                        equals: t.equals,
                        pattern: /.*/
                    }
                };
            y.$$getDefaultValue = function(e) {
                if (!l(e.value)) return e.value;
                if (!p) throw new Error("Injectable functions cannot be called at configuration time");
                return p.invoke(e.value)
            }, this.caseInsensitive = function(e) {
                return j(e) && (d = e), d
            }, this.strictMode = function(e) {
                return j(e) && (m = e), m
            }, this.defaultSquashPolicy = function(e) {
                if (!j(e)) return v;
                if (e !== !0 && e !== !1 && !I(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return v = e, e
            }, this.compile = function(e, t) {
                return new g(e, H(o(), t))
            }, this.isMatcher = function(e) {
                if (!q(e)) return !1;
                var t = !0;
                return V(g.prototype, function(n, r) {
                    P(n) && (t = t && j(e[r]) && P(e[r]))
                }), t
            }, this.type = function(e, t, n) {
                if (!j(t)) return b[e];
                if (b.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return b[e] = new $(H({
                    name: e
                }, t)), n && (x.push({
                    name: e,
                    def: n
                }), w || u()), this
            }, V(C, function(e, t) {
                b[t] = new $(H({
                    name: t
                }, e))
            }), b = r(b, {}), this.$get = ["$injector", function(e) {
                return p = e, w = !1, u(), V(C, function(e, t) {
                    b[t] || (b[t] = new $(e))
                }), this
            }], this.Param = function(e, t, r, i) {
                function o(e) {
                    var t = q(e) ? a(e) : [],
                        n = -1 === s(t, "value") && -1 === s(t, "type") && -1 === s(t, "squash") && -1 === s(t, "array");
                    return n && (e = {
                        value: e
                    }), e.$$fn = l(e.value) ? e.value : function() {
                        return e.value
                    }, e
                }

                function u(t, n, r) {
                    if (t.type && n) throw new Error("Param '" + e + "' has two type configurations.");
                    return n ? n : t.type ? t.type instanceof $ ? t.type : new $(t.type) : "config" === r ? b.any : b.string
                }

                function c() {
                    var t = {
                            array: "search" === i ? "auto" : !1
                        },
                        n = e.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return H(t, n, r).array
                }

                function d(e, t) {
                    var n = e.squash;
                    if (!t || n === !1) return !1;
                    if (!j(n) || null == n) return v;
                    if (n === !0 || I(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function m(e, t, r, i) {
                    var o, a, l = [{
                        from: "",
                        to: r || t ? n : ""
                    }, {
                        from: null,
                        to: r || t ? n : ""
                    }];
                    return o = F(e.replace) ? e.replace : [], I(i) && o.push({
                        from: i,
                        to: n
                    }), a = h(o, function(e) {
                        return e.from
                    }), f(l, function(e) {
                        return -1 === s(a, e.from)
                    }).concat(o)
                }

                function g() {
                    if (!p) throw new Error("Injectable functions cannot be called at configuration time");
                    var e = p.invoke(r.$$fn);
                    if (null !== e && e !== n && !x.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
                    return e
                }

                function y(e) {
                    function t(e) {
                        return function(t) {
                            return t.from === e
                        }
                    }

                    function n(e) {
                        var n = h(f(x.replace, t(e)), function(e) {
                            return e.to
                        });
                        return n.length ? n[0] : e
                    }
                    return e = n(e), j(e) ? x.type.$normalize(e) : g()
                }

                function w() {
                    return "{Param:" + e + " " + t + " squash: '" + S + "' optional: " + k + "}"
                }
                var x = this;
                r = o(r), t = u(r, t, i);
                var C = c();
                t = C ? t.$asArray(C, "search" === i) : t, "string" !== t.name || C || "path" !== i || r.value !== n || (r.value = "");
                var k = r.value !== n,
                    S = d(r, k),
                    E = m(r, C, k, S);
                H(this, {
                    id: e,
                    type: t,
                    location: i,
                    array: C,
                    squash: S,
                    replace: E,
                    isOptional: k,
                    value: y,
                    dynamic: n,
                    config: r,
                    toString: w
                })
            }, c.prototype = {
                $$new: function() {
                    return r(this, H(new c, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var e = [], t = [], n = this, r = a(c.prototype); n;) t.push(n), n = n.$$parent;
                    return t.reverse(), V(t, function(t) {
                        V(a(t), function(t) {
                            -1 === s(e, t) && -1 === s(r, t) && e.push(t)
                        })
                    }), e
                },
                $$values: function(e) {
                    var t = {},
                        n = this;
                    return V(n.$$keys(), function(r) {
                        t[r] = n[r].value(e && e[r])
                    }), t
                },
                $$equals: function(e, t) {
                    var n = !0,
                        r = this;
                    return V(r.$$keys(), function(i) {
                        var o = e && e[i],
                            a = t && t[i];
                        r[i].type.equals(o, a) || (n = !1)
                    }), n
                },
                $$validates: function(e) {
                    var r, i, o, a, s, l = this.$$keys();
                    for (r = 0; r < l.length && (i = this[l[r]], o = e[l[r]], o !== n && null !== o || !i.isOptional); r++) {
                        if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
                        if (s = i.type.encode(a), t.isString(s) && !i.type.pattern.exec(s)) return !1
                    }
                    return !0
                },
                $$parent: n
            }, this.ParamSet = c
        }

        function b(e, r) {
            function i(e) {
                var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
            }

            function o(e, t) {
                return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                    return t["$" === n ? 0 : Number(n)]
                })
            }

            function a(e, t, n) {
                if (!n) return !1;
                var r = e.invoke(t, t, {
                    $match: n
                });
                return j(r) ? r : !0
            }

            function s(r, i, o, a) {
                function s(e, t, n) {
                    return "/" === m ? e : t ? m.slice(0, -1) + e : n ? m.slice(1) + e : e
                }

                function d(e) {
                    function t(e) {
                        var t = e(o, r);
                        return t ? (I(t) && r.replace().url(t), !0) : !1
                    }
                    if (!e || !e.defaultPrevented) {
                        h && r.url() === h;
                        h = n;
                        var i, a = u.length;
                        for (i = 0; a > i; i++)
                            if (t(u[i])) return;
                        c && t(c)
                    }
                }

                function f() {
                    return l = l || i.$on("$locationChangeSuccess", d)
                }
                var h, m = a.baseHref(),
                    v = r.url();
                return p || f(), {
                    sync: function() {
                        d()
                    },
                    listen: function() {
                        return f()
                    },
                    update: function(e) {
                        return e ? void(v = r.url()) : void(r.url() !== v && (r.url(v), r.replace()))
                    },
                    push: function(e, t, i) {
                        var o = e.format(t || {});
                        null !== o && t && t["#"] && (o += "#" + t["#"]), r.url(o), h = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                    },
                    href: function(n, i, o) {
                        if (!n.validates(i)) return null;
                        var a = e.html5Mode();
                        t.isObject(a) && (a = a.enabled);
                        var l = n.format(i);
                        if (o = o || {}, a || null === l || (l = "#" + e.hashPrefix() + l), null !== l && i && i["#"] && (l += "#" + i["#"]), l = s(l, a, o.absolute), !o.absolute || !l) return l;
                        var u = !a && l ? "/" : "",
                            c = r.port();
                        return c = 80 === c || 443 === c ? "" : ":" + c, [r.protocol(), "://", r.host(), c, u, l].join("")
                    }
                }
            }
            var l, u = [],
                c = null,
                p = !1;
            this.rule = function(e) {
                if (!P(e)) throw new Error("'rule' must be a function");
                return u.push(e), this
            }, this.otherwise = function(e) {
                if (I(e)) {
                    var t = e;
                    e = function() {
                        return t
                    }
                } else if (!P(e)) throw new Error("'rule' must be a function");
                return c = e, this
            }, this.when = function(e, t) {
                var n, s = I(t);
                if (I(e) && (e = r.compile(e)), !s && !P(t) && !F(t)) throw new Error("invalid 'handler' in when()");
                var l = {
                        matcher: function(e, t) {
                            return s && (n = r.compile(t), t = ["$match", function(e) {
                                return n.format(e)
                            }]), H(function(n, r) {
                                return a(n, t, e.exec(r.path(), r.search()))
                            }, {
                                prefix: I(e.prefix) ? e.prefix : ""
                            })
                        },
                        regex: function(e, t) {
                            if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return s && (n = t, t = ["$match", function(e) {
                                return o(n, e)
                            }]), H(function(n, r) {
                                return a(n, t, e.exec(r.path()))
                            }, {
                                prefix: i(e)
                            })
                        }
                    },
                    u = {
                        matcher: r.isMatcher(e),
                        regex: e instanceof RegExp
                    };
                for (var c in u)
                    if (u[c]) return this.rule(l[c](e, t));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(e) {
                e === n && (e = !0), p = e
            }, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function w(e, i) {
            function o(e) {
                return 0 === e.indexOf(".") || 0 === e.indexOf("^")
            }

            function d(e, t) {
                if (!e) return n;
                var r = I(e),
                    i = r ? e : e.name,
                    a = o(i);
                if (a) {
                    if (!t) throw new Error("No reference point given for path '" + i + "'");
                    t = d(t);
                    for (var s = i.split("."), l = 0, u = s.length, c = t; u > l; l++)
                        if ("" !== s[l] || 0 !== l) {
                            if ("^" !== s[l]) break;
                            if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                            c = c.parent
                        } else c = t;
                    s = s.slice(l).join("."), i = c.name + (c.name && s ? "." : "") + s
                }
                var p = S[i];
                return !p || !r && (r || p !== e && p.self !== e) ? n : p
            }

            function f(e, t) {
                E[e] || (E[e] = []), E[e].push(t)
            }

            function m(e) {
                for (var t = E[e] || []; t.length;) v(t.shift())
            }

            function v(t) {
                t = r(t, {
                    self: t,
                    resolve: t.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var n = t.name;
                if (!I(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (S.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
                var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : I(t.parent) ? t.parent : q(t.parent) && I(t.parent.name) ? t.parent.name : "";
                if (i && !S[i]) return f(i, t.self);
                for (var o in D) P(D[o]) && (t[o] = D[o](t, D.$delegates[o]));
                return S[n] = t, !t[T] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                    k.$current.navigable == t && u(e, n) || k.transitionTo(t, e, {
                        inherit: !0,
                        location: !1
                    })
                }]), m(n), t
            }

            function g(e) {
                return e.indexOf("*") > -1
            }

            function $(e) {
                for (var t = e.split("."), n = k.$current.name.split("."), r = 0, i = t.length; i > r; r++) "*" === t[r] && (n[r] = "*");
                return "**" === t[0] && (n = n.slice(s(n, t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(s(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length ? !1 : n.join("") === t.join("")
            }

            function y(e, t) {
                return I(e) && !j(t) ? D[e] : P(t) && I(e) ? (D[e] && !D.$delegates[e] && (D.$delegates[e] = D[e]), D[e] = t, this) : this
            }

            function b(e, t) {
                return q(e) ? t = e : t.name = e, v(t), this
            }

            function w(e, i, o, s, p, f, m, v, y) {
                function b(t, n, r, o) {
                    var a = e.$broadcast("$stateNotFound", t, n, r);
                    if (a.defaultPrevented) return m.update(), A;
                    if (!a.retry) return null;
                    if (o.$retry) return m.update(), O;
                    var s = k.transition = i.when(a.retry);
                    return s.then(function() {
                        return s !== k.transition ? E : (t.options.$retry = !0, k.transitionTo(t.to, t.toParams, t.options))
                    }, function() {
                        return A
                    }), m.update(), s
                }

                function w(e, n, r, a, l, u) {
                    function d() {
                        var n = [];
                        return V(e.views, function(r, i) {
                            var a = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                            a.$template = [function() {
                                return o.load(i, {
                                    view: r,
                                    locals: l.globals,
                                    params: f,
                                    notify: u.notify
                                }) || ""
                            }], n.push(p.resolve(a, l.globals, l.resolve, e).then(function(n) {
                                if (P(r.controllerProvider) || F(r.controllerProvider)) {
                                    var o = t.extend({}, a, l.globals);
                                    n.$$controller = s.invoke(r.controllerProvider, null, o)
                                } else n.$$controller = r.controller;
                                n.$$state = e, n.$$controllerAs = r.controllerAs, l[i] = n
                            }))
                        }), i.all(n).then(function() {
                            return l.globals
                        })
                    }
                    var f = r ? n : c(e.params.$$keys(), n),
                        h = {
                            $stateParams: f
                        };
                    l.resolve = p.resolve(e.resolve, h, l.resolve, e);
                    var m = [l.resolve.then(function(e) {
                        l.globals = e
                    })];
                    return a && m.push(a), i.all(m).then(d).then(function(e) {
                        return l
                    })
                }
                var E = i.reject(new Error("transition superseded")),
                    D = i.reject(new Error("transition prevented")),
                    A = i.reject(new Error("transition aborted")),
                    O = i.reject(new Error("transition failed"));
                return C.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, k = {
                    params: {},
                    current: C.self,
                    $current: C,
                    transition: null
                }, k.reload = function(e) {
                    return k.transitionTo(k.current, f, {
                        reload: e || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, k.go = function(e, t, n) {
                    return k.transitionTo(e, t, H({
                        inherit: !0,
                        relative: k.$current
                    }, n))
                }, k.transitionTo = function(t, n, o) {
                    n = n || {}, o = H({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, o || {});
                    var a, u = k.$current,
                        p = k.params,
                        h = u.path,
                        v = d(t, o.relative),
                        g = n["#"];
                    if (!j(v)) {
                        var $ = {
                                to: t,
                                toParams: n,
                                options: o
                            },
                            y = b($, u.self, p, o);
                        if (y) return y;
                        if (t = $.to, n = $.toParams, o = $.options, v = d(t, o.relative), !j(v)) {
                            if (!o.relative) throw new Error("No such state '" + t + "'");
                            throw new Error("Could not resolve '" + t + "' from state '" + o.relative + "'")
                        }
                    }
                    if (v[T]) throw new Error("Cannot transition to abstract state '" + t + "'");
                    if (o.inherit && (n = l(f, n || {}, k.$current, v)), !v.params.$$validates(n)) return O;
                    n = v.params.$$values(n), t = v;
                    var S = t.path,
                        A = 0,
                        M = S[A],
                        N = C.locals,
                        P = [];
                    if (o.reload) {
                        if (I(o.reload) || q(o.reload)) {
                            if (q(o.reload) && !o.reload.name) throw new Error("Invalid reload state object");
                            var F = o.reload === !0 ? h[0] : d(o.reload);
                            if (o.reload && !F) throw new Error("No such reload state '" + (I(o.reload) ? o.reload : o.reload.name) + "'");
                            for (; M && M === h[A] && M !== F;) N = P[A] = M.locals, A++, M = S[A]
                        }
                    } else
                        for (; M && M === h[A] && M.ownParams.$$equals(n, p);) N = P[A] = M.locals, A++, M = S[A];
                    if (x(t, n, u, p, N, o)) return g && (n["#"] = g), k.params = n, L(k.params, f), o.location && t.navigable && t.navigable.url && (m.push(t.navigable.url, n, {
                        $$avoidResync: !0,
                        replace: "replace" === o.location
                    }), m.update(!0)), k.transition = null, i.when(k.current);
                    if (n = c(t.params.$$keys(), n || {}), o.notify && e.$broadcast("$stateChangeStart", t.self, n, u.self, p).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, n, u.self, p), m.update(), D;
                    for (var V = i.when(N), R = A; R < S.length; R++, M = S[R]) N = P[R] = r(N), V = w(M, n, M === t, V, N, o);
                    var U = k.transition = V.then(function() {
                        var r, i, a;
                        if (k.transition !== U) return E;
                        for (r = h.length - 1; r >= A; r--) a = h[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
                        for (r = A; r < S.length; r++) i = S[r], i.locals = P[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                        return g && (n["#"] = g), k.transition !== U ? E : (k.$current = t, k.current = t.self, k.params = n, L(k.params, f), k.transition = null, o.location && t.navigable && m.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                                $$avoidResync: !0,
                                replace: "replace" === o.location
                            }), o.notify && e.$broadcast("$stateChangeSuccess", t.self, n, u.self, p), m.update(!0),
                            k.current)
                    }, function(r) {
                        return k.transition !== U ? E : (k.transition = null, a = e.$broadcast("$stateChangeError", t.self, n, u.self, p, r), a.defaultPrevented || m.update(), i.reject(r))
                    });
                    return U
                }, k.is = function(e, t, r) {
                    r = H({
                        relative: k.$current
                    }, r || {});
                    var i = d(e, r.relative);
                    return j(i) ? k.$current !== i ? !1 : t ? u(i.params.$$values(t), f) : !0 : n
                }, k.includes = function(e, t, r) {
                    if (r = H({
                            relative: k.$current
                        }, r || {}), I(e) && g(e)) {
                        if (!$(e)) return !1;
                        e = k.$current.name
                    }
                    var i = d(e, r.relative);
                    return j(i) ? j(k.$current.includes[i.name]) ? t ? u(i.params.$$values(t), f, a(t)) : !0 : !1 : n
                }, k.href = function(e, t, r) {
                    r = H({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: k.$current
                    }, r || {});
                    var i = d(e, r.relative);
                    if (!j(i)) return null;
                    r.inherit && (t = l(f, t || {}, k.$current, i));
                    var o = i && r.lossy ? i.navigable : i;
                    return o && o.url !== n && null !== o.url ? m.href(o.url, c(i.params.$$keys().concat("#"), t || {}), {
                        absolute: r.absolute
                    }) : null
                }, k.get = function(e, t) {
                    if (0 === arguments.length) return h(a(S), function(e) {
                        return S[e].self
                    });
                    var n = d(e, t || k.$current);
                    return n && n.self ? n.self : null
                }, k
            }

            function x(e, t, n, r, i, o) {
                function a(e, t, n) {
                    function r(t) {
                        return "search" != e.params[t].location
                    }
                    var i = e.params.$$keys().filter(r),
                        o = p.apply({}, [e.params].concat(i)),
                        a = new R.ParamSet(o);
                    return a.$$equals(t, n)
                }
                return !o.reload && e === n && (i === n.locals || e.self.reloadOnSearch === !1 && a(n, r, t)) ? !0 : void 0
            }
            var C, k, S = {},
                E = {},
                T = "abstract",
                D = {
                    parent: function(e) {
                        if (j(e.parent) && e.parent) return d(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? d(t[1]) : C
                    },
                    data: function(e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = H({}, e.parent.data, e.data)), e.data
                    },
                    url: function(e) {
                        var t = e.url,
                            n = {
                                params: e.params || {}
                            };
                        if (I(t)) return "^" == t.charAt(0) ? i.compile(t.substring(1), n) : (e.parent.navigable || C).url.concat(t, n);
                        if (!t || i.isMatcher(t)) return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function(e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    ownParams: function(e) {
                        var t = e.url && e.url.params || new R.ParamSet;
                        return V(e.params || {}, function(e, n) {
                            t[n] || (t[n] = new R.Param(n, null, e, "config"))
                        }), t
                    },
                    params: function(e) {
                        return e.parent && e.parent.params ? H(e.parent.params.$$new(), e.ownParams) : new R.ParamSet
                    },
                    views: function(e) {
                        var t = {};
                        return V(j(e.views) ? e.views : {
                            "": e
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n
                        }), t
                    },
                    path: function(e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function(e) {
                        var t = e.parent ? H({}, e.parent.includes) : {};
                        return t[e.name] = !0, t
                    },
                    $delegates: {}
                };
            C = v({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), C.navigable = null, this.decorator = y, this.state = b, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function x() {
            function e(e, t) {
                return {
                    load: function(n, r) {
                        var i, o = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return r = H(o, r), r.view && (i = t.fromConfig(r.view, r.params, r.locals)), i && r.notify && e.$broadcast("$viewContentLoading", r), i
                    }
                }
            }
            this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
        }

        function C() {
            var e = !1;
            this.useAnchorScroll = function() {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
                return e ? t : function(e) {
                    return n(function() {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function k(e, n, r, i) {
            function o() {
                return n.has ? function(e) {
                    return n.has(e) ? n.get(e) : null
                } : function(e) {
                    try {
                        return n.get(e)
                    } catch (t) {
                        return null
                    }
                }
            }

            function a(e, t) {
                var n = function() {
                    return {
                        enter: function(e, t, n) {
                            t.after(e), n()
                        },
                        leave: function(e, t) {
                            e.remove(), t()
                        }
                    }
                };
                if (u) return {
                    enter: function(e, t, n) {
                        var r = u.enter(e, null, t, n);
                        r && r.then && r.then(n)
                    },
                    leave: function(e, t) {
                        var n = u.leave(e, t);
                        n && n.then && n.then(t)
                    }
                };
                if (l) {
                    var r = l && l(t, e);
                    return {
                        enter: function(e, t, n) {
                            r.enter(e, null, t), n()
                        },
                        leave: function(e, t) {
                            r.leave(e), t()
                        }
                    }
                }
                return n()
            }
            var s = o(),
                l = s("$animator"),
                u = s("$animate"),
                c = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(n, o, s) {
                        return function(n, o, l) {
                            function u() {
                                p && (p.remove(), p = null), f && (f.$destroy(), f = null), d && (g.leave(d, function() {
                                    p = null
                                }), p = d, d = null)
                            }

                            function c(a) {
                                var c, p = E(n, l, o, i),
                                    $ = p && e.$current && e.$current.locals[p];
                                if (a || $ !== h) {
                                    c = n.$new(), h = e.$current.locals[p];
                                    var y = s(c, function(e) {
                                        g.enter(e, o, function() {
                                            f && f.$emit("$viewContentAnimationEnded"), (t.isDefined(v) && !v || n.$eval(v)) && r(e)
                                        }), u()
                                    });
                                    d = y, f = c, f.$emit("$viewContentLoaded"), f.$eval(m)
                                }
                            }
                            var p, d, f, h, m = l.onload || "",
                                v = l.autoscroll,
                                g = a(l, n);
                            n.$on("$stateChangeSuccess", function() {
                                c(!1)
                            }), n.$on("$viewContentLoading", function() {
                                c(!1)
                            }), c(!0)
                        }
                    }
                };
            return c
        }

        function S(e, t, n, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var o = i.html();
                    return function(i, a, s) {
                        var l = n.$current,
                            u = E(i, s, a, r),
                            c = l && l.locals[u];
                        if (c) {
                            a.data("$uiView", {
                                name: u,
                                state: c.$$state
                            }), a.html(c.$template ? c.$template : o);
                            var p = e(a.contents());
                            if (c.$$controller) {
                                c.$scope = i, c.$element = a;
                                var d = t(c.$$controller, c);
                                c.$$controllerAs && (i[c.$$controllerAs] = d), a.data("$ngControllerController", d), a.children().data("$ngControllerController", d)
                            }
                            p(i)
                        }
                    }
                }
            }
        }

        function E(e, t, n, r) {
            var i = r(t.uiView || t.name || "")(e),
                o = n.inheritedData("$uiView");
            return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
        }

        function T(e, t) {
            var n, r = e.match(/^\s*({[^}]*})\s*$/);
            if (r && (e = t + "(" + r[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: n[1],
                paramExpr: n[3] || null
            }
        }

        function D(e) {
            var t = e.parent().inheritedData("$uiView");
            return t && t.state && t.state.name ? t.state : void 0
        }

        function A(e, n) {
            var r = ["location", "inherit", "reload", "absolute"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, o, a, s) {
                    var l = T(a.uiSref, e.current.name),
                        u = null,
                        c = D(o) || e.$current,
                        p = "[object SVGAnimatedString]" === Object.prototype.toString.call(o.prop("href")) ? "xlink:href" : "href",
                        d = null,
                        f = "A" === o.prop("tagName").toUpperCase(),
                        h = "FORM" === o[0].nodeName,
                        m = h ? "action" : p,
                        v = !0,
                        g = {
                            relative: c,
                            inherit: !0
                        },
                        $ = i.$eval(a.uiSrefOpts) || {};
                    t.forEach(r, function(e) {
                        e in $ && (g[e] = $[e])
                    });
                    var y = function(n) {
                        if (n && (u = t.copy(n)), v) {
                            d = e.href(l.state, u, g);
                            var r = s[1] || s[0];
                            return r && r.$$addStateInfo(l.state, u), null === d ? (v = !1, !1) : void a.$set(m, d)
                        }
                    };
                    l.paramExpr && (i.$watch(l.paramExpr, function(e, t) {
                        e !== u && y(e)
                    }, !0), u = t.copy(i.$eval(l.paramExpr))), y(), h || o.bind("click", function(t) {
                        var r = t.which || t.button;
                        if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || o.attr("target"))) {
                            var i = n(function() {
                                e.go(l.state, u, g)
                            });
                            t.preventDefault();
                            var a = f && !d ? 1 : 0;
                            t.preventDefault = function() {
                                a-- <= 0 && n.cancel(i)
                            }
                        }
                    })
                }
            }
        }

        function O(e, t, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(t, r, i) {
                    function o() {
                        a() ? r.addClass(l) : r.removeClass(l)
                    }

                    function a() {
                        for (var e = 0; e < u.length; e++)
                            if (s(u[e].state, u[e].params)) return !0;
                        return !1
                    }

                    function s(t, n) {
                        return "undefined" != typeof i.uiSrefActiveEq ? e.is(t.name, n) : e.includes(t.name, n)
                    }
                    var l, u = [];
                    l = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$addStateInfo = function(t, n) {
                        var i = e.get(t, D(r));
                        u.push({
                            state: i || {
                                name: t
                            },
                            params: n
                        }), o()
                    }, t.$on("$stateChangeSuccess", o)
                }]
            }
        }

        function M(e) {
            var t = function(t) {
                return e.is(t)
            };
            return t.$stateful = !0, t
        }

        function N(e) {
            var t = function(t) {
                return e.includes(t)
            };
            return t.$stateful = !0, t
        }
        var j = t.isDefined,
            P = t.isFunction,
            I = t.isString,
            q = t.isObject,
            F = t.isArray,
            V = t.forEach,
            H = t.extend,
            L = t.copy;
        t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), m.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", m), v.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", v);
        var R;
        g.prototype.concat = function(e, t) {
            var n = {
                caseInsensitive: R.caseInsensitive(),
                strict: R.strictMode(),
                squash: R.defaultSquashPolicy()
            };
            return new g(this.sourcePath + e + this.sourceSearch, H(n, t), this)
        }, g.prototype.toString = function() {
            return this.source
        }, g.prototype.exec = function(e, t) {
            function n(e) {
                function t(e) {
                    return e.split("").reverse().join("")
                }

                function n(e) {
                    return e.replace(/\\-/g, "-")
                }
                var r = t(e).split(/-(?!\\)/),
                    i = h(r, t);
                return h(i, n).reverse()
            }
            var r = this.regexp.exec(e);
            if (!r) return null;
            t = t || {};
            var i, o, a, s = this.parameters(),
                l = s.length,
                u = this.segments.length - 1,
                c = {};
            if (u !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (i = 0; u > i; i++) {
                a = s[i];
                var p = this.params[a],
                    d = r[i + 1];
                for (o = 0; o < p.replace; o++) p.replace[o].from === d && (d = p.replace[o].to);
                d && p.array === !0 && (d = n(d)), c[a] = p.value(d)
            }
            for (; l > i; i++) a = s[i], c[a] = this.params[a].value(t[a]);
            return c
        }, g.prototype.parameters = function(e) {
            return j(e) ? this.params[e] || null : this.$$paramNames
        }, g.prototype.validates = function(e) {
            return this.params.$$validates(e)
        }, g.prototype.format = function(e) {
            function t(e) {
                return encodeURIComponent(e).replace(/-/g, function(e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            e = e || {};
            var n = this.segments,
                r = this.parameters(),
                i = this.params;
            if (!this.validates(e)) return null;
            var o, a = !1,
                s = n.length - 1,
                l = r.length,
                u = n[0];
            for (o = 0; l > o; o++) {
                var c = s > o,
                    p = r[o],
                    d = i[p],
                    f = d.value(e[p]),
                    m = d.isOptional && d.type.equals(d.value(), f),
                    v = m ? d.squash : !1,
                    g = d.type.encode(f);
                if (c) {
                    var $ = n[o + 1];
                    if (v === !1) null != g && (u += F(g) ? h(g, t).join("-") : encodeURIComponent(g)), u += $;
                    else if (v === !0) {
                        var y = u.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        u += $.match(y)[1]
                    } else I(v) && (u += v + $)
                } else {
                    if (null == g || m && v !== !1) continue;
                    F(g) || (g = [g]), g = h(g, encodeURIComponent).join("&" + p + "="), u += (a ? "&" : "?") + (p + "=" + g), a = !0
                }
            }
            return u
        }, $.prototype.is = function(e, t) {
            return !0
        }, $.prototype.encode = function(e, t) {
            return e
        }, $.prototype.decode = function(e, t) {
            return e
        }, $.prototype.equals = function(e, t) {
            return e == t
        }, $.prototype.$subPattern = function() {
            var e = this.pattern.toString();
            return e.substr(1, e.length - 2)
        }, $.prototype.pattern = /.*/, $.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, $.prototype.$normalize = function(e) {
            return this.is(e) ? e : this.decode(e)
        }, $.prototype.$asArray = function(e, t) {
            function r(e, t) {
                function r(e, t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }

                function i(e) {
                    return F(e) ? e : j(e) ? [e] : []
                }

                function o(e) {
                    switch (e.length) {
                        case 0:
                            return n;
                        case 1:
                            return "auto" === t ? e[0] : e;
                        default:
                            return e
                    }
                }

                function a(e) {
                    return !e
                }

                function s(e, t) {
                    return function(n) {
                        n = i(n);
                        var r = h(n, e);
                        return t === !0 ? 0 === f(r, a).length : o(r)
                    }
                }

                function l(e) {
                    return function(t, n) {
                        var r = i(t),
                            o = i(n);
                        if (r.length !== o.length) return !1;
                        for (var a = 0; a < r.length; a++)
                            if (!e(r[a], o[a])) return !1;
                        return !0
                    }
                }
                this.encode = s(r(e, "encode")), this.decode = s(r(e, "decode")), this.is = s(r(e, "is"), !0), this.equals = l(r(e, "equals")), this.pattern = e.pattern, this.$normalize = s(r(e, "$normalize")), this.name = e.name, this.$arrayMode = t
            }
            if (!e) return this;
            if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, e)
        }, t.module("ui.router.util").provider("$urlMatcherFactory", y), t.module("ui.router.util").run(["$urlMatcherFactory", function(e) {}]), b.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", b), w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", w), x.$inject = [], t.module("ui.router.state").provider("$view", x), t.module("ui.router.state").provider("$uiViewScroll", C), k.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], S.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", k), t.module("ui.router.state").directive("uiView", S), A.$inject = ["$state", "$timeout"], O.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", A).directive("uiSrefActive", O).directive("uiSrefActiveEq", O), M.$inject = ["$state"], N.$inject = ["$state"], t.module("ui.router.state").filter("isState", M).filter("includedByState", N)
    }(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.transition", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-popup.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/tooltip/tooltip-template-popup.html", "template/popover/popover-html.html", "template/popover/popover-template.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("collapse", ["$animate", function(e) {
        return {
            link: function(t, n, r) {
                function i() {
                    n.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), e.addClass(n, "in", {
                        to: {
                            height: n[0].scrollHeight + "px"
                        }
                    }).then(o)
                }

                function o() {
                    n.removeClass("collapsing"), n.css({
                        height: "auto"
                    })
                }

                function a() {
                    return n.hasClass("collapse") || n.hasClass("in") ? (n.css({
                        height: n[0].scrollHeight + "px"
                    }).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), void e.removeClass(n, "in", {
                        to: {
                            height: "0"
                        }
                    }).then(s)) : s()
                }

                function s() {
                    n.css({
                        height: "0"
                    }), n.removeClass("collapsing"), n.addClass("collapse")
                }
                t.$watch(r.collapse, function(e) {
                    e ? a() : i()
                })
            }
        }
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
        closeOthers: !0
    }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(e, t, n) {
        this.groups = [], this.closeOthers = function(r) {
            var i = angular.isDefined(t.closeOthers) ? e.$eval(t.closeOthers) : n.closeOthers;
            i && angular.forEach(this.groups, function(e) {
                e !== r && (e.isOpen = !1)
            })
        }, this.addGroup = function(e) {
            var t = this;
            this.groups.push(e), e.$on("$destroy", function(n) {
                t.removeGroup(e)
            })
        }, this.removeGroup = function(e) {
            var t = this.groups.indexOf(e); - 1 !== t && this.groups.splice(t, 1)
        }
    }]).directive("accordion", function() {
        return {
            restrict: "EA",
            controller: "AccordionController",
            controllerAs: "accordion",
            transclude: !0,
            replace: !1,
            templateUrl: function(e, t) {
                return t.templateUrl || "template/accordion/accordion.html"
            }
        }
    }).directive("accordionGroup", function() {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: function(e, t) {
                return t.templateUrl || "template/accordion/accordion-group.html"
            },
            scope: {
                heading: "@",
                isOpen: "=?",
                isDisabled: "=?"
            },
            controller: function() {
                this.setHeading = function(e) {
                    this.heading = e
                }
            },
            link: function(e, t, n, r) {
                r.addGroup(e), e.openClass = n.openClass || "panel-open", e.panelClass = n.panelClass, e.$watch("isOpen", function(n) {
                    t.toggleClass(e.openClass, n), n && r.closeOthers(e)
                }), e.toggleOpen = function(t) {
                    e.isDisabled || t && 32 !== t.which || (e.isOpen = !e.isOpen)
                }
            }
        }
    }).directive("accordionHeading", function() {
        return {
            restrict: "EA",
            transclude: !0,
            template: "",
            replace: !0,
            require: "^accordionGroup",
            link: function(e, t, n, r, i) {
                r.setHeading(i(e, angular.noop))
            }
        }
    }).directive("accordionTransclude", function() {
        return {
            require: "^accordionGroup",
            link: function(e, t, n, r) {
                e.$watch(function() {
                    return r[n.accordionTransclude]
                }, function(e) {
                    e && (t.find("span").html(""), t.find("span").append(e))
                })
            }
        }
    }), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(e, t) {
        e.closeable = !!t.close, this.close = e.close
    }]).directive("alert", function() {
        return {
            controller: "AlertController",
            controllerAs: "alert",
            templateUrl: function(e, t) {
                return t.templateUrl || "template/alert/alert.html"
            },
            transclude: !0,
            replace: !0,
            scope: {
                type: "@",
                close: "&"
            }
        }
    }).directive("dismissOnTimeout", ["$timeout", function(e) {
        return {
            require: "alert",
            link: function(t, n, r, i) {
                e(function() {
                    i.close()
                }, parseInt(r.dismissOnTimeout, 10))
            }
        }
    }]), angular.module("ui.bootstrap.bindHtml", []).value("$bindHtmlUnsafeSuppressDeprecated", !1).directive("bindHtmlUnsafe", ["$log", "$bindHtmlUnsafeSuppressDeprecated", function(e, t) {
        return function(n, r, i) {
            t || e.warn("bindHtmlUnsafe is now deprecated. Use ngBindHtml instead"), r.addClass("ng-binding").data("$binding", i.bindHtmlUnsafe), n.$watch(i.bindHtmlUnsafe, function(e) {
                r.html(e || "")
            })
        }
    }]), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
        activeClass: "active",
        toggleEvent: "click"
    }).controller("ButtonsController", ["buttonConfig", function(e) {
        this.activeClass = e.activeClass || "active", this.toggleEvent = e.toggleEvent || "click"
    }]).directive("btnRadio", function() {
        return {
            require: ["btnRadio", "ngModel"],
            controller: "ButtonsController",
            controllerAs: "buttons",
            link: function(e, t, n, r) {
                var i = r[0],
                    o = r[1];
                t.find("input").css({
                    display: "none"
                }), o.$render = function() {
                    t.toggleClass(i.activeClass, angular.equals(o.$modelValue, e.$eval(n.btnRadio)))
                }, t.bind(i.toggleEvent, function() {
                    if (!n.disabled) {
                        var r = t.hasClass(i.activeClass);
                        (!r || angular.isDefined(n.uncheckable)) && e.$apply(function() {
                            o.$setViewValue(r ? null : e.$eval(n.btnRadio)), o.$render()
                        })
                    }
                })
            }
        }
    }).directive("btnCheckbox", ["$document", function(e) {
        return {
            require: ["btnCheckbox", "ngModel"],
            controller: "ButtonsController",
            controllerAs: "button",
            link: function(t, n, r, i) {
                function o() {
                    return s(r.btnCheckboxTrue, !0)
                }

                function a() {
                    return s(r.btnCheckboxFalse, !1)
                }

                function s(e, n) {
                    var r = t.$eval(e);
                    return angular.isDefined(r) ? r : n
                }
                var l = i[0],
                    u = i[1];
                n.find("input").css({
                    display: "none"
                }), u.$render = function() {
                    n.toggleClass(l.activeClass, angular.equals(u.$modelValue, o()))
                }, n.bind(l.toggleEvent, function() {
                    r.disabled || t.$apply(function() {
                        u.$setViewValue(n.hasClass(l.activeClass) ? a() : o()), u.$render()
                    })
                }), n.on("keypress", function(i) {
                    r.disabled || 32 !== i.which || e[0].activeElement !== n[0] || t.$apply(function() {
                        u.$setViewValue(n.hasClass(l.activeClass) ? a() : o()), u.$render()
                    })
                })
            }
        }
    }]), angular.module("ui.bootstrap.carousel", []).controller("CarouselController", ["$scope", "$element", "$interval", "$animate", function(e, t, n, r) {
        function i(t, n, i) {
            g || (angular.extend(t, {
                direction: i,
                active: !0
            }), angular.extend(p.currentSlide || {}, {
                direction: i,
                active: !1
            }), r.enabled() && !e.noTransition && !e.$currentTransition && t.$element && p.slides.length > 1 && (t.$element.data(m, t.direction), p.currentSlide && p.currentSlide.$element && p.currentSlide.$element.data(m, t.direction), e.$currentTransition = !0, f ? r.on("addClass", t.$element, function(t, n) {
                "close" === n && (e.$currentTransition = null, r.off("addClass", t))
            }) : t.$element.one("$animate:close", function() {
                e.$currentTransition = null
            })), p.currentSlide = t, v = n, a())
        }

        function o(e) {
            if (angular.isUndefined(d[e].index)) return d[e];
            var t;
            d.length;
            for (t = 0; t < d.length; ++t)
                if (d[t].index == e) return d[t]
        }

        function a() {
            s();
            var t = +e.interval;
            !isNaN(t) && t > 0 && (u = n(l, t))
        }

        function s() {
            u && (n.cancel(u), u = null)
        }

        function l() {
            var t = +e.interval;
            c && !isNaN(t) && t > 0 && d.length ? e.next() : e.pause()
        }
        var u, c, p = this,
            d = p.slides = e.slides = [],
            f = angular.version.minor >= 4,
            h = "uib-noTransition",
            m = "uib-slideDirection",
            v = -1;
        p.currentSlide = null;
        var g = !1;
        p.select = e.select = function(t, n) {
            var r = e.indexOfSlide(t);
            void 0 === n && (n = r > p.getCurrentIndex() ? "next" : "prev"), t && t !== p.currentSlide && !e.$currentTransition && i(t, r, n)
        }, e.$on("$destroy", function() {
            g = !0
        }), p.getCurrentIndex = function() {
            return p.currentSlide && angular.isDefined(p.currentSlide.index) ? +p.currentSlide.index : v
        }, e.indexOfSlide = function(e) {
            return angular.isDefined(e.index) ? +e.index : d.indexOf(e)
        }, e.next = function() {
            var t = (p.getCurrentIndex() + 1) % d.length;
            return 0 === t && e.noWrap() ? void e.pause() : p.select(o(t), "next")
        }, e.prev = function() {
            var t = p.getCurrentIndex() - 1 < 0 ? d.length - 1 : p.getCurrentIndex() - 1;
            return e.noWrap() && t === d.length - 1 ? void e.pause() : p.select(o(t), "prev")
        }, e.isActive = function(e) {
            return p.currentSlide === e
        }, e.$watch("interval", a), e.$on("$destroy", s), e.play = function() {
            c || (c = !0, a())
        }, e.pause = function() {
            e.noPause || (c = !1, s())
        }, p.addSlide = function(t, n) {
            t.$element = n, d.push(t), 1 === d.length || t.active ? (p.select(d[d.length - 1]), 1 == d.length && e.play()) : t.active = !1
        }, p.removeSlide = function(e) {
            angular.isDefined(e.index) && d.sort(function(e, t) {
                return +e.index > +t.index
            });
            var t = d.indexOf(e);
            d.splice(t, 1), d.length > 0 && e.active ? t >= d.length ? p.select(d[t - 1]) : p.select(d[t]) : v > t && v--, 0 === d.length && (p.currentSlide = null)
        }, e.$watch("noTransition", function(e) {
            t.data(h, e)
        })
    }]).directive("carousel", [function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            controllerAs: "carousel",
            require: "carousel",
            templateUrl: function(e, t) {
                return t.templateUrl || "template/carousel/carousel.html"
            },
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "=",
                noWrap: "&"
            }
        }
    }]).directive("slide", function() {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: function(e, t) {
                return t.templateUrl || "template/carousel/slide.html"
            },
            scope: {
                active: "=?",
                actual: "=?",
                index: "=?"
            },
            link: function(e, t, n, r) {
                r.addSlide(e, t), e.$on("$destroy", function() {
                    r.removeSlide(e)
                }), e.$watch("active", function(t) {
                    t && r.select(e)
                })
            }
        }
    }).animation(".item", ["$injector", "$animate", function(e, t) {
        function n(e, t, n) {
            e.removeClass(t), n && n()
        }
        var r = "uib-noTransition",
            i = "uib-slideDirection",
            o = null;
        return e.has("$animateCss") && (o = e.get("$animateCss")), {
            beforeAddClass: function(e, a, s) {
                if ("active" == a && e.parent() && !e.parent().data(r)) {
                    var l = !1,
                        u = e.data(i),
                        c = "next" == u ? "left" : "right",
                        p = n.bind(this, e, c + " " + u, s);
                    return e.addClass(u), o ? o(e, {
                            addClass: c
                        }).start().done(p) : t.addClass(e, c).then(function() {
                            l || p(), s()
                        }),
                        function() {
                            l = !0
                        }
                }
                s()
            },
            beforeRemoveClass: function(e, a, s) {
                if ("active" === a && e.parent() && !e.parent().data(r)) {
                    var l = !1,
                        u = e.data(i),
                        c = "next" == u ? "left" : "right",
                        p = n.bind(this, e, c, s);
                    return o ? o(e, {
                            addClass: c
                        }).start().done(p) : t.addClass(e, c).then(function() {
                            l || p(), s()
                        }),
                        function() {
                            l = !0
                        }
                }
                s()
            }
        }
    }]), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$log", "$locale", "orderByFilter", function(e, t, n) {
        function r(e) {
            var t = [],
                r = e.split("");
            return angular.forEach(a, function(n, i) {
                var o = e.indexOf(i);
                if (o > -1) {
                    e = e.split(""), r[o] = "(" + n.regex + ")", e[o] = "$";
                    for (var a = o + 1, s = o + i.length; s > a; a++) r[a] = "", e[a] = "$";
                    e = e.join(""), t.push({
                        index: o,
                        apply: n.apply
                    })
                }
            }), {
                regex: new RegExp("^" + r.join("") + "$"),
                map: n(t, "index")
            }
        }

        function i(e, t, n) {
            return 1 > n ? !1 : 1 === t && n > 28 ? 29 === n && (e % 4 === 0 && e % 100 !== 0 || e % 400 === 0) : 3 === t || 5 === t || 8 === t || 10 === t ? 31 > n : !0
        }
        var o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        this.parsers = {};
        var a = {
            yyyy: {
                regex: "\\d{4}",
                apply: function(e) {
                    this.year = +e
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function(e) {
                    this.year = +e + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function(e) {
                    this.year = +e
                }
            },
            MMMM: {
                regex: t.DATETIME_FORMATS.MONTH.join("|"),
                apply: function(e) {
                    this.month = t.DATETIME_FORMATS.MONTH.indexOf(e)
                }
            },
            MMM: {
                regex: t.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function(e) {
                    this.month = t.DATETIME_FORMATS.SHORTMONTH.indexOf(e)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function(e) {
                    this.month = e - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function(e) {
                    this.month = e - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function(e) {
                    this.date = +e
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function(e) {
                    this.date = +e
                }
            },
            EEEE: {
                regex: t.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: t.DATETIME_FORMATS.SHORTDAY.join("|")
            },
            HH: {
                regex: "(?:0|1)[0-9]|2[0-3]",
                apply: function(e) {
                    this.hours = +e
                }
            },
            hh: {
                regex: "0[0-9]|1[0-2]",
                apply: function(e) {
                    this.hours = +e
                }
            },
            H: {
                regex: "1?[0-9]|2[0-3]",
                apply: function(e) {
                    this.hours = +e
                }
            },
            h: {
                regex: "[0-9]|1[0-2]",
                apply: function(e) {
                    this.hours = +e
                }
            },
            mm: {
                regex: "[0-5][0-9]",
                apply: function(e) {
                    this.minutes = +e
                }
            },
            m: {
                regex: "[0-9]|[1-5][0-9]",
                apply: function(e) {
                    this.minutes = +e
                }
            },
            sss: {
                regex: "[0-9][0-9][0-9]",
                apply: function(e) {
                    this.milliseconds = +e
                }
            },
            ss: {
                regex: "[0-5][0-9]",
                apply: function(e) {
                    this.seconds = +e
                }
            },
            s: {
                regex: "[0-9]|[1-5][0-9]",
                apply: function(e) {
                    this.seconds = +e
                }
            },
            a: {
                regex: t.DATETIME_FORMATS.AMPMS.join("|"),
                apply: function(e) {
                    12 === this.hours && (this.hours = 0), "PM" === e && (this.hours += 12)
                }
            }
        };
        this.parse = function(n, a, s) {
            if (!angular.isString(n) || !a) return n;
            a = t.DATETIME_FORMATS[a] || a, a = a.replace(o, "\\$&"), this.parsers[a] || (this.parsers[a] = r(a));
            var l = this.parsers[a],
                u = l.regex,
                c = l.map,
                p = n.match(u);
            if (p && p.length) {
                var d, f;
                angular.isDate(s) && !isNaN(s.getTime()) ? d = {
                    year: s.getFullYear(),
                    month: s.getMonth(),
                    date: s.getDate(),
                    hours: s.getHours(),
                    minutes: s.getMinutes(),
                    seconds: s.getSeconds(),
                    milliseconds: s.getMilliseconds()
                } : (s && e.warn("dateparser:", "baseDate is not a valid date"), d = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0
                });
                for (var h = 1, m = p.length; m > h; h++) {
                    var v = c[h - 1];
                    v.apply && v.apply.call(d, p[h])
                }
                return i(d.year, d.month, d.date) && (f = new Date(d.year, d.month, d.date, d.hours, d.minutes, d.seconds, d.milliseconds || 0)), f
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(e, t) {
        function n(e, n) {
            return e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n]
        }

        function r(e) {
            return "static" === (n(e, "position") || "static")
        }
        var i = function(t) {
            for (var n = e[0], i = t.offsetParent || n; i && i !== n && r(i);) i = i.offsetParent;
            return i || n
        };
        return {
            position: function(t) {
                var n = this.offset(t),
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i(t[0]);
                o != e[0] && (r = this.offset(angular.element(o)), r.top += o.clientTop - o.scrollTop, r.left += o.clientLeft - o.scrollLeft);
                var a = t[0].getBoundingClientRect();
                return {
                    width: a.width || t.prop("offsetWidth"),
                    height: a.height || t.prop("offsetHeight"),
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            },
            offset: function(n) {
                var r = n[0].getBoundingClientRect();
                return {
                    width: r.width || n.prop("offsetWidth"),
                    height: r.height || n.prop("offsetHeight"),
                    top: r.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                    left: r.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
                }
            },
            positionElements: function(e, t, n, r) {
                var i, o, a, s, l = n.split("-"),
                    u = l[0],
                    c = l[1] || "center";
                i = r ? this.offset(e) : this.position(e), o = t.prop("offsetWidth"), a = t.prop("offsetHeight");
                var p = {
                        center: function() {
                            return i.left + i.width / 2 - o / 2
                        },
                        left: function() {
                            return i.left
                        },
                        right: function() {
                            return i.left + i.width
                        }
                    },
                    d = {
                        center: function() {
                            return i.top + i.height / 2 - a / 2
                        },
                        top: function() {
                            return i.top
                        },
                        bottom: function() {
                            return i.top + i.height
                        }
                    };
                switch (u) {
                    case "right":
                        s = {
                            top: d[c](),
                            left: p[u]()
                        };
                        break;
                    case "left":
                        s = {
                            top: d[c](),
                            left: i.left - o
                        };
                        break;
                    case "bottom":
                        s = {
                            top: d[u](),
                            left: p[c]()
                        };
                        break;
                    default:
                        s = {
                            top: i.top - a,
                            left: p[c]()
                        }
                }
                return s
            }
        }
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).value("$datepickerSuppressError", !1).constant("datepickerConfig", {
        formatDay: "dd",
        formatMonth: "MMMM",
        formatYear: "yyyy",
        formatDayHeader: "EEE",
        formatDayTitle: "MMMM yyyy",
        formatMonthTitle: "yyyy",
        datepickerMode: "day",
        minMode: "day",
        maxMode: "year",
        showWeeks: !0,
        startingDay: 0,
        yearRange: 20,
        minDate: null,
        maxDate: null,
        shortcutPropagation: !1
    }).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$log", "dateFilter", "datepickerConfig", "$datepickerSuppressError", function(e, t, n, r, i, o, a, s) {
        var l = this,
            u = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function(n, i) {
            l[n] = angular.isDefined(t[n]) ? 6 > i ? r(t[n])(e.$parent) : e.$parent.$eval(t[n]) : a[n]
        }), angular.forEach(["minDate", "maxDate"], function(r) {
            t[r] ? e.$parent.$watch(n(t[r]), function(e) {
                l[r] = e ? new Date(e) : null, l.refreshView()
            }) : l[r] = a[r] ? new Date(a[r]) : null
        }), angular.forEach(["minMode", "maxMode"], function(r) {
            t[r] ? e.$parent.$watch(n(t[r]), function(n) {
                l[r] = angular.isDefined(n) ? n : t[r], e[r] = l[r], ("minMode" == r && l.modes.indexOf(e.datepickerMode) < l.modes.indexOf(l[r]) || "maxMode" == r && l.modes.indexOf(e.datepickerMode) > l.modes.indexOf(l[r])) && (e.datepickerMode = l[r])
            }) : (l[r] = a[r] || null, e[r] = l[r])
        }), e.datepickerMode = e.datepickerMode || a.datepickerMode, e.uniqueId = "datepicker-" + e.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(t.initDate) ? (this.activeDate = e.$parent.$eval(t.initDate) || new Date, e.$parent.$watch(t.initDate, function(e) {
            e && (u.$isEmpty(u.$modelValue) || u.$invalid) && (l.activeDate = e, l.refreshView())
        })) : this.activeDate = new Date, e.isActive = function(t) {
            return 0 === l.compare(t.date, l.activeDate) ? (e.activeDateId = t.uid, !0) : !1
        }, this.init = function(e) {
            u = e, u.$render = function() {
                l.render()
            }
        }, this.render = function() {
            if (u.$viewValue) {
                var e = new Date(u.$viewValue),
                    t = !isNaN(e);
                t ? this.activeDate = e : s || i.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')
            }
            this.refreshView()
        }, this.refreshView = function() {
            if (this.element) {
                this._refreshView();
                var e = u.$viewValue ? new Date(u.$viewValue) : null;
                u.$setValidity("dateDisabled", !e || this.element && !this.isDisabled(e))
            }
        }, this.createDateObject = function(e, t) {
            var n = u.$viewValue ? new Date(u.$viewValue) : null;
            return {
                date: e,
                label: o(e, t),
                selected: n && 0 === this.compare(e, n),
                disabled: this.isDisabled(e),
                current: 0 === this.compare(e, new Date),
                customClass: this.customClass(e)
            }
        }, this.isDisabled = function(n) {
            return this.minDate && this.compare(n, this.minDate) < 0 || this.maxDate && this.compare(n, this.maxDate) > 0 || t.dateDisabled && e.dateDisabled({
                date: n,
                mode: e.datepickerMode
            })
        }, this.customClass = function(t) {
            return e.customClass({
                date: t,
                mode: e.datepickerMode
            })
        }, this.split = function(e, t) {
            for (var n = []; e.length > 0;) n.push(e.splice(0, t));
            return n
        }, this.fixTimeZone = function(e) {
            var t = e.getHours();
            e.setHours(23 === t ? t + 2 : 0)
        }, e.select = function(t) {
            if (e.datepickerMode === l.minMode) {
                var n = u.$viewValue ? new Date(u.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), u.$setViewValue(n), u.$render()
            } else l.activeDate = t, e.datepickerMode = l.modes[l.modes.indexOf(e.datepickerMode) - 1]
        }, e.move = function(e) {
            var t = l.activeDate.getFullYear() + e * (l.step.years || 0),
                n = l.activeDate.getMonth() + e * (l.step.months || 0);
            l.activeDate.setFullYear(t, n, 1), l.refreshView()
        }, e.toggleMode = function(t) {
            t = t || 1, e.datepickerMode === l.maxMode && 1 === t || e.datepickerMode === l.minMode && -1 === t || (e.datepickerMode = l.modes[l.modes.indexOf(e.datepickerMode) + t])
        }, e.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var c = function() {
            l.element[0].focus()
        };
        e.$on("datepicker.focus", c), e.keydown = function(t) {
            var n = e.keys[t.which];
            if (n && !t.shiftKey && !t.altKey)
                if (t.preventDefault(), l.shortcutPropagation || t.stopPropagation(), "enter" === n || "space" === n) {
                    if (l.isDisabled(l.activeDate)) return;
                    e.select(l.activeDate), c()
                } else !t.ctrlKey || "up" !== n && "down" !== n ? (l.handleKeyDown(n, t), l.refreshView()) : (e.toggleMode("up" === n ? 1 : -1), c())
        }
    }]).directive("datepicker", function() {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: function(e, t) {
                return t.templateUrl || "template/datepicker/datepicker.html"
            },
            scope: {
                datepickerMode: "=?",
                dateDisabled: "&",
                customClass: "&",
                shortcutPropagation: "&?"
            },
            require: ["datepicker", "^ngModel"],
            controller: "DatepickerController",
            controllerAs: "datepicker",
            link: function(e, t, n, r) {
                var i = r[0],
                    o = r[1];
                i.init(o)
            }
        }
    }).directive("daypicker", ["dateFilter", function(e) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function(t, n, r, i) {
                function o(e, t) {
                    return 1 !== t || e % 4 !== 0 || e % 100 === 0 && e % 400 !== 0 ? l[t] : 29
                }

                function a(e, t) {
                    for (var n, r = new Array(t), o = new Date(e), a = 0; t > a;) n = new Date(o), i.fixTimeZone(n), r[a++] = n, o.setDate(o.getDate() + 1);
                    return r
                }

                function s(e) {
                    var t = new Date(e);
                    t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                    var n = t.getTime();
                    return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
                }
                t.showWeeks = i.showWeeks, i.step = {
                    months: 1
                }, i.element = n;
                var l = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                i._refreshView = function() {
                    var n = i.activeDate.getFullYear(),
                        r = i.activeDate.getMonth(),
                        o = new Date(n, r, 1),
                        l = i.startingDay - o.getDay(),
                        u = l > 0 ? 7 - l : -l,
                        c = new Date(o);
                    u > 0 && c.setDate(-u + 1);
                    for (var p = a(c, 42), d = 0; 42 > d; d++) p[d] = angular.extend(i.createDateObject(p[d], i.formatDay), {
                        secondary: p[d].getMonth() !== r,
                        uid: t.uniqueId + "-" + d
                    });
                    t.labels = new Array(7);
                    for (var f = 0; 7 > f; f++) t.labels[f] = {
                        abbr: e(p[f].date, i.formatDayHeader),
                        full: e(p[f].date, "EEEE")
                    };
                    if (t.title = e(i.activeDate, i.formatDayTitle), t.rows = i.split(p, 7), t.showWeeks) {
                        t.weekNumbers = [];
                        for (var h = (11 - i.startingDay) % 7, m = t.rows.length, v = 0; m > v; v++) t.weekNumbers.push(s(t.rows[v][h].date))
                    }
                }, i.compare = function(e, t) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())
                }, i.handleKeyDown = function(e, t) {
                    var n = i.activeDate.getDate();
                    if ("left" === e) n -= 1;
                    else if ("up" === e) n -= 7;
                    else if ("right" === e) n += 1;
                    else if ("down" === e) n += 7;
                    else if ("pageup" === e || "pagedown" === e) {
                        var r = i.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
                        i.activeDate.setMonth(r, 1), n = Math.min(o(i.activeDate.getFullYear(), i.activeDate.getMonth()), n)
                    } else "home" === e ? n = 1 : "end" === e && (n = o(i.activeDate.getFullYear(), i.activeDate.getMonth()));
                    i.activeDate.setDate(n)
                }, i.refreshView()
            }
        }
    }]).directive("monthpicker", ["dateFilter", function(e) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function(t, n, r, i) {
                i.step = {
                    years: 1
                }, i.element = n, i._refreshView = function() {
                    for (var n, r = new Array(12), o = i.activeDate.getFullYear(), a = 0; 12 > a; a++) n = new Date(o, a, 1), i.fixTimeZone(n), r[a] = angular.extend(i.createDateObject(n, i.formatMonth), {
                        uid: t.uniqueId + "-" + a
                    });
                    t.title = e(i.activeDate, i.formatMonthTitle), t.rows = i.split(r, 3)
                }, i.compare = function(e, t) {
                    return new Date(e.getFullYear(), e.getMonth()) - new Date(t.getFullYear(), t.getMonth())
                }, i.handleKeyDown = function(e, t) {
                    var n = i.activeDate.getMonth();
                    if ("left" === e) n -= 1;
                    else if ("up" === e) n -= 3;
                    else if ("right" === e) n += 1;
                    else if ("down" === e) n += 3;
                    else if ("pageup" === e || "pagedown" === e) {
                        var r = i.activeDate.getFullYear() + ("pageup" === e ? -1 : 1);
                        i.activeDate.setFullYear(r)
                    } else "home" === e ? n = 0 : "end" === e && (n = 11);
                    i.activeDate.setMonth(n)
                }, i.refreshView()
            }
        }
    }]).directive("yearpicker", ["dateFilter", function(e) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function(e, t, n, r) {
                function i(e) {
                    return parseInt((e - 1) / o, 10) * o + 1
                }
                var o = r.yearRange;
                r.step = {
                    years: o
                }, r.element = t, r._refreshView = function() {
                    for (var t, n = new Array(o), a = 0, s = i(r.activeDate.getFullYear()); o > a; a++) t = new Date(s + a, 0, 1), r.fixTimeZone(t), n[a] = angular.extend(r.createDateObject(t, r.formatYear), {
                        uid: e.uniqueId + "-" + a
                    });
                    e.title = [n[0].label, n[o - 1].label].join(" - "), e.rows = r.split(n, 5)
                }, r.compare = function(e, t) {
                    return e.getFullYear() - t.getFullYear()
                }, r.handleKeyDown = function(e, t) {
                    var n = r.activeDate.getFullYear();
                    "left" === e ? n -= 1 : "up" === e ? n -= 5 : "right" === e ? n += 1 : "down" === e ? n += 5 : "pageup" === e || "pagedown" === e ? n += ("pageup" === e ? -1 : 1) * r.step.years : "home" === e ? n = i(r.activeDate.getFullYear()) : "end" === e && (n = i(r.activeDate.getFullYear()) + o - 1), r.activeDate.setFullYear(n)
                }, r.refreshView()
            }
        }
    }]).constant("datepickerPopupConfig", {
        datepickerPopup: "yyyy-MM-dd",
        datepickerPopupTemplateUrl: "template/datepicker/popup.html",
        datepickerTemplateUrl: "template/datepicker/datepicker.html",
        html5Types: {
            date: "yyyy-MM-dd",
            "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
            month: "yyyy-MM"
        },
        currentText: "Today",
        clearText: "Clear",
        closeText: "Done",
        closeOnDateSelection: !0,
        appendToBody: !1,
        showButtonBar: !0,
        onOpenFocus: !0
    }).directive("datepickerPopup", ["$compile", "$parse", "$document", "$rootScope", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", "$timeout", function(e, t, n, r, i, o, a, s, l) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&",
                customClass: "&"
            },
            link: function(u, c, p, d) {
                function f(e) {
                    return e.replace(/([A-Z])/g, function(e) {
                        return "-" + e.toLowerCase()
                    })
                }

                function h(e) {
                    angular.isNumber(e) && (e = new Date(e)); {
                        if (!e) return null;
                        if (angular.isDate(e) && !isNaN(e)) return e;
                        if (angular.isString(e)) {
                            var t = a.parse(e, v, u.date);
                            return isNaN(t) ? void 0 : t
                        }
                    }
                }

                function m(e, t) {
                    var n = e || t;
                    if (!p.ngRequired && !n) return !0;
                    if (angular.isNumber(n) && (n = new Date(n)), n) {
                        if (angular.isDate(n) && !isNaN(n)) return !0;
                        if (angular.isString(n)) {
                            var r = a.parse(n, v);
                            return !isNaN(r)
                        }
                        return !1
                    }
                    return !0
                }
                var v, g = angular.isDefined(p.closeOnDateSelection) ? u.$parent.$eval(p.closeOnDateSelection) : s.closeOnDateSelection,
                    $ = angular.isDefined(p.datepickerAppendToBody) ? u.$parent.$eval(p.datepickerAppendToBody) : s.appendToBody,
                    y = angular.isDefined(p.onOpenFocus) ? u.$parent.$eval(p.onOpenFocus) : s.onOpenFocus,
                    b = angular.isDefined(p.datepickerPopupTemplateUrl) ? p.datepickerPopupTemplateUrl : s.datepickerPopupTemplateUrl,
                    w = angular.isDefined(p.datepickerTemplateUrl) ? p.datepickerTemplateUrl : s.datepickerTemplateUrl,
                    x = {};
                u.showButtonBar = angular.isDefined(p.showButtonBar) ? u.$parent.$eval(p.showButtonBar) : s.showButtonBar, u.getText = function(e) {
                    return u[e + "Text"] || s[e + "Text"]
                }, u.isDisabled = function(e) {
                    return "today" === e && (e = new Date), u.watchData.minDate && u.compare(e, x.minDate) < 0 || u.watchData.maxDate && u.compare(e, x.maxDate) > 0
                }, u.compare = function(e, t) {
                    return new Date(e.getFullYear(), e.getMonth(), e.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())
                };
                var C = !1;
                if (s.html5Types[p.type] ? (v = s.html5Types[p.type], C = !0) : (v = p.datepickerPopup || s.datepickerPopup, p.$observe("datepickerPopup", function(e, t) {
                        var n = e || s.datepickerPopup;
                        if (n !== v && (v = n, d.$modelValue = null, !v)) throw new Error("datepickerPopup must have a date format specified.")
                    })), !v) throw new Error("datepickerPopup must have a date format specified.");
                if (C && p.datepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
                var k = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                k.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection(date)",
                    "template-url": b
                });
                var S = angular.element(k.children()[0]);
                if (S.attr("template-url", w), C && "month" === p.type && (S.attr("datepicker-mode", '"month"'), S.attr("min-mode", "month")), p.datepickerOptions) {
                    var E = u.$parent.$eval(p.datepickerOptions);
                    E && E.initDate && (u.initDate = E.initDate, S.attr("init-date", "initDate"), delete E.initDate), angular.forEach(E, function(e, t) {
                        S.attr(f(t), e)
                    })
                }
                u.watchData = {}, angular.forEach(["minMode", "maxMode", "minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation"], function(e) {
                    if (p[e]) {
                        var n = t(p[e]);
                        if (u.$parent.$watch(n, function(t) {
                                u.watchData[e] = t, ("minDate" === e || "maxDate" === e) && (x[e] = new Date(t))
                            }), S.attr(f(e), "watchData." + e), "datepickerMode" === e) {
                            var r = n.assign;
                            u.$watch("watchData." + e, function(e, t) {
                                angular.isFunction(r) && e !== t && r(u.$parent, e)
                            })
                        }
                    }
                }), p.dateDisabled && S.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), p.showWeeks && S.attr("show-weeks", p.showWeeks), p.customClass && S.attr("custom-class", "customClass({ date: date, mode: mode })"), C ? d.$formatters.push(function(e) {
                    return u.date = e, e
                }) : (d.$$parserName = "date", d.$validators.date = m, d.$parsers.unshift(h), d.$formatters.push(function(e) {
                    return u.date = e, d.$isEmpty(e) ? e : o(e, v)
                })), u.dateSelection = function(e) {
                    angular.isDefined(e) && (u.date = e);
                    var t = u.date ? o(u.date, v) : null;
                    c.val(t), d.$setViewValue(t), g && (u.isOpen = !1, c[0].focus())
                }, d.$viewChangeListeners.push(function() {
                    u.date = a.parse(d.$viewValue, v, u.date)
                });
                var T = function(e) {
                        !u.isOpen || c[0].contains(e.target) || k[0].contains(e.target) || u.$apply(function() {
                            u.isOpen = !1
                        })
                    },
                    D = function(e) {
                        27 === e.which && u.isOpen ? (e.preventDefault(), e.stopPropagation(), u.$apply(function() {
                            u.isOpen = !1
                        }), c[0].focus()) : 40 !== e.which || u.isOpen || (e.preventDefault(), e.stopPropagation(), u.$apply(function() {
                            u.isOpen = !0
                        }))
                    };
                c.bind("keydown", D), u.keydown = function(e) {
                    27 === e.which && (u.isOpen = !1, c[0].focus())
                }, u.$watch("isOpen", function(e) {
                    e ? (u.position = $ ? i.offset(c) : i.position(c), u.position.top = u.position.top + c.prop("offsetHeight"), l(function() {
                        y && u.$broadcast("datepicker.focus"), n.bind("click", T)
                    }, 0, !1)) : n.unbind("click", T)
                }), u.select = function(e) {
                    if ("today" === e) {
                        var t = new Date;
                        angular.isDate(u.date) ? (e = new Date(u.date), e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate())) : e = new Date(t.setHours(0, 0, 0, 0))
                    }
                    u.dateSelection(e)
                }, u.close = function() {
                    u.isOpen = !1, c[0].focus()
                };
                var A = e(k)(u);
                k.remove(), $ ? n.find("body").append(A) : c.after(A), u.$on("$destroy", function() {
                    u.isOpen === !0 && (r.$$phase || u.$apply(function() {
                        u.isOpen = !1
                    })), A.remove(), c.unbind("keydown", D), n.unbind("click", T)
                })
            }
        }
    }]).directive("datepickerPopupWrap", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            templateUrl: function(e, t) {
                return t.templateUrl || "template/datepicker/popup.html"
            }
        }
    }), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("dropdownConfig", {
        openClass: "open"
    }).service("dropdownService", ["$document", "$rootScope", function(e, t) {
        var n = null;
        this.open = function(t) {
            n || (e.bind("click", r), e.bind("keydown", i)), n && n !== t && (n.isOpen = !1), n = t
        }, this.close = function(t) {
            n === t && (n = null, e.unbind("click", r), e.unbind("keydown", i))
        };
        var r = function(e) {
                if (n && (!e || "disabled" !== n.getAutoClose())) {
                    var r = n.getToggleElement();
                    if (!(e && r && r[0].contains(e.target))) {
                        var i = n.getDropdownElement();
                        e && "outsideClick" === n.getAutoClose() && i && i[0].contains(e.target) || (n.isOpen = !1, t.$$phase || n.$apply())
                    }
                }
            },
            i = function(e) {
                27 === e.which ? (n.focusToggleElement(), r()) : n.isKeynavEnabled() && /(38|40)/.test(e.which) && n.isOpen && (e.preventDefault(), e.stopPropagation(), n.focusDropdownEntry(e.which))
            }
    }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", "$position", "$document", "$compile", "$templateRequest", function(e, t, n, r, i, o, a, s, l, u) {
        var c, p, d = this,
            f = e.$new(),
            h = r.openClass,
            m = angular.noop,
            v = t.onToggle ? n(t.onToggle) : angular.noop,
            g = !1,
            $ = !1,
            y = s.find("body");
        this.init = function(r) {
            d.$element = r, t.isOpen && (p = n(t.isOpen), m = p.assign, e.$watch(p, function(e) {
                f.isOpen = !!e
            })), g = angular.isDefined(t.dropdownAppendToBody), $ = angular.isDefined(t.keyboardNav), g && d.dropdownMenu && (y.append(d.dropdownMenu), y.addClass("dropdown"), r.on("$destroy", function() {
                d.dropdownMenu.remove()
            }))
        }, this.toggle = function(e) {
            return f.isOpen = arguments.length ? !!e : !f.isOpen
        }, this.isOpen = function() {
            return f.isOpen
        }, f.getToggleElement = function() {
            return d.toggleElement
        }, f.getAutoClose = function() {
            return t.autoClose || "always"
        }, f.getElement = function() {
            return d.$element
        }, f.isKeynavEnabled = function() {
            return $
        }, f.focusDropdownEntry = function(e) {
            var t = d.dropdownMenu ? angular.element(d.dropdownMenu).find("a") : angular.element(d.$element).find("ul").eq(0).find("a");
            switch (e) {
                case 40:
                    angular.isNumber(d.selectedOption) ? d.selectedOption = d.selectedOption === t.length - 1 ? d.selectedOption : d.selectedOption + 1 : d.selectedOption = 0;
                    break;
                case 38:
                    angular.isNumber(d.selectedOption) ? d.selectedOption = 0 === d.selectedOption ? 0 : d.selectedOption - 1 : d.selectedOption = t.length - 1
            }
            t[d.selectedOption].focus()
        }, f.getDropdownElement = function() {
            return d.dropdownMenu
        }, f.focusToggleElement = function() {
            d.toggleElement && d.toggleElement[0].focus()
        }, f.$watch("isOpen", function(t, n) {
            if (g && d.dropdownMenu) {
                var r = a.positionElements(d.$element, d.dropdownMenu, "bottom-left", !0),
                    s = {
                        top: r.top + "px",
                        display: t ? "block" : "none"
                    },
                    p = d.dropdownMenu.hasClass("dropdown-menu-right");
                p ? (s.left = "auto", s.right = window.innerWidth - (r.left + d.$element.prop("offsetWidth")) + "px") : (s.left = r.left + "px", s.right = "auto"), d.dropdownMenu.css(s)
            }
            var $ = g ? y : d.$element;
            if (o[t ? "addClass" : "removeClass"]($, h).then(function() {
                    angular.isDefined(t) && t !== n && v(e, {
                        open: !!t
                    })
                }), t) d.dropdownMenuTemplateUrl && u(d.dropdownMenuTemplateUrl).then(function(e) {
                c = f.$new(), l(e.trim())(c, function(e) {
                    var t = e;
                    d.dropdownMenu.replaceWith(t), d.dropdownMenu = t
                })
            }), f.focusToggleElement(), i.open(f);
            else {
                if (d.dropdownMenuTemplateUrl) {
                    c && c.$destroy();
                    var b = angular.element('<ul class="dropdown-menu"></ul>');
                    d.dropdownMenu.replaceWith(b), d.dropdownMenu = b
                }
                i.close(f), d.selectedOption = null
            }
            angular.isFunction(m) && m(e, t)
        }), e.$on("$locationChangeSuccess", function() {
            "disabled" !== f.getAutoClose() && (f.isOpen = !1)
        });
        var b = e.$on("$destroy", function() {
            f.$destroy()
        });
        f.$on("$destroy", b)
    }]).directive("dropdown", function() {
        return {
            controller: "DropdownController",
            link: function(e, t, n, r) {
                r.init(t), t.addClass("dropdown")
            }
        }
    }).directive("dropdownMenu", function() {
        return {
            restrict: "AC",
            require: "?^dropdown",
            link: function(e, t, n, r) {
                if (r) {
                    var i = n.templateUrl;
                    i && (r.dropdownMenuTemplateUrl = i), r.dropdownMenu || (r.dropdownMenu = t)
                }
            }
        }
    }).directive("keyboardNav", function() {
        return {
            restrict: "A",
            require: "?^dropdown",
            link: function(e, t, n, r) {
                t.bind("keydown", function(e) {
                    if (-1 !== [38, 40].indexOf(e.which)) {
                        e.preventDefault(), e.stopPropagation();
                        var t = r.dropdownMenu.find("a");
                        switch (e.which) {
                            case 40:
                                angular.isNumber(r.selectedOption) ? r.selectedOption = r.selectedOption === t.length - 1 ? r.selectedOption : r.selectedOption + 1 : r.selectedOption = 0;
                                break;
                            case 38:
                                angular.isNumber(r.selectedOption) ? r.selectedOption = 0 === r.selectedOption ? 0 : r.selectedOption - 1 : r.selectedOption = t.length - 1
                        }
                        t[r.selectedOption].focus()
                    }
                })
            }
        }
    }).directive("dropdownToggle", function() {
        return {
            require: "?^dropdown",
            link: function(e, t, n, r) {
                if (r) {
                    t.addClass("dropdown-toggle"), r.toggleElement = t;
                    var i = function(i) {
                        i.preventDefault(), t.hasClass("disabled") || n.disabled || e.$apply(function() {
                            r.toggle()
                        })
                    };
                    t.bind("click", i), t.attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), e.$watch(r.isOpen, function(e) {
                        t.attr("aria-expanded", !!e)
                    }), e.$on("$destroy", function() {
                        t.unbind("click", i)
                    })
                }
            }
        }
    }), angular.module("ui.bootstrap.modal", []).factory("$$stackedMap", function() {
        return {
            createNew: function() {
                var e = [];
                return {
                    add: function(t, n) {
                        e.push({
                            key: t,
                            value: n
                        })
                    },
                    get: function(t) {
                        for (var n = 0; n < e.length; n++)
                            if (t == e[n].key) return e[n]
                    },
                    keys: function() {
                        for (var t = [], n = 0; n < e.length; n++) t.push(e[n].key);
                        return t
                    },
                    top: function() {
                        return e[e.length - 1]
                    },
                    remove: function(t) {
                        for (var n = -1, r = 0; r < e.length; r++)
                            if (t == e[r].key) {
                                n = r;
                                break
                            }
                        return e.splice(n, 1)[0]
                    },
                    removeTop: function() {
                        return e.splice(e.length - 1, 1)[0]
                    },
                    length: function() {
                        return e.length
                    }
                }
            }
        }
    }).factory("$$multiMap", function() {
        return {
            createNew: function() {
                var e = {};
                return {
                    entries: function() {
                        return Object.keys(e).map(function(t) {
                            return {
                                key: t,
                                value: e[t]
                            }
                        })
                    },
                    get: function(t) {
                        return e[t]
                    },
                    hasKey: function(t) {
                        return !!e[t]
                    },
                    keys: function() {
                        return Object.keys(e)
                    },
                    put: function(t, n) {
                        e[t] || (e[t] = []), e[t].push(n)
                    },
                    remove: function(t, n) {
                        var r = e[t];
                        if (r) {
                            var i = r.indexOf(n); - 1 !== i && r.splice(i, 1), r.length || delete e[t]
                        }
                    }
                }
            }
        }
    }).directive("modalBackdrop", ["$animate", "$injector", "$modalStack", function(e, t, n) {
        function r(t, r, o) {
            o.modalInClass && (i ? i(r, {
                addClass: o.modalInClass
            }).start() : e.addClass(r, o.modalInClass), t.$on(n.NOW_CLOSING_EVENT, function(t, n) {
                var a = n();
                i ? i(r, {
                    removeClass: o.modalInClass
                }).start().then(a) : e.removeClass(r, o.modalInClass).then(a)
            }))
        }
        var i = null;
        return t.has("$animateCss") && (i = t.get("$animateCss")), {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            compile: function(e, t) {
                return e.addClass(t.backdropClass), r
            }
        }
    }]).directive("modalWindow", ["$modalStack", "$q", "$animate", "$injector", function(e, t, n, r) {
        var i = null;
        return r.has("$animateCss") && (i = r.get("$animateCss")), {
            restrict: "EA",
            scope: {
                index: "@"
            },
            replace: !0,
            transclude: !0,
            templateUrl: function(e, t) {
                return t.templateUrl || "template/modal/window.html"
            },
            link: function(r, o, a) {
                o.addClass(a.windowClass || ""), r.size = a.size, r.close = function(t) {
                    var n = e.getTop();
                    n && n.value.backdrop && "static" !== n.value.backdrop && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), e.dismiss(n.key, "backdrop click"))
                }, r.$isRendered = !0;
                var s = t.defer();
                a.$observe("modalRender", function(e) {
                    "true" == e && s.resolve()
                }), s.promise.then(function() {
                    var s = null;
                    a.modalInClass && (s = i ? i(o, {
                        addClass: a.modalInClass
                    }).start() : n.addClass(o, a.modalInClass), r.$on(e.NOW_CLOSING_EVENT, function(e, t) {
                        var r = t();
                        i ? i(o, {
                            removeClass: a.modalInClass
                        }).start().then(r) : n.removeClass(o, a.modalInClass).then(r)
                    })), t.when(s).then(function() {
                        var e = o[0].querySelectorAll("[autofocus]");
                        e.length ? e[0].focus() : o[0].focus()
                    });
                    var l = e.getTop();
                    l && e.modalRendered(l.key)
                })
            }
        }
    }]).directive("modalAnimationClass", [function() {
        return {
            compile: function(e, t) {
                t.modalAnimation && e.addClass(t.modalAnimationClass)
            }
        }
    }]).directive("modalTransclude", function() {
        return {
            link: function(e, t, n, r, i) {
                i(e.$parent, function(e) {
                    t.empty(), t.append(e)
                })
            }
        }
    }).factory("$modalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$q", "$injector", "$$multiMap", "$$stackedMap", function(e, t, n, r, i, o, a, s, l) {
        function u() {
            for (var e = -1, t = y.keys(), n = 0; n < t.length; n++) y.get(t[n]).value.backdrop && (e = n);
            return e
        }

        function c(e, t) {
            var r = n.find("body").eq(0),
                i = y.get(e).value;
            y.remove(e), d(i.modalDomEl, i.modalScope, function() {
                var t = i.openedClass || $;
                b.remove(t, e), r.toggleClass(t, b.hasKey(t))
            }), p(), t && t.focus ? t.focus() : r.focus()
        }

        function p() {
            if (m && -1 == u()) {
                var e = v;
                d(m, v, function() {
                    e = null
                }), m = void 0, v = void 0
            }
        }

        function d(t, n, r) {
            function i() {
                i.done || (i.done = !0, h ? h(t, {
                    event: "leave"
                }).start().then(function() {
                    t.remove()
                }) : e.leave(t), n.$destroy(), r && r())
            }
            var a, s = null,
                l = function() {
                    return a || (a = o.defer(), s = a.promise),
                        function() {
                            a.resolve()
                        }
                };
            return n.$broadcast(w.NOW_CLOSING_EVENT, l), o.when(s).then(i)
        }

        function f(e, t, n) {
            return !e.value.modalScope.$broadcast("modal.closing", t, n).defaultPrevented
        }
        var h = null;
        a.has("$animateCss") && (h = a.get("$animateCss"));
        var m, v, g, $ = "modal-open",
            y = l.createNew(),
            b = s.createNew(),
            w = {
                NOW_CLOSING_EVENT: "modal.stack.now-closing"
            },
            x = 0,
            C = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";
        return i.$watch(u, function(e) {
            v && (v.index = e)
        }), n.bind("keydown", function(e) {
            if (e.isDefaultPrevented()) return e;
            var t = y.top();
            if (t && t.value.keyboard) switch (e.which) {
                case 27:
                    e.preventDefault(), i.$apply(function() {
                        w.dismiss(t.key, "escape key press")
                    });
                    break;
                case 9:
                    w.loadFocusElementList(t);
                    var n = !1;
                    e.shiftKey ? w.isFocusInFirstItem(e) && (n = w.focusLastFocusableElement()) : w.isFocusInLastItem(e) && (n = w.focusFirstFocusableElement()), n && (e.preventDefault(), e.stopPropagation())
            }
        }), w.open = function(e, t) {
            var o = n[0].activeElement,
                a = t.openedClass || $;
            y.add(e, {
                deferred: t.deferred,
                renderDeferred: t.renderDeferred,
                modalScope: t.scope,
                backdrop: t.backdrop,
                keyboard: t.keyboard,
                openedClass: t.openedClass
            }), b.put(a, e);
            var s = n.find("body").eq(0),
                l = u();
            if (l >= 0 && !m) {
                v = i.$new(!0), v.index = l;
                var c = angular.element('<div modal-backdrop="modal-backdrop"></div>');
                c.attr("backdrop-class", t.backdropClass), t.animation && c.attr("modal-animation", "true"), m = r(c)(v), s.append(m)
            }
            var p = angular.element('<div modal-window="modal-window"></div>');
            p.attr({
                "template-url": t.windowTemplateUrl,
                "window-class": t.windowClass,
                size: t.size,
                index: y.length() - 1,
                animate: "animate"
            }).html(t.content), t.animation && p.attr("modal-animation", "true");
            var d = r(p)(t.scope);
            y.top().value.modalDomEl = d, y.top().value.modalOpener = o, s.append(d), s.addClass(a), w.clearFocusListCache()
        }, w.close = function(e, t) {
            var n = y.get(e);
            return n && f(n, t, !0) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.resolve(t), c(e, n.value.modalOpener), !0) : !n
        }, w.dismiss = function(e, t) {
            var n = y.get(e);
            return n && f(n, t, !1) ? (n.value.modalScope.$$uibDestructionScheduled = !0, n.value.deferred.reject(t), c(e, n.value.modalOpener), !0) : !n
        }, w.dismissAll = function(e) {
            for (var t = this.getTop(); t && this.dismiss(t.key, e);) t = this.getTop()
        }, w.getTop = function() {
            return y.top()
        }, w.modalRendered = function(e) {
            var t = y.get(e);
            t && t.value.renderDeferred.resolve()
        }, w.focusFirstFocusableElement = function() {
            return g.length > 0 ? (g[0].focus(), !0) : !1
        }, w.focusLastFocusableElement = function() {
            return g.length > 0 ? (g[g.length - 1].focus(), !0) : !1
        }, w.isFocusInFirstItem = function(e) {
            return g.length > 0 ? (e.target || e.srcElement) == g[0] : !1
        }, w.isFocusInLastItem = function(e) {
            return g.length > 0 ? (e.target || e.srcElement) == g[g.length - 1] : !1
        }, w.clearFocusListCache = function() {
            g = [], x = 0
        }, w.loadFocusElementList = function(e) {
            if ((void 0 === g || !g.length0) && e) {
                var t = e.value.modalDomEl;
                t && t.length && (g = t[0].querySelectorAll(C))
            }
        }, w
    }]).provider("$modal", function() {
        var e = {
            options: {
                animation: !0,
                backdrop: !0,
                keyboard: !0
            },
            $get: ["$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$modalStack", function(t, n, r, i, o, a) {
                function s(e) {
                    return e.template ? r.when(e.template) : i(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl)
                }

                function l(e) {
                    var n = [];
                    return angular.forEach(e, function(e) {
                        angular.isFunction(e) || angular.isArray(e) ? n.push(r.when(t.invoke(e))) : angular.isString(e) ? n.push(r.when(t.get(e))) : n.push(r.when(e))
                    }), n
                }
                var u = {},
                    c = null;
                return u.getPromiseChain = function() {
                    return c
                }, u.open = function(t) {
                    var i = r.defer(),
                        u = r.defer(),
                        p = r.defer(),
                        d = {
                            result: i.promise,
                            opened: u.promise,
                            rendered: p.promise,
                            close: function(e) {
                                return a.close(d, e)
                            },
                            dismiss: function(e) {
                                return a.dismiss(d, e)
                            }
                        };
                    if (t = angular.extend({}, e.options, t), t.resolve = t.resolve || {}, !t.template && !t.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var f, h = r.all([s(t)].concat(l(t.resolve)));
                    return f = c = r.all([c]).then(function() {
                        return h
                    }, function() {
                        return h
                    }).then(function(e) {
                        var r = (t.scope || n).$new();
                        r.$close = d.close, r.$dismiss = d.dismiss, r.$on("$destroy", function() {
                            r.$$uibDestructionScheduled || r.$dismiss("$uibUnscheduledDestruction")
                        });
                        var s, l = {},
                            c = 1;
                        t.controller && (l.$scope = r, l.$modalInstance = d, angular.forEach(t.resolve, function(t, n) {
                            l[n] = e[c++]
                        }), s = o(t.controller, l), t.controllerAs && (t.bindToController && angular.extend(s, r), r[t.controllerAs] = s)), a.open(d, {
                            scope: r,
                            deferred: i,
                            renderDeferred: p,
                            content: e[0],
                            animation: t.animation,
                            backdrop: t.backdrop,
                            keyboard: t.keyboard,
                            backdropClass: t.backdropClass,
                            windowClass: t.windowClass,
                            windowTemplateUrl: t.windowTemplateUrl,
                            size: t.size,
                            openedClass: t.openedClass
                        }), u.resolve(!0)
                    }, function(e) {
                        u.reject(e), i.reject(e)
                    })["finally"](function() {
                        c === f && (c = null)
                    }), d
                }, u
            }]
        };
        return e
    }), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(e, t, n) {
        var r = this,
            i = {
                $setViewValue: angular.noop
            },
            o = t.numPages ? n(t.numPages).assign : angular.noop;
        this.init = function(a, s) {
            i = a, this.config = s, i.$render = function() {
                r.render()
            }, t.itemsPerPage ? e.$parent.$watch(n(t.itemsPerPage), function(t) {
                r.itemsPerPage = parseInt(t, 10), e.totalPages = r.calculateTotalPages()
            }) : this.itemsPerPage = s.itemsPerPage, e.$watch("totalItems", function() {
                e.totalPages = r.calculateTotalPages()
            }), e.$watch("totalPages", function(t) {
                o(e.$parent, t), e.page > t ? e.selectPage(t) : i.$render()
            })
        }, this.calculateTotalPages = function() {
            var t = this.itemsPerPage < 1 ? 1 : Math.ceil(e.totalItems / this.itemsPerPage);
            return Math.max(t || 0, 1)
        }, this.render = function() {
            e.page = parseInt(i.$viewValue, 10) || 1
        }, e.selectPage = function(t, n) {
            n && n.preventDefault();
            var r = !e.ngDisabled || !n;
            r && e.page !== t && t > 0 && t <= e.totalPages && (n && n.target && n.target.blur(), i.$setViewValue(t), i.$render())
        }, e.getText = function(t) {
            return e[t + "Text"] || r.config[t + "Text"]
        }, e.noPrevious = function() {
            return 1 === e.page
        }, e.noNext = function() {
            return e.page === e.totalPages
        }
    }]).constant("paginationConfig", {
        itemsPerPage: 10,
        boundaryLinks: !1,
        directionLinks: !0,
        firstText: "First",
        previousText: "Previous",
        nextText: "Next",
        lastText: "Last",
        rotate: !0
    }).directive("pagination", ["$parse", "paginationConfig", function(e, t) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@",
                ngDisabled: "="
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            controllerAs: "pagination",
            templateUrl: function(e, t) {
                return t.templateUrl || "template/pagination/pagination.html"
            },
            replace: !0,
            link: function(n, r, i, o) {
                function a(e, t, n) {
                    return {
                        number: e,
                        text: t,
                        active: n
                    }
                }

                function s(e, t) {
                    var n = [],
                        r = 1,
                        i = t,
                        o = angular.isDefined(c) && t > c;
                    o && (p ? (r = Math.max(e - Math.floor(c / 2), 1), i = r + c - 1, i > t && (i = t, r = i - c + 1)) : (r = (Math.ceil(e / c) - 1) * c + 1, i = Math.min(r + c - 1, t)));
                    for (var s = r; i >= s; s++) {
                        var l = a(s, s, s === e);
                        n.push(l)
                    }
                    if (o && !p) {
                        if (r > 1) {
                            var u = a(r - 1, "...", !1);
                            n.unshift(u)
                        }
                        if (t > i) {
                            var d = a(i + 1, "...", !1);
                            n.push(d)
                        }
                    }
                    return n
                }
                var l = o[0],
                    u = o[1];
                if (u) {
                    var c = angular.isDefined(i.maxSize) ? n.$parent.$eval(i.maxSize) : t.maxSize,
                        p = angular.isDefined(i.rotate) ? n.$parent.$eval(i.rotate) : t.rotate;
                    n.boundaryLinks = angular.isDefined(i.boundaryLinks) ? n.$parent.$eval(i.boundaryLinks) : t.boundaryLinks, n.directionLinks = angular.isDefined(i.directionLinks) ? n.$parent.$eval(i.directionLinks) : t.directionLinks, l.init(u, t), i.maxSize && n.$parent.$watch(e(i.maxSize), function(e) {
                        c = parseInt(e, 10), l.render()
                    });
                    var d = l.render;
                    l.render = function() {
                        d(), n.page > 0 && n.page <= n.totalPages && (n.pages = s(n.page, n.totalPages))
                    }
                }
            }
        }
    }]).constant("pagerConfig", {
        itemsPerPage: 10,
        previousText: "« Previous",
        nextText: "Next »",
        align: !0
    }).directive("pager", ["pagerConfig", function(e) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@",
                ngDisabled: "="
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            controllerAs: "pagination",
            templateUrl: function(e, t) {
                return t.templateUrl || "template/pagination/pager.html"
            },
            replace: !0,
            link: function(t, n, r, i) {
                var o = i[0],
                    a = i[1];
                a && (t.align = angular.isDefined(r.align) ? t.$parent.$eval(r.align) : e.align, o.init(a, e))
            }
        }
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
        function e(e) {
            var t = /[A-Z]/g,
                n = "-";
            return e.replace(t, function(e, t) {
                return (t ? n : "") + e.toLowerCase()
            })
        }
        var t = {
                placement: "top",
                animation: !0,
                popupDelay: 0,
                useContentExp: !1
            },
            n = {
                mouseenter: "mouseleave",
                click: "click",
                focus: "blur",
                none: ""
            },
            r = {};
        this.options = function(e) {
            angular.extend(r, e)
        }, this.setTriggers = function(e) {
            angular.extend(n, e)
        }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", "$rootScope", "$parse", function(i, o, a, s, l, u, c, p) {
            return function(i, d, f, h) {
                function m(e) {
                    var t = (e || h.trigger || f).split(" "),
                        r = t.map(function(e) {
                            return n[e] || e
                        });
                    return {
                        show: t,
                        hide: r
                    }
                }
                h = angular.extend({}, t, r, h);
                var v = e(i),
                    g = u.startSymbol(),
                    $ = u.endSymbol(),
                    y = "<div " + v + '-popup title="' + g + "title" + $ + '" ' + (h.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + g + "content" + $ + '" ') + 'placement="' + g + "placement" + $ + '" popup-class="' + g + "popupClass" + $ + '" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';
                return {
                    restrict: "EA",
                    compile: function(e, t) {
                        var n = o(y);
                        return function(e, t, r, o) {
                            function u() {
                                P.isOpen ? v() : f()
                            }

                            function f() {
                                (!j || e.$eval(r[d + "Enable"])) && (w(), P.popupDelay ? A || (A = a(g, P.popupDelay, !1)) : g())
                            }

                            function v() {
                                $(), c.$$phase || c.$digest()
                            }

                            function g() {
                                return A = null, D && (a.cancel(D), D = null), (h.useContentExp ? P.contentExp() : P.content) ? (y(), P.isOpen = !0, q && q.assign(P.origScope, P.isOpen), c.$$phase || P.$apply(), E.css({
                                    display: "block"
                                }), void F()) : angular.noop
                            }

                            function $() {
                                P.isOpen = !1, q && q.assign(P.origScope, P.isOpen), a.cancel(A), A = null, a.cancel(O), O = null, P.animation ? D || (D = a(b, 500)) : b()
                            }

                            function y() {
                                E && b(), T = P.$new(), E = n(T, function(e) {
                                    M ? s.find("body").append(e) : t.after(e)
                                }), h.useContentExp && (T.$watch("contentExp()", function(e) {
                                    !e && P.isOpen && $()
                                }), T.$watch(function() {
                                    I || (I = !0, T.$$postDigest(function() {
                                        I = !1, P.isOpen && F()
                                    }))
                                }))
                            }

                            function b() {
                                D = null, E && (E.remove(), E = null), T && (T.$destroy(), T = null)
                            }

                            function w() {
                                x(), C(), k()
                            }

                            function x() {
                                P.popupClass = r[d + "Class"]
                            }

                            function C() {
                                var e = r[d + "Placement"];
                                P.placement = angular.isDefined(e) ? e : h.placement
                            }

                            function k() {
                                var e = r[d + "PopupDelay"],
                                    t = parseInt(e, 10);
                                P.popupDelay = isNaN(t) ? h.popupDelay : t
                            }

                            function S() {
                                var e = r[d + "Trigger"];
                                V(), N = m(e), "none" !== N.show && N.show.forEach(function(e, n) {
                                    e === N.hide[n] ? t[0].addEventListener(e, u) : e && (t[0].addEventListener(e, f), t[0].addEventListener(N.hide[n], v))
                                })
                            }
                            var E, T, D, A, O, M = angular.isDefined(h.appendToBody) ? h.appendToBody : !1,
                                N = m(void 0),
                                j = angular.isDefined(r[d + "Enable"]),
                                P = e.$new(!0),
                                I = !1,
                                q = angular.isDefined(r[d + "IsOpen"]) ? p(r[d + "IsOpen"]) : !1,
                                F = function() {
                                    E && (O || (O = a(function() {
                                        E.css({
                                            top: 0,
                                            left: 0,
                                            width: "auto",
                                            height: "auto"
                                        });
                                        var e = l.position(E),
                                            n = l.positionElements(t, E, P.placement, M);
                                        n.top += "px", n.left += "px", n.width = e.width + "px", n.height = e.height + "px", E.css(n), O = null
                                    }, 0, !1)))
                                };
                            P.origScope = e, P.isOpen = !1, P.contentExp = function() {
                                return e.$eval(r[i])
                            }, h.useContentExp || r.$observe(i, function(e) {
                                P.content = e, !e && P.isOpen ? $() : F()
                            }), r.$observe("disabled", function(e) {
                                A && e && (a.cancel(A), A = null), e && P.isOpen && $()
                            }), r.$observe(d + "Title", function(e) {
                                P.title = e, F()
                            }), r.$observe(d + "Placement", function() {
                                P.isOpen && (C(), F())
                            }), q && e.$watch(q, function(e) {
                                e !== P.isOpen && u()
                            });
                            var V = function() {
                                N.show.forEach(function(e) {
                                    t.unbind(e, f)
                                }), N.hide.forEach(function(e) {
                                    t.unbind(e, v)
                                })
                            };
                            S();
                            var H = e.$eval(r[d + "Animation"]);
                            P.animation = angular.isDefined(H) ? !!H : h.animation;
                            var L = e.$eval(r[d + "AppendToBody"]);
                            M = angular.isDefined(L) ? L : M, M && e.$on("$locationChangeSuccess", function() {
                                P.isOpen && $()
                            }), e.$on("$destroy", function() {
                                a.cancel(D), a.cancel(A), a.cancel(O), V(), b(), P = null
                            })
                        }
                    }
                }
            }
        }]
    }).directive("tooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function(e, t, n, r) {
        return {
            link: function(i, o, a) {
                var s, l, u, c = i.$eval(a.tooltipTemplateTranscludeScope),
                    p = 0,
                    d = function() {
                        l && (l.remove(), l = null), s && (s.$destroy(), s = null), u && (e.leave(u).then(function() {
                            l = null
                        }), l = u, u = null)
                    };
                i.$watch(t.parseAsResourceUrl(a.tooltipTemplateTransclude), function(t) {
                    var a = ++p;
                    t ? (r(t, !0).then(function(r) {
                        if (a === p) {
                            var i = c.$new(),
                                l = r,
                                f = n(l)(i, function(t) {
                                    d(), e.enter(t, o)
                                });
                            s = i, u = f, s.$emit("$includeContentLoaded", t)
                        }
                    }, function() {
                        a === p && (d(), i.$emit("$includeContentError", t))
                    }), i.$emit("$includeContentRequested", t)) : d()
                }), i.$on("$destroy", d)
            }
        }
    }]).directive("tooltipClasses", function() {
        return {
            restrict: "A",
            link: function(e, t, n) {
                e.placement && t.addClass(e.placement), e.popupClass && t.addClass(e.popupClass), e.animation() && t.addClass(n.tooltipAnimationClass)
            }
        }
    }).directive("tooltipPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-popup.html"
        }
    }).directive("tooltip", ["$tooltip", function(e) {
        return e("tooltip", "tooltip", "mouseenter")
    }]).directive("tooltipTemplatePopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                contentExp: "&",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&",
                originScope: "&"
            },
            templateUrl: "template/tooltip/tooltip-template-popup.html"
        }
    }).directive("tooltipTemplate", ["$tooltip", function(e) {
        return e("tooltipTemplate", "tooltip", "mouseenter", {
            useContentExp: !0
        })
    }]).directive("tooltipHtmlPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                contentExp: "&",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-popup.html"
        }
    }).directive("tooltipHtml", ["$tooltip", function(e) {
        return e("tooltipHtml", "tooltip", "mouseenter", {
            useContentExp: !0
        })
    }]).directive("tooltipHtmlUnsafePopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
        }
    }).value("tooltipHtmlUnsafeSuppressDeprecated", !1).directive("tooltipHtmlUnsafe", ["$tooltip", "tooltipHtmlUnsafeSuppressDeprecated", "$log", function(e, t, n) {
        return t || n.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."), e("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                contentExp: "&",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&",
                originScope: "&"
            },
            templateUrl: "template/popover/popover-template.html"
        }
    }).directive("popoverTemplate", ["$tooltip", function(e) {
        return e("popoverTemplate", "popover", "click", {
            useContentExp: !0
        })
    }]).directive("popoverHtmlPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                contentExp: "&",
                title: "@",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/popover/popover-html.html"
        }
    }).directive("popoverHtml", ["$tooltip", function(e) {
        return e("popoverHtml", "popover", "click", {
            useContentExp: !0
        })
    }]).directive("popoverPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                content: "@",
                placement: "@",
                popupClass: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/popover/popover.html"
        }
    }).directive("popover", ["$tooltip", function(e) {
        return e("popover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
        animate: !0,
        max: 100
    }).value("$progressSuppressWarning", !1).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(e, t, n) {
        var r = this,
            i = angular.isDefined(t.animate) ? e.$parent.$eval(t.animate) : n.animate;
        this.bars = [], e.max = angular.isDefined(e.max) ? e.max : n.max, this.addBar = function(t, n) {
            i || n.css({
                transition: "none"
            }), this.bars.push(t), t.max = e.max, t.$watch("value", function(e) {
                t.recalculatePercentage()
            }), t.recalculatePercentage = function() {
                t.percent = +(100 * t.value / t.max).toFixed(2);
                var e = r.bars.reduce(function(e, t) {
                    return e + t.percent
                }, 0);
                e > 100 && (t.percent -= e - 100)
            }, t.$on("$destroy", function() {
                n = null, r.removeBar(t)
            })
        }, this.removeBar = function(e) {
            this.bars.splice(this.bars.indexOf(e), 1)
        }, e.$watch("max", function(t) {
            r.bars.forEach(function(t) {
                t.max = e.max, t.recalculatePercentage()
            })
        })
    }]).directive("uibProgress", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            require: "uibProgress",
            scope: {
                max: "=?"
            },
            templateUrl: "template/progressbar/progress.html"
        }
    }).directive("progress", ["$log", "$progressSuppressWarning", function(e, t) {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            require: "progress",
            scope: {
                max: "=?"
            },
            templateUrl: "template/progressbar/progress.html",
            link: function() {
                t && e.warn("progress is now deprecated. Use uib-progress instead")
            }
        }
    }]).directive("uibBar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: "^uibProgress",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/bar.html",
            link: function(e, t, n, r) {
                r.addBar(e, t)
            }
        }
    }).directive("bar", ["$log", "$progressSuppressWarning", function(e, t) {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: "^progress",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/bar.html",
            link: function(n, r, i, o) {
                t && e.warn("bar is now deprecated. Use uib-bar instead"), o.addBar(n, r)
            }
        }
    }]).directive("progressbar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            scope: {
                value: "=",
                max: "=?",
                type: "@"
            },
            templateUrl: "template/progressbar/progressbar.html",
            link: function(e, t, n, r) {
                r.addBar(e, angular.element(t.children()[0]))
            }
        }
    }), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
        max: 5,
        stateOn: null,
        stateOff: null,
        titles: ["one", "two", "three", "four", "five"]
    }).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(e, t, n) {
        var r = {
            $setViewValue: angular.noop
        };
        this.init = function(i) {
            r = i, r.$render = this.render, r.$formatters.push(function(e) {
                return angular.isNumber(e) && e << 0 !== e && (e = Math.round(e)), e
            }), this.stateOn = angular.isDefined(t.stateOn) ? e.$parent.$eval(t.stateOn) : n.stateOn, this.stateOff = angular.isDefined(t.stateOff) ? e.$parent.$eval(t.stateOff) : n.stateOff;
            var o = angular.isDefined(t.titles) ? e.$parent.$eval(t.titles) : n.titles;
            this.titles = angular.isArray(o) && o.length > 0 ? o : n.titles;
            var a = angular.isDefined(t.ratingStates) ? e.$parent.$eval(t.ratingStates) : new Array(angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max);
            e.range = this.buildTemplateObjects(a)
        }, this.buildTemplateObjects = function(e) {
            for (var t = 0, n = e.length; n > t; t++) e[t] = angular.extend({
                index: t
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff,
                title: this.getTitle(t)
            }, e[t]);
            return e
        }, this.getTitle = function(e) {
            return e >= this.titles.length ? e + 1 : this.titles[e]
        }, e.rate = function(t) {
            !e.readonly && t >= 0 && t <= e.range.length && (r.$setViewValue(r.$viewValue === t ? 0 : t), r.$render())
        }, e.enter = function(t) {
            e.readonly || (e.value = t), e.onHover({
                value: t
            })
        }, e.reset = function() {
            e.value = r.$viewValue, e.onLeave()
        }, e.onKeydown = function(t) {
            /(37|38|39|40)/.test(t.which) && (t.preventDefault(), t.stopPropagation(), e.rate(e.value + (38 === t.which || 39 === t.which ? 1 : -1)))
        }, this.render = function() {
            e.value = r.$viewValue
        }
    }]).directive("rating", function() {
        return {
            restrict: "EA",
            require: ["rating", "ngModel"],
            scope: {
                readonly: "=?",
                onHover: "&",
                onLeave: "&"
            },
            controller: "RatingController",
            templateUrl: "template/rating/rating.html",
            replace: !0,
            link: function(e, t, n, r) {
                var i = r[0],
                    o = r[1];
                i.init(o)
            }
        }
    }), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(e) {
        var t = this,
            n = t.tabs = e.tabs = [];
        t.select = function(e) {
            angular.forEach(n, function(t) {
                t.active && t !== e && (t.active = !1, t.onDeselect(), e.selectCalled = !1)
            }), e.active = !0, e.selectCalled || (e.onSelect(), e.selectCalled = !0)
        }, t.addTab = function(e) {
            n.push(e), 1 === n.length && e.active !== !1 ? e.active = !0 : e.active ? t.select(e) : e.active = !1
        }, t.removeTab = function(e) {
            var i = n.indexOf(e);
            if (e.active && n.length > 1 && !r) {
                var o = i == n.length - 1 ? i - 1 : i + 1;
                t.select(n[o])
            }
            n.splice(i, 1)
        };
        var r;
        e.$on("$destroy", function() {
            r = !0
        })
    }]).directive("tabset", function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@"
            },
            controller: "TabsetController",
            templateUrl: "template/tabs/tabset.html",
            link: function(e, t, n) {
                e.vertical = angular.isDefined(n.vertical) ? e.$parent.$eval(n.vertical) : !1, e.justified = angular.isDefined(n.justified) ? e.$parent.$eval(n.justified) : !1
            }
        }
    }).directive("tab", ["$parse", "$log", function(e, t) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function() {},
            link: function(n, r, i, o, a) {
                n.$watch("active", function(e) {
                    e && o.select(n)
                }), n.disabled = !1, i.disable && n.$parent.$watch(e(i.disable), function(e) {
                    n.disabled = !!e
                }), i.disabled && (t.warn('Use of "disabled" attribute has been deprecated, please use "disable"'), n.$parent.$watch(e(i.disabled), function(e) {
                    n.disabled = !!e
                })), n.select = function() {
                    n.disabled || (n.active = !0)
                }, o.addTab(n), n.$on("$destroy", function() {
                    o.removeTab(n)
                }), n.$transcludeFn = a
            }
        }
    }]).directive("tabHeadingTransclude", function() {
        return {
            restrict: "A",
            require: "^tab",
            link: function(e, t, n, r) {
                e.$watch("headingElement", function(e) {
                    e && (t.html(""), t.append(e))
                })
            }
        }
    }).directive("tabContentTransclude", function() {
        function e(e) {
            return e.tagName && (e.hasAttribute("tab-heading") || e.hasAttribute("data-tab-heading") || e.hasAttribute("x-tab-heading") || "tab-heading" === e.tagName.toLowerCase() || "data-tab-heading" === e.tagName.toLowerCase() || "x-tab-heading" === e.tagName.toLowerCase())
        }
        return {
            restrict: "A",
            require: "^tabset",
            link: function(t, n, r) {
                var i = t.$eval(r.tabContentTransclude);
                i.$transcludeFn(i.$parent, function(t) {
                    angular.forEach(t, function(t) {
                        e(t) ? i.headingElement = t : n.append(t)
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: !0,
        meridians: null,
        readonlyInput: !1,
        mousewheel: !0,
        arrowkeys: !0,
        showSpinners: !0
    }).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(e, t, n, r, i, o) {
        function a() {
            var t = parseInt(e.hours, 10),
                n = e.showMeridian ? t > 0 && 13 > t : t >= 0 && 24 > t;
            return n ? (e.showMeridian && (12 === t && (t = 0), e.meridian === v[1] && (t += 12)), t) : void 0
        }

        function s() {
            var t = parseInt(e.minutes, 10);
            return t >= 0 && 60 > t ? t : void 0
        }

        function l(e) {
            return angular.isDefined(e) && e.toString().length < 2 ? "0" + e : e.toString()
        }

        function u(e) {
            c(), m.$setViewValue(new Date(h)), p(e)
        }

        function c() {
            m.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1
        }

        function p(t) {
            var n = h.getHours(),
                r = h.getMinutes();
            e.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12), e.hours = "h" === t ? n : l(n), "m" !== t && (e.minutes = l(r)), e.meridian = h.getHours() < 12 ? v[0] : v[1]
        }

        function d(e, t) {
            var n = new Date(e.getTime() + 6e4 * t),
                r = new Date(e);
            return r.setHours(n.getHours(), n.getMinutes()), r
        }

        function f(e) {
            h = d(h, e), u()
        }
        var h = new Date,
            m = {
                $setViewValue: angular.noop
            },
            v = angular.isDefined(t.meridians) ? e.$parent.$eval(t.meridians) : o.meridians || i.DATETIME_FORMATS.AMPMS;
        this.init = function(n, r) {
            m = n, m.$render = this.render, m.$formatters.unshift(function(e) {
                return e ? new Date(e) : null
            });
            var i = r.eq(0),
                a = r.eq(1),
                s = angular.isDefined(t.mousewheel) ? e.$parent.$eval(t.mousewheel) : o.mousewheel;
            s && this.setupMousewheelEvents(i, a);
            var l = angular.isDefined(t.arrowkeys) ? e.$parent.$eval(t.arrowkeys) : o.arrowkeys;
            l && this.setupArrowkeyEvents(i, a), e.readonlyInput = angular.isDefined(t.readonlyInput) ? e.$parent.$eval(t.readonlyInput) : o.readonlyInput, this.setupInputEvents(i, a)
        };
        var g = o.hourStep;
        t.hourStep && e.$parent.$watch(n(t.hourStep), function(e) {
            g = parseInt(e, 10)
        });
        var $ = o.minuteStep;
        t.minuteStep && e.$parent.$watch(n(t.minuteStep), function(e) {
            $ = parseInt(e, 10)
        });
        var y;
        e.$parent.$watch(n(t.min), function(e) {
            var t = new Date(e);
            y = isNaN(t) ? void 0 : t
        });
        var b;
        e.$parent.$watch(n(t.max), function(e) {
            var t = new Date(e);
            b = isNaN(t) ? void 0 : t
        }), e.noIncrementHours = function() {
            var e = d(h, 60 * g);
            return e > b || h > e && y > e
        }, e.noDecrementHours = function() {
            var e = d(h, 60 * -g);
            return y > e || e > h && e > b
        }, e.noIncrementMinutes = function() {
            var e = d(h, $);
            return e > b || h > e && y > e
        }, e.noDecrementMinutes = function() {
            var e = d(h, -$);
            return y > e || e > h && e > b
        }, e.noToggleMeridian = function() {
            return h.getHours() < 13 ? d(h, 720) > b : d(h, -720) < y
        }, e.showMeridian = o.showMeridian, t.showMeridian && e.$parent.$watch(n(t.showMeridian), function(t) {
            if (e.showMeridian = !!t, m.$error.time) {
                var n = a(),
                    r = s();
                angular.isDefined(n) && angular.isDefined(r) && (h.setHours(n), u())
            } else p()
        }), this.setupMousewheelEvents = function(t, n) {
            var r = function(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                return e.detail || t > 0
            };
            t.bind("mousewheel wheel", function(t) {
                e.$apply(r(t) ? e.incrementHours() : e.decrementHours()), t.preventDefault()
            }), n.bind("mousewheel wheel", function(t) {
                e.$apply(r(t) ? e.incrementMinutes() : e.decrementMinutes()), t.preventDefault()
            })
        }, this.setupArrowkeyEvents = function(t, n) {
            t.bind("keydown", function(t) {
                38 === t.which ? (t.preventDefault(), e.incrementHours(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementHours(), e.$apply())
            }), n.bind("keydown", function(t) {
                38 === t.which ? (t.preventDefault(), e.incrementMinutes(), e.$apply()) : 40 === t.which && (t.preventDefault(), e.decrementMinutes(), e.$apply())
            })
        }, this.setupInputEvents = function(t, n) {
            if (e.readonlyInput) return e.updateHours = angular.noop, void(e.updateMinutes = angular.noop);
            var r = function(t, n) {
                m.$setViewValue(null), m.$setValidity("time", !1), angular.isDefined(t) && (e.invalidHours = t), angular.isDefined(n) && (e.invalidMinutes = n)
            };
            e.updateHours = function() {
                var e = a(),
                    t = s();
                angular.isDefined(e) && angular.isDefined(t) ? (h.setHours(e), y > h || h > b ? r(!0) : u("h")) : r(!0)
            }, t.bind("blur", function(t) {
                !e.invalidHours && e.hours < 10 && e.$apply(function() {
                    e.hours = l(e.hours)
                })
            }), e.updateMinutes = function() {
                var e = s(),
                    t = a();
                angular.isDefined(e) && angular.isDefined(t) ? (h.setMinutes(e), y > h || h > b ? r(void 0, !0) : u("m")) : r(void 0, !0)
            }, n.bind("blur", function(t) {
                !e.invalidMinutes && e.minutes < 10 && e.$apply(function() {
                    e.minutes = l(e.minutes)
                })
            })
        }, this.render = function() {
            var t = m.$viewValue;
            isNaN(t) ? (m.$setValidity("time", !1), r.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (t && (h = t), y > h || h > b ? (m.$setValidity("time", !1), e.invalidHours = !0, e.invalidMinutes = !0) : c(), p())
        }, e.showSpinners = angular.isDefined(t.showSpinners) ? e.$parent.$eval(t.showSpinners) : o.showSpinners, e.incrementHours = function() {
            e.noIncrementHours() || f(60 * g)
        }, e.decrementHours = function() {
            e.noDecrementHours() || f(60 * -g)
        }, e.incrementMinutes = function() {
            e.noIncrementMinutes() || f($)
        }, e.decrementMinutes = function() {
            e.noDecrementMinutes() || f(-$)
        }, e.toggleMeridian = function() {
            e.noToggleMeridian() || f(720 * (h.getHours() < 12 ? 1 : -1))
        }
    }]).directive("timepicker", function() {
        return {
            restrict: "EA",
            require: ["timepicker", "?^ngModel"],
            controller: "TimepickerController",
            controllerAs: "timepicker",
            replace: !0,
            scope: {},
            templateUrl: function(e, t) {
                return t.templateUrl || "template/timepicker/timepicker.html"
            },
            link: function(e, t, n, r) {
                var i = r[0],
                    o = r[1];
                o && i.init(o, t.find("input"))
            }
        }
    }), angular.module("ui.bootstrap.transition", []).value("$transitionSuppressDeprecated", !1).factory("$transition", ["$q", "$timeout", "$rootScope", "$log", "$transitionSuppressDeprecated", function(e, t, n, r, i) {
        function o(e) {
            for (var t in e)
                if (void 0 !== s.style[t]) return e[t]
        }
        i || r.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
        var a = function(r, i, o) {
                o = o || {};
                var s = e.defer(),
                    l = a[o.animation ? "animationEndEventName" : "transitionEndEventName"],
                    u = function(e) {
                        n.$apply(function() {
                            r.unbind(l, u), s.resolve(r)
                        })
                    };
                return l && r.bind(l, u), t(function() {
                    angular.isString(i) ? r.addClass(i) : angular.isFunction(i) ? i(r) : angular.isObject(i) && r.css(i), l || s.resolve(r)
                }), s.promise.cancel = function() {
                    l && r.unbind(l, u), s.reject("Transition cancelled")
                }, s.promise
            },
            s = document.createElement("trans"),
            l = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            u = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return a.transitionEndEventName = o(l), a.animationEndEventName = o(u), a
    }]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position"]).factory("typeaheadParser", ["$parse", function(e) {
        var t = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function(n) {
                var r = n.match(t);
                if (!r) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
                return {
                    itemName: r[3],
                    source: e(r[4]),
                    viewMapper: e(r[2] || r[1]),
                    modelMapper: e(r[1])
                }
            }
        }
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$position", "typeaheadParser", function(e, t, n, r, i, o, a, s, l) {
        var u = [9, 13, 27, 38, 40],
            c = 200;
        return {
            require: ["ngModel", "^?ngModelOptions"],
            link: function(p, d, f, h) {
                function m() {
                    q.moveInProgress || (q.moveInProgress = !0, q.$digest()), _ && r.cancel(_), _ = r(function() {
                        q.matches.length && v(), q.moveInProgress = !1, q.$digest()
                    }, c)
                }

                function v() {
                    q.position = A ? s.offset(d) : s.position(d), q.position.top += d.prop("offsetHeight")
                }
                var g = h[0],
                    $ = h[1],
                    y = p.$eval(f.typeaheadMinLength);
                y || 0 === y || (y = 1);
                var b, w, x = p.$eval(f.typeaheadWaitMs) || 0,
                    C = p.$eval(f.typeaheadEditable) !== !1,
                    k = t(f.typeaheadLoading).assign || angular.noop,
                    S = t(f.typeaheadOnSelect),
                    E = angular.isDefined(f.typeaheadSelectOnBlur) ? p.$eval(f.typeaheadSelectOnBlur) : !1,
                    T = t(f.typeaheadNoResults).assign || angular.noop,
                    D = f.typeaheadInputFormatter ? t(f.typeaheadInputFormatter) : void 0,
                    A = f.typeaheadAppendToBody ? p.$eval(f.typeaheadAppendToBody) : !1,
                    O = p.$eval(f.typeaheadFocusFirst) !== !1,
                    M = f.typeaheadSelectOnExact ? p.$eval(f.typeaheadSelectOnExact) : !1,
                    N = t(f.ngModel),
                    j = t(f.ngModel + "($$$p)"),
                    P = function(e, t) {
                        return angular.isFunction(N(p)) && $ && $.$options && $.$options.getterSetter ? j(e, {
                            $$$p: t
                        }) : N.assign(e, t)
                    },
                    I = l.parse(f.typeahead),
                    q = p.$new(),
                    F = p.$on("$destroy", function() {
                        q.$destroy()
                    });
                q.$on("$destroy", F);
                var V = "typeahead-" + q.$id + "-" + Math.floor(1e4 * Math.random());
                d.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": V
                });
                var H = angular.element("<div typeahead-popup></div>");
                H.attr({
                    id: V,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    "move-in-progress": "moveInProgress",
                    query: "query",
                    position: "position"
                }), angular.isDefined(f.typeaheadTemplateUrl) && H.attr("template-url", f.typeaheadTemplateUrl), angular.isDefined(f.typeaheadPopupTemplateUrl) && H.attr("popup-template-url", f.typeaheadPopupTemplateUrl);
                var L = function() {
                        q.matches = [], q.activeIdx = -1, d.attr("aria-expanded", !1)
                    },
                    R = function(e) {
                        return V + "-option-" + e
                    };
                q.$watch("activeIdx", function(e) {
                    0 > e ? d.removeAttr("aria-activedescendant") : d.attr("aria-activedescendant", R(e))
                });
                var U = function(e, t) {
                        return q.matches.length > t && e ? e.toUpperCase() === q.matches[t].label.toUpperCase() : !1
                    },
                    B = function(e) {
                        var t = {
                            $viewValue: e
                        };
                        k(p, !0), T(p, !1), n.when(I.source(p, t)).then(function(n) {
                            var r = e === g.$viewValue;
                            if (r && b)
                                if (n && n.length > 0) {
                                    q.activeIdx = O ? 0 : -1, T(p, !1), q.matches.length = 0;
                                    for (var i = 0; i < n.length; i++) t[I.itemName] = n[i], q.matches.push({
                                        id: R(i),
                                        label: I.viewMapper(q, t),
                                        model: n[i]
                                    });
                                    q.query = e, v(), d.attr("aria-expanded", !0), M && 1 === q.matches.length && U(e, 0) && q.select(0)
                                } else L(), T(p, !0);
                            r && k(p, !1)
                        }, function() {
                            L(), k(p, !1), T(p, !0)
                        })
                    };
                A && (angular.element(o).bind("resize", m), i.find("body").bind("scroll", m));
                var _;
                q.moveInProgress = !1, L(), q.query = void 0;
                var z, W = function(e) {
                        z = r(function() {
                            B(e)
                        }, x)
                    },
                    G = function() {
                        z && r.cancel(z)
                    };
                g.$parsers.unshift(function(e) {
                    return b = !0, 0 === y || e && e.length >= y ? x > 0 ? (G(), W(e)) : B(e) : (k(p, !1), G(), L()), C ? e : e ? void g.$setValidity("editable", !1) : (g.$setValidity("editable", !0), null)
                }), g.$formatters.push(function(e) {
                    var t, n, r = {};
                    return C || g.$setValidity("editable", !0), D ? (r.$model = e, D(p, r)) : (r[I.itemName] = e, t = I.viewMapper(p, r), r[I.itemName] = void 0, n = I.viewMapper(p, r), t !== n ? t : e)
                }), q.select = function(e) {
                    var t, n, i = {};
                    w = !0, i[I.itemName] = n = q.matches[e].model, t = I.modelMapper(p, i), P(p, t), g.$setValidity("editable", !0), g.$setValidity("parse", !0), S(p, {
                        $item: n,
                        $model: t,
                        $label: I.viewMapper(p, i)
                    }), L(), q.$eval(f.typeaheadFocusOnSelect) !== !1 && r(function() {
                        d[0].focus()
                    }, 0, !1)
                }, d.bind("keydown", function(e) {
                    if (0 !== q.matches.length && -1 !== u.indexOf(e.which)) {
                        if (-1 === q.activeIdx && (9 === e.which || 13 === e.which)) return L(), void q.$digest();
                        e.preventDefault(), 40 === e.which ? (q.activeIdx = (q.activeIdx + 1) % q.matches.length, q.$digest()) : 38 === e.which ? (q.activeIdx = (q.activeIdx > 0 ? q.activeIdx : q.matches.length) - 1, q.$digest()) : 13 === e.which || 9 === e.which ? q.$apply(function() {
                            q.select(q.activeIdx)
                        }) : 27 === e.which && (e.stopPropagation(), L(), q.$digest())
                    }
                }), d.bind("blur", function() {
                    E && q.matches.length && -1 !== q.activeIdx && !w && (w = !0, q.$apply(function() {
                        q.select(q.activeIdx)
                    })), b = !1, w = !1
                });
                var Y = function(e) {
                    d[0] !== e.target && 3 !== e.which && 0 !== q.matches.length && (L(), a.$$phase || q.$digest())
                };
                i.bind("click", Y), p.$on("$destroy", function() {
                    i.unbind("click", Y), A && K.remove(), H.remove()
                });
                var K = e(H)(q);
                A ? i.find("body").append(K) : d.after(K)
            }
        }
    }]).directive("typeaheadPopup", function() {
        return {
            restrict: "EA",
            scope: {
                matches: "=",
                query: "=",
                active: "=",
                position: "&",
                moveInProgress: "=",
                select: "&"
            },
            replace: !0,
            templateUrl: function(e, t) {
                return t.popupTemplateUrl || "template/typeahead/typeahead-popup.html"
            },
            link: function(e, t, n) {
                e.templateUrl = n.templateUrl, e.isOpen = function() {
                    return e.matches.length > 0
                }, e.isActive = function(t) {
                    return e.active == t
                }, e.selectActive = function(t) {
                    e.active = t
                }, e.selectMatch = function(t) {
                    e.select({
                        activeIdx: t
                    })
                }
            }
        }
    }).directive("typeaheadMatch", ["$templateRequest", "$compile", "$parse", function(e, t, n) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function(r, i, o) {
                var a = n(o.templateUrl)(r.$parent) || "template/typeahead/typeahead-match.html";
                e(a).then(function(e) {
                    t(e.trim())(r, function(e) {
                        i.replaceWith(e)
                    })
                })
            }
        }
    }]).filter("typeaheadHighlight", ["$sce", "$injector", "$log", function(e, t, n) {
        function r(e) {
            return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        }

        function i(e) {
            return /<.*>/g.test(e)
        }
        var o;
        return o = t.has("$sanitize"),
            function(t, a) {
                return !o && i(t) && n.warn("Unsafe use of typeahead please use ngSanitize"), t = a ? ("" + t).replace(new RegExp(r(a), "gi"), "<strong>$&</strong>") : t, o || (t = e.trustAsHtml(t)), t
            }
    }]), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(e) {
        e.put("template/accordion/accordion-group.html", '<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(e) {
        e.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(e) {
        e.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close($event)">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(e) {
        e.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(e) {
        e.put("template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
    }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(e) {
        e.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(e) {
        e.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(e) {
        e.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(e) {
        e.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
    }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(e) {
        e.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(e) {
        e.put("template/modal/backdrop.html", '<div class="modal-backdrop"\n     modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }]), angular.module("template/modal/window.html", []).run(["$templateCache", function(e) {
        e.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n    modal-in-class="in"\n	ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')
    }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(e) {
        e.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')
    }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(e) {
        e.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')
    }]), angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function(e) {
        e.put("template/tooltip/tooltip-html-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(e) {
        e.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(e) {
        e.put("template/tooltip/tooltip-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function(e) {
        e.put("template/tooltip/tooltip-template-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
    }]), angular.module("template/popover/popover-html.html", []).run(["$templateCache", function(e) {
        e.put("template/popover/popover-html.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/popover/popover-template.html", []).run(["$templateCache", function(e) {
        e.put("template/popover/popover-template.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(e) {
        e.put("template/popover/popover.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(e) {
        e.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n');
    }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(e) {
        e.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(e) {
        e.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n</div>\n')
    }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(e) {
        e.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" ></i>\n</span>\n')
    }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(e) {
        e.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(e) {
        e.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(e) {
        e.put("template/timepicker/timepicker.html", '<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(e) {
        e.put("template/typeahead/typeahead-match.html", '<a href tabindex="-1" ng-bind-html="match.label | typeaheadHighlight:query"></a>\n')
    }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(e) {
        e.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }]), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e)
        }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(this, function(e) {
        ! function(e) {
            "use strict";

            function t(t) {
                var n = [{
                    re: /[\xC0-\xC6]/g,
                    ch: "A"
                }, {
                    re: /[\xE0-\xE6]/g,
                    ch: "a"
                }, {
                    re: /[\xC8-\xCB]/g,
                    ch: "E"
                }, {
                    re: /[\xE8-\xEB]/g,
                    ch: "e"
                }, {
                    re: /[\xCC-\xCF]/g,
                    ch: "I"
                }, {
                    re: /[\xEC-\xEF]/g,
                    ch: "i"
                }, {
                    re: /[\xD2-\xD6]/g,
                    ch: "O"
                }, {
                    re: /[\xF2-\xF6]/g,
                    ch: "o"
                }, {
                    re: /[\xD9-\xDC]/g,
                    ch: "U"
                }, {
                    re: /[\xF9-\xFC]/g,
                    ch: "u"
                }, {
                    re: /[\xC7-\xE7]/g,
                    ch: "c"
                }, {
                    re: /[\xD1]/g,
                    ch: "N"
                }, {
                    re: /[\xF1]/g,
                    ch: "n"
                }];
                return e.each(n, function() {
                    t = t.replace(this.re, this.ch)
                }), t
            }

            function n(e) {
                var t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    n = "(?:" + Object.keys(t).join("|") + ")",
                    r = new RegExp(n),
                    i = new RegExp(n, "g"),
                    o = null == e ? "" : "" + e;
                return r.test(o) ? o.replace(i, function(e) {
                    return t[e]
                }) : o
            }

            function r(t, n) {
                var r = arguments,
                    o = t,
                    a = n;
                [].shift.apply(r);
                var s, l = this.each(function() {
                    var t = e(this);
                    if (t.is("select")) {
                        var n = t.data("selectpicker"),
                            l = "object" == typeof o && o;
                        if (n) {
                            if (l)
                                for (var u in l) l.hasOwnProperty(u) && (n.options[u] = l[u])
                        } else {
                            var c = e.extend({}, i.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), l);
                            c.template = e.extend({}, i.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, l.template), t.data("selectpicker", n = new i(this, c, a))
                        }
                        "string" == typeof o && (s = n[o] instanceof Function ? n[o].apply(n, r) : n.options[o])
                    }
                });
                return "undefined" != typeof s ? s : l
            }
            String.prototype.includes || ! function() {
                var e = {}.toString,
                    t = function() {
                        try {
                            var e = {},
                                t = Object.defineProperty,
                                n = t(e, e, e) && t
                        } catch (r) {}
                        return n
                    }(),
                    n = "".indexOf,
                    r = function(t) {
                        if (null == this) throw new TypeError;
                        var r = String(this);
                        if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
                        var i = r.length,
                            o = String(t),
                            a = o.length,
                            s = arguments.length > 1 ? arguments[1] : void 0,
                            l = s ? Number(s) : 0;
                        l != l && (l = 0);
                        var u = Math.min(Math.max(l, 0), i);
                        return a + u > i ? !1 : -1 != n.call(r, o, l)
                    };
                t ? t(String.prototype, "includes", {
                    value: r,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.includes = r
            }(), String.prototype.startsWith || ! function() {
                var e = function() {
                        try {
                            var e = {},
                                t = Object.defineProperty,
                                n = t(e, e, e) && t
                        } catch (r) {}
                        return n
                    }(),
                    t = {}.toString,
                    n = function(e) {
                        if (null == this) throw new TypeError;
                        var n = String(this);
                        if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
                        var r = n.length,
                            i = String(e),
                            o = i.length,
                            a = arguments.length > 1 ? arguments[1] : void 0,
                            s = a ? Number(a) : 0;
                        s != s && (s = 0);
                        var l = Math.min(Math.max(s, 0), r);
                        if (o + l > r) return !1;
                        for (var u = -1; ++u < o;)
                            if (n.charCodeAt(l + u) != i.charCodeAt(u)) return !1;
                        return !0
                    };
                e ? e(String.prototype, "startsWith", {
                    value: n,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.startsWith = n
            }(), Object.keys || (Object.keys = function(e, t, n) {
                n = [];
                for (t in e) n.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }), e.fn.triggerNative = function(e) {
                var t, n = this[0];
                n.dispatchEvent ? ("function" == typeof Event ? t = new Event(e, {
                    bubbles: !0
                }) : (t = document.createEvent("Event"), t.initEvent(e, !0, !1)), n.dispatchEvent(t)) : (n.fireEvent && (t = document.createEventObject(), t.eventType = e, n.fireEvent("on" + e, t)), this.trigger(e))
            }, e.expr[":"].icontains = function(t, n, r) {
                var i = e(t),
                    o = (i.data("tokens") || i.text()).toUpperCase();
                return o.includes(r[3].toUpperCase())
            }, e.expr[":"].ibegins = function(t, n, r) {
                var i = e(t),
                    o = (i.data("tokens") || i.text()).toUpperCase();
                return o.startsWith(r[3].toUpperCase())
            }, e.expr[":"].aicontains = function(t, n, r) {
                var i = e(t),
                    o = (i.data("tokens") || i.data("normalizedText") || i.text()).toUpperCase();
                return o.includes(r[3].toUpperCase())
            }, e.expr[":"].aibegins = function(t, n, r) {
                var i = e(t),
                    o = (i.data("tokens") || i.data("normalizedText") || i.text()).toUpperCase();
                return o.startsWith(r[3].toUpperCase())
            };
            var i = function(t, n, r) {
                r && (r.stopPropagation(), r.preventDefault()), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = n, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = i.prototype.val, this.render = i.prototype.render, this.refresh = i.prototype.refresh, this.setStyle = i.prototype.setStyle, this.selectAll = i.prototype.selectAll, this.deselectAll = i.prototype.deselectAll, this.destroy = i.prototype.destroy, this.remove = i.prototype.remove, this.show = i.prototype.show, this.hide = i.prototype.hide, this.init()
            };
            i.VERSION = "1.7.7", i.DEFAULTS = {
                noneSelectedText: "Nothing selected",
                noneResultsText: "No results matched {0}",
                countSelectedText: function(e, t) {
                    return 1 == e ? "{0} item selected" : "{0} items selected"
                },
                maxOptionsText: function(e, t) {
                    return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
                },
                selectAllText: "Select All",
                deselectAllText: "Deselect All",
                doneButton: !1,
                doneButtonText: "Close",
                multipleSeparator: ", ",
                styleBase: "btn",
                style: "btn-default",
                size: "auto",
                title: null,
                selectedTextFormat: "values",
                width: !1,
                container: !1,
                hideDisabled: !1,
                showSubtext: !1,
                showIcon: !0,
                showContent: !0,
                dropupAuto: !0,
                header: !1,
                liveSearch: !1,
                liveSearchPlaceholder: null,
                liveSearchNormalize: !1,
                liveSearchStyle: "contains",
                actionsBox: !1,
                iconBase: "glyphicon",
                tickIcon: "glyphicon-ok",
                template: {
                    caret: '<span class="caret"></span>'
                },
                maxOptions: !1,
                mobile: !1,
                selectOnTab: !1,
                dropdownAlignRight: !1
            }, i.prototype = {
                constructor: i,
                init: function() {
                    var t = this,
                        n = this.$element.attr("id");
                    this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof n && (this.$button.attr("data-id", n), e('label[for="' + n + '"]').click(function(e) {
                        e.preventDefault(), t.$button.focus()
                    })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                        "hide.bs.dropdown": function(e) {
                            t.$element.trigger("hide.bs.select", e)
                        },
                        "hidden.bs.dropdown": function(e) {
                            t.$element.trigger("hidden.bs.select", e)
                        },
                        "show.bs.dropdown": function(e) {
                            t.$element.trigger("show.bs.select", e)
                        },
                        "shown.bs.dropdown": function(e) {
                            t.$element.trigger("shown.bs.select", e)
                        }
                    }), setTimeout(function() {
                        t.$element.trigger("loaded.bs.select")
                    })
                },
                createDropdown: function() {
                    var t = this.multiple ? " show-tick" : "",
                        r = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                        i = this.autofocus ? " autofocus" : "",
                        o = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                        a = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + n(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                        s = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                        l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                        u = '<div class="btn-group bootstrap-select' + t + r + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + i + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + o + a + s + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
                    return e(u)
                },
                createView: function() {
                    var e = this.createDropdown(),
                        t = this.createLi();
                    return e.find("ul")[0].innerHTML = t, e
                },
                reloadLi: function() {
                    this.destroyLi();
                    var e = this.createLi();
                    this.$menuInner[0].innerHTML = e
                },
                destroyLi: function() {
                    this.$menu.find("li").remove()
                },
                createLi: function() {
                    var r = this,
                        i = [],
                        o = 0,
                        a = document.createElement("option"),
                        s = -1,
                        l = function(e, t, n, r) {
                            return "<li" + ("undefined" != typeof n & "" !== n ? ' class="' + n + '"' : "") + ("undefined" != typeof t & null !== t ? ' data-original-index="' + t + '"' : "") + ("undefined" != typeof r & null !== r ? 'data-optgroup="' + r + '"' : "") + ">" + e + "</li>"
                        },
                        u = function(e, i, o, a) {
                            return '<a tabindex="0"' + ("undefined" != typeof i ? ' class="' + i + '"' : "") + ("undefined" != typeof o ? ' style="' + o + '"' : "") + (r.options.liveSearchNormalize ? ' data-normalized-text="' + t(n(e)) + '"' : "") + ("undefined" != typeof a || null !== a ? ' data-tokens="' + a + '"' : "") + ">" + e + '<span class="' + r.options.iconBase + " " + r.options.tickIcon + ' check-mark"></span></a>'
                        };
                    if (this.options.title && !this.multiple && (s--, !this.$element.find(".bs-title-option").length)) {
                        var c = this.$element[0];
                        a.className = "bs-title-option", a.appendChild(document.createTextNode(this.options.title)), a.value = "", c.insertBefore(a, c.firstChild), void 0 === e(c.options[c.selectedIndex]).attr("selected") && (a.selected = !0)
                    }
                    return this.$element.find("option").each(function(t) {
                        var n = e(this);
                        if (s++, !n.hasClass("bs-title-option")) {
                            var a = this.className || "",
                                c = this.style.cssText,
                                p = n.data("content") ? n.data("content") : n.html(),
                                d = n.data("tokens") ? n.data("tokens") : null,
                                f = "undefined" != typeof n.data("subtext") ? '<small class="text-muted">' + n.data("subtext") + "</small>" : "",
                                h = "undefined" != typeof n.data("icon") ? '<span class="' + r.options.iconBase + " " + n.data("icon") + '"></span> ' : "",
                                m = this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled;
                            if ("" !== h && m && (h = "<span>" + h + "</span>"), r.options.hideDisabled && m) return void s--;
                            if (n.data("content") || (p = h + '<span class="text">' + p + f + "</span>"), "OPTGROUP" === this.parentNode.tagName && n.data("divider") !== !0) {
                                var v = " " + this.parentNode.className || "";
                                if (0 === n.index()) {
                                    o += 1;
                                    var g = this.parentNode.label,
                                        $ = "undefined" != typeof n.parent().data("subtext") ? '<small class="text-muted">' + n.parent().data("subtext") + "</small>" : "",
                                        y = n.parent().data("icon") ? '<span class="' + r.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "";
                                    g = y + '<span class="text">' + g + $ + "</span>", 0 !== t && i.length > 0 && (s++, i.push(l("", null, "divider", o + "div"))), s++, i.push(l(g, null, "dropdown-header" + v, o))
                                }
                                i.push(l(u(p, "opt " + a + v, c, d), t, "", o))
                            } else n.data("divider") === !0 ? i.push(l("", t, "divider")) : n.data("hidden") === !0 ? i.push(l(u(p, a, c, d), t, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (s++, i.push(l("", null, "divider", o + "div"))), i.push(l(u(p, a, c, d), t)));
                            r.liObj[t] = s
                        }
                    }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), i.join("")
                },
                findLis: function() {
                    return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
                },
                render: function(t) {
                    var n, r = this;
                    t !== !1 && this.$element.find("option").each(function(e) {
                        var t = r.findLis().eq(r.liObj[e]);
                        r.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t), r.setSelected(e, this.selected, t)
                    }), this.tabIndex();
                    var i = this.$element.find("option").map(function() {
                            if (this.selected) {
                                if (r.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                                var t, n = e(this),
                                    i = n.data("icon") && r.options.showIcon ? '<i class="' + r.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                                return t = r.options.showSubtext && n.data("subtext") && !r.multiple ? ' <small class="text-muted">' + n.data("subtext") + "</small>" : "", "undefined" != typeof n.attr("title") ? n.attr("title") : n.data("content") && r.options.showContent ? n.data("content") : i + n.html() + t
                            }
                        }).toArray(),
                        o = this.multiple ? i.join(this.options.multipleSeparator) : i[0];
                    if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                        var a = this.options.selectedTextFormat.split(">");
                        if (a.length > 1 && i.length > a[1] || 1 == a.length && i.length >= 2) {
                            n = this.options.hideDisabled ? ", [disabled]" : "";
                            var s = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + n).length,
                                l = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(i.length, s) : this.options.countSelectedText;
                            o = l.replace("{0}", i.length.toString()).replace("{1}", s.toString())
                        }
                    }
                    void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (o = this.options.title), o || (o = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", e.trim(o.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(o), this.$element.trigger("rendered.bs.select")
                },
                setStyle: function(e, t) {
                    this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                    var n = e ? e : this.options.style;
                    "add" == t ? this.$button.addClass(n) : "remove" == t ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
                },
                liHeight: function(t) {
                    if (t || this.options.size !== !1 && !this.sizeInfo) {
                        var n = document.createElement("div"),
                            r = document.createElement("div"),
                            i = document.createElement("ul"),
                            o = document.createElement("li"),
                            a = document.createElement("li"),
                            s = document.createElement("a"),
                            l = document.createElement("span"),
                            u = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                            c = this.options.liveSearch ? document.createElement("div") : null,
                            p = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                            d = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                        if (l.className = "text", n.className = this.$menu[0].parentNode.className + " open", r.className = "dropdown-menu open", i.className = "dropdown-menu inner", o.className = "divider", l.appendChild(document.createTextNode("Inner text")), s.appendChild(l), a.appendChild(s), i.appendChild(a), i.appendChild(o), u && r.appendChild(u), c) {
                            var f = document.createElement("span");
                            c.className = "bs-searchbox", f.className = "form-control", c.appendChild(f), r.appendChild(c)
                        }
                        p && r.appendChild(p), r.appendChild(i), d && r.appendChild(d), n.appendChild(r), document.body.appendChild(n);
                        var h = s.offsetHeight,
                            m = u ? u.offsetHeight : 0,
                            v = c ? c.offsetHeight : 0,
                            g = p ? p.offsetHeight : 0,
                            $ = d ? d.offsetHeight : 0,
                            y = e(o).outerHeight(!0),
                            b = "function" == typeof getComputedStyle ? getComputedStyle(r) : !1,
                            w = b ? null : e(r),
                            x = parseInt(b ? b.paddingTop : w.css("paddingTop")) + parseInt(b ? b.paddingBottom : w.css("paddingBottom")) + parseInt(b ? b.borderTopWidth : w.css("borderTopWidth")) + parseInt(b ? b.borderBottomWidth : w.css("borderBottomWidth")),
                            C = x + parseInt(b ? b.marginTop : w.css("marginTop")) + parseInt(b ? b.marginBottom : w.css("marginBottom")) + 2;
                        document.body.removeChild(n), this.sizeInfo = {
                            liHeight: h,
                            headerHeight: m,
                            searchHeight: v,
                            actionsHeight: g,
                            doneButtonHeight: $,
                            dividerHeight: y,
                            menuPadding: x,
                            menuExtras: C
                        }
                    }
                },
                setSize: function() {
                    if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                        var t, n, r, i, o = this,
                            a = this.$menu,
                            s = this.$menuInner,
                            l = e(window),
                            u = this.$newElement[0].offsetHeight,
                            c = this.sizeInfo.liHeight,
                            p = this.sizeInfo.headerHeight,
                            d = this.sizeInfo.searchHeight,
                            f = this.sizeInfo.actionsHeight,
                            h = this.sizeInfo.doneButtonHeight,
                            m = this.sizeInfo.dividerHeight,
                            v = this.sizeInfo.menuPadding,
                            g = this.sizeInfo.menuExtras,
                            $ = this.options.hideDisabled ? ".disabled" : "",
                            y = function() {
                                r = o.$newElement.offset().top - l.scrollTop(), i = l.height() - r - u
                            };
                        if (y(), "auto" === this.options.size) {
                            var b = function() {
                                var l, u = function(t, n) {
                                        return function(r) {
                                            return n ? r.classList ? r.classList.contains(t) : e(r).hasClass(t) : !(r.classList ? r.classList.contains(t) : e(r).hasClass(t))
                                        }
                                    },
                                    m = o.$menuInner[0].getElementsByTagName("li"),
                                    $ = Array.prototype.filter ? Array.prototype.filter.call(m, u("hidden", !1)) : o.$lis.not(".hidden"),
                                    b = Array.prototype.filter ? Array.prototype.filter.call($, u("dropdown-header", !0)) : $.filter(".dropdown-header");
                                y(), t = i - g, o.options.container ? (a.data("height") || a.data("height", a.height()), n = a.data("height")) : n = a.height(), o.options.dropupAuto && o.$newElement.toggleClass("dropup", r > i && n > t - g), o.$newElement.hasClass("dropup") && (t = r - g), l = $.length + b.length > 3 ? 3 * c + g - 2 : 0, a.css({
                                    "max-height": t + "px",
                                    overflow: "hidden",
                                    "min-height": l + p + d + f + h + "px"
                                }), s.css({
                                    "max-height": t - p - d - f - h - v + "px",
                                    "overflow-y": "auto",
                                    "min-height": Math.max(l - v, 0) + "px"
                                })
                            };
                            b(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", b), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", b)
                        } else if (this.options.size && "auto" != this.options.size && this.$lis.not($).length > this.options.size) {
                            var w = this.$lis.not(".divider").not($).children().slice(0, this.options.size).last().parent().index(),
                                x = this.$lis.slice(0, w + 1).filter(".divider").length;
                            t = c * this.options.size + x * m + v, o.options.container ? (a.data("height") || a.data("height", a.height()), n = a.data("height")) : n = a.height(), o.options.dropupAuto && this.$newElement.toggleClass("dropup", r > i && n > t - g), a.css({
                                "max-height": t + p + d + f + h + "px",
                                overflow: "hidden",
                                "min-height": ""
                            }), s.css({
                                "max-height": t - v + "px",
                                "overflow-y": "auto",
                                "min-height": ""
                            })
                        }
                    }
                },
                setWidth: function() {
                    if ("auto" === this.options.width) {
                        this.$menu.css("min-width", "0");
                        var e = this.$menu.parent().clone().appendTo("body"),
                            t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
                            n = e.children(".dropdown-menu").outerWidth(),
                            r = t.css("width", "auto").children("button").outerWidth();
                        e.remove(), t.remove(), this.$newElement.css("width", Math.max(n, r) + "px")
                    } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                    this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
                },
                selectPosition: function() {
                    this.$bsContainer = e('<div class="bs-container" />');
                    var t, n, r = this,
                        i = function(e) {
                            r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), n = e.hasClass("dropup") ? 0 : e[0].offsetHeight, r.$bsContainer.css({
                                top: t.top + n,
                                left: t.left,
                                width: e[0].offsetWidth
                            })
                        };
                    this.$newElement.on("click", function() {
                        var t = e(this);
                        r.isDisabled() || (i(t), r.$bsContainer.appendTo(r.options.container).toggleClass("open", !t.hasClass("open")).append(r.$menu))
                    }), e(window).on("resize scroll", function() {
                        i(r.$newElement)
                    }), this.$element.on("hide.bs.select", function() {
                        r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach()
                    })
                },
                setSelected: function(e, t, n) {
                    n || (n = this.findLis().eq(this.liObj[e])), n.toggleClass("selected", t)
                },
                setDisabled: function(e, t, n) {
                    n || (n = this.findLis().eq(this.liObj[e])), t ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
                },
                isDisabled: function() {
                    return this.$element[0].disabled
                },
                checkDisabled: function() {
                    var e = this;
                    this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                        return !e.isDisabled()
                    })
                },
                tabIndex: function() {
                    this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
                },
                clickListener: function() {
                    var t = this,
                        n = e(document);
                    this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
                        e.stopPropagation()
                    }), n.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                        /(32)/.test(e.keyCode.toString(10)) && n.data("spaceSelect") && (e.preventDefault(), n.data("spaceSelect", !1))
                    }), this.$newElement.on("click", function() {
                        t.setSize(), t.$element.on("shown.bs.select", function() {
                            if (t.options.liveSearch || t.multiple) {
                                if (!t.multiple) {
                                    var e = t.liObj[t.$element[0].selectedIndex];
                                    if ("number" != typeof e || t.options.size === !1) return;
                                    var n = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                                    n = n - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = n
                                }
                            } else t.$menuInner.find(".selected a").focus()
                        })
                    }), this.$menuInner.on("click", "li a", function(n) {
                        var r = e(this),
                            i = r.parent().data("originalIndex"),
                            o = t.$element.val(),
                            a = t.$element.prop("selectedIndex");
                        if (t.multiple && n.stopPropagation(), n.preventDefault(), !t.isDisabled() && !r.parent().hasClass("disabled")) {
                            var s = t.$element.find("option"),
                                l = s.eq(i),
                                u = l.prop("selected"),
                                c = l.parent("optgroup"),
                                p = t.options.maxOptions,
                                d = c.data("maxOptions") || !1;
                            if (t.multiple) {
                                if (l.prop("selected", !u), t.setSelected(i, !u), r.blur(), p !== !1 || d !== !1) {
                                    var f = p < s.filter(":selected").length,
                                        h = d < c.find("option:selected").length;
                                    if (p && f || d && h)
                                        if (p && 1 == p) s.prop("selected", !1), l.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(i, !0);
                                        else if (d && 1 == d) {
                                        c.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                        var m = r.parent().data("optgroup");
                                        t.$menuInner.find('[data-optgroup="' + m + '"]').removeClass("selected"), t.setSelected(i, !0)
                                    } else {
                                        var v = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(p, d) : t.options.maxOptionsText,
                                            g = v[0].replace("{n}", p),
                                            $ = v[1].replace("{n}", d),
                                            y = e('<div class="notify"></div>');
                                        v[2] && (g = g.replace("{var}", v[2][p > 1 ? 0 : 1]), $ = $.replace("{var}", v[2][d > 1 ? 0 : 1])), l.prop("selected", !1), t.$menu.append(y), p && f && (y.append(e("<div>" + g + "</div>")), t.$element.trigger("maxReached.bs.select")), d && h && (y.append(e("<div>" + $ + "</div>")), t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                            t.setSelected(i, !1)
                                        }, 10), y.delay(750).fadeOut(300, function() {
                                            e(this).remove()
                                        })
                                    }
                                }
                            } else s.prop("selected", !1), l.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(i, !0);
                            t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(), (o != t.$element.val() && t.multiple || a != t.$element.prop("selectedIndex") && !t.multiple) && (t.$element.triggerNative("change"), t.$element.trigger("changed.bs.select", [i, l.prop("selected"), u]))
                        }
                    }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(n) {
                        n.currentTarget == this && (n.preventDefault(), n.stopPropagation(), t.options.liveSearch && !e(n.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
                    }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                        e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
                    }), this.$menu.on("click", ".popover-title .close", function() {
                        t.$button.click()
                    }), this.$searchbox.on("click", function(e) {
                        e.stopPropagation()
                    }), this.$menu.on("click", ".actions-btn", function(n) {
                        t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), n.preventDefault(), n.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll(), t.$element.triggerNative("change")
                    }), this.$element.change(function() {
                        t.render(!1)
                    })
                },
                liveSearchListener: function() {
                    var r = this,
                        i = e('<li class="no-results"></li>');
                    this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                        r.$menuInner.find(".active").removeClass("active"), r.$searchbox.val() && (r.$searchbox.val(""), r.$lis.not(".is-hidden").removeClass("hidden"), i.parent().length && i.remove()), r.multiple || r.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                            r.$searchbox.focus()
                        }, 10)
                    }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                        e.stopPropagation()
                    }), this.$searchbox.on("input propertychange", function() {
                        if (r.$searchbox.val()) {
                            var o = r.$lis.not(".is-hidden").removeClass("hidden").children("a");
                            o = r.options.liveSearchNormalize ? o.not(":a" + r._searchStyle() + '("' + t(r.$searchbox.val()) + '")') : o.not(":" + r._searchStyle() + '("' + r.$searchbox.val() + '")'), o.parent().addClass("hidden"), r.$lis.filter(".dropdown-header").each(function() {
                                var t = e(this),
                                    n = t.data("optgroup");
                                0 === r.$lis.filter("[data-optgroup=" + n + "]").not(t).not(".hidden").length && (t.addClass("hidden"), r.$lis.filter("[data-optgroup=" + n + "div]").addClass("hidden"))
                            });
                            var a = r.$lis.not(".hidden");
                            a.each(function(t) {
                                var n = e(this);
                                n.hasClass("divider") && (n.index() === a.first().index() || n.index() === a.last().index() || a.eq(t + 1).hasClass("divider")) && n.addClass("hidden")
                            }), r.$lis.not(".hidden, .no-results").length ? i.parent().length && i.remove() : (i.parent().length && i.remove(), i.html(r.options.noneResultsText.replace("{0}", '"' + n(r.$searchbox.val()) + '"')).show(), r.$menuInner.append(i))
                        } else r.$lis.not(".is-hidden").removeClass("hidden"), i.parent().length && i.remove();
                        r.$lis.filter(".active").removeClass("active"), r.$searchbox.val() && r.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), e(this).focus()
                    })
                },
                _searchStyle: function() {
                    var e = {
                        begins: "ibegins",
                        startsWith: "ibegins"
                    };
                    return e[this.options.liveSearchStyle] || "icontains"
                },
                val: function(e) {
                    return "undefined" != typeof e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
                },
                changeAll: function(t) {
                    "undefined" == typeof t && (t = !0), this.findLis();
                    for (var n = this.$element.find("option"), r = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", t), i = r.length, o = [], a = 0; i > a; a++) {
                        var s = r[a].getAttribute("data-original-index");
                        o[o.length] = n.eq(s)[0]
                    }
                    e(o).prop("selected", t), this.render(!1)
                },
                selectAll: function() {
                    return this.changeAll(!0)
                },
                deselectAll: function() {
                    return this.changeAll(!1)
                },
                keydown: function(n) {
                    var r, i, o, a, s, l, u, c, p, d = e(this),
                        f = d.is("input") ? d.parent().parent() : d.parent(),
                        h = f.data("this"),
                        m = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                        v = {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            96: "0",
                            97: "1",
                            98: "2",
                            99: "3",
                            100: "4",
                            101: "5",
                            102: "6",
                            103: "7",
                            104: "8",
                            105: "9"
                        };
                    if (h.options.liveSearch && (f = d.parent().parent()), h.options.container && (f = h.$menu), r = e("[role=menu] li", f), p = h.$menu.parent().hasClass("open"), !p && (n.keyCode >= 48 && n.keyCode <= 57 || n.keyCode >= 96 && n.keyCode <= 105 || n.keyCode >= 65 && n.keyCode <= 90) && (h.options.container ? h.$newElement.trigger("click") : (h.setSize(), h.$menu.parent().addClass("open"), p = !0), h.$searchbox.focus()), h.options.liveSearch && (/(^9$|27)/.test(n.keyCode.toString(10)) && p && 0 === h.$menu.find(".active").length && (n.preventDefault(), h.$menu.parent().removeClass("open"), h.options.container && h.$newElement.removeClass("open"), h.$button.focus()), r = e("[role=menu] li" + m, f),
                            d.val() || /(38|40)/.test(n.keyCode.toString(10)) || 0 === r.filter(".active").length && (r = h.$menuInner.find("li"), r = h.options.liveSearchNormalize ? r.filter(":a" + h._searchStyle() + "(" + t(v[n.keyCode]) + ")") : r.filter(":" + h._searchStyle() + "(" + v[n.keyCode] + ")"))), r.length) {
                        if (/(38|40)/.test(n.keyCode.toString(10))) i = r.index(r.find("a").filter(":focus").parent()), a = r.filter(m).first().index(), s = r.filter(m).last().index(), o = r.eq(i).nextAll(m).eq(0).index(), l = r.eq(i).prevAll(m).eq(0).index(), u = r.eq(o).prevAll(m).eq(0).index(), h.options.liveSearch && (r.each(function(t) {
                            e(this).hasClass("disabled") || e(this).data("index", t)
                        }), i = r.index(r.filter(".active")), a = r.first().data("index"), s = r.last().data("index"), o = r.eq(i).nextAll().eq(0).data("index"), l = r.eq(i).prevAll().eq(0).data("index"), u = r.eq(o).prevAll().eq(0).data("index")), c = d.data("prevIndex"), 38 == n.keyCode ? (h.options.liveSearch && i--, i != u && i > l && (i = l), a > i && (i = a), i == c && (i = s)) : 40 == n.keyCode && (h.options.liveSearch && i++, -1 == i && (i = 0), i != u && o > i && (i = o), i > s && (i = s), i == c && (i = a)), d.data("prevIndex", i), h.options.liveSearch ? (n.preventDefault(), d.hasClass("dropdown-toggle") || (r.removeClass("active").eq(i).addClass("active").children("a").focus(), d.focus())) : r.eq(i).children("a").focus();
                        else if (!d.is("input")) {
                            var g, $, y = [];
                            r.each(function() {
                                e(this).hasClass("disabled") || e.trim(e(this).children("a").text().toLowerCase()).substring(0, 1) == v[n.keyCode] && y.push(e(this).index())
                            }), g = e(document).data("keycount"), g++, e(document).data("keycount", g), $ = e.trim(e(":focus").text().toLowerCase()).substring(0, 1), $ != v[n.keyCode] ? (g = 1, e(document).data("keycount", g)) : g >= y.length && (e(document).data("keycount", 0), g > y.length && (g = 1)), r.eq(y[g - 1]).children("a").focus()
                        }
                        if ((/(13|32)/.test(n.keyCode.toString(10)) || /(^9$)/.test(n.keyCode.toString(10)) && h.options.selectOnTab) && p) {
                            if (/(32)/.test(n.keyCode.toString(10)) || n.preventDefault(), h.options.liveSearch) /(32)/.test(n.keyCode.toString(10)) || (h.$menuInner.find(".active a").click(), d.focus());
                            else {
                                var b = e(":focus");
                                b.click(), b.focus(), n.preventDefault(), e(document).data("spaceSelect", !0)
                            }
                            e(document).data("keycount", 0)
                        }(/(^9$|27)/.test(n.keyCode.toString(10)) && p && (h.multiple || h.options.liveSearch) || /(27)/.test(n.keyCode.toString(10)) && !p) && (h.$menu.parent().removeClass("open"), h.options.container && h.$newElement.removeClass("open"), h.$button.focus())
                    }
                },
                mobile: function() {
                    this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
                },
                refresh: function() {
                    this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
                },
                hide: function() {
                    this.$newElement.hide()
                },
                show: function() {
                    this.$newElement.show()
                },
                remove: function() {
                    this.$newElement.remove(), this.$element.remove()
                },
                destroy: function() {
                    this.$newElement.remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
                }
            };
            var o = e.fn.selectpicker;
            e.fn.selectpicker = r, e.fn.selectpicker.Constructor = i, e.fn.selectpicker.noConflict = function() {
                return e.fn.selectpicker = o, this
            }, e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', i.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(e) {
                e.stopPropagation()
            }), e(window).on("load.bs.select.data-api", function() {
                e(".selectpicker").each(function() {
                    var t = e(this);
                    r.call(t, t.data())
                })
            })
        }(e)
    }),
    function(e) {
        "use strict";

        function t(t, n) {
            this.itemsArray = [], this.$element = e(t), this.$element.hide(), this.isSelect = "SELECT" === t.tagName, this.multiple = this.isSelect && t.hasAttribute("multiple"), this.objectItems = n && n.itemValue, this.placeholderText = t.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = e('<div class="bootstrap-tagsinput"></div>'), this.$input = e('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.after(this.$container);
            var r = (this.inputSize < 3 ? 3 : this.inputSize) + "em";
            this.$input.get(0).style.cssText = "width: " + r + " !important;", this.build(n)
        }

        function n(e, t) {
            if ("function" != typeof e[t]) {
                var n = e[t];
                e[t] = function(e) {
                    return e[n]
                }
            }
        }

        function r(e, t) {
            if ("function" != typeof e[t]) {
                var n = e[t];
                e[t] = function() {
                    return n
                }
            }
        }

        function i(e) {
            return e ? l.text(e).html() : ""
        }

        function o(e) {
            var t = 0;
            if (document.selection) {
                e.focus();
                var n = document.selection.createRange();
                n.moveStart("character", -e.value.length), t = n.text.length
            } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
            return t
        }

        function a(t, n) {
            var r = !1;
            return e.each(n, function(e, n) {
                if ("number" == typeof n && t.which === n) return r = !0, !1;
                if (t.which === n.which) {
                    var i = !n.hasOwnProperty("altKey") || t.altKey === n.altKey,
                        o = !n.hasOwnProperty("shiftKey") || t.shiftKey === n.shiftKey,
                        a = !n.hasOwnProperty("ctrlKey") || t.ctrlKey === n.ctrlKey;
                    if (i && o && a) return r = !0, !1
                }
            }), r
        }
        var s = {
            tagClass: function(e) {
                return "label label-info"
            },
            itemValue: function(e) {
                return e ? e.toString() : e
            },
            itemText: function(e) {
                return this.itemValue(e)
            },
            freeInput: !0,
            addOnBlur: !0,
            maxTags: void 0,
            maxChars: void 0,
            confirmKeys: [13, 44],
            onTagExists: function(e, t) {
                t.hide().fadeIn()
            },
            trimValue: !1,
            allowDuplicates: !1
        };
        t.prototype = {
            constructor: t,
            add: function(t, n) {
                var r = this;
                if (!(r.options.maxTags && r.itemsArray.length >= r.options.maxTags) && (t === !1 || t)) {
                    if ("string" == typeof t && r.options.trimValue && (t = e.trim(t)), "object" == typeof t && !r.objectItems) throw "Can't add objects when itemValue option is not set";
                    if (!t.toString().match(/^\s*$/)) {
                        if (r.isSelect && !r.multiple && r.itemsArray.length > 0 && r.remove(r.itemsArray[0]), "string" == typeof t && "INPUT" === this.$element[0].tagName) {
                            var o = t.split(",");
                            if (o.length > 1) {
                                for (var a = 0; a < o.length; a++) this.add(o[a], !0);
                                return void(n || r.pushVal())
                            }
                        }
                        var s = r.options.itemValue(t),
                            l = r.options.itemText(t),
                            u = r.options.tagClass(t),
                            c = e.grep(r.itemsArray, function(e) {
                                return r.options.itemValue(e) === s
                            })[0];
                        if (!c || r.options.allowDuplicates) {
                            if (!(r.items().toString().length + t.length + 1 > r.options.maxInputLength)) {
                                var p = e.Event("beforeItemAdd", {
                                    item: t,
                                    cancel: !1
                                });
                                if (r.$element.trigger(p), !p.cancel) {
                                    r.itemsArray.push(t);
                                    var d = e('<span class="tag ' + i(u) + '">' + i(l) + '<span data-role="remove"></span></span>');
                                    if (d.data("item", t), r.findInputWrapper().before(d), d.after(" "), r.isSelect && !e('option[value="' + encodeURIComponent(s) + '"]', r.$element)[0]) {
                                        var f = e("<option selected>" + i(l) + "</option>");
                                        f.data("item", t), f.attr("value", s), r.$element.append(f)
                                    }
                                    n || r.pushVal(), (r.options.maxTags === r.itemsArray.length || r.items().toString().length === r.options.maxInputLength) && r.$container.addClass("bootstrap-tagsinput-max"), r.$element.trigger(e.Event("itemAdded", {
                                        item: t
                                    }))
                                }
                            }
                        } else if (r.options.onTagExists) {
                            var h = e(".tag", r.$container).filter(function() {
                                return e(this).data("item") === c
                            });
                            r.options.onTagExists(t, h)
                        }
                    }
                }
            },
            remove: function(t, n) {
                var r = this;
                if (r.objectItems && (t = "object" == typeof t ? e.grep(r.itemsArray, function(e) {
                        return r.options.itemValue(e) == r.options.itemValue(t)
                    }) : e.grep(r.itemsArray, function(e) {
                        return r.options.itemValue(e) == t
                    }), t = t[t.length - 1]), t) {
                    var i = e.Event("beforeItemRemove", {
                        item: t,
                        cancel: !1
                    });
                    if (r.$element.trigger(i), i.cancel) return;
                    e(".tag", r.$container).filter(function() {
                        return e(this).data("item") === t
                    }).remove(), e("option", r.$element).filter(function() {
                        return e(this).data("item") === t
                    }).remove(), -1 !== e.inArray(t, r.itemsArray) && r.itemsArray.splice(e.inArray(t, r.itemsArray), 1)
                }
                n || r.pushVal(), r.options.maxTags > r.itemsArray.length && r.$container.removeClass("bootstrap-tagsinput-max"), r.$element.trigger(e.Event("itemRemoved", {
                    item: t
                }))
            },
            removeAll: function() {
                var t = this;
                for (e(".tag", t.$container).remove(), e("option", t.$element).remove(); t.itemsArray.length > 0;) t.itemsArray.pop();
                t.pushVal()
            },
            refresh: function() {
                var t = this;
                e(".tag", t.$container).each(function() {
                    var n = e(this),
                        r = n.data("item"),
                        o = t.options.itemValue(r),
                        a = t.options.itemText(r),
                        s = t.options.tagClass(r);
                    if (n.attr("class", null), n.addClass("tag " + i(s)), n.contents().filter(function() {
                            return 3 == this.nodeType
                        })[0].nodeValue = i(a), t.isSelect) {
                        var l = e("option", t.$element).filter(function() {
                            return e(this).data("item") === r
                        });
                        l.attr("value", o)
                    }
                })
            },
            items: function() {
                return this.itemsArray
            },
            pushVal: function() {
                var t = this,
                    n = e.map(t.items(), function(e) {
                        return t.options.itemValue(e).toString()
                    });
                t.$element.val(n, !0).trigger("change")
            },
            build: function(t) {
                var i = this;
                if (i.options = e.extend({}, s, t), i.objectItems && (i.options.freeInput = !1), n(i.options, "itemValue"), n(i.options, "itemText"), r(i.options, "tagClass"), i.options.typeahead) {
                    var l = i.options.typeahead || {};
                    r(l, "source"), i.$input.typeahead(e.extend({}, l, {
                        source: function(t, n) {
                            function r(e) {
                                for (var t = [], r = 0; r < e.length; r++) {
                                    var a = i.options.itemText(e[r]);
                                    o[a] = e[r], t.push(a)
                                }
                                n(t)
                            }
                            this.map = {};
                            var o = this.map,
                                a = l.source(t);
                            e.isFunction(a.success) ? a.success(r) : e.isFunction(a.then) ? a.then(r) : e.when(a).then(r)
                        },
                        updater: function(e) {
                            i.add(this.map[e])
                        },
                        matcher: function(e) {
                            return -1 !== e.toLowerCase().indexOf(this.query.trim().toLowerCase())
                        },
                        sorter: function(e) {
                            return e.sort()
                        },
                        highlighter: function(e) {
                            var t = new RegExp("(" + this.query + ")", "gi");
                            return e.replace(t, "<strong>$1</strong>")
                        }
                    }))
                }
                if (i.options.typeaheadjs) {
                    var u = i.options.typeaheadjs || {};
                    i.$input.typeahead(null, u).on("typeahead:selected", e.proxy(function(e, t) {
                        u.valueKey ? i.add(t[u.valueKey]) : i.add(t), i.$input.typeahead("val", "")
                    }, i))
                }
                i.$container.on("click", e.proxy(function(e) {
                    i.$element.attr("disabled") || i.$input.removeAttr("disabled"), i.$input.focus()
                }, i)), i.options.addOnBlur && i.options.freeInput && i.$input.on("focusout", e.proxy(function(t) {
                    0 === e(".typeahead, .twitter-typeahead", i.$container).length && (i.add(i.$input.val()), i.$input.val(""))
                }, i)), i.$container.on("keydown", "input", e.proxy(function(t) {
                    var n = e(t.target),
                        r = i.findInputWrapper();
                    if (i.$element.attr("disabled")) return void i.$input.attr("disabled", "disabled");
                    switch (t.which) {
                        case 8:
                            if (0 === o(n[0])) {
                                var a = r.prev();
                                a && i.remove(a.data("item"))
                            }
                            break;
                        case 46:
                            if (0 === o(n[0])) {
                                var s = r.next();
                                s && i.remove(s.data("item"))
                            }
                            break;
                        case 37:
                            var l = r.prev();
                            0 === n.val().length && l[0] && (l.before(r), n.focus());
                            break;
                        case 39:
                            var u = r.next();
                            0 === n.val().length && u[0] && (u.after(r), n.focus())
                    }
                    var c = n.val().length;
                    Math.ceil(c / 5);
                    n.attr("size", Math.max(this.inputSize, n.val().length))
                }, i)), i.$container.on("keypress", "input", e.proxy(function(t) {
                    var n = e(t.target);
                    if (i.$element.attr("disabled")) return void i.$input.attr("disabled", "disabled");
                    var r = n.val(),
                        o = i.options.maxChars && r.length >= i.options.maxChars;
                    i.options.freeInput && (a(t, i.options.confirmKeys) || o) && (i.add(o ? r.substr(0, i.options.maxChars) : r), n.val(""), t.preventDefault());
                    var s = n.val().length;
                    Math.ceil(s / 5);
                    n.attr("size", Math.max(this.inputSize, n.val().length))
                }, i)), i.$container.on("click", "[data-role=remove]", e.proxy(function(t) {
                    i.$element.attr("disabled") || i.remove(e(t.target).closest(".tag").data("item"))
                }, i)), i.options.itemValue === s.itemValue && ("INPUT" === i.$element[0].tagName ? i.add(i.$element.val()) : e("option", i.$element).each(function() {
                    i.add(e(this).attr("value"), !0)
                }))
            },
            destroy: function() {
                var e = this;
                e.$container.off("keypress", "input"), e.$container.off("click", "[role=remove]"), e.$container.remove(), e.$element.removeData("tagsinput"), e.$element.show()
            },
            focus: function() {
                this.$input.focus()
            },
            input: function() {
                return this.$input
            },
            findInputWrapper: function() {
                for (var t = this.$input[0], n = this.$container[0]; t && t.parentNode !== n;) t = t.parentNode;
                return e(t)
            }
        }, e.fn.tagsinput = function(n, r) {
            var i = [];
            return this.each(function() {
                var o = e(this).data("tagsinput");
                if (o)
                    if (n || r) {
                        if (void 0 !== o[n]) {
                            var a = o[n](r);
                            void 0 !== a && i.push(a)
                        }
                    } else i.push(o);
                else o = new t(this, n), e(this).data("tagsinput", o), i.push(o), "SELECT" === this.tagName && e("option", e(this)).attr("selected", "selected"), e(this).val(e(this).val())
            }), "string" == typeof n ? i.length > 1 ? i : i[0] : i
        }, e.fn.tagsinput.Constructor = t;
        var l = e("<div />");
        e(function() {
            e("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
        })
    }(window.jQuery);