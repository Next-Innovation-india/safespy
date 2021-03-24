! function e(t, n, o) {
    function i(s, r) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!r && c) return c(s, !0);
                if (a) return a(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var l = n[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                var n = t[s][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, o)
        }
        return n[s].exports
    }
    for (var a = "function" == typeof require && require, s = 0; s < o.length; s++) i(o[s]);
    return i
}({
    1: [function(e, t, n) {
        "use strict";

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var i = {
                email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            a = {
                set: function(e, t, n) {
                    n || (n = 10);
                    var o = new Date,
                        i = n;
                    o.setTime(o.getTime() + 24 * i * 3600 * 1e3);
                    var a = document.domain.split(".").slice(-2).join(".");
                    document.cookie = e + "=" + t + ";domain=" + a + ";path=/;expires=" + o.toGMTString()
                },
                get: function(e) {
                    for (var t, n = document.cookie.replace(/[ ]/g, ""), o = n.split(";"), i = 0; i < o.length; i++) {
                        var a = o[i].split("=");
                        if (e == a[0]) {
                            t = a[1];
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
            s = location.pathname.indexOf("ios") > -1 ? "ios" : "android",
            r = location.pathname.match(/(\.com|\.biz|\.io)?\/([a-zA-Z\-]{1,5})\/(.*)$/),
            c = "";
        console.log(r, "match"), c = r && ["demo", "demo-ios", "control-panel", "control-panel-ios", "email"].indexOf(r[2]) === -1 ? "/" + r[2] : "";
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
                        o = n.getFullYear(),
                        i = ("00" + n.getDate()).slice(-2),
                        a = ("00" + (n.getMonth() + 1)).slice(-2),
                        s = ("00" + n.getHours()).slice(-2),
                        r = ("00" + n.getMinutes()).slice(-2),
                        c = ("00" + n.getSeconds()).slice(-2);
                    return [o, a, i].join(t) + " " + [s, r, c].join(":")
                },
                getLocalTimeNew: function(e) {
                    var t, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-", new Date(e)),
                        o = n.getFullYear(),
                        i = ("0" + (n.getMonth() + 1)).slice(-2),
                        a = ("0" + n.getDate()).slice(-2),
                        s = n.getHours(),
                        r = s,
                        c = ("0" + n.getMinutes()).slice(-2),
                        l = ("0" + n.getSeconds()).slice(-2),
                        d = "AM";
                    return s > 12 ? (r = s - 12, d = "PM") : 12 === s ? (r = 12, d = "PM") : 0 == s && (r = 12), r = ("0" + r).slice(-2), t = o + "-" + i + "-" + a + " " + r + ":" + c + ":" + l + d
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
                    window.userCredential = null, window.deviceList = [], window.selectDevice = null, a["delete"]("userCredential"), localStorage.clear(), setTimeout(function() {
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
        if (d && a.set("origin", d, 1), !window.userCredential) {
            window.userCredential = a.get("userCredential") || "{}";
            try {
                window.userCredential = JSON.parse(window.userCredential)
            } catch (u) {
                window.userCredential = {}
            }
        }
        var g = "https://i.safespy.com/api",
            p = {
                create: function(e) {
                    var t = e.title || "",
                        n = e.detail || "",
                        o = n ? "block" : "none",
                        i = e.desc || "",
                        a = i ? "block" : "none",
                        s = e.failure ? "none" : "block",
                        r = e.failure ? "block" : "none",
                        c = function() {
                            $("#success-alert").remove(), e.cancel && e.cancel()
                        },
                        l = function() {
                            $("#success-alert").remove()
                        },
                        d = function() {
                            $("#success-alert").remove(), e.confirm && e.confirm()
                        },
                        u = e.needCancel ? '<a href="javascript:;" class="w-btn cancel-btn ">Cancel</a>' : "",
                        g = e.noClose ? "" : '<i class="iconfont icon-ListClear close-btn"></i>',
                        p = '\n\t\t  <div class="alert-wrap" id="success-alert">\n\t\t\t<div class="alert">\n\t\t\t  <div class="alert-cont">\n\t\t\t    <div class="alert-header">\n\t\t\t      ' + g + '\n\t\t\t    </div>\n\t\t\t    <div class="alert-body">\n\t\t\t      <div class="alert-item">\n\t\t\t          <div class="alert-item-icon">\n\t\t\t            <i class="iconfont icon-finish" style="display: ' + s + '"></i>\n\t\t\t            <i class="iconfont" style="display: ' + r + '">⚠️</i>\n\t\t\t          </div>\n\t\t\t          <div class="alert-item-cont">\n\t\t\t            <div class="alert-title">' + t + '</div>\n\t\t\t            <p class="dec-center" style="display: ' + o + '">' + n + '</p>\n\t\t\t            <p class="deepblue-text" style="display: ' + a + '">' + i + '</p>\n\t\t\t            <div class="btn-wrapper">\n\t\t\t\t\t\t\t' + u + ',\n\t\t\t              <a href="javascript:;" class="a-btn confirm-btn">OK</a>\n\t\t\t            </div>\n\t\t\t          </div>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t</div>\n\t\t';
                    $("#success-alert").length && $("#success-alert").remove(), $("body").append(p), $("body").on("click", ".close-btn", l), $("body").on("click", ".cancel-btn", c), $("body").on("click", ".confirm-btn", d)
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
            m = {
                host: g,
                post: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    o = o || {};
                    var i = {};
                    return i = location.pathname.indexOf("demo") > -1 ? {
                        uid: -1,
                        token: "",
                        client_type: 1,
                        client_id: s + "_demo",
                        os_type: "android" == s ? 0 : 1,
                        version: "1"
                    } : {
                        uid: userCredential.uid || -1,
                        token: userCredential.token,
                        client_type: 1,
                        channel: d || a.get("origin"),
                        os_type: (window.selectDevice ? window.selectDevice.os_type : "android" === s ? 0 : 1) || 0,
                        client_id: window.selectDevice && selectDevice.device_id || "android_demo",
                        version: "1"
                    }, $.post({
                        url: m.host + e,
                        dataType: "json",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify({
                            head: i,
                            data: t
                        }),
                        method: "POST",
                        success: function(i) {
                            if (console.log(e + "请求响应：", JSON.stringify(i)), i.meta && 0 === i.meta.code) n && n(i);
                            else if (100 === i.meta.code) localStorage.clear(), a["delete"]("userCredential"), window.userCredential = {}, window.selectDevice = {}, window.deviceList = [], setTimeout(function() {
                                m.post(e, t, n)
                            }, 2e3);
                            else {
                                var s = i.meta && i.meta.message;
                                if (o.withoutDialog) console.log("不提示出错信息....."), n && n(i);
                                else {
                                    var s = i.meta && i.meta.message;
                                    p.create({
                                        failure: !0,
                                        title: s
                                    }), n && n(i)
                                }
                            }
                        }
                    })
                },
                signIn: function(e, t, n) {
                    m.post("/user/signin", {
                        username: e,
                        password: t
                    }, n)
                },
                signUp: function(e, t, n) {
                    m.post("/user/signup", {
                        username: e,
                        password: t
                    }, function(o) {
                        0 == o.meta.code ? m.signIn(e, t, function(e) {
                            window.userCredential = {
                                uid: e.data.uid,
                                token: e.data.token
                            }, a.set("userCredential", JSON.stringify(window.userCredential)), localStorage.clear(), window.selectDevice = {}, window.deviceList = [], m.getUserInfo(function(e) {
                                0 === e.meta.code && (window.userInfo = e.data, m.getDeviceList(function(t) {
                                    0 == t.meta.code && (window.deviceList = t.data.items, localStorage.setItem("deviceList", JSON.stringify(t.data.items)), n && n(e))
                                }))
                            })
                        }) : (f.close(), $("#commonErrorInfo").html(o.meta.message).show())
                    })
                },
                repairPassword: function(e, t, n, o) {
                    m.post("/user/repair_password", {
                        username: e,
                        password_code: t,
                        new_password: n
                    }, o)
                },
                forgetPassword: function(e, t) {
                    m.post("/user/forget_password", {
                        username: e
                    }, t)
                },
                checkIcloudPassword: function(e, t, n) {
                    m.post("/icloud/device_list", {
                        apple_id: e,
                        password: t
                    }, n)
                },
                chouseIcloudDevice: function(e, t) {
                    m.post("/icloud/choose", {
                        device: e
                    }, t)
                },
                getNotifications: function(e, t, n, o, i, a) {
                    m.post("/notification/get_list", {
                        page_num: e,
                        page_size: t,
                        package_name: n,
                        start_time: o,
                        end_time: i
                    }, a)
                },
                updateIcloudPassword: function(e, t, n) {
                    m.post("/icloud/update_password", {
                        apple_id: e,
                        new_password: t
                    }, n)
                },
                getDeviceList: function(e) {
                    m.post("/device_info/list", {}, e)
                },
                getApplicationList: function(e, t, n) {
                    m.post("/application/get_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getScore: function(e) {
                    m.post("/website_score/get", {}, e)
                },
                getActivityInfo: function(e) {
                    m.post("/activities/summary", {}, e)
                },
                addScore: function(e, t) {
                    m.post("/website_score/add", {
                        score: e
                    }, t)
                },
                getMessageList: function(e, t, n) {
                    m.post("/sms_info/get_thread_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getiMessageList: function(e, t, n) {
                    m.post("/imessage/get_thread_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getSocialList: function(e, t, n, o) {
                    m.post("/" + e + "/get_thread_list", {
                        page_num: t,
                        page_size: n
                    }, o)
                },
                getLocation: function(e) {
                    m.post("/device_info/latest_info", {}, e)
                },
                getDeviceConfig: function(e) {
                    m.post("/device_setting/get", {}, e)
                },
                setDeviceConfig: function(e, t) {
                    m.post("/device_setting/update", {
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
                getPictureList: function(e, t, n, o, i) {
                    m.post("/picture/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: o
                    }, i)
                },
                getVideoList: function(e, t, n, o, i) {
                    m.post("/video/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: o
                    }, i)
                },
                getLocationList: function(e, t, n, o, i) {
                    m.post("/location/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: o
                    }, i)
                },
                getContactList: function(e, t, n) {
                    m.post("/contact/get_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                getSubscriptionStatus: function(e) {
                    return m.post("/user/get_subscription", {}, e)
                },
                getUserInfo: function(e) {
                    m.post("/user/get_user_info", {}, e)
                },
                getPayInfo: function(e, t, n) {
                    m.post("/paypal/payment_info", {
                        pay_id: e
                    }, t, n)
                },
                getDiscountInfo: function(e, t) {
                    m.post("/product/promote", {
                        uuid: e
                    }, t)
                },
                changePassword: function(e, t, n, o) {
                    console.log(e, "-------"), m.post("/user/change_password", {
                        username: e,
                        old_password: t,
                        new_password: n
                    }, o)
                },
                getMessageByThread: function(e, t, n, o) {
                    m.post("/sms_info/get_thread_content", {
                        thread_id: e,
                        page_num: t,
                        page_size: n
                    }, o)
                },
                getiMessageByThread: function(e, t, n, o) {
                    m.post("/imessage/get_thread_content", {
                        contact: e,
                        page_num: t,
                        page_size: n
                    }, o)
                },
                getSocialByThread: function(e, t, n, i, a, s) {
                    var r;
                    m.post("/" + e + "/get_thread_content", (r = {}, o(r, t, n), o(r, "page_num", i), o(r, "page_size", a), r), s)
                },
                getCallData: function(e, t, n, o, i, a, s) {
                    m.post("/call_log/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: o,
                        keyword: i,
                        orderby: a
                    }, s)
                },
                getHistoryData: function(e, t, n, o, i, a, s) {
                    m.post("/browser_info/get_list", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: o,
                        keyword: i,
                        orderby: a
                    }, s)
                },
                getCalendarsData: function(e, t, n) {
                    m.post("/calendar/get_list", {
                        page_num: e,
                        page_size: t
                    }, n)
                },
                createStripePayOrder: function(e, t) {
                    return console.log(e), m.post("/stripe/checkout", e, t)
                },
                createPayOrder: function(e, t) {
                    return console.log("goods_id======" + e), m.post("/paypal/create_payment", {
                        goods_id: e
                    }, t)
                },
                executePay: function(e, t) {
                    return m.post("/paypal/execute_payment", {
                        pay_id: e,
                        payer_id: t
                    })
                },
                getAppDownload: function(e) {
                    return m.post("/apk/get_android_link", {}, e)
                },
                getSimcardInfo: function(e) {
                    return m.post("/sim_card/get_info", {}, e)
                },
                verifySimcardEmail: function(e, t) {
                    return m.post("/sim_card/verify_email", {
                        code: e
                    }, t)
                },
                sendSimcardCode: function(e) {
                    return m.post("/sim_card/send_code", {}, e)
                },
                addSimcardEmail: function(e, t) {
                    return m.post("/sim_card/update_email", {
                        email: e
                    }, t)
                },
                refreshData: function(e) {
                    return m.post("/device_info/refresh_data", {}, e)
                },
                getKeyloggerData: function(e) {
                    return m.post("/keylogger/get_package_list", {}, e)
                },
                getKeyloggerContent: function(e, t, n, o, i, a) {
                    return m.post("/keylogger/get_package_content", {
                        page_num: e,
                        page_size: t,
                        start_time: n,
                        end_time: o,
                        package_name: i
                    }, a)
                }
            },
            v = {
                transferLanguage: function(e) {
                    console.log("语言跳转:" + e);
                    var t = !c;
                    if (t)
                        if ("en" != e)
                            if (/\.html/.test(location.href)) {
                                var n = location.pathname.replace(/^\/(spy)?\//, "$1" + e + "/");
                                location.href = n
                            } else location.href = location.href.replace(/\/$/, "") + "/" + e + "/";
                    else $("#language-select").dropdown("toggle");
                    else if ("en" == e) {
                        var o = location.pathname.replace(/^(\/(spy)?)\w{2}\//, "$1");
                        location.href = o
                    } else {
                        var i = location.pathname.replace(/^(\/(spy)?)(\w{2}\/)/, "$1" + e + "/");
                        location.href = i
                    }
                }
            },
            h = {
                deviceRefurbish: function(e) {
                    $(".btn_sync").on("click", function(e) {
                        $(".btn_sync").addClass("rotate-infinite"), $(".text_sync").show(), $(".text_sync_time").hide(), h.getDeviceList();
                        var t = new Date,
                            n = t.toDateString().replace(/^[^\s]+\s+/, ""),
                            t = t.toTimeString().replace(/\s+.*$/, "");
                        $("#sync_time").html(n + " " + t), m.refreshData(function(e) {})
                    })
                },
                changeSelectDevice: function(e) {
                    if (!window.deviceList.length) return console.log("没有设备...."), !1;
                    var t = +e.attr("index");
                    window.selectDevice = window.deviceList[t], window.localStorage.setItem("selectDevice", window.selectDevice.device_id), e.children("a").addClass("active"), e.siblings().children("a").removeClass("active"), $("#asideMenu").slideDown(), $("#deviceBox").slideUp(), $("#select-device").html(window.selectDevice.phone_model)
                },
                getDeviceList: function(e) {
                    var t = this;
                    console.log("开始获取设备列表"), m.getUserInfo(function(n) {
                        window.userInfo = n.data, m.getDeviceList(function(n) {
                            if (console.log("设备列表获取成功", n), 0 === n.meta.code) {
                                window.deviceList = n.data.items || [], console.log("已选择设备:", window.selectDevice);
                                var o = localStorage.getItem("selectDevice");
                                o ? window.selectDevice = window.deviceList.find(function(e) {
                                    return e.device_id === o
                                }) : window.selectDevice = window.deviceList[0];
                                var i = $("#no-device-bound-tpl").html(),
                                    a = $("#no-device-tpl").html();
                                window.selectDevice && localStorage.setItem("selectDevice", window.selectDevice.device_id), window.selectDevice = window.selectDevice || {
                                    device_id: i,
                                    os_version: "——",
                                    phone_model: a
                                }, t.setDeviceList(), $(".btn_sync").removeClass("rotate-infinite"), $(".text_sync").hide(), $(".text_sync_time").show(), e && e(n)
                            }
                        })
                    })
                },
                getUserInfo: function(e) {
                    m.getUserInfo(function(t) {
                        console.log("获取用户信息成功"), 0 === t.meta.code ? (window.userInfo = t.data, localStorage.setItem("userInfo", JSON.stringify(t.data)), $(".userName").html(t.data.username), e && e(t)) : window.userInfo = null
                    })
                },
                setDeviceList: function() {
                    var e = "";
                    if (window.deviceList = window.deviceList.filter(function(e) {
                            return "android" === s ? 0 === e.os_type : 0 !== e.os_type
                        }), window.selectDevice && selectDevice.id) {
                        var t = window.deviceList.filter(function(e) {
                            return e.id === selectDevice.id
                        });
                        t.length || (window.selectDevice = {})
                    }
                    var e = "";
                    if (window.deviceList.length) {
                        for (var n = 0, o = deviceList.length; n < o; n++) {
                            var i = deviceList[n].id === (window.selectDevice && selectDevice.id ? "active" : "");
                            e += '\n                    <li class="device-info " index="' + n + '">\n                        <a href="javascript:;" class="' + i + '">\n                            <span class="img-wrapper icon-device"></span>\n                            <span class="text eps">' + deviceList[n].phone_model + "-" + (deviceList[n].device_id || "").slice(-4) + "</span> \n                        </a>\n                    </li>\n                "
                        }
                        window.selectDevice && selectDevice.id || (window.selectDevice = deviceList[0])
                    }
                    var a = $("#add-new-device-tpl").html(),
                        r = location.pathname.indexOf("control-panel") > -1;
                    if (r && (console.log("Controlpanel下，检测是否需要插入添加设备....."), window.userInfo)) {
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
                        "android" == s && l.member_type && 1e3 * l.member_end_time > Date.now() ? (console.log("Android平台，会员未过期", l.binded_device_num, d[l.member_type]), l.binded_device_num < d[l.member_type] && (console.log("尚可添加新设备！"), e += '<li id="add-new-device"><a href="https://i.safespy.com' + c + '/control-panel/wizard1.html"><span class="img-wrapper icon-device"></span><span class="text eps">' + a + "</span></a></li>")) : "ios" == s && l.icloud_member_type && 1e3 * l.icloud_end_time > Date.now() && (console.log("iOS平台，会员尚未过期！", l.icloud_device_num, u[l.icloud_member_type]), l.icloud_device_num < u[l.icloud_member_type] && (console.log("尚可绑定新设备！"), e += '<li id="add-new-device"><a href="https://i.safespy.com' + c + '/control-panel-ios/wizard1.html"><span class="img-wrapper icon-device"></span><span class="text eps">' + a + "</span></a></li>"))
                    }
                    e && $("#deviceBox").html(e), window.selectDevice && selectDevice.id ? $("#select-device").html(selectDevice.phone_model) : $("#select-device").html($("#nodevice-tpl").html())
                },
                setCoverLayer: function(e) {
                    var t = $('\n\t      <a href="' + e.href + '" class="covering-layer" target="_blank" style="height:' + e.height + "px;width:" + (e.width || "100%") + ';">\n\t          <div class="covering-layer-wrap">\n\t\t          <img src="https://safespy.com/assets/demo/lock-e42c969b11.png" style="display: ' + (e.small ? "none" : "block") + '" alt="">\n\t\t          <p class="desc">' + e.desc + '</p>\n\t\t          <p class="tips" style="display: ' + (e.small ? "none" : "block") + '">\n\t\t              With your current plan you are allowed to see only ' + e.limit + ' results. Please upgrade to a higher plan if you need to see more.\n\t\t          </p>\n\t\t          <div class="upgrade-wrap">\n\t\t              <span class="a-btn" id="upgrade-now">UPGRADE NOW</span>                    \n\t\t          </div> \n\t          </div>\n\t      </a>\n\t      '),
                        n = e.wrapper.children(".covering-layer");
                    n.length ? n.replaceWith(t) : e.wrapper.css({
                        position: "relative"
                    }).append(t)
                }
            },
            _ = function(e, t) {
                for (var n = /<%([^%>]+)?%>/g, o = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, i = "var r=[];\n", a = 0, s = function c(e, t) {
                        return i += t ? e.match(o) ? e + "\n" : "r.push(" + e + ");\n" : "" != e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "", c
                    }; r = n.exec(e);) s(e.slice(a, r.index))(r[1], !0), a = r.index + r[0].length;
                return s(e.substr(a, e.length - a)), i += 'return r.join("");', new Function(i.replace(/[\r\t\n]/g, "")).apply(t)
            },
            w = function() {
                var e = {};
                return function(t, n) {
                    var o = e[t];
                    return o || (o = new Function("obj", "var p=[];with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"), e[t] = o), o(n)
                }
            }();
        t.exports = {
            util: l,
            api: m,
            cookie: a,
            uiRender: h,
            dialog: p,
            loading: f,
            platform: s,
            validator: i,
            eventBind: v,
            language: c,
            tmpl: _,
            jsTmpl: w,
            origin: d
        }
    }, {}],
    2: [function(e, t, n) {
        "use strict";
        var o = e("./common.js"),
            i = o.util,
            a = o.api,
            s = o.cookie,
            r = e("./md5.js"),
            c = (o.loading, o.eventBind, e("./locales")),
            l = {
                starClicked: -1,
                init: function() {
                    $(".dialog").on("click", ".close", function() {
                        $(this).parents(".dialog").hide()
                    }), this.initLanguage(), this.signUpEvent(), this.starEvent(), this.initMenuEvent(), this.initCookies(), this.headerHoverEvent(), this.initSignBtns(), this.userAction()
                },
                initLanguage: function() {
                    var e = o.language.replace("/", "") || "en",
                        t = c.find(function(t) {
                            return t["short"] === e
                        }) || "en";
                    console.log(t, "langName"), $("#language-select .desc").html(t && t.name), $("#language-select .language").css({
                        "background-image": "url(https://safespy.com" + t.icon + ")"
                    }), $("#language-list li[data-lang=" + e + "]").addClass("am-active"), $(".show-password").on("click", function() {
                        $(this).hasClass("icon-eye-open") ? ($(this).removeClass("icon-eye-open").addClass("icon-eye-close"), $(this).siblings("input").attr("type", "password")) : ($(this).removeClass("icon-eye-close").addClass("icon-eye-open"), $(this).siblings("input").attr("type", "text"))
                    })
                },
                initSignBtns: function() {
                    o.uiRender.getUserInfo(function() {
                        $(".userName").html(window.userInfo.username || ""), window.userInfo.uid > 0 ? ($(".unsigned-user-buy").hide(), $(".signed-user-buy").show()) : ($(".signed-user-buy").hide(), $(".unsigned-user-buy").show())
                    }), $(".judge-account").on("click", function(e) {
                        var t = e.target.tagName.toLowerCase();
                        if ("a" === t || "li" === t) return !0;
                        console.log("judge language:" + o.language);
                        var n = window.userInfo && window.userInfo.member_info;
                        return window.userInfo.uid === -1 ? location.href = "https://safespy.com" + o.language + "/login.html" : n.is_member ? (console.log("是会员"), n.member_type ? n.binded_device_num ? location.href = "https://i.safespy.com" + o.language + "/control-panel/dashboard.html" : location.href = "https://i.safespy.com" + o.language + "/control-panel/wizard1.html" : n.icloud_device_num ? location.href = "https://i.safespy.com" + o.language + "/control-panel-ios/dashboard.html" : location.href = "https://i.safespy.com" + o.language + "/control-panel-ios/wizard1.html") : (console.log("不是会员"), location.href = "https://safespy.com" + o.language + "/select-device.html"), !1
                    })
                },
                userAction: function() {
                    $("#logout-btn").on("click", function(e) {
                        return console.log("退出按钮点击"), i.logout(function() {
                            console.log("清除登录态成功"), location.href = "https://safespy.com" + o.language + "/login.html"
                        }), !1
                    })
                },
                initCookies: function() {
                    s.get("agree_cookie") || $("#cookie-tip").show(), $("#agree-cookie").on("click", function() {
                        s.set("agree_cookie", !0, 10), $("#cookie-tip").hide()
                    })
                },
                initMenuEvent: function() {
                    $("#openMenu").on("click", function() {
                        $("#mask").show(), $("#mobile_menuBox").addClass("show")
                    }), $("#closeMenu").on("click", function() {
                        $("#mobile_menuBox").removeClass("show"), $("#mask").hide()
                    }), $(".menu-item-toggle").on("click", function() {
                        var e = $(this).attr("data-type");
                        $(this).toggleClass("span"), $(this).parents(".menu").find(".sub-menu[data-type=" + e + "]").toggle()
                    })
                },
                signUpEvent: function() {
                    $(".signBtn").on("click", function() {
                        var e = $(this).parents(".signWrapper"),
                            t = e.find(".email"),
                            n = e.find(".password"),
                            s = t.val(),
                            c = n.val();
                        e.find(".error-info").hide();
                        var l = !0;
                        return i.checkEmail(s) || (e.find(".email-error-info").html("Please enter right email address.").show(), t.focus(), l = !1), l && !i.checkNotNull(c) && (e.find(".password-error-info").html("Please enter your password.").show(), n.focus(), l = !1), !!l && (a.signUp(s, r.hex_md5(c), function(t) {
                            if (console.log("登录语言：" + o.language), 0 === t.meta.code)
                                if (console.log("注册成功"), 0 === t.meta.code) {
                                    if (console.log("注册并登录成功"), localStorage.clear(), window.userInfo.uid !== -1) {
                                        var n = "";
                                        n = "https://safespy.com" + o.language + "/select-device.html", setTimeout(function() {
                                            document.location.href = n
                                        }, 80)
                                    }
                                } else console.log("注册失败"), $("#commonErrorInfo").html(t.meta.message).show();
                            else console.log("注册失败"), e.find(".error-info").html(t.meta.message).show()
                        }), !1)
                    }), $("#pricing-btn").on("click", function() {
                        return console.log("价格language:" + o.language), window.userInfo.uid !== -1 ? window.userInfo.member_info.member_type ? location.href = "https://i.safespy.com" + o.language + "/control-panel/dashboard.html" : window.userInfo.member_info.icloud_member_type ? location.href = "https://i.safespy.com" + o.language + "/control-panel-ios/dashboard.html" : location.href = "https://safespy.com" + o.language + "/select-device.html" : location.href = "https://safespy.com" + o.language + "/login.html", !1
                    })
                },
                starEvent: function() {
                    a.getScore(function(e) {
                        0 === e.meta.code ? (console.log("成功拉取评分信息"), $(".my-score").html(e.data.score.toFixed(2)), $(".my-count").html(e.data.count), $(".star-inner").width(e.data.score / 5 * 100 + "%")) : console.log("拉取评分失败")
                    }), this.starHoveEvent()
                },
                starHoveEvent: function() {
                    function e(e) {
                        n.removeClass("hover"), t.find(".star-" + e).addClass("hover")
                    }
                    var t = $(".rateThisApp"),
                        n = t.find(".star");
                    $(".rateThisApp").on("mouseenter", ".star", function() {
                        var t = $(this).attr("index");
                        e(t)
                    }), $(".rateThisApp").on("click", ".star", function() {
                        var t = $(this).attr("index");
                        l.starClicked = t, e(t)
                    }), $(".rateThisApp").on("click", ".close", function() {
                        t.hide()
                    }), $(".rateThisApp").on("mouseleave", ".star", function() {
                        $(this).attr("index");
                        e(l.starClicked)
                    }), $(".rateThisApp").on("click", ".submitRating", function() {
                        l.starClicked != -1 ? a.addScore(parseInt(l.starClicked) + 1, function(e) {
                            0 === e.meta.code && (t.find(".ratingSection").hide(), t.find(".ratingResult").show(), $(".my-score").html(e.data.score.toFixed(2)), $(".my-count").html(e.data.count), $(".star-inner").width(e.data.score / 5 * 100 + "%"))
                        }) : t.find(".starErrorInfo").show()
                    }), $(".rateBtn").on("click", function() {
                        l.starClicked = -1, e(-1), t.find(".ratingSection").show(), t.find(".ratingResult").hide(), t.show()
                    })
                },
                headerHoverEvent: function() {
                    console.log("headerHoverEvent init");
                    var e = i.getEventTypes();
                    "mousedown" == e.start ? ($(".js-header-hover").on("mouseover", function() {
                        return (window.userInfo && window.userInfo.uid > -1 || "user-login-item" !== $(this).attr("id")) && $(this).addClass("active"), !1
                    }), $(".js-header-hover").on("mouseout", function() {
                        return $(this).removeClass("active"), !1
                    })) : $(".js-header-hover").on("click", function() {
                        var e = $(this);
                        return e.hasClass("active") ? e.removeClass("active") : e.addClass("active"), !1
                    })
                }
            };
        l.init()
    }, {
        "./common.js": 1,
        "./locales": 3,
        "./md5.js": 4
    }],
    3: [function(e, t, n) {
        "use strict";
        t.exports = [{
            "short": "en",
            name: "English",
            icon: "/assets/countries/en@2x-1c0e577ddc.png"
        }]
    }, {}],
    4: [function(e, t, n) {
        "use strict";

        function o(e) {
            return a(i(s(e)))
        }

        function i(e) {
            return c(l(r(e), 8 * e.length))
        }

        function a(e) {
            try {} catch (t) {
                h = 0
            }
            for (var n, o = h ? "0123456789ABCDEF" : "0123456789abcdef", i = "", a = 0; a < e.length; a++) n = e.charCodeAt(a), i += o.charAt(n >>> 4 & 15) + o.charAt(15 & n);
            return i
        }

        function s(e) {
            for (var t, n, o = "", i = -1; ++i < e.length;) t = e.charCodeAt(i), n = i + 1 < e.length ? e.charCodeAt(i + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= n && n <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & n), i++), t <= 127 ? o += String.fromCharCode(t) : t <= 2047 ? o += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? o += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (o += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
            return o
        }

        function r(e) {
            for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
            for (var n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
            return t
        }

        function c(e) {
            for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
            return t
        }

        function l(e, t) {
            e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
            for (var n = 1732584193, o = -271733879, i = -1732584194, a = 271733878, s = 0; s < e.length; s += 16) {
                var r = n,
                    c = o,
                    l = i,
                    d = a;
                n = u(n, o, i, a, e[s + 0], 7, -680876936), a = u(a, n, o, i, e[s + 1], 12, -389564586), i = u(i, a, n, o, e[s + 2], 17, 606105819), o = u(o, i, a, n, e[s + 3], 22, -1044525330), n = u(n, o, i, a, e[s + 4], 7, -176418897), a = u(a, n, o, i, e[s + 5], 12, 1200080426), i = u(i, a, n, o, e[s + 6], 17, -1473231341), o = u(o, i, a, n, e[s + 7], 22, -45705983), n = u(n, o, i, a, e[s + 8], 7, 1770035416), a = u(a, n, o, i, e[s + 9], 12, -1958414417), i = u(i, a, n, o, e[s + 10], 17, -42063), o = u(o, i, a, n, e[s + 11], 22, -1990404162), n = u(n, o, i, a, e[s + 12], 7, 1804603682), a = u(a, n, o, i, e[s + 13], 12, -40341101), i = u(i, a, n, o, e[s + 14], 17, -1502002290), o = u(o, i, a, n, e[s + 15], 22, 1236535329), n = g(n, o, i, a, e[s + 1], 5, -165796510), a = g(a, n, o, i, e[s + 6], 9, -1069501632), i = g(i, a, n, o, e[s + 11], 14, 643717713), o = g(o, i, a, n, e[s + 0], 20, -373897302), n = g(n, o, i, a, e[s + 5], 5, -701558691), a = g(a, n, o, i, e[s + 10], 9, 38016083), i = g(i, a, n, o, e[s + 15], 14, -660478335), o = g(o, i, a, n, e[s + 4], 20, -405537848), n = g(n, o, i, a, e[s + 9], 5, 568446438), a = g(a, n, o, i, e[s + 14], 9, -1019803690), i = g(i, a, n, o, e[s + 3], 14, -187363961), o = g(o, i, a, n, e[s + 8], 20, 1163531501), n = g(n, o, i, a, e[s + 13], 5, -1444681467), a = g(a, n, o, i, e[s + 2], 9, -51403784), i = g(i, a, n, o, e[s + 7], 14, 1735328473), o = g(o, i, a, n, e[s + 12], 20, -1926607734), n = p(n, o, i, a, e[s + 5], 4, -378558), a = p(a, n, o, i, e[s + 8], 11, -2022574463), i = p(i, a, n, o, e[s + 11], 16, 1839030562), o = p(o, i, a, n, e[s + 14], 23, -35309556), n = p(n, o, i, a, e[s + 1], 4, -1530992060), a = p(a, n, o, i, e[s + 4], 11, 1272893353), i = p(i, a, n, o, e[s + 7], 16, -155497632), o = p(o, i, a, n, e[s + 10], 23, -1094730640), n = p(n, o, i, a, e[s + 13], 4, 681279174), a = p(a, n, o, i, e[s + 0], 11, -358537222), i = p(i, a, n, o, e[s + 3], 16, -722521979), o = p(o, i, a, n, e[s + 6], 23, 76029189), n = p(n, o, i, a, e[s + 9], 4, -640364487), a = p(a, n, o, i, e[s + 12], 11, -421815835), i = p(i, a, n, o, e[s + 15], 16, 530742520), o = p(o, i, a, n, e[s + 2], 23, -995338651), n = f(n, o, i, a, e[s + 0], 6, -198630844), a = f(a, n, o, i, e[s + 7], 10, 1126891415), i = f(i, a, n, o, e[s + 14], 15, -1416354905), o = f(o, i, a, n, e[s + 5], 21, -57434055), n = f(n, o, i, a, e[s + 12], 6, 1700485571), a = f(a, n, o, i, e[s + 3], 10, -1894986606), i = f(i, a, n, o, e[s + 10], 15, -1051523), o = f(o, i, a, n, e[s + 1], 21, -2054922799), n = f(n, o, i, a, e[s + 8], 6, 1873313359), a = f(a, n, o, i, e[s + 15], 10, -30611744), i = f(i, a, n, o, e[s + 6], 15, -1560198380), o = f(o, i, a, n, e[s + 13], 21, 1309151649), n = f(n, o, i, a, e[s + 4], 6, -145523070), a = f(a, n, o, i, e[s + 11], 10, -1120210379), i = f(i, a, n, o, e[s + 2], 15, 718787259), o = f(o, i, a, n, e[s + 9], 21, -343485551), n = m(n, r), o = m(o, c), i = m(i, l), a = m(a, d)
            }
            return Array(n, o, i, a)
        }

        function d(e, t, n, o, i, a) {
            return m(v(m(m(t, e), m(o, a)), i), n)
        }

        function u(e, t, n, o, i, a, s) {
            return d(t & n | ~t & o, e, t, i, a, s)
        }

        function g(e, t, n, o, i, a, s) {
            return d(t & o | n & ~o, e, t, i, a, s)
        }

        function p(e, t, n, o, i, a, s) {
            return d(t ^ n ^ o, e, t, i, a, s)
        }

        function f(e, t, n, o, i, a, s) {
            return d(n ^ (t | ~o), e, t, i, a, s)
        }

        function m(e, t) {
            var n = (65535 & e) + (65535 & t),
                o = (e >> 16) + (t >> 16) + (n >> 16);
            return o << 16 | 65535 & n
        }

        function v(e, t) {
            return e << t | e >>> 32 - t
        }
        var h = 0;
        t.exports = {
            hex_md5: o
        }
    }, {}]
}, {}, [2]);