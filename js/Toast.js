// iziToast
// ---------------------------------------------------------------------------
/*
 * iziToast | v1.4.0
 * http://izitoast.marcelodolce.com
 * by Marcelo Dolce.
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define([], e(t)) : "object" == typeof exports ? module.exports = e(t) : t.iziToast = e(t)
}("undefined" != typeof global ? global : window || this.window || this.global, function(t) {
    "use strict";
    var e = {},
        o = "iziToast",
        n = (document.querySelector("body"), !!/Mobi/.test(navigator.userAgent)),
        i = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        s = "undefined" != typeof InstallTrigger,
        a = "ontouchstart" in document.documentElement,
        r = ["bottomRight", "bottomLeft", "bottomCenter", "topRight", "topLeft", "topCenter", "center"],
        l = {
            info: {
                color: "blue",
                icon: "ico-info"
            },
            success: {
                color: "green",
                icon: "ico-success"
            },
            warning: {
                color: "orange",
                icon: "ico-warning"
            },
            error: {
                color: "red",
                icon: "ico-error"
            },
            question: {
                color: "yellow",
                icon: "ico-question"
            }
        },
        d = 568,
        c = {};
    e.children = {};
    var u = {
        id: null,
        "class": "",
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
        onOpening: function() {},
        onOpened: function() {},
        onClosing: function() {},
        onClosed: function() {}
    };
    if ("remove" in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        }), "function" != typeof window.CustomEvent) {
        var p = function(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), o
        };
        p.prototype = window.Event.prototype, window.CustomEvent = p
    }
    var m = function(t, e, o) {
            if ("[object Object]" === Object.prototype.toString.call(t))
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.call(o, t[n], n, t);
            else if (t)
                for (var i = 0, s = t.length; s > i; i++) e.call(o, t[i], i, t)
        },
        g = function(t, e) {
            var o = {};
            return m(t, function(e, n) {
                o[n] = t[n]
            }), m(e, function(t, n) {
                o[n] = e[n]
            }), o
        },
        f = function(t) {
            var e = document.createDocumentFragment(),
                o = document.createElement("div");
            for (o.innerHTML = t; o.firstChild;) e.appendChild(o.firstChild);
            return e
        },
        v = function(t) {
            var e = btoa(encodeURIComponent(t));
            return e.replace(/=/g, "")
        },
        y = function(t) {
            return "#" == t.substring(0, 1) || "rgb" == t.substring(0, 3) || "hsl" == t.substring(0, 3)
        },
        h = function(t) {
            try {
                return btoa(atob(t)) == t
            } catch (e) {
                return !1
            }
        },
        b = function() {
            return {
                move: function(t, e, n, a) {
                    var r, l = .3,
                        d = 180;
                    0 !== a && (t.classList.add(o + "-dragged"), t.style.transform = "translateX(" + a + "px)", a > 0 ? (r = (d - a) / d, l > r && e.hide(g(n, {
                        transitionOut: "fadeOutRight",
                        transitionOutMobile: "fadeOutRight"
                    }), t, "drag")) : (r = (d + a) / d, l > r && e.hide(g(n, {
                        transitionOut: "fadeOutLeft",
                        transitionOutMobile: "fadeOutLeft"
                    }), t, "drag")), t.style.opacity = r, l > r && ((i || s) && (t.style.left = a + "px"), t.parentNode.style.opacity = l, this.stopMoving(t, null)))
                },
                startMoving: function(t, e, o, n) {
                    n = n || window.event;
                    var i = a ? n.touches[0].clientX : n.clientX,
                        s = t.style.transform.replace("px)", "");
                    s = s.replace("translateX(", "");
                    var r = i - s;
                    t.classList.remove(o.transitionIn), t.classList.remove(o.transitionInMobile), t.style.transition = "", a ? document.ontouchmove = function(n) {
                        n.preventDefault(), n = n || window.event;
                        var i = n.touches[0].clientX,
                            s = i - r;
                        b.move(t, e, o, s)
                    } : document.onmousemove = function(n) {
                        n.preventDefault(), n = n || window.event;
                        var i = n.clientX,
                            s = i - r;
                        b.move(t, e, o, s)
                    }
                },
                stopMoving: function(t, e) {
                    a ? document.ontouchmove = function() {} : document.onmousemove = function() {}, t.style.opacity = "", t.style.transform = "", t.classList.contains(o + "-dragged") && (t.classList.remove(o + "-dragged"), t.style.transition = "transform 0.4s ease, opacity 0.4s ease", setTimeout(function() {
                        t.style.transition = ""
                    }, 400))
                }
            }
        }();
    return e.setSetting = function(t, o, n) {
        e.children[t][o] = n
    }, e.getSetting = function(t, o) {
        return e.children[t][o]
    }, e.destroy = function() {
        m(document.querySelectorAll("." + o + "-overlay"), function(t, e) {
            t.remove()
        }), m(document.querySelectorAll("." + o + "-wrapper"), function(t, e) {
            t.remove()
        }), m(document.querySelectorAll("." + o), function(t, e) {
            t.remove()
        }), this.children = {}, document.removeEventListener(o + "-opened", {}, !1), document.removeEventListener(o + "-opening", {}, !1), document.removeEventListener(o + "-closing", {}, !1), document.removeEventListener(o + "-closed", {}, !1), document.removeEventListener("keyup", {}, !1), c = {}
    }, e.settings = function(t) {
        e.destroy(), c = t, u = g(u, t || {})
    }, m(l, function(t, o) {
        e[o] = function(e) {
            var o = g(c, e || {});
            o = g(t, o || {}), this.show(o)
        }
    }), e.progress = function(t, e, n) {
        var i = this,
            s = e.getAttribute("data-iziToast-ref"),
            a = g(this.children[s], t || {}),
            r = e.querySelector("." + o + "-progressbar div");
        return {
            start: function() {
                "undefined" == typeof a.time.REMAINING && (e.classList.remove(o + "-reseted"), null !== r && (r.style.transition = "width " + a.timeout + "ms " + a.progressBarEasing, r.style.width = "0%"), a.time.START = (new Date).getTime(), a.time.END = a.time.START + a.timeout, a.time.TIMER = setTimeout(function() {
                    clearTimeout(a.time.TIMER), e.classList.contains(o + "-closing") || (i.hide(a, e, "timeout"), "function" == typeof n && n.apply(i))
                }, a.timeout), i.setSetting(s, "time", a.time))
            },
            pause: function() {
                if ("undefined" != typeof a.time.START && !e.classList.contains(o + "-paused") && !e.classList.contains(o + "-reseted")) {
                    if (e.classList.add(o + "-paused"), a.time.REMAINING = a.time.END - (new Date).getTime(), clearTimeout(a.time.TIMER), i.setSetting(s, "time", a.time), null !== r) {
                        var t = window.getComputedStyle(r),
                            l = t.getPropertyValue("width");
                        r.style.transition = "none", r.style.width = l
                    }
                    "function" == typeof n && setTimeout(function() {
                        n.apply(i)
                    }, 10)
                }
            },
            resume: function() {
                "undefined" != typeof a.time.REMAINING ? (e.classList.remove(o + "-paused"), null !== r && (r.style.transition = "width " + a.time.REMAINING + "ms " + a.progressBarEasing, r.style.width = "0%"), a.time.END = (new Date).getTime() + a.time.REMAINING, a.time.TIMER = setTimeout(function() {
                    clearTimeout(a.time.TIMER), e.classList.contains(o + "-closing") || (i.hide(a, e, "timeout"), "function" == typeof n && n.apply(i))
                }, a.time.REMAINING), i.setSetting(s, "time", a.time)) : this.start()
            },
            reset: function() {
                clearTimeout(a.time.TIMER), delete a.time.REMAINING, i.setSetting(s, "time", a.time), e.classList.add(o + "-reseted"), e.classList.remove(o + "-paused"), null !== r && (r.style.transition = "none", r.style.width = "100%"), "function" == typeof n && setTimeout(function() {
                    n.apply(i)
                }, 10)
            }
        }
    }, e.hide = function(t, e, i) {
        "object" != typeof e && (e = document.querySelector(e));
        var s = this,
            a = g(this.children[e.getAttribute("data-iziToast-ref")], t || {});
        a.closedBy = i || null, delete a.time.REMAINING, e.classList.add(o + "-closing"),
            function() {
                var t = document.querySelector("." + o + "-overlay");
                if (null !== t) {
                    var e = t.getAttribute("data-iziToast-ref");
                    e = e.split(",");
                    var n = e.indexOf(String(a.ref)); - 1 !== n && e.splice(n, 1), t.setAttribute("data-iziToast-ref", e.join()), 0 === e.length && (t.classList.remove("fadeIn"), t.classList.add("fadeOut"), setTimeout(function() {
                        t.remove()
                    }, 700))
                }
            }(), (a.transitionIn || a.transitionInMobile) && (e.classList.remove(a.transitionIn), e.classList.remove(a.transitionInMobile)), n || window.innerWidth <= d ? a.transitionOutMobile && e.classList.add(a.transitionOutMobile) : a.transitionOut && e.classList.add(a.transitionOut);
        var r = e.parentNode.offsetHeight;
        e.parentNode.style.height = r + "px", e.style.pointerEvents = "none", (!n || window.innerWidth > d) && (e.parentNode.style.transitionDelay = "0.2s");
        try {
            var l = new CustomEvent(o + "-closing", {
                detail: a,
                bubbles: !0,
                cancelable: !0
            });
            document.dispatchEvent(l)
        } catch (c) {
            console.warn(c)
        }
        setTimeout(function() {
            e.parentNode.style.height = "0px", e.parentNode.style.overflow = "", setTimeout(function() {
                delete s.children[a.ref], e.parentNode.remove();
                try {
                    var t = new CustomEvent(o + "-closed", {
                        detail: a,
                        bubbles: !0,
                        cancelable: !0
                    });
                    document.dispatchEvent(t)
                } catch (n) {
                    console.warn(n)
                }
                "undefined" != typeof a.onClosed && a.onClosed.apply(null, [a, e, i])
            }, 1e3)
        }, 200), "undefined" != typeof a.onClosing && a.onClosing.apply(null, [a, e, i])
    }, e.show = function(t) {
        var i = this,
            s = g(c, t || {});
        if (s = g(u, s), s.time = {}, null === s.id && (s.id = v(s.title + s.message + s.color)), 1 === s.displayMode || "once" == s.displayMode) try {
            if (document.querySelectorAll("." + o + "#" + s.id).length > 0) return !1
        } catch (l) {
            console.warn("[" + o + "] Could not find an element with this selector: #" + s.id + ". Try to set an valid id.")
        }
        if (2 === s.displayMode || "replace" == s.displayMode) try {
            m(document.querySelectorAll("." + o + "#" + s.id), function(t, e) {
                i.hide(s, t, "replaced")
            })
        } catch (l) {
            console.warn("[" + o + "] Could not find an element with this selector: #" + s.id + ". Try to set an valid id.")
        }
        s.ref = (new Date).getTime() + Math.floor(1e7 * Math.random() + 1), e.children[s.ref] = s;
        var p = {
            body: document.querySelector("body"),
            overlay: document.createElement("div"),
            toast: document.createElement("div"),
            toastBody: document.createElement("div"),
            toastTexts: document.createElement("div"),
            toastCapsule: document.createElement("div"),
            icon: document.createElement("i"),
            cover: document.createElement("div"),
            buttons: document.createElement("div"),
            inputs: document.createElement("div"),
            wrapper: null
        };
        p.toast.setAttribute("data-iziToast-ref", s.ref), p.toast.appendChild(p.toastBody), p.toastCapsule.appendChild(p.toast),
            function() {
                if (p.toast.classList.add(o), p.toast.classList.add(o + "-opening"), p.toastCapsule.classList.add(o + "-capsule"), p.toastBody.classList.add(o + "-body"), p.toastTexts.classList.add(o + "-texts"), n || window.innerWidth <= d ? s.transitionInMobile && p.toast.classList.add(s.transitionInMobile) : s.transitionIn && p.toast.classList.add(s.transitionIn), s["class"]) {
                    var t = s["class"].split(" ");
                    m(t, function(t, e) {
                        p.toast.classList.add(t)
                    })
                }
                s.id && (p.toast.id = s.id), s.rtl && (p.toast.classList.add(o + "-rtl"), p.toast.setAttribute("dir", "rtl")), s.layout > 1 && p.toast.classList.add(o + "-layout" + s.layout), s.balloon && p.toast.classList.add(o + "-balloon"), s.maxWidth && (isNaN(s.maxWidth) ? p.toast.style.maxWidth = s.maxWidth : p.toast.style.maxWidth = s.maxWidth + "px"), "" === s.theme && "light" === s.theme || p.toast.classList.add(o + "-theme-" + s.theme), s.color && (y(s.color) ? p.toast.style.background = s.color : p.toast.classList.add(o + "-color-" + s.color)), s.backgroundColor && (p.toast.style.background = s.backgroundColor, s.balloon && (p.toast.style.borderColor = s.backgroundColor))
            }(),
            function() {
                s.image && (p.cover.classList.add(o + "-cover"), p.cover.style.width = s.imageWidth + "px", h(s.image.replace(/ /g, "")) ? p.cover.style.backgroundImage = "url(data:image/png;base64," + s.image.replace(/ /g, "") + ")" : p.cover.style.backgroundImage = "url(" + s.image + ")", s.rtl ? p.toastBody.style.marginRight = s.imageWidth + 10 + "px" : p.toastBody.style.marginLeft = s.imageWidth + 10 + "px", p.toast.appendChild(p.cover))
            }(),
            function() {
                s.close ? (p.buttonClose = document.createElement("button"), p.buttonClose.type = "button", p.buttonClose.classList.add(o + "-close"), p.buttonClose.addEventListener("click", function(t) {
                    t.target;
                    i.hide(s, p.toast, "button")
                }), p.toast.appendChild(p.buttonClose)) : s.rtl ? p.toast.style.paddingLeft = "18px" : p.toast.style.paddingRight = "18px"
            }(),
            function() {
                s.progressBar && (p.progressBar = document.createElement("div"), p.progressBarDiv = document.createElement("div"), p.progressBar.classList.add(o + "-progressbar"), p.progressBarDiv.style.background = s.progressBarColor, p.progressBar.appendChild(p.progressBarDiv), p.toast.appendChild(p.progressBar)), s.timeout && (s.pauseOnHover && !s.resetOnHover && (p.toast.addEventListener("mouseenter", function(t) {
                    i.progress(s, p.toast).pause()
                }), p.toast.addEventListener("mouseleave", function(t) {
                    i.progress(s, p.toast).resume()
                })), s.resetOnHover && (p.toast.addEventListener("mouseenter", function(t) {
                    i.progress(s, p.toast).reset()
                }), p.toast.addEventListener("mouseleave", function(t) {
                    i.progress(s, p.toast).start()
                })))
            }(),
            function() {
                s.icon && (p.icon.setAttribute("class", o + "-icon " + s.icon), s.iconText && p.icon.appendChild(document.createTextNode(s.iconText)), s.rtl ? p.toastBody.style.paddingRight = "33px" : p.toastBody.style.paddingLeft = "33px", s.iconColor && (p.icon.style.color = s.iconColor), p.toastBody.appendChild(p.icon))
            }(),
            function() {
                s.title.length > 0 && (p.strong = document.createElement("strong"), p.strong.classList.add(o + "-title"), p.strong.appendChild(f(s.title)), p.toastTexts.appendChild(p.strong), s.titleColor && (p.strong.style.color = s.titleColor), s.titleSize && (isNaN(s.titleSize) ? p.strong.style.fontSize = s.titleSize : p.strong.style.fontSize = s.titleSize + "px"), s.titleLineHeight && (isNaN(s.titleSize) ? p.strong.style.lineHeight = s.titleLineHeight : p.strong.style.lineHeight = s.titleLineHeight + "px")), s.message.length > 0 && (p.p = document.createElement("p"), p.p.classList.add(o + "-message"), p.p.appendChild(f(s.message)), p.toastTexts.appendChild(p.p), s.messageColor && (p.p.style.color = s.messageColor), s.messageSize && (isNaN(s.titleSize) ? p.p.style.fontSize = s.messageSize : p.p.style.fontSize = s.messageSize + "px"), s.messageLineHeight && (isNaN(s.titleSize) ? p.p.style.lineHeight = s.messageLineHeight : p.p.style.lineHeight = s.messageLineHeight + "px")), s.title.length > 0 && s.message.length > 0 && (s.rtl ? p.strong.style.marginLeft = "10px" : 2 === s.layout || s.rtl || (p.strong.style.marginRight = "10px"))
            }(), p.toastBody.appendChild(p.toastTexts);
        var L;
        ! function() {
            s.inputs.length > 0 && (p.inputs.classList.add(o + "-inputs"), m(s.inputs, function(t, e) {
                p.inputs.appendChild(f(t[0])), L = p.inputs.childNodes, L[e].classList.add(o + "-inputs-child"), t[3] && setTimeout(function() {
                    L[e].focus()
                }, 300), L[e].addEventListener(t[1], function(e) {
                    var o = t[2];
                    return o(i, p.toast, this, e)
                })
            }), p.toastBody.appendChild(p.inputs))
        }(),
        function() {
            s.buttons.length > 0 && (p.buttons.classList.add(o + "-buttons"), m(s.buttons, function(t, e) {
                p.buttons.appendChild(f(t[0]));
                var n = p.buttons.childNodes;
                n[e].classList.add(o + "-buttons-child"), t[2] && setTimeout(function() {
                    n[e].focus()
                }, 300), n[e].addEventListener("click", function(e) {
                    e.preventDefault();
                    var o = t[1];
                    return o(i, p.toast, this, e, L)
                })
            })), p.toastBody.appendChild(p.buttons)
        }(), s.message.length > 0 && (s.inputs.length > 0 || s.buttons.length > 0) && (p.p.style.marginBottom = "0"), (s.inputs.length > 0 || s.buttons.length > 0) && (s.rtl ? p.toastTexts.style.marginLeft = "10px" : p.toastTexts.style.marginRight = "10px", s.inputs.length > 0 && s.buttons.length > 0 && (s.rtl ? p.inputs.style.marginLeft = "8px" : p.inputs.style.marginRight = "8px")),
            function() {
                p.toastCapsule.style.visibility = "hidden", setTimeout(function() {
                    var t = p.toast.offsetHeight,
                        e = p.toast.currentStyle || window.getComputedStyle(p.toast),
                        o = e.marginTop;
                    o = o.split("px"), o = parseInt(o[0]);
                    var n = e.marginBottom;
                    n = n.split("px"), n = parseInt(n[0]), p.toastCapsule.style.visibility = "", p.toastCapsule.style.height = t + n + o + "px", setTimeout(function() {
                        p.toastCapsule.style.height = "auto", s.target && (p.toastCapsule.style.overflow = "visible")
                    }, 500), s.timeout && i.progress(s, p.toast).start()
                }, 100)
            }(),
            function() {
                var t = s.position;
                if (s.target) p.wrapper = document.querySelector(s.target), p.wrapper.classList.add(o + "-target"), s.targetFirst ? p.wrapper.insertBefore(p.toastCapsule, p.wrapper.firstChild) : p.wrapper.appendChild(p.toastCapsule);
                else {
                    if (-1 == r.indexOf(s.position)) return void console.warn("[" + o + "] Incorrect position.\nIt can be вЂє " + r);
                    t = n || window.innerWidth <= d ? "bottomLeft" == s.position || "bottomRight" == s.position || "bottomCenter" == s.position ? o + "-wrapper-bottomCenter" : "topLeft" == s.position || "topRight" == s.position || "topCenter" == s.position ? o + "-wrapper-topCenter" : o + "-wrapper-center" : o + "-wrapper-" + t, p.wrapper = document.querySelector("." + o + "-wrapper." + t), p.wrapper || (p.wrapper = document.createElement("div"), p.wrapper.classList.add(o + "-wrapper"), p.wrapper.classList.add(t), document.body.appendChild(p.wrapper)), "topLeft" == s.position || "topCenter" == s.position || "topRight" == s.position ? p.wrapper.insertBefore(p.toastCapsule, p.wrapper.firstChild) : p.wrapper.appendChild(p.toastCapsule)
                }
                isNaN(s.zindex) ? console.warn("[" + o + "] Invalid zIndex.") : p.wrapper.style.zIndex = s.zindex
            }(),
            function() {
                s.overlay && (null !== document.querySelector("." + o + "-overlay.fadeIn") ? (p.overlay = document.querySelector("." + o + "-overlay"), p.overlay.setAttribute("data-iziToast-ref", p.overlay.getAttribute("data-iziToast-ref") + "," + s.ref), isNaN(s.zindex) || null === s.zindex || (p.overlay.style.zIndex = s.zindex - 1)) : (p.overlay.classList.add(o + "-overlay"), p.overlay.classList.add("fadeIn"), p.overlay.style.background = s.overlayColor, p.overlay.setAttribute("data-iziToast-ref", s.ref), isNaN(s.zindex) || null === s.zindex || (p.overlay.style.zIndex = s.zindex - 1), document.querySelector("body").appendChild(p.overlay)), s.overlayClose ? (p.overlay.removeEventListener("click", {}), p.overlay.addEventListener("click", function(t) {
                    i.hide(s, p.toast, "overlay")
                })) : p.overlay.removeEventListener("click", {}))
            }(),
            function() {
                if (s.animateInside) {
                    p.toast.classList.add(o + "-animateInside");
                    var t = [200, 100, 300];
                    "bounceInLeft" != s.transitionIn && "bounceInRight" != s.transitionIn || (t = [400, 200, 400]), s.title.length > 0 && setTimeout(function() {
                        p.strong.classList.add("slideIn")
                    }, t[0]), s.message.length > 0 && setTimeout(function() {
                        p.p.classList.add("slideIn")
                    }, t[1]), s.icon && setTimeout(function() {
                        p.icon.classList.add("revealIn")
                    }, t[2]);
                    var e = 150;
                    s.buttons.length > 0 && p.buttons && setTimeout(function() {
                        m(p.buttons.childNodes, function(t, o) {
                            setTimeout(function() {
                                t.classList.add("revealIn")
                            }, e), e += 150
                        })
                    }, s.inputs.length > 0 ? 150 : 0), s.inputs.length > 0 && p.inputs && (e = 150, m(p.inputs.childNodes, function(t, o) {
                        setTimeout(function() {
                            t.classList.add("revealIn")
                        }, e), e += 150
                    }))
                }
            }(), s.onOpening.apply(null, [s, p.toast]);
        try {
            var C = new CustomEvent(o + "-opening", {
                detail: s,
                bubbles: !0,
                cancelable: !0
            });
            document.dispatchEvent(C)
        } catch (w) {
            console.warn(w)
        }
        setTimeout(function() {
            p.toast.classList.remove(o + "-opening"), p.toast.classList.add(o + "-opened");
            try {
                var t = new CustomEvent(o + "-opened", {
                    detail: s,
                    bubbles: !0,
                    cancelable: !0
                });
                document.dispatchEvent(t)
            } catch (e) {
                console.warn(e)
            }
            s.onOpened.apply(null, [s, p.toast])
        }, 1e3), s.drag && (a ? (p.toast.addEventListener("touchstart", function(t) {
            b.startMoving(this, i, s, t)
        }, !1), p.toast.addEventListener("touchend", function(t) {
            b.stopMoving(this, t)
        }, !1)) : (p.toast.addEventListener("mousedown", function(t) {
            t.preventDefault(), b.startMoving(this, i, s, t)
        }, !1), p.toast.addEventListener("mouseup", function(t) {
            t.preventDefault(), b.stopMoving(this, t)
        }, !1))), s.closeOnEscape && document.addEventListener("keyup", function(t) {
            t = t || window.event, 27 == t.keyCode && i.hide(s, p.toast, "esc")
        }), s.closeOnClick && p.toast.addEventListener("click", function(t) {
            i.hide(s, p.toast, "toast")
        }), i.toast = p.toast
    }, e
});
