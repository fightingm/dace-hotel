import { isString, isPlainObject } from 'lodash';

export default (function(win) {
    var paq = win._paq || [],

        // 唯一标识项目
        siteId = win.location.hostname,
        qstatHost = '//qstat.qunar.com';
    if (win.Tracker) {
        return win.Tracker;
    }

    var Util = {

        /**
         * 获得特定键值
         */
        getValueFromStorage: function(key) {
            var ls = win.localStorage;

            //localstroage存储格式 {data: ''}
            if (ls) {
                try {
                    return JSON.parse(ls.getItem(key)).data;
                } catch (e) {
                    return null;
                }
            }
            return null;
        },

        /**
         * 把 对象 序列化 query 字符串
         */
        stringify: function(e) {
            var ret = [];
            for (var n in e)
                ret.push(n + '=' + encodeURIComponent(e[n]));
            return ret.join('&');
        },

        /**
         * 生成随机数
         */
        getRandom: function() {
            return +new Date() + '.r' + Math.floor(1e3 * Math.random());
        },

        /**
         * 发送图片
         */
        sendImage: function(src) {
            if (typeof Image === 'undefined') {
                return;
            }
            var id = 'jsFeImage_' + Util.getRandom(),
                img = win[id] = new Image();
    
            img.onload = img.onerror = function() {
                win[id] = null;
            };
            img.src = src;
        },

        // 因为所有的统计从放在一个应用里边
        // 所以为了区分站点，需要额外增加一个标识
        handleWatcherKey: function(key) {
            var pageUrl = Util.replaceSpecialCharacter(Util.getPageUrl());
            var prefix = Util.replaceSpecialCharacter(siteId);
            return `${prefix}.${pageUrl}.${key}`;
        },

        /**
         * 替换掉一些特殊字符，主要针对 watcher
         */
        replaceSpecialCharacter: function(key) {
            return key = key
                .replace(/\s+/g, '_')
                .replace(/\./g, '_')
                .replace(/\//g, '_')
                .replace(/__/g, '_')
                .replace(/^_/g, '')
                .replace(/_$/g, '');
        },

        /**
         * 获得页面URL
         */
        getPageUrl: function() {
            var pathname = win.location.pathname.substr(1);
            var hash = win.location.hash.substr(1).substr(0, win.location.hash.indexOf('?') - 1) || '';
            return hash ? `${pathname}_${hash}` : pathname;
        },

        /**
         * 页面性能指标
         */
        getTimes: function() {
            var performance = win.performance || win.webkitPerformance || win.msPerformance || win.mozPerformance;
            
            if (performance === undefined) {
                return false;
            }
            
            var timing = performance.timing;
            var api = {};

            if (timing) {
                // Time spent during redirection
                api.redirectTime = timing.redirectEnd - timing.redirectStart;
                // AppCache
                api.appcacheTime = timing.domainLookupStart - timing.fetchStart;
                // DNS query time
                api.lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart;
                // TCP connection time
                api.connectTime = timing.connectEnd - timing.connectStart;
                // Time spent during the request
                api.requestTime = timing.responseEnd - timing.requestStart;
                // Time spent constructing the DOM tree
                api.domContentLoadedTime = timing.domContentLoadedEventEnd - timing.fetchStart;
                // Total time from start to load
                api.loadTime = timing.loadEventEnd - timing.fetchStart;
                // Load event time
                api.loadEventTime = timing.loadEventEnd - timing.loadEventStart;
                // Time spent unloading documents
                api.unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart;
            }

            return api;
        },

        /**
         * 找到特定节点的路径
         */
        findXPATH: function (e) {
            for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
                var r, n = 0,
                    a = !1;
                for (r = e.previousSibling; r; r = r.previousSibling) r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName ==
                        e.nodeName && ++n;
                for (r = e.nextSibling; r && !a; r = r.nextSibling) r.nodeName == e.nodeName && (a = !0);
                var i = (e.prefix ? e.prefix + ':' : '') + e.localName,
                    o = n || a ? '[' + (n + 1) + ']' : '';
                t.splice(0, 0, i + o);
            }
            return t.length ? '/' + t.join('/') : null;
        },
        
        /**
         * 找到特定节点的选择器
         */
        findNodeSelector: function m(e) {
            for (var t = []; e.parentNode;) {
                if (e.id) {
                    t.unshift('#' + e.id);
                    break;
                }
                if (e == e.ownerDocument.documentElement) t.unshift(e.tagName);
                else {
                    for (var r = 1, n = e; n.previousElementSibling; n = n.previousElementSibling, r++);
                    t.unshift(e.tagName + ':nth-child(' + r + ')');
                }
                e = e.parentNode;
            }
            return t.join(' > ');
        },

        /**
         * 判断是否是生产环境
         */
        isProductEnvironment() {
            // 检测当前域名是否是 .quanr.com ，非此域下，非生产环境
            if(siteId.indexOf('.qunar.com') === -1) {
                return false;
            }
            // 如果以机器名访问，非生产环境
            if (siteId.match(/\.cn\d+\./)) {
                return false;
            }
            // 这个 __ENV__ 从 ykit 来
            var env = __ENV__ || 'local';
            return env === 'prd';
        }
    };

    /**
     * 从 storage 中获取网络情况
     */
    var getNetworkType = function() {
        return Util.getValueFromStorage('networkType') || '';
    };

    /**
     * 从 storage 中获取设备信息
     */
    var getDeviceInfo = function() {
        return Util.getValueFromStorage('deviceInfo') || {};
    };

    /**
     * 添加事件
     * @param {stirng} sType 
     * @param {function} callback 
     * @param {boolean} bCapture 
     */
    var addEventListener = function(sType, callback, bCapture) {
        if ('undefined' != typeof(win.attachEvent)) {
            return win.attachEvent('on' + sType, callback);
        } else if (win.addEventListener) {
            return win.addEventListener(sType, callback, bCapture);
        }
    };
    
    /**
     * 发送到 piwik 
     * @param {string} eventType 
     * @param {string} eventContent 
     * @param {string} eventValue 
     */
    var sendToPiwik = function(eventType, eventContent, eventValue) {
        if(!Util.isProductEnvironment()) {
            return;
        }
        let data = ['trackEvent', location.pathname, eventType];

        if (isString(eventContent)) {
            data.push(eventContent);
        } else {
            data.push(Util.stringify(eventContent));
        }

        eventValue !== undefined && data.push(eventValue);
        paq.push(data);
    };

    /**
     * 把指标发送到 watcher 上去
     * @param {string} fun recordTime / recordCount
     * @param {object | array} param 
     * @param {object} msg 主要记录错误详情
     */
    var sendToWatcher = function(fun, param, msg) {
        if(!Util.isProductEnvironment()) {
            return;
        }
        var obj = {
            fun: fun,
            param: param
        };
        try {
            if (isPlainObject(param)) {
                obj.param = JSON.stringify(param);
            }
            if (msg) {
                obj.msg = JSON.stringify(msg);
            }
        } catch (err) {
            // 
        }
        var url = `${qstatHost}/api/qwatcher?${Util.stringify(obj)}`;
        Util.sendImage(url);
    };

    /**
     * 记录错误信息到 kibana 上
     * @param {object} obj 错误信息
     */
    var sendToJavascript = function(obj) {
        if(!Util.isProductEnvironment()) {
            return;
        }
        var data = Object.assign({}, {
            userAgent: win.navigator.userAgent,
            locale: win.navigator.language || win.navigator.userLanguage,
            url: win.location.href,
            title: document.title,
            networkType: getNetworkType(),
            deviceInfo: Util.stringify(getDeviceInfo())
        }, obj);
        var dataString = JSON.stringify(data);
        Util.sendImage(`${qstatHost}/api/javascript?event=${encodeURIComponent(dataString)}`);
    };

    /**
     * 暂存 window.onerror 事件
     * @param {window} win 
     * @param {string} type 
     * @param {function} fun 
     */
    var copyOnError = function (win, type, fun) {
        var n = win[type];
        win[type] = fun(n);
    };

    var Tracker = {};

    for (var A = ['log', 'warn', 'error', 'debug', 'info'], q = 0; q < A.length; q++) {
        if (win.console) {
            var type = A[q];
            Tracker[type] = function(n) {
                return function() {
                    sendToJavascript({
                        type: 'console',
                        page: {
                            url: win.location.href,
                            title: document.title
                        },
                        detail: {
                            level: type,
                            arguments: Array.prototype.slice.apply(arguments).join(' ')
                        }
                    });
                };
            }(type);
        }
    }

    /**
     * 发送时间到 wacther 中
     * 支持两种写法
     * ```
        Tracker.sendToWatcherTime({
            xx: 10,
            yy: 200
        });
        Tracker.sendToWatcherTime('lookup', 30);
     * ```
     * @param {string | object} key 
     * @param {number} val 
     */

    Tracker.sendToWatcherTime = function (key, val) {
        var paramObj = {};

        if (typeof key === 'string') {
            paramObj[Util.handleWatcherKey(key)] = val;
        } else {
            for (var i in key) {
                paramObj[Util.handleWatcherKey(i)] = key[i];
            }
        }
        sendToWatcher('recordTime', paramObj);
    };

    /**
     * 发送计数到 wacther 中
     * 支持两种写法
     * ```
        Tracker.sendToWatcherCount('error');
        Tracker.sendToWatcherCount('error', 'error2');
     * ```
     * @param {string} param 
     */
    Tracker.sendToWatcherCount = function (...params) {
        var arr = [],
            msg = null;
        params.forEach(key => {
            if (typeof key === 'object') {
                msg = key;
            }
            if (typeof key === 'string') {
                arr.push(Util.handleWatcherKey(key));
            }
        });
        sendToWatcher('recordCount', arr, msg);
    };

    /**
     * 记录接口相应时间，记录到 watcher
     * @param {date} startTime 
     * @param {string} name 
     */
    Tracker.ajaxTrack = function(startTime, name) {
        var diff = +new Date() - startTime;
        name = Util.replaceSpecialCharacter(name);
        Tracker.sendToWatcherTime(`curl_${name}`, diff);
    };

    /**
     * 记录自定义信息，主要发送到 piwik 上
     * @param {string|object} stack 自定义信息
     * @param {string} value 值
     */
    Tracker.customTrack = function(stack, value) {
        var ret = {};
        if (isString(stack)) {
            ret.stack = stack;
        } else {
            ret.networkType = getNetworkType();
            ret.deviceInfo = Util.stringify(getDeviceInfo());
            ret.stack = Util.stringify(stack);
        }

        sendToPiwik('__CT', ret, value);
    };

    /**
     * 使用notifyError，可以将主动捕获的错误发送到 qstat
     * @param {object} error 抛出的错误对象，参数类型为Error
     * @param {object} option 可选对象，参数类型为对象，用于发送一些额外信息，比如： 
     *  metaData: 其他自定义信息
     * 
     */
    Tracker.notifyError = function(error, option) {
        if (error) {
            win.console && console.error(error);
            sendToJavascript({
                type: 'caught',
                name: error.name || option && option.name || 'caught error',
                message: error.message || option && option.message,
                stacktrace: error.stack,
                fileName: error.fileName || '',
                lineNumber: error.lineNumber,
                columnNumber: error.columnNumber,
                metaData: option && option.metaData
            });
        }
    };
    Tracker.notify = function(message) {
        if (message) {
            sendToJavascript({
                type: 'other',
                message: Util.stringify(message)
            });
        }
    };

    /**
     * 统计四种错误
     * 1. 脚本全局错误
     * 2. 资源文件加载错误，包括 js / image
     * 3. unhandledrejection 错误
     * 4. fetch 错误
     */
    // 1. 统计全局错误
    copyOnError(win, 'onerror', function() {
        return function(msg, url, lineNumber, columnNumber, error) {
            void 0 === columnNumber && win.event && (columnNumber = win.event.errorCharacter);
            var errorUrl = url && url !== win.location.href ? url : null;
            var data = {
                message: msg,
                lineNumber,
                columnNumber,
                fileName: errorUrl || (error && error.fileName || error.sourceURL),
                name: error && error.name || 'uncaught error',
                stacktrace: error && error.stack || '',
                type: 'uncaught'
            };

            // 过滤如果是qunarzz的脚本错误，才会发送错误日志。
            if (data.fileName && data.fileName.indexOf('qunarzz.com') > -1) {
                // 发送到 watcher 计数
                Tracker.sendToWatcherCount('script_error');
                sendToJavascript(data);
            }
        };
    });

    // 2. 统计资源加载错误
    addEventListener('error', function(err) {
        var target = err.target ? err.target : err.srcElement;
        var outerHTML = target && target.outerHTML;
        outerHTML && outerHTML.length > 200 && ( outerHTML = outerHTML.slice(0, 200));
        var data = {
            type: 'resourceError',
            target: {
                outerHTML: outerHTML,
                src: target && target.src,
                tagName: target && target.tagName,
                id: target && target.id,
                className: target && target.className,
                name: target && target.name,
                type: target && target.type,
                XPath: Util.findXPATH(target),
                selector: Util.findNodeSelector(target)
            }
        };
        if (target.src !== win.location.href && (!target.src || !target.src.match(/.*\/(.*)$/) || target.src.match(/.*\/(.*)$/)[1]) && data.target.src) {
            var i = new XMLHttpRequest();
            i.open('HEAD', data.target.src);
                i.send();
                i.onload = function (e) {
                    if (200 !== e.target.status) {
                        data.target.status = e.target.status;
                        data.target.statusText = e.target.statusText;
                    }
                    
                    sendToJavascript(data);

                    // 发送到 watcher 计数
                    Tracker.sendToWatcherCount('script_resource_error');
                };
        }
    }, true);

    // 3. Promise Error
    addEventListener('unhandledrejection', function(event) {
        sendToJavascript({
            type: 'uncaught',
            name: event.reason.constructor.name || '',
            message: event.reason.message
        });
        Tracker.sendToWatcherCount('script_unhandledrejection_error');
    });

    // 4. 统计 fetch 加载错误
    if (win.fetch) {
        var rawFetch = win.fetch;
        win.fetch = function (url, request) {
            var startTime = (new Date()).getTime();
            return rawFetch.apply(this, arguments).then(function (response) {
                var diff = (new Date()).getTime() - startTime;
                if (response.status !== 200) {
                    var req = {
                            method: request && request.method || 'GET',
                            url: response.url
                        }, res = {
                            status: response.status,
                            statusText: response.statusText,
                            elapsedTime: diff
                        };
                    // 记录错误
                    sendToJavascript({
                        type: 'httpError',
                        req,
                        res
                    });
                    Tracker.sendToWatcherCount('script_http_fetch_error');
                }
                return response;
            });
        };
    }

    // 触发 Load 事件，并且发送到 Watcher
    addEventListener('load', function() {
        // 记录页面 PV
        Tracker.sendToWatcherCount('pv');

        // 记录页面性能
        win.setTimeout(function() {
            var times = Util.getTimes(),
                wactherObj = {};
            
            for (var time in times) {
                var key = `performance_${time}`;
                wactherObj[key] = times[time];
            }
            Tracker.sendToWatcherTime(wactherObj);
        }, 50);
    }, false);

    return Tracker;
})(typeof window === 'undefined' ? {
    location: {}
} : window);
