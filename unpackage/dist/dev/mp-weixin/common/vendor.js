(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


// import navigateTo from 'uni-helpers/navigate-to'

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"干饭外卖券","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"干饭外卖券","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"干饭外卖券","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"干饭外卖券","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"干饭外卖券","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/utils/request.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.myRquest = void 0;var BASE_URL = '/api';
var myRquest = function myRquest(ops) {
  var token;
  uni.getStorage({
    key: 'token',
    success: function success(res) {
      token = res.data;
    } });

  return new Promise(function (resolve, reject) {
    uni.request({
      url: BASE_URL + ops.url,
      method: ops.method || 'GET',
      data: ops.data || {},
      header: {
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImlzcyI6IiIsImF1ZCI6IiIsImlhdCI6MTYxMDQ1MjAxNCwibmJmIjoxNjEwNDUyMDE0LCJleHAiOjE2MTA3MTEyMTR9.5fqwVzGWwAepIYEhbQOmzrqKRIuaBDbWjG3OIuPzeus' },

      success: function success(res) {
        switch (res.data.code) {
          case 400:
            getCode();
            break;
          case 1:
            resolve(res);
            break;
          default:
            resolve(res);
            break;}

      },
      fail: function fail(err) {
        reject(err);
      } });

  });
};exports.myRquest = myRquest;
var getCode = function getCode() {
  var origin = location.href; //网页授权的回调域名，这里设置的是本地端口
  var urlNow = encodeURIComponent(origin); //处理域名
  var scope = "snsapi_userinfo"; //弹框显示授权
  var appid = "gh_f1ab99b9f5b5";
  // 截取code
  if (!getUrlCode().code) {
    var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(appid, "&redirect_uri=").concat(urlNow, "&response_type=code&scope=").concat(scope, "&state=123#wechat_redirect");
    window.location.href = url;
  } else {
    uni.request({
      url: BASE_URL + 'member/login',
      method: 'POST',
      data: {
        code: getUrlCode().code },

      success: function success(res) {
        uni.setStorage({ key: 'token', data: res.data.token });
      },
      fail: function fail(err) {
      } });

  }
};
var getUrlCode = function getUrlCode() {// 截取url中的code方法
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return theRequest;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 19);

/***/ }),
/* 19 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 20);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 20 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/*!********************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/components/mosowe-canvas-image/wxqrcode.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: [url=http://www.d-project.com/]http://www.d-project.com/[/url]
//
// Licensed under the MIT license:
//        [url=http://www.opensource.org/licenses/mit-license.php]http://www.opensource.org/licenses/mit-license.php[/url]
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//        [url=http://www.denso-wave.com/qrcode/faqpatent-e.html]http://www.denso-wave.com/qrcode/faqpatent-e.html[/url]
//
//---------------------------------------------------------------------

//---------------------------------------------------------------------
// qrcode
//代码第1588行为补充代码
//修改人：chenxing
//2017-02-27 16:21:32
//---------------------------------------------------------------------

/**
 * qrcode
 * @param typeNumber 1 to 40
 * @param errorCorrectLevel 'L','M','Q','H'
 */
var qrcode = function qrcode(typeNumber, errorCorrectLevel) {

  var PAD0 = 0xEC;
  var PAD1 = 0x11;

  var _typeNumber = typeNumber;
  var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
  var _modules = null;
  var _moduleCount = 0;
  var _dataCache = null;
  var _dataList = new Array();

  var _this = {};

  var makeImpl = function makeImpl(test, maskPattern) {

    _moduleCount = _typeNumber * 4 + 17;
    _modules = function (moduleCount) {
      var modules = new Array(moduleCount);
      for (var row = 0; row < moduleCount; row += 1) {
        modules[row] = new Array(moduleCount);
        for (var col = 0; col < moduleCount; col += 1) {
          modules[row][col] = null;
        }
      }
      return modules;
    }(_moduleCount);

    setupPositionProbePattern(0, 0);
    setupPositionProbePattern(_moduleCount - 7, 0);
    setupPositionProbePattern(0, _moduleCount - 7);
    setupPositionAdjustPattern();
    setupTimingPattern();
    setupTypeInfo(test, maskPattern);

    if (_typeNumber >= 7) {
      setupTypeNumber(test);
    }

    if (_dataCache == null) {
      _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
    }

    mapData(_dataCache, maskPattern);
  };

  var setupPositionProbePattern = function setupPositionProbePattern(row, col) {

    for (var r = -1; r <= 7; r += 1) {

      if (row + r <= -1 || _moduleCount <= row + r) continue;

      for (var c = -1; c <= 7; c += 1) {

        if (col + c <= -1 || _moduleCount <= col + c) continue;

        if (0 <= r && r <= 6 && (c == 0 || c == 6) ||
        0 <= c && c <= 6 && (r == 0 || r == 6) ||
        2 <= r && r <= 4 && 2 <= c && c <= 4) {
          _modules[row + r][col + c] = true;
        } else {
          _modules[row + r][col + c] = false;
        }
      }
    }
  };

  var getBestMaskPattern = function getBestMaskPattern() {

    var minLostPoint = 0;
    var pattern = 0;

    for (var i = 0; i < 8; i += 1) {

      makeImpl(true, i);

      var lostPoint = QRUtil.getLostPoint(_this);

      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }

    return pattern;
  };

  var setupTimingPattern = function setupTimingPattern() {

    for (var r = 8; r < _moduleCount - 8; r += 1) {
      if (_modules[r][6] != null) {
        continue;
      }
      _modules[r][6] = r % 2 == 0;
    }

    for (var c = 8; c < _moduleCount - 8; c += 1) {
      if (_modules[6][c] != null) {
        continue;
      }
      _modules[6][c] = c % 2 == 0;
    }
  };

  var setupPositionAdjustPattern = function setupPositionAdjustPattern() {

    var pos = QRUtil.getPatternPosition(_typeNumber);

    for (var i = 0; i < pos.length; i += 1) {

      for (var j = 0; j < pos.length; j += 1) {

        var row = pos[i];
        var col = pos[j];

        if (_modules[row][col] != null) {
          continue;
        }

        for (var r = -2; r <= 2; r += 1) {

          for (var c = -2; c <= 2; c += 1) {

            if (r == -2 || r == 2 || c == -2 || c == 2 ||
            r == 0 && c == 0) {
              _modules[row + r][col + c] = true;
            } else {
              _modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  };

  var setupTypeNumber = function setupTypeNumber(test) {

    var bits = QRUtil.getBCHTypeNumber(_typeNumber);

    for (var i = 0; i < 18; i += 1) {
      var mod = !test && (bits >> i & 1) == 1;
      _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
    }

    for (var i = 0; i < 18; i += 1) {
      var mod = !test && (bits >> i & 1) == 1;
      _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  };

  var setupTypeInfo = function setupTypeInfo(test, maskPattern) {

    var data = _errorCorrectLevel << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);

    // vertical
    for (var i = 0; i < 15; i += 1) {

      var mod = !test && (bits >> i & 1) == 1;

      if (i < 6) {
        _modules[i][8] = mod;
      } else if (i < 8) {
        _modules[i + 1][8] = mod;
      } else {
        _modules[_moduleCount - 15 + i][8] = mod;
      }
    }

    // horizontal
    for (var i = 0; i < 15; i += 1) {

      var mod = !test && (bits >> i & 1) == 1;

      if (i < 8) {
        _modules[8][_moduleCount - i - 1] = mod;
      } else if (i < 9) {
        _modules[8][15 - i - 1 + 1] = mod;
      } else {
        _modules[8][15 - i - 1] = mod;
      }
    }

    // fixed module
    _modules[_moduleCount - 8][8] = !test;
  };

  var mapData = function mapData(data, maskPattern) {

    var inc = -1;
    var row = _moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    var maskFunc = QRUtil.getMaskFunction(maskPattern);

    for (var col = _moduleCount - 1; col > 0; col -= 2) {

      if (col == 6) col -= 1;

      while (true) {

        for (var c = 0; c < 2; c += 1) {

          if (_modules[row][col - c] == null) {

            var dark = false;

            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }

            var mask = maskFunc(row, col - c);

            if (mask) {
              dark = !dark;
            }

            _modules[row][col - c] = dark;
            bitIndex -= 1;

            if (bitIndex == -1) {
              byteIndex += 1;
              bitIndex = 7;
            }
          }
        }

        row += inc;

        if (row < 0 || _moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  };

  var createBytes = function createBytes(buffer, rsBlocks) {

    var offset = 0;

    var maxDcCount = 0;
    var maxEcCount = 0;

    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);

    for (var r = 0; r < rsBlocks.length; r += 1) {

      var dcCount = rsBlocks[r].dataCount;
      var ecCount = rsBlocks[r].totalCount - dcCount;

      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);

      dcdata[r] = new Array(dcCount);

      for (var i = 0; i < dcdata[r].length; i += 1) {
        dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
      }
      offset += dcCount;

      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i += 1) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
      }
    }

    var totalCodeCount = 0;
    for (var i = 0; i < rsBlocks.length; i += 1) {
      totalCodeCount += rsBlocks[i].totalCount;
    }

    var data = new Array(totalCodeCount);
    var index = 0;

    for (var i = 0; i < maxDcCount; i += 1) {
      for (var r = 0; r < rsBlocks.length; r += 1) {
        if (i < dcdata[r].length) {
          data[index] = dcdata[r][i];
          index += 1;
        }
      }
    }

    for (var i = 0; i < maxEcCount; i += 1) {
      for (var r = 0; r < rsBlocks.length; r += 1) {
        if (i < ecdata[r].length) {
          data[index] = ecdata[r][i];
          index += 1;
        }
      }
    }

    return data;
  };

  var createData = function createData(typeNumber, errorCorrectLevel, dataList) {

    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

    var buffer = qrBitBuffer();

    for (var i = 0; i < dataList.length; i += 1) {
      var data = dataList[i];
      buffer.put(data.getMode(), 4);
      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
      data.write(buffer);
    }

    // calc num max data.
    var totalDataCount = 0;
    for (var i = 0; i < rsBlocks.length; i += 1) {
      totalDataCount += rsBlocks[i].dataCount;
    }

    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error('code length overflow. (' +
      buffer.getLengthInBits() +
      '>' +
      totalDataCount * 8 +
      ')');
    }

    // end code
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }

    // padding
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }

    // padding
    while (true) {

      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(PAD0, 8);

      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(PAD1, 8);
    }

    return createBytes(buffer, rsBlocks);
  };

  _this.addData = function (data) {
    var newData = qr8BitByte(data);
    _dataList.push(newData);
    _dataCache = null;
  };

  _this.isDark = function (row, col) {
    if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
      throw new Error(row + ',' + col);
    }
    return _modules[row][col];
  };

  _this.getModuleCount = function () {
    return _moduleCount;
  };

  _this.make = function () {
    makeImpl(false, getBestMaskPattern());
  };

  _this.createTableTag = function (cellSize, margin) {

    cellSize = cellSize || 2;
    margin = typeof margin == 'undefined' ? cellSize * 4 : margin;

    var qrHtml = '';

    qrHtml += '<table style="';
    qrHtml += ' border-width: 0px; border-style: none;';
    qrHtml += ' border-collapse: collapse;';
    qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
    qrHtml += '">';
    qrHtml += '<tbody>';

    for (var r = 0; r < _this.getModuleCount(); r += 1) {

      qrHtml += '<tr>';

      for (var c = 0; c < _this.getModuleCount(); c += 1) {
        qrHtml += '<td style="';
        qrHtml += ' border-width: 0px; border-style: none;';
        qrHtml += ' border-collapse: collapse;';
        qrHtml += ' padding: 0px; margin: 0px;';
        qrHtml += ' width: ' + cellSize + 'px;';
        qrHtml += ' height: ' + cellSize + 'px;';
        qrHtml += ' background-color: ';
        qrHtml += _this.isDark(r, c) ? '#000000' : '#ffffff';
        qrHtml += ';';
        qrHtml += '"/>';
      }

      qrHtml += '</tr>';
    }

    qrHtml += '</tbody>';
    qrHtml += '</table>';

    return qrHtml;
  };

  _this.createImgTag = function (cellSize, margin, size) {

    cellSize = cellSize || 2;
    margin = typeof margin == 'undefined' ? cellSize * 4 : margin;

    var min = margin;
    var max = _this.getModuleCount() * cellSize + margin;

    return createImgTag(size, size, function (x, y) {
      if (min <= x && x < max && min <= y && y < max) {
        var c = Math.floor((x - min) / cellSize);
        var r = Math.floor((y - min) / cellSize);
        return _this.isDark(r, c) ? 0 : 1;
      } else {
        return 1;
      }
    });
  };

  return _this;
};

//---------------------------------------------------------------------
// qrcode.stringToBytes
//---------------------------------------------------------------------

qrcode.stringToBytes = function (s) {
  var bytes = new Array();
  for (var i = 0; i < s.length; i += 1) {
    var c = s.charCodeAt(i);
    bytes.push(c & 0xff);
  }
  return bytes;
};

//---------------------------------------------------------------------
// qrcode.createStringToBytes
//---------------------------------------------------------------------

/**
 * @param unicodeData base64 string of byte array.
 * [16bit Unicode],[16bit Bytes], ...
 * @param numChars
 */
qrcode.createStringToBytes = function (unicodeData, numChars) {

  // create conversion map.

  var unicodeMap = function () {

    var bin = base64DecodeInputStream(unicodeData);
    var read = function read() {
      var b = bin.read();
      if (b == -1) throw new Error();
      return b;
    };

    var count = 0;
    var unicodeMap = {};
    while (true) {
      var b0 = bin.read();
      if (b0 == -1) break;
      var b1 = read();
      var b2 = read();
      var b3 = read();
      var k = String.fromCharCode(b0 << 8 | b1);
      var v = b2 << 8 | b3;
      unicodeMap[k] = v;
      count += 1;
    }
    if (count != numChars) {
      throw new Error(count + ' != ' + numChars);
    }

    return unicodeMap;
  }();

  var unknownChar = '?'.charCodeAt(0);

  return function (s) {
    var bytes = new Array();
    for (var i = 0; i < s.length; i += 1) {
      var c = s.charCodeAt(i);
      if (c < 128) {
        bytes.push(c);
      } else {
        var b = unicodeMap[s.charAt(i)];
        if (typeof b == 'number') {
          if ((b & 0xff) == b) {
            // 1byte
            bytes.push(b);
          } else {
            // 2bytes
            bytes.push(b >>> 8);
            bytes.push(b & 0xff);
          }
        } else {
          bytes.push(unknownChar);
        }
      }
    }
    return bytes;
  };
};

//---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------

var QRMode = {
  MODE_NUMBER: 1 << 0,
  MODE_ALPHA_NUM: 1 << 1,
  MODE_8BIT_BYTE: 1 << 2,
  MODE_KANJI: 1 << 3 };


//---------------------------------------------------------------------
// QRErrorCorrectLevel
//---------------------------------------------------------------------

var QRErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2 };


//---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------

var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7 };


//---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------

var QRUtil = function () {

  var PATTERN_POSITION_TABLE = [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]];

  var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
  var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;

  var _this = {};

  var getBCHDigit = function getBCHDigit(data) {
    var digit = 0;
    while (data != 0) {
      digit += 1;
      data >>>= 1;
    }
    return digit;
  };

  _this.getBCHTypeInfo = function (data) {
    var d = data << 10;
    while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
      d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);
    }
    return (data << 10 | d) ^ G15_MASK;
  };

  _this.getBCHTypeNumber = function (data) {
    var d = data << 12;
    while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
      d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);
    }
    return data << 12 | d;
  };

  _this.getPatternPosition = function (typeNumber) {
    return PATTERN_POSITION_TABLE[typeNumber - 1];
  };

  _this.getMaskFunction = function (maskPattern) {

    switch (maskPattern) {

      case QRMaskPattern.PATTERN000:
        return function (i, j) {return (i + j) % 2 == 0;};
      case QRMaskPattern.PATTERN001:
        return function (i, j) {return i % 2 == 0;};
      case QRMaskPattern.PATTERN010:
        return function (i, j) {return j % 3 == 0;};
      case QRMaskPattern.PATTERN011:
        return function (i, j) {return (i + j) % 3 == 0;};
      case QRMaskPattern.PATTERN100:
        return function (i, j) {return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;};
      case QRMaskPattern.PATTERN101:
        return function (i, j) {return i * j % 2 + i * j % 3 == 0;};
      case QRMaskPattern.PATTERN110:
        return function (i, j) {return (i * j % 2 + i * j % 3) % 2 == 0;};
      case QRMaskPattern.PATTERN111:
        return function (i, j) {return (i * j % 3 + (i + j) % 2) % 2 == 0;};

      default:
        throw new Error('bad maskPattern:' + maskPattern);}

  };

  _this.getErrorCorrectPolynomial = function (errorCorrectLength) {
    var a = qrPolynomial([1], 0);
    for (var i = 0; i < errorCorrectLength; i += 1) {
      a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  };

  _this.getLengthInBits = function (mode, type) {

    if (1 <= type && type < 10) {

      // 1 - 9

      switch (mode) {
        case QRMode.MODE_NUMBER:return 10;
        case QRMode.MODE_ALPHA_NUM:return 9;
        case QRMode.MODE_8BIT_BYTE:return 8;
        case QRMode.MODE_KANJI:return 8;
        default:
          throw new Error('mode:' + mode);}


    } else if (type < 27) {

      // 10 - 26

      switch (mode) {
        case QRMode.MODE_NUMBER:return 12;
        case QRMode.MODE_ALPHA_NUM:return 11;
        case QRMode.MODE_8BIT_BYTE:return 16;
        case QRMode.MODE_KANJI:return 10;
        default:
          throw new Error('mode:' + mode);}


    } else if (type < 41) {

      // 27 - 40

      switch (mode) {
        case QRMode.MODE_NUMBER:return 14;
        case QRMode.MODE_ALPHA_NUM:return 13;
        case QRMode.MODE_8BIT_BYTE:return 16;
        case QRMode.MODE_KANJI:return 12;
        default:
          throw new Error('mode:' + mode);}


    } else {
      throw new Error('type:' + type);
    }
  };

  _this.getLostPoint = function (qrcode) {

    var moduleCount = qrcode.getModuleCount();

    var lostPoint = 0;

    // LEVEL1

    for (var row = 0; row < moduleCount; row += 1) {
      for (var col = 0; col < moduleCount; col += 1) {

        var sameCount = 0;
        var dark = qrcode.isDark(row, col);

        for (var r = -1; r <= 1; r += 1) {

          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (var c = -1; c <= 1; c += 1) {

            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrcode.isDark(row + r, col + c)) {
              sameCount += 1;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    };

    // LEVEL2

    for (var row = 0; row < moduleCount - 1; row += 1) {
      for (var col = 0; col < moduleCount - 1; col += 1) {
        var count = 0;
        if (qrcode.isDark(row, col)) count += 1;
        if (qrcode.isDark(row + 1, col)) count += 1;
        if (qrcode.isDark(row, col + 1)) count += 1;
        if (qrcode.isDark(row + 1, col + 1)) count += 1;
        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }

    // LEVEL3

    for (var row = 0; row < moduleCount; row += 1) {
      for (var col = 0; col < moduleCount - 6; col += 1) {
        if (qrcode.isDark(row, col) &&
        !qrcode.isDark(row, col + 1) &&
        qrcode.isDark(row, col + 2) &&
        qrcode.isDark(row, col + 3) &&
        qrcode.isDark(row, col + 4) &&
        !qrcode.isDark(row, col + 5) &&
        qrcode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }

    for (var col = 0; col < moduleCount; col += 1) {
      for (var row = 0; row < moduleCount - 6; row += 1) {
        if (qrcode.isDark(row, col) &&
        !qrcode.isDark(row + 1, col) &&
        qrcode.isDark(row + 2, col) &&
        qrcode.isDark(row + 3, col) &&
        qrcode.isDark(row + 4, col) &&
        !qrcode.isDark(row + 5, col) &&
        qrcode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    }

    // LEVEL4

    var darkCount = 0;

    for (var col = 0; col < moduleCount; col += 1) {
      for (var row = 0; row < moduleCount; row += 1) {
        if (qrcode.isDark(row, col)) {
          darkCount += 1;
        }
      }
    }

    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;

    return lostPoint;
  };

  return _this;
}();

//---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------

var QRMath = function () {

  var EXP_TABLE = new Array(256);
  var LOG_TABLE = new Array(256);

  // initialize tables
  for (var i = 0; i < 8; i += 1) {
    EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i += 1) {
    EXP_TABLE[i] = EXP_TABLE[i - 4] ^
    EXP_TABLE[i - 5] ^
    EXP_TABLE[i - 6] ^
    EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i += 1) {
    LOG_TABLE[EXP_TABLE[i]] = i;
  }

  var _this = {};

  _this.glog = function (n) {

    if (n < 1) {
      throw new Error('glog(' + n + ')');
    }

    return LOG_TABLE[n];
  };

  _this.gexp = function (n) {

    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return EXP_TABLE[n];
  };

  return _this;
}();

//---------------------------------------------------------------------
// qrPolynomial
//---------------------------------------------------------------------

function qrPolynomial(num, shift) {

  if (typeof num.length == 'undefined') {
    throw new Error(num.length + '/' + shift);
  }

  var _num = function () {
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset += 1;
    }
    var _num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i += 1) {
      _num[i] = num[i + offset];
    }
    return _num;
  }();

  var _this = {};

  _this.getAt = function (index) {
    return _num[index];
  };

  _this.getLength = function () {
    return _num.length;
  };

  _this.multiply = function (e) {

    var num = new Array(_this.getLength() + e.getLength() - 1);

    for (var i = 0; i < _this.getLength(); i += 1) {
      for (var j = 0; j < e.getLength(); j += 1) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j)));
      }
    }

    return qrPolynomial(num, 0);
  };

  _this.mod = function (e) {

    if (_this.getLength() - e.getLength() < 0) {
      return _this;
    }

    var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));

    var num = new Array(_this.getLength());
    for (var i = 0; i < _this.getLength(); i += 1) {
      num[i] = _this.getAt(i);
    }

    for (var i = 0; i < e.getLength(); i += 1) {
      num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);
    }

    // recursive call
    return qrPolynomial(num, 0).mod(e);
  };

  return _this;
};

//---------------------------------------------------------------------
// QRRSBlock
//---------------------------------------------------------------------

var QRRSBlock = function () {


  // [1: [L, M, Q, H], ..]
  var RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

  var qrRSBlock = function qrRSBlock(totalCount, dataCount) {
    var _this = {};
    _this.totalCount = totalCount;
    _this.dataCount = dataCount;
    return _this;
  };

  var _this = {};

  var getRsBlockTable = function getRsBlockTable(typeNumber, errorCorrectLevel) {

    switch (errorCorrectLevel) {
      case QRErrorCorrectLevel.L:
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectLevel.M:
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectLevel.Q:
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectLevel.H:
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default:
        return undefined;}

  };

  _this.getRSBlocks = function (typeNumber, errorCorrectLevel) {

    var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);

    if (typeof rsBlock == 'undefined') {
      throw new Error('bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:' + typeNumber +
      '/errorCorrectLevel:' + errorCorrectLevel);
    }

    var length = rsBlock.length / 3;

    var list = new Array();

    for (var i = 0; i < length; i += 1) {

      var count = rsBlock[i * 3 + 0];
      var totalCount = rsBlock[i * 3 + 1];
      var dataCount = rsBlock[i * 3 + 2];

      for (var j = 0; j < count; j += 1) {
        list.push(qrRSBlock(totalCount, dataCount));
      }
    }

    return list;
  };

  return _this;
}();

//---------------------------------------------------------------------
// qrBitBuffer
//---------------------------------------------------------------------

var qrBitBuffer = function qrBitBuffer() {

  var _buffer = new Array();
  var _length = 0;

  var _this = {};

  _this.getBuffer = function () {
    return _buffer;
  };

  _this.getAt = function (index) {
    var bufIndex = Math.floor(index / 8);
    return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  };

  _this.put = function (num, length) {
    for (var i = 0; i < length; i += 1) {
      _this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  };

  _this.getLengthInBits = function () {
    return _length;
  };

  _this.putBit = function (bit) {

    var bufIndex = Math.floor(_length / 8);
    if (_buffer.length <= bufIndex) {
      _buffer.push(0);
    }

    if (bit) {
      _buffer[bufIndex] |= 0x80 >>> _length % 8;
    }

    _length += 1;
  };

  return _this;
};

//---------------------------------------------------------------------
// qr8BitByte
//---------------------------------------------------------------------

var qr8BitByte = function qr8BitByte(data) {

  var _mode = QRMode.MODE_8BIT_BYTE;
  var _data = data;
  var _parsedData = [];

  var _this = {};


  // Added to support UTF-8 Characters
  for (var i = 0, l = _data.length; i < l; i++) {
    var byteArray = [];
    var code = _data.charCodeAt(i);

    if (code > 0x10000) {
      byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;
      byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;
      byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;
      byteArray[3] = 0x80 | code & 0x3F;
    } else if (code > 0x800) {
      byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;
      byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;
      byteArray[2] = 0x80 | code & 0x3F;
    } else if (code > 0x80) {
      byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;
      byteArray[1] = 0x80 | code & 0x3F;
    } else {
      byteArray[0] = code;
    }

    // Fix Unicode corruption bug
    _parsedData.push(byteArray);
  }

  _parsedData = Array.prototype.concat.apply([], _parsedData);

  if (_parsedData.length != _data.length) {
    _parsedData.unshift(191);
    _parsedData.unshift(187);
    _parsedData.unshift(239);
  }

  var _bytes = _parsedData;

  _this.getMode = function () {
    return _mode;
  };

  _this.getLength = function (buffer) {
    return _bytes.length;
  };

  _this.write = function (buffer) {
    for (var i = 0; i < _bytes.length; i += 1) {
      buffer.put(_bytes[i], 8);
    }
  };

  return _this;
};

//=====================================================================
// GIF Support etc.
//

//---------------------------------------------------------------------
// byteArrayOutputStream
//---------------------------------------------------------------------

var byteArrayOutputStream = function byteArrayOutputStream() {

  var _bytes = new Array();

  var _this = {};

  _this.writeByte = function (b) {
    _bytes.push(b & 0xff);
  };

  _this.writeShort = function (i) {
    _this.writeByte(i);
    _this.writeByte(i >>> 8);
  };

  _this.writeBytes = function (b, off, len) {
    off = off || 0;
    len = len || b.length;
    for (var i = 0; i < len; i += 1) {
      _this.writeByte(b[i + off]);
    }
  };

  _this.writeString = function (s) {
    for (var i = 0; i < s.length; i += 1) {
      _this.writeByte(s.charCodeAt(i));
    }
  };

  _this.toByteArray = function () {
    return _bytes;
  };

  _this.toString = function () {
    var s = '';
    s += '[';
    for (var i = 0; i < _bytes.length; i += 1) {
      if (i > 0) {
        s += ',';
      }
      s += _bytes[i];
    }
    s += ']';
    return s;
  };

  return _this;
};

//---------------------------------------------------------------------
// base64EncodeOutputStream
//---------------------------------------------------------------------

var base64EncodeOutputStream = function base64EncodeOutputStream() {

  var _buffer = 0;
  var _buflen = 0;
  var _length = 0;
  var _base64 = '';

  var _this = {};

  var writeEncoded = function writeEncoded(b) {
    _base64 += String.fromCharCode(encode(b & 0x3f));
  };

  var encode = function encode(n) {
    if (n < 0) {
      // error.
    } else if (n < 26) {
      return 0x41 + n;
    } else if (n < 52) {
      return 0x61 + (n - 26);
    } else if (n < 62) {
      return 0x30 + (n - 52);
    } else if (n == 62) {
      return 0x2b;
    } else if (n == 63) {
      return 0x2f;
    }
    throw new Error('n:' + n);
  };

  _this.writeByte = function (n) {

    _buffer = _buffer << 8 | n & 0xff;
    _buflen += 8;
    _length += 1;

    while (_buflen >= 6) {
      writeEncoded(_buffer >>> _buflen - 6);
      _buflen -= 6;
    }
  };

  _this.flush = function () {

    if (_buflen > 0) {
      writeEncoded(_buffer << 6 - _buflen);
      _buffer = 0;
      _buflen = 0;
    }

    if (_length % 3 != 0) {
      // padding
      var padlen = 3 - _length % 3;
      for (var i = 0; i < padlen; i += 1) {
        _base64 += '=';
      }
    }
  };

  _this.toString = function () {
    return _base64;
  };

  return _this;
};

//---------------------------------------------------------------------
// base64DecodeInputStream
//---------------------------------------------------------------------

var base64DecodeInputStream = function base64DecodeInputStream(str) {

  var _str = str;
  var _pos = 0;
  var _buffer = 0;
  var _buflen = 0;

  var _this = {};

  _this.read = function () {

    while (_buflen < 8) {

      if (_pos >= _str.length) {
        if (_buflen == 0) {
          return -1;
        }
        throw new Error('unexpected end of file./' + _buflen);
      }

      var c = _str.charAt(_pos);
      _pos += 1;

      if (c == '=') {
        _buflen = 0;
        return -1;
      } else if (c.match(/^\s$/)) {
        // ignore if whitespace.
        continue;
      }

      _buffer = _buffer << 6 | decode(c.charCodeAt(0));
      _buflen += 6;
    }

    var n = _buffer >>> _buflen - 8 & 0xff;
    _buflen -= 8;
    return n;
  };

  var decode = function decode(c) {
    if (0x41 <= c && c <= 0x5a) {
      return c - 0x41;
    } else if (0x61 <= c && c <= 0x7a) {
      return c - 0x61 + 26;
    } else if (0x30 <= c && c <= 0x39) {
      return c - 0x30 + 52;
    } else if (c == 0x2b) {
      return 62;
    } else if (c == 0x2f) {
      return 63;
    } else {
      throw new Error('c:' + c);
    }
  };

  return _this;
};

//---------------------------------------------------------------------
// gifImage (B/W)
//---------------------------------------------------------------------

var gifImage = function gifImage(width, height) {

  var _width = width;
  var _height = height;
  var _data = new Array(width * height);

  var _this = {};

  _this.setPixel = function (x, y, pixel) {
    _data[y * _width + x] = pixel;
  };

  _this.write = function (out) {

    //---------------------------------
    // GIF Signature

    out.writeString('GIF87a');

    //---------------------------------
    // Screen Descriptor

    out.writeShort(_width);
    out.writeShort(_height);

    out.writeByte(0x80); // 2bit
    out.writeByte(0);
    out.writeByte(0);

    //---------------------------------
    // Global Color Map

    // black
    out.writeByte(0x00);
    out.writeByte(0x00);
    out.writeByte(0x00);

    // white
    out.writeByte(0xff);
    out.writeByte(0xff);
    out.writeByte(0xff);

    //---------------------------------
    // Image Descriptor

    out.writeString(',');
    out.writeShort(0);
    out.writeShort(0);
    out.writeShort(_width);
    out.writeShort(_height);
    out.writeByte(0);

    //---------------------------------
    // Local Color Map

    //---------------------------------
    // Raster Data

    var lzwMinCodeSize = 2;
    var raster = getLZWRaster(lzwMinCodeSize);

    out.writeByte(lzwMinCodeSize);

    var offset = 0;

    while (raster.length - offset > 255) {
      out.writeByte(255);
      out.writeBytes(raster, offset, 255);
      offset += 255;
    }

    out.writeByte(raster.length - offset);
    out.writeBytes(raster, offset, raster.length - offset);
    out.writeByte(0x00);

    //---------------------------------
    // GIF Terminator
    out.writeString(';');
  };

  var bitOutputStream = function bitOutputStream(out) {

    var _out = out;
    var _bitLength = 0;
    var _bitBuffer = 0;

    var _this = {};

    _this.write = function (data, length) {

      if (data >>> length != 0) {
        throw new Error('length over');
      }

      while (_bitLength + length >= 8) {
        _out.writeByte(0xff & (data << _bitLength | _bitBuffer));
        length -= 8 - _bitLength;
        data >>>= 8 - _bitLength;
        _bitBuffer = 0;
        _bitLength = 0;
      }

      _bitBuffer = data << _bitLength | _bitBuffer;
      _bitLength = _bitLength + length;
    };

    _this.flush = function () {
      if (_bitLength > 0) {
        _out.writeByte(_bitBuffer);
      }
    };

    return _this;
  };

  var getLZWRaster = function getLZWRaster(lzwMinCodeSize) {

    var clearCode = 1 << lzwMinCodeSize;
    var endCode = (1 << lzwMinCodeSize) + 1;
    var bitLength = lzwMinCodeSize + 1;

    // Setup LZWTable
    var table = lzwTable();

    for (var i = 0; i < clearCode; i += 1) {
      table.add(String.fromCharCode(i));
    }
    table.add(String.fromCharCode(clearCode));
    table.add(String.fromCharCode(endCode));

    var byteOut = byteArrayOutputStream();
    var bitOut = bitOutputStream(byteOut);

    // clear code
    bitOut.write(clearCode, bitLength);

    var dataIndex = 0;

    var s = String.fromCharCode(_data[dataIndex]);
    dataIndex += 1;

    while (dataIndex < _data.length) {

      var c = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      if (table.contains(s + c)) {

        s = s + c;

      } else {

        bitOut.write(table.indexOf(s), bitLength);

        if (table.size() < 0xfff) {

          if (table.size() == 1 << bitLength) {
            bitLength += 1;
          }

          table.add(s + c);
        }

        s = c;
      }
    }

    bitOut.write(table.indexOf(s), bitLength);

    // end code
    bitOut.write(endCode, bitLength);

    bitOut.flush();

    return byteOut.toByteArray();
  };

  var lzwTable = function lzwTable() {

    var _map = {};
    var _size = 0;

    var _this = {};

    _this.add = function (key) {
      if (_this.contains(key)) {
        throw new Error('dup key:' + key);
      }
      _map[key] = _size;
      _size += 1;
    };

    _this.size = function () {
      return _size;
    };

    _this.indexOf = function (key) {
      return _map[key];
    };

    _this.contains = function (key) {
      return typeof _map[key] != 'undefined';
    };

    return _this;
  };

  return _this;
};

var createImgTag = function createImgTag(width, height, getPixel, alt) {

  var gif = gifImage(width, height);
  for (var y = 0; y < height; y += 1) {
    for (var x = 0; x < width; x += 1) {
      gif.setPixel(x, y, getPixel(x, y));
    }
  }

  var b = byteArrayOutputStream();
  gif.write(b);

  var base64 = base64EncodeOutputStream();
  var bytes = b.toByteArray();
  for (var i = 0; i < bytes.length; i += 1) {
    base64.writeByte(bytes[i]);
  }
  base64.flush();

  var img = '';
  img += 'data:image/gif;base64,';
  img += base64;

  return img;
};

//---------------------------------------------------------------------
// returns qrcode function.

var createQrCodeImg = function createQrCodeImg(text, options) {
  options = options || {};
  var typeNumber = options.typeNumber || 4;
  var errorCorrectLevel = options.errorCorrectLevel || 'M';
  var size = options.size || 500;

  var qr;

  try {
    qr = qrcode(typeNumber, errorCorrectLevel || 'M');
    qr.addData(text);
    qr.make();
  } catch (e) {
    if (typeNumber >= 40) {
      throw new Error('Text too long to encode');
    } else {
      return gen(text, {
        size: size,
        errorCorrectLevel: errorCorrectLevel,
        typeNumber: typeNumber + 1 });

    }
  }

  // calc cellsize and margin
  var cellsize = parseInt(size / qr.getModuleCount());
  var margin = parseInt((size - qr.getModuleCount() * cellsize) / 2);

  return qr.createImgTag(cellsize, margin, size);
};
// var module = {}; 需要注释这一行，否则微信小程序无法使用
module.exports = {
  createQrCodeImg: createQrCodeImg };

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjU5RUQwQjgzMzBBMTFFQjg2NTJEMjk5Qjg5QzQxNTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjU5RUQwQjczMzBBMTFFQjg2NTJEMjk5Qjg5QzQxNTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0MzhjZDY0LTI2MGYtNDQ0YS05ODkxLWIwYTcyN2U0Y2YwYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiLz4gPC9y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"

/***/ }),
/* 54 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_10.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAA2CAYAAADHwXt1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QURCRjU0MzMzMEQxMUVCOTE1Nzk1OTNGMzI3QTUwQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QURCRjU0NDMzMEQxMUVCOTE1Nzk1OTNGMzI3QTUwQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBREJGNTQxMzMwRDExRUI5MTU3OTU5M0YzMjdBNTBCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBREJGNTQyMzMwRDExRUI5MTU3OTU5M0YzMjdBNTBCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zbshEwAAAtdJREFUeNrsnU1IFGEYx8c+WPHiqa5GiQh+BEb0cenQNUkSa+niIaIOGW0FhRSEEAqJu2BGSXgKtAjN6NihQ1C3RDokFHWpix0WIsii7P/UDizLrjvO7DzvO6//H/wOwu68y7M/nNmd3dm6H9MdHrGKTbABrsBftj/YVHrx3wMm5mmBV+En+Bt+gz/hKhyCh2CdzdUTc8h/nJtwCQ7DpjK3uQ5fwDm4ixGRYnbC73Aw4O2PwvfwOCMi/u7rQ8j7PoQZRrSx2QwfRNzGmE0hMSJ9jsC9NdiONSExIv15P6nh9qwIiRHpsi2GbRoPiRHpsiem7RoNiRHp0hbjto2FxIj0X5l5roXEiHR5p7CGekiMSJcFpXVUQ2JEunxRXEstJEaki5yZv+haSIxIn/vK68UeEiPSRz4rdNClkBiRGV4p79ZiDYkRmSPr6b+nE0tIjMgsOXg+6SExIvOMw4Ekh8SI7OA2PJfUkBiRPUwYCukSI3IvpLPKa47Cy4zILe7BM8pr3oqya2NEdjIJrxnYtWUZkVvIlxpnlde8AF8zIrfohY+V19wHnzMit+jz/n9hUZPDcIQRuUUaTiuveSXowTYjSg4n4ZSBg+0MI3KLU/C0bSFtqbKBFNwPm2E7n0NryBVeSWmG5FV6C6BSRDtgP7zB54tUC6lcRJmiOxBSNaTSiFY5JxIgJLk412S5A+ss50MCIuf3Okoj6lI+UCPJ5xHc6kckVyW9y5mQddIKj/kRNXq1uXIX2XgM+hHt5ixISDpXZjobJKJmzoJEYLtExHeiSRSaJKIlzoFE4LNE9JFzIBH4KhEtcA4kJPlUejEvES1zFiQko/5L/D+wh/MgIZjwIxKewZecCVkH8qtH+eKI5IfaujkXEpA78Kn/R/FZfKmqHr7hjMgazHslF+gq/Yy1/O7ogcIx0lvOi5QJ6EShk4oR+SHJjeWcmnxmJMfjJVIpIOGvAAMAKVl18jZT58YAAAAASUVORK5CYII="

/***/ }),
/* 55 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_3.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ4NjRFOTkzMzBCMTFFQjgwRjJGNjdEOUE1QjFDRTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ4NjRFOTgzMzBCMTFFQjgwRjJGNjdEOUE1QjFDRTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0MzhjZDY0LTI2MGYtNDQ0YS05ODkxLWIwYTcyN2U0Y2YwYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiLz4gPC9y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"

/***/ }),
/* 56 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_4.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUY5MzQ0MDIzMzBCMTFFQjg0OThGMzc5MEIwNENGOEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUY5MzQ0MDEzMzBCMTFFQjg0OThGMzc5MEIwNENGOEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0MzhjZDY0LTI2MGYtNDQ0YS05ODkxLWIwYTcyN2U0Y2YwYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5qrjz3AAALLUlEQVR42uxdXYwW1Rk++98GBNdC/QkSBGzFH9qmJVpRslyIjXrRWhMpUpv6sxfQtI01emdb7jTW6MW2yaKYiIomSHqhKDRp0YLRSi/AuistqEFbpVj56Zou+/f1fc688zE7nJk5M9+cM2e+b97kDbvs982Z8z7n/T3vmWkb3XKFcJzmEi8lvox4IfEC4vOI5xCfQ9xFPJM/O0I8TvwZ8afEnxB/QPwe8TvE+4mPujzZTgfvaTHx9cTLmeen+K4PTC/xoojPHCbew7yD+KBLk29zREMuIV5LfCsDYpMAyPPETxO/28qAwNysYSCudGSBvsnAPMtmryUA+SrxPcS3E3/BUVM+SvwU8SPEB2wO3G5xrK/w6hsi7ncYDMH31s/3+gzfe9MAgmhogKOc2ywvgjzks4bvfYDnUlpA2ojvJP4H8TpHI7o00eg6nstdPLdSAYJc4Y/EjxOfLZqHMJeNPLcFZQEEUdM+4j7RvNTHc1zrMiA9vHo2E88SzU+zeK4bee5OAYJSxp/ZvrYa3cVzP98VQC7nhGqZaF3C3N9gWRQKyFXEr4l09aZmpfksi6uKAmQF8R+EV8iryKNelskK24Cg9vSSOF1dreg0QSYvioz1uSyAoPi1owIjls5iGV1hGpALiLcTz65knkizWVbzTAHSTbwt7QAtTpDVVpZd7oAMCHf2LcpEkNlv8wZkbYsmfXnRnUKzzKIDyALWjooaowGhUZBMAgRl5k2iNWpTpgkyfFIklO7bNVRtZSXL3KgvyfTHAfIl4gdLOe3uWaJ71XOia/nDou2cS127uwdZtqkB+bXwOkPKR2MnRe3zj0T7haskMD0375Y/O0Ior2yI9BERXSfY1Mc+cpm3XSUQ0BafaiMfifFd/fLfgmlCeJ2Yf9fVkF+WHYzOr/18Ghhy9c2cJzXGAW2BbH+lqyHomxoS5eoOmUbwHUlCH99zr5j6cGeRtznFWvJukob8orRgsDPX0YCuZQ8UfbeQ8T1JJmuOMLBxb4Ngjnpu2u5iVJVUAZkTBwjaO79YNjA6Ft0iugmMsM+IotpnQ+LUize4cOuQ9Y/ifMiw8DrR8490KBSdOjYkJg9uFVNH3pC/a1khMkHS5u/dIAUZNlHSX5yrt2sqo6zX7z3zOsUSfMgSFSDfJN5rItrpWHKHcpVODG9KdKzB0BXfGaOwtY1+xzU74Cs0tAJATLy1wVsIbtK3iP8aBgQZ5H1GfC1s+8x5mVZt18pBbQ1QArHv0aKjKR16iPj+sA+52dRoSMbinDHMEvyAMjb8JP2qhiaM7VwtxshPlACMabL3NQTHv4we7YKJkclahtygZ/V+LW2YPLRVsq5/coxwcuyQn41/x/Rok8ObTmfQMf5mTAEIQFLlFjBz0tzplELI1/hmU37ePdCAwYAPyDU2RkwSXJSfGSeH3AM/Ei6FUM6hAwZ8EKKx4Pdh1qCRDgEDDAZ8H7LctLmCY5dCiSE4YCWR0MYiioJRvif4dwQGYTABEiK4pO9bBkQ6dZwDv9DoUCTQuCgL5uzUtmvqZi0qmYOjDq/ouMy8c9kDkmPDcvp70kKxRBDQXJispcb9B5wt+QGA0sG+AL+ntuWKz7ap8hCuaUUtgjNMGt0TtDhuQViirwOQy6wMhU0jJIOGs2QIVxYOu9O1AcB0OQDIEgCyMO+rSmdbQHkC5schn5CFFgKQi0yUS6RGhJxwDfUs31RlTvtnKRdA19UPa5uotMmrbUAuyF1Duijmjyp3EFgy5PxTfz5gzJhXL0Am+TH4G1U+g785sK0LOh9R1hzboyLklEJMaedVNa3E/Q/SShQWwW29l8YmrQ7QXACS+7FldHzo+Jm0oLSfl67ICE3EvofUDjJnKpMGzXBEO0CzYbI6cg9zD27V2kaVhcW+QS+/iHPUmmX2IBDQiKCgVVsA/mcdok5oyFl5XxWT1K2yQlOikjdk2DJqSmPakKso8pWOiAXikLkCzTTWzIA6EUohurUm5f/3ZtgfZ8eNUo1MDglwqR0KUBGaO2SuPBUh/q8JLfFXX3AF+gJSRTlKX4TQ+diQl9NglzBljlH3UxE04ZZ2gEagIZNF3kEYtHBwMHV4p9Q0lUOW3824/wGQHdy8mgAgx22NFhYqBBJZ4WWzJ00NzFCvWrPgvFGYRGCQxkFPurmTeAKAfFrI0LSqpcATPgMtCO9lqMJVuVlFySa2bXXKNqgmdBbfLBemowDkX7ZGqwVMSxpnqtIO+BblGHRdaItO9JS2n8sCfQxA3rc1WtCk1KMfDaGpBDZFWqCsXdFnZe6icW3fjKLjMWtnS870Ppocfko/PGbLh8gVGbRKMDEx2qLTOF3PPxpc6fBnBeclP4OGWKuT+w1r4Uw8FsQZmhVcHTASorGopj6LNAxA9lkNcykyQlTkC6dd0byQJGh8X0ZnKcJdGY0laKMPSoHnR/YDEDwL3X66GhB0Z8yqDG/R+n3Bch9eoxGu7uQ5X8HPSVFYQUcVgMERv3Sy23j+4QsW+919g1qlk6iVHg6dw7mM3zQH/3RGGMygRFUH6uUX+05+t1868X9ZbWIU2RO1cjDW8cbtaSBU9rUE2qEyOXHZfhywAMqhXGRPEJBXTI0yrVMxxlfI6ItPzyKklcLHyg74ibisPqs/wxEJ1favzp5OzvSyXJyB7nf09i7Ke5TwSdjMEZrfl2Vq4YQaJE49t9QmGIcEvxUiWH7fZtp5N+SHyKwBXLlHQkFAIw0NUSZMOnwyiQVsWr1Qn6fpAztxZ0OU+UFKAH0B4tiCLNU7tr+hSct82Rs/0hY2BRAetnhjhced6ggI8N3U2sAtSLVxrzlPth8FV72iRUlX2+v3kvUaZ9KBoMzDgOBIdO6Nrn6i1cj+A4AxYaoaIcwnsWKdTLjAb6IAQUsQ3tHk7Elc2R9MwEB7CgeHtERWHbLT/4T3vN/6Fkj48Rn4A166crergEyrh2Fbl7Svff4qr0Rvs4yOfq/Gw/CnRWg/SvVoDdizd0QZn+bA++4AycgDBNgX6TZvJFk84T2afDgJEBBeivUDUXKSQcHiW5ILmEmSQyAytCnvcHiL8N7eI3QAaYrHM6l8j27TnR8NGmqEmGDtOKALCAgPbVwnmpAAjiyzBzSnns8c3mkjMfxdlGzjAMFj6PDOpeph+/nScS6T/EdpZmO+iC/cX8kvd7ovCowkQEB4qdeuSoa50S6WqcgKSI34x8QnK1k2TCdZlrVGAAF9QLy+kmfD9BOWpWgUED+jfKKSaWaC7DZr5U4pLgot+Usl29S0N42FSQPIKeLviyI6VMpLkNX3WHa5A+IPgIcVnqhknUgnWFapFnCWAuLbwnuU0Egl80gaYRm9nfaLWSu6qC3cWIESCcaNLCNhCxAQXqJ4nbB44KcEdJxl8lrWCzS654FVgJcoHq6wkDJYkVUz8gLE9ynou3yrhcHA3L+dxWeYAAT0Ma+OVkwen+C553ISLc9t2lHhvc7nh6I1al+Y4+0859G8Lmpi3xxllm8Qv9rEYLzKc9yc94VNNTK8J7yXifU3WRR2nOe0kucoygIICGXmjcQXC+9NlxMlBmKC53Axz6lmaiAbrT7oO0JxDZv66GaZKhEQuNctfO/rhYUz/TZ7r9BhcRsxGqYG83SEBmiU7xEPCF0jFN0hpiiuycE0zQ1EKZc4AgTe5YEt1qeEd/bSOhUJSJDw/oxbib8r+OCKRcJBpd8TPy8MHMcoKyBBAiDXC+/x59eK/N/f/k/h1Zpwpm+HMPxWiGYAJExfFt7Tt+FYL2I+V3id+ugZw8vjZ/BnPyceIz7GDviI8B4dAv4bMd578W+XJ/t/AQYApew1vwyf7hUAAAAASUVORK5CYII="

/***/ }),
/* 57 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_6.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlDMEVFOEYzMzE1MTFFQkI4MkNDQjU1ODYxNDA1NjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlDMEVFOEUzMzE1MTFFQkI4MkNDQjU1ODYxNDA1NjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEyN2RhNzAyLTQ2YjItYTI0OC1iNDJhLWEzZmFiMDEyMThkMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiLz4gPC9y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"

/***/ }),
/* 58 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_11.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAA2CAYAAADHwXt1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTdGQUVENjczMzE2MTFFQkJEN0NDNzI0RUMwNDNBRUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTdGQUVENjYzMzE2MTFFQkJEN0NDNzI0RUMwNDNBRUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBREJGNTQzMzMwRDExRUI5MTU3OTU5M0YzMjdBNTBCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBREJGNTQ0MzMwRDExRUI5MTU3OTU5M0YzMjdBNTBCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+X6l1WQAAAtlJREFUeNrsnU1IFGEYx8csEi9drKuhIkJfUETlpUNXRVG06NIhQg8VbQWFFEQgCYmz4AerSKcgkuiLjh06BHnTQ4eEoi510cNCdKgo+z+1A8uy244zO8/7zuv/B7+DsDvv8uwPd3Zmd7ZuaPWSR6xiC2yE3+FP2x9srsn/+4CJedrhdfgJ/oJf4Q+4Dm/D47DO5uqJOeQ/zihcgXdgc5nb3ISv4BPYyohIMS3wGxwJefse+B4OMiISvHx9iHjfhzDDiDY39fB+zG1M2BQSI9KnCx6uwXasCYkR6c/7aQ23Z0VIjEiXnQls03hIjEiXQwlt12hIjEiXPQlu21hIjEj/nZnnWkiMSJd3Cmuoh8SIdFlWWkc1JEakyxfFtdRCYkS6yJn5y66FxIj0mVdeL/GQGJE+8lmhTpdCYkRmeKP8spZoSIzIHL6nf0wnkZAYkVmy8GLaQ2JE5pmEF9IcEiOygyl4Pq0hMSJ7mDYU0hVG5F5Iw8prjsOrjMgtZuGQ8pp347y0MSI7mYM3DLy0+YzILeRLjY+V15Tv1C8yIrfoh4+U1zwCXzIitxjw/n1hUZMTcIwRucUp+EB5zWthd7YZUXo4De8Z2NnOMCK3OAvP2RbS1iob2A6Pwja4l8+hNWQL76Q0Q/IqHQKoFNFueAbe4vNFqoVULqJM0R0IqRpSaUTrnBMJEZJcnGuu3I61z/mQkMj5vX2lER1U3lEj6WcBbgsikquS5jgTskE6YF8Q0Q6vNlfuIpuPkSCiA5wFicj+4bVMo0TUxlmQGOySiHgkmsShWSJa4RxIDD5LRB85BxKDNTlivcw5kIjkc01+Xv4TrXIWJCLjwVv837CX8yARmA4iEl7A15wJ2QDyq0f54ojkh9q6ORcSkhn4PPij+Cy+VNUAlzgj8h+eeSUX6Cr9jLX87uixwj7SW86LlAnoZKGTihEFIcmN5ZyafGYky/0lUikg4Y8AAwDFoHX097WzjwAAAABJRU5ErkJggg=="

/***/ }),
/* 59 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_7.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDEyMkZEQzUzMzE1MTFFQkFBMzdCNkMwRTBGRjBBNTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDEyMkZEQzQzMzE1MTFFQkFBMzdCNkMwRTBGRjBBNTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmUyZGJmNDdiLWQyYjItYTQ0MS04MjlhLWI5MzcxYmZiNDY4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiLz4gPC9y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"

/***/ }),
/* 60 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_8.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzY3NEMyOTkzMzE1MTFFQjhFMjhCRTJFQTQ1NzMzMTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzY3NEMyOTgzMzE1MTFFQjhFMjhCRTJFQTQ1NzMzMTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmUyZGJmNDdiLWQyYjItYTQ0MS04MjlhLWI5MzcxYmZiNDY4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNDM4Y2Q2NC0yNjBmLTQ0NGEtOTg5MS1iMGE3MjdlNGNmMGEiLz4gPC9y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"

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */
/*!*****************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = h5Copy;function h5Copy(content) {

  if (!document.queryCommandSupported('copy')) {
    // 不支持
    return false;
  }

  var textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.readOnly = "readOnly";
  document.body.appendChild(textarea);
  textarea.select(); // 选择对象
  textarea.setSelectionRange(0, content.length); //核心
  var result = document.execCommand("copy"); // 执行浏览器复制命令
  textarea.remove();
  return result;

}

/***/ }),
/* 64 */
/*!*******************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/node_modules/jweixin-npm/jweixin-1.6.0.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}!function (e, n) { true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return n(e);}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;}(window, function (o, e) {if (!o.jWeixin) {var _w;var n,c = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", onMenuShareQZone: "menu:share:QZone", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest", openEnterpriseRedPacket: "getRecevieBizHongBaoRequest", startSearchBeacons: "startMonitoringBeacons", stopSearchBeacons: "stopMonitoringBeacons", onSearchBeacons: "onBeaconsInRange", consumeAndShareCard: "consumedShareCard", openAddress: "editAddress" },a = function () {var e = {};for (var n in c) {e[c[n]] = n;}return e;}(),i = o.document,t = i.title,r = navigator.userAgent.toLowerCase(),s = navigator.platform.toLowerCase(),d = !(!s.match("mac") && !s.match("win")),u = -1 != r.indexOf("wxdebugger"),l = -1 != r.indexOf("micromessenger"),p = -1 != r.indexOf("android"),f = -1 != r.indexOf("iphone") || -1 != r.indexOf("ipad"),m = (n = r.match(/micromessenger\/(\d+\.\d+\.\d+)/) || r.match(/micromessenger\/(\d+\.\d+)/)) ? n[1] : "",g = { initStartTime: L(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 },h = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", isPreVerifyOk: 1, systemType: f ? 1 : p ? 2 : -1, clientVersion: m, url: encodeURIComponent(location.href) },v = {},S = { _completes: [] },y = { state: 0, data: {} };O(function () {g.initEndTime = L();});var I = !1,_ = [],w = (_w = { config: function config(e) {B("config", v = e);var t = !1 !== v.check;O(function () {if (t) M(c.config, { verifyJsApiList: C(v.jsApiList), verifyOpenTagList: C(v.openTagList) }, function () {S._complete = function (e) {g.preVerifyEndTime = L(), y.state = 1, y.data = e;}, S.success = function (e) {h.isPreVerifyOk = 0;}, S.fail = function (e) {S._fail ? S._fail(e) : y.state = -1;};var t = S._completes;return t.push(function () {!function () {if (!(d || u || v.debug || m < "6.0.2" || h.systemType < 0)) {var i = new Image();h.appId = v.appId, h.initTime = g.initEndTime - g.initStartTime, h.preVerifyTime = g.preVerifyEndTime - g.preVerifyStartTime, w.getNetworkType({ isInnerInvoke: !0, success: function success(e) {h.networkType = e.networkType;var n = "https://open.weixin.qq.com/sdk/report?v=" + h.version + "&o=" + h.isPreVerifyOk + "&s=" + h.systemType + "&c=" + h.clientVersion + "&a=" + h.appId + "&n=" + h.networkType + "&i=" + h.initTime + "&p=" + h.preVerifyTime + "&u=" + h.url;i.src = n;} });}}();}), S.complete = function (e) {for (var n = 0, i = t.length; n < i; ++n) {t[n]();}S._completes = [];}, S;}()), g.preVerifyStartTime = L();else {y.state = 1;for (var e = S._completes, n = 0, i = e.length; n < i; ++n) {e[n]();}S._completes = [];}}), w.invoke || (w.invoke = function (e, n, i) {o.WeixinJSBridge && WeixinJSBridge.invoke(e, x(n), i);}, w.on = function (e, n) {o.WeixinJSBridge && WeixinJSBridge.on(e, n);});}, ready: function ready(e) {0 != y.state ? e() : (S._completes.push(e), !l && v.debug && e());}, error: function error(e) {m < "6.0.2" || (-1 == y.state ? e(y.data) : S._fail = e);}, checkJsApi: function checkJsApi(e) {M("checkJsApi", { jsApiList: C(e.jsApiList) }, (e._complete = function (e) {if (p) {var n = e.checkResult;n && (e.checkResult = JSON.parse(n));}e = function (e) {var n = e.checkResult;for (var i in n) {var t = a[i];t && (n[t] = n[i], delete n[i]);}return e;}(e);}, e));}, onMenuShareTimeline: function onMenuShareTimeline(e) {P(c.onMenuShareTimeline, { complete: function complete() {M("shareTimeline", { title: e.title || t, desc: e.title || t, img_url: e.imgUrl || "", link: e.link || location.href, type: e.type || "link", data_url: e.dataUrl || "" }, e);} }, e);}, onMenuShareAppMessage: function onMenuShareAppMessage(n) {P(c.onMenuShareAppMessage, { complete: function complete(e) {"favorite" === e.scene ? M("sendAppMessage", { title: n.title || t, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }) : M("sendAppMessage", { title: n.title || t, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }, n);} }, n);}, onMenuShareQQ: function onMenuShareQQ(e) {P(c.onMenuShareQQ, { complete: function complete() {M("shareQQ", { title: e.title || t, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareWeibo: function onMenuShareWeibo(e) {P(c.onMenuShareWeibo, { complete: function complete() {M("shareWeiboApp", { title: e.title || t, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareQZone: function onMenuShareQZone(e) {P(c.onMenuShareQZone, { complete: function complete() {M("shareQZone", { title: e.title || t, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, updateTimelineShareData: function updateTimelineShareData(e) {M("updateTimelineShareData", { title: e.title, link: e.link, imgUrl: e.imgUrl }, e);}, updateAppMessageShareData: function updateAppMessageShareData(e) {M("updateAppMessageShareData", { title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl }, e);}, startRecord: function startRecord(e) {M("startRecord", {}, e);}, stopRecord: function stopRecord(e) {M("stopRecord", {}, e);}, onVoiceRecordEnd: function onVoiceRecordEnd(e) {P("onVoiceRecordEnd", e);}, playVoice: function playVoice(e) {M("playVoice", { localId: e.localId }, e);}, pauseVoice: function pauseVoice(e) {M("pauseVoice", { localId: e.localId }, e);}, stopVoice: function stopVoice(e) {M("stopVoice", { localId: e.localId }, e);}, onVoicePlayEnd: function onVoicePlayEnd(e) {P("onVoicePlayEnd", e);}, uploadVoice: function uploadVoice(e) {M("uploadVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadVoice: function downloadVoice(e) {M("downloadVoice", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, translateVoice: function translateVoice(e) {M("translateVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, chooseImage: function chooseImage(e) {M("chooseImage", { scene: "1|2", count: e.count || 9, sizeType: e.sizeType || ["original", "compressed"], sourceType: e.sourceType || ["album", "camera"] }, (e._complete = function (e) {if (p) {var n = e.localIds;try {n && (e.localIds = JSON.parse(n));} catch (e) {}}}, e));}, getLocation: function getLocation(e) {}, previewImage: function previewImage(e) {M(c.previewImage, { current: e.current, urls: e.urls }, e);}, uploadImage: function uploadImage(e) {M("uploadImage", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadImage: function downloadImage(e) {M("downloadImage", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, getLocalImgData: function getLocalImgData(e) {!1 === I ? (I = !0, M("getLocalImgData", { localId: e.localId }, (e._complete = function (e) {if (I = !1, 0 < _.length) {var n = _.shift();wx.getLocalImgData(n);}}, e))) : _.push(e);}, getNetworkType: function getNetworkType(e) {M("getNetworkType", {}, (e._complete = function (e) {e = function (e) {var n = e.errMsg;e.errMsg = "getNetworkType:ok";var i = e.subtype;if (delete e.subtype, i) e.networkType = i;else {var t = n.indexOf(":"),o = n.substring(t + 1);switch (o) {case "wifi":case "edge":case "wwan":e.networkType = o;break;default:e.errMsg = "getNetworkType:fail";}}return e;}(e);}, e));}, openLocation: function openLocation(e) {M("openLocation", { latitude: e.latitude, longitude: e.longitude, name: e.name || "", address: e.address || "", scale: e.scale || 28, infoUrl: e.infoUrl || "" }, e);} }, _defineProperty(_w, "getLocation", function getLocation(e) {M(c.getLocation, { type: (e = e || {}).type || "wgs84" }, (e._complete = function (e) {delete e.type;}, e));}), _defineProperty(_w, "hideOptionMenu", function hideOptionMenu(e) {M("hideOptionMenu", {}, e);}), _defineProperty(_w, "showOptionMenu", function showOptionMenu(e) {M("showOptionMenu", {}, e);}), _defineProperty(_w, "closeWindow", function closeWindow(e) {M("closeWindow", {}, e = e || {});}), _defineProperty(_w, "hideMenuItems", function hideMenuItems(e) {M("hideMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_w, "showMenuItems", function showMenuItems(e) {M("showMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_w, "hideAllNonBaseMenuItem", function hideAllNonBaseMenuItem(e) {M("hideAllNonBaseMenuItem", {}, e);}), _defineProperty(_w, "showAllNonBaseMenuItem", function showAllNonBaseMenuItem(e) {M("showAllNonBaseMenuItem", {}, e);}), _defineProperty(_w, "scanQRCode", function scanQRCode(e) {M("scanQRCode", { needResult: (e = e || {}).needResult || 0, scanType: e.scanType || ["qrCode", "barCode"] }, (e._complete = function (e) {if (f) {var n = e.resultStr;if (n) {var i = JSON.parse(n);e.resultStr = i && i.scan_code && i.scan_code.scan_result;}}}, e));}), _defineProperty(_w, "openAddress", function openAddress(e) {M(c.openAddress, {}, (e._complete = function (e) {e = function (e) {return e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo, e;}(e);}, e));}), _defineProperty(_w, "openProductSpecificView", function openProductSpecificView(e) {M(c.openProductSpecificView, { pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo }, e);}), _defineProperty(_w, "addCard", function addCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, card_ext: r.cardExt };i.push(a);}M(c.addCard, { card_list: i }, (e._complete = function (e) {var n = e.card_list;if (n) {for (var i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {var o = n[i];o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ;}e.cardList = n, delete e.card_list;}}, e));}), _defineProperty(_w, "chooseCard", function chooseCard(e) {M("chooseCard", { app_id: v.appId, location_id: e.shopId || "", sign_type: e.signType || "SHA1", card_id: e.cardId || "", card_type: e.cardType || "", card_sign: e.cardSign, time_stamp: e.timestamp + "", nonce_str: e.nonceStr }, (e._complete = function (e) {e.cardList = e.choose_card_info, delete e.choose_card_info;}, e));}), _defineProperty(_w, "openCard", function openCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, code: r.code };i.push(a);}M(c.openCard, { card_list: i }, e);}), _defineProperty(_w, "consumeAndShareCard", function consumeAndShareCard(e) {M(c.consumeAndShareCard, { consumedCardId: e.cardId, consumedCode: e.code }, e);}), _defineProperty(_w, "chooseWXPay", function chooseWXPay(e) {M(c.chooseWXPay, V(e), e);}), _defineProperty(_w, "openEnterpriseRedPacket", function openEnterpriseRedPacket(e) {M(c.openEnterpriseRedPacket, V(e), e);}), _defineProperty(_w, "startSearchBeacons", function startSearchBeacons(e) {M(c.startSearchBeacons, { ticket: e.ticket }, e);}), _defineProperty(_w, "stopSearchBeacons", function stopSearchBeacons(e) {M(c.stopSearchBeacons, {}, e);}), _defineProperty(_w, "onSearchBeacons", function onSearchBeacons(e) {P(c.onSearchBeacons, e);}), _defineProperty(_w, "openEnterpriseChat", function openEnterpriseChat(e) {M("openEnterpriseChat", { useridlist: e.userIds, chatname: e.groupName }, e);}), _defineProperty(_w, "launchMiniProgram", function launchMiniProgram(e) {M("launchMiniProgram", { targetAppId: e.targetAppId, path: function (e) {if ("string" == typeof e && 0 < e.length) {var n = e.split("?")[0],i = e.split("?")[1];return n += ".html", void 0 !== i ? n + "?" + i : n;}}(e.path), envVersion: e.envVersion }, e);}), _defineProperty(_w, "openBusinessView", function openBusinessView(e) {M("openBusinessView", { businessType: e.businessType, queryString: e.queryString || "", envVersion: e.envVersion }, (e._complete = function (n) {if (p) {var e = n.extraData;if (e) try {n.extraData = JSON.parse(e);} catch (e) {n.extraData = {};}}}, e));}), _defineProperty(_w, "miniProgram", { navigateBack: function navigateBack(e) {e = e || {}, O(function () {M("invokeMiniProgramAPI", { name: "navigateBack", arg: { delta: e.delta || 1 } }, e);});}, navigateTo: function navigateTo(e) {O(function () {M("invokeMiniProgramAPI", { name: "navigateTo", arg: { url: e.url } }, e);});}, redirectTo: function redirectTo(e) {O(function () {M("invokeMiniProgramAPI", { name: "redirectTo", arg: { url: e.url } }, e);});}, switchTab: function switchTab(e) {O(function () {M("invokeMiniProgramAPI", { name: "switchTab", arg: { url: e.url } }, e);});}, reLaunch: function reLaunch(e) {O(function () {M("invokeMiniProgramAPI", { name: "reLaunch", arg: { url: e.url } }, e);});}, postMessage: function postMessage(e) {O(function () {M("invokeMiniProgramAPI", { name: "postMessage", arg: e.data || {} }, e);});}, getEnv: function getEnv(e) {O(function () {e({ miniprogram: "miniprogram" === o.__wxjs_environment });});} }), _w),T = 1,k = {};return i.addEventListener("error", function (e) {if (!p) {var n = e.target,i = n.tagName,t = n.src;if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) if (-1 != t.indexOf("wxlocalresource://")) {e.preventDefault(), e.stopPropagation();var o = n["wx-id"];if (o || (o = T++, n["wx-id"] = o), k[o]) return;k[o] = !0, wx.ready(function () {wx.getLocalImgData({ localId: t, success: function success(e) {n.src = e.localData;} });});}}}, !0), i.addEventListener("load", function (e) {if (!p) {var n = e.target,i = n.tagName;n.src;if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {var t = n["wx-id"];t && (k[t] = !1);}}}, !0), e && (o.wx = o.jWeixin = w), w;}function M(n, e, i) {o.WeixinJSBridge ? WeixinJSBridge.invoke(n, x(e), function (e) {A(n, e, i);}) : B(n, i);}function P(n, i, t) {o.WeixinJSBridge ? WeixinJSBridge.on(n, function (e) {t && t.trigger && t.trigger(e), A(n, e, i);}) : B(n, t || i);}function x(e) {return (e = e || {}).appId = v.appId, e.verifyAppId = v.appId, e.verifySignType = "sha1", e.verifyTimestamp = v.timestamp + "", e.verifyNonceStr = v.nonceStr, e.verifySignature = v.signature, e;}function V(e) {return { timeStamp: e.timestamp + "", nonceStr: e.nonceStr, package: e.package, paySign: e.paySign, signType: e.signType || "SHA1" };}function A(e, n, i) {"openEnterpriseChat" != e && "openBusinessView" !== e || (n.errCode = n.err_code), delete n.err_code, delete n.err_desc, delete n.err_detail;var t = n.errMsg;t || (t = n.err_msg, delete n.err_msg, t = function (e, n) {var i = e,t = a[i];t && (i = t);var o = "ok";if (n) {var r = n.indexOf(":");"confirm" == (o = n.substring(r + 1)) && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"), "config" == i && "function not exist" == o && (o = "ok"), "" == o && (o = "fail");}return n = i + ":" + o;}(e, t), n.errMsg = t), (i = i || {})._complete && (i._complete(n), delete i._complete), t = n.errMsg || "", v.debug && !i.isInnerInvoke && alert(JSON.stringify(n));var o = t.indexOf(":");switch (t.substring(o + 1)) {case "ok":i.success && i.success(n);break;case "cancel":i.cancel && i.cancel(n);break;default:i.fail && i.fail(n);}i.complete && i.complete(n);}function C(e) {if (e) {for (var n = 0, i = e.length; n < i; ++n) {var t = e[n],o = c[t];o && (e[n] = o);}return e;}}function B(e, n) {if (!(!v.debug || n && n.isInnerInvoke)) {var i = a[e];i && (e = i), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "");}}function L() {return new Date().getTime();}function O(e) {l && (o.WeixinJSBridge ? e() : i.addEventListener && i.addEventListener("WeixinJSBridgeReady", e, !1));}});

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_13.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 72 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_21.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 73 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_14.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAC1ASURBVHja1L1psGVZdd/5W3vvc+69b375cp4qMytrpOaBUVCAJaE2EiAMEtAC25K67VD0pIh2R7ftiFY7/KHtHj/YYctEyQbaCskUFhZGYElMgmKoIauoASpryHl++eb77nDO3mv1h33ey6ysrMyEorB0Im688d5zztp7r/1f//Vf64iZ8eMeScFJ/l4ELCVEABMwwAlqggl4MUgJE2EhOU51h3znaI/jS32OzPc436vH+jFu7XYH+xb71R29qHf3qrhPVbdEtW2q2haRgff+dOHd2eDcoQnsiXanfGqs0z40OVqc2TIWurun21w/M8q2qXHunfGMlSVFAAHENdeKki/boc19gOExnAiGUCm0/I9nF3ktRh3UEAIETfmKnRA1/80LSIrgHCaO833l4GyXp892efrsKseXelPnzy/fc3a1+vC51eoTlfiRlvcEJyQTkvPNDYKIXDipGWvXXFgkmVAbRI04095k4T69dXL0s5snRg/cMNNZ3DPd4t4dk9y+ZZyNox7nFENRjLoucALBNYOuBmbgBBNHnhmXnP/1NipmoJoNKqAqqDQGNaMfhdP9yPePz/Hdk0s8ebq/4dlzvQ+d6lZ/35y7roVBKHDO41BcigiGItTiackFA158nWs3ORCPw3CaKERwzlElZVBlo4Ee39aWf3zrTOehO7eNzt+1e5o7ds6wZ6rFeKG4BFhCzcAHDIcTEFMwsGYZ/tSNmkxICn5ttEXoVzDXHfCNQwt869QKf3p48e5DC8P/y2HvalsimGDOI4XPy9AUUkJEkBBQhGQgml52U07AkHUDixgi+Wczw6llN2SGFxiooOIYqqKx/sauqfZv/8x100+8Z98U924d56Zt4xQu34eaUakDA++NovFiP32jaiKKR+zC8jnRN/78yDJfeemcPPrc2bfMd1cfrF1xs2uPUsUEZgTvsBhRkWxIERBHQlDAacILzRJsVsSl40njJ0VQ1WzU4EDchZ8l/90QooEDiqr33Pa2/MYt22a+8957tti9uzdx60QgqAKGBt94Wy4avJ+kUTWR8HhtHGVwDJNR+uZkSfMO5TwLfXjmfJ8/efIoX3z21G0vLesfp3Z7r2suyjWbAJY/S1QxH/hJHFebGGuzee1/VRVVPbyrTO9/4IZtT3/orp289boxxkshOkFVEIxC88Zam88r0RT1jhih9IohrzC4mV3ZqFHBpWrd33jJ/6tiCDCIjraHo4s1n/3BGR56dnb04NzgX/ar9GsmjtA4et/MmPXTN4Zd345fJ8Our4JL/r5m2EoCePn/9k2Hv/urN21Y/fhd29k/3c77hHNE8jV7mslzkQEz8rHLzuJrWv5RwTAKIftQoEwRxPHYmT6ffuI0//HZk++b69WfM3Ghr0LqjDGahi9bPsLrd1x6Hxff7OU2OTPDFYHUX2VoEsNI52+85/oNf/zf37uFt++ewAdH0kgtgZYoooI6wVl2c7UIhZMfY/mnSPKBlGpK7zFzVGoEEXrR+MLBRR56/FD41tHF31sdyMedc9Bu4QvBpz7Rysv6wvWTv06GvdhwVzI2DkKqaRUFS4OId/aZN+2c/PWP3LUt/sKNW9nZMZJvcPYavFrD4MLLZu61G9Usf4AlzDswQdQ423P80Ytz/POHX9r6/NnudytXXjeOx8UhsfD4VqCQmhjz8la7ZIP5KczcV/i5yxggeOhGh3NCWxMV0KurozdP+zd/9N49Z37j7p1sG3E4Z0QUv3bdyivcwTUZ1cyo1ShFwAnJDK/GbDfx4BOn+MyBk7f9cKl+fKLwZWnGYKjQbjWGqym8JyW7vL/7KRn14g3qcu5gIIE2CZciEcGHQKxrosZqYnLq3k/cMvHM37xzO7dv62QoJzkSSwpe3LpNLz3HZY164XeCKWgTXJxcjnzqwAk+/djxd51ajl+VTpsiVoTg6ZkjqtFqnPfQHG1R/nMeF2PYy81UM8ObIkWgFk9Uo9RE0Jo4rOi0i3d/9O7dX/v4vTu5dWOLVpFDCsMhl8Cul+HpK8b2ljfooMr8asWnnjzOg48e+dUT3fhV5wLBlBQClThCgPEWtJ3iNdJx1lzAJTeaxxzB+M9+JENCwDTh0oBSIiowsILoR1ip/Fc/c+DYhz71yEucXekhQGxM5kwvG+0BSJ2M4IBYZ9wohhioJGoraMXISh3454+e5He/c+h9p3vxP4SywHtPoQlVQ1124+vL4Aoz51pw5U/7uNxMNjMsQi8mNoyFn/voXdv//L994w5umCmpaiMUGQnYGvyyDL8CKRvVW0LEYSJUliidoDjQTJo8eOAEv/udY28+3o3fUXKMHZwxoGjCw7QO7tcuTs1eYdy/zEa9rN9NBl4wrdnS5rb/8p6dz/6d+69j+3igbv43SJ5EaoY0JMwFpCV5l3Y4BEeK4FX5Ty/N85nvn9r+w7new8nAO4eIEKMiKVJYohCjFKMk4TQiKWZS4q/osb6sM/GG9wWHV/TAZ546t/XzL8wzUEehCbkoonKqmQwywTkBcS5PY6CQjPZF4ImTq/yzR461Hj9bHRhvt5wXiOZyRBJKCrH1aCkhVHiieKIvIJSXvdi/bLP0ioeDJIIHxlqd8vBS/djvPnqi/JMX5wFHkIalMwOXyRgn4Exy2GlectSoBgKzy0N+98ApHjm+/Afm/Za2M1qitLwhscKnmiBrEZdRN8yTcw5nCrH6K2O7i8PZS3ZVEEdVJ9pExorWjqfO9f7w9x47xsG5Qd6FFdQcCQeWN2AnBnFt8miOcReGji8dPM0f/eDMB0XTB0YxVi3QTxCTksoO6gIDcyTxRBdI4khmpJTAlCDyV3b5ry9py8RPaLeISRnzhnfhA987tvDBB588w+lhw3BLkz0QAVWCGogTTBMex1CFvzjV5V8/dW5iLhWfHXFKpYlkUNRD6mEfLdpIqpGkOJedswA4T/KBWhx18ATTy4Ju+StgcBHBiVAnRXygBurhkJFQ0K/lDz/37PmZW3dMLf/yDRuYLNfQQ76/kEwJZMYFhIVh4qsHT/DwXPr9MatdksB4gP2TJftnNlJ0WsRKKUWptGGuGjK5wjPbqzi2sMJct08lxY8UNv5lO1KtqCugrgitkgqPjzVefDg01/v9L//g2C++eesok9NFDmHXEEHhBDMlR5TClw8t8++eOn/P5CC9NyaoS9g1VvA/vXMv77tlhoSjlAziVQwXlYEFWg01emhuwD/51nH+4PETaCvDtGRCYZFSDHWBGOM6i/+64tm10EYvH7pedbYGRymKmcOSURBBBHMwWrr3/tlz3Xvu2Dp74O+/YyfOlGiOYIYDIYnDS+DwQp9vvXhGBjE9FM1wzhGrIZvGOty8dYZQK4VZJkgsO2hwtINlGJUS129s854bN7N9oiClhKRIQHGS2feYEog0g/jqkOb1QgmXCyt/HAJcROjF+qGHj8zKN48uAJIBgHPZp66lk799bJGvvHTu3Qp7RRwtb8TkWBzUfPvoAn73JOYEESjUWFahFAfO2FAEto5ntuGW6YLrNnQ4srqaYZpG1HlqazIAzpHsKjHy6xgp/aRWgg9h73dPdt/9pUPLX7lv2zQdr1TmCAAFcHx+yFcOLcixperB8VYHKYRuUlx7hINzA/63b7zI3okWU4WggwHiC6yAqlLEEu+6eRt/++7tbBoLbJxoce/+rTx84iVUHF4SyQzzAa91XvrrEcjrF2Gts0ZXYatejWy50kwWyWns+UH94LeOLe995sZVu39rB+8g5FSb8L2TS3z3xPJ9SLhu7Y1tMSQOKR0sdIcsLSwz4mGoQiUFbW9ENfoxsSqBv7Z7gi2dCSZbcMumNiOSWCbn/bF8IUEyT1tg667ucrPpSsvzxxmES33p2s+vdo6ruQYRQUxpiV334tml+77xwrlH7962lyCGcwhLA+HhoyscWxz+n50Q1vA/zjl6JsQEQRzOl/Rdm24YZYinpx4nHgktXliKPHmuCwYt79gxVrJrvCQ1ONhextPqut+83OtS3/pqf/9R3MCljNKPi0Aufp94x5gXlleG/8fDJ7u8tJT1AgGBR88s89ip5Q11sneUhc9MFYbXmlYxQkg1tSrOe5xmODVaGD0pqKuaYMbyasVTC5HKBG/CjtGCO7dO8oPlBaI2JIMmzIyIB3Q9NL7CdLjizHTX6hv1R8++Xm02S6OeUXWouQeenR1s+PaJxfkbp6ZxGBw4Osfh+e4HC4NIxluGMZACVcWhmC+ILuCc4LyjbyCxJoYWZfCEVHFsqc+Z7gA12DvR4sbN0xQuA2gzw1IiIUQclbKen3+1V5NKvuzv1l4ppcv+LqX0iv+/2udc+lnXcgxdAAmc7Va//PixWbrRCAsDeOT0Kid78R9OtgtwRkyAerwzxJQKn+N5yyStU82EgjOUGjxY8rxwYplvHenxsTtaWAG/cucG9m0uGA6HqPOoD4xqRVTDJHMFqlAjdCxSYAysgSXNZuacy5mHKmbG3YQoOflYR8MVgg+CA/q1UKZEcErlfIZ/AuY8SY2gKQ8ykMTT8jW1tSh6gywZco5ztfLFFxc4cGKZOurLZqtzbn1AAHydcGWBb8Nipf/r9491HzxxriY8P9flzOpwBuS6ZIao4q+Rl0/iEFNUPOI855e7HJlbJsoMHmXfdIutE206hSCq61lIcw61JkMpEBt9jb9IQUhSzDnEbD1zuaYyXEskOsmxOZL1V8oFrUGNrBM+TUiOM6DRLiCZgcrCiEabBlTRuGH7Zv6Hf/cIJweREMK6YdeMuc4ZSyZRagSwXQuDeubFuZU598SpZU6t1m8NPqDW3KxpvpmrHLUa3mVQb86z1K85OLvKfL8hbp0yUkCVGguoksRRp8YwTbgcVAkWES7wsOYcVQJtGN9khhdDkuJV8RYvcnAObfJG+TyJwiKiVb6PxmBRoFbBsuAKb4ZvDKoOvFNGvLKh7XEhXDbl/fJ0rGuuTQjBc26gb33izDLhucUBc936V0rnmumduNZNUYGWE+o6Zw6kbHF4ueLguWU27xknWmBpGPlPz88xUMc4Sl8CPghtranUGO20uHfHKDvHArU6XlqpOXB8lsoCXrig6nOO+/Zs4LqxnLZ4cb7imTNLDKoK3woMVHB1TVG2uG3LKLfMFAiOYz34/tHzLAyVUARSSoTgcWZojGyYaHP7pg7bxwQx4chyzb995Bhne4r3mcp8tY1qXW3jPKXB8rD+yFPnVr4Qji30ZTCsf6XjPFYWqAiaFAn+qrtkwBDNI44lRAInVoY8eXKet++dwBucn+/yxwcO8cRczbjPG5QXKKnp18bUzCS//dbr2HXjBsTBsyeW+Gdfe46FGOi4lEPhwYCNG0b5n8duZdfIJAq8MNvjX33zECdWB7QC1AYyrJjZNMNv3r+LmzfMIAhPnVjkk98+xIuzXUZGWqglkgqajBQjv/iGTdz0tr2IjWBqfP2lef7wyVNUtVC2ilfg5ouzs6pKS5QaT0DpJv3Q0eXhr4Xzq3FckdKLkdbe6N1lc0yXgzR1ytrQOhpixlx3yHPzQ3oVjJQw1m4x2mpzYnmw7iNNPLiCNKzxGjnZUxAoyHDreF842XeMeSUmT+oLG0n0ayGIYSbM92oOLysHu0LHG4pDh7BnRCiLEm+gKMfmejx7ruLwkjAac2K5NkdKoDHykbJk69gY0eDwYsXXXpxjQduMSyZP1lDDGpF9aQAhaxpWVbxpudBP426xtl0Ot76zmRnmfGaxryGqGGrD0za7Yz8mnl9JnFgZAImZkcDb9m5k60ggJaPlM/EgIow4YTis6PUbFj0pm1vCztE2o2JoHbMPNcEMvCXQhKjivKPtml3ZyInKZGwsjH2jDtRITugNK2KE4IqsUjQlYIS6ZsfMJHds6NAJRjBldrHLwbPLeKf0rX5V0du6+5McLSqCitDyQj/ada47SLfQ7MbapAMQt77/X8mwZkbyDWfqHIUviAgnukOOzc4TEcqWZ/+WScbaJVHWGLlEKwhlyJKilaSsmCN5T6ddMDPRIaQaXxY5PQHgC2JZUjvFAlSuxDvF5VOTxCPBsbHl2DRaEp1joRbO9gb0NAuKcZmQ9wJWDblrc5ubd0wxVCGK4+hSzYurIKlibGLkZVDqcm4gWQ61tdFIBBOS2U2uHg5uLp2y6guKxkdKrDHvrxoWrulOU0qYGCo17VbJ6YUhX3+pj2lebrunCm6YdlBHVpYHDPuJ1V7N+YHQritOnR+wNEyIU2ZaMDMSWKqUamVIHRO1JWI1RIY1hRWICUpiqSiyMq+qKWNFlWrapWPrZIkCZRV5bjGyoIKlIYOh0V+tWVWo2sKNO8a4fssYpYeT57t86cgyFiPeF/Tr9LIJdbnJVWCouCwdcg4tAqmubw5VTDfpj0kSqSpOHDif9fLO8KoMh0NOLK4yrI2xYEx1Su7bOcXhxUi/StQSCD6nwE08RSF0BxU21mFqJHDDhja3bmpl/GeC1DA92aIMDRzC2Fwoe0YcsrGFq3M209kY128awQNBjAWDiULZP11QRnDiqKyFedg1NsbbtrQpXf685xeHPHVyiVoCThyOxLWQk+sTr5EJJLNbwiDqfhGfU82AN0jXKB0zM7wDU6OG5magl5SXVmp+eG6V+7e0GS0KPnDnTm7YOI5To/Kewgt1HYk+sHm0xfaRgLfE5k7ggzdv4oapUUwS4gMSlaJw3LKx02j6hVs3T/IP3raLc32FUFAnQ4Lj+pnRxoUJk63AR+/czi/dnMl1AwZ4Ul2zZ6rFrZtHm3Rw4sm5ihcWVvEuIJaTd+lqzBeG6lrdAVl1HW1fqIwdwbsc72uezmvyR38VgzrncFijuDQsZeLEO8/RbuTRU8vcv32MlGDvhg77J9uUPgNwlSzxxgQzwalmuOUdb9g6yi2bx2gCluyvXBNpmSIG+6ZK9k1uodYsiTSD2GB/UkRdAFP++v6NeEsk5/AKQ5M1oTTBZQbt3HLF02e7aIyUrUBMCQmOq4WVa8m+XLNAo7WSHS6pTV+Mvy7ApWt3AeYcZVOAsObYz65WPHpylWESitIoJFEUWcGxZqzYFIdpc0IvLtdhpRyzJ7Kvtqa8KV+frZeNDNerjfJgOsnYGZ+vxXvX3EcukiODAjollN4QSTjg+YXI0yeW6DhIOb1MtB89L9EUfswEMxszM6yZyriGQLhWmaLmyMObomZEa6DVsOKF+QFnl3rsnm4TRTnZjXzryBLDOuaKkbJAotJywh2bR7hj2xgAi4MBf3G6Zjjs432BJSU4uGvHJNdNlpiDIwsVPzi7Qr+OmbNFGG8X/MzOUaZGA9GMMwsDHju9zJAA4mhJYi467puGO7dP5gyEg2fma16c7yMmDHGUXqiqSFlc2bC5kGJtsDNprWYjwQldJzKWmnj7IjUwVzWtA8GjqhmUY1QqeBFKhPOrQ75/boXdMx2SFMwOIn9wcJGDx+YglLRLYRgNl4b8+huv49at43iBUz3j098/yfOzq6g5fFUxNV7yD959I7snSkTg2dkV/sWBU5xe7DNQD9WQO3dN8obJ3WwYLalQ/uSlBX7/+ydZHjoKL7hY0Wu3+Xt3z/CG7TOUPnJ4vuaRY/OsVkYn5MnhcOvkzlUJa5cDBGGdzRoEBwsikiPqZicnxUyUpKt/sASPRQjOMDx1zLWfAWO+V3PgVJd33bSZjoNt7cCwP+TQ6Tl8Z5KW1PSlZDjscnqlWh/MQjznFnu8cHwBCwUuRcZXWwyrDPxxwrkhHJtd4oXzPSra2LDHltGCTuNg56Lx9GyfH5zrs9Sv8eaBRDmaaJfbKJ0RcTx9bpFnj56h8B6PUkqWhzrvuBqjahfJRqW5dkRmnXdyMtaJMKiJWUyFeFmXll/RoJb1LmvKaTUofJ7BvpWx3tfP1tSVIBLZOhG4d9cEfuMWJCV0pIMVBc61mB8YvaomOqPdcVy/oUVqj5F8iYRAGGkhIawzW+2WoUUb8y1G2gFGSjZMBDZMlpgosYaFbo34gDpPe6SgHmnz8zdv5PZtHaITggmPne5xZHlIIYoLQu0Dw6LVlMldLZvaFMKJx1vC5zzcSRdCOGTikCLH5UITqv6YivyL31X3e3SXlzk0t4yzvHncuXmUDS1P3wdMjcKMgDC/WnN+ZYCoMiow2hpppJmQEqS6Udg1Z6gHilQx57xqQ8wzVRa0g0fMsVop5xeWGVSR0VZJN0IrRe7fOMLuiUmCGcfmhxye7zLUXGCHa0ikWF/bxrRW+tlAqmYeHnIt736o6y7S1vnJ15QaXmOxWi1WauWx08u5TF2EuzePsnsUTGoGKliKRIxz/cjJHjgJtH3JVLuFpkQEhpIHpKoy8RIREp66kYtXqnSKwGSnbEomhZUBnOsnurU24bSxqR24e6bFSK734KmzXZ4716XyBSK5yNjMKMRetr9cVSyMoZIDk+DdD0On5Z9bqPVCIk21iZBeW/WINBDjbN/47qkVPjiAmRJ2jI/wpu0dFnurJDHKmIhR2NROJK0RgRGfeMOU58Ypx+owEmNk+2jBRJmzBx6YKRJ7xhw6NFKKbJnqsH+mhZjhEXzVZ6oN14/DSIj0pOCBnZPctKGViRUnPD27wrGVAeIDThNVzPxwEGjG7yrUpzRRX7aWmVAG91wYaxXP6XIfk1yPua7d/0mIyKKyKImD57ocXxyyaXNJpyP88m07uGXHDJVCaHzX5EjBzqlOLvj1jvt3TfBbD9xIHQ2tE2MjgRu2jTeZXrhp8zifeNMeFoaKN2W0XXD7jvG8Jxhsmyj5tTfvJcVGkAvcsmmMbZvGwBmzvcjxxQFL3SE+tDI54wO+cdpR7VUr+l4RBDXpHlWldHIwTHX8MVVFC4+/CLxzDfLyPAivfuJ2cPQU5vuJF86vcM+mDZDg7XumuG8HmaVaCyIcBEtguSHD9TNtdm8cxTe7bEzQKhSsAkr2TnfYv6GFqsuhMmBO8/txbB1r8zfv3EbhoVdBO6yVtmcDzEVlocqUp0+KFA171SxWb9cGqbTJhSmQRGk7d9RNd8plhJ6tJdjWtZnXusxf/exJcwuNpYHyg5ML9KtGD2OJdpEIpgRNBBIliuBJyedKD+8pyQRNSIm2NzBHkpJkGUcGhFLyTA2pxuFITZm7AAUKUWmFrMnHjDoaSWGhB7PdGu/yyCYaazbfX8uuoiKZyFkPAOiNtcrlMN5pUXj3b0zcbymZvTfVJkvprtmwl5uxsWhRpJrF2jh4Zp5zg5odrRJxwtxgyHPnIWlEJIuHE54QIxl+K7FVIIOIM8MHRw04Z7nYo4oMi4CZo8RwEollRKtIy5QYhWiGb5cMVWhbjZhQiJGqmi+9OMvJucWcIRWPE4c4W087eVMUf02iixziQ3Dy6bFOi3DbVMnXA5+bH6TfovQ4UdpidDVkwuMqYdqVT2oENXpReWluwPlezdbxkuAc3znc5Xe+eYbTc4u0m3xY8gVeEwFj2JTCX8ppJnl15ckrfB2vlE0mA0tZLNGPhm94gpDyTB5IQJ1QtNa1zJeVCWUoBS5GoitI9ZBOp3jo9s1twh2bR9g6OXrgdH+ZCQQnnmSG4ydQspPiepQ0GwNPz65w+5YWJMdNUy1mdMgPl1aoyxHaDkRyubuk3LXi0jz75Qby1RR7ayvoUpWfpQvvCy0P4lFgaEYLpaURvODNSOJfwfZf/H3dyJlEE0lgQyGP375tGnffllF2TxaLODu+5htigsK/dnmjSOMbg2PRCr59fIlurwbn2LlhjH2TLYrgSWUbDSVqMDChlzwigWQeJX+NhFyw4fyFF55o2W1c/FIJ+Xu78IoEIoHkAxqK/FUc3ktmtjRleOQ9atAzf1V8mppCCxNF4fi2ti7ev2OCsHWi5KZJT7so/5EKn9Q6c5HuJ1A7as5jyQgusTqs+N7xJY4tDpgY6yDi2L11mu2nFjncq2i5hBOlVXjwIBYpiybClksSbs1sNXd5VfTaTb9i+duFEqXclsMzGCZa3tP2wlCNoTmcNGWhl+ipLl0VvgmZDUFC+Ed7Z0a4YdIT8I637Jnii8f7//65c71PTnhH33lMEq/ZA8SEuExaF7HmdC9w8PyAu3YZFoRfunUzW0dhdnWI9y7TZ5Ir5gZRKS+WVSIv1/FfxadmqWPz3pg33Yt5YzPjm8cW+c7pPstJ2OAdpUWGKRJ89uf1VfaMJtan1sSG8c6/v3vvVqY7gWAivHHPJu764dz8cyfm/4KR0XeY2Xow8FqOsK6zEsSM7lB58nSXX7ldKCRx26aSGzbsREwxHMMEIokWnr5m5utlM8RdWSL5aoUUssZtX8woCdzxwgLL3z3CwydXGSaHy6WoOMvtPC7N87+iWjoz/VisvrF/Ymz+/t2bQCAkMbaNFbxl5yTffHH+f5wd1I/4IvxEGhxYoyVISVEJoMaB2SGPn6+4Y0tJIVkc5sWtpzha3uUCL3HrnSBer2N6tM1Y4SktoUpuByWCotQqFFeZVIpQpcRUu/h7b98xwa2TAVCCIzMtd+zaxP4tS48d++Hpo5PTxXUiKQsUXsMxtBxEtFBc2UZ7PR4/uchDz55kpRpDYi6u8Gs7vXOMeNBqSC0Fzl+EA5FXzFSxK4t+xV2UIlpb/unC8v/TQ0u8MN9DRPDeZ4Idy+I2c6RLcPqlMzcZRNXjmyfGH3vTnhk2jhimRgBHSsat0x3etqtjTxz3v7mM/7OJKjH0WSMUGhgcLZO3MUZCWaLxyuuv5XN5UMQTNGKFQ2PNHx44zZcPdpgOxrhPnJcWUY0pn1gdJJwPuJgo2o5aPe1qQCoKojiERE1ggsiquqYWNqJAdAVBI0GEfhJKInVdUxcd2iSCFwTBx4qutHh+oUddR4q1uL1xFUPyjHMGqya0A5QovZQHp9Rcd2YiBMev379zzN6xZxIwKucJrqkAHm/DX7thC985vvSVrx/rHlbv945YRcRRq6KNFtSCB5/Vc8LVZUFrDQ+dc0goSElY7A1YXO1xWDxJE7XAjnZiZGoUzDO/tMqplQEVxqAYp1XVeGeoE4wErsTVFSHkQrdQhNysERjiiHXFVDC2TY2wY6LDfK/Ls3PLLMQAoWTSKVVapShyvwIu8Z/Zh+ecUxkKisKTqgFm0HLgiSCBgenhGyZaX/m5m7YyWvimzVQGgRCM0mreunucX7h5q33/9AsfXqrtsemQstpZQt60VNGUB8FMr8nvrjX5SmuErvMkcetkhNmQt+6Z5pdunGHX5mnwLZZWujxxfJ5Hjp7jyTkltdoU5CpBJWDiEXEMxCOuIAG+yOLcKir7tozyvhs3c+vujWzvOFYGQ5493+PPDs3z6MkVegqeRore1KBeSrBnzWvuaRDJEyh4wTV9YVSgZfHD79631d5z3VROvZtQYgTzHtWEK4TCjHfs38xXDs4+/qUX5r+46ov3ihqYZjTgG+Ga6ssKXF8dUem6vjNXvdt6KtecMEzKA7un+W/edj1/fd/EmoYWr1Ms7x3jwWfarHzvKEe7un5O8Q7ViHN5tZTBk+oKVwSGdeL6qZK/+8bd/K3btzHahtIZWIf337iBOzd2+H8fPsJjp7sUJqh364a83C4vkmv6taqhVSIGVUq4ULLSr7745u2tx9976xY2tBSahCe5kaOs48DaEjdPFrz/tq3snS4+tipBYwMz1mkuDK/psk0NX4FovG8qOHLXhuCy9ooUsbpie5H4+G2b+MXrJ2iJ4tEM6B2MjpV8+M4d/Oz+TYyIURnrVYNZUJf5zkqNEEImQcT4uRu38JHbtzHdSpTEpolUpET5+f0zfPCOXWwcbbPqQiMacC/rdHmxYauUS+xDCKQ6IwR1gVpNx9rFxz5wyxbevGtqXSiRW3d5XG7R6UimiAuMl8Z7rt/AB27dvDxG/auidd44nFv3j2bX1q3HXSYl4RpSt/COfbs2csuWcQoxooCK4tdzZMrOlvHum7Yx2RJizFJ4wSi8bwrDdL2BQ1VV7Bhv8449G9k2mqVF0QdUhMoHek4YLYx37t3AzRtHqOvqwsqxCx2I1jFxozqpUgJ/gQOok9LS/t94YM/08ntv2850G/BuffJcKA81wePyoKqxZ6bkY3ds5e2b2w91tPr8aiOz9JZyswTnr6lJQqzrvBycQ5xvVkPmWVNK7J1osbHM5wwuV72IKeIcwTnwyvRIbhtSiyOpNZ8h62RH2+XILaXEzGjB5lEPKWcwPLnVkUfxTiAmNpXKpk6gtNQM3qWdhPVlJDvk1Ao+gCZ8qj5156bRz//tO7Zww3S7ccQZ5ZhkottFA8VwEkixWlvr3LNzkg/dcz1bJkY+UqudhLzziXNU5I3qqhGVz/40qVIlpW60WuY8Jo7VuqIqWrmjjoH5QLKQhWFmJAnooNe0Z/aENKQTBEs1wcOqugs+umjRH1as9CtwQstVzf3mMiFHAi+sJFgwRwwFUe0iGu8yDRdTxPlApXlzTikdnSj8bz5w4y5+8ZYZSq8o2gyiYiaIpZziW4MTRVGsN+hyDj56+wyfePOe4e4xu69fVZVKFqSJD0SXp7xcpMC+uDTm5aU5OeWw9lprqP3kqS7PnlluOl2mHKO4TPvlNDR84egKS65gRCqG0iaqEDT3Ll0jTNokWt5xZjXxzKmFXGCnAaphhoQGRa1EPA+fWOHkuWUER4e1FE6kRhi63EnNFKQ26labYUoZlw7rasLrmz9xz/b4ifu3EUJe4UJWugXn8kbrfF7+l47UOqHr4CNv2MK7r9twZrTt76nFUcVEEYc4gyINs0C4GYi1JFghXLFibu18L86u8ucvnue52R6aPKoBMU+wXGj2peNdHnvpDN1uj3aRqw+rmJDgSanphYVllzKsWBpUfPnwEp89uMhq7aAoMYMCgRB47GzFfzw4y4tzK0yKEn2R3QhCQaJDpG15U/POoN9nVJTaewaa7nlg7/SZj9+1g32j/orEg/+d3/mdV9zs2lE6Y7wV2DfZYa4fZw/Odb8VzX0iimfUavqhk0fW5RykNHp8azqmX83rdsT4wfkeh1cqDGGqFZgKwsm5Hn/0whyffPQET51aoYpGKQ51PhMWjkzUSG61LKHIJUfOcaIbObrQpbDIeKtFu/AMKuVrh+b51JMn+IvD86wMDd8IJ9Q5aEgfa3x2co6Io2XGqglq6ed+fv/U937rvh28be8kooZLKUPMy9W0Xq19cm47F3jm5Ar/5Fsv8dAL3Q8J7rNjNmQQWlhMGSpd3D1N9ZrS20mF1RTZXBp7xhzjY6OMFI66rjm8OODQQoVrj9BWzb1cQ4kTxbQmFh3ElKIe5rrZlDmGngho5MaJwPaJQKdVYmacXOpxdKliSUuCD7RiRFHUB8wHNMacP3GNDBNjUEMS+/A7d7Yf+l/eeT0P7NuAczmPJ2aI95ftdHFFo2bna5h5vBjfO7zAP/3eSb78wvy7FPfV8XCBCB5GI7l8gRJrAkqSKyfO/NpO3mj661A0wliBZIz73OmydGtli0ZAMSf0LD8ToNCEIagZIWUdWGUwTAreE2OunRUKOl4yxgbEHN4ZqTGiS3XeVEOBpkhLI/PRvftnd45+7b/7md38/A2bKAprimiUpIF24NqNeoHZMfrqGJHmw0x45vgi//cjJ/jCoZXbFvv14+3gy9HCoykSY1a3qDaR1NVSvHXEm0JZZHGbWFaGiNCWhDjPoMqtQqTByVmS4xkihBQxX2S3Q1bxiWmux2pqRlsuI9CBCYXlpl0qnr5r0bK6UWkLwRLRFSzj0WoQJ4Pe/cCuyWf+zpt28bP7NlKWOfPrm8DDmubfr2rUV+3K2LTkiGI5j2O5Eevzp7v874+d4nNPz27tDqrvurJ1Xcs7yljjXH5ERu0yFrzSUQikFKnJtUgjvolkJJDMKGKFK4vcql4brKkZM1/ci8VSxDmoXdF01MhFy4NkVE2aud10GRhmUS2lKGpNg1nnICkD56nMjm7v8JY3bp84/dtv2s79u2foFGspeKOOQ7wP+LVo7DJdNK7Y6VfWBVXayCwhJKM2x8mVmn/x8DG+cvB4eHop/V5Vjn68I8oYGVRXJlfVDVTOU5KyglmzkbymHDlJXsZr0Y5vXEBtuRitbTV9VxI05nC1CbWDQNRcTj9BpE5ZbOZclj2q5QgoD6oxTA1DNaxQx2c2tt2vv++G6fhfvXk/d+1sZEiqqHMMI3RCE2w4w4m/bO7qyj71kjqAS988PxQ+f3CWTz9yhGdOLLxf1T3kQhlqE9RBEXKiey2/tFZo5hv1cWHaPK4kP9lirQ8rDTSzq8hkgimJ5ukWWHYDzaqLTU3BmDdSXTN0AWv6FjjnGCSlSIorA0ljDGnw4Vs3j37+g3ddx/vfsJUbxv3LCh8uxw28Wp3VVY16ZWVGZr+/8dICn3ziLH96ZHl0YaX3r9piH+t0Olhd5Z4Aa80Hmk3NGkltaPoFvGzgGuMHEeqrqeOtyYw2rP7aZ5lk1n5MlGFSkvO5dKge4jUSQpF/F2sWk/5+uwz/9Tv3TK3+xh2b+YXrNzLWEfoqtN1VStNfZbK9tsd8NMy/OseRhSH/4eA5PvfceZ46vXrHymr/j8c6netSE565BqZcTMQMJaw/50QaP3mxj7+c7v7i6w0i1I08ybvcqMHMchpEct1/3eiygmaf6oqs8O5X1VFXhvfdtbHz1Ptu2sh7b9rMbVtGG81WVquYv/zyvlo3otdm1Ka4jKbUZhCF7x5f5HNPneSR44tybKH/lkHiwdqVNzvfPApJE5Yy+VA4Ww9Jna09TCYLv6Ja3kCusGq02Shc42BezjI5tE4k7yicNGSz0E/pubbob+yaHPnOm3aP2H9xy27es2eKqTIXAycfmvBbcx9UfsoPpKkiOKd4l6uYXUqIc5xdUZ48vsC/fWmVI7PzHDo7f/dKP/4/Iu4B5wPJhQbDapPQa97b+Dtc7mR+tW7Ba9lOs6asvsGca/xD22VxRJUU0/obo+3it3dPjz5x/9Zxfub6zfzy/lFaRaAIzSOTJHfAiE3bzlJ+tBZ2r8moF7eszwSOIikBHvU53RzE6FfCd4/O8YXnz/Pt012OLA03rPTTh6LxD03crjYpN7oJISug6wov2SeqGnrJA2suXXZeY74GyR2EtDEqmnsM9nHHiyL84+m2e2hHW+fv2zzCL9yynQd2TzHTbuLddSV0E12tPQ1O07pY+Kdi1AtxZp0ZWSlICikZRWhEGJZTDEMcs6twbBD54cnzPHH0PE+d6XJitZ7q4e9ZWq0/PFD+Fj60Q+Nf12roR4hXToE3ipY1ctjMBiXp34wHeWiyFQ7sGtWF3dOj3LNnC3fu3sLusYItndzcAU0MzROcZSSbYQexCbH9q4Sgr7tRE7GRx+ZO604MNLNbyYTCKdpwnl5ylcm5bs3B8wNeXBpw4NQyR2YXODHXlV5kLBlbo+q+2uSOiLu7TrbPzDYDO4ASqICTInIOOFQEecILTwXsUCF2ZiRId+tIYTdvmWbflhlu2z3J/nHPnvGQqTonmd3yQsIIloUTyfx62i+stUFVW3/I149q1P9/AFwUiCPSuhF8AAAAAElFTkSuQmCC"

/***/ }),
/* 74 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_15.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 75 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_17.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc4MzkyRjQzNjRCMTFFQjk1NzlFNDFGNUMyQTg1RkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc4MzkyRjUzNjRCMTFFQjk1NzlFNDFGNUMyQTg1RkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNzgzOTJGMjM2NEIxMUVCOTU3OUU0MUY1QzJBODVGQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNzgzOTJGMzM2NEIxMUVCOTU3OUU0MUY1QzJBODVGQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoDiGWUAADNtSURBVHjazH0JmGVleeZ71rvWvndV9d7VG71Bswi2CBgnLiQuMASjBh/jFmPIMprJPAkGnieTeWYmmZCok5jIRFCMO2p0FCMKRAGBhm56o/euvWuvuvtZ5/u+/5xbS9fSdOMkhdeuuss5///93/J+69XCMMSr/hMECHXAQwDT16FpGjz6O4AWvwEW3Vej1+hFBPT0GDy7z5lpHSpObzzlFDfnysWd06XC2qLnrS8HXoPr+238ScswzsMIJpO6ebreTJ5ttTMHOxKZ452J2hMdqdqRxlTWqQkD0F3lP74X/+MhhC8PugY9THkH6Bm9umxZXUD00LXLJoH2ahKWr8VELNM2ErxwubTOLwgB+ccLfdqUgVGvZB2vTG89XBx727Hi2HsHnMKGKaeCYrmEnO+hUCkj5zmoaAGcwIfnefJ5Xddh08PQdCQMExkrgVrLRp2VRE0ihWwidWpHuuHBTjv7yBXZtqPr7Rq3PuA18CESkYnoMCNiVreu1hjyEjUN2qtAi1eFsHOvwYQNiC90P1qsqUecAJx1C+bhyvi1T80M/f5IYfodvYVpDBRmQFyKEhFcMw1iFpMIH8CjUwmYc+jzoRyKJvcxom3LPaP78gGGLvGkR/elzzTCRltNLdZkGtGdyH5ja03zX+5s6Hxmc6rRq2fq0f+Yc5mL6arEwYoJQuZoIjwf2qLE0rT/f4RdSFThykBxJTPCKBHp9MxY88sTQx99bmboj/cXz5sHvBzKriPE0y0TmmHRZjQYvGlSI0xYdUDq+rEk8EOHUinxfePnA/ocP5QmIlVAh1QiCdD9EKsz9dieaPKuTrX+2e6Gzk/tbOsYayOZSgfqwJkHWFUZoiLm7+nfFWFZxFxiiVOFiVVPTPXd/92p07f9rDiIsdAVUcwGVlWs+cHXEGIQwZgjK3oghBZVwjqPCRldOqD38mcQEzyEfEabs4ayTpxNzwfEway/A0ODW3FQQ2Rrr2nA22tWf21vfdfdr6nrHOywU4qDWU0EoRA31P+NOXbhZ+MbHyhO1v5w5uynvzf88rtPT42h6PsomZpwUdLVUbKC+AJyCorrFKHYcARMKtqkzn9GtwhIPJlIIb1uem6Vo+Uymibqko0TH4DJn6WHqZtEMJCa8eT9KdK1hkucTQfcla7H3qauL7ypbdNHX1fTPdOqmcK+Lq3DDPXqXhZlnEslrMt6h1dIr7GIsD4yhG/UBgK29mJPQ1H8pB7hGzr66N37x/s++JWBo58+MHxWP4ciKjW2XDNJi+Vrsmgq9Tsr3vyYK9qXe9hzCbDwWvx3xaKDIw5OOD421DQGb1615aO/2rr5szuTjYEdsFoIlN6doyrY/plCMEYZ+iVybBhzglxX9JoWRs/z+43IcPj0qm6JwX0xP9b1T0OHf/SdoWM9fbqLsu/CsC0k6Uh00gsmLYaYVThCfTxckgsuh7hzCbvUNQylvIVYFeKKjGFgV7Lp+Lubt73h9u7dfTX8Jl+hB0+LmCoSj0AnAynPXAphGdnozFmaugTfhBcbL5j0oaYLMEWFoNEP8/3v+0z/cw88Od5Hh0GiTpQzbUusa1hxYXn0t2kK93ukEvjvZRe1AmEXcuXFcmzVuFqkVghFJDTiXFJThJNpLz42WnXY17n5/b/XseeB7mQNSRmr3UDUkx6oa7FkmpeqCkImpKHPAmYo3eZHr5us5+nF00HR+tbY8YcePvPiHccK4wgTNi3eQB2t06ETqbDOYrWhG2Jg5EAWiP2lcOtyhJ173bnXmft7mmS7QJznmup9Nq3ZJwL7pB4YF9/Y0Pnluzp3v+fNDWtdJqJDOpnfw6JZoo+kLpWw/jzxVwZFdKuvcKRP9zji5bOfP/v8M1/uP7ht0PRgEki3K6RL6ZMeXYENiZw0cbYZKqLG9/L05Q3BShy5kjFZThUI12nKhjAXumEQIRQydAY7N7TyQgH76rqPfWD93qtvbd6UrxWrGQi60HBxDsTiHBuDbvrP05TRMr1ZJ+VQfqr1rwaePvrN6VONFceDTSjKsUm8EoRe/eggQpEjserCqayaSZeFsYezgFAXY4UXW+srsdTxD0tTwlOIg9fMqk73AiFunrmT30Ne3/Z008QHuvdsvb1120gTo4bY4OhLr39luMU6hajh0Ads9kiJjct07f3Fkc7/debnx54/35sdDEpIpVJyUUe8pQC2z/clNUKqxGfQrikjqMC9pryjZaz2Srr3ciDQvO3xAeuR08EM4Ku/mWuZNywitkeqoStdl79r7Z4t72/bMdBKWKFk+KQKjGXh5pKEDRhKBZrAKo99c0+d0jOVsZa/Pv7E6UcnB7KTBmFD0qlpz5DTDgwFG2wiZoFuwH48ewkxnPIiI7CU5Z77d6xnFxJwrpe1FGFXQgSiU+nwGaHw4XuOK/YESVIFZdKxBBWKhj6LiBwHPcjm37t+14Y7Vu8c6QwtgVsreWdLwC3lq4uhCo0I9E9n7+999sxDU0ebk97sRi+JW4jASZfwJCMP24BZUWaRAy4sjiZxtUYcQ6ZQOMuBijkwzBHxZSfCUDiaDakf4W2TDIzpq98vBwczHGN9ysaKYweVwMHqRO3Yhzt3r/tI11X5LN2jbIZkT+YwIm0hJFXn8sFFrvFil6cFMuAz5OTOFXPm5/uff/aR4cPNSV15UJfz4xLGTRAB+eyYSxKmjWKlDCudRJAvIszYaDIyWG3XIkGbY4PS5xZoHZMIibMyxDWBF4ju96ID5kNg4+Bw/OES41Mxk7HB9cWo+Qph2ib6ytPN3+p/6dmsldz54fbtLoc9A00RVOwI0YRtic2irS9JWHoT0U4jzhw3XHxp/Og/fGno0JYp3UONnlhW3C4GLiXFF6cDIjyb1mw4hIXDFBm+XAGvbejCDXVd2NHYKYRl3UdKB4NODk9OnsXPJs7hYHGMcLFFomzAIwKzSxswNoVSPVVceKnhZBWordoEmzB5MeHj2cL5Ld7Aiw9tSdf+2r7abhWCjPC9Q44G42J4yngviQrcQCnzLw689I57e5/8+rBfRp1vo2DyaVxexNJi6AJl1UgjwCPZS9Nubm3egHd17sQN2XbiSkMI5NgqMM2HPEn3fnL6LL545nk8PnoOI/RaPQF5OntSIwTy2BVlI6RdHsfy4bDhZW/RILc3JBfYS+hwyhUQfXFzc/ddf9Jz8+evtBsE5ovqIQeDsS6rUKbP4rECtop0GI8Xhzs+fuwH/c9OD+h1yVoYdBqupc/GQS95AyqSFZCI5dwyWn0LdzRtwoc2XIdtdJ88vefs1CjO5CeQI0iSIqizOdWITdlGIfL+0igeHDiIr44dx1CxhKyZINtjETOQG60px/Fyg0oSRRMVowvXsrFjI+d7HulfDx9qu7L73nU39teR9BWIAzJEVNdz6RCspXUsL34ocPQvnN3/k+dLo3oqTVzha6jYSsz1OZb7UojrEQewgSiUCqRfddxc34VPbNiHLj2FYbeEz04dwf6hcxgo55EvFSVmu7m5HW+uWQPClLgq0YKWdTegO9mAB3tfwBE/J7rVIgnj4LURXtqBV1UcGU6TdKbnM0FpoaxmxI03EBDFyiRv3xk+9qN92a6tb+vYFGR8ZXMMy6xCXOOTn/zkBdyXp1//7twzH/r6+PHfmCIusDkQTcbGcx0RMyOGFJfKsbSQIPSQKTq4ObsKH9tyA3YmGjFGMv3A+YP43Iln8fzUMEZCBzO0ofOkhl6eHkHv1BhKZClWNzRiNR3C7mQr6tJpDOanMJybkgwEr08PL31tcfBJYe0wwuC6ODeMS0JSWWRlMOM7TTNe8fz6urbnuu20qIKAuJfRjMYxlpiwcwn1bH6k7rO9zz1xwBnTUsmM6DA+sQQTmJQK479L0Vvxj1kh7vcdXF2/Cn/Q81rcXNNF2NfDwyOH8KlTP8Wo68Gyk8R5BL0McpVtW4If42EFzxQGgVIebdl6dFlZUg/NaKmrR6lSwcTMDEEjkijj0g9e9CtzKHuUhMU5kBQI/FM6kjMjZqDc23PO9JsadPP+axpWVxJE1IAMmG8Y4j7oXuQVaR7jRbIXpPy/PPzy/UcKk+Tk24Q3ySAwLiLc5nKkVp8l1lIeEKFgBXlYmVu6ZGstziq4Lmbo5tMJFxvrm/Dh1XtwS2aVGPFH+o/j708ewumKyhAkeHGkLzyL7+kjSxKZ4uBOxcPfDh3HX5x+Hgfz4wToNdyWXYNPbLwe13R00y1DSTyyqmG1wOLMsQoOV7JXlfTmB2bmBWoi3WrSnk0iEONjfjAjhezRkuHxDYfsDKtbciTCUP/66Kn7n54cFEMrzlToxargHmVFGVMSCz82enrVV4aOPNjr5znXDMuNbqzH3khYDUMsyRFsnMiYVMglZH2ncWqEfO82M4lddjPuqFmPu1q24uZVm5CmRZ8ujON7Q0fxfH4IJTqBIhGSRZ7joYKn2b3kjXKykVUS4eABwrQHZvpRn62VcF+3mcXW1k5Y5Em9WJlAie7HoUo9Sutw8Ih/LxnK2s/15ualv+f8u9wPe28sxY4e7ibj+vdXZJpzTUaC1EEodzI++cf3SI6Hs5uTRLa/OvfU556Y7N9eton6li1IgHWMuH2hgoiRU7Z0dImdYY4TM9ZknUyi3WPX4NdX78YHNlyDt67qwZWpFqR02TZSdgpWNom2RAbttLj6CgduST4CZoNAvCsxHNBVFNNQ3tiJMI8TuVFkE2lsyTahK0hgQ32LIIPRaSIuhwE1izjJIDhGvMHqTDOEK5dUBRerMqAOi52XESe3ZktN81e3kZ1wdRUG1zgOyUFrJtYPZ/qbf+fED0ZfLkzTZhMqPRPp1CAK+4VzT3bJsB0pcE8TfeM7Feyr68RvrduLX2pYhyQRqUwcOV4poERXqwkMZEmfsidm0eXYYB2qTOKZ8V48PTWA4yTuE+SVlYisFUYkprLM6TIdHnE0r7+TnMs7u67AXd270W2lEZZ8/OPMMXxu4AAOnO8DEqTSkklREbo+myt7pTq4qgKj+LTgVZeki4zrXWuvarmv64axRqKbwW7xPfd+kqyohhwp6Ad7X/xPjxUGbmKfgxNvDDvi1DATWABzGHkmyyxM3EGCHj5x3eZEPT6y5krc1rhJ9OzhyhT+YfQg/nb4BXyLdOXT04MYJKOkkT5P6TZaAwvrSKz3ZTpxS/1abK9pRn0iwcofHqezSUeX6feQntPKgeR1JzQXR6fOk/oIsDGr3r8t24oW8hJHtQpdv4wiWR+RINKfoaFXsyGXhB245iEq7mBdXqQ1uW65tKOm7SebUnXqLS4pWw60vFSZ1j928LuFnxaGkylSAUxYdtPcCMNJwJoIa9HCOHiy3Gnze2fIyjeR/H18/Wtwd/dVApq/PnIcDw+8hIOTAxij17megLfW4JtotlLoJBh1IyGEPd2r0aPVop0cB2aPGeLQs4RVD0wyB4/ip8P9dEDjKNEGC9EmDdKtzaGFN7VtwvvX78VrSdXwZ39SHsYDp3+OH5w/hVE6n0QiCdsN54n0PCMcRnZk2UB7KNCLGY6FmvNmNRXP+8MNN6TuXn2tl2SOve+ee0gB63hk4sTufx47/VEu77FI3Njq8QcZz5meUgfMvXxCob58dN9nD41uflVtKz7UvhPdehpPlc/jM+cP4J9pgxNJTYyRJ16SRp6Wi96wgJPONI6XJnH4zGmcKk9hisuRyJNpJM+qg7hvU7oZWzPNuLKtG1syjWggj0wngpqeJMxRCF0cKU9iIj+DTDaLDXYt1hlZrKutF8/p/PQMcqUyoQ19thBkPiPOrzxaIiypRyl3I4oT8L9uEOgp03x0e217XzsZaeNP/+STGCNv5x96n/vLg6WJHQFHtPTYtVUW1CaW4LAdB7PtUK+qgqU8L0m30Ybf0Eq+/6rt5Mn5+Mb4cXzu+LMop1NIkk2S65CqSUXZW+aSLJ3csFfEWSeHF8iy/3S6H/tzQzgyPYRxr4y2VFYOqZu4+6p0K66sacf1tZ1YXduAcsokbOwj71ZwpDSGozPDHJxDDxF1tVmL7Zl2Yg4bR50pFL3K4gGkuHxphQwFP1PhpCgRIsWL54QkCVfFKdf3JOq/sqe2jVDBfffiSGXa+kzfi18Z8UrIsE2LbsrgOK4U5IUwHmSisgcnMUvxp00pcHAZHNuGpGbKpIjtpInfr9+OXcS1p/KT+MezB4gjyVwRILRDSXmq/BmrGdLfTGi+Ky+Wi958xrzlIvrJqzpBnz80OYJnpofxMyLaFHFmgoi0IVmH1Zk6QgQtpJPbsYc4elOyRiSqb2ocL4wOc60DNmda0EmOzsa6JnTSek8WZzBZLnGFGRlMSwXgeV9k3CxLGR/O2XFGWSCZ41d1qhllHhibc0DGJXxvinEPMeqVt3YnG//r9U1dgclVIifzY9uK5LoK0RDOw3eLhgCl1JE4maEMiaHDRGfPg/RvngxJKu/jzZ1bcB25qwynKoQCrm9ZjXUNrcT5hDa04EJLOye7YEVZYD/CzSK25AkFxBk6IYTJ8TFM+zZh3pS427W6hbpUPbpTDbi2bT3e6OWxf2YQR0f6kWCHhDy1NSZxepgQ9JCpq8OR/BgGyA0enZnCwfF+9NsO0nXE+dMOeX2aqEBLoKYKvmiK9tVS1Lg4T8UmVMSPaTZYmtk2WJo+YM6Q5d4/M/yrnERjf5iB6mLsP1fs2R+WelMhUCheCufHgrKDVXTiN3Wuwdu6r0AbcZNGXL4h24jObINwvBbq85KJPi5MzbA/bkb1Uyr5qEk4jvP/XNI5TeqiQ0spd1McFtKxBNvSdKk04dRVYT2ua6hHPr0Bk0EJTaRCeH2ap3Dsr6fXIMiuxVBzCUdJAp4trMajwyexf2IEbiIlOWaLY6u+FC2JGmQnRYtiteKISv4iVGFCBkEs6YQ8ThUnfvXIzOgBc5J00oH86HsZwphceqNhxYIwtvp8oYLBRkMXUcmT778+XYf3kbF6T8MmdNY0SCS9yEUdnO4iavpSBEKLDmb19KIhO0MTzpAomq9KLZNSF0vamvBubZI4lTZaodc458/bt4joXOTMG3VIhOtImrJJkg7CI3nywqTwmQ4lzwFpMs61hDg6zQw6azO4uW41bqpdg/vPPYdvTp5RqRbmWE4uBqFIDm/fiGKv/K8WM0UU5WNbxHQ558y893hp4j5z0M3bvZXpDfymRKDSDP4Co7RQLbBRY4NmcDAiSQQmddJCJ/2Ojm34ra6rSf9pGCZs+hiB/MPuFKYrFWQcKQtUVTLBohVNc6ms7skBEYQX1HX5UkPL4cugWgcmZUOBen2VkcS+ptXYW9eBAb+ILw4cxBgZLBZfj/4zCI5o6YRw8utqVuF6vQnXpTsQ9twA61CAb+fOoUQHxnBQKiERhUoXoN44CiYRAamC1DAdOhvOVgq2ebYy0zATeFLBwqKqxHuFWCuBf1LJkhDMM3FJ/9/cuBa/1rQFtfTZM2RsPj94gHDryzhFYst5IYuwMkf4GfNJVUm8OP3CbK3pqwoaKTyeA+04NCq+imaK+HNFIsvlbF1uKLW5HPXqzNQSYuhAfqaAb/YdIZQxTv6ZiRoiL3txRVozY/UnajpxV/s23EFMcY3ViPOd2/DSqSkcLo3CIRVny2FGKZg51Y8xQxgBqrqW6ceBrGG31GqeKk2tcaOaU/bcXQ0XJOMuIDK5cT753zaJlEZGpYsMw6+09GAXYcvxwMEDQ4fw6akjmAyLhMjJZXVtlIUA9Bk6hWBOUkqLehDmGUmOCwRRzl9XyESLgGZctU2uGnlQCl1IFIpFnUuGSAXUa2kkybA5kuGlQ2JcHqRFfhmnJ+j6FutmMqSP5QfQNzCDpGni7bSH17esw4+m6bm+CZJEFTRn1BIIgWfxbrVWwle08aNiP844TJSLPfpwObdVgh1RyIwpH29mKR3IBoCNQZ6UNd90h1mPvYQn+Wf/yFn8aLIfk4U81rkZNPoJOnUBEXRTjpWyPtLkYejqYWmzDzsqRuZYqBXVfCnO1CT35BOMM6LsMR+IzlxFEsSxBs7oJojbLTEmocQesglbvcYwjojOFZC+TetImEiSMUuR3j7qTuOR80cxWM7RoZjY1dyNWiK6FCIHSlJiBpiXcBQpiqp9IoJzfKXgVnr0Xr94VYJrssKogC1UgY25RREXOACBlMmoXgnabEemBvVR/cFPCdAf9CaQJj03avtiTCTnjzj4oUnELCAucsiJ4EK/MqseIpDlKQhtu4GqTOR0Nvn3PscdyEBy2tyS6lHVJ2CxIyLV4KqsNK6wGTQr6CcV5NAaj1ZyGNeIbw0faYZGFRc6gXouMXIS9FmmHNmAA+4k+twiqQlgDfcwpGplLQUO9BDc4j0zM+lRrIQJKgbMUIglRgwMzSbCyhVm0a1s4mCwZpqznLlCMcZcuMRqQ6oJpTqEa568FSNEpRQRseSiK1MPp1iiffmYIe5nAiZI7xVSmhRxcDy1UikJJzbaKVRcB5MmGRVY0TqDC5ALc3ORrvnIwBEMkXNxjFzcScKx7PbmDQd+hpCC60ttLBf5WbRuVhsFckg4v0b0hMXSYppVaQn12dhtGMx2AC31U3KdTeaMW17vcAWKpq0YDqxiz9iRgOLEGBwzwf0wWLF6MFMhy52ux63tW6To98v9L2KcxDETle4YAQe4PZQJpiRIp16XbceNXVvQPzWBrw29RASCdGxpS9gCzbLxXHEUhwsjpCcDkYa0nkCZO3OI8y06fDdhSfk9q3uGSlznmyMd4mjKQElgPDJYEjqNPYSL6AEr+e5ak/6vhvUqYzY9jKsMV062VT2wQDVYaNFBhqa+YnkmR8duIDj0kTVXI0sbbbeS+IveZ3CkOAkrkeacPIykBXdiDG9ZtRV/uOn12J5qwb9kB/Ev5UHkc5PzMHXcHBL/lKOUTN4tS2oorSfhlBypaGHLXU6odBFr8Iqm6n5jjmQYxx4eh0y1KCkZxrVkQtfl67ZCZTDrdPJkOqpu4yuo/IuJa0RZ0VdSXpkklh8v5DAWFFFPxuRtbdvwgVV7sMdoIB1YkSK7sFDCrR1b8JubX4O95OtzdfWIW4BbKK2YrGR1UE9wcE2YRqOWUN04FrnfxOk5xn5+IDpWQqOkex2yLmxjQtLhuu8rQ6mhelgXU2g3D+UEQZsei27cJxUgvNhY7+xp6nF14MUdSo48hB8U+/DfDz+GF8hnbyQl9pH2K/E7G64jl5i4q5jH6zvW47/03IRfTnSR9+bjyyNH8aljT6LfL8xrCJnLEFoE1jWnjFua1uKeHW/A7YRRuYmDUygBue8ZQgEpTxnagleCQbp1b6IZt7VskWANuErSMtSetFkpi9ujLqYHjDme+waH6NFRVQPaHM9nGaJGFULVRzWOEIQrllhyVohDfN+ZPCUhw0+sux5XJ5vxlo7NyBWncTA9gV/p2oFt6RYU6CNfGT6Kvzn9FI65OdqzNa9YZG73DQN5RgjtxJ37Vq3Du1o3o8lO4sdjp3AO5HmR90fWGuW0SYfloNW2pU7sPQ2bcV3bWrSaScG9rG/FOdFUtaMUUGPlGEo1vR9q5wlOajmy6B2sqPUYq83pBlyKsKJxovcFsXsHLFrpt/A63JpUJunwKx6ePH0UqXwFf7Trjdhi1eDODXvwFrpYh5aU6z566iC+ePxfcVCfIgyaqF5/IVERqTOWukYyXjWplAD2NvLA6khve4WCBM0dLtstu2igK72tbSM+uPFa7NHrJb3NwfYcp36cijLChnRaq3zfnOaWFTO4ujFtpg3j9HlD67G5gFhn3OhJj9OKhW2kxMsEkbgqxJ6Dv+L+giDqdZU8vW5U0YJ0DhJhVyfq8EtrdqO1vh4pTgxyMRsZlUZyPJtdcWG4IxxWTRI3XnMVbV7D2cERPDpxtpoqmqsOFIFVeM8lh4CvxwygEwIIiTu1SLJ8xt90ZOtrW/Ce9XRdu578e+CHI6c49Y8pr4wJAtcTpZJIH9cQMAQ0JQ6hScOKfoGkhNXML6Ml09TPmmndOkHL+WVIcvnyKwmX49SqMQhdcn/b8btrr8GGkDycGuUmq+grpxcMKe6oJw57a3MP3hpVlH+r9QyeIBe0UKksKlHxRvNlep2Lmel/+VIFeXK7PV2TvFuWnvfTafxy0wbRrSx4DPc+d3Y/jgQ5lCplZAgzSx6NXeGoJYkz8rogpwtrKhYaN8LfJ8xmK/28qeWihoygmvf5Rf64SQ3nyhPYz/21WkZ6wgrEC9xje4VRJwTOk4E76UwIdEqqkAv2l4dJB65cSzileXhk8jRGydofnh7BpMtGy5Ro/yRh4zW6jX013eLyvpgbw8OjR/Dz0nnotVlk9QzyVigusDgHflTiH0uhrxqgl+qk5N9TZuKQ2W5ljrJYeX4ULX+1BiHEIiJiq1Uxp8AhT8OJ8jT+9wv/itZ0Fg7dkwm4xszg99ffgA0k/k8OncJDA4dRIfOaIKNTMn30OTPkBpMRMuxljSs7Bf936Bh+OnKa3FrunTXIezOlh9YkyWhJJLGRVABrnNOcSajMIGFx7MuSQ826QdXh0eLq9Ygu2hyiLtVSmjKN42anXXOOlyitmNLsG76KymCRpgf6N+OQ/5008HRhmDgjCY6uMWfsQB3G1/nYFFo4XprCd6eIMAlb0tou6UqOYZipRNXlXgz68OFl6f3jJPejXK9K6qDOSghdGEKxaPN15HrR+9kG8NmLU6BFMRBtwdq1pR2nOAwQ6/s6zT5urrXrJjnUVQk9FRuN/OHLKYNcrNMlnOOE5MlAtpOlvrp2A3FpjQRT+GA5htqcsiQt/prGtfg90o1cLcOlSNNkgA7lR/GMPykRrOXAeoV8fqvORopUTMgBH4JPHFw3yQvL02PC8HDSm8Z6rR49Da1YP1KPk+QuS4McGVbuWeMOcstX8JGf5yIP+Z3zbvry3mWzmRgx16YanKxhnyp43gb1gi/VJZdaVLwYYS9IHBpklRNZ/MGOm3El6uW5InEQB12ygfKp99a144qGVSKchq/QxjcJjx44+WjVAi95fTJ+++xWvMZuwmlvBt/P9RFuDWC7xMa+iTG3iB9NncG+5i5sM+vxGy07yQ/2sd+bwIxXQY1rSARNnASe8MFFx1E/sbYIUbWorT9aw6mOdJ1jttIGs2biwbFK6V5VcRbicnXB3DJPJSbzX08QtEs6BiyCWWXSnSVN6WGdYI6r6TJhQzwdMj4Fjm4lCL/yDAH6HWGw5D3jB0fC3kme1Afar8D38714/OVhjAclSf9x7atLlv8HEyfxpvIm3GR24J3tm7Eq04jvDB/BILnZedKxx3Oj6PVUpXiCYwiBaq13ox6DZRpZHqxPkkHuJE/mqkzLt86VZu6VHL+lWhsX4rS5HCzRcoYVXInC4jFXJ/H7AhWwQJQBYAwbu5sK6wV4wZvEJw8/jrXZFjAjOW4JW8lBeFfnLnQSYZ6dHsKXx06gQpvUyTEoBRUcmuhF6JbpunY1qxDOhuRUPowW06ylUJfNSNNIl5FAF1I4pxVIjF3y3KS/CAOeg7878Tyyq6+R6NnemhbsTV2PEhHv59ODuPfsv8LLszpQ6SEuz/S5MocP2FDFcIz380mFHnjAREiH1pGs/9bVVh3MNFnIHY2dR743chLTBGWSJCqLoYKFWVrWw3Jahj6bcQhnD0S8lSBYtNGOY7c538Fz+X4cmDmPCtkjjg8Mp9pwS+tGIkYKJ6bO49uDBzFF3lmKiJOg+82QbnQJMVjFORKxICEZR7sk1+/rRBBDHkZgSo+AR/f1CR9zhP2xsTOSHr+9dStublqDTQT1mCs5HmtKOeb8wKQ6zKgzMioL1XhqR5RhKBaLuLKl7WhnTSMR1rS4XMetC40vjenOnQmJxOuLVm3PKxxbWA0dKt1oRLHZxdzieVxPOotbm3zCrw5BvYBAJQfAuS6Iuw45tFeiR47hU5QC4o+azqwIzrPcEXGZsC4Zq0niTo61DBOm5TwXFwr7uuryZmPNzckzWhk/yg3gbGkaz46fw8e7r0VPfaua2RV3vi8Y+hBnZjmroDmBEJXVBDfQkZ/+yBVWvcMVj4LSNhAE35Bp+B+nnfKdQZQJvZi29zjty32ysS6NRXS5z8uEDc4DEAdxCj0hINxA2kwi7ZvSx5shNZMlbVZ0yYuyuVRdk3ySWXIJgulVDp3XgxsReMIp4sdDJ2Rk1Isk1gP5SXJCbKkVkxFUJAUugdgachRYZ56q5JALyngLtmKz3yyTlBAhj6j6aDZUGklDxeSYgCatBWGk95symb/YbNehXUuqdiSCB7iytfPAU/2j5ZKhJY2LjP8FUSPvwlaeIFIBsViG4fwEpfQrW4aE8jzSXWmdOwxdTJQLGKIN9pCPO00ELTG4j8pHmShspbkDcaWfGWKhxyd7yVMbQZkgG7ujhsU9uypZWuERAOxC0wY4BZMxmMgWEcqeV9o3N82tLZBMjqKxipHsEEtJpeRd0dz19M6mVcLBUnueItD9msbVwRok/5tPp7xcInHRFvKIiKJj/WD5Sr0wakSD6nm1daPKDafJA/rH3v34xMkf46vDx3DeK4v7KJ2UBqdNPOGwuVDrwnisJkZkLKzg2PQwhn3CtMmEVMwYjEd9FXPWExaJcyjFfHxJzqtZEZHkwaKu61WjqNRNxBxczR2iGgHjA7ed4M+vTDV72+rbhKs5DCTdHrtTzbi+bvWnz4wf/1MuxVnM6CyGbSVixCFAibyTU2hZiyKJucFxOU8yHinajJQeOQ6Stok8veGfR15GMampoAy7s9zOyXwmnqEu/QUrHTtnAhoCboLOgn6V8VC6zkDfkKEVQcyB3MPL3EZE90zlAUqfRbSnQFscebLPZpLR4iwyr4eHs21K1v31a1MdaObkjgzkCdVwx249hWva1ozVmcmvXUwKIp6RJRCH56n4qjYhxZhzQR5Ki4eTxSFHWhGnT5j7ijpxYsKIRiaR0bI0SYPbtDuuLZC0Cl2GxzYZ0eSheddd0MzHr7HHtLmmFbdv2IsdTV0S2mTsWQ5cZWiYfp5inoC7LWkddQQ7ayJVUHFVYwlzZDzra54XqUUpqUi9eZ73jZ6WjrGrGrqly8eX4mSLA88qWf665jXYlczcLQ26gZoLEC/YIQ5LclzV91Qwgv12eh+Xqx8qTiIXqpaafbSRTWatKiUKiTAuZHKbJdN/QjiGS05BUJ2MZEQFcwK8NaVPGSdyBQ2XGpXskJ0l8tbmpEoMRQzGlaEEXdU0EHmOHrVGGreu2oj/vG4PfnPtTmlUKQYGMhWLrmeIu8r1AAHpV0dqGXTsSbajJ90oHHsqKGA4N65QSFRKypUwCcKqfE+O6YYSU/BlPa12+mOvqye4ZteC66mYAaQYwNPUYL8mLYH/0LFlsDVb+wXeODeSMYGYwCkiS4lYnkN83CLEGU9p+KD3cE/YY5On4dOB76rtxJ3k9XTQiU040ygw+3B8oFyWOi+u/uPiZH4wyF7s4dP1l3twEDv+N35UX6PPc16rQ0+jw0tiTZBCbcjiSfqUH6WipLgrxCgeGcjUdAH7zEbctmormq0EerUZPDd2DjlN6U9ZazSny9NUiTzbBeZqTmd5lfJD19Z2Db6+YY0UZMed5+wNRBn6QNIVtzb34PGpod9+tPDyu1jHc7kml0ik6CY8V8BlguuzkzFZTEZJC37t/GESv2bckGzFXR07aBO+RKf6clPwyQ+3SdUw1tMLxLFJY0mcrOqh9IsKScZOSbXeIWqZqiFiJCNFzAGcBtpmlkS/QSdPxMiIeuFmwQyXR3WvxZ3dO/FLdd2Cf38yfhY/G+/FNFGNa7wMGZVlSCQskFF+KpvAiKBMiqeNuPVtHZuxO1lf7cvUomrI2VQOicU6M4PbWnqmX5jp/+2zldxn6gNLSo9KoZrzwvqD1UKqpCYAcc9V6Lh4NjeEhwcOYu36fegk+Pa7HVfhptrVeCo/gCmnrHSxqYZC2oG2vAOiLT/BI1g4VlWbHy9oo/v31DbT5j00ZDK4vXsbXk+cynE0RhcuzzmkdXRbWext6cYGwp5MuceLw/g/gy9hiNxmzTZVI0uctBSVY4jacqJZBjmvfPe1rZumb2xeq3pt2SwasaH2Z4fgKL2nY1Bz8WfHH9cfHD58lJ7pSZLvXiTfOs18zViSrXXRQ5HuLCOhyq7otmaShXd2bMMb12/HG+x2WGzR9UBq9I2qJ6MB+mVHJKup9hDzc3xK1QeSHWBVxZzpQFfGj20Fu6x+NJ6QgT5x4Si98MTkWTx45Bn8rDIqao51MJsCVgW8X64J5lJUNRuRYwXu8fVWZuufbH59cHvDBmneVrAnam+REwmiIIauToY8XdzVdkVwqjRx06Nj5/qSmq2zWLgBD78NpCuGPQ+PMG+SOwWJcEnSvWPFEh7oP4CDpXH0tm3DtU3daCE/nxuDpchNU0k3LRovvZR3ZoTBijUNoYYlOb4iA9iIoL4jsV52YRkeqWSnJmNZwsATLH2mPI3vnX8Z3x86iRNODg5h3jqGgeJR+RKHDeLAkq6iTRXC102Becu7O7YHb6xbLQEYVqpsyJNRd4IpkZuoUk+VIqpu76tr23Dnqh2Dp/LTdwwUp79qpZLwLe750lVZEY8sNZJSDsQQh5N/ViqFAon9TyrDOHFmEk19CaxL1aGOp7Cx0Yt6F+YmLBcjLhcoX+pkDDEcXqhmhbL60gyp/Oa4qpSrssOlq/2OFXMY8EsyyGeGoFgyk5JivEBTfQ2CAPUw6j9QTMGt84mK//6bm9b0v715CxpDcjQ0h+CXGc1JiPYlrlksnVzZLVEGmXWEfnryvjNP4ou9Bx4ker5HI6iSlOE2pgyDZD3k0Wd4jkHRU3+neD6S9PeHApUy7IN4vgQtEi67pJako5crEVopoanFEbSlZiNwtznzLI+a4vJ4pyLlpjLtyOP8GakDJxD3uMiNHLTnNO2JEZCXpr15aspIKCXSvlIJMCQv54T+VzdbNf/xvk03451N68iRIZfZ0qVMqcZLxN3LS83d8mXWAJ/u4cok7uv7mfnt4eMvJWBvsQkPeqYvkSI/GqYrcwIZiyLqU43c2oVEC5YR31czrxbXki2W6FPl+VHJJ2bjF9qCaspkJZABO0xs9hA5N1x0Kse6ErU771mzx31T1w50+Am1V1uP+hS0aqht0ZkwoQAE7nU1sTndgA+37PImS6WrfzjdeyZrJZsl2l92BSW4JGJl7sdla88t6zI1To9Gzc53afVX2rt+Gdnh5VQGT+BQwZTqSUdGUP1dQwI1w5XnJHXsGnO/Qs4vja01M1e/vaXHfWPnNjTJqArVkqVHO4unyxlLDdthSMUBCf6QQad1U20Xxtt356eCyvb9pdFT9LFsOmFHA2sD8shMVZ5JOJBLeFJhVFu6WK3Tq0TA5eYb6kuU+c+Ox4vaO+eUZ869Vt7wJNjNHmORE5Gun681zO03tnTnP9axG11hWiEO5lNudKk2eSiXWw2dWMwqRxTgf0V507tubd2Ij67aM7LTrN1iFyp5tqgl4lZOZbBPLZEeeqQinz+um71gTMir9Ihjr1qMseY8wgWPC3BwPHthEYKrAjiVJTClkTrMG6G25Z3Nm0fuXncd1mUY84ZSHcMFzUHEXHEBmxUuN9uQ50xFg8s0iROEIuZTdOfv9L2Ev+l7sfVEeeJoydYbs2aKcIYDx+AKEV1cXEebHyAJf4Gif2njBmbHsSw2G4abqMvEVY5TmWgO7a23tKwd+eC6q3F9TTupOkLFph1VtKup5dLkF2dvAxXyWnJSnBwAR4P0yP3kkhvSnSXfx8OTJ/HwuRdrfjLT9/PANLbUabZ4Ig65H1Id7sctJf/OKDqbd5znZCz8Kcu3hbjH22Dv/bWmLbkPrr4KPZmGyOAHUkGjRa1KwnrshGiqAtOOQqOL6tgKn5q4c8pHNuJEIbfBE/u/t3kzakMth0HsfKIw/NC05t+RZtHnkUq2VW3LXyz3vnBGwL/FzywzafMoHXOu4fpfbbKTv35n+1b3t7quwhq7VgLbMpNcV3O3ZI/h7LiRAMqIVXHsSlPlpeRIAt+6hM78qCKR1coz00P4u94X8d2Jk+8raP4DHD9V7XsL6vS1BTWtv2gksMKk5NnyilkDyzqVc3e+7//mFWbD5+4gOPVucs87LXKMSBK54YQxpmer71lw9ZhDVeZEnA6+nqOqJS/6CybmWWFEfe+kGg550/in/pfwjXOHuvq80mMwrU2mqWoJwmqqXFUxWroaMh5o4bwiOUTdfXGA3McyzRPiv4TzmtnCCxqeFffEwXjVk6u6CDnkxxWLaii7JdlbaciolE7UeNobdrR29n68azd2tK5BO0MqT43td+S7HzRJdF5MrOMVfXNH/F4mTCCt7Lqkyjka9P3zJ/GlyRP6v0ye+aDl49MmUZcTdfHXSnGPK6sSHu7IejjOAsTEjS21Au6XNhg9hlleVOtbbWqO9J4Eglw1sILLNLmJJBe6QSWpf7TVznz2Hck1wfs6dmFjY5MMxEhEtRMxLjdVtQku4msQLvErUaKoURg15vJdC7STp/JD+HHfy/hG4Uxd38z4p0oa3s3j89iYcQU4999yKxJzibIcQbUOgQnrR+2mC3trF870njeiKjbw4VwPT9KogmQ4sMRzDmRgg2FErjDhU/neG3yhzbc/tjfRPPXWrm14Y/smrNWTiiGjGAjHRNRUhmivkdX/xRA2UsOxiFe7r2kTRTJgX8odx49PH8HzheFVo7p3f8UPbkvolnSkyOQMVxXAqU4/b97XScnoJV2vfv+CwtWzbie/lycr6eHitWLVYHmU9lGqh2PVkZrhYJHjfS2ZTN7dYWYGb2lZj3eu2o5d2RYZDS0MWVGJTCagfIdNoDK5hm5ctOd4iRyrSKu+qikKqXEykWe4cqCDXML+oIgncn349shxroNtPl8p/rZfcv6oVrNsz1TlPlzx4kecGne9SIOIZlSBPhY0jEiNQlRmGs4JdM8NI4Z+lGKXjnCVEQ6KFSfphn9ebyc/1dlQP/ba+jX4laZNuI6waUIGQhIHJ6zZbyWJkxPRNzDFs0suUhNcGmGlCE6PJzZ7Ki/EHdlEAhdq6kY0ZB7DBKifnurFtweO4OnckD5quLvJD/8D1/PeJYiDPidxBk81ibCV5VL15VzW+CtVFhK1Wt4ZqnVU1DiWL2V18382OPqLGxO1weamVfhg2w6sr21CmqGl58ocRnWAUYNGVMTHUsMqLK7gYhWjvhrwF6QKCqLI1USOuOxTul6iNvd5sZaQS09DjBguXiYE8ezQaTw/0ouRUs4e9StXTJjerZO++x4P/gZpXqMNZQPjgtjC3BRMPPE+jALQVTWgfj9lhOFDjYnMdxpD41BLaDpcZ3td+zrsqG9Hm5FFA7ueftSrZgQRhNQj/1+LJo4GakRJDOV07RUNVb80VeBGClyLE2xaNU8lhXhRYy0nH+X7EAJVksP1VwV6A4/E682N40huTKq0j02OcL0VaZCwjXTixoIebKa976K1rSVDs54IWk+/t0YrHSEOZ+/6NG30LDkvByzoLxu6ftLQ9PPkATrrs7XoqWvGlfVd2J5qIiyaRq1uIhVNsucvzUio73iRQIoaUhat04hqoGQOrSFGi9Myum4oVODN+c7FZX7+nwADAIFQ3QJKaMyzAAAAAElFTkSuQmCC"

/***/ }),
/* 76 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_20.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 77 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_18.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NBNEJCNDQzNjRCMTFFQkJGNTlDQ0VFN0E1NUU4MDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NBNEJCNDUzNjRCMTFFQkJGNTlDQ0VFN0E1NUU4MDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQ0E0QkI0MjM2NEIxMUVCQkY1OUNDRUU3QTU1RTgwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQ0E0QkI0MzM2NEIxMUVCQkY1OUNDRUU3QTU1RTgwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psq1sz8AAC9jSURBVHja1H13kKVX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"

/***/ }),
/* 78 */
/*!*******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/static/img_19.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDkzRUJFQTQzNjRCMTFFQjk5N0I5REJFNzlFOTM5NDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDkzRUJFQTUzNjRCMTFFQjk5N0I5REJFNzlFOTM5NDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OTNFQkVBMjM2NEIxMUVCOTk3QjlEQkU3OUU5Mzk0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0OTNFQkVBMzM2NEIxMUVCOTk3QjlEQkU3OUU5Mzk0MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoqYVrsAAEFASURBVHjazH0JlKVX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"

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/*!**************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/components/ay-qrcode/weapp-qrcode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Core code comes from https://github.com/davidshimjs/qrcodejs

var QRCode;

(function () {
  /**
                   * Get the type by string length
                   * 
                   * @private
                   * @param {String} sText
                   * @param {Number} nCorrectLevel
                   * @return {Number} type
                   */
  function _getTypeNumber(sText, nCorrectLevel) {
    var nType = 1;
    var length = _getUTF8Length(sText);

    for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
      var nLimit = 0;

      switch (nCorrectLevel) {
        case QRErrorCorrectLevel.L:
          nLimit = QRCodeLimitLength[i][0];
          break;
        case QRErrorCorrectLevel.M:
          nLimit = QRCodeLimitLength[i][1];
          break;
        case QRErrorCorrectLevel.Q:
          nLimit = QRCodeLimitLength[i][2];
          break;
        case QRErrorCorrectLevel.H:
          nLimit = QRCodeLimitLength[i][3];
          break;}


      if (length <= nLimit) {
        break;
      } else {
        nType++;
      }
    }

    if (nType > QRCodeLimitLength.length) {
      throw new Error("Too long data");
    }

    return nType;
  }

  function _getUTF8Length(sText) {
    var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
    return replacedText.length + (replacedText.length != sText ? 3 : 0);
  }

  function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
    this.parsedData = [];

    // Added to support UTF-8 Characters
    for (var i = 0, l = this.data.length; i < l; i++) {
      var byteArray = [];
      var code = this.data.charCodeAt(i);

      if (code > 0x10000) {
        byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;
        byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;
        byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;
        byteArray[3] = 0x80 | code & 0x3F;
      } else if (code > 0x800) {
        byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;
        byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;
        byteArray[2] = 0x80 | code & 0x3F;
      } else if (code > 0x80) {
        byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;
        byteArray[1] = 0x80 | code & 0x3F;
      } else {
        byteArray[0] = code;
      }

      this.parsedData.push(byteArray);
    }

    this.parsedData = Array.prototype.concat.apply([], this.parsedData);

    if (this.parsedData.length != this.data.length) {
      this.parsedData.unshift(191);
      this.parsedData.unshift(187);
      this.parsedData.unshift(239);
    }
  }

  QR8bitByte.prototype = {
    getLength: function getLength(buffer) {
      return this.parsedData.length;
    },
    write: function write(buffer) {
      for (var i = 0, l = this.parsedData.length; i < l; i++) {
        buffer.put(this.parsedData[i], 8);
      }
    } };



  // QRCodeModel
  function QRCodeModel(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
  }
  QRCodeModel.prototype = {
    addData: function addData(data) {var newData = new QR8bitByte(data);this.dataList.push(newData);this.dataCache = null;}, isDark: function isDark(row, col) {
      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {throw new Error(row + "," + col);}
      return this.modules[row][col];
    }, getModuleCount: function getModuleCount() {return this.moduleCount;}, make: function make() {this.makeImpl(false, this.getBestMaskPattern());}, makeImpl: function makeImpl(test, maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;this.modules = new Array(this.moduleCount);for (var row = 0; row < this.moduleCount; row++) {this.modules[row] = new Array(this.moduleCount);for (var col = 0; col < this.moduleCount; col++) {this.modules[row][col] = null;}}
      this.setupPositionProbePattern(0, 0);this.setupPositionProbePattern(this.moduleCount - 7, 0);this.setupPositionProbePattern(0, this.moduleCount - 7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test, maskPattern);if (this.typeNumber >= 7) {this.setupTypeNumber(test);}
      if (this.dataCache == null) {this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);}
      this.mapData(this.dataCache, maskPattern);
    }, setupPositionProbePattern: function setupPositionProbePattern(row, col) {for (var r = -1; r <= 7; r++) {if (row + r <= -1 || this.moduleCount <= row + r) continue;for (var c = -1; c <= 7; c++) {if (col + c <= -1 || this.moduleCount <= col + c) continue;if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {this.modules[row + r][col + c] = true;} else {this.modules[row + r][col + c] = false;}}}}, getBestMaskPattern: function getBestMaskPattern() {
      var minLostPoint = 0;var pattern = 0;for (var i = 0; i < 8; i++) {this.makeImpl(true, i);var lostPoint = QRUtil.getLostPoint(this);if (i == 0 || minLostPoint > lostPoint) {minLostPoint = lostPoint;pattern = i;}}
      return pattern;
    }, createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);var cs = 1;this.make();for (var row = 0; row < this.modules.length; row++) {var y = row * cs;for (var col = 0; col < this.modules[row].length; col++) {var x = col * cs;var dark = this.modules[row][col];if (dark) {qr_mc.beginFill(0, 100);qr_mc.moveTo(x, y);qr_mc.lineTo(x + cs, y);qr_mc.lineTo(x + cs, y + cs);qr_mc.lineTo(x, y + cs);qr_mc.endFill();}}}
      return qr_mc;
    }, setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {continue;}
        this.modules[r][6] = r % 2 == 0;
      }
      for (var c = 8; c < this.moduleCount - 8; c++) {
        if (this.modules[6][c] != null) {continue;}
        this.modules[6][c] = c % 2 == 0;
      }
    }, setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];var col = pos[j];if (this.modules[row][col] != null) {continue;}
          for (var r = -2; r <= 2; r++) {for (var c = -2; c <= 2; c++) {if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {this.modules[row + r][col + c] = true;} else {this.modules[row + r][col + c] = false;}}}
        }
      }
    }, setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);for (var i = 0; i < 18; i++) {var mod = !test && (bits >> i & 1) == 1;this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;}
      for (var i = 0; i < 18; i++) {var mod = !test && (bits >> i & 1) == 1;this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;}
    }, setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = this.errorCorrectLevel << 3 | maskPattern;var bits = QRUtil.getBCHTypeInfo(data);for (var i = 0; i < 15; i++) {var mod = !test && (bits >> i & 1) == 1;if (i < 6) {this.modules[i][8] = mod;} else if (i < 8) {this.modules[i + 1][8] = mod;} else {this.modules[this.moduleCount - 15 + i][8] = mod;}}
      for (var i = 0; i < 15; i++) {var mod = !test && (bits >> i & 1) == 1;if (i < 8) {this.modules[8][this.moduleCount - i - 1] = mod;} else if (i < 9) {this.modules[8][15 - i - 1 + 1] = mod;} else {this.modules[8][15 - i - 1] = mod;}}
      this.modules[this.moduleCount - 8][8] = !test;
    }, mapData: function mapData(data, maskPattern) {
      var inc = -1;var row = this.moduleCount - 1;var bitIndex = 7;var byteIndex = 0;for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;if (byteIndex < data.length) {dark = (data[byteIndex] >>> bitIndex & 1) == 1;}
              var mask = QRUtil.getMask(maskPattern, row, col - c);if (mask) {dark = !dark;}
              this.modules[row][col - c] = dark;bitIndex--;if (bitIndex == -1) {byteIndex++;bitIndex = 7;}
            }
          }
          row += inc;if (row < 0 || this.moduleCount <= row) {row -= inc;inc = -inc;break;}
        }
      }
    } };

  QRCodeModel.PAD0 = 0xEC;
  QRCodeModel.PAD1 = 0x11;
  QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);var buffer = new QRBitBuffer();for (var i = 0; i < dataList.length; i++) {var data = dataList[i];buffer.put(data.mode, 4);buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));data.write(buffer);}
    var totalDataCount = 0;for (var i = 0; i < rsBlocks.length; i++) {totalDataCount += rsBlocks[i].dataCount;}
    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error("code length overflow. (" +
      buffer.getLengthInBits() +
      ">" +
      totalDataCount * 8 +
      ")");
    }
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {buffer.put(0, 4);}
    while (buffer.getLengthInBits() % 8 != 0) {buffer.putBit(false);}
    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {break;}
      buffer.put(QRCodeModel.PAD0, 8);if (buffer.getLengthInBits() >= totalDataCount * 8) {break;}
      buffer.put(QRCodeModel.PAD1, 8);
    }
    return QRCodeModel.createBytes(buffer, rsBlocks);
  };
  QRCodeModel.createBytes = function (buffer, rsBlocks) {
    var offset = 0;var maxDcCount = 0;var maxEcCount = 0;var dcdata = new Array(rsBlocks.length);var ecdata = new Array(rsBlocks.length);for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r].dataCount;var ecCount = rsBlocks[r].totalCount - dcCount;maxDcCount = Math.max(maxDcCount, dcCount);maxEcCount = Math.max(maxEcCount, ecCount);dcdata[r] = new Array(dcCount);for (var i = 0; i < dcdata[r].length; i++) {dcdata[r][i] = 0xff & buffer.buffer[i + offset];}
      offset += dcCount;var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);var modPoly = rawPoly.mod(rsPoly);ecdata[r] = new Array(rsPoly.getLength() - 1);for (var i = 0; i < ecdata[r].length; i++) {var modIndex = i + modPoly.getLength() - ecdata[r].length;ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;}
    }
    var totalCodeCount = 0;for (var i = 0; i < rsBlocks.length; i++) {totalCodeCount += rsBlocks[i].totalCount;}
    var data = new Array(totalCodeCount);var index = 0;for (var i = 0; i < maxDcCount; i++) {for (var r = 0; r < rsBlocks.length; r++) {if (i < dcdata[r].length) {data[index++] = dcdata[r][i];}}}
    for (var i = 0; i < maxEcCount; i++) {for (var r = 0; r < rsBlocks.length; r++) {if (i < ecdata[r].length) {data[index++] = ecdata[r][i];}}}
    return data;
  };
  var QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
  var QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
  var QRMaskPattern = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
  var QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);}
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    }, getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);}
      return data << 12 | d;
    }, getBCHDigit: function getBCHDigit(data) {
      var digit = 0;while (data != 0) {digit++;data >>>= 1;}
      return digit;
    }, getPatternPosition: function getPatternPosition(typeNumber) {return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];}, getMask: function getMask(maskPattern, i, j) {switch (maskPattern) {case QRMaskPattern.PATTERN000:return (i + j) % 2 == 0;case QRMaskPattern.PATTERN001:return i % 2 == 0;case QRMaskPattern.PATTERN010:return j % 3 == 0;case QRMaskPattern.PATTERN011:return (i + j) % 3 == 0;case QRMaskPattern.PATTERN100:return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;case QRMaskPattern.PATTERN101:return i * j % 2 + i * j % 3 == 0;case QRMaskPattern.PATTERN110:return (i * j % 2 + i * j % 3) % 2 == 0;case QRMaskPattern.PATTERN111:return (i * j % 3 + (i + j) % 2) % 2 == 0;default:throw new Error("bad maskPattern:" + maskPattern);}}, getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);for (var i = 0; i < errorCorrectLength; i++) {a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));}
      return a;
    }, getLengthInBits: function getLengthInBits(mode, type) {if (1 <= type && type < 10) {switch (mode) {case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:" + mode);}} else if (type < 27) {switch (mode) {case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:" + mode);}} else if (type < 41) {switch (mode) {case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:" + mode);}} else {throw new Error("type:" + type);}}, getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount();var lostPoint = 0;for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;var dark = qrCode.isDark(row, col);for (var r = -1; r <= 1; r++) {
            if (row + r < 0 || moduleCount <= row + r) {continue;}
            for (var c = -1; c <= 1; c++) {
              if (col + c < 0 || moduleCount <= col + c) {continue;}
              if (r == 0 && c == 0) {continue;}
              if (dark == qrCode.isDark(row + r, col + c)) {sameCount++;}
            }
          }
          if (sameCount > 5) {lostPoint += 3 + sameCount - 5;}
        }
      }
      for (var row = 0; row < moduleCount - 1; row++) {for (var col = 0; col < moduleCount - 1; col++) {var count = 0;if (qrCode.isDark(row, col)) count++;if (qrCode.isDark(row + 1, col)) count++;if (qrCode.isDark(row, col + 1)) count++;if (qrCode.isDark(row + 1, col + 1)) count++;if (count == 0 || count == 4) {lostPoint += 3;}}}
      for (var row = 0; row < moduleCount; row++) {for (var col = 0; col < moduleCount - 6; col++) {if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {lostPoint += 40;}}}
      for (var col = 0; col < moduleCount; col++) {for (var row = 0; row < moduleCount - 6; row++) {if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {lostPoint += 40;}}}
      var darkCount = 0;for (var col = 0; col < moduleCount; col++) {for (var row = 0; row < moduleCount; row++) {if (qrCode.isDark(row, col)) {darkCount++;}}}
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;lostPoint += ratio * 10;return lostPoint;
    } };

  var QRMath = {
    glog: function glog(n) {
      if (n < 1) {throw new Error("glog(" + n + ")");}
      return QRMath.LOG_TABLE[n];
    }, gexp: function gexp(n) {
      while (n < 0) {n += 255;}
      while (n >= 256) {n -= 255;}
      return QRMath.EXP_TABLE[n];
    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
  for (var i = 0; i < 8; i++) {QRMath.EXP_TABLE[i] = 1 << i;}
  for (var i = 8; i < 256; i++) {QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];}
  for (var i = 0; i < 255; i++) {QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;}
  function QRPolynomial(num, shift) {
    if (num.length == undefined) {throw new Error(num.length + "/" + shift);}
    var offset = 0;while (offset < num.length && num[offset] == 0) {offset++;}
    this.num = new Array(num.length - offset + shift);for (var i = 0; i < num.length - offset; i++) {this.num[i] = num[i + offset];}
  }
  QRPolynomial.prototype = {
    get: function get(index) {return this.num[index];}, getLength: function getLength() {return this.num.length;}, multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);for (var i = 0; i < this.getLength(); i++) {for (var j = 0; j < e.getLength(); j++) {num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));}}
      return new QRPolynomial(num, 0);
    }, mod: function mod(e) {
      if (this.getLength() - e.getLength() < 0) {return this;}
      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));var num = new Array(this.getLength());for (var i = 0; i < this.getLength(); i++) {num[i] = this.get(i);}
      for (var i = 0; i < e.getLength(); i++) {num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);}
      return new QRPolynomial(num, 0).mod(e);
    } };

  function QRRSBlock(totalCount, dataCount) {this.totalCount = totalCount;this.dataCount = dataCount;}
  QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
  QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);if (rsBlock == undefined) {throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);}
    var length = rsBlock.length / 3;var list = [];for (var i = 0; i < length; i++) {var count = rsBlock[i * 3 + 0];var totalCount = rsBlock[i * 3 + 1];var dataCount = rsBlock[i * 3 + 2];for (var j = 0; j < count; j++) {list.push(new QRRSBlock(totalCount, dataCount));}}
    return list;
  };
  QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {switch (errorCorrectLevel) {case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];default:return undefined;}};
  function QRBitBuffer() {this.buffer = [];this.length = 0;}
  QRBitBuffer.prototype = {
    get: function get(index) {var bufIndex = Math.floor(index / 8);return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;}, put: function put(num, length) {for (var i = 0; i < length; i++) {this.putBit((num >>> length - i - 1 & 1) == 1);}}, getLengthInBits: function getLengthInBits() {return this.length;}, putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);if (this.buffer.length <= bufIndex) {this.buffer.push(0);}
      if (bit) {this.buffer[bufIndex] |= 0x80 >>> this.length % 8;}
      this.length++;
    } };

  var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];

  // QRCode object
  QRCode = function QRCode(canvasId, vOption) {
    this._htOption = {
      width: 256,
      height: 256,
      typeNumber: 4,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRErrorCorrectLevel.H };


    if (typeof vOption === 'string') {
      vOption = {
        text: vOption };

    }

    // Overwrites options
    if (vOption) {
      for (var i in vOption) {
        this._htOption[i] = vOption[i];
      }
    }

    this._oQRCode = null;
    this.canvasId = canvasId;

    if (this._htOption.text && this.canvasId) {
      this.makeCode(this._htOption.text);
    }
  };

  QRCode.prototype.makeCode = function (sText) {
    this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
    this._oQRCode.addData(sText);
    this._oQRCode.make();
    this.makeImage();
  };

  QRCode.prototype.makeImage = function () {
    var _oContext;
    if (this._htOption.usingIn) {
      _oContext = wx.createCanvasContext(this.canvasId, this._htOption.usingIn);
    } else
    {
      _oContext = wx.createCanvasContext(this.canvasId);
    }
    var _htOption = this._htOption;
    var oQRCode = this._oQRCode;

    var nCount = oQRCode.getModuleCount();
    var nWidth = _htOption.width / nCount;
    var nHeight = _htOption.height / nCount;
    var nRoundedWidth = Math.round(nWidth);
    var nRoundedHeight = Math.round(nHeight);

    if (_htOption.image && _htOption.image != '') {
      _oContext.drawImage(_htOption.image, 0, 0, _htOption.width, _htOption.height);
    }

    for (var row = 0; row < nCount; row++) {
      for (var col = 0; col < nCount; col++) {
        var bIsDark = oQRCode.isDark(row, col);
        var nLeft = col * nWidth;
        var nTop = row * nHeight;
        _oContext.setStrokeStyle(bIsDark ? _htOption.colorDark : _htOption.colorLight);
        // _oContext.setStrokeStyle('yellow')
        _oContext.setLineWidth(1);
        _oContext.setFillStyle(bIsDark ? _htOption.colorDark : _htOption.colorLight);
        // _oContext.setFillStyle('red')
        // if (bIsDark) {
        _oContext.fillRect(nLeft, nTop, nWidth, nHeight);
        // }

        // 안티 앨리어싱 방지 처리
        // if (bIsDark) {
        _oContext.strokeRect(
        Math.floor(nLeft) + 0.5,
        Math.floor(nTop) + 0.5,
        nRoundedWidth,
        nRoundedHeight);


        _oContext.strokeRect(
        Math.ceil(nLeft) - 0.5,
        Math.ceil(nTop) - 0.5,
        nRoundedWidth,
        nRoundedHeight);

        // }
        // _oContext.fillRect(
        //     Math.floor(nLeft) + 0.5,
        //     Math.floor(nTop) + 0.5,
        //     nRoundedWidth,
        //     nRoundedHeight
        // );
        // _oContext.fillRect(
        //     Math.ceil(nLeft) - 0.5,
        //     Math.ceil(nTop) - 0.5,
        //     nRoundedWidth,
        //     nRoundedHeight
        // );
        // _oContext.clearRect(
        //     Math.floor(nLeft) + 0.5,
        //     Math.floor(nTop) + 0.5,
        //     nRoundedWidth,
        //     nRoundedHeight
        // );
        // _oContext.clearRect(
        //     Math.ceil(nLeft) - 0.5,
        //     Math.ceil(nTop) - 0.5,
        //     nRoundedWidth,
        //     nRoundedHeight
        // );
      }
    }

    _oContext.draw();
  };

  // 保存为图片，将临时路径传给回调
  QRCode.prototype.exportImage = function (callback) {
    if (!callback) {
      return;
    }
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: this._htOption.width,
      height: this._htOption.height,
      destWidth: this._htOption.width,
      destHeight: this._htOption.height,
      canvasId: this.canvasId,
      success: function success(res) {
        console.log(res.tempFilePath);
        callback(res.tempFilePath);
      } });

  };

  QRCode.CorrectLevel = QRErrorCorrectLevel;
})();

module.exports = QRCode;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map