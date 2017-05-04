﻿/*
 Highstock JS v5.0.10 (2017-03-31)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (K, a) { "object" === typeof module && module.exports ? module.exports = K.document ? a(K) : a : K.Highcharts = a(K) })("undefined" !== typeof window ? window : this, function (K) {
    K = function () {
        var a = window, D = a.document, C = a.navigator && a.navigator.userAgent || "", G = D && D.createElementNS && !!D.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, H = /(edge|msie|trident)/i.test(C) && !window.opera, v = !G, l = /Firefox/.test(C), r = l && 4 > parseInt(C.split("Firefox/")[1], 10); return a.Highcharts ? a.Highcharts.error(16, !0) : {
            product: "Highstock",
            version: "5.0.10", deg2rad: 2 * Math.PI / 360, doc: D, hasBidiBug: r, hasTouch: D && void 0 !== D.documentElement.ontouchstart, isMS: H, isWebKit: /AppleWebKit/.test(C), isFirefox: l, isTouchDevice: /(Mobile|Android|Windows Phone)/.test(C), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {}, svg: G, vml: v, win: a, charts: [], marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: function () { }
        }
    }(); (function (a) {
        var D = [], C = a.charts, G = a.doc, H = a.win; a.error = function (v, l) {
            v = a.isNumber(v) ? "Highcharts error #" +
            v + ": www.highcharts.com/errors/" + v : v; if (l) throw Error(v); H.console && console.log(v)
        }; a.Fx = function (a, l, r) { this.options = l; this.elem = a; this.prop = r }; a.Fx.prototype = {
            dSetter: function () { var a = this.paths[0], l = this.paths[1], r = [], w = this.now, q = a.length, n; if (1 === w) r = this.toD; else if (q === l.length && 1 > w) for (; q--;) n = parseFloat(a[q]), r[q] = isNaN(n) ? a[q] : w * parseFloat(l[q] - n) + n; else r = l; this.elem.attr("d", r, null, !0) }, update: function () {
                var a = this.elem, l = this.prop, r = this.now, w = this.options.step; if (this[l + "Setter"]) this[l +
                "Setter"](); else a.attr ? a.element && a.attr(l, r, null, !0) : a.style[l] = r + this.unit; w && w.call(a, r, this)
            }, run: function (a, l, r) { var v = this, q = function (a) { return q.stopped ? !1 : v.step(a) }, n; this.startTime = +new Date; this.start = a; this.end = l; this.unit = r; this.now = this.start; this.pos = 0; q.elem = this.elem; q.prop = this.prop; q() && 1 === D.push(q) && (q.timerId = setInterval(function () { for (n = 0; n < D.length; n++) D[n]() || D.splice(n--, 1); D.length || clearInterval(q.timerId) }, 13)) }, step: function (a) {
                var l = +new Date, v, w = this.options; v = this.elem;
                var q = w.complete, n = w.duration, f = w.curAnim, c; if (v.attr && !v.element) v = !1; else if (a || l >= n + this.startTime) { this.now = this.end; this.pos = 1; this.update(); a = f[this.prop] = !0; for (c in f) !0 !== f[c] && (a = !1); a && q && q.call(v); v = !1 } else this.pos = w.easing((l - this.startTime) / n), this.now = this.start + (this.end - this.start) * this.pos, this.update(), v = !0; return v
            }, initPath: function (v, l, r) {
                function w(a) {
                    var b, k; for (B = a.length; B--;) b = "M" === a[B] || "L" === a[B], k = /[a-zA-Z]/.test(a[B + 3]), b && k && a.splice(B + 1, 0, a[B + 1], a[B + 2], a[B + 1], a[B +
                    2])
                } function q(a, d) { for (; a.length < t;) { a[0] = d[t - a.length]; var k = a.slice(0, b);[].splice.apply(a, [0, 0].concat(k)); p && (k = a.slice(a.length - b), [].splice.apply(a, [a.length, 0].concat(k)), B--) } a[0] = "M" } function n(a, d) { for (var k = (t - a.length) / b; 0 < k && k--;) h = a.slice().splice(a.length / x - b, b * x), h[0] = d[t - b - k * b], z && (h[b - 6] = h[b - 2], h[b - 5] = h[b - 1]), [].splice.apply(a, [a.length / x, 0].concat(h)), p && k-- } l = l || ""; var f, c = v.startX, e = v.endX, z = -1 < l.indexOf("C"), b = z ? 7 : 3, t, h, B; l = l.split(" "); r = r.slice(); var p = v.isArea, x = p ? 2 : 1, k;
                z && (w(l), w(r)); if (c && e) { for (B = 0; B < c.length; B++) if (c[B] === e[0]) { f = B; break } else if (c[0] === e[e.length - c.length + B]) { f = B; k = !0; break } void 0 === f && (l = []) } l.length && a.isNumber(f) && (t = r.length + f * x * b, k ? (q(l, r), n(r, l)) : (q(r, l), n(l, r))); return [l, r]
            }
        }; a.extend = function (a, l) { var v; a || (a = {}); for (v in l) a[v] = l[v]; return a }; a.merge = function () {
            var v, l = arguments, r, w = {}, q = function (n, f) {
                var c, e; "object" !== typeof n && (n = {}); for (e in f) f.hasOwnProperty(e) && (c = f[e], a.isObject(c, !0) && "renderTo" !== e && "number" !== typeof c.nodeType ?
                n[e] = q(n[e] || {}, c) : n[e] = f[e]); return n
            }; !0 === l[0] && (w = l[1], l = Array.prototype.slice.call(l, 2)); r = l.length; for (v = 0; v < r; v++) w = q(w, l[v]); return w
        }; a.pInt = function (a, l) { return parseInt(a, l || 10) }; a.isString = function (a) { return "string" === typeof a }; a.isArray = function (a) { a = Object.prototype.toString.call(a); return "[object Array]" === a || "[object Array Iterator]" === a }; a.isObject = function (v, l) { return v && "object" === typeof v && (!l || !a.isArray(v)) }; a.isNumber = function (a) { return "number" === typeof a && !isNaN(a) }; a.erase =
        function (a, l) { for (var v = a.length; v--;) if (a[v] === l) { a.splice(v, 1); break } }; a.defined = function (a) { return void 0 !== a && null !== a }; a.attr = function (v, l, r) { var w, q; if (a.isString(l)) a.defined(r) ? v.setAttribute(l, r) : v && v.getAttribute && (q = v.getAttribute(l)); else if (a.defined(l) && a.isObject(l)) for (w in l) v.setAttribute(w, l[w]); return q }; a.splat = function (v) { return a.isArray(v) ? v : [v] }; a.syncTimeout = function (a, l, r) { if (l) return setTimeout(a, l, r); a.call(0, r) }; a.pick = function () {
            var a = arguments, l, r, w = a.length; for (l =
            0; l < w; l++) if (r = a[l], void 0 !== r && null !== r) return r
        }; a.css = function (v, l) { a.isMS && !a.svg && l && void 0 !== l.opacity && (l.filter = "alpha(opacity\x3d" + 100 * l.opacity + ")"); a.extend(v.style, l) }; a.createElement = function (v, l, r, w, q) { v = G.createElement(v); var n = a.css; l && a.extend(v, l); q && n(v, { padding: 0, border: "none", margin: 0 }); r && n(v, r); w && w.appendChild(v); return v }; a.extendClass = function (v, l) { var r = function () { }; r.prototype = new v; a.extend(r.prototype, l); return r }; a.pad = function (a, l, r) {
            return Array((l || 2) + 1 - String(a).length).join(r ||
            0) + a
        }; a.relativeLength = function (a, l) { return /%$/.test(a) ? l * parseFloat(a) / 100 : parseFloat(a) }; a.wrap = function (a, l, r) { var w = a[l]; a[l] = function () { var a = Array.prototype.slice.call(arguments), n = arguments, f = this; f.proceed = function () { w.apply(f, arguments.length ? arguments : n) }; a.unshift(w); a = r.apply(this, a); f.proceed = null; return a } }; a.getTZOffset = function (v) { var l = a.Date; return 6E4 * (l.hcGetTimezoneOffset && l.hcGetTimezoneOffset(v) || l.hcTimezoneOffset || 0) }; a.dateFormat = function (v, l, r) {
            if (!a.defined(l) || isNaN(l)) return a.defaultOptions.lang.invalidDate ||
            ""; v = a.pick(v, "%Y-%m-%d %H:%M:%S"); var w = a.Date, q = new w(l - a.getTZOffset(l)), n, f = q[w.hcGetHours](), c = q[w.hcGetDay](), e = q[w.hcGetDate](), z = q[w.hcGetMonth](), b = q[w.hcGetFullYear](), t = a.defaultOptions.lang, h = t.weekdays, B = t.shortWeekdays, p = a.pad, w = a.extend({
                a: B ? B[c] : h[c].substr(0, 3), A: h[c], d: p(e), e: p(e, 2, " "), w: c, b: t.shortMonths[z], B: t.months[z], m: p(z + 1), y: b.toString().substr(2, 2), Y: b, H: p(f), k: f, I: p(f % 12 || 12), l: f % 12 || 12, M: p(q[w.hcGetMinutes]()), p: 12 > f ? "AM" : "PM", P: 12 > f ? "am" : "pm", S: p(q.getSeconds()), L: p(Math.round(l %
                1E3), 3)
            }, a.dateFormats); for (n in w) for (; -1 !== v.indexOf("%" + n) ;) v = v.replace("%" + n, "function" === typeof w[n] ? w[n](l) : w[n]); return r ? v.substr(0, 1).toUpperCase() + v.substr(1) : v
        }; a.formatSingle = function (v, l) { var r = /\.([0-9])/, w = a.defaultOptions.lang; /f$/.test(v) ? (r = (r = v.match(r)) ? r[1] : -1, null !== l && (l = a.numberFormat(l, r, w.decimalPoint, -1 < v.indexOf(",") ? w.thousandsSep : ""))) : l = a.dateFormat(v, l); return l }; a.format = function (v, l) {
            for (var r = "{", w = !1, q, n, f, c, e = [], z; v;) {
                r = v.indexOf(r); if (-1 === r) break; q = v.slice(0,
                r); if (w) { q = q.split(":"); n = q.shift().split("."); c = n.length; z = l; for (f = 0; f < c; f++) z = z[n[f]]; q.length && (z = a.formatSingle(q.join(":"), z)); e.push(z) } else e.push(q); v = v.slice(r + 1); r = (w = !w) ? "}" : "{"
            } e.push(v); return e.join("")
        }; a.getMagnitude = function (a) { return Math.pow(10, Math.floor(Math.log(a) / Math.LN10)) }; a.normalizeTickInterval = function (v, l, r, w, q) {
            var n, f = v; r = a.pick(r, 1); n = v / r; l || (l = q ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === w && (1 === r ? l = a.grep(l, function (a) { return 0 === a % 1 }) : .1 >= r && (l = [1 / r])));
            for (w = 0; w < l.length && !(f = l[w], q && f * r >= v || !q && n <= (l[w] + (l[w + 1] || l[w])) / 2) ; w++); return f = a.correctFloat(f * r, -Math.round(Math.log(.001) / Math.LN10))
        }; a.stableSort = function (a, l) { var r = a.length, w, q; for (q = 0; q < r; q++) a[q].safeI = q; a.sort(function (a, f) { w = l(a, f); return 0 === w ? a.safeI - f.safeI : w }); for (q = 0; q < r; q++) delete a[q].safeI }; a.arrayMin = function (a) { for (var l = a.length, r = a[0]; l--;) a[l] < r && (r = a[l]); return r }; a.arrayMax = function (a) { for (var l = a.length, r = a[0]; l--;) a[l] > r && (r = a[l]); return r }; a.destroyObjectProperties =
        function (a, l) { for (var r in a) a[r] && a[r] !== l && a[r].destroy && a[r].destroy(), delete a[r] }; a.discardElement = function (v) { var l = a.garbageBin; l || (l = a.createElement("div")); v && l.appendChild(v); l.innerHTML = "" }; a.correctFloat = function (a, l) { return parseFloat(a.toPrecision(l || 14)) }; a.setAnimation = function (v, l) { l.renderer.globalAnimation = a.pick(v, l.options.chart.animation, !0) }; a.animObject = function (v) { return a.isObject(v) ? a.merge(v) : { duration: v ? 500 : 0 } }; a.timeUnits = {
            millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5,
            day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5
        }; a.numberFormat = function (v, l, r, w) { v = +v || 0; l = +l; var q = a.defaultOptions.lang, n = (v.toString().split(".")[1] || "").length, f, c; -1 === l ? l = Math.min(n, 20) : a.isNumber(l) || (l = 2); c = (Math.abs(v) + Math.pow(10, -Math.max(l, n) - 1)).toFixed(l); n = String(a.pInt(c)); f = 3 < n.length ? n.length % 3 : 0; r = a.pick(r, q.decimalPoint); w = a.pick(w, q.thousandsSep); v = (0 > v ? "-" : "") + (f ? n.substr(0, f) + w : ""); v += n.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + w); l && (v += r + c.slice(-l)); return v }; Math.easeInOutSine =
        function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) }; a.getStyle = function (v, l) { return "width" === l ? Math.min(v.offsetWidth, v.scrollWidth) - a.getStyle(v, "padding-left") - a.getStyle(v, "padding-right") : "height" === l ? Math.min(v.offsetHeight, v.scrollHeight) - a.getStyle(v, "padding-top") - a.getStyle(v, "padding-bottom") : (v = H.getComputedStyle(v, void 0)) && a.pInt(v.getPropertyValue(l)) }; a.inArray = function (a, l) { return l.indexOf ? l.indexOf(a) : [].indexOf.call(l, a) }; a.grep = function (a, l) { return [].filter.call(a, l) }; a.find = function (a,
        l) { return [].find.call(a, l) }; a.map = function (a, l) { for (var r = [], w = 0, q = a.length; w < q; w++) r[w] = l.call(a[w], a[w], w, a); return r }; a.offset = function (a) { var l = G.documentElement; a = a.getBoundingClientRect(); return { top: a.top + (H.pageYOffset || l.scrollTop) - (l.clientTop || 0), left: a.left + (H.pageXOffset || l.scrollLeft) - (l.clientLeft || 0) } }; a.stop = function (a, l) { for (var r = D.length; r--;) D[r].elem !== a || l && l !== D[r].prop || (D[r].stopped = !0) }; a.each = function (a, l, r) { return Array.prototype.forEach.call(a, l, r) }; a.addEvent = function (v,
        l, r) { function w(a) { a.target = a.srcElement || H; r.call(v, a) } var q = v.hcEvents = v.hcEvents || {}; v.addEventListener ? v.addEventListener(l, r, !1) : v.attachEvent && (v.hcEventsIE || (v.hcEventsIE = {}), v.hcEventsIE[r.toString()] = w, v.attachEvent("on" + l, w)); q[l] || (q[l] = []); q[l].push(r); return function () { a.removeEvent(v, l, r) } }; a.removeEvent = function (v, l, r) {
            function w(a, c) { v.removeEventListener ? v.removeEventListener(a, c, !1) : v.attachEvent && (c = v.hcEventsIE[c.toString()], v.detachEvent("on" + a, c)) } function q() {
                var a, c; if (v.nodeName) for (c in l ?
                (a = {}, a[l] = !0) : a = f, a) if (f[c]) for (a = f[c].length; a--;) w(c, f[c][a])
            } var n, f = v.hcEvents, c; f && (l ? (n = f[l] || [], r ? (c = a.inArray(r, n), -1 < c && (n.splice(c, 1), f[l] = n), w(l, r)) : (q(), f[l] = [])) : (q(), v.hcEvents = {}))
        }; a.fireEvent = function (v, l, r, w) {
            var q; q = v.hcEvents; var n, f; r = r || {}; if (G.createEvent && (v.dispatchEvent || v.fireEvent)) q = G.createEvent("Events"), q.initEvent(l, !0, !0), a.extend(q, r), v.dispatchEvent ? v.dispatchEvent(q) : v.fireEvent(l, q); else if (q) for (q = q[l] || [], n = q.length, r.target || a.extend(r, {
                    preventDefault: function () {
            r.defaultPrevented =
            !0
            }, target: v, type: l
            }), l = 0; l < n; l++) (f = q[l]) && !1 === f.call(v, r) && r.preventDefault(); w && !r.defaultPrevented && w(r)
        }; a.animate = function (v, l, r) {
            var w, q = "", n, f, c; a.isObject(r) || (w = arguments, r = { duration: w[2], easing: w[3], complete: w[4] }); a.isNumber(r.duration) || (r.duration = 400); r.easing = "function" === typeof r.easing ? r.easing : Math[r.easing] || Math.easeInOutSine; r.curAnim = a.merge(l); for (c in l) a.stop(v, c), f = new a.Fx(v, r, c), n = null, "d" === c ? (f.paths = f.initPath(v, v.d, l.d), f.toD = l.d, w = 0, n = 1) : v.attr ? w = v.attr(c) : (w = parseFloat(a.getStyle(v,
            c)) || 0, "opacity" !== c && (q = "px")), n || (n = l[c]), n && n.match && n.match("px") && (n = n.replace(/px/g, "")), f.run(w, n, q)
        }; a.seriesType = function (v, l, r, w, q) { var n = a.getOptions(), f = a.seriesTypes; n.plotOptions[v] = a.merge(n.plotOptions[l], r); f[v] = a.extendClass(f[l] || function () { }, w); f[v].prototype.type = v; q && (f[v].prototype.pointClass = a.extendClass(a.Point, q)); return f[v] }; a.uniqueKey = function () { var a = Math.random().toString(36).substring(2, 9), l = 0; return function () { return "highcharts-" + a + "-" + l++ } }(); H.jQuery && (H.jQuery.fn.highcharts =
        function () { var v = [].slice.call(arguments); if (this[0]) return v[0] ? (new (a[a.isString(v[0]) ? v.shift() : "Chart"])(this[0], v[0], v[1]), this) : C[a.attr(this[0], "data-highcharts-chart")] }); G && !G.defaultView && (a.getStyle = function (v, l) {
            var r = { width: "clientWidth", height: "clientHeight" }[l]; if (v.style[l]) return a.pInt(v.style[l]); "opacity" === l && (l = "filter"); if (r) return v.style.zoom = 1, Math.max(v[r] - 2 * a.getStyle(v, "padding"), 0); v = v.currentStyle[l.replace(/\-(\w)/g, function (a, q) { return q.toUpperCase() })]; "filter" ===
            l && (v = v.replace(/alpha\(opacity=([0-9]+)\)/, function (a, q) { return q / 100 })); return "" === v ? 1 : a.pInt(v)
        }); Array.prototype.forEach || (a.each = function (a, l, r) { for (var w = 0, q = a.length; w < q; w++) if (!1 === l.call(r, a[w], w, a)) return w }); Array.prototype.indexOf || (a.inArray = function (a, l) { var r, w = 0; if (l) for (r = l.length; w < r; w++) if (l[w] === a) return w; return -1 }); Array.prototype.filter || (a.grep = function (a, l) { for (var r = [], w = 0, q = a.length; w < q; w++) l(a[w], w) && r.push(a[w]); return r }); Array.prototype.find || (a.find = function (a, l) {
            var r,
            w = a.length; for (r = 0; r < w; r++) if (l(a[r], r)) return a[r]
        })
    })(K); (function (a) {
        var D = a.each, C = a.isNumber, G = a.map, H = a.merge, v = a.pInt; a.Color = function (l) { if (!(this instanceof a.Color)) return new a.Color(l); this.init(l) }; a.Color.prototype = {
            parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (a) { return [v(a[1]), v(a[2]), v(a[3]), parseFloat(a[4], 10)] } }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) {
                    return [v(a[1]),
                    v(a[2]), v(a[3]), 1]
                }
            }], names: { white: "#ffffff", black: "#000000" }, init: function (l) {
                var r, w, q, n; if ((this.input = l = this.names[l && l.toLowerCase ? l.toLowerCase() : ""] || l) && l.stops) this.stops = G(l.stops, function (f) { return new a.Color(f[1]) }); else if (l && "#" === l[0] && (r = l.length, l = parseInt(l.substr(1), 16), 7 === r ? w = [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255, 1] : 4 === r && (w = [(l & 3840) >> 4 | (l & 3840) >> 8, (l & 240) >> 4 | l & 240, (l & 15) << 4 | l & 15, 1])), !w) for (q = this.parsers.length; q-- && !w;) n = this.parsers[q], (r = n.regex.exec(l)) && (w = n.parse(r));
                this.rgba = w || []
            }, get: function (a) { var l = this.input, w = this.rgba, q; this.stops ? (q = H(l), q.stops = [].concat(q.stops), D(this.stops, function (n, f) { q.stops[f] = [q.stops[f][0], n.get(a)] })) : q = w && C(w[0]) ? "rgb" === a || !a && 1 === w[3] ? "rgb(" + w[0] + "," + w[1] + "," + w[2] + ")" : "a" === a ? w[3] : "rgba(" + w.join(",") + ")" : l; return q }, brighten: function (a) { var l, w = this.rgba; if (this.stops) D(this.stops, function (q) { q.brighten(a) }); else if (C(a) && 0 !== a) for (l = 0; 3 > l; l++) w[l] += v(255 * a), 0 > w[l] && (w[l] = 0), 255 < w[l] && (w[l] = 255); return this }, setOpacity: function (a) {
                this.rgba[3] =
                a; return this
            }
        }; a.color = function (l) { return new a.Color(l) }
    })(K); (function (a) {
        var D, C, G = a.addEvent, H = a.animate, v = a.attr, l = a.charts, r = a.color, w = a.css, q = a.createElement, n = a.defined, f = a.deg2rad, c = a.destroyObjectProperties, e = a.doc, z = a.each, b = a.extend, t = a.erase, h = a.grep, B = a.hasTouch, p = a.inArray, x = a.isArray, k = a.isFirefox, F = a.isMS, d = a.isObject, u = a.isString, m = a.isWebKit, y = a.merge, J = a.noop, E = a.pick, I = a.pInt, g = a.removeEvent, L = a.stop, R = a.svg, O = a.SVG_NS, M = a.symbolSizes, P = a.win; D = a.SVGElement = function () { return this };
        D.prototype = {
            opacity: 1, SVG_NS: O, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "), init: function (a, g) { this.element = "span" === g ? q(g) : e.createElementNS(this.SVG_NS, g); this.renderer = a }, animate: function (A, g, b) { g = a.animObject(E(g, this.renderer.globalAnimation, !0)); 0 !== g.duration ? (b && (g.complete = b), H(this, A, g)) : (this.attr(A, null, b), g.step && g.step.call(this)); return this }, colorGradient: function (A, g, b) {
                var k = this.renderer,
                d, m, c, h, L, E, F, u, Q, p, t, e = [], I; A.radialGradient ? m = "radialGradient" : A.linearGradient && (m = "linearGradient"); if (m) {
                    c = A[m]; L = k.gradients; F = A.stops; p = b.radialReference; x(c) && (A[m] = c = { x1: c[0], y1: c[1], x2: c[2], y2: c[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === m && p && !n(c.gradientUnits) && (h = c, c = y(c, k.getRadialAttr(p, h), { gradientUnits: "userSpaceOnUse" })); for (t in c) "id" !== t && e.push(t, c[t]); for (t in F) e.push(F[t]); e = e.join(","); L[e] ? p = L[e].attr("id") : (c.id = p = a.uniqueKey(), L[e] = E = k.createElement(m).attr(c).add(k.defs),
                    E.radAttr = h, E.stops = [], z(F, function (A) { 0 === A[1].indexOf("rgba") ? (d = a.color(A[1]), u = d.get("rgb"), Q = d.get("a")) : (u = A[1], Q = 1); A = k.createElement("stop").attr({ offset: A[0], "stop-color": u, "stop-opacity": Q }).add(E); E.stops.push(A) })); I = "url(" + k.url + "#" + p + ")"; b.setAttribute(g, I); b.gradient = e; A.toString = function () { return I }
                }
            }, applyTextOutline: function (A) {
                var g = this.element, b, k, d, m, c; -1 !== A.indexOf("contrast") && (A = A.replace(/contrast/g, this.renderer.getContrast(g.style.fill))); A = A.split(" "); k = A[A.length - 1];
                if ((d = A[0]) && "none" !== d && a.svg) {
                    this.fakeTS = !0; A = [].slice.call(g.getElementsByTagName("tspan")); this.ySetter = this.xSetter; d = d.replace(/(^[\d\.]+)(.*?)$/g, function (a, A, g) { return 2 * A + g }); for (c = A.length; c--;) b = A[c], "highcharts-text-outline" === b.getAttribute("class") && t(A, g.removeChild(b)); m = g.firstChild; z(A, function (a, A) {
                        0 === A && (a.setAttribute("x", g.getAttribute("x")), A = g.getAttribute("y"), a.setAttribute("y", A || 0), null === A && g.setAttribute("y", 0)); a = a.cloneNode(1); v(a, {
                            "class": "highcharts-text-outline",
                            fill: k, stroke: k, "stroke-width": d, "stroke-linejoin": "round"
                        }); g.insertBefore(a, m)
                    })
                }
            }, attr: function (a, g, b, k) {
                var A, d = this.element, m, c = this, h; "string" === typeof a && void 0 !== g && (A = a, a = {}, a[A] = g); if ("string" === typeof a) c = (this[a + "Getter"] || this._defaultGetter).call(this, a, d); else {
                    for (A in a) g = a[A], h = !1, k || L(this, A), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(A) && (m || (this.symbolAttr(a), m = !0), h = !0), !this.rotation || "x" !== A && "y" !== A || (this.doTransform = !0), h || (h = this[A +
                    "Setter"] || this._defaultSetter, h.call(this, g, A, d), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(A) && this.updateShadows(A, g, h)); this.doTransform && (this.updateTransform(), this.doTransform = !1)
                } b && b(); return c
            }, updateShadows: function (a, g, b) { for (var A = this.shadows, k = A.length; k--;) b.call(A[k], "height" === a ? Math.max(g - (A[k].cutHeight || 0), 0) : "d" === a ? this.d : g, a, A[k]) }, addClass: function (a, g) {
                var A = this.attr("class") || ""; -1 === A.indexOf(a) && (g || (a = (A + (A ? " " : "") + a).replace("  ", " ")),
                this.attr("class", a)); return this
            }, hasClass: function (a) { return -1 !== v(this.element, "class").indexOf(a) }, removeClass: function (a) { v(this.element, "class", (v(this.element, "class") || "").replace(a, "")); return this }, symbolAttr: function (a) { var A = this; z("x y r start end width height innerR anchorX anchorY".split(" "), function (g) { A[g] = E(a[g], A[g]) }); A.attr({ d: A.renderer.symbols[A.symbolName](A.x, A.y, A.width, A.height, A) }) }, clip: function (a) {
                return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" :
                "none")
            }, crisp: function (a, g) { var A, b = {}, k; g = g || a.strokeWidth || 0; k = Math.round(g) % 2 / 2; a.x = Math.floor(a.x || this.x || 0) + k; a.y = Math.floor(a.y || this.y || 0) + k; a.width = Math.floor((a.width || this.width || 0) - 2 * k); a.height = Math.floor((a.height || this.height || 0) - 2 * k); n(a.strokeWidth) && (a.strokeWidth = g); for (A in a) this[A] !== a[A] && (this[A] = b[A] = a[A]); return b }, css: function (a) {
                var A = this.styles, g = {}, k = this.element, d, m = "", c = !A, h = ["textOutline", "textOverflow", "width"]; a && a.color && (a.fill = a.color); if (A) for (d in a) a[d] !==
                A[d] && (g[d] = a[d], c = !0); if (c) { A && (a = b(A, g)); A = this.textWidth = a && a.width && "auto" !== a.width && "text" === k.nodeName.toLowerCase() && I(a.width); this.styles = a; A && !R && this.renderer.forExport && delete a.width; if (F && !R) w(this.element, a); else { A = function (a, A) { return "-" + A.toLowerCase() }; for (d in a) -1 === p(d, h) && (m += d.replace(/([A-Z])/g, A) + ":" + a[d] + ";"); m && v(k, "style", m) } this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline)) } return this
            }, strokeWidth: function () {
                return this["stroke-width"] ||
                0
            }, on: function (a, g) { var A = this, b = A.element; B && "click" === a ? (b.ontouchstart = function (a) { A.touchEventFired = Date.now(); a.preventDefault(); g.call(b, a) }, b.onclick = function (a) { (-1 === P.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (A.touchEventFired || 0)) && g.call(b, a) }) : b["on" + a] = g; return this }, setRadialReference: function (a) { var A = this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; A && A.radAttr && A.animate(this.renderer.getRadialAttr(a, A.radAttr)); return this }, translate: function (a,
            g) { return this.attr({ translateX: a, translateY: g }) }, invert: function (a) { this.inverted = a; this.updateTransform(); return this }, updateTransform: function () {
                var a = this.translateX || 0, g = this.translateY || 0, b = this.scaleX, k = this.scaleY, d = this.inverted, m = this.rotation, c = this.element; d && (a += this.width, g += this.height); a = ["translate(" + a + "," + g + ")"]; d ? a.push("rotate(90) scale(-1,1)") : m && a.push("rotate(" + m + " " + (c.getAttribute("x") || 0) + " " + (c.getAttribute("y") || 0) + ")"); (n(b) || n(k)) && a.push("scale(" + E(b, 1) + " " + E(k, 1) + ")");
                a.length && c.setAttribute("transform", a.join(" "))
            }, toFront: function () { var a = this.element; a.parentNode.appendChild(a); return this }, align: function (a, g, b) {
                var A, k, d, m, c = {}; k = this.renderer; d = k.alignedObjects; var h, y; if (a) { if (this.alignOptions = a, this.alignByTranslate = g, !b || u(b)) this.alignTo = A = b || "renderer", t(d, this), d.push(this), b = null } else a = this.alignOptions, g = this.alignByTranslate, A = this.alignTo; b = E(b, k[A], k); A = a.align; k = a.verticalAlign; d = (b.x || 0) + (a.x || 0); m = (b.y || 0) + (a.y || 0); "right" === A ? h = 1 : "center" ===
                A && (h = 2); h && (d += (b.width - (a.width || 0)) / h); c[g ? "translateX" : "x"] = Math.round(d); "bottom" === k ? y = 1 : "middle" === k && (y = 2); y && (m += (b.height - (a.height || 0)) / y); c[g ? "translateY" : "y"] = Math.round(m); this[this.placed ? "animate" : "attr"](c); this.placed = !0; this.alignAttr = c; return this
            }, getBBox: function (a, g) {
                var A, k = this.renderer, d, m = this.element, c = this.styles, h, y = this.textStr, L, F = k.cache, u = k.cacheKeys, p; g = E(g, this.rotation); d = g * f; h = c && c.fontSize; void 0 !== y && (p = y.toString(), -1 === p.indexOf("\x3c") && (p = p.replace(/[0-9]/g,
                "0")), p += ["", g || 0, h, c && c.width, c && c.textOverflow].join()); p && !a && (A = F[p]); if (!A) {
                    if (m.namespaceURI === this.SVG_NS || k.forExport) { try { (L = this.fakeTS && function (a) { z(m.querySelectorAll(".highcharts-text-outline"), function (A) { A.style.display = a }) }) && L("none"), A = m.getBBox ? b({}, m.getBBox()) : { width: m.offsetWidth, height: m.offsetHeight }, L && L("") } catch (U) { } if (!A || 0 > A.width) A = { width: 0, height: 0 } } else A = this.htmlGetBBox(); k.isSVG && (a = A.width, k = A.height, c && "11px" === c.fontSize && 17 === Math.round(k) && (A.height = k = 14),
                    g && (A.width = Math.abs(k * Math.sin(d)) + Math.abs(a * Math.cos(d)), A.height = Math.abs(k * Math.cos(d)) + Math.abs(a * Math.sin(d)))); if (p && 0 < A.height) { for (; 250 < u.length;) delete F[u.shift()]; F[p] || u.push(p); F[p] = A }
                } return A
            }, show: function (a) { return this.attr({ visibility: a ? "inherit" : "visible" }) }, hide: function () { return this.attr({ visibility: "hidden" }) }, fadeOut: function (a) { var A = this; A.animate({ opacity: 0 }, { duration: a || 150, complete: function () { A.attr({ y: -9999 }) } }) }, add: function (a) {
                var A = this.renderer, g = this.element,
                b; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; void 0 !== this.textStr && A.buildText(this); this.added = !0; if (!a || a.handleZ || this.zIndex) b = this.zIndexSetter(); b || (a ? a.element : A.box).appendChild(g); if (this.onAdd) this.onAdd(); return this
            }, safeRemoveChild: function (a) { var A = a.parentNode; A && A.removeChild(a) }, destroy: function () {
                var a = this, g = a.element || {}, b = a.renderer.isSVG && "SPAN" === g.nodeName && a.parentGroup, k, d; g.onclick = g.onmouseout = g.onmouseover = g.onmousemove = g.point = null; L(a); a.clipPath && (z(a.element.ownerSVGElement.querySelectorAll("[clip-path]"),
                function (g) { -1 < g.getAttribute("clip-path").indexOf(a.clipPath.element.id) && g.removeAttribute("clip-path") }), a.clipPath = a.clipPath.destroy()); if (a.stops) { for (d = 0; d < a.stops.length; d++) a.stops[d] = a.stops[d].destroy(); a.stops = null } a.safeRemoveChild(g); for (a.destroyShadows() ; b && b.div && 0 === b.div.childNodes.length;) g = b.parentGroup, a.safeRemoveChild(b.div), delete b.div, b = g; a.alignTo && t(a.renderer.alignedObjects, a); for (k in a) delete a[k]; return null
            }, shadow: function (a, g, b) {
                var A = [], k, d, m = this.element, c, h,
                y, L; if (!a) this.destroyShadows(); else if (!this.shadows) { h = E(a.width, 3); y = (a.opacity || .15) / h; L = this.parentInverted ? "(-1,-1)" : "(" + E(a.offsetX, 1) + ", " + E(a.offsetY, 1) + ")"; for (k = 1; k <= h; k++) d = m.cloneNode(0), c = 2 * h + 1 - 2 * k, v(d, { isShadow: "true", stroke: a.color || "#000000", "stroke-opacity": y * k, "stroke-width": c, transform: "translate" + L, fill: "none" }), b && (v(d, "height", Math.max(v(d, "height") - c, 0)), d.cutHeight = c), g ? g.element.appendChild(d) : m.parentNode.insertBefore(d, m), A.push(d); this.shadows = A } return this
            }, destroyShadows: function () {
                z(this.shadows ||
                [], function (a) { this.safeRemoveChild(a) }, this); this.shadows = void 0
            }, xGetter: function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) }, _defaultGetter: function (a) { a = E(this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a }, dSetter: function (a, g, b) { a && a.join && (a = a.join(" ")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); b.setAttribute(g, a); this[g] = a }, dashstyleSetter: function (a) {
                var g, A = this["stroke-width"];
                "inherit" === A && (A = 1); if (a = a && a.toLowerCase()) { a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (g = a.length; g--;) a[g] = I(a[g]) * A; a = a.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a) }
            }, alignSetter: function (a) { this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]) },
            opacitySetter: function (a, g, b) { this[g] = a; b.setAttribute(g, a) }, titleSetter: function (a) { var g = this.element.getElementsByTagName("title")[0]; g || (g = e.createElementNS(this.SVG_NS, "title"), this.element.appendChild(g)); g.firstChild && g.removeChild(g.firstChild); g.appendChild(e.createTextNode(String(E(a), "").replace(/<[^>]*>/g, ""))) }, textSetter: function (a) { a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)) }, fillSetter: function (a, g, b) {
                "string" === typeof a ? b.setAttribute(g,
                a) : a && this.colorGradient(a, g, b)
            }, visibilitySetter: function (a, g, b) { "inherit" === a ? b.removeAttribute(g) : b.setAttribute(g, a) }, zIndexSetter: function (a, g) { var A = this.renderer, b = this.parentGroup, k = (b || A).element || A.box, d, m = this.element, c; d = this.added; var h; n(a) && (m.zIndex = a, a = +a, this[g] === a && (d = !1), this[g] = a); if (d) { (a = this.zIndex) && b && (b.handleZ = !0); g = k.childNodes; for (h = 0; h < g.length && !c; h++) b = g[h], d = b.zIndex, b !== m && (I(d) > a || !n(a) && n(d) || 0 > a && !n(d) && k !== A.box) && (k.insertBefore(m, b), c = !0); c || k.appendChild(m) } return c },
            _defaultSetter: function (a, g, b) { b.setAttribute(g, a) }
        }; D.prototype.yGetter = D.prototype.xGetter; D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.rotationSetter = D.prototype.verticalAlignSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = function (a, g) { this[g] = a; this.doTransform = !0 }; D.prototype["stroke-widthSetter"] = D.prototype.strokeSetter = function (a, g, b) {
            this[g] = a; this.stroke && this["stroke-width"] ? (D.prototype.fillSetter.call(this, this.stroke, "stroke", b), b.setAttribute("stroke-width",
            this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === g && 0 === a && this.hasStroke && (b.removeAttribute("stroke"), this.hasStroke = !1)
        }; C = a.SVGRenderer = function () { this.init.apply(this, arguments) }; C.prototype = {
            Element: D, SVG_NS: O, init: function (a, g, b, d, c, h) {
                var A; d = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }).css(this.getStyle(d)); A = d.element; a.appendChild(A); -1 === a.innerHTML.indexOf("xmlns") && v(A, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = A; this.boxWrapper = d; this.alignedObjects =
                []; this.url = (k || m) && e.getElementsByTagName("base").length ? P.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(e.createTextNode("Created with Highstock 5.0.10")); this.defs = this.createElement("defs").add(); this.allowHTML = h; this.forExport = c; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(g, b, !1); var y; k && a.getBoundingClientRect && (g = function () {
                    w(a, { left: 0, top: 0 });
                    y = a.getBoundingClientRect(); w(a, { left: Math.ceil(y.left) - y.left + "px", top: Math.ceil(y.top) - y.top + "px" })
                }, g(), this.unSubPixelFix = G(P, "resize", g))
            }, getStyle: function (a) { return this.style = b({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a) }, setStyle: function (a) { this.boxWrapper.css(this.getStyle(a)) }, isHidden: function () { return !this.boxWrapper.getBBox().width }, destroy: function () {
                var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); c(this.gradients ||
                {}); this.gradients = null; a && (this.defs = a.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null
            }, createElement: function (a) { var g = new this.Element; g.init(this, a); return g }, draw: J, getRadialAttr: function (a, g) { return { cx: a[0] - a[2] / 2 + g.cx * a[2], cy: a[1] - a[2] / 2 + g.cy * a[2], r: g.r * a[2] } }, getSpanWidth: function (a, g) { var b = a.getBBox(!0).width; !R && this.forExport && (b = this.measureSpanWidth(g.firstChild.data, a.styles)); return b }, applyEllipsis: function (a, g, b, d) {
                var k = this.getSpanWidth(a, g),
                A = k > d, k = b, m, c = 0, h = b.length, y = function (a) { g.removeChild(g.firstChild); a && g.appendChild(e.createTextNode(a)) }; if (A) { for (; c <= h;) m = Math.ceil((c + h) / 2), k = b.substring(0, m) + "\u2026", y(k), k = this.getSpanWidth(a, g), c === h ? c = h + 1 : k > d ? h = m - 1 : c = m; 0 === h && y("") } return A
            }, buildText: function (a) {
                var g = a.element, b = this, k = b.forExport, d = E(a.textStr, "").toString(), m = -1 !== d.indexOf("\x3c"), A = g.childNodes, c, y, L, F, p = v(g, "x"), u = a.styles, x = a.textWidth, t = u && u.lineHeight, B = u && u.textOutline, f = u && "ellipsis" === u.textOverflow, J = u && "nowrap" ===
                u.whiteSpace, q = u && u.fontSize, n, l, r = A.length, u = x && !a.added && this.box, M = function (a) { var d; d = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : q || b.style.fontSize || 12; return t ? I(t) : b.fontMetrics(d, a.getAttribute("style") ? a : g).h }; n = [d, f, J, t, B, q, x].join(); if (n !== a.textCache) {
                    for (a.textCache = n; r--;) g.removeChild(A[r]); m || B || f || x || -1 !== d.indexOf(" ") ? (c = /<.*class="([^"]+)".*>/, y = /<.*style="([^"]+)".*>/, L = /<.*href="(http[^"]+)".*>/, u && u.appendChild(g), d = m ? d.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
                    '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [d], d = h(d, function (a) { return "" !== a }), z(d, function (d, m) {
                        var A, h = 0; d = d.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||"); A = d.split("|||"); z(A, function (d) {
                            if ("" !== d || 1 === A.length) {
                                var E = {}, u = e.createElementNS(b.SVG_NS, "tspan"), t, I; c.test(d) && (t = d.match(c)[1], v(u, "class", t)); y.test(d) && (I = d.match(y)[1].replace(/(;| |^)color([ :])/,
                                "$1fill$2"), v(u, "style", I)); L.test(d) && !k && (v(u, "onclick", 'location.href\x3d"' + d.match(L)[1] + '"'), w(u, { cursor: "pointer" })); d = (d.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e"); if (" " !== d) {
                                    u.appendChild(e.createTextNode(d)); h ? E.dx = 0 : m && null !== p && (E.x = p); v(u, E); g.appendChild(u); !h && l && (!R && k && w(u, { display: "block" }), v(u, "dy", M(u))); if (x) {
                                        E = d.replace(/([^\^])-/g, "$1- ").split(" "); t = 1 < A.length || m || 1 < E.length && !J; var z = [], B, q = M(u), n = a.rotation; for (f && (F = b.applyEllipsis(a,
                                        u, d, x)) ; !f && t && (E.length || z.length) ;) a.rotation = 0, B = b.getSpanWidth(a, u), d = B > x, void 0 === F && (F = d), d && 1 !== E.length ? (u.removeChild(u.firstChild), z.unshift(E.pop())) : (E = z, z = [], E.length && !J && (u = e.createElementNS(O, "tspan"), v(u, { dy: q, x: p }), I && v(u, "style", I), g.appendChild(u)), B > x && (x = B)), E.length && u.appendChild(e.createTextNode(E.join(" ").replace(/- /g, "-"))); a.rotation = n
                                    } h++
                                }
                            }
                        }); l = l || g.childNodes.length
                    }), F && a.attr("title", a.textStr), u && u.removeChild(g), B && a.applyTextOutline && a.applyTextOutline(B)) : g.appendChild(e.createTextNode(d.replace(/&lt;/g,
                    "\x3c").replace(/&gt;/g, "\x3e")))
                }
            }, getContrast: function (a) { a = r(a).rgba; return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF" }, button: function (a, g, d, k, m, c, h, L, E) {
                var A = this.label(a, g, d, E, null, null, null, null, "button"), u = 0; A.attr(y({ padding: 8, r: 2 }, m)); var p, x, t, e; m = y({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" } }, m); p = m.style; delete m.style; c = y(m, { fill: "#e6e6e6" }, c); x = c.style; delete c.style; h = y(m, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } },
                h); t = h.style; delete h.style; L = y(m, { style: { color: "#cccccc" } }, L); e = L.style; delete L.style; G(A.element, F ? "mouseover" : "mouseenter", function () { 3 !== u && A.setState(1) }); G(A.element, F ? "mouseout" : "mouseleave", function () { 3 !== u && A.setState(u) }); A.setState = function (a) { 1 !== a && (A.state = u = a); A.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]); A.attr([m, c, h, L][a || 0]).css([p, x, t, e][a || 0]) }; A.attr(m).css(b({ cursor: "default" },
                p)); return A.on("click", function (a) { 3 !== u && k.call(A, a) })
            }, crispLine: function (a, g) { a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - g % 2 / 2); a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + g % 2 / 2); return a }, path: function (a) { var g = { fill: "none" }; x(a) ? g.d = a : d(a) && b(g, a); return this.createElement("path").attr(g) }, circle: function (a, g, b) { a = d(a) ? a : { x: a, y: g, r: b }; g = this.createElement("circle"); g.xSetter = g.ySetter = function (a, g, d) { d.setAttribute("c" + g, a) }; return g.attr(a) }, arc: function (a, g, b, k, m, c) {
                d(a) ? (k = a, g = k.y, b = k.r, a = k.x) :
                k = { innerR: k, start: m, end: c }; a = this.symbol("arc", a, g, b, b, k); a.r = b; return a
            }, rect: function (a, g, b, k, m, c) { m = d(a) ? a.r : m; var h = this.createElement("rect"); a = d(a) ? a : void 0 === a ? {} : { x: a, y: g, width: Math.max(b, 0), height: Math.max(k, 0) }; void 0 !== c && (a.strokeWidth = c, a = h.crisp(a)); a.fill = "none"; m && (a.r = m); h.rSetter = function (a, g, b) { v(b, { rx: a, ry: a }) }; return h.attr(a) }, setSize: function (a, g, b) {
                var d = this.alignedObjects, k = d.length; this.width = a; this.height = g; for (this.boxWrapper.animate({ width: a, height: g }, {
                    step: function () {
                this.attr({
                    viewBox: "0 0 " +
                this.attr("width") + " " + this.attr("height")
                })
                }, duration: E(b, !0) ? void 0 : 0
                }) ; k--;) d[k].align()
            }, g: function (a) { var g = this.createElement("g"); return a ? g.attr({ "class": "highcharts-" + a }) : g }, image: function (a, g, d, k, m) { var c = { preserveAspectRatio: "none" }; 1 < arguments.length && b(c, { x: g, y: d, width: k, height: m }); c = this.createElement("image").attr(c); c.element.setAttributeNS ? c.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : c.element.setAttribute("hc-svg-href", a); return c }, symbol: function (a, g, d, k, m,
            c) {
                var h = this, A, y = this.symbols[a], L = n(g) && y && this.symbols[a](Math.round(g), Math.round(d), k, m, c), u = /^url\((.*?)\)$/, F, p; y ? (A = this.path(L), A.attr("fill", "none"), b(A, { symbolName: a, x: g, y: d, width: k, height: m }), c && b(A, c)) : u.test(a) && (F = a.match(u)[1], A = this.image(F), A.imgwidth = E(M[F] && M[F].width, c && c.width), A.imgheight = E(M[F] && M[F].height, c && c.height), p = function () { A.attr({ width: A.width, height: A.height }) }, z(["width", "height"], function (a) {
                    A[a + "Setter"] = function (a, g) {
                        var d = {}, b = this["img" + g], k = "width" === g ? "translateX" :
                        "translateY"; this[g] = a; n(b) && (this.element && this.element.setAttribute(g, b), this.alignByTranslate || (d[k] = ((this[g] || 0) - b) / 2, this.attr(d)))
                    }
                }), n(g) && A.attr({ x: g, y: d }), A.isImg = !0, n(A.imgwidth) && n(A.imgheight) ? p() : (A.attr({ width: 0, height: 0 }), q("img", {
                    onload: function () {
                        var a = l[h.chartIndex]; 0 === this.width && (w(this, { position: "absolute", top: "-999em" }), e.body.appendChild(this)); M[F] = { width: this.width, height: this.height }; A.imgwidth = this.width; A.imgheight = this.height; A.element && p(); this.parentNode && this.parentNode.removeChild(this);
                        h.imgCount--; if (!h.imgCount && a && a.onload) a.onload()
                    }, src: F
                }), this.imgCount++)); return A
            }, symbols: {
                circle: function (a, g, b, d) { return this.arc(a + b / 2, g + d / 2, b / 2, d / 2, { start: 0, end: 2 * Math.PI, open: !1 }) }, square: function (a, g, b, d) { return ["M", a, g, "L", a + b, g, a + b, g + d, a, g + d, "Z"] }, triangle: function (a, g, b, d) { return ["M", a + b / 2, g, "L", a + b, g + d, a, g + d, "Z"] }, "triangle-down": function (a, g, b, d) { return ["M", a, g, "L", a + b, g, a + b / 2, g + d, "Z"] }, diamond: function (a, g, b, d) { return ["M", a + b / 2, g, "L", a + b, g + d / 2, a + b / 2, g + d, a, g + d / 2, "Z"] }, arc: function (a,
                g, b, d, k) { var m = k.start, c = k.r || b, h = k.r || d || b, y = k.end - .001; b = k.innerR; d = k.open; var A = Math.cos(m), L = Math.sin(m), E = Math.cos(y), y = Math.sin(y); k = k.end - m < Math.PI ? 0 : 1; c = ["M", a + c * A, g + h * L, "A", c, h, 0, k, 1, a + c * E, g + h * y]; n(b) && c.push(d ? "M" : "L", a + b * E, g + b * y, "A", b, b, 0, k, 0, a + b * A, g + b * L); c.push(d ? "" : "Z"); return c }, callout: function (a, g, b, d, k) {
                    var m = Math.min(k && k.r || 0, b, d), c = m + 6, h = k && k.anchorX; k = k && k.anchorY; var y; y = ["M", a + m, g, "L", a + b - m, g, "C", a + b, g, a + b, g, a + b, g + m, "L", a + b, g + d - m, "C", a + b, g + d, a + b, g + d, a + b - m, g + d, "L", a + m, g + d, "C",
                    a, g + d, a, g + d, a, g + d - m, "L", a, g + m, "C", a, g, a, g, a + m, g]; h && h > b ? k > g + c && k < g + d - c ? y.splice(13, 3, "L", a + b, k - 6, a + b + 6, k, a + b, k + 6, a + b, g + d - m) : y.splice(13, 3, "L", a + b, d / 2, h, k, a + b, d / 2, a + b, g + d - m) : h && 0 > h ? k > g + c && k < g + d - c ? y.splice(33, 3, "L", a, k + 6, a - 6, k, a, k - 6, a, g + m) : y.splice(33, 3, "L", a, d / 2, h, k, a, d / 2, a, g + m) : k && k > d && h > a + c && h < a + b - c ? y.splice(23, 3, "L", h + 6, g + d, h, g + d + 6, h - 6, g + d, a + m, g + d) : k && 0 > k && h > a + c && h < a + b - c && y.splice(3, 3, "L", h - 6, g, h, g - 6, h + 6, g, b - m, g); return y
                }
            }, clipRect: function (g, b, d, k) {
                var m = a.uniqueKey(), c = this.createElement("clipPath").attr({ id: m }).add(this.defs);
                g = this.rect(g, b, d, k, 0).add(c); g.id = m; g.clipPath = c; g.count = 0; return g
            }, text: function (a, g, b, d) {
                var k = !R && this.forExport, m = {}; if (d && (this.allowHTML || !this.forExport)) return this.html(a, g, b); m.x = Math.round(g || 0); b && (m.y = Math.round(b)); if (a || 0 === a) m.text = a; a = this.createElement("text").attr(m); k && a.css({ position: "absolute" }); d || (a.xSetter = function (a, g, b) {
                    var d = b.getElementsByTagName("tspan"), k, m = b.getAttribute(g), c; for (c = 0; c < d.length; c++) k = d[c], k.getAttribute(g) === m && k.setAttribute(g, a); b.setAttribute(g,
                    a)
                }); return a
            }, fontMetrics: function (a, g) { a = a || g && g.style && g.style.fontSize || this.style && this.style.fontSize; a = /px/.test(a) ? I(a) : /em/.test(a) ? parseFloat(a) * (g ? this.fontMetrics(null, g.parentNode).f : 16) : 12; g = 24 > a ? a + 3 : Math.round(1.2 * a); return { h: g, b: Math.round(.8 * g), f: a } }, rotCorr: function (a, g, b) { var d = a; g && b && (d = Math.max(d * Math.cos(g * f), 4)); return { x: -a / 3 * Math.sin(g * f), y: d } }, label: function (d, k, m, c, h, L, E, u, F) {
                var A = this, p = A.g("button" !== F && "label"), x = p.text = A.text("", 0, 0, E).attr({ zIndex: 1 }), t, e, I = 0, B = 3,
                f = 0, J, R, O, q, l, w = {}, r, M, Q = /^url\((.*?)\)$/.test(c), v = Q, P, S, N, T; F && p.addClass("highcharts-" + F); v = Q; P = function () { return (r || 0) % 2 / 2 }; S = function () {
                    var a = x.element.style, g = {}; e = (void 0 === J || void 0 === R || l) && n(x.textStr) && x.getBBox(); p.width = (J || e.width || 0) + 2 * B + f; p.height = (R || e.height || 0) + 2 * B; M = B + A.fontMetrics(a && a.fontSize, x).b; v && (t || (p.box = t = A.symbols[c] || Q ? A.symbol(c) : A.rect(), t.addClass(("button" === F ? "" : "highcharts-label-box") + (F ? " highcharts-" + F + "-box" : "")), t.add(p), a = P(), g.x = a, g.y = (u ? -M : 0) + a), g.width =
                    Math.round(p.width), g.height = Math.round(p.height), t.attr(b(g, w)), w = {})
                }; N = function () { var a = f + B, g; g = u ? 0 : M; n(J) && e && ("center" === l || "right" === l) && (a += { center: .5, right: 1 }[l] * (J - e.width)); if (a !== x.x || g !== x.y) x.attr("x", a), void 0 !== g && x.attr("y", g); x.x = a; x.y = g }; T = function (a, g) { t ? t.attr(a, g) : w[a] = g }; p.onAdd = function () { x.add(p); p.attr({ text: d || 0 === d ? d : "", x: k, y: m }); t && n(h) && p.attr({ anchorX: h, anchorY: L }) }; p.widthSetter = function (g) { J = a.isNumber(g) ? g : null }; p.heightSetter = function (a) { R = a }; p["text-alignSetter"] =
                function (a) { l = a }; p.paddingSetter = function (a) { n(a) && a !== B && (B = p.padding = a, N()) }; p.paddingLeftSetter = function (a) { n(a) && a !== f && (f = a, N()) }; p.alignSetter = function (a) { a = { left: 0, center: .5, right: 1 }[a]; a !== I && (I = a, e && p.attr({ x: O })) }; p.textSetter = function (a) { void 0 !== a && x.textSetter(a); S(); N() }; p["stroke-widthSetter"] = function (a, g) { a && (v = !0); r = this["stroke-width"] = a; T(g, a) }; p.strokeSetter = p.fillSetter = p.rSetter = function (a, g) { "fill" === g && a && (v = !0); T(g, a) }; p.anchorXSetter = function (a, g) {
                    h = a; T(g, Math.round(a) -
                    P() - O)
                }; p.anchorYSetter = function (a, g) { L = a; T(g, a - q) }; p.xSetter = function (a) { p.x = a; I && (a -= I * ((J || e.width) + 2 * B)); O = Math.round(a); p.attr("translateX", O) }; p.ySetter = function (a) { q = p.y = Math.round(a); p.attr("translateY", q) }; var C = p.css; return b(p, {
                    css: function (a) { if (a) { var g = {}; a = y(a); z(p.textProps, function (b) { void 0 !== a[b] && (g[b] = a[b], delete a[b]) }); x.css(g) } return C.call(p, a) }, getBBox: function () { return { width: e.width + 2 * B, height: e.height + 2 * B, x: e.x - B, y: e.y - B } }, shadow: function (a) { a && (S(), t && t.shadow(a)); return p },
                    destroy: function () { g(p.element, "mouseenter"); g(p.element, "mouseleave"); x && (x = x.destroy()); t && (t = t.destroy()); D.prototype.destroy.call(p); p = A = S = N = T = null }
                })
            }
        }; a.Renderer = C
    })(K); (function (a) {
        var D = a.attr, C = a.createElement, G = a.css, H = a.defined, v = a.each, l = a.extend, r = a.isFirefox, w = a.isMS, q = a.isWebKit, n = a.pInt, f = a.SVGRenderer, c = a.win, e = a.wrap; l(a.SVGElement.prototype, {
            htmlCss: function (a) {
                var b = this.element; if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform(); a && "ellipsis" ===
                a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden"); this.styles = l(this.styles, a); G(this.element, a); return this
            }, htmlGetBBox: function () { var a = this.element; "text" === a.nodeName && (a.style.position = "absolute"); return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight } }, htmlUpdateTransform: function () {
                if (this.added) {
                    var a = this.renderer, b = this.element, c = this.translateX || 0, h = this.translateY || 0, e = this.x || 0, p = this.y || 0, x = this.textAlign || "left", k = { left: 0, center: .5, right: 1 }[x], F = this.styles;
                    G(b, { marginLeft: c, marginTop: h }); this.shadows && v(this.shadows, function (a) { G(a, { marginLeft: c + 1, marginTop: h + 1 }) }); this.inverted && v(b.childNodes, function (d) { a.invertChild(d, b) }); if ("SPAN" === b.tagName) {
                        var d = this.rotation, u = n(this.textWidth), m = F && F.whiteSpace, y = [d, x, b.innerHTML, this.textWidth, this.textAlign].join(); y !== this.cTT && (F = a.fontMetrics(b.style.fontSize).b, H(d) && this.setSpanRotation(d, k, F), G(b, { width: "", whiteSpace: m || "nowrap" }), b.offsetWidth > u && /[ \-]/.test(b.textContent || b.innerText) && G(b, {
                            width: u +
                            "px", display: "block", whiteSpace: m || "normal"
                        }), this.getSpanCorrection(b.offsetWidth, F, k, d, x)); G(b, { left: e + (this.xCorr || 0) + "px", top: p + (this.yCorr || 0) + "px" }); q && (F = b.offsetHeight); this.cTT = y
                    }
                } else this.alignOnAdd = !0
            }, setSpanRotation: function (a, b, t) { var h = {}, e = w ? "-ms-transform" : q ? "-webkit-transform" : r ? "MozTransform" : c.opera ? "-o-transform" : ""; h[e] = h.transform = "rotate(" + a + "deg)"; h[e + (r ? "Origin" : "-origin")] = h.transformOrigin = 100 * b + "% " + t + "px"; G(this.element, h) }, getSpanCorrection: function (a, b, c) {
                this.xCorr =
                -a * c; this.yCorr = -b
            }
        }); l(f.prototype, {
            html: function (a, b, c) {
                var h = this.createElement("span"), t = h.element, p = h.renderer, x = p.isSVG, k = function (a, b) { v(["opacity", "visibility"], function (d) { e(a, d + "Setter", function (a, d, k, c) { a.call(this, d, k, c); b[k] = d }) }) }; h.textSetter = function (a) { a !== t.innerHTML && delete this.bBox; t.innerHTML = this.textStr = a; h.htmlUpdateTransform() }; x && k(h, h.element.style); h.xSetter = h.ySetter = h.alignSetter = h.rotationSetter = function (a, b) { "align" === b && (b = "textAlign"); h[b] = a; h.htmlUpdateTransform() };
                h.attr({ text: a, x: Math.round(b), y: Math.round(c) }).css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize, position: "absolute" }); t.style.whiteSpace = "nowrap"; h.css = h.htmlCss; x && (h.add = function (a) {
                    var b, c = p.box.parentNode, m = []; if (this.parentGroup = a) {
                        if (b = a.div, !b) {
                            for (; a;) m.push(a), a = a.parentGroup; v(m.reverse(), function (a) {
                                var d, y = D(a.element, "class"); y && (y = { className: y }); b = a.div = a.div || C("div", y, {
                                    position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display,
                                    opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents
                                }, b || c); d = b.style; l(a, { on: function () { h.on.apply({ element: m[0].div }, arguments); return a }, translateXSetter: function (b, g) { d.left = b + "px"; a[g] = b; a.doTransform = !0 }, translateYSetter: function (b, g) { d.top = b + "px"; a[g] = b; a.doTransform = !0 } }); k(a, d)
                            })
                        }
                    } else b = c; b.appendChild(t); h.added = !0; h.alignOnAdd && h.htmlUpdateTransform(); return h
                }); return h
            }
        })
    })(K); (function (a) {
        var D, C, G = a.createElement, H = a.css, v = a.defined, l = a.deg2rad, r = a.discardElement, w = a.doc,
        q = a.each, n = a.erase, f = a.extend; D = a.extendClass; var c = a.isArray, e = a.isNumber, z = a.isObject, b = a.merge; C = a.noop; var t = a.pick, h = a.pInt, B = a.SVGElement, p = a.SVGRenderer, x = a.win; a.svg || (C = {
            docMode8: w && 8 === w.documentMode, init: function (a, b) {
                var d = ["\x3c", b, ' filled\x3d"f" stroked\x3d"f"'], k = ["position: ", "absolute", ";"], m = "div" === b; ("shape" === b || m) && k.push("left:0;top:0;width:1px;height:1px;"); k.push("visibility: ", m ? "hidden" : "visible"); d.push(' style\x3d"', k.join(""), '"/\x3e'); b && (d = m || "span" === b || "img" === b ?
                d.join("") : a.prepVML(d), this.element = G(d)); this.renderer = a
            }, add: function (a) { var b = this.renderer, d = this.element, k = b.box, m = a && a.inverted, k = a ? a.element || a : k; a && (this.parentGroup = a); m && b.invertChild(d, k); k.appendChild(d); this.added = !0; this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(); if (this.onAdd) this.onAdd(); this.className && this.attr("class", this.className); return this }, updateTransform: B.prototype.htmlUpdateTransform, setSpanRotation: function () {
                var a = this.rotation, b = Math.cos(a * l), d =
                Math.sin(a * l); H(this.element, { filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11\x3d", b, ", M12\x3d", -d, ", M21\x3d", d, ", M22\x3d", b, ", sizingMethod\x3d'auto expand')"].join("") : "none" })
            }, getSpanCorrection: function (a, b, d, c, m) {
                var k = c ? Math.cos(c * l) : 1, h = c ? Math.sin(c * l) : 0, p = t(this.elemHeight, this.element.offsetHeight), u; this.xCorr = 0 > k && -a; this.yCorr = 0 > h && -p; u = 0 > k * h; this.xCorr += h * b * (u ? 1 - d : d); this.yCorr -= k * b * (c ? u ? d : 1 - d : 1); m && "left" !== m && (this.xCorr -= a * d * (0 > k ? -1 : 1), c && (this.yCorr -= p * d * (0 > h ? -1 : 1)), H(this.element,
                { textAlign: m }))
            }, pathToVML: function (a) { for (var b = a.length, d = []; b--;) e(a[b]) ? d[b] = Math.round(10 * a[b]) - 5 : "Z" === a[b] ? d[b] = "x" : (d[b] = a[b], !a.isArc || "wa" !== a[b] && "at" !== a[b] || (d[b + 5] === d[b + 7] && (d[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), d[b + 6] === d[b + 8] && (d[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1))); return d.join(" ") || "x" }, clip: function (a) { var b = this, d; a ? (d = a.members, n(d, b), d.push(b), b.destroyClip = function () { n(d, b) }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = { clip: b.docMode8 ? "inherit" : "rect(auto)" }); return b.css(a) }, css: B.prototype.htmlCss,
            safeRemoveChild: function (a) { a.parentNode && r(a) }, destroy: function () { this.destroyClip && this.destroyClip(); return B.prototype.destroy.apply(this) }, on: function (a, b) { this.element["on" + a] = function () { var a = x.event; a.target = a.srcElement; b(a) }; return this }, cutOffPath: function (a, b) { var d; a = a.split(/[ ,]/); d = a.length; if (9 === d || 11 === d) a[d - 4] = a[d - 2] = h(a[d - 2]) - 10 * b; return a.join(" ") }, shadow: function (a, b, d) {
                var c = [], k, y = this.element, p = this.renderer, E, x = y.style, g, L = y.path, e, F, B, f; L && "string" !== typeof L.value && (L =
                "x"); F = L; if (a) {
                    B = t(a.width, 3); f = (a.opacity || .15) / B; for (k = 1; 3 >= k; k++) e = 2 * B + 1 - 2 * k, d && (F = this.cutOffPath(L.value, e + .5)), g = ['\x3cshape isShadow\x3d"true" strokeweight\x3d"', e, '" filled\x3d"false" path\x3d"', F, '" coordsize\x3d"10 10" style\x3d"', y.style.cssText, '" /\x3e'], E = G(p.prepVML(g), null, { left: h(x.left) + t(a.offsetX, 1), top: h(x.top) + t(a.offsetY, 1) }), d && (E.cutOff = e + 1), g = ['\x3cstroke color\x3d"', a.color || "#000000", '" opacity\x3d"', f * k, '"/\x3e'], G(p.prepVML(g), null, null, E), b ? b.element.appendChild(E) :
                    y.parentNode.insertBefore(E, y), c.push(E); this.shadows = c
                } return this
            }, updateShadows: C, setAttr: function (a, b) { this.docMode8 ? this.element[a] = b : this.element.setAttribute(a, b) }, classSetter: function (a) { (this.added ? this.element : this).className = a }, dashstyleSetter: function (a, b, d) { (d.getElementsByTagName("stroke")[0] || G(this.renderer.prepVML(["\x3cstroke/\x3e"]), null, null, d))[b] = a || "solid"; this[b] = a }, dSetter: function (a, b, d) {
                var c = this.shadows; a = a || []; this.d = a.join && a.join(" "); d.path = a = this.pathToVML(a); if (c) for (d =
                c.length; d--;) c[d].path = c[d].cutOff ? this.cutOffPath(a, c[d].cutOff) : a; this.setAttr(b, a)
            }, fillSetter: function (a, b, d) { var c = d.nodeName; "SPAN" === c ? d.style.color = a : "IMG" !== c && (d.filled = "none" !== a, this.setAttr("fillcolor", this.renderer.color(a, d, b, this))) }, "fill-opacitySetter": function (a, b, d) { G(this.renderer.prepVML(["\x3c", b.split("-")[0], ' opacity\x3d"', a, '"/\x3e']), null, null, d) }, opacitySetter: C, rotationSetter: function (a, b, d) {
                d = d.style; this[b] = d[b] = a; d.left = -Math.round(Math.sin(a * l) + 1) + "px"; d.top = Math.round(Math.cos(a *
                l)) + "px"
            }, strokeSetter: function (a, b, d) { this.setAttr("strokecolor", this.renderer.color(a, d, b, this)) }, "stroke-widthSetter": function (a, b, d) { d.stroked = !!a; this[b] = a; e(a) && (a += "px"); this.setAttr("strokeweight", a) }, titleSetter: function (a, b) { this.setAttr(b, a) }, visibilitySetter: function (a, b, d) { "inherit" === a && (a = "visible"); this.shadows && q(this.shadows, function (d) { d.style[b] = a }); "DIV" === d.nodeName && (a = "hidden" === a ? "-999em" : 0, this.docMode8 || (d.style[b] = a ? "visible" : "hidden"), b = "top"); d.style[b] = a }, xSetter: function (a,
            b, d) { this[b] = a; "x" === b ? b = "left" : "y" === b && (b = "top"); this.updateClipping ? (this[b] = a, this.updateClipping()) : d.style[b] = a }, zIndexSetter: function (a, b, d) { d.style[b] = a }
        }, C["stroke-opacitySetter"] = C["fill-opacitySetter"], a.VMLElement = C = D(B, C), C.prototype.ySetter = C.prototype.widthSetter = C.prototype.heightSetter = C.prototype.xSetter, C = {
            Element: C, isIE8: -1 < x.navigator.userAgent.indexOf("MSIE 8.0"), init: function (a, b, d) {
                var c, m; this.alignedObjects = []; c = this.createElement("div").css({ position: "relative" }); m = c.element;
                a.appendChild(c.element); this.isVML = !0; this.box = m; this.boxWrapper = c; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(b, d, !1); if (!w.namespaces.hcv) { w.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"); try { w.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } " } catch (y) { w.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } " } }
            },
            isHidden: function () { return !this.box.offsetWidth }, clipRect: function (a, b, d, c) {
                var m = this.createElement(), k = z(a); return f(m, {
                    members: [], count: 0, left: (k ? a.x : a) + 1, top: (k ? a.y : b) + 1, width: (k ? a.width : d) - 1, height: (k ? a.height : c) - 1, getCSS: function (a) {
                        var b = a.element, d = b.nodeName, g = a.inverted, c = this.top - ("shape" === d ? b.offsetTop : 0), m = this.left, b = m + this.width, k = c + this.height, c = { clip: "rect(" + Math.round(g ? m : c) + "px," + Math.round(g ? k : b) + "px," + Math.round(g ? b : k) + "px," + Math.round(g ? c : m) + "px)" }; !g && a.docMode8 && "DIV" === d &&
                        f(c, { width: b + "px", height: k + "px" }); return c
                    }, updateClipping: function () { q(m.members, function (a) { a.element && a.css(m.getCSS(a)) }) }
                })
            }, color: function (b, c, d, h) {
                var m = this, k, p = /^rgba/, E, x, g = "none"; b && b.linearGradient ? x = "gradient" : b && b.radialGradient && (x = "pattern"); if (x) {
                    var L, u, t = b.linearGradient || b.radialGradient, e, B, A, F, f, z = ""; b = b.stops; var n, l = [], w = function () {
                        E = ['\x3cfill colors\x3d"' + l.join(",") + '" opacity\x3d"', A, '" o:opacity2\x3d"', B, '" type\x3d"', x, '" ', z, 'focus\x3d"100%" method\x3d"any" /\x3e'];
                        G(m.prepVML(E), null, null, c)
                    }; e = b[0]; n = b[b.length - 1]; 0 < e[0] && b.unshift([0, e[1]]); 1 > n[0] && b.push([1, n[1]]); q(b, function (g, b) { p.test(g[1]) ? (k = a.color(g[1]), L = k.get("rgb"), u = k.get("a")) : (L = g[1], u = 1); l.push(100 * g[0] + "% " + L); b ? (A = u, F = L) : (B = u, f = L) }); if ("fill" === d) if ("gradient" === x) d = t.x1 || t[0] || 0, b = t.y1 || t[1] || 0, e = t.x2 || t[2] || 0, t = t.y2 || t[3] || 0, z = 'angle\x3d"' + (90 - 180 * Math.atan((t - b) / (e - d)) / Math.PI) + '"', w(); else {
                        var g = t.r, r = 2 * g, v = 2 * g, C = t.cx, D = t.cy, H = c.radialReference, K, g = function () {
                            H && (K = h.getBBox(), C += (H[0] -
                            K.x) / K.width - .5, D += (H[1] - K.y) / K.height - .5, r *= H[2] / K.width, v *= H[2] / K.height); z = 'src\x3d"' + a.getOptions().global.VMLRadialGradientURL + '" size\x3d"' + r + "," + v + '" origin\x3d"0.5,0.5" position\x3d"' + C + "," + D + '" color2\x3d"' + f + '" '; w()
                        }; h.added ? g() : h.onAdd = g; g = F
                    } else g = L
                } else p.test(b) && "IMG" !== c.tagName ? (k = a.color(b), h[d + "-opacitySetter"](k.get("a"), d, c), g = k.get("rgb")) : (g = c.getElementsByTagName(d), g.length && (g[0].opacity = 1, g[0].type = "solid"), g = b); return g
            }, prepVML: function (a) {
                var b = this.isIE8; a = a.join("");
                b ? (a = a.replace("/\x3e", ' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'), a = -1 === a.indexOf('style\x3d"') ? a.replace("/\x3e", ' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e') : a.replace('style\x3d"', 'style\x3d"display:inline-block;behavior:url(#default#VML);')) : a = a.replace("\x3c", "\x3chcv:"); return a
            }, text: p.prototype.html, path: function (a) { var b = { coordsize: "10 10" }; c(a) ? b.d = a : z(a) && f(b, a); return this.createElement("shape").attr(b) }, circle: function (a, b, d) {
                var c = this.symbol("circle");
                z(a) && (d = a.r, b = a.y, a = a.x); c.isCircle = !0; c.r = d; return c.attr({ x: a, y: b })
            }, g: function (a) { var b; a && (b = { className: "highcharts-" + a, "class": "highcharts-" + a }); return this.createElement("div").attr(b) }, image: function (a, b, d, c, m) { var h = this.createElement("img").attr({ src: a }); 1 < arguments.length && h.attr({ x: b, y: d, width: c, height: m }); return h }, createElement: function (a) { return "rect" === a ? this.symbol(a) : p.prototype.createElement.call(this, a) }, invertChild: function (a, b) {
                var d = this; b = b.style; var c = "IMG" === a.tagName && a.style;
                H(a, { flip: "x", left: h(b.width) - (c ? h(c.top) : 1), top: h(b.height) - (c ? h(c.left) : 1), rotation: -90 }); q(a.childNodes, function (b) { d.invertChild(b, a) })
            }, symbols: {
                arc: function (a, b, d, c, m) { var h = m.start, k = m.end, p = m.r || d || c; d = m.innerR; c = Math.cos(h); var x = Math.sin(h), g = Math.cos(k), L = Math.sin(k); if (0 === k - h) return ["x"]; h = ["wa", a - p, b - p, a + p, b + p, a + p * c, b + p * x, a + p * g, b + p * L]; m.open && !d && h.push("e", "M", a, b); h.push("at", a - d, b - d, a + d, b + d, a + d * g, b + d * L, a + d * c, b + d * x, "x", "e"); h.isArc = !0; return h }, circle: function (a, b, d, c, m) {
                    m && v(m.r) &&
                    (d = c = 2 * m.r); m && m.isCircle && (a -= d / 2, b -= c / 2); return ["wa", a, b, a + d, b + c, a + d, b + c / 2, a + d, b + c / 2, "e"]
                }, rect: function (a, b, d, c, m) { return p.prototype.symbols[v(m) && m.r ? "callout" : "square"].call(0, a, b, d, c, m) }
            }
        }, a.VMLRenderer = D = function () { this.init.apply(this, arguments) }, D.prototype = b(p.prototype, C), a.Renderer = D); p.prototype.measureSpanWidth = function (a, b) { var d = w.createElement("span"); a = w.createTextNode(a); d.appendChild(a); H(d, b); this.box.appendChild(d); b = d.offsetWidth; r(d); return b }
    })(K); (function (a) {
        function D() {
            var q =
            a.defaultOptions.global, n = w.moment; if (q.timezone) { if (n) return function (a) { return -n.tz(a, q.timezone).utcOffset() }; a.error(25) } return q.useUTC && q.getTimezoneOffset
        } function C() {
            var q = a.defaultOptions.global, n, f = q.useUTC, c = f ? "getUTC" : "get", e = f ? "setUTC" : "set"; a.Date = n = q.Date || w.Date; n.hcTimezoneOffset = f && q.timezoneOffset; n.hcGetTimezoneOffset = D(); n.hcMakeTime = function (a, b, c, h, e, p) { var x; f ? (x = n.UTC.apply(0, arguments), x += v(x)) : x = (new n(a, b, r(c, 1), r(h, 0), r(e, 0), r(p, 0))).getTime(); return x }; H("Minutes Hours Day Date Month FullYear".split(" "),
            function (a) { n["hcGet" + a] = c + a }); H("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function (a) { n["hcSet" + a] = e + a })
        } var G = a.color, H = a.each, v = a.getTZOffset, l = a.merge, r = a.pick, w = a.win; a.defaultOptions = {
            colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
                loading: "Loading...", months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "
            }, global: { useUTC: !0, VMLRadialGradientURL: "http://code.highcharts.com/5.0.10/gfx/vml-radial-gradient.png" }, chart: {
                borderRadius: 0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: {
                    theme: { zIndex: 20 },
                    position: { align: "right", x: -10, y: 10 }
                }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
            }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                enabled: !0, align: "center", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" },
                itemStyle: { color: "#333333", fontSize: "12px", fontWeight: "bold" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
            }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: {
                enabled: !0, animation: a.svg, borderRadius: 3,
                dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", padding: 8, snap: a.isTouchDevice ? 25 : 10, backgroundColor: G("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e', pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
                shadow: !0, style: { color: "#333333", cursor: "default", fontSize: "12px", pointerEvents: "none", whiteSpace: "nowrap" }
            }, credits: { enabled: !0, href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" }
        }; a.setOptions = function (q) { a.defaultOptions = l(!0, a.defaultOptions, q); C(); return a.defaultOptions }; a.getOptions = function () { return a.defaultOptions }; a.defaultPlotOptions = a.defaultOptions.plotOptions; C()
    })(K);
    (function (a) {
        var D = a.arrayMax, C = a.arrayMin, G = a.defined, H = a.destroyObjectProperties, v = a.each, l = a.erase, r = a.merge, w = a.pick; a.PlotLineOrBand = function (a, n) { this.axis = a; n && (this.options = n, this.id = n.id) }; a.PlotLineOrBand.prototype = {
            render: function () {
                var a = this, n = a.axis, f = n.horiz, c = a.options, e = c.label, z = a.label, b = c.to, t = c.from, h = c.value, B = G(t) && G(b), p = G(h), x = a.svgElem, k = !x, F = [], d, u = c.color, m = w(c.zIndex, 0), y = c.events, F = { "class": "highcharts-plot-" + (B ? "band " : "line ") + (c.className || "") }, J = {}, E = n.chart.renderer,
                I = B ? "bands" : "lines", g = n.log2lin; n.isLog && (t = g(t), b = g(b), h = g(h)); p ? (F = { stroke: u, "stroke-width": c.width }, c.dashStyle && (F.dashstyle = c.dashStyle)) : B && (u && (F.fill = u), c.borderWidth && (F.stroke = c.borderColor, F["stroke-width"] = c.borderWidth)); J.zIndex = m; I += "-" + m; (u = n.plotLinesAndBandsGroups[I]) || (n.plotLinesAndBandsGroups[I] = u = E.g("plot-" + I).attr(J).add()); k && (a.svgElem = x = E.path().attr(F).add(u)); if (p) F = n.getPlotLinePath(h, x.strokeWidth()); else if (B) F = n.getPlotBandPath(t, b, c); else return; if (k && F && F.length) {
                    if (x.attr({ d: F }),
                    y) for (d in c = function (g) { x.on(g, function (b) { y[g].apply(a, [b]) }) }, y) c(d)
                } else x && (F ? (x.show(), x.animate({ d: F })) : (x.hide(), z && (a.label = z = z.destroy()))); e && G(e.text) && F && F.length && 0 < n.width && 0 < n.height && !F.flat ? (e = r({ align: f && B && "center", x: f ? !B && 4 : 10, verticalAlign: !f && B && "middle", y: f ? B ? 16 : 10 : B ? 6 : -4, rotation: f && !B && 90 }, e), this.renderLabel(e, F, B, m)) : z && z.hide(); return a
            }, renderLabel: function (a, n, f, c) {
                var e = this.label, z = this.axis.chart.renderer; e || (e = {
                    align: a.textAlign || a.align, rotation: a.rotation, "class": "highcharts-plot-" +
                    (f ? "band" : "line") + "-label " + (a.className || "")
                }, e.zIndex = c, this.label = e = z.text(a.text, 0, 0, a.useHTML).attr(e).add(), e.css(a.style)); c = [n[1], n[4], f ? n[6] : n[1]]; n = [n[2], n[5], f ? n[7] : n[2]]; f = C(c); z = C(n); e.align(a, !1, { x: f, y: z, width: D(c) - f, height: D(n) - z }); e.show()
            }, destroy: function () { l(this.axis.plotLinesAndBands, this); delete this.axis; H(this) }
        }; a.AxisPlotLineOrBandExtension = {
            getPlotBandPath: function (a, n) {
                var f = this.getPlotLinePath(n, null, null, !0), c = this.getPlotLinePath(a, null, null, !0), e = this.horiz, z = 1; a =
                a < this.min && n < this.min || a > this.max && n > this.max; c && f ? (a && (c.flat = c.toString() === f.toString(), z = 0), c.push(e && f[4] === c[4] ? f[4] + z : f[4], e || f[5] !== c[5] ? f[5] : f[5] + z, e && f[1] === c[1] ? f[1] + z : f[1], e || f[2] !== c[2] ? f[2] : f[2] + z)) : c = null; return c
            }, addPlotBand: function (a) { return this.addPlotBandOrLine(a, "plotBands") }, addPlotLine: function (a) { return this.addPlotBandOrLine(a, "plotLines") }, addPlotBandOrLine: function (l, n) {
                var f = (new a.PlotLineOrBand(this, l)).render(), c = this.userOptions; f && (n && (c[n] = c[n] || [], c[n].push(l)),
                this.plotLinesAndBands.push(f)); return f
            }, removePlotBandOrLine: function (a) { for (var n = this.plotLinesAndBands, f = this.options, c = this.userOptions, e = n.length; e--;) n[e].id === a && n[e].destroy(); v([f.plotLines || [], c.plotLines || [], f.plotBands || [], c.plotBands || []], function (c) { for (e = c.length; e--;) c[e].id === a && l(c, c[e]) }) }
        }
    })(K); (function (a) {
        var D = a.correctFloat, C = a.defined, G = a.destroyObjectProperties, H = a.isNumber, v = a.merge, l = a.pick, r = a.deg2rad; a.Tick = function (a, l, n, f) {
            this.axis = a; this.pos = l; this.type = n || ""; this.isNew =
            !0; n || f || this.addLabel()
        }; a.Tick.prototype = {
            addLabel: function () {
                var a = this.axis, q = a.options, n = a.chart, f = a.categories, c = a.names, e = this.pos, z = q.labels, b = a.tickPositions, t = e === b[0], h = e === b[b.length - 1], c = f ? l(f[e], c[e], e) : e, f = this.label, b = b.info, B; a.isDatetimeAxis && b && (B = q.dateTimeLabelFormats[b.higherRanks[e] || b.unitName]); this.isFirst = t; this.isLast = h; q = a.labelFormatter.call({ axis: a, chart: n, isFirst: t, isLast: h, dateTimeLabelFormat: B, value: a.isLog ? D(a.lin2log(c)) : c }); C(f) ? f && f.attr({ text: q }) : (this.labelLength =
                (this.label = f = C(q) && z.enabled ? n.renderer.text(q, 0, 0, z.useHTML).css(v(z.style)).add(a.labelGroup) : null) && f.getBBox().width, this.rotation = 0)
            }, getLabelSize: function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }, handleOverflow: function (a) {
                var q = this.axis, n = a.x, f = q.chart.chartWidth, c = q.chart.spacing, e = l(q.labelLeft, Math.min(q.pos, c[3])), c = l(q.labelRight, Math.max(q.pos + q.len, f - c[1])), z = this.label, b = this.rotation, t = { left: 0, center: .5, right: 1 }[q.labelAlign], h = z.getBBox().width,
                B = q.getSlotWidth(), p = B, x = 1, k, F = {}; if (b) 0 > b && n - t * h < e ? k = Math.round(n / Math.cos(b * r) - e) : 0 < b && n + t * h > c && (k = Math.round((f - n) / Math.cos(b * r))); else if (f = n + (1 - t) * h, n - t * h < e ? p = a.x + p * (1 - t) - e : f > c && (p = c - a.x + p * t, x = -1), p = Math.min(B, p), p < B && "center" === q.labelAlign && (a.x += x * (B - p - t * (B - Math.min(h, p)))), h > p || q.autoRotation && (z.styles || {}).width) k = p; k && (F.width = k, (q.options.labels.style || {}).textOverflow || (F.textOverflow = "ellipsis"), z.css(F))
            }, getPosition: function (a, l, n, f) {
                var c = this.axis, e = c.chart, z = f && e.oldChartHeight ||
                e.chartHeight; return { x: a ? c.translate(l + n, null, null, f) + c.transB : c.left + c.offset + (c.opposite ? (f && e.oldChartWidth || e.chartWidth) - c.right - c.left : 0), y: a ? z - c.bottom + c.offset - (c.opposite ? c.height : 0) : z - c.translate(l + n, null, null, f) - c.transB }
            }, getLabelPosition: function (a, l, n, f, c, e, z, b) {
                var t = this.axis, h = t.transA, B = t.reversed, p = t.staggerLines, x = t.tickRotCorr || { x: 0, y: 0 }, k = c.y; C(k) || (k = 0 === t.side ? n.rotation ? -8 : -n.getBBox().height : 2 === t.side ? x.y + 8 : Math.cos(n.rotation * r) * (x.y - n.getBBox(!1, 0).height / 2)); a = a + c.x +
                x.x - (e && f ? e * h * (B ? -1 : 1) : 0); l = l + k - (e && !f ? e * h * (B ? 1 : -1) : 0); p && (n = z / (b || 1) % p, t.opposite && (n = p - n - 1), l += t.labelOffset / p * n); return { x: a, y: Math.round(l) }
            }, getMarkPath: function (a, l, n, f, c, e) { return e.crispLine(["M", a, l, "L", a + (c ? 0 : -n), l + (c ? n : 0)], f) }, renderGridLine: function (a, l, n) {
                var f = this.axis, c = f.options, e = this.gridLine, z = {}, b = this.pos, t = this.type, h = f.tickmarkOffset, B = f.chart.renderer, p = t ? t + "Grid" : "grid", x = c[p + "LineWidth"], k = c[p + "LineColor"], c = c[p + "LineDashStyle"]; e || (z.stroke = k, z["stroke-width"] = x, c && (z.dashstyle =
                c), t || (z.zIndex = 1), a && (z.opacity = 0), this.gridLine = e = B.path().attr(z).addClass("highcharts-" + (t ? t + "-" : "") + "grid-line").add(f.gridGroup)); if (!a && e && (a = f.getPlotLinePath(b + h, e.strokeWidth() * n, a, !0))) e[this.isNew ? "attr" : "animate"]({ d: a, opacity: l })
            }, renderMark: function (a, q, n) {
                var f = this.axis, c = f.options, e = f.chart.renderer, z = this.type, b = z ? z + "Tick" : "tick", t = f.tickSize(b), h = this.mark, B = !h, p = a.x; a = a.y; var x = l(c[b + "Width"], !z && f.isXAxis ? 1 : 0), c = c[b + "Color"]; t && (f.opposite && (t[0] = -t[0]), B && (this.mark = h = e.path().addClass("highcharts-" +
                (z ? z + "-" : "") + "tick").add(f.axisGroup), h.attr({ stroke: c, "stroke-width": x })), h[B ? "attr" : "animate"]({ d: this.getMarkPath(p, a, t[0], h.strokeWidth() * n, f.horiz, e), opacity: q }))
            }, renderLabel: function (a, q, n, f) {
                var c = this.axis, e = c.horiz, z = c.options, b = this.label, t = z.labels, h = t.step, B = c.tickmarkOffset, p = !0, x = a.x; a = a.y; b && H(x) && (b.xy = a = this.getLabelPosition(x, a, b, e, t, B, f, h), this.isFirst && !this.isLast && !l(z.showFirstLabel, 1) || this.isLast && !this.isFirst && !l(z.showLastLabel, 1) ? p = !1 : !e || c.isRadial || t.step || t.rotation ||
                q || 0 === n || this.handleOverflow(a), h && f % h && (p = !1), p && H(a.y) ? (a.opacity = n, b[this.isNew ? "attr" : "animate"](a)) : b.attr("y", -9999), this.isNew = !1)
            }, render: function (a, q, n) { var f = this.axis, c = f.horiz, e = this.getPosition(c, this.pos, f.tickmarkOffset, q), z = e.x, b = e.y, f = c && z === f.pos + f.len || !c && b === f.pos ? -1 : 1; n = l(n, 1); this.isActive = !0; this.renderGridLine(q, n, f); this.renderMark(e, n, f); this.renderLabel(e, q, n, a) }, destroy: function () { G(this, this.axis) }
        }
    })(K); (function (a) {
        var D = a.addEvent, C = a.animObject, G = a.arrayMax, H = a.arrayMin,
        v = a.AxisPlotLineOrBandExtension, l = a.color, r = a.correctFloat, w = a.defaultOptions, q = a.defined, n = a.deg2rad, f = a.destroyObjectProperties, c = a.each, e = a.extend, z = a.fireEvent, b = a.format, t = a.getMagnitude, h = a.grep, B = a.inArray, p = a.isArray, x = a.isNumber, k = a.isString, F = a.merge, d = a.normalizeTickInterval, u = a.pick, m = a.PlotLineOrBand, y = a.removeEvent, J = a.splat, E = a.syncTimeout, I = a.Tick; a.Axis = function () { this.init.apply(this, arguments) }; a.Axis.prototype = {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L", second: "%H:%M:%S",
                    minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"
                }, endOnTick: !1, labels: { enabled: !0, style: { color: "#666666", cursor: "default", fontSize: "11px" }, x: 0 }, minPadding: .01, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: { align: "middle", style: { color: "#666666" } }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999",
                lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb"
            }, defaultYAxisOptions: { endOnTick: !0, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, maxPadding: .05, minPadding: .05, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { enabled: !1, formatter: function () { return a.numberFormat(this.total, -1) }, style: { fontSize: "11px", fontWeight: "bold", color: "#000000", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } },
            defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, init: function (a, b) {
                var g = b.isX; this.chart = a; this.horiz = a.inverted ? !g : g; this.isXAxis = g; this.coll = this.coll || (g ? "xAxis" : "yAxis"); this.opposite = b.opposite; this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(b); var d = this.options, c = d.type; this.labelFormatter = d.labels.formatter ||
                this.defaultLabelFormatter; this.userOptions = b; this.minPixelPadding = 0; this.reversed = d.reversed; this.visible = !1 !== d.visible; this.zoomEnabled = !1 !== d.zoomEnabled; this.hasNames = "category" === c || !0 === d.categories; this.categories = d.categories || this.hasNames; this.names = this.names || []; this.plotLinesAndBandsGroups = {}; this.isLog = "logarithmic" === c; this.isDatetimeAxis = "datetime" === c; this.positiveValuesOnly = this.isLog && !this.allowNegativeLog; this.isLinked = q(d.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks =
                {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = d.minRange || d.maxZoom; this.range = d.range; this.offset = d.offset || 0; this.stacks = {}; this.oldStacks = {}; this.stacksTouched = 0; this.min = this.max = null; this.crosshair = u(d.crosshair, J(a.options.tooltip.crosshairs)[g ? 0 : 1], !1); var m; b = this.options.events; -1 === B(this, a.axes) && (g ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this)); this.series = this.series || []; a.inverted && g && void 0 === this.reversed &&
                (this.reversed = !0); this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine; for (m in b) D(this, m, b[m]); this.lin2log = d.linearToLogConverter || this.lin2log; this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
            }, setOptions: function (a) { this.options = F(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], F(w[this.coll], a)) }, defaultLabelFormatter: function () {
                var g =
                this.axis, d = this.value, c = g.categories, m = this.dateTimeLabelFormat, h = w.lang, k = h.numericSymbols, h = h.numericSymbolMagnitude || 1E3, p = k && k.length, y, E = g.options.labels.format, g = g.isLog ? Math.abs(d) : g.tickInterval; if (E) y = b(E, this); else if (c) y = d; else if (m) y = a.dateFormat(m, d); else if (p && 1E3 <= g) for (; p-- && void 0 === y;) c = Math.pow(h, p + 1), g >= c && 0 === 10 * d % c && null !== k[p] && 0 !== d && (y = a.numberFormat(d / c, -1) + k[p]); void 0 === y && (y = 1E4 <= Math.abs(d) ? a.numberFormat(d, -1) : a.numberFormat(d, -1, void 0, "")); return y
            }, getSeriesExtremes: function () {
                var a =
                this, b = a.chart; a.hasVisibleSeries = !1; a.dataMin = a.dataMax = a.threshold = null; a.softThreshold = !a.isXAxis; a.buildStacks && a.buildStacks(); c(a.series, function (g) {
                    if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                        var d = g.options, c = d.threshold, m; a.hasVisibleSeries = !0; a.positiveValuesOnly && 0 >= c && (c = null); if (a.isXAxis) d = g.xData, d.length && (g = H(d), x(g) || g instanceof Date || (d = h(d, function (a) { return x(a) }), g = H(d)), a.dataMin = Math.min(u(a.dataMin, d[0]), g), a.dataMax = Math.max(u(a.dataMax, d[0]), G(d))); else if (g.getExtremes(),
                        m = g.dataMax, g = g.dataMin, q(g) && q(m) && (a.dataMin = Math.min(u(a.dataMin, g), g), a.dataMax = Math.max(u(a.dataMax, m), m)), q(c) && (a.threshold = c), !d.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                    }
                })
            }, translate: function (a, b, d, c, m, h) {
                var g = this.linkedParent || this, k = 1, p = 0, y = c ? g.oldTransA : g.transA; c = c ? g.oldMin : g.min; var L = g.minPixelPadding; m = (g.isOrdinal || g.isBroken || g.isLog && m) && g.lin2val; y || (y = g.transA); d && (k *= -1, p = g.len); g.reversed && (k *= -1, p -= k * (g.sector || g.len)); b ? (a = (a * k + p - L) / y + c, m && (a = g.lin2val(a))) :
                (m && (a = g.val2lin(a)), a = k * (a - c) * y + p + k * L + (x(h) ? y * h : 0)); return a
            }, toPixels: function (a, b) { return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos) }, toValue: function (a, b) { return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0) }, getPlotLinePath: function (a, b, d, c, m) {
                var g = this.chart, h = this.left, k = this.top, y, p, L = d && g.oldChartHeight || g.chartHeight, E = d && g.oldChartWidth || g.chartWidth, t; y = this.transB; var e = function (a, b, g) { if (a < b || a > g) c ? a = Math.min(Math.max(b, a), g) : t = !0; return a }; m = u(m, this.translate(a,
                null, null, d)); a = d = Math.round(m + y); y = p = Math.round(L - m - y); x(m) ? this.horiz ? (y = k, p = L - this.bottom, a = d = e(a, h, h + this.width)) : (a = h, d = E - this.right, y = p = e(y, k, k + this.height)) : t = !0; return t && !c ? null : g.renderer.crispLine(["M", a, y, "L", d, p], b || 1)
            }, getLinearTickPositions: function (a, b, d) { var g, c = r(Math.floor(b / a) * a); d = r(Math.ceil(d / a) * a); var m = []; if (this.single) return [b]; for (b = c; b <= d;) { m.push(b); b = r(b + a); if (b === g) break; g = b } return m }, getMinorTickPositions: function () {
                var a = this, b = a.options, d = a.tickPositions, m = a.minorTickInterval,
                h = [], k = a.pointRangePadding || 0, y = a.min - k, k = a.max + k, p = k - y; if (p && p / m < a.len / 3) if (a.isLog) c(this.paddedTicks, function (b, g, d) { g && h.push.apply(h, a.getLogTickPositions(m, d[g - 1], d[g], !0)) }); else if (a.isDatetimeAxis && "auto" === b.minorTickInterval) h = h.concat(a.getTimeTicks(a.normalizeTimeTickInterval(m), y, k, b.startOfWeek)); else for (b = y + (d[0] - y) % m; b <= k && b !== h[0]; b += m) h.push(b); 0 !== h.length && a.trimTicks(h); return h
            }, adjustForMinRange: function () {
                var a = this.options, b = this.min, d = this.max, m, h = this.dataMax - this.dataMin >=
                this.minRange, k, y, p, E, x, t; this.isXAxis && void 0 === this.minRange && !this.isLog && (q(a.min) || q(a.max) ? this.minRange = null : (c(this.series, function (a) { E = a.xData; for (y = x = a.xIncrement ? 1 : E.length - 1; 0 < y; y--) if (p = E[y] - E[y - 1], void 0 === k || p < k) k = p }), this.minRange = Math.min(5 * k, this.dataMax - this.dataMin))); d - b < this.minRange && (t = this.minRange, m = (t - d + b) / 2, m = [b - m, u(a.min, b - m)], h && (m[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = G(m), d = [b + t, u(a.max, b + t)], h && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax),
                d = H(d), d - b < t && (m[0] = d - t, m[1] = u(a.min, d - t), b = G(m))); this.min = b; this.max = d
            }, getClosest: function () { var a; this.categories ? a = 1 : c(this.series, function (b) { var g = b.closestPointRange, d = b.visible || !b.chart.options.chart.ignoreHiddenSeries; !b.noSharedTooltip && q(g) && d && (a = q(a) ? Math.min(a, g) : g) }); return a }, nameToX: function (a) {
                var b = p(this.categories), g = b ? this.categories : this.names, d = a.options.x, c; a.series.requireSorting = !1; q(d) || (d = !1 === this.options.uniqueNames ? a.series.autoIncrement() : B(a.name, g)); -1 === d ? b ||
                (c = g.length) : c = d; void 0 !== c && (this.names[c] = a.name); return c
            }, updateNames: function () { var a = this; 0 < this.names.length && (this.names.length = 0, this.minRange = void 0, c(this.series || [], function (b) { b.xIncrement = null; if (!b.points || b.isDirtyData) b.processData(), b.generatePoints(); c(b.points, function (g, d) { var c; g.options && (c = a.nameToX(g), void 0 !== c && c !== g.x && (g.x = c, b.xData[d] = c)) }) })) }, setAxisTranslation: function (a) {
                var b = this, g = b.max - b.min, d = b.axisPointRange || 0, m, h = 0, y = 0, p = b.linkedParent, E = !!b.categories, x =
                b.transA, t = b.isXAxis; if (t || E || d) m = b.getClosest(), p ? (h = p.minPointOffset, y = p.pointRangePadding) : c(b.series, function (a) { var g = E ? 1 : t ? u(a.options.pointRange, m, 0) : b.axisPointRange || 0; a = a.options.pointPlacement; d = Math.max(d, g); b.single || (h = Math.max(h, k(a) ? 0 : g / 2), y = Math.max(y, "on" === a ? 0 : g)) }), p = b.ordinalSlope && m ? b.ordinalSlope / m : 1, b.minPointOffset = h *= p, b.pointRangePadding = y *= p, b.pointRange = Math.min(d, g), t && (b.closestPointRange = m); a && (b.oldTransA = x); b.translationSlope = b.transA = x = b.options.staticScale || b.len /
                (g + y || 1); b.transB = b.horiz ? b.left : b.bottom; b.minPixelPadding = x * h
            }, minFromRange: function () { return this.max - this.range }, setTickInterval: function (b) {
                var g = this, m = g.chart, h = g.options, k = g.isLog, y = g.log2lin, p = g.isDatetimeAxis, E = g.isXAxis, e = g.isLinked, I = h.maxPadding, B = h.minPadding, f = h.tickInterval, F = h.tickPixelInterval, J = g.categories, l = g.threshold, n = g.softThreshold, w, v, C, D; p || J || e || this.getTickAmount(); C = u(g.userMin, h.min); D = u(g.userMax, h.max); e ? (g.linkedParent = m[g.coll][h.linkedTo], m = g.linkedParent.getExtremes(),
                g.min = u(m.min, m.dataMin), g.max = u(m.max, m.dataMax), h.type !== g.linkedParent.options.type && a.error(11, 1)) : (!n && q(l) && (g.dataMin >= l ? (w = l, B = 0) : g.dataMax <= l && (v = l, I = 0)), g.min = u(C, w, g.dataMin), g.max = u(D, v, g.dataMax)); k && (g.positiveValuesOnly && !b && 0 >= Math.min(g.min, u(g.dataMin, g.min)) && a.error(10, 1), g.min = r(y(g.min), 15), g.max = r(y(g.max), 15)); g.range && q(g.max) && (g.userMin = g.min = C = Math.max(g.min, g.minFromRange()), g.userMax = D = g.max, g.range = null); z(g, "foundExtremes"); g.beforePadding && g.beforePadding(); g.adjustForMinRange();
                !(J || g.axisPointRange || g.usePercentage || e) && q(g.min) && q(g.max) && (y = g.max - g.min) && (!q(C) && B && (g.min -= y * B), !q(D) && I && (g.max += y * I)); x(h.softMin) && (g.min = Math.min(g.min, h.softMin)); x(h.softMax) && (g.max = Math.max(g.max, h.softMax)); x(h.floor) && (g.min = Math.max(g.min, h.floor)); x(h.ceiling) && (g.max = Math.min(g.max, h.ceiling)); n && q(g.dataMin) && (l = l || 0, !q(C) && g.min < l && g.dataMin >= l ? g.min = l : !q(D) && g.max > l && g.dataMax <= l && (g.max = l)); g.tickInterval = g.min === g.max || void 0 === g.min || void 0 === g.max ? 1 : e && !f && F === g.linkedParent.options.tickPixelInterval ?
                f = g.linkedParent.tickInterval : u(f, this.tickAmount ? (g.max - g.min) / Math.max(this.tickAmount - 1, 1) : void 0, J ? 1 : (g.max - g.min) * F / Math.max(g.len, F)); E && !b && c(g.series, function (a) { a.processData(g.min !== g.oldMin || g.max !== g.oldMax) }); g.setAxisTranslation(!0); g.beforeSetTickPositions && g.beforeSetTickPositions(); g.postProcessTickInterval && (g.tickInterval = g.postProcessTickInterval(g.tickInterval)); g.pointRange && !f && (g.tickInterval = Math.max(g.pointRange, g.tickInterval)); b = u(h.minTickInterval, g.isDatetimeAxis && g.closestPointRange);
                !f && g.tickInterval < b && (g.tickInterval = b); p || k || f || (g.tickInterval = d(g.tickInterval, null, t(g.tickInterval), u(h.allowDecimals, !(.5 < g.tickInterval && 5 > g.tickInterval && 1E3 < g.max && 9999 > g.max)), !!this.tickAmount)); this.tickAmount || (g.tickInterval = g.unsquish()); this.setTickPositions()
            }, setTickPositions: function () {
                var a = this.options, b, d = a.tickPositions, c = a.tickPositioner, m = a.startOnTick, h = a.endOnTick; this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval =
                "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval; this.single = this.min === this.max && q(this.min) && !this.tickAmount && !1 !== a.allowDecimals; this.tickPositions = b = d && d.slice(); !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval,
                this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, c && (c = c.apply(this, [this.min, this.max]))) && (this.tickPositions = b = c); this.paddedTicks = b.slice(0); this.trimTicks(b, m, h); this.isLinked || (this.single && (this.min -= .5, this.max += .5), d || c || this.adjustTickAmount())
            }, trimTicks: function (a, b, d) {
                var g = a[0], c = a[a.length - 1], m = this.minPointOffset || 0; if (!this.isLinked) {
                    if (b && -Infinity !== g) this.min = g; else for (; this.min - m > a[0];) a.shift(); if (d) this.max = c; else for (; this.max + m < a[a.length - 1];) a.pop();
                    0 === a.length && q(g) && a.push((c + g) / 2)
                }
            }, alignToOthers: function () { var a = {}, b, d = this.options; !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || this.isLog || c(this.chart[this.coll], function (g) { var d = g.options, d = [g.horiz ? d.left : d.top, d.width, d.height, d.pane].join(); g.series.length && (a[d] ? b = !0 : a[d] = 1) }); return b }, getTickAmount: function () {
                var a = this.options, b = a.tickAmount, d = a.tickPixelInterval; !q(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2); !b && this.alignToOthers() &&
                (b = Math.ceil(this.len / d) + 1); 4 > b && (this.finalTickAmt = b, b = 5); this.tickAmount = b
            }, adjustTickAmount: function () { var a = this.tickInterval, b = this.tickPositions, d = this.tickAmount, c = this.finalTickAmt, m = b && b.length; if (m < d) { for (; b.length < d;) b.push(r(b[b.length - 1] + a)); this.transA *= (m - 1) / (d - 1); this.max = b[b.length - 1] } else m > d && (this.tickInterval *= 2, this.setTickPositions()); if (q(c)) { for (a = d = b.length; a--;) (3 === c && 1 === a % 2 || 2 >= c && 0 < a && a < d - 1) && b.splice(a, 1); this.finalTickAmt = void 0 } }, setScale: function () {
                var a, b; this.oldMin =
                this.min; this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); b = this.len !== this.oldAxisLength; c(this.series, function (b) { if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0 }); b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty =
                b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
            }, setExtremes: function (a, b, d, m, h) { var g = this, k = g.chart; d = u(d, !0); c(g.series, function (a) { delete a.kdTree }); h = e(h, { min: a, max: b }); z(g, "setExtremes", h, function () { g.userMin = a; g.userMax = b; g.eventArgs = h; d && k.redraw(m) }) }, zoom: function (a, b) {
                var g = this.dataMin, d = this.dataMax, c = this.options, m = Math.min(g, u(c.min, g)), c = Math.max(d, u(c.max, d)); if (a !== this.min || b !== this.max) this.allowZoomOutside || (q(g) && (a < m && (a = m), a > c && (a = c)),
                q(d) && (b < m && (b = m), b > c && (b = c))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, { trigger: "zoom" }); return !0
            }, setAxisSize: function () {
                var a = this.chart, b = this.options, d = b.offsets || [0, 0, 0, 0], c = this.horiz, m = u(b.width, a.plotWidth - d[3] + d[1]), h = u(b.height, a.plotHeight - d[0] + d[2]), k = u(b.top, a.plotTop + d[0]), b = u(b.left, a.plotLeft + d[3]), d = /%$/; d.test(h) && (h = Math.round(parseFloat(h) / 100 * a.plotHeight)); d.test(k) && (k = Math.round(parseFloat(k) / 100 * a.plotHeight + a.plotTop)); this.left = b; this.top = k;
                this.width = m; this.height = h; this.bottom = a.chartHeight - h - k; this.right = a.chartWidth - m - b; this.len = Math.max(c ? m : h, 0); this.pos = c ? b : k
            }, getExtremes: function () { var a = this.isLog, b = this.lin2log; return { min: a ? r(b(this.min)) : this.min, max: a ? r(b(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }, getThreshold: function (a) {
                var b = this.isLog, g = this.lin2log, d = b ? g(this.min) : this.min, b = b ? g(this.max) : this.max; null === a ? a = d : d > a ? a = d : b < a && (a = b); return this.translate(a, 0,
                1, 0, 1)
            }, autoLabelAlign: function (a) { a = (u(a, 0) - 90 * this.side + 720) % 360; return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center" }, tickSize: function (a) { var b = this.options, g = b[a + "Length"], d = u(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0); if (d && g) return "inside" === b[a + "Position"] && (g = -g), [g, d] }, labelMetrics: function () { return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label) }, unsquish: function () {
                var a = this.options.labels, b = this.horiz,
                d = this.tickInterval, m = d, h = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), k, y = a.rotation, p = this.labelMetrics(), E, x = Number.MAX_VALUE, t, e = function (a) { a /= h || 1; a = 1 < a ? Math.ceil(a) : 1; return a * d }; b ? (t = !a.staggerLines && !a.step && (q(y) ? [y] : h < u(a.autoRotationLimit, 80) && a.autoRotation)) && c(t, function (a) { var b; if (a === y || a && -90 <= a && 90 >= a) E = e(Math.abs(p.h / Math.sin(n * a))), b = E + Math.abs(a / 360), b < x && (x = b, k = a, m = E) }) : a.step || (m = e(p.h)); this.autoRotation = t; this.labelRotation = u(k, y); return m
            }, getSlotWidth: function () {
                var a =
                this.chart, b = this.horiz, d = this.options.labels, c = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), m = a.margin[3]; return b && 2 > (d.step || 0) && !d.rotation && (this.staggerLines || 1) * this.len / c || !b && (m && m - a.spacing[3] || .33 * a.chartWidth)
            }, renderUnsquish: function () {
                var a = this.chart, b = a.renderer, d = this.tickPositions, m = this.ticks, h = this.options.labels, y = this.horiz, p = this.getSlotWidth(), E = Math.max(1, Math.round(p - 2 * (h.padding || 5))), t = {}, x = this.labelMetrics(), e = h.style && h.style.textOverflow, u, I = 0, B, f; k(h.rotation) ||
                (t.rotation = h.rotation || 0); c(d, function (a) { (a = m[a]) && a.labelLength > I && (I = a.labelLength) }); this.maxLabelLength = I; if (this.autoRotation) I > E && I > x.h ? t.rotation = this.labelRotation : this.labelRotation = 0; else if (p && (u = { width: E + "px" }, !e)) for (u.textOverflow = "clip", B = d.length; !y && B--;) if (f = d[B], E = m[f].label) E.styles && "ellipsis" === E.styles.textOverflow ? E.css({ textOverflow: "clip" }) : m[f].labelLength > p && E.css({ width: p + "px" }), E.getBBox().height > this.len / d.length - (x.h - x.f) && (E.specCss = { textOverflow: "ellipsis" }); t.rotation &&
                (u = { width: (I > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px" }, e || (u.textOverflow = "ellipsis")); if (this.labelAlign = h.align || this.autoLabelAlign(this.labelRotation)) t.align = this.labelAlign; c(d, function (a) { var b = (a = m[a]) && a.label; b && (b.attr(t), u && b.css(F(u, b.specCss)), delete b.specCss, a.rotation = t.rotation) }); this.tickRotCorr = b.rotCorr(x.b, this.labelRotation || 0, 0 !== this.side)
            }, hasData: function () { return this.hasVisibleSeries || q(this.min) && q(this.max) && !!this.tickPositions }, addTitle: function (a) {
                var b =
                this.chart.renderer, g = this.horiz, d = this.opposite, c = this.options.title, m; this.axisTitle || ((m = c.textAlign) || (m = (g ? { low: "left", middle: "center", high: "right" } : { low: d ? "right" : "left", middle: "center", high: d ? "left" : "right" })[c.align]), this.axisTitle = b.text(c.text, 0, 0, c.useHTML).attr({ zIndex: 7, rotation: c.rotation || 0, align: m }).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup), this.axisTitle.isNew = !0); this.axisTitle[a ? "show" : "hide"](!0)
            }, generateTick: function (a) {
                var b = this.ticks; b[a] ? b[a].addLabel() :
                b[a] = new I(this, a)
            }, getOffset: function () {
                var a = this, b = a.chart, d = b.renderer, m = a.options, h = a.tickPositions, k = a.ticks, y = a.horiz, p = a.side, E = b.inverted ? [1, 0, 3, 2][p] : p, t, x, e = 0, I, B = 0, f = m.title, z = m.labels, F = 0, J = b.axisOffset, b = b.clipOffset, l = [-1, 1, 1, -1][p], n, r = m.className, w = a.axisParent, v = this.tickSize("tick"); t = a.hasData(); a.showAxis = x = t || u(m.showEmpty, !0); a.staggerLines = a.horiz && z.staggerLines; a.axisGroup || (a.gridGroup = d.g("grid").attr({ zIndex: m.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() +
                "-grid " + (r || "")).add(w), a.axisGroup = d.g("axis").attr({ zIndex: m.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (r || "")).add(w), a.labelGroup = d.g("axis-labels").attr({ zIndex: z.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (r || "")).add(w)); if (t || a.isLinked) c(h, function (b, g) { a.generateTick(b, g) }), a.renderUnsquish(), !1 === z.reserveSpace || 0 !== p && 2 !== p && { 1: "left", 3: "right" }[p] !== a.labelAlign && "center" !== a.labelAlign || c(h, function (a) { F = Math.max(k[a].getLabelSize(), F) }),
                a.staggerLines && (F *= a.staggerLines, a.labelOffset = F * (a.opposite ? -1 : 1)); else for (n in k) k[n].destroy(), delete k[n]; f && f.text && !1 !== f.enabled && (a.addTitle(x), x && (e = a.axisTitle.getBBox()[y ? "height" : "width"], I = f.offset, B = q(I) ? 0 : u(f.margin, y ? 5 : 10))); a.renderLine(); a.offset = l * u(m.offset, J[p]); a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 }; d = 0 === p ? -a.labelMetrics().h : 2 === p ? a.tickRotCorr.y : 0; B = Math.abs(F) + B; F && (B = B - d + l * (y ? u(z.y, a.tickRotCorr.y + 8 * l) : z.x)); a.axisTitleMargin = u(I, B); J[p] = Math.max(J[p], a.axisTitleMargin +
                e + l * a.offset, B, t && h.length && v ? v[0] + l * a.offset : 0); m = m.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2); b[E] = Math.max(b[E], m)
            }, getLinePath: function (a) { var b = this.chart, g = this.opposite, d = this.offset, c = this.horiz, m = this.left + (g ? this.width : 0) + d, d = b.chartHeight - this.bottom - (g ? this.height : 0) + d; g && (a *= -1); return b.renderer.crispLine(["M", c ? this.left : m, c ? d : this.top, "L", c ? b.chartWidth - this.right : m, c ? d : b.chartHeight - this.bottom], a) }, renderLine: function () {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
                this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }))
            }, getTitlePosition: function () {
                var a = this.horiz, b = this.left, d = this.top, c = this.len, m = this.options.title, h = a ? b : d, k = this.opposite, y = this.offset, p = m.x || 0, E = m.y || 0, t = this.chart.renderer.fontMetrics(m.style && m.style.fontSize, this.axisTitle).f, c = { low: h + (a ? 0 : c), middle: h + c / 2, high: h + (a ? c : 0) }[m.align], b = (a ? d + this.height : b) + (a ? 1 : -1) * (k ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? t : 0); return {
                    x: a ? c + p : b + (k ? this.width :
                    0) + y + p, y: a ? b + E - (k ? this.height : 0) + y : c + E
                }
            }, renderMinorTick: function (a) { var b = this.chart.hasRendered && x(this.oldMin), g = this.minorTicks; g[a] || (g[a] = new I(this, a, "minor")); b && g[a].isNew && g[a].render(null, !0); g[a].render(null, !1, 1) }, renderTick: function (a, b) { var g = this.isLinked, d = this.ticks, c = this.chart.hasRendered && x(this.oldMin); if (!g || a >= this.min && a <= this.max) d[a] || (d[a] = new I(this, a)), c && d[a].isNew && d[a].render(b, !0, .1), d[a].render(b) }, render: function () {
                var a = this, b = a.chart, d = a.options, h = a.isLog, k = a.lin2log,
                y = a.isLinked, p = a.tickPositions, t = a.axisTitle, x = a.ticks, e = a.minorTicks, u = a.alternateBands, B = d.stackLabels, f = d.alternateGridColor, z = a.tickmarkOffset, F = a.axisLine, J = a.showAxis, l = C(b.renderer.globalAnimation), n, q; a.labelEdge.length = 0; a.overlap = !1; c([x, e, u], function (a) { for (var b in a) a[b].isActive = !1 }); if (a.hasData() || y) a.minorTickInterval && !a.categories && c(a.getMinorTickPositions(), function (b) { a.renderMinorTick(b) }), p.length && (c(p, function (b, d) { a.renderTick(b, d) }), z && (0 === a.min || a.single) && (x[-1] || (x[-1] =
                new I(a, -1, null, !0)), x[-1].render(-1))), f && c(p, function (d, g) { q = void 0 !== p[g + 1] ? p[g + 1] + z : a.max - z; 0 === g % 2 && d < a.max && q <= a.max + (b.polar ? -z : z) && (u[d] || (u[d] = new m(a)), n = d + z, u[d].options = { from: h ? k(n) : n, to: h ? k(q) : q, color: f }, u[d].render(), u[d].isActive = !0) }), a._addedPlotLB || (c((d.plotLines || []).concat(d.plotBands || []), function (b) { a.addPlotBandOrLine(b) }), a._addedPlotLB = !0); c([x, e, u], function (a) {
                    var d, g, c = [], m = l.duration; for (d in a) a[d].isActive || (a[d].render(d, !1, 0), a[d].isActive = !1, c.push(d)); E(function () {
                        for (g =
                        c.length; g--;) a[c[g]] && !a[c[g]].isActive && (a[c[g]].destroy(), delete a[c[g]])
                    }, a !== u && b.hasRendered && m ? m : 0)
                }); F && (F[F.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(F.strokeWidth()) }), F.isPlaced = !0, F[J ? "show" : "hide"](!0)); t && J && (t[t.isNew ? "attr" : "animate"](a.getTitlePosition()), t.isNew = !1); B && B.enabled && a.renderStackTotals(); a.isDirty = !1
            }, redraw: function () { this.visible && (this.render(), c(this.plotLinesAndBands, function (a) { a.render() })); c(this.series, function (a) { a.isDirty = !0 }) }, keepProps: "extKey hcEvents names series userMax userMin".split(" "),
            destroy: function (a) { var b = this, d = b.stacks, g, m = b.plotLinesAndBands, h, k; a || y(b); for (g in d) f(d[g]), d[g] = null; c([b.ticks, b.minorTicks, b.alternateBands], function (a) { f(a) }); if (m) for (a = m.length; a--;) m[a].destroy(); c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) { b[a] && (b[a] = b[a].destroy()) }); for (h in b.plotLinesAndBandsGroups) b.plotLinesAndBandsGroups[h] = b.plotLinesAndBandsGroups[h].destroy(); for (k in b) b.hasOwnProperty(k) && -1 === B(k, b.keepProps) && delete b[k] },
            drawCrosshair: function (a, b) {
                var d, g = this.crosshair, c = u(g.snap, !0), m, h = this.cross; a || (a = this.cross && this.cross.e); this.crosshair && !1 !== (q(b) || !c) ? (c ? q(b) && (m = this.isXAxis ? b.plotX : this.len - b.plotY) : m = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), q(m) && (d = this.getPlotLinePath(b && (this.isXAxis ? b.x : u(b.stackY, b.y)), null, null, null, m) || null), q(d) ? (b = this.categories && !this.isRadial, h || (this.cross = h = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " :
                "thin ") + g.className).attr({ zIndex: u(g.zIndex, 2) }).add(), h.attr({ stroke: g.color || (b ? l("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": u(g.width, 1) }), g.dashStyle && h.attr({ dashstyle: g.dashStyle })), h.show().attr({ d: d }), b && !g.width && h.attr({ "stroke-width": this.transA }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair()
            }, hideCrosshair: function () { this.cross && this.cross.hide() }
        }; e(a.Axis.prototype, v)
    })(K); (function (a) {
        var D = a.Axis, C = a.Date, G = a.dateFormat, H = a.defaultOptions, v = a.defined,
        l = a.each, r = a.extend, w = a.getMagnitude, q = a.getTZOffset, n = a.normalizeTickInterval, f = a.pick, c = a.timeUnits; D.prototype.getTimeTicks = function (a, z, b, t) {
            var h = [], e = {}, p = H.global.useUTC, x, k = new C(z - Math.abs(q(z))), F = C.hcMakeTime, d = a.unitRange, u = a.count, m; if (v(z)) {
                k[C.hcSetMilliseconds](d >= c.second ? 0 : u * Math.floor(k.getMilliseconds() / u)); if (d >= c.second) k[C.hcSetSeconds](d >= c.minute ? 0 : u * Math.floor(k.getSeconds() / u)); if (d >= c.minute) k[C.hcSetMinutes](d >= c.hour ? 0 : u * Math.floor(k[C.hcGetMinutes]() / u)); if (d >= c.hour) k[C.hcSetHours](d >=
                c.day ? 0 : u * Math.floor(k[C.hcGetHours]() / u)); if (d >= c.day) k[C.hcSetDate](d >= c.month ? 1 : u * Math.floor(k[C.hcGetDate]() / u)); d >= c.month && (k[C.hcSetMonth](d >= c.year ? 0 : u * Math.floor(k[C.hcGetMonth]() / u)), x = k[C.hcGetFullYear]()); if (d >= c.year) k[C.hcSetFullYear](x - x % u); if (d === c.week) k[C.hcSetDate](k[C.hcGetDate]() - k[C.hcGetDay]() + f(t, 1)); x = k[C.hcGetFullYear](); t = k[C.hcGetMonth](); var y = k[C.hcGetDate](), J = k[C.hcGetHours](); if (C.hcTimezoneOffset || C.hcGetTimezoneOffset) m = (!p || !!C.hcGetTimezoneOffset) && (b - z > 4 * c.month ||
                q(z) !== q(b)), k = k.getTime(), k = new C(k + q(k)); p = k.getTime(); for (z = 1; p < b;) h.push(p), p = d === c.year ? F(x + z * u, 0) : d === c.month ? F(x, t + z * u) : !m || d !== c.day && d !== c.week ? m && d === c.hour ? F(x, t, y, J + z * u) : p + d * u : F(x, t, y + z * u * (d === c.day ? 1 : 7)), z++; h.push(p); d <= c.hour && 1E4 > h.length && l(h, function (a) { 0 === a % 18E5 && "000000000" === G("%H%M%S%L", a) && (e[a] = "day") })
            } h.info = r(a, { higherRanks: e, totalRange: d * u }); return h
        }; D.prototype.normalizeTimeTickInterval = function (a, f) {
            var b = f || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second",
            [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; f = b[b.length - 1]; var t = c[f[0]], h = f[1], e; for (e = 0; e < b.length && !(f = b[e], t = c[f[0]], h = f[1], b[e + 1] && a <= (t * h[h.length - 1] + c[b[e + 1][0]]) / 2) ; e++); t === c.year && a < 5 * t && (h = [1, 2, 5]); a = n(a / t, h, "year" === f[0] ? Math.max(w(a / t), 1) : 1); return { unitRange: t, count: a, unitName: f[0] }
        }
    })(K); (function (a) {
        var D = a.Axis, C = a.getMagnitude, G = a.map, H = a.normalizeTickInterval, v = a.pick; D.prototype.getLogTickPositions =
        function (a, r, w, q) {
            var n = this.options, f = this.len, c = this.lin2log, e = this.log2lin, z = []; q || (this._minorAutoInterval = null); if (.5 <= a) a = Math.round(a), z = this.getLinearTickPositions(a, r, w); else if (.08 <= a) for (var f = Math.floor(r), b, t, h, B, p, n = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < w + 1 && !p; f++) for (t = n.length, b = 0; b < t && !p; b++) h = e(c(f) * n[b]), h > r && (!q || B <= w) && void 0 !== B && z.push(B), B > w && (p = !0), B = h; else r = c(r), w = c(w), a = n[q ? "minorTickInterval" : "tickInterval"], a = v("auto" === a ? null : a, this._minorAutoInterval,
            n.tickPixelInterval / (q ? 5 : 1) * (w - r) / ((q ? f / this.tickPositions.length : f) || 1)), a = H(a, null, C(a)), z = G(this.getLinearTickPositions(a, r, w), e), q || (this._minorAutoInterval = a / 5); q || (this.tickInterval = a); return z
        }; D.prototype.log2lin = function (a) { return Math.log(a) / Math.LN10 }; D.prototype.lin2log = function (a) { return Math.pow(10, a) }
    })(K); (function (a) {
        var D = a.dateFormat, C = a.each, G = a.extend, H = a.format, v = a.isNumber, l = a.map, r = a.merge, w = a.pick, q = a.splat, n = a.syncTimeout, f = a.timeUnits; a.Tooltip = function () {
            this.init.apply(this,
            arguments)
        }; a.Tooltip.prototype = {
            init: function (a, e) { this.chart = a; this.options = e; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = e.split && !a.inverted; this.shared = e.shared || this.split }, cleanSplit: function (a) { C(this.chart.series, function (c) { var e = c && c.tt; e && (!e.isActive || a ? c.tt = e.destroy() : e.isActive = !1) }) }, getLabel: function () {
                var a = this.chart.renderer, e = this.options; this.label || (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, e.shape || "callout", null, null, e.useHTML,
                null, "tooltip").attr({ padding: e.padding, r: e.borderRadius }), this.label.attr({ fill: e.backgroundColor, "stroke-width": e.borderWidth }).css(e.style).shadow(e.shadow)), this.label.attr({ zIndex: 8 }).add()); return this.label
            }, update: function (a) { this.destroy(); this.init(this.chart, r(!0, this.options, a)) }, destroy: function () { this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()); clearTimeout(this.hideTimer); clearTimeout(this.tooltipTimeout) },
            move: function (a, e, f, b) { var c = this, h = c.now, B = !1 !== c.options.animation && !c.isHidden && (1 < Math.abs(a - h.x) || 1 < Math.abs(e - h.y)), p = c.followPointer || 1 < c.len; G(h, { x: B ? (2 * h.x + a) / 3 : a, y: B ? (h.y + e) / 2 : e, anchorX: p ? void 0 : B ? (2 * h.anchorX + f) / 3 : f, anchorY: p ? void 0 : B ? (h.anchorY + b) / 2 : b }); c.getLabel().attr(h); B && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { c && c.move(a, e, f, b) }, 32)) }, hide: function (a) {
                var c = this; clearTimeout(this.hideTimer); a = w(a, this.options.hideDelay, 500); this.isHidden || (this.hideTimer =
                n(function () { c.getLabel()[a ? "fadeOut" : "hide"](); c.isHidden = !0 }, a))
            }, getAnchor: function (a, e) {
                var c, b = this.chart, t = b.inverted, h = b.plotTop, f = b.plotLeft, p = 0, x = 0, k, F; a = q(a); c = a[0].tooltipPos; this.followPointer && e && (void 0 === e.chartX && (e = b.pointer.normalize(e)), c = [e.chartX - b.plotLeft, e.chartY - h]); c || (C(a, function (a) { k = a.series.yAxis; F = a.series.xAxis; p += a.plotX + (!t && F ? F.left - f : 0); x += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!t && k ? k.top - h : 0) }), p /= a.length, x /= a.length, c = [t ? b.plotWidth - x : p, this.shared &&
                !t && 1 < a.length && e ? e.chartY - h : t ? b.plotHeight - p : x]); return l(c, Math.round)
            }, getPosition: function (a, e, f) {
                var b = this.chart, c = this.distance, h = {}, B = f.h || 0, p, x = ["y", b.chartHeight, e, f.plotY + b.plotTop, b.plotTop, b.plotTop + b.plotHeight], k = ["x", b.chartWidth, a, f.plotX + b.plotLeft, b.plotLeft, b.plotLeft + b.plotWidth], F = !this.followPointer && w(f.ttBelow, !b.inverted === !!f.negative), d = function (a, b, d, g, m, k) {
                    var p = d < g - c, y = g + c + d < b, E = g - c - d; g += c; if (F && y) h[a] = g; else if (!F && p) h[a] = E; else if (p) h[a] = Math.min(k - d, 0 > E - B ? E : E - B);
                    else if (y) h[a] = Math.max(m, g + B + d > b ? g : g + B); else return !1
                }, u = function (a, b, d, g) { var m; g < c || g > b - c ? m = !1 : h[a] = g < d / 2 ? 1 : g > b - d / 2 ? b - d - 2 : g - d / 2; return m }, m = function (a) { var b = x; x = k; k = b; p = a }, y = function () { !1 !== d.apply(0, x) ? !1 !== u.apply(0, k) || p || (m(!0), y()) : p ? h.x = h.y = 0 : (m(!0), y()) }; (b.inverted || 1 < this.len) && m(); y(); return h
            }, defaultFormatter: function (a) { var c = this.points || q(this), f; f = [a.tooltipFooterHeaderFormatter(c[0])]; f = f.concat(a.bodyFormatter(c)); f.push(a.tooltipFooterHeaderFormatter(c[0], !0)); return f }, refresh: function (a,
            e) {
                var c, b = this.options, t, h = a, f, p = {}, x = []; c = b.formatter || this.defaultFormatter; var p = this.shared, k; clearTimeout(this.hideTimer); this.followPointer = q(h)[0].series.tooltipOptions.followPointer; f = this.getAnchor(h, e); e = f[0]; t = f[1]; !p || h.series && h.series.noSharedTooltip ? p = h.getLabelConfig() : (C(h, function (a) { a.setState("hover"); x.push(a.getLabelConfig()) }), p = { x: h[0].category, y: h[0].y }, p.points = x, h = h[0]); this.len = x.length; p = c.call(p, this); k = h.series; this.distance = w(k.tooltipOptions.distance, 16); !1 === p ? this.hide() :
                (c = this.getLabel(), this.isHidden && c.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(p, a) : (c.attr({ text: p && p.join ? p.join("") : p }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + w(h.colorIndex, k.colorIndex)), c.attr({ stroke: b.borderColor || h.color || k.color || "#666666" }), this.updatePosition({ plotX: e, plotY: t, negative: h.negative, ttBelow: h.ttBelow, h: f[2] || 0 })), this.isHidden = !1)
            }, renderSplit: function (c, e) {
                var f = this, b = [], t = this.chart, h = t.renderer, B = !0, p = this.options, x, k = this.getLabel();
                C(c.slice(0, e.length + 1), function (a, d) {
                    d = e[d - 1] || { isHeader: !0, plotX: e[0].plotX }; var c = d.series || f, m = c.tt, y = d.series || {}, F = "highcharts-color-" + w(d.colorIndex, y.colorIndex, "none"); m || (c.tt = m = h.label(null, null, null, "callout").addClass("highcharts-tooltip-box " + F).attr({ padding: p.padding, r: p.borderRadius, fill: p.backgroundColor, stroke: d.color || y.color || "#333333", "stroke-width": p.borderWidth }).add(k)); m.isActive = !0; m.attr({ text: a }); m.css(p.style); a = m.getBBox(); y = a.width + m.strokeWidth(); d.isHeader ? (x = a.height,
                    y = Math.max(0, Math.min(d.plotX + t.plotLeft - y / 2, t.chartWidth - y))) : y = d.plotX + t.plotLeft - w(p.distance, 16) - y; 0 > y && (B = !1); a = (d.series && d.series.yAxis && d.series.yAxis.pos) + (d.plotY || 0); a -= t.plotTop; b.push({ target: d.isHeader ? t.plotHeight + x : a, rank: d.isHeader ? 1 : 0, size: c.tt.getBBox().height + 1, point: d, x: y, tt: m })
                }); this.cleanSplit(); a.distribute(b, t.plotHeight + x); C(b, function (a) {
                    var b = a.point, c = b.series; a.tt.attr({
                        visibility: void 0 === a.pos ? "hidden" : "inherit", x: B || b.isHeader ? a.x : b.plotX + t.plotLeft + w(p.distance,
                        16), y: a.pos + t.plotTop, anchorX: b.isHeader ? b.plotX + t.plotLeft : b.plotX + c.xAxis.pos, anchorY: b.isHeader ? a.pos + t.plotTop - 15 : b.plotY + c.yAxis.pos
                    })
                })
            }, updatePosition: function (a) { var c = this.chart, f = this.getLabel(), f = (this.options.positioner || this.getPosition).call(this, f.width, f.height, a); this.move(Math.round(f.x), Math.round(f.y || 0), a.plotX + c.plotLeft, a.plotY + c.plotTop) }, getDateFormat: function (a, e, z, b) {
                var c = D("%m-%d %H:%M:%S.%L", e), h, B, p = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, x = "millisecond"; for (B in f) {
                    if (a ===
                    f.week && +D("%w", e) === z && "00:00:00.000" === c.substr(6)) { B = "week"; break } if (f[B] > a) { B = x; break } if (p[B] && c.substr(p[B]) !== "01-01 00:00:00.000".substr(p[B])) break; "week" !== B && (x = B)
                } B && (h = b[B]); return h
            }, getXDateFormat: function (a, e, f) { e = e.dateTimeLabelFormats; var b = f && f.closestPointRange; return (b ? this.getDateFormat(b, a.x, f.options.startOfWeek, e) : e.day) || e.year }, tooltipFooterHeaderFormatter: function (a, e) {
                var c = e ? "footer" : "header"; e = a.series; var b = e.tooltipOptions, t = b.xDateFormat, h = e.xAxis, f = h && "datetime" ===
                h.options.type && v(a.key), c = b[c + "Format"]; f && !t && (t = this.getXDateFormat(a, b, h)); f && t && (c = c.replace("{point.key}", "{point.key:" + t + "}")); return H(c, { point: a, series: e })
            }, bodyFormatter: function (a) { return l(a, function (a) { var c = a.series.tooltipOptions; return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat) }) }
        }
    })(K); (function (a) {
        var D = a.addEvent, C = a.attr, G = a.charts, H = a.color, v = a.css, l = a.defined, r = a.doc, w = a.each, q = a.extend, n = a.fireEvent, f = a.offset, c = a.pick, e = a.removeEvent, z = a.splat,
        b = a.Tooltip, t = a.win; a.Pointer = function (a, b) { this.init(a, b) }; a.Pointer.prototype = {
            init: function (a, t) { this.options = t; this.chart = a; this.runChartClick = t.chart.events && !!t.chart.events.click; this.pinchDown = []; this.lastValidTouch = {}; b && t.tooltip.enabled && (a.tooltip = new b(a, t.tooltip), this.followTouchMove = c(t.tooltip.followTouchMove, !0)); this.setDOMEvents() }, zoomOption: function (a) {
                var b = this.chart, h = b.options.chart, x = h.zoomType || "", b = b.inverted; /touch/.test(a.type) && (x = c(h.pinchType, x)); this.zoomX = a = /x/.test(x);
                this.zoomY = x = /y/.test(x); this.zoomHor = a && !b || x && b; this.zoomVert = x && !b || a && b; this.hasZoom = a || x
            }, normalize: function (a, b) { var c, h; a = a || t.event; a.target || (a.target = a.srcElement); h = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a; b || (this.chartPosition = b = f(this.chart.container)); void 0 === h.pageX ? (c = Math.max(a.x, a.clientX - b.left), b = a.y) : (c = h.pageX - b.left, b = h.pageY - b.top); return q(a, { chartX: Math.round(c), chartY: Math.round(b) }) }, getCoordinates: function (a) {
                var b = { xAxis: [], yAxis: [] }; w(this.chart.axes,
                function (c) { b[c.isXAxis ? "xAxis" : "yAxis"].push({ axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"]) }) }); return b
            }, getKDPoints: function (a, b, p) {
                var h = [], k, t, d; w(a, function (a) { k = a.noSharedTooltip && b; t = !b && a.directTouch; a.visible && !t && c(a.options.enableMouseTracking, !0) && (d = a.searchPoint(p, !k && 0 > a.options.findNearestPointBy.indexOf("y"))) && d.series && h.push(d) }); h.sort(function (a, d) {
                    var c = a.distX - d.distX, m = a.dist - d.dist, h = (d.series.group && d.series.group.zIndex) - (a.series.group && a.series.group.zIndex);
                    return 0 !== c && b ? c : 0 !== m ? m : 0 !== h ? h : a.series.index > d.series.index ? -1 : 1
                }); if (b && h[0] && !h[0].series.noSharedTooltip) for (a = h.length; a--;) (h[a].x !== h[0].x || h[a].series.noSharedTooltip) && h.splice(a, 1); return h
            }, getPointFromEvent: function (a) { a = a.target; for (var b; a && !b;) b = a.point, a = a.parentNode; return b }, getHoverData: function (b, t, p, x, k, e) {
                var d = b, h = t, m; x ? k ? (m = [], w(p, function (a) {
                    var b = a.noSharedTooltip && k, h = !k && a.directTouch; a.visible && !b && !h && c(a.options.enableMouseTracking, !0) && (a = a.searchKDTree({
                        clientX: d.clientX,
                        plotY: d.plotY
                    }, !b && 1 === a.kdDimensions)) && a.series && m.push(a)
                }), 0 === m.length && (m = [d])) : m = [d] : h && !h.stickyTracking ? (k || (p = [h]), m = this.getKDPoints(p, k, e), d = a.find(m, function (a) { return a.series === h })) : (b = a.grep(p, function (a) { return a.stickyTracking }), m = this.getKDPoints(b, k, e), h = (d = m[0]) && d.series, k && (m = this.getKDPoints(p, k, e))); m.sort(function (a, b) { return a.series.index - b.series.index }); return { hoverPoint: d, hoverSeries: h, hoverPoints: m }
            }, runPointActions: function (b, t) {
                var h = this.chart, x = h.tooltip, k = x ? x.shared :
                !1, e = t || h.hoverPoint, d = e && e.series || h.hoverSeries; t = this.getHoverData(e, d, h.series, !!t || !k && d && d.directTouch, k, b); var f, m, e = t.hoverPoint; f = (d = t.hoverSeries) && d.tooltipOptions.followPointer; m = (k = k && e && !e.series.noSharedTooltip) ? t.hoverPoints : e ? [e] : []; if (e && (e !== h.hoverPoint || x && x.isHidden)) {
                    w(h.hoverPoints || [], function (b) { -1 === a.inArray(b, m) && b.setState() }); w(m || [], function (a) { a.setState("hover") }); if (h.hoverSeries !== d) d.onMouseOver(); d && !d.directTouch && (h.hoverPoint && h.hoverPoint.firePointEvent("mouseOut"),
                    e.firePointEvent("mouseOver")); h.hoverPoints = m; h.hoverPoint = e; x && x.refresh(k ? m : e, b)
                } else f && x && !x.isHidden && (e = x.getAnchor([{}], b), x.updatePosition({ plotX: e[0], plotY: e[1] })); this.unDocMouseMove || (this.unDocMouseMove = D(r, "mousemove", function (b) { var d = G[a.hoverChartIndex]; if (d) d.pointer.onDocumentMouseMove(b) })); w(h.axes, function (a) { c(a.crosshair.snap, !0) ? w(m, function (d) { d.series[a.coll] === a && a.drawCrosshair(b, d) }) : a.drawCrosshair(b) })
            }, reset: function (a, b) {
                var c = this.chart, h = c.hoverSeries, k = c.hoverPoint,
                t = c.hoverPoints, d = c.tooltip, e = d && d.shared ? t : k; a && e && w(z(e), function (b) { b.series.isCartesian && void 0 === b.plotX && (a = !1) }); if (a) d && e && (d.refresh(e), k && (k.setState(k.state, !0), w(c.axes, function (a) { a.crosshair && a.drawCrosshair(null, k) }))); else { if (k) k.onMouseOut(); t && w(t, function (a) { a.setState() }); if (h) h.onMouseOut(); d && d.hide(b); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); w(c.axes, function (a) { a.hideCrosshair() }); this.hoverX = c.hoverPoints = c.hoverPoint = null }
            }, scaleGroups: function (a,
            b) { var c = this.chart, h; w(c.series, function (k) { h = a || k.getPlotBox(); k.xAxis && k.xAxis.zoomEnabled && k.group && (k.group.attr(h), k.markerGroup && (k.markerGroup.attr(h), k.markerGroup.clip(b ? c.clipRect : null)), k.dataLabelsGroup && k.dataLabelsGroup.attr(h)) }); c.clipRect.attr(b || c.clipBox) }, dragStart: function (a) { var b = this.chart; b.mouseIsDown = a.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = a.chartX; b.mouseDownY = this.mouseDownY = a.chartY }, drag: function (a) {
                var b = this.chart, c = b.options.chart, h = a.chartX, k = a.chartY,
                t = this.zoomHor, d = this.zoomVert, e = b.plotLeft, m = b.plotTop, y = b.plotWidth, f = b.plotHeight, E, I = this.selectionMarker, g = this.mouseDownX, n = this.mouseDownY, z = c.panKey && a[c.panKey + "Key"]; I && I.touch || (h < e ? h = e : h > e + y && (h = e + y), k < m ? k = m : k > m + f && (k = m + f), this.hasDragged = Math.sqrt(Math.pow(g - h, 2) + Math.pow(n - k, 2)), 10 < this.hasDragged && (E = b.isInsidePlot(g - e, n - m), b.hasCartesianSeries && (this.zoomX || this.zoomY) && E && !z && !I && (this.selectionMarker = I = b.renderer.rect(e, m, t ? 1 : y, d ? 1 : f, 0).attr({
                    fill: c.selectionMarkerFill || H("#335cad").setOpacity(.25).get(),
                    "class": "highcharts-selection-marker", zIndex: 7
                }).add()), I && t && (h -= g, I.attr({ width: Math.abs(h), x: (0 < h ? 0 : h) + g })), I && d && (h = k - n, I.attr({ height: Math.abs(h), y: (0 < h ? 0 : h) + n })), E && !I && c.panning && b.pan(a, c.panning)))
            }, drop: function (a) {
                var b = this, c = this.chart, h = this.hasPinched; if (this.selectionMarker) {
                    var k = { originalEvent: a, xAxis: [], yAxis: [] }, t = this.selectionMarker, d = t.attr ? t.attr("x") : t.x, e = t.attr ? t.attr("y") : t.y, m = t.attr ? t.attr("width") : t.width, y = t.attr ? t.attr("height") : t.height, f; if (this.hasDragged || h) w(c.axes,
                    function (c) { if (c.zoomEnabled && l(c.min) && (h || b[{ xAxis: "zoomX", yAxis: "zoomY" }[c.coll]])) { var p = c.horiz, g = "touchend" === a.type ? c.minPixelPadding : 0, t = c.toValue((p ? d : e) + g), p = c.toValue((p ? d + m : e + y) - g); k[c.coll].push({ axis: c, min: Math.min(t, p), max: Math.max(t, p) }); f = !0 } }), f && n(c, "selection", k, function (a) { c.zoom(q(a, h ? { animation: !1 } : null)) }); this.selectionMarker = this.selectionMarker.destroy(); h && this.scaleGroups()
                } c && (v(c.container, { cursor: c._cursor }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged =
                this.hasPinched = !1, this.pinchDown = [])
            }, onContainerMouseDown: function (a) { a = this.normalize(a); this.zoomOption(a); a.preventDefault && a.preventDefault(); this.dragStart(a) }, onDocumentMouseUp: function (b) { G[a.hoverChartIndex] && G[a.hoverChartIndex].pointer.drop(b) }, onDocumentMouseMove: function (a) { var b = this.chart, c = this.chartPosition; a = this.normalize(a, c); !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset() }, onContainerMouseLeave: function (b) {
                var c =
                G[a.hoverChartIndex]; c && (b.relatedTarget || b.toElement) && (c.pointer.reset(), c.pointer.chartPosition = null)
            }, onContainerMouseMove: function (b) { var c = this.chart; l(a.hoverChartIndex) && G[a.hoverChartIndex] && G[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = c.index); b = this.normalize(b); b.returnValue = !1; "mousedown" === c.mouseIsDown && this.drag(b); !this.inClass(b.target, "highcharts-tracker") && !c.isInsidePlot(b.chartX - c.plotLeft, b.chartY - c.plotTop) || c.openMenu || this.runPointActions(b) }, inClass: function (a, b) {
                for (var c; a;) {
                    if (c =
                    C(a, "class")) { if (-1 !== c.indexOf(b)) return !0; if (-1 !== c.indexOf("highcharts-container")) return !1 } a = a.parentNode
                }
            }, onTrackerMouseOut: function (a) { var b = this.chart.hoverSeries; a = a.relatedTarget || a.toElement; if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut() }, onContainerClick: function (a) {
                var b = this.chart, c = b.hoverPoint, h = b.plotLeft, k = b.plotTop; a = this.normalize(a); b.cancelClick || (c && this.inClass(a.target,
                "highcharts-tracker") ? (n(c.series, "click", q(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (q(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - h, a.chartY - k) && n(b, "click", a)))
            }, setDOMEvents: function () {
                var b = this, c = b.chart.container; c.onmousedown = function (a) { b.onContainerMouseDown(a) }; c.onmousemove = function (a) { b.onContainerMouseMove(a) }; c.onclick = function (a) { b.onContainerClick(a) }; D(c, "mouseleave", b.onContainerMouseLeave); 1 === a.chartCount && D(r, "mouseup", b.onDocumentMouseUp); a.hasTouch && (c.ontouchstart =
                function (a) { b.onContainerTouchStart(a) }, c.ontouchmove = function (a) { b.onContainerTouchMove(a) }, 1 === a.chartCount && D(r, "touchend", b.onDocumentTouchEnd))
            }, destroy: function () { var b; this.unDocMouseMove && this.unDocMouseMove(); e(this.chart.container, "mouseleave", this.onContainerMouseLeave); a.chartCount || (e(r, "mouseup", this.onDocumentMouseUp), e(r, "touchend", this.onDocumentTouchEnd)); clearInterval(this.tooltipTimeout); for (b in this) this[b] = null }
        }
    })(K); (function (a) {
        var D = a.charts, C = a.each, G = a.extend, H = a.map,
        v = a.noop, l = a.pick; G(a.Pointer.prototype, {
            pinchTranslate: function (a, l, q, n, f, c) { this.zoomHor && this.pinchTranslateDirection(!0, a, l, q, n, f, c); this.zoomVert && this.pinchTranslateDirection(!1, a, l, q, n, f, c) }, pinchTranslateDirection: function (a, l, q, n, f, c, e, z) {
                var b = this.chart, t = a ? "x" : "y", h = a ? "X" : "Y", B = "chart" + h, p = a ? "width" : "height", x = b["plot" + (a ? "Left" : "Top")], k, F, d = z || 1, u = b.inverted, m = b.bounds[a ? "h" : "v"], y = 1 === l.length, J = l[0][B], E = q[0][B], I = !y && l[1][B], g = !y && q[1][B], r; q = function () {
                    !y && 20 < Math.abs(J - I) && (d = z ||
                    Math.abs(E - g) / Math.abs(J - I)); F = (x - E) / d + J; k = b["plot" + (a ? "Width" : "Height")] / d
                }; q(); l = F; l < m.min ? (l = m.min, r = !0) : l + k > m.max && (l = m.max - k, r = !0); r ? (E -= .8 * (E - e[t][0]), y || (g -= .8 * (g - e[t][1])), q()) : e[t] = [E, g]; u || (c[t] = F - x, c[p] = k); c = u ? 1 / d : d; f[p] = k; f[t] = l; n[u ? a ? "scaleY" : "scaleX" : "scale" + h] = d; n["translate" + h] = c * x + (E - c * J)
            }, pinch: function (a) {
                var r = this, q = r.chart, n = r.pinchDown, f = a.touches, c = f.length, e = r.lastValidTouch, z = r.hasZoom, b = r.selectionMarker, t = {}, h = 1 === c && (r.inClass(a.target, "highcharts-tracker") && q.runTrackerClick ||
                r.runChartClick), B = {}; 1 < c && (r.initiated = !0); z && r.initiated && !h && a.preventDefault(); H(f, function (a) { return r.normalize(a) }); "touchstart" === a.type ? (C(f, function (a, b) { n[b] = { chartX: a.chartX, chartY: a.chartY } }), e.x = [n[0].chartX, n[1] && n[1].chartX], e.y = [n[0].chartY, n[1] && n[1].chartY], C(q.axes, function (a) {
                    if (a.zoomEnabled) {
                        var b = q.bounds[a.horiz ? "h" : "v"], c = a.minPixelPadding, h = a.toPixels(l(a.options.min, a.dataMin)), d = a.toPixels(l(a.options.max, a.dataMax)), t = Math.max(h, d); b.min = Math.min(a.pos, Math.min(h, d) -
                        c); b.max = Math.max(a.pos + a.len, t + c)
                    }
                }), r.res = !0) : r.followTouchMove && 1 === c ? this.runPointActions(r.normalize(a)) : n.length && (b || (r.selectionMarker = b = G({ destroy: v, touch: !0 }, q.plotBox)), r.pinchTranslate(n, f, t, b, B, e), r.hasPinched = z, r.scaleGroups(t, B), r.res && (r.res = !1, this.reset(!1, 0)))
            }, touch: function (r, v) {
                var q = this.chart, n, f; if (q.index !== a.hoverChartIndex) this.onContainerMouseLeave({ relatedTarget: !0 }); a.hoverChartIndex = q.index; 1 === r.touches.length ? (r = this.normalize(r), (f = q.isInsidePlot(r.chartX - q.plotLeft,
                r.chartY - q.plotTop)) && !q.openMenu ? (v && this.runPointActions(r), "touchmove" === r.type && (v = this.pinchDown, n = v[0] ? 4 <= Math.sqrt(Math.pow(v[0].chartX - r.chartX, 2) + Math.pow(v[0].chartY - r.chartY, 2)) : !1), l(n, !0) && this.pinch(r)) : v && this.reset()) : 2 === r.touches.length && this.pinch(r)
            }, onContainerTouchStart: function (a) { this.zoomOption(a); this.touch(a, !0) }, onContainerTouchMove: function (a) { this.touch(a) }, onDocumentTouchEnd: function (l) { D[a.hoverChartIndex] && D[a.hoverChartIndex].pointer.drop(l) }
        })
    })(K); (function (a) {
        var D =
        a.addEvent, C = a.charts, G = a.css, H = a.doc, v = a.extend, l = a.noop, r = a.Pointer, w = a.removeEvent, q = a.win, n = a.wrap; if (q.PointerEvent || q.MSPointerEvent) {
            var f = {}, c = !!q.PointerEvent, e = function () { var a, c = []; c.item = function (a) { return this[a] }; for (a in f) f.hasOwnProperty(a) && c.push({ pageX: f[a].pageX, pageY: f[a].pageY, target: f[a].target }); return c }, z = function (b, c, h, f) {
                "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !C[a.hoverChartIndex] || (f(b), f = C[a.hoverChartIndex].pointer, f[c]({
                    type: h, target: b.currentTarget,
                    preventDefault: l, touches: e()
                }))
            }; v(r.prototype, {
                onContainerPointerDown: function (a) { z(a, "onContainerTouchStart", "touchstart", function (a) { f[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget } }) }, onContainerPointerMove: function (a) { z(a, "onContainerTouchMove", "touchmove", function (a) { f[a.pointerId] = { pageX: a.pageX, pageY: a.pageY }; f[a.pointerId].target || (f[a.pointerId].target = a.currentTarget) }) }, onDocumentPointerUp: function (a) { z(a, "onDocumentTouchEnd", "touchend", function (a) { delete f[a.pointerId] }) },
                batchMSEvents: function (a) { a(this.chart.container, c ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); a(this.chart.container, c ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); a(H, c ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp) }
            }); n(r.prototype, "init", function (a, c, h) { a.call(this, c, h); this.hasZoom && G(c.container, { "-ms-touch-action": "none", "touch-action": "none" }) }); n(r.prototype, "setDOMEvents", function (a) { a.apply(this); (this.hasZoom || this.followTouchMove) && this.batchMSEvents(D) });
            n(r.prototype, "destroy", function (a) { this.batchMSEvents(w); a.call(this) })
        }
    })(K); (function (a) {
        var D, C = a.addEvent, G = a.css, H = a.discardElement, v = a.defined, l = a.each, r = a.isFirefox, w = a.marginNames, q = a.merge, n = a.pick, f = a.setAnimation, c = a.stableSort, e = a.win, z = a.wrap; D = a.Legend = function (a, c) { this.init(a, c) }; D.prototype = {
            init: function (a, c) { this.chart = a; this.setOptions(c); c.enabled && (this.render(), C(this.chart, "endResize", function () { this.legend.positionCheckboxes() })) }, setOptions: function (a) {
                var b = n(a.padding,
                8); this.options = a; this.itemStyle = a.itemStyle; this.itemHiddenStyle = q(this.itemStyle, a.itemHiddenStyle); this.itemMarginTop = a.itemMarginTop || 0; this.padding = b; this.initialItemY = b - 5; this.itemHeight = this.maxItemWidth = 0; this.symbolWidth = n(a.symbolWidth, 16); this.pages = []
            }, update: function (a, c) { var b = this.chart; this.setOptions(q(!0, this.options, a)); this.destroy(); b.isDirtyLegend = b.isDirtyBox = !0; n(c, !0) && b.redraw() }, colorizeItem: function (a, c) {
                a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                var b = this.options, e = a.legendItem, p = a.legendLine, t = a.legendSymbol, k = this.itemHiddenStyle.color, b = c ? b.itemStyle.color : k, f = c ? a.color || k : k, d = a.options && a.options.marker, u = { fill: f }, m; e && e.css({ fill: b, color: b }); p && p.attr({ stroke: f }); if (t) { if (d && t.isMarker && (u = a.pointAttribs(), !c)) for (m in u) u[m] = k; t.attr(u) }
            }, positionItem: function (a) {
                var b = this.options, c = b.symbolPadding, b = !b.rtl, e = a._legendItemPos, p = e[0], e = e[1], f = a.checkbox; (a = a.legendGroup) && a.element && a.translate(b ? p : this.legendWidth - p - 2 * c - 4, e); f && (f.x =
                p, f.y = e)
            }, destroyItem: function (a) { var b = a.checkbox; l(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) { a[b] && (a[b] = a[b].destroy()) }); b && H(a.checkbox) }, destroy: function () { function a(a) { this[a] && (this[a] = this[a].destroy()) } l(this.getAllItems(), function (b) { l(["legendItem", "legendGroup"], a, b) }); l("clipRect up down pager nav box title group".split(" "), a, this); this.display = null }, positionCheckboxes: function (a) {
                var b = this.group && this.group.alignAttr, c, e = this.clipHeight || this.legendHeight,
                p = this.titleHeight; b && (c = b.translateY, l(this.allItems, function (h) { var k = h.checkbox, t; k && (t = c + p + k.y + (a || 0) + 3, G(k, { left: b.translateX + h.checkboxOffset + k.x - 20 + "px", top: t + "px", display: t > c - 6 && t < c + e - 6 ? "" : "none" })) }))
            }, renderTitle: function () {
                var a = this.padding, c = this.options.title, h = 0; c.text && (this.title || (this.title = this.chart.renderer.label(c.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({ zIndex: 1 }).css(c.style).add(this.group)), a = this.title.getBBox(), h = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: h }));
                this.titleHeight = h
            }, setText: function (b) { var c = this.options; b.legendItem.attr({ text: c.labelFormat ? a.format(c.labelFormat, b) : c.labelFormatter.call(b) }) }, renderItem: function (a) {
                var b = this.chart, c = b.renderer, e = this.options, p = "horizontal" === e.layout, f = this.symbolWidth, k = e.symbolPadding, l = this.itemStyle, d = this.itemHiddenStyle, u = this.padding, m = p ? n(e.itemDistance, 20) : 0, y = !e.rtl, J = e.width, E = e.itemMarginBottom || 0, I = this.itemMarginTop, g = a.legendItem, z = !a.series, r = !z && a.series.drawLegendSymbol ? a.series : a, v = r.options,
                v = this.createCheckboxForItem && v && v.showCheckbox, w = e.useHTML, P = a.options.className; g || (a.legendGroup = c.g("legend-item").addClass("highcharts-" + r.type + "-series highcharts-color-" + a.colorIndex + (P ? " " + P : "") + (z ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = g = c.text("", y ? f + k : -k, this.baseline || 0, w).css(q(a.visible ? l : d)).attr({ align: y ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (l = l.fontSize, this.fontMetrics = c.fontMetrics(l, g), this.baseline = this.fontMetrics.f +
                3 + I, g.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, r.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, g, w), v && this.createCheckboxForItem(a)); this.colorizeItem(a, a.visible); this.setText(a); c = g.getBBox(); f = a.checkboxOffset = e.itemWidth || a.legendItemWidth || f + k + c.width + m + (v ? 20 : 0); this.itemHeight = k = Math.round(a.legendItemHeight || c.height || this.symbolHeight); p && this.itemX - u + f > (J || b.spacingBox.width - 2 * u - e.x) && (this.itemX = u, this.itemY += I + this.lastLineHeight +
                E, this.lastLineHeight = 0); this.maxItemWidth = Math.max(this.maxItemWidth, f); this.lastItemY = I + this.itemY + E; this.lastLineHeight = Math.max(k, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; p ? this.itemX += f : (this.itemY += I + k + E, this.lastLineHeight = k); this.offsetWidth = J || Math.max((p ? this.itemX - u - m : f) + u, this.offsetWidth)
            }, getAllItems: function () {
                var a = []; l(this.chart.series, function (b) {
                    var c = b && b.options; b && n(c.showInLegend, v(c.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ?
                    b.data : b)))
                }); return a
            }, adjustMargins: function (a, c) { var b = this.chart, e = this.options, p = e.align.charAt(0) + e.verticalAlign.charAt(0) + e.layout.charAt(0); e.floating || l([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (h, k) { h.test(p) && !v(a[k]) && (b[w[k]] = Math.max(b[w[k]], b.legend[(k + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][k] * e[k % 2 ? "x" : "y"] + n(e.margin, 12) + c[k])) }) }, render: function () {
                var a = this, e = a.chart, h = e.renderer, f = a.group, p, x, k, n, d = a.box, u = a.options, m = a.padding; a.itemX = m; a.itemY =
                a.initialItemY; a.offsetWidth = 0; a.lastItemY = 0; f || (a.group = f = h.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = h.g().attr({ zIndex: 1 }).add(f), a.scrollGroup = h.g().add(a.contentGroup)); a.renderTitle(); p = a.getAllItems(); c(p, function (a, b) { return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); u.reversed && p.reverse(); a.allItems = p; a.display = x = !!p.length; a.lastLineHeight = 0; l(p, function (b) { a.renderItem(b) }); k = (u.width || a.offsetWidth) + m; n = a.lastItemY + a.lastLineHeight + a.titleHeight;
                n = a.handleOverflow(n); n += m; d || (a.box = d = h.rect().addClass("highcharts-legend-box").attr({ r: u.borderRadius }).add(f), d.isNew = !0); d.attr({ stroke: u.borderColor, "stroke-width": u.borderWidth || 0, fill: u.backgroundColor || "none" }).shadow(u.shadow); 0 < k && 0 < n && (d[d.isNew ? "attr" : "animate"](d.crisp({ x: 0, y: 0, width: k, height: n }, d.strokeWidth())), d.isNew = !1); d[x ? "show" : "hide"](); a.legendWidth = k; a.legendHeight = n; l(p, function (b) { a.positionItem(b) }); x && f.align(q(u, { width: k, height: n }), !0, "spacingBox"); e.isResizing || this.positionCheckboxes()
            },
            handleOverflow: function (a) {
                var b = this, c = this.chart, e = c.renderer, p = this.options, f = p.y, k = this.padding, c = c.spacingBox.height + ("top" === p.verticalAlign ? -f : f) - k, f = p.maxHeight, z, d = this.clipRect, u = p.navigation, m = n(u.animation, !0), y = u.arrowSize || 12, J = this.nav, E = this.pages, I, g = this.allItems, q = function (a) { a ? d.attr({ height: a }) : d && (b.clipRect = d.destroy(), b.contentGroup.clip()); b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + k + "px,9999px," + (k + a) + "px,0)" : "auto") }; "horizontal" !== p.layout || "middle" ===
                p.verticalAlign || p.floating || (c /= 2); f && (c = Math.min(c, f)); E.length = 0; a > c && !1 !== u.enabled ? (this.clipHeight = z = Math.max(c - 20 - this.titleHeight - k, 0), this.currentPage = n(this.currentPage, 1), this.fullHeight = a, l(g, function (a, b) { var c = a._legendItemPos[1]; a = Math.round(a.legendItem.getBBox().height); var d = E.length; if (!d || c - E[d - 1] > z && (I || c) !== E[d - 1]) E.push(I || c), d++; b === g.length - 1 && c + a - E[d - 1] > z && E.push(c); c !== I && (I = c) }), d || (d = b.clipRect = e.clipRect(0, k, 9999, 0), b.contentGroup.clip(d)), q(z), J || (this.nav = J = e.g().attr({ zIndex: 1 }).add(this.group),
                this.up = e.symbol("triangle", 0, 0, y, y).on("click", function () { b.scroll(-1, m) }).add(J), this.pager = e.text("", 15, 10).addClass("highcharts-legend-navigation").css(u.style).add(J), this.down = e.symbol("triangle-down", 0, 0, y, y).on("click", function () { b.scroll(1, m) }).add(J)), b.scroll(0), a = c) : J && (q(), this.nav = J.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
            }, scroll: function (a, c) {
                var b = this.pages, e = b.length; a = this.currentPage + a; var p = this.clipHeight, t = this.options.navigation, k = this.pager,
                n = this.padding; a > e && (a = e); 0 < a && (void 0 !== c && f(c, this.chart), this.nav.attr({ translateX: n, translateY: p + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), k.attr({ text: a + "/" + e }), this.down.attr({ x: 18 + this.pager.getBBox().width, "class": a === e ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), this.up.attr({ fill: 1 === a ? t.inactiveColor : t.activeColor }).css({ cursor: 1 === a ? "default" : "pointer" }), this.down.attr({
                    fill: a ===
                    e ? t.inactiveColor : t.activeColor
                }).css({ cursor: a === e ? "default" : "pointer" }), c = -b[a - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: c }), this.currentPage = a, this.positionCheckboxes(c))
            }
        }; a.LegendSymbolMixin = {
            drawRectangle: function (a, c) { var b = a.symbolHeight, e = a.options.squareSymbol; c.legendSymbol = this.chart.renderer.rect(e ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, e ? b : a.symbolWidth, b, n(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(c.legendGroup) }, drawLineMarker: function (a) {
                var b =
                this.options, c = b.marker, e = a.symbolWidth, p = a.symbolHeight, f = p / 2, k = this.chart.renderer, l = this.legendGroup; a = a.baseline - Math.round(.3 * a.fontMetrics.b); var d; d = { "stroke-width": b.lineWidth || 0 }; b.dashStyle && (d.dashstyle = b.dashStyle); this.legendLine = k.path(["M", 0, a, "L", e, a]).addClass("highcharts-graph").attr(d).add(l); c && !1 !== c.enabled && (b = Math.min(n(c.radius, f), f), 0 === this.symbol.indexOf("url") && (c = q(c, { width: p, height: p }), b = 0), this.legendSymbol = c = k.symbol(this.symbol, e / 2 - b, a - b, 2 * b, 2 * b, c).addClass("highcharts-point").add(l),
                c.isMarker = !0)
            }
        }; (/Trident\/7\.0/.test(e.navigator.userAgent) || r) && z(D.prototype, "positionItem", function (a, c) { var b = this, e = function () { c._legendItemPos && a.call(b, c) }; e(); setTimeout(e) })
    })(K); (function (a) {
        var D = a.addEvent, C = a.animate, G = a.animObject, H = a.attr, v = a.doc, l = a.Axis, r = a.createElement, w = a.defaultOptions, q = a.discardElement, n = a.charts, f = a.css, c = a.defined, e = a.each, z = a.extend, b = a.find, t = a.fireEvent, h = a.getStyle, B = a.grep, p = a.isNumber, x = a.isObject, k = a.isString, F = a.Legend, d = a.marginNames, u = a.merge,
        m = a.Pointer, y = a.pick, J = a.pInt, E = a.removeEvent, I = a.seriesTypes, g = a.splat, L = a.svg, R = a.syncTimeout, O = a.win, M = a.Renderer, P = a.Chart = function () { this.getArgs.apply(this, arguments) }; a.chart = function (a, b, c) { return new P(a, b, c) }; P.prototype = {
            callbacks: [], getArgs: function () { var a = [].slice.call(arguments); if (k(a[0]) || a[0].nodeName) this.renderTo = a.shift(); this.init(a[0], a[1]) }, init: function (b, c) {
                var d, g = b.series; b.series = null; d = u(w, b); d.series = b.series = g; this.userOptions = b; b = d.chart; g = b.events; this.margin = [];
                this.spacing = []; this.bounds = { h: {}, v: {} }; this.callback = c; this.isResizing = 0; this.options = d; this.axes = []; this.series = []; this.hasCartesianSeries = b.showAxes; var m; this.index = n.length; n.push(this); a.chartCount++; if (g) for (m in g) D(this, m, g[m]); this.xAxis = []; this.yAxis = []; this.pointCount = this.colorCounter = this.symbolCounter = 0; this.firstRender()
            }, initSeries: function (b) { var c = this.options.chart; (c = I[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0); c = new c; c.init(this, b); return c }, orderSeries: function (a) {
                var b =
                this.series; for (a = a || 0; a < b.length; a++) b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1))
            }, isInsidePlot: function (a, b, c) { var d = c ? b : a; a = c ? a : b; return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight }, redraw: function (b) {
                var c = this.axes, d = this.series, g = this.pointer, m = this.legend, k = this.isDirtyLegend, h, y, p = this.hasCartesianSeries, f = this.isDirtyBox, E, x = this.renderer, u = x.isHidden(), I = []; this.setResponsive && this.setResponsive(!1); a.setAnimation(b, this); u && this.cloneRenderTo(); this.layOutTitles();
                for (b = d.length; b--;) if (E = d[b], E.options.stacking && (h = !0, E.isDirty)) { y = !0; break } if (y) for (b = d.length; b--;) E = d[b], E.options.stacking && (E.isDirty = !0); e(d, function (a) { a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), k = !0); a.isDirtyData && t(a, "updatedData") }); k && m.options.enabled && (m.render(), this.isDirtyLegend = !1); h && this.getStacks(); p && e(c, function (a) { a.updateNames(); a.setScale() }); this.getMargins(); p && (e(c, function (a) { a.isDirty && (f = !0) }), e(c, function (a) {
                    var b = a.min + "," + a.max;
                    a.extKey !== b && (a.extKey = b, I.push(function () { t(a, "afterSetExtremes", z(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (f || h) && a.redraw()
                })); f && this.drawChartBox(); t(this, "predraw"); e(d, function (a) { (f || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); g && g.reset(!0); x.draw(); t(this, "redraw"); t(this, "render"); u && this.cloneRenderTo(!0); e(I, function (a) { a.call() })
            }, get: function (a) {
                function c(b) { return b.id === a || b.options && b.options.id === a } var d, g = this.series, m; d = b(this.axes, c) || b(this.series, c);
                for (m = 0; !d && m < g.length; m++) d = b(g[m].points || [], c); return d
            }, getAxes: function () { var a = this, b = this.options, c = b.xAxis = g(b.xAxis || {}), b = b.yAxis = g(b.yAxis || {}); e(c, function (a, b) { a.index = b; a.isX = !0 }); e(b, function (a, b) { a.index = b }); c = c.concat(b); e(c, function (b) { new l(a, b) }) }, getSelectedPoints: function () { var a = []; e(this.series, function (b) { a = a.concat(B(b.points || [], function (a) { return a.selected })) }); return a }, getSelectedSeries: function () { return B(this.series, function (a) { return a.selected }) }, setTitle: function (a,
            b, c) { var d = this, g = d.options, m; m = g.title = u({ style: { color: "#333333", fontSize: g.isStock ? "16px" : "18px" } }, g.title, a); g = g.subtitle = u({ style: { color: "#666666" } }, g.subtitle, b); e([["title", a, m], ["subtitle", b, g]], function (a, b) { var c = a[0], g = d[c], m = a[1]; a = a[2]; g && m && (d[c] = g = g.destroy()); a && a.text && !g && (d[c] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + c, zIndex: a.zIndex || 4 }).add(), d[c].update = function (a) { d.setTitle(!b && a, b && a) }, d[c].css(a.style)) }); d.layOutTitles(c) }, layOutTitles: function (a) {
                var b =
                0, c, d = this.renderer, g = this.spacingBox; e(["title", "subtitle"], function (a) { var c = this[a], m = this.options[a], k; c && (k = m.style.fontSize, k = d.fontMetrics(k, c).b, c.css({ width: (m.width || g.width + m.widthAdjust) + "px" }).align(z({ y: b + k + ("title" === a ? -3 : 2) }, m), !1, "spacingBox"), m.floating || m.verticalAlign || (b = Math.ceil(b + c.getBBox(m.useHTML).height))) }, this); c = this.titleOffset !== b; this.titleOffset = b; !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && y(a, !0) && this.isDirtyBox && this.redraw())
            }, getChartSize: function () {
                var b =
                this.options.chart, d = b.width, b = b.height, g = this.renderToClone || this.renderTo; c(d) || (this.containerWidth = h(g, "width")); c(b) || (this.containerHeight = h(g, "height")); this.chartWidth = Math.max(0, d || this.containerWidth || 600); this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || this.containerHeight || 400)
            }, cloneRenderTo: function (a) {
                var b = this.renderToClone, c = this.container; if (a) { if (b) { for (; b.childNodes.length;) this.renderTo.appendChild(b.firstChild); q(b); delete this.renderToClone } } else c && c.parentNode ===
                this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), f(b, { position: "absolute", top: "-9999px", display: "block" }), b.style.setProperty && b.style.setProperty("display", "block", "important"), v.body.appendChild(b), c && b.appendChild(c)
            }, setClassName: function (a) { this.container.className = "highcharts-container " + (a || "") }, getContainer: function () {
                var b, c = this.options, d = c.chart, g, m; b = this.renderTo; var h = a.uniqueKey(), y; b || (this.renderTo = b = d.renderTo); k(b) && (this.renderTo = b = v.getElementById(b));
                b || a.error(13, !0); g = J(H(b, "data-highcharts-chart")); p(g) && n[g] && n[g].hasRendered && n[g].destroy(); H(b, "data-highcharts-chart", this.index); b.innerHTML = ""; d.skipClone || b.offsetWidth || this.cloneRenderTo(); this.getChartSize(); g = this.chartWidth; m = this.chartHeight; y = z({ position: "relative", overflow: "hidden", width: g + "px", height: m + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, d.style); this.container = b = r("div", { id: h }, y, this.renderToClone || b); this._cursor = b.style.cursor;
                this.renderer = new (a[d.renderer] || M)(b, g, m, null, d.forExport, c.exporting && c.exporting.allowHTML); this.setClassName(d.className); this.renderer.setStyle(d.style); this.renderer.chartIndex = this.index
            }, getMargins: function (a) {
                var b = this.spacing, d = this.margin, g = this.titleOffset; this.resetMargins(); g && !c(d[0]) && (this.plotTop = Math.max(this.plotTop, g + this.options.title.margin + b[0])); this.legend.display && this.legend.adjustMargins(d, b); this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] ||
                0) + this.extraMargin.value); this.extraTopMargin && (this.plotTop += this.extraTopMargin); a || this.getAxisMargins()
            }, getAxisMargins: function () { var a = this, b = a.axisOffset = [0, 0, 0, 0], g = a.margin; a.hasCartesianSeries && e(a.axes, function (a) { a.visible && a.getOffset() }); e(d, function (d, m) { c(g[m]) || (a[d] += b[m]) }); a.setChartSize() }, reflow: function (a) {
                var b = this, d = b.options.chart, g = b.renderTo, m = c(d.width), k = d.width || h(g, "width"), d = d.height || h(g, "height"), g = a ? a.target : O; if (!m && !b.isPrinting && k && d && (g === O || g === v)) {
                    if (k !==
                    b.containerWidth || d !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = R(function () { b.container && b.setSize(void 0, void 0, !1) }, a ? 100 : 0); b.containerWidth = k; b.containerHeight = d
                }
            }, initReflow: function () { var a = this, b; b = D(O, "resize", function (b) { a.reflow(b) }); D(a, "destroy", b) }, setSize: function (b, c, d) {
                var g = this, m = g.renderer; g.isResizing += 1; a.setAnimation(d, g); g.oldChartHeight = g.chartHeight; g.oldChartWidth = g.chartWidth; void 0 !== b && (g.options.chart.width = b); void 0 !== c && (g.options.chart.height =
                c); g.getChartSize(); b = m.globalAnimation; (b ? C : f)(g.container, { width: g.chartWidth + "px", height: g.chartHeight + "px" }, b); g.setChartSize(!0); m.setSize(g.chartWidth, g.chartHeight, d); e(g.axes, function (a) { a.isDirty = !0; a.setScale() }); g.isDirtyLegend = !0; g.isDirtyBox = !0; g.layOutTitles(); g.getMargins(); g.redraw(d); g.oldChartHeight = null; t(g, "resize"); R(function () { g && t(g, "endResize", null, function () { --g.isResizing }) }, G(b).duration)
            }, setChartSize: function (a) {
                var b = this.inverted, c = this.renderer, d = this.chartWidth, g =
                this.chartHeight, m = this.options.chart, k = this.spacing, h = this.clipOffset, y, p, f, E; this.plotLeft = y = Math.round(this.plotLeft); this.plotTop = p = Math.round(this.plotTop); this.plotWidth = f = Math.max(0, Math.round(d - y - this.marginRight)); this.plotHeight = E = Math.max(0, Math.round(g - p - this.marginBottom)); this.plotSizeX = b ? E : f; this.plotSizeY = b ? f : E; this.plotBorderWidth = m.plotBorderWidth || 0; this.spacingBox = c.spacingBox = { x: k[3], y: k[0], width: d - k[3] - k[1], height: g - k[0] - k[2] }; this.plotBox = c.plotBox = { x: y, y: p, width: f, height: E };
                d = 2 * Math.floor(this.plotBorderWidth / 2); b = Math.ceil(Math.max(d, h[3]) / 2); c = Math.ceil(Math.max(d, h[0]) / 2); this.clipBox = { x: b, y: c, width: Math.floor(this.plotSizeX - Math.max(d, h[1]) / 2 - b), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, h[2]) / 2 - c)) }; a || e(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() })
            }, resetMargins: function () {
                var a = this, b = a.options.chart; e(["margin", "spacing"], function (c) { var d = b[c], g = x(d) ? d : [d, d, d, d]; e(["Top", "Right", "Bottom", "Left"], function (d, m) { a[c][m] = y(b[c + d], g[m]) }) });
                e(d, function (b, c) { a[b] = y(a.margin[c], a.spacing[c]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0]
            }, drawChartBox: function () {
                var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, g = this.chartBackground, m = this.plotBackground, k = this.plotBorder, h, y = this.plotBGImage, e = a.backgroundColor, p = a.plotBackgroundColor, f = a.plotBackgroundImage, E, t = this.plotLeft, x = this.plotTop, u = this.plotWidth, I = this.plotHeight, n = this.plotBox, l = this.clipRect, z = this.clipBox, J = "animate"; g || (this.chartBackground =
                g = b.rect().addClass("highcharts-background").add(), J = "attr"); h = a.borderWidth || 0; E = h + (a.shadow ? 8 : 0); e = { fill: e || "none" }; if (h || g["stroke-width"]) e.stroke = a.borderColor, e["stroke-width"] = h; g.attr(e).shadow(a.shadow); g[J]({ x: E / 2, y: E / 2, width: c - E - h % 2, height: d - E - h % 2, r: a.borderRadius }); J = "animate"; m || (J = "attr", this.plotBackground = m = b.rect().addClass("highcharts-plot-background").add()); m[J](n); m.attr({ fill: p || "none" }).shadow(a.plotShadow); f && (y ? y.animate(n) : this.plotBGImage = b.image(f, t, x, u, I).add()); l ? l.animate({
                    width: z.width,
                    height: z.height
                }) : this.clipRect = b.clipRect(z); J = "animate"; k || (J = "attr", this.plotBorder = k = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); k.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" }); k[J](k.crisp({ x: t, y: x, width: u, height: I }, -k.strokeWidth())); this.isDirtyBox = !1
            }, propFromSeries: function () {
                var a = this, b = a.options.chart, c, d = a.options.series, g, m; e(["inverted", "angular", "polar"], function (k) {
                    c = I[b.type || b.defaultSeriesType]; m = b[k] || c && c.prototype[k];
                    for (g = d && d.length; !m && g--;) (c = I[d[g].type]) && c.prototype[k] && (m = !0); a[k] = m
                })
            }, linkSeries: function () { var a = this, b = a.series; e(b, function (a) { a.linkedSeries.length = 0 }); e(b, function (b) { var c = b.options.linkedTo; k(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = y(b.options.visible, c.options.visible, b.visible)) }) }, renderSeries: function () { e(this.series, function (a) { a.translate(); a.render() }) }, renderLabels: function () {
                var a = this, b = a.options.labels;
                b.items && e(b.items, function (c) { var d = z(b.style, c.style), g = J(d.left) + a.plotLeft, m = J(d.top) + a.plotTop + 12; delete d.left; delete d.top; a.renderer.text(c.html, g, m).attr({ zIndex: 2 }).css(d).add() })
            }, render: function () {
                var a = this.axes, b = this.renderer, c = this.options, d, g, m; this.setTitle(); this.legend = new F(this, c.legend); this.getStacks && this.getStacks(); this.getMargins(!0); this.setChartSize(); c = this.plotWidth; d = this.plotHeight -= 21; e(a, function (a) { a.setScale() }); this.getAxisMargins(); g = 1.1 < c / this.plotWidth; m =
                1.05 < d / this.plotHeight; if (g || m) e(a, function (a) { (a.horiz && g || !a.horiz && m) && a.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries && e(a, function (a) { a.visible && a.render() }); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
            }, addCredits: function (a) {
                var b = this; a = u(!0, this.options.credits, a); a.enabled && !this.credits && (this.credits =
                this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () { a.href && (O.location.href = a.href) }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position), this.credits.update = function (a) { b.credits = b.credits.destroy(); b.addCredits(a) })
            }, destroy: function () {
                var b = this, c = b.axes, d = b.series, g = b.container, m, k = g && g.parentNode; t(b, "destroy"); n[b.index] = void 0; a.chartCount--; b.renderTo.removeAttribute("data-highcharts-chart"); E(b); for (m = c.length; m--;) c[m] =
                c[m].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (m = d.length; m--;) d[m] = d[m].destroy(); e("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (a) { var c = b[a]; c && c.destroy && (b[a] = c.destroy()) }); g && (g.innerHTML = "", E(g), k && q(g)); for (m in b) delete b[m]
            }, isReadyToRender: function () {
                var a = this; return L || O != O.top || "complete" === v.readyState ? !0 : (v.attachEvent("onreadystatechange",
                function () { v.detachEvent("onreadystatechange", a.firstRender); "complete" === v.readyState && a.firstRender() }), !1)
            }, firstRender: function () { var a = this, b = a.options; if (a.isReadyToRender()) { a.getContainer(); t(a, "init"); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes(); e(b.series || [], function (b) { a.initSeries(b) }); a.linkSeries(); t(a, "beforeRender"); m && (a.pointer = new m(a, b)); a.render(); if (!a.renderer.imgCount && a.onload) a.onload(); a.cloneRenderTo(!0) } }, onload: function () {
                e([this.callback].concat(this.callbacks),
                function (a) { a && void 0 !== this.index && a.apply(this, [this]) }, this); t(this, "load"); t(this, "render"); c(this.index) && !1 !== this.options.chart.reflow && this.initReflow(); this.onload = null
            }
        }
    })(K); (function (a) {
        var D, C = a.each, G = a.extend, H = a.erase, v = a.fireEvent, l = a.format, r = a.isArray, w = a.isNumber, q = a.pick, n = a.removeEvent; D = a.Point = function () { }; D.prototype = {
            init: function (a, c, e) {
                this.series = a; this.color = a.color; this.applyOptions(c, e); a.options.colorByPoint ? (c = a.options.colors || a.chart.options.colors, this.color = this.color ||
                c[a.colorCounter], c = c.length, e = a.colorCounter, a.colorCounter++, a.colorCounter === c && (a.colorCounter = 0)) : e = a.colorIndex; this.colorIndex = q(this.colorIndex, e); a.chart.pointCount++; return this
            }, applyOptions: function (a, c) {
                var e = this.series, f = e.options.pointValKey || e.pointValKey; a = D.prototype.optionsToObject.call(this, a); G(this, a); this.options = this.options ? G(this.options, a) : a; a.group && delete this.group; f && (this.y = this[f]); this.isNull = q(this.isValid && !this.isValid(), null === this.x || !w(this.y, !0)); this.selected &&
                (this.state = "select"); "name" in this && void 0 === c && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)); void 0 === this.x && e && (this.x = void 0 === c ? e.autoIncrement(this) : c); return this
            }, optionsToObject: function (a) {
                var c = {}, e = this.series, f = e.options.keys, b = f || e.pointArrayMap || ["y"], t = b.length, h = 0, n = 0; if (w(a) || null === a) c[b[0]] = a; else if (r(a)) for (!f && a.length > t && (e = typeof a[0], "string" === e ? c.name = a[0] : "number" === e && (c.x = a[0]), h++) ; n < t;) f && void 0 === a[h] || (c[b[n]] = a[h]), h++, n++; else "object" === typeof a &&
                (c = a, a.dataLabels && (e._hasPointLabels = !0), a.marker && (e._hasPointMarkers = !0)); return c
            }, getClassName: function () { return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "") }, getZone: function () {
                var a =
                this.series, c = a.zones, a = a.zoneAxis || "y", e = 0, n; for (n = c[e]; this[a] >= n.value;) n = c[++e]; n && n.color && !this.options.color && (this.color = n.color); return n
            }, destroy: function () { var a = this.series.chart, c = a.hoverPoints, e; a.pointCount--; c && (this.setState(), H(c, this), c.length || (a.hoverPoints = null)); if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) n(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (e in this) this[e] = null }, destroyElements: function () {
                for (var a = ["graphic",
                "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], c, e = 6; e--;) c = a[e], this[c] && (this[c] = this[c].destroy())
            }, getLabelConfig: function () { return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }, tooltipFormatter: function (a) {
                var c = this.series, e = c.tooltipOptions, f = q(e.valueDecimals, ""), b = e.valuePrefix || "", t = e.valueSuffix || ""; C(c.pointArrayMap || ["y"], function (c) {
                    c =
                    "{point." + c; if (b || t) a = a.replace(c + "}", b + c + "}" + t); a = a.replace(c + "}", c + ":,." + f + "f}")
                }); return l(a, { point: this, series: this.series })
            }, firePointEvent: function (a, c, e) { var f = this, b = this.series.options; (b.point.events[a] || f.options && f.options.events && f.options.events[a]) && this.importEvents(); "click" === a && b.allowPointSelect && (e = function (a) { f.select && f.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); v(this, a, c, e) }, visible: !0
        }
    })(K); (function (a) {
        var D = a.addEvent, C = a.animObject, G = a.arrayMax, H = a.arrayMin, v = a.correctFloat,
        l = a.Date, r = a.defaultOptions, w = a.defaultPlotOptions, q = a.defined, n = a.each, f = a.erase, c = a.extend, e = a.fireEvent, z = a.grep, b = a.isArray, t = a.isNumber, h = a.isString, B = a.merge, p = a.pick, x = a.removeEvent, k = a.splat, F = a.SVGElement, d = a.syncTimeout, u = a.win; a.Series = a.seriesType("line", null, {
            lineWidth: 2, allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                lineWidth: 0, lineColor: "#ffffff", radius: 4, states: {
                    hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000", lineWidth: 2
                    }
                }
            }, point: { events: {} }, dataLabels: { align: "center", formatter: function () { return null === this.y ? "" : a.numberFormat(this.y, -1) }, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0, padding: 5 }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
        },
        {
            isCartesian: !0, pointClass: a.Point, sorted: !0, requireSorting: !0, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], coll: "series", init: function (a, b) {
                var d = this, m, k, g = a.series, h; d.chart = a; d.options = b = d.setOptions(b); d.linkedSeries = []; d.bindAxes(); c(d, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); k = b.events; for (m in k) D(d, m, k[m]); if (k && k.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; d.getColor();
                d.getSymbol(); n(d.parallelArrays, function (a) { d[a + "Data"] = [] }); d.setData(b.data, !1); d.isCartesian && (a.hasCartesianSeries = !0); g.length && (h = g[g.length - 1]); d._i = p(h && h._i, -1) + 1; a.orderSeries(this.insert(g))
            }, insert: function (a) { var b = this.options.index, c; if (t(b)) { for (c = a.length; c--;) if (b >= p(a[c].options.index, a[c]._i)) { a.splice(c + 1, 0, this); break } -1 === c && a.unshift(this); c += 1 } else a.push(this); return p(c, a.length - 1) }, bindAxes: function () {
                var b = this, c = b.options, d = b.chart, k; n(b.axisTypes || [], function (m) {
                    n(d[m],
                    function (a) { k = a.options; if (c[m] === k.index || void 0 !== c[m] && c[m] === k.id || void 0 === c[m] && 0 === k.index) b.insert(a.series), b[m] = a, a.isDirty = !0 }); b[m] || b.optionalAxis === m || a.error(18, !0)
                })
            }, updateParallelArrays: function (a, b) { var c = a.series, d = arguments, m = t(b) ? function (d) { var g = "y" === d && c.toYData ? c.toYData(a) : a[d]; c[d + "Data"][b] = g } : function (a) { Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2)) }; n(c.parallelArrays, m) }, autoIncrement: function () {
                var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit,
                b = p(b, a.pointStart, 0); this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1); d && (a = new l(b), "day" === d ? a = +a[l.hcSetDate](a[l.hcGetDate]() + c) : "month" === d ? a = +a[l.hcSetMonth](a[l.hcGetMonth]() + c) : "year" === d && (a = +a[l.hcSetFullYear](a[l.hcGetFullYear]() + c)), c = a - b); this.xIncrement = b + c; return b
            }, setOptions: function (a) {
                var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, m = c[this.type]; this.userOptions = a; c = B(m, c.series, a); this.tooltipOptions = B(r.tooltip, r.plotOptions[this.type].tooltip,
                b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip); this.stickyTracking = p(a.stickyTracking, d[this.type] && d[this.type].stickyTracking, d.series && d.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : c.stickyTracking); null === m.marker && delete c.marker; this.zoneAxis = c.zoneAxis; a = this.zones = (c.zones || []).slice(); !c.negativeColor && !c.negativeFillColor || c.zones || a.push({
                    value: c[this.zoneAxis + "Threshold"] || c.threshold || 0, className: "highcharts-negative",
                    color: c.negativeColor, fillColor: c.negativeFillColor
                }); a.length && q(a[a.length - 1].value) && a.push({ color: this.color, fillColor: this.fillColor }); return c
            }, getCyclic: function (a, b, c) { var d, m = this.chart, g = this.userOptions, k = a + "Index", h = a + "Counter", e = c ? c.length : p(m.options.chart[a + "Count"], m[a + "Count"]); b || (d = p(g[k], g["_" + k]), q(d) || (m.series.length || (m[h] = 0), g["_" + k] = d = m[h] % e, m[h] += 1), c && (b = c[d])); void 0 !== d && (this[k] = d); this[a] = b }, getColor: function () {
                this.options.colorByPoint ? this.options.color = null : this.getCyclic("color",
                this.options.color || w[this.type].color, this.chart.options.colors)
            }, getSymbol: function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }, drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker, setData: function (c, d, k, e) {
                var m = this, g = m.points, y = g && g.length || 0, E, f = m.options, x = m.chart, u = null, l = m.xAxis, z = f.turboThreshold, F = this.xData, q = this.yData, r = (E = m.pointArrayMap) && E.length; c = c || []; E = c.length; d = p(d, !0); if (!1 !== e && E && y === E && !m.cropped && !m.hasGroupedData && m.visible) n(c, function (a,
                b) { g[b].update && a !== f.data[b] && g[b].update(a, !1, null, !1) }); else {
                    m.xIncrement = null; m.colorCounter = 0; n(this.parallelArrays, function (a) { m[a + "Data"].length = 0 }); if (z && E > z) { for (k = 0; null === u && k < E;) u = c[k], k++; if (t(u)) for (k = 0; k < E; k++) F[k] = this.autoIncrement(), q[k] = c[k]; else if (b(u)) if (r) for (k = 0; k < E; k++) u = c[k], F[k] = u[0], q[k] = u.slice(1, r + 1); else for (k = 0; k < E; k++) u = c[k], F[k] = u[0], q[k] = u[1]; else a.error(12) } else for (k = 0; k < E; k++) void 0 !== c[k] && (u = { series: m }, m.pointClass.prototype.applyOptions.apply(u, [c[k]]), m.updateParallelArrays(u,
                    k)); h(q[0]) && a.error(14, !0); m.data = []; m.options.data = m.userOptions.data = c; for (k = y; k--;) g[k] && g[k].destroy && g[k].destroy(); l && (l.minRange = l.userMinRange); m.isDirty = x.isDirtyBox = !0; m.isDirtyData = !!g; k = !1
                } "point" === f.legendType && (this.processData(), this.generatePoints()); d && x.redraw(k)
            }, processData: function (b) {
                var c = this.xData, d = this.yData, m = c.length, k; k = 0; var g, h, e = this.xAxis, p, f = this.options; p = f.cropThreshold; var t = this.getExtremesFromAll || f.getExtremesFromAll, u = this.isCartesian, f = e && e.val2lin, x = e &&
                e.isLog, n, l; if (u && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !b) return !1; e && (b = e.getExtremes(), n = b.min, l = b.max); if (u && this.sorted && !t && (!p || m > p || this.forceCrop)) if (c[m - 1] < n || c[0] > l) c = [], d = []; else if (c[0] < n || c[m - 1] > l) k = this.cropData(this.xData, this.yData, n, l), c = k.xData, d = k.yData, k = k.start, g = !0; for (p = c.length || 1; --p;) m = x ? f(c[p]) - f(c[p - 1]) : c[p] - c[p - 1], 0 < m && (void 0 === h || m < h) ? h = m : 0 > m && this.requireSorting && a.error(15); this.cropped = g; this.cropStart = k; this.processedXData = c; this.processedYData = d; this.closestPointRange =
                h
            }, cropData: function (a, b, c, d) { var m = a.length, g = 0, k = m, h = p(this.cropShoulder, 1), e; for (e = 0; e < m; e++) if (a[e] >= c) { g = Math.max(0, e - h); break } for (c = e; c < m; c++) if (a[c] > d) { k = c + h; break } return { xData: a.slice(g, k), yData: b.slice(g, k), start: g, end: k } }, generatePoints: function () {
                var a = this.options.data, b = this.data, c, d = this.processedXData, h = this.processedYData, g = this.pointClass, e = d.length, p = this.cropStart || 0, f, t = this.hasGroupedData, u, x = [], n; b || t || (b = [], b.length = a.length, b = this.data = b); for (n = 0; n < e; n++) f = p + n, t ? (u = (new g).init(this,
                [d[n]].concat(k(h[n]))), u.dataGroup = this.groupMap[n]) : (u = b[f]) || void 0 === a[f] || (b[f] = u = (new g).init(this, a[f], d[n])), u && (u.index = f, x[n] = u); if (b && (e !== (c = b.length) || t)) for (n = 0; n < c; n++) n !== p || t || (n += e), b[n] && (b[n].destroyElements(), b[n].plotX = void 0); this.data = b; this.points = x
            }, getExtremes: function (a) {
                var c = this.yAxis, d = this.processedXData, m, k = [], g = 0; m = this.xAxis.getExtremes(); var h = m.min, e = m.max, p, f, u, x; a = a || this.stackedYData || this.processedYData || []; m = a.length; for (x = 0; x < m; x++) if (f = d[x], u = a[x], p = (t(u,
                !0) || b(u)) && (!c.positiveValuesOnly || u.length || 0 < u), f = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (d[x] || f) >= h && (d[x] || f) <= e, p && f) if (p = u.length) for (; p--;) null !== u[p] && (k[g++] = u[p]); else k[g++] = u; this.dataMin = H(k); this.dataMax = G(k)
            }, translate: function () {
                this.processedXData || this.processData(); this.generatePoints(); var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, k = this.yAxis, g = this.points, h = g.length, e = !!this.modifyValue, f = a.pointPlacement, u = "between" === f || t(f),
                x = a.threshold, n = a.startFromThreshold ? x : 0, l, z, F, r, B = Number.MAX_VALUE; "between" === f && (f = .5); t(f) && (f *= p(a.pointRange || c.pointRange)); for (a = 0; a < h; a++) {
                    var w = g[a], C = w.x, D = w.y; z = w.low; var G = b && k.stacks[(this.negStacks && D < (n ? 0 : x) ? "-" : "") + this.stackKey], H; k.positiveValuesOnly && null !== D && 0 >= D && (w.isNull = !0); w.plotX = l = v(Math.min(Math.max(-1E5, c.translate(C, 0, 0, 0, 1, f, "flags" === this.type)), 1E5)); b && this.visible && !w.isNull && G && G[C] && (r = this.getStackIndicator(r, C, this.index), H = G[C], D = H.points[r.key], z = D[0], D =
                    D[1], z === n && r.key === G[C].base && (z = p(x, k.min)), k.positiveValuesOnly && 0 >= z && (z = null), w.total = w.stackTotal = H.total, w.percentage = H.total && w.y / H.total * 100, w.stackY = D, H.setOffset(this.pointXOffset || 0, this.barW || 0)); w.yBottom = q(z) ? k.translate(z, 0, 1, 0, 1) : null; e && (D = this.modifyValue(D, w)); w.plotY = z = "number" === typeof D && Infinity !== D ? Math.min(Math.max(-1E5, k.translate(D, 0, 1, 0, 1)), 1E5) : void 0; w.isInside = void 0 !== z && 0 <= z && z <= k.len && 0 <= l && l <= c.len; w.clientX = u ? v(c.translate(C, 0, 0, 0, 1, f)) : l; w.negative = w.y < (x || 0);
                    w.category = d && void 0 !== d[w.x] ? d[w.x] : w.x; w.isNull || (void 0 !== F && (B = Math.min(B, Math.abs(l - F))), F = l); w.zone = this.zones.length && w.getZone()
                } this.closestPointRangePx = B
            }, getValidPoints: function (a, b) { var c = this.chart; return z(a || this.points || [], function (a) { return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull }) }, setClip: function (a) {
                var b = this.chart, c = this.options, d = b.renderer, m = b.inverted, g = this.clipBox, k = g || b.clipBox, h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, k.height,
                c.xAxis, c.yAxis].join(), e = b[h], p = b[h + "m"]; e || (a && (k.width = 0, b[h + "m"] = p = d.clipRect(-99, m ? -b.plotLeft : -b.plotTop, 99, m ? b.chartWidth : b.chartHeight)), b[h] = e = d.clipRect(k), e.count = { length: 0 }); a && !e.count[this.index] && (e.count[this.index] = !0, e.count.length += 1); !1 !== c.clip && (this.group.clip(a || g ? e : b.clipRect), this.markerGroup.clip(p), this.sharedClipKey = h); a || (e.count[this.index] && (delete e.count[this.index], --e.count.length), 0 === e.count.length && h && b[h] && (g || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
            },
            animate: function (a) { var b = this.chart, c = C(this.options.animation), d; a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({ width: b.plotSizeX }, c), b[d + "m"] && b[d + "m"].animate({ width: b.plotSizeX + 99 }, c), this.animate = null) }, afterAnimate: function () { this.setClip(); e(this, "afterAnimate") }, drawPoints: function () {
                var a = this.points, b = this.chart, c, d, k, g, h = this.options.marker, e, f, u, x, n = this.markerGroup, l = p(h.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * h.radius); if (!1 !== h.enabled || this._hasPointMarkers) for (d =
                0; d < a.length; d++) k = a[d], c = k.plotY, g = k.graphic, e = k.marker || {}, f = !!k.marker, u = l && void 0 === e.enabled || e.enabled, x = k.isInside, u && t(c) && null !== k.y ? (c = p(e.symbol, this.symbol), k.hasImage = 0 === c.indexOf("url"), u = this.markerAttribs(k, k.selected && "select"), g ? g[x ? "show" : "hide"](!0).animate(u) : x && (0 < u.width || k.hasImage) && (k.graphic = g = b.renderer.symbol(c, u.x, u.y, u.width, u.height, f ? e : h).add(n)), g && g.attr(this.pointAttribs(k, k.selected && "select")), g && g.addClass(k.getClassName(), !0)) : g && (k.graphic = g.destroy())
            }, markerAttribs: function (a,
            b) { var c = this.options.marker, d = a.marker || {}, m = p(d.radius, c.radius); b && (c = c.states[b], b = d.states && d.states[b], m = p(b && b.radius, c && c.radius, m + (c && c.radiusPlus || 0))); a.hasImage && (m = 0); a = { x: Math.floor(a.plotX) - m, y: a.plotY - m }; m && (a.width = a.height = 2 * m); return a }, pointAttribs: function (a, b) {
                var c = this.options.marker, d = a && a.options, m = d && d.marker || {}, g = this.color, k = d && d.color, h = a && a.color, d = p(m.lineWidth, c.lineWidth); a = a && a.zone && a.zone.color; g = k || a || h || g; a = m.fillColor || c.fillColor || g; g = m.lineColor || c.lineColor ||
                g; b && (c = c.states[b], b = m.states && m.states[b] || {}, d = p(b.lineWidth, c.lineWidth, d + p(b.lineWidthPlus, c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, g = b.lineColor || c.lineColor || g); return { stroke: g, "stroke-width": d, fill: a }
            }, destroy: function () {
                var a = this, b = a.chart, c = /AppleWebKit\/533/.test(u.navigator.userAgent), d, k = a.data || [], g, h, p; e(a, "destroy"); x(a); n(a.axisTypes || [], function (b) { (p = a[b]) && p.series && (f(p.series, a), p.isDirty = p.forceRedraw = !0) }); a.legendItem && a.chart.legend.destroyItem(a); for (d = k.length; d--;) (g =
                k[d]) && g.destroy && g.destroy(); a.points = null; clearTimeout(a.animationTimeout); for (h in a) a[h] instanceof F && !a[h].survive && (d = c && "group" === h ? "hide" : "destroy", a[h][d]()); b.hoverSeries === a && (b.hoverSeries = null); f(b.series, a); b.orderSeries(); for (h in a) delete a[h]
            }, getGraphPath: function (a, b, c) {
                var d = this, m = d.options, g = m.step, k, h = [], e = [], p; a = a || d.points; (k = a.reversed) && a.reverse(); (g = { right: 1, center: 2 }[g] || g && 3) && k && (g = 4 - g); !m.connectNulls || b || c || (a = this.getValidPoints(a)); n(a, function (k, f) {
                    var u = k.plotX,
                    x = k.plotY, t = a[f - 1]; (k.leftCliff || t && t.rightCliff) && !c && (p = !0); k.isNull && !q(b) && 0 < f ? p = !m.connectNulls : k.isNull && !b ? p = !0 : (0 === f || p ? f = ["M", k.plotX, k.plotY] : d.getPointSpline ? f = d.getPointSpline(a, k, f) : g ? (f = 1 === g ? ["L", t.plotX, x] : 2 === g ? ["L", (t.plotX + u) / 2, t.plotY, "L", (t.plotX + u) / 2, x] : ["L", u, t.plotY], f.push("L", u, x)) : f = ["L", u, x], e.push(k.x), g && e.push(k.x), h.push.apply(h, f), p = !1)
                }); h.xMap = e; return d.graphPath = h
            }, drawGraph: function () {
                var a = this, b = this.options, c = (this.gappedPath || this.getGraphPath).call(this),
                d = [["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]]; n(this.zones, function (c, g) { d.push(["zone-graph-" + g, "highcharts-graph highcharts-zone-graph-" + g + " " + (c.className || ""), c.color || a.color, c.dashStyle || b.dashStyle]) }); n(d, function (d, g) {
                    var k = d[0], m = a[k]; m ? (m.endX = c.xMap, m.animate({ d: c })) : c.length && (a[k] = a.chart.renderer.path(c).addClass(d[1]).attr({ zIndex: 1 }).add(a.group), m = { stroke: d[2], "stroke-width": b.lineWidth, fill: a.fillGraph && a.color || "none" }, d[3] ? m.dashstyle = d[3] : "square" !== b.linecap &&
                    (m["stroke-linecap"] = m["stroke-linejoin"] = "round"), m = a[k].attr(m).shadow(2 > g && b.shadow)); m && (m.startX = c.xMap, m.isArea = c.isArea)
                })
            }, applyZones: function () {
                var a = this, b = this.chart, c = b.renderer, d = this.zones, k, g, h = this.clips || [], e, f = this.graph, u = this.area, x = Math.max(b.chartWidth, b.chartHeight), t = this[(this.zoneAxis || "y") + "Axis"], l, z, F = b.inverted, q, r, B, w, v = !1; d.length && (f || u) && t && void 0 !== t.min && (z = t.reversed, q = t.horiz, f && f.hide(), u && u.hide(), l = t.getExtremes(), n(d, function (d, m) {
                    k = z ? q ? b.plotWidth : 0 : q ? 0 :
                    t.toPixels(l.min); k = Math.min(Math.max(p(g, k), 0), x); g = Math.min(Math.max(Math.round(t.toPixels(p(d.value, l.max), !0)), 0), x); v && (k = g = t.toPixels(l.max)); r = Math.abs(k - g); B = Math.min(k, g); w = Math.max(k, g); t.isXAxis ? (e = { x: F ? w : B, y: 0, width: r, height: x }, q || (e.x = b.plotHeight - e.x)) : (e = { x: 0, y: F ? w : B, width: x, height: r }, q && (e.y = b.plotWidth - e.y)); F && c.isVML && (e = t.isXAxis ? { x: 0, y: z ? B : w, height: e.width, width: b.chartWidth } : { x: e.y - b.plotLeft - b.spacingBox.x, y: 0, width: e.height, height: b.chartHeight }); h[m] ? h[m].animate(e) : (h[m] =
                    c.clipRect(e), f && a["zone-graph-" + m].clip(h[m]), u && a["zone-area-" + m].clip(h[m])); v = d.value > l.max
                }), this.clips = h)
            }, invertGroups: function (a) { function b() { n(["group", "markerGroup"], function (b) { c[b] && (d.renderer.isVML && c[b].attr({ width: c.yAxis.len, height: c.xAxis.len }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a)) }) } var c = this, d = c.chart, k; c.xAxis && (k = D(d, "resize", b), D(c, "destroy", k), b(a), c.invertGroups = b) }, plotGroup: function (a, b, c, d, k) {
                var g = this[a], m = !g; m && (this[a] = g = this.chart.renderer.g(b).attr({
                    zIndex: d ||
                    .1
                }).add(k), g.addClass("highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || ""))); g.attr({ visibility: c })[m ? "attr" : "animate"](this.getPlotBox()); return g
            }, getPlotBox: function () { var a = this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c, c = this.xAxis); return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 } }, render: function () {
                var a = this, b = a.chart, c, k = a.options, h = !!a.animate && b.renderer.isSVG && C(k.animation).duration,
                g = a.visible ? "inherit" : "hidden", e = k.zIndex, p = a.hasRendered, f = b.seriesGroup, u = b.inverted; c = a.plotGroup("group", "series", g, e, f); a.markerGroup = a.plotGroup("markerGroup", "markers", g, e, f); h && a.animate(!0); c.inverted = a.isCartesian ? u : !1; a.drawGraph && (a.drawGraph(), a.applyZones()); a.drawDataLabels && a.drawDataLabels(); a.visible && a.drawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.invertGroups(u); !1 === k.clip || a.sharedClipKey || p || c.clip(b.clipRect); h && a.animate(); p || (a.animationTimeout =
                d(function () { a.afterAnimate() }, h)); a.isDirty = !1; a.hasRendered = !0
            }, redraw: function () { var a = this.chart, b = this.isDirty || this.isDirtyData, c = this.group, d = this.xAxis, k = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: p(d && d.left, a.plotLeft), translateY: p(k && k.top, a.plotTop) })); this.translate(); this.render(); b && delete this.kdTree }, kdAxisArray: ["clientX", "plotY"], searchPoint: function (a, b) {
                var c = this.xAxis, d = this.yAxis, k = this.chart.inverted; return this.searchKDTree({
                    clientX: k ?
                    c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: k ? d.len - a.chartX + d.pos : a.chartY - d.pos
                }, b)
            }, buildKDTree: function () {
                function a(c, d, g) { var k, m; if (m = c && c.length) return k = b.kdAxisArray[d % g], c.sort(function (a, b) { return a[k] - b[k] }), m = Math.floor(m / 2), { point: c[m], left: a(c.slice(0, m), d + 1, g), right: a(c.slice(m + 1), d + 1, g) } } this.buildingKdTree = !0; var b = this, c = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete b.kdTree; d(function () { b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c); b.buildingKdTree = !1 }, b.options.kdNow ?
                0 : 1)
            }, searchKDTree: function (a, b) {
                function c(a, b, h, e) { var p = b.point, f = d.kdAxisArray[h % e], u, t, x = p; t = q(a[k]) && q(p[k]) ? Math.pow(a[k] - p[k], 2) : null; u = q(a[g]) && q(p[g]) ? Math.pow(a[g] - p[g], 2) : null; u = (t || 0) + (u || 0); p.dist = q(u) ? Math.sqrt(u) : Number.MAX_VALUE; p.distX = q(t) ? Math.sqrt(t) : Number.MAX_VALUE; f = a[f] - p[f]; u = 0 > f ? "left" : "right"; t = 0 > f ? "right" : "left"; b[u] && (u = c(a, b[u], h + 1, e), x = u[m] < x[m] ? u : p); b[t] && Math.sqrt(f * f) < x[m] && (a = c(a, b[t], h + 1, e), x = a[m] < x[m] ? a : x); return x } var d = this, k = this.kdAxisArray[0], g = this.kdAxisArray[1],
                m = b ? "distX" : "dist"; b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(); if (this.kdTree) return c(a, this.kdTree, b, b)
            }
        })
    })(K); (function (a) {
        function D(a, f, c, e, l) {
            var b = a.chart.inverted; this.axis = a; this.isNegative = c; this.options = f; this.x = e; this.total = null; this.points = {}; this.stack = l; this.rightCliff = this.leftCliff = 0; this.alignOptions = {
                align: f.align || (b ? c ? "left" : "right" : "center"), verticalAlign: f.verticalAlign || (b ? "middle" : c ? "bottom" : "top"), y: q(f.y, b ? 4 : c ?
                14 : -6), x: q(f.x, b ? c ? -6 : 6 : 0)
            }; this.textAlign = f.textAlign || (b ? c ? "right" : "left" : "center")
        } var C = a.Axis, G = a.Chart, H = a.correctFloat, v = a.defined, l = a.destroyObjectProperties, r = a.each, w = a.format, q = a.pick; a = a.Series; D.prototype = {
            destroy: function () { l(this, this.axis) }, render: function (a) {
                var f = this.options, c = f.format, c = c ? w(c, this) : f.formatter.call(this); this.label ? this.label.attr({ text: c, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(c, null, null, f.useHTML).css(f.style).attr({
                    align: this.textAlign,
                    rotation: f.rotation, visibility: "hidden"
                }).add(a)
            }, setOffset: function (a, f) { var c = this.axis, e = c.chart, n = e.inverted, b = c.reversed, b = this.isNegative && !b || !this.isNegative && b, t = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = Math.abs(t - c); a = e.xAxis[0].translate(this.x) + a; var h = e.plotHeight, n = { x: n ? b ? t : t - c : a, y: n ? h - a - f : b ? h - t - c : h - t, width: n ? c : f, height: n ? f : c }; if (f = this.label) f.align(this.alignOptions, null, n), n = f.alignAttr, f[!1 === this.options.crop || e.isInsidePlot(n.x, n.y) ? "show" : "hide"](!0) }
        };
        G.prototype.getStacks = function () { var a = this; r(a.yAxis, function (a) { a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks) }); r(a.series, function (f) { !f.options.stacking || !0 !== f.visible && !1 !== a.options.chart.ignoreHiddenSeries || (f.stackKey = f.type + q(f.options.stack, "")) }) }; C.prototype.buildStacks = function () {
            var a = this.series, f, c = q(this.options.reversedStacks, !0), e = a.length, l; if (!this.isXAxis) {
                this.usePercentage = !1; for (l = e; l--;) a[c ? l : e - l - 1].setStackedPoints(); for (l = e; l--;) f = a[c ? l : e - l - 1], f.setStackCliffs &&
                f.setStackCliffs(); if (this.usePercentage) for (l = 0; l < e; l++) a[l].setPercentStacks()
            }
        }; C.prototype.renderStackTotals = function () { var a = this.chart, f = a.renderer, c = this.stacks, e, l, b = this.stackTotalGroup; b || (this.stackTotalGroup = b = f.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add()); b.translate(a.plotLeft, a.plotTop); for (e in c) for (l in a = c[e], a) a[l].render(b) }; C.prototype.resetStacks = function () {
            var a = this.stacks, f, c; if (!this.isXAxis) for (f in a) for (c in a[f]) a[f][c].touched < this.stacksTouched ? (a[f][c].destroy(),
            delete a[f][c]) : (a[f][c].total = null, a[f][c].cum = null)
        }; C.prototype.cleanStacks = function () { var a, f, c; if (!this.isXAxis) for (f in this.oldStacks && (a = this.stacks = this.oldStacks), a) for (c in a[f]) a[f][c].cum = a[f][c].total }; a.prototype.setStackedPoints = function () {
            if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                var a = this.processedXData, f = this.processedYData, c = [], e = f.length, l = this.options, b = l.threshold, t = l.startFromThreshold ? b : 0, h = l.stack, l = l.stacking, r = this.stackKey,
                p = "-" + r, x = this.negStacks, k = this.yAxis, F = k.stacks, d = k.oldStacks, u, m, y, w, E, I, g; k.stacksTouched += 1; for (E = 0; E < e; E++) I = a[E], g = f[E], u = this.getStackIndicator(u, I, this.index), w = u.key, y = (m = x && g < (t ? 0 : b)) ? p : r, F[y] || (F[y] = {}), F[y][I] || (d[y] && d[y][I] ? (F[y][I] = d[y][I], F[y][I].total = null) : F[y][I] = new D(k, k.options.stackLabels, m, I, h)), y = F[y][I], null !== g && (y.points[w] = y.points[this.index] = [q(y.cum, t)], v(y.cum) || (y.base = w), y.touched = k.stacksTouched, 0 < u.index && !1 === this.singleStacks && (y.points[w][0] = y.points[this.index +
                "," + I + ",0"][0])), "percent" === l ? (m = m ? r : p, x && F[m] && F[m][I] ? (m = F[m][I], y.total = m.total = Math.max(m.total, y.total) + Math.abs(g) || 0) : y.total = H(y.total + (Math.abs(g) || 0))) : y.total = H(y.total + (g || 0)), y.cum = q(y.cum, t) + (g || 0), null !== g && (y.points[w].push(y.cum), c[E] = y.cum); "percent" === l && (k.usePercentage = !0); this.stackedYData = c; k.oldStacks = {}
            }
        }; a.prototype.setPercentStacks = function () {
            var a = this, f = a.stackKey, c = a.yAxis.stacks, e = a.processedXData, l; r([f, "-" + f], function (b) {
                for (var f = e.length, h, n; f--;) if (h = e[f], l = a.getStackIndicator(l,
                h, a.index, b), h = (n = c[b] && c[b][h]) && n.points[l.key]) n = n.total ? 100 / n.total : 0, h[0] = H(h[0] * n), h[1] = H(h[1] * n), a.stackedYData[f] = h[1]
            })
        }; a.prototype.getStackIndicator = function (a, f, c, e) { !v(a) || a.x !== f || e && a.key !== e ? a = { x: f, index: 0, key: e } : a.index++; a.key = [c, f, a.index].join(); return a }
    })(K); (function (a) {
        var D = a.addEvent, C = a.animate, G = a.Axis, H = a.createElement, v = a.css, l = a.defined, r = a.each, w = a.erase, q = a.extend, n = a.fireEvent, f = a.inArray, c = a.isNumber, e = a.isObject, z = a.merge, b = a.pick, t = a.Point, h = a.Series, B = a.seriesTypes,
        p = a.setAnimation, x = a.splat; q(a.Chart.prototype, {
            addSeries: function (a, c, d) { var k, m = this; a && (c = b(c, !0), n(m, "addSeries", { options: a }, function () { k = m.initSeries(a); m.isDirtyLegend = !0; m.linkSeries(); c && m.redraw(d) })); return k }, addAxis: function (a, c, d, h) { var k = c ? "xAxis" : "yAxis", e = this.options; a = z(a, { index: this[k].length, isX: c }); new G(this, a); e[k] = x(e[k] || {}); e[k].push(a); b(d, !0) && this.redraw(h) }, showLoading: function (a) {
                var b = this, c = b.options, k = b.loadingDiv, m = c.loading, h = function () {
                    k && v(k, {
                        left: b.plotLeft +
                        "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px"
                    })
                }; k || (b.loadingDiv = k = H("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container), b.loadingSpan = H("span", { className: "highcharts-loading-inner" }, null, k), D(b, "redraw", h)); k.className = "highcharts-loading"; b.loadingSpan.innerHTML = a || c.lang.loading; v(k, q(m.style, { zIndex: 10 })); v(b.loadingSpan, m.labelStyle); b.loadingShown || (v(k, { opacity: 0, display: "" }), C(k, { opacity: m.style.opacity || .5 }, {
                    duration: m.showDuration ||
                    0
                })); b.loadingShown = !0; h()
            }, hideLoading: function () { var a = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", C(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function () { v(b, { display: "none" }) } })); this.loadingShown = !1 }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "), update: function (a, h) {
                var d, k = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle" }, m = a.chart, e, p; if (m) {
                    z(!0, this.options.chart, m); "className" in m && this.setClassName(m.className); if ("inverted" in m || "polar" in m) this.propFromSeries(), e = !0; "alignTicks" in m && (e = !0); for (d in m) m.hasOwnProperty(d) && (-1 !== f("chart." + d, this.propsRequireUpdateSeries) && (p = !0), -1 !== f(d, this.propsRequireDirtyBox) &&
                    (this.isDirtyBox = !0)); "style" in m && this.renderer.setStyle(m.style)
                } for (d in a) { if (this[d] && "function" === typeof this[d].update) this[d].update(a[d], !1); else if ("function" === typeof this[k[d]]) this[k[d]](a[d]); "chart" !== d && -1 !== f(d, this.propsRequireUpdateSeries) && (p = !0) } a.colors && (this.options.colors = a.colors); a.plotOptions && z(!0, this.options.plotOptions, a.plotOptions); r(["xAxis", "yAxis", "series", "colorAxis", "pane"], function (b) {
                    a[b] && r(x(a[b]), function (a, c) {
                        (c = l(a.id) && this.get(a.id) || this[b][c]) && c.coll ===
                        b && c.update(a, !1)
                    }, this)
                }, this); e && r(this.axes, function (a) { a.update({}, !1) }); p && r(this.series, function (a) { a.update({}, !1) }); a.loading && z(!0, this.options.loading, a.loading); d = m && m.width; m = m && m.height; c(d) && d !== this.chartWidth || c(m) && m !== this.chartHeight ? this.setSize(d, m) : b(h, !0) && this.redraw()
            }, setSubtitle: function (a) { this.setTitle(void 0, a) }
        }); q(t.prototype, {
            update: function (a, c, d, h) {
                function k() {
                    p.applyOptions(a); null === p.y && u && (p.graphic = u.destroy()); e(a, !0) && (u && u.element && a && a.marker && a.marker.symbol &&
                    (p.graphic = u.destroy()), a && a.dataLabels && p.dataLabel && (p.dataLabel = p.dataLabel.destroy())); x = p.index; f.updateParallelArrays(p, x); t.data[x] = e(t.data[x], !0) || e(a, !0) ? p.options : a; f.isDirty = f.isDirtyData = !0; !f.fixedBox && f.hasCartesianSeries && (g.isDirtyBox = !0); "point" === t.legendType && (g.isDirtyLegend = !0); c && g.redraw(d)
                } var p = this, f = p.series, u = p.graphic, x, g = f.chart, t = f.options; c = b(c, !0); !1 === h ? k() : p.firePointEvent("update", { options: a }, k)
            }, remove: function (a, b) {
                this.series.removePoint(f(this, this.series.data),
                a, b)
            }
        }); q(h.prototype, {
            addPoint: function (a, c, d, h) {
                var k = this.options, e = this.data, p = this.chart, f = this.xAxis, f = f && f.hasNames && f.names, u = k.data, g, x, t = this.xData, l, n; c = b(c, !0); g = { series: this }; this.pointClass.prototype.applyOptions.apply(g, [a]); n = g.x; l = t.length; if (this.requireSorting && n < t[l - 1]) for (x = !0; l && t[l - 1] > n;) l--; this.updateParallelArrays(g, "splice", l, 0, 0); this.updateParallelArrays(g, l); f && g.name && (f[n] = g.name); u.splice(l, 0, a); x && (this.data.splice(l, 0, null), this.processData()); "point" === k.legendType &&
                this.generatePoints(); d && (e[0] && e[0].remove ? e[0].remove(!1) : (e.shift(), this.updateParallelArrays(g, "shift"), u.shift())); this.isDirtyData = this.isDirty = !0; c && p.redraw(h)
            }, removePoint: function (a, c, d) {
                var k = this, m = k.data, h = m[a], e = k.points, f = k.chart, x = function () { e && e.length === m.length && e.splice(a, 1); m.splice(a, 1); k.options.data.splice(a, 1); k.updateParallelArrays(h || { series: k }, "splice", a, 1); h && h.destroy(); k.isDirty = !0; k.isDirtyData = !0; c && f.redraw() }; p(d, f); c = b(c, !0); h ? h.firePointEvent("remove", null, x) :
                x()
            }, remove: function (a, c, d) { function k() { m.destroy(); h.isDirtyLegend = h.isDirtyBox = !0; h.linkSeries(); b(a, !0) && h.redraw(c) } var m = this, h = m.chart; !1 !== d ? n(m, "remove", null, k) : k() }, update: function (a, c) {
                var d = this, k = this.chart, m = this.userOptions, h = this.oldType || this.type, e = a.type || m.type || k.options.chart.type, p = B[h].prototype, f = ["group", "markerGroup", "dataLabelsGroup"], g; if (e && e !== h || void 0 !== a.zIndex) f.length = 0; r(f, function (a) { f[a] = d[a]; delete d[a] }); a = z(m, { animation: !1, index: this.index, pointStart: this.xData[0] },
                { data: this.options.data }, a); this.remove(!1, null, !1); for (g in p) this[g] = void 0; q(this, B[e || h].prototype); r(f, function (a) { d[a] = f[a] }); this.init(k, a); this.oldType = h; k.linkSeries(); b(c, !0) && k.redraw(!1)
            }
        }); q(G.prototype, {
            update: function (a, c) { var d = this.chart; a = d.options[this.coll][this.options.index] = z(this.userOptions, a); this.destroy(!0); this.init(d, q(a, { events: void 0 })); d.isDirtyBox = !0; b(c, !0) && d.redraw() }, remove: function (a) {
                for (var c = this.chart, d = this.coll, k = this.series, m = k.length; m--;) k[m] && k[m].remove(!1);
                w(c.axes, this); w(c[d], this); c.options[d].splice(this.options.index, 1); r(c[d], function (a, b) { a.options.index = b }); this.destroy(); c.isDirtyBox = !0; b(a, !0) && c.redraw()
            }, setTitle: function (a, b) { this.update({ title: a }, b) }, setCategories: function (a, b) { this.update({ categories: a }, b) }
        })
    })(K); (function (a) {
        var D = a.color, C = a.each, G = a.map, H = a.pick, v = a.Series, l = a.seriesType; l("area", "line", { softThreshold: !1, threshold: 0 }, {
            singleStacks: !1, getStackPoints: function () {
                var a = [], l = [], q = this.xAxis, n = this.yAxis, f = n.stacks[this.stackKey],
                c = {}, e = this.points, z = this.index, b = n.series, t = b.length, h, B = H(n.options.reversedStacks, !0) ? 1 : -1, p, x; if (this.options.stacking) {
                    for (p = 0; p < e.length; p++) c[e[p].x] = e[p]; for (x in f) null !== f[x].total && l.push(x); l.sort(function (a, b) { return a - b }); h = G(b, function () { return this.visible }); C(l, function (b, e) {
                        var d = 0, k, m; if (c[b] && !c[b].isNull) a.push(c[b]), C([-1, 1], function (a) {
                            var d = 1 === a ? "rightNull" : "leftNull", x = 0, u = f[l[e + a]]; if (u) for (p = z; 0 <= p && p < t;) k = u.points[p], k || (p === z ? c[b][d] = !0 : h[p] && (m = f[b].points[p]) && (x -=
                            m[1] - m[0])), p += B; c[b][1 === a ? "rightCliff" : "leftCliff"] = x
                        }); else { for (p = z; 0 <= p && p < t;) { if (k = f[b].points[p]) { d = k[1]; break } p += B } d = n.translate(d, 0, 1, 0, 1); a.push({ isNull: !0, plotX: q.translate(b, 0, 0, 0, 1), x: b, plotY: d, yBottom: d }) }
                    })
                } return a
            }, getGraphPath: function (a) {
                var l = v.prototype.getGraphPath, q = this.options, n = q.stacking, f = this.yAxis, c, e, z = [], b = [], t = this.index, h, r = f.stacks[this.stackKey], p = q.threshold, x = f.getThreshold(q.threshold), k, q = q.connectNulls || "percent" === n, F = function (c, k, m) {
                    var d = a[c]; c = n && r[d.x].points[t];
                    var e = d[m + "Null"] || 0; m = d[m + "Cliff"] || 0; var u, l, d = !0; m || e ? (u = (e ? c[0] : c[1]) + m, l = c[0] + m, d = !!e) : !n && a[k] && a[k].isNull && (u = l = p); void 0 !== u && (b.push({ plotX: h, plotY: null === u ? x : f.getThreshold(u), isNull: d, isCliff: !0 }), z.push({ plotX: h, plotY: null === l ? x : f.getThreshold(l), doCurve: !1 }))
                }; a = a || this.points; n && (a = this.getStackPoints()); for (c = 0; c < a.length; c++) if (e = a[c].isNull, h = H(a[c].rectPlotX, a[c].plotX), k = H(a[c].yBottom, x), !e || q) q || F(c, c - 1, "left"), e && !n && q || (b.push(a[c]), z.push({ x: c, plotX: h, plotY: k })), q || F(c, c +
                1, "right"); c = l.call(this, b, !0, !0); z.reversed = !0; e = l.call(this, z, !0, !0); e.length && (e[0] = "L"); e = c.concat(e); l = l.call(this, b, !1, q); e.xMap = c.xMap; this.areaPath = e; return l
            }, drawGraph: function () {
                this.areaPath = []; v.prototype.drawGraph.apply(this); var a = this, l = this.areaPath, q = this.options, n = [["area", "highcharts-area", this.color, q.fillColor]]; C(this.zones, function (f, c) { n.push(["zone-area-" + c, "highcharts-area highcharts-zone-area-" + c + " " + f.className, f.color || a.color, f.fillColor || q.fillColor]) }); C(n, function (f) {
                    var c =
                    f[0], e = a[c]; e ? (e.endX = l.xMap, e.animate({ d: l })) : (e = a[c] = a.chart.renderer.path(l).addClass(f[1]).attr({ fill: H(f[3], D(f[2]).setOpacity(H(q.fillOpacity, .75)).get()), zIndex: 0 }).add(a.group), e.isArea = !0); e.startX = l.xMap; e.shiftUnit = q.step ? 2 : 1
                })
            }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(K); (function (a) {
        var D = a.pick; a = a.seriesType; a("spline", "line", {}, {
            getPointSpline: function (a, G, H) {
                var v = G.plotX, l = G.plotY, r = a[H - 1]; H = a[H + 1]; var w, q, n, f; if (r && !r.isNull && !1 !== r.doCurve && !G.isCliff && H && !H.isNull &&
                !1 !== H.doCurve && !G.isCliff) { a = r.plotY; n = H.plotX; H = H.plotY; var c = 0; w = (1.5 * v + r.plotX) / 2.5; q = (1.5 * l + a) / 2.5; n = (1.5 * v + n) / 2.5; f = (1.5 * l + H) / 2.5; n !== w && (c = (f - q) * (n - v) / (n - w) + l - f); q += c; f += c; q > a && q > l ? (q = Math.max(a, l), f = 2 * l - q) : q < a && q < l && (q = Math.min(a, l), f = 2 * l - q); f > H && f > l ? (f = Math.max(H, l), q = 2 * l - f) : f < H && f < l && (f = Math.min(H, l), q = 2 * l - f); G.rightContX = n; G.rightContY = f } G = ["C", D(r.rightContX, r.plotX), D(r.rightContY, r.plotY), D(w, v), D(q, l), v, l]; r.rightContX = r.rightContY = null; return G
            }
        })
    })(K); (function (a) {
        var D = a.seriesTypes.area.prototype,
        C = a.seriesType; C("areaspline", "spline", a.defaultPlotOptions.area, { getStackPoints: D.getStackPoints, getGraphPath: D.getGraphPath, setStackCliffs: D.setStackCliffs, drawGraph: D.drawGraph, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle })
    })(K); (function (a) {
        var D = a.animObject, C = a.color, G = a.each, H = a.extend, v = a.isNumber, l = a.merge, r = a.pick, w = a.Series, q = a.seriesType, n = a.svg; q("column", "line", {
            borderRadius: 0, crisp: !0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null,
            states: { hover: { halo: !1, brightness: .1, shadow: !1 }, select: { color: "#cccccc", borderColor: "#000000", shadow: !1 } }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff"
        }, {
            cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function () { w.prototype.init.apply(this, arguments); var a = this, c = a.chart; c.hasRendered && G(c.series, function (c) { c.type === a.type && (c.isDirty = !0) }) },
            getColumnMetrics: function () {
                var a = this, c = a.options, e = a.xAxis, l = a.yAxis, b = e.reversed, t, h = {}, n = 0; !1 === c.grouping ? n = 1 : G(a.chart.series, function (b) { var c = b.options, k = b.yAxis, m; b.type === a.type && b.visible && l.len === k.len && l.pos === k.pos && (c.stacking ? (t = b.stackKey, void 0 === h[t] && (h[t] = n++), m = h[t]) : !1 !== c.grouping && (m = n++), b.columnIndex = m) }); var p = Math.min(Math.abs(e.transA) * (e.ordinalSlope || c.pointRange || e.closestPointRange || e.tickInterval || 1), e.len), x = p * c.groupPadding, k = (p - 2 * x) / (n || 1), c = Math.min(c.maxPointWidth ||
                e.len, r(c.pointWidth, k * (1 - 2 * c.pointPadding))); a.columnMetrics = { width: c, offset: (k - c) / 2 + (x + ((a.columnIndex || 0) + (b ? 1 : 0)) * k - p / 2) * (b ? -1 : 1) }; return a.columnMetrics
            }, crispCol: function (a, c, e, l) { var b = this.chart, f = this.borderWidth, h = -(f % 2 ? .5 : 0), f = f % 2 ? .5 : 1; b.inverted && b.renderer.isVML && (f += 1); this.options.crisp && (e = Math.round(a + e) + h, a = Math.round(a) + h, e -= a); l = Math.round(c + l) + f; h = .5 >= Math.abs(c) && .5 < l; c = Math.round(c) + f; l -= c; h && l && (--c, l += 1); return { x: a, y: c, width: e, height: l } }, translate: function () {
                var a = this, c =
                a.chart, e = a.options, l = a.dense = 2 > a.closestPointRange * a.xAxis.transA, l = a.borderWidth = r(e.borderWidth, l ? 0 : 1), b = a.yAxis, t = a.translatedThreshold = b.getThreshold(e.threshold), h = r(e.minPointLength, 5), n = a.getColumnMetrics(), p = n.width, x = a.barW = Math.max(p, 1 + 2 * l), k = a.pointXOffset = n.offset; c.inverted && (t -= .5); e.pointPadding && (x = Math.ceil(x)); w.prototype.translate.apply(a); G(a.points, function (e) {
                    var d = r(e.yBottom, t), f = 999 + Math.abs(d), f = Math.min(Math.max(-f, e.plotY), b.len + f), m = e.plotX + k, l = x, n = Math.min(f, d), E, q =
                    Math.max(f, d) - n; Math.abs(q) < h && h && (q = h, E = !b.reversed && !e.negative || b.reversed && e.negative, n = Math.abs(n - t) > h ? d - h : t - (E ? h : 0)); e.barX = m; e.pointWidth = p; e.tooltipPos = c.inverted ? [b.len + b.pos - c.plotLeft - f, a.xAxis.len - m - l / 2, q] : [m + l / 2, f + b.pos - c.plotTop, q]; e.shapeType = "rect"; e.shapeArgs = a.crispCol.apply(a, e.isNull ? [e.plotX, b.len / 2, 0, 0] : [m, n, l, q])
                })
            }, getSymbol: a.noop, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, drawGraph: function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") },
            pointAttribs: function (a, c) {
                var e = this.options, f, b = this.pointAttrToOptions || {}; f = b.stroke || "borderColor"; var t = b["stroke-width"] || "borderWidth", h = a && a.color || this.color, n = a[f] || e[f] || this.color || h, p = a[t] || e[t] || this[t] || 0, b = e.dashStyle; a && this.zones.length && (h = (h = a.getZone()) && h.color || a.options.color || this.color); c && (a = l(e.states[c], a.options.states && a.options.states[c] || {}), c = a.brightness, h = a.color || void 0 !== c && C(h).brighten(a.brightness).get() || h, n = a[f] || n, p = a[t] || p, b = a.dashStyle || b); f = {
                    fill: h,
                    stroke: n, "stroke-width": p
                }; e.borderRadius && (f.r = e.borderRadius); b && (f.dashstyle = b); return f
            }, drawPoints: function () {
                var a = this, c = this.chart, e = a.options, n = c.renderer, b = e.animationLimit || 250, t; G(a.points, function (h) {
                    var f = h.graphic; if (v(h.plotY) && null !== h.y) { t = h.shapeArgs; if (f) f[c.pointCount < b ? "animate" : "attr"](l(t)); else h.graphic = f = n[h.shapeType](t).add(h.group || a.group); f.attr(a.pointAttribs(h, h.selected && "select")).shadow(e.shadow, null, e.stacking && !e.borderRadius); f.addClass(h.getClassName(), !0) } else f &&
                    (h.graphic = f.destroy())
                })
            }, animate: function (a) { var c = this, e = this.yAxis, f = c.options, b = this.chart.inverted, t = {}; n && (a ? (t.scaleY = .001, a = Math.min(e.pos + e.len, Math.max(e.pos, e.toPixels(f.threshold))), b ? t.translateX = a - e.len : t.translateY = a, c.group.attr(t)) : (t[b ? "translateX" : "translateY"] = e.pos, c.group.animate(t, H(D(c.options.animation), { step: function (a, b) { c.group.attr({ scaleY: Math.max(.001, b.pos) }) } })), c.animate = null)) }, remove: function () {
                var a = this, c = a.chart; c.hasRendered && G(c.series, function (c) {
                    c.type ===
                    a.type && (c.isDirty = !0)
                }); w.prototype.remove.apply(a, arguments)
            }
        })
    })(K); (function (a) { a = a.seriesType; a("bar", "column", null, { inverted: !0 }) })(K); (function (a) {
        var D = a.Series; a = a.seriesType; a("scatter", "line", { lineWidth: 0, findNearestPointBy: "xy", marker: { enabled: !0 }, tooltip: { headerFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e', pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e" } },
        { sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, drawGraph: function () { this.options.lineWidth && D.prototype.drawGraph.call(this) } })
    })(K); (function (a) {
        var D = a.pick, C = a.relativeLength; a.CenteredSeriesMixin = {
            getCenter: function () {
                var a = this.options, H = this.chart, v = 2 * (a.slicedOffset || 0), l = H.plotWidth - 2 * v, H = H.plotHeight - 2 * v, r = a.center, r = [D(r[0], "50%"), D(r[1], "50%"), a.size || "100%", a.innerSize || 0], w = Math.min(l, H), q, n; for (q = 0; 4 > q; ++q) n =
                r[q], a = 2 > q || 2 === q && /%$/.test(n), r[q] = C(n, [l, H, w, r[2]][q]) + (a ? v : 0); r[3] > r[2] && (r[3] = r[2]); return r
            }
        }
    })(K); (function (a) {
        var D = a.addEvent, C = a.defined, G = a.each, H = a.extend, v = a.inArray, l = a.noop, r = a.pick, w = a.Point, q = a.Series, n = a.seriesType, f = a.setAnimation; n("pie", "line", {
            center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { distance: 30, enabled: !0, formatter: function () { return null === this.y ? void 0 : this.point.name }, x: 0 }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10,
            stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, states: { hover: { brightness: .1, shadow: !1 } }
        }, {
            isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: a.seriesTypes.column.prototype.pointAttribs, animate: function (a) {
                var c = this, f = c.points, b = c.startAngleRad; a || (G(f, function (a) {
                    var h = a.graphic, e = a.shapeArgs; h && (h.attr({ r: a.startR || c.center[3] / 2, start: b, end: b }), h.animate({ r: e.r, start: e.start, end: e.end },
                    c.options.animation))
                }), c.animate = null)
            }, updateTotals: function () { var a, e = 0, f = this.points, b = f.length, t, h = this.options.ignoreHiddenPoint; for (a = 0; a < b; a++) t = f[a], 0 > t.y && (t.y = null), e += h && !t.visible ? 0 : t.y; this.total = e; for (a = 0; a < b; a++) t = f[a], t.percentage = 0 < e && (t.visible || !h) ? t.y / e * 100 : 0, t.total = e }, generatePoints: function () { q.prototype.generatePoints.call(this); this.updateTotals() }, translate: function (a) {
                this.generatePoints(); var c = 0, f = this.options, b = f.slicedOffset, t = b + (f.borderWidth || 0), h, l, p, x = f.startAngle ||
                0, k = this.startAngleRad = Math.PI / 180 * (x - 90), x = (this.endAngleRad = Math.PI / 180 * (r(f.endAngle, x + 360) - 90)) - k, n = this.points, d = f.dataLabels.distance, f = f.ignoreHiddenPoint, u, m = n.length, y; a || (this.center = a = this.getCenter()); this.getX = function (b, c) { p = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + d), 1)); return a[0] + (c ? -1 : 1) * Math.cos(p) * (a[2] / 2 + d) }; for (u = 0; u < m; u++) {
                    y = n[u]; h = k + c * x; if (!f || y.visible) c += y.percentage / 100; l = k + c * x; y.shapeType = "arc"; y.shapeArgs = {
                        x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: Math.round(1E3 * h) / 1E3, end: Math.round(1E3 *
                        l) / 1E3
                    }; p = (l + h) / 2; p > 1.5 * Math.PI ? p -= 2 * Math.PI : p < -Math.PI / 2 && (p += 2 * Math.PI); y.slicedTranslation = { translateX: Math.round(Math.cos(p) * b), translateY: Math.round(Math.sin(p) * b) }; h = Math.cos(p) * a[2] / 2; l = Math.sin(p) * a[2] / 2; y.tooltipPos = [a[0] + .7 * h, a[1] + .7 * l]; y.half = p < -Math.PI / 2 || p > Math.PI / 2 ? 1 : 0; y.angle = p; t = Math.min(t, d / 5); y.labelPos = [a[0] + h + Math.cos(p) * d, a[1] + l + Math.sin(p) * d, a[0] + h + Math.cos(p) * t, a[1] + l + Math.sin(p) * t, a[0] + h, a[1] + l, 0 > d ? "center" : y.half ? "right" : "left", p]
                }
            }, drawGraph: null, drawPoints: function () {
                var a =
                this, e = a.chart.renderer, f, b, t, h, l = a.options.shadow; l && !a.shadowGroup && (a.shadowGroup = e.g("shadow").add(a.group)); G(a.points, function (c) {
                    if (null !== c.y) {
                        b = c.graphic; h = c.shapeArgs; f = c.getTranslate(); var p = c.shadowGroup; l && !p && (p = c.shadowGroup = e.g("shadow").add(a.shadowGroup)); p && p.attr(f); t = a.pointAttribs(c, c.selected && "select"); b ? b.setRadialReference(a.center).attr(t).animate(H(h, f)) : (c.graphic = b = e[c.shapeType](h).setRadialReference(a.center).attr(f).add(a.group), c.visible || b.attr({ visibility: "hidden" }),
                        b.attr(t).attr({ "stroke-linejoin": "round" }).shadow(l, p)); b.addClass(c.getClassName())
                    }
                })
            }, searchPoint: l, sortByAngle: function (a, e) { a.sort(function (a, b) { return void 0 !== a.angle && (b.angle - a.angle) * e }) }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, getCenter: a.CenteredSeriesMixin.getCenter, getSymbol: l
        }, {
            init: function () { w.prototype.init.apply(this, arguments); var a = this, e; a.name = r(a.name, "Slice"); e = function (c) { a.slice("select" === c.type) }; D(a, "select", e); D(a, "unselect", e); return a }, setVisible: function (a,
            e) { var c = this, b = c.series, f = b.chart, h = b.options.ignoreHiddenPoint; e = r(e, h); a !== c.visible && (c.visible = c.options.visible = a = void 0 === a ? !c.visible : a, b.options.data[v(c, b.data)] = c.options, G(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) { if (c[b]) c[b][a ? "show" : "hide"](!0) }), c.legendItem && f.legend.colorizeItem(c, a), a || "hover" !== c.state || c.setState(""), h && (b.isDirty = !0), e && f.redraw()) }, slice: function (a, e, l) {
                var b = this.series; f(l, b.chart); r(e, !0); this.sliced = this.options.sliced = C(a) ? a : !this.sliced;
                b.options.data[v(this, b.data)] = this.options; this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
            }, getTranslate: function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }, haloPath: function (a) { var c = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, { innerR: this.shapeArgs.r, start: c.start, end: c.end }) }
        })
    })(K); (function (a) {
        var D = a.addEvent, C = a.arrayMax, G = a.defined, H = a.each,
        v = a.extend, l = a.format, r = a.map, w = a.merge, q = a.noop, n = a.pick, f = a.relativeLength, c = a.Series, e = a.seriesTypes, z = a.stableSort; a.distribute = function (a, c) {
            function b(a, b) { return a.target - b.target } var e, p = !0, f = a, k = [], l; l = 0; for (e = a.length; e--;) l += a[e].size; if (l > c) { z(a, function (a, b) { return (b.rank || 0) - (a.rank || 0) }); for (l = e = 0; l <= c;) l += a[e].size, e++; k = a.splice(e - 1, a.length) } z(a, b); for (a = r(a, function (a) { return { size: a.size, targets: [a.target] } }) ; p;) {
                for (e = a.length; e--;) p = a[e], l = (Math.min.apply(0, p.targets) + Math.max.apply(0,
                p.targets)) / 2, p.pos = Math.min(Math.max(0, l - p.size / 2), c - p.size); e = a.length; for (p = !1; e--;) 0 < e && a[e - 1].pos + a[e - 1].size > a[e].pos && (a[e - 1].size += a[e].size, a[e - 1].targets = a[e - 1].targets.concat(a[e].targets), a[e - 1].pos + a[e - 1].size > c && (a[e - 1].pos = c - a[e - 1].size), a.splice(e, 1), p = !0)
            } e = 0; H(a, function (a) { var b = 0; H(a.targets, function () { f[e].pos = a.pos + b; b += f[e].size; e++ }) }); f.push.apply(f, k); z(f, b)
        }; c.prototype.drawDataLabels = function () {
            var a = this, c = a.options, h = c.dataLabels, e = a.points, p, f, k = a.hasRendered || 0, q, d,
            u = n(h.defer, !0), m = a.chart.renderer; if (h.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(h), d = a.plotGroup("dataLabelsGroup", "data-labels", u && !k ? "hidden" : "visible", h.zIndex || 6), u && (d.attr({ opacity: +k }), k || D(a, "afterAnimate", function () { a.visible && d.show(!0); d[c.animation ? "animate" : "attr"]({ opacity: 1 }, { duration: 200 }) })), f = h, H(e, function (b) {
                var k, e = b.dataLabel, x, g, t, u = b.connector, y = !e, r; p = b.dlOptions || b.options && b.options.dataLabels; if (k = n(p && p.enabled, f.enabled) && null !== b.y) for (g in h =
                w(f, p), x = b.getLabelConfig(), q = h.format ? l(h.format, x) : h.formatter.call(x, h), r = h.style, t = h.rotation, r.color = n(h.color, r.color, a.color, "#000000"), "contrast" === r.color && (b.contrastColor = m.getContrast(b.color || a.color), r.color = h.inside || 0 > h.distance || c.stacking ? b.contrastColor : "#000000"), c.cursor && (r.cursor = c.cursor), x = { fill: h.backgroundColor, stroke: h.borderColor, "stroke-width": h.borderWidth, r: h.borderRadius || 0, rotation: t, padding: h.padding, zIndex: 1 }, x) void 0 === x[g] && delete x[g]; !e || k && G(q) ? k && G(q) && (e ?
                x.text = q : (e = b.dataLabel = m[t ? "text" : "label"](q, 0, -9999, h.shape, null, null, h.useHTML, null, "data-label"), e.addClass("highcharts-data-label-color-" + b.colorIndex + " " + (h.className || "") + (h.useHTML ? "highcharts-tracker" : ""))), e.attr(x), e.css(r).shadow(h.shadow), e.added || e.add(d), a.alignDataLabel(b, e, h, null, y)) : (b.dataLabel = e.destroy(), u && (b.connector = u.destroy()))
            })
        }; c.prototype.alignDataLabel = function (a, c, h, e, p) {
            var b = this.chart, k = b.inverted, f = n(a.plotX, -9999), d = n(a.plotY, -9999), l = c.getBBox(), m, t = h.rotation,
            q = h.align, E = this.visible && (a.series.forceDL || b.isInsidePlot(f, Math.round(d), k) || e && b.isInsidePlot(f, k ? e.x + 1 : e.y + e.height - 1, k)), r = "justify" === n(h.overflow, "justify"); E && (m = h.style.fontSize, m = b.renderer.fontMetrics(m, c).b, e = v({ x: k ? b.plotWidth - d : f, y: Math.round(k ? b.plotHeight - f : d), width: 0, height: 0 }, e), v(h, { width: l.width, height: l.height }), t ? (r = !1, k = b.renderer.rotCorr(m, t), k = { x: e.x + h.x + e.width / 2 + k.x, y: e.y + h.y + { top: 0, middle: .5, bottom: 1 }[h.verticalAlign] * e.height }, c[p ? "attr" : "animate"](k).attr({ align: q }),
            f = (t + 720) % 360, f = 180 < f && 360 > f, "left" === q ? k.y -= f ? l.height : 0 : "center" === q ? (k.x -= l.width / 2, k.y -= l.height / 2) : "right" === q && (k.x -= l.width, k.y -= f ? 0 : l.height)) : (c.align(h, null, e), k = c.alignAttr), r ? a.isLabelJustified = this.justifyDataLabel(c, h, k, l, e, p) : n(h.crop, !0) && (E = b.isInsidePlot(k.x, k.y) && b.isInsidePlot(k.x + l.width, k.y + l.height)), h.shape && !t && c.attr({ anchorX: a.plotX, anchorY: a.plotY })); E || (c.attr({ y: -9999 }), c.placed = !1)
        }; c.prototype.justifyDataLabel = function (a, c, e, f, p, l) {
            var b = this.chart, h = c.align, d = c.verticalAlign,
            x, m, t = a.box ? 0 : a.padding || 0; x = e.x + t; 0 > x && ("right" === h ? c.align = "left" : c.x = -x, m = !0); x = e.x + f.width - t; x > b.plotWidth && ("left" === h ? c.align = "right" : c.x = b.plotWidth - x, m = !0); x = e.y + t; 0 > x && ("bottom" === d ? c.verticalAlign = "top" : c.y = -x, m = !0); x = e.y + f.height - t; x > b.plotHeight && ("top" === d ? c.verticalAlign = "bottom" : c.y = b.plotHeight - x, m = !0); m && (a.placed = !l, a.align(c, null, p)); return m
        }; e.pie && (e.pie.prototype.drawDataLabels = function () {
            var b = this, e = b.data, h, f = b.chart, p = b.options.dataLabels, x = n(p.connectorPadding, 10), k = n(p.connectorWidth,
            1), l = f.plotWidth, d = f.plotHeight, u, m = p.distance, y = b.center, q = y[2] / 2, E = y[1], z = 0 < m, g, v, w, D, M = [[], []], G, A, Q, S, N = [0, 0, 0, 0]; b.visible && (p.enabled || b._hasPointLabels) && (H(e, function (a) { a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1) }), c.prototype.drawDataLabels.apply(b), H(e, function (a) { a.dataLabel && a.visible && (M[a.half].push(a), a.dataLabel._pos = null) }), H(M, function (c, k) {
                var e, t, u = c.length, n, z, I; if (u) for (b.sortByAngle(c,
                k - .5), 0 < m && (e = Math.max(0, E - q - m), t = Math.min(E + q + m, f.plotHeight), n = r(c, function (a) { if (a.dataLabel) return I = a.dataLabel.getBBox().height || 21, { target: a.labelPos[1] - e + I / 2, size: I, rank: a.y } }), a.distribute(n, t + I - e)), S = 0; S < u; S++) h = c[S], w = h.labelPos, g = h.dataLabel, Q = !1 === h.visible ? "hidden" : "inherit", z = w[1], n ? void 0 === n[S].pos ? Q = "hidden" : (D = n[S].size, A = e + n[S].pos) : A = z, G = p.justify ? y[0] + (k ? -1 : 1) * (q + m) : b.getX(A < e + 2 || A > t - 2 ? z : A, k), g._attr = { visibility: Q, align: w[6] }, g._pos = {
                    x: G + p.x + ({ left: x, right: -x }[w[6]] || 0), y: A +
                    p.y - 10
                }, w.x = G, w.y = A, null === b.options.size && (v = g.getBBox().width, z = null, G - v < x ? (z = Math.round(v - G + x), N[3] = Math.max(z, N[3])) : G + v > l - x && (z = Math.round(G + v - l + x), N[1] = Math.max(z, N[1])), 0 > A - D / 2 ? N[0] = Math.max(Math.round(-A + D / 2), N[0]) : A + D / 2 > d && (N[2] = Math.max(Math.round(A + D / 2 - d), N[2])), g.sideOverflow = z)
            }), 0 === C(N) || this.verifyDataLabelOverflow(N)) && (this.placeDataLabels(), z && k && H(this.points, function (a) {
                var c; u = a.connector; if ((g = a.dataLabel) && g._pos && a.visible) {
                    Q = g._attr.visibility; if (c = !u) a.connector = u = f.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" +
                    a.colorIndex).add(b.dataLabelsGroup), u.attr({ "stroke-width": k, stroke: p.connectorColor || a.color || "#666666" }); u[c ? "attr" : "animate"]({ d: b.connectorPath(a.labelPos) }); u.attr("visibility", Q)
                } else u && (a.connector = u.destroy())
            }))
        }, e.pie.prototype.connectorPath = function (a) { var b = a.x, c = a.y; return n(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L", a[4], a[5]] }, e.pie.prototype.placeDataLabels =
        function () { H(this.points, function (a) { var b = a.dataLabel; b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({ width: b._attr.width + "px", textOverflow: "ellipsis" }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({ y: -9999 })) }, this) }, e.pie.prototype.alignDataLabel = q, e.pie.prototype.verifyDataLabelOverflow = function (a) {
            var b = this.center, c = this.options, e = c.center, p = c.minSize || 80, l, k; null !== e[0] ? l = Math.max(b[2] - Math.max(a[1], a[3]),
            p) : (l = Math.max(b[2] - a[1] - a[3], p), b[0] += (a[3] - a[1]) / 2); null !== e[1] ? l = Math.max(Math.min(l, b[2] - Math.max(a[0], a[2])), p) : (l = Math.max(Math.min(l, b[2] - a[0] - a[2]), p), b[1] += (a[0] - a[2]) / 2); l < b[2] ? (b[2] = l, b[3] = Math.min(f(c.innerSize || 0, l), l), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : k = !0; return k
        }); e.column && (e.column.prototype.alignDataLabel = function (a, e, h, f, p) {
            var b = this.chart.inverted, k = a.series, l = a.dlBox || a.shapeArgs, d = n(a.below, a.plotY > n(this.translatedThreshold, k.yAxis.len)), u = n(h.inside,
            !!this.options.stacking); l && (f = w(l), 0 > f.y && (f.height += f.y, f.y = 0), l = f.y + f.height - k.yAxis.len, 0 < l && (f.height -= l), b && (f = { x: k.yAxis.len - f.y - f.height, y: k.xAxis.len - f.x - f.width, width: f.height, height: f.width }), u || (b ? (f.x += d ? 0 : f.width, f.width = 0) : (f.y += d ? f.height : 0, f.height = 0))); h.align = n(h.align, !b || u ? "center" : d ? "right" : "left"); h.verticalAlign = n(h.verticalAlign, b || u ? "middle" : d ? "top" : "bottom"); c.prototype.alignDataLabel.call(this, a, e, h, f, p); a.isLabelJustified && a.contrastColor && a.dataLabel.css({ color: a.contrastColor })
        })
    })(K);
    (function (a) {
        var D = a.Chart, C = a.each, G = a.pick, H = a.addEvent; D.prototype.callbacks.push(function (a) { function l() { var l = []; C(a.series || [], function (a) { var q = a.options.dataLabels, n = a.dataLabelCollections || ["dataLabel"]; (q.enabled || a._hasPointLabels) && !q.allowOverlap && a.visible && C(n, function (f) { C(a.points, function (a) { a[f] && (a[f].labelrank = G(a.labelrank, a.shapeArgs && a.shapeArgs.height), l.push(a[f])) }) }) }); a.hideOverlappingLabels(l) } l(); H(a, "redraw", l) }); D.prototype.hideOverlappingLabels = function (a) {
            var l =
            a.length, r, w, q, n, f, c, e, z, b, t = function (a, b, c, e, k, f, d, l) { return !(k > a + c || k + d < a || f > b + e || f + l < b) }; for (w = 0; w < l; w++) if (r = a[w]) r.oldOpacity = r.opacity, r.newOpacity = 1; a.sort(function (a, b) { return (b.labelrank || 0) - (a.labelrank || 0) }); for (w = 0; w < l; w++) for (q = a[w], r = w + 1; r < l; ++r) if (n = a[r], q && n && q !== n && q.placed && n.placed && 0 !== q.newOpacity && 0 !== n.newOpacity && (f = q.alignAttr, c = n.alignAttr, e = q.parentGroup, z = n.parentGroup, b = 2 * (q.box ? 0 : q.padding), f = t(f.x + e.translateX, f.y + e.translateY, q.width - b, q.height - b, c.x + z.translateX, c.y +
            z.translateY, n.width - b, n.height - b))) (q.labelrank < n.labelrank ? q : n).newOpacity = 0; C(a, function (a) { var b, c; a && (c = a.newOpacity, a.oldOpacity !== c && a.placed && (c ? a.show(!0) : b = function () { a.hide() }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0) })
        }
    })(K); (function (a) {
        var D = a.addEvent, C = a.Chart, G = a.createElement, H = a.css, v = a.defaultOptions, l = a.defaultPlotOptions, r = a.each, w = a.extend, q = a.fireEvent, n = a.hasTouch, f = a.inArray, c = a.isObject, e = a.Legend, z = a.merge, b = a.pick, t = a.Point, h = a.Series,
        B = a.seriesTypes, p = a.svg; a = a.TrackerMixin = {
            drawTrackerPoint: function () {
                var a = this, b = a.chart.pointer, c = function (a) { var c = b.getPointFromEvent(a); if (void 0 !== c) c.onMouseOver(a) }; r(a.points, function (a) { a.graphic && (a.graphic.element.point = a); a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a) }); a._hasTracking || (r(a.trackerGroups, function (d) {
                    if (a[d]) {
                        a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) { b.onTrackerMouseOut(a) }); if (n) a[d].on("touchstart",
                        c); a.options.cursor && a[d].css(H).css({ cursor: a.options.cursor })
                    }
                }), a._hasTracking = !0)
            }, drawTrackerGraph: function () {
                var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, m = a.chart, h = m.pointer, f = m.renderer, l = m.options.tooltip.snap, t = a.tracker, g, q = function () { if (m.hoverSeries !== a) a.onMouseOver() }, z = "rgba(192,192,192," + (p ? .0001 : .002) + ")"; if (e && !c) for (g = e + 1; g--;) "M" === d[g] && d.splice(g + 1, 0, d[g + 1] - l, d[g + 2], "L"), (g && "M" === d[g] || g === e) && d.splice(g, 0, "L", d[g - 2] + l, d[g - 1]); t ?
                t.attr({ d: d }) : a.graph && (a.tracker = f.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: z, fill: c ? z : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * l), zIndex: 2 }).add(a.group), r([a.tracker, a.markerGroup], function (a) { a.addClass("highcharts-tracker").on("mouseover", q).on("mouseout", function (a) { h.onTrackerMouseOut(a) }); b.cursor && a.css({ cursor: b.cursor }); if (n) a.on("touchstart", q) }))
            }
        }; B.column && (B.column.prototype.drawTracker = a.drawTrackerPoint); B.pie && (B.pie.prototype.drawTracker =
        a.drawTrackerPoint); B.scatter && (B.scatter.prototype.drawTracker = a.drawTrackerPoint); w(e.prototype, {
            setItemEvents: function (a, b, c) {
                var d = this, k = d.chart.renderer.boxWrapper, e = "highcharts-legend-" + (a.series ? "point" : "series") + "-active"; (c ? b : a.legendGroup).on("mouseover", function () { a.setState("hover"); k.addClass(e); b.css(d.options.itemHoverStyle) }).on("mouseout", function () { b.css(a.visible ? d.itemStyle : d.itemHiddenStyle); k.removeClass(e); a.setState() }).on("click", function (b) {
                    var c = function () {
                        a.setVisible &&
                        a.setVisible()
                    }; b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : q(a, "legendItemClick", b, c)
                })
            }, createCheckboxForItem: function (a) { a.checkbox = G("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); D(a.checkbox, "click", function (b) { q(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () { a.select() }) }) }
        }); v.legend.itemStyle.cursor = "pointer"; w(C.prototype, {
            showResetZoom: function () {
                var a =
                this, b = v.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, m = "chart" === c.relativeTo ? null : "plotBox"; this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () { a.zoomOut() }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c.position, !1, m)
            }, zoomOut: function () { var a = this; q(a, "selection", { resetSelection: !0 }, function () { a.zoom() }) }, zoom: function (a) {
                var k, e = this.pointer, d = !1, h; !a || a.resetSelection ? r(this.axes, function (a) {
                    k =
                    a.zoom()
                }) : r(a.xAxis.concat(a.yAxis), function (a) { var b = a.axis; e[b.isXAxis ? "zoomX" : "zoomY"] && (k = b.zoom(a.min, a.max), b.displayBtn && (d = !0)) }); h = this.resetZoomButton; d && !h ? this.showResetZoom() : !d && c(h) && (this.resetZoomButton = h.destroy()); k && this.redraw(b(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
            }, pan: function (a, b) {
                var c = this, d = c.hoverPoints, k; d && r(d, function (a) { a.setState() }); r("xy" === b ? [1, 0] : [1], function (b) {
                    b = c[b ? "xAxis" : "yAxis"][0]; var d = b.horiz, e = a[d ? "chartX" : "chartY"], d = d ?
                    "mouseDownX" : "mouseDownY", m = c[d], h = (b.pointRange || 0) / 2, g = b.getExtremes(), f = b.toValue(m - e, !0) + h, h = b.toValue(m + b.len - e, !0) - h, p = h < f, m = p ? h : f, f = p ? f : h, p = b.toValue(b.toPixels(g.min) - b.minPixelPadding), h = b.toValue(b.toPixels(g.max) + b.minPixelPadding), p = Math.min(g.dataMin, p) - m, g = f - Math.max(g.dataMax, h); b.series.length && 0 > p && 0 > g && (b.setExtremes(m, f, !1, !1, { trigger: "pan" }), k = !0); c[d] = e
                }); k && c.redraw(!1); H(c.container, { cursor: "move" })
            }
        }); w(t.prototype, {
            select: function (a, c) {
                var k = this, d = k.series, e = d.chart; a = b(a,
                !k.selected); k.firePointEvent(a ? "select" : "unselect", { accumulate: c }, function () { k.selected = k.options.selected = a; d.options.data[f(k, d.data)] = k.options; k.setState(a && "select"); c || r(e.getSelectedPoints(), function (a) { a.selected && a !== k && (a.selected = a.options.selected = !1, d.options.data[f(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")) }) })
            }, onMouseOver: function (a) { var b = this.series.chart.pointer; this.firePointEvent("mouseOver"); b.runPointActions(a, this) }, onMouseOut: function () {
                var a = this.series.chart;
                this.firePointEvent("mouseOut"); r(a.hoverPoints || [], function (a) { a.setState() }); a.hoverPoints = a.hoverPoint = null
            }, importEvents: function () { if (!this.hasImportedEvents) { var a = z(this.series.options.point, this.options).events, b; this.events = a; for (b in a) D(this, b, a[b]); this.hasImportedEvents = !0 } }, setState: function (a, c) {
                var k = Math.floor(this.plotX), d = this.plotY, e = this.series, h = e.options.states[a] || {}, f = l[e.type].marker && e.options.marker, p = f && !1 === f.enabled, t = f && f.states && f.states[a] || {}, n = !1 === t.enabled, g =
                e.stateMarkerGraphic, x = this.marker || {}, q = e.chart, r = e.halo, z, v = f && e.markerAttribs; a = a || ""; if (!(a === this.state && !c || this.selected && "select" !== a || !1 === h.enabled || a && (n || p && !1 === t.enabled) || a && x.states && x.states[a] && !1 === x.states[a].enabled)) {
                    v && (z = e.markerAttribs(this, a)); if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.attr(e.pointAttribs(this, a)), z && this.graphic.animate(z, b(q.options.chart.animation, t.animation,
                    f.animation)), g && g.hide(); else { if (a && t) { f = x.symbol || e.symbol; g && g.currentSymbol !== f && (g = g.destroy()); if (g) g[c ? "animate" : "attr"]({ x: z.x, y: z.y }); else f && (e.stateMarkerGraphic = g = q.renderer.symbol(f, z.x, z.y, z.width, z.height).add(e.markerGroup), g.currentSymbol = f); g && g.attr(e.pointAttribs(this, a)) } g && (g[a && q.isInsidePlot(k, d, q.inverted) ? "show" : "hide"](), g.element.point = this) } (k = h.halo) && k.size ? (r || (e.halo = r = q.renderer.path().add(v ? e.markerGroup : e.group)), r[c ? "animate" : "attr"]({ d: this.haloPath(k.size) }),
                    r.attr({ "class": "highcharts-halo highcharts-color-" + b(this.colorIndex, e.colorIndex) }), r.point = this, r.attr(w({ fill: this.color || e.color, "fill-opacity": k.opacity, zIndex: -1 }, k.attributes))) : r && r.point && r.point.haloPath && r.animate({ d: r.point.haloPath(0) }); this.state = a
                }
            }, haloPath: function (a) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a) }
        }); w(h.prototype, {
            onMouseOver: function () {
                var a = this.chart, b = a.hoverSeries; if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver &&
                q(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this
            }, onMouseOut: function () { var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; b.hoverSeries = null; if (d) d.onMouseOut(); this && a.events.mouseOut && q(this, "mouseOut"); !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide(); this.setState() }, setState: function (a) {
                var c = this, e = c.options, d = c.graph, h = e.states, m = e.lineWidth, e = 0; a = a || ""; if (c.state !== a && (r([c.group, c.markerGroup, c.dataLabelsGroup], function (b) {
                b && (c.state && b.removeClass("highcharts-series-" +
                c.state), a && b.addClass("highcharts-series-" + a))
                }), c.state = a, !h[a] || !1 !== h[a].enabled) && (a && (m = h[a].lineWidth || m + (h[a].lineWidthPlus || 0)), d && !d.dashstyle)) for (m = { "stroke-width": m }, d.animate(m, b(c.chart.options.chart.animation, h[a] && h[a].animation)) ; c["zone-graph-" + e];) c["zone-graph-" + e].attr(m), e += 1
            }, setVisible: function (a, b) {
                var c = this, d = c.chart, e = c.legendItem, k, h = d.options.chart.ignoreHiddenSeries, f = c.visible; k = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !f : a) ? "show" : "hide"; r(["group",
                "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) { if (c[a]) c[a][k]() }); if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut(); e && d.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && r(d.series, function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); r(c.linkedSeries, function (b) { b.setVisible(a, !1) }); h && (d.isDirtyBox = !0); !1 !== b && d.redraw(); q(c, k)
            }, show: function () { this.setVisible(!0) }, hide: function () { this.setVisible(!1) }, select: function (a) {
                this.selected = a = void 0 ===
                a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); q(this, a ? "select" : "unselect")
            }, drawTracker: a.drawTrackerGraph
        })
    })(K); (function (a) {
        var D = a.Chart, C = a.each, G = a.inArray, H = a.isArray, v = a.isObject, l = a.pick, r = a.splat; D.prototype.setResponsive = function (l) {
            var q = this.options.responsive, n = [], f = this.currentResponsive; q && q.rules && C(q.rules, function (c) { void 0 === c._id && (c._id = a.uniqueKey()); this.matchResponsiveRule(c, n, l) }, this); var c = a.merge.apply(0, a.map(n, function (c) {
                return a.find(q.rules, function (a) {
                    return a._id ===
                    c
                }).chartOptions
            })), n = n.toString() || void 0; n !== (f && f.ruleIds) && (f && this.update(f.undoOptions, l), n ? (this.currentResponsive = { ruleIds: n, mergedOptions: c, undoOptions: this.currentOptions(c) }, this.update(c, l)) : this.currentResponsive = void 0)
        }; D.prototype.matchResponsiveRule = function (a, q) {
            var n = a.condition; (n.callback || function () { return this.chartWidth <= l(n.maxWidth, Number.MAX_VALUE) && this.chartHeight <= l(n.maxHeight, Number.MAX_VALUE) && this.chartWidth >= l(n.minWidth, 0) && this.chartHeight >= l(n.minHeight, 0) }).call(this) &&
            q.push(a._id)
        }; D.prototype.currentOptions = function (a) { function l(a, c, e, n) { var b, f; for (b in a) if (!n && -1 < G(b, ["series", "xAxis", "yAxis"])) for (a[b] = r(a[b]), e[b] = [], f = 0; f < a[b].length; f++) c[b][f] && (e[b][f] = {}, l(a[b][f], c[b][f], e[b][f], n + 1)); else v(a[b]) ? (e[b] = H(a[b]) ? [] : {}, l(a[b], c[b] || {}, e[b], n + 1)) : e[b] = c[b] || null } var n = {}; l(a, this.options, n, 0); return n }
    })(K); (function (a) {
        var D = a.addEvent, C = a.Axis, G = a.Chart, H = a.css, v = a.dateFormat, l = a.defined, r = a.each, w = a.extend, q = a.noop, n = a.Series, f = a.timeUnits; a = a.wrap;
        a(n.prototype, "init", function (a) { var c; a.apply(this, Array.prototype.slice.call(arguments, 1)); (c = this.xAxis) && c.options.ordinal && D(this, "updatedData", function () { delete c.ordinalIndex }) }); a(C.prototype, "getTimeTicks", function (a, e, n, b, t, h, q, p) {
            var c = 0, k, r, d = {}, u, m, y, z = [], E = -Number.MAX_VALUE, w = this.options.tickPixelInterval; if (!this.options.ordinal && !this.options.breaks || !h || 3 > h.length || void 0 === n) return a.call(this, e, n, b, t); m = h.length; for (k = 0; k < m; k++) {
                y = k && h[k - 1] > b; h[k] < n && (c = k); if (k === m - 1 || h[k + 1] - h[k] >
                5 * q || y) { if (h[k] > E) { for (r = a.call(this, e, h[c], h[k], t) ; r.length && r[0] <= E;) r.shift(); r.length && (E = r[r.length - 1]); z = z.concat(r) } c = k + 1 } if (y) break
            } a = r.info; if (p && a.unitRange <= f.hour) { k = z.length - 1; for (c = 1; c < k; c++) v("%d", z[c]) !== v("%d", z[c - 1]) && (d[z[c]] = "day", u = !0); u && (d[z[0]] = "day"); a.higherRanks = d } z.info = a; if (p && l(w)) {
                p = a = z.length; k = []; var g; for (u = []; p--;) c = this.translate(z[p]), g && (u[p] = g - c), k[p] = g = c; u.sort(); u = u[Math.floor(u.length / 2)]; u < .6 * w && (u = null); p = z[a - 1] > b ? a - 1 : a; for (g = void 0; p--;) c = k[p], b = Math.abs(g -
                c), g && b < .8 * w && (null === u || b < .8 * u) ? (d[z[p]] && !d[z[p + 1]] ? (b = p + 1, g = c) : b = p, z.splice(b, 1)) : g = c
            } return z
        }); w(C.prototype, {
            beforeSetTickPositions: function () {
                var a, e = [], f = !1, b, l = this.getExtremes(), h = l.min, n = l.max, p, x = this.isXAxis && !!this.options.breaks, l = this.options.ordinal, k = this.chart.options.chart.ignoreHiddenSeries; if (l || x) {
                    r(this.series, function (b, c) {
                        if (!(k && !1 === b.visible || !1 === b.takeOrdinalPosition && !x) && (e = e.concat(b.processedXData), a = e.length, e.sort(function (a, b) { return a - b }), a)) for (c = a - 1; c--;) e[c] ===
                        e[c + 1] && e.splice(c, 1)
                    }); a = e.length; if (2 < a) { b = e[1] - e[0]; for (p = a - 1; p-- && !f;) e[p + 1] - e[p] !== b && (f = !0); !this.options.keepOrdinalPadding && (e[0] - h > b || n - e[e.length - 1] > b) && (f = !0) } f ? (this.ordinalPositions = e, b = this.ordinal2lin(Math.max(h, e[0]), !0), p = Math.max(this.ordinal2lin(Math.min(n, e[e.length - 1]), !0), 1), this.ordinalSlope = n = (n - h) / (p - b), this.ordinalOffset = h - b * n) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = void 0
                } this.isOrdinal = l && f; this.groupIntervalFactor = null
            }, val2lin: function (a, e) {
                var c =
                this.ordinalPositions; if (c) { var b = c.length, f, h; for (f = b; f--;) if (c[f] === a) { h = f; break } for (f = b - 1; f--;) if (a > c[f] || 0 === f) { a = (a - c[f]) / (c[f + 1] - c[f]); h = f + a; break } e = e ? h : this.ordinalSlope * (h || 0) + this.ordinalOffset } else e = a; return e
            }, lin2val: function (a, e) {
                var c = this.ordinalPositions; if (c) {
                    var b = this.ordinalSlope, f = this.ordinalOffset, h = c.length - 1, l; if (e) 0 > a ? a = c[0] : a > h ? a = c[h] : (h = Math.floor(a), l = a - h); else for (; h--;) if (e = b * h + f, a >= e) { b = b * (h + 1) + f; l = (a - e) / (b - e); break } return void 0 !== l && void 0 !== c[h] ? c[h] + (l ? l * (c[h +
                    1] - c[h]) : 0) : a
                } return a
            }, getExtendedPositions: function () {
                var a = this.chart, e = this.series[0].currentDataGrouping, f = this.ordinalIndex, b = e ? e.count + e.unitName : "raw", l = this.getExtremes(), h, n; f || (f = this.ordinalIndex = {}); f[b] || (h = { series: [], chart: a, getExtremes: function () { return { min: l.dataMin, max: l.dataMax } }, options: { ordinal: !0 }, val2lin: C.prototype.val2lin, ordinal2lin: C.prototype.ordinal2lin }, r(this.series, function (b) {
                    n = { xAxis: h, xData: b.xData, chart: a, destroyGroupedData: q }; n.options = {
                        dataGrouping: e ? {
                            enabled: !0,
                            forced: !0, approximation: "open", units: [[e.unitName, [e.count]]]
                        } : { enabled: !1 }
                    }; b.processData.apply(n); h.series.push(n)
                }), this.beforeSetTickPositions.apply(h), f[b] = h.ordinalPositions); return f[b]
            }, getGroupIntervalFactor: function (a, e, f) { var b; f = f.processedXData; var c = f.length, h = []; b = this.groupIntervalFactor; if (!b) { for (b = 0; b < c - 1; b++) h[b] = f[b + 1] - f[b]; h.sort(function (a, b) { return a - b }); h = h[Math.floor(c / 2)]; a = Math.max(a, f[0]); e = Math.min(e, f[c - 1]); this.groupIntervalFactor = b = c * h / (e - a) } return b }, postProcessTickInterval: function (a) {
                var c =
                this.ordinalSlope; return c ? this.options.breaks ? this.closestPointRange : a / (c / this.closestPointRange) : a
            }
        }); C.prototype.ordinal2lin = C.prototype.val2lin; a(G.prototype, "pan", function (a, e) {
            var c = this.xAxis[0], b = e.chartX, f = !1; if (c.options.ordinal && c.series.length) {
                var h = this.mouseDownX, l = c.getExtremes(), p = l.dataMax, n = l.min, k = l.max, q = this.hoverPoints, d = c.closestPointRange, h = (h - b) / (c.translationSlope * (c.ordinalSlope || d)), u = { ordinalPositions: c.getExtendedPositions() }, d = c.lin2val, m = c.val2lin, y; u.ordinalPositions ?
                1 < Math.abs(h) && (q && r(q, function (a) { a.setState() }), 0 > h ? (q = u, y = c.ordinalPositions ? c : u) : (q = c.ordinalPositions ? c : u, y = u), u = y.ordinalPositions, p > u[u.length - 1] && u.push(p), this.fixedRange = k - n, h = c.toFixedRange(null, null, d.apply(q, [m.apply(q, [n, !0]) + h, !0]), d.apply(y, [m.apply(y, [k, !0]) + h, !0])), h.min >= Math.min(l.dataMin, n) && h.max <= Math.max(p, k) && c.setExtremes(h.min, h.max, !0, !1, { trigger: "pan" }), this.mouseDownX = b, H(this.container, { cursor: "move" })) : f = !0
            } else f = !0; f && a.apply(this, Array.prototype.slice.call(arguments,
            1))
        }); n.prototype.gappedPath = function () { var a = this.options.gapSize, e = this.points.slice(), f = e.length - 1; if (a && 0 < f) for (; f--;) e[f + 1].x - e[f].x > this.closestPointRange * a && e.splice(f + 1, 0, { isNull: !0 }); return this.getGraphPath(e) }
    })(K); (function (a) {
        function D() { return Array.prototype.slice.call(arguments, 1) } function C(a) { a.apply(this); this.drawBreaks(this.xAxis, ["x"]); this.drawBreaks(this.yAxis, G(this.pointArrayMap, ["y"])) } var G = a.pick, H = a.wrap, v = a.each, l = a.extend, r = a.isArray, w = a.fireEvent, q = a.Axis, n = a.Series;
        l(q.prototype, { isInBreak: function (a, c) { var e = a.repeat || Infinity, f = a.from, b = a.to - a.from; c = c >= f ? (c - f) % e : e - (f - c) % e; return a.inclusive ? c <= b : c < b && 0 !== c }, isInAnyBreak: function (a, c) { var e = this.options.breaks, f = e && e.length, b, l, h; if (f) { for (; f--;) this.isInBreak(e[f], a) && (b = !0, l || (l = G(e[f].showPoints, this.isXAxis ? !1 : !0))); h = b && c ? b && !l : b } return h } }); H(q.prototype, "setTickPositions", function (a) {
            a.apply(this, Array.prototype.slice.call(arguments, 1)); if (this.options.breaks) {
                var c = this.tickPositions, e = this.tickPositions.info,
                f = [], b; for (b = 0; b < c.length; b++) this.isInAnyBreak(c[b]) || f.push(c[b]); this.tickPositions = f; this.tickPositions.info = e
            }
        }); H(q.prototype, "init", function (a, c, e) {
            var f = this; e.breaks && e.breaks.length && (e.ordinal = !1); a.call(this, c, e); a = this.options.breaks; f.isBroken = r(a) && !!a.length; f.isBroken && (f.val2lin = function (a) { var b = a, c, e; for (e = 0; e < f.breakArray.length; e++) if (c = f.breakArray[e], c.to <= a) b -= c.len; else if (c.from >= a) break; else if (f.isInBreak(c, a)) { b -= a - c.from; break } return b }, f.lin2val = function (a) {
                var b, c;
                for (c = 0; c < f.breakArray.length && !(b = f.breakArray[c], b.from >= a) ; c++) b.to < a ? a += b.len : f.isInBreak(b, a) && (a += b.len); return a
            }, f.setExtremes = function (a, c, e, f, p) { for (; this.isInAnyBreak(a) ;) a -= this.closestPointRange; for (; this.isInAnyBreak(c) ;) c -= this.closestPointRange; q.prototype.setExtremes.call(this, a, c, e, f, p) }, f.setAxisTranslation = function (a) {
                q.prototype.setAxisTranslation.call(this, a); var b = f.options.breaks; a = []; var c = [], e = 0, p, l, k = f.userMin || f.min, n = f.userMax || f.max, d = G(f.pointRangePadding, 0), u, m; for (m in b) l =
                b[m], p = l.repeat || Infinity, f.isInBreak(l, k) && (k += l.to % p - k % p), f.isInBreak(l, n) && (n -= n % p - l.from % p); for (m in b) { l = b[m]; u = l.from; for (p = l.repeat || Infinity; u - p > k;) u -= p; for (; u < k;) u += p; for (; u < n; u += p) a.push({ value: u, move: "in" }), a.push({ value: u + (l.to - l.from), move: "out", size: l.breakSize }) } a.sort(function (a, b) { return a.value === b.value ? ("in" === a.move ? 0 : 1) - ("in" === b.move ? 0 : 1) : a.value - b.value }); b = 0; u = k; for (m in a) l = a[m], b += "in" === l.move ? 1 : -1, 1 === b && "in" === l.move && (u = l.value), 0 === b && (c.push({
                    from: u, to: l.value, len: l.value -
                    u - (l.size || 0)
                }), e += l.value - u - (l.size || 0)); f.breakArray = c; f.unitLength = n - k - e + d; w(f, "afterBreaks"); f.transA = f.options.staticScale ? f.options.staticScale : (n - f.min + d) / f.unitLength * f.transA; d && (f.minPixelPadding = f.transA * f.minPointOffset); f.min = k; f.max = n
            })
        }); H(n.prototype, "generatePoints", function (a) {
            a.apply(this, D(arguments)); var c = this.xAxis, e = this.yAxis, f = this.points, b, l = f.length, h = this.options.connectNulls, n; if (c && e && (c.options.breaks || e.options.breaks)) for (; l--;) b = f[l], n = null === b.y && !1 === h, n || !c.isInAnyBreak(b.x,
            !0) && !e.isInAnyBreak(b.y, !0) || (f.splice(l, 1), this.data[l] && this.data[l].destroyElements())
        }); a.Series.prototype.drawBreaks = function (a, c) { var e = this, f = e.points, b, l, h, n; a && v(c, function (c) { b = a.breakArray || []; l = a.isXAxis ? a.min : G(e.options.threshold, a.min); v(f, function (e) { n = G(e["stack" + c.toUpperCase()], e[c]); v(b, function (b) { h = !1; if (l < b.from && n > b.to || l > b.from && n < b.from) h = "pointBreak"; else if (l < b.from && n > b.from && n < b.to || l > b.from && n > b.to && n < b.from) h = "pointInBreak"; h && w(a, h, { point: e, brk: b }) }) }) }) }; H(a.seriesTypes.column.prototype,
        "drawPoints", C); H(a.Series.prototype, "drawPoints", C)
    })(K); (function (a) {
        var D = a.arrayMax, C = a.arrayMin, G = a.Axis, H = a.defaultPlotOptions, v = a.defined, l = a.each, r = a.extend, w = a.format, q = a.isNumber, n = a.merge, f = a.pick, c = a.Point, e = a.Tooltip, z = a.wrap, b = a.Series.prototype, t = b.processData, h = b.generatePoints, B = b.destroy, p = {
            approximation: "average", groupPixelWidth: 2, dateTimeLabelFormats: {
                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S",
                "-%H:%M:%S"], minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], month: ["%B %Y", "%B", "-%B %Y"], year: ["%Y", "%Y", "-%Y"]
            }
        }, x = {
            line: {}, spline: {}, area: {}, areaspline: {}, column: { approximation: "sum", groupPixelWidth: 10 }, arearange: { approximation: "range" }, areasplinerange: { approximation: "range" }, columnrange: { approximation: "range", groupPixelWidth: 10 },
            candlestick: { approximation: "ohlc", groupPixelWidth: 10 }, ohlc: { approximation: "ohlc", groupPixelWidth: 5 }
        }, k = a.defaultDataGroupingUnits = [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]], F = {
            sum: function (a) { var b = a.length, c; if (!b && a.hasNulls) c = null; else if (b) for (c = 0; b--;) c += a[b]; return c }, average: function (a) { var b = a.length; a = F.sum(a); q(a) && b && (a /= b); return a }, open: function (a) {
                return a.length ?
                a[0] : a.hasNulls ? null : void 0
            }, high: function (a) { return a.length ? D(a) : a.hasNulls ? null : void 0 }, low: function (a) { return a.length ? C(a) : a.hasNulls ? null : void 0 }, close: function (a) { return a.length ? a[a.length - 1] : a.hasNulls ? null : void 0 }, ohlc: function (a, b, c, e) { a = F.open(a); b = F.high(b); c = F.low(c); e = F.close(e); if (q(a) || q(b) || q(c) || q(e)) return [a, b, c, e] }, range: function (a, b) { a = F.low(a); b = F.high(b); if (q(a) || q(b)) return [a, b] }
        }; b.groupData = function (a, b, c, e) {
            var d = this.data, k = this.options.data, f = [], g = [], h = [], m = a.length,
            p, l, n = !!b, u = [[], [], [], []]; e = "function" === typeof e ? e : F[e]; var t = this.pointArrayMap, x = t && t.length, r, y = 0; for (r = l = 0; r <= m && !(a[r] >= c[0]) ; r++); for (r; r <= m; r++) {
                for (; (void 0 !== c[y + 1] && a[r] >= c[y + 1] || r === m) && (p = c[y], this.dataGroupInfo = { start: l, length: u[0].length }, l = e.apply(this, u), void 0 !== l && (f.push(p), g.push(l), h.push(this.dataGroupInfo)), l = r, u[0] = [], u[1] = [], u[2] = [], u[3] = [], y += 1, r !== m) ;); if (r === m) break; if (t) {
                    p = this.cropStart + r; p = d && d[p] || this.pointClass.prototype.applyOptions.apply({ series: this }, [k[p]]);
                    var v, w; for (v = 0; v < x; v++) w = p[t[v]], q(w) ? u[v].push(w) : null === w && (u[v].hasNulls = !0)
                } else p = n ? b[r] : null, q(p) ? u[0].push(p) : null === p && (u[0].hasNulls = !0)
            } return [f, g, h]
        }; b.processData = function () {
            var a = this.chart, c = this.options.dataGrouping, e = !1 !== this.allowDG && c && f(c.enabled, a.options.isStock), h = this.visible || !a.options.chart.ignoreHiddenSeries, p; this.forceCrop = e; this.groupPixelWidth = null; this.hasProcessed = !0; if (!1 !== t.apply(this, arguments) && e) {
                this.destroyGroupedData(); var l = this.processedXData, n = this.processedYData,
                g = a.plotSizeX, a = this.xAxis, q = a.options.ordinal, r = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth(); if (r) {
                    this.isDirty = p = !0; var x = a.getExtremes(), e = x.min, x = x.max, q = q && a.getGroupIntervalFactor(e, x, this) || 1, g = r * (x - e) / g * q, r = a.getTimeTicks(a.normalizeTimeTickInterval(g, c.units || k), Math.min(e, l[0]), Math.max(x, l[l.length - 1]), a.options.startOfWeek, l, this.closestPointRange), l = b.groupData.apply(this, [l, n, r, c.approximation]), n = l[0], q = l[1]; if (c.smoothed) {
                        c = n.length - 1; for (n[c] = Math.min(n[c], x) ; c-- &&
                        0 < c;) n[c] += g / 2; n[0] = Math.max(n[0], e)
                    } this.currentDataGrouping = r.info; this.closestPointRange = r.info.totalRange; this.groupMap = l[2]; v(n[0]) && n[0] < a.dataMin && h && (a.min === a.dataMin && (a.min = n[0]), a.dataMin = n[0]); this.processedXData = n; this.processedYData = q
                } else this.currentDataGrouping = this.groupMap = null; this.hasGroupedData = p
            }
        }; b.destroyGroupedData = function () { var a = this.groupedData; l(a || [], function (b, c) { b && (a[c] = b.destroy ? b.destroy() : null) }); this.groupedData = null }; b.generatePoints = function () {
            h.apply(this);
            this.destroyGroupedData(); this.groupedData = this.hasGroupedData ? this.points : null
        }; z(c.prototype, "update", function (b) { this.dataGroup ? a.error(24) : b.apply(this, [].slice.call(arguments, 1)) }); z(e.prototype, "tooltipFooterHeaderFormatter", function (b, c, e) {
            var d = c.series, k = d.tooltipOptions, f = d.options.dataGrouping, h = k.xDateFormat, g, m = d.xAxis, l = a.dateFormat; return m && "datetime" === m.options.type && f && q(c.key) ? (b = d.currentDataGrouping, f = f.dateTimeLabelFormats, b ? (m = f[b.unitName], 1 === b.count ? h = m[0] : (h = m[1], g = m[2])) :
            !h && f && (h = this.getXDateFormat(c, k, m)), h = l(h, c.key), g && (h += l(g, c.key + b.totalRange - 1)), w(k[(e ? "footer" : "header") + "Format"], { point: r(c.point, { key: h }), series: d })) : b.call(this, c, e)
        }); b.destroy = function () { for (var a = this.groupedData || [], b = a.length; b--;) a[b] && a[b].destroy(); B.apply(this) }; z(b, "setOptions", function (a, b) {
            a = a.call(this, b); var c = this.type, d = this.chart.options.plotOptions, e = H[c].dataGrouping; x[c] && (e || (e = n(p, x[c])), a.dataGrouping = n(e, d.series && d.series.dataGrouping, d[c].dataGrouping, b.dataGrouping));
            this.chart.options.isStock && (this.requireSorting = !0); return a
        }); z(G.prototype, "setScale", function (a) { a.call(this); l(this.series, function (a) { a.hasProcessed = !1 }) }); G.prototype.getGroupPixelWidth = function () {
            var a = this.series, b = a.length, c, e = 0, k = !1, h; for (c = b; c--;) (h = a[c].options.dataGrouping) && (e = Math.max(e, h.groupPixelWidth)); for (c = b; c--;) (h = a[c].options.dataGrouping) && a[c].hasProcessed && (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth || b > this.chart.plotSizeX / e || b && h.forced) && (k = !0); return k ?
                e : 0
        }; G.prototype.setDataGrouping = function (a, b) { var c; b = f(b, !0); a || (a = { forced: !1, units: null }); if (this instanceof G) for (c = this.series.length; c--;) this.series[c].update({ dataGrouping: a }, !1); else l(this.chart.options.series, function (b) { b.dataGrouping = a }, !1); b && this.chart.redraw() }
    })(K); (function (a) {
        var D = a.each, C = a.Point, G = a.seriesType, H = a.seriesTypes; G("ohlc", "column", {
            lineWidth: 1, tooltip: { pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e' },
            threshold: null, states: { hover: { lineWidth: 3 } }, stickyTracking: !0
        }, {
            directTouch: !1, pointArrayMap: ["open", "high", "low", "close"], toYData: function (a) { return [a.open, a.high, a.low, a.close] }, pointValKey: "high", pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" }, pointAttribs: function (a, l) { l = H.column.prototype.pointAttribs.call(this, a, l); var r = this.options; delete l.fill; !a.options.color && r.upColor && a.open < a.close && (l.stroke = r.upColor); return l }, translate: function () {
                var a = this, l = a.yAxis, r = !!a.modifyValue,
                w = ["plotOpen", "plotHigh", "plotLow", "plotClose", "yBottom"]; H.column.prototype.translate.apply(a); D(a.points, function (q) { D([q.open, q.high, q.low, q.close, q.low], function (n, f) { null !== n && (r && (n = a.modifyValue(n)), q[w[f]] = l.toPixels(n, !0)) }) })
            }, drawPoints: function () {
                var a = this, l = a.chart; D(a.points, function (r) {
                    var w, q, n, f, c = r.graphic, e, v = !c; void 0 !== r.plotY && (c || (r.graphic = c = l.renderer.path().add(a.group)), c.attr(a.pointAttribs(r, r.selected && "select")), q = c.strokeWidth() % 2 / 2, e = Math.round(r.plotX) - q, n = Math.round(r.shapeArgs.width /
                    2), f = ["M", e, Math.round(r.yBottom), "L", e, Math.round(r.plotY)], null !== r.open && (w = Math.round(r.plotOpen) + q, f.push("M", e, w, "L", e - n, w)), null !== r.close && (w = Math.round(r.plotClose) + q, f.push("M", e, w, "L", e + n, w)), c[v ? "attr" : "animate"]({ d: f }).addClass(r.getClassName(), !0))
                })
            }, animate: null
        }, { getClassName: function () { return C.prototype.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down") } })
    })(K); (function (a) {
        var D = a.defaultPlotOptions, C = a.each, G = a.merge, H = a.seriesType,
        v = a.seriesTypes; H("candlestick", "ohlc", G(D.column, { states: { hover: { lineWidth: 2 } }, tooltip: D.ohlc.tooltip, threshold: null, lineColor: "#000000", lineWidth: 1, upColor: "#ffffff", stickyTracking: !0 }), {
            pointAttribs: function (a, r) {
                var l = v.column.prototype.pointAttribs.call(this, a, r), q = this.options, n = a.open < a.close, f = q.lineColor || this.color; l["stroke-width"] = q.lineWidth; l.fill = a.options.color || (n ? q.upColor || this.color : this.color); l.stroke = a.lineColor || (n ? q.upLineColor || f : f); r && (a = q.states[r], l.fill = a.color || l.fill,
                l.stroke = a.lineColor || l.stroke, l["stroke-width"] = a.lineWidth || l["stroke-width"]); return l
            }, drawPoints: function () {
                var a = this, r = a.chart; C(a.points, function (l) {
                    var q = l.graphic, n, f, c, e, v, b, t, h = !q; void 0 !== l.plotY && (q || (l.graphic = q = r.renderer.path().add(a.group)), q.attr(a.pointAttribs(l, l.selected && "select")).shadow(a.options.shadow), v = q.strokeWidth() % 2 / 2, b = Math.round(l.plotX) - v, n = l.plotOpen, f = l.plotClose, c = Math.min(n, f), n = Math.max(n, f), t = Math.round(l.shapeArgs.width / 2), f = Math.round(c) !== Math.round(l.plotY),
                    e = n !== l.yBottom, c = Math.round(c) + v, n = Math.round(n) + v, v = [], v.push("M", b - t, n, "L", b - t, c, "L", b + t, c, "L", b + t, n, "Z", "M", b, c, "L", b, f ? Math.round(l.plotY) : c, "M", b, n, "L", b, e ? Math.round(l.yBottom) : n), q[h ? "attr" : "animate"]({ d: v }).addClass(l.getClassName(), !0))
                })
            }
        })
    })(K); (function (a) {
        var D = a.addEvent, C = a.each, G = a.merge, H = a.noop, v = a.Renderer, l = a.seriesType, r = a.seriesTypes, w = a.TrackerMixin, q = a.VMLRenderer, n = a.SVGRenderer.prototype.symbols, f = a.stableSort; l("flags", "column", {
            pointRange: 0, shape: "flag", stackDistance: 12,
            textAlign: "center", tooltip: { pointFormat: "{point.text}\x3cbr/\x3e" }, threshold: null, y: -30, fillColor: "#ffffff", lineWidth: 1, states: { hover: { lineColor: "#000000", fillColor: "#ccd6eb" } }, style: { fontSize: "11px", fontWeight: "bold" }
        }, {
            sorted: !1, noSharedTooltip: !0, allowDG: !1, takeOrdinalPosition: !1, trackerGroups: ["markerGroup"], forceCrop: !0, init: a.Series.prototype.init, pointAttribs: function (a, e) {
                var c = this.options, b = a && a.color || this.color, f = c.lineColor, h = a && a.lineWidth; a = a && a.fillColor || c.fillColor; e && (a = c.states[e].fillColor,
                f = c.states[e].lineColor, h = c.states[e].lineWidth); return { fill: a || b, stroke: f || b, "stroke-width": h || c.lineWidth || 0 }
            }, translate: function () {
                r.column.prototype.translate.apply(this); var a = this.options, e = this.chart, l = this.points, b = l.length - 1, n, h, q = a.onSeries; n = q && e.get(q); var a = a.onKey || "y", q = n && n.options.step, p = n && n.points, x = p && p.length, k = this.xAxis, v = this.yAxis, d = k.getExtremes(), u = 0, m, y, w; if (n && n.visible && x) for (u = (n.pointXOffset || 0) + (n.barW || 0) / 2, n = n.currentDataGrouping, y = p[x - 1].x + (n ? n.totalRange : 0), f(l,
                function (a, b) { return a.x - b.x }), a = "plot" + a[0].toUpperCase() + a.substr(1) ; x-- && l[b] && !(n = l[b], m = p[x], m.x <= n.x && void 0 !== m[a] && (n.x <= y && (n.plotY = m[a], m.x < n.x && !q && (w = p[x + 1]) && void 0 !== w[a] && (n.plotY += (n.x - m.x) / (w.x - m.x) * (w[a] - m[a]))), b--, x++, 0 > b)) ;); C(l, function (a, b) {
                    var c; void 0 === a.plotY && (a.x >= d.min && a.x <= d.max ? a.plotY = e.chartHeight - k.bottom - (k.opposite ? k.height : 0) + k.offset - v.top : a.shapeArgs = {}); a.plotX += u; (h = l[b - 1]) && h.plotX === a.plotX && (void 0 === h.stackIndex && (h.stackIndex = 0), c = h.stackIndex + 1); a.stackIndex =
                    c
                })
            }, drawPoints: function () {
                var c = this.points, e = this.chart, f = e.renderer, b, l, h = this.options, n = h.y, p, q, k, r, d, u, m, y = this.yAxis; for (q = c.length; q--;) k = c[q], m = k.plotX > this.xAxis.len, b = k.plotX, r = k.stackIndex, p = k.options.shape || h.shape, l = k.plotY, void 0 !== l && (l = k.plotY + n - (void 0 !== r && r * h.stackDistance)), d = r ? void 0 : k.plotX, u = r ? void 0 : k.plotY, r = k.graphic, void 0 !== l && 0 <= b && !m ? (r || (r = k.graphic = f.label("", null, null, p, null, null, h.useHTML).attr(this.pointAttribs(k)).css(G(h.style, k.style)).attr({
                    align: "flag" === p ?
                    "left" : "center", width: h.width, height: h.height, "text-align": h.textAlign
                }).addClass("highcharts-point").add(this.markerGroup), k.graphic.div && (k.graphic.div.point = k), r.shadow(h.shadow)), 0 < b && (b -= r.strokeWidth() % 2), r.attr({ text: k.options.title || h.title || "A", x: b, y: l, anchorX: d, anchorY: u }), k.tooltipPos = e.inverted ? [y.len + y.pos - e.plotLeft - l, this.xAxis.len - b] : [b, l + y.pos - e.plotTop]) : r && (k.graphic = r.destroy()); h.useHTML && a.wrap(this.markerGroup, "on", function (b) {
                    return a.SVGElement.prototype.on.apply(b.apply(this,
                    [].slice.call(arguments, 1)), [].slice.call(arguments, 1))
                })
            }, drawTracker: function () { var a = this.points; w.drawTrackerPoint.apply(this); C(a, function (c) { var e = c.graphic; e && D(e.element, "mouseover", function () { 0 < c.stackIndex && !c.raised && (c._y = e.y, e.attr({ y: c._y - 8 }), c.raised = !0); C(a, function (a) { a !== c && a.raised && a.graphic && (a.graphic.attr({ y: a._y }), a.raised = !1) }) }) }) }, animate: H, buildKDTree: H, setClip: H
        }); n.flag = function (a, e, f, b, l) { return ["M", l && l.anchorX || a, l && l.anchorY || e, "L", a, e + b, a, e, a + f, e, a + f, e + b, a, e + b, "Z"] };
        C(["circle", "square"], function (a) { n[a + "pin"] = function (c, f, b, l, h) { var e = h && h.anchorX; h = h && h.anchorY; "circle" === a && l > b && (c -= Math.round((l - b) / 2), b = l); c = n[a](c, f, b, l); e && h && c.push("M", e, f > h ? f : f + l, "L", e, h); return c } }); v === q && C(["flag", "circlepin", "squarepin"], function (a) { q.prototype.symbols[a] = n[a] })
    })(K); (function (a) {
        function D(a, b, c) { this.init(a, b, c) } var C = a.addEvent, G = a.Axis, H = a.correctFloat, v = a.defaultOptions, l = a.defined, r = a.destroyObjectProperties, w = a.doc, q = a.each, n = a.fireEvent, f = a.hasTouch, c = a.isTouchDevice,
        e = a.merge, z = a.pick, b = a.removeEvent, t = a.wrap, h, B = { height: c ? 20 : 14, barBorderRadius: 0, buttonBorderRadius: 0, liveRedraw: a.svg && !c, margin: 10, minWidth: 6, step: .2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 1, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "#333333", trackBackgroundColor: "#f2f2f2", trackBorderColor: "#f2f2f2", trackBorderWidth: 1 }; v.scrollbar = e(!0, B, v.scrollbar); a.swapXY = h = function (a, b) {
            var c =
            a.length, e; if (b) for (b = 0; b < c; b += 3) e = a[b + 1], a[b + 1] = a[b + 2], a[b + 2] = e; return a
        }; D.prototype = {
            init: function (a, b, c) { this.scrollbarButtons = []; this.renderer = a; this.userOptions = b; this.options = e(B, b); this.chart = c; this.size = z(this.options.size, this.options.height); b.enabled && (this.render(), this.initEvents(), this.addEvents()) }, render: function () {
                var a = this.renderer, b = this.options, c = this.size, e; this.group = e = a.g("scrollbar").attr({ zIndex: b.zIndex, translateY: -99999 }).add(); this.track = a.rect().addClass("highcharts-scrollbar-track").attr({
                    x: 0,
                    r: b.trackBorderRadius || 0, height: c, width: c
                }).add(e); this.track.attr({ fill: b.trackBackgroundColor, stroke: b.trackBorderColor, "stroke-width": b.trackBorderWidth }); this.trackBorderWidth = this.track.strokeWidth(); this.track.attr({ y: -this.trackBorderWidth % 2 / 2 }); this.scrollbarGroup = a.g().add(e); this.scrollbar = a.rect().addClass("highcharts-scrollbar-thumb").attr({ height: c, width: c, r: b.barBorderRadius || 0 }).add(this.scrollbarGroup); this.scrollbarRifles = a.path(h(["M", -3, c / 4, "L", -3, 2 * c / 3, "M", 0, c / 4, "L", 0, 2 * c / 3, "M",
                3, c / 4, "L", 3, 2 * c / 3], b.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup); this.scrollbar.attr({ fill: b.barBackgroundColor, stroke: b.barBorderColor, "stroke-width": b.barBorderWidth }); this.scrollbarRifles.attr({ stroke: b.rifleColor, "stroke-width": 1 }); this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(); this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2); this.drawScrollbarButton(0); this.drawScrollbarButton(1)
            }, position: function (a, b, c, e) {
                var d =
                this.options.vertical, k = 0, f = this.rendered ? "animate" : "attr"; this.x = a; this.y = b + this.trackBorderWidth; this.width = c; this.xOffset = this.height = e; this.yOffset = k; d ? (this.width = this.yOffset = c = k = this.size, this.xOffset = b = 0, this.barWidth = e - 2 * c, this.x = a += this.options.margin) : (this.height = this.xOffset = e = b = this.size, this.barWidth = c - 2 * e, this.y += this.options.margin); this.group[f]({ translateX: a, translateY: this.y }); this.track[f]({ width: c, height: e }); this.scrollbarButtons[1][f]({ translateX: d ? 0 : c - b, translateY: d ? e - k : 0 })
            },
            drawScrollbarButton: function (a) {
                var b = this.renderer, c = this.scrollbarButtons, e = this.options, d = this.size, f; f = b.g().add(this.group); c.push(f); f = b.rect().addClass("highcharts-scrollbar-button").add(f); f.attr({ stroke: e.buttonBorderColor, "stroke-width": e.buttonBorderWidth, fill: e.buttonBackgroundColor }); f.attr(f.crisp({ x: -.5, y: -.5, width: d + 1, height: d + 1, r: e.buttonBorderRadius }, f.strokeWidth())); f = b.path(h(["M", d / 2 + (a ? -1 : 1), d / 2 - 3, "L", d / 2 + (a ? -1 : 1), d / 2 + 3, "L", d / 2 + (a ? 2 : -2), d / 2], e.vertical)).addClass("highcharts-scrollbar-arrow").add(c[a]);
                f.attr({ fill: e.buttonArrowColor })
            }, setRange: function (a, b) {
                var c = this.options, e = c.vertical, d = c.minWidth, f = this.barWidth, h, p, n = this.rendered && !this.hasDragged ? "animate" : "attr"; l(f) && (a = Math.max(a, 0), h = Math.ceil(f * a), this.calculatedWidth = p = H(f * Math.min(b, 1) - h), p < d && (h = (f - d + p) * a, p = d), d = Math.floor(h + this.xOffset + this.yOffset), f = p / 2 - .5, this.from = a, this.to = b, e ? (this.scrollbarGroup[n]({ translateY: d }), this.scrollbar[n]({ height: p }), this.scrollbarRifles[n]({ translateY: f }), this.scrollbarTop = d, this.scrollbarLeft =
                0) : (this.scrollbarGroup[n]({ translateX: d }), this.scrollbar[n]({ width: p }), this.scrollbarRifles[n]({ translateX: f }), this.scrollbarLeft = d, this.scrollbarTop = 0), 12 >= p ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), !1 === c.showFull && (0 >= a && 1 <= b ? this.group.hide() : this.group.show()), this.rendered = !0)
            }, initEvents: function () {
                var a = this; a.mouseMoveHandler = function (b) {
                    var c = a.chart.pointer.normalize(b), e = a.options.vertical ? "chartY" : "chartX", d = a.initPositions; !a.grabbedCenter || b.touches && 0 === b.touches[0][e] ||
                    (c = a.cursorToScrollbarPosition(c)[e], e = a[e], e = c - e, a.hasDragged = !0, a.updatePosition(d[0] + e, d[1] + e), a.hasDragged && n(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMType: b.type, DOMEvent: b }))
                }; a.mouseUpHandler = function (b) { a.hasDragged && n(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMType: b.type, DOMEvent: b }); a.grabbedCenter = a.hasDragged = a.chartX = a.chartY = null }; a.mouseDownHandler = function (b) {
                    b = a.chart.pointer.normalize(b); b = a.cursorToScrollbarPosition(b); a.chartX = b.chartX; a.chartY = b.chartY;
                    a.initPositions = [a.from, a.to]; a.grabbedCenter = !0
                }; a.buttonToMinClick = function (b) { var c = H(a.to - a.from) * a.options.step; a.updatePosition(H(a.from - c), H(a.to - c)); n(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b }) }; a.buttonToMaxClick = function (b) { var c = (a.to - a.from) * a.options.step; a.updatePosition(a.from + c, a.to + c); n(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b }) }; a.trackClick = function (b) {
                    var c = a.chart.pointer.normalize(b), e = a.to - a.from, d = a.y + a.scrollbarTop, f = a.x + a.scrollbarLeft;
                    a.options.vertical && c.chartY > d || !a.options.vertical && c.chartX > f ? a.updatePosition(a.from + e, a.to + e) : a.updatePosition(a.from - e, a.to - e); n(a, "changed", { from: a.from, to: a.to, trigger: "scrollbar", DOMEvent: b })
                }
            }, cursorToScrollbarPosition: function (a) { var b = this.options, b = b.minWidth > this.calculatedWidth ? b.minWidth : 0; return { chartX: (a.chartX - this.x - this.xOffset) / (this.barWidth - b), chartY: (a.chartY - this.y - this.yOffset) / (this.barWidth - b) } }, updatePosition: function (a, b) {
                1 < b && (a = H(1 - H(b - a)), b = 1); 0 > a && (b = H(b - a), a = 0);
                this.from = a; this.to = b
            }, update: function (a) { this.destroy(); this.init(this.chart.renderer, e(!0, this.options, a), this.chart) }, addEvents: function () {
                var a = this.options.inverted ? [1, 0] : [0, 1], b = this.scrollbarButtons, c = this.scrollbarGroup.element, e = this.mouseDownHandler, d = this.mouseMoveHandler, h = this.mouseUpHandler, a = [[b[a[0]].element, "click", this.buttonToMinClick], [b[a[1]].element, "click", this.buttonToMaxClick], [this.track.element, "click", this.trackClick], [c, "mousedown", e], [w, "mousemove", d], [w, "mouseup", h]];
                f && a.push([c, "touchstart", e], [w, "touchmove", d], [w, "touchend", h]); q(a, function (a) { C.apply(null, a) }); this._events = a
            }, removeEvents: function () { q(this._events, function (a) { b.apply(null, a) }); this._events = void 0 }, destroy: function () { var a = this.chart.scroller; this.removeEvents(); q(["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"], function (a) { this[a] && this[a].destroy && (this[a] = this[a].destroy()) }, this); a && this === a.scrollbar && (a.scrollbar = null, r(a.scrollbarButtons)) }
        }; t(G.prototype, "init", function (a) {
            var b =
            this; a.apply(b, Array.prototype.slice.call(arguments, 1)); b.options.scrollbar && b.options.scrollbar.enabled && (b.options.scrollbar.vertical = !b.horiz, b.options.startOnTick = b.options.endOnTick = !1, b.scrollbar = new D(b.chart.renderer, b.options.scrollbar, b.chart), C(b.scrollbar, "changed", function (a) {
                var c = Math.min(z(b.options.min, b.min), b.min, b.dataMin), d = Math.max(z(b.options.max, b.max), b.max, b.dataMax) - c, e; b.horiz && !b.reversed || !b.horiz && b.reversed ? (e = c + d * this.to, c += d * this.from) : (e = c + d * (1 - this.from), c += d * (1 -
                this.to)); b.setExtremes(c, e, !0, !1, a)
            }))
        }); t(G.prototype, "render", function (a) {
            var b = Math.min(z(this.options.min, this.min), this.min, this.dataMin), c = Math.max(z(this.options.max, this.max), this.max, this.dataMax), e = this.scrollbar, d; a.apply(this, Array.prototype.slice.call(arguments, 1)); if (e) {
                this.horiz ? (e.position(this.left, this.top + this.height + 2 + this.chart.scrollbarsOffsets[1] + (this.opposite ? 0 : this.axisTitleMargin + this.offset), this.width, this.height), d = 1) : (e.position(this.left + this.width + 2 + this.chart.scrollbarsOffsets[0] +
                (this.opposite ? this.axisTitleMargin + this.offset : 0), this.top, this.width, this.height), d = 0); if (!this.opposite && !this.horiz || this.opposite && this.horiz) this.chart.scrollbarsOffsets[d] += this.scrollbar.size + this.scrollbar.options.margin; isNaN(b) || isNaN(c) || !l(this.min) || !l(this.max) ? e.setRange(0, 0) : (d = (this.min - b) / (c - b), b = (this.max - b) / (c - b), this.horiz && !this.reversed || !this.horiz && this.reversed ? e.setRange(d, b) : e.setRange(1 - b, 1 - d))
            }
        }); t(G.prototype, "getOffset", function (a) {
            var b = this.horiz ? 2 : 1, c = this.scrollbar;
            a.apply(this, Array.prototype.slice.call(arguments, 1)); c && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[b] += c.size + c.options.margin)
        }); t(G.prototype, "destroy", function (a) { this.scrollbar && (this.scrollbar = this.scrollbar.destroy()); a.apply(this, Array.prototype.slice.call(arguments, 1)) }); a.Scrollbar = D
    })(K); (function (a) {
        function D(a) { this.init(a) } var C = a.addEvent, G = a.Axis, H = a.Chart, v = a.color, l = a.defaultOptions, r = a.defined, w = a.destroyObjectProperties, q = a.doc, n = a.each, f = a.erase, c = a.error, e = a.extend,
        z = a.grep, b = a.hasTouch, t = a.isNumber, h = a.isObject, B = a.merge, p = a.pick, x = a.removeEvent, k = a.Scrollbar, F = a.Series, d = a.seriesTypes, u = a.wrap, m = a.swapXY, y = [].concat(a.defaultDataGroupingUnits), J = function (a) { var b = z(arguments, t); if (b.length) return Math[a].apply(0, b) }; y[4] = ["day", [1, 2, 3, 4]]; y[5] = ["week", [1, 2, 3]]; d = void 0 === d.areaspline ? "line" : "areaspline"; e(l, {
            navigator: {
                height: 40, margin: 25, maskInside: !0, handles: { backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: v("#6685c2").setOpacity(.3).get(), outlineColor: "#cccccc",
                outlineWidth: 1, series: { type: d, color: "#335cad", fillOpacity: .05, lineWidth: 1, compare: null, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, smoothed: !0, units: y }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: !1 }, pointRange: 0, shadow: !1, threshold: null }, xAxis: {
                    className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", gridLineWidth: 1, tickPixelInterval: 200, labels: {
                        align: "left",
                        style: { color: "#999999" }, x: 3, y: -4
                    }, crosshair: !1
                }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: .1, maxPadding: .1, labels: { enabled: !1 }, crosshair: !1, title: { text: null }, tickLength: 0, tickWidth: 0 }
            }
        }); D.prototype = {
            drawHandle: function (a, b, c, d) {
                this.handles[b][d](c ? { translateX: Math.round(this.left + this.height / 2 - 8), translateY: Math.round(this.top + parseInt(a, 10) + .5) } : {
                    translateX: Math.round(this.left + parseInt(a, 10)), translateY: Math.round(this.top + this.height /
                    2 - 8)
                })
            }, getHandlePath: function (a) { return m(["M", -4.5, .5, "L", 3.5, .5, "L", 3.5, 15.5, "L", -4.5, 15.5, "L", -4.5, .5, "M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12], a) }, drawOutline: function (a, b, c, d) {
                var g = this.navigatorOptions.maskInside, e = this.outline.strokeWidth(), f = e / 2, e = e % 2 / 2, h = this.outlineHeight, k = this.scrollbarHeight, m = this.size, l = this.left - k, n = this.top; c ? (l -= f, c = n + b + e, b = n + a + e, a = ["M", l + h, n - k - e, "L", l + h, c, "L", l, c, "L", l, b, "L", l + h, b, "L", l + h, n + m + k].concat(g ? ["M", l + h, c - f, "L", l + h, b + f] : [])) : (a += l + k - e, b += l + k - e, n += f,
                a = ["M", l, n, "L", a, n, "L", a, n + h, "L", b, n + h, "L", b, n, "L", l + m + 2 * k, n].concat(g ? ["M", a - f, n, "L", b + f, n] : [])); this.outline[d]({ d: a })
            }, drawMasks: function (a, b, c, d) { var g = this.left, e = this.top, f = this.height, h, k, l, m; c ? (l = [g, g, g], m = [e, e + a, e + b], k = [f, f, f], h = [a, b - a, this.size - b]) : (l = [g, g + a, g + b], m = [e, e, e], k = [a, b - a, this.size - b], h = [f, f, f]); n(this.shades, function (a, b) { a[d]({ x: l[b], y: m[b], width: k[b], height: h[b] }) }) }, renderElements: function () {
                var a = this, b = a.navigatorOptions, c = b.maskInside, d = a.chart, e = d.inverted, f = d.renderer,
                h; a.navigatorGroup = h = f.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add(); var k = { cursor: e ? "ns-resize" : "ew-resize" }; n([!c, c, !c], function (c, d) { a.shades[d] = f.rect().addClass("highcharts-navigator-mask" + (1 === d ? "-inside" : "-outside")).attr({ fill: c ? b.maskFill : "transparent" }).css(1 === d && k).add(h) }); a.outline = f.path().addClass("highcharts-navigator-outline").attr({ "stroke-width": b.outlineWidth, stroke: b.outlineColor }).add(h); n([0, 1], function (c) {
                    a.handles[c] = f.path(a.getHandlePath(e)).attr({
                        zIndex: 7 -
                        c
                    }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][c]).add(h); var d = b.handles; a.handles[c].attr({ fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": 1 }).css(k)
                })
            }, update: function (a) { this.destroy(); B(!0, this.chart.options.navigator, this.options, a); this.init(this.chart) }, render: function (a, b, c, d) {
                var g = this.chart, e, f, h = this.scrollbarHeight, k, l = this.xAxis; e = this.navigatorEnabled; var m, n = this.rendered; f = g.inverted; var q = g.xAxis[0].minRange; if (!this.hasDragged ||
                r(c)) {
                    if (!t(a) || !t(b)) if (n) c = 0, d = l.width; else return; this.left = p(l.left, g.plotLeft + h + (f ? g.plotWidth : 0)); this.size = m = k = p(l.len, (f ? g.plotHeight : g.plotWidth) - 2 * h); g = f ? h : k + 2 * h; c = p(c, l.toPixels(a, !0)); d = p(d, l.toPixels(b, !0)); t(c) && Infinity !== Math.abs(c) || (c = 0, d = g); a = l.toValue(c, !0); b = l.toValue(d, !0); if (Math.abs(b - a) < q) if (this.grabbedLeft) c = l.toPixels(b - q, !0); else if (this.grabbedRight) d = l.toPixels(a + q, !0); else return; this.zoomedMax = Math.min(Math.max(c, d, 0), m); this.zoomedMin = Math.min(Math.max(this.fixedWidth ?
                    this.zoomedMax - this.fixedWidth : Math.min(c, d), 0), m); this.range = this.zoomedMax - this.zoomedMin; m = Math.round(this.zoomedMax); c = Math.round(this.zoomedMin); e && (this.navigatorGroup.attr({ visibility: "visible" }), n = n && !this.hasDragged ? "animate" : "attr", this.drawMasks(c, m, f, n), this.drawOutline(c, m, f, n), this.drawHandle(c, 0, f, n), this.drawHandle(m, 1, f, n)); this.scrollbar && (f ? (f = this.top - h, e = this.left - h + (e ? 0 : this.height), h = k + 2 * h) : (f = this.top + (e ? this.height : -h), e = this.left - h), this.scrollbar.position(e, f, g, h), this.scrollbar.setRange(this.zoomedMin /
                    k, this.zoomedMax / k)); this.rendered = !0
                }
            }, addMouseEvents: function () { var a = this, c = a.chart, d = c.container, e = [], f, h; a.mouseMoveHandler = f = function (b) { a.onMouseMove(b) }; a.mouseUpHandler = h = function (b) { a.onMouseUp(b) }; e = a.getPartsEvents("mousedown"); e.push(C(d, "mousemove", f), C(q, "mouseup", h)); b && (e.push(C(d, "touchmove", f), C(q, "touchend", h)), e.concat(a.getPartsEvents("touchstart"))); a.eventsToUnbind = e; a.series && a.series[0] && e.push(C(a.series[0].xAxis, "foundExtremes", function () { c.navigator.modifyNavigatorAxisExtremes() })) },
            getPartsEvents: function (a) { var b = this, c = []; n(["shades", "handles"], function (d) { n(b[d], function (g, e) { c.push(C(g.element, a, function (a) { b[d + "Mousedown"](a, e) })) }) }); return c }, shadesMousedown: function (a, b) {
                a = this.chart.pointer.normalize(a); var c = this.chart, d = this.xAxis, e = this.zoomedMin, f = this.left, h = this.size, k = this.range, l = a.chartX, m; c.inverted && (l = a.chartY, f = this.top); 1 === b ? (this.grabbedCenter = l, this.fixedWidth = k, this.dragOffset = l - e) : (a = l - f - k / 2, 0 === b ? a = Math.max(0, a) : 2 === b && a + k >= h && (a = h - k, m = this.getUnionExtremes().dataMax),
                a !== e && (this.fixedWidth = k, b = d.toFixedRange(a, a + k, null, m), c.xAxis[0].setExtremes(Math.min(b.min, b.max), Math.max(b.min, b.max), !0, null, { trigger: "navigator" })))
            }, handlesMousedown: function (a, b) { this.chart.pointer.normalize(a); a = this.chart; var c = a.xAxis[0], d = a.inverted && !c.reversed || !a.inverted && c.reversed; 0 === b ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = d ? c.min : c.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = d ? c.max : c.min); a.fixedRange = null },
            onMouseMove: function (a) {
                var b = this, c = b.chart, d = b.left, e = b.navigatorSize, f = b.range, h = b.dragOffset, k = c.inverted; a.touches && 0 === a.touches[0].pageX || (a = c.pointer.normalize(a), c = a.chartX, k && (d = b.top, c = a.chartY), b.grabbedLeft ? (b.hasDragged = !0, b.render(0, 0, c - d, b.otherHandlePos)) : b.grabbedRight ? (b.hasDragged = !0, b.render(0, 0, b.otherHandlePos, c - d)) : b.grabbedCenter && (b.hasDragged = !0, c < h ? c = h : c > e + h - f && (c = e + h - f), b.render(0, 0, c - h, c - h + f)), b.hasDragged && b.scrollbar && b.scrollbar.options.liveRedraw && (a.DOMType = a.type,
                setTimeout(function () { b.onMouseUp(a) }, 0)))
            }, onMouseUp: function (a) {
                var b = this.chart, c = this.xAxis, d = this.scrollbar, e, f, h = a.DOMEvent || a; (!this.hasDragged || d && d.hasDragged) && "scrollbar" !== a.trigger || (this.zoomedMin === this.otherHandlePos ? e = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (f = this.fixedExtreme), this.zoomedMax === this.size && (f = this.getUnionExtremes().dataMax), c = c.toFixedRange(this.zoomedMin, this.zoomedMax, e, f), r(c.min) && b.xAxis[0].setExtremes(Math.min(c.min, c.max), Math.max(c.min, c.max),
                !0, this.hasDragged ? !1 : null, { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: h })); "mousemove" !== a.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null)
            }, removeEvents: function () { this.eventsToUnbind && (n(this.eventsToUnbind, function (a) { a() }), this.eventsToUnbind = void 0); this.removeBaseSeriesEvents() }, removeBaseSeriesEvents: function () {
                var a = this.baseSeries || []; this.navigatorEnabled && a[0] && !1 !==
                this.navigatorOptions.adaptToUpdatedData && (n(a, function (a) { x(a, "updatedData", this.updatedDataHandler) }, this), a[0].xAxis && x(a[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes))
            }, init: function (a) {
                var b = a.options, c = b.navigator, d = c.enabled, e = b.scrollbar, f = e.enabled, b = d ? c.height : 0, h = f ? e.height : 0; this.handles = []; this.shades = []; this.chart = a; this.setBaseSeries(); this.height = b; this.scrollbarHeight = h; this.scrollbarEnabled = f; this.navigatorEnabled = d; this.navigatorOptions = c; this.scrollbarOptions = e; this.outlineHeight =
                b + h; this.opposite = p(c.opposite, !d && a.inverted); var l = this, e = l.baseSeries, f = a.xAxis.length, m = a.yAxis.length, n = e && e[0] && e[0].xAxis || a.xAxis[0]; a.extraMargin = { type: l.opposite ? "plotTop" : "marginBottom", value: (d || !a.inverted ? l.outlineHeight : 0) + c.margin }; a.inverted && (a.extraMargin.type = l.opposite ? "marginRight" : "plotLeft"); a.isDirtyBox = !0; l.navigatorEnabled ? (l.xAxis = new G(a, B({ breaks: n.options.breaks, ordinal: n.options.ordinal }, c.xAxis, {
                    id: "navigator-x-axis", yAxis: "navigator-y-axis", isX: !0, type: "datetime",
                    index: f, offset: 0, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: 0, maxPadding: 0, zoomEnabled: !1
                }, a.inverted ? { offsets: [h, 0, -h, 0], width: b } : { offsets: [0, -h, 0, h], height: b })), l.yAxis = new G(a, B(c.yAxis, { id: "navigator-y-axis", alignTicks: !1, offset: 0, index: m, zoomEnabled: !1 }, a.inverted ? { width: b } : { height: b })), e || c.series.data ? l.addBaseSeries() : 0 === a.series.length && u(a, "redraw", function (b, c) { 0 < a.series.length && !l.series && (l.setBaseSeries(), a.redraw = b); b.call(a, c) }), l.renderElements(), l.addMouseEvents()) :
                l.xAxis = { translate: function (b, c) { var d = a.xAxis[0], g = d.getExtremes(), e = d.len - 2 * h, f = J("min", d.options.min, g.dataMin), d = J("max", d.options.max, g.dataMax) - f; return c ? b * d / e + f : e * (b - f) / d }, toPixels: function (a) { return this.translate(a) }, toValue: function (a) { return this.translate(a, !0) }, toFixedRange: G.prototype.toFixedRange, fake: !0 }; a.options.scrollbar.enabled && (a.scrollbar = l.scrollbar = new k(a.renderer, B(a.options.scrollbar, { margin: l.navigatorEnabled ? 0 : 10, vertical: a.inverted }), a), C(l.scrollbar, "changed", function (b) {
                    var c =
                    l.size, d = c * this.to, c = c * this.from; l.hasDragged = l.scrollbar.hasDragged; l.render(0, 0, c, d); (a.options.scrollbar.liveRedraw || "mousemove" !== b.DOMType) && setTimeout(function () { l.onMouseUp(b) })
                })); l.addBaseSeriesEvents(); l.addChartEvents()
            }, getUnionExtremes: function (a) { var b = this.chart.xAxis[0], c = this.xAxis, d = c.options, e = b.options, f; a && null === b.dataMin || (f = { dataMin: p(d && d.min, J("min", e.min, b.dataMin, c.dataMin, c.min)), dataMax: p(d && d.max, J("max", e.max, b.dataMax, c.dataMax, c.max)) }); return f }, setBaseSeries: function (a) {
                var b =
                this.chart, c; a = a || b.options && b.options.navigator.baseSeries || 0; this.series && (this.removeBaseSeriesEvents(), n(this.series, function (a) { a.destroy() })); c = this.baseSeries = []; n(b.series || [], function (b, d) { (b.options.showInNavigator || (d === a || b.options.id === a) && !1 !== b.options.showInNavigator) && c.push(b) }); this.xAxis && !this.xAxis.fake && this.addBaseSeries()
            }, addBaseSeries: function () {
                var a = this, b = a.chart, c = a.series = [], d = a.baseSeries, e, f, h = a.navigatorOptions.series, k, l = {
                    enableMouseTracking: !1, index: null, group: "nav",
                    padXAxis: !1, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", showInLegend: !1, stacking: !1, isInternal: !0, visible: !0
                }; d ? n(d, function (d, g) { l.name = "Navigator " + (g + 1); e = d.options || {}; k = e.navigatorOptions || {}; f = B(e, l, h, k); g = k.data || h.data; a.hasNavigatorData = a.hasNavigatorData || !!g; f.data = g || e.data && e.data.slice(0); d.navigatorSeries = b.initSeries(f); c.push(d.navigatorSeries) }) : (f = B(h, l), f.data = h.data, a.hasNavigatorData = !!f.data, c.push(b.initSeries(f))); this.addBaseSeriesEvents()
            }, addBaseSeriesEvents: function () {
                var a =
                this, b = a.baseSeries || []; b[0] && b[0].xAxis && C(b[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes); !1 !== this.navigatorOptions.adaptToUpdatedData && n(b, function (b) { b.xAxis && C(b, "updatedData", this.updatedDataHandler); C(b, "remove", function () { this.navigatorSeries && (f(a.series, this.navigatorSeries), this.navigatorSeries.remove(!1), delete this.navigatorSeries) }) }, this)
            }, modifyNavigatorAxisExtremes: function () {
                var a = this.xAxis, b; a.getExtremes && (!(b = this.getUnionExtremes(!0)) || b.dataMin === a.min && b.dataMax ===
                a.max || (a.min = b.dataMin, a.max = b.dataMax))
            }, modifyBaseAxisExtremes: function () { var a = this.chart.navigator, b = this.getExtremes(), c = b.dataMin, d = b.dataMax, b = b.max - b.min, e = a.stickToMin, f = a.stickToMax, h, k, l = a.series && a.series[0], m = !!this.setExtremes; this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger || (e && (k = c, h = k + b), f && (h = d, e || (k = Math.max(h - b, l && l.xData ? l.xData[0] : -Number.MAX_VALUE))), m && (e || f) && t(k) && (this.min = this.userMin = k, this.max = this.userMax = h)); a.stickToMin = a.stickToMax = null }, updatedDataHandler: function () {
                var a =
                this.chart.navigator, b = this.navigatorSeries; a.stickToMin = t(this.xAxis.min) && this.xAxis.min <= this.xData[0]; a.stickToMax = Math.round(a.zoomedMax) >= Math.round(a.size); b && !a.hasNavigatorData && (b.options.pointStart = this.xData[0], b.setData(this.options.data, !1, null, !1))
            }, addChartEvents: function () { C(this.chart, "redraw", function () { var a = this.navigator, b = a && (a.baseSeries && a.baseSeries[0] && a.baseSeries[0].xAxis || a.scrollbar && this.xAxis[0]); b && a.render(b.min, b.max) }) }, destroy: function () {
                this.removeEvents(); this.xAxis &&
                (f(this.chart.xAxis, this.xAxis), f(this.chart.axes, this.xAxis)); this.yAxis && (f(this.chart.yAxis, this.yAxis), f(this.chart.axes, this.yAxis)); n(this.series || [], function (a) { a.destroy && a.destroy() }); n("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "), function (a) { this[a] && this[a].destroy && this[a].destroy(); this[a] = null }, this); n([this.handles], function (a) { w(a) }, this)
            }
        }; a.Navigator = D; u(G.prototype, "zoom", function (a, b, c) {
            var d = this.chart,
            e = d.options, g = e.chart.zoomType, f = e.navigator, e = e.rangeSelector, h; this.isXAxis && (f && f.enabled || e && e.enabled) && ("x" === g ? d.resetZoomButton = "blocked" : "y" === g ? h = !1 : "xy" === g && (d = this.previousZoom, r(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom))); return void 0 !== h ? h : a.call(this, b, c)
        }); u(H.prototype, "init", function (a, b, c) {
            C(this, "beforeRender", function () { var a = this.options; if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = this.navigator = new D(this) }); a.call(this,
            b, c)
        }); u(H.prototype, "setChartSize", function (a) {
            var b = this.legend, c = this.navigator, d, e, f, h; a.apply(this, [].slice.call(arguments, 1)); c && (e = b.options, f = c.xAxis, h = c.yAxis, d = c.scrollbarHeight, this.inverted ? (c.left = c.opposite ? this.chartWidth - d - c.height : this.spacing[3] + d, c.top = this.plotTop + d) : (c.left = this.plotLeft + d, c.top = c.navigatorOptions.top || this.chartHeight - c.height - d - this.spacing[2] - ("bottom" === e.verticalAlign && e.enabled && !e.floating ? b.legendHeight + p(e.margin, 10) : 0)), f && h && (this.inverted ? f.options.left =
            h.options.left = c.left : f.options.top = h.options.top = c.top, f.setAxisSize(), h.setAxisSize()))
        }); u(F.prototype, "addPoint", function (a, b, d, e, f) { var g = this.options.turboThreshold; g && this.xData.length > g && h(b, !0) && this.chart.navigator && c(20, !0); a.call(this, b, d, e, f) }); u(H.prototype, "addSeries", function (a, b, c, d) { a = a.call(this, b, !1, d); this.navigator && this.navigator.setBaseSeries(); p(c, !0) && this.redraw(); return a }); u(F.prototype, "update", function (a, b, c) {
            a.call(this, b, !1); this.chart.navigator && this.chart.navigator.setBaseSeries();
            p(c, !0) && this.chart.redraw()
        }); H.prototype.callbacks.push(function (a) { var b = a.navigator; b && (a = a.xAxis[0].getExtremes(), b.render(a.min, a.max)) })
    })(K); (function (a) {
        function D(a) { this.init(a) } var C = a.addEvent, G = a.Axis, H = a.Chart, v = a.css, l = a.createElement, r = a.dateFormat, w = a.defaultOptions, q = w.global.useUTC, n = a.defined, f = a.destroyObjectProperties, c = a.discardElement, e = a.each, z = a.extend, b = a.fireEvent, t = a.Date, h = a.isNumber, B = a.merge, p = a.pick, x = a.pInt, k = a.splat, F = a.wrap; z(w, {
            rangeSelector: {
                buttonTheme: {
                    "stroke-width": 0,
                    width: 28, height: 18, padding: 2, zIndex: 7
                }, height: 35, inputPosition: { align: "right" }, labelStyle: { color: "#666666" }
            }
        }); w.lang = B(w.lang, { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "From", rangeSelectorTo: "To" }); D.prototype = {
            clickButton: function (a, b) {
                var c = this, d = c.chart, f = c.buttonOptions[a], l = d.xAxis[0], n = d.scroller && d.scroller.getUnionExtremes() || l || {}, g = n.dataMin, r = n.dataMax, t, u = l && Math.round(Math.min(l.max, p(r, l.max))), v = f.type, w, n = f._range, x, z, B, D = f.dataGrouping; if (null !== g && null !== r) {
                    d.fixedRange = n; D &&
                    (this.forcedDataGrouping = !0, G.prototype.setDataGrouping.call(l || { chart: this.chart }, D, !1)); if ("month" === v || "year" === v) l ? (v = { range: f, max: u, dataMin: g, dataMax: r }, t = l.minFromRange.call(v), h(v.newMax) && (u = v.newMax)) : n = f; else if (n) t = Math.max(u - n, g), u = Math.min(t + n, r); else if ("ytd" === v) if (l) void 0 === r && (g = Number.MAX_VALUE, r = Number.MIN_VALUE, e(d.series, function (a) { a = a.xData; g = Math.min(a[0], g); r = Math.max(a[a.length - 1], r) }), b = !1), u = c.getYTDExtremes(r, g, q), t = x = u.min, u = u.max; else {
                        C(d, "beforeRender", function () { c.clickButton(a) });
                        return
                    } else "all" === v && l && (t = g, u = r); c.setSelected(a); l ? l.setExtremes(t, u, p(b, 1), null, { trigger: "rangeSelectorButton", rangeSelectorButton: f }) : (w = k(d.options.xAxis)[0], B = w.range, w.range = n, z = w.min, w.min = x, C(d, "load", function () { w.range = B; w.min = z }))
                }
            }, setSelected: function (a) { this.selected = this.options.selected = a }, defaultButtons: [{ type: "month", count: 1, text: "1m" }, { type: "month", count: 3, text: "3m" }, { type: "month", count: 6, text: "6m" }, { type: "ytd", text: "YTD" }, { type: "year", count: 1, text: "1y" }, { type: "all", text: "All" }],
            init: function (a) {
                var c = this, d = a.options.rangeSelector, f = d.buttons || [].concat(c.defaultButtons), h = d.selected, k = function () { var a = c.minInput, d = c.maxInput; a && a.blur && b(a, "blur"); d && d.blur && b(d, "blur") }; c.chart = a; c.options = d; c.buttons = []; a.extraTopMargin = d.height; c.buttonOptions = f; this.unMouseDown = C(a.container, "mousedown", k); this.unResize = C(a, "resize", k); e(f, c.computeButtonRange); void 0 !== h && f[h] && this.clickButton(h, !1); C(a, "load", function () {
                    C(a.xAxis[0], "setExtremes", function (b) {
                        this.max - this.min !==
                        a.fixedRange && "rangeSelectorButton" !== b.trigger && "updatedData" !== b.trigger && c.forcedDataGrouping && this.setDataGrouping(!1, !1)
                    })
                })
            }, updateButtonStates: function () {
                var a = this.chart, b = a.xAxis[0], c = Math.round(b.max - b.min), f = !b.hasVisibleSeries, a = a.scroller && a.scroller.getUnionExtremes() || b, k = a.dataMin, l = a.dataMax, a = this.getYTDExtremes(l, k, q), n = a.min, g = a.max, p = this.selected, r = h(p), t = this.options.allButtonsEnabled, v = this.buttons; e(this.buttonOptions, function (a, d) {
                    var e = a._range, h = a.type, m = a.count || 1; a = v[d];
                    var q = 0; d = d === p; var u = e > l - k, y = e < b.minRange, w = !1, x = !1, e = e === c; ("month" === h || "year" === h) && c >= 864E5 * { month: 28, year: 365 }[h] * m && c <= 864E5 * { month: 31, year: 366 }[h] * m ? e = !0 : "ytd" === h ? (e = g - n === c, w = !d) : "all" === h && (e = b.max - b.min >= l - k, x = !d && r && e); h = !t && (u || y || x || f); e = d && e || e && !r && !w; h ? q = 3 : e && (r = !0, q = 2); a.state !== q && a.setState(q)
                })
            }, computeButtonRange: function (a) {
                var b = a.type, c = a.count || 1, d = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5 }; if (d[b]) a._range = d[b] * c; else if ("month" === b || "year" ===
                b) a._range = 864E5 * { month: 30, year: 365 }[b] * c
            }, setInputValue: function (a, b) { var c = this.chart.options.rangeSelector, d = this[a + "Input"]; n(b) && (d.previousValue = d.HCTime, d.HCTime = b); d.value = r(c.inputEditDateFormat || "%Y-%m-%d", d.HCTime); this[a + "DateBox"].attr({ text: r(c.inputDateFormat || "%b %e, %Y", d.HCTime) }) }, showInput: function (a) { var b = this.inputGroup, c = this[a + "DateBox"]; v(this[a + "Input"], { left: b.translateX + c.x + "px", top: b.translateY + "px", width: c.width - 2 + "px", height: c.height - 2 + "px", border: "2px solid silver" }) },
            hideInput: function (a) { v(this[a + "Input"], { border: 0, width: "1px", height: "1px" }); this.setInputValue(a) }, drawInput: function (a) {
                function b() {
                    var a = p.value, b = (k.inputDateParser || Date.parse)(a), e = d.xAxis[0], g = d.scroller && d.scroller.xAxis ? d.scroller.xAxis : e, f = g.dataMin, g = g.dataMax; b !== p.previousValue && (p.previousValue = b, h(b) || (b = a.split("-"), b = Date.UTC(x(b[0]), x(b[1]) - 1, x(b[2]))), h(b) && (q || (b += 6E4 * (new Date).getTimezoneOffset()), n ? b > c.maxInput.HCTime ? b = void 0 : b < f && (b = f) : b < c.minInput.HCTime ? b = void 0 : b > g && (b =
                    g), void 0 !== b && e.setExtremes(n ? b : e.min, n ? e.max : b, void 0, void 0, { trigger: "rangeSelectorInput" })))
                } var c = this, d = c.chart, e = d.renderer.style || {}, f = d.renderer, k = d.options.rangeSelector, g = c.div, n = "min" === a, p, r, t = this.inputGroup; this[a + "Label"] = r = f.label(w.lang[n ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).addClass("highcharts-range-label").attr({ padding: 2 }).add(t); t.offset += r.width + 5; this[a + "DateBox"] = f = f.label("", t.offset).addClass("highcharts-range-input").attr({
                    padding: 2, width: k.inputBoxWidth ||
                    90, height: k.inputBoxHeight || 17, stroke: k.inputBoxBorderColor || "#cccccc", "stroke-width": 1, "text-align": "center"
                }).on("click", function () { c.showInput(a); c[a + "Input"].focus() }).add(t); t.offset += f.width + (n ? 10 : 0); this[a + "Input"] = p = l("input", { name: a, className: "highcharts-range-selector", type: "text" }, { top: d.plotTop + "px" }, g); r.css(B(e, k.labelStyle)); f.css(B({ color: "#333333" }, e, k.inputStyle)); v(p, z({
                    position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: e.fontSize, fontFamily: e.fontFamily,
                    left: "-9em"
                }, k.inputStyle)); p.onfocus = function () { c.showInput(a) }; p.onblur = function () { c.hideInput(a) }; p.onchange = b; p.onkeypress = function (a) { 13 === a.keyCode && b() }
            }, getPosition: function () { var a = this.chart, b = a.options.rangeSelector, a = p((b.buttonPosition || {}).y, a.plotTop - a.axisOffset[0] - b.height); return { buttonTop: a, inputTop: a - 10 } }, getYTDExtremes: function (a, b, c) { var d = new t(a), e = d[t.hcGetFullYear](); c = c ? t.UTC(e, 0, 1) : +new t(e, 0, 1); b = Math.max(b || 0, c); d = d.getTime(); return { max: Math.min(a || d, d), min: b } }, render: function (a,
            b) {
                var c = this, d = c.chart, f = d.renderer, h = d.container, k = d.options, g = k.exporting && !1 !== k.exporting.enabled && k.navigation && k.navigation.buttonOptions, q = k.rangeSelector, r = c.buttons, k = w.lang, t = c.div, t = c.inputGroup, u = q.buttonTheme, v = q.buttonPosition || {}, x = q.inputEnabled, B = u && u.states, C = d.plotLeft, D, F = this.getPosition(), G = c.group, H = c.rendered; !1 !== q.enabled && (H || (c.group = G = f.g("range-selector-buttons").add(), c.zoomText = f.text(k.rangeSelectorZoom, p(v.x, C), 15).css(q.labelStyle).add(G), D = p(v.x, C) + c.zoomText.getBBox().width +
                5, e(c.buttonOptions, function (a, b) { r[b] = f.button(a.text, D, 0, function () { c.clickButton(b); c.isActive = !0 }, u, B && B.hover, B && B.select, B && B.disabled).attr({ "text-align": "center" }).add(G); D += r[b].width + p(q.buttonSpacing, 5) }), !1 !== x && (c.div = t = l("div", null, { position: "relative", height: 0, zIndex: 1 }), h.parentNode.insertBefore(t, h), c.inputGroup = t = f.g("input-group").add(), t.offset = 0, c.drawInput("min"), c.drawInput("max"))), c.updateButtonStates(), G[H ? "animate" : "attr"]({ translateY: F.buttonTop }), !1 !== x && (t.align(z({
                    y: F.inputTop,
                    width: t.offset, x: g && F.inputTop < (g.y || 0) + g.height - d.spacing[0] ? -40 : 0
                }, q.inputPosition), !0, d.spacingBox), n(x) || (d = G.getBBox(), t[t.alignAttr.translateX < d.x + d.width + 10 ? "hide" : "show"]()), c.setInputValue("min", a), c.setInputValue("max", b)), c.rendered = !0)
            }, update: function (a) { var b = this.chart; B(!0, b.options.rangeSelector, a); this.destroy(); this.init(b) }, destroy: function () {
                var a = this.minInput, b = this.maxInput, e; this.unMouseDown(); this.unResize(); f(this.buttons); a && (a.onfocus = a.onblur = a.onchange = null); b && (b.onfocus =
                b.onblur = b.onchange = null); for (e in this) this[e] && "chart" !== e && (this[e].destroy ? this[e].destroy() : this[e].nodeType && c(this[e])), this[e] !== D.prototype[e] && (this[e] = null)
            }
        }; G.prototype.toFixedRange = function (a, b, c, e) { var d = this.chart && this.chart.fixedRange; a = p(c, this.translate(a, !0, !this.horiz)); b = p(e, this.translate(b, !0, !this.horiz)); c = d && (b - a) / d; .7 < c && 1.3 > c && (e ? a = b - d : b = a + d); h(a) || (a = b = void 0); return { min: a, max: b } }; G.prototype.minFromRange = function () {
            var a = this.range, b = { month: "Month", year: "FullYear" }[a.type],
            c, e = this.max, f, k, l = function (a, c) { var d = new Date(a); d["set" + b](d["get" + b]() + c); return d.getTime() - a }; h(a) ? (c = e - a, k = a) : (c = e + l(e, -a.count), this.chart && (this.chart.fixedRange = e - c)); f = p(this.dataMin, Number.MIN_VALUE); h(c) || (c = f); c <= f && (c = f, void 0 === k && (k = l(c, a.count)), this.newMax = Math.min(c + k, this.dataMax)); h(e) || (c = void 0); return c
        }; F(H.prototype, "init", function (a, b, c) { C(this, "init", function () { this.options.rangeSelector.enabled && (this.rangeSelector = new D(this)) }); a.call(this, b, c) }); H.prototype.callbacks.push(function (a) {
            function b() {
                c =
                a.xAxis[0].getExtremes(); h(c.min) && d.render(c.min, c.max)
            } var c, d = a.rangeSelector, e, f; d && (f = C(a.xAxis[0], "afterSetExtremes", function (a) { d.render(a.min, a.max) }), e = C(a, "redraw", b), b()); C(a, "destroy", function () { d && (e(), f()) })
        }); a.RangeSelector = D
    })(K); (function (a) {
        var D = a.arrayMax, C = a.arrayMin, G = a.Axis, H = a.Chart, v = a.defined, l = a.each, r = a.extend, w = a.format, q = a.inArray, n = a.isNumber, f = a.isString, c = a.map, e = a.merge, z = a.pick, b = a.Point, t = a.Renderer, h = a.Series, B = a.splat, p = a.SVGRenderer, x = a.VMLRenderer, k = a.wrap,
        F = h.prototype, d = F.init, u = F.processData, m = b.prototype.tooltipFormatter; a.StockChart = a.stockChart = function (b, d, h) {
            var k = f(b) || b.nodeName, g = arguments[k ? 1 : 0], l = g.series, m = a.getOptions(), n, p = z(g.navigator && g.navigator.enabled, m.navigator.enabled, !0), q = p ? { startOnTick: !1, endOnTick: !1 } : null, r = { marker: { enabled: !1, radius: 2 } }, t = { shadow: !1, borderWidth: 0 }; g.xAxis = c(B(g.xAxis || {}), function (a) {
                return e({ minPadding: 0, maxPadding: 0, ordinal: !0, title: { text: null }, labels: { overflow: "justify" }, showLastLabel: !0 }, m.xAxis,
                a, { type: "datetime", categories: null }, q)
            }); g.yAxis = c(B(g.yAxis || {}), function (a) { n = z(a.opposite, !0); return e({ labels: { y: -2 }, opposite: n, showLastLabel: !1, title: { text: null } }, m.yAxis, a) }); g.series = null; g = e({
                chart: { panning: !0, pinchType: "x" }, navigator: { enabled: p }, scrollbar: { enabled: z(m.scrollbar.enabled, !0) }, rangeSelector: { enabled: z(m.rangeSelector.enabled, !0) }, title: { text: null }, tooltip: { shared: !0, crosshairs: !0 }, legend: { enabled: !1 }, plotOptions: {
                    line: r, spline: r, area: r, areaspline: r, arearange: r, areasplinerange: r,
                    column: t, columnrange: t, candlestick: t, ohlc: t
                }
            }, g, { isStock: !0 }); g.series = l; return k ? new H(b, g, h) : new H(g, d)
        }; k(G.prototype, "autoLabelAlign", function (a) { var b = this.chart, c = this.options, b = b._labelPanes = b._labelPanes || {}, d = this.options.labels; return this.chart.options.isStock && "yAxis" === this.coll && (c = c.top + "," + c.height, !b[c] && d.enabled) ? (15 === d.x && (d.x = 0), void 0 === d.align && (d.align = "right"), b[c] = this, "right") : a.call(this, [].slice.call(arguments, 1)) }); k(G.prototype, "destroy", function (a) {
            var b = this.chart,
            c = this.options && this.options.top + "," + this.options.height; c && b._labelPanes && b._labelPanes[c] === this && delete b._labelPanes[c]; return a.call(this, Array.prototype.slice.call(arguments, 1))
        }); k(G.prototype, "getPlotLinePath", function (a, b, d, e, g, h) {
            var k = this, m = this.isLinked && !this.series ? this.linkedParent.series : this.series, p = k.chart, r = p.renderer, t = k.left, u = k.top, w, x, y, B, E = [], C = [], D, F; if ("colorAxis" === k.coll) return a.apply(this, [].slice.call(arguments, 1)); C = function (a) {
                var b = "xAxis" === a ? "yAxis" : "xAxis"; a =
                k.options[b]; return n(a) ? [p[b][a]] : f(a) ? [p.get(a)] : c(m, function (a) { return a[b] })
            }(k.coll); l(k.isXAxis ? p.yAxis : p.xAxis, function (a) { if (v(a.options.id) ? -1 === a.options.id.indexOf("navigator") : 1) { var b = a.isXAxis ? "yAxis" : "xAxis", b = v(a.options[b]) ? p[b][a.options[b]] : p[b][0]; k === b && C.push(a) } }); D = C.length ? [] : [k.isXAxis ? p.yAxis[0] : p.xAxis[0]]; l(C, function (a) { -1 === q(a, D) && D.push(a) }); F = z(h, k.translate(b, null, null, e)); n(F) && (k.horiz ? l(D, function (a) {
                var b; x = a.pos; B = x + a.len; w = y = Math.round(F + k.transB); if (w < t ||
                w > t + k.width) g ? w = y = Math.min(Math.max(t, w), t + k.width) : b = !0; b || E.push("M", w, x, "L", y, B)
            }) : l(D, function (a) { var b; w = a.pos; y = w + a.len; x = B = Math.round(u + k.height - F); if (x < u || x > u + k.height) g ? x = B = Math.min(Math.max(u, x), k.top + k.height) : b = !0; b || E.push("M", w, x, "L", y, B) })); return 0 < E.length ? r.crispPolyLine(E, d || 1) : null
        }); G.prototype.getPlotBandPath = function (a, b) {
            b = this.getPlotLinePath(b, null, null, !0); a = this.getPlotLinePath(a, null, null, !0); var c = [], d; if (a && b) if (a.toString() === b.toString()) c = a, c.flat = !0; else for (d = 0; d <
            a.length; d += 6) c.push("M", a[d + 1], a[d + 2], "L", a[d + 4], a[d + 5], b[d + 4], b[d + 5], b[d + 1], b[d + 2], "z"); else c = null; return c
        }; p.prototype.crispPolyLine = function (a, b) { var c; for (c = 0; c < a.length; c += 6) a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = Math.round(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = Math.round(a[c + 2]) + b % 2 / 2); return a }; t === x && (x.prototype.crispPolyLine = p.prototype.crispPolyLine); k(G.prototype, "hideCrosshair", function (a, b) { a.call(this, b); this.crossLabel && (this.crossLabel = this.crossLabel.hide()) }); k(G.prototype,
        "drawCrosshair", function (a, b, c) {
            var d, e; a.call(this, b, c); if (v(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
                a = this.chart; var f = this.options.crosshair.label, h = this.horiz; d = this.opposite; e = this.left; var k = this.top, l = this.crossLabel, m, n = f.format, p = "", q = "inside" === this.options.tickPosition, t = !1 !== this.crosshair.snap, u = 0; b || (b = this.cross && this.cross.e); m = h ? "center" : d ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center"; l || (l = this.crossLabel = a.renderer.label(null,
                null, null, f.shape || "callout").addClass("highcharts-crosshair-label" + (this.series[0] && " highcharts-color-" + this.series[0].colorIndex)).attr({ align: f.align || m, padding: z(f.padding, 8), r: z(f.borderRadius, 3), zIndex: 2 }).add(this.labelGroup), l.attr({ fill: f.backgroundColor || this.series[0] && this.series[0].color || "#666666", stroke: f.borderColor || "", "stroke-width": f.borderWidth || 0 }).css(r({ color: "#ffffff", fontWeight: "normal", fontSize: "11px", textAlign: "center" }, f.style))); h ? (m = t ? c.plotX + e : b.chartX, k += d ? 0 : this.height) :
                (m = d ? this.width + e : 0, k = t ? c.plotY + k : b.chartY); n || f.formatter || (this.isDatetimeAxis && (p = "%b %d, %Y"), n = "{value" + (p ? ":" + p : "") + "}"); b = t ? c[this.isXAxis ? "x" : "y"] : this.toValue(h ? b.chartX : b.chartY); l.attr({ text: n ? w(n, { value: b }) : f.formatter.call(this, b), x: m, y: k, visibility: "visible" }); b = l.getBBox(); if (h) { if (q && !d || !q && d) k = l.y - b.height } else k = l.y - b.height / 2; h ? (d = e - b.x, e = e + this.width - b.x) : (d = "left" === this.labelAlign ? e : 0, e = "right" === this.labelAlign ? e + this.width : a.chartWidth); l.translateX < d && (u = d - l.translateX);
                l.translateX + b.width >= e && (u = -(l.translateX + b.width - e)); l.attr({ x: m + u, y: k, anchorX: h ? m : this.opposite ? 0 : a.chartWidth, anchorY: h ? this.opposite ? a.chartHeight : 0 : k + b.height / 2 })
            }
        }); F.init = function () { d.apply(this, arguments); this.setCompare(this.options.compare) }; F.setCompare = function (a) {
            this.modifyValue = "value" === a || "percent" === a ? function (b, c) { var d = this.compareValue; if (void 0 !== b && void 0 !== d) return b = "value" === a ? b - d : b / d * 100 - (100 === this.options.compareBase ? 0 : 100), c && (c.change = b), b } : null; this.userOptions.compare =
            a; this.chart.hasRendered && (this.isDirty = !0)
        }; F.processData = function () { var a, b = -1, c, d, e, f; u.apply(this, arguments); if (this.xAxis && this.processedYData) for (c = this.processedXData, d = this.processedYData, e = d.length, this.pointArrayMap && (b = q("close", this.pointArrayMap), -1 === b && (b = q(this.pointValKey || "y", this.pointArrayMap))), a = 0; a < e - 1; a++) if (f = -1 < b ? d[a][b] : d[a], n(f) && c[a + 1] >= this.xAxis.min && 0 !== f) { this.compareValue = f; break } }; k(F, "getExtremes", function (a) {
            var b; a.apply(this, [].slice.call(arguments, 1)); this.modifyValue &&
            (b = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = C(b), this.dataMax = D(b))
        }); G.prototype.setCompare = function (a, b) { this.isXAxis || (l(this.series, function (b) { b.setCompare(a) }), z(b, !0) && this.chart.redraw()) }; b.prototype.tooltipFormatter = function (b) { b = b.replace("{point.change}", (0 < this.change ? "+" : "") + a.numberFormat(this.change, z(this.series.tooltipOptions.changeDecimals, 2))); return m.apply(this, [b]) }; k(h.prototype, "render", function (a) {
            this.chart.is3d && this.chart.is3d() || this.chart.polar ||
            !this.xAxis || this.xAxis.isRadial || (!this.clipBox && this.animate ? (this.clipBox = e(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] ? this.chart[this.sharedClipKey].attr({ width: this.xAxis.len, height: this.yAxis.len }) : this.clipBox && (this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len)); a.call(this)
        })
    })(K); return K
});