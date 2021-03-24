// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-182135038-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [{
                "function": "__gaawc",
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_measurementId": "G-PW2KMX4591",
                "vtp_enableUserProperties": true,
                "vtp_enableGA4Name": true,
                "tag_id": 3
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 5
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 1],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": "0",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 7
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Signup",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 1],
                "vtp_eventAction": "0",
                "vtp_eventLabel": "0",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 9
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "transaction_id", "value", ["macro", 2]],
                    ["map", "name", "value", "value", ["macro", 3]]
                ],
                "vtp_measurementId": "G-PW2KMX4591",
                "vtp_enableUserProperties": true,
                "vtp_enableGA4Name": true,
                "vtp_enableMoreSettingsOption": false,
                "tag_id": 12
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "consent": ["list"],
                "once_per_event": true,
                "vtp_eventName": "sign_up",
                "vtp_measurementId": "G-PW2KMX4591",
                "vtp_enableUserProperties": true,
                "vtp_enableGA4Name": true,
                "vtp_enableMoreSettingsOption": false,
                "tag_id": 13
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": true,
                "vtp_enableUrlPassthrough": false,
                "vtp_acceptIncoming": true,
                "vtp_linkerDomains": "safespy.com,paypal.com,paddle.com",
                "vtp_formDecoration": false,
                "vtp_urlPosition": "query",
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieUpdateFeature": false,
                "vtp_enableCookieFlagsFeature": false,
                "vtp_enableUrlPassthroughFeature": true,
                "tag_id": 14
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Purchase"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "Signup"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 1, 6]
                ],
                [
                    ["if", 1],
                    ["add", 2, 4]
                ],
                [
                    ["if", 2],
                    ["add", 3, 5]
                ]
            ]
        },
        "runtime": []




    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: ba(a)
            }
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = ia;
                ha = ma.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = fa,
        pa = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Sh = b.prototype
        },
        qa = this || self,
        ta = function(a) {
            if (a && a != qa) return ra(a.document);
            null === sa && (sa = ra(qa.document));
            return sa
        },
        ua = /^[\w+/_-]+[=]{0,2}$/,
        sa = null,
        ra = function(a) {
            var b = a.querySelector && a.querySelector("script[nonce]");
            if (b) {
                var c = b.nonce || b.getAttribute("nonce");
                if (c && ua.test(c)) return c
            }
            return ""
        },
        va = function(a) {
            return a
        };
    var wa = {},
        ya = function(a, b) {
            wa[a] = wa[a] || [];
            wa[a][b] = !0
        },
        za = function(a) {
            for (var b = [], c = wa[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Ba = function() {},
        Ca = function(a) {
            return "function" == typeof a
        },
        g = function(a) {
            return "string" == typeof a
        },
        Ea = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        Fa = function(a) {
            var b = "[object Array]" == Object.prototype.toString.call(Object(a));
            Array.isArray ? Array.isArray(a) !== b && ya("TAGGING", 4) : ya("TAGGING", 5);
            return b
        },
        Ga = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        Ia = function(a, b) {
            if (a && Fa(a))
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ja = function(a, b) {
            if (!Ea(a) || !Ea(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ma = function(a, b) {
            for (var c = new La, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Na = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Oa = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Pa =
        function(a) {
            return Math.round(Number(a)) || 0
        },
        Sa = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Va = function(a) {
            var b = [];
            if (Fa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Wa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Xa = function() {
            return (new Date).getTime()
        },
        La = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    La.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    La.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Za = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        $a = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        cb = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        db = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        fb = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        hb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ib = function(a) {
            var b = [];
            Na(a, function(c, d) {
                10 > c.length && d && b.push(c)
            });
            return b.join(",")
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var jb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        kb = function(a) {
            if (null == a) return String(a);
            var b = jb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        lb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        nb = function(a) {
            if (!a || "object" != kb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !lb(a, "constructor") && !lb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || lb(a, b)
        },
        m = function(a, b) {
            var c = b || ("array" == kb(a) ? [] : {}),
                d;
            for (d in a)
                if (lb(a, d)) {
                    var e = a[d];
                    "array" == kb(e) ? ("array" != kb(c[d]) && (c[d] = []), c[d] = m(e, c[d])) : nb(e) ? (nb(c[d]) || (c[d] = {}), c[d] = m(e, c[d])) : c[d] = e
                }
            return c
        };
    var qb = function(a) {
        if (void 0 === a || Fa(a) || nb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var rb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            yf: a("consent"),
            zf: a("consent_always_fire"),
            Rd: a("convert_case_to"),
            Sd: a("convert_false_to"),
            Td: a("convert_null_to"),
            Ud: a("convert_true_to"),
            Vd: a("convert_undefined_to"),
            Dh: a("debug_mode_metadata"),
            Ma: a("function"),
            mg: a("instance_name"),
            og: a("live_only"),
            pg: a("malware_disabled"),
            qg: a("metadata"),
            Gh: a("original_activity_id"),
            Hh: a("original_vendor_template_id"),
            sg: a("once_per_event"),
            Je: a("once_per_load"),
            Ne: a("setup_tags"),
            Oe: a("tag_id"),
            Pe: a("teardown_tags")
        }
    }();
    var Rb;
    var Sb = [],
        Tb = [],
        Ub = [],
        Vb = [],
        Wb = [],
        Xb = {},
        Yb, Zb, $b, ac = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = Xb[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_")) d && b && b.Se && b.Se(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === rb.zf.toString() && a[f]) {}
            return void 0 !== d ? d(e) : Rb(c, e, b)
        },
        cc = function(a, b, c) {
            c =
                c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = bc(a[e], b, c));
            return d
        },
        bc = function(a, b, c) {
            if (Fa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(bc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Sb[f];
                        if (!h || b.wd(h)) return;
                        c[f] = !0;
                        try {
                            var k = cc(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = ac(k, b);
                            $b && (d = $b.Hg(d, k))
                        } catch (z) {
                            b.df && b.df(z, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[bc(a[l], b, c)] = bc(a[l +
                            1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, q = 1; q < a.length; q++) {
                            var p = bc(a[q], b, c);
                            Zb && (n = n || p === Zb.cc);
                            d.push(p)
                        }
                        return Zb && n ? Zb.Kg(d) : d.join("");
                    case "escape":
                        d = bc(a[1], b, c);
                        if (Zb && Fa(a[1]) && "macro" === a[1][0] && Zb.bh(a)) return Zb.qh(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) sb[a[r]] && (d = sb[a[r]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Vb[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Ye: a[2],
                            index: u
                        };
                    case "zb":
                        var t = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        t["function"] = a[1];
                        var v = dc(t, b, c),
                            x = !!a[4];
                        return x || 2 !== v ? x !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        dc = function(a, b, c) {
            try {
                return Yb(cc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var gc = null,
        jc = function(a) {
            function b(p) {
                for (var r = 0; r < p.length; r++) d[p[r]] = !0
            }
            var c = [],
                d = [];
            gc = hc(a);
            for (var e = 0; e < Tb.length; e++) {
                var f = Tb[e],
                    h = ic(f);
                if (h) {
                    for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(f.block || [])
                } else null === h && b(f.block || [])
            }
            for (var n = [], q = 0; q < Vb.length; q++) c[q] && !d[q] && (n[q] = !0);
            return n
        },
        ic = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = gc(b[c]);
                if (0 === d) return !1;
                if (2 === d) return null
            }
            for (var e = a.unless || [], f = 0; f < e.length; f++) {
                var h = gc(e[f]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        hc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = dc(Ub[c], a));
                return b[c]
            }
        };
    var kc = {
        Hg: function(a, b) {
            b[rb.Rd] && "string" === typeof a && (a = 1 == b[rb.Rd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(rb.Td) && null === a && (a = b[rb.Td]);
            b.hasOwnProperty(rb.Vd) && void 0 === a && (a = b[rb.Vd]);
            b.hasOwnProperty(rb.Ud) && !0 === a && (a = b[rb.Ud]);
            b.hasOwnProperty(rb.Sd) && !1 === a && (a = b[rb.Sd]);
            return a
        }
    };
    var C = {
        yb: "_ee",
        kd: "_syn",
        Jh: "_uei",
        cd: "_eu",
        Ih: "_pci",
        Qc: "event_callback",
        Wb: "event_timeout",
        Z: "gtag.config",
        na: "gtag.get",
        ma: "purchase",
        Wa: "refund",
        Ja: "begin_checkout",
        Ua: "add_to_cart",
        Va: "remove_from_cart",
        If: "view_cart",
        Zd: "add_to_wishlist",
        ya: "view_item",
        Yd: "view_promotion",
        Xd: "select_promotion",
        Lc: "select_item",
        Tb: "view_item_list",
        Wd: "add_payment_info",
        Hf: "add_shipping_info",
        Aa: "value_key",
        za: "value_callback",
        fa: "allow_ad_personalization_signals",
        Yc: "restricted_data_processing",
        ob: "allow_google_signals",
        ia: "cookie_expires",
        rb: "cookie_update",
        vb: "session_duration",
        $b: "session_engaged_time",
        qa: "user_properties",
        Ca: "transport_url",
        N: "ads_data_redaction",
        bd: "user_data",
        Xb: "first_party_collection",
        B: "ad_storage",
        J: "analytics_storage",
        Pd: "region",
        Qd: "wait_for_update"
    };
    C.Be = [C.ma, C.Wa, C.Ja, C.Ua, C.Va, C.If, C.Zd, C.ya, C.Yd, C.Xd, C.Tb, C.Lc, C.Wd, C.Hf];
    C.Ae = [C.fa, C.ob, C.rb];
    C.Ce = [C.ia, C.Wb, C.vb, C.$b];
    var D = function(a) {
        ya("GTM", a)
    };
    var Ic = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Jc = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Kc, Lc = function() {
        if (void 0 === Kc) {
            var a = null,
                b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                Kc = a
            } else Kc = a
        }
        return Kc
    };
    var Qc = function(a, b) {
        this.m = b === Mc ? a : ""
    };
    Qc.prototype.toString = function() {
        return this.m + ""
    };
    var Mc = {};
    var Rc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Sc;
    a: {
        var Tc = qa.navigator;
        if (Tc) {
            var Uc = Tc.userAgent;
            if (Uc) {
                Sc = Uc;
                break a
            }
        }
        Sc = ""
    }
    var Vc = function(a) {
        return -1 != Sc.indexOf(a)
    };
    var Xc = function(a, b, c) {
        this.m = c === Wc ? a : ""
    };
    Xc.prototype.toString = function() {
        return this.m.toString()
    };
    var Yc = function(a) {
            return a instanceof Xc && a.constructor === Xc ? a.m : "type_error:SafeHtml"
        },
        Wc = {},
        Zc = new Xc(qa.trustedTypes && qa.trustedTypes.emptyHTML || "", 0, Wc);
    var $c = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            var c = a.firstChild.firstChild;
            a.innerHTML = Yc(Zc);
            return !c.parentElement
        }),
        ad = function(a, b) {
            if ($c())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Yc(b)
        };
    var bd = function(a) {
        var b = Lc(),
            c = b ? b.createHTML(a) : a;
        return new Xc(c, null, Wc)
    };
    var G = window,
        H = document,
        cd = navigator,
        dd = H.currentScript && H.currentScript.src,
        ed = function(a, b) {
            var c = G[a];
            G[a] = void 0 === c ? b : c;
            return G[a]
        },
        fd = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        };
    Object.freeze({
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    });
    var gd = function(a, b, c) {
            var d = H.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            var e, f = Lc(),
                h = f ? f.createScriptURL(a) : a;
            e = new Qc(h, Mc);
            d.src = e instanceof Qc && e.constructor === Qc ? e.m : "type_error:TrustedResourceUrl";
            var k = ta(d.ownerDocument && d.ownerDocument.defaultView);
            k && d.setAttribute("nonce", k);
            fd(d, b);
            c && (d.onerror = c);
            var l = ta();
            l && d.setAttribute("nonce", l);
            var n = H.getElementsByTagName("script")[0] || H.body || H.head;
            n.parentNode.insertBefore(d, n);
            return d
        },
        hd = function() {
            if (dd) {
                var a = dd.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        id = function(a, b) {
            var c = H.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = H.body && H.body.lastChild || H.body || H.head;
            d.parentNode.insertBefore(c, d);
            fd(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        jd = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        kd = function(a, b, c, d) {
            a.addEventListener ?
                a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        ld = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            G.setTimeout(a, 0)
        },
        md = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        nd = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        od = function(a) {
            var b = H.createElement("div"),
                c = bd("A<div>" + a + "</div>");
            ad(b, c);
            b = b.lastChild;
            for (var d = []; b.firstChild;) d.push(b.removeChild(b.firstChild));
            return d
        },
        pd = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        qd = function(a) {
            cd.sendBeacon && cd.sendBeacon(a) || jd(a)
        },
        rd = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var sd = function() {
        var a = {};
        this.m = function(b) {
            return null != a[1933] ? a[1933] : b
        };
        this.o = function() {
            a[1933] = !0
        }
    };
    sd.m = void 0;
    sd.o = function() {
        return sd.m ? sd.m : sd.m = new sd
    };
    var td = function() {
        var a;
        a = void 0 === a ? !1 : a;
        return sd.o().m(a)
    };
    var ud = [];

    function vd() {
        var a = ed("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: wd,
            update: xd,
            addListener: yd,
            notifyListeners: zd,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function wd(a, b, c, d, e, f) {
        var h = vd();
        h.active = !0;
        h.usedDefault = !0;
        if (void 0 != b) {
            var k = h.entries,
                l = k[a] || {},
                n = l.region,
                q = c && g(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || q === e || (q === d ? n !== e : !q && !n)) {
                var p = !!(f && 0 < f && void 0 === l.update),
                    r = {
                        region: q,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: p
                    };
                if ("" !== d || !1 !== l.initial) k[a] = r;
                p && G.setTimeout(function() {
                    k[a] === r && r.quiet && (r.quiet = !1, Ad(a), zd(), ya("TAGGING", 2))
                }, f)
            }
        }
    }

    function xd(a, b) {
        var c = vd();
        c.active = !0;
        if (void 0 != b) {
            var d = Bd(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var h = Bd(a);
            f.quiet ? (f.quiet = !1, Ad(a)) : h !== d && Ad(a)
        }
    }

    function yd(a, b) {
        ud.push({
            Ue: a,
            Sg: b
        })
    }

    function Ad(a) {
        for (var b = 0; b < ud.length; ++b) {
            var c = ud[b];
            Fa(c.Ue) && -1 !== c.Ue.indexOf(a) && (c.hf = !0)
        }
    }

    function zd(a) {
        for (var b = 0; b < ud.length; ++b) {
            var c = ud[b];
            if (c.hf) {
                c.hf = !1;
                try {
                    c.Sg({
                        Te: a
                    })
                } catch (d) {}
            }
        }
    }
    var Bd = function(a) {
            var b = vd().entries[a] || {};
            return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
        },
        Cd = function(a) {
            return (vd().entries[a] || {}).initial
        },
        Dd = function(a) {
            return !(vd().entries[a] || {}).quiet
        },
        Ed = function() {
            return td() ? vd().active : !1
        },
        Fd = function() {
            return vd().usedDefault
        },
        Gd = function(a, b) {
            vd().addListener(a, b)
        },
        Hd = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Dd(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Gd(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Id = function(a,
            b) {
            if (!1 === Bd(b)) {
                var c = !1;
                Gd([b], function(d) {
                    !c && Bd(b) && (a(d), c = !0)
                })
            }
        };

    function Jd(a) {
        for (var b = [], c = 0; c < Kd.length; c++) {
            var d = a(Kd[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Kd = [C.B, C.J],
        Ld = function(a) {
            var b = a[C.Pd];
            b && D(40);
            var c = a[C.Qd];
            c && D(41);
            for (var d = Fa(b) ? b : [b], e = 0; e < d.length; ++e)
                for (var f in a)
                    if (a.hasOwnProperty(f) && f !== C.Pd && f !== C.Qd)
                        if (-1 < Ga(Kd, f)) {
                            var h = f,
                                k = a[f],
                                l = d[e];
                            vd().set(h, k, l, "IN", "IN-MH", c)
                        } else {}
        },
        Md = function(a, b) {
            for (var c in a)
                if (a.hasOwnProperty(c))
                    if (-1 <
                        Ga(Kd, c)) {
                        var d = c,
                            e = a[c];
                        vd().update(d, e)
                    } else {}
            vd().notifyListeners(b)
        },
        Nd = function(a) {
            var b = Bd(a);
            return void 0 != b ? b : !0
        },
        Od = function() {
            return "G1" + Jd(Bd)
        },
        Pd = function(a, b) {
            Hd(a, b)
        };
    var Rd = function(a) {
            return Qd ? H.querySelectorAll(a) : null
        },
        Sd = function(a, b) {
            if (!Qd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!H.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Td = !1;
    if (H.querySelectorAll) try {
        var Ud = H.querySelectorAll(":root");
        Ud && 1 == Ud.length && Ud[0] == H.documentElement && (Td = !0)
    } catch (a) {}
    var Qd = Td;
    var Vd = function(a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle) return !0;
        var c = G.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                h = e.filter;
            if (h) {
                var k = h.indexOf("opacity(");
                0 <= k && (h = h.substring(k + 8, h.indexOf(")", k)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = G.getComputedStyle(d,
                null))
        }
        return !1
    };
    var ee = /:[0-9]+$/,
        fe = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var h = f.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        ie = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = ge(a.protocol) || ge(G.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || G.location.hostname).replace(ee, "").toLowerCase());
            return he(a, b, c, d, e)
        },
        he = function(a, b, c, d, e) {
            var f, h = ge(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = je(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(ee, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || ya("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= Ga(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = fe(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        ge = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        je = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        ke = function(a) {
            var b = H.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || ya("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(ee, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        le = function(a) {
            function b(n) {
                var q = n.split("=")[0];
                return 0 > d.indexOf(q) ? n : q + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(q) {
                    return void 0 != q
                }).join("&")
            }
            var d = "gclid dclid gbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = ke(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                k = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === k[0] && (k = k.substring(1));
            h = c(h);
            k = c(k);
            "" !== h && (h = "?" + h);
            "" !== k && (k = "#" + k);
            var l = "" + f + h + k;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var me = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        ne = new RegExp(/support|noreply/i),
        oe = ["SCRIPT", "IMG", "SVG", "PATH", "BR"],
        pe = ["BR"];

    function qe(a) {
        var b;
        if (a === H.body) b = "body";
        else {
            var c;
            if (a.id) c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var h = 0; h < f.childElementCount; h++)
                                if (f.children[h] === a) {
                                    e = h + 1;
                                    break a
                                }
                            e = -1
                        } else e = 1
                    }
                    d = qe(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }
    var te = function() {
        var a = !0;
        var b = a,
            c;
        var d = [],
            e = H.body;
        if (e) {
            for (var f = e.querySelectorAll("*"), h = 0; h < f.length && 1E4 > h; h++) {
                var k = f[h];
                if (!(0 <= oe.indexOf(k.tagName.toUpperCase()))) {
                    for (var l = !1, n = 0; n < k.childElementCount && 1E4 > n; n++)
                        if (!(0 <= pe.indexOf(k.children[n].tagName.toUpperCase()))) {
                            l = !0;
                            break
                        }
                    l || d.push(k)
                }
            }
            c = {
                elements: d,
                status: 1E4 < f.length ? "2" : "1"
            }
        } else c = {
            elements: d,
            status: "4"
        };
        for (var q = c, p = q.elements, r = [], u = 0; u < p.length; u++) {
            var t = p[u],
                v = t.textContent;
            t.value && (v = t.value);
            if (v) {
                var x = v.match(me);
                if (x) {
                    var z = x[0],
                        w;
                    if (G.location) {
                        var y = he(G.location, "host", !0);
                        w = 0 <= z.toLowerCase().indexOf(y)
                    } else w = !1;
                    w || r.push({
                        element: t,
                        Jc: z
                    })
                }
            }
        }
        var A;
        for (var B = [], F = 10 < r.length ? "3" : q.status, E = 0; E < r.length &&
            10 > E; E++) {
            var J = r[E].element,
                M = r[E].Jc,
                N = !1;
            B.push({
                Jc: M,
                querySelector: qe(J),
                tagName: J.tagName,
                isVisible: !Vd(J),
                type: 1,
                yc: !!N
            })
        }
        return {
            elements: B,
            status: F
        }
    };
    var He = {},
        L = null,
        Ie = Math.random();
    He.D = "GTM-MJ6PH4Q";
    He.jc = "330";
    He.Fh = "";
    He.Bf = "ChAI8Iu8ggYQ1qqKlu2zif1eEiQAMRe4GRIS/2u6pZt7Kem2eL8VZnrcCUm4tDJHkOWmsU2ptu0aAi4U";
    var Je = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Ke = {
            __paused: !0,
            __tg: !0
        },
        Le;
    for (Le in Je) Je.hasOwnProperty(Le) && (Ke[Le] = !0);
    var Me = "www.googletagmanager.com/gtm.js";
    var Ne = Me,
        Oe = Sa(""),
        Pe = null,
        Qe = null,
        Re = "//www.googletagmanager.com/a?id=" + He.D + "&cv=1",
        Se = {},
        Te = {},
        Ue = function() {
            var a = L.sequence || 1;
            L.sequence = a + 1;
            return a
        };
    He.Af = "";
    var Ve = {},
        We = new La,
        Xe = {},
        Ye = {},
        af = {
            name: "dataLayer",
            set: function(a, b) {
                m(hb(a, b), Xe);
                Ze()
            },
            get: function(a) {
                return $e(a, 2)
            },
            reset: function() {
                We = new La;
                Xe = {};
                Ze()
            }
        },
        $e = function(a, b) {
            return 2 != b ? We.get(a) : bf(a)
        },
        bf = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Xe, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== Ga(b, d)) return
            }
            return d
        },
        cf = function(a, b) {
            Ye.hasOwnProperty(a) || (We.set(a, b), m(hb(a, b), Xe), Ze())
        },
        Ze = function(a) {
            Na(Ye, function(b, c) {
                We.set(b, c);
                m(hb(b,
                    void 0), Xe);
                m(hb(b, c), Xe);
                a && delete Ye[b]
            })
        },
        df = function(a, b, c) {
            Ve[a] = Ve[a] || {};
            var d = 1 !== c ? bf(b) : We.get(b);
            "array" === kb(d) || "object" === kb(d) ? Ve[a][b] = m(d) : Ve[a][b] = d
        },
        ef = function(a, b) {
            if (Ve[a]) return Ve[a][b]
        },
        ff = function(a, b) {
            Ve[a] && delete Ve[a][b]
        };
    var jf = {},
        kf = function(a, b) {
            if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a)) return G._gtmexpgrp[a];
            void 0 === jf[a] && (jf[a] = Math.floor(Math.random() * b));
            return jf[a]
        };
    var lf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };

    function mf(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var of = function(a, b, c, d) {
        return nf(d) ? mf(a, String(b || document.cookie), c) : []
    }, uf = function(a, b, c, d, e) {
        if (nf(e)) {
            var f = sf(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = tf(f, function(h) {
                    return h.sc
                }, b);
                if (1 === f.length) return f[0].id;
                f = tf(f, function(h) {
                    return h.Mb
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };

    function vf(a, b, c, d) {
        var e = document.cookie;
        document.cookie = a;
        var f = document.cookie;
        return e != f || void 0 != c && 0 <= of (b, f, !1, d).indexOf(c)
    }
    var zf = function(a, b, c) {
            function d(u, t, v) {
                if (null == v) return delete h[t], u;
                h[t] = v;
                return u + "; " + t + "=" + v
            }

            function e(u, t) {
                if (null == t) return delete h[t], u;
                h[t] = !0;
                return u + "; " + t
            }
            if (!nf(c.wa)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = wf(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.Ph);
            f = d(f, "samesite",
                c.Qh);
            c.Rh && (f = e(f, "secure"));
            var l = c.domain;
            if ("auto" === l) {
                for (var n = xf(), q = 0; q < n.length; ++q) {
                    var p = "none" !== n[q] ? n[q] : void 0,
                        r = d(f, "domain", p);
                    r = e(r, c.flags);
                    if (!yf(p, c.path) && vf(r, a, b, c.wa)) return 0
                }
                return 1
            }
            l && "none" !== l && (f = d(f, "domain", l));
            f = e(f, c.flags);
            return yf(l, c.path) ? 1 : vf(f, a, b, c.wa) ? 0 : 1
        },
        Af = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return zf(a, b, c)
        };

    function tf(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function sf(a, b, c) {
        for (var d = [], e = of (a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                k = h.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = h.shift();
                l && (l = l.split("-"), d.push({
                    id: h.join("."),
                    sc: 1 * l[0] || 1,
                    Mb: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var wf = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Bf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Cf = /(^|\.)doubleclick\.net$/i,
        yf = function(a, b) {
            return Cf.test(document.location.hostname) || "/" === b && Bf.test(a)
        },
        xf = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = document.location.hostname;
            Cf.test(e) || Bf.test(e) || a.push("none");
            return a
        },
        nf = function(a) {
            if (!td() || !a || !Ed()) return !0;
            if (!Dd(a)) return !1;
            var b = Bd(a);
            return null == b ? !0 : !!b
        };
    var Df = function() {
            for (var a = cd.userAgent + (H.cookie || "") + (H.referrer || ""), b = a.length, c = G.history.length; 0 < c;) a += c-- ^ b++;
            return [Math.round(2147483647 * Math.random()) ^ lf(a) & 2147483647, Math.round(Xa() / 1E3)].join(".")
        },
        Gf = function(a, b, c, d, e) {
            var f = Ef(b);
            return uf(a, f, Ff(c), d, e)
        },
        Hf = function(a, b, c, d) {
            var e = "" + Ef(c),
                f = Ff(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Ef = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Ff = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] &&
                (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function If(a, b, c) {
        var d, e = a.Lb;
        null == e && (e = 7776E3);
        0 !== e && (d = new Date((b || Xa()) + 1E3 * e));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var Jf = ["1"],
        Kf = {},
        Nf = function(a) {
            var b = Lf(a.prefix),
                c = Kf[b];
            c && Mf(b, c, a)
        },
        Pf = function(a) {
            var b = Lf(a.prefix);
            if (!Kf[b] && !Of(b, a.path, a.domain)) {
                var c = Df();
                if (0 === Mf(b, c, a)) {
                    var d = ed("google_tag_data", {});
                    d._gcl_au ? ya("GTM", 57) : d._gcl_au = c
                }
                Of(b, a.path, a.domain)
            }
        };

    function Mf(a, b, c) {
        var d = Hf(b, "1", c.domain, c.path),
            e = If(c);
        e.wa = "ad_storage";
        return Af(a, d, e)
    }

    function Of(a, b, c) {
        var d = Gf(a, b, c, Jf, "ad_storage");
        d && (Kf[a] = d);
        return d
    }

    function Lf(a) {
        return (a || "_gcl") + "_au"
    };

    function Qf() {
        for (var a = Rf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Sf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Rf, Tf;

    function Uf(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    q = Tf[n];
                if (null != q) return q;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        Rf = Rf || Sf();
        Tf = Tf || Qf();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var Vf;
    var Zf = function() {
            var a = Wf,
                b = Xf,
                c = Yf(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                kd(H, "mousedown", d);
                kd(H, "keyup", d);
                kd(H, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        $f = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Yf().decorators.push(f)
        },
        ag = function(a, b, c) {
            for (var d = Yf().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    k;
                if (k = !c || h.forms) a: {
                    var l = h.domains,
                        n = a,
                        q = !!h.sameHost;
                    if (l && (q || n !== H.location.hostname))
                        for (var p = 0; p < l.length; p++)
                            if (l[p] instanceof RegExp) {
                                if (l[p].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[p]) || q && 0 <= l[p].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && cb(e, h.callback())
                }
            }
            return e
        },
        Yf = function() {
            var a = ed("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var bg = /(.*?)\*(.*?)\*(.*)/,
        cg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        dg = /^(?:www\.|m\.|amp\.)+/,
        eg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function fg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var hg = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                        b.push(c);
                        var e = b,
                            f = e.push,
                            h, k = String(d);
                        Rf = Rf || Sf();
                        Tf = Tf || Qf();
                        for (var l = [], n = 0; n < k.length; n += 3) {
                            var q = n + 1 < k.length,
                                p = n + 2 < k.length,
                                r = k.charCodeAt(n),
                                u = q ? k.charCodeAt(n + 1) : 0,
                                t = p ? k.charCodeAt(n + 2) : 0,
                                v = r >> 2,
                                x = (r & 3) << 4 | u >> 4,
                                z = (u & 15) << 2 | t >> 6,
                                w = t & 63;
                            p || (w = 64, q || (z = 64));
                            l.push(Rf[v], Rf[x], Rf[z], Rf[w])
                        }
                        h = l.join("");
                        f.call(e, h)
                    }
                }
            var y = b.join("*");
            return ["1", gg(y),
                y
            ].join("*")
        },
        gg = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = Vf)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var h = f, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[f] = h
                }
                d = e
            }
            Vf = d;
            for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ Vf[(l ^ c.charCodeAt(n)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        jg = function() {
            return function(a) {
                var b = ke(G.location.href),
                    c = b.search.replace("?", ""),
                    d = fe(c, "_gl", !0) || "";
                a.query = ig(d) || {};
                var e = ie(b, "fragment").match(fg("_gl"));
                a.fragment = ig(e && e[3] || "") || {}
            }
        },
        kg = function(a) {
            var b = jg(),
                c = Yf();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (cb(d, e.query), a && cb(d, e.fragment));
            return d
        },
        ig = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = bg.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var n = h[2], q = 0; q <
                                b; ++q)
                                if (n === gg(k, q)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var p = {}, r = k ? k.split("*") : [], u = 0; u < r.length; u += 2) p[r[u]] = Uf(r[u + 1]);
                            return p
                        }
                    }
                }
            } catch (t) {}
        };

    function lg(a, b, c, d) {
        function e(q) {
            var p = q,
                r = fg(a).exec(p),
                u = p;
            if (r) {
                var t = r[2],
                    v = r[4];
                u = r[1];
                v && (u = u + t + v)
            }
            q = u;
            var x = q.charAt(q.length - 1);
            q && "&" !== x && (q += "&");
            return q + n
        }
        d = void 0 === d ? !1 : d;
        var f = eg.exec(c);
        if (!f) return "";
        var h = f[1],
            k = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + h + k + l
    }

    function mg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = ag(b, 1, c),
            e = ag(b, 2, c),
            f = ag(b, 3, c);
        if (db(d)) {
            var h = hg(d);
            c ? ng("_gl", h, a) : og("_gl", h, a, !1)
        }
        if (!c && db(e)) {
            var k = hg(e);
            og("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    q = f[l],
                    p = a;
                if (p.tagName) {
                    if ("a" === p.tagName.toLowerCase()) {
                        og(n, q, p, void 0);
                        break a
                    }
                    if ("form" === p.tagName.toLowerCase()) {
                        ng(n, q, p);
                        break a
                    }
                }
                "string" == typeof p && lg(n, q, p, void 0)
            }
    }

    function og(a, b, c, d) {
        if (c.href) {
            var e = lg(a, b, c.href, void 0 === d ? !1 : d);
            Rc.test(e) && (c.href = e)
        }
    }

    function ng(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
                    var k = e[h];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = H.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = lg(a, b, c.action);
                Rc.test(n) && (c.action = n)
            }
        }
    }
    var Wf = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var f = e.protocol;
                    "http:" !== f && "https:" !== f || mg(e, e.hostname)
                }
            } catch (h) {}
        },
        Xf = function(a) {
            try {
                if (a.action) {
                    var b = ie(ke(a.action), "host");
                    mg(a, b)
                }
            } catch (c) {}
        },
        pg = function(a, b, c, d) {
            Zf();
            $f(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        qg = function(a, b) {
            Zf();
            $f(a, [he(G.location, "host", !0)], b, !0, !0)
        },
        rg = function() {
            var a = H.location.hostname,
                b = cg.exec(H.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(dg, ""),
                l = e.replace(dg, ""),
                n;
            if (!(n = k === l)) {
                var q = "." + l;
                n = k.substring(k.length - q.length, k.length) === q
            }
            return n
        },
        sg = function(a, b) {
            return !1 === a ? !1 : a || b || rg()
        };
    var tg = {};
    var ug = function() {
        for (var a = [], b = H.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Ld: e[1],
                value: e[2]
            })
        }
        var f = {};
        if (!a || !a.length) return f;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (f[a[h].Ld] || (f[a[h].Ld] = []), f[a[h].Ld].push({
                timestamp: k[1],
                Ha: k[2]
            }))
        }
        return f
    };
    var vg = /^\w+$/,
        wg = /^[\w-]+$/,
        xg = /^~?[\w-]+$/,
        yg = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        zg = function() {
            if (!td() || !Ed()) return !0;
            var a = Bd("ad_storage");
            return null == a ? !0 : !!a
        },
        Ag = function(a, b) {
            Dd("ad_storage") ? zg() ? a() : Id(a, "ad_storage") : b ? ya("TAGGING", 3) : Hd(function() {
                Ag(a, !0)
            }, ["ad_storage"])
        },
        Cg = function(a) {
            return Bg(a).map(function(b) {
                return b.Ha
            })
        },
        Bg = function(a) {
            var b = [];
            if (!H.cookie) return b;
            var c = of (a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e <
                c.length; d = {
                    jb: d.jb
                }, e++) {
                d.jb = Dg(c[e]);
                var f = Eg(c[e]);
                if (d.jb && f) {
                    var h = Ia(b, function(k) {
                        return function(l) {
                            return l.Ha === k.jb
                        }
                    }(d));
                    h && h.timestamp < f ? h.timestamp = f : h || b.push({
                        Ha: d.jb,
                        timestamp: f
                    })
                }
            }
            b.sort(function(k, l) {
                return l.timestamp - k.timestamp
            });
            return Fg(b)
        };

    function Gg(a) {
        return a && "string" == typeof a && a.match(vg) ? a : "_gcl"
    }
    var Ig = function() {
            var a = ke(G.location.href),
                b = ie(a, "query", !1, void 0, "gclid"),
                c = ie(a, "query", !1, void 0, "gclsrc"),
                d = ie(a, "query", !1, void 0, "gbraid"),
                e = ie(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || fe(f, "gclid", void 0);
                c = c || fe(f, "gclsrc", void 0);
                d = d || fe(f, "gbraid", void 0)
            }
            return Hg(b, c, e, d)
        },
        Hg = function(a, b, c, d) {
            var e = {},
                f = function(h, k) {
                    e[k] || (e[k] = []);
                    e[k].push(h)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && wg.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(wg)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Jg = function(a, b) {
            switch (a) {
                case void 0:
                case "aw":
                    return "aw" === b;
                case "aw.ds":
                    return "aw" === b || "dc" === b;
                case "ds":
                case "3p.ds":
                    return "dc" === b;
                case "gf":
                    return "gf" === b;
                case "ha":
                    return "ha" === b
            }
            return !1
        },
        Lg = function(a) {
            var b = Ig();
            Ag(function() {
                Kg(b, a)
            })
        };

    function Kg(a, b, c, d) {
        function e(q, p) {
            var r = Mg(q, f);
            r && (Af(r, p, h), k = !0)
        }
        b = b || {};
        d = d || [];
        var f = Gg(b.prefix);
        c = c || Xa();
        var h = If(b, c, !0);
        h.wa = "ad_storage";
        var k = !1,
            l = Math.round(c / 1E3),
            n = function(q) {
                var p = ["GCL", l, q];
                0 < d.length && p.push(d.join("."));
                return p.join(".")
            };
        a.aw && (!0 === b.Th ? e("aw", n("~" + a.aw[0])) : e("aw", n(a.aw[0])));
        a.dc && e("dc", n(a.dc[0]));
        a.gf && e("gf", n(a.gf[0]));
        a.ha && e("ha", n(a.ha[0]));
        a.gp && e("gp", n(a.gp[0]));
        (void 0 == tg.enable_gbraid_cookie_write ? 0 : tg.enable_gbraid_cookie_write) && !k &&
            a.gb && e("gb", n(a.gb[0]))
    }
    var Ng = function(a, b) {
            var c = kg(!0);
            Ag(function() {
                for (var d = Gg(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== yg[f]) {
                        var h = Mg(f, d),
                            k = c[h];
                        if (k) {
                            var l = Math.min(Eg(k), Xa()),
                                n;
                            b: {
                                for (var q = l, p = of (h, H.cookie, void 0, "ad_storage"), r = 0; r < p.length; ++r)
                                    if (Eg(p[r]) > q) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var u = If(b, l, !0);
                                u.wa = "ad_storage";
                                Af(h, k, u)
                            }
                        }
                    }
                }
                Kg(Hg(c.gclid, c.gclsrc), b)
            })
        },
        Mg = function(a, b) {
            var c = yg[a];
            if (void 0 !== c) return b + c
        },
        Eg = function(a) {
            return Og(a) ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

    function Dg(a) {
        if (Og(a)) return a.split(".")[2]
    }
    var Og = function(a) {
            var b = a.split(".");
            return 3 > b.length || "GCL" !== b[0] || !/^\d+$/.test(b[1]) || !xg.test(b[2]) ? !1 : !0
        },
        Pg = function(a, b, c, d, e) {
            if (Fa(b)) {
                var f = Gg(e),
                    h = function() {
                        for (var k = {}, l = 0; l < a.length; ++l) {
                            var n = Mg(a[l], f);
                            if (n) {
                                var q = of (n, H.cookie, void 0, "ad_storage");
                                q.length && (k[n] = q.sort()[q.length - 1])
                            }
                        }
                        return k
                    };
                Ag(function() {
                    pg(h, b, c, d)
                })
            }
        },
        Fg = function(a) {
            return a.filter(function(b) {
                return xg.test(b.Ha)
            })
        },
        Qg = function(a, b) {
            for (var c = Gg(b.prefix), d = {}, e = 0; e < a.length; e++) yg[a[e]] && (d[a[e]] = yg[a[e]]);
            Ag(function() {
                Na(d, function(f, h) {
                    var k = of (c + h, H.cookie, void 0, "ad_storage");
                    if (k.length) {
                        var l = k[0],
                            n = Eg(l),
                            q = Og(l) ? l.split(".").slice(3) : [],
                            p = {};
                        p[f] = [Dg(l)];
                        Kg(p, b, n, q)
                    }
                })
            })
        };

    function Rg(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Sg = function() {
        function a(e, f, h) {
            h && (e[f] = h)
        }
        var b = ["aw", "dc"];
        if (Ed()) {
            var c = Ig();
            if (Rg(c, b)) {
                var d = {};
                a(d, "gclid", c.gclid);
                a(d, "dclid", c.dclid);
                a(d, "gclsrc", c.gclsrc);
                qg(function() {
                    return d
                }, 3);
                qg(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };
    var Tg = /^\d+\.fls\.doubleclick\.net$/,
        Ug = !1;

    function Vg(a, b) {
        Dd(C.B) ? Nd(C.B) ? a() : Id(a, C.B) : b ? D(42) : Pd(function() {
            Vg(a, !0)
        }, [C.B])
    }

    function Wg(a) {
        var b = ke(G.location.href),
            c = ie(b, "host", !1);
        if (c && c.match(Tg)) {
            var d = ie(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Xg(a, b, c) {
        if ("aw" == a || "dc" == a) {
            var d = Wg("gcl" + a);
            if (d) return d.split(".")
        }
        var e = Gg(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !Nd(C.B) && c,
                h;
            h = Ig()[a] || [];
            if (0 < h.length) return f ? ["0"] : h
        }
        var k = Mg(a, e);
        return k ? Cg(k) : []
    }
    var Yg = function(a) {
            var b = Wg("gac");
            if (b) return !Nd(C.B) && a ? "0" : decodeURIComponent(b);
            var c = zg() ? ug() : {},
                d = [];
            Na(c, function(e, f) {
                f = Fg(f);
                for (var h = [], k = 0; k < f.length; k++) h.push(f[k].Ha);
                h.length && d.push(e + ":" + h.join(","))
            });
            return d.join(";")
        },
        $g = function(a, b) {
            if (Ug) Zg(a, b, "dc");
            else {
                var c = Ig().dc || [];
                Vg(function() {
                    Pf(b);
                    var d = Kf[Lf(b.prefix)],
                        e = !1;
                    if (d && 0 < c.length) {
                        var f = L.joined_au = L.joined_au || {},
                            h = b.prefix || "_gcl";
                        if (!f[h])
                            for (var k = 0; k < c.length; k++) {
                                var l = "https://adservice.google.com/ddm/regclk";
                                l = l + "?gclid=" +
                                    c[k] + "&auiddc=" + d;
                                qd(l);
                                e = f[h] = !0
                            }
                    }
                    null == a && (a = e);
                    a && d && Nf(b)
                })
            }
        },
        Zg = function(a, b, c) {
            var d = Ig(),
                e = [],
                f = d.gclid,
                h = d.dclid,
                k = d.gclsrc || "aw";
            !f || "aw.ds" !== k && "aw" !== k && "ds" !== k || c && !Jg(k, c) || e.push({
                Ha: f,
                bf: k
            });
            !h || c && "dc" !== c || e.push({
                Ha: h,
                bf: "ds"
            });
            Vg(function() {
                Pf(b);
                var l = Kf[Lf(b.prefix)],
                    n = !1;
                if (l && 0 < e.length)
                    for (var q = L.joined_auid = L.joined_auid || {}, p = 0; p < e.length; p++) {
                        var r = e[p],
                            u = r.Ha,
                            t = r.bf,
                            v = (b.prefix || "_gcl") + "." + t + "." + u;
                        if (!q[v]) {
                            var x = "https://adservice.google.com/pagead/regclk";
                            x = x + "?gclid=" + u + "&auid=" + l + "&gclsrc=" +
                                t;
                            qd(x);
                            n = q[v] = !0
                        }
                    }
                null == a && (a = n);
                a && l && Nf(b)
            })
        };
    var ah = /[A-Z]+/,
        bh = /\s/,
        ch = function(a) {
            if (g(a) && (a = Wa(a), !bh.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (ah.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            F: d
                        }
                    }
                }
            }
        },
        eh = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = ch(a[c]);
                d && (b[d.id] = d)
            }
            dh(b);
            var e = [];
            Na(b, function(f, h) {
                e.push(h)
            });
            return e
        };

    function dh(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.F[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var fh = function() {
        var a = !1;
        return a
    };
    var hh = function(a, b, c, d) {
            return (2 === gh() || d || "http:" != G.location.protocol ? a : b) + c
        },
        gh = function() {
            var a = hd(),
                b;
            if (1 === a) a: {
                var c = Ne;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, h = H.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var vh = function(a) {
            return Nd(C.B) ? a : a.replace(/&url=([^&#]+)/, function(b, c) {
                var d = le(decodeURIComponent(c));
                return "&url=" + encodeURIComponent(d)
            })
        },
        wh = function() {
            var a;
            if (!(a = Oe)) {
                var b;
                if (!0 === G._gtmdgs) b = !0;
                else {
                    var c = cd && cd.userAgent || "";
                    b = 0 > c.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) || 11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || "") ? !1 : !0
                }
                a = !b
            }
            if (a) return -1;
            var d = Pa("1");
            return kf(1, 100) < d ? kf(2, 2) : -1
        },
        xh = function(a) {
            var b;
            if (!a || !a.length) return;
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
            }
            b = c.join(",");
            return b
        };
    var yh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        zh = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Ah = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Bh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ch = function() {
            var a = !1;
            return a
        },
        Eh = function(a) {
            var b = $e("gtm.allowlist") || $e("gtm.whitelist");
            b && D(9);
            Ch() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && fb(Va(b), zh),
                d = $e("gtm.blocklist") ||
                $e("gtm.blacklist");
            d || (d = $e("tagTypeBlacklist")) && D(3);
            d ? D(8) : d = [];
            Dh() && (d = Va(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ga(Va(d), "google") && D(2);
            var e = d && fb(Va(d), Ah),
                f = {};
            return function(h) {
                var k = h && h[rb.Ma];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var l = Te[k] || [],
                    n = a(k, l);
                if (b) {
                    var q;
                    if (q =
                        n) a: {
                        if (0 > Ga(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 > Ga(c, l[p])) {
                                        D(11);
                                        q = !1;
                                        break a
                                    }
                                } else {
                                    q = !1;
                                    break a
                                }
                        q = !0
                    }
                    n = q
                }
                var r = !1;
                if (d) {
                    var u = 0 <= Ga(e, k);
                    if (u) r = u;
                    else {
                        var t = Ma(e, l || []);
                        t && D(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= Ga(l, "sandboxedScripts")) || c && -1 !== Ga(c, "sandboxedScripts") || (v = Ma(e, Bh));
                return f[k] = v
            }
        },
        Dh = function() {
            return yh.test(G.location && G.location.hostname)
        };
    var Fh = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        Gh = function(a) {
            var b = L.zones;
            return b ? b.checkState(He.D, a) : Fh
        },
        Hh = function(a) {
            var b = L.zones;
            !b && a && (b = L.zones = a());
            return b
        };
    var Ih = function() {},
        Jh = function() {};
    var Kh = !1,
        Lh = 0,
        Mh = [];

    function Nh(a) {
        if (!Kh) {
            var b = H.createEventObject,
                c = "complete" == H.readyState,
                d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Kh = !0;
                for (var e = 0; e < Mh.length; e++) I(Mh[e])
            }
            Mh.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function Sh() {
        if (!Kh && 140 > Lh) {
            Lh++;
            try {
                H.documentElement.doScroll("left"), Nh()
            } catch (a) {
                G.setTimeout(Sh, 50)
            }
        }
    }
    var Th = function(a) {
        Kh ? a() : Mh.push(a)
    };
    var Vh = function(a, b) {
            this.m = !1;
            this.H = [];
            this.T = {
                tags: []
            };
            this.Y = !1;
            this.o = this.C = 0;
            Uh(this, a, b)
        },
        Wh = function(a, b, c, d) {
            if (Ke.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            nb(d) && (e = m(d, e));
            e.id = c;
            e.status = "timeout";
            return a.T.tags.push(e) - 1
        },
        Xh = function(a, b, c, d) {
            var e = a.T.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Yh = function(a) {
            if (!a.m) {
                for (var b = a.H, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.H.length = 0
            }
        },
        Uh = function(a, b, c) {
            Ca(b) && Zh(a, b);
            c && G.setTimeout(function() {
                return Yh(a)
            }, Number(c))
        },
        Zh = function(a,
            b) {
            var c = $a(function() {
                return I(function() {
                    b(He.D, a.T)
                })
            });
            a.m ? c() : a.H.push(c)
        },
        $h = function(a) {
            a.C++;
            return $a(function() {
                a.o++;
                a.Y && a.o >= a.C && Yh(a)
            })
        };
    var ai = function() {
        function a(d) {
            return !Ea(d) || 0 > d ? 0 : d
        }
        if (!L._li && G.performance && G.performance.timing) {
            var b = G.performance.timing.navigationStart,
                c = Ea(af.get("gtm.start")) ? af.get("gtm.start") : 0;
            L._li = {
                cst: a(c - b),
                cbt: a(Qe - b)
            }
        }
    };
    var ei = {},
        fi = function() {
            return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject]
        },
        gi = !1;
    var hi = function(a) {
            G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
            var b = G.GoogleAnalyticsObject;
            if (G[b]) G.hasOwnProperty(b) || D(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                G[b] = c
            }
            ai();
            return G[b]
        },
        ii = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = fi();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        },
        ji = function(a) {};
    var li = function(a) {},
        ki = function() {
            return G.GoogleAnalyticsObject || "ga"
        },
        mi = function(a, b) {
            return function() {
                var c = fi(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            l = 0 > h.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" +
                            b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload", h, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var ri = function() {
            return "&tc=" + Vb.filter(function(a) {
                return a
            }).length
        },
        ui = function() {
            2022 <= si().length && ti()
        },
        wi = function() {
            vi || (vi = G.setTimeout(ti, 500))
        },
        ti = function() {
            vi && (G.clearTimeout(vi), vi = void 0);
            void 0 === xi || yi[xi] && !zi && !Ai || (Bi[xi] || Ci.dh() || 0 >= Di-- ? (D(1), Bi[xi] = !0) : (Ci.uh(), jd(si()), yi[xi] = !0, Ei = Fi = Gi = Ai = zi = ""))
        },
        si = function() {
            var a = xi;
            if (void 0 === a) return "";
            var b = za("GTM"),
                c = za("TAGGING");
            return [Hi, yi[a] ? "" : "&es=1", Ii[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", ri(), zi, Ai, Gi ? Gi : "", Fi, Ei, "&z=0"].join("")
        },
        Ji = function() {
            return [Re, "&v=3&t=t", "&pid=" + Ja(), "&rv=" + He.jc].join("")
        },
        Ki = "0.005000" > Math.random(),
        Hi = Ji(),
        Li = function() {
            Hi = Ji()
        },
        yi = {},
        zi = "",
        Ai = "",
        Ei = "",
        Fi = "",
        Gi = "",
        xi = void 0,
        Ii = {},
        Bi = {},
        vi = void 0,
        Ci = function(a, b) {
            var c = 0,
                d = 0;
            return {
                dh: function() {
                    if (c < a) return !1;
                    Xa() - d >= b && (c = 0);
                    return c >= a
                },
                uh: function() {
                    Xa() - d >= b && (c = 0);
                    c++;
                    d = Xa()
                }
            }
        }(2, 1E3),
        Di = 1E3,
        Mi = function(a, b, c) {
            if (Ki && !Bi[a] && b) {
                a !== xi && (ti(), xi = a);
                var d, e = String(b[rb.Ma] || "").replace(/_/g, "");
                0 === e.indexOf("cvt") && (e = "cvt");
                d = e;
                var f = c + d;
                zi = zi ? zi + "." + f : "&tr=" + f;
                var h = b["function"];
                if (!h) throw Error("Error: No function name given for function call.");
                var k = (Xb[h] ? "1" : "2") + d;
                Ei = Ei ? Ei + "." + k : "&ti=" + k;
                wi();
                ui()
            }
        },
        Ni = function(a, b, c) {
            if (Ki && !Bi[a]) {
                a !== xi && (ti(), xi = a);
                var d = c + b;
                Ai = Ai ? Ai + "." + d : "&epr=" + d;
                wi();
                ui()
            }
        },
        Oi = function(a, b, c) {};

    function Pi(a, b, c, d) {
        var e = Vb[a],
            f = Qi(a, b, c, d);
        if (!f) return null;
        var h = bc(e[rb.Ne], c, []);
        if (h && h.length) {
            var k = h[0];
            f = Pi(k.index, {
                onSuccess: f,
                onFailure: 1 === k.Ye ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Qi(a, b, c, d) {
        function e() {
            if (f[rb.pg]) k();
            else {
                var x = cc(f, c, []);
                var y = Wh(c.Na, String(f[rb.Ma]), Number(f[rb.Oe]), x[rb.qg]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var E = Xa() - F;
                        Mi(c.id, Vb[a], "5");
                        Xh(c.Na, y, "success",
                            E);
                        h()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var E = Xa() - F;
                        Mi(c.id, Vb[a], "6");
                        Xh(c.Na, y, "failure", E);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                Mi(c.id, f, "1");
                var B = function() {
                    var E = Xa() - F;
                    Mi(c.id, f, "7");
                    Xh(c.Na, y, "exception", E);
                    A || (A = !0, k())
                };
                var F = Xa();
                try {
                    ac(x, c)
                } catch (E) {
                    B(E)
                }
            }
        }
        var f = Vb[a],
            h = b.onSuccess,
            k = b.onFailure,
            l = b.terminate;
        if (c.wd(f)) return null;
        var n = bc(f[rb.Pe], c, []);
        if (n && n.length) {
            var q = n[0],
                p = Pi(q.index, {
                    onSuccess: h,
                    onFailure: k,
                    terminate: l
                }, c, d);
            if (!p) return null;
            h = p;
            k = 2 === q.Ye ? l : p
        }
        if (f[rb.Je] || f[rb.sg]) {
            var r = f[rb.Je] ? Wb :
                c.zh,
                u = h,
                t = k;
            if (!r[a]) {
                e = $a(e);
                var v = Ri(a, r, e);
                h = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }

    function Ri(a, b, c) {
        var d = [],
            e = [];
        b[a] = Si(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Ti;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Ui;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Si(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ti(a) {
        a()
    }

    function Ui(a, b) {
        b()
    };
    var Xi = function(a, b) {
        for (var c = [], d = 0; d < Vb.length; d++)
            if (a[d]) {
                var e = Vb[d];
                var f = $h(b.Na);
                try {
                    var h = Pi(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var k = c,
                            l = k.push,
                            n = d,
                            q = e["function"];
                        if (!q) throw "Error: No function name given for function call.";
                        var p = Xb[q];
                        l.call(k, {
                            sf: n,
                            jf: p ? p.priorityOverride || 0 : 0,
                            Rg: h
                        })
                    } else Vi(d, b), f()
                } catch (t) {
                    f()
                }
            }
        var r = b.Na;
        r.Y = !0;
        r.o >= r.C && Yh(r);
        c.sort(Wi);
        for (var u = 0; u < c.length; u++) c[u].Rg();
        return 0 < c.length
    };

    function Wi(a, b) {
        var c, d = b.jf,
            e = a.jf;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.sf,
                k = b.sf;
            f = h > k ? 1 : h < k ? -1 : 0
        }
        return f
    }

    function Vi(a, b) {
        if (!Ki) return;
        var c = function(d) {
            var e = b.wd(Vb[d]) ? "3" : "4",
                f = bc(Vb[d][rb.Ne], b, []);
            f && f.length && c(f[0].index);
            Mi(b.id, Vb[d], e);
            var h = bc(Vb[d][rb.Pe], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Yi = !1,
        cj = function(a) {
            var b = a["gtm.uniqueEventId"],
                c = a.event;
            if ("gtm.js" === c) {
                if (Yi) return !1;
                Yi = !0
            }
            var d = Gh(b),
                e = !1;
            if (!d.active) {
                if ("gtm.js" !== c) return !1;
                e = !0;
                d = Gh(Number.MAX_SAFE_INTEGER)
            }
            Ki && !Bi[b] && xi !== b && (ti(), xi = b, Ei = zi = "", Ii[b] = "&e=" + (0 === c.indexOf("gtm.") ? encodeURIComponent(c) : "*") + "&eid=" + b, wi());
            var f = a.eventCallback,
                h = a.eventTimeout,
                k = {
                    id: b,
                    name: c,
                    wd: Eh(d.isAllowed),
                    zh: [],
                    df: function() {
                        D(6)
                    },
                    Se: Zi(b),
                    Na: new Vh(f,
                        h)
                };
            $i(b, k.Na);
            var l = jc(k);
            e && (l = aj(l));
            var n = Xi(l, k);
            "gtm.js" !== c && "gtm.sync" !== c || li(He.D);
            switch (c) {
                case "gtm.init":
                    n && D(20)
            }
            return bj(l, n)
        };

    function Zi(a) {
        return function(b) {
            Ki && (qb(b) || Oi(a, "input", b))
        }
    }

    function $i(a, b) {
        df(a, "event", 1);
        df(a, "ecommerce", 1);
        df(a, "gtm");
        df(a, "eventModel");
    }

    function aj(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Je[String(Vb[c][rb.Ma])] && (b[c] = !0);
        return b
    }

    function bj(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Vb[c] && !Ke[String(Vb[c][rb.Ma])]) return !0;
        return !1
    }

    function dj(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return ke("" + c + b).href
        }
    }

    function ej(a, b) {
        return fj() ? dj(a, b) : void 0
    }

    function fj() {
        var a = !1;
        return a
    };
    var gj = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.remoteConfig = {};
            this.globalConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0
        },
        hj = function(a) {
            var b = new gj;
            b.eventModel = a;
            return b
        },
        ij = function(a, b) {
            a.targetConfig = b;
            return a
        },
        jj = function(a, b) {
            a.containerConfig = b;
            return a
        },
        kj = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        lj = function(a, b) {
            a.globalConfig =
                b;
            return a
        },
        mj = function(a, b) {
            a.onSuccess = b;
            return a
        },
        nj = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        oj = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        pj = function(a, b) {
            a.onFailure = b;
            return a
        };
    gj.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
    };
    var qj = function(a) {
        function b(e) {
            Na(e, function(f) {
                c[f] = null
            })
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        var d = [];
        Na(c, function(e) {
            d.push(e)
        });
        return d
    };
    var rj;
    if (3 === He.jc.length) rj = "g";
    else {
        var sj = "G";
        rj = sj
    }
    var tj = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: rj,
            OPT: "o"
        },
        uj = function(a) {
            var b = He.D.split("-"),
                c = b[0].toUpperCase(),
                d = tj[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === He.jc.length) {
                var h = "w";
                f = "2" + h
            } else f = "";
            return f + d + He.jc + e
        };
    var vj = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    var wj = function() {
        return Vc("iPhone") && !Vc("iPod") && !Vc("iPad")
    };
    Vc("Opera");
    Vc("Trident") || Vc("MSIE");
    Vc("Edge");
    !Vc("Gecko") || -1 != Sc.toLowerCase().indexOf("webkit") && !Vc("Edge") || Vc("Trident") || Vc("MSIE") || Vc("Edge"); - 1 != Sc.toLowerCase().indexOf("webkit") && !Vc("Edge") && Vc("Mobile");
    Vc("Macintosh");
    Vc("Windows");
    Vc("Linux") || Vc("CrOS");
    var xj = qa.navigator || null;
    xj && (xj.appVersion || "").indexOf("X11");
    Vc("Android");
    wj();
    Vc("iPad");
    Vc("iPod");
    wj() || Vc("iPad") || Vc("iPod");
    Sc.toLowerCase().indexOf("kaios");
    var yj = function(a, b) {
        for (var c = a, d = 0; 50 > d; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b])
            } catch (k) {
                e = !1
            }
            if (e) return c;
            var f;
            a: {
                try {
                    var h = c.parent;
                    if (h && h != c) {
                        f = h;
                        break a
                    }
                } catch (k) {}
                f = null
            }
            if (!(c = f)) break
        }
        return null
    };
    var zj = function() {};
    var Aj = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Bj = function(a, b) {
            this.o = a;
            this.m = null;
            this.H = {};
            this.Y = 0;
            this.T = void 0 === b ? 500 : b;
            this.C = null
        };
    pa(Bj, zj);
    var Dj = function(a) {
        return "function" === typeof a.o.__tcfapi || null != Cj(a)
    };
    Bj.prototype.addEventListener = function(a) {
        var b = {},
            c = Jc(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.T && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.T));
        var e = function(f, h) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Aj(b), h && 0 === b.internalErrorState || (b.tcString = "tcunavailable", h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Ej(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Bj.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ej(this, "removeEventListener", null, a.listenerId)
    };
    var Gj = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === h && (k = 1)) : 3 === c && (k = 1, 1 === h && (k = 0));
            var l;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = Fj(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && "DE" === a.publisherCC ? !0 : n && Fj(a.purpose.consents, b)
                } else l = !0;
            else l = 1 === k ? a.purpose && a.vendor ? Fj(a.purpose.legitimateInterests,
                b) && Fj(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        Fj = function(a, b) {
            return !(!a || !a[b])
        },
        Ej = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Cj(a)) {
                Hj(a);
                var f = ++a.Y;
                a.H[f] = c;
                if (a.m) {
                    var h = {};
                    a.m.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Cj = function(a) {
            if (a.m) return a.m;
            a.m = yj(a.o, "__tcfapiLocator");
            return a.m
        },
        Hj = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" ===
                        typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.H[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, vj(a.o, a.C))
        };
    var Ij = !0;
    var Jj = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Kj(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    var Lj = Kj("", 550),
        Mj = Kj("", 500);

    function Nj() {
        var a = L.tcf || {};
        return L.tcf = a
    }
    var Oj = function(a, b) {
            this.C = a;
            this.m = b;
            this.o = Xa();
        },
        Pj = function(a) {},
        Qj = function(a) {},
        Wj = function() {
            var a = Nj(),
                b = new Bj(G, Ij ? 3E3 : -1),
                c = new Oj(b, a);
            if ((Rj() ? !0 === G.gtag_enable_tcf_support : !1 !== G.gtag_enable_tcf_support) && !a.active && ("function" === typeof G.__tcfapi || Dj(b))) {
                a.active = !0;
                a.Nb = {};
                Sj();
                var d = null;
                Ij ? d = G.setTimeout(function() {
                    Tj(a);
                    Uj(a);
                    d = null
                }, Mj) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) Tj(a), Uj(a), Pj(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = Vj(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var h = {},
                                    k;
                                for (k in Jj)
                                    if (Jj.hasOwnProperty(k))
                                        if ("1" === k) {
                                            var l = e,
                                                n = !0;
                                            n = void 0 === n ? !1 : n;
                                            var q;
                                            var p = l;
                                            !1 === p.gdprApplies ? q = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Aj(p)), q = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" ===
                                                p.eventStatus) ? !0 : !1);
                                            h["1"] = q ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !n || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Gj(l, "1", 0) : !1
                                        } else h[k] = Gj(e, k, Jj[k]);
                                f = h
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Nb = f, Uj(a), Pj(c))
                        }
                    }), Qj(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), Tj(a), Uj(a)
                }
            }
        };

    function Tj(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Ij && (a.Nb = Vj())
    }

    function Sj() {
        var a = {};
        Ld((a.ad_storage = "denied", a.wait_for_update = Lj, a))
    }
    var Rj = function() {
        var a = !1;
        a = !0;
        return a
    };

    function Vj() {
        var a = {},
            b;
        for (b in Jj) Jj.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Uj(a) {
        var b = {};
        Md((b.ad_storage = a.Nb["1"] ? "granted" : "denied", b))
    }
    var Xj = function() {
            var a = Nj();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        Yj = function() {
            var a = Nj();
            return a.active ? a.tcString || "" : ""
        },
        Zj = function() {
            var a = Nj();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        ak = function(a) {
            if (!Jj.hasOwnProperty(String(a))) return !0;
            var b = Nj();
            return b.active && b.Nb ? !!b.Nb[String(a)] : !0
        };
    var bk = !1;

    function ck(a) {
        var b = String(G.location).split(/[?#]/)[0],
            c = He.Bf || G._CONSENT_MODE_SALT;
        return a ? c ? String(lf(b + a + c)) : "0" : ""
    }

    function dk(a) {
        function b(t) {
            var v;
            L.reported_gclid || (L.reported_gclid = {});
            v = L.reported_gclid;
            var x;
            x = bk && h && (!Ed() || Nd(C.B)) ? l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs") : l + (t ? "gcu" : "gcs");
            if (!v[x]) {
                v[x] = !0;
                var z = [],
                    w = {},
                    y = function(N, P) {
                        P && (z.push(N + "=" + encodeURIComponent(P)), w[N] = !0)
                    },
                    A = "https://www.google.com";
                if (Ed()) {
                    var B = Nd(C.B);
                    y("gcs", Od());
                    t && y("gcu", "1");
                    L.dedupe_gclid ||
                        (L.dedupe_gclid = "" + Df());
                    y("rnd", L.dedupe_gclid);
                    if ((!l || n && "aw.ds" !== n) && Nd(C.B)) {
                        var F = Cg("_gcl_aw");
                        y("gclaw", F.join("."))
                    }
                    y("url", String(G.location).split(/[?#]/)[0]);
                    y("dclid", ek(d, q));
                    var E = !1;
                    E = !0;
                    B || !d && !E || (A = "https://pagead2.googlesyndication.com")
                }
                y("gdpr_consent", Yj()), y("gdpr", Zj());
                "1" === kg(!1)._up && y("gtm_up", "1");
                y("gclid", ek(d, l));
                y("gclsrc", n);
                y("gtm", uj(!e));
                bk && h && Nd(C.B) && (Pf(f || {}), y("auid", Kf[Lf(f.prefix)] || ""));
                var M = A + "/pagead/landing?" + z.join("&");
                qd(M)
            }
        }
        var c = !!a.nd,
            d = !!a.la,
            e = a.R,
            f = void 0 === a.oc ? {} : a.oc,
            h = void 0 === a.xc ? !0 : a.xc,
            k = Ig(),
            l = k.gclid || "",
            n = k.gclsrc,
            q = k.dclid || "",
            p = k.gbraid || "",
            r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || p),
            u = Ed();
        if (r || u) u ? Pd(function() {
            b();
            Nd(C.B) || Id(function(t) {
                return b(!0, t.Te)
            }, C.B)
        }, [C.B]) : b()
    }

    function ek(a, b) {
        var c = a && !Nd(C.B);
        return b && c ? "0" : b
    }
    var Ok = function() {
            var a = !0;
            ak(7) && ak(9) && ak(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !Nk() && (a = !1);
            return a
        },
        Nk = function() {
            var a = !0;
            ak(3) && ak(4) || (a = !1);
            return a
        };
    var jl = !1;

    function kl() {
        var a = L;
        return a.gcq = a.gcq || new ll
    }
    var ml = function(a, b, c) {
            kl().register(a, b, c)
        },
        nl = function(a, b, c, d) {
            kl().push("event", [b, a], c, d)
        },
        ol = function(a, b) {
            kl().push("config", [a], b)
        },
        pl = function(a, b, c, d) {
            kl().push("get", [a, b], c, d)
        },
        ql = {},
        rl = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = null;
            this.m = !1
        },
        sl = function(a, b, c, d, e) {
            this.type = a;
            this.C = b;
            this.R = c || "";
            this.m = d;
            this.o = e
        },
        ll = function() {
            this.H = {};
            this.o = {};
            this.m = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        },
        tl = function(a, b) {
            var c = ch(b);
            return a.H[c.containerId] =
                a.H[c.containerId] || new rl
        },
        ul = function(a, b, c) {
            if (b) {
                var d = ch(b);
                if (d && 1 === tl(a, b).status) {
                    tl(a, b).status = 2;
                    var e = {};
                    Ki && (e.timeoutId = G.setTimeout(function() {
                        D(38);
                        wi()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    ql[d.containerId] = Xa();
                    if (fh()) {} else {
                        var h =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                            k = ("http:" != G.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + h),
                            l = ej(c, h) || k;
                        gd(l)
                    }
                }
            }
        },
        vl = function(a, b, c, d) {
            if (d.R) {
                var e = tl(a, d.R),
                    f = e.o;
                if (f) {
                    var h = m(c),
                        k = m(e.targetConfig[d.R]),
                        l = m(e.containerConfig),
                        n = m(e.remoteConfig),
                        q = m(a.o),
                        p = $e("gtm.uniqueEventId"),
                        r = ch(d.R).prefix,
                        u = oj(nj(pj(mj(lj(kj(jj(ij(hj(h), k), l), n), q), function() {
                            Ni(p, r, "2");
                        }), function() {
                            Ni(p, r, "3");
                        }), function(t, v) {
                            a.C[t] = v
                        }), function(t) {
                            return a.C[t]
                        });
                    try {
                        Ni(p, r, "1");
                        f(d.R, b, d.C, u)
                    } catch (t) {
                        Ni(p, r, "4");
                    }
                }
            }
        };
    aa = ll.prototype;
    aa.register = function(a, b, c) {
        var d = tl(this, a);
        if (3 !== d.status) {
            d.o = b;
            d.status = 3;
            if (c) {
                m(d.remoteConfig, c);
                d.remoteConfig = c
            }
            var e = ch(a),
                f = ql[e.containerId];
            if (void 0 !== f) {
                var h = L[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                L[e.containerId]._spx && (k = k.toLowerCase());
                var l = $e("gtm.uniqueEventId"),
                    n = k,
                    q = Xa() - h;
                if (Ki && !Bi[l]) {
                    l !== xi && (ti(), xi = l);
                    var p = n + "." + Math.floor(h - f) +
                        "." + Math.floor(q);
                    Fi = Fi ? Fi + "," + p : "&cl=" + p
                }
                delete ql[e.containerId]
            }
            this.flush()
        }
    };
    aa.push = function(a, b, c, d) {
        var e = Math.floor(Xa() / 1E3);
        ul(this, c, b[0][C.Ca] || this.o[C.Ca]);
        jl && c && tl(this, c).m && (d = !1);
        this.m.push(new sl(a, e, c, b, d));
        d || this.flush()
    };
    aa.insert = function(a, b, c) {
        var d = Math.floor(Xa() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new sl(a, d, c, b, !1)) : this.m.push(new sl(a, d, c, b, !1))
    };
    aa.flush = function(a) {
        for (var b = this, c = [], d = !1; this.m.length;) {
            var e = this.m[0];
            if (e.o) jl ? !e.R || tl(this, e.R).m ? (e.o = !1, this.m.push(e)) : c.push(e) : (e.o = !1, this.m.push(e));
            else switch (e.type) {
                case "require":
                    if (3 !== tl(this, e.R).status && !a) {
                        jl && this.m.push.apply(this.m, c);
                        return
                    }
                    Ki && G.clearTimeout(e.m[0].timeoutId);
                    break;
                case "set":
                    Na(e.m[0], function(r, u) {
                        m(hb(r, u), b.o)
                    });
                    break;
                case "config":
                    var f = e.m[0],
                        h = !!f[C.bc];
                    delete f[C.bc];
                    var k = tl(this, e.R),
                        l = ch(e.R),
                        n = l.containerId === l.id;
                    h || (n ? k.containerConfig = {} : k.targetConfig[e.R] = {});
                    k.m && h || vl(this, C.Z, f, e);
                    k.m = !0;
                    delete f[C.yb];
                    n ? m(f, k.containerConfig) : m(f, k.targetConfig[e.R]);
                    jl && (d = !0);
                    break;
                case "event":
                    vl(this, e.m[1], e.m[0], e);
                    break;
                case "get":
                    var q = {},
                        p = (q[C.Aa] = e.m[0], q[C.za] = e.m[1], q);
                    vl(this, C.na, p, e)
            }
            this.m.shift()
        }
        jl && (this.m.push.apply(this.m, c), d && this.flush())
    };
    aa.getRemoteConfig = function(a) {
        return tl(this, a).remoteConfig
    };
    var wl = function(a, b, c) {
            function d(f, h) {
                var k = f[h];
                k = rd(f, h);
                return k
            }
            var e = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": d(a, "className"),
                "gtm.elementId": a["for"] || md(a, "id") || "",
                "gtm.elementTarget": a.formTarget || d(a, "target") || ""
            };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        xl = function(a) {
            L.hasOwnProperty("autoEventsSettings") || (L.autoEventsSettings = {});
            var b = L.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        yl = function(a, b, c) {
            xl(a)[b] = c
        },
        zl = function(a, b, c, d) {
            var e = xl(a),
                f = Za(e, b, d);
            e[b] = c(f)
        },
        Al = function(a, b, c) {
            var d = xl(a);
            return Za(d, b, c)
        };
    var Bl = !!G.MutationObserver,
        Cl = void 0,
        Dl = function(a) {
            if (!Cl) {
                var b = function() {
                    var c = H.body;
                    if (c)
                        if (Bl)(new MutationObserver(function() {
                            for (var e = 0; e < Cl.length; e++) I(Cl[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            kd(c, "DOMNodeInserted", function() {
                                d || (d = !0, I(function() {
                                    d = !1;
                                    for (var e = 0; e < Cl.length; e++) I(Cl[e])
                                }))
                            })
                        }
                };
                Cl = [];
                H.body ? b() : I(b)
            }
            Cl.push(a)
        };
    var Fl = !1,
        Gl = [];

    function Hl() {
        if (!Fl) {
            Fl = !0;
            for (var a = 0; a < Gl.length; a++) I(Gl[a])
        }
    }
    var Il = function(a) {
        Fl ? I(a) : Gl.push(a)
    };
    var Jl = "HA GF G UA AW DC".split(" "),
        Kl = !1,
        Ll = {},
        Ml = !1;

    function Nl(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = m(b), b[C.Qc] && (c.eventCallback = b[C.Qc]), b[C.Wb] && (c.eventTimeout = b[C.Wb]));
        return c
    }

    function Ol() {
        return Kl
    }
    var Rl = {
            config: function(a) {
                var b;
                return b
            },
            consent: function(a) {
                function b() {
                    Ol() &&
                        m(a[2], {
                            subcommand: a[1]
                        })
                }
                if (3 === a.length) {
                    D(39);
                    var c = Ue(),
                        d = a[1];
                    "default" === d ? (b(), Ld(a[2])) : "update" === d && (b(), Md(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && g(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!nb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = Nl(b, c);
                    return d
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) return Ml = !0, Ol(), {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && nb(a[1]) ? b = m(a[1]) : 3 == a.length && g(a[1]) && (b = {}, nb(a[2]) || Fa(a[2]) ? b[a[1]] = m(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        Sl = {
            policy: !0
        };
    var Tl = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        Vl = function(a) {
            var b = Ul(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var nm = function(a) {
        if (mm(a)) return a;
        this.m = a
    };
    nm.prototype.Xg = function() {
        return this.m
    };
    var mm = function(a) {
        return !a || "object" !== kb(a) || nb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    nm.prototype.getUntrustedUpdateValue = nm.prototype.Xg;
    var om = [],
        pm = !1,
        qm = !1,
        rm = !1,
        sm = function(a) {
            return G["dataLayer"].push(a)
        },
        tm = function(a) {
            var b = L["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function() {
                ++d === c && a()
            }
        };

    function um(a) {
        var b = a._clear;
        Na(a, function(d, e) {
            "_clear" !== d && (b && cf(d, void 0), cf(d, e))
        });
        Pe || (Pe = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Ue(), a["gtm.uniqueEventId"] = c, cf("gtm.uniqueEventId", c));
        return cj(a)
    }

    function vm() {
        var a = om[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Oa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function wm() {
        for (var a = !1; !rm && 0 < om.length;) {
            var b = !1;
            if (b && !qm && vm()) {
                var c = {};
                om.unshift((c.event =
                    "gtm.init", c));
                qm = !0
            }
            var d = !1;
            if (d && !pm && vm()) {
                var e = {};
                om.unshift((e.event = "gtm.init_consent", e));
                pm = !0
            }
            rm = !0;
            delete Xe.eventModel;
            Ze();
            var f = om.shift();
            if (null != f) {
                var h = mm(f);
                if (h) {
                    var k = f;
                    f = mm(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (var l = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], n = 0; n < l.length; n++) {
                        var q = l[n],
                            p = $e(q, 1);
                        if (Fa(p) || nb(p)) p = m(p);
                        Ye[q] = p
                    }
                }
                try {
                    if (Ca(f)) try {
                        f.call(af)
                    } catch (y) {} else if (Fa(f)) {
                        var r = f;
                        if (g(r[0])) {
                            var u = r[0].split("."),
                                t = u.pop(),
                                v = r.slice(1),
                                x = $e(u.join("."), 2);
                            if (void 0 !== x && null !== x) try {
                                x[t].apply(x, v)
                            } catch (y) {}
                        }
                    } else {
                        if (Oa(f)) {
                            a: {
                                var z = f;
                                if (z.length && g(z[0])) {
                                    var w = Rl[z[0]];
                                    if (w && (!h || !Sl[z[0]])) {
                                        f =
                                            w(z);
                                        break a
                                    }
                                }
                                f = void 0
                            }
                            if (!f) {
                                rm = !1;
                                continue
                            }
                        }
                        a = um(f) || a
                    }
                } finally {
                    h && Ze(!0)
                }
            }
            rm = !1
        }
        return !a
    }

    function xm() {
        var a = wm();
        try {
            Tl(G["dataLayer"], He.D)
        } catch (b) {}
        return a
    }
    var zm = function() {
            var a = ed("dataLayer", []),
                b = ed("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Th(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Il(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < L.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new nm(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var h = c.apply(a, e);
                om.push.apply(om, e);
                if (300 <
                    this.length)
                    for (D(4); 300 < this.length;) this.shift();
                var k = "boolean" !== typeof h || h;
                return wm() && k
            };
            var d = a.slice(0);
            om.push.apply(om, d);
            ym() && I(xm)
        },
        ym = function() {
            var a = !0;
            return a
        };
    var Am = {};
    Am.cc = new String("undefined");
    var Bm = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Am.cc ? b : a[d]);
            return c.join("")
        }
    };
    Bm.prototype.toString = function() {
        return this.m("undefined")
    };
    Bm.prototype.valueOf = Bm.prototype.toString;
    Am.wg = Bm;
    Am.hd = {};
    Am.Kg = function(a) {
        return new Bm(a)
    };
    var Cm = {};
    Am.vh = function(a, b) {
        var c = Ue();
        Cm[c] = [a, b];
        return c
    };
    Am.Ve = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Cm[c];
            if (d && "function" === typeof d[b]) d[b]();
            Cm[c] = void 0
        }
    };
    Am.bh = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Am.qh = function(a) {
        if (a === Am.cc) return a;
        var b = Ue();
        Am.hd[b] = a;
        return 'google_tag_manager["' + He.D + '"].macro(' + b + ")"
    };
    Am.mh = function(a, b, c) {
        a instanceof Am.wg && (a = a.m(Am.vh(b, c)), b = Ba);
        return {
            Yg: a,
            onSuccess: b
        }
    };
    var Dm = ["input", "select", "textarea"],
        Em = ["button", "hidden", "image", "reset", "submit"],
        Fm = function(a) {
            var b = a.tagName.toLowerCase();
            return !Ia(Dm, function(c) {
                return c === b
            }) || "input" === b && Ia(Em, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        Gm = function(a) {
            return a.form ? a.form.tagName ? a.form : H.getElementById(a.form) : pd(a, ["form"], 100)
        },
        Hm = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (Fm(h)) {
                    if (h.getAttribute(c) === d) return f;
                    f++
                }
            }
            return 0
        };
    var Sm = G.clearTimeout,
        Tm = G.setTimeout,
        O = function(a, b, c) {
            if (fh()) {
                b && I(b)
            } else return gd(a, b, c)
        },
        Um = function() {
            return new Date
        },
        Vm = function() {
            return G.location.href
        },
        Wm = function(a) {
            return ie(ke(a), "fragment")
        },
        Xm = function(a) {
            return je(ke(a))
        },
        Ym = function(a, b) {
            return $e(a, b || 2)
        },
        Zm = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = sm(a)) : d = sm(a);
            return d
        },
        $m = function(a, b) {
            G[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === G[a] || c && !G[a]) && (G[a] = b);
            return G[a]
        },
        an = function(a, b, c) {
            return of(a, b, void 0 === c ? !0 : !!c)
        },
        bn = function(a, b, c) {
            return 0 === Af(a, b, c)
        },
        cn = function(a, b) {
            if (fh()) {
                b && I(b)
            } else id(a, b)
        },
        dn = function(a) {
            return !!Al(a, "init", !1)
        },
        en = function(a) {
            yl(a, "init", !0)
        },
        fn = function(a, b) {
            var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Ne;
            c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            O(hh("https://", "http://", c))
        },
        gn = function(a,
            b) {
            var c = a[b];
            c = rd(a, b);
            return c
        },
        hn = function(a, b, c) {
            Ki && (qb(a) || Oi(c, b, a))
        };
    var jn = Am.mh;

    function Gn(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Hn = new La;

    function In(a, b) {
        function c(h) {
            var k = ke(h),
                l = ie(k, "protocol"),
                n = ie(k, "host", !0),
                q = ie(k, "port"),
                p = ie(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == q || "https" == l && "443" == q) l = "web", q = "default";
            return [l, n, q, p]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Jn(a) {
        return Kn(a) ? 1 : 0
    }

    function Kn(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Fa(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = m(a, {});
                m({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Jn(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var h = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var k = 0; k < h.length; k++)
                                if (b[h[k]]) {
                                    f = b[h[k]](c);
                                    break a
                                }
                        } catch (u) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Gn(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return 0 <= Ga(l, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var n;
                var q = a.ignore_case ? "i" : void 0;
                try {
                    var p = String(c) + q,
                        r = Hn.get(p);
                    r || (r = new RegExp(c, q), Hn.set(p, r));
                    n = r.test(b)
                } catch (u) {
                    n = !1
                }
                return n;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return In(b, c)
        }
        return !1
    };
    var Ln = encodeURI,
        X = encodeURIComponent,
        Mn = jd;
    var Nn = function(a, b) {
        if (!a) return !1;
        var c = ie(ke(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var On = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function up() {
        return G.gaGlobal = G.gaGlobal || {}
    }
    var vp = function() {
            var a = up();
            a.hid = a.hid || Ja();
            return a.hid
        },
        wp = function(a, b) {
            var c = up();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var gq = window,
        hq = document,
        iq = function(a) {
            var b = gq._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === gq["ga-disable-" + a]) return !0;
            try {
                var c = gq.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = mf("AMP_TOKEN", String(hq.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return hq.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var jq = {};

    function lq(a) {
        delete a.eventModel[C.yb];
        nq(a.eventModel)
    }
    var nq = function(a) {
        Na(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[C.qa] || {};
        Na(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var qq = function(a, b, c) {
            nl(b, c, a)
        },
        rq = function(a, b, c) {
            nl(b, c, a, !0)
        },
        xq = function(a, b) {};

    function sq(a, b) {}
    var Z = {
        g: {}
    };
    Z.g.gaawc = ["google"],
        function() {
            function a(b, c, d) {
                for (var e = 0; e < c.length; e++) b.hasOwnProperty(c[e]) && (b[c[e]] = d(b[c[e]]))
            }(function(b) {
                Z.__gaawc = b;
                Z.__gaawc.h = "gaawc";
                Z.__gaawc.i = !0;
                Z.__gaawc.priorityOverride = 10
            })(function(b) {
                var c = String(b.vtp_measurementId),
                    d = On(b.vtp_fieldsToSet, "name", "value") || {};
                if (d.hasOwnProperty(C.qa) || b.vtp_userProperties) {
                    var e = d[C.qa] || {};
                    m(On(b.vtp_userProperties, "name", "value"), e);
                    d[C.qa] = e
                }
                a(d, C.Ae, function(f) {
                    return Sa(f)
                });
                a(d, C.Ce, function(f) {
                    return Number(f)
                });
                d.send_page_view = b.vtp_sendPageView;
                ol(d, c);
                I(b.vtp_gtmOnSuccess)
            })
        }();
    Z.g.gaawe = ["google"],
        function() {
            function a(d, e, f) {
                for (var h = 0; h < e.length; h++) d.hasOwnProperty(e[h]) && (d[e[h]] = f(d[e[h]]))
            }

            function b(d, e, f) {
                var h = {
                        id: "transaction_id",
                        revenue: "value",
                        list: "item_list_name"
                    },
                    k = {
                        click: C.Lc,
                        detail: C.ya,
                        add: C.Ua,
                        remove: C.Va,
                        checkout: C.Ja,
                        checkout_option: "checkout_option",
                        purchase: C.ma,
                        refund: C.Wa
                    },
                    l = {},
                    n = function(u, t) {
                        l[u] = l[u] || t
                    },
                    q = function(u, t, v) {
                        v = void 0 === v ? !1 : v;
                        c.push(6);
                        if (u) {
                            l.items = l.items || [];
                            for (var x = {}, z = 0; z < u.length; x = {
                                    Ra: x.Ra
                                }, z++) x.Ra = {}, Na(u[z], function(y) {
                                return function(A,
                                    B) {
                                    v && "id" === A ? y.Ra.promotion_id = B : v && "name" === A ? y.Ra.promotion_name = B : y.Ra[A] = B
                                }
                            }(x)), l.items.push(x.Ra)
                        }
                        if (t)
                            for (var w in t) h.hasOwnProperty(w) ? n(h[w], t[w]) : n(w, t[w])
                    },
                    p;
                "dataLayer" === d.vtp_getEcommerceDataFrom ? (p = ef(d.vtp_gtmEventId, "eventModel")) || (p = ef(d.vtp_gtmEventId, "ecommerce")) : p = d.vtp_ecommerceMacroData;
                if (nb(p)) {
                    c.push(5);
                    for (var r in p) p.hasOwnProperty(r) && ("currencyCode" === r ? n("currency", p.currencyCode) : "impressions" === r && e === C.Tb ? q(p.impressions, null) : "promoClick" === r && e === C.Xd ? q(p.promoClick.promotions,
                        p.promoClick.actionField, !0) : "promoView" === r && e === C.Yd ? q(p.promoView.promotions, p.promoView.actionField, !0) : k.hasOwnProperty(r) ? e === k[r] && q(p[r].products, p[r].actionField) : l[r] = p[r]);
                    m(l, f)
                }
            }
            var c = [];
            (function(d) {
                Z.__gaawe = d;
                Z.__gaawe.h = "gaawe";
                Z.__gaawe.i = !0;
                Z.__gaawe.priorityOverride = 0
            })(function(d) {
                var e = String(d.vtp_measurementIdOverride || d.vtp_measurementId),
                    f = String(d.vtp_eventName);
                if ("_" === f.charAt(0)) I(d.vtp_gtmOnFailure);
                else {
                    var h = {};
                    c = [];
                    d.vtp_sendEcommerceData && (0 <= C.Be.indexOf(f) || "checkout_option" ===
                        f) && b(d, f, h);
                    var k = On(d.vtp_eventParameters, "name", "value"),
                        l;
                    for (l in k) k.hasOwnProperty(l) && (h[l] = k[l]);
                    if (h.hasOwnProperty(C.qa) || d.vtp_userProperties) {
                        var n = h[C.qa] || {};
                        m(On(d.vtp_userProperties, "name", "value"), n);
                        h[C.qa] = n
                    }
                    nq(h);
                    0 < c.length && (h[C.cd] = c);
                    a(h, C.Ae, function(q) {
                        return Sa(q)
                    });
                    a(h, C.Ce, function(q) {
                        return Number(q)
                    });
                    nl(f, h, e);
                    I(d.vtp_gtmOnSuccess)
                }
            })
        }();


    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.i = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(ef(a.vtp_gtmEventId, "event"))
            })
        }();
    Z.g.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.h = "f";
                Z.__f.i = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Ym("gtm.referrer", 1) || H.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? ie(ke(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Xm(String(b)) : String(b)
            })
        }();

    Z.g.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.h = "u";
                Z.__u.i = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Ym("gtm.url", 1)) || Vm();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Xm(String(c));
                var e = ke(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? Fa(k) ? n = k : n = String(k).replace(/\s+/g,
                        "").split(",") : n = [String(k)];
                    for (var q = 0; q < n.length; q++) {
                        var p = ie(e, "QUERY", void 0, void 0, n[q]);
                        if (void 0 != p && (!l || "" !== p)) {
                            f = p;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = ie(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.i = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Ym(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                hn(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.g.ua = ["google"],
        function() {
            function a(p) {
                return Nd(p)
            }

            function b(p, r) {
                var u = !1;
                if (Ed() && !u && !e[p]) {
                    var t = function() {
                        var v = fi(),
                            x = "gtm" + Ue(),
                            z = n(r),
                            w = {
                                name: x
                            };
                        l(z, w, !0);
                        v("create", p, w);
                        v(function() {
                            v.remove(x)
                        })
                    };
                    Id(t, C.J);
                    Id(t, C.B);
                    e[p] = !0
                }
            }
            var c, d = {},
                e = {},
                f = {
                    name: !0,
                    clientId: !0,
                    sampleRate: !0,
                    siteSpeedSampleRate: !0,
                    alwaysSendReferrer: !0,
                    allowAnchor: !0,
                    allowLinker: !0,
                    cookieName: !0,
                    cookieDomain: !0,
                    cookieExpires: !0,
                    cookiePath: !0,
                    cookieUpdate: !0,
                    cookieFlags: !0,
                    legacyCookieDomain: !0,
                    legacyHistoryImport: !0,
                    storage: !0,
                    useAmpClientId: !0,
                    storeGac: !0,
                    _cd2l: !0,
                    _useUp: !0,
                    _cs: !0
                },
                h = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                k = {
                    urlPassthrough: !0
                },
                l = function(p, r, u) {
                    var t = 0;
                    if (p)
                        for (var v in p)
                            if (!k[v] && p.hasOwnProperty(v) && (u && f[v] || !u && void 0 === f[v])) {
                                var x = h[v] ? Sa(p[v]) : p[v];
                                "anonymizeIp" != v || x || (x = void 0);
                                r[v] = x;
                                t++
                            }
                    return t
                },
                n = function(p) {
                    var r = {};
                    p.vtp_gaSettings && m(On(p.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), r);
                    m(On(p.vtp_fieldsToSet, "fieldName", "value"), r);
                    Nd(C.J) || (r.storage = "none");
                    Nd(C.B) || (r.allowAdFeatures = !1, r.storeGac = !1);
                    Ok() || (r.allowAdFeatures = !1);
                    Nk() || (r.allowAdPersonalizationSignals = !1);
                    p.vtp_transportUrl &&
                        (r._x_19 = p.vtp_transportUrl);
                    return r
                },
                q = function(p) {
                    function r(ea, U) {
                        void 0 !== U && E("set", ea, U)
                    }
                    var u = {},
                        t = {},
                        v = {},
                        x = {};
                    if (p.vtp_gaSettings) {
                        var z = p.vtp_gaSettings;
                        m(On(z.vtp_contentGroup, "index", "group"), t);
                        m(On(z.vtp_dimension, "index", "dimension"), v);
                        m(On(z.vtp_metric, "index", "metric"), x);
                        var w = m(z);
                        w.vtp_fieldsToSet = void 0;
                        w.vtp_contentGroup = void 0;
                        w.vtp_dimension = void 0;
                        w.vtp_metric = void 0;
                        p = m(p, w)
                    }
                    m(On(p.vtp_contentGroup, "index", "group"), t);
                    m(On(p.vtp_dimension, "index", "dimension"), v);
                    m(On(p.vtp_metric, "index", "metric"), x);
                    var y =
                        n(p),
                        A = hi(p.vtp_functionName);
                    if (Ca(A)) {
                        var B = "",
                            F = "";
                        p.vtp_setTrackerName && "string" == typeof p.vtp_trackerName ? "" !== p.vtp_trackerName && (F = p.vtp_trackerName, B = F + ".") : (F = "gtm" + Ue(), B = F + ".");
                        var E = function(ea) {
                                var U = [].slice.call(arguments, 0);
                                U[0] = B + U[0];
                                A.apply(window, U)
                            },
                            J = function(ea, U) {
                                return void 0 === U ? U : ea(U)
                            },
                            M = function(ea, U) {
                                if (U)
                                    for (var Ka in U) U.hasOwnProperty(Ka) && E("set", ea + Ka, U[Ka])
                            },
                            N = function() {
                                var ea = {
                                        transaction_id: "id",
                                        affiliation: "affiliation",
                                        value: "revenue",
                                        tax: "tax",
                                        shipping: "shipping",
                                        coupon: "coupon",
                                        item_list_name: "list"
                                    },
                                    U = {},
                                    Ka = (U[C.Lc] = "click", U[C.ya] = "detail", U[C.Ua] = "add", U[C.Va] = "remove", U[C.Ja] = "checkout", U[C.ma] = "purchase", U[C.Wa] = "refund", U),
                                    Lb = {
                                        item_id: "id",
                                        item_name: "name",
                                        item_list_name: "list",
                                        item_brand: "brand",
                                        item_category: "category",
                                        item_variant: "variant",
                                        index: "position",
                                        promotion_id: "id",
                                        promotion_name: "name",
                                        creative_name: "creative",
                                        creative_slot: "position"
                                    },
                                    Mb = function(Ta, ab) {
                                        for (var Ua in Ta) ea.hasOwnProperty(Ua) &&
                                            (Ta[ab] = Ta[ab] || {}, Ta[ab].actionField = Ta[ab].actionField || {}, Ta[ab].actionField[ea[Ua]] = Ta[Ua])
                                    },
                                    ob = function(Ta) {
                                        for (var ab = [], Ua = {}, bb = 0; bb < Ta.length; Ua = {
                                                mb: Ua.mb
                                            }, bb++) Ua.mb = {}, Na(Ta[bb], function(Bb) {
                                            return function(tc, qf) {
                                                Lb.hasOwnProperty(tc) ? Bb.mb[Lb[tc]] = qf : Bb.mb[tc] = qf
                                            }
                                        }(Ua)), ab.push(Ua.mb);
                                        return ab
                                    },
                                    Qa = function(Ta, ab, Ua) {
                                        if (!nb(ab)) return !1;
                                        for (var bb = Za(Object(ab), Ua, []), Bb = 0; bb && Bb < bb.length; Bb++) E(Ta, bb[Bb]);
                                        return !!bb && 0 < bb.length
                                    },
                                    S;
                                if (p.vtp_useEcommerceDataLayer) {
                                    var gb = !1;
                                    p.vtp_useGA4SchemaForEcommerce &&
                                        (S = ef(p.vtp_gtmEventId, "eventModel"), gb = !!S);
                                    gb || (S = Ym("ecommerce", 1))
                                } else p.vtp_ecommerceMacroData && (S = p.vtp_ecommerceMacroData.ecommerce, !S && p.vtp_useGA4SchemaForEcommerce && (S = p.vtp_ecommerceMacroData));
                                if (!nb(S)) return;
                                S = Object(S);
                                if (p.vtp_useGA4SchemaForEcommerce) {
                                    S = m(S);
                                    S.currencyCode = S.currencyCode || S.currency;
                                    var pb = String(ef(p.vtp_gtmEventId,
                                        "event"));
                                    if ("view_item_list" === pb && !S.impressions && S.items) S.impressions = ob(S.items);
                                    else if ("view_promotion" === pb && !S.promoView && S.items) S.promoView = {}, S.promoView.promotions = ob(S.items);
                                    else if ("select_promotion" === pb && !S.promoClick) S.items && (S.promoClick = {}, S.promoClick.promotions = ob(S.items)), Mb(S, "promoClick");
                                    else if (Ka.hasOwnProperty(pb)) {
                                        var ec = Ka[pb];
                                        S[ec] || (S.items && (S[ec] = {}, S[ec].products = ob(S.items)), Mb(S, ec))
                                    }
                                }
                                var $d = Za(y, "currencyCode", S.currencyCode);
                                void 0 !== $d && E("set", "&cu", $d);
                                Qa("ec:addImpression", S, "impressions");
                                if (Qa("ec:addPromo", S[S.promoClick ? "promoClick" : "promoView"], "promotions") && S.promoClick) {
                                    E("ec:setAction", "promo_click", S.promoClick.actionField);
                                    return
                                }
                                for (var Nc = "detail checkout checkout_option click add remove purchase refund".split(" "), pf = "refund purchase remove checkout checkout_option add click detail".split(" "), sc = 0; sc < Nc.length; sc++) {
                                    var Oc = S[Nc[sc]];
                                    if (Oc) {
                                        Qa("ec:addProduct", Oc, "products");
                                        E("ec:setAction", Nc[sc], Oc.actionField);
                                        if (Ki)
                                            for (var Pc =
                                                    0; Pc < pf.length; Pc++) {
                                                var fc = S[pf[Pc]];
                                                if (fc) {
                                                    fc !== Oc && D(13);
                                                    break
                                                }
                                            }
                                        break
                                    }
                                }
                            },
                            P = {
                                name: F
                            };
                        l(y, P, !0);
                        var ka = p.vtp_trackingId || u.trackingId;
                        A("create", ka, P);
                        E("set", "&gtm", uj(!0));
                        var Q = !1;
                        Ed() && !Q && (E("set", "&gcs", Od()), b(ka, p));
                        y._x_19 && (null == dd && delete y._x_19, y._x_20 && !d[F] && (d[F] = !0, A(mi(F, String(y._x_20)))));
                        p.vtp_enableRecaptcha && E("require", "recaptcha", "recaptcha.js");
                        (function(ea, U) {
                            void 0 !== p[U] && E("set", ea, p[U])
                        })("nonInteraction", "vtp_nonInteraction");
                        M("contentGroup", t);
                        M("dimension", v);
                        M("metric", x);
                        var K = {};
                        l(y, K, !1) && E("set", K);
                        var T;
                        p.vtp_enableLinkId && E("require", "linkid", "linkid.js");
                        E("set", "hitCallback", function() {
                            var ea = y && y.hitCallback;
                            Ca(ea) && ea();
                            p.vtp_gtmOnSuccess()
                        });
                        var V = function(ea, U) {
                            return void 0 === p[ea] ? u[U] : p[ea]
                        };
                        if ("TRACK_EVENT" == p.vtp_trackType) {
                            p.vtp_enableEcommerce && (E("require", "ec", "ec.js"), N());
                            var la = {
                                hitType: "event",
                                eventCategory: String(V("vtp_eventCategory", "category")),
                                eventAction: String(V("vtp_eventAction", "action")),
                                eventLabel: J(String,
                                    V("vtp_eventLabel", "label")),
                                eventValue: J(Pa, V("vtp_eventValue", "value"))
                            };
                            l(T, la, !1);
                            E("send", la);
                        } else if ("TRACK_SOCIAL" == p.vtp_trackType) {} else if ("TRACK_TRANSACTION" ==
                            p.vtp_trackType) {} else if ("TRACK_TIMING" == p.vtp_trackType) {} else if ("DECORATE_LINK" ==
                            p.vtp_trackType) {} else if ("DECORATE_FORM" == p.vtp_trackType) {} else if ("TRACK_DATA" == p.vtp_trackType) {} else {
                            p.vtp_enableEcommerce &&
                                (E("require", "ec", "ec.js"), N());
                            if (p.vtp_doubleClick || "DISPLAY_FEATURES" == p.vtp_advertisingFeaturesType) {
                                var Ha = "_dc_gtm_" + String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                E("require", "displayfeatures", void 0, {
                                    cookieName: Ha
                                })
                            }
                            if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == p.vtp_advertisingFeaturesType) {
                                var Ya = "_dc_gtm_" + String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                E("require", "adfeatures", {
                                    cookieName: Ya
                                })
                            }
                            T ? E("send", "pageview", T) : E("send", "pageview");
                            Sa(y.urlPassthrough) && ji(B)
                        }
                        if (!c) {
                            var eb = p.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                            p.vtp_useInternalVersion && !p.vtp_useDebugVersion && (eb = "internal/" + eb);
                            c = !0;
                            var xb = ej(y._x_19, "/analytics.js"),
                                Ra = hh("https:", "http:", "//www.google-analytics.com/" + eb, y && !!y.forceSSL);
                            O("analytics.js" === eb && xb ? xb : Ra, function() {
                                var ea =
                                    fi();
                                ea && ea.loaded || p.vtp_gtmOnFailure();
                            }, p.vtp_gtmOnFailure)
                        }
                    } else I(p.vtp_gtmOnFailure)
                };
            (function(p) {
                Z.__ua = p;
                Z.__ua.h = "ua";
                Z.__ua.i = !0;
                Z.__ua.priorityOverride = 0
            })(function(p) {
                Pd(function() {
                    q(p)
                }, [C.J, C.B])
            })
        }();






    Z.g.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"],
                b = !1;
            (function(c) {
                Z.__gclidw = c;
                Z.__gclidw.h = "gclidw";
                Z.__gclidw.i = !0;
                Z.__gclidw.priorityOverride = 100
            })(function(c) {
                I(c.vtp_gtmOnSuccess);
                var d, e, f, h;
                c.vtp_enableCookieOverrides && (f = c.vtp_cookiePrefix, d = c.vtp_path, e = c.vtp_domain, c.vtp_enableCookieFlagsFeature && (h = c.vtp_cookieFlags));
                var k = null;
                c.vtp_enableCookieUpdateFeature && (k = !0, void 0 !== c.vtp_cookieUpdate && (k = !!c.vtp_cookieUpdate));
                var l = {
                    prefix: f,
                    path: d,
                    domain: e,
                    flags: h
                };
                c.vtp_enableCrossDomainFeature && (c.vtp_enableCrossDomain && !1 === c.vtp_acceptIncoming || (c.vtp_enableCrossDomain || rg()) && Ng(a, l));
                Lg(l);
                Qg(["aw", "dc"], l);
                b ? Zg(k, l) : $g(k, l);
                var n = f;
                if (c.vtp_enableCrossDomainFeature && c.vtp_enableCrossDomain && c.vtp_linkerDomains) {
                    var q = c.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Pg(a, q, c.vtp_urlPosition, !!c.vtp_formDecoration, n)
                }
                var p = Ym(C.N);
                dk({
                    nd: !1,
                    la: void 0 !=
                        p && !1 !== p,
                    oc: l,
                    xc: !0
                });
                c.vtp_enableUrlPassthroughFeature && c.vtp_enableUrlPassthrough && Sg()
            });
        }();

    Z.g.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.h = "gas";
                Z.__gas.i = !0;
                Z.__gas.priorityOverride = 0
            })(function(a) {
                var b = m(a),
                    c = b;
                c[rb.Ma] = null;
                c[rb.mg] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();













    var yq = {};
    yq.macro = function(a) {
        if (Am.hd.hasOwnProperty(a)) return Am.hd[a]
    }, yq.onHtmlSuccess = Am.Ve(!0), yq.onHtmlFailure = Am.Ve(!1);
    yq.dataLayer = af;
    yq.callback = function(a) {
        Se.hasOwnProperty(a) && Ca(Se[a]) && Se[a]();
        delete Se[a]
    };
    yq.bootstrap = 0;
    yq._spx = !1;

    function zq() {
        L[He.D] = yq;
        cb(Te, Z.g);
        Zb = Zb || Am;
        $b = kc
    }

    function Aq() {
        sd.o().o();
        L = G.google_tag_manager = G.google_tag_manager || {};
        Wj();
        if (L[He.D]) {
            var a = L.zones;
            a && a.unregisterChild(He.D);
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Sb.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) Vb.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) Ub.push(h[k]);
            for (var l = b.rules || [], n = 0; n < l.length; n++) {
                for (var q = l[n], p = {}, r = 0; r < q.length; r++) p[q[r][0]] = Array.prototype.slice.call(q[r], 1);
                Tb.push(p)
            }
            Xb = Z;
            Yb = Jn;
            zq();
            zm();
            Kh = !1;
            Lh = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) Nh();
            else {
                kd(H, "DOMContentLoaded", Nh);
                kd(H, "readystatechange", Nh);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var u = !0;
                    try {
                        u = !G.frameElement
                    } catch (z) {}
                    u && Sh()
                }
                kd(G, "load", Nh)
            }
            Fl = !1;
            "complete" === H.readyState ? Hl() : kd(G, "load", Hl);
            a: {
                if (!Ki) break a;G.setInterval(Li,
                    864E5);
            }
            Qe = (new Date).getTime();
        }
    }
    (function(a) {
        if (!G["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = ke(H.referrer);
                b = "cct.google" === he(c, "host")
            }
            if (!b) {
                var d = of ("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (G["__TAGGY_INSTALLED"] = !0, gd("https://cct.google/taggy/agent.js"))
        }
        var f = function() {
                var p = G["google.tagmanager.debugui2.queue"];
                p || (p = [], G["google.tagmanager.debugui2.queue"] = p, gd("https://www.googletagmanager.com/debug/bootstrap"));
                return p
            },
            h = "x" === ie(G.location, "query", !1, void 0, "gtm_debug");
        if (!h && H.referrer) {
            var k = ke(H.referrer);
            h = "tagassistant.google.com" === he(k, "host")
        }
        if (!h) {
            var l = of ("__TAG_ASSISTANT");
            h = l.length && l[0].length
        }
        G.__TAG_ASSISTANT_API && (h = !0);
        if (h && dd) {
            var n = f(),
                q = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: dd,
                        resume: function() {
                            a()
                        }
                    }
                };
            He.Af && (q.data.initialPublish = !0);
            n.push(q)
        } else a()
    })(Aq);

})()