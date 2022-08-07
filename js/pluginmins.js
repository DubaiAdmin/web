function functionTabs(e, t, n, i) {
    var o = $(e), r = t, s = $(i), a = $(n);
    o.click(function () {$(this).closest(s).find(o).removeClass(r).eq($(this).index()).addClass(r), $(this).closest(s).find(a).removeClass("jsActive animated fadeInUP").eq($(this).index()).addClass("jsActive animated fadeInUp")}).eq(0)
}

function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {return t + t + n + n + i + i});
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : null
}

function clamp(e, t, n) {return Math.min(Math.max(e, t), n)}

function isInArray(e, t) {return t.indexOf(e) > -1}

!function () {for (var e, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], n = t.length, i = window.console = window.console || {}; n--;) i[e = t[n]] || (i[e] = function () {})}(), function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length, n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()}

    function r(e, t, n) {return he.isFunction(t) ? he.grep(e, function (e, i) {return !!t.call(e, i, e) !== n}) : t.nodeType ? he.grep(e, function (e) {return e === t !== n}) : "string" != typeof t ? he.grep(e, function (e) {return se.call(t, e) > -1 !== n}) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {return se.call(t, e) > -1 !== n && 1 === e.nodeType}))}

    function s(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function a(e) {
        var t = {};
        return he.each(e.match(Ae) || [], function (e, n) {t[n] = !0}), t
    }

    function l(e) {return e}

    function c(e) {throw e}

    function d(e, t, n, i) {
        var o;
        try {
            e && he.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && he.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function u() {te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()}

    function p() {this.expando = he.expando + p.uid++}

    function h(e) {return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : je.test(e) ? JSON.parse(e) : e)}

    function f(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Pe, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = h(n)
            } catch (e) {
            }
            Ie.set(e, t, n)
        } else n = void 0;
        return n
    }

    function m(e, t, n, i) {
        var o, r = 1, s = 20, a = i ? function () {return i.cur()} : function () {return he.css(e, t, "")}, l = a(),
            c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            d = (he.cssNumber[t] || "px" !== c && +l) && qe.exec(he.css(e, t));
        if (d && d[3] !== c) {
            c = c || d[3], n = n || [], d = +l || 1;
            do {
                d /= r = r || ".5", he.style(e, t, d + c)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
    }

    function v(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = Re[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Re[i] = o, o)
    }

    function g(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Me.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Ne(i) && (o[r] = v(i))) : "none" !== n && (o[r] = "none", Me.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? he.merge([e], n) : n
    }

    function b(e, t) {for (var n = 0, i = e.length; n < i; n++) Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"))}

    function w(e, t, n, i, o) {
        for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++) if ((r = e[h]) || 0 === r) if ("object" === he.type(r)) he.merge(p, r.nodeType ? [r] : r); else if (Xe.test(r)) {
            for (s = s || u.appendChild(t.createElement("div")), a = (We.exec(r) || ["", ""])[1].toLowerCase(), l = Ve[a] || Ve._default, s.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
            he.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (u.textContent = "", h = 0; r = p[h++];) if (i && he.inArray(r, i) > -1) o && o.push(r); else if (c = he.contains(r.ownerDocument, r), s = y(u.appendChild(r), "script"), c && b(s), n) for (d = 0; r = s[d++];) Ue.test(r.type || "") && n.push(r);
        return u
    }

    function x() {return !0}

    function C() {return !1}

    function S() {
        try {
            return te.activeElement
        } catch (e) {
        }
    }

    function T(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) T(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = C; else if (!o) return e;
        return 1 === r && (s = o, (o = function (e) {return he().off(e), s.apply(this, arguments)}).guid = s.guid || (s.guid = he.guid++)), e.each(function () {he.event.add(this, t, o, i, n)})
    }

    function k(e, t) {return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e}

    function _(e) {return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e}

    function $(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function A(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Me.hasData(e) && (r = Me.access(e), s = Me.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c) for (n = 0, i = c[o].length; n < i; n++) he.event.add(t, o, c[o][n])
            }
            Ie.hasData(e) && (a = Ie.access(e), l = he.extend({}, a), Ie.set(t, l))
        }
    }

    function E(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function O(e, t, i, o) {
        t = oe.apply([], t);
        var r, s, a, l, c, d, u = 0, p = e.length, h = p - 1, f = t[0], m = he.isFunction(f);
        if (m || p > 1 && "string" == typeof f && !pe.checkClone && et.test(f)) return e.each(function (n) {
            var r = e.eq(n);
            m && (t[0] = f.call(this, n, r.html())), O(r, t, i, o)
        });
        if (p && (r = w(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (l = (a = he.map(y(r, "script"), _)).length; u < p; u++) c = r, u !== h && (c = he.clone(c, !0, !0), l && he.merge(a, y(c, "script"))), i.call(e[u], c, u);
            if (l) for (d = a[a.length - 1].ownerDocument, he.map(a, $), u = 0; u < l; u++) c = a[u], Ue.test(c.type || "") && !Me.access(c, "globalEval") && he.contains(d, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(nt, ""), d))
        }
        return e
    }

    function D(e, t, n) {
        for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(y(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function L(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || rt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !pe.pixelMarginRight() && ot.test(s) && it.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function M(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function I(e) {
        if (e in ut) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;) if ((e = dt[n] + t) in ut) return e
    }

    function j(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = I(e) || e), t
    }

    function P(e, t, n) {
        var i = qe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function z(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += he.css(e, n + He[r], !0, o)), i ? ("content" === n && (s -= he.css(e, "padding" + He[r], !0, o)), "margin" !== n && (s -= he.css(e, "border" + He[r] + "Width", !0, o))) : (s += he.css(e, "padding" + He[r], !0, o), "padding" !== n && (s += he.css(e, "border" + He[r] + "Width", !0, o)));
        return s
    }

    function q(e, t, n) {
        var i, o = rt(e), r = L(e, t, o), s = "border-box" === he.css(e, "boxSizing", !1, o);
        return ot.test(r) ? r : (i = s && (pe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + z(e, t, n || (s ? "border" : "content"), i, o) + "px")
    }

    function H(e, t, n, i, o) {return new H.prototype.init(e, t, n, i, o)}

    function N() {ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(N) : e.setTimeout(N, he.fx.interval), he.fx.tick())}

    function B() {return e.setTimeout(function () {pt = void 0}), pt = he.now()}

    function R(e, t) {
        var n, i = 0, o = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = He[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function F(e, t, n) {for (var i, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i}

    function W(e, t) {
        var n, i, o, r, s;
        for (n in e) if (i = he.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) {
            r = s.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o)
        } else t[i] = o
    }

    function U(e, t, n) {
        var i, o, r = 0, s = U.prefilters.length, a = he.Deferred().always(function () {delete l.elem}),
            l = function () {
                if (o) return !1;
                for (var t = pt || B(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            }, c = a.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {specialEasing: {}, easing: he.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || B(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }), d = c.props;
        for (W(d, c.opts.specialEasing); r < s; r++) if (i = U.prefilters[r].call(c, e, d, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(d, F, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), he.fx.timer(he.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function V(e) {return (e.match(Ae) || []).join(" ")}

    function X(e) {return e.getAttribute && e.getAttribute("class") || ""}

    function G(e, t, n, i) {
        var o;
        if (Array.isArray(t)) he.each(t, function (t, o) {n || kt.test(e) ? i(e, o) : G(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)}); else if (n || "object" !== he.type(t)) i(e, t); else for (o in t) G(e + "[" + o + "]", t[o], n, i)
    }

    function Y(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(Ae) || [];
            if (he.isFunction(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Q(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, he.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var r = {}, s = e === Pt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function K(e, t) {
        var n, i, o = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in n) r = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function Z(e, t, n, i) {
        var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
        if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = d.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t)
            } catch (e) {
                return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: t}
    }

    var ee = [], te = e.document, ne = Object.getPrototypeOf, ie = ee.slice, oe = ee.concat, re = ee.push,
        se = ee.indexOf, ae = {}, le = ae.toString, ce = ae.hasOwnProperty, de = ce.toString, ue = de.call(Object),
        pe = {}, he = function (e, t) {return new he.fn.init(e, t)}, fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/, ve = /-([a-z])/g, ge = function (e, t) {return t.toUpperCase()};
    he.fn = he.prototype = {
        jquery: "3.2.1",
        constructor: he,
        length: 0,
        toArray: function () {return ie.call(this)},
        get: function (e) {return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]},
        pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {return he.each(this, e)},
        map: function (e) {return this.pushStack(he.map(this, function (t, n) {return e.call(t, n, t)}))},
        slice: function () {return this.pushStack(ie.apply(this, arguments))},
        first: function () {return this.eq(0)},
        last: function () {return this.eq(-1)},
        eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {return this.prevObject || this.constructor()},
        push: re,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (he.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, he.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {throw new Error(e)},
        noop: function () {},
        isFunction: function (e) {return "function" === he.type(e)},
        isWindow: function (e) {return null != e && e === e.window},
        isNumeric: function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e)) && (!(t = ne(e)) || "function" == typeof (n = ce.call(t, "constructor") && t.constructor) && de.call(n) === ue)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e},
        globalEval: function (e) {n(e)},
        camelCase: function (e) {return e.replace(me, "ms-").replace(ve, ge)},
        each: function (e, t) {
            var n, o = 0;
            if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function (e) {return null == e ? "" : (e + "").replace(fe, "")},
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
        },
        inArray: function (e, t, n) {return null == t ? -1 : se.call(t, e, n)},
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var o, r, s = 0, a = [];
            if (i(e)) for (o = e.length; s < o; s++) null != (r = t(e[s], s, n)) && a.push(r); else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), o = function () {return e.apply(t || this, i.concat(ie.call(arguments)))}, o.guid = e.guid = e.guid || he.guid++, o
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {ae["[object " + t + "]"] = t.toLowerCase()});
    var ye = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, d, p, h = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : H) !== D && O(t), t = t || D, M)) {
                if (11 !== f && (l = me.exec(e))) if (o = l[1]) {
                    if (9 === f) {
                        if (!(s = t.getElementById(o))) return n;
                        if (s.id === o) return n.push(s), n
                    } else if (h && (s = h.getElementById(o)) && z(t, s) && s.id === o) return n.push(s), n
                } else {
                    if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                }
                if (w.qsa && !W[e + " "] && (!I || !I.test(e))) {
                    if (1 !== f) h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = q), r = (d = T(e)).length; r--;) d[r] = "#" + a + " " + u(d[r]);
                        p = d.join(","), h = ve.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {
                    } finally {
                        a === q && t.removeAttribute("id")
                    }
                }
            }
            return _(e.replace(re, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i}

            var t = [];
            return e
        }

        function i(e) {return e[q] = !0, e}

        function o(e) {
            var t = D.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t}

        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {return function (t) {return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e}}

        function l(e) {return i(function (t) {return t = +t, i(function (n, i) {for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))})})}

        function c(e) {return e && void 0 !== e.getElementsByTagName && e}

        function d() {}

        function u(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function (t, n, l) {
                var c, d, u, p = [N, a];
                if (l) {
                    for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || s) if (u = t[q] || (t[q] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = d[r]) && c[0] === N && c[1] === a) return p[2] = c[2];
                    if (d[r] = p, p[2] = e(t, n, l)) return !0
                }
                return !1
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function f(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function m(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[q] && (o = v(o)), r && !r[q] && (r = v(r, s)), i(function (i, s, a, l) {
                var c, d, u, p = [], h = [], v = s.length, g = i || f(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? g : m(g, p, e, a, l), b = n ? r || (i ? e : v || o) ? [] : s : y;
                if (n && n(y, b, a, l), o) for (c = m(b, h), o(c, [], a, l), d = c.length; d--;) (u = c[d]) && (b[h[d]] = !(y[h[d]] = u));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = b.length; d--;) (u = b[d]) && c.push(y[d] = u);
                            r(null, b = [], c, l)
                        }
                        for (d = b.length; d--;) (u = b[d]) && (c = r ? J(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u))
                    }
                } else b = m(b === s ? b.splice(v, b.length) : b), r ? r(null, s, b, l) : Q.apply(s, b)
            })
        }

        function g(e) {
            for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = p(function (e) {return e === t}, s, !0), c = p(function (e) {return J(t, e) > -1}, s, !0), d = [function (e, n, i) {
                var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o
            }]; a < o; a++) if (n = x.relative[e[a].type]) d = [p(h(d), n)]; else {
                if ((n = x.filter[e[a].type].apply(null, e[a].matches))[q]) {
                    for (i = ++a; i < o && !x.relative[e[i].type]; i++) ;
                    return v(a > 1 && h(d), a > 1 && u(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(re, "$1"), n, a < i && g(e.slice(a, i)), i < o && g(e = e.slice(i)), i < o && u(e))
                }
                d.push(n)
            }
            return h(d)
        }

        function y(e, n) {
            var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, c) {
                var d, u, p, h = 0, f = "0", v = i && [], g = [], y = $, b = i || r && x.find.TAG("*", c),
                    w = N += null == y ? 1 : Math.random() || .1, C = b.length;
                for (c && ($ = s === D || s || c); f !== C && null != (d = b[f]); f++) {
                    if (r && d) {
                        for (u = 0, s || d.ownerDocument === D || (O(d), a = !M); p = e[u++];) if (p(d, s || D, a)) {
                            l.push(d);
                            break
                        }
                        c && (N = w)
                    }
                    o && ((d = !p && d) && h--, i && v.push(d))
                }
                if (h += f, o && f !== h) {
                    for (u = 0; p = n[u++];) p(v, g, s, a);
                    if (i) {
                        if (h > 0) for (; f--;) v[f] || g[f] || (g[f] = G.call(l));
                        g = m(g)
                    }
                    Q.apply(l, g), c && !i && g.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                }
                return c && (N = w, $ = y), v
            };
            return o ? i(s) : s
        }

        var b, w, x, C, S, T, k, _, $, A, E, O, D, L, M, I, j, P, z, q = "sizzle" + 1 * new Date, H = e.document, N = 0,
            B = 0, R = n(), F = n(), W = n(), U = function (e, t) {return e === t && (E = !0), 0},
            V = {}.hasOwnProperty, X = [], G = X.pop, Y = X.push, Q = X.push, K = X.slice, J = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(ie),
            de = new RegExp("^" + te + "$"), ue = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/,
            ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            we = function (e, t) {return t ? "\0" === e ? "Ð¿Ñ—Ð…" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e},
            xe = function () {O()}, Ce = p(function (e) {return !0 === e.disabled && ("form" in e || "label" in e)}, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(X = K.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: X.length ? function (e, t) {Y.apply(e, K.call(t))} : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, S = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, O = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : H;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, L = D.documentElement, M = !S(D), H !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = o(function (e) {return e.className = "i", !e.getAttribute("className")}), w.getElementsByTagName = o(function (e) {return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length}), w.getElementsByClassName = fe.test(D.getElementsByClassName), w.getById = o(function (e) {return L.appendChild(e).id = q, !D.getElementsByName || !D.getElementsByName(q).length}), w.getById ? (x.filter.ID = function (e) {
                var t = e.replace(ge, ye);
                return function (e) {return e.getAttribute("id") === t}
            }, x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (x.filter.ID = function (e) {
                var t = e.replace(ge, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                    }
                    return []
                }
            }), x.find.TAG = w.getElementsByTagName ? function (e, t) {return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0} : function (e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, x.find.CLASS = w.getElementsByClassName && function (e, t) {if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)}, j = [], I = [], (w.qsa = fe.test(D.querySelectorAll)) && (o(function (e) {L.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + q + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || I.push(".#.+[+~]")}), o(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
            })), (w.matchesSelector = fe.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (e) {w.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), j.push("!=", ie)}), I = I.length && new RegExp(I.join("|")), j = j.length && new RegExp(j.join("|")), t = fe.test(L.compareDocumentPosition), z = t || fe.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t) return E = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === H && z(H, e) ? -1 : t === D || t.ownerDocument === H && z(H, t) ? 1 : A ? J(A, e) - J(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return E = !0, 0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
                if (!o || !r) return e === D ? -1 : t === D ? 1 : o ? -1 : r ? 1 : A ? J(A, e) - J(A, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === H ? -1 : l[i] === H ? 1 : 0
            }, D) : D
        }, t.matches = function (e, n) {return t(e, null, null, n)}, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== D && O(e), n = n.replace(le, "='$1']"), w.matchesSelector && M && !W[n + " "] && (!j || !j.test(n)) && (!I || !I.test(n))) try {
                var i = P.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return t(n, D, null, [e]).length > 0
        }, t.contains = function (e, t) {return (e.ownerDocument || e) !== D && O(e), z(e, t)}, t.attr = function (e, t) {
            (e.ownerDocument || e) !== D && O(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : w.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function (e) {return (e + "").replace(be, we)}, t.error = function (e) {throw new Error("Syntax error, unrecognized expression: " + e)}, t.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (E = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), E) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, C = t.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += C(t);
            return n
        }, (x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {return e[1] = e[1].replace(ge, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)},
                CHILD: function (e) {return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e},
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ge, ye).toLowerCase();
                    return "*" === e ? function () {return !0} : function (e) {return e.nodeName && e.nodeName.toLowerCase() === t}
                },
                CLASS: function (e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function (e) {return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")})
                },
                ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {return !!e.parentNode} : function (t, n, l) {
                        var c, d, u, p, h, f, m = r !== s ? "nextSibling" : "previousSibling", v = t.parentNode,
                            g = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (v) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];) if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? v.firstChild : v.lastChild], s && y) {
                                for (b = (h = (c = (d = (u = (p = v)[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === N && c[1]) && c[2], p = h && v.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();) if (1 === p.nodeType && ++b && p === t) {
                                    d[e] = [N, h, b];
                                    break
                                }
                            } else if (y && (b = h = (c = (d = (u = (p = t)[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === N && c[1]), !1 === b) for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [N, b]), p !== t));) ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[q] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {for (var i, o = r(e, n), s = o.length; s--;) e[i = J(e, o[s])] = !(t[i] = o[s])}) : function (e) {return r(e, 0, o)}) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], o = k(e.replace(re, "$1"));
                    return o[q] ? i(function (e, t, n, i) {for (var r, s = o(e, null, i, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r))}) : function (e, i, r) {return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()}
                }),
                has: i(function (e) {return function (n) {return t(e, n).length > 0}}),
                contains: i(function (e) {return e = e.replace(ge, ye), function (t) {return (t.textContent || t.innerText || C(t)).indexOf(e) > -1}}),
                lang: i(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ye).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {return e === L},
                focus: function (e) {return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)},
                enabled: a(!1),
                disabled: a(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected},
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {return !x.pseudos.empty(e)},
                header: function (e) {return he.test(e.nodeName)},
                input: function (e) {return pe.test(e.nodeName)},
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function () {return [0]}),
                last: l(function (e, t) {return [t - 1]}),
                eq: l(function (e, t, n) {return [n < 0 ? n + t : n]}),
                even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[b] = function (e) {return function (t) {return "input" === t.nodeName.toLowerCase() && t.type === e}}(b);
        for (b in {
            submit: !0,
            reset: !0
        }) x.pseudos[b] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d, T = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, c, d = F[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (a = e, l = [], c = x.preFilter; a;) {
                i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(re, " ")
                }), a = a.slice(i.length));
                for (s in x.filter) !(o = ue[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : F(e, l).slice(0)
        }, k = t.compile = function (e, t) {
            var n, i = [], o = [], r = W[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--;) (r = g(t[n]))[q] ? i.push(r) : o.push(r);
                (r = W(e, y(o, i))).selector = e
            }
            return r
        }, _ = t.select = function (e, t, n, i) {
            var o, r, s, a, l, d = "function" == typeof e && e, p = !i && T(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((r = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && M && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(ge, ye), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = ue.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);) if ((l = x.find[a]) && (i = l(s.matches[0].replace(ge, ye), ve.test(r[0].type) && c(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = i.length && u(r))) return Q.apply(n, i), n;
                    break
                }
            }
            return (d || k(e, p))(i, t, !M, n, !t || ve.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = q.split("").sort(U).join("") === q, w.detectDuplicates = !!E, O(), w.sortDetached = o(function (e) {return 1 & e.compareDocumentPosition(D.createElement("fieldset"))}), o(function (e) {return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")}) || r("type|href|height|width", function (e, t, n) {if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)}), w.attributes && o(function (e) {return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")}) || r("value", function (e, t, n) {if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue}), o(function (e) {return null == e.getAttribute("disabled")}) || r(Z, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    he.find = ye, he.expr = ye.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ye.uniqueSort, he.text = ye.getText, he.isXMLDoc = ye.isXML, he.contains = ye.contains, he.escapeSelector = ye.escape;
    var be = function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (o && he(e).is(n)) break;
                i.push(e)
            }
            return i
        }, we = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, xe = he.expr.match.needsContext, Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {return 1 === e.nodeType}))
    }, he.fn.extend({
        find: function (e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {for (t = 0; t < i; t++) if (he.contains(o[t], this)) return !0}));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, o[t], n);
            return i > 1 ? he.uniqueSort(n) : n
        },
        filter: function (e) {return this.pushStack(r(this, e || [], !1))},
        not: function (e) {return this.pushStack(r(this, e || [], !0))},
        is: function (e) {return !!r(this, "string" == typeof e && xe.test(e) ? he(e) : e || [], !1).length}
    });
    var Te, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || Te, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(i[1]) && he.isPlainObject(t)) for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = te.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, Te = he(te);
    var _e = /^(?:parents|prev(?:Until|All))/, $e = {children: !0, contents: !0, next: !0, prev: !0};
    he.fn.extend({
        has: function (e) {
            var t = he(e, this), n = t.length;
            return this.filter(function () {for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0})
        },
        closest: function (e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && he(e);
            if (!xe.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
        },
        index: function (e) {return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1},
        add: function (e, t) {return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))},
        addBack: function (e) {return this.add(null == e ? this.prevObject : this.prevObject.filter(e))}
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {return be(e, "parentNode")},
        parentsUntil: function (e, t, n) {return be(e, "parentNode", n)},
        next: function (e) {return s(e, "nextSibling")},
        prev: function (e) {return s(e, "previousSibling")},
        nextAll: function (e) {return be(e, "nextSibling")},
        prevAll: function (e) {return be(e, "previousSibling")},
        nextUntil: function (e, t, n) {return be(e, "nextSibling", n)},
        prevUntil: function (e, t, n) {return be(e, "previousSibling", n)},
        siblings: function (e) {return we((e.parentNode || {}).firstChild, e)},
        children: function (e) {return we(e.firstChild)},
        contents: function (e) {return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), he.merge([], e.childNodes))}
    }, function (e, t) {
        he.fn[e] = function (n, i) {
            var o = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && ($e[e] || he.uniqueSort(o), _e.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var Ae = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : he.extend({}, e);
        var t, n, i, o, r = [], s = [], l = -1, c = function () {
            for (o = o || e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
            e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
        }, d = {
            add: function () {return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {he.each(n, function (n, i) {he.isFunction(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && "string" !== he.type(i) && t(i)})}(arguments), n && !t && c()), this},
            remove: function () {return he.each(arguments, function (e, t) {for (var n; (n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--}), this},
            has: function (e) {return e ? he.inArray(e, r) > -1 : r.length > 0},
            empty: function () {return r && (r = []), this},
            disable: function () {return o = s = [], r = n = "", this},
            disabled: function () {return !r},
            lock: function () {return o = s = [], n || t || (r = n = ""), this},
            locked: function () {return !!o},
            fireWith: function (e, n) {return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || c()), this},
            fire: function () {return d.fireWith(this, arguments), this},
            fired: function () {return !!i}
        };
        return d
    }, he.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", o = {
                    state: function () {return i},
                    always: function () {return r.done(arguments).fail(arguments), this},
                    catch: function (e) {return o.then(null, e)},
                    pipe: function () {
                        var e = arguments;
                        return he.Deferred(function (t) {
                            he.each(n, function (n, i) {
                                var o = he.isFunction(e[i[4]]) && e[i[4]];
                                r[i[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, i, o) {
                        function r(t, n, i, o) {
                            return function () {
                                var a = this, d = arguments, u = function () {
                                    var e, u;
                                    if (!(t < s)) {
                                        if ((e = i.apply(a, d)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        u = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(u) ? o ? u.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, u.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, d = [e]), (o || n.resolveWith)(a, d))
                                    }
                                }, p = o ? u : function () {
                                    try {
                                        u()
                                    } catch (e) {
                                        he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, d = [e]), n.rejectWith(a, d))
                                    }
                                };
                                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }

                        var s = 0;
                        return he.Deferred(function (e) {n[0][3].add(r(0, e, he.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : l)), n[2][3].add(r(0, e, he.isFunction(i) ? i : c))}).promise()
                    },
                    promise: function (e) {return null != e ? he.extend(e, o) : o}
                }, r = {};
            return he.each(n, function (e, t) {
                var s = t[2], a = t[5];
                o[t[1]] = s.add, a && s.add(function () {i = a}, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function () {return r[t[0] + "With"](this === r ? void 0 : this, arguments), this}, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function (e) {
            var t = arguments.length, n = t, i = Array(n), o = ie.call(arguments), r = he.Deferred(),
                s = function (e) {return function (n) {i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o)}};
            if (t <= 1 && (d(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || he.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) d(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var Ee = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function (t, n) {e.console && e.console.warn && t && Ee.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)}, he.readyException = function (t) {e.setTimeout(function () {throw t})};
    var Oe = he.Deferred();
    he.fn.ready = function (e) {return Oe.then(e).catch(function (e) {he.readyException(e)}), this}, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {(!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Oe.resolveWith(te, [he]))}
    }), he.ready.then = Oe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
    var De = function (e, t, n, i, o, r, s) {
        var a = 0, l = e.length, c = null == n;
        if ("object" === he.type(n)) {
            o = !0;
            for (a in n) De(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, he.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {return c.call(he(e), n)})), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }, Le = function (e) {return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType};
    p.uid = 1, p.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[he.camelCase(t)] = n; else for (i in t) o[he.camelCase(i)] = t[i];
            return o
        },
        get: function (e, t) {return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]},
        access: function (e, t, n) {return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)},
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(he.camelCase) : (t = he.camelCase(t)) in i ? [t] : t.match(Ae) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Me = new p, Ie = new p, je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pe = /[A-Z]/g;
    he.extend({
        hasData: function (e) {return Ie.hasData(e) || Me.hasData(e)},
        data: function (e, t, n) {return Ie.access(e, t, n)},
        removeData: function (e, t) {Ie.remove(e, t)},
        _data: function (e, t, n) {return Me.access(e, t, n)},
        _removeData: function (e, t) {Me.remove(e, t)}
    }), he.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ie.get(r), 1 === r.nodeType && !Me.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = he.camelCase(i.slice(5)), f(r, i, o[i]));
                    Me.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {Ie.set(this, e)}) : De(this, function (t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Ie.get(r, e))) return n;
                    if (void 0 !== (n = f(r, e))) return n
                } else this.each(function () {Ie.set(this, e, t)})
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {return this.each(function () {Ie.remove(this, e)})}
    }), he.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Me.get(e, t), n && (!i || Array.isArray(n) ? i = Me.access(e, t, he.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t), i = n.length, o = n.shift(), r = he._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {he.dequeue(e, t)}, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Me.get(e, n) || Me.access(e, n, {empty: he.Callbacks("once memory").add(function () {Me.remove(e, [t + "queue", n])})})
        }
    }), he.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function (e) {return this.each(function () {he.dequeue(this, e)})},
        clearQueue: function (e) {return this.queue(e || "fx", [])},
        promise: function (e, t) {
            var n, i = 1, o = he.Deferred(), r = this, s = this.length, a = function () {--i || o.resolveWith(r, [r])};
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = Me.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qe = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
        He = ["Top", "Right", "Bottom", "Left"],
        Ne = function (e, t) {return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")},
        Be = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        }, Re = {};
    he.fn.extend({
        show: function () {return g(this, !0)},
        hide: function () {return g(this)},
        toggle: function (e) {return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {Ne(this) ? he(this).show() : he(this).hide()})}
    });
    var Fe = /^(?:checkbox|radio)$/i, We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ue = /^$|\/(?:java|ecma)script/i, Ve = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Xe = /<|&#?\w+;/;
    !function () {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")), t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ge = te.documentElement, Ye = /^key/, Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, h, f, m, v = Me.get(e);
            if (v) for (n.handler && (n = (r = n).handler, o = r.selector), o && he.find.matchesSelector(Ge, o), n.guid || (n.guid = he.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0}), c = (t = (t || "").match(Ae) || [""]).length; c--;) h = m = (a = Ke.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h && (u = he.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = he.event.special[h] || {}, d = he.extend({
                type: h,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && he.expr.match.needsContext.test(o),
                namespace: f.join(".")
            }, r), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), he.event.global[h] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, h, f, m, v = Me.hasData(e) && Me.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(Ae) || [""]).length; c--;) if (a = Ke.exec(t[c]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                    for (u = he.event.special[h] || {}, p = l[h = (i ? u.delegateType : u.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && m !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                    s && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, v.handle) || he.removeEvent(e, h, v.handle), delete l[h])
                } else for (h in l) he.event.remove(e, h + t[c], n, i, !0);
                he.isEmptyObject(l) && Me.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, o, r, s, a = he.event.fix(e), l = new Array(arguments.length),
                c = (Me.get(this, "events") || {})[a.type] || [], d = he.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                for (s = he.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length), s[o] && r.push(i);
                r.length && a.push({elem: c, handlers: r})
            }
            return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
        },
        addProp: function (e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function () {if (this.originalEvent) return t(this.originalEvent)} : function () {if (this.originalEvent) return this.originalEvent[e]},
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {return e[he.expando] ? e : new he.Event(e)},
        special: {
            load: {noBubble: !0},
            focus: {
                trigger: function () {if (this !== S() && this.focus) return this.focus(), !1},
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {if (this === S() && this.blur) return this.blur(), !1},
                delegateType: "focusout"
            },
            click: {
                trigger: function () {if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1},
                _default: function (e) {return o(e.target, "a")}
            },
            beforeunload: {postDispatch: function (e) {void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)}}
        }
    }, he.removeEvent = function (e, t, n) {e.removeEventListener && e.removeEventListener(t, n)}, he.Event = function (e, t) {
        if (!(this instanceof he.Event)) return new he.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, i) {return T(this, e, t, n, i)},
        one: function (e, t, n, i) {return T(this, e, t, n, i, 1)},
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), this.each(function () {he.event.remove(this, e, n, t)})
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ze = /<script|<style|<link/i, et = /checked\s*(?:[^=]|=\s*.checked.)/i, tt = /^true\/(.*)/,
        nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {return e.replace(Je, "<$1></$2>")},
        clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e))) for (s = y(a), i = 0, o = (r = y(e)).length; i < o; i++) E(r[i], s[i]);
            if (t) if (n) for (r = r || y(e), s = s || y(a), i = 0, o = r.length; i < o; i++) A(r[i], s[i]); else A(e, a);
            return (s = y(a, "script")).length > 0 && b(s, !l && y(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Le(n)) {
                if (t = n[Me.expando]) {
                    if (t.events) for (i in t.events) o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                    n[Me.expando] = void 0
                }
                n[Ie.expando] && (n[Ie.expando] = void 0)
            }
        }
    }), he.fn.extend({
        detach: function (e) {return D(this, e, !0)},
        remove: function (e) {return D(this, e)},
        text: function (e) {return De(this, function (e) {return void 0 === e ? he.text(this) : this.empty().each(function () {1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)})}, null, e, arguments.length)},
        append: function () {return O(this, arguments, function (e) {1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)})},
        prepend: function () {
            return O(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {return O(this, arguments, function (e) {this.parentNode && this.parentNode.insertBefore(e, this)})},
        after: function () {return O(this, arguments, function (e) {this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)})},
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {return e = null != e && e, t = null == t ? e : t, this.map(function () {return he.clone(this, e, t)})},
        html: function (e) {
            return De(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Ve[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return O(this, arguments, function (t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        he.fn[e] = function (e) {
            for (var n, i = [], o = he(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), he(o[s])[t](n), re.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var it = /^margin/, ot = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"), rt = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ge.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ge.removeChild(s), a = null
            }
        }

        var n, i, o, r, s = te.createElement("div"), a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(pe, {
            pixelPosition: function () {return t(), n},
            boxSizingReliable: function () {return t(), i},
            pixelMarginRight: function () {return t(), o},
            reliableMarginLeft: function () {return t(), r}
        }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/, at = /^--/,
        lt = {position: "absolute", visibility: "hidden", display: "block"},
        ct = {letterSpacing: "0", fontWeight: "400"}, dt = ["Webkit", "Moz", "ms"], ut = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = he.camelCase(t), l = at.test(t), c = e.style;
                if (l || (t = j(a)), s = he.cssHooks[t] || he.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = qe.exec(n)) && o[1] && (n = m(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (he.cssNumber[a] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = he.camelCase(t);
            return at.test(t) || (t = j(a)), (s = he.cssHooks[t] || he.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = L(e, t, i)), "normal" === o && t in ct && (o = ct[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), he.each(["height", "width"], function (e, t) {
        he.cssHooks[t] = {
            get: function (e, n, i) {if (n) return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, i) : Be(e, lt, function () {return q(e, t, i)})},
            set: function (e, n, i) {
                var o, r = i && rt(e), s = i && z(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
                return s && (o = qe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), P(0, n, s)
            }
        }
    }), he.cssHooks.marginLeft = M(pe.reliableMarginLeft, function (e, t) {if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {marginLeft: 0}, function () {return e.getBoundingClientRect().left})) + "px"}), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        he.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + He[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, it.test(e) || (he.cssHooks[e + t].set = P)
    }), he.fn.extend({
        css: function (e, t) {
            return De(this, function (e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = rt(e), o = t.length; s < o; s++) r[t[s]] = he.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = H, H.prototype = {
        constructor: H,
        init: function (e, t, n, i, o, r) {this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")},
        cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)}
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {set: function (e) {e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)}}, he.easing = {
        linear: function (e) {return e},
        swing: function (e) {return .5 - Math.cos(e * Math.PI) / 2},
        _default: "swing"
    }, he.fx = H.prototype.init, he.fx.step = {};
    var pt, ht, ft = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
    he.Animation = he.extend(U, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, qe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, o, r, s, a, l, c, d, u = "width" in t || "height" in t, p = this, h = {}, f = e.style,
                m = e.nodeType && Ne(e), v = Me.get(e, "fxshow");
            n.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {s.unqueued || a()}), s.unqueued++, p.always(function () {p.always(function () {s.unqueued--, he.queue(e, "fx").length || s.empty.fire()})}));
            for (i in t) if (o = t[i], ft.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i]) continue;
                    m = !0
                }
                h[i] = v && v[i] || he.style(e, i)
            }
            if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(h)) {
                u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = Me.get(e, "display")), "none" === (d = he.css(e, "display")) && (c ? d = c : (g([e], !0), c = e.style.display || c, d = he.css(e, "display"), g([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === he.css(e, "float") && (l || (p.done(function () {f.display = c}), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]})), l = !1;
                for (i in h) l || (v ? "hidden" in v && (m = v.hidden) : v = Me.access(e, "fxshow", {display: c}), r && (v.hidden = !m), m && g([e], !0), p.done(function () {
                    m || g([e]), Me.remove(e, "fxshow");
                    for (i in h) he.style(e, i, h[i])
                })), l = F(m ? v[i] : 0, i, p), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }], prefilter: function (e, t) {t ? U.prefilters.unshift(e) : U.prefilters.push(e)}
    }), he.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)}, i
    }, he.fn.extend({
        fadeTo: function (e, t, n, i) {return this.filter(Ne).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)},
        animate: function (e, t, n, i) {
            var o = he.isEmptyObject(e), r = he.speed(t, n, i), s = function () {
                var t = U(this, he.extend({}, e), r);
                (o || Me.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, o = null != e && e + "queueHooks", r = he.timers, s = Me.get(this);
                if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && mt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || he.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Me.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = he.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function (e, t) {
        var n = he.fn[t];
        he.fn[t] = function (e, i, o) {return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, o)}
    }), he.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {he.fn[e] = function (e, n, i) {return this.animate(t, e, n, i)}}), he.timers = [], he.fx.tick = function () {
        var e, t = 0, n = he.timers;
        for (pt = he.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), pt = void 0
    }, he.fx.timer = function (e) {he.timers.push(e), he.fx.start()}, he.fx.interval = 13, he.fx.start = function () {ht || (ht = !0, N())}, he.fx.stop = function () {ht = null}, he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, he.fn.delay = function (t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {e.clearTimeout(o)}
        })
    }, function () {
        var e = te.createElement("input"), t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
    }();
    var vt, gt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {return De(this, he.attr, e, t, arguments.length > 1)},
        removeAttr: function (e) {return this.each(function () {he.removeAttr(this, e)})}
    }), he.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = he.find.attr(e, t)) ? void 0 : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i = 0, o = t && t.match(Ae);
            if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
        }
    }), vt = {set: function (e, t, n) {return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n}}, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = gt[t] || he.find.attr;
        gt[t] = function (e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = gt[s], gt[s] = o, o = null != n(e, t, i) ? s : null, gt[s] = r), o
        }
    });
    var yt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {return De(this, he.prop, e, t, arguments.length > 1)},
        removeProp: function (e) {return this.each(function () {delete this[he.propFix[e] || e]})}
    }), he.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), pe.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {he.propFix[this.toLowerCase()] = this}), he.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {he(this).addClass(e.call(this, t, X(this)))});
            if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[l++];) if (o = X(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = V(i)) && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {he(this).removeClass(e.call(this, t, X(this)))});
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Ae) || []; n = this[l++];) if (o = X(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                o !== (a = V(i)) && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {he(this).toggleClass(e.call(this, n, X(this), t), t)}) : this.each(function () {
                var t, i, o, r;
                if ("string" === n) for (i = 0, o = he(this), r = e.match(Ae) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = X(this)) && Me.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Me.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + V(X(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            {
                if (arguments.length) return i = he.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, he(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = he.map(o, function (e) {return null == e ? "" : e + ""})), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(wt, "") : null == n ? "" : n
            }
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : V(he.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, r = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
                        c = a ? s + 1 : r.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++) if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                        if (t = he(n).val(), a) return t;
                        l.push(t)
                    }
                    return l
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = he.makeArray(t), s = o.length; s--;) ((i = o[s]).selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {he.valHooks[this] = {set: function (e, t) {if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1}}, pe.checkOn || (he.valHooks[this].get = function (e) {return null === e.getAttribute("value") ? "on" : e.value})});
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function (t, n, i, o) {
            var r, s, a, l, c, d, u, p = [i || te], h = ce.call(t, "type") ? t.type : t,
                f = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(h + he.event.triggered) && (h.indexOf(".") > -1 && (h = (f = h.split(".")).shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[he.expando] ? t : new he.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), u = he.event.special[h] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!o && !u.noBubble && !he.isWindow(i)) {
                    for (l = u.delegateType || h, xt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || te) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || h, (d = (Me.get(s, "events") || {})[t.type] && Me.get(s, "handle")) && d.apply(s, n), (d = c && s[c]) && d.apply && Le(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), n) || !Le(i) || c && he.isFunction(i[h]) && !he.isWindow(i) && ((a = i[c]) && (i[c] = null), he.event.triggered = h, i[h](), he.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = he.extend(new he.Event, n, {type: e, isSimulated: !0});
            he.event.trigger(i, null, t)
        }
    }), he.fn.extend({
        trigger: function (e, t) {return this.each(function () {he.event.trigger(e, t, this)})},
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {he.fn[t] = function (e, n) {return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)}}), he.fn.extend({hover: function (e, t) {return this.mouseenter(e).mouseleave(t || e)}}), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {he.event.simulate(t, e.target, he.event.fix(e))};
        he.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, o = Me.access(i, t);
                o || i.addEventListener(e, n, !0), Me.access(i, t, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = Me.access(i, t) - 1;
                o ? Me.access(i, t, o) : (i.removeEventListener(e, n, !0), Me.remove(i, t))
            }
        }
    });
    var Ct = e.location, St = he.now(), Tt = /\?/;
    he.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var kt = /\[\]$/, _t = /\r?\n/g, $t = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, i = [], o = function (e, t) {
            var n = he.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {o(this.name, this.value)}); else for (n in e) G(n, e[n], t, o);
        return i.join("&")
    }, he.fn.extend({
        serialize: function () {return he.param(this.serializeArray())},
        serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && At.test(this.nodeName) && !$t.test(e) && (this.checked || !Fe.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(_t, "\r\n")
                    }
                }) : {name: t.name, value: n.replace(_t, "\r\n")}
            }).get()
        }
    });
    var Et = /%20/g, Ot = /#.*$/, Dt = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Mt = /^(?:GET|HEAD)$/,
        It = /^\/\//, jt = {}, Pt = {}, zt = "*/".concat("*"), qt = te.createElement("a");
    qt.href = Ct.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {return t ? K(K(e, he.ajaxSettings), t) : K(he.ajaxSettings, e)},
        ajaxPrefilter: Y(jt),
        ajaxTransport: Y(Pt),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var c, p, h, w, x, C = n;
                d || (d = !0, l && e.clearTimeout(l), o = void 0, s = a || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = J(f, S, i)), w = Z(f, w, S, c), c ? (f.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (he.lastModified[r] = x), (x = S.getResponseHeader("etag")) && (he.etag[r] = x)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, p = w.data, c = !(h = w.error))) : (h = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", c ? g.resolveWith(m, [p, C, S]) : g.rejectWith(m, [S, C, h]), S.statusCode(b), b = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, f, c ? p : h]), y.fireWith(m, [S, C]), u && (v.trigger("ajaxComplete", [S, f]), --he.active || he.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, d, u, p, h, f = he.ajaxSetup({}, n), m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? he(m) : he.event, g = he.Deferred(),
                y = he.Callbacks("once memory"), b = f.statusCode || {}, w = {}, x = {}, C = "canceled", S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (d) {
                            if (!a) for (a = {}; t = Lt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {return d ? s : null},
                    setRequestHeader: function (e, t) {return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this},
                    overrideMimeType: function (e) {return null == d && (f.mimeType = e), this},
                    statusCode: function (e) {
                        var t;
                        if (e) if (d) S.always(e[S.status]); else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (g.promise(S), f.url = ((t || f.url || Ct.href) + "").replace(It, Ct.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ae) || [""], null == f.crossDomain) {
                c = te.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = qt.protocol + "//" + qt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = he.param(f.data, f.traditional)), Q(jt, f, n, S), d) return S;
            (u = he.event && f.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), r = f.url.replace(Ot, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Et, "+")) : (h = f.url.slice(r.length), f.data && (r += (Tt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Dt, "$1"), h = (Tt.test(r) ? "&" : "?") + "_=" + St++ + h), f.url = r + h), f.ifModified && (he.lastModified[r] && S.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && S.setRequestHeader("If-None-Match", he.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers) S.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, S, f) || d)) return S.abort();
            if (C = "abort", y.add(f.complete), S.done(f.success), S.fail(f.error), o = Q(Pt, f, n, S)) {
                if (S.readyState = 1, u && v.trigger("ajaxSend", [S, f]), d) return S;
                f.async && f.timeout > 0 && (l = e.setTimeout(function () {S.abort("timeout")}, f.timeout));
                try {
                    d = !1, o.send(w, i)
                } catch (e) {
                    if (d) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return S
        },
        getJSON: function (e, t, n) {return he.get(e, t, n, "json")},
        getScript: function (e, t) {return he.get(e, void 0, t, "script")}
    }), he.each(["get", "post"], function (e, t) {
        he[t] = function (e, n, i, o) {
            return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, he.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return he.isFunction(e) ? this.each(function (t) {he(this).wrapInner(e.call(this, t))}) : this.each(function () {
                var t = he(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = he.isFunction(e);
            return this.each(function (n) {he(this).wrapAll(t ? e.call(this, n) : e)})
        },
        unwrap: function (e) {return this.parent(e).not("body").each(function () {he(this).replaceWith(this.childNodes)}), this}
    }), he.expr.pseudos.hidden = function (e) {return !he.expr.pseudos.visible(e)}, he.expr.pseudos.visible = function (e) {return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)}, he.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Ht = {0: 200, 1223: 204}, Nt = he.ajaxSettings.xhr();
    pe.cors = !!Nt && "withCredentials" in Nt, pe.ajax = Nt = !!Nt, he.ajaxTransport(function (t) {
        var n, i;
        if (pe.cors || Nt && !t.crossDomain) return {
            send: function (o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function (e) {return function () {n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ht[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))}}, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {4 === a.readyState && e.setTimeout(function () {n && i()})}, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            }, abort: function () {n && n()}
        }
    }), he.ajaxPrefilter(function (e) {e.crossDomain && (e.contents.script = !1)}), he.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {"text script": function (e) {return he.globalEval(e), e}}
    }), he.ajaxPrefilter("script", function (e) {void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")}), he.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)}), te.head.appendChild(t[0])
                }, abort: function () {n && n()}
            }
        }
    });
    var Bt = [], Rt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Bt.pop() || he.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s,
            a = !1 !== t.jsonp && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Rt, "$1" + o) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {return s || he.error(o + " was not called"), s[0]}, t.dataTypes[0] = "json", r = e[o], e[o] = function () {s = arguments}, i.always(function () {void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), s && he.isFunction(r) && r(s[0]), s = r = void 0}), "script"
    }), pe.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (pe.createHTMLDocument ? ((i = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href, t.head.appendChild(i)) : t = te), o = Ce.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = w([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
    }, he.fn.load = function (e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return a > -1 && (i = V(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && he.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {r = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)}).always(n && function (e, t) {s.each(function () {n.apply(this, r || [e.responseText, t, e])})}), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {he.fn[t] = function (e) {return this.on(t, e)}}), he.expr.pseudos.animated = function (e) {return he.grep(he.timers, function (t) {return e === t.elem}).length}, he.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c = he.css(e, "position"), d = he(e), u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), r = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, he.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {he.offset.setOffset(this, e, t)});
            var t, n, i, o, r = this[0];
            if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {top: 0, left: 0}
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + he.css(e[0], "borderTopWidth", !0),
                    left: i.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - he.css(n, "marginTop", !0),
                    left: t.left - i.left - he.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || Ge
            })
        }
    }), he.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function (i) {
            return De(this, function (e, i, o) {
                var r;
                if (he.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }), he.each(["top", "left"], function (e, t) {he.cssHooks[t] = M(pe.pixelPosition, function (e, n) {if (n) return n = L(e, t), ot.test(n) ? he(e).position()[t] + "px" : n})}), he.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            he.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return De(this, function (t, n, o) {
                    var r;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, a) : he.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {return this.on(e, null, t, n)},
        unbind: function (e, t) {return this.off(e, null, t)},
        delegate: function (e, t, n, i) {return this.on(t, e, n, i)},
        undelegate: function (e, t, n) {return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)}
    }), he.holdReady = function (e) {e ? he.readyWait++ : he.ready(!0)}, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function () {return he});
    var Ft = e.jQuery, Wt = e.$;
    return he.noConflict = function (t) {return e.$ === he && (e.$ = Wt), t && e.jQuery === he && (e.jQuery = Ft), he}, t || (e.jQuery = e.$ = he), he
}), function (e, t, n, i) {
    "use strict";
    e.fn.isset = function () {
        var t = e(this);
        return void 0 !== t && t.length > 0
    }
}(jQuery, window, document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, i, o) {return jQuery.easing[jQuery.easing.def](e, t, n, i, o)},
    easeInQuad: function (e, t, n, i, o) {return i * (t /= o) * t + n},
    easeOutQuad: function (e, t, n, i, o) {return -i * (t /= o) * (t - 2) + n},
    easeInOutQuad: function (e, t, n, i, o) {return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n},
    easeInCubic: function (e, t, n, i, o) {return i * (t /= o) * t * t + n},
    easeOutCubic: function (e, t, n, i, o) {return i * ((t = t / o - 1) * t * t + 1) + n},
    easeInOutCubic: function (e, t, n, i, o) {return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n},
    easeInQuart: function (e, t, n, i, o) {return i * (t /= o) * t * t * t + n},
    easeOutQuart: function (e, t, n, i, o) {return -i * ((t = t / o - 1) * t * t * t - 1) + n},
    easeInOutQuart: function (e, t, n, i, o) {return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n},
    easeInQuint: function (e, t, n, i, o) {return i * (t /= o) * t * t * t * t + n},
    easeOutQuint: function (e, t, n, i, o) {return i * ((t = t / o - 1) * t * t * t * t + 1) + n},
    easeInOutQuint: function (e, t, n, i, o) {return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n},
    easeInSine: function (e, t, n, i, o) {return -i * Math.cos(t / o * (Math.PI / 2)) + i + n},
    easeOutSine: function (e, t, n, i, o) {return i * Math.sin(t / o * (Math.PI / 2)) + n},
    easeInOutSine: function (e, t, n, i, o) {return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n},
    easeInExpo: function (e, t, n, i, o) {return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n},
    easeOutExpo: function (e, t, n, i, o) {return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n},
    easeInOutExpo: function (e, t, n, i, o) {return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n},
    easeInCirc: function (e, t, n, i, o) {return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n},
    easeOutCirc: function (e, t, n, i, o) {return i * Math.sqrt(1 - (t = t / o - 1) * t) + n},
    easeInOutCirc: function (e, t, n, i, o) {return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n},
    easeInElastic: function (e, t, n, i, o) {
        var r = 1.70158, s = 0, a = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (s || (s = .3 * o), a < Math.abs(i)) {
            a = i;
            r = s / 4
        } else r = s / (2 * Math.PI) * Math.asin(i / a);
        return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) + n
    },
    easeOutElastic: function (e, t, n, i, o) {
        var r = 1.70158, s = 0, a = i;
        if (0 == t) return n;
        if (1 == (t /= o)) return n + i;
        if (s || (s = .3 * o), a < Math.abs(i)) {
            a = i;
            r = s / 4
        } else r = s / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / s) + i + n
    },
    easeInOutElastic: function (e, t, n, i, o) {
        var r = 1.70158, s = 0, a = i;
        if (0 == t) return n;
        if (2 == (t /= o / 2)) return n + i;
        if (s || (s = o * (.3 * 1.5)), a < Math.abs(i)) {
            a = i;
            r = s / 4
        } else r = s / (2 * Math.PI) * Math.asin(i / a);
        return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) * .5 + i + n
    },
    easeInBack: function (e, t, n, i, o, r) {return void 0 == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n},
    easeOutBack: function (e, t, n, i, o, r) {return void 0 == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n},
    easeInOutBack: function (e, t, n, i, o, r) {return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n},
    easeInBounce: function (e, t, n, i, o) {return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n},
    easeOutBounce: function (e, t, n, i, o) {return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n},
    easeInOutBounce: function (e, t, n, i, o) {return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n}
}), function (e, t) {"function" == typeof define && define.amd ? define([], function () {return e.svg4everybody = t()}) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()}(this, function () {
    function e(e, t, n) {
        if (n) {
            var i = document.createDocumentFragment(), o = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            o && t.setAttribute("viewBox", o);
            for (var r = n.cloneNode(!0); r.childNodes.length;) i.appendChild(r.firstChild);
            e.appendChild(i)
        }
    }

    function t(t) {
        t.onreadystatechange = function () {
            if (4 === t.readyState) {
                var n = t._cachedDocument;
                n || (n = t._cachedDocument = document.implementation.createHTMLDocument(""), n.body.innerHTML = t.responseText, t._cachedTarget = {}), t._embeds.splice(0).map(function (i) {
                    var o = t._cachedTarget[i.id];
                    o || (o = t._cachedTarget[i.id] = n.getElementById(i.id)), e(i.parent, i.svg, o)
                })
            }
        }, t.onreadystatechange()
    }

    function n(e) {
        for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);) ;
        return t
    }

    return function (i) {
        function o() {
            for (var i = 0; i < d.length;) {
                var a = d[i], p = a.parentNode, h = n(p), f = a.getAttribute("xlink:href") || a.getAttribute("href");
                if (!f && s.attributeName && (f = a.getAttribute(s.attributeName)), h && f) {
                    if (r) if (!s.validate || s.validate(f, h, a)) {
                        p.removeChild(a);
                        var m = f.split("#"), v = m.shift(), g = m.join("#");
                        if (v.length) {
                            var y = l[v];
                            y || ((y = l[v] = new XMLHttpRequest).open("GET", v), y.send(), y._embeds = []), y._embeds.push({
                                parent: p,
                                svg: h,
                                id: g
                            }), t(y)
                        } else e(p, h, document.getElementById(g))
                    } else ++i, ++u
                } else ++i
            }
            (!d.length || d.length - u > 0) && c(o, 67)
        }

        var r, s = Object(i), a = window.top !== window.self;
        r = "polyfill" in s ? s.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && a;
        var l = {}, c = window.requestAnimationFrame || setTimeout, d = document.getElementsByTagName("use"), u = 0;
        r && o()
    }
}), function (e) {"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)}(function (e) {
    !function (t) {
        var n = "function" == typeof define && define.amd, i = "undefined" != typeof module && module.exports,
            o = "https:" == document.location.protocol ? "https:" : "http:";
        n || (i ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + o + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), t()
    }(function () {
        var t, n = "mCustomScrollbar", i = "mCS", o = ".mCustomScrollbar", r = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {scrollType: "stepless", scrollAmount: "auto"},
                keyboard: {enable: !0, scrollType: "stepless", scrollAmount: "auto"},
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0}
            }, s = 0, a = {}, l = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = {
                init: function (t) {
                    var t = e.extend(!0, {}, r, t), n = p.call(this);
                    if (t.live) {
                        var l = t.liveSelector || this.selector || o, c = e(l);
                        if ("off" === t.live) return void f(l);
                        a[l] = setTimeout(function () {c.mCustomScrollbar(t), "once" === t.live && c.length && f(l)}, 500)
                    } else f(l);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = v(t.scrollButtons.scrollType), h(t), e(n).each(function () {
                        var n = e(this);
                        if (!n.data(i)) {
                            n.data(i, {
                                idx: ++s,
                                opt: t,
                                scrollRatio: {y: null, x: null},
                                overflowed: null,
                                contentReset: {y: null, x: null},
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: n.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {size: {o: 0, n: 0}, img: {o: 0, n: 0}, change: {o: 0, n: 0}}
                            });
                            var o = n.data(i), r = o.opt, a = n.data("mcs-axis"), l = n.data("mcs-scrollbar-position"),
                                c = n.data("mcs-theme");
                            a && (r.axis = a), l && (r.scrollbarPosition = l), c && (r.theme = c, h(r)), g.call(this), o && r.callbacks.onCreate && "function" == typeof r.callbacks.onCreate && r.callbacks.onCreate.call(this), e("#mCSB_" + o.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, n)
                        }
                    })
                }, update: function (t, n) {
                    var o = t || p.call(this);
                    return e(o).each(function () {
                        var t = e(this);
                        if (t.data(i)) {
                            var o = t.data(i), r = o.opt, s = e("#mCSB_" + o.idx + "_container"),
                                a = e("#mCSB_" + o.idx),
                                l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                            if (!s.length) return;
                            o.tweenRunning && G(t), n && o && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), a.css("max-height", "none"), a.height() !== t.height() && a.css("max-height", t.height()), b.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || s.css("width", y(s)), o.overflowed = T.call(this), A.call(this), r.autoDraggerLength && x.call(this), C.call(this), _.call(this);
                            var c = [Math.abs(s[0].offsetTop), Math.abs(s[0].offsetLeft)];
                            "x" !== r.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? k.call(this) : (Y(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), o.contentReset.y = null) : (k.call(this), "y" === r.axis ? $.call(this) : "yx" === r.axis && o.overflowed[1] && Y(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== r.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? k.call(this) : (Y(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), o.contentReset.x = null) : (k.call(this), "x" === r.axis ? $.call(this) : "yx" === r.axis && o.overflowed[0] && Y(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), n && o && (2 === n && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === n && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), V.call(this)
                        }
                    })
                }, scrollTo: function (t, n) {
                    if (void 0 !== t && null != t) {
                        var o = p.call(this);
                        return e(o).each(function () {
                            var o = e(this);
                            if (o.data(i)) {
                                var r = o.data(i), s = r.opt, a = {
                                        trigger: "external",
                                        scrollInertia: s.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    }, l = e.extend(!0, {}, a, n), c = W.call(this, t),
                                    d = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                c[0] = U.call(this, c[0], "y"), c[1] = U.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = oe() ? 0 : d, setTimeout(function () {null !== c[0] && void 0 !== c[0] && "x" !== s.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", Y(o, c[0].toString(), l)), null !== c[1] && void 0 !== c[1] && "y" !== s.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", Y(o, c[1].toString(), l))}, l.timeout)
                            }
                        })
                    }
                }, stop: function () {
                    var t = p.call(this);
                    return e(t).each(function () {
                        var t = e(this);
                        t.data(i) && G(t)
                    })
                }, disable: function (t) {
                    var n = p.call(this);
                    return e(n).each(function () {
                        var n = e(this);
                        n.data(i) && (n.data(i), V.call(this, "remove"), $.call(this), t && k.call(this), A.call(this, !0), n.addClass(d[3]))
                    })
                }, destroy: function () {
                    var t = p.call(this);
                    return e(t).each(function () {
                        var o = e(this);
                        if (o.data(i)) {
                            var r = o.data(i), s = r.opt, a = e("#mCSB_" + r.idx),
                                l = e("#mCSB_" + r.idx + "_container"), c = e(".mCSB_" + r.idx + "_scrollbar");
                            s.live && f(s.liveSelector || e(t).selector), V.call(this, "remove"), $.call(this), k.call(this), o.removeData(i), Z(this, "mcs"), c.remove(), l.find("img." + d[2]).removeClass(d[2]), a.replaceWith(l.contents()), o.removeClass(n + " _" + i + "_" + r.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                        }
                    })
                }
            }, p = function () {return "object" != typeof e(this) || e(this).length < 1 ? o : this},
            h = function (t) {t.autoDraggerLength = !(e.inArray(t.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : t.scrollbarPosition},
            f = function (e) {a[e] && (clearTimeout(a[e]), Z(a, e))},
            m = function (e) {return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"},
            v = function (e) {return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"},
            g = function () {
                var t = e(this), o = t.data(i), r = o.opt, s = r.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    a = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + s + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + s + "'><div class='" + d[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    l = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === r.axis ? a[0] + a[1] : "x" === r.axis ? a[1] : a[0],
                    u = "yx" === r.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    p = r.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== r.axis && "rtl" === o.langDir ? " " + d[7] : "";
                r.setWidth && t.css("width", r.setWidth), r.setHeight && t.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === o.langDir ? "989999px" : r.setLeft, t.addClass(n + " _" + i + "_" + o.idx + p + h).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + o.langDir + "' /></div>");
                var f = e("#mCSB_" + o.idx), m = e("#mCSB_" + o.idx + "_container");
                "y" === r.axis || r.advanced.autoExpandHorizontalScroll || m.css("width", y(m)), "outside" === r.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c), m.wrap(u)), w.call(this);
                var v = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                v[0].css("min-height", v[0].height()), v[1].css("min-width", v[1].width())
            }, y = function (t) {
                var n = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {return e(this).outerWidth(!0)}).get())],
                    i = t.parent().width();
                return n[0] > i ? n[0] : n[1] > i ? n[1] : "100%"
            }, b = function () {
                var t = e(this).data(i), n = t.opt, o = e("#mCSB_" + t.idx + "_container");
                if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                    o.css({width: "auto", "min-width": 0, "overflow-x": "scroll"});
                    var r = Math.ceil(o[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > o.parent().width() ? o.css({
                        width: r,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : o.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            }, w = function () {
                var t = e(this).data(i), n = t.opt, o = e(".mCSB_" + t.idx + "_scrollbar:first"),
                    r = ne(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    s = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
                    a = ["x" === n.axis ? s[2] : s[0], "x" === n.axis ? s[3] : s[1], s[2], s[3]];
                n.scrollButtons.enable && o.prepend(a[0]).append(a[1]).next(".mCSB_scrollTools").prepend(a[2]).append(a[3])
            }, x = function () {
                var t = e(this).data(i), n = e("#mCSB_" + t.idx), o = e("#mCSB_" + t.idx + "_container"),
                    r = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                    s = [n.height() / o.outerHeight(!1), n.width() / o.outerWidth(!1)],
                    a = [parseInt(r[0].css("min-height")), Math.round(s[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(s[1] * r[1].parent().width())],
                    c = l && a[1] < a[0] ? a[0] : a[1], d = l && a[3] < a[2] ? a[2] : a[3];
                r[0].css({
                    height: c,
                    "max-height": r[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({"line-height": a[0] + "px"}), r[1].css({
                    width: d,
                    "max-width": r[1].parent().width() - 10
                })
            }, C = function () {
                var t = e(this).data(i), n = e("#mCSB_" + t.idx), o = e("#mCSB_" + t.idx + "_container"),
                    r = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
                    s = [o.outerHeight(!1) - n.height(), o.outerWidth(!1) - n.width()],
                    a = [s[0] / (r[0].parent().height() - r[0].height()), s[1] / (r[1].parent().width() - r[1].width())];
                t.scrollRatio = {y: a[0], x: a[1]}
            }, S = function (e, t, n) {
                var i = n ? d[0] + "_expanded" : "", o = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(d[0] + " " + i), o.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), o.removeClass(d[1])) : (e.addClass(d[0]), o.addClass(d[1])))
            }, T = function () {
                var t = e(this).data(i), n = e("#mCSB_" + t.idx), o = e("#mCSB_" + t.idx + "_container"),
                    r = null == t.overflowed ? o.height() : o.outerHeight(!1),
                    s = null == t.overflowed ? o.width() : o.outerWidth(!1), a = o[0].scrollHeight, l = o[0].scrollWidth;
                return a > r && (r = a), l > s && (s = l), [r > n.height(), s > n.width()]
            }, k = function () {
                var t = e(this), n = t.data(i), o = n.opt, r = e("#mCSB_" + n.idx), s = e("#mCSB_" + n.idx + "_container"),
                    a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                if (G(t), ("x" !== o.axis && !n.overflowed[0] || "y" === o.axis && n.overflowed[0]) && (a[0].add(s).css("top", 0), Y(t, "_resetY")), "y" !== o.axis && !n.overflowed[1] || "x" === o.axis && n.overflowed[1]) {
                    var l = dx = 0;
                    "rtl" === n.langDir && (l = r.width() - s.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), s.css("left", l), a[1].css("left", dx), Y(t, "_resetX")
                }
            }, _ = function () {
                function t() {s = setTimeout(function () {e.event.special.mousewheel ? (clearTimeout(s), M.call(n[0])) : t()}, 100)}

                var n = e(this), o = n.data(i), r = o.opt;
                if (!o.bindEvents) {
                    if (O.call(this), r.contentTouchScroll && D.call(this), L.call(this), r.mouseWheel.enable) {
                        var s;
                        t()
                    }
                    q.call(this), N.call(this), r.advanced.autoScrollOnFocus && H.call(this), r.scrollButtons.enable && B.call(this), r.keyboard.enable && R.call(this), o.bindEvents = !0
                }
            }, $ = function () {
                var t = e(this), n = t.data(i), o = n.opt, r = i + "_" + n.idx, s = ".mCSB_" + n.idx + "_scrollbar",
                    a = e("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + s + " ." + d[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + s + ">a"),
                    l = e("#mCSB_" + n.idx + "_container");
                o.advanced.releaseDraggableSelectors && a.add(e(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && a.add(e(o.advanced.extraDraggableSelectors)), n.bindEvents && (e(document).add(e(!j() || top.document)).unbind("." + r), a.each(function () {e(this).unbind("." + r)}), clearTimeout(t[0]._focusTimeout), Z(t[0], "_focusTimeout"), clearTimeout(n.sequential.step), Z(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Z(l[0], "onCompleteTimeout"), n.bindEvents = !1)
            }, A = function (t) {
                var n = e(this), o = n.data(i), r = o.opt, s = e("#mCSB_" + o.idx + "_container_wrapper"),
                    a = s.length ? s : e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_scrollbar_vertical"), e("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                    c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                "x" !== r.axis && (o.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), a.removeClass(d[8] + " " + d[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), a.removeClass(d[10])) : (l[0].css("display", "none"), a.addClass(d[10])), a.addClass(d[8]))), "y" !== r.axis && (o.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), a.removeClass(d[9] + " " + d[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), a.removeClass(d[11])) : (l[1].css("display", "none"), a.addClass(d[11])), a.addClass(d[9]))), o.overflowed[0] || o.overflowed[1] ? n.removeClass(d[5]) : n.addClass(d[5])
            }, E = function (t) {
                var n = t.type,
                    i = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    o = j() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
                switch (n) {
                    case"pointerdown":
                    case"MSPointerDown":
                    case"pointermove":
                    case"MSPointerMove":
                    case"pointerup":
                    case"MSPointerUp":
                        return i ? [t.originalEvent.pageY - i[0] + o[0], t.originalEvent.pageX - i[1] + o[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case"touchstart":
                    case"touchmove":
                    case"touchend":
                        var r = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            s = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                        return t.target.ownerDocument !== document ? [r.screenY, r.screenX, s > 1] : [r.pageY, r.pageX, s > 1];
                    default:
                        return i ? [t.pageY - i[0] + o[0], t.pageX - i[1] + o[1], !1] : [t.pageY, t.pageX, !1]
                }
            }, O = function () {
                function t(e, t, i, o) {
                    if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, n.attr("id") === p[1]) var r = "x",
                        l = (n[0].offsetLeft - t + o) * a.scrollRatio.x; else var r = "y",
                        l = (n[0].offsetTop - e + i) * a.scrollRatio.y;
                    Y(s, l.toString(), {dir: r, drag: !0})
                }

                var n, o, r, s = e(this), a = s.data(i), d = a.opt, u = i + "_" + a.idx,
                    p = ["mCSB_" + a.idx + "_dragger_vertical", "mCSB_" + a.idx + "_dragger_horizontal"],
                    h = e("#mCSB_" + a.idx + "_container"), f = e("#" + p[0] + ",#" + p[1]),
                    m = d.advanced.releaseDraggableSelectors ? f.add(e(d.advanced.releaseDraggableSelectors)) : f,
                    v = d.advanced.extraDraggableSelectors ? e(!j() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!j() || top.document);
                f.bind("contextmenu." + u, function (e) {e.preventDefault()}).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
                    if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
                        c = !0, l && (document.onselectstart = function () {return !1}), P.call(h, !1), G(s);
                        var i = (n = e(this)).offset(), a = E(t)[0] - i.top, u = E(t)[1] - i.left, p = n.height() + i.top,
                            f = n.width() + i.left;
                        p > a && a > 0 && f > u && u > 0 && (o = a, r = u), S(n, "active", d.autoExpandScrollbar)
                    }
                }).bind("touchmove." + u, function (e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var i = n.offset(), s = E(e)[0] - i.top, a = E(e)[1] - i.left;
                    t(o, r, s, a)
                }), e(document).add(v).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
                    if (n) {
                        var i = n.offset(), s = E(e)[0] - i.top, a = E(e)[1] - i.left;
                        if (o === s && r === a) return;
                        t(o, r, s, a)
                    }
                }).add(m).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {n && (S(n, "active", d.autoExpandScrollbar), n = null), c = !1, l && (document.onselectstart = null), P.call(h, !0)})
            }, D = function () {
                function n(e) {
                    if (!te(e) || c || E(e)[2]) t = 0; else {
                        t = 1, C = 0, S = 0, d = 1, T.removeClass("mCS_touch_action");
                        var n = O.offset();
                        u = E(e)[0] - n.top, p = E(e)[1] - n.left, z = [E(e)[0], E(e)[1]]
                    }
                }

                function o(e) {
                    if (te(e) && !c && !E(e)[2] && (_.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!S || C) && d)) {
                        v = K();
                        var t = A.offset(), n = E(e)[0] - t.top, i = E(e)[1] - t.left, o = "mcsLinearOut";
                        if (L.push(n), M.push(i), z[2] = Math.abs(E(e)[0] - z[0]), z[3] = Math.abs(E(e)[1] - z[1]), k.overflowed[0]) var r = D[0].parent().height() - D[0].height(),
                            s = u - n > 0 && n - u > -r * k.scrollRatio.y && (2 * z[3] < z[2] || "yx" === _.axis);
                        if (k.overflowed[1]) var a = D[1].parent().width() - D[1].width(),
                            h = p - i > 0 && i - p > -a * k.scrollRatio.x && (2 * z[2] < z[3] || "yx" === _.axis);
                        s || h ? (N || e.preventDefault(), C = 1) : (S = 1, T.addClass("mCS_touch_action")), N && e.preventDefault(), w = "yx" === _.axis ? [u - n, p - i] : "x" === _.axis ? [null, p - i] : [u - n, null], O[0].idleTimer = 250, k.overflowed[0] && l(w[0], I, o, "y", "all", !0), k.overflowed[1] && l(w[1], I, o, "x", P, !0)
                    }
                }

                function r(e) {
                    if (!te(e) || c || E(e)[2]) t = 0; else {
                        t = 1, e.stopImmediatePropagation(), G(T), m = K();
                        var n = A.offset();
                        h = E(e)[0] - n.top, f = E(e)[1] - n.left, L = [], M = []
                    }
                }

                function s(e) {
                    if (te(e) && !c && !E(e)[2]) {
                        d = 0, e.stopImmediatePropagation(), C = 0, S = 0, g = K();
                        var t = A.offset(), n = E(e)[0] - t.top, i = E(e)[1] - t.left;
                        if (!(g - v > 30)) {
                            var o = "mcsEaseOut", r = 2.5 > (b = 1e3 / (g - m)),
                                s = r ? [L[L.length - 2], M[M.length - 2]] : [0, 0];
                            y = r ? [n - s[0], i - s[1]] : [n - h, i - f];
                            var u = [Math.abs(y[0]), Math.abs(y[1])];
                            b = r ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [b, b];
                            var p = [Math.abs(O[0].offsetTop) - y[0] * a(u[0] / b[0], b[0]), Math.abs(O[0].offsetLeft) - y[1] * a(u[1] / b[1], b[1])];
                            w = "yx" === _.axis ? [p[0], p[1]] : "x" === _.axis ? [null, p[1]] : [p[0], null], x = [4 * u[0] + _.scrollInertia, 4 * u[1] + _.scrollInertia];
                            var T = parseInt(_.contentTouchScroll) || 0;
                            w[0] = u[0] > T ? w[0] : 0, w[1] = u[1] > T ? w[1] : 0, k.overflowed[0] && l(w[0], x[0], o, "y", P, !1), k.overflowed[1] && l(w[1], x[1], o, "x", P, !1)
                        }
                    }
                }

                function a(e, t) {
                    var n = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? n[0] : n[3] : e > 60 ? t > 3 ? n[3] : n[2] : e > 30 ? t > 8 ? n[1] : t > 6 ? n[0] : t > 4 ? t : n[2] : t > 8 ? t : n[3]
                }

                function l(e, t, n, i, o, r) {
                    e && Y(T, e.toString(), {
                        dur: t,
                        scrollEasing: n,
                        dir: i,
                        overwrite: o,
                        drag: r
                    })
                }

                var d, u, p, h, f, m, v, g, y, b, w, x, C, S, T = e(this), k = T.data(i), _ = k.opt, $ = i + "_" + k.idx,
                    A = e("#mCSB_" + k.idx), O = e("#mCSB_" + k.idx + "_container"),
                    D = [e("#mCSB_" + k.idx + "_dragger_vertical"), e("#mCSB_" + k.idx + "_dragger_horizontal")], L = [],
                    M = [], I = 0, P = "yx" === _.axis ? "none" : "all", z = [], q = O.find("iframe"),
                    H = ["touchstart." + $ + " pointerdown." + $ + " MSPointerDown." + $, "touchmove." + $ + " pointermove." + $ + " MSPointerMove." + $, "touchend." + $ + " pointerup." + $ + " MSPointerUp." + $],
                    N = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                O.bind(H[0], function (e) {n(e)}).bind(H[1], function (e) {o(e)}), A.bind(H[0], function (e) {r(e)}).bind(H[2], function (e) {s(e)}), q.length && q.each(function () {e(this).bind("load", function () {j(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {n(e), r(e)}).bind(H[1], function (e) {o(e)}).bind(H[2], function (e) {s(e)})})})
            }, L = function () {
                function n() {return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0}

                function o(e, t, n) {d.type = n && r ? "stepped" : "stepless", d.scrollAmount = 10, F(s, e, t, "mcsLinearOut", n ? 60 : null)}

                var r, s = e(this), a = s.data(i), l = a.opt, d = a.sequential, u = i + "_" + a.idx,
                    p = e("#mCSB_" + a.idx + "_container"), h = p.parent();
                p.bind("mousedown." + u, function () {t || r || (r = 1, c = !0)}).add(document).bind("mousemove." + u, function (e) {
                    if (!t && r && n()) {
                        var i = p.offset(), s = E(e)[0] - i.top + p[0].offsetTop, c = E(e)[1] - i.left + p[0].offsetLeft;
                        s > 0 && s < h.height() && c > 0 && c < h.width() ? d.step && o("off", null, "stepped") : ("x" !== l.axis && a.overflowed[0] && (0 > s ? o("on", 38) : s > h.height() && o("on", 40)), "y" !== l.axis && a.overflowed[1] && (0 > c ? o("on", 37) : c > h.width() && o("on", 39)))
                    }
                }).bind("mouseup." + u + " dragend." + u, function () {t || (r && (r = 0, o("off", null)), c = !1)})
            }, M = function () {
                function t(t, i) {
                    if (G(n), !z(n, t.target)) {
                        var s = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = r.scrollInertia;
                        if ("x" === r.axis || "x" === r.mouseWheel.axis) var u = "x",
                            p = [Math.round(s * o.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
                            h = "auto" !== r.mouseWheel.scrollAmount ? p[1] : p[0] >= a.width() ? .9 * a.width() : p[0],
                            f = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft), m = c[1][0].offsetLeft,
                            v = c[1].parent().width() - c[1].width(),
                            g = "y" === r.mouseWheel.axis ? t.deltaY || i : t.deltaX; else var u = "y",
                            p = [Math.round(s * o.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
                            h = "auto" !== r.mouseWheel.scrollAmount ? p[1] : p[0] >= a.height() ? .9 * a.height() : p[0],
                            f = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop), m = c[0][0].offsetTop,
                            v = c[0].parent().height() - c[0].height(), g = t.deltaY || i;
                        "y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((r.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), r.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== m || 0 > g && m !== v || r.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !r.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), Y(n, (f - g * h).toString(), {
                            dir: u,
                            dur: d
                        }))
                    }
                }

                if (e(this).data(i)) {
                    var n = e(this), o = n.data(i), r = o.opt, s = i + "_" + o.idx, a = e("#mCSB_" + o.idx),
                        c = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + o.idx + "_container").find("iframe");
                    d.length && d.each(function () {e(this).bind("load", function () {j(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + s, function (e, n) {t(e, n)})})}), a.bind("mousewheel." + s, function (e, n) {t(e, n)})
                }
            }, I = new Object, j = function (t) {
                var n = !1, i = !1, o = null;
                if (void 0 === t ? i = "#empty" : void 0 !== e(t).attr("id") && (i = e(t).attr("id")), !1 !== i && void 0 !== I[i]) return I[i];
                if (t) {
                    try {
                        o = (r = t.contentDocument || t.contentWindow.document).body.innerHTML
                    } catch (e) {
                    }
                    n = null !== o
                } else {
                    try {
                        var r = top.document;
                        o = r.body.innerHTML
                    } catch (e) {
                    }
                    n = null !== o
                }
                return !1 !== i && (I[i] = n), n
            }, P = function (e) {
                var t = this.find("iframe");
                if (t.length) {
                    var n = e ? "auto" : "none";
                    t.css("pointer-events", n)
                }
            }, z = function (t, n) {
                var o = n.nodeName.toLowerCase(), r = t.data(i).opt.mouseWheel.disableOver;
                return e.inArray(o, r) > -1 && !(e.inArray(o, ["select", "textarea"]) > -1 && !e(n).is(":focus"))
            }, q = function () {
                var t, n = e(this), o = n.data(i), r = i + "_" + o.idx, s = e("#mCSB_" + o.idx + "_container"),
                    a = s.parent();
                e(".mCSB_" + o.idx + "_scrollbar ." + d[12]).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function (n) {c = !0, e(n.target).hasClass("mCSB_dragger") || (t = 1)}).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function () {c = !1}).bind("click." + r, function (i) {
                    if (t && (t = 0, e(i.target).hasClass(d[12]) || e(i.target).hasClass("mCSB_draggerRail"))) {
                        G(n);
                        var r = e(this), l = r.find(".mCSB_dragger");
                        if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!o.overflowed[1]) return;
                            var c = "x", u = i.pageX > l.offset().left ? -1 : 1,
                                p = Math.abs(s[0].offsetLeft) - u * (.9 * a.width())
                        } else {
                            if (!o.overflowed[0]) return;
                            var c = "y", u = i.pageY > l.offset().top ? -1 : 1,
                                p = Math.abs(s[0].offsetTop) - u * (.9 * a.height())
                        }
                        Y(n, p.toString(), {dir: c, scrollEasing: "mcsEaseInOut"})
                    }
                })
            }, H = function () {
                var t = e(this), n = t.data(i), o = n.opt, r = i + "_" + n.idx, s = e("#mCSB_" + n.idx + "_container"),
                    a = s.parent();
                s.bind("focusin." + r, function () {
                    var n = e(document.activeElement), i = s.find(".mCustomScrollBox").length;
                    n.is(o.advanced.autoScrollOnFocus) && (G(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = i ? 17 * i : 0, t[0]._focusTimeout = setTimeout(function () {
                        var e = [ie(n)[0], ie(n)[1]], i = [s[0].offsetTop, s[0].offsetLeft],
                            r = [i[0] + e[0] >= 0 && i[0] + e[0] < a.height() - n.outerHeight(!1), i[1] + e[1] >= 0 && i[0] + e[1] < a.width() - n.outerWidth(!1)],
                            l = "yx" !== o.axis || r[0] || r[1] ? "all" : "none";
                        "x" === o.axis || r[0] || Y(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: l,
                            dur: 0
                        }), "y" === o.axis || r[1] || Y(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: l,
                            dur: 0
                        })
                    }, t[0]._focusTimer))
                })
            }, N = function () {
                var t = e(this).data(i), n = i + "_" + t.idx, o = e("#mCSB_" + t.idx + "_container").parent();
                o.bind("scroll." + n, function () {0 === o.scrollTop() && 0 === o.scrollLeft() || e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")})
            }, B = function () {
                var t = e(this), n = t.data(i), o = n.opt, r = n.sequential, s = i + "_" + n.idx,
                    a = ".mCSB_" + n.idx + "_scrollbar";
                e(a + ">a").bind("contextmenu." + s, function (e) {e.preventDefault()}).bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s + " mouseup." + s + " touchend." + s + " pointerup." + s + " MSPointerUp." + s + " mouseout." + s + " pointerout." + s + " MSPointerOut." + s + " click." + s, function (i) {
                    function s(e, n) {r.scrollAmount = o.scrollButtons.scrollAmount, F(t, e, n)}

                    if (i.preventDefault(), ee(i)) {
                        var a = e(this).attr("class");
                        switch (r.type = o.scrollButtons.scrollType, i.type) {
                            case"mousedown":
                            case"touchstart":
                            case"pointerdown":
                            case"MSPointerDown":
                                if ("stepped" === r.type) return;
                                c = !0, n.tweenRunning = !1, s("on", a);
                                break;
                            case"mouseup":
                            case"touchend":
                            case"pointerup":
                            case"MSPointerUp":
                            case"mouseout":
                            case"pointerout":
                            case"MSPointerOut":
                                if ("stepped" === r.type) return;
                                c = !1, r.dir && s("off", a);
                                break;
                            case"click":
                                if ("stepped" !== r.type || n.tweenRunning) return;
                                s("on", a)
                        }
                    }
                })
            }, R = function () {
                function t(t) {
                    function i(e, t) {s.type = r.keyboard.scrollType, s.scrollAmount = r.keyboard.scrollAmount, "stepped" === s.type && o.tweenRunning || F(n, e, t)}

                    switch (t.type) {
                        case"blur":
                            o.tweenRunning && s.dir && i("off", null);
                            break;
                        case"keydown":
                        case"keyup":
                            var a = t.keyCode ? t.keyCode : t.which, l = "on";
                            if ("x" !== r.axis && (38 === a || 40 === a) || "y" !== r.axis && (37 === a || 39 === a)) {
                                if ((38 === a || 40 === a) && !o.overflowed[0] || (37 === a || 39 === a) && !o.overflowed[1]) return;
                                "keyup" === t.type && (l = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), i(l, a))
                            } else if (33 === a || 34 === a) {
                                if ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    G(n);
                                    var p = 34 === a ? -1 : 1;
                                    if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var h = "x",
                                        f = Math.abs(c[0].offsetLeft) - p * (.9 * d.width()); else var h = "y",
                                        f = Math.abs(c[0].offsetTop) - p * (.9 * d.height());
                                    Y(n, f.toString(), {dir: h, scrollEasing: "mcsEaseInOut"})
                                }
                            } else if ((35 === a || 36 === a) && !e(document.activeElement).is(u) && ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var h = "x",
                                    f = 35 === a ? Math.abs(d.width() - c.outerWidth(!1)) : 0; else var h = "y",
                                    f = 35 === a ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                Y(n, f.toString(), {dir: h, scrollEasing: "mcsEaseInOut"})
                            }
                    }
                }

                var n = e(this), o = n.data(i), r = o.opt, s = o.sequential, a = i + "_" + o.idx, l = e("#mCSB_" + o.idx),
                    c = e("#mCSB_" + o.idx + "_container"), d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']", p = c.find("iframe"),
                    h = ["blur." + a + " keydown." + a + " keyup." + a];
                p.length && p.each(function () {e(this).bind("load", function () {j(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {t(e)})})}), l.attr("tabindex", "0").bind(h[0], function (e) {t(e)})
            }, F = function (t, n, o, r, s) {
                function a(e) {
                    c.snapAmount && (u.scrollAmount = c.snapAmount instanceof Array ? "x" === u.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
                    var n = "stepped" !== u.type, i = s || (e ? n ? f / 1.5 : m : 1e3 / 60), o = e ? n ? 7.5 : 40 : 2.5,
                        d = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
                        h = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                        v = "x" === u.dir[0] ? d[1] + u.dir[1] * (h[1] * o) : d[0] + u.dir[1] * (h[0] * o),
                        g = "x" === u.dir[0] ? d[1] + u.dir[1] * parseInt(u.scrollAmount) : d[0] + u.dir[1] * parseInt(u.scrollAmount),
                        y = "auto" !== u.scrollAmount ? g : v,
                        b = r || (e ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"), w = !!e;
                    return e && 17 > i && (y = "x" === u.dir[0] ? d[1] : d[0]), Y(t, y.toString(), {
                        dir: u.dir[0],
                        scrollEasing: b,
                        dur: i,
                        onComplete: w
                    }), e ? void (u.dir = !1) : (clearTimeout(u.step), void (u.step = setTimeout(function () {a()}, i)))
                }

                var l = t.data(i), c = l.opt, u = l.sequential, p = e("#mCSB_" + l.idx + "_container"),
                    h = "stepped" === u.type, f = c.scrollInertia < 26 ? 26 : c.scrollInertia,
                    m = c.scrollInertia < 1 ? 17 : c.scrollInertia;
                switch (n) {
                    case"on":
                        if (u.dir = [o === d[16] || o === d[15] || 39 === o || 37 === o ? "x" : "y", o === d[13] || o === d[15] || 38 === o || 37 === o ? -1 : 1], G(t), ne(o) && "stepped" === u.type) return;
                        a(h);
                        break;
                    case"off":
                        clearTimeout(u.step), Z(u, "step"), G(t), (h || l.tweenRunning && u.dir) && a(!0)
                }
            }, W = function (t) {
                var n = e(this).data(i).opt, o = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? o = t.length > 1 ? [t[0], t[1]] : "x" === n.axis ? [null, t[0]] : [t[0], null] : (o[0] = t.y ? t.y : t.x || "x" === n.axis ? null : t, o[1] = t.x ? t.x : t.y || "y" === n.axis ? null : t), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
            }, U = function (t, n) {
                if (null != t && void 0 !== t) {
                    var o = e(this), r = o.data(i), s = r.opt, a = e("#mCSB_" + r.idx + "_container"), l = a.parent(),
                        c = typeof t;
                    n || (n = "x" === s.axis ? "x" : "y");
                    var d = "x" === n ? a.outerWidth(!1) - l.width() : a.outerHeight(!1) - l.height(),
                        p = "x" === n ? a[0].offsetLeft : a[0].offsetTop, h = "x" === n ? "left" : "top";
                    switch (c) {
                        case"function":
                            return t();
                        case"object":
                            if (!(m = t.jquery ? t : e(t)).length) return;
                            return "x" === n ? ie(m)[1] : ie(m)[0];
                        case"string":
                        case"number":
                            if (ne(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(p - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var f = p + parseInt(t.split("+=")[1]);
                                return f >= 0 ? 0 : Math.abs(f)
                            }
                            if (-1 !== t.indexOf("px") && ne(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(l.height() - a.outerHeight(!1));
                            if ("right" === t) return Math.abs(l.width() - a.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var m = a.find(":" + t);
                                return "x" === n ? ie(m)[1] : ie(m)[0]
                            }
                            return e(t).length ? "x" === n ? ie(e(t))[1] : ie(e(t))[0] : (a.css(h, t), void u.update.call(null, o[0]))
                    }
                }
            }, V = function (t) {
                function n() {return clearTimeout(p[0].autoUpdate), 0 === a.parents("html").length ? void (a = null) : void (p[0].autoUpdate = setTimeout(function () {return c.advanced.updateOnSelectorChange && (l.poll.change.n = r(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void s(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = a[0].scrollHeight + a[0].scrollWidth + p[0].offsetHeight + a[0].offsetHeight + a[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void s(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = p.find("img").length, l.poll.img.n === l.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && n()) : (l.poll.img.o = l.poll.img.n, void p.find("img").each(function () {o(this)}))}, c.advanced.autoUpdateTimeout))}

                function o(t) {
                    if (e(t).hasClass(d[2])) s(); else {
                        var n = new Image;
                        n.onload = function (e, t) {return function () {return t.apply(e, arguments)}}(n, function () {this.onload = null, e(t).addClass(d[2]), s(2)}), n.src = t.src
                    }
                }

                function r() {
                    !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0, t = p.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {e += this.offsetHeight + this.offsetWidth}), e
                }

                function s(e) {clearTimeout(p[0].autoUpdate), u.update.call(null, a[0], e)}

                var a = e(this), l = a.data(i), c = l.opt, p = e("#mCSB_" + l.idx + "_container");
                return t ? (clearTimeout(p[0].autoUpdate), void Z(p[0], "autoUpdate")) : void n()
            }, X = function (e, t, n) {return Math.round(e / t) * t - n}, G = function (t) {
                var n = t.data(i);
                e("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal").each(function () {J.call(this)})
            }, Y = function (t, n, o) {
                function r(e) {return l && c.callbacks[e] && "function" == typeof c.callbacks[e]}

                function s() {return [c.callbacks.alwaysTriggerOffsets || w >= x[0] + T, c.callbacks.alwaysTriggerOffsets || -k >= w]}

                function a() {
                    var e = [h[0].offsetTop, h[0].offsetLeft], n = [y[0].offsetTop, y[0].offsetLeft],
                        i = [h.outerHeight(!1), h.outerWidth(!1)], r = [p.height(), p.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: n[0],
                        draggerLeft: n[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(i[0]) - r[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(i[1]) - r[1])),
                        direction: o.dir
                    }
                }

                var l = t.data(i), c = l.opt, d = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    }, u = [(o = e.extend(d, o)).dur, o.drag ? 0 : o.dur], p = e("#mCSB_" + l.idx),
                    h = e("#mCSB_" + l.idx + "_container"), f = h.parent(),
                    m = c.callbacks.onTotalScrollOffset ? W.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    v = c.callbacks.onTotalScrollBackOffset ? W.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (l.trigger = o.trigger, 0 === f.scrollTop() && 0 === f.scrollLeft() || (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== n || l.contentReset.y || (r("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== n || l.contentReset.x || (r("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
                    if (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (r("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (r("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), c.snapAmount) {
                        var g = c.snapAmount instanceof Array ? "x" === o.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        n = X(n, g, c.snapOffset)
                    }
                    switch (o.dir) {
                        case"x":
                            var y = e("#mCSB_" + l.idx + "_dragger_horizontal"), b = "left", w = h[0].offsetLeft,
                                x = [p.width() - h.outerWidth(!1), y.parent().width() - y.width()],
                                C = [n, 0 === n ? 0 : n / l.scrollRatio.x], T = m[1], k = v[1],
                                _ = T > 0 ? T / l.scrollRatio.x : 0, $ = k > 0 ? k / l.scrollRatio.x : 0;
                            break;
                        case"y":
                            var y = e("#mCSB_" + l.idx + "_dragger_vertical"), b = "top", w = h[0].offsetTop,
                                x = [p.height() - h.outerHeight(!1), y.parent().height() - y.height()],
                                C = [n, 0 === n ? 0 : n / l.scrollRatio.y], T = m[0], k = v[0],
                                _ = T > 0 ? T / l.scrollRatio.y : 0, $ = k > 0 ? k / l.scrollRatio.y : 0
                    }
                    C[1] < 0 || 0 === C[0] && 0 === C[1] ? C = [0, 0] : C[1] >= x[1] ? C = [x[0], x[1]] : C[0] = -C[0], t[0].mcs || (a(), r("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), Q(y[0], b, Math.round(C[1]), u[1], o.scrollEasing), !l.tweenRunning && (0 === w && C[0] >= 0 || w === x[0] && C[0] <= x[0]) || Q(h[0], b, Math.round(C[0]), u[0], o.scrollEasing, o.overwrite, {
                        onStart: function () {o.callbacks && o.onStart && !l.tweenRunning && (r("onScrollStart") && (a(), c.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, S(y), l.cbOffsets = s())},
                        onUpdate: function () {o.callbacks && o.onUpdate && r("whileScrolling") && (a(), c.callbacks.whileScrolling.call(t[0]))},
                        onComplete: function () {
                            if (o.callbacks && o.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function () {r("onScroll") && (a(), c.callbacks.onScroll.call(t[0])), r("onTotalScroll") && C[1] >= x[1] - _ && l.cbOffsets[0] && (a(), c.callbacks.onTotalScroll.call(t[0])), r("onTotalScrollBack") && C[1] <= $ && l.cbOffsets[1] && (a(), c.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, h[0].idleTimer = 0, S(y, "hide")}, e)
                            }
                        }
                    })
                }
            }, Q = function (e, t, n, i, o, r, s) {
                function a() {b.stop || (v || p.call(), v = K() - m, l(), v >= b.time && (b.time = v > b.time ? v + d - (v - b.time) : v + d - 1, b.time < v + 1 && (b.time = v + 1)), b.time < i ? b.id = u(a) : f.call())}

                function l() {i > 0 ? (b.currVal = c(b.time, g, w, i, o), y[t] = Math.round(b.currVal) + "px") : y[t] = n + "px", h.call()}

                function c(e, t, n, i, o) {
                    switch (o) {
                        case"linear":
                        case"mcsLinear":
                            return n * e / i + t;
                        case"mcsLinearOut":
                            return e /= i, e--, n * Math.sqrt(1 - e * e) + t;
                        case"easeInOutSmooth":
                            return 1 > (e /= i / 2) ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t);
                        case"easeInOutStrong":
                            return 1 > (e /= i / 2) ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, n / 2 * (2 - Math.pow(2, -10 * e)) + t);
                        case"easeInOut":
                        case"mcsEaseInOut":
                            return 1 > (e /= i / 2) ? n / 2 * e * e * e + t : (e -= 2, n / 2 * (e * e * e + 2) + t);
                        case"easeOutSmooth":
                            return e /= i, e--, -n * (e * e * e * e - 1) + t;
                        case"easeOutStrong":
                            return n * (1 - Math.pow(2, -10 * e / i)) + t;
                        case"easeOut":
                        case"mcsEaseOut":
                        default:
                            var r = (e /= i) * e, s = r * e;
                            return t + n * (.499999999999997 * s * r + -2.5 * r * r + 5.5 * s + -6.5 * r + 4 * e)
                    }
                }

                e._mTween || (e._mTween = {top: {}, left: {}});
                var d, u, p = (s = s || {}).onStart || function () {}, h = s.onUpdate || function () {},
                    f = s.onComplete || function () {}, m = K(), v = 0, g = e.offsetTop, y = e.style, b = e._mTween[t];
                "left" === t && (g = e.offsetLeft);
                var w = n - g;
                b.stop = 0, "none" !== r && null != b.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(b.id) : clearTimeout(b.id), b.id = null), d = 1e3 / 60, b.time = v + d, u = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {return l(), setTimeout(e, .01)}, b.id = u(a)
            },
            K = function () {return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()},
            J = function () {
                var e = this;
                e._mTween || (e._mTween = {top: {}, left: {}});
                for (var t = ["top", "left"], n = 0; n < t.length; n++) {
                    var i = t[n];
                    e._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[i].id) : clearTimeout(e._mTween[i].id), e._mTween[i].id = null, e._mTween[i].stop = 1)
                }
            }, Z = function (e, t) {
                try {
                    delete e[t]
                } catch (n) {
                    e[t] = null
                }
            }, ee = function (e) {return !(e.which && 1 !== e.which)}, te = function (e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            }, ne = function (e) {return !isNaN(parseFloat(e)) && isFinite(e)}, ie = function (e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            }, oe = function () {
                var e = function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }();
                return !!e && document[e]
            };
        e.fn[n] = function (t) {return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)}, e[n] = function (t) {return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)}, e[n].defaults = r, window[n] = !0, e(window).bind("load", function () {
            e(o)[n](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function (t) {
                    var n, i, o = e(t), r = o.parents(".mCSB_container");
                    if (r.length) return n = r.parent(), (i = [r[0].offsetTop, r[0].offsetLeft])[0] + ie(o)[0] >= 0 && i[0] + ie(o)[0] < n.height() - o.outerHeight(!1) && i[1] + ie(o)[1] >= 0 && i[1] + ie(o)[1] < n.width() - o.outerWidth(!1)
                },
                mcsInSight: e.expr[":"].mcsInSight || function (t, n, i) {
                    var o, r, s, a, l = e(t), c = l.parents(".mCSB_container"),
                        d = "exact" === i[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length) return o = [l.outerHeight(!1), l.outerWidth(!1)], s = [c[0].offsetTop + ie(l)[0], c[0].offsetLeft + ie(l)[1]], r = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], a = [o[0] < r[0] ? d[0] : d[1], o[1] < r[1] ? d[0] : d[1]], s[0] - r[0] * a[0][0] < 0 && s[0] + o[0] - r[0] * a[0][1] >= 0 && s[1] - r[1] * a[1][0] < 0 && s[1] + o[1] - r[1] * a[1][1] >= 0
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
                    var n = e(t).data(i);
                    if (n) return n.overflowed[0] || n.overflowed[1]
                }
            })
        })
    })
}), function (e, t) {"function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.iziToast = t(e)}("undefined" != typeof global ? global : window || this.window || this.global, function (e) {
    "use strict";
    var t = {}, n = "iziToast", i = (document.querySelector("body"), !!/Mobi/.test(navigator.userAgent)),
        o = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        r = "undefined" != typeof InstallTrigger, s = "ontouchstart" in document.documentElement,
        a = ["bottomRight", "bottomLeft", "bottomCenter", "topRight", "topLeft", "topCenter", "center"], l = 568,
        c = {};
    t.children = {};
    var d = {
        id: null,
        class: "",
        title: "",
        titleColor: "",
        titleSize: "",
        titleLineHeight: "",
        message: "",
        messageColor: "",
        messageSize: "",
        messageLineHeight: "",
        backgroundColor: "",
        theme: "light",
        color: "",
        icon: "",
        iconText: "",
        iconColor: "",
        iconUrl: null,
        image: "",
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: !1,
        close: !0,
        closeOnEscape: !1,
        closeOnClick: !1,
        displayMode: 0,
        position: "bottomRight",
        target: "",
        targetFirst: !0,
        timeout: 5e3,
        rtl: !1,
        animateInside: !0,
        drag: !0,
        pauseOnHover: !0,
        resetOnHover: !1,
        progressBar: !0,
        progressBarColor: "",
        progressBarEasing: "linear",
        overlay: !1,
        overlayClose: !1,
        overlayColor: "rgba(0, 0, 0, 0.6)",
        transitionIn: "fadeInUp",
        transitionOut: "fadeOut",
        transitionInMobile: "fadeInUp",
        transitionOutMobile: "fadeOutDown",
        buttons: {},
        inputs: {},
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {}
    };
    if ("remove" in Element.prototype || (Element.prototype.remove = function () {this.parentNode && this.parentNode.removeChild(this)}), "function" != typeof window.CustomEvent) {
        var u = function (e, t) {
            t = t || {bubbles: !1, cancelable: !1, detail: void 0};
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        };
        u.prototype = window.Event.prototype, window.CustomEvent = u
    }
    var p = function (e, t, n) {if ("[object Object]" === Object.prototype.toString.call(e)) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, e[i], i, e); else if (e) for (var o = 0, r = e.length; r > o; o++) t.call(n, e[o], o, e)},
        h = function (e, t) {
            var n = {};
            return p(e, function (t, i) {n[i] = e[i]}), p(t, function (e, i) {n[i] = t[i]}), n
        }, f = function (e) {
            var t = document.createDocumentFragment(), n = document.createElement("div");
            for (n.innerHTML = e; n.firstChild;) t.appendChild(n.firstChild);
            return t
        }, m = function (e) {return btoa(encodeURIComponent(e)).replace(/=/g, "")},
        v = function (e) {return "#" == e.substring(0, 1) || "rgb" == e.substring(0, 3) || "hsl" == e.substring(0, 3)},
        g = function (e) {
            try {
                return btoa(atob(e)) == e
            } catch (e) {
                return !1
            }
        }, y = {
            move: function (e, t, i, s) {
                var a, l = 180;
                0 !== s && (e.classList.add(n + "-dragged"), e.style.transform = "translateX(" + s + "px)", s > 0 ? .3 > (a = (l - s) / l) && t.hide(h(i, {
                    transitionOut: "fadeOutRight",
                    transitionOutMobile: "fadeOutRight"
                }), e, "drag") : .3 > (a = (l + s) / l) && t.hide(h(i, {
                    transitionOut: "fadeOutLeft",
                    transitionOutMobile: "fadeOutLeft"
                }), e, "drag"), e.style.opacity = a, .3 > a && ((o || r) && (e.style.left = s + "px"), e.parentNode.style.opacity = .3, this.stopMoving(e, null)))
            },
            startMoving: function (e, t, n, i) {
                i = i || window.event;
                var o = s ? i.touches[0].clientX : i.clientX, r = e.style.transform.replace("px)", ""),
                    a = o - (r = r.replace("translateX(", ""));
                n.transitionIn && e.classList.remove(n.transitionIn), n.transitionInMobile && e.classList.remove(n.transitionInMobile), e.style.transition = "", s ? document.ontouchmove = function (i) {
                    i.preventDefault();
                    var o = (i = i || window.event).touches[0].clientX - a;
                    y.move(e, t, n, o)
                } : document.onmousemove = function (i) {
                    i.preventDefault();
                    var o = (i = i || window.event).clientX - a;
                    y.move(e, t, n, o)
                }
            },
            stopMoving: function (e, t) {s ? document.ontouchmove = function () {} : document.onmousemove = function () {}, e.style.opacity = "", e.style.transform = "", e.classList.contains(n + "-dragged") && (e.classList.remove(n + "-dragged"), e.style.transition = "transform 0.4s ease, opacity 0.4s ease", setTimeout(function () {e.style.transition = ""}, 400))}
        };
    return t.setSetting = function (e, n, i) {t.children[e][n] = i}, t.getSetting = function (e, n) {return t.children[e][n]}, t.destroy = function () {p(document.querySelectorAll("." + n + "-overlay"), function (e, t) {e.remove()}), p(document.querySelectorAll("." + n + "-wrapper"), function (e, t) {e.remove()}), p(document.querySelectorAll("." + n), function (e, t) {e.remove()}), this.children = {}, document.removeEventListener(n + "-opened", {}, !1), document.removeEventListener(n + "-opening", {}, !1), document.removeEventListener(n + "-closing", {}, !1), document.removeEventListener(n + "-closed", {}, !1), document.removeEventListener("keyup", {}, !1), c = {}}, t.settings = function (e) {t.destroy(), c = e, d = h(d, e || {})}, p({
        info: {
            color: "blue",
            icon: "ico-info"
        },
        success: {color: "green", icon: "ico-success"},
        warning: {color: "orange", icon: "ico-warning"},
        error: {color: "red", icon: "ico-error"},
        question: {color: "yellow", icon: "ico-question"}
    }, function (e, n) {
        t[n] = function (t) {
            var n = h(c, t || {});
            n = h(e, n || {}), this.show(n)
        }
    }), t.progress = function (e, t, i) {
        var o = this, r = t.getAttribute("data-iziToast-ref"), s = h(this.children[r], e || {}),
            a = t.querySelector("." + n + "-progressbar div");
        return {
            start: function () {void 0 === s.time.REMAINING && (t.classList.remove(n + "-reseted"), null !== a && (a.style.transition = "width " + s.timeout + "ms " + s.progressBarEasing, a.style.width = "0%"), s.time.START = (new Date).getTime(), s.time.END = s.time.START + s.timeout, s.time.TIMER = setTimeout(function () {clearTimeout(s.time.TIMER), t.classList.contains(n + "-closing") || (o.hide(s, t, "timeout"), "function" == typeof i && i.apply(o))}, s.timeout), o.setSetting(r, "time", s.time))},
            pause: function () {
                if (void 0 !== s.time.START && !t.classList.contains(n + "-paused") && !t.classList.contains(n + "-reseted")) {
                    if (t.classList.add(n + "-paused"), s.time.REMAINING = s.time.END - (new Date).getTime(), clearTimeout(s.time.TIMER), o.setSetting(r, "time", s.time), null !== a) {
                        var e = window.getComputedStyle(a).getPropertyValue("width");
                        a.style.transition = "none", a.style.width = e
                    }
                    "function" == typeof i && setTimeout(function () {i.apply(o)}, 10)
                }
            },
            resume: function () {void 0 !== s.time.REMAINING ? (t.classList.remove(n + "-paused"), null !== a && (a.style.transition = "width " + s.time.REMAINING + "ms " + s.progressBarEasing, a.style.width = "0%"), s.time.END = (new Date).getTime() + s.time.REMAINING, s.time.TIMER = setTimeout(function () {clearTimeout(s.time.TIMER), t.classList.contains(n + "-closing") || (o.hide(s, t, "timeout"), "function" == typeof i && i.apply(o))}, s.time.REMAINING), o.setSetting(r, "time", s.time)) : this.start()},
            reset: function () {clearTimeout(s.time.TIMER), delete s.time.REMAINING, o.setSetting(r, "time", s.time), t.classList.add(n + "-reseted"), t.classList.remove(n + "-paused"), null !== a && (a.style.transition = "none", a.style.width = "100%"), "function" == typeof i && setTimeout(function () {i.apply(o)}, 10)}
        }
    }, t.hide = function (e, t, o) {
        "object" != typeof t && (t = document.querySelector(t));
        var r = this, s = h(this.children[t.getAttribute("data-iziToast-ref")], e || {});
        s.closedBy = o || null, delete s.time.REMAINING, t.classList.add(n + "-closing"), function () {
            var e = document.querySelector("." + n + "-overlay");
            if (null !== e) {
                var t = e.getAttribute("data-iziToast-ref"), i = (t = t.split(",")).indexOf(String(s.ref));
                -1 !== i && t.splice(i, 1), e.setAttribute("data-iziToast-ref", t.join()), 0 === t.length && (e.classList.remove("fadeIn"), e.classList.add("fadeOut"), setTimeout(function () {e.remove()}, 700))
            }
        }(), s.transitionIn && t.classList.remove(s.transitionIn), s.transitionInMobile && t.classList.remove(s.transitionInMobile), i || window.innerWidth <= l ? s.transitionOutMobile && t.classList.add(s.transitionOutMobile) : s.transitionOut && t.classList.add(s.transitionOut);
        var a = t.parentNode.offsetHeight;
        t.parentNode.style.height = a + "px", t.style.pointerEvents = "none", (!i || window.innerWidth > l) && (t.parentNode.style.transitionDelay = "0.2s");
        try {
            var c = new CustomEvent(n + "-closing", {detail: s, bubbles: !0, cancelable: !0});
            document.dispatchEvent(c)
        } catch (e) {
            console.warn(e)
        }
        setTimeout(function () {
            t.parentNode.style.height = "0px", t.parentNode.style.overflow = "", setTimeout(function () {
                delete r.children[s.ref], t.parentNode.remove();
                try {
                    var e = new CustomEvent(n + "-closed", {detail: s, bubbles: !0, cancelable: !0});
                    document.dispatchEvent(e)
                } catch (e) {
                    console.warn(e)
                }
                void 0 !== s.onClosed && s.onClosed.apply(null, [s, t, o])
            }, 1e3)
        }, 200), void 0 !== s.onClosing && s.onClosing.apply(null, [s, t, o])
    }, t.show = function (e) {
        var o = this, r = h(c, e || {});
        if (r = h(d, r), r.time = {}, null === r.id && (r.id = m(r.title + r.message + r.color)), 1 === r.displayMode || "once" == r.displayMode) try {
            if (document.querySelectorAll("." + n + "#" + r.id).length > 0) return !1
        } catch (e) {
            console.warn("[" + n + "] Could not find an element with this selector: #" + r.id + ". Try to set an valid id.")
        }
        if (2 === r.displayMode || "replace" == r.displayMode) try {
            p(document.querySelectorAll("." + n + "#" + r.id), function (e, t) {o.hide(r, e, "replaced")})
        } catch (e) {
            console.warn("[" + n + "] Could not find an element with this selector: #" + r.id + ". Try to set an valid id.")
        }
        r.ref = (new Date).getTime() + Math.floor(1e7 * Math.random() + 1), t.children[r.ref] = r;
        var u = {
            body: document.querySelector("body"),
            overlay: document.createElement("div"),
            toast: document.createElement("div"),
            toastBody: document.createElement("div"),
            toastTexts: document.createElement("div"),
            toastCapsule: document.createElement("div"),
            cover: document.createElement("div"),
            buttons: document.createElement("div"),
            inputs: document.createElement("div"),
            icon: r.iconUrl ? document.createElement("img") : document.createElement("i"),
            wrapper: null
        };
        u.toast.setAttribute("data-iziToast-ref", r.ref), u.toast.appendChild(u.toastBody), u.toastCapsule.appendChild(u.toast), function () {
            if (u.toast.classList.add(n), u.toast.classList.add(n + "-opening"), u.toastCapsule.classList.add(n + "-capsule"), u.toastBody.classList.add(n + "-body"), u.toastTexts.classList.add(n + "-texts"), i || window.innerWidth <= l ? r.transitionInMobile && u.toast.classList.add(r.transitionInMobile) : r.transitionIn && u.toast.classList.add(r.transitionIn), r.class) {
                var e = r.class.split(" ");
                p(e, function (e, t) {u.toast.classList.add(e)})
            }
            r.id && (u.toast.id = r.id), r.rtl && (u.toast.classList.add(n + "-rtl"), u.toast.setAttribute("dir", "rtl")), r.layout > 1 && u.toast.classList.add(n + "-layout" + r.layout), r.balloon && u.toast.classList.add(n + "-balloon"), r.maxWidth && (isNaN(r.maxWidth) ? u.toast.style.maxWidth = r.maxWidth : u.toast.style.maxWidth = r.maxWidth + "px"), "" === r.theme && "light" === r.theme || u.toast.classList.add(n + "-theme-" + r.theme), r.color && (v(r.color) ? u.toast.style.background = r.color : u.toast.classList.add(n + "-color-" + r.color)), r.backgroundColor && (u.toast.style.background = r.backgroundColor, r.balloon && (u.toast.style.borderColor = r.backgroundColor))
        }(), r.image && (u.cover.classList.add(n + "-cover"), u.cover.style.width = r.imageWidth + "px", g(r.image.replace(/ /g, "")) ? u.cover.style.backgroundImage = "url(data:image/png;base64," + r.image.replace(/ /g, "") + ")" : u.cover.style.backgroundImage = "url(" + r.image + ")", r.rtl ? u.toastBody.style.marginRight = r.imageWidth + 10 + "px" : u.toastBody.style.marginLeft = r.imageWidth + 10 + "px", u.toast.appendChild(u.cover)), r.close ? (u.buttonClose = document.createElement("button"), u.buttonClose.type = "button", u.buttonClose.classList.add(n + "-close"), u.buttonClose.addEventListener("click", function (e) {e.target, o.hide(r, u.toast, "button")}), u.toast.appendChild(u.buttonClose)) : r.rtl ? u.toast.style.paddingLeft = "18px" : u.toast.style.paddingRight = "18px", r.progressBar && (u.progressBar = document.createElement("div"), u.progressBarDiv = document.createElement("div"), u.progressBar.classList.add(n + "-progressbar"), u.progressBarDiv.style.background = r.progressBarColor, u.progressBar.appendChild(u.progressBarDiv), u.toast.appendChild(u.progressBar)), r.timeout && (r.pauseOnHover && !r.resetOnHover && (u.toast.addEventListener("mouseenter", function (e) {o.progress(r, u.toast).pause()}), u.toast.addEventListener("mouseleave", function (e) {o.progress(r, u.toast).resume()})), r.resetOnHover && (u.toast.addEventListener("mouseenter", function (e) {o.progress(r, u.toast).reset()}), u.toast.addEventListener("mouseleave", function (e) {o.progress(r, u.toast).start()}))), r.iconUrl ? (u.icon.setAttribute("class", n + "-icon"), u.icon.setAttribute("src", r.iconUrl)) : r.icon && (u.icon.setAttribute("class", n + "-icon " + r.icon), r.iconText && u.icon.appendChild(document.createTextNode(r.iconText)), r.iconColor && (u.icon.style.color = r.iconColor)), (r.icon || r.iconUrl) && (r.rtl ? u.toastBody.style.paddingRight = "33px" : u.toastBody.style.paddingLeft = "33px", u.toastBody.appendChild(u.icon)), r.title.length > 0 && (u.strong = document.createElement("strong"), u.strong.classList.add(n + "-title"), u.strong.appendChild(f(r.title)), u.toastTexts.appendChild(u.strong), r.titleColor && (u.strong.style.color = r.titleColor), r.titleSize && (isNaN(r.titleSize) ? u.strong.style.fontSize = r.titleSize : u.strong.style.fontSize = r.titleSize + "px"), r.titleLineHeight && (isNaN(r.titleSize) ? u.strong.style.lineHeight = r.titleLineHeight : u.strong.style.lineHeight = r.titleLineHeight + "px")), r.message.length > 0 && (u.p = document.createElement("p"), u.p.classList.add(n + "-message"), u.p.appendChild(f(r.message)), u.toastTexts.appendChild(u.p), r.messageColor && (u.p.style.color = r.messageColor), r.messageSize && (isNaN(r.titleSize) ? u.p.style.fontSize = r.messageSize : u.p.style.fontSize = r.messageSize + "px"), r.messageLineHeight && (isNaN(r.titleSize) ? u.p.style.lineHeight = r.messageLineHeight : u.p.style.lineHeight = r.messageLineHeight + "px")), r.title.length > 0 && r.message.length > 0 && (r.rtl ? u.strong.style.marginLeft = "10px" : 2 === r.layout || r.rtl || (u.strong.style.marginRight = "10px")), u.toastBody.appendChild(u.toastTexts);
        var b;
        r.inputs.length > 0 && (u.inputs.classList.add(n + "-inputs"), p(r.inputs, function (e, t) {u.inputs.appendChild(f(e[0])), (b = u.inputs.childNodes)[t].classList.add(n + "-inputs-child"), e[3] && setTimeout(function () {b[t].focus()}, 300), b[t].addEventListener(e[1], function (t) {return (0, e[2])(o, u.toast, this, t)})}), u.toastBody.appendChild(u.inputs)), r.buttons.length > 0 && (u.buttons.classList.add(n + "-buttons"), p(r.buttons, function (e, t) {
            u.buttons.appendChild(f(e[0]));
            var i = u.buttons.childNodes;
            i[t].classList.add(n + "-buttons-child"), e[2] && setTimeout(function () {i[t].focus()}, 300), i[t].addEventListener("click", function (t) {return t.preventDefault(), (0, e[1])(o, u.toast, this, t, b)})
        })), u.toastBody.appendChild(u.buttons), r.message.length > 0 && (r.inputs.length > 0 || r.buttons.length > 0) && (u.p.style.marginBottom = "0"), (r.inputs.length > 0 || r.buttons.length > 0) && (r.rtl ? u.toastTexts.style.marginLeft = "10px" : u.toastTexts.style.marginRight = "10px", r.inputs.length > 0 && r.buttons.length > 0 && (r.rtl ? u.inputs.style.marginLeft = "8px" : u.inputs.style.marginRight = "8px")), u.toastCapsule.style.visibility = "hidden", setTimeout(function () {
            var e = u.toast.offsetHeight, t = u.toast.currentStyle || window.getComputedStyle(u.toast), n = t.marginTop;
            n = n.split("px"), n = parseInt(n[0]);
            var i = t.marginBottom;
            i = i.split("px"), i = parseInt(i[0]), u.toastCapsule.style.visibility = "", u.toastCapsule.style.height = e + i + n + "px", setTimeout(function () {u.toastCapsule.style.height = "auto", r.target && (u.toastCapsule.style.overflow = "visible")}, 500), r.timeout && o.progress(r, u.toast).start()
        }, 100), function () {
            var e = r.position;
            if (r.target) u.wrapper = document.querySelector(r.target), u.wrapper.classList.add(n + "-target"), r.targetFirst ? u.wrapper.insertBefore(u.toastCapsule, u.wrapper.firstChild) : u.wrapper.appendChild(u.toastCapsule); else {
                if (-1 == a.indexOf(r.position)) return void console.warn("[" + n + "] Incorrect position.\nIt can be Ð²Ð‚Ñ” " + a);
                e = i || window.innerWidth <= l ? "bottomLeft" == r.position || "bottomRight" == r.position || "bottomCenter" == r.position ? n + "-wrapper-bottomCenter" : "topLeft" == r.position || "topRight" == r.position || "topCenter" == r.position ? n + "-wrapper-topCenter" : n + "-wrapper-center" : n + "-wrapper-" + e, u.wrapper = document.querySelector("." + n + "-wrapper." + e), u.wrapper || (u.wrapper = document.createElement("div"), u.wrapper.classList.add(n + "-wrapper"), u.wrapper.classList.add(e), document.body.appendChild(u.wrapper)), "topLeft" == r.position || "topCenter" == r.position || "topRight" == r.position ? u.wrapper.insertBefore(u.toastCapsule, u.wrapper.firstChild) : u.wrapper.appendChild(u.toastCapsule)
            }
            isNaN(r.zindex) ? console.warn("[" + n + "] Invalid zIndex.") : u.wrapper.style.zIndex = r.zindex
        }(), r.overlay && (null !== document.querySelector("." + n + "-overlay.fadeIn") ? (u.overlay = document.querySelector("." + n + "-overlay"), u.overlay.setAttribute("data-iziToast-ref", u.overlay.getAttribute("data-iziToast-ref") + "," + r.ref), isNaN(r.zindex) || null === r.zindex || (u.overlay.style.zIndex = r.zindex - 1)) : (u.overlay.classList.add(n + "-overlay"), u.overlay.classList.add("fadeIn"), u.overlay.style.background = r.overlayColor, u.overlay.setAttribute("data-iziToast-ref", r.ref), isNaN(r.zindex) || null === r.zindex || (u.overlay.style.zIndex = r.zindex - 1), document.querySelector("body").appendChild(u.overlay)), r.overlayClose ? (u.overlay.removeEventListener("click", {}), u.overlay.addEventListener("click", function (e) {o.hide(r, u.toast, "overlay")})) : u.overlay.removeEventListener("click", {})), function () {
            if (r.animateInside) {
                u.toast.classList.add(n + "-animateInside");
                var e = [200, 100, 300];
                "bounceInLeft" != r.transitionIn && "bounceInRight" != r.transitionIn || (e = [400, 200, 400]), r.title.length > 0 && setTimeout(function () {u.strong.classList.add("slideIn")}, e[0]), r.message.length > 0 && setTimeout(function () {u.p.classList.add("slideIn")}, e[1]), (r.icon || r.iconUrl) && setTimeout(function () {u.icon.classList.add("revealIn")}, e[2]);
                var t = 150;
                r.buttons.length > 0 && u.buttons && setTimeout(function () {p(u.buttons.childNodes, function (e, n) {setTimeout(function () {e.classList.add("revealIn")}, t), t += 150})}, r.inputs.length > 0 ? 150 : 0), r.inputs.length > 0 && u.inputs && (t = 150, p(u.inputs.childNodes, function (e, n) {setTimeout(function () {e.classList.add("revealIn")}, t), t += 150}))
            }
        }(), r.onOpening.apply(null, [r, u.toast]);
        try {
            var w = new CustomEvent(n + "-opening", {detail: r, bubbles: !0, cancelable: !0});
            document.dispatchEvent(w)
        } catch (e) {
            console.warn(e)
        }
        setTimeout(function () {
            u.toast.classList.remove(n + "-opening"), u.toast.classList.add(n + "-opened");
            try {
                var e = new CustomEvent(n + "-opened", {detail: r, bubbles: !0, cancelable: !0});
                document.dispatchEvent(e)
            } catch (e) {
                console.warn(e)
            }
            r.onOpened.apply(null, [r, u.toast])
        }, 1e3), r.drag && (s ? (u.toast.addEventListener("touchstart", function (e) {y.startMoving(this, o, r, e)}, !1), u.toast.addEventListener("touchend", function (e) {y.stopMoving(this, e)}, !1)) : (u.toast.addEventListener("mousedown", function (e) {e.preventDefault(), y.startMoving(this, o, r, e)}, !1), u.toast.addEventListener("mouseup", function (e) {e.preventDefault(), y.stopMoving(this, e)}, !1))), r.closeOnEscape && document.addEventListener("keyup", function (e) {27 == (e = e || window.event).keyCode && o.hide(r, u.toast, "esc")}), r.closeOnClick && u.toast.addEventListener("click", function (e) {o.hide(r, u.toast, "toast")}), o.toast = u.toast
    }, t
}), function (e) {"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, n) {return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n} : e(jQuery)}(function (e) {
    function t(e) {return 9 === e ? -1 !== navigator.appVersion.indexOf("MSIE 9.") : (userAgent = navigator.userAgent, userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1)}

    function n(e) {return parseInt(String(e).split(/%|px|em|cm|vh|vw/)[0])}

    function i(t) {
        var n = t.replace(/^.*#/, ""), i = e(t);
        i.attr("id", n + "-tmp"), window.location.hash = t, i.attr("id", n)
    }

    var o = e(window), r = e(document), s = "iziModal",
        a = {CLOSING: "closing", CLOSED: "closed", OPENING: "opening", OPENED: "opened", DESTROYED: "destroyed"},
        l = function () {
            var e, t = document.createElement("fakeelement"), n = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (e in n) if (void 0 !== t.style[e]) return n[e]
        }(), c = !!/Mobi/.test(navigator.userAgent);
    window.$iziModal = {}, window.$iziModal.autoOpen = 0, window.$iziModal.history = !1;
    var d = function (e, t) {this.init(e, t)};
    return d.prototype = {
        constructor: d,
        init: function (t, n) {
            var i = this;
            this.$element = e(t), void 0 !== this.$element[0].id && "" !== this.$element[0].id ? this.id = this.$element[0].id : (this.id = s + Math.floor(1e7 * Math.random() + 1), this.$element.attr("id", this.id)), this.classes = void 0 !== this.$element.attr("class") ? this.$element.attr("class") : "", this.content = this.$element.html(), this.state = a.CLOSED, this.options = n, this.width = 0, this.timer = null, this.timerTimeout = null, this.progressBar = null, this.isPaused = !1, this.isFullscreen = !1, this.headerHeight = 0, this.modalHeight = 0, this.$overlay = e('<div class="' + s + '-overlay" style="background-color:' + n.overlayColor + '"></div>'), this.$navigate = e('<div class="' + s + '-navigate"><div class="' + s + '-navigate-caption">Use</div><button class="' + s + '-navigate-prev"></button><button class="' + s + '-navigate-next"></button></div>'), this.group = {
                name: this.$element.attr("data-" + s + "-group"),
                index: null,
                ids: []
            }, this.$element.attr("aria-hidden", "true"), this.$element.attr("aria-labelledby", this.id), this.$element.attr("role", "dialog"), this.$element.hasClass("iziModal") || this.$element.addClass("iziModal"), void 0 === this.group.name && "" !== n.group && (this.group.name = n.group, this.$element.attr("data-" + s + "-group", n.group)), !0 === this.options.loop && this.$element.attr("data-" + s + "-loop", !0), e.each(this.options, function (e, t) {
                var o = i.$element.attr("data-" + s + "-" + e);
                try {
                    void 0 !== o && (n[e] = "" === o || "true" == o || "false" != o && ("function" == typeof t ? new Function(o) : o))
                } catch (e) {
                }
            }), !1 !== n.appendTo && this.$element.appendTo(n.appendTo), !0 === n.iframe ? (this.$element.html('<div class="' + s + '-wrap"><div class="' + s + '-content"><iframe class="' + s + '-iframe"></iframe>' + this.content + "</div></div>"), null !== n.iframeHeight && this.$element.find("." + s + "-iframe").css("height", n.iframeHeight)) : this.$element.html('<div class="' + s + '-wrap"><div class="' + s + '-content">' + this.content + "</div></div>"), null !== this.options.background && this.$element.css("background", this.options.background), this.$wrap = this.$element.find("." + s + "-wrap"), null === n.zindex || isNaN(parseInt(n.zindex)) || (this.$element.css("z-index", n.zindex), this.$navigate.css("z-index", n.zindex - 1), this.$overlay.css("z-index", n.zindex - 2)), "" !== n.radius && this.$element.css("border-radius", n.radius), "" !== n.padding && this.$element.find("." + s + "-content").css("padding", n.padding), "" !== n.theme && ("light" === n.theme ? this.$element.addClass(s + "-light") : this.$element.addClass(n.theme)), !0 === n.rtl && this.$element.addClass(s + "-rtl"), !0 === n.openFullscreen && (this.isFullscreen = !0, this.$element.addClass("isFullscreen")), this.createHeader(), this.recalcWidth(), this.recalcVerticalPos(), !i.options.afterRender || "function" != typeof i.options.afterRender && "object" != typeof i.options.afterRender || i.options.afterRender(i)
        },
        createHeader: function () {
            this.$header = e('<div class="' + s + '-header"><h2 class="' + s + '-header-title">' + this.options.title + '</h2><p class="' + s + '-header-subtitle">' + this.options.subtitle + '</p><div class="' + s + '-header-buttons"></div></div>'), !0 === this.options.closeButton && this.$header.find("." + s + "-header-buttons").append('<a href="javascript:void(0)" class="' + s + "-button " + s + '-button-close" data-' + s + "-close></a>"), !0 === this.options.fullscreen && this.$header.find("." + s + "-header-buttons").append('<a href="javascript:void(0)" class="' + s + "-button " + s + '-button-fullscreen" data-' + s + "-fullscreen></a>"), !0 === this.options.timeoutProgressbar && this.$header.prepend('<div class="' + s + '-progressbar"><div style="background-color:' + this.options.timeoutProgressbarColor + '"></div></div>'), "" === this.options.subtitle && this.$header.addClass(s + "-noSubtitle"), "" !== this.options.title && (null !== this.options.headerColor && (!0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + this.options.headerColor), this.$header.css("background", this.options.headerColor)), null === this.options.icon && null === this.options.iconText || (this.$header.prepend('<i class="' + s + '-header-icon"></i>'), null !== this.options.icon && this.$header.find("." + s + "-header-icon").addClass(this.options.icon).css("color", this.options.iconColor), null !== this.options.iconText && this.$header.find("." + s + "-header-icon").html(this.options.iconText)), this.$element.css("overflow", "hidden").prepend(this.$header))
        },
        setGroup: function (t) {
            var n = this, i = this.group.name || t;
            if (this.group.ids = [], void 0 !== t && t !== this.group.name && (i = t, this.group.name = i, this.$element.attr("data-" + s + "-group", i)), void 0 !== i && "" !== i) {
                var o = 0;
                e.each(e("." + s + "[data-" + s + "-group=" + i + "]"), function (t, i) {n.group.ids.push(e(this)[0].id), n.id == e(this)[0].id && (n.group.index = o), o++})
            }
        },
        toggle: function () {this.state == a.OPENED && this.close(), this.state == a.CLOSED && this.open()},
        startProgress: function (e) {
            var t = this;
            this.isPaused = !1, clearTimeout(this.timerTimeout), !0 === this.options.timeoutProgressbar ? (this.progressBar = {
                hideEta: null,
                maxHideTime: null,
                currentTime: (new Date).getTime(),
                el: this.$element.find("." + s + "-progressbar > div"),
                updateProgress: function () {
                    if (!t.isPaused) {
                        t.progressBar.currentTime = t.progressBar.currentTime + 10;
                        var e = (t.progressBar.hideEta - t.progressBar.currentTime) / t.progressBar.maxHideTime * 100;
                        t.progressBar.el.width(e + "%"), e < 0 && t.close()
                    }
                }
            }, e > 0 && (this.progressBar.maxHideTime = parseFloat(e), this.progressBar.hideEta = (new Date).getTime() + this.progressBar.maxHideTime, this.timerTimeout = setInterval(this.progressBar.updateProgress, 10))) : this.timerTimeout = setTimeout(function () {t.close()}, t.options.timeout)
        },
        pauseProgress: function () {this.isPaused = !0},
        resumeProgress: function () {this.isPaused = !1},
        resetProgress: function (e) {clearTimeout(this.timerTimeout), this.progressBar = {}, this.$element.find("." + s + "-progressbar > div").width("100%")},
        open: function (t) {
            function n() {o.state = a.OPENED, o.$element.trigger(a.OPENED), !o.options.onOpened || "function" != typeof o.options.onOpened && "object" != typeof o.options.onOpened || o.options.onOpened(o)}

            var o = this;
            try {
                void 0 !== t && !1 === t.preventClose && e.each(e("." + s), function (t, n) {
                    if (void 0 !== e(n).data().iziModal) {
                        var i = e(n).iziModal("getState");
                        "opened" != i && "opening" != i || e(n).iziModal("close")
                    }
                })
            } catch (e) {
            }
            if (function () {
                if (o.options.history) {
                    var e = document.title;
                    document.title = e + " - " + o.options.title, i("#" + o.id), document.title = e, window.$iziModal.history = !0
                } else window.$iziModal.history = !1
            }(), this.state == a.CLOSED) {
                if (o.$element.off("click", "[data-" + s + "-close]").on("click", "[data-" + s + "-close]", function (t) {
                    t.preventDefault();
                    var n = e(t.currentTarget).attr("data-" + s + "-transitionOut");
                    void 0 !== n ? o.close({transition: n}) : o.close()
                }), o.$element.off("click", "[data-" + s + "-fullscreen]").on("click", "[data-" + s + "-fullscreen]", function (e) {e.preventDefault(), !0 === o.isFullscreen ? (o.isFullscreen = !1, o.$element.removeClass("isFullscreen")) : (o.isFullscreen = !0, o.$element.addClass("isFullscreen")), o.options.onFullscreen && "function" == typeof o.options.onFullscreen && o.options.onFullscreen(o), o.$element.trigger("fullscreen", o)}), o.$navigate.off("click", "." + s + "-navigate-next").on("click", "." + s + "-navigate-next", function (e) {o.next(e)}), o.$element.off("click", "[data-" + s + "-next]").on("click", "[data-" + s + "-next]", function (e) {o.next(e)}), o.$navigate.off("click", "." + s + "-navigate-prev").on("click", "." + s + "-navigate-prev", function (e) {o.prev(e)}), o.$element.off("click", "[data-" + s + "-prev]").on("click", "[data-" + s + "-prev]", function (e) {o.prev(e)}), this.setGroup(), this.state = a.OPENING, this.$element.trigger(a.OPENING), this.$element.attr("aria-hidden", "false"), !0 === this.options.timeoutProgressbar && this.$element.find("." + s + "-progressbar > div").width("100%"), !0 === this.options.iframe) {
                    this.$element.find("." + s + "-content").addClass(s + "-content-loader"), this.$element.find("." + s + "-iframe").on("load", function () {e(this).parent().removeClass(s + "-content-loader")});
                    var d = null;
                    try {
                        d = "" !== e(t.currentTarget).attr("href") ? e(t.currentTarget).attr("href") : null
                    } catch (e) {
                    }
                    if (null === this.options.iframeURL || null !== d && void 0 !== d || (d = this.options.iframeURL), null === d || void 0 === d) throw new Error("Failed to find iframe URL");
                    this.$element.find("." + s + "-iframe").attr("src", d)
                }
                (this.options.bodyOverflow || c) && (e("html").addClass(s + "-isOverflow"), c && e("body").css("overflow", "hidden")), this.options.onOpening && "function" == typeof this.options.onOpening && this.options.onOpening(this), function () {
                    if (o.group.ids.length > 1) {
                        o.$navigate.appendTo("body"), o.$navigate.addClass("fadeIn"), !0 === o.options.navigateCaption && o.$navigate.find("." + s + "-navigate-caption").show();
                        var i = o.$element.outerWidth();
                        !1 !== o.options.navigateArrows ? "closeScreenEdge" === o.options.navigateArrows ? (o.$navigate.find("." + s + "-navigate-prev").css("left", 0).show(), o.$navigate.find("." + s + "-navigate-next").css("right", 0).show()) : (o.$navigate.find("." + s + "-navigate-prev").css("margin-left", -(i / 2 + 84)).show(), o.$navigate.find("." + s + "-navigate-next").css("margin-right", -(i / 2 + 84)).show()) : (o.$navigate.find("." + s + "-navigate-prev").hide(), o.$navigate.find("." + s + "-navigate-next").hide());
                        0 === o.group.index && 0 === e("." + s + "[data-" + s + '-group="' + o.group.name + '"][data-' + s + "-loop]").length && !1 === o.options.loop && o.$navigate.find("." + s + "-navigate-prev").hide(), o.group.index + 1 === o.group.ids.length && 0 === e("." + s + "[data-" + s + '-group="' + o.group.name + '"][data-' + s + "-loop]").length && !1 === o.options.loop && o.$navigate.find("." + s + "-navigate-next").hide()
                    }
                    !0 === o.options.overlay && (!1 === o.options.appendToOverlay ? o.$overlay.appendTo("body") : o.$overlay.appendTo(o.options.appendToOverlay)), o.options.transitionInOverlay && o.$overlay.addClass(o.options.transitionInOverlay);
                    var r = o.options.transitionIn;
                    "object" == typeof t && (void 0 === t.transition && void 0 === t.transitionIn || (r = t.transition || t.transitionIn), void 0 !== t.zindex && o.setZindex(t.zindex)), "" !== r && void 0 !== l ? (o.$element.addClass("transitionIn " + r).show(), o.$wrap.one(l, function () {o.$element.removeClass(r + " transitionIn"), o.$overlay.removeClass(o.options.transitionInOverlay), o.$navigate.removeClass("fadeIn"), n()})) : (o.$element.show(), n()), !0 !== o.options.pauseOnHover || !0 !== o.options.pauseOnHover || !1 === o.options.timeout || isNaN(parseInt(o.options.timeout)) || !1 === o.options.timeout || 0 === o.options.timeout || (o.$element.off("mouseenter").on("mouseenter", function (e) {e.preventDefault(), o.isPaused = !0}), o.$element.off("mouseleave").on("mouseleave", function (e) {e.preventDefault(), o.isPaused = !1}))
                }(), !1 === this.options.timeout || isNaN(parseInt(this.options.timeout)) || !1 === this.options.timeout || 0 === this.options.timeout || o.startProgress(this.options.timeout), this.options.overlayClose && !this.$element.hasClass(this.options.transitionOut) && this.$overlay.click(function () {o.close()}), this.options.focusInput && this.$element.find(":input:not(button):enabled:visible:first").focus(), function e() {o.recalcLayout(), o.timer = setTimeout(e, 300)}(), r.on("keydown." + s, function (e) {o.options.closeOnEscape && 27 === e.keyCode && o.close()})
            }
        },
        close: function (t) {
            function n() {i.state = a.CLOSED, i.$element.trigger(a.CLOSED), !0 === i.options.iframe && i.$element.find("." + s + "-iframe").attr("src", ""), (i.options.bodyOverflow || c) && (e("html").removeClass(s + "-isOverflow"), c && e("body").css("overflow", "auto")), i.options.onClosed && "function" == typeof i.options.onClosed && i.options.onClosed(i), !0 === i.options.restoreDefaultContent && i.$element.find("." + s + "-content").html(i.content), 0 === e("." + s + ":visible").length && e("html").removeClass(s + "-isAttached")}

            var i = this;
            if (this.state == a.OPENED || this.state == a.OPENING) {
                r.off("keydown." + s), this.state = a.CLOSING, this.$element.trigger(a.CLOSING), this.$element.attr("aria-hidden", "true"), clearTimeout(this.timer), clearTimeout(this.timerTimeout), i.options.onClosing && "function" == typeof i.options.onClosing && i.options.onClosing(this);
                var o = this.options.transitionOut;
                "object" == typeof t && (void 0 === t.transition && void 0 === t.transitionOut || (o = t.transition || t.transitionOut)), !1 === o || "" === o || void 0 === l ? (this.$element.hide(), this.$overlay.remove(), this.$navigate.remove(), n()) : (this.$element.attr("class", [this.classes, s, o, "light" == this.options.theme ? s + "-light" : this.options.theme, !0 === this.isFullscreen ? "isFullscreen" : "", this.options.rtl ? s + "-rtl" : ""].join(" ")), this.$overlay.attr("class", s + "-overlay " + this.options.transitionOutOverlay), !1 === i.options.navigateArrows || c || this.$navigate.attr("class", s + "-navigate fadeOut"), this.$element.one(l, function () {i.$element.hasClass(o) && i.$element.removeClass(o + " transitionOut").hide(), i.$overlay.removeClass(i.options.transitionOutOverlay).remove(), i.$navigate.removeClass("fadeOut").remove(), n()}))
            }
        },
        next: function (t) {
            var n = this, i = "fadeInRight", o = "fadeOutLeft", r = e("." + s + ":visible"), a = {};
            a.out = this, void 0 !== t && "object" != typeof t ? (t.preventDefault(), r = e(t.currentTarget), i = r.attr("data-" + s + "-transitionIn"), o = r.attr("data-" + s + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (i = t.transitionIn), void 0 !== t.transitionOut && (o = t.transitionOut)), this.close({transition: o}), setTimeout(function () {
                for (var t = e("." + s + "[data-" + s + '-group="' + n.group.name + '"][data-' + s + "-loop]").length, o = n.group.index + 1; o <= n.group.ids.length; o++) {
                    try {
                        a.in = e("#" + n.group.ids[o]).data().iziModal
                    } catch (e) {
                    }
                    if (void 0 !== a.in) {
                        e("#" + n.group.ids[o]).iziModal("open", {transition: i});
                        break
                    }
                    if (o == n.group.ids.length && t > 0 || !0 === n.options.loop) for (var r = 0; r <= n.group.ids.length; r++) if (a.in = e("#" + n.group.ids[r]).data().iziModal, void 0 !== a.in) {
                        e("#" + n.group.ids[r]).iziModal("open", {transition: i});
                        break
                    }
                }
            }, 200), e(document).trigger(s + "-group-change", a)
        },
        prev: function (t) {
            var n = this, i = "fadeInLeft", o = "fadeOutRight", r = e("." + s + ":visible"), a = {};
            a.out = this, void 0 !== t && "object" != typeof t ? (t.preventDefault(), r = e(t.currentTarget), i = r.attr("data-" + s + "-transitionIn"), o = r.attr("data-" + s + "-transitionOut")) : void 0 !== t && (void 0 !== t.transitionIn && (i = t.transitionIn), void 0 !== t.transitionOut && (o = t.transitionOut)), this.close({transition: o}), setTimeout(function () {
                for (var t = e("." + s + "[data-" + s + '-group="' + n.group.name + '"][data-' + s + "-loop]").length, o = n.group.index; o >= 0; o--) {
                    try {
                        a.in = e("#" + n.group.ids[o - 1]).data().iziModal
                    } catch (e) {
                    }
                    if (void 0 !== a.in) {
                        e("#" + n.group.ids[o - 1]).iziModal("open", {transition: i});
                        break
                    }
                    if (0 === o && t > 0 || !0 === n.options.loop) for (var r = n.group.ids.length - 1; r >= 0; r--) if (a.in = e("#" + n.group.ids[r]).data().iziModal, void 0 !== a.in) {
                        e("#" + n.group.ids[r]).iziModal("open", {transition: i});
                        break
                    }
                }
            }, 200), e(document).trigger(s + "-group-change", a)
        },
        destroy: function () {
            var t = e.Event("destroy");
            this.$element.trigger(t), r.off("keydown." + s), clearTimeout(this.timer), clearTimeout(this.timerTimeout), !0 === this.options.iframe && this.$element.find("." + s + "-iframe").remove(), this.$element.html(this.$element.find("." + s + "-content").html()), this.$element.off("click", "[data-" + s + "-close]"), this.$element.off("click", "[data-" + s + "-fullscreen]"), this.$element.off("." + s).removeData(s).attr("style", ""), this.$overlay.remove(), this.$navigate.remove(), this.$element.trigger(a.DESTROYED), this.$element = null
        },
        getState: function () {return this.state},
        getGroup: function () {return this.group},
        setWidth: function (e) {
            this.options.width = e, this.recalcWidth();
            var t = this.$element.outerWidth();
            !0 !== this.options.navigateArrows && "closeToModal" != this.options.navigateArrows || (this.$navigate.find("." + s + "-navigate-prev").css("margin-left", -(t / 2 + 84)).show(), this.$navigate.find("." + s + "-navigate-next").css("margin-right", -(t / 2 + 84)).show())
        },
        setTop: function (e) {this.options.top = e, this.recalcVerticalPos(!1)},
        setBottom: function (e) {this.options.bottom = e, this.recalcVerticalPos(!1)},
        setHeader: function (e) {e ? this.$element.find("." + s + "-header").show() : (this.headerHeight = 0, this.$element.find("." + s + "-header").hide())},
        setTitle: function (e) {this.options.title = e, 0 === this.headerHeight && this.createHeader(), 0 === this.$header.find("." + s + "-header-title").length && this.$header.append('<h2 class="' + s + '-header-title"></h2>'), this.$header.find("." + s + "-header-title").html(e)},
        setSubtitle: function (e) {"" === e ? (this.$header.find("." + s + "-header-subtitle").remove(), this.$header.addClass(s + "-noSubtitle")) : (0 === this.$header.find("." + s + "-header-subtitle").length && this.$header.append('<p class="' + s + '-header-subtitle"></p>'), this.$header.removeClass(s + "-noSubtitle")), this.$header.find("." + s + "-header-subtitle").html(e), this.options.subtitle = e},
        setIcon: function (e) {0 === this.$header.find("." + s + "-header-icon").length && this.$header.prepend('<i class="' + s + '-header-icon"></i>'), this.$header.find("." + s + "-header-icon").attr("class", s + "-header-icon " + e), this.options.icon = e},
        setIconText: function (e) {this.$header.find("." + s + "-header-icon").html(e), this.options.iconText = e},
        setHeaderColor: function (e) {!0 === this.options.borderBottom && this.$element.css("border-bottom", "3px solid " + e), this.$header.css("background", e), this.options.headerColor = e},
        setBackground: function (e) {!1 === e ? (this.options.background = null, this.$element.css("background", "")) : (this.$element.css("background", e), this.options.background = e)},
        setZindex: function (e) {isNaN(parseInt(this.options.zindex)) || (this.options.zindex = e, this.$element.css("z-index", e), this.$navigate.css("z-index", e - 1), this.$overlay.css("z-index", e - 2))},
        setFullscreen: function (e) {e ? (this.isFullscreen = !0, this.$element.addClass("isFullscreen")) : (this.isFullscreen = !1, this.$element.removeClass("isFullscreen"))},
        setContent: function (e) {"object" == typeof e && (!0 === (e.default || !1) && (this.content = e.content), e = e.content), !1 === this.options.iframe && this.$element.find("." + s + "-content").html(e)},
        setTransitionIn: function (e) {this.options.transitionIn = e},
        setTransitionOut: function (e) {this.options.transitionOut = e},
        setTimeout: function (e) {this.options.timeout = e},
        resetContent: function () {this.$element.find("." + s + "-content").html(this.content)},
        startLoading: function () {
            this.$element.find("." + s + "-loader").length || this.$element.append('<div class="' + s + '-loader fadeIn"></div>'), this.$element.find("." + s + "-loader").css({
                top: this.headerHeight,
                borderRadius: this.options.radius
            })
        },
        stopLoading: function () {
            var e = this.$element.find("." + s + "-loader");
            e.length || (this.$element.prepend('<div class="' + s + '-loader fadeIn"></div>'), e = this.$element.find("." + s + "-loader").css("border-radius", this.options.radius)), e.removeClass("fadeIn").addClass("fadeOut"), setTimeout(function () {e.remove()}, 600)
        },
        recalcWidth: function () {
            var e = this;
            if (this.$element.css("max-width", this.options.width), t()) {
                var n = e.options.width;
                n.toString().split("%").length > 1 && (n = e.$element.outerWidth()), e.$element.css({
                    left: "50%",
                    marginLeft: -n / 2
                })
            }
        },
        recalcVerticalPos: function (e) {
            null !== this.options.top && !1 !== this.options.top ? (this.$element.css("margin-top", this.options.top), 0 === this.options.top && this.$element.css({
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0
            })) : !1 === e && this.$element.css({
                marginTop: "",
                borderRadius: this.options.radius
            }), null !== this.options.bottom && !1 !== this.options.bottom ? (this.$element.css("margin-bottom", this.options.bottom), 0 === this.options.bottom && this.$element.css({
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
            })) : !1 === e && this.$element.css({marginBottom: "", borderRadius: this.options.radius})
        },
        recalcLayout: function () {
            var i = this, r = o.height(), l = this.$element.outerHeight(), c = this.$element.outerWidth(),
                d = this.$element.find("." + s + "-content")[0].scrollHeight, u = d + this.headerHeight,
                p = this.$element.innerHeight() - this.headerHeight,
                h = (parseInt(-(this.$element.innerHeight() + 1) / 2), this.$wrap.scrollTop()), f = 0;
            t() && (c >= o.width() || !0 === this.isFullscreen ? this.$element.css({
                left: "0",
                marginLeft: ""
            }) : this.$element.css({
                left: "50%",
                marginLeft: -c / 2
            })), !0 === this.options.borderBottom && "" !== this.options.title && (f = 3), this.$element.find("." + s + "-header").length && this.$element.find("." + s + "-header").is(":visible") ? (this.headerHeight = parseInt(this.$element.find("." + s + "-header").innerHeight()), this.$element.css("overflow", "hidden")) : (this.headerHeight = 0, this.$element.css("overflow", "")), this.$element.find("." + s + "-loader").length && this.$element.find("." + s + "-loader").css("top", this.headerHeight), l !== this.modalHeight && (this.modalHeight = l, this.options.onResize && "function" == typeof this.options.onResize && this.options.onResize(this)), this.state != a.OPENED && this.state != a.OPENING || (!0 === this.options.iframe && (r < this.options.iframeHeight + this.headerHeight + f || !0 === this.isFullscreen ? this.$element.find("." + s + "-iframe").css("height", r - (this.headerHeight + f)) : this.$element.find("." + s + "-iframe").css("height", this.options.iframeHeight)), l == r ? this.$element.addClass("isAttached") : this.$element.removeClass("isAttached"), !1 === this.isFullscreen && this.$element.width() >= o.width() ? this.$element.find("." + s + "-button-fullscreen").hide() : this.$element.find("." + s + "-button-fullscreen").show(), this.recalcButtons(), !1 === this.isFullscreen && (r = r - (n(this.options.top) || 0) - (n(this.options.bottom) || 0)), u > r ? (this.options.top > 0 && null === this.options.bottom && d < o.height() && this.$element.addClass("isAttachedBottom"), this.options.bottom > 0 && null === this.options.top && d < o.height() && this.$element.addClass("isAttachedTop"), 1 === e("." + s + ":visible").length && e("html").addClass(s + "-isAttached"), this.$element.css("height", r)) : (this.$element.css("height", d + (this.headerHeight + f)), this.$element.removeClass("isAttachedTop isAttachedBottom"), 1 === e("." + s + ":visible").length && e("html").removeClass(s + "-isAttached")), d > p && u > r ? (i.$element.addClass("hasScroll"), i.$wrap.css("height", l - (i.headerHeight + f))) : (i.$element.removeClass("hasScroll"), i.$wrap.css("height", "auto")), p + h < d - 30 ? i.$element.addClass("hasShadow") : i.$element.removeClass("hasShadow"))
        },
        recalcButtons: function () {
            var e = this.$header.find("." + s + "-header-buttons").innerWidth() + 10;
            !0 === this.options.rtl ? this.$header.css("padding-left", e) : this.$header.css("padding-right", e)
        }
    }, o.off("load." + s).on("load." + s, function (t) {
        var n = document.location.hash;
        if (0 === window.$iziModal.autoOpen && !e("." + s).is(":visible")) try {
            var i = e(n).data();
            void 0 !== i && !1 !== i.iziModal.options.autoOpen && e(n).iziModal("open")
        } catch (e) {
        }
    }), o.off("hashchange." + s).on("hashchange." + s, function (t) {
        var n = document.location.hash;
        if ("" !== n) try {
            void 0 !== e(n).data() && "opening" !== e(n).iziModal("getState") && setTimeout(function () {e(n).iziModal("open", {preventClose: !1})}, 200)
        } catch (e) {
        } else window.$iziModal.history && e.each(e("." + s), function (t, n) {
            if (void 0 !== e(n).data().iziModal) {
                var i = e(n).iziModal("getState");
                "opened" != i && "opening" != i || e(n).iziModal("close")
            }
        })
    }), r.off("click", "[data-" + s + "-open]").on("click", "[data-" + s + "-open]", function (t) {
        t.preventDefault();
        var n = e("." + s + ":visible"), i = e(t.currentTarget).attr("data-" + s + "-open"),
            o = e(t.currentTarget).attr("data-" + s + "-preventClose"),
            r = e(t.currentTarget).attr("data-" + s + "-transitionIn"),
            a = e(t.currentTarget).attr("data-" + s + "-transitionOut"),
            l = e(t.currentTarget).attr("data-" + s + "-zindex");
        void 0 !== l && e(i).iziModal("setZindex", l), void 0 === o && (void 0 !== a ? n.iziModal("close", {transition: a}) : n.iziModal("close")), setTimeout(function () {void 0 !== r ? e(i).iziModal("open", {transition: r}) : e(i).iziModal("open")}, 200)
    }), r.off("keyup." + s).on("keyup." + s, function (t) {
        if (e("." + s + ":visible").length) {
            var n = e("." + s + ":visible")[0].id, i = e("#" + n).data().iziModal.options.arrowKeys,
                o = e("#" + n).iziModal("getGroup"), r = t || window.event, a = r.target || r.srcElement;
            void 0 === n || !i || void 0 === o.name || r.ctrlKey || r.metaKey || r.altKey || "INPUT" === a.tagName.toUpperCase() || "TEXTAREA" == a.tagName.toUpperCase() || (37 === r.keyCode ? e("#" + n).iziModal("prev", r) : 39 === r.keyCode && e("#" + n).iziModal("next", r))
        }
    }), e.fn[s] = function (t, n) {
        if (!e(this).length && "object" == typeof t) {
            var i = {$el: document.createElement("div"), id: this.selector.split("#"), class: this.selector.split(".")};
            if (i.id.length > 1) {
                try {
                    i.$el = document.createElement(id[0])
                } catch (e) {
                }
                i.$el.id = this.selector.split("#")[1].trim()
            } else if (i.class.length > 1) {
                try {
                    i.$el = document.createElement(i.class[0])
                } catch (e) {
                }
                for (var o = 1; o < i.class.length; o++) i.$el.classList.add(i.class[o].trim())
            }
            document.body.appendChild(i.$el), this.push(e(this.selector))
        }
        for (var r = this, a = 0; a < r.length; a++) {
            var l = e(r[a]), c = l.data(s), u = e.extend({}, e.fn[s].defaults, l.data(), "object" == typeof t && t);
            if (c || t && "object" != typeof t) {
                if ("string" == typeof t && void 0 !== c) return c[t].apply(c, [].concat(n))
            } else l.data(s, c = new d(l, u));
            u.autoOpen && (isNaN(parseInt(u.autoOpen)) ? !0 === u.autoOpen && c.open() : setTimeout(function () {c.open()}, u.autoOpen), window.$iziModal.autoOpen++)
        }
        return this
    }, e.fn[s].defaults = {
        title: "",
        subtitle: "",
        headerColor: "#88A0B9",
        background: null,
        theme: "",
        icon: null,
        iconText: null,
        iconColor: "",
        rtl: !1,
        width: 600,
        top: null,
        bottom: null,
        borderBottom: !0,
        padding: 0,
        radius: 3,
        zindex: 999,
        iframe: !1,
        iframeHeight: 400,
        iframeURL: null,
        focusInput: !0,
        group: "",
        loop: !1,
        arrowKeys: !0,
        navigateCaption: !0,
        navigateArrows: !0,
        history: !1,
        restoreDefaultContent: !1,
        autoOpen: 0,
        bodyOverflow: !1,
        fullscreen: !1,
        openFullscreen: !1,
        closeOnEscape: !0,
        closeButton: !0,
        appendTo: "body",
        appendToOverlay: "body",
        overlay: !0,
        overlayClose: !0,
        overlayColor: "rgba(0, 0, 0, 0.4)",
        timeout: !1,
        timeoutProgressbar: !1,
        pauseOnHover: !1,
        timeoutProgressbarColor: "rgba(255,255,255,0.5)",
        transitionIn: "comingIn",
        transitionOut: "comingOut",
        transitionInOverlay: "fadeIn",
        transitionOutOverlay: "fadeOut",
        onFullscreen: function () {},
        onResize: function () {},
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {},
        afterRender: function () {}
    }, e.fn[s].Constructor = d, e.fn.iziModal
}), function (e, t) {"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()}(this, function () {
    function e(e, t, n) {return e < t ? t : e > n ? n : e}

    function t(e) {return 100 * (-1 + e)}

    function n(e, n, i) {
        var o;
        return o = "translate3d" === c.positionUsing ? {transform: "translate3d(" + t(e) + "%,0,0)"} : "translate" === c.positionUsing ? {transform: "translate(" + t(e) + "%,0)"} : {"margin-left": t(e) + "%"}, o.transition = "all " + n + "ms " + i, o
    }

    function i(e, t) {return ("string" == typeof e ? e : s(e)).indexOf(" " + t + " ") >= 0}

    function o(e, t) {
        var n = s(e), o = n + t;
        i(n, t) || (e.className = o.substring(1))
    }

    function r(e, t) {
        var n, o = s(e);
        i(e, t) && (n = o.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
    }

    function s(e) {return (" " + (e && e.className || "") + " ").replace(/\s+/gi, " ")}

    function a(e) {e && e.parentNode && e.parentNode.removeChild(e)}

    var l = {};
    l.version = "0.2.0";
    var c = l.settings = {
        minimum: .08,
        easing: "linear",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleSpeed: 200,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function (e) {
        var t, n;
        for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (c[t] = n);
        return this
    }, l.status = null, l.set = function (t) {
        var i = l.isStarted();
        t = e(t, c.minimum, 1), l.status = 1 === t ? null : t;
        var o = l.render(!i), r = o.querySelector(c.barSelector), s = c.speed, a = c.easing;
        return o.offsetWidth, d(function (e) {
            "" === c.positionUsing && (c.positionUsing = l.getPositioningCSS()), u(r, n(t, s, a)), 1 === t ? (u(o, {
                transition: "none",
                opacity: 1
            }), o.offsetWidth, setTimeout(function () {
                u(o, {
                    transition: "all " + s + "ms linear",
                    opacity: 0
                }), setTimeout(function () {l.remove(), e()}, s)
            }, s)) : setTimeout(e, s)
        }), this
    }, l.isStarted = function () {return "number" == typeof l.status}, l.start = function () {
        l.status || l.set(0);
        var e = function () {setTimeout(function () {l.status && (l.trickle(), e())}, c.trickleSpeed)};
        return c.trickle && e(), this
    }, l.done = function (e) {return e || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this}, l.inc = function (t) {
        var n = l.status;
        return n ? n > 1 ? void 0 : ("number" != typeof t && (t = n >= 0 && n < .2 ? .1 : n >= .2 && n < .5 ? .04 : n >= .5 && n < .8 ? .02 : n >= .8 && n < .99 ? .005 : 0), n = e(n + t, 0, .994), l.set(n)) : l.start()
    }, l.trickle = function () {return l.inc()}, function () {
        var e = 0, t = 0;
        l.promise = function (n) {return n && "resolved" !== n.state() ? (0 === t && l.start(), e++, t++, n.always(function () {0 === --t ? (e = 0, l.done()) : l.set((e - t) / e)}), this) : this}
    }(), l.render = function (e) {
        if (l.isRendered()) return document.getElementById("nprogress");
        o(document.documentElement, "nprogress-busy");
        var n = document.createElement("div");
        n.id = "nprogress", n.innerHTML = c.template;
        var i, r = n.querySelector(c.barSelector), s = e ? "-100" : t(l.status || 0),
            d = document.querySelector(c.parent);
        return u(r, {
            transition: "all 0 linear",
            transform: "translate3d(" + s + "%,0,0)"
        }), c.showSpinner || (i = n.querySelector(c.spinnerSelector)) && a(i), d != document.body && o(d, "nprogress-custom-parent"), d.appendChild(n), n
    }, l.remove = function () {
        r(document.documentElement, "nprogress-busy"), r(document.querySelector(c.parent), "nprogress-custom-parent");
        var e = document.getElementById("nprogress");
        e && a(e)
    }, l.isRendered = function () {return !!document.getElementById("nprogress")}, l.getPositioningCSS = function () {
        var e = document.body.style,
            t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
        return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
    };
    var d = function () {
        function e() {
            var n = t.shift();
            n && n(e)
        }

        var t = [];
        return function (n) {t.push(n), 1 == t.length && e()}
    }(), u = function () {
        function e(e) {return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (e, t) {return t.toUpperCase()})}

        function t(e) {
            var t = document.body.style;
            if (e in t) return e;
            for (var n, i = o.length, r = e.charAt(0).toUpperCase() + e.slice(1); i--;) if ((n = o[i] + r) in t) return n;
            return e
        }

        function n(n) {return n = e(n), r[n] || (r[n] = t(n))}

        function i(e, t, i) {t = n(t), e.style[t] = i}

        var o = ["Webkit", "O", "Moz", "ms"], r = {};
        return function (e, t) {
            var n, o, r = arguments;
            if (2 == r.length) for (n in t) void 0 !== (o = t[n]) && t.hasOwnProperty(n) && i(e, n, o); else i(e, r[1], r[2])
        }
    }();
    return l
}), function (e) {
    e.fn.basictable = function (t) {
        var n = function (t, n) {
                var o = [];
                if (n.tableWrap && t.wrap('<div class="bt-wrapper"></div>'), n.header) {
                    var r = "";
                    r = t.find("thead tr th").length ? "thead th" : t.find("tbody tr th").length ? "tbody tr th" : t.find("th").length ? "tr:first th" : "tr:first td", e.each(t.find(r), function () {
                        var t = e(this), n = parseInt(t.attr("colspan"), 10) || 1, i = t.closest("tr").index();
                        o[i] || (o[i] = []);
                        for (var r = 0; r < n; r++) o[i].push(t)
                    })
                }
                e.each(t.find("tbody tr"), function () {i(e(this), o, n)}), e.each(t.find("tfoot tr"), function () {i(e(this), o, n)})
            }, i = function (t, n, i) {
                t.children().each(function () {
                    var t = e(this);
                    if ("" !== t.html() && "&nbsp;" !== t.html() || i.showEmptyCells) {
                        for (var o = t.index(), r = "", s = 0; s < n.length; s++) 0 != s && (r += ": "), r += n[s][o].text();
                        t.attr("data-th", r), i.contentWrap && !t.children().hasClass("bt-content") && t.wrapInner('<span class="bt-content" />')
                    } else t.addClass("bt-hide")
                })
            },
            o = function (t, n) {n.forceResponsive ? null !== n.breakpoint && e(window).width() <= n.breakpoint || null !== n.containerBreakpoint && t.parent().width() <= n.containerBreakpoint ? r(t, n) : s(t, n) : t.removeClass("bt").outerWidth() > t.parent().width() ? r(t, n) : s(t, n)},
            r = function (e, t) {e.addClass("bt"), t.header || e.addClass("bt--no-header"), t.tableWrap && e.parent(".bt-wrapper").addClass("active")},
            s = function (e, t) {e.removeClass("bt bt--no-header"), t.tableWrap && e.parent(".bt-wrapper").removeClass("active")},
            a = function (t, n) {
                var i;
                t.removeClass("bt bt--no-header"), t.find("td").removeAttr("data-th"), n.tableWrap && t.unwrap(), n.contentWrap && (i = t, e.each(i.find("td"), function () {
                    var t = e(this), n = t.children(".bt-content").html();
                    t.html(n)
                })), t.removeData("basictable")
            };
        this.each(function () {
            var i = e(this);
            if (0 === i.length || i.data("basictable")) {
                if (i.data("basictable")) {
                    var l = i.data("basictable");
                    "destroy" === t ? a(i, l) : "restart" === t ? (a(i, l), i.data("basictable", l), n(i, l), o(i, l)) : "start" === t ? r(i, l) : "stop" === t ? s(i, l) : o(i, l)
                }
                return !1
            }
            var c = e.extend({}, e.fn.basictable.defaults, t), d = {
                breakpoint: c.breakpoint,
                containerBreakpoint: c.containerBreakpoint,
                contentWrap: c.contentWrap,
                forceResponsive: c.forceResponsive,
                noResize: c.noResize,
                tableWrap: c.tableWrap,
                showEmptyCells: c.showEmptyCells,
                header: c.header
            };
            null === d.breakpoint && null === d.containerBreakpoint && (d.breakpoint = 568), i.data("basictable", d), n(i, i.data("basictable")), d.noResize || (o(i, i.data("basictable")), e(window).bind("resize.basictable", function () {
                var e;
                (e = i).data("basictable") && o(e, e.data("basictable"))
            }))
        })
    }, e.fn.basictable.defaults = {
        breakpoint: null,
        containerBreakpoint: null,
        contentWrap: !0,
        forceResponsive: !0,
        noResize: !1,
        tableWrap: !1,
        showEmptyCells: !1,
        header: !0
    }
}(jQuery), function (e, t) {
    "use strict";
    var n = function (e) {this.elem = e};
    n.init = function () {
        var e, i = t.querySelectorAll("[data-sharer]"), o = i.length;
        for (e = 0; e < o; e++) i[e].addEventListener("click", n.add)
    }, n.add = function (e) {
        var t = e.currentTarget || e.srcElement;
        new n(t).share()
    }, n.prototype = {
        constructor: n, getValue: function (e) {
            var t = this.elem.getAttribute("data-" + e);
            if (t) return "hashtag" === e && (t.startsWith("#") || (t = "#" + t)), t
        }, share: function () {
            var e = this.getValue("sharer").toLowerCase(), t = {
                facebook: {
                    shareUrl: "https://www.facebook.com/sharer/sharer.php",
                    params: {u: this.getValue("url"), hashtag: this.getValue("hashtag")}
                },
                linkedin: {
                    shareUrl: "https://www.linkedin.com/shareArticle",
                    params: {url: this.getValue("url"), mini: !0}
                },
                twitter: {
                    shareUrl: "https://twitter.com/intent/tweet/",
                    params: {
                        text: this.getValue("title"),
                        url: this.getValue("url"),
                        hashtags: this.getValue("hashtags"),
                        via: this.getValue("via")
                    }
                },
                email: {
                    shareUrl: "mailto:" + this.getValue("to"),
                    params: {
                        subject: this.getValue("subject"),
                        body: this.getValue("title") + "\n" + this.getValue("url")
                    },
                    isLink: !0
                },
                whatsapp: {
                    shareUrl: "whatsapp://send",
                    params: {text: this.getValue("title") + " " + this.getValue("url")},
                    isLink: !0
                },
                telegram: {
                    shareUrl: "tg://msg_url",
                    params: {text: this.getValue("title") + " " + this.getValue("url")},
                    isLink: !0
                },
                viber: {
                    shareUrl: "viber://forward",
                    params: {text: this.getValue("title") + " " + this.getValue("url")},
                    isLink: !0
                },
                line: {
                    shareUrl: "http://line.me/R/msg/text/?" + encodeURIComponent(this.getValue("title") + " " + this.getValue("url")),
                    isLink: !0
                },
                pinterest: {
                    shareUrl: "https://www.pinterest.com/pin/create/button/",
                    params: {
                        url: this.getValue("url"),
                        media: this.getValue("image"),
                        description: this.getValue("description")
                    }
                },
                tumblr: {
                    shareUrl: "http://tumblr.com/widgets/share/tool",
                    params: {
                        canonicalUrl: this.getValue("url"),
                        content: this.getValue("url"),
                        posttype: "link",
                        title: this.getValue("title"),
                        caption: this.getValue("caption"),
                        tags: this.getValue("tags")
                    }
                },
                hackernews: {
                    shareUrl: "https://news.ycombinator.com/submitlink",
                    params: {u: this.getValue("url"), t: this.getValue("title")}
                },
                reddit: {shareUrl: "https://www.reddit.com/submit", params: {url: this.getValue("url")}},
                vk: {
                    shareUrl: "http://vk.com/share.php",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        description: this.getValue("caption"),
                        image: this.getValue("image")
                    }
                },
                xing: {
                    shareUrl: "https://www.xing.com/app/user",
                    params: {op: "share", url: this.getValue("url"), title: this.getValue("title")}
                },
                buffer: {
                    shareUrl: "https://buffer.com/add",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        via: this.getValue("via"),
                        picture: this.getValue("picture")
                    }
                },
                instapaper: {
                    shareUrl: "http://www.instapaper.com/edit",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        description: this.getValue("description")
                    }
                },
                pocket: {shareUrl: "https://getpocket.com/save", params: {url: this.getValue("url")}},
                digg: {shareUrl: "http://www.digg.com/submit", params: {url: this.getValue("url")}},
                stumbleupon: {
                    shareUrl: "http://www.stumbleupon.com/submit",
                    params: {url: this.getValue("url"), title: this.getValue("title")}
                },
                flipboard: {
                    shareUrl: "https://share.flipboard.com/bookmarklet/popout",
                    params: {v: 2, title: this.getValue("title"), url: this.getValue("url"), t: Date.now()}
                },
                weibo: {
                    shareUrl: "http://service.weibo.com/share/share.php",
                    params: {
                        url: this.getValue("url"),
                        title: this.getValue("title"),
                        pic: this.getValue("image"),
                        appkey: this.getValue("appkey"),
                        ralateUid: this.getValue("ralateuid"),
                        language: "zh_cn"
                    }
                },
                renren: {shareUrl: "http://share.renren.com/share/buttonshare", params: {link: this.getValue("url")}},
                myspace: {
                    shareUrl: "https://myspace.com/post",
                    params: {u: this.getValue("url"), t: this.getValue("title"), c: this.getValue("description")}
                },
                blogger: {
                    shareUrl: "https://www.blogger.com/blog-this.g",
                    params: {u: this.getValue("url"), n: this.getValue("title"), t: this.getValue("description")}
                },
                baidu: {
                    shareUrl: "http://cang.baidu.com/do/add",
                    params: {it: this.getValue("title"), iu: this.getValue("url")}
                },
                douban: {
                    shareUrl: "https://www.douban.com/share/service",
                    params: {name: this.getValue("title"), href: this.getValue("url"), image: this.getValue("image")}
                },
                okru: {
                    shareUrl: "https://connect.ok.ru/dk",
                    params: {
                        "st.cmd": "WidgetSharePreview",
                        "st.shareUrl": this.getValue("url"),
                        title: this.getValue("title")
                    }
                },
                mailru: {
                    shareUrl: "http://connect.mail.ru/share",
                    params: {
                        share_url: this.getValue("url"),
                        linkname: this.getValue("title"),
                        linknote: this.getValue("description"),
                        type: "page"
                    }
                }
            }[e];
            return t && (t.width = this.getValue("width"), t.height = this.getValue("height")), void 0 !== t && this.urlSharer(t)
        }, urlSharer: function (t) {
            var n, i = t.params || {}, o = Object.keys(i), r = o.length > 0 ? "?" : "";
            for (n = 0; n < o.length; n++) "?" !== r && (r += "&"), i[o[n]] && (r += o[n] + "=" + encodeURIComponent(i[o[n]]));
            if (t.shareUrl += r, t.isLink) e.location.href = t.shareUrl; else {
                var s = t.width || 600, a = t.height || 480, l = e.innerWidth / 2 - s / 2 + e.screenX,
                    c = "scrollbars=no, width=" + s + ", height=" + a + ", top=" + (e.innerHeight / 2 - a / 2 + e.screenY) + ", left=" + l,
                    d = e.open(t.shareUrl, "", c);
                e.focus && d.focus()
            }
        }
    }, "complete" === t.readyState || "loading" !== t.readyState ? n.init() : t.addEventListener("DOMContentLoaded", n.init), e.addEventListener("page:load", n.init), e.Sharer = n
}(window, document);
var pJS = function (e, t) {
    var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {el: n, w: n.offsetWidth, h: n.offsetHeight},
        particles: {
            number: {value: 400, density: {enable: !0, value_area: 800}},
            color: {value: "#fff"},
            shape: {
                type: "circle",
                stroke: {width: 0, color: "#ff0000"},
                polygon: {nb_sides: 5},
                image: {src: "", width: 100, height: 100}
            },
            opacity: {value: 1, random: !1, anim: {enable: !1, speed: 2, opacity_min: 0, sync: !1}},
            size: {value: 20, random: !1, anim: {enable: !1, speed: 20, size_min: 0, sync: !1}},
            line_linked: {enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1},
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {enable: !1, rotateX: 3e3, rotateY: 3e3}
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {onhover: {enable: !0, mode: "grab"}, onclick: {enable: !0, mode: "push"}, resize: !0},
            modes: {
                grab: {distance: 100, line_linked: {opacity: 1}},
                bubble: {distance: 200, size: 80, duration: .4},
                repulse: {distance: 200, duration: .4},
                push: {particles_nb: 4},
                remove: {particles_nb: 2}
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {interact: {}, modes: {}, vendors: {}},
        tmp: {}
    };
    var i = this.pJS;
    t && Object.deepExtend(i, t), i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    }, i.fn.retinaInit = function () {i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio}, i.fn.canvasInit = function () {i.canvas.ctx = i.canvas.el.getContext("2d")}, i.fn.canvasSize = function () {i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()})}, i.fn.canvasPaint = function () {i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)}, i.fn.canvasClear = function () {i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)}, i.fn.particle = function (e, t, n) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * i.canvas.w, this.y = n ? n.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof e.value) if (e.value instanceof Array) {
            var o = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
            this.color.rgb = hexToRgb(o)
        } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
            r: e.value.r,
            g: e.value.g,
            b: e.value.b
        }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
            h: e.value.h,
            s: e.value.s,
            l: e.value.l
        }); else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var r = {};
        switch (i.particles.move.direction) {
            case"top":
                r = {x: 0, y: -1};
                break;
            case"top-right":
                r = {x: .5, y: -.5};
                break;
            case"right":
                r = {x: 1, y: -0};
                break;
            case"bottom-right":
                r = {x: .5, y: .5};
                break;
            case"bottom":
                r = {x: 0, y: 1};
                break;
            case"bottom-left":
                r = {x: -.5, y: 1};
                break;
            case"left":
                r = {x: -1, y: 0};
                break;
            case"top-left":
                r = {x: -.5, y: -.5};
                break;
            default:
                r = {x: 0, y: 0}
        }
        i.particles.move.straight ? (this.vx = r.x, this.vy = r.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var s = i.particles.shape.type;
        if ("object" == typeof s) {
            if (s instanceof Array) {
                var a = s[Math.floor(Math.random() * s.length)];
                this.shape = a
            }
        } else this.shape = s;
        if ("image" == this.shape) {
            var l = i.particles.shape;
            this.img = {
                src: l.image.src,
                ratio: l.image.width / l.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
        }
    }, i.fn.particle.prototype.draw = function () {
        var e = this;
        if (void 0 != e.radius_bubble) t = e.radius_bubble; else var t = e.radius;
        if (void 0 != e.opacity_bubble) n = e.opacity_bubble; else var n = e.opacity;
        if (e.color.rgb) o = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + n + ")"; else var o = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + n + ")";
        switch (i.canvas.ctx.fillStyle = o, i.canvas.ctx.beginPath(), e.shape) {
            case"circle":
                i.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
            case"edge":
                i.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
            case"triangle":
                i.fn.vendors.drawShape(i.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                break;
            case"polygon":
                i.fn.vendors.drawShape(i.canvas.ctx, e.x - t / (i.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                break;
            case"star":
                i.fn.vendors.drawShape(i.canvas.ctx, e.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                break;
            case"image":
                if ("svg" == i.tmp.img_type) r = e.img.obj; else var r = i.tmp.img_obj;
                r && i.canvas.ctx.drawImage(r, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
    }, i.fn.particlesCreate = function () {for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))}, i.fn.particlesUpdate = function () {
        for (var e = 0; e < i.particles.array.length; e++) {
            var t = i.particles.array[e];
            if (i.particles.move.enable) {
                var n = i.particles.move.speed / 2;
                t.x += t.vx * n, t.y += t.vy * n
            }
            if (i.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= i.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= i.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), i.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= i.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= i.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == i.particles.move.out_mode) o = {
                x_left: t.radius,
                x_right: i.canvas.w,
                y_top: t.radius,
                y_bottom: i.canvas.h
            }; else var o = {
                x_left: -t.radius,
                x_right: i.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: i.canvas.h + t.radius
            };
            switch (t.x - t.radius > i.canvas.w ? (t.x = o.x_left, t.y = Math.random() * i.canvas.h) : t.x + t.radius < 0 && (t.x = o.x_right, t.y = Math.random() * i.canvas.h), t.y - t.radius > i.canvas.h ? (t.y = o.y_top, t.x = Math.random() * i.canvas.w) : t.y + t.radius < 0 && (t.y = o.y_bottom, t.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                case"bounce":
                    t.x + t.radius > i.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > i.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(t), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(t), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(t), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var r = e + 1; r < i.particles.array.length; r++) {
                var s = i.particles.array[r];
                i.particles.line_linked.enable && i.fn.interact.linkParticles(t, s), i.particles.move.attract.enable && i.fn.interact.attractParticles(t, s), i.particles.move.bounce && i.fn.interact.bounceParticles(t, s)
            }
        }
    }, i.fn.particlesDraw = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
        for (var e = 0; e < i.particles.array.length; e++) i.particles.array[e].draw()
    }, i.fn.particlesEmpty = function () {i.particles.array = []}, i.fn.particlesRefresh = function () {cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()}, i.fn.interact.linkParticles = function (e, t) {
        var n = e.x - t.x, o = e.y - t.y, r = Math.sqrt(n * n + o * o);
        if (r <= i.particles.line_linked.distance) {
            var s = i.particles.line_linked.opacity - r / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (s > 0) {
                var a = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + s + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(t.x, t.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
            }
        }
    }, i.fn.interact.attractParticles = function (e, t) {
        var n = e.x - t.x, o = e.y - t.y;
        if (Math.sqrt(n * n + o * o) <= i.particles.line_linked.distance) {
            var r = n / (1e3 * i.particles.move.attract.rotateX), s = o / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= r, e.vy -= s, t.vx += r, t.vy += s
        }
    }, i.fn.interact.bounceParticles = function (e, t) {
        var n = e.x - t.x, i = e.y - t.y, o = Math.sqrt(n * n + i * i);
        e.radius + t.radius >= o && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, i.fn.modes.pushParticles = function (e, t) {
        i.tmp.pushing = !0;
        for (var n = 0; e > n; n++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * i.canvas.w,
            y: t ? t.pos_y : Math.random() * i.canvas.h
        })), n == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
    }, i.fn.modes.removeParticles = function (e) {i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw()}, i.fn.modes.bubbleParticle = function (e) {
        function t() {e.opacity_bubble = e.opacity, e.radius_bubble = e.radius}

        function n(t, n, o, r, s) {
            if (t != n) if (i.tmp.bubble_duration_end) void 0 != o && (l = t + (t - (r - u * (r - t) / i.interactivity.modes.bubble.duration)), "size" == s && (e.radius_bubble = l), "opacity" == s && (e.opacity_bubble = l)); else if (d <= i.interactivity.modes.bubble.distance) {
                if (void 0 != o) a = o; else var a = r;
                if (a != t) {
                    var l = r - u * (r - t) / i.interactivity.modes.bubble.duration;
                    "size" == s && (e.radius_bubble = l), "opacity" == s && (e.opacity_bubble = l)
                }
            } else "size" == s && (e.radius_bubble = void 0), "opacity" == s && (e.opacity_bubble = void 0)
        }

        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var o = e.x - i.interactivity.mouse.pos_x, r = e.y - i.interactivity.mouse.pos_y,
                s = 1 - (d = Math.sqrt(o * o + r * r)) / i.interactivity.modes.bubble.distance;
            if (d <= i.interactivity.modes.bubble.distance) {
                if (s >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) (l = e.radius + i.interactivity.modes.bubble.size * s) >= 0 && (e.radius_bubble = l); else {
                        var a = e.radius - i.interactivity.modes.bubble.size, l = e.radius - a * s;
                        e.radius_bubble = l > 0 ? l : 0
                    }
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) (c = i.interactivity.modes.bubble.opacity * s) > e.opacity && c <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = c); else {
                        var c = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * s;
                        c < e.opacity && c >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = c)
                    }
                }
            } else t();
            "mouseleave" == i.interactivity.status && t()
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var o = e.x - i.interactivity.mouse.click_pos_x, r = e.y - i.interactivity.mouse.click_pos_y,
                    d = Math.sqrt(o * o + r * r), u = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                u > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), u > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
            }
            i.tmp.bubble_clicking && (n(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), n(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }, i.fn.modes.repulseParticle = function (e) {
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x, n = e.y - i.interactivity.mouse.pos_y,
                o = Math.sqrt(t * t + n * n), r = {x: t / o, y: n / o},
                s = clamp(1 / (l = i.interactivity.modes.repulse.distance) * (-1 * Math.pow(o / l, 2) + 1) * l * 100, 0, 50),
                a = {x: e.x + r.x * s, y: e.y + r.y * s};
            "bounce" == i.particles.move.out_mode ? (a.x - e.radius > 0 && a.x + e.radius < i.canvas.w && (e.x = a.x), a.y - e.radius > 0 && a.y + e.radius < i.canvas.h && (e.y = a.y)) : (e.x = a.x, e.y = a.y)
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
            var l = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                c = i.interactivity.mouse.click_pos_x - e.x, d = i.interactivity.mouse.click_pos_y - e.y,
                u = c * c + d * d, p = -l / u * 1;
            l >= u && function () {
                var t = Math.atan2(d, c);
                if (e.vx = p * Math.cos(t), e.vy = p * Math.sin(t), "bounce" == i.particles.move.out_mode) {
                    var n = {x: e.x + e.vx, y: e.y + e.vy};
                    n.x + e.radius > i.canvas.w ? e.vx = -e.vx : n.x - e.radius < 0 && (e.vx = -e.vx), n.y + e.radius > i.canvas.h ? e.vy = -e.vy : n.y - e.radius < 0 && (e.vy = -e.vy)
                }
            }()
        } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
    }, i.fn.modes.grabParticle = function (e) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x, n = e.y - i.interactivity.mouse.pos_y,
                o = Math.sqrt(t * t + n * n);
            if (o <= i.interactivity.modes.grab.distance) {
                var r = i.interactivity.modes.grab.line_linked.opacity - o / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (r > 0) {
                    var s = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function () {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window) var t = e.clientX, n = e.clientY; else var t = e.offsetX || e.clientX,
                n = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = t, i.interactivity.mouse.pos_y = n, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
        }), i.interactivity.el.addEventListener("mouseleave", function (e) {i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"})), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
                case"push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case"remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case"bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case"repulse":
                    i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {i.tmp.repulse_clicking = !1}, 1e3 * i.interactivity.modes.repulse.duration)
            }
        })
    }, i.fn.vendors.densityAutoParticles = function () {
        if (i.particles.number.density.enable) {
            var e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            var t = e * i.particles.number.value / i.particles.number.density.value_area,
                n = i.particles.array.length - t;
            0 > n ? i.fn.modes.pushParticles(Math.abs(n)) : i.fn.modes.removeParticles(n)
        }
    }, i.fn.vendors.checkOverlap = function (e, t) {
        for (var n = 0; n < i.particles.array.length; n++) {
            var o = i.particles.array[n], r = e.x - o.x, s = e.y - o.y;
            Math.sqrt(r * r + s * s) <= e.radius + o.radius && (e.x = t ? t.x : Math.random() * i.canvas.w, e.y = t ? t.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e))
        }
    }, i.fn.vendors.createSvgImg = function (e) {
        var t = i.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (t, n, i, o) {
                if (e.color.rgb) r = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")"; else var r = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                return r
            }), n = new Blob([t], {type: "image/svg+xml;charset=utf-8"}), o = window.URL || window.webkitURL || window,
            r = o.createObjectURL(n), s = new Image;
        s.addEventListener("load", function () {e.img.obj = s, e.img.loaded = !0, o.revokeObjectURL(r), i.tmp.count_svg++}), s.src = r
    }, i.fn.vendors.destroypJS = function () {cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), pJSDom = null}, i.fn.vendors.drawShape = function (e, t, n, i, o, r) {
        var s = o * r, a = o / r, l = 180 * (a - 2) / a, c = Math.PI - Math.PI * l / 180;
        e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
        for (var d = 0; s > d; d++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
        e.fill(), e.restore()
    }, i.fn.vendors.exportImg = function () {window.open(i.canvas.el.toDataURL("image/png"), "_blank")}, i.fn.vendors.loadImg = function (e) {
        if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) if ("svg" == e) {
            var t = new XMLHttpRequest;
            t.open("GET", i.particles.shape.image.src), t.onreadystatechange = function (e) {4 == t.readyState && (200 == t.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))}, t.send()
        } else {
            var n = new Image;
            n.addEventListener("load", function () {i.tmp.img_obj = n, i.fn.vendors.checkBeforeDraw()}), n.src = i.particles.shape.image.src
        } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
    }, i.fn.vendors.draw = function () {"image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))}, i.fn.vendors.checkBeforeDraw = function () {"image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw())}, i.fn.vendors.init = function () {i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)}, i.fn.vendors.start = function () {isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()}, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
};
Object.deepExtend = function (e, t) {
    for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n];
    return e
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {window.setTimeout(e, 1e3 / 60)}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var n = document.getElementById(e), i = "particles-js-canvas-el", o = n.getElementsByClassName(i);
    if (o.length) for (; o.length > 0;) n.removeChild(o[0]);
    var r = document.createElement("canvas");
    r.className = i, r.style.width = "100%", r.style.height = "100%", null != document.getElementById(e).appendChild(r) && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function (e, t, n) {
    var i = new XMLHttpRequest;
    i.open("GET", t), i.onreadystatechange = function (t) {
        if (4 == i.readyState) if (200 == i.status) {
            var o = JSON.parse(t.currentTarget.response);
            window.particlesJS(e, o), n && n()
        } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
    }, i.send()
}, function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = function () {
        var t = 0;
        return function (n, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, n) {return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)},
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
    }()).prototype.activateADA = function () {this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})}, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null; else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {e(n).attr("data-slick-index", t)}), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, n) {
        var i = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))},
            complete: function () {n && n.call()}
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {o.disableTransition(), n.call()}, o.options.speed))
    }, t.prototype.getNavTarget = function () {
        var t = this, n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n
    }, t.prototype.asNavFor = function (t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this, n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * s + (t * a.options.slidesPerRow + n);
                        r.get(d) && c.appendChild(r.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function (t, n) {
        var i, o, r, s = this, a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case"previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case"next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case"index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, n;
        if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
            if (e < t[i]) {
                e = n;
                break
            }
            n = t[i]
        }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function (e) {!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())}, t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {e(this).attr("style", e(this).data("originalStyling"))}), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function (e) {
        var t = this, n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function () {n.disableTransition(e), t.call()}, n.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())}, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {return this.currentSlide}, t.prototype.getDotCount = function () {
        var e = this, t = 0, n = 0, i = 0;
        if (!0 === e.options.infinite) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function (e) {
        var t, n, i, o = this, r = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {return this.options[e]}, t.prototype.getNavigableIndexes = function () {
        var e, t = this, n = 0, i = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function () {return this}, t.prototype.getSlideCount = function () {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft ? (t = r, !1) : void 0}), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + n
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this), n = e(this).attr("data-lazy"), i = document.createElement("img");
                i.onload = function () {t.animate({opacity: 0}, 100, function () {t.attr("src", n).animate({opacity: 1}, 200, function () {t.removeAttr("data-lazy").removeClass("slick-loading")}), r.$slider.trigger("lazyLoaded", [r, t, n])})}, i.onerror = function () {t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n])}, i.src = n
            })
        }

        var n, i, o, r = this;
        !0 === r.options.centerMode ? !0 === r.options.infinite ? (i = r.currentSlide + (r.options.slidesToShow / 2 + 1), o = i + r.options.slidesToShow + 2) : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), t(r.$slider.find(".slick-slide").slice(i, o)), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(n))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {this.changeSlide({data: {message: "next"}})}, t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function () {this.changeSlide({data: {message: "previous"}})}, t.prototype.preventDefault = function (e) {e.preventDefault()}, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n, i, o, r = this, s = e("img[data-lazy]", r.$slider);
        s.length ? (n = s.first(), i = n.attr("data-lazy"), o = document.createElement("img"), o.onload = function () {n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, n, i]), r.progressiveLazyLoad()}, o.onerror = function () {3 > t ? setTimeout(function () {r.progressiveLazyLoad(t + 1)}, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, n, i]), r.progressiveLazyLoad())}, o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, t.prototype.refresh = function (t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, n, i, o = this, r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r) if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) {
                for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
            }
            o.breakpoints.sort(function (e, t) {return o.options.mobileFirst ? e - t : t - e})
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()}, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function (e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, n = this;
        n.$slides.each(function (i, o) {
            t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
        }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t, n, i, o, r, s = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o; else if ("multiple" === r) e.each(i, function (e, t) {s.options[e] = t}); else if ("responsive" === r) for (n in o) if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]]; else {
            for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
            s.options.responsive.push(o[n])
        }
        a && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function (e) {
        var t, n, i, o, r = this;
        n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {e(this).attr("id", "")})
        }
    }, t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function (t) {
        var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
    }, t.prototype.slideHandler = function (e, t, n) {
        var i, o, r, s, a, l = null, c = this;
        return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {c.postSlide(i)}) : c.postSlide(i))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {c.postSlide(i)}) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > i ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), (a = a.slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {c.postSlide(o)})) : c.postSlide(o), void c.animateHeight()) : void (!0 !== n ? c.animateSlide(l, function () {c.postSlide(o)}) : c.postSlide(o))))
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), 0 > (i = Math.round(180 * n / Math.PI)) && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= i && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && 225 >= i ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function (e) {
        var t, n, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case"left":
                case"down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, n, i, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (n = s.swipeDirection()) ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function (e) {
        var t, n = this;
        return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void (n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function () {
        var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (e = 0; s > e; e++) if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
        return i
    }
}), function (e) {"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, n) {return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n} : e(jQuery)}(function (e) {
    var t = function () {
        function t(e, t) {return x.call(e, t)}

        function n(e, t) {
            var n, i, o, r, s, a, l, c, d, u, p, h = t && t.split("/"), f = b.map, m = f && f["*"] || {};
            if (e) {
                for (s = (e = e.split("/")).length - 1, b.nodeIdCompat && S.test(e[s]) && (e[s] = e[s].replace(S, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), d = 0; d < e.length; d++) if ("." === (p = e[d])) e.splice(d, 1), d -= 1; else if (".." === p) {
                    if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                    0 < d && (e.splice(d - 1, 2), d -= 2)
                }
                e = e.join("/")
            }
            if ((h || m) && f) {
                for (d = (n = e.split("/")).length; 0 < d; d -= 1) {
                    if (i = n.slice(0, d).join("/"), h) for (u = h.length; 0 < u; u -= 1) if (o = (o = f[h.slice(0, u).join("/")]) && o[i]) {
                        r = o, a = d;
                        break
                    }
                    if (r) break;
                    !l && m && m[i] && (l = m[i], c = d)
                }
                !r && l && (r = l, a = c), r && (n.splice(0, a, r), e = n.join("/"))
            }
            return e
        }

        function i(e, t) {
            return function () {
                var n = C.call(arguments, 0);
                return "string" != typeof n[0] && 1 === n.length && n.push(null), f.apply(p, n.concat([e, t]))
            }
        }

        function o(e) {return function (t) {g[e] = t}}

        function r(e) {
            if (t(y, e)) {
                var n = y[e];
                delete y[e], w[e] = !0, h.apply(p, n)
            }
            if (!t(g, e) && !t(w, e)) throw new Error("No " + e);
            return g[e]
        }

        function s(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function a(e) {return e ? s(e) : []}

        if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var l = e.fn.select2.amd;
        var c, d, u, p, h, f, m, v, g, y, b, w, x, C, S, T;
        return l && l.requirejs || (l ? d = l : l = {}, g = {}, y = {}, b = {}, w = {}, x = Object.prototype.hasOwnProperty, C = [].slice, S = /\.js$/, m = function (e, t) {
            var i, o = s(e), a = o[0], l = t[1];
            return e = o[1], a && (i = r(a = n(a, l))), a ? e = i && i.normalize ? i.normalize(e, function (e) {return function (t) {return n(t, e)}}(l)) : n(e, l) : (a = (o = s(e = n(e, l)))[0], e = o[1], a && (i = r(a))), {
                f: a ? a + "!" + e : e,
                n: e,
                pr: a,
                p: i
            }
        }, v = {
            require: function (e) {return i(e)},
            exports: function (e) {
                var t = g[e];
                return void 0 !== t ? t : g[e] = {}
            },
            module: function (e) {
                return {
                    id: e,
                    uri: "",
                    exports: g[e],
                    config: function (e) {return function () {return b && b.config && b.config[e] || {}}}(e)
                }
            }
        }, h = function (e, n, s, l) {
            var c, d, u, h, f, b, x, C = [], S = typeof s;
            if (b = a(l = l || e), "undefined" == S || "function" == S) {
                for (n = !n.length && s.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1) if ("require" === (d = (h = m(n[f], b)).f)) C[f] = v.require(e); else if ("exports" === d) C[f] = v.exports(e), x = !0; else if ("module" === d) c = C[f] = v.module(e); else if (t(g, d) || t(y, d) || t(w, d)) C[f] = r(d); else {
                    if (!h.p) throw new Error(e + " missing " + d);
                    h.p.load(h.n, i(l, !0), o(d), {}), C[f] = g[d]
                }
                u = s ? s.apply(g[e], C) : void 0, e && (c && c.exports !== p && c.exports !== g[e] ? g[e] = c.exports : u === p && x || (g[e] = u))
            } else e && (g[e] = s)
        }, c = d = f = function (e, t, n, i, o) {
            if ("string" == typeof e) return v[e] ? v[e](t) : r(m(e, a(t)).f);
            if (!e.splice) {
                if ((b = e).deps && f(b.deps, b.callback), !t) return;
                t.splice ? (e = t, t = n, n = null) : e = p
            }
            return t = t || function () {}, "function" == typeof n && (n = i, i = o), i ? h(p, e, t, n) : setTimeout(function () {h(p, e, t, n)}, 4), f
        }, f.config = function (e) {return f(e)}, c._defined = g, (u = function (e, n, i) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            n.splice || (i = n, n = []), t(g, e) || t(y, e) || (y[e] = [e, n, i])
        }).amd = {jQuery: !0}, l.requirejs = c, l.require = d, l.define = u), l.define("almond", function () {}), l.define("jquery", [], function () {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
        }), l.define("select2/utils", ["jquery"], function (e) {
            function t(e) {
                var t = e.prototype, n = [];
                for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
                return n
            }

            function n() {this.listeners = {}}

            var i = {};
            i.Extend = function (e, t) {
                function n() {this.constructor = e}

                var i = {}.hasOwnProperty;
                for (var o in t) i.call(t, o) && (e[o] = t[o]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            }, i.Decorate = function (e, n) {
                function i() {
                    var t = Array.prototype.unshift, i = n.prototype.constructor.length, o = e.prototype.constructor;
                    0 < i && (t.call(arguments, e.prototype.constructor), o = n.prototype.constructor), o.apply(this, arguments)
                }

                var o = t(n), r = t(e);
                n.displayName = e.displayName, i.prototype = new function () {this.constructor = i};
                for (var s = 0; s < r.length; s++) {
                    var a = r[s];
                    i.prototype[a] = e.prototype[a]
                }
                for (var l = 0; l < o.length; l++) {
                    var c = o[l];
                    i.prototype[c] = function (e) {
                        var t = function () {};
                        e in i.prototype && (t = i.prototype[e]);
                        var o = n.prototype[e];
                        return function () {return Array.prototype.unshift.call(arguments, t), o.apply(this, arguments)}
                    }(c)
                }
                return i
            }, n.prototype.on = function (e, t) {this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]}, n.prototype.trigger = function (e) {
                var t = Array.prototype.slice, n = t.call(arguments, 1);
                this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, n.prototype.invoke = function (e, t) {for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)}, i.Observable = n, i.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                return t
            }, i.bind = function (e, t) {return function () {e.apply(t, arguments)}}, i._convertData = function (e) {
                for (var t in e) {
                    var n = t.split("-"), i = e;
                    if (1 !== n.length) {
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o];
                            (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in i || (i[r] = {}), o == n.length - 1 && (i[r] = e[t]), i = i[r]
                        }
                        delete e[t]
                    }
                }
                return e
            }, i.hasScroll = function (t, n) {
                var i = e(n), o = n.style.overflowX, r = n.style.overflowY;
                return (o !== r || "hidden" !== r && "visible" !== r) && ("scroll" === o || "scroll" === r || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
            }, i.escapeMarkup = function (e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {return t[e]})
            }, i.appendMany = function (t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var i = e();
                    e.map(n, function (e) {i = i.add(e)}), n = i
                }
                t.append(n)
            }, i.__cache = {};
            var o = 0;
            return i.GetUniqueElementId = function (e) {
                var t = e.getAttribute("data-select2-id");
                return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++o), t = o.toString())), t
            }, i.StoreData = function (e, t, n) {
                var o = i.GetUniqueElementId(e);
                i.__cache[o] || (i.__cache[o] = {}), i.__cache[o][t] = n
            }, i.GetData = function (t, n) {
                var o = i.GetUniqueElementId(t);
                return n ? i.__cache[o] && null != i.__cache[o][n] ? i.__cache[o][n] : e(t).data(n) : i.__cache[o]
            }, i.RemoveData = function (e) {
                var t = i.GetUniqueElementId(e);
                null != i.__cache[t] && delete i.__cache[t]
            }, i
        }), l.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, i) {this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)}

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t
            }, n.prototype.clear = function () {this.$results.empty()}, n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    o = this.options.get("translations").get(t.message);
                i.append(n(o(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
            }, n.prototype.hideMessages = function () {this.$results.find(".select2-results__message").remove()}, n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n], o = this.option(i);
                        t.push(o)
                    }
                    this.$results.append(t)
                } else 0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"})
            }, n.prototype.position = function (e, t) {t.find(".select2-results").append(e)}, n.prototype.sort = function (e) {return this.options.get("sorter")(e)}, n.prototype.highlightFirstItem = function () {
                var e = this.$results.find(".select2-results__option[aria-selected]"),
                    t = e.filter("[aria-selected=true]");
                0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, n.prototype.setClasses = function () {
                var n = this;
                this.data.current(function (i) {
                    var o = e.map(i, function (e) {return e.id.toString()});
                    n.$results.find(".select2-results__option[aria-selected]").each(function () {
                        var n = e(this), i = t.GetData(this, "data"), r = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && -1 < e.inArray(r, o) ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                    })
                })
            }, n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e)},
                    n = this.option(t);
                n.className += " loading-results", this.$results.prepend(n)
            }, n.prototype.hideLoading = function () {this.$results.find(".loading-results").remove()}, n.prototype.option = function (n) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var o = {role: "treeitem", "aria-selected": "false"};
                for (var r in n.disabled && (delete o["aria-selected"], o["aria-disabled"] = "true"), null == n.id && delete o["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (o.role = "group", o["aria-label"] = n.text, delete o["aria-selected"]), o) {
                    var s = o[r];
                    i.setAttribute(r, s)
                }
                if (n.children) {
                    var a = e(i), l = document.createElement("strong");
                    l.className = "select2-results__group", e(l), this.template(n, l);
                    for (var c = [], d = 0; d < n.children.length; d++) {
                        var u = n.children[d], p = this.option(u);
                        c.push(p)
                    }
                    var h = e("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                    h.append(c), a.append(l), a.append(h)
                } else this.template(n, i);
                return t.StoreData(i, "data", n), i
            }, n.prototype.bind = function (n, i) {
                var o = this, r = n.id + "-results";
                this.$results.attr("id", r), n.on("results:all", function (e) {o.clear(), o.append(e.data), n.isOpen() && (o.setClasses(), o.highlightFirstItem())}), n.on("results:append", function (e) {o.append(e.data), n.isOpen() && o.setClasses()}), n.on("query", function (e) {o.hideMessages(), o.showLoading(e)}), n.on("select", function () {n.isOpen() && (o.setClasses(), o.options.get("scrollAfterSelect") && o.highlightFirstItem())}), n.on("unselect", function () {n.isOpen() && (o.setClasses(), o.options.get("scrollAfterSelect") && o.highlightFirstItem())}), n.on("open", function () {o.$results.attr("aria-expanded", "true"), o.$results.attr("aria-hidden", "false"), o.setClasses(), o.ensureHighlightVisible()}), n.on("close", function () {o.$results.attr("aria-expanded", "false"), o.$results.attr("aria-hidden", "true"), o.$results.removeAttr("aria-activedescendant")}), n.on("results:toggle", function () {
                    var e = o.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), n.on("results:select", function () {
                    var e = o.getHighlightedResults();
                    if (0 !== e.length) {
                        var n = t.GetData(e[0], "data");
                        "true" == e.attr("aria-selected") ? o.trigger("close", {}) : o.trigger("select", {data: n})
                    }
                }), n.on("results:previous", function () {
                    var e = o.getHighlightedResults(), t = o.$results.find("[aria-selected]"), n = t.index(e);
                    if (!(n <= 0)) {
                        var i = n - 1;
                        0 === e.length && (i = 0);
                        var r = t.eq(i);
                        r.trigger("mouseenter");
                        var s = o.$results.offset().top, a = r.offset().top, l = o.$results.scrollTop() + (a - s);
                        0 === i ? o.$results.scrollTop(0) : a - s < 0 && o.$results.scrollTop(l)
                    }
                }), n.on("results:next", function () {
                    var e = o.getHighlightedResults(), t = o.$results.find("[aria-selected]"), n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                        var i = t.eq(n);
                        i.trigger("mouseenter");
                        var r = o.$results.offset().top + o.$results.outerHeight(!1),
                            s = i.offset().top + i.outerHeight(!1), a = o.$results.scrollTop() + s - r;
                        0 === n ? o.$results.scrollTop(0) : r < s && o.$results.scrollTop(a)
                    }
                }), n.on("results:focus", function (e) {e.element.addClass("select2-results__option--highlighted")}), n.on("results:message", function (e) {o.displayMessage(e)}), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = o.$results.scrollTop(), n = o.$results.get(0).scrollHeight - t + e.deltaY,
                        i = 0 < e.deltaY && t - e.deltaY <= 0, r = e.deltaY < 0 && n <= o.$results.height();
                    i ? (o.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (o.$results.scrollTop(o.$results.get(0).scrollHeight - o.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (n) {
                    var i = e(this), r = t.GetData(this, "data");
                    "true" !== i.attr("aria-selected") ? o.trigger("select", {
                        originalEvent: n,
                        data: r
                    }) : o.options.get("multiple") ? o.trigger("unselect", {
                        originalEvent: n,
                        data: r
                    }) : o.trigger("close", {})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (n) {
                    var i = t.GetData(this, "data");
                    o.getHighlightedResults().removeClass("select2-results__option--highlighted"), o.trigger("results:focus", {
                        data: i,
                        element: e(this)
                    })
                })
            }, n.prototype.getHighlightedResults = function () {return this.$results.find(".select2-results__option--highlighted")}, n.prototype.destroy = function () {this.$results.remove()}, n.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e), n = this.$results.offset().top,
                        i = e.offset().top, o = this.$results.scrollTop() + (i - n), r = i - n;
                    o -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(o)
                }
            }, n.prototype.template = function (t, n) {
                var i = this.options.get("templateResult"), o = this.options.get("escapeMarkup"), r = i(t, n);
                null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = o(r) : e(n).append(r)
            }, n
        }), l.define("select2/keys", [], function () {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }), l.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t) {this.$element = e, this.options = t, i.__super__.constructor.call(this)}

            return t.Extend(i, t.Observable), i.prototype.render = function () {
                var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), this.$selection = n
            }, i.prototype.bind = function (e, t) {
                var i = this, o = (e.id, e.id + "-results");
                this.container = e, this.$selection.on("focus", function (e) {i.trigger("focus", e)}), this.$selection.on("blur", function (e) {i._handleBlur(e)}), this.$selection.on("keydown", function (e) {i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()}), e.on("results:focus", function (e) {i.$selection.attr("aria-activedescendant", e.data._resultId)}), e.on("selection:update", function (e) {i.update(e.data)}), e.on("open", function () {i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", o), i._attachCloseHandler(e)}), e.on("close", function () {i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), window.setTimeout(function () {i.$selection.focus()}, 0), i._detachCloseHandler(e)}), e.on("enable", function () {i.$selection.attr("tabindex", i._tabindex)}), e.on("disable", function () {i.$selection.attr("tabindex", "-1")})
            }, i.prototype._handleBlur = function (t) {
                var n = this;
                window.setTimeout(function () {document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)}, 1)
            }, i.prototype._attachCloseHandler = function (n) {
                e(document.body).on("mousedown.select2." + n.id, function (n) {
                    var i = e(n.target).closest(".select2");
                    e(".select2.select2-container--open").each(function () {e(this), this != i[0] && t.GetData(this, "element").select2("close")})
                })
            }, i.prototype._detachCloseHandler = function (t) {e(document.body).off("mousedown.select2." + t.id)}, i.prototype.position = function (e, t) {t.find(".selection").append(e)}, i.prototype.destroy = function () {this._detachCloseHandler(this.container)}, i.prototype.update = function (e) {throw new Error("The `update` method must be defined in child classes.")}, i
        }), l.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
            function o() {o.__super__.constructor.apply(this, arguments)}

            return n.Extend(o, t), o.prototype.render = function () {
                var e = o.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, o.prototype.bind = function (e, t) {
                var n = this;
                o.__super__.bind.apply(this, arguments);
                var i = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {1 === e.which && n.trigger("toggle", {originalEvent: e})}), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), e.on("focus", function (t) {e.isOpen() || n.$selection.focus()})
            }, o.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title")
            }, o.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, o.prototype.selectionContainer = function () {return e("<span></span>")}, o.prototype.update = function (e) {
                if (0 !== e.length) {
                    var t = e[0], n = this.$selection.find(".select2-selection__rendered"), i = this.display(t, n);
                    n.empty().append(i), n.attr("title", t.title || t.text)
                } else this.clear()
            }, o
        }), l.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
            function i(e, t) {i.__super__.constructor.apply(this, arguments)}

            return n.Extend(i, t), i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, i.prototype.bind = function (t, o) {
                var r = this;
                i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {r.trigger("toggle", {originalEvent: e})}), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                    if (!r.options.get("disabled")) {
                        var i = e(this).parent(), o = n.GetData(i[0], "data");
                        r.trigger("unselect", {originalEvent: t, data: o})
                    }
                })
            }, i.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title")
            }, i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }, i.prototype.selectionContainer = function () {return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')}, i.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var o = e[i], r = this.selectionContainer(), s = this.display(o, r);
                        r.append(s), r.attr("title", o.title || o.text), n.StoreData(r[0], "data", o), t.push(r)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(a, t)
                }
            }, i
        }), l.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)}

            return t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t
            }, t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
            }, t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (1 < t.length || n) return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }, t
        }), l.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, n) {
            function i() {}

            return i.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {i._handleClear(e)}), t.on("keypress", function (e) {i._handleKeyboardClear(e, t)})
            }, i.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        t.stopPropagation();
                        var o = n.GetData(i[0], "data"), r = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var s = {data: o};
                        if (this.trigger("clear", s), s.prevented) this.$element.val(r); else {
                            for (var a = 0; a < o.length; a++) if (s = {data: o[a]}, this.trigger("unselect", s), s.prevented) return void this.$element.val(r);
                            this.$element.trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }
            }, i.prototype._handleKeyboardClear = function (e, n, i) {i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)}, i.prototype.update = function (t, i) {
                if (t.call(this, i), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === i.length)) {
                    var o = this.options.get("translations").get("removeAllItems"),
                        r = e('<span class="select2-selection__clear" title="' + o() + '">&times;</span>');
                    n.StoreData(r[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(r)
                }
            }, i
        }), l.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t, n) {e.call(this, t, n)}

            return i.prototype.render = function (t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = n, this.$search = n.find("input");
                var i = t.call(this);
                return this._transferTabIndex(), i
            }, i.prototype.bind = function (e, i, o) {
                var r = this;
                e.call(this, i, o), i.on("open", function () {r.$search.trigger("focus")}), i.on("close", function () {r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")}), i.on("enable", function () {r.$search.prop("disabled", !1), r._transferTabIndex()}), i.on("disable", function () {r.$search.prop("disabled", !0)}), i.on("focus", function (e) {r.$search.trigger("focus")}), i.on("results:focus", function (e) {r.$search.attr("aria-activedescendant", e.id)}), this.$selection.on("focusin", ".select2-search--inline", function (e) {r.trigger("focus", e)}), this.$selection.on("focusout", ".select2-search--inline", function (e) {r._handleBlur(e)}), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === r.$search.val()) {
                        var i = r.$searchContainer.prev(".select2-selection__choice");
                        if (0 < i.length) {
                            var o = t.GetData(i[0], "data");
                            r.searchRemoveChoice(o), e.preventDefault()
                        }
                    }
                });
                var s = document.documentMode, a = s && s <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {a ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search")}), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                    if (a && "input" === e.type) r.$selection.off("input.search input.searchcheck"); else {
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e)
                    }
                })
            }, i.prototype._transferTabIndex = function (e) {this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")}, i.prototype.createPlaceholder = function (e, t) {this.$search.attr("placeholder", t.text)}, i.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && (this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus())
            }, i.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {term: e})
                }
                this._keyUpPrevented = !1
            }, i.prototype.searchRemoveChoice = function (e, t) {this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch()}, i.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
            }, i
        }), l.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {}

            return t.prototype.bind = function (t, n, i) {
                var o = this,
                    r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                    s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                t.call(this, n, i), n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, r)) {
                        n = n || {};
                        var i = e.Event("select2:" + t, {params: n});
                        o.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                    }
                })
            }, t
        }), l.define("select2/translation", ["jquery", "require"], function (e, t) {
            function n(e) {this.dict = e || {}}

            return n.prototype.all = function () {return this.dict}, n.prototype.get = function (e) {return this.dict[e]}, n.prototype.extend = function (t) {this.dict = e.extend({}, t.all(), this.dict)}, n._cache = {}, n.loadPath = function (e) {
                if (!(e in n._cache)) {
                    var i = t(e);
                    n._cache[e] = i
                }
                return new n(n._cache[e])
            }, n
        }), l.define("select2/diacritics", [], function () {
            return {
                "Ð²â€™Â¶": "A",
                "Ð¿Ñ˜ÐŽ": "A",
                "Ð“Ð‚": "A",
                "Ð“Ðƒ": "A",
                "Ð“â€š": "A",
                "Ð±Ñ”Â¦": "A",
                "Ð±Ñ”Â¤": "A",
                "Ð±Ñ”Ð„": "A",
                "Ð±Ñ”Ð": "A",
                "Ð“Ñ“": "A",
                "Ð”Ð‚": "A",
                "Ð”â€š": "A",
                "Ð±Ñ”Â°": "A",
                "Ð±Ñ”Â®": "A",
                "Ð±Ñ”Ò‘": "A",
                "Ð±Ñ”Ð†": "A",
                "Ð˜Â¦": "A",
                "Ð— ": "A",
                "Ð“â€ž": "A",
                "Ð—Ñ›": "A",
                "Ð±Ñ”Ñž": "A",
                "Ð“â€¦": "A",
                "Ð—Ñ”": "A",
                "Ð—ÐŒ": "A",
                "Ð˜Ð‚": "A",
                "Ð˜â€š": "A",
                "Ð±Ñ” ": "A",
                "Ð±Ñ”Â¬": "A",
                "Ð±Ñ”Â¶": "A",
                "Ð±Ñ‘Ð‚": "A",
                "Ð”â€ž": "A",
                "Ð˜Ñ”": "A",
                "Ð²Â±Ð‡": "A",
                "ÐºÑšÐ†": "AA",
                "Ð“â€ ": "AE",
                "Ð—Ñ˜": "AE",
                "Ð—Ñž": "AE",
                "ÐºÑšÒ‘": "AO",
                "ÐºÑšÂ¶": "AU",
                "ÐºÑšÑ‘": "AV",
                "ÐºÑšÑ”": "AV",
                "ÐºÑšÑ˜": "AY",
                "Ð²â€™Â·": "B",
                "Ð¿Ñ˜Ñž": "B",
                "Ð±Ñ‘â€š": "B",
                "Ð±Ñ‘â€ž": "B",
                "Ð±Ñ‘â€ ": "B",
                "Ð™Ñ“": "B",
                "Ð–â€š": "B",
                "Ð–Ðƒ": "B",
                "Ð²â€™Ñ‘": "C",
                "Ð¿Ñ˜Ðˆ": "C",
                "Ð”â€ ": "C",
                "Ð”â‚¬": "C",
                "Ð”Ð‰": "C",
                "Ð”ÐŠ": "C",
                "Ð“â€¡": "C",
                "Ð±Ñ‘â‚¬": "C",
                "Ð–â€¡": "C",
                "Ð˜Â»": "C",
                "ÐºÑšÑ•": "C",
                "Ð²â€™â„–": "D",
                "Ð¿Ñ˜Â¤": "D",
                "Ð±Ñ‘Ð‰": "D",
                "Ð”Ð‹": "D",
                "Ð±Ñ‘ÐŠ": "D",
                "Ð±Ñ‘Ñ’": "D",
                "Ð±Ñ‘â€™": "D",
                "Ð±Ñ‘Ð‹": "D",
                "Ð”Ñ’": "D",
                "Ð–â€¹": "D",
                "Ð–Ð‰": "D",
                "Ð–â€°": "D",
                "ÐºÑœâ„–": "D",
                "Ð—Â±": "DZ",
                "Ð—â€ž": "DZ",
                "Ð—Ð†": "Dz",
                "Ð—â€¦": "Dz",
                "Ð²â€™Ñ”": "E",
                "Ð¿Ñ˜Ò": "E",
                "Ð“â‚¬": "E",
                "Ð“â€°": "E",
                "Ð“Ð‰": "E",
                "Ð±Â»Ð‚": "E",
                "Ð±Ñ”Ñ•": "E",
                "Ð±Â»â€ž": "E",
                "Ð±Â»â€š": "E",
                "Ð±Ñ”Ñ˜": "E",
                "Ð”â€™": "E",
                "Ð±Ñ‘â€": "E",
                "Ð±Ñ‘â€“": "E",
                "Ð”â€": "E",
                "Ð”â€“": "E",
                "Ð“â€¹": "E",
                "Ð±Ñ”Ñ”": "E",
                "Ð”Ñ™": "E",
                "Ð˜â€ž": "E",
                "Ð˜â€ ": "E",
                "Ð±Ñ”Ñ‘": "E",
                "Ð±Â»â€ ": "E",
                "Ð˜Ð": "E",
                "Ð±Ñ‘Ñš": "E",
                "Ð”Â˜": "E",
                "Ð±Ñ‘Â˜": "E",
                "Ð±Ñ‘Ñ™": "E",
                "Ð–Ñ’": "E",
                "Ð–Ð‹": "E",
                "Ð²â€™Â»": "F",
                "Ð¿Ñ˜Â¦": "F",
                "Ð±Ñ‘Ñ›": "F",
                "Ð–â€˜": "F",
                "ÐºÑœÂ»": "F",
                "Ð²â€™Ñ˜": "G",
                "Ð¿Ñ˜Â§": "G",
                "Ð—Ò‘": "G",
                "Ð”Ñš": "G",
                "Ð±Ñ‘ ": "G",
                "Ð”Ñ›": "G",
                "Ð” ": "G",
                "Ð—Â¦": "G",
                "Ð”Ñž": "G",
                "Ð—Â¤": "G",
                "Ð–â€œ": "G",
                "ÐºÑ› ": "G",
                "ÐºÑœÐ…": "G",
                "ÐºÑœÑ•": "G",
                "Ð²â€™Ð…": "H",
                "Ð¿Ñ˜Ð": "H",
                "Ð”Â¤": "H",
                "Ð±Ñ‘Ñž": "H",
                "Ð±Ñ‘Â¦": "H",
                "Ð˜Ñ›": "H",
                "Ð±Ñ‘Â¤": "H",
                "Ð±Ñ‘Ð": "H",
                "Ð±Ñ‘Ð„": "H",
                "Ð”Â¦": "H",
                "Ð²Â±Â§": "H",
                "Ð²Â±Âµ": "H",
                "ÐºÑ›ÐŒ": "H",
                "Ð²â€™Ñ•": "I",
                "Ð¿Ñ˜Â©": "I",
                "Ð“ÐŠ": "I",
                "Ð“ÐŒ": "I",
                "Ð“Ð‹": "I",
                "Ð”Ð": "I",
                "Ð”Ð„": "I",
                "Ð”Â¬": "I",
                "Ð”Â°": "I",
                "Ð“Ð": "I",
                "Ð±Ñ‘Â®": "I",
                "Ð±Â»â‚¬": "I",
                "Ð—Ð": "I",
                "Ð˜â‚¬": "I",
                "Ð˜Ð‰": "I",
                "Ð±Â»Ð‰": "I",
                "Ð”Â®": "I",
                "Ð±Ñ‘Â¬": "I",
                "Ð–â€”": "I",
                "Ð²â€™Ñ—": "J",
                "Ð¿Ñ˜Ð„": "J",
                "Ð”Ò‘": "J",
                "Ð™â‚¬": "J",
                "Ð²â€œÐ‚": "K",
                "Ð¿Ñ˜Â«": "K",
                "Ð±Ñ‘Â°": "K",
                "Ð—Ð": "K",
                "Ð±Ñ‘Ð†": "K",
                "Ð”Â¶": "K",
                "Ð±Ñ‘Ò‘": "K",
                "Ð–Â˜": "K",
                "Ð²Â±Â©": "K",
                "ÐºÑœÐ‚": "K",
                "ÐºÑœâ€š": "K",
                "ÐºÑœâ€ž": "K",
                "ÐºÑ›Ñž": "K",
                "Ð²â€œÐƒ": "L",
                "Ð¿Ñ˜Â¬": "L",
                "Ð”Ñ—": "L",
                "Ð”â„–": "L",
                "Ð”Ð…": "L",
                "Ð±Ñ‘Â¶": "L",
                "Ð±Ñ‘Ñ‘": "L",
                "Ð”Â»": "L",
                "Ð±Ñ‘Ñ˜": "L",
                "Ð±Ñ‘Ñ”": "L",
                "Ð•Ðƒ": "L",
                "Ð˜Ð…": "L",
                "Ð²Â±Ñž": "L",
                "Ð²Â± ": "L",
                "ÐºÑœâ‚¬": "L",
                "ÐºÑœâ€ ": "L",
                "ÐºÑ›Ð‚": "L",
                "Ð—â€¡": "LJ",
                "Ð—â‚¬": "Lj",
                "Ð²â€œâ€š": "M",
                "Ð¿Ñ˜Â­": "M",
                "Ð±Ñ‘Ñ•": "M",
                "Ð±â„–Ð‚": "M",
                "Ð±â„–â€š": "M",
                "Ð²Â±Â®": "M",
                "Ð–Ñš": "M",
                "Ð²â€œÑ“": "N",
                "Ð¿Ñ˜Â®": "N",
                "Ð—Ñ‘": "N",
                "Ð•Ñ“": "N",
                "Ð“â€˜": "N",
                "Ð±â„–â€ž": "N",
                "Ð•â€¡": "N",
                "Ð±â„–â€ ": "N",
                "Ð•â€¦": "N",
                "Ð±â„–Ð‰": "N",
                "Ð±â„–â‚¬": "N",
                "Ð˜ ": "N",
                "Ð–Ñœ": "N",
                "ÐºÑ›Ñ’": "N",
                "ÐºÑ›Â¤": "N",
                "Ð—Ð‰": "NJ",
                "Ð—â€¹": "Nj",
                "Ð²â€œâ€ž": "O",
                "Ð¿Ñ˜Ð‡": "O",
                "Ð“â€™": "O",
                "Ð“â€œ": "O",
                "Ð“â€": "O",
                "Ð±Â»â€™": "O",
                "Ð±Â»Ñ’": "O",
                "Ð±Â»â€“": "O",
                "Ð±Â»â€": "O",
                "Ð“â€¢": "O",
                "Ð±â„–ÐŠ": "O",
                "Ð˜Â¬": "O",
                "Ð±â„–Ð‹": "O",
                "Ð•ÐŠ": "O",
                "Ð±â„–Ñ’": "O",
                "Ð±â„–â€™": "O",
                "Ð•Ð‹": "O",
                "Ð˜Â®": "O",
                "Ð˜Â°": "O",
                "Ð“â€“": "O",
                "Ð˜Ð„": "O",
                "Ð±Â»Ð‹": "O",
                "Ð•Ñ’": "O",
                "Ð—â€˜": "O",
                "Ð˜ÐŠ": "O",
                "Ð˜Ð‹": "O",
                "Ð– ": "O",
                "Ð±Â»Ñš": "O",
                "Ð±Â»Ñ™": "O",
                "Ð±Â» ": "O",
                "Ð±Â»Ñ›": "O",
                "Ð±Â»Ñž": "O",
                "Ð±Â»ÐŠ": "O",
                "Ð±Â»Â˜": "O",
                "Ð—Ð„": "O",
                "Ð—Â¬": "O",
                "Ð“Â˜": "O",
                "Ð—Ñ•": "O",
                "Ð–â€ ": "O",
                "Ð–ÑŸ": "O",
                "ÐºÑœÐ‰": "O",
                "ÐºÑœÐŠ": "O",
                "Ð•â€™": "OE",
                "Ð–Ñž": "OI",
                "ÐºÑœÐ‹": "OO",
                "Ð˜Ñž": "OU",
                "Ð²â€œâ€¦": "P",
                "Ð¿Ñ˜Â°": "P",
                "Ð±â„–â€": "P",
                "Ð±â„–â€“": "P",
                "Ð–Â¤": "P",
                "Ð²Â±Ðˆ": "P",
                "ÐºÑœÑ’": "P",
                "ÐºÑœâ€™": "P",
                "ÐºÑœâ€": "P",
                "Ð²â€œâ€ ": "Q",
                "Ð¿Ñ˜Â±": "Q",
                "ÐºÑœâ€“": "Q",
                "ÐºÑœÂ˜": "Q",
                "Ð™Ð‰": "Q",
                "Ð²â€œâ€¡": "R",
                "Ð¿Ñ˜Ð†": "R",
                "Ð•â€": "R",
                "Ð±â„–Â˜": "R",
                "Ð•Â˜": "R",
                "Ð˜Ñ’": "R",
                "Ð˜â€™": "R",
                "Ð±â„–Ñ™": "R",
                "Ð±â„–Ñš": "R",
                "Ð•â€“": "R",
                "Ð±â„–Ñ›": "R",
                "Ð™ÐŠ": "R",
                "Ð²Â±Â¤": "R",
                "ÐºÑœÑ™": "R",
                "ÐºÑ›Â¦": "R",
                "ÐºÑ›â€š": "R",
                "Ð²â€œâ‚¬": "S",
                "Ð¿Ñ˜Ñ–": "S",
                "Ð±Ñ”Ñ›": "S",
                "Ð•Ñ™": "S",
                "Ð±â„–Â¤": "S",
                "Ð•Ñš": "S",
                "Ð±â„– ": "S",
                "Ð• ": "S",
                "Ð±â„–Â¦": "S",
                "Ð±â„–Ñž": "S",
                "Ð±â„–Ð": "S",
                "Ð˜Â˜": "S",
                "Ð•Ñ›": "S",
                "Ð²Â±Ñ•": "S",
                "ÐºÑ›Ð": "S",
                "ÐºÑ›â€ž": "S",
                "Ð²â€œâ€°": "T",
                "Ð¿Ñ˜Ò‘": "T",
                "Ð±â„–Ð„": "T",
                "Ð•Â¤": "T",
                "Ð±â„–Â¬": "T",
                "Ð˜Ñ™": "T",
                "Ð•Ñž": "T",
                "Ð±â„–Â°": "T",
                "Ð±â„–Â®": "T",
                "Ð•Â¦": "T",
                "Ð–Â¬": "T",
                "Ð–Â®": "T",
                "Ð˜Ñ•": "T",
                "ÐºÑ›â€ ": "T",
                "ÐºÑšÐ": "TZ",
                "Ð²â€œÐ‰": "U",
                "Ð¿Ñ˜Âµ": "U",
                "Ð“â„¢": "U",
                "Ð“Ñ™": "U",
                "Ð“â€º": "U",
                "Ð•Ð": "U",
                "Ð±â„–Ñ‘": "U",
                "Ð•Ð„": "U",
                "Ð±â„–Ñ”": "U",
                "Ð•Â¬": "U",
                "Ð“Ñš": "U",
                "Ð—â€º": "U",
                "Ð—â€”": "U",
                "Ð—â€¢": "U",
                "Ð—â„¢": "U",
                "Ð±Â»Â¦": "U",
                "Ð•Â®": "U",
                "Ð•Â°": "U",
                "Ð—â€œ": "U",
                "Ð˜â€": "U",
                "Ð˜â€“": "U",
                "Ð–Ð‡": "U",
                "Ð±Â»Ð„": "U",
                "Ð±Â»Ð": "U",
                "Ð±Â»Â®": "U",
                "Ð±Â»Â¬": "U",
                "Ð±Â»Â°": "U",
                "Ð±Â»Â¤": "U",
                "Ð±â„–Ð†": "U",
                "Ð•Ð†": "U",
                "Ð±â„–Â¶": "U",
                "Ð±â„–Ò‘": "U",
                "Ð™â€ž": "U",
                "Ð²â€œâ€¹": "V",
                "Ð¿Ñ˜Â¶": "V",
                "Ð±â„–Ñ˜": "V",
                "Ð±â„–Ñ•": "V",
                "Ð–Ð†": "V",
                "ÐºÑœÑ›": "V",
                "Ð™â€¦": "V",
                "ÐºÑœ ": "VY",
                "Ð²â€œÐŠ": "W",
                "Ð¿Ñ˜Â·": "W",
                "Ð±Ñ”Ð‚": "W",
                "Ð±Ñ”â€š": "W",
                "Ð•Ò‘": "W",
                "Ð±Ñ”â€ ": "W",
                "Ð±Ñ”â€ž": "W",
                "Ð±Ñ”â‚¬": "W",
                "Ð²Â±Ð†": "W",
                "Ð²â€œÐŒ": "X",
                "Ð¿Ñ˜Ñ‘": "X",
                "Ð±Ñ”Ð‰": "X",
                "Ð±Ñ”ÐŠ": "X",
                "Ð²â€œÐ‹": "Y",
                "Ð¿Ñ˜â„–": "Y",
                "Ð±Â»Ð†": "Y",
                "Ð“Ñœ": "Y",
                "Ð•Â¶": "Y",
                "Ð±Â»Ñ‘": "Y",
                "Ð˜Ð†": "Y",
                "Ð±Ñ”Ð‹": "Y",
                "Ð•Ñ‘": "Y",
                "Ð±Â»Â¶": "Y",
                "Ð±Â»Ò‘": "Y",
                "Ð–Ñ–": "Y",
                "Ð™Ð‹": "Y",
                "Ð±Â»Ñ•": "Y",
                "Ð²â€œÐ": "Z",
                "Ð¿Ñ˜Ñ”": "Z",
                "Ð•â„–": "Z",
                "Ð±Ñ”Ñ’": "Z",
                "Ð•Â»": "Z",
                "Ð•Ð…": "Z",
                "Ð±Ñ”â€™": "Z",
                "Ð±Ñ”â€": "Z",
                "Ð–Âµ": "Z",
                "Ð˜Â¤": "Z",
                "Ð²Â±Ñ—": "Z",
                "Ð²Â±Â«": "Z",
                "ÐºÑœÑž": "Z",
                "Ð²â€œÑ’": "a",
                "Ð¿Ð…Ðƒ": "a",
                "Ð±Ñ”Ñ™": "a",
                "Ð“ ": "a",
                "Ð“ÐŽ": "a",
                "Ð“Ñž": "a",
                "Ð±Ñ”Â§": "a",
                "Ð±Ñ”Ò": "a",
                "Ð±Ñ”Â«": "a",
                "Ð±Ñ”Â©": "a",
                "Ð“Ðˆ": "a",
                "Ð”Ðƒ": "a",
                "Ð”Ñ“": "a",
                "Ð±Ñ”Â±": "a",
                "Ð±Ñ”Ð‡": "a",
                "Ð±Ñ”Âµ": "a",
                "Ð±Ñ”Ñ–": "a",
                "Ð˜Â§": "a",
                "Ð—ÐŽ": "a",
                "Ð“Â¤": "a",
                "Ð—ÑŸ": "a",
                "Ð±Ñ”Ðˆ": "a",
                "Ð“Ò": "a",
                "Ð—Â»": "a",
                "Ð—Ð‹": "a",
                "Ð˜Ðƒ": "a",
                "Ð˜Ñ“": "a",
                "Ð±Ñ”ÐŽ": "a",
                "Ð±Ñ”Â­": "a",
                "Ð±Ñ”Â·": "a",
                "Ð±Ñ‘Ðƒ": "a",
                "Ð”â€¦": "a",
                "Ð²Â±Ò": "a",
                "Ð™Ñ’": "a",
                "ÐºÑšÑ–": "aa",
                "Ð“Â¦": "ae",
                "Ð—Ð…": "ae",
                "Ð—Ðˆ": "ae",
                "ÐºÑšÂµ": "ao",
                "ÐºÑšÂ·": "au",
                "ÐºÑšâ„–": "av",
                "ÐºÑšÂ»": "av",
                "ÐºÑšÐ…": "ay",
                "Ð²â€œâ€˜": "b",
                "Ð¿Ð…â€š": "b",
                "Ð±Ñ‘Ñ“": "b",
                "Ð±Ñ‘â€¦": "b",
                "Ð±Ñ‘â€¡": "b",
                "Ð–Ð‚": "b",
                "Ð–Ñ“": "b",
                "Ð™â€œ": "b",
                "Ð²â€œâ€™": "c",
                "Ð¿Ð…Ñ“": "c",
                "Ð”â€¡": "c",
                "Ð”â€°": "c",
                "Ð”â€¹": "c",
                "Ð”ÐŒ": "c",
                "Ð“Â§": "c",
                "Ð±Ñ‘â€°": "c",
                "Ð–â‚¬": "c",
                "Ð˜Ñ˜": "c",
                "ÐºÑšÑ—": "c",
                "Ð²â€ â€ž": "c",
                "Ð²â€œâ€œ": "d",
                "Ð¿Ð…â€ž": "d",
                "Ð±Ñ‘â€¹": "d",
                "Ð”Ð": "d",
                "Ð±Ñ‘ÐŒ": "d",
                "Ð±Ñ‘â€˜": "d",
                "Ð±Ñ‘â€œ": "d",
                "Ð±Ñ‘Ð": "d",
                "Ð”â€˜": "d",
                "Ð–ÐŠ": "d",
                "Ð™â€“": "d",
                "Ð™â€”": "d",
                "ÐºÑœÑ”": "d",
                "Ð—Ñ–": "dz",
                "Ð—â€ ": "dz",
                "Ð²â€œâ€": "e",
                "Ð¿Ð…â€¦": "e",
                "Ð“Ð": "e",
                "Ð“Â©": "e",
                "Ð“Ð„": "e",
                "Ð±Â»Ðƒ": "e",
                "Ð±Ñ”Ñ—": "e",
                "Ð±Â»â€¦": "e",
                "Ð±Â»Ñ“": "e",
                "Ð±Ñ”Ð…": "e",
                "Ð”â€œ": "e",
                "Ð±Ñ‘â€¢": "e",
                "Ð±Ñ‘â€”": "e",
                "Ð”â€¢": "e",
                "Ð”â€”": "e",
                "Ð“Â«": "e",
                "Ð±Ñ”Â»": "e",
                "Ð”â€º": "e",
                "Ð˜â€¦": "e",
                "Ð˜â€¡": "e",
                "Ð±Ñ”â„–": "e",
                "Ð±Â»â€¡": "e",
                "Ð˜Â©": "e",
                "Ð±Ñ‘Ñœ": "e",
                "Ð”â„¢": "e",
                "Ð±Ñ‘â„¢": "e",
                "Ð±Ñ‘â€º": "e",
                "Ð™â€¡": "e",
                "Ð™â€º": "e",
                "Ð—Ñœ": "e",
                "Ð²â€œâ€¢": "f",
                "Ð¿Ð…â€ ": "f",
                "Ð±Ñ‘ÑŸ": "f",
                "Ð–â€™": "f",
                "ÐºÑœÑ˜": "f",
                "Ð²â€œâ€“": "g",
                "Ð¿Ð…â€¡": "g",
                "Ð—Âµ": "g",
                "Ð”Ñœ": "g",
                "Ð±Ñ‘ÐŽ": "g",
                "Ð”ÑŸ": "g",
                "Ð”ÐŽ": "g",
                "Ð—Â§": "g",
                "Ð”Ðˆ": "g",
                "Ð—Ò": "g",
                "Ð™ ": "g",
                "ÐºÑ›ÐŽ": "g",
                "Ð±Âµâ„–": "g",
                "ÐºÑœÑ—": "g",
                "Ð²â€œâ€”": "h",
                "Ð¿Ð…â‚¬": "h",
                "Ð”Ò": "h",
                "Ð±Ñ‘Ðˆ": "h",
                "Ð±Ñ‘Â§": "h",
                "Ð˜ÑŸ": "h",
                "Ð±Ñ‘Ò": "h",
                "Ð±Ñ‘Â©": "h",
                "Ð±Ñ‘Â«": "h",
                "Ð±Ñ”â€“": "h",
                "Ð”Â§": "h",
                "Ð²Â±Ð": "h",
                "Ð²Â±Â¶": "h",
                "Ð™Ò": "h",
                "Ð–â€¢": "hv",
                "Ð²â€œÂ˜": "i",
                "Ð¿Ð…â€°": "i",
                "Ð“Â¬": "i",
                "Ð“Â­": "i",
                "Ð“Â®": "i",
                "Ð”Â©": "i",
                "Ð”Â«": "i",
                "Ð”Â­": "i",
                "Ð“Ð‡": "i",
                "Ð±Ñ‘Ð‡": "i",
                "Ð±Â»â€°": "i",
                "Ð—Ñ’": "i",
                "Ð˜â€°": "i",
                "Ð˜â€¹": "i",
                "Ð±Â»â€¹": "i",
                "Ð”Ð‡": "i",
                "Ð±Ñ‘Â­": "i",
                "Ð™Ð": "i",
                "Ð”Â±": "i",
                "Ð²â€œâ„¢": "j",
                "Ð¿Ð…Ð‰": "j",
                "Ð”Âµ": "j",
                "Ð—Â°": "j",
                "Ð™â€°": "j",
                "Ð²â€œÑ™": "k",
                "Ð¿Ð…â€¹": "k",
                "Ð±Ñ‘Â±": "k",
                "Ð—Â©": "k",
                "Ð±Ñ‘Ñ–": "k",
                "Ð”Â·": "k",
                "Ð±Ñ‘Âµ": "k",
                "Ð–â„¢": "k",
                "Ð²Â±Ð„": "k",
                "ÐºÑœÐƒ": "k",
                "ÐºÑœÑ“": "k",
                "ÐºÑœâ€¦": "k",
                "ÐºÑ›Ðˆ": "k",
                "Ð²â€œâ€º": "l",
                "Ð¿Ð…ÐŠ": "l",
                "Ð•Ð‚": "l",
                "Ð”Ñ”": "l",
                "Ð”Ñ•": "l",
                "Ð±Ñ‘Â·": "l",
                "Ð±Ñ‘â„–": "l",
                "Ð”Ñ˜": "l",
                "Ð±Ñ‘Ð…": "l",
                "Ð±Ñ‘Â»": "l",
                "Ð•Ñ—": "l",
                "Ð•â€š": "l",
                "Ð–Ñ™": "l",
                "Ð™Â«": "l",
                "Ð²Â±ÐŽ": "l",
                "ÐºÑœâ€°": "l",
                "ÐºÑ›Ðƒ": "l",
                "ÐºÑœâ€¡": "l",
                "Ð—â€°": "lj",
                "Ð²â€œÑš": "m",
                "Ð¿Ð…ÐŒ": "m",
                "Ð±Ñ‘Ñ—": "m",
                "Ð±â„–Ðƒ": "m",
                "Ð±â„–Ñ“": "m",
                "Ð™Â±": "m",
                "Ð™Ð‡": "m",
                "Ð²â€œÑœ": "n",
                "Ð¿Ð…Ð‹": "n",
                "Ð—â„–": "n",
                "Ð•â€ž": "n",
                "Ð“Â±": "n",
                "Ð±â„–â€¦": "n",
                "Ð•â‚¬": "n",
                "Ð±â„–â€¡": "n",
                "Ð•â€ ": "n",
                "Ð±â„–â€¹": "n",
                "Ð±â„–â€°": "n",
                "Ð–Ñ›": "n",
                "Ð™Ð†": "n",
                "Ð•â€°": "n",
                "ÐºÑ›â€˜": "n",
                "ÐºÑ›Ò": "n",
                "Ð—ÐŠ": "nj",
                "Ð²â€œÑ›": "o",
                "Ð¿Ð…Ð": "o",
                "Ð“Ð†": "o",
                "Ð“Ñ–": "o",
                "Ð“Ò‘": "o",
                "Ð±Â»â€œ": "o",
                "Ð±Â»â€˜": "o",
                "Ð±Â»â€”": "o",
                "Ð±Â»â€¢": "o",
                "Ð“Âµ": "o",
                "Ð±â„–ÐŒ": "o",
                "Ð˜Â­": "o",
                "Ð±â„–Ð": "o",
                "Ð•ÐŒ": "o",
                "Ð±â„–â€˜": "o",
                "Ð±â„–â€œ": "o",
                "Ð•Ð": "o",
                "Ð˜Ð‡": "o",
                "Ð˜Â±": "o",
                "Ð“Â¶": "o",
                "Ð˜Â«": "o",
                "Ð±Â»Ð": "o",
                "Ð•â€˜": "o",
                "Ð—â€™": "o",
                "Ð˜ÐŒ": "o",
                "Ð˜Ð": "o",
                "Ð–ÐŽ": "o",
                "Ð±Â»Ñœ": "o",
                "Ð±Â»â€º": "o",
                "Ð±Â»ÐŽ": "o",
                "Ð±Â»ÑŸ": "o",
                "Ð±Â»Ðˆ": "o",
                "Ð±Â»ÐŒ": "o",
                "Ð±Â»â„¢": "o",
                "Ð—Â«": "o",
                "Ð—Â­": "o",
                "Ð“Ñ‘": "o",
                "Ð—Ñ—": "o",
                "Ð™â€": "o",
                "ÐºÑœâ€¹": "o",
                "ÐºÑœÐŒ": "o",
                "Ð™Âµ": "o",
                "Ð•â€œ": "oe",
                "Ð–Ðˆ": "oi",
                "Ð˜Ðˆ": "ou",
                "ÐºÑœÐ": "oo",
                "Ð²â€œÑŸ": "p",
                "Ð¿Ð…Ñ’": "p",
                "Ð±â„–â€¢": "p",
                "Ð±â„–â€”": "p",
                "Ð–Ò": "p",
                "Ð±ÂµÐ…": "p",
                "ÐºÑœâ€˜": "p",
                "ÐºÑœâ€œ": "p",
                "ÐºÑœâ€¢": "p",
                "Ð²â€œ ": "q",
                "Ð¿Ð…â€˜": "q",
                "Ð™â€¹": "q",
                "ÐºÑœâ€”": "q",
                "ÐºÑœâ„¢": "q",
                "Ð²â€œÐŽ": "r",
                "Ð¿Ð…â€™": "r",
                "Ð•â€¢": "r",
                "Ð±â„–â„¢": "r",
                "Ð•â„¢": "r",
                "Ð˜â€˜": "r",
                "Ð˜â€œ": "r",
                "Ð±â„–â€º": "r",
                "Ð±â„–Ñœ": "r",
                "Ð•â€”": "r",
                "Ð±â„–ÑŸ": "r",
                "Ð™ÐŒ": "r",
                "Ð™Ð…": "r",
                "ÐºÑœâ€º": "r",
                "ÐºÑ›Â§": "r",
                "ÐºÑ›Ñ“": "r",
                "Ð²â€œÑž": "s",
                "Ð¿Ð…â€œ": "s",
                "Ð“ÑŸ": "s",
                "Ð•â€º": "s",
                "Ð±â„–Ò": "s",
                "Ð•Ñœ": "s",
                "Ð±â„–ÐŽ": "s",
                "Ð•ÐŽ": "s",
                "Ð±â„–Â§": "s",
                "Ð±â„–Ðˆ": "s",
                "Ð±â„–Â©": "s",
                "Ð˜â„¢": "s",
                "Ð•ÑŸ": "s",
                "Ð˜Ñ—": "s",
                "ÐºÑ›Â©": "s",
                "ÐºÑ›â€¦": "s",
                "Ð±Ñ”â€º": "s",
                "Ð²â€œÐˆ": "t",
                "Ð¿Ð…â€": "t",
                "Ð±â„–Â«": "t",
                "Ð±Ñ”â€”": "t",
                "Ð•Ò": "t",
                "Ð±â„–Â­": "t",
                "Ð˜â€º": "t",
                "Ð•Ðˆ": "t",
                "Ð±â„–Â±": "t",
                "Ð±â„–Ð‡": "t",
                "Ð•Â§": "t",
                "Ð–Â­": "t",
                "Ðšâ‚¬": "t",
                "Ð²Â±Â¦": "t",
                "ÐºÑ›â€¡": "t",
                "ÐºÑšÂ©": "tz",
                "Ð²â€œÂ¤": "u",
                "Ð¿Ð…â€¢": "u",
                "Ð“â„–": "u",
                "Ð“Ñ”": "u",
                "Ð“Â»": "u",
                "Ð•Â©": "u",
                "Ð±â„–â„–": "u",
                "Ð•Â«": "u",
                "Ð±â„–Â»": "u",
                "Ð•Â­": "u",
                "Ð“Ñ˜": "u",
                "Ð—Ñš": "u",
                "Ð—Â˜": "u",
                "Ð—â€“": "u",
                "Ð—Ñ™": "u",
                "Ð±Â»Â§": "u",
                "Ð•Ð‡": "u",
                "Ð•Â±": "u",
                "Ð—â€": "u",
                "Ð˜â€¢": "u",
                "Ð˜â€”": "u",
                "Ð–Â°": "u",
                "Ð±Â»Â«": "u",
                "Ð±Â»Â©": "u",
                "Ð±Â»Ð‡": "u",
                "Ð±Â»Â­": "u",
                "Ð±Â»Â±": "u",
                "Ð±Â»Ò": "u",
                "Ð±â„–Ñ–": "u",
                "Ð•Ñ–": "u",
                "Ð±â„–Â·": "u",
                "Ð±â„–Âµ": "u",
                "Ðšâ€°": "u",
                "Ð²â€œÒ": "v",
                "Ð¿Ð…â€“": "v",
                "Ð±â„–Ð…": "v",
                "Ð±â„–Ñ—": "v",
                "Ðšâ€¹": "v",
                "ÐºÑœÑŸ": "v",
                "ÐšÐŠ": "v",
                "ÐºÑœÐŽ": "vy",
                "Ð²â€œÂ¦": "w",
                "Ð¿Ð…â€”": "w",
                "Ð±Ñ”Ðƒ": "w",
                "Ð±Ñ”Ñ“": "w",
                "Ð•Âµ": "w",
                "Ð±Ñ”â€¡": "w",
                "Ð±Ñ”â€¦": "w",
                "Ð±Ñ”Â˜": "w",
                "Ð±Ñ”â€°": "w",
                "Ð²Â±Ñ–": "w",
                "Ð²â€œÂ§": "x",
                "Ð¿Ð…Â˜": "x",
                "Ð±Ñ”â€¹": "x",
                "Ð±Ñ”ÐŒ": "x",
                "Ð²â€œÐ": "y",
                "Ð¿Ð…â„¢": "y",
                "Ð±Â»Ñ–": "y",
                "Ð“Ð…": "y",
                "Ð•Â·": "y",
                "Ð±Â»â„–": "y",
                "Ð˜Ñ–": "y",
                "Ð±Ñ”Ð": "y",
                "Ð“Ñ—": "y",
                "Ð±Â»Â·": "y",
                "Ð±Ñ”â„¢": "y",
                "Ð±Â»Âµ": "y",
                "Ð–Ò‘": "y",
                "Ð™Ð": "y",
                "Ð±Â»Ñ—": "y",
                "Ð²â€œÂ©": "z",
                "Ð¿Ð…Ñ™": "z",
                "Ð•Ñ”": "z",
                "Ð±Ñ”â€˜": "z",
                "Ð•Ñ˜": "z",
                "Ð•Ñ•": "z",
                "Ð±Ñ”â€œ": "z",
                "Ð±Ñ”â€¢": "z",
                "Ð–Â¶": "z",
                "Ð˜Ò": "z",
                "Ð™Ð‚": "z",
                "Ð²Â±Â¬": "z",
                "ÐºÑœÐˆ": "z",
                "Ðžâ€ ": "Ðžâ€˜",
                "Ðžâ‚¬": "Ðžâ€¢",
                "Ðžâ€°": "Ðžâ€”",
                "ÐžÐ‰": "Ðžâ„¢",
                "ÐžÐ„": "Ðžâ„¢",
                "ÐžÐŠ": "ÐžÑŸ",
                "ÐžÐ‹": "ÐžÒ",
                "ÐžÂ«": "ÐžÒ",
                "ÐžÐ": "ÐžÂ©",
                "ÐžÂ¬": "ÐžÂ±",
                "ÐžÂ­": "ÐžÂµ",
                "ÐžÂ®": "ÐžÂ·",
                "ÐžÐ‡": "Ðžâ„–",
                "ÐŸÐ‰": "Ðžâ„–",
                "ÐžÑ’": "Ðžâ„–",
                "ÐŸÐŠ": "ÐžÑ—",
                "ÐŸÐŒ": "ÐŸâ€¦",
                "ÐŸâ€¹": "ÐŸâ€¦",
                "ÐžÂ°": "ÐŸâ€¦",
                "ÐŸÐ‹": "ÐŸâ€°",
                "ÐŸâ€š": "ÐŸÑ“",
                "Ð²Ð‚â„¢": "'"
            }
        }), l.define("select2/data/base", ["../utils"], function (e) {
            function t(e, n) {t.__super__.constructor.call(this)}

            return e.Extend(t, e.Observable), t.prototype.current = function (e) {throw new Error("The `current` method must be defined in child classes.")}, t.prototype.query = function (e, t) {throw new Error("The `query` method must be defined in child classes.")}, t.prototype.bind = function (e, t) {}, t.prototype.destroy = function () {}, t.prototype.generateResultId = function (t, n) {
                var i = t.id + "-result-";
                return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
            }, t
        }), l.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {this.$element = e, this.options = t, i.__super__.constructor.call(this)}

            return t.Extend(i, e), i.prototype.current = function (e) {
                var t = [], i = this;
                this.$element.find(":selected").each(function () {
                    var e = n(this), o = i.item(e);
                    t.push(o)
                }), e(t)
            }, i.prototype.select = function (e) {
                var t = this;
                if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (i) {
                    var o = [];
                    (e = [e]).push.apply(e, i);
                    for (var r = 0; r < e.length; r++) {
                        var s = e[r].id;
                        -1 === n.inArray(s, o) && o.push(s)
                    }
                    t.$element.val(o), t.$element.trigger("change")
                }); else {
                    var i = e.id;
                    this.$element.val(i), this.$element.trigger("change")
                }
            }, i.prototype.unselect = function (e) {
                var t = this;
                if (this.$element.prop("multiple")) {
                    if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("change");
                    this.current(function (i) {
                        for (var o = [], r = 0; r < i.length; r++) {
                            var s = i[r].id;
                            s !== e.id && -1 === n.inArray(s, o) && o.push(s)
                        }
                        t.$element.val(o), t.$element.trigger("change")
                    })
                }
            }, i.prototype.bind = function (e, t) {
                var n = this;
                (this.container = e).on("select", function (e) {n.select(e.data)}), e.on("unselect", function (e) {n.unselect(e.data)})
            }, i.prototype.destroy = function () {this.$element.find("*").each(function () {t.RemoveData(this)})}, i.prototype.query = function (e, t) {
                var i = [], o = this;
                this.$element.children().each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var r = o.item(t), s = o.matches(e, r);
                        null !== s && i.push(s)
                    }
                }), t({results: i})
            }, i.prototype.addOptions = function (e) {t.appendMany(this.$element, e)}, i.prototype.option = function (e) {
                var i;
                e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
                var o = n(i), r = this._normalizeItem(e);
                return r.element = i, t.StoreData(i, "data", r), o
            }, i.prototype.item = function (e) {
                var i = {};
                if (null != (i = t.GetData(e[0], "data"))) return i;
                if (e.is("option")) i = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                }; else if (e.is("optgroup")) {
                    i = {text: e.prop("label"), children: [], title: e.prop("title")};
                    for (var o = e.children("option"), r = [], s = 0; s < o.length; s++) {
                        var a = n(o[s]), l = this.item(a);
                        r.push(l)
                    }
                    i.children = r
                }
                return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i
            }, i.prototype._normalizeItem = function (e) {
                return e !== Object(e) && (e = {
                    id: e,
                    text: e
                }), null != (e = n.extend({}, {text: ""}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }, i.prototype.matches = function (e, t) {return this.options.get("matcher")(e, t)}, i
        }), l.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                var n = t.get("data") || [];
                i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
            }

            return t.Extend(i, e), i.prototype.select = function (e) {
                var t = this.$element.find("option").filter(function (t, n) {return n.value == e.id.toString()});
                0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
            }, i.prototype.convertToOptions = function (e) {
                for (var i = this, o = this.$element.find("option"), r = o.map(function () {return i.item(n(this)).id}).get(), s = [], a = 0; a < e.length; a++) {
                    var l = this._normalizeItem(e[a]);
                    if (0 <= n.inArray(l.id, r)) {
                        var c = o.filter(function (e) {return function () {return n(this).val() == e.id}}(l)),
                            d = this.item(c), u = n.extend(!0, {}, l, d), p = this.option(u);
                        c.replaceWith(p)
                    } else {
                        var h = this.option(l);
                        if (l.children) {
                            var f = this.convertToOptions(l.children);
                            t.appendMany(h, f)
                        }
                        s.push(h)
                    }
                }
                return s
            }, i
        }), l.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)}

            return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
                var t = {
                    data: function (e) {return n.extend({}, e, {q: e.term})},
                    transport: function (e, t, i) {
                        var o = n.ajax(e);
                        return o.then(t), o.fail(i), o
                    }
                };
                return n.extend({}, t, e, !0)
            }, i.prototype.processResults = function (e) {return e}, i.prototype.query = function (e, t) {
                function i() {
                    var i = r.transport(r, function (i) {
                        var r = o.processResults(i, e);
                        o.options.get("debug") && window.console && console.error && (r && r.results && n.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(r)
                    }, function () {"status" in i && (0 === i.status || "0" === i.status) || o.trigger("results:message", {message: "errorLoading"})});
                    o._request = i
                }

                var o = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var r = n.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof r.url && (r.url = r.url.call(this.$element, e)), "function" == typeof r.data && (r.data = r.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
            }, i
        }), l.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, i) {
                var o = i.get("tags"), r = i.get("createTag");
                void 0 !== r && (this.createTag = r);
                var s = i.get("insertTag");
                if (void 0 !== s && (this.insertTag = s), t.call(this, n, i), e.isArray(o)) for (var a = 0; a < o.length; a++) {
                    var l = o[a], c = this._normalizeItem(l), d = this.option(c);
                    this.$element.append(d)
                }
            }

            return t.prototype.query = function (e, t, n) {
                var i = this;
                this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, function e(o, r) {
                    for (var s = o.results, a = 0; a < s.length; a++) {
                        var l = s[a], c = null != l.children && !e({results: l.children}, !0);
                        if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !r && (o.data = s, void n(o))
                    }
                    if (r) return !0;
                    var d = i.createTag(t);
                    if (null != d) {
                        var u = i.option(d);
                        u.attr("data-select2-tag", !0), i.addOptions([u]), i.insertTag(s, d)
                    }
                    o.results = s, n(o)
                }) : e.call(this, t, n)
            }, t.prototype.createTag = function (t, n) {
                var i = e.trim(n.term);
                return "" === i ? null : {id: i, text: i}
            }, t.prototype.insertTag = function (e, t, n) {t.unshift(n)}, t.prototype._removeOldTags = function (t) {this._lastTag, this.$element.find("option[data-select2-tag]").each(function () {this.selected || e(this).remove()})}, t
        }), l.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
            }

            return t.prototype.bind = function (e, t, n) {e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")}, t.prototype.query = function (t, n, i) {
                var o = this;
                n.term = n.term || "";
                var r = this.tokenizer(n, this.options, function (t) {
                    var n = o._normalizeItem(t);
                    if (!o.$element.find("option").filter(function () {return e(this).val() === n.id}).length) {
                        var i = o.option(n);
                        i.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([i])
                    }
                    !function (e) {o.trigger("select", {data: e})}(n)
                });
                r.term !== n.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), n.term = r.term), t.call(this, n, i)
            }, t.prototype.tokenizer = function (t, n, i, o) {
                for (var r = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (e) {
                    return {
                        id: e.term,
                        text: e.term
                    }
                }; a < s.length;) {
                    var c = s[a];
                    if (-1 !== e.inArray(c, r)) {
                        var d = s.substr(0, a), u = l(e.extend({}, n, {term: d}));
                        null != u ? (o(u), s = s.substr(a + 1) || "", a = 0) : a++
                    } else a++
                }
                return {term: s}
            }, t
        }), l.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)}

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n)
            }, e
        }), l.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)}

            return e.prototype.query = function (e, t, n) {
                t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: t.term, params: t}
                }) : e.call(this, t, n)
            }, e
        }), l.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)}

            return e.prototype.query = function (e, t, n) {
                var i = this;
                this.current(function (o) {
                    var r = null != o ? o.length : 0;
                    0 < i.maximumSelectionLength && r >= i.maximumSelectionLength ? i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: i.maximumSelectionLength}
                    }) : e.call(i, t, n)
                })
            }, e
        }), l.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function n(e, t) {this.$element = e, this.options = t, n.__super__.constructor.call(this)}

            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$dropdown = t
            }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {this.$dropdown.remove()}, n
        }), l.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
            function n() {}

            return n.prototype.render = function (t) {
                var n = t.call(this),
                    i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
            }, n.prototype.bind = function (t, n, i) {
                var o = this;
                t.call(this, n, i), this.$search.on("keydown", function (e) {o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented()}), this.$search.on("input", function (t) {e(this).off("keyup")}), this.$search.on("keyup input", function (e) {o.handleSearch(e)}), n.on("open", function () {o.$search.attr("tabindex", 0), o.$search.focus(), window.setTimeout(function () {o.$search.focus()}, 0)}), n.on("close", function () {o.$search.attr("tabindex", -1), o.$search.val(""), o.$search.blur()}), n.on("focus", function () {n.isOpen() || o.$search.focus()}), n.on("results:all", function (e) {null != e.query.term && "" !== e.query.term || (o.showSearch(e) ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide"))})
            }, n.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {term: t})
                }
                this._keyUpPrevented = !1
            }, n.prototype.showSearch = function (e, t) {return !0}, n
        }), l.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, i) {this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)}

            return e.prototype.append = function (e, t) {t.results = this.removePlaceholder(t.results), e.call(this, t)}, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                    var o = t[i];
                    this.placeholder.id === o.id && n.splice(i, 1)
                }
                return n
            }, e
        }), l.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, i) {this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1}

            return t.prototype.append = function (e, t) {this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)}, t.prototype.bind = function (t, n, i) {
                var o = this;
                t.call(this, n, i), n.on("query", function (e) {o.lastParams = e, o.loading = !0}), n.on("query:append", function (e) {o.lastParams = e, o.loading = !0}), this.$results.on("scroll", function () {
                    var t = e.contains(document.documentElement, o.$loadingMore[0]);
                    if (!o.loading && t) {
                        var n = o.$results.offset().top + o.$results.outerHeight(!1);
                        o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1) <= n + 50 && o.loadMore()
                    }
                })
            }, t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, {page: 1}, this.lastParams);
                t.page++, this.trigger("query:append", t)
            }, t.prototype.showLoadingMore = function (e, t) {return t.pagination && t.pagination.more}, t.prototype.createLoadingMore = function () {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)), t
            }, t
        }), l.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
            function n(t, n, i) {this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)}

            return n.prototype.bind = function (e, t, n) {
                var i = this, o = !1;
                e.call(this, t, n), t.on("open", function () {i._showDropdown(), i._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function () {i._positionDropdown(), i._resizeDropdown()}), t.on("results:append", function () {i._positionDropdown(), i._resizeDropdown()}))}), t.on("close", function () {i._hideDropdown(), i._detachPositioningHandler(t)}), this.$dropdownContainer.on("mousedown", function (e) {e.stopPropagation()})
            }, n.prototype.destroy = function (e) {e.call(this), this.$dropdownContainer.remove()}, n.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, n.prototype.render = function (t) {
                var n = e("<span></span>"), i = t.call(this);
                return n.append(i), this.$dropdownContainer = n
            }, n.prototype._hideDropdown = function (e) {this.$dropdownContainer.detach()}, n.prototype._attachPositioningHandler = function (n, i) {
                var o = this, r = "scroll.select2." + i.id, s = "resize.select2." + i.id,
                    a = "orientationchange.select2." + i.id, l = this.$container.parents().filter(t.hasScroll);
                l.each(function () {
                    t.StoreData(this, "select2-scroll-position", {
                        x: e(this).scrollLeft(),
                        y: e(this).scrollTop()
                    })
                }), l.on(r, function (n) {
                    var i = t.GetData(this, "select2-scroll-position");
                    e(this).scrollTop(i.y)
                }), e(window).on(r + " " + s + " " + a, function (e) {o._positionDropdown(), o._resizeDropdown()})
            }, n.prototype._detachPositioningHandler = function (n, i) {
                var o = "scroll.select2." + i.id, r = "resize.select2." + i.id, s = "orientationchange.select2." + i.id;
                this.$container.parents().filter(t.hasScroll).off(o), e(window).off(o + " " + r + " " + s)
            }, n.prototype._positionDropdown = function () {
                var t = e(window), n = this.$dropdown.hasClass("select2-dropdown--above"),
                    i = this.$dropdown.hasClass("select2-dropdown--below"), o = null, r = this.$container.offset();
                r.bottom = r.top + this.$container.outerHeight(!1);
                var s = {height: this.$container.outerHeight(!1)};
                s.top = r.top, s.bottom = r.top + s.height;
                var a = this.$dropdown.outerHeight(!1), l = t.scrollTop(), c = t.scrollTop() + t.height(),
                    d = l < r.top - a, u = c > r.bottom + a, p = {left: r.left, top: s.bottom},
                    h = this.$dropdownParent;
                "static" === h.css("position") && (h = h.offsetParent());
                var f = h.offset();
                p.top -= f.top, p.left -= f.left, n || i || (o = "below"), u || !d || n ? !d && u && n && (o = "below") : o = "above", ("above" == o || n && "below" !== o) && (p.top = s.top - f.top - a), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(p)
            }, n.prototype._resizeDropdown = function () {
                var e = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
            }, n.prototype._showDropdown = function (e) {this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()}, n
        }), l.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(e, t, n, i) {this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)}

            return e.prototype.showSearch = function (e, t) {
                return !(function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var o = t[i];
                        o.children ? n += e(o.children) : n++
                    }
                    return n
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
            }, e
        }), l.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
            function t() {}

            return t.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("close", function (e) {i._handleSelectOnClose(e)})
            }, t.prototype._handleSelectOnClose = function (t, n) {
                if (n && null != n.originalSelect2Event) {
                    var i = n.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type) return
                }
                var o = this.getHighlightedResults();
                if (!(o.length < 1)) {
                    var r = e.GetData(o[0], "data");
                    null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {data: r})
                }
            }, t
        }), l.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {}

            return e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("select", function (e) {i._selectTriggered(e)}), t.on("unselect", function (e) {i._selectTriggered(e)})
            }, e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                n && (n.ctrlKey || n.metaKey) || this.trigger("close", {originalEvent: n, originalSelect2Event: t})
            }, e
        }), l.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {return "The results could not be loaded."},
                inputTooLong: function (e) {
                    var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"), n
                },
                inputTooShort: function (e) {return "Please enter " + (e.minimum - e.input.length) + " or more characters"},
                loadingMore: function () {return "Loading more resultsÐ²Ð‚Â¦"},
                maximumSelected: function (e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t
                },
                noResults: function () {return "No results found"},
                searching: function () {return "SearchingÐ²Ð‚Â¦"},
                removeAllItems: function () {return "Remove all items"}
            }
        }), l.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, o, r, s, a, l, c, d, u, p, h, f, m, v, g, y, b, w, x, C, S, T, k, _, $, A) {
            function E() {this.reset()}

            return E.prototype.apply = function (u) {
                if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter) {
                    if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = h : u.dataAdapter = p, 0 < u.minimumInputLength && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), 0 < u.maximumInputLength && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), 0 < u.maximumSelectionLength && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, v)), null != u.query) {
                        var A = t(u.amdBase + "compat/query");
                        u.dataAdapter = c.Decorate(u.dataAdapter, A)
                    }
                    if (null != u.initSelection) {
                        var E = t(u.amdBase + "compat/initSelection");
                        u.dataAdapter = c.Decorate(u.dataAdapter, E)
                    }
                }
                if (null == u.resultsAdapter && (u.resultsAdapter = n, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, S)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, _))), null == u.dropdownAdapter) {
                    if (u.multiple) u.dropdownAdapter = w; else {
                        var O = c.Decorate(w, x);
                        u.dropdownAdapter = O
                    }
                    if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, k)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, $)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                        var D = t(u.amdBase + "compat/dropdownCss");
                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, D)
                    }
                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)
                }
                if (null == u.selectionAdapter) {
                    if (u.multiple ? u.selectionAdapter = o : u.selectionAdapter = i, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                        var L = t(u.amdBase + "compat/containerCss");
                        u.selectionAdapter = c.Decorate(u.selectionAdapter, L)
                    }
                    u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                }
                if ("string" == typeof u.language) if (0 < u.language.indexOf("-")) {
                    var M = u.language.split("-")[0];
                    u.language = [u.language, M]
                } else u.language = [u.language];
                if (e.isArray(u.language)) {
                    var I = new d;
                    u.language.push("en");
                    for (var j = u.language, P = 0; P < j.length; P++) {
                        var z = j[P], q = {};
                        try {
                            q = d.loadPath(z)
                        } catch (A) {
                            try {
                                z = this.defaults.amdLanguageBase + z, q = d.loadPath(z)
                            } catch (A) {
                                u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + z + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        I.extend(q)
                    }
                    u.translations = I
                } else {
                    var H = d.loadPath(this.defaults.amdLanguageBase + "en"), N = new d(u.language);
                    N.extend(H), u.translations = N
                }
                return u
            }, E.prototype.reset = function () {
                function t(e) {return e.replace(/[^\u0000-\u007E]/g, function (e) {return u[e] || e})}

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: A,
                    matcher: function n(i, o) {
                        if ("" === e.trim(i.term)) return o;
                        if (o.children && 0 < o.children.length) {
                            for (var r = e.extend(!0, {}, o), s = o.children.length - 1; 0 <= s; s--) null == n(i, o.children[s]) && r.children.splice(s, 1);
                            return 0 < r.children.length ? r : n(i, r)
                        }
                        var a = t(o.text).toUpperCase(), l = t(i.term).toUpperCase();
                        return -1 < a.indexOf(l) ? o : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function (e) {return e},
                    templateResult: function (e) {return e.text},
                    templateSelection: function (e) {return e.text},
                    theme: "default",
                    width: "resolve"
                }
            }, E.prototype.set = function (t, n) {
                var i = {};
                i[e.camelCase(t)] = n;
                var o = c._convertData(i);
                e.extend(!0, this.defaults, o)
            }, new E
        }), l.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
            function o(t, o) {
                if (this.options = t, null != o && this.fromElement(o), this.options = n.apply(this.options), o && o.is("input")) {
                    var r = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r)
                }
            }

            return o.prototype.fromElement = function (e) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                for (var o = {}, r = 0; r < e[0].attributes.length; r++) {
                    var s = e[0].attributes[r].name, a = "data-";
                    if (s.substr(0, a.length) == a) {
                        var l = s.substring(a.length), c = i.GetData(e[0], l);
                        o[l.replace(/-([a-z])/g, function (e, t) {return t.toUpperCase()})] = c
                    }
                }
                t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (o = t.extend(!0, {}, e[0].dataset, o));
                var d = t.extend(!0, {}, i.GetData(e[0]), o);
                for (var u in d = i._convertData(d)) -1 < t.inArray(u, n) || (t.isPlainObject(this.options[u]) ? t.extend(this.options[u], d[u]) : this.options[u] = d[u]);
                return this
            }, o.prototype.get = function (e) {return this.options[e]}, o.prototype.set = function (e, t) {this.options[e] = t}, o
        }), l.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
            var o = function (e, i) {
                null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), o.__super__.constructor.call(this);
                var r = e.attr("tabindex") || 0;
                n.StoreData(e[0], "old-tabindex", r), e.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(e, this.options);
                var a = this.render();
                this._placeContainer(a);
                var l = this.options.get("selectionAdapter");
                this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                var c = this.options.get("dropdownAdapter");
                this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                var d = this.options.get("resultsAdapter");
                this.results = new d(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {u.trigger("selection:update", {data: e})}), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
            };
            return n.Extend(o, n.Observable), o.prototype._generateId = function (e) {return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")}, o.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, o.prototype._resolveWidth = function (e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var o = e.outerWidth(!1);
                    return o <= 0 ? "auto" : o + "px"
                }
                if ("style" != t) return t;
                var r = e.attr("style");
                if ("string" != typeof r) return null;
                for (var s = r.split(";"), a = 0, l = s.length; a < l; a += 1) {
                    var c = s[a].replace(/\s/g, "").match(n);
                    if (null !== c && 1 <= c.length) return c[1]
                }
                return null
            }, o.prototype._bindAdapters = function () {this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)}, o.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {t.dataAdapter.current(function (e) {t.trigger("selection:update", {data: e})})}), this.$element.on("focus.select2", function (e) {t.trigger("focus", e)}), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != i ? (this._observer = new i(function (n) {e.each(n, t._syncA), e.each(n, t._syncS)}), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
            }, o.prototype._registerDataEvents = function () {
                var e = this;
                this.dataAdapter.on("*", function (t, n) {e.trigger(t, n)})
            }, o.prototype._registerSelectionEvents = function () {
                var t = this, n = ["toggle", "focus"];
                this.selection.on("toggle", function () {t.toggleDropdown()}), this.selection.on("focus", function (e) {t.focus(e)}), this.selection.on("*", function (i, o) {-1 === e.inArray(i, n) && t.trigger(i, o)})
            }, o.prototype._registerDropdownEvents = function () {
                var e = this;
                this.dropdown.on("*", function (t, n) {e.trigger(t, n)})
            }, o.prototype._registerResultsEvents = function () {
                var e = this;
                this.results.on("*", function (t, n) {e.trigger(t, n)})
            }, o.prototype._registerEvents = function () {
                var e = this;
                this.on("open", function () {e.$container.addClass("select2-container--open")}), this.on("close", function () {e.$container.removeClass("select2-container--open")}), this.on("enable", function () {e.$container.removeClass("select2-container--disabled")}), this.on("disable", function () {e.$container.addClass("select2-container--disabled")}), this.on("blur", function () {e.$container.removeClass("select2-container--focus")}), this.on("query", function (t) {
                    e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (n) {
                        e.trigger("results:all", {
                            data: n,
                            query: t
                        })
                    })
                }), this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (n) {
                        e.trigger("results:append", {
                            data: n,
                            query: t
                        })
                    })
                }), this.on("keypress", function (t) {
                    var n = t.which;
                    e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                })
            }, o.prototype._syncAttributes = function () {this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})}, o.prototype._syncSubtree = function (e, t) {
                var n = !1, i = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (t) if (t.addedNodes && 0 < t.addedNodes.length) for (var o = 0; o < t.addedNodes.length; o++) t.addedNodes[o].selected && (n = !0); else t.removedNodes && 0 < t.removedNodes.length && (n = !0); else n = !0;
                    n && this.dataAdapter.current(function (e) {i.trigger("selection:update", {data: e})})
                }
            }, o.prototype.trigger = function (e, t) {
                var n = o.__super__.trigger, i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === t && (t = {}), e in i) {
                    var r = i[e], s = {prevented: !1, name: e, args: t};
                    if (n.call(this, r, s), s.prevented) return void (t.prevented = !0)
                }
                n.call(this, e, t)
            }, o.prototype.toggleDropdown = function () {this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())}, o.prototype.open = function () {this.isOpen() || this.trigger("query", {})}, o.prototype.close = function () {this.isOpen() && this.trigger("close", {})}, o.prototype.isOpen = function () {return this.$container.hasClass("select2-container--open")}, o.prototype.hasFocus = function () {return this.$container.hasClass("select2-container--focus")}, o.prototype.focus = function (e) {this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))}, o.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }, o.prototype.data = function () {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function (t) {e = t}), e
            }, o.prototype.val = function (t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, function (e) {return e.toString()})), this.$element.val(n).trigger("change")
            }, o.prototype.destroy = function () {this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null}, o.prototype.render = function () {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
            }, o
        }), l.define("select2/compat/utils", ["jquery"], function (e) {
            return {
                syncCssClasses: function (t, n, i) {
                    var o, r, s = [];
                    (o = e.trim(t.attr("class"))) && e((o = "" + o).split(/\s+/)).each(function () {0 === this.indexOf("select2-") && s.push(this)}), (o = e.trim(n.attr("class"))) && e((o = "" + o).split(/\s+/)).each(function () {0 !== this.indexOf("select2-") && null != (r = i(this)) && s.push(r)}), t.attr("class", s.join(" "))
                }
            }
        }), l.define("select2/compat/containerCss", ["jquery", "./utils"], function (e, t) {
            function n(e) {return null}

            function i() {}

            return i.prototype.render = function (i) {
                var o = i.call(this), r = this.options.get("containerCssClass") || "";
                e.isFunction(r) && (r = r(this.$element));
                var s = this.options.get("adaptContainerCssClass");
                if (s = s || n, -1 !== r.indexOf(":all:")) {
                    r = r.replace(":all:", "");
                    var a = s;
                    s = function (e) {
                        var t = a(e);
                        return null != t ? t + " " + e : e
                    }
                }
                var l = this.options.get("containerCss") || {};
                return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(o, this.$element, s), o.css(l), o.addClass(r), o
            }, i
        }), l.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (e, t) {
            function n(e) {return null}

            function i() {}

            return i.prototype.render = function (i) {
                var o = i.call(this), r = this.options.get("dropdownCssClass") || "";
                e.isFunction(r) && (r = r(this.$element));
                var s = this.options.get("adaptDropdownCssClass");
                if (s = s || n, -1 !== r.indexOf(":all:")) {
                    r = r.replace(":all:", "");
                    var a = s;
                    s = function (e) {
                        var t = a(e);
                        return null != t ? t + " " + e : e
                    }
                }
                var l = this.options.get("dropdownCss") || {};
                return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(o, this.$element, s), o.css(l), o.addClass(r), o
            }, i
        }), l.define("select2/compat/initSelection", ["jquery"], function (e) {
            function t(e, t, n) {n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)}

            return t.prototype.current = function (t, n) {
                var i = this;
                this._isInitialized ? t.call(this, n) : this.initSelection.call(null, this.$element, function (t) {i._isInitialized = !0, e.isArray(t) || (t = [t]), n(t)})
            }, t
        }), l.define("select2/compat/inputData", ["jquery", "../utils"], function (e, t) {
            function n(e, t, n) {this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)}

            return n.prototype.current = function (t, n) {
                function i(t, n) {
                    var o = [];
                    return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0, o.push(t)) : t.selected = !1, t.children && o.push.apply(o, i(t.children, n)), o
                }

                for (var o = [], r = 0; r < this._currentData.length; r++) {
                    var s = this._currentData[r];
                    o.push.apply(o, i(s, this.$element.val().split(this._valueSeparator)))
                }
                n(o)
            }, n.prototype.select = function (t, n) {
                if (this.options.get("multiple")) {
                    var i = this.$element.val();
                    i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("change")
                } else this.current(function (t) {e.map(t, function (e) {e.selected = !1})}), this.$element.val(n.id), this.$element.trigger("change")
            }, n.prototype.unselect = function (e, t) {
                var n = this;
                t.selected = !1, this.current(function (e) {
                    for (var i = [], o = 0; o < e.length; o++) {
                        var r = e[o];
                        t.id != r.id && i.push(r.id)
                    }
                    n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("change")
                })
            }, n.prototype.query = function (e, t, n) {
                for (var i = [], o = 0; o < this._currentData.length; o++) {
                    var r = this._currentData[o], s = this.matches(t, r);
                    null !== s && i.push(s)
                }
                n({results: i})
            }, n.prototype.addOptions = function (n, i) {
                var o = e.map(i, function (e) {return t.GetData(e[0], "data")});
                this._currentData.push.apply(this._currentData, o)
            }, n
        }), l.define("select2/compat/matcher", ["jquery"], function (e) {
            return function (t) {
                return function (n, i) {
                    var o = e.extend(!0, {}, i);
                    if (null == n.term || "" === e.trim(n.term)) return o;
                    if (i.children) {
                        for (var r = i.children.length - 1; 0 <= r; r--) {
                            var s = i.children[r];
                            t(n.term, s.text, s) || o.children.splice(r, 1)
                        }
                        if (0 < o.children.length) return o
                    }
                    return t(n.term, i.text, i) ? o : null
                }
            }
        }), l.define("select2/compat/query", [], function () {
            function e(e, t, n) {n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)}

            return e.prototype.query = function (e, t, n) {t.callback = n, this.options.get("query").call(null, t)}, e
        }), l.define("select2/dropdown/attachContainer", [], function () {
            function e(e, t, n) {e.call(this, t, n)}

            return e.prototype.position = function (e, t, n) {n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")}, e
        }), l.define("select2/dropdown/stopPropagation", [], function () {
            function e() {}

            return e.prototype.bind = function (e, t, n) {e.call(this, t, n), this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {e.stopPropagation()})}, e
        }), l.define("select2/selection/stopPropagation", [], function () {
            function e() {}

            return e.prototype.bind = function (e, t, n) {e.call(this, t, n), this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e) {e.stopPropagation()})}, e
        }), T = function (e) {
            function t(t) {
                var s, a = t || window.event, c = l.call(arguments, 1), u = 0, p = 0, h = 0, f = 0, m = 0;
                if ((t = e.event.fix(a)).type = "mousewheel", "detail" in a && (h = -1 * a.detail), "wheelDelta" in a && (h = a.wheelDelta), "wheelDeltaY" in a && (h = a.wheelDeltaY), "wheelDeltaX" in a && (p = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (p = -1 * h, h = 0), u = 0 === h ? p : h, "deltaY" in a && (u = h = -1 * a.deltaY), "deltaX" in a && (p = a.deltaX, 0 === h && (u = -1 * p)), 0 !== h || 0 !== p) {
                    if (1 === a.deltaMode) {
                        var v = e.data(this, "mousewheel-line-height");
                        u *= v, h *= v, p *= v
                    } else if (2 === a.deltaMode) {
                        var g = e.data(this, "mousewheel-page-height");
                        u *= g, h *= g, p *= g
                    }
                    if (s = Math.max(Math.abs(h), Math.abs(p)), (!r || s < r) && i(a, r = s) && (r /= 40), i(a, s) && (u /= 40, p /= 40, h /= 40), u = Math[1 <= u ? "floor" : "ceil"](u / r), p = Math[1 <= p ? "floor" : "ceil"](p / r), h = Math[1 <= h ? "floor" : "ceil"](h / r), d.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        f = t.clientX - y.left, m = t.clientY - y.top
                    }
                    return t.deltaX = p, t.deltaY = h, t.deltaFactor = r, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, c.unshift(t, u, p, h), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, c)
                }
            }

            function n() {r = null}

            function i(e, t) {return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0}

            var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                a = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                l = Array.prototype.slice;
            if (e.event.fixHooks) for (var c = s.length; c;) e.event.fixHooks[s[--c]] = e.event.mouseHooks;
            var d = e.event.special.mousewheel = {
                version: "3.1.12",
                setup: function () {
                    if (this.addEventListener) for (var n = a.length; n;) this.addEventListener(a[--n], t, !1); else this.onmousewheel = t;
                    e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
                },
                teardown: function () {
                    if (this.removeEventListener) for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1); else this.onmousewheel = null;
                    e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function (t) {
                    var n = e(t), i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                    return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                },
                getPageHeight: function (t) {return e(t).height()},
                settings: {adjustOldDeltas: !0, normalizeOffset: !0}
            };
            e.fn.extend({
                mousewheel: function (e) {return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")},
                unmousewheel: function (e) {return this.unbind("mousewheel", e)}
            })
        }, "function" == typeof l.define && l.define.amd ? l.define("jquery-mousewheel", ["jquery"], T) : "object" == typeof exports ? module.exports = T : T(e), l.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, n, i, o) {
            if (null == e.fn.select2) {
                var r = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                    if ("object" == typeof (t = t || {})) return this.each(function () {
                        var i = e.extend(!0, {}, t);
                        new n(e(this), i)
                    }), this;
                    if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                    var i, s = Array.prototype.slice.call(arguments, 1);
                    return this.each(function () {
                        var e = o.GetData(this, "select2");
                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, s)
                    }), -1 < e.inArray(t, r) ? this : i
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
        }), {define: l.define, require: l.require}
    }(), n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}), function (e) {
    "use strict";
    var t = function (t, n, i) {return this.el = t, this.$el = e(t), this.options = n, this.uuid = this.$el.attr("id") ? this.$el.attr("id") : i, this.state = {}, this.init(), this};
    t.prototype = {
        init: function () {
            var t = this;
            t._load(), t.$el.find("ul").each(function (n) {
                var i = e(this);
                i.attr("data-index", n), t.options.save && t.state.hasOwnProperty(n) ? (i.parent().addClass(t.options.openClass), i.show()) : i.parent().hasClass(t.options.openClass) ? (i.show(), t.state[n] = 1) : i.hide()
            });
            var n = e("<span></span>").prepend(t.options.caretHtml), i = t.$el.find("li > a");
            t._trigger(n, !1), t._trigger(i, !0), t.$el.find("li:has(ul) > a").prepend(n)
        },
        _trigger: function (t, n) {
            var i = this;
            t.on("click", function (t) {
                t.stopPropagation();
                var o = n ? e(this).next() : e(this).parent().next(), r = !1;
                if (n) {
                    var s = e(this).attr("href");
                    r = void 0 === s || "" === s || "#" === s
                }
                if (o = o.length > 0 && o, i.options.onClickBefore.call(this, t, o), !n || o && r) t.preventDefault(), i._toggle(o, o.is(":hidden")), i._save(); else if (i.options.accordion) {
                    var a = i.state = i._parents(e(this));
                    i.$el.find("ul").filter(":visible").each(function () {
                        var t = e(this), n = t.attr("data-index");
                        a.hasOwnProperty(n) || i._toggle(t, !1)
                    }), i._save()
                }
                i.options.onClickAfter.call(this, t, o)
            })
        },
        _toggle: function (t, n) {
            var i = this, o = t.attr("data-index"), r = t.parent();
            if (i.options.onToggleBefore.call(this, t, n), n) {
                if (r.addClass(i.options.openClass), t.slideDown(i.options.slide), i.state[o] = 1, i.options.accordion) {
                    var s = i.state = i._parents(t);
                    s[o] = i.state[o] = 1, i.$el.find("ul").filter(":visible").each(function () {
                        var t = e(this), n = t.attr("data-index");
                        s.hasOwnProperty(n) || i._toggle(t, !1)
                    })
                }
            } else r.removeClass(i.options.openClass), t.slideUp(i.options.slide), i.state[o] = 0;
            i.options.onToggleAfter.call(this, t, n)
        },
        _parents: function (t, n) {
            var i = {};
            return t.parent().parents("ul").each(function () {
                var t = e(this), o = t.attr("data-index");
                return !!o && void (i[o] = n ? t : 1)
            }), i
        },
        _save: function () {
            if (this.options.save) {
                var t = {};
                for (var i in this.state) 1 === this.state[i] && (t[i] = 1);
                n[this.uuid] = this.state = t, e.cookie(this.options.cookie.name, JSON.stringify(n), this.options.cookie)
            }
        },
        _load: function () {
            if (this.options.save) {
                if (null === n) {
                    var t = e.cookie(this.options.cookie.name);
                    n = t ? JSON.parse(t) : {}
                }
                this.state = n.hasOwnProperty(this.uuid) ? n[this.uuid] : {}
            }
        },
        toggle: function (t) {
            var n = this, i = arguments.length;
            if (1 >= i) n.$el.find("ul").each(function () {
                var i = e(this);
                n._toggle(i, t)
            }); else {
                var o, r = {}, s = Array.prototype.slice.call(arguments, 1);
                i--;
                for (var a = 0; i > a; a++) {
                    o = s[a];
                    var l = n.$el.find('ul[data-index="' + o + '"]').first();
                    if (l && (r[o] = l, t)) {
                        var c = n._parents(l, !0);
                        for (var d in c) r.hasOwnProperty(d) || (r[d] = c[d])
                    }
                }
                for (o in r) n._toggle(r[o], t)
            }
            n._save()
        },
        destroy: function () {e.removeData(this.$el), this.$el.find("li:has(ul) > a").unbind("click"), this.$el.find("li:has(ul) > a > span").unbind("click")}
    }, e.fn.navgoco = function (n) {
        if ("string" == typeof n && "_" !== n.charAt(0) && "init" !== n) var i = !0,
            o = Array.prototype.slice.call(arguments, 1); else n = e.extend({}, e.fn.navgoco.defaults, n || {}), e.cookie || (n.save = !1);
        return this.each(function (r) {
            var s = e(this), a = s.data("navgoco");
            a || (a = new t(this, i ? e.fn.navgoco.defaults : n, r), s.data("navgoco", a)), i && a[n].apply(a, o)
        })
    };
    var n = null;
    e.fn.navgoco.defaults = {
        caretHtml: "",
        accordion: !1,
        openClass: "open",
        save: !0,
        cookie: {name: "navgoco", expires: !1, path: "/"},
        slide: {duration: 400, easing: "swing"},
        onClickBefore: e.noop,
        onClickAfter: e.noop,
        onToggleBefore: e.noop,
        onToggleAfter: e.noop
    }
}(jQuery);
//# sourceMappingURL=plugins.min.js.map
