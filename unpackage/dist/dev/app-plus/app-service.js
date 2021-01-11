(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/main.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 27));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 33));\nvar _request = __webpack_require__(/*! ./utils/request.js */ 36);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n_vue.default.prototype.$myRquest = _request.myRquest;\n// Vue.config.ignoredElements = ['wx-open-launch-weapp']\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJG15UnF1ZXN0IiwibXlScXVlc3QiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLGlFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUYsYUFBSUcsU0FBSixDQUFjQyxTQUFkLEdBQTBCQyxpQkFBMUI7QUFDQTtBQUNBQyxhQUFJQyxNQUFKLEdBQWEsS0FBYjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsSUFBSVIsWUFBSjtBQUNMTSxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQge215UnF1ZXN0fSBmcm9tICcuL3V0aWxzL3JlcXVlc3QuanMnXHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5WdWUucHJvdG90eXBlLiRteVJxdWVzdCA9IG15UnF1ZXN0XHJcbi8vIFZ1ZS5jb25maWcuaWdub3JlZEVsZW1lbnRzID0gWyd3eC1vcGVuLWxhdW5jaC13ZWFwcCddXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/share/share_m', function () {return Vue.extend(__webpack_require__(/*! pages/share/share_m.vue?mpType=page */ 8).default);});
__definePage('pages/share/share_e', function () {return Vue.extend(__webpack_require__(/*! pages/share/share_e.vue?mpType=page */ 28).default);});

/***/ }),
/* 2 */
/*!***********************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/index/index.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21MO0FBQ25MLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "text-area"), attrs: { _i: 2 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "title"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.title)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***********************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRtQixDQUFnQiw4bUJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLG9CQURBOztBQUdBLEdBTEE7QUFNQSxRQU5BLG9CQU1BOztBQUVBLEdBUkE7QUFTQSxhQVRBLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDxpbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCI+PC9pbWFnZT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGV4dC1hcmVhXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGl0bGVcIj57e3RpdGxlfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiAnSGVsbG8nXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuY29udGVudCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5sb2dvIHtcclxuXHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0d2lkdGg6IDIwMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwMHJweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNTBycHg7XHJcblx0fVxyXG5cclxuXHQudGV4dC1hcmVhIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC50aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDM2cnB4O1xyXG5cdFx0Y29sb3I6ICM4ZjhmOTQ7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
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
/* 8 */
/*!*************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_m.vue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share_m.vue?vue&type=template&id=8dea39f8&mpType=page */ 9);\n/* harmony import */ var _share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share_m.vue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/share/share_m.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ21MO0FBQ25MLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2hhcmVfbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGRlYTM5ZjgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NoYXJlX20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NoYXJlX20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3NoYXJlL3NoYXJlX20udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_m.vue?vue&type=template&id=8dea39f8&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./share_m.vue?vue&type=template&id=8dea39f8&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_template_id_8dea39f8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_m.vue?vue&type=template&id=8dea39f8&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    mosoweCanvasImage: __webpack_require__(/*! @/components/mosowe-canvas-image/mosowe-canvas-image.vue */ 11)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { attrs: { id: "shareM", _i: 0 } },
    [
      _c(
        "ul",
        { staticClass: _vm._$s(1, "sc", "button_wrap"), attrs: { _i: 1 } },
        _vm._l(_vm._$s(2, "f", { forItems: _vm.buttonList }), function(
          item,
          index,
          $20,
          $30
        ) {
          return _c(
            "li",
            {
              key: _vm._$s(2, "f", { forIndex: $20, key: index }),
              staticClass: _vm._$s("2-" + $30, "sc", "button_item"),
              class: _vm._$s("2-" + $30, "c", {
                active: _vm.activeIndex === index
              }),
              attrs: { _i: "2-" + $30 },
              on: {
                click: function($event) {
                  return _vm.changeTab(index)
                }
              }
            },
            [_vm._v(_vm._$s("2-" + $30, "t0-0", _vm._s(item)))]
          )
        }),
        0
      ),
      _vm._$s(3, "i", _vm.activeIndex === 0)
        ? _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "box_one"), attrs: { _i: 3 } },
            [
              _c("view", {
                staticClass: _vm._$s(4, "sc", "bg_wrap"),
                attrs: { _i: 4 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(5, "sc", "content_wrap"),
                  attrs: { _i: 5 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(6, "sc", "content"),
                      attrs: { _i: 6 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(7, "sc", "top"),
                          attrs: { _i: 7 }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(8, "sc", "bg_one"),
                              attrs: { _i: 8 }
                            },
                            [_c("img", {}), _c("text")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(11, "sc", "bg_two"),
                              attrs: { _i: 11 }
                            },
                            [_c("img", {})]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(13, "sc", "bg_three"),
                              attrs: { _i: 13 }
                            },
                            [_c("img", {}), _c("text")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(16, "sc", "bg_four"),
                              attrs: { _i: 16 }
                            },
                            [_c("img", {})]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(18, "sc", "bg_five"),
                              attrs: { _i: 18 }
                            },
                            [_c("img", {}), _c("text")]
                          )
                        ]
                      ),
                      _c("view", {
                        staticClass: _vm._$s(21, "sc", "cicle_one"),
                        attrs: { _i: 21 }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(22, "sc", "cicle_two"),
                        attrs: { _i: 22 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(23, "sc", "bottom"),
                          attrs: { _i: 23 }
                        },
                        [
                          _c("div", {
                            staticClass: _vm._$s(24, "sc", "qrCode"),
                            attrs: { _i: 24 }
                          }),
                          _vm._$s(25, "i", _vm.showtplBtn)
                            ? _c(
                                "wx-open-launch-weapp",
                                {
                                  attrs: {
                                    id: "launch-btn",
                                    username: _vm.appid,
                                    path: _vm.pathOne,
                                    _i: 25
                                  }
                                },
                                [_c("script", {})]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(27, "sc", "content_btn_wrap"),
                      attrs: { _i: 27 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          28,
                          "sc",
                          "content_btn content_btn_one"
                        ),
                        attrs: { _i: 28 },
                        on: { click: _vm.beginCanvas }
                      }),
                      _c("text", {
                        staticClass: _vm._$s(
                          29,
                          "sc",
                          "content_btn content_btn_two"
                        ),
                        attrs: { _i: 29 },
                        on: { click: _vm.copy }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(30, "sc", "text_wrap"),
                      attrs: { _i: 30 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(31, "sc", "text"),
                        attrs: { _i: 31 }
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(32, "sc", "text"),
                          attrs: { _i: 32 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(33, "sc", "red"),
                            attrs: { _i: 33 }
                          })
                        ]
                      ),
                      _c("text", {
                        staticClass: _vm._$s(34, "sc", "text"),
                        attrs: { _i: 34 }
                      }),
                      _c("text", {
                        staticClass: _vm._$s(35, "sc", "text"),
                        attrs: { _i: 35 }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._$s(36, "i", _vm.activeIndex === 1)
        ? _c(
            "view",
            { staticClass: _vm._$s(36, "sc", "box_two"), attrs: { _i: 36 } },
            [
              _c("view", {
                staticClass: _vm._$s(37, "sc", "bg_wrap"),
                attrs: { _i: 37 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(38, "sc", "content_wrap"),
                  attrs: { _i: 38 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(39, "sc", "content"),
                      attrs: { _i: 39 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(40, "sc", "top"),
                          attrs: { _i: 40 }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(41, "sc", "bg_one"),
                              attrs: { _i: 41 }
                            },
                            [_c("img", {}), _c("text")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(44, "sc", "bg_two"),
                              attrs: { _i: 44 }
                            },
                            [_c("img", {})]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(46, "sc", "bg_three"),
                              attrs: { _i: 46 }
                            },
                            [_c("img", {}), _c("text")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(49, "sc", "bg_four"),
                              attrs: { _i: 49 }
                            },
                            [_c("img", {})]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(51, "sc", "bg_five"),
                              attrs: { _i: 51 }
                            },
                            [_c("img", {}), _c("text")]
                          )
                        ]
                      ),
                      _c("view", {
                        staticClass: _vm._$s(54, "sc", "cicle_one"),
                        attrs: { _i: 54 }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(55, "sc", "cicle_two"),
                        attrs: { _i: 55 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(56, "sc", "bottom"),
                          attrs: { _i: 56 }
                        },
                        [
                          _c("div", {
                            staticClass: _vm._$s(57, "sc", "qrCode"),
                            attrs: { _i: 57 }
                          }),
                          _c(
                            "wx-open-launch-weapp",
                            {
                              attrs: {
                                id: "launch-btn",
                                username: _vm.appid,
                                path: _vm.pathTwo,
                                _i: 58
                              }
                            },
                            [_c("script", {})]
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(60, "sc", "content_btn_wrap"),
                      attrs: { _i: 60 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          61,
                          "sc",
                          "content_btn content_btn_one"
                        ),
                        attrs: { _i: 61 },
                        on: { click: _vm.beginCanvas }
                      }),
                      _c("text", {
                        staticClass: _vm._$s(
                          62,
                          "sc",
                          "content_btn content_btn_two"
                        ),
                        attrs: { _i: 62 },
                        on: { click: _vm.copy }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(63, "sc", "text_wrap"),
                      attrs: { _i: 63 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(64, "sc", "text"),
                        attrs: { _i: 64 }
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(65, "sc", "text"),
                          attrs: { _i: 65 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(66, "sc", "red"),
                            attrs: { _i: 66 }
                          })
                        ]
                      ),
                      _c("text", {
                        staticClass: _vm._$s(67, "sc", "text"),
                        attrs: { _i: 67 }
                      }),
                      _c("text", {
                        staticClass: _vm._$s(68, "sc", "text"),
                        attrs: { _i: 68 }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm._$s(69, "i", _vm.activeIndex === 2)
        ? _c(
            "view",
            { staticClass: _vm._$s(69, "sc", "box_three"), attrs: { _i: 69 } },
            [
              _c("view", {
                staticClass: _vm._$s(70, "sc", "bg_wrap"),
                attrs: { _i: 70 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(71, "sc", "content_wrap"),
                  attrs: { _i: 71 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(72, "sc", "content"),
                      attrs: { _i: 72 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(73, "sc", "top"),
                          attrs: { _i: 73 }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(74, "sc", "bg_one"),
                              attrs: { _i: 74 }
                            },
                            [_c("img", {}), _c("text")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(77, "sc", "bg_two"),
                              attrs: { _i: 77 }
                            },
                            [_c("img", {})]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(79, "sc", "bg_three"),
                              attrs: { _i: 79 }
                            },
                            [_c("img", {}), _c("text")]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(82, "sc", "bg_four"),
                              attrs: { _i: 82 }
                            },
                            [_c("img", {})]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(84, "sc", "bg_five"),
                              attrs: { _i: 84 }
                            },
                            [_c("img", {}), _c("text")]
                          )
                        ]
                      ),
                      _c("view", {
                        staticClass: _vm._$s(87, "sc", "cicle_one"),
                        attrs: { _i: 87 }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(88, "sc", "cicle_two"),
                        attrs: { _i: 88 }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(89, "sc", "bottom"),
                          attrs: { _i: 89 }
                        },
                        [
                          _c("div", {
                            staticClass: _vm._$s(90, "sc", "qrCode"),
                            attrs: { _i: 90 }
                          }),
                          _c(
                            "wx-open-launch-weapp",
                            {
                              attrs: {
                                id: "launch-btn",
                                username: _vm.appid,
                                path: _vm.pathThree,
                                _i: 91
                              }
                            },
                            [_c("script", {})]
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(93, "sc", "content_btn_wrap"),
                      attrs: { _i: 93 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(
                          94,
                          "sc",
                          "content_btn content_btn_one"
                        ),
                        attrs: { _i: 94 },
                        on: { click: _vm.beginCanvas }
                      }),
                      _c("text", {
                        staticClass: _vm._$s(
                          95,
                          "sc",
                          "content_btn content_btn_two"
                        ),
                        attrs: { _i: 95 },
                        on: { click: _vm.copy }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(96, "sc", "text_wrap"),
                      attrs: { _i: 96 }
                    },
                    [
                      _c("text", {
                        staticClass: _vm._$s(97, "sc", "text"),
                        attrs: { _i: 97 }
                      }),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(98, "sc", "text"),
                          attrs: { _i: 98 }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(99, "sc", "red"),
                            attrs: { _i: 99 }
                          })
                        ]
                      ),
                      _c("text", {
                        staticClass: _vm._$s(100, "sc", "text"),
                        attrs: { _i: 100 }
                      }),
                      _c("text", {
                        staticClass: _vm._$s(101, "sc", "text"),
                        attrs: { _i: 101 }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _c("mosowe-canvas-image", {
        ref: "mosoweCanvasComponents",
        attrs: {
          lists: _vm.lists,
          height: "300",
          width: "300",
          showPreview: true,
          _i: 102
        },
        on: { canvasImage: _vm._canvasImage }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!********************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/components/mosowe-canvas-image/mosowe-canvas-image.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mosowe-canvas-image.vue?vue&type=template&id=9b6619d8&scoped=true& */ 12);\n/* harmony import */ var _mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mosowe-canvas-image.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9b6619d8\",\n  null,\n  false,\n  _mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mosowe-canvas-image/mosowe-canvas-image.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQ21MO0FBQ25MLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21vc293ZS1jYW52YXMtaW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTliNjYxOWQ4JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9zb3dlLWNhbnZhcy1pbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21vc293ZS1jYW52YXMtaW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjliNjYxOWQ4XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbW9zb3dlLWNhbnZhcy1pbWFnZS9tb3Nvd2UtY2FudmFzLWltYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***************************************************************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/components/mosowe-canvas-image/mosowe-canvas-image.vue?vue&type=template&id=9b6619d8&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mosowe-canvas-image.vue?vue&type=template&id=9b6619d8&scoped=true& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_template_id_9b6619d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/components/mosowe-canvas-image/mosowe-canvas-image.vue?vue&type=template&id=9b6619d8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "mosowe-canvas-image"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "slot-view"),
          attrs: { _i: 1 },
          on: { click: _vm.createCanvas }
        },
        [_vm._t("default", null, { _i: 2 })],
        2
      ),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "canvas-wrap-box"), attrs: { _i: 3 } },
        [
          _c("canvas", {
            staticClass: _vm._$s(4, "sc", "canvas-wrap"),
            style: _vm._$s(
              4,
              "s",
              "width: " + _vm.width + "px; height: " + _vm.height + "px;"
            ),
            attrs: { _i: 4 }
          }),
          _c("canvas", {
            staticClass: _vm._$s(5, "sc", "canvas-wrap"),
            style: _vm._$s(
              5,
              "s",
              "width: " +
                _vm.canvasArcWidth +
                "px; height: " +
                _vm.canvasArcHeight +
                "px;"
            ),
            attrs: { _i: 5 }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!*********************************************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/components/mosowe-canvas-image/mosowe-canvas-image.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mosowe-canvas-image.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mosowe_canvas_image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSttQixDQUFnQixpbkJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb3Nvd2UtY2FudmFzLWltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21vc293ZS1jYW52YXMtaW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/components/mosowe-canvas-image/mosowe-canvas-image.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _wxqrcode = _interopRequireDefault(__webpack_require__(/*! ./wxqrcode.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 = { name: 'mosowe-canvas-image', components: {}, props: { imgType: { // 图片类型\n      type: String, default: 'jpg', validator: function validator() {return ['jpg', 'png'];} }, compress: { // 是否开启压缩\n      type: Boolean, default: false }, compressSize: { // 压缩界限，超过界限压缩，默认2M\n      type: [Number, String], default: 1024 * 1024 * 2 },\n\n    showPreview: { // 生成图像后是否预览\n      type: Boolean,\n      default: false },\n\n    height: { // canvas高度\n      type: [String, Number],\n      default: 200 },\n\n    width: { // canvas宽度\n      type: [String, Number],\n      default: 200 },\n\n    lists: {\n      type: Array,\n      default: function _default() {\n        return [];\n      } } },\n\n\n  data: function data() {\n    return {\n      canvas: null,\n      listsIndex: 0,\n      listsLength: 0,\n      canvasArc: null,\n      canvasArcWidth: 100,\n      canvasArcHeight: 100,\n      compressQuality: 20,\n      compressQualityH5: 5 };\n\n  },\n  watch: {},\n  // 组件实例化之前 \n  beforeCreate: function beforeCreate() {},\n  // 组件创建完成\n  created: function created() {\n    this.canvas = uni.createCanvasContext('canvas', this);\n    this.canvasArc = uni.createCanvasContext('canvas-arc', this);\n  },\n  // 组件挂载之前\n  beforeMount: function beforeMount() {},\n  // 组件挂载之后\n  mounted: function mounted() {},\n  // 组件数据更新时\n  beforeUpdate: function beforeUpdate() {},\n  // 组价更新\n  updated: function updated() {},\n  // 组件销毁前\n  beforeDestroy: function beforeDestroy() {},\n  // 组件销毁后\n  destroyed: function destroyed() {},\n  // 页面方法\n  methods: {\n    // 开始绘制\n    createCanvas: function createCanvas() {\n      this.clearCanvas();\n      if (this.lists.length === 0) {\n        uni.showToast({\n          title: 'lists不能为空',\n          icon: 'none' });\n\n        return;\n      }\n      this.listsIndex = 0;\n      this.listsLength = this.lists.length - 1;\n      uni.showLoading({\n        title: '正在生成图片...',\n        mask: true });\n\n      this.dataDrawCanvas();\n    },\n    // 数据绘制\n    dataDrawCanvas: function dataDrawCanvas() {\n      var item = this.lists[this.listsIndex];\n      if (item.type === 'image') {// 图片\n        if (item.content.indexOf('https://') > -1) {// https://网络图片\n\n          // 非H5\n          this.downloadImageNotH5(item);\n\n\n\n\n\n        } else {// 本地选择图片\n          if (this.compress && item.hasOwnProperty('file') && item.file.size > this.compressSize) {// 大于限制2M压缩\n            this.compressImage(item);\n          } else {\n            if (item.arc) {\n              this.drawImageArc(item);\n            } else {\n              this.drawImage(item);\n            }\n          }\n        }\n\n      } else if (item.type === 'text') {// 文本\n        this.drawText(item);\n      } else if (item.type === 'rect') {// 矩形（线条）\n        this.drawRect(item);\n      } else if (item.type === 'arc') {// 圆形\n        this.drawArc(item);\n      } else if (item.type === 'qr') {// 二维码\n        this.drawQR(item);\n      }\n    },\n\n    // https图片下载本地并绘制，非H5\n    downloadImageNotH5: function downloadImageNotH5(item) {var _this = this;\n      uni.downloadFile({\n        url: item.content,\n        header: {\n          'Access-Control-Allow-Origin': '*' },\n\n        success: function success(res) {\n          item.content = res.tempFilePath;\n          if (item.arc) {\n            _this.drawImageArc(item);\n          } else {\n            _this.drawImage(item);\n          }\n        },\n        fail: function fail(res) {\n          __f__(\"log\", res, \" at components/mosowe-canvas-image/mosowe-canvas-image.vue:160\");\n        } });\n\n    },\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    // 图片压缩\n    compressImage: function compressImage(item) {var _this2 = this;\n      uni.showLoading({\n        title: '压缩中...',\n        mask: true });\n\n      // 非H5压缩\n\n      uni.compressImage({\n        src: item.content,\n        quality: this.compressQuality,\n        success: function success(res) {\n          uni.showLoading({\n            title: '正在生成图片...',\n            mask: true });\n\n          item.content = res.tempFilePath;\n          if (item.arc) {\n            _this2.drawImageArc(item);\n          } else {\n            _this2.drawImage(item);\n          }\n        },\n        fail: function fail(res) {\n          __f__(\"log\", res, \" at components/mosowe-canvas-image/mosowe-canvas-image.vue:229\");\n          uni.showToast({\n            title: '压缩失败',\n            icon: 'none' });\n\n        } });\n\n\n      // H5压缩\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    },\n    // 圆形图片另外绘制canvas,png格式\n    drawImageArc: function drawImageArc(item) {var _this3 = this;\n      this.canvasArc.clearRect(0, 0, this.canvasArcWidth, this.canvasArcHeight);\n      this.canvasArcWidth = item.arcR * 2;\n      this.canvasArcHeight = item.arcR * 2;\n      this.canvasArc.save();\n      var arcT = setTimeout(function () {\n        clearTimeout(arcT);\n        _this3.canvasArc.arc(item.arcR, item.arcR, item.arcR, 0, 2 * Math.PI);\n        _this3.canvasArc.clip();\n        // this.canvasArc.closePath();\n\n        _this3.canvasArc.drawImage(\n        item.content,\n        item.arcX,\n        item.arcY,\n        item.width,\n        item.height);\n\n        _this3.canvasArc.draw(false, setTimeout(function () {\n          var t = setTimeout(function () {\n            clearTimeout(t);\n            uni.canvasToTempFilePath({\n              x: 0,\n              y: 0,\n              width: item.arcR * 2,\n              height: item.arcR * 2,\n              fileType: 'png',\n              canvasId: 'canvas-arc',\n              success: function success(res) {\n                item.width = item.arcR * 2;\n                item.height = item.arcR * 2;\n                item.content = res.tempFilePath;\n                _this3.drawImage(item);\n              },\n              fail: function fail(res) {\n                __f__(\"log\", res, \" at components/mosowe-canvas-image/mosowe-canvas-image.vue:301\");\n              },\n              complete: function complete() {\n                _this3.canvasArc.restore();\n                _this3.canvasArc.fillRect(0, 0, 0, 0);\n                _this3.canvasArc.clearRect(0, 0, _this3.canvasArcWidth, _this3.canvasArcHeight);\n              } },\n            _this3);\n          }, 100);\n        }));\n      }, 100);\n    },\n    // 图片绘制\n    drawImage: function drawImage(item) {\n      this.canvas.globalAlpha = item.hasOwnProperty('globalAlpha') ? item.globalAlpha : 1;\n      this.canvas.drawImage(\n      item.content,\n      item.x,\n      item.y,\n      item.hasOwnProperty('width') ? item.width : this.width,\n      item.hasOwnProperty('height') ? item.height : this.height);\n\n      this.checkDrawOver();\n    },\n    // 文本绘制\n    drawText: function drawText(item) {\n      this.canvas.setFillStyle(item.hasOwnProperty('color') ? item.color : '#000000');\n      this.canvas.setFontSize(item.hasOwnProperty('size') ? item.size : 20);\n      this.canvas.setTextAlign(item.hasOwnProperty('align') ? item.align : 'left');\n      this.canvas.globalAlpha = item.hasOwnProperty('globalAlpha') ? item.globalAlpha : 1;\n\n      if (item.maxWidth) {\n        this.canvas.fillText(item.content, item.x, item.y, item.maxWidth);\n      } else {\n        this.canvas.fillText(item.content, item.x, item.y);\n      }\n      this.checkDrawOver();\n    },\n\n    // 矩形（线条）绘制\n    drawRect: function drawRect(item) {\n      this.canvas.setFillStyle(item.hasOwnProperty('color') ? item.color : '#000000');\n      this.canvas.globalAlpha = item.hasOwnProperty('globalAlpha') ? item.globalAlpha : 1;\n      this.canvas.fillRect(item.x, item.y, item.width, item.height);\n      this.checkDrawOver();\n    },\n\n    // 圆形绘制\n    drawArc: function drawArc(item) {\n      this.canvas.arc(item.arcX, item.arcY, item.arcR, 0, 2 * Math.PI);\n      this.canvas.setFillStyle(item.hasOwnProperty('color') ? item.color : '#000000');\n      this.canvas.globalAlpha = item.hasOwnProperty('globalAlpha') ? item.globalAlpha : 1;\n      this.canvas.fill();\n      this.canvas.closePath();\n      this.checkDrawOver();\n    },\n\n    // 二维码绘制\n    drawQR: function drawQR(item) {\n      item['qr'] = _wxqrcode.default.createQrCodeImg(item.content, {\n        size: parseInt(300) });\n\n      this.canvas.globalAlpha = item.hasOwnProperty('globalAlpha') ? item.globalAlpha : 1;\n      this.canvas.drawImage(\n      item.qr,\n      item.x,\n      item.y,\n      item.hasOwnProperty('width') ? item.width : this.width,\n      item.hasOwnProperty('height') ? item.height : this.height);\n\n      this.checkDrawOver();\n    },\n\n\n    // 判断是否绘制完\n    checkDrawOver: function checkDrawOver() {\n      if (this.listsIndex < this.listsLength) {// lists未画完\n        this.listsIndex++;\n        this.dataDrawCanvas();\n      } else {\n        this.canvasImage();\n      }\n    },\n\n    // 绘制到画布并生成图片\n    canvasImage: function canvasImage() {var _this4 = this;\n      this.listsIndex = 0;\n      this.canvas.draw(false, setTimeout(function () {\n        setTimeout(function () {\n          uni.canvasToTempFilePath({\n            x: 0,\n            y: 0,\n            width: Number(_this4.width),\n            height: Number(_this4.height),\n            fileType: _this4.imgType,\n            canvasId: 'canvas',\n            success: function success(res) {\n              _this4.$emit('canvasImage', res.tempFilePath);\n              if (_this4.showPreview) {\n                _this4.showPreviewFn(res.tempFilePath);\n              }\n            },\n            fail: function fail(res) {\n              __f__(\"log\", res, \" at components/mosowe-canvas-image/mosowe-canvas-image.vue:404\");\n            },\n            complete: function complete() {\n              uni.hideLoading();\n            } },\n          _this4);\n        }, 500);\n      }));\n    },\n    // 预览图\n    showPreviewFn: function showPreviewFn(img) {\n      uni.previewImage({\n        current: 0,\n        urls: [img] });\n\n    },\n    // 清空画布\n    clearCanvas: function clearCanvas() {\n      this.canvas.clearRect(0, 0, this.width, this.height);\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tb3Nvd2UtY2FudmFzLWltYWdlL21vc293ZS1jYW52YXMtaW1hZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEscUY7Ozs7Ozs7Ozs7Ozs7OztnQkFDQSxFQUNBLDJCQURBLEVBRUEsY0FGQSxFQUdBLFNBQ0E7QUFDQSxrQkFEQSxFQUVBLGNBRkEsRUFHQSxpQ0FDQSxzQkFDQSxDQUxBLEVBREEsRUFRQTtBQUNBLG1CQURBLEVBRUEsY0FGQSxFQVJBLEVBWUE7QUFDQSw0QkFEQSxFQUVBLHdCQUZBLEVBWkE7O0FBZ0JBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQWhCQTs7QUFvQkE7QUFDQSw0QkFEQTtBQUVBLGtCQUZBLEVBcEJBOztBQXdCQTtBQUNBLDRCQURBO0FBRUEsa0JBRkEsRUF4QkE7O0FBNEJBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQTVCQSxFQUhBOzs7QUFzQ0EsTUF0Q0Esa0JBc0NBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0Esb0JBSEE7QUFJQSxxQkFKQTtBQUtBLHlCQUxBO0FBTUEsMEJBTkE7QUFPQSx5QkFQQTtBQVFBLDBCQVJBOztBQVVBLEdBakRBO0FBa0RBLFdBbERBO0FBbURBO0FBQ0EsY0FwREEsMEJBb0RBLEVBcERBO0FBcURBO0FBQ0EsU0F0REEscUJBc0RBO0FBQ0E7QUFDQTtBQUNBLEdBekRBO0FBMERBO0FBQ0EsYUEzREEseUJBMkRBLEVBM0RBO0FBNERBO0FBQ0EsU0E3REEscUJBNkRBLEVBN0RBO0FBOERBO0FBQ0EsY0EvREEsMEJBK0RBLEVBL0RBO0FBZ0VBO0FBQ0EsU0FqRUEscUJBaUVBLEVBakVBO0FBa0VBO0FBQ0EsZUFuRUEsMkJBbUVBLEVBbkVBO0FBb0VBO0FBQ0EsV0FyRUEsdUJBcUVBLEVBckVBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBLGdCQUZBLDBCQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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LGVBelNBLHlCQXlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxnQkFGQTtBQUdBLHVDQUhBO0FBSUEseUNBSkE7QUFLQSxvQ0FMQTtBQU1BLDhCQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBWkE7QUFhQTtBQUNBO0FBQ0EsYUFmQTtBQWdCQTtBQUNBO0FBQ0EsYUFsQkE7QUFtQkEsZ0JBbkJBO0FBb0JBLFNBckJBLEVBcUJBLEdBckJBO0FBc0JBLE9BdkJBO0FBd0JBLEtBblVBO0FBb1VBO0FBQ0EsaUJBclVBLHlCQXFVQSxHQXJVQSxFQXFVQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxtQkFGQTs7QUFJQSxLQTFVQTtBQTJVQTtBQUNBLGVBNVVBLHlCQTRVQTtBQUNBO0FBQ0EsS0E5VUEsRUF2RUEsRSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS0gbW9zb3dlLWNhbnZhcy1pbWFnZSAtLT5cclxuPHRlbXBsYXRlPlxyXG4gIDx2aWV3IGNsYXNzPSdtb3Nvd2UtY2FudmFzLWltYWdlJz5cclxuXHRcdDx2aWV3IGNsYXNzPVwic2xvdC12aWV3XCIgQGNsaWNrPVwiY3JlYXRlQ2FudmFzXCI+XHJcblx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY2FudmFzLXdyYXAtYm94XCI+XHJcblx0XHRcdDwhLS0g5Li76Z2i5p2/57uY5Yi2IC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNsYXNzPVwiY2FudmFzLXdyYXBcIiBjYW52YXMtaWQ9XCJjYW52YXNcIiA6c3R5bGU9XCInd2lkdGg6ICcrIHdpZHRoICsncHg7IGhlaWdodDogJysgaGVpZ2h0ICsncHg7J1wiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tIOi/meS4quaYr+eUqOadpee7mOWItuWchuW9ouWbvueJh+eahCAtLT5cclxuXHRcdFx0PGNhbnZhcyBjbGFzcz1cImNhbnZhcy13cmFwXCIgY2FudmFzLWlkPVwiY2FudmFzLWFyY1wiIDpzdHlsZT1cIid3aWR0aDogJysgY2FudmFzQXJjV2lkdGggKydweDsgaGVpZ2h0OiAnKyBjYW52YXNBcmNIZWlnaHQgKydweDsnXCI+PC9jYW52YXM+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFFSIGZyb20gJy4vd3hxcmNvZGUuanMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ21vc293ZS1jYW52YXMtaW1hZ2UnLFxyXG4gIGNvbXBvbmVudHM6IHt9LFxyXG4gIHByb3BzOiB7XHJcblx0XHRpbWdUeXBlOiB7IC8vIOWbvueJh+exu+Wei1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICdqcGcnLFxyXG5cdFx0XHR2YWxpZGF0b3I6ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gWydqcGcnLCAncG5nJ107XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wcmVzczogeyAvLyDmmK/lkKblvIDlkK/ljovnvKlcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHRjb21wcmVzc1NpemU6IHsgLy8g5Y6L57yp55WM6ZmQ77yM6LaF6L+H55WM6ZmQ5Y6L57yp77yM6buY6K6kMk1cclxuXHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0ZGVmYXVsdDogMTAyNCoxMDI0KjJcclxuXHRcdH0sXHJcblx0XHRzaG93UHJldmlldzogeyAvLyDnlJ/miJDlm77lg4/lkI7mmK/lkKbpooTop4hcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH0sXHJcblx0ICBoZWlnaHQ6IHsgLy8gY2FudmFz6auY5bqmXHJcblx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdGRlZmF1bHQ6IDIwMFxyXG5cdFx0fSxcclxuXHQgIHdpZHRoOiB7IC8vIGNhbnZhc+WuveW6plxyXG5cdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRkZWZhdWx0OiAyMDBcclxuXHRcdH0sXHJcblx0XHRsaXN0czoge1xyXG5cdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0ZGVmYXVsdDogKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBbXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG5cdFx0XHRjYW52YXM6IG51bGwsXHJcblx0XHRcdGxpc3RzSW5kZXg6IDAsXHJcblx0XHRcdGxpc3RzTGVuZ3RoOiAwLFxyXG5cdFx0XHRjYW52YXNBcmM6IG51bGwsXHJcblx0XHRcdGNhbnZhc0FyY1dpZHRoOiAxMDAsXHJcblx0XHRcdGNhbnZhc0FyY0hlaWdodDogMTAwLFxyXG5cdFx0XHRjb21wcmVzc1F1YWxpdHk6IDIwLFxyXG5cdFx0XHRjb21wcmVzc1F1YWxpdHlINTogNSxcclxuICAgIH07XHJcbiAgfSxcclxuXHR3YXRjaDoge30sXHJcbiAgLy8g57uE5Lu25a6e5L6L5YyW5LmL5YmNIFxyXG4gIGJlZm9yZUNyZWF0ZSAoKSB7fSxcclxuICAvLyDnu4Tku7bliJvlu7rlrozmiJBcclxuICBjcmVhdGVkICgpIHtcclxuXHRcdHRoaXMuY2FudmFzID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhcycsIHRoaXMpO1xyXG5cdFx0dGhpcy5jYW52YXNBcmMgPSB1bmkuY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzLWFyYycsIHRoaXMpO1xyXG5cdH0sXHJcbiAgLy8g57uE5Lu25oyC6L295LmL5YmNXHJcbiAgYmVmb3JlTW91bnQgKCkge30sXHJcbiAgLy8g57uE5Lu25oyC6L295LmL5ZCOXHJcbiAgbW91bnRlZCAoKSB7fSxcclxuICAvLyDnu4Tku7bmlbDmja7mm7TmlrDml7ZcclxuICBiZWZvcmVVcGRhdGUgKCkge30sXHJcbiAgLy8g57uE5Lu35pu05pawXHJcbiAgdXBkYXRlZCAoKSB7fSxcclxuICAvLyDnu4Tku7bplIDmr4HliY1cclxuICBiZWZvcmVEZXN0cm95ICgpIHt9LFxyXG4gIC8vIOe7hOS7tumUgOavgeWQjlxyXG4gIGRlc3Ryb3llZCAoKSB7fSxcclxuICAvLyDpobXpnaLmlrnms5VcclxuICBtZXRob2RzOiB7XHJcblx0XHQvLyDlvIDlp4vnu5jliLZcclxuXHRcdGNyZWF0ZUNhbnZhcyAoKSB7XHJcblx0XHRcdHRoaXMuY2xlYXJDYW52YXMoKTtcclxuXHRcdFx0aWYgKHRoaXMubGlzdHMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ2xpc3Rz5LiN6IO95Li656m6JyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmxpc3RzSW5kZXggPSAwO1xyXG5cdFx0XHR0aGlzLmxpc3RzTGVuZ3RoID0gdGhpcy5saXN0cy5sZW5ndGggLSAxO1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5q2j5Zyo55Sf5oiQ5Zu+54mHLi4uJyxcclxuXHRcdFx0XHRtYXNrOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRhdGFEcmF3Q2FudmFzKCk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5pWw5o2u57uY5Yi2XHJcblx0XHRkYXRhRHJhd0NhbnZhcyAoKSB7XHJcblx0XHRcdGxldCBpdGVtID0gdGhpcy5saXN0c1t0aGlzLmxpc3RzSW5kZXhdO1xyXG5cdFx0XHRpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UnKSB7IC8vIOWbvueJh1xyXG5cdFx0XHRcdGlmIChpdGVtLmNvbnRlbnQuaW5kZXhPZignaHR0cHM6Ly8nKSA+IC0xKSB7IC8vIGh0dHBzOi8v572R57uc5Zu+54mHXHJcblx0XHRcdFx0XHQvLyAjaWZuZGVmIEg1XHJcblx0XHRcdFx0XHQvLyDpnZ5INVxyXG5cdFx0XHRcdFx0dGhpcy5kb3dubG9hZEltYWdlTm90SDUoaXRlbSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdFx0Ly8gSDVcclxuXHRcdFx0XHRcdHRoaXMuZG93bmxvYWRJbWFnZUg1KGl0ZW0pO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fSBlbHNlIHsgLy8g5pys5Zyw6YCJ5oup5Zu+54mHXHJcblx0XHRcdFx0XHRpZiAodGhpcy5jb21wcmVzcyAmJiBpdGVtLmhhc093blByb3BlcnR5KCdmaWxlJykgJiYgaXRlbS5maWxlLnNpemUgPiB0aGlzLmNvbXByZXNzU2l6ZSkgeyAvLyDlpKfkuo7pmZDliLYyTeWOi+e8qVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbXByZXNzSW1hZ2UoaXRlbSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS5hcmMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRyYXdJbWFnZUFyYyhpdGVtKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRyYXdJbWFnZShpdGVtKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAndGV4dCcpIHsgLy8g5paH5pysXHJcblx0XHRcdFx0dGhpcy5kcmF3VGV4dChpdGVtKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdyZWN0JykgeyAvLyDnn6nlvaLvvIjnur/mnaHvvIlcclxuXHRcdFx0XHR0aGlzLmRyYXdSZWN0KGl0ZW0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2FyYycpIHsgLy8g5ZyG5b2iXHJcblx0XHRcdFx0dGhpcy5kcmF3QXJjKGl0ZW0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ3FyJykgeyAvLyDkuoznu7TnoIFcclxuXHRcdFx0XHR0aGlzLmRyYXdRUihpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vICNpZm5kZWYgSDVcclxuXHRcdC8vIGh0dHBz5Zu+54mH5LiL6L295pys5Zyw5bm257uY5Yi277yM6Z2eSDVcclxuXHRcdGRvd25sb2FkSW1hZ2VOb3RINSAoaXRlbSkgeyBcclxuXHRcdFx0dW5pLmRvd25sb2FkRmlsZSh7XHJcblx0XHRcdFx0dXJsOiBpdGVtLmNvbnRlbnQsXHJcblx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHQnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0aXRlbS5jb250ZW50ID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuXHRcdFx0XHRcdGlmIChpdGVtLmFyYykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRyYXdJbWFnZUFyYyhpdGVtKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZHJhd0ltYWdlKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHQvLyBodHRwc+WbvueJh+S4i+i9veacrOWcsOW5tue7mOWItu+8jEg1XHJcblx0XHRkb3dubG9hZEltYWdlSDUgKGl0ZW0pIHtcclxuXHRcdFx0bGV0IGltYWdlID0gbnVsbDtcclxuXHRcdFx0aW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdjcm9zc09yaWdpbicsICdhbm9ueW1vdXMnKTtcclxuXHRcdFx0aW1hZ2UuY3Jvc3NPcmlnaW4gPSAnQW5vbnltb3VzJztcclxuXHRcdFx0aW1hZ2Uuc3JjID0gaXRlbS5jb250ZW50O1xyXG5cdFx0XHRpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdCAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHRcdCAgICBjYW52YXMud2lkdGggPSBpdGVtLndpZHRoO1xyXG5cdFx0XHQgICAgY2FudmFzLmhlaWdodCA9IGl0ZW0uaGVpZ2h0O1xyXG5cdFx0XHQgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdFx0aW1hZ2UsIFxyXG5cdFx0XHRcdFx0XHQwLCBcclxuXHRcdFx0XHRcdFx0MCwgXHJcblx0XHRcdFx0XHRcdGl0ZW0ud2lkdGgsIFxyXG5cdFx0XHRcdFx0XHRpdGVtLmhlaWdodFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0ICAgIGxldCBkYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XHJcblx0XHRcdFx0XHRpZiAoaXRlbS5hcmMpIHsgLy8g57uY5Yi25ZyG5b2iXHJcblx0XHRcdFx0XHRcdGl0ZW0uY29udGVudCA9IGRhdGFVUkw7XHJcblx0XHRcdFx0XHRcdHRoaXMuZHJhd0ltYWdlQXJjKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXMuZ2xvYmFsQWxwaGEgPSBpdGVtLmhhc093blByb3BlcnR5KCdnbG9iYWxBbHBoYScpID8gaXRlbS5nbG9iYWxBbHBoYSA6IDE7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FudmFzLmRyYXdJbWFnZShcclxuXHRcdFx0XHRcdFx0XHRkYXRhVVJMLCBcclxuXHRcdFx0XHRcdFx0XHRpdGVtLngsIFxyXG5cdFx0XHRcdFx0XHRcdGl0ZW0ueSwgXHJcblx0XHRcdFx0XHRcdFx0aXRlbS5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSA/IGl0ZW0ud2lkdGggOiB0aGlzLndpZHRoLCBcclxuXHRcdFx0XHRcdFx0XHRpdGVtLmhhc093blByb3BlcnR5KCdoZWlnaHQnKSA/IGl0ZW0uaGVpZ2h0IDogdGhpcy5oZWlnaHRcclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrRHJhd092ZXIoKTtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0Ly8g5Zu+54mH5Y6L57ypXHJcblx0XHRjb21wcmVzc0ltYWdlIChpdGVtKSB7XHJcblx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0dGl0bGU6ICfljovnvKnkuK0uLi4nLFxyXG5cdFx0XHRcdG1hc2s6IHRydWVcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIOmdnkg15Y6L57ypXHJcblx0XHRcdC8vICNpZm5kZWYgSDVcclxuXHRcdFx0dW5pLmNvbXByZXNzSW1hZ2Uoe1xyXG5cdFx0XHRcdHNyYzogaXRlbS5jb250ZW50LFxyXG5cdFx0XHRcdHF1YWxpdHk6IHRoaXMuY29tcHJlc3NRdWFsaXR5LFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo55Sf5oiQ5Zu+54mHLi4uJyxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRpdGVtLmNvbnRlbnQgPSByZXMudGVtcEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW0uYXJjKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZHJhd0ltYWdlQXJjKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kcmF3SW1hZ2UoaXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5Y6L57yp5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0Ly8gSDXljovnvKlcclxuXHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ2Nyb3NzT3JpZ2luJywgJ2Fub255bW91cycpO1xyXG5cdFx0XHRpbWFnZS5jcm9zc09yaWdpbiA9ICdBbm9ueW1vdXMnO1xyXG5cdFx0XHRpbWFnZS5zcmMgPSBpdGVtLmNvbnRlbnQ7XHJcblx0XHRcdGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0XHRsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHRcdFx0Y2FudmFzLndpZHRoID0gaXRlbS53aWR0aDtcclxuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gaXRlbS5oZWlnaHQ7XHJcblx0XHRcdFx0bGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpbWFnZSwgXHJcblx0XHRcdFx0XHQwLCBcclxuXHRcdFx0XHRcdDAsIFxyXG5cdFx0XHRcdFx0aXRlbS53aWR0aCwgXHJcblx0XHRcdFx0XHRpdGVtLmhlaWdodFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0bGV0IGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcclxuXHRcdFx0XHRpdGVtLmNvbnRlbnQgPSBkYXRhVVJMO1xyXG5cdFx0XHRcdGlmIChpdGVtLmFyYykge1xyXG5cdFx0XHRcdFx0dGhpcy5kcmF3SW1hZ2VBcmMoaXRlbSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZHJhd0ltYWdlKGl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdCAvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHQvLyDlnIblvaLlm77niYflj6blpJbnu5jliLZjYW52YXMscG5n5qC85byPXHJcblx0XHRkcmF3SW1hZ2VBcmMgKGl0ZW0pIHtcclxuXHRcdFx0dGhpcy5jYW52YXNBcmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzQXJjV2lkdGgsIHRoaXMuY2FudmFzQXJjSGVpZ2h0KTtcclxuXHRcdFx0dGhpcy5jYW52YXNBcmNXaWR0aCA9IGl0ZW0uYXJjUiAqIDI7XHJcblx0XHRcdHRoaXMuY2FudmFzQXJjSGVpZ2h0ID0gaXRlbS5hcmNSICogMjtcclxuXHRcdFx0dGhpcy5jYW52YXNBcmMuc2F2ZSgpO1xyXG5cdFx0XHRsZXQgYXJjVCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dChhcmNUKTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc0FyYy5hcmMoaXRlbS5hcmNSLCBpdGVtLmFyY1IsIGl0ZW0uYXJjUiwgMCwgMiAqIE1hdGguUEkpO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzQXJjLmNsaXAoKTtcclxuXHRcdFx0XHQvLyB0aGlzLmNhbnZhc0FyYy5jbG9zZVBhdGgoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmNhbnZhc0FyYy5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpdGVtLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRpdGVtLmFyY1gsXHJcblx0XHRcdFx0XHRpdGVtLmFyY1ksXHJcblx0XHRcdFx0XHRpdGVtLndpZHRoLFxyXG5cdFx0XHRcdFx0aXRlbS5oZWlnaHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRoaXMuY2FudmFzQXJjLmRyYXcoZmFsc2UsIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHQpO1xyXG5cdFx0XHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xyXG5cdFx0XHRcdFx0XHRcdHg6IDAsXHJcblx0XHRcdFx0XHRcdFx0eTogMCxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogaXRlbS5hcmNSICogMixcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGl0ZW0uYXJjUiAqIDIsXHJcblx0XHRcdFx0XHRcdFx0ZmlsZVR5cGU6ICdwbmcnLFxyXG5cdFx0XHRcdFx0XHRcdGNhbnZhc0lkOiAnY2FudmFzLWFyYycsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS53aWR0aCA9IGl0ZW0uYXJjUiAqIDI7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmhlaWdodCA9IGl0ZW0uYXJjUiAqIDI7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmNvbnRlbnQgPSByZXMudGVtcEZpbGVQYXRoO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kcmF3SW1hZ2UoaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FudmFzQXJjLnJlc3RvcmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FudmFzQXJjLmZpbGxSZWN0KDAsIDAsIDAsIDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jYW52YXNBcmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzQXJjV2lkdGgsIHRoaXMuY2FudmFzQXJjSGVpZ2h0KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g5Zu+54mH57uY5Yi2XHJcblx0XHRkcmF3SW1hZ2UgKGl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5nbG9iYWxBbHBoYSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ2dsb2JhbEFscGhhJykgPyBpdGVtLmdsb2JhbEFscGhhIDogMTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRpdGVtLmNvbnRlbnQsIFxyXG5cdFx0XHRcdFx0aXRlbS54LCBcclxuXHRcdFx0XHRcdGl0ZW0ueSwgXHJcblx0XHRcdFx0XHRpdGVtLmhhc093blByb3BlcnR5KCd3aWR0aCcpID8gaXRlbS53aWR0aCA6IHRoaXMud2lkdGgsIFxyXG5cdFx0XHRcdFx0aXRlbS5oYXNPd25Qcm9wZXJ0eSgnaGVpZ2h0JykgPyBpdGVtLmhlaWdodCA6IHRoaXMuaGVpZ2h0XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLmNoZWNrRHJhd092ZXIoKTtcclxuXHRcdH0sXHJcblx0XHQvLyDmlofmnKznu5jliLZcclxuXHRcdGRyYXdUZXh0IChpdGVtKSB7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuc2V0RmlsbFN0eWxlKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2NvbG9yJykgPyBpdGVtLmNvbG9yIDogJyMwMDAwMDAnKTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5zZXRGb250U2l6ZShpdGVtLmhhc093blByb3BlcnR5KCdzaXplJyk/IGl0ZW0uc2l6ZSA6IDIwKTtcclxuXHRcdFx0XHR0aGlzLmNhbnZhcy5zZXRUZXh0QWxpZ24oaXRlbS5oYXNPd25Qcm9wZXJ0eSgnYWxpZ24nKSA/IGl0ZW0uYWxpZ246ICdsZWZ0Jyk7XHJcblx0XHRcdFx0dGhpcy5jYW52YXMuZ2xvYmFsQWxwaGEgPSBpdGVtLmhhc093blByb3BlcnR5KCdnbG9iYWxBbHBoYScpID8gaXRlbS5nbG9iYWxBbHBoYSA6IDE7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGl0ZW0ubWF4V2lkdGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuY2FudmFzLmZpbGxUZXh0KGl0ZW0uY29udGVudCwgaXRlbS54LCBpdGVtLnksIGl0ZW0ubWF4V2lkdGgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmNhbnZhcy5maWxsVGV4dChpdGVtLmNvbnRlbnQsIGl0ZW0ueCwgaXRlbS55KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5jaGVja0RyYXdPdmVyKCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDnn6nlvaLvvIjnur/mnaHvvInnu5jliLZcclxuXHRcdGRyYXdSZWN0IChpdGVtKSB7XHJcblx0XHRcdHRoaXMuY2FudmFzLnNldEZpbGxTdHlsZShpdGVtLmhhc093blByb3BlcnR5KCdjb2xvcicpID8gaXRlbS5jb2xvciA6ICcjMDAwMDAwJyk7XHJcblx0XHRcdHRoaXMuY2FudmFzLmdsb2JhbEFscGhhID0gaXRlbS5oYXNPd25Qcm9wZXJ0eSgnZ2xvYmFsQWxwaGEnKSA/IGl0ZW0uZ2xvYmFsQWxwaGEgOiAxO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5maWxsUmVjdChpdGVtLngsIGl0ZW0ueSwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xyXG5cdFx0XHR0aGlzLmNoZWNrRHJhd092ZXIoKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOWchuW9oue7mOWItlxyXG5cdFx0ZHJhd0FyYyAoaXRlbSkge1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5hcmMoaXRlbS5hcmNYLCBpdGVtLmFyY1ksIGl0ZW0uYXJjUiwgMCwgMiAqIE1hdGguUEkpO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5zZXRGaWxsU3R5bGUoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnY29sb3InKSA/IGl0ZW0uY29sb3IgOiAnIzAwMDAwMCcpO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5nbG9iYWxBbHBoYSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ2dsb2JhbEFscGhhJykgPyBpdGVtLmdsb2JhbEFscGhhIDogMTtcclxuXHRcdFx0dGhpcy5jYW52YXMuZmlsbCgpO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5jbG9zZVBhdGgoKTtcclxuXHRcdFx0dGhpcy5jaGVja0RyYXdPdmVyKCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDkuoznu7TnoIHnu5jliLZcclxuXHRcdGRyYXdRUiAoaXRlbSkge1xyXG5cdFx0XHRpdGVtWydxciddID0gUVIuY3JlYXRlUXJDb2RlSW1nKGl0ZW0uY29udGVudCwgeyAgXHJcblx0XHRcdFx0c2l6ZTogcGFyc2VJbnQoMzAwKSAgXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmNhbnZhcy5nbG9iYWxBbHBoYSA9IGl0ZW0uaGFzT3duUHJvcGVydHkoJ2dsb2JhbEFscGhhJykgPyBpdGVtLmdsb2JhbEFscGhhIDogMTtcclxuXHRcdFx0dGhpcy5jYW52YXMuZHJhd0ltYWdlKFxyXG5cdFx0XHRcdGl0ZW0ucXIsIFxyXG5cdFx0XHRcdGl0ZW0ueCwgXHJcblx0XHRcdFx0aXRlbS55LCBcclxuXHRcdFx0XHRpdGVtLmhhc093blByb3BlcnR5KCd3aWR0aCcpID8gaXRlbS53aWR0aCA6IHRoaXMud2lkdGgsIFxyXG5cdFx0XHRcdGl0ZW0uaGFzT3duUHJvcGVydHkoJ2hlaWdodCcpID8gaXRlbS5oZWlnaHQgOiB0aGlzLmhlaWdodFxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmNoZWNrRHJhd092ZXIoKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm57uY5Yi25a6MXHJcblx0XHRjaGVja0RyYXdPdmVyICgpIHtcclxuXHRcdFx0IGlmICh0aGlzLmxpc3RzSW5kZXggPCB0aGlzLmxpc3RzTGVuZ3RoKSB7IC8vIGxpc3Rz5pyq55S75a6MXHJcblx0XHRcdCBcdHRoaXMubGlzdHNJbmRleCsrO1xyXG5cdFx0XHQgXHR0aGlzLmRhdGFEcmF3Q2FudmFzKCk7XHJcblx0XHRcdCB9IGVsc2Uge1xyXG5cdFx0XHQgXHR0aGlzLmNhbnZhc0ltYWdlKCk7XHJcblx0XHRcdCB9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDnu5jliLbliLDnlLvluIPlubbnlJ/miJDlm77niYdcclxuXHRcdGNhbnZhc0ltYWdlICgpIHtcclxuXHRcdFx0dGhpcy5saXN0c0luZGV4ID0gMDtcclxuXHRcdFx0dGhpcy5jYW52YXMuZHJhdyhmYWxzZSwgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xyXG5cdFx0XHRcdFx0XHR4OiAwLFxyXG5cdFx0XHRcdFx0XHR5OiAwLFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogTnVtYmVyKHRoaXMud2lkdGgpLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IE51bWJlcih0aGlzLmhlaWdodCksXHJcblx0XHRcdFx0XHRcdGZpbGVUeXBlOiB0aGlzLmltZ1R5cGUsXHJcblx0XHRcdFx0XHRcdGNhbnZhc0lkOiAnY2FudmFzJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NhbnZhc0ltYWdlJywgcmVzLnRlbXBGaWxlUGF0aCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2hvd1ByZXZpZXcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd1ByZXZpZXdGbihyZXMudGVtcEZpbGVQYXRoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWw6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHR9KSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g6aKE6KeI5Zu+XHJcblx0XHRzaG93UHJldmlld0ZuIChpbWcpIHtcclxuXHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0Y3VycmVudDogMCxcclxuXHRcdFx0XHR1cmxzOiBbaW1nXVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvLyDmuIXnqbrnlLvluINcclxuXHRcdGNsZWFyQ2FudmFzICgpIHtcclxuXHRcdFx0dGhpcy5jYW52YXMuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHRcdH0sXHJcblxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz0nc2Nzcycgc2NvcGVkPlxyXG4ubW9zb3dlLWNhbnZhcy1pbWFnZXtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC5jYW52YXMtd3JhcC1ib3h7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OjIwMCU7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG5cdC5jYW52YXMtd3JhcCB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0d2lkdGg6IDA7XHJcblx0fVxyXG59XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 17 */
/*!********************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/components/mosowe-canvas-image/wxqrcode.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//---------------------------------------------------------------------\n//\n// QR Code Generator for JavaScript\n//\n// Copyright (c) 2009 Kazuhiko Arase\n//\n// URL: [url=http://www.d-project.com/]http://www.d-project.com/[/url]\n//\n// Licensed under the MIT license:\n//        [url=http://www.opensource.org/licenses/mit-license.php]http://www.opensource.org/licenses/mit-license.php[/url]\n//\n// The word 'QR Code' is registered trademark of\n// DENSO WAVE INCORPORATED\n//        [url=http://www.denso-wave.com/qrcode/faqpatent-e.html]http://www.denso-wave.com/qrcode/faqpatent-e.html[/url]\n//\n//---------------------------------------------------------------------\n\n//---------------------------------------------------------------------\n// qrcode\n//代码第1588行为补充代码\n//修改人：chenxing\n//2017-02-27 16:21:32\n//---------------------------------------------------------------------\n\n/**\r\n * qrcode\r\n * @param typeNumber 1 to 40\r\n * @param errorCorrectLevel 'L','M','Q','H'\r\n */\nvar qrcode = function qrcode(typeNumber, errorCorrectLevel) {\n\n  var PAD0 = 0xEC;\n  var PAD1 = 0x11;\n\n  var _typeNumber = typeNumber;\n  var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];\n  var _modules = null;\n  var _moduleCount = 0;\n  var _dataCache = null;\n  var _dataList = new Array();\n\n  var _this = {};\n\n  var makeImpl = function makeImpl(test, maskPattern) {\n\n    _moduleCount = _typeNumber * 4 + 17;\n    _modules = function (moduleCount) {\n      var modules = new Array(moduleCount);\n      for (var row = 0; row < moduleCount; row += 1) {\n        modules[row] = new Array(moduleCount);\n        for (var col = 0; col < moduleCount; col += 1) {\n          modules[row][col] = null;\n        }\n      }\n      return modules;\n    }(_moduleCount);\n\n    setupPositionProbePattern(0, 0);\n    setupPositionProbePattern(_moduleCount - 7, 0);\n    setupPositionProbePattern(0, _moduleCount - 7);\n    setupPositionAdjustPattern();\n    setupTimingPattern();\n    setupTypeInfo(test, maskPattern);\n\n    if (_typeNumber >= 7) {\n      setupTypeNumber(test);\n    }\n\n    if (_dataCache == null) {\n      _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);\n    }\n\n    mapData(_dataCache, maskPattern);\n  };\n\n  var setupPositionProbePattern = function setupPositionProbePattern(row, col) {\n\n    for (var r = -1; r <= 7; r += 1) {\n\n      if (row + r <= -1 || _moduleCount <= row + r) continue;\n\n      for (var c = -1; c <= 7; c += 1) {\n\n        if (col + c <= -1 || _moduleCount <= col + c) continue;\n\n        if (0 <= r && r <= 6 && (c == 0 || c == 6) ||\n        0 <= c && c <= 6 && (r == 0 || r == 6) ||\n        2 <= r && r <= 4 && 2 <= c && c <= 4) {\n          _modules[row + r][col + c] = true;\n        } else {\n          _modules[row + r][col + c] = false;\n        }\n      }\n    }\n  };\n\n  var getBestMaskPattern = function getBestMaskPattern() {\n\n    var minLostPoint = 0;\n    var pattern = 0;\n\n    for (var i = 0; i < 8; i += 1) {\n\n      makeImpl(true, i);\n\n      var lostPoint = QRUtil.getLostPoint(_this);\n\n      if (i == 0 || minLostPoint > lostPoint) {\n        minLostPoint = lostPoint;\n        pattern = i;\n      }\n    }\n\n    return pattern;\n  };\n\n  var setupTimingPattern = function setupTimingPattern() {\n\n    for (var r = 8; r < _moduleCount - 8; r += 1) {\n      if (_modules[r][6] != null) {\n        continue;\n      }\n      _modules[r][6] = r % 2 == 0;\n    }\n\n    for (var c = 8; c < _moduleCount - 8; c += 1) {\n      if (_modules[6][c] != null) {\n        continue;\n      }\n      _modules[6][c] = c % 2 == 0;\n    }\n  };\n\n  var setupPositionAdjustPattern = function setupPositionAdjustPattern() {\n\n    var pos = QRUtil.getPatternPosition(_typeNumber);\n\n    for (var i = 0; i < pos.length; i += 1) {\n\n      for (var j = 0; j < pos.length; j += 1) {\n\n        var row = pos[i];\n        var col = pos[j];\n\n        if (_modules[row][col] != null) {\n          continue;\n        }\n\n        for (var r = -2; r <= 2; r += 1) {\n\n          for (var c = -2; c <= 2; c += 1) {\n\n            if (r == -2 || r == 2 || c == -2 || c == 2 ||\n            r == 0 && c == 0) {\n              _modules[row + r][col + c] = true;\n            } else {\n              _modules[row + r][col + c] = false;\n            }\n          }\n        }\n      }\n    }\n  };\n\n  var setupTypeNumber = function setupTypeNumber(test) {\n\n    var bits = QRUtil.getBCHTypeNumber(_typeNumber);\n\n    for (var i = 0; i < 18; i += 1) {\n      var mod = !test && (bits >> i & 1) == 1;\n      _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;\n    }\n\n    for (var i = 0; i < 18; i += 1) {\n      var mod = !test && (bits >> i & 1) == 1;\n      _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;\n    }\n  };\n\n  var setupTypeInfo = function setupTypeInfo(test, maskPattern) {\n\n    var data = _errorCorrectLevel << 3 | maskPattern;\n    var bits = QRUtil.getBCHTypeInfo(data);\n\n    // vertical\n    for (var i = 0; i < 15; i += 1) {\n\n      var mod = !test && (bits >> i & 1) == 1;\n\n      if (i < 6) {\n        _modules[i][8] = mod;\n      } else if (i < 8) {\n        _modules[i + 1][8] = mod;\n      } else {\n        _modules[_moduleCount - 15 + i][8] = mod;\n      }\n    }\n\n    // horizontal\n    for (var i = 0; i < 15; i += 1) {\n\n      var mod = !test && (bits >> i & 1) == 1;\n\n      if (i < 8) {\n        _modules[8][_moduleCount - i - 1] = mod;\n      } else if (i < 9) {\n        _modules[8][15 - i - 1 + 1] = mod;\n      } else {\n        _modules[8][15 - i - 1] = mod;\n      }\n    }\n\n    // fixed module\n    _modules[_moduleCount - 8][8] = !test;\n  };\n\n  var mapData = function mapData(data, maskPattern) {\n\n    var inc = -1;\n    var row = _moduleCount - 1;\n    var bitIndex = 7;\n    var byteIndex = 0;\n    var maskFunc = QRUtil.getMaskFunction(maskPattern);\n\n    for (var col = _moduleCount - 1; col > 0; col -= 2) {\n\n      if (col == 6) col -= 1;\n\n      while (true) {\n\n        for (var c = 0; c < 2; c += 1) {\n\n          if (_modules[row][col - c] == null) {\n\n            var dark = false;\n\n            if (byteIndex < data.length) {\n              dark = (data[byteIndex] >>> bitIndex & 1) == 1;\n            }\n\n            var mask = maskFunc(row, col - c);\n\n            if (mask) {\n              dark = !dark;\n            }\n\n            _modules[row][col - c] = dark;\n            bitIndex -= 1;\n\n            if (bitIndex == -1) {\n              byteIndex += 1;\n              bitIndex = 7;\n            }\n          }\n        }\n\n        row += inc;\n\n        if (row < 0 || _moduleCount <= row) {\n          row -= inc;\n          inc = -inc;\n          break;\n        }\n      }\n    }\n  };\n\n  var createBytes = function createBytes(buffer, rsBlocks) {\n\n    var offset = 0;\n\n    var maxDcCount = 0;\n    var maxEcCount = 0;\n\n    var dcdata = new Array(rsBlocks.length);\n    var ecdata = new Array(rsBlocks.length);\n\n    for (var r = 0; r < rsBlocks.length; r += 1) {\n\n      var dcCount = rsBlocks[r].dataCount;\n      var ecCount = rsBlocks[r].totalCount - dcCount;\n\n      maxDcCount = Math.max(maxDcCount, dcCount);\n      maxEcCount = Math.max(maxEcCount, ecCount);\n\n      dcdata[r] = new Array(dcCount);\n\n      for (var i = 0; i < dcdata[r].length; i += 1) {\n        dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];\n      }\n      offset += dcCount;\n\n      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);\n      var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);\n\n      var modPoly = rawPoly.mod(rsPoly);\n      ecdata[r] = new Array(rsPoly.getLength() - 1);\n      for (var i = 0; i < ecdata[r].length; i += 1) {\n        var modIndex = i + modPoly.getLength() - ecdata[r].length;\n        ecdata[r][i] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;\n      }\n    }\n\n    var totalCodeCount = 0;\n    for (var i = 0; i < rsBlocks.length; i += 1) {\n      totalCodeCount += rsBlocks[i].totalCount;\n    }\n\n    var data = new Array(totalCodeCount);\n    var index = 0;\n\n    for (var i = 0; i < maxDcCount; i += 1) {\n      for (var r = 0; r < rsBlocks.length; r += 1) {\n        if (i < dcdata[r].length) {\n          data[index] = dcdata[r][i];\n          index += 1;\n        }\n      }\n    }\n\n    for (var i = 0; i < maxEcCount; i += 1) {\n      for (var r = 0; r < rsBlocks.length; r += 1) {\n        if (i < ecdata[r].length) {\n          data[index] = ecdata[r][i];\n          index += 1;\n        }\n      }\n    }\n\n    return data;\n  };\n\n  var createData = function createData(typeNumber, errorCorrectLevel, dataList) {\n\n    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);\n\n    var buffer = qrBitBuffer();\n\n    for (var i = 0; i < dataList.length; i += 1) {\n      var data = dataList[i];\n      buffer.put(data.getMode(), 4);\n      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));\n      data.write(buffer);\n    }\n\n    // calc num max data.\n    var totalDataCount = 0;\n    for (var i = 0; i < rsBlocks.length; i += 1) {\n      totalDataCount += rsBlocks[i].dataCount;\n    }\n\n    if (buffer.getLengthInBits() > totalDataCount * 8) {\n      throw new Error('code length overflow. (' +\n      buffer.getLengthInBits() +\n      '>' +\n      totalDataCount * 8 +\n      ')');\n    }\n\n    // end code\n    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {\n      buffer.put(0, 4);\n    }\n\n    // padding\n    while (buffer.getLengthInBits() % 8 != 0) {\n      buffer.putBit(false);\n    }\n\n    // padding\n    while (true) {\n\n      if (buffer.getLengthInBits() >= totalDataCount * 8) {\n        break;\n      }\n      buffer.put(PAD0, 8);\n\n      if (buffer.getLengthInBits() >= totalDataCount * 8) {\n        break;\n      }\n      buffer.put(PAD1, 8);\n    }\n\n    return createBytes(buffer, rsBlocks);\n  };\n\n  _this.addData = function (data) {\n    var newData = qr8BitByte(data);\n    _dataList.push(newData);\n    _dataCache = null;\n  };\n\n  _this.isDark = function (row, col) {\n    if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {\n      throw new Error(row + ',' + col);\n    }\n    return _modules[row][col];\n  };\n\n  _this.getModuleCount = function () {\n    return _moduleCount;\n  };\n\n  _this.make = function () {\n    makeImpl(false, getBestMaskPattern());\n  };\n\n  _this.createTableTag = function (cellSize, margin) {\n\n    cellSize = cellSize || 2;\n    margin = typeof margin == 'undefined' ? cellSize * 4 : margin;\n\n    var qrHtml = '';\n\n    qrHtml += '<table style=\"';\n    qrHtml += ' border-width: 0px; border-style: none;';\n    qrHtml += ' border-collapse: collapse;';\n    qrHtml += ' padding: 0px; margin: ' + margin + 'px;';\n    qrHtml += '\">';\n    qrHtml += '<tbody>';\n\n    for (var r = 0; r < _this.getModuleCount(); r += 1) {\n\n      qrHtml += '<tr>';\n\n      for (var c = 0; c < _this.getModuleCount(); c += 1) {\n        qrHtml += '<td style=\"';\n        qrHtml += ' border-width: 0px; border-style: none;';\n        qrHtml += ' border-collapse: collapse;';\n        qrHtml += ' padding: 0px; margin: 0px;';\n        qrHtml += ' width: ' + cellSize + 'px;';\n        qrHtml += ' height: ' + cellSize + 'px;';\n        qrHtml += ' background-color: ';\n        qrHtml += _this.isDark(r, c) ? '#000000' : '#ffffff';\n        qrHtml += ';';\n        qrHtml += '\"/>';\n      }\n\n      qrHtml += '</tr>';\n    }\n\n    qrHtml += '</tbody>';\n    qrHtml += '</table>';\n\n    return qrHtml;\n  };\n\n  _this.createImgTag = function (cellSize, margin, size) {\n\n    cellSize = cellSize || 2;\n    margin = typeof margin == 'undefined' ? cellSize * 4 : margin;\n\n    var min = margin;\n    var max = _this.getModuleCount() * cellSize + margin;\n\n    return createImgTag(size, size, function (x, y) {\n      if (min <= x && x < max && min <= y && y < max) {\n        var c = Math.floor((x - min) / cellSize);\n        var r = Math.floor((y - min) / cellSize);\n        return _this.isDark(r, c) ? 0 : 1;\n      } else {\n        return 1;\n      }\n    });\n  };\n\n  return _this;\n};\n\n//---------------------------------------------------------------------\n// qrcode.stringToBytes\n//---------------------------------------------------------------------\n\nqrcode.stringToBytes = function (s) {\n  var bytes = new Array();\n  for (var i = 0; i < s.length; i += 1) {\n    var c = s.charCodeAt(i);\n    bytes.push(c & 0xff);\n  }\n  return bytes;\n};\n\n//---------------------------------------------------------------------\n// qrcode.createStringToBytes\n//---------------------------------------------------------------------\n\n/**\r\n * @param unicodeData base64 string of byte array.\r\n * [16bit Unicode],[16bit Bytes], ...\r\n * @param numChars\r\n */\nqrcode.createStringToBytes = function (unicodeData, numChars) {\n\n  // create conversion map.\n\n  var unicodeMap = function () {\n\n    var bin = base64DecodeInputStream(unicodeData);\n    var read = function read() {\n      var b = bin.read();\n      if (b == -1) throw new Error();\n      return b;\n    };\n\n    var count = 0;\n    var unicodeMap = {};\n    while (true) {\n      var b0 = bin.read();\n      if (b0 == -1) break;\n      var b1 = read();\n      var b2 = read();\n      var b3 = read();\n      var k = String.fromCharCode(b0 << 8 | b1);\n      var v = b2 << 8 | b3;\n      unicodeMap[k] = v;\n      count += 1;\n    }\n    if (count != numChars) {\n      throw new Error(count + ' != ' + numChars);\n    }\n\n    return unicodeMap;\n  }();\n\n  var unknownChar = '?'.charCodeAt(0);\n\n  return function (s) {\n    var bytes = new Array();\n    for (var i = 0; i < s.length; i += 1) {\n      var c = s.charCodeAt(i);\n      if (c < 128) {\n        bytes.push(c);\n      } else {\n        var b = unicodeMap[s.charAt(i)];\n        if (typeof b == 'number') {\n          if ((b & 0xff) == b) {\n            // 1byte\n            bytes.push(b);\n          } else {\n            // 2bytes\n            bytes.push(b >>> 8);\n            bytes.push(b & 0xff);\n          }\n        } else {\n          bytes.push(unknownChar);\n        }\n      }\n    }\n    return bytes;\n  };\n};\n\n//---------------------------------------------------------------------\n// QRMode\n//---------------------------------------------------------------------\n\nvar QRMode = {\n  MODE_NUMBER: 1 << 0,\n  MODE_ALPHA_NUM: 1 << 1,\n  MODE_8BIT_BYTE: 1 << 2,\n  MODE_KANJI: 1 << 3 };\n\n\n//---------------------------------------------------------------------\n// QRErrorCorrectLevel\n//---------------------------------------------------------------------\n\nvar QRErrorCorrectLevel = {\n  L: 1,\n  M: 0,\n  Q: 3,\n  H: 2 };\n\n\n//---------------------------------------------------------------------\n// QRMaskPattern\n//---------------------------------------------------------------------\n\nvar QRMaskPattern = {\n  PATTERN000: 0,\n  PATTERN001: 1,\n  PATTERN010: 2,\n  PATTERN011: 3,\n  PATTERN100: 4,\n  PATTERN101: 5,\n  PATTERN110: 6,\n  PATTERN111: 7 };\n\n\n//---------------------------------------------------------------------\n// QRUtil\n//---------------------------------------------------------------------\n\nvar QRUtil = function () {\n\n  var PATTERN_POSITION_TABLE = [\n  [],\n  [6, 18],\n  [6, 22],\n  [6, 26],\n  [6, 30],\n  [6, 34],\n  [6, 22, 38],\n  [6, 24, 42],\n  [6, 26, 46],\n  [6, 28, 50],\n  [6, 30, 54],\n  [6, 32, 58],\n  [6, 34, 62],\n  [6, 26, 46, 66],\n  [6, 26, 48, 70],\n  [6, 26, 50, 74],\n  [6, 30, 54, 78],\n  [6, 30, 56, 82],\n  [6, 30, 58, 86],\n  [6, 34, 62, 90],\n  [6, 28, 50, 72, 94],\n  [6, 26, 50, 74, 98],\n  [6, 30, 54, 78, 102],\n  [6, 28, 54, 80, 106],\n  [6, 32, 58, 84, 110],\n  [6, 30, 58, 86, 114],\n  [6, 34, 62, 90, 118],\n  [6, 26, 50, 74, 98, 122],\n  [6, 30, 54, 78, 102, 126],\n  [6, 26, 52, 78, 104, 130],\n  [6, 30, 56, 82, 108, 134],\n  [6, 34, 60, 86, 112, 138],\n  [6, 30, 58, 86, 114, 142],\n  [6, 34, 62, 90, 118, 146],\n  [6, 30, 54, 78, 102, 126, 150],\n  [6, 24, 50, 76, 102, 128, 154],\n  [6, 28, 54, 80, 106, 132, 158],\n  [6, 32, 58, 84, 110, 136, 162],\n  [6, 26, 54, 82, 110, 138, 166],\n  [6, 30, 58, 86, 114, 142, 170]];\n\n  var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;\n  var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;\n  var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;\n\n  var _this = {};\n\n  var getBCHDigit = function getBCHDigit(data) {\n    var digit = 0;\n    while (data != 0) {\n      digit += 1;\n      data >>>= 1;\n    }\n    return digit;\n  };\n\n  _this.getBCHTypeInfo = function (data) {\n    var d = data << 10;\n    while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {\n      d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);\n    }\n    return (data << 10 | d) ^ G15_MASK;\n  };\n\n  _this.getBCHTypeNumber = function (data) {\n    var d = data << 12;\n    while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {\n      d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);\n    }\n    return data << 12 | d;\n  };\n\n  _this.getPatternPosition = function (typeNumber) {\n    return PATTERN_POSITION_TABLE[typeNumber - 1];\n  };\n\n  _this.getMaskFunction = function (maskPattern) {\n\n    switch (maskPattern) {\n\n      case QRMaskPattern.PATTERN000:\n        return function (i, j) {return (i + j) % 2 == 0;};\n      case QRMaskPattern.PATTERN001:\n        return function (i, j) {return i % 2 == 0;};\n      case QRMaskPattern.PATTERN010:\n        return function (i, j) {return j % 3 == 0;};\n      case QRMaskPattern.PATTERN011:\n        return function (i, j) {return (i + j) % 3 == 0;};\n      case QRMaskPattern.PATTERN100:\n        return function (i, j) {return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;};\n      case QRMaskPattern.PATTERN101:\n        return function (i, j) {return i * j % 2 + i * j % 3 == 0;};\n      case QRMaskPattern.PATTERN110:\n        return function (i, j) {return (i * j % 2 + i * j % 3) % 2 == 0;};\n      case QRMaskPattern.PATTERN111:\n        return function (i, j) {return (i * j % 3 + (i + j) % 2) % 2 == 0;};\n\n      default:\n        throw new Error('bad maskPattern:' + maskPattern);}\n\n  };\n\n  _this.getErrorCorrectPolynomial = function (errorCorrectLength) {\n    var a = qrPolynomial([1], 0);\n    for (var i = 0; i < errorCorrectLength; i += 1) {\n      a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));\n    }\n    return a;\n  };\n\n  _this.getLengthInBits = function (mode, type) {\n\n    if (1 <= type && type < 10) {\n\n      // 1 - 9\n\n      switch (mode) {\n        case QRMode.MODE_NUMBER:return 10;\n        case QRMode.MODE_ALPHA_NUM:return 9;\n        case QRMode.MODE_8BIT_BYTE:return 8;\n        case QRMode.MODE_KANJI:return 8;\n        default:\n          throw new Error('mode:' + mode);}\n\n\n    } else if (type < 27) {\n\n      // 10 - 26\n\n      switch (mode) {\n        case QRMode.MODE_NUMBER:return 12;\n        case QRMode.MODE_ALPHA_NUM:return 11;\n        case QRMode.MODE_8BIT_BYTE:return 16;\n        case QRMode.MODE_KANJI:return 10;\n        default:\n          throw new Error('mode:' + mode);}\n\n\n    } else if (type < 41) {\n\n      // 27 - 40\n\n      switch (mode) {\n        case QRMode.MODE_NUMBER:return 14;\n        case QRMode.MODE_ALPHA_NUM:return 13;\n        case QRMode.MODE_8BIT_BYTE:return 16;\n        case QRMode.MODE_KANJI:return 12;\n        default:\n          throw new Error('mode:' + mode);}\n\n\n    } else {\n      throw new Error('type:' + type);\n    }\n  };\n\n  _this.getLostPoint = function (qrcode) {\n\n    var moduleCount = qrcode.getModuleCount();\n\n    var lostPoint = 0;\n\n    // LEVEL1\n\n    for (var row = 0; row < moduleCount; row += 1) {\n      for (var col = 0; col < moduleCount; col += 1) {\n\n        var sameCount = 0;\n        var dark = qrcode.isDark(row, col);\n\n        for (var r = -1; r <= 1; r += 1) {\n\n          if (row + r < 0 || moduleCount <= row + r) {\n            continue;\n          }\n\n          for (var c = -1; c <= 1; c += 1) {\n\n            if (col + c < 0 || moduleCount <= col + c) {\n              continue;\n            }\n\n            if (r == 0 && c == 0) {\n              continue;\n            }\n\n            if (dark == qrcode.isDark(row + r, col + c)) {\n              sameCount += 1;\n            }\n          }\n        }\n\n        if (sameCount > 5) {\n          lostPoint += 3 + sameCount - 5;\n        }\n      }\n    };\n\n    // LEVEL2\n\n    for (var row = 0; row < moduleCount - 1; row += 1) {\n      for (var col = 0; col < moduleCount - 1; col += 1) {\n        var count = 0;\n        if (qrcode.isDark(row, col)) count += 1;\n        if (qrcode.isDark(row + 1, col)) count += 1;\n        if (qrcode.isDark(row, col + 1)) count += 1;\n        if (qrcode.isDark(row + 1, col + 1)) count += 1;\n        if (count == 0 || count == 4) {\n          lostPoint += 3;\n        }\n      }\n    }\n\n    // LEVEL3\n\n    for (var row = 0; row < moduleCount; row += 1) {\n      for (var col = 0; col < moduleCount - 6; col += 1) {\n        if (qrcode.isDark(row, col) &&\n        !qrcode.isDark(row, col + 1) &&\n        qrcode.isDark(row, col + 2) &&\n        qrcode.isDark(row, col + 3) &&\n        qrcode.isDark(row, col + 4) &&\n        !qrcode.isDark(row, col + 5) &&\n        qrcode.isDark(row, col + 6)) {\n          lostPoint += 40;\n        }\n      }\n    }\n\n    for (var col = 0; col < moduleCount; col += 1) {\n      for (var row = 0; row < moduleCount - 6; row += 1) {\n        if (qrcode.isDark(row, col) &&\n        !qrcode.isDark(row + 1, col) &&\n        qrcode.isDark(row + 2, col) &&\n        qrcode.isDark(row + 3, col) &&\n        qrcode.isDark(row + 4, col) &&\n        !qrcode.isDark(row + 5, col) &&\n        qrcode.isDark(row + 6, col)) {\n          lostPoint += 40;\n        }\n      }\n    }\n\n    // LEVEL4\n\n    var darkCount = 0;\n\n    for (var col = 0; col < moduleCount; col += 1) {\n      for (var row = 0; row < moduleCount; row += 1) {\n        if (qrcode.isDark(row, col)) {\n          darkCount += 1;\n        }\n      }\n    }\n\n    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;\n    lostPoint += ratio * 10;\n\n    return lostPoint;\n  };\n\n  return _this;\n}();\n\n//---------------------------------------------------------------------\n// QRMath\n//---------------------------------------------------------------------\n\nvar QRMath = function () {\n\n  var EXP_TABLE = new Array(256);\n  var LOG_TABLE = new Array(256);\n\n  // initialize tables\n  for (var i = 0; i < 8; i += 1) {\n    EXP_TABLE[i] = 1 << i;\n  }\n  for (var i = 8; i < 256; i += 1) {\n    EXP_TABLE[i] = EXP_TABLE[i - 4] ^\n    EXP_TABLE[i - 5] ^\n    EXP_TABLE[i - 6] ^\n    EXP_TABLE[i - 8];\n  }\n  for (var i = 0; i < 255; i += 1) {\n    LOG_TABLE[EXP_TABLE[i]] = i;\n  }\n\n  var _this = {};\n\n  _this.glog = function (n) {\n\n    if (n < 1) {\n      throw new Error('glog(' + n + ')');\n    }\n\n    return LOG_TABLE[n];\n  };\n\n  _this.gexp = function (n) {\n\n    while (n < 0) {\n      n += 255;\n    }\n\n    while (n >= 256) {\n      n -= 255;\n    }\n\n    return EXP_TABLE[n];\n  };\n\n  return _this;\n}();\n\n//---------------------------------------------------------------------\n// qrPolynomial\n//---------------------------------------------------------------------\n\nfunction qrPolynomial(num, shift) {\n\n  if (typeof num.length == 'undefined') {\n    throw new Error(num.length + '/' + shift);\n  }\n\n  var _num = function () {\n    var offset = 0;\n    while (offset < num.length && num[offset] == 0) {\n      offset += 1;\n    }\n    var _num = new Array(num.length - offset + shift);\n    for (var i = 0; i < num.length - offset; i += 1) {\n      _num[i] = num[i + offset];\n    }\n    return _num;\n  }();\n\n  var _this = {};\n\n  _this.getAt = function (index) {\n    return _num[index];\n  };\n\n  _this.getLength = function () {\n    return _num.length;\n  };\n\n  _this.multiply = function (e) {\n\n    var num = new Array(_this.getLength() + e.getLength() - 1);\n\n    for (var i = 0; i < _this.getLength(); i += 1) {\n      for (var j = 0; j < e.getLength(); j += 1) {\n        num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j)));\n      }\n    }\n\n    return qrPolynomial(num, 0);\n  };\n\n  _this.mod = function (e) {\n\n    if (_this.getLength() - e.getLength() < 0) {\n      return _this;\n    }\n\n    var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));\n\n    var num = new Array(_this.getLength());\n    for (var i = 0; i < _this.getLength(); i += 1) {\n      num[i] = _this.getAt(i);\n    }\n\n    for (var i = 0; i < e.getLength(); i += 1) {\n      num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);\n    }\n\n    // recursive call\n    return qrPolynomial(num, 0).mod(e);\n  };\n\n  return _this;\n};\n\n//---------------------------------------------------------------------\n// QRRSBlock\n//---------------------------------------------------------------------\n\nvar QRRSBlock = function () {\n\n\n  // [1: [L, M, Q, H], ..]\n  var RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];\n\n  var qrRSBlock = function qrRSBlock(totalCount, dataCount) {\n    var _this = {};\n    _this.totalCount = totalCount;\n    _this.dataCount = dataCount;\n    return _this;\n  };\n\n  var _this = {};\n\n  var getRsBlockTable = function getRsBlockTable(typeNumber, errorCorrectLevel) {\n\n    switch (errorCorrectLevel) {\n      case QRErrorCorrectLevel.L:\n        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];\n      case QRErrorCorrectLevel.M:\n        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];\n      case QRErrorCorrectLevel.Q:\n        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];\n      case QRErrorCorrectLevel.H:\n        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];\n      default:\n        return undefined;}\n\n  };\n\n  _this.getRSBlocks = function (typeNumber, errorCorrectLevel) {\n\n    var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);\n\n    if (typeof rsBlock == 'undefined') {\n      throw new Error('bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:' + typeNumber +\n      '/errorCorrectLevel:' + errorCorrectLevel);\n    }\n\n    var length = rsBlock.length / 3;\n\n    var list = new Array();\n\n    for (var i = 0; i < length; i += 1) {\n\n      var count = rsBlock[i * 3 + 0];\n      var totalCount = rsBlock[i * 3 + 1];\n      var dataCount = rsBlock[i * 3 + 2];\n\n      for (var j = 0; j < count; j += 1) {\n        list.push(qrRSBlock(totalCount, dataCount));\n      }\n    }\n\n    return list;\n  };\n\n  return _this;\n}();\n\n//---------------------------------------------------------------------\n// qrBitBuffer\n//---------------------------------------------------------------------\n\nvar qrBitBuffer = function qrBitBuffer() {\n\n  var _buffer = new Array();\n  var _length = 0;\n\n  var _this = {};\n\n  _this.getBuffer = function () {\n    return _buffer;\n  };\n\n  _this.getAt = function (index) {\n    var bufIndex = Math.floor(index / 8);\n    return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;\n  };\n\n  _this.put = function (num, length) {\n    for (var i = 0; i < length; i += 1) {\n      _this.putBit((num >>> length - i - 1 & 1) == 1);\n    }\n  };\n\n  _this.getLengthInBits = function () {\n    return _length;\n  };\n\n  _this.putBit = function (bit) {\n\n    var bufIndex = Math.floor(_length / 8);\n    if (_buffer.length <= bufIndex) {\n      _buffer.push(0);\n    }\n\n    if (bit) {\n      _buffer[bufIndex] |= 0x80 >>> _length % 8;\n    }\n\n    _length += 1;\n  };\n\n  return _this;\n};\n\n//---------------------------------------------------------------------\n// qr8BitByte\n//---------------------------------------------------------------------\n\nvar qr8BitByte = function qr8BitByte(data) {\n\n  var _mode = QRMode.MODE_8BIT_BYTE;\n  var _data = data;\n  var _parsedData = [];\n\n  var _this = {};\n\n\n  // Added to support UTF-8 Characters\n  for (var i = 0, l = _data.length; i < l; i++) {\n    var byteArray = [];\n    var code = _data.charCodeAt(i);\n\n    if (code > 0x10000) {\n      byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;\n      byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;\n      byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;\n      byteArray[3] = 0x80 | code & 0x3F;\n    } else if (code > 0x800) {\n      byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;\n      byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;\n      byteArray[2] = 0x80 | code & 0x3F;\n    } else if (code > 0x80) {\n      byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;\n      byteArray[1] = 0x80 | code & 0x3F;\n    } else {\n      byteArray[0] = code;\n    }\n\n    // Fix Unicode corruption bug\n    _parsedData.push(byteArray);\n  }\n\n  _parsedData = Array.prototype.concat.apply([], _parsedData);\n\n  if (_parsedData.length != _data.length) {\n    _parsedData.unshift(191);\n    _parsedData.unshift(187);\n    _parsedData.unshift(239);\n  }\n\n  var _bytes = _parsedData;\n\n  _this.getMode = function () {\n    return _mode;\n  };\n\n  _this.getLength = function (buffer) {\n    return _bytes.length;\n  };\n\n  _this.write = function (buffer) {\n    for (var i = 0; i < _bytes.length; i += 1) {\n      buffer.put(_bytes[i], 8);\n    }\n  };\n\n  return _this;\n};\n\n//=====================================================================\n// GIF Support etc.\n//\n\n//---------------------------------------------------------------------\n// byteArrayOutputStream\n//---------------------------------------------------------------------\n\nvar byteArrayOutputStream = function byteArrayOutputStream() {\n\n  var _bytes = new Array();\n\n  var _this = {};\n\n  _this.writeByte = function (b) {\n    _bytes.push(b & 0xff);\n  };\n\n  _this.writeShort = function (i) {\n    _this.writeByte(i);\n    _this.writeByte(i >>> 8);\n  };\n\n  _this.writeBytes = function (b, off, len) {\n    off = off || 0;\n    len = len || b.length;\n    for (var i = 0; i < len; i += 1) {\n      _this.writeByte(b[i + off]);\n    }\n  };\n\n  _this.writeString = function (s) {\n    for (var i = 0; i < s.length; i += 1) {\n      _this.writeByte(s.charCodeAt(i));\n    }\n  };\n\n  _this.toByteArray = function () {\n    return _bytes;\n  };\n\n  _this.toString = function () {\n    var s = '';\n    s += '[';\n    for (var i = 0; i < _bytes.length; i += 1) {\n      if (i > 0) {\n        s += ',';\n      }\n      s += _bytes[i];\n    }\n    s += ']';\n    return s;\n  };\n\n  return _this;\n};\n\n//---------------------------------------------------------------------\n// base64EncodeOutputStream\n//---------------------------------------------------------------------\n\nvar base64EncodeOutputStream = function base64EncodeOutputStream() {\n\n  var _buffer = 0;\n  var _buflen = 0;\n  var _length = 0;\n  var _base64 = '';\n\n  var _this = {};\n\n  var writeEncoded = function writeEncoded(b) {\n    _base64 += String.fromCharCode(encode(b & 0x3f));\n  };\n\n  var encode = function encode(n) {\n    if (n < 0) {\n      // error.\n    } else if (n < 26) {\n      return 0x41 + n;\n    } else if (n < 52) {\n      return 0x61 + (n - 26);\n    } else if (n < 62) {\n      return 0x30 + (n - 52);\n    } else if (n == 62) {\n      return 0x2b;\n    } else if (n == 63) {\n      return 0x2f;\n    }\n    throw new Error('n:' + n);\n  };\n\n  _this.writeByte = function (n) {\n\n    _buffer = _buffer << 8 | n & 0xff;\n    _buflen += 8;\n    _length += 1;\n\n    while (_buflen >= 6) {\n      writeEncoded(_buffer >>> _buflen - 6);\n      _buflen -= 6;\n    }\n  };\n\n  _this.flush = function () {\n\n    if (_buflen > 0) {\n      writeEncoded(_buffer << 6 - _buflen);\n      _buffer = 0;\n      _buflen = 0;\n    }\n\n    if (_length % 3 != 0) {\n      // padding\n      var padlen = 3 - _length % 3;\n      for (var i = 0; i < padlen; i += 1) {\n        _base64 += '=';\n      }\n    }\n  };\n\n  _this.toString = function () {\n    return _base64;\n  };\n\n  return _this;\n};\n\n//---------------------------------------------------------------------\n// base64DecodeInputStream\n//---------------------------------------------------------------------\n\nvar base64DecodeInputStream = function base64DecodeInputStream(str) {\n\n  var _str = str;\n  var _pos = 0;\n  var _buffer = 0;\n  var _buflen = 0;\n\n  var _this = {};\n\n  _this.read = function () {\n\n    while (_buflen < 8) {\n\n      if (_pos >= _str.length) {\n        if (_buflen == 0) {\n          return -1;\n        }\n        throw new Error('unexpected end of file./' + _buflen);\n      }\n\n      var c = _str.charAt(_pos);\n      _pos += 1;\n\n      if (c == '=') {\n        _buflen = 0;\n        return -1;\n      } else if (c.match(/^\\s$/)) {\n        // ignore if whitespace.\n        continue;\n      }\n\n      _buffer = _buffer << 6 | decode(c.charCodeAt(0));\n      _buflen += 6;\n    }\n\n    var n = _buffer >>> _buflen - 8 & 0xff;\n    _buflen -= 8;\n    return n;\n  };\n\n  var decode = function decode(c) {\n    if (0x41 <= c && c <= 0x5a) {\n      return c - 0x41;\n    } else if (0x61 <= c && c <= 0x7a) {\n      return c - 0x61 + 26;\n    } else if (0x30 <= c && c <= 0x39) {\n      return c - 0x30 + 52;\n    } else if (c == 0x2b) {\n      return 62;\n    } else if (c == 0x2f) {\n      return 63;\n    } else {\n      throw new Error('c:' + c);\n    }\n  };\n\n  return _this;\n};\n\n//---------------------------------------------------------------------\n// gifImage (B/W)\n//---------------------------------------------------------------------\n\nvar gifImage = function gifImage(width, height) {\n\n  var _width = width;\n  var _height = height;\n  var _data = new Array(width * height);\n\n  var _this = {};\n\n  _this.setPixel = function (x, y, pixel) {\n    _data[y * _width + x] = pixel;\n  };\n\n  _this.write = function (out) {\n\n    //---------------------------------\n    // GIF Signature\n\n    out.writeString('GIF87a');\n\n    //---------------------------------\n    // Screen Descriptor\n\n    out.writeShort(_width);\n    out.writeShort(_height);\n\n    out.writeByte(0x80); // 2bit\n    out.writeByte(0);\n    out.writeByte(0);\n\n    //---------------------------------\n    // Global Color Map\n\n    // black\n    out.writeByte(0x00);\n    out.writeByte(0x00);\n    out.writeByte(0x00);\n\n    // white\n    out.writeByte(0xff);\n    out.writeByte(0xff);\n    out.writeByte(0xff);\n\n    //---------------------------------\n    // Image Descriptor\n\n    out.writeString(',');\n    out.writeShort(0);\n    out.writeShort(0);\n    out.writeShort(_width);\n    out.writeShort(_height);\n    out.writeByte(0);\n\n    //---------------------------------\n    // Local Color Map\n\n    //---------------------------------\n    // Raster Data\n\n    var lzwMinCodeSize = 2;\n    var raster = getLZWRaster(lzwMinCodeSize);\n\n    out.writeByte(lzwMinCodeSize);\n\n    var offset = 0;\n\n    while (raster.length - offset > 255) {\n      out.writeByte(255);\n      out.writeBytes(raster, offset, 255);\n      offset += 255;\n    }\n\n    out.writeByte(raster.length - offset);\n    out.writeBytes(raster, offset, raster.length - offset);\n    out.writeByte(0x00);\n\n    //---------------------------------\n    // GIF Terminator\n    out.writeString(';');\n  };\n\n  var bitOutputStream = function bitOutputStream(out) {\n\n    var _out = out;\n    var _bitLength = 0;\n    var _bitBuffer = 0;\n\n    var _this = {};\n\n    _this.write = function (data, length) {\n\n      if (data >>> length != 0) {\n        throw new Error('length over');\n      }\n\n      while (_bitLength + length >= 8) {\n        _out.writeByte(0xff & (data << _bitLength | _bitBuffer));\n        length -= 8 - _bitLength;\n        data >>>= 8 - _bitLength;\n        _bitBuffer = 0;\n        _bitLength = 0;\n      }\n\n      _bitBuffer = data << _bitLength | _bitBuffer;\n      _bitLength = _bitLength + length;\n    };\n\n    _this.flush = function () {\n      if (_bitLength > 0) {\n        _out.writeByte(_bitBuffer);\n      }\n    };\n\n    return _this;\n  };\n\n  var getLZWRaster = function getLZWRaster(lzwMinCodeSize) {\n\n    var clearCode = 1 << lzwMinCodeSize;\n    var endCode = (1 << lzwMinCodeSize) + 1;\n    var bitLength = lzwMinCodeSize + 1;\n\n    // Setup LZWTable\n    var table = lzwTable();\n\n    for (var i = 0; i < clearCode; i += 1) {\n      table.add(String.fromCharCode(i));\n    }\n    table.add(String.fromCharCode(clearCode));\n    table.add(String.fromCharCode(endCode));\n\n    var byteOut = byteArrayOutputStream();\n    var bitOut = bitOutputStream(byteOut);\n\n    // clear code\n    bitOut.write(clearCode, bitLength);\n\n    var dataIndex = 0;\n\n    var s = String.fromCharCode(_data[dataIndex]);\n    dataIndex += 1;\n\n    while (dataIndex < _data.length) {\n\n      var c = String.fromCharCode(_data[dataIndex]);\n      dataIndex += 1;\n\n      if (table.contains(s + c)) {\n\n        s = s + c;\n\n      } else {\n\n        bitOut.write(table.indexOf(s), bitLength);\n\n        if (table.size() < 0xfff) {\n\n          if (table.size() == 1 << bitLength) {\n            bitLength += 1;\n          }\n\n          table.add(s + c);\n        }\n\n        s = c;\n      }\n    }\n\n    bitOut.write(table.indexOf(s), bitLength);\n\n    // end code\n    bitOut.write(endCode, bitLength);\n\n    bitOut.flush();\n\n    return byteOut.toByteArray();\n  };\n\n  var lzwTable = function lzwTable() {\n\n    var _map = {};\n    var _size = 0;\n\n    var _this = {};\n\n    _this.add = function (key) {\n      if (_this.contains(key)) {\n        throw new Error('dup key:' + key);\n      }\n      _map[key] = _size;\n      _size += 1;\n    };\n\n    _this.size = function () {\n      return _size;\n    };\n\n    _this.indexOf = function (key) {\n      return _map[key];\n    };\n\n    _this.contains = function (key) {\n      return typeof _map[key] != 'undefined';\n    };\n\n    return _this;\n  };\n\n  return _this;\n};\n\nvar createImgTag = function createImgTag(width, height, getPixel, alt) {\n\n  var gif = gifImage(width, height);\n  for (var y = 0; y < height; y += 1) {\n    for (var x = 0; x < width; x += 1) {\n      gif.setPixel(x, y, getPixel(x, y));\n    }\n  }\n\n  var b = byteArrayOutputStream();\n  gif.write(b);\n\n  var base64 = base64EncodeOutputStream();\n  var bytes = b.toByteArray();\n  for (var i = 0; i < bytes.length; i += 1) {\n    base64.writeByte(bytes[i]);\n  }\n  base64.flush();\n\n  var img = '';\n  img += 'data:image/gif;base64,';\n  img += base64;\n\n  return img;\n};\n\n//---------------------------------------------------------------------\n// returns qrcode function.\n\nvar createQrCodeImg = function createQrCodeImg(text, options) {\n  options = options || {};\n  var typeNumber = options.typeNumber || 4;\n  var errorCorrectLevel = options.errorCorrectLevel || 'M';\n  var size = options.size || 500;\n\n  var qr;\n\n  try {\n    qr = qrcode(typeNumber, errorCorrectLevel || 'M');\n    qr.addData(text);\n    qr.make();\n  } catch (e) {\n    if (typeNumber >= 40) {\n      throw new Error('Text too long to encode');\n    } else {\n      return gen(text, {\n        size: size,\n        errorCorrectLevel: errorCorrectLevel,\n        typeNumber: typeNumber + 1 });\n\n    }\n  }\n\n  // calc cellsize and margin\n  var cellsize = parseInt(size / qr.getModuleCount());\n  var margin = parseInt((size - qr.getModuleCount() * cellsize) / 2);\n\n  return qr.createImgTag(cellsize, margin, size);\n};\n// var module = {}; 需要注释这一行，否则微信小程序无法使用\nmodule.exports = {\n  createQrCodeImg: createQrCodeImg };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tb3Nvd2UtY2FudmFzLWltYWdlL3d4cXJjb2RlLmpzIl0sIm5hbWVzIjpbInFyY29kZSIsInR5cGVOdW1iZXIiLCJlcnJvckNvcnJlY3RMZXZlbCIsIlBBRDAiLCJQQUQxIiwiX3R5cGVOdW1iZXIiLCJfZXJyb3JDb3JyZWN0TGV2ZWwiLCJRUkVycm9yQ29ycmVjdExldmVsIiwiX21vZHVsZXMiLCJfbW9kdWxlQ291bnQiLCJfZGF0YUNhY2hlIiwiX2RhdGFMaXN0IiwiQXJyYXkiLCJfdGhpcyIsIm1ha2VJbXBsIiwidGVzdCIsIm1hc2tQYXR0ZXJuIiwibW9kdWxlQ291bnQiLCJtb2R1bGVzIiwicm93IiwiY29sIiwic2V0dXBQb3NpdGlvblByb2JlUGF0dGVybiIsInNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuIiwic2V0dXBUaW1pbmdQYXR0ZXJuIiwic2V0dXBUeXBlSW5mbyIsInNldHVwVHlwZU51bWJlciIsImNyZWF0ZURhdGEiLCJtYXBEYXRhIiwiciIsImMiLCJnZXRCZXN0TWFza1BhdHRlcm4iLCJtaW5Mb3N0UG9pbnQiLCJwYXR0ZXJuIiwiaSIsImxvc3RQb2ludCIsIlFSVXRpbCIsImdldExvc3RQb2ludCIsInBvcyIsImdldFBhdHRlcm5Qb3NpdGlvbiIsImxlbmd0aCIsImoiLCJiaXRzIiwiZ2V0QkNIVHlwZU51bWJlciIsIm1vZCIsIk1hdGgiLCJmbG9vciIsImRhdGEiLCJnZXRCQ0hUeXBlSW5mbyIsImluYyIsImJpdEluZGV4IiwiYnl0ZUluZGV4IiwibWFza0Z1bmMiLCJnZXRNYXNrRnVuY3Rpb24iLCJkYXJrIiwibWFzayIsImNyZWF0ZUJ5dGVzIiwiYnVmZmVyIiwicnNCbG9ja3MiLCJvZmZzZXQiLCJtYXhEY0NvdW50IiwibWF4RWNDb3VudCIsImRjZGF0YSIsImVjZGF0YSIsImRjQ291bnQiLCJkYXRhQ291bnQiLCJlY0NvdW50IiwidG90YWxDb3VudCIsIm1heCIsImdldEJ1ZmZlciIsInJzUG9seSIsImdldEVycm9yQ29ycmVjdFBvbHlub21pYWwiLCJyYXdQb2x5IiwicXJQb2x5bm9taWFsIiwiZ2V0TGVuZ3RoIiwibW9kUG9seSIsIm1vZEluZGV4IiwiZ2V0QXQiLCJ0b3RhbENvZGVDb3VudCIsImluZGV4IiwiZGF0YUxpc3QiLCJRUlJTQmxvY2siLCJnZXRSU0Jsb2NrcyIsInFyQml0QnVmZmVyIiwicHV0IiwiZ2V0TW9kZSIsImdldExlbmd0aEluQml0cyIsIndyaXRlIiwidG90YWxEYXRhQ291bnQiLCJFcnJvciIsInB1dEJpdCIsImFkZERhdGEiLCJuZXdEYXRhIiwicXI4Qml0Qnl0ZSIsInB1c2giLCJpc0RhcmsiLCJnZXRNb2R1bGVDb3VudCIsIm1ha2UiLCJjcmVhdGVUYWJsZVRhZyIsImNlbGxTaXplIiwibWFyZ2luIiwicXJIdG1sIiwiY3JlYXRlSW1nVGFnIiwic2l6ZSIsIm1pbiIsIngiLCJ5Iiwic3RyaW5nVG9CeXRlcyIsInMiLCJieXRlcyIsImNoYXJDb2RlQXQiLCJjcmVhdGVTdHJpbmdUb0J5dGVzIiwidW5pY29kZURhdGEiLCJudW1DaGFycyIsInVuaWNvZGVNYXAiLCJiaW4iLCJiYXNlNjREZWNvZGVJbnB1dFN0cmVhbSIsInJlYWQiLCJiIiwiY291bnQiLCJiMCIsImIxIiwiYjIiLCJiMyIsImsiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ2IiwidW5rbm93bkNoYXIiLCJjaGFyQXQiLCJRUk1vZGUiLCJNT0RFX05VTUJFUiIsIk1PREVfQUxQSEFfTlVNIiwiTU9ERV84QklUX0JZVEUiLCJNT0RFX0tBTkpJIiwiTCIsIk0iLCJRIiwiSCIsIlFSTWFza1BhdHRlcm4iLCJQQVRURVJOMDAwIiwiUEFUVEVSTjAwMSIsIlBBVFRFUk4wMTAiLCJQQVRURVJOMDExIiwiUEFUVEVSTjEwMCIsIlBBVFRFUk4xMDEiLCJQQVRURVJOMTEwIiwiUEFUVEVSTjExMSIsIlBBVFRFUk5fUE9TSVRJT05fVEFCTEUiLCJHMTUiLCJHMTgiLCJHMTVfTUFTSyIsImdldEJDSERpZ2l0IiwiZGlnaXQiLCJkIiwiZXJyb3JDb3JyZWN0TGVuZ3RoIiwiYSIsIm11bHRpcGx5IiwiUVJNYXRoIiwiZ2V4cCIsIm1vZGUiLCJ0eXBlIiwic2FtZUNvdW50IiwiZGFya0NvdW50IiwicmF0aW8iLCJhYnMiLCJFWFBfVEFCTEUiLCJMT0dfVEFCTEUiLCJnbG9nIiwibiIsIm51bSIsInNoaWZ0IiwiX251bSIsImUiLCJSU19CTE9DS19UQUJMRSIsInFyUlNCbG9jayIsImdldFJzQmxvY2tUYWJsZSIsInVuZGVmaW5lZCIsInJzQmxvY2siLCJsaXN0IiwiX2J1ZmZlciIsIl9sZW5ndGgiLCJidWZJbmRleCIsImJpdCIsIl9tb2RlIiwiX2RhdGEiLCJfcGFyc2VkRGF0YSIsImwiLCJieXRlQXJyYXkiLCJjb2RlIiwicHJvdG90eXBlIiwiY29uY2F0IiwiYXBwbHkiLCJ1bnNoaWZ0IiwiX2J5dGVzIiwiYnl0ZUFycmF5T3V0cHV0U3RyZWFtIiwid3JpdGVCeXRlIiwid3JpdGVTaG9ydCIsIndyaXRlQnl0ZXMiLCJvZmYiLCJsZW4iLCJ3cml0ZVN0cmluZyIsInRvQnl0ZUFycmF5IiwidG9TdHJpbmciLCJiYXNlNjRFbmNvZGVPdXRwdXRTdHJlYW0iLCJfYnVmbGVuIiwiX2Jhc2U2NCIsIndyaXRlRW5jb2RlZCIsImVuY29kZSIsImZsdXNoIiwicGFkbGVuIiwic3RyIiwiX3N0ciIsIl9wb3MiLCJtYXRjaCIsImRlY29kZSIsImdpZkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJfd2lkdGgiLCJfaGVpZ2h0Iiwic2V0UGl4ZWwiLCJwaXhlbCIsIm91dCIsImx6d01pbkNvZGVTaXplIiwicmFzdGVyIiwiZ2V0TFpXUmFzdGVyIiwiYml0T3V0cHV0U3RyZWFtIiwiX291dCIsIl9iaXRMZW5ndGgiLCJfYml0QnVmZmVyIiwiY2xlYXJDb2RlIiwiZW5kQ29kZSIsImJpdExlbmd0aCIsInRhYmxlIiwibHp3VGFibGUiLCJhZGQiLCJieXRlT3V0IiwiYml0T3V0IiwiZGF0YUluZGV4IiwiY29udGFpbnMiLCJpbmRleE9mIiwiX21hcCIsIl9zaXplIiwia2V5IiwiZ2V0UGl4ZWwiLCJhbHQiLCJnaWYiLCJiYXNlNjQiLCJpbWciLCJjcmVhdGVRckNvZGVJbWciLCJ0ZXh0Iiwib3B0aW9ucyIsInFyIiwiZ2VuIiwiY2VsbHNpemUiLCJwYXJzZUludCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFJQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFTQyxVQUFULEVBQXFCQyxpQkFBckIsRUFBd0M7O0FBRWpELE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBRUEsTUFBSUMsV0FBVyxHQUFHSixVQUFsQjtBQUNBLE1BQUlLLGtCQUFrQixHQUFHQyxtQkFBbUIsQ0FBQ0wsaUJBQUQsQ0FBNUM7QUFDQSxNQUFJTSxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxJQUFJQyxLQUFKLEVBQWhCOztBQUVBLE1BQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLElBQVQsRUFBZUMsV0FBZixFQUE0Qjs7QUFFdkNQLGdCQUFZLEdBQUdKLFdBQVcsR0FBRyxDQUFkLEdBQWtCLEVBQWpDO0FBQ0FHLFlBQVEsR0FBRyxVQUFTUyxXQUFULEVBQXNCO0FBQzdCLFVBQUlDLE9BQU8sR0FBRyxJQUFJTixLQUFKLENBQVVLLFdBQVYsQ0FBZDtBQUNBLFdBQUssSUFBSUUsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0YsV0FBeEIsRUFBcUNFLEdBQUcsSUFBSSxDQUE1QyxFQUErQztBQUMzQ0QsZUFBTyxDQUFDQyxHQUFELENBQVAsR0FBZSxJQUFJUCxLQUFKLENBQVVLLFdBQVYsQ0FBZjtBQUNBLGFBQUssSUFBSUcsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0gsV0FBeEIsRUFBcUNHLEdBQUcsSUFBSSxDQUE1QyxFQUErQztBQUMzQ0YsaUJBQU8sQ0FBQ0MsR0FBRCxDQUFQLENBQWFDLEdBQWIsSUFBb0IsSUFBcEI7QUFDSDtBQUNKO0FBQ0QsYUFBT0YsT0FBUDtBQUNILEtBVFUsQ0FTVFQsWUFUUyxDQUFYOztBQVdBWSw2QkFBeUIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF6QjtBQUNBQSw2QkFBeUIsQ0FBQ1osWUFBWSxHQUFHLENBQWhCLEVBQW1CLENBQW5CLENBQXpCO0FBQ0FZLDZCQUF5QixDQUFDLENBQUQsRUFBSVosWUFBWSxHQUFHLENBQW5CLENBQXpCO0FBQ0FhLDhCQUEwQjtBQUMxQkMsc0JBQWtCO0FBQ2xCQyxpQkFBYSxDQUFDVCxJQUFELEVBQU9DLFdBQVAsQ0FBYjs7QUFFQSxRQUFJWCxXQUFXLElBQUksQ0FBbkIsRUFBc0I7QUFDbEJvQixxQkFBZSxDQUFDVixJQUFELENBQWY7QUFDSDs7QUFFRCxRQUFJTCxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDcEJBLGdCQUFVLEdBQUdnQixVQUFVLENBQUNyQixXQUFELEVBQWNDLGtCQUFkLEVBQWtDSyxTQUFsQyxDQUF2QjtBQUNIOztBQUVEZ0IsV0FBTyxDQUFDakIsVUFBRCxFQUFhTSxXQUFiLENBQVA7QUFDSCxHQTlCRDs7QUFnQ0EsTUFBSUsseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFTRixHQUFULEVBQWNDLEdBQWQsRUFBbUI7O0FBRS9DLFNBQUssSUFBSVEsQ0FBQyxHQUFHLENBQUMsQ0FBZCxFQUFpQkEsQ0FBQyxJQUFJLENBQXRCLEVBQXlCQSxDQUFDLElBQUksQ0FBOUIsRUFBaUM7O0FBRTdCLFVBQUlULEdBQUcsR0FBR1MsQ0FBTixJQUFXLENBQUMsQ0FBWixJQUFpQm5CLFlBQVksSUFBSVUsR0FBRyxHQUFHUyxDQUEzQyxFQUE4Qzs7QUFFOUMsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFkLEVBQWlCQSxDQUFDLElBQUksQ0FBdEIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QixFQUFpQzs7QUFFN0IsWUFBSVQsR0FBRyxHQUFHUyxDQUFOLElBQVcsQ0FBQyxDQUFaLElBQWlCcEIsWUFBWSxJQUFJVyxHQUFHLEdBQUdTLENBQTNDLEVBQThDOztBQUU5QyxZQUFNLEtBQUtELENBQUwsSUFBVUEsQ0FBQyxJQUFJLENBQWYsS0FBcUJDLENBQUMsSUFBSSxDQUFMLElBQVVBLENBQUMsSUFBSSxDQUFwQyxDQUFEO0FBQ0ksYUFBS0EsQ0FBTCxJQUFVQSxDQUFDLElBQUksQ0FBZixLQUFxQkQsQ0FBQyxJQUFJLENBQUwsSUFBVUEsQ0FBQyxJQUFJLENBQXBDLENBREo7QUFFSSxhQUFLQSxDQUFMLElBQVVBLENBQUMsSUFBSSxDQUFmLElBQW9CLEtBQUtDLENBQXpCLElBQThCQSxDQUFDLElBQUksQ0FGNUMsRUFFaUQ7QUFDN0NyQixrQkFBUSxDQUFDVyxHQUFHLEdBQUdTLENBQVAsQ0FBUixDQUFrQlIsR0FBRyxHQUFHUyxDQUF4QixJQUE2QixJQUE3QjtBQUNILFNBSkQsTUFJTztBQUNIckIsa0JBQVEsQ0FBQ1csR0FBRyxHQUFHUyxDQUFQLENBQVIsQ0FBa0JSLEdBQUcsR0FBR1MsQ0FBeEIsSUFBNkIsS0FBN0I7QUFDSDtBQUNKO0FBQ0o7QUFDSixHQW5CRDs7QUFxQkEsTUFBSUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFXOztBQUVoQyxRQUFJQyxZQUFZLEdBQUcsQ0FBbkI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsSUFBSSxDQUE1QixFQUErQjs7QUFFM0JuQixjQUFRLENBQUMsSUFBRCxFQUFPbUIsQ0FBUCxDQUFSOztBQUVBLFVBQUlDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CdkIsS0FBcEIsQ0FBaEI7O0FBRUEsVUFBSW9CLENBQUMsSUFBSSxDQUFMLElBQVVGLFlBQVksR0FBR0csU0FBN0IsRUFBd0M7QUFDcENILG9CQUFZLEdBQUdHLFNBQWY7QUFDQUYsZUFBTyxHQUFHQyxDQUFWO0FBQ0g7QUFDSjs7QUFFRCxXQUFPRCxPQUFQO0FBQ0gsR0FsQkQ7O0FBb0JBLE1BQUlULGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBVzs7QUFFaEMsU0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbkIsWUFBWSxHQUFHLENBQW5DLEVBQXNDbUIsQ0FBQyxJQUFJLENBQTNDLEVBQThDO0FBQzFDLFVBQUlwQixRQUFRLENBQUNvQixDQUFELENBQVIsQ0FBWSxDQUFaLEtBQWtCLElBQXRCLEVBQTRCO0FBQ3hCO0FBQ0g7QUFDRHBCLGNBQVEsQ0FBQ29CLENBQUQsQ0FBUixDQUFZLENBQVosSUFBa0JBLENBQUMsR0FBRyxDQUFKLElBQVMsQ0FBM0I7QUFDSDs7QUFFRCxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwQixZQUFZLEdBQUcsQ0FBbkMsRUFBc0NvQixDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDMUMsVUFBSXJCLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWXFCLENBQVosS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEI7QUFDSDtBQUNEckIsY0FBUSxDQUFDLENBQUQsQ0FBUixDQUFZcUIsQ0FBWixJQUFrQkEsQ0FBQyxHQUFHLENBQUosSUFBUyxDQUEzQjtBQUNIO0FBQ0osR0FmRDs7QUFpQkEsTUFBSVAsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixHQUFXOztBQUV4QyxRQUFJZSxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csa0JBQVAsQ0FBMEJqQyxXQUExQixDQUFWOztBQUVBLFNBQUssSUFBSTRCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdJLEdBQUcsQ0FBQ0UsTUFBeEIsRUFBZ0NOLENBQUMsSUFBSSxDQUFyQyxFQUF3Qzs7QUFFcEMsV0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxHQUFHLENBQUNFLE1BQXhCLEVBQWdDQyxDQUFDLElBQUksQ0FBckMsRUFBd0M7O0FBRXBDLFlBQUlyQixHQUFHLEdBQUdrQixHQUFHLENBQUNKLENBQUQsQ0FBYjtBQUNBLFlBQUliLEdBQUcsR0FBR2lCLEdBQUcsQ0FBQ0csQ0FBRCxDQUFiOztBQUVBLFlBQUloQyxRQUFRLENBQUNXLEdBQUQsQ0FBUixDQUFjQyxHQUFkLEtBQXNCLElBQTFCLEVBQWdDO0FBQzVCO0FBQ0g7O0FBRUQsYUFBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBQyxDQUFkLEVBQWlCQSxDQUFDLElBQUksQ0FBdEIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QixFQUFpQzs7QUFFN0IsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFkLEVBQWlCQSxDQUFDLElBQUksQ0FBdEIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QixFQUFpQzs7QUFFN0IsZ0JBQUlELENBQUMsSUFBSSxDQUFDLENBQU4sSUFBV0EsQ0FBQyxJQUFJLENBQWhCLElBQXFCQyxDQUFDLElBQUksQ0FBQyxDQUEzQixJQUFnQ0EsQ0FBQyxJQUFJLENBQXJDO0FBQ0lELGFBQUMsSUFBSSxDQUFMLElBQVVDLENBQUMsSUFBSSxDQUR2QixFQUM0QjtBQUN4QnJCLHNCQUFRLENBQUNXLEdBQUcsR0FBR1MsQ0FBUCxDQUFSLENBQWtCUixHQUFHLEdBQUdTLENBQXhCLElBQTZCLElBQTdCO0FBQ0gsYUFIRCxNQUdPO0FBQ0hyQixzQkFBUSxDQUFDVyxHQUFHLEdBQUdTLENBQVAsQ0FBUixDQUFrQlIsR0FBRyxHQUFHUyxDQUF4QixJQUE2QixLQUE3QjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7QUFDSixHQTdCRDs7QUErQkEsTUFBSUosZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFTVixJQUFULEVBQWU7O0FBRWpDLFFBQUkwQixJQUFJLEdBQUdOLE1BQU0sQ0FBQ08sZ0JBQVAsQ0FBd0JyQyxXQUF4QixDQUFYOztBQUVBLFNBQUssSUFBSTRCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztBQUM1QixVQUFJVSxHQUFHLEdBQUksQ0FBQzVCLElBQUQsSUFBUyxDQUFHMEIsSUFBSSxJQUFJUixDQUFULEdBQWMsQ0FBaEIsS0FBc0IsQ0FBMUM7QUFDQXpCLGNBQVEsQ0FBQ29DLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixDQUFDLEdBQUcsQ0FBZixDQUFELENBQVIsQ0FBNEJBLENBQUMsR0FBRyxDQUFKLEdBQVF4QixZQUFSLEdBQXVCLENBQXZCLEdBQTJCLENBQXZELElBQTREa0MsR0FBNUQ7QUFDSDs7QUFFRCxTQUFLLElBQUlWLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztBQUM1QixVQUFJVSxHQUFHLEdBQUksQ0FBQzVCLElBQUQsSUFBUyxDQUFHMEIsSUFBSSxJQUFJUixDQUFULEdBQWMsQ0FBaEIsS0FBc0IsQ0FBMUM7QUFDQXpCLGNBQVEsQ0FBQ3lCLENBQUMsR0FBRyxDQUFKLEdBQVF4QixZQUFSLEdBQXVCLENBQXZCLEdBQTJCLENBQTVCLENBQVIsQ0FBdUNtQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osQ0FBQyxHQUFHLENBQWYsQ0FBdkMsSUFBNERVLEdBQTVEO0FBQ0g7QUFDSixHQWJEOztBQWVBLE1BQUluQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVNULElBQVQsRUFBZUMsV0FBZixFQUE0Qjs7QUFFNUMsUUFBSThCLElBQUksR0FBSXhDLGtCQUFrQixJQUFJLENBQXZCLEdBQTRCVSxXQUF2QztBQUNBLFFBQUl5QixJQUFJLEdBQUdOLE1BQU0sQ0FBQ1ksY0FBUCxDQUFzQkQsSUFBdEIsQ0FBWDs7QUFFQTtBQUNBLFNBQUssSUFBSWIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxJQUFJLENBQTdCLEVBQWdDOztBQUU1QixVQUFJVSxHQUFHLEdBQUksQ0FBQzVCLElBQUQsSUFBUyxDQUFHMEIsSUFBSSxJQUFJUixDQUFULEdBQWMsQ0FBaEIsS0FBc0IsQ0FBMUM7O0FBRUEsVUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQekIsZ0JBQVEsQ0FBQ3lCLENBQUQsQ0FBUixDQUFZLENBQVosSUFBaUJVLEdBQWpCO0FBQ0gsT0FGRCxNQUVPLElBQUlWLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDZHpCLGdCQUFRLENBQUN5QixDQUFDLEdBQUcsQ0FBTCxDQUFSLENBQWdCLENBQWhCLElBQXFCVSxHQUFyQjtBQUNILE9BRk0sTUFFQTtBQUNIbkMsZ0JBQVEsQ0FBQ0MsWUFBWSxHQUFHLEVBQWYsR0FBb0J3QixDQUFyQixDQUFSLENBQWdDLENBQWhDLElBQXFDVSxHQUFyQztBQUNIO0FBQ0o7O0FBRUQ7QUFDQSxTQUFLLElBQUlWLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQzs7QUFFNUIsVUFBSVUsR0FBRyxHQUFJLENBQUM1QixJQUFELElBQVMsQ0FBRzBCLElBQUksSUFBSVIsQ0FBVCxHQUFjLENBQWhCLEtBQXNCLENBQTFDOztBQUVBLFVBQUlBLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUHpCLGdCQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlDLFlBQVksR0FBR3dCLENBQWYsR0FBbUIsQ0FBL0IsSUFBb0NVLEdBQXBDO0FBQ0gsT0FGRCxNQUVPLElBQUlWLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDZHpCLGdCQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksS0FBS3lCLENBQUwsR0FBUyxDQUFULEdBQWEsQ0FBekIsSUFBOEJVLEdBQTlCO0FBQ0gsT0FGTSxNQUVBO0FBQ0huQyxnQkFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLEtBQUt5QixDQUFMLEdBQVMsQ0FBckIsSUFBMEJVLEdBQTFCO0FBQ0g7QUFDSjs7QUFFRDtBQUNBbkMsWUFBUSxDQUFDQyxZQUFZLEdBQUcsQ0FBaEIsQ0FBUixDQUEyQixDQUEzQixJQUFpQyxDQUFDTSxJQUFsQztBQUNILEdBbkNEOztBQXFDQSxNQUFJWSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFTbUIsSUFBVCxFQUFlOUIsV0FBZixFQUE0Qjs7QUFFdEMsUUFBSWdDLEdBQUcsR0FBRyxDQUFDLENBQVg7QUFDQSxRQUFJN0IsR0FBRyxHQUFHVixZQUFZLEdBQUcsQ0FBekI7QUFDQSxRQUFJd0MsUUFBUSxHQUFHLENBQWY7QUFDQSxRQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxRQUFJQyxRQUFRLEdBQUdoQixNQUFNLENBQUNpQixlQUFQLENBQXVCcEMsV0FBdkIsQ0FBZjs7QUFFQSxTQUFLLElBQUlJLEdBQUcsR0FBR1gsWUFBWSxHQUFHLENBQTlCLEVBQWlDVyxHQUFHLEdBQUcsQ0FBdkMsRUFBMENBLEdBQUcsSUFBSSxDQUFqRCxFQUFvRDs7QUFFaEQsVUFBSUEsR0FBRyxJQUFJLENBQVgsRUFBY0EsR0FBRyxJQUFJLENBQVA7O0FBRWQsYUFBTyxJQUFQLEVBQWE7O0FBRVQsYUFBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLElBQUksQ0FBNUIsRUFBK0I7O0FBRTNCLGNBQUlyQixRQUFRLENBQUNXLEdBQUQsQ0FBUixDQUFjQyxHQUFHLEdBQUdTLENBQXBCLEtBQTBCLElBQTlCLEVBQW9DOztBQUVoQyxnQkFBSXdCLElBQUksR0FBRyxLQUFYOztBQUVBLGdCQUFJSCxTQUFTLEdBQUdKLElBQUksQ0FBQ1AsTUFBckIsRUFBNkI7QUFDekJjLGtCQUFJLEdBQUssQ0FBR1AsSUFBSSxDQUFDSSxTQUFELENBQUosS0FBb0JELFFBQXJCLEdBQWlDLENBQW5DLEtBQXlDLENBQWxEO0FBQ0g7O0FBRUQsZ0JBQUlLLElBQUksR0FBR0gsUUFBUSxDQUFDaEMsR0FBRCxFQUFNQyxHQUFHLEdBQUdTLENBQVosQ0FBbkI7O0FBRUEsZ0JBQUl5QixJQUFKLEVBQVU7QUFDTkQsa0JBQUksR0FBRyxDQUFDQSxJQUFSO0FBQ0g7O0FBRUQ3QyxvQkFBUSxDQUFDVyxHQUFELENBQVIsQ0FBY0MsR0FBRyxHQUFHUyxDQUFwQixJQUF5QndCLElBQXpCO0FBQ0FKLG9CQUFRLElBQUksQ0FBWjs7QUFFQSxnQkFBSUEsUUFBUSxJQUFJLENBQUMsQ0FBakIsRUFBb0I7QUFDaEJDLHVCQUFTLElBQUksQ0FBYjtBQUNBRCxzQkFBUSxHQUFHLENBQVg7QUFDSDtBQUNKO0FBQ0o7O0FBRUQ5QixXQUFHLElBQUk2QixHQUFQOztBQUVBLFlBQUk3QixHQUFHLEdBQUcsQ0FBTixJQUFXVixZQUFZLElBQUlVLEdBQS9CLEVBQW9DO0FBQ2hDQSxhQUFHLElBQUk2QixHQUFQO0FBQ0FBLGFBQUcsR0FBRyxDQUFDQSxHQUFQO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDSixHQWpERDs7QUFtREEsTUFBSU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBU0MsTUFBVCxFQUFpQkMsUUFBakIsRUFBMkI7O0FBRXpDLFFBQUlDLE1BQU0sR0FBRyxDQUFiOztBQUVBLFFBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxDQUFqQjs7QUFFQSxRQUFJQyxNQUFNLEdBQUcsSUFBSWpELEtBQUosQ0FBVTZDLFFBQVEsQ0FBQ2xCLE1BQW5CLENBQWI7QUFDQSxRQUFJdUIsTUFBTSxHQUFHLElBQUlsRCxLQUFKLENBQVU2QyxRQUFRLENBQUNsQixNQUFuQixDQUFiOztBQUVBLFNBQUssSUFBSVgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZCLFFBQVEsQ0FBQ2xCLE1BQTdCLEVBQXFDWCxDQUFDLElBQUksQ0FBMUMsRUFBNkM7O0FBRXpDLFVBQUltQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQzdCLENBQUQsQ0FBUixDQUFZb0MsU0FBMUI7QUFDQSxVQUFJQyxPQUFPLEdBQUdSLFFBQVEsQ0FBQzdCLENBQUQsQ0FBUixDQUFZc0MsVUFBWixHQUF5QkgsT0FBdkM7O0FBRUFKLGdCQUFVLEdBQUdmLElBQUksQ0FBQ3VCLEdBQUwsQ0FBU1IsVUFBVCxFQUFxQkksT0FBckIsQ0FBYjtBQUNBSCxnQkFBVSxHQUFHaEIsSUFBSSxDQUFDdUIsR0FBTCxDQUFTUCxVQUFULEVBQXFCSyxPQUFyQixDQUFiOztBQUVBSixZQUFNLENBQUNqQyxDQUFELENBQU4sR0FBWSxJQUFJaEIsS0FBSixDQUFVbUQsT0FBVixDQUFaOztBQUVBLFdBQUssSUFBSTlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0QixNQUFNLENBQUNqQyxDQUFELENBQU4sQ0FBVVcsTUFBOUIsRUFBc0NOLENBQUMsSUFBSSxDQUEzQyxFQUE4QztBQUMxQzRCLGNBQU0sQ0FBQ2pDLENBQUQsQ0FBTixDQUFVSyxDQUFWLElBQWUsT0FBT3VCLE1BQU0sQ0FBQ1ksU0FBUCxHQUFtQm5DLENBQUMsR0FBR3lCLE1BQXZCLENBQXRCO0FBQ0g7QUFDREEsWUFBTSxJQUFJSyxPQUFWOztBQUVBLFVBQUlNLE1BQU0sR0FBR2xDLE1BQU0sQ0FBQ21DLHlCQUFQLENBQWlDTCxPQUFqQyxDQUFiO0FBQ0EsVUFBSU0sT0FBTyxHQUFHQyxZQUFZLENBQUNYLE1BQU0sQ0FBQ2pDLENBQUQsQ0FBUCxFQUFZeUMsTUFBTSxDQUFDSSxTQUFQLEtBQXFCLENBQWpDLENBQTFCOztBQUVBLFVBQUlDLE9BQU8sR0FBR0gsT0FBTyxDQUFDNUIsR0FBUixDQUFZMEIsTUFBWixDQUFkO0FBQ0FQLFlBQU0sQ0FBQ2xDLENBQUQsQ0FBTixHQUFZLElBQUloQixLQUFKLENBQVV5RCxNQUFNLENBQUNJLFNBQVAsS0FBcUIsQ0FBL0IsQ0FBWjtBQUNBLFdBQUssSUFBSXhDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2QixNQUFNLENBQUNsQyxDQUFELENBQU4sQ0FBVVcsTUFBOUIsRUFBc0NOLENBQUMsSUFBSSxDQUEzQyxFQUE4QztBQUMxQyxZQUFJMEMsUUFBUSxHQUFHMUMsQ0FBQyxHQUFHeUMsT0FBTyxDQUFDRCxTQUFSLEVBQUosR0FBMEJYLE1BQU0sQ0FBQ2xDLENBQUQsQ0FBTixDQUFVVyxNQUFuRDtBQUNBdUIsY0FBTSxDQUFDbEMsQ0FBRCxDQUFOLENBQVVLLENBQVYsSUFBZ0IwQyxRQUFRLElBQUksQ0FBYixHQUFpQkQsT0FBTyxDQUFDRSxLQUFSLENBQWNELFFBQWQsQ0FBakIsR0FBMkMsQ0FBMUQ7QUFDSDtBQUNKOztBQUVELFFBQUlFLGNBQWMsR0FBRyxDQUFyQjtBQUNBLFNBQUssSUFBSTVDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd3QixRQUFRLENBQUNsQixNQUE3QixFQUFxQ04sQ0FBQyxJQUFJLENBQTFDLEVBQTZDO0FBQ3pDNEMsb0JBQWMsSUFBSXBCLFFBQVEsQ0FBQ3hCLENBQUQsQ0FBUixDQUFZaUMsVUFBOUI7QUFDSDs7QUFFRCxRQUFJcEIsSUFBSSxHQUFHLElBQUlsQyxLQUFKLENBQVVpRSxjQUFWLENBQVg7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxTQUFLLElBQUk3QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEIsVUFBcEIsRUFBZ0MxQixDQUFDLElBQUksQ0FBckMsRUFBd0M7QUFDcEMsV0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNkIsUUFBUSxDQUFDbEIsTUFBN0IsRUFBcUNYLENBQUMsSUFBSSxDQUExQyxFQUE2QztBQUN6QyxZQUFJSyxDQUFDLEdBQUc0QixNQUFNLENBQUNqQyxDQUFELENBQU4sQ0FBVVcsTUFBbEIsRUFBMEI7QUFDdEJPLGNBQUksQ0FBQ2dDLEtBQUQsQ0FBSixHQUFjakIsTUFBTSxDQUFDakMsQ0FBRCxDQUFOLENBQVVLLENBQVYsQ0FBZDtBQUNBNkMsZUFBSyxJQUFJLENBQVQ7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBSyxJQUFJN0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJCLFVBQXBCLEVBQWdDM0IsQ0FBQyxJQUFJLENBQXJDLEVBQXdDO0FBQ3BDLFdBQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZCLFFBQVEsQ0FBQ2xCLE1BQTdCLEVBQXFDWCxDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDekMsWUFBSUssQ0FBQyxHQUFHNkIsTUFBTSxDQUFDbEMsQ0FBRCxDQUFOLENBQVVXLE1BQWxCLEVBQTBCO0FBQ3RCTyxjQUFJLENBQUNnQyxLQUFELENBQUosR0FBY2hCLE1BQU0sQ0FBQ2xDLENBQUQsQ0FBTixDQUFVSyxDQUFWLENBQWQ7QUFDQTZDLGVBQUssSUFBSSxDQUFUO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQU9oQyxJQUFQO0FBQ0gsR0EvREQ7O0FBaUVBLE1BQUlwQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFTekIsVUFBVCxFQUFxQkMsaUJBQXJCLEVBQXdDNkUsUUFBeEMsRUFBa0Q7O0FBRS9ELFFBQUl0QixRQUFRLEdBQUd1QixTQUFTLENBQUNDLFdBQVYsQ0FBc0JoRixVQUF0QixFQUFrQ0MsaUJBQWxDLENBQWY7O0FBRUEsUUFBSXNELE1BQU0sR0FBRzBCLFdBQVcsRUFBeEI7O0FBRUEsU0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhDLFFBQVEsQ0FBQ3hDLE1BQTdCLEVBQXFDTixDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDekMsVUFBSWEsSUFBSSxHQUFHaUMsUUFBUSxDQUFDOUMsQ0FBRCxDQUFuQjtBQUNBdUIsWUFBTSxDQUFDMkIsR0FBUCxDQUFXckMsSUFBSSxDQUFDc0MsT0FBTCxFQUFYLEVBQTJCLENBQTNCO0FBQ0E1QixZQUFNLENBQUMyQixHQUFQLENBQVdyQyxJQUFJLENBQUMyQixTQUFMLEVBQVgsRUFBNkJ0QyxNQUFNLENBQUNrRCxlQUFQLENBQXVCdkMsSUFBSSxDQUFDc0MsT0FBTCxFQUF2QixFQUF1Q25GLFVBQXZDLENBQTdCO0FBQ0E2QyxVQUFJLENBQUN3QyxLQUFMLENBQVc5QixNQUFYO0FBQ0g7O0FBRUQ7QUFDQSxRQUFJK0IsY0FBYyxHQUFHLENBQXJCO0FBQ0EsU0FBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dCLFFBQVEsQ0FBQ2xCLE1BQTdCLEVBQXFDTixDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDekNzRCxvQkFBYyxJQUFJOUIsUUFBUSxDQUFDeEIsQ0FBRCxDQUFSLENBQVkrQixTQUE5QjtBQUNIOztBQUVELFFBQUlSLE1BQU0sQ0FBQzZCLGVBQVAsS0FBMkJFLGNBQWMsR0FBRyxDQUFoRCxFQUFtRDtBQUMvQyxZQUFNLElBQUlDLEtBQUosQ0FBVTtBQUNFaEMsWUFBTSxDQUFDNkIsZUFBUCxFQURGO0FBRUUsU0FGRjtBQUdFRSxvQkFBYyxHQUFHLENBSG5CO0FBSUUsU0FKWixDQUFOO0FBS0g7O0FBRUQ7QUFDQSxRQUFJL0IsTUFBTSxDQUFDNkIsZUFBUCxLQUEyQixDQUEzQixJQUFnQ0UsY0FBYyxHQUFHLENBQXJELEVBQXdEO0FBQ3BEL0IsWUFBTSxDQUFDMkIsR0FBUCxDQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0g7O0FBRUQ7QUFDQSxXQUFPM0IsTUFBTSxDQUFDNkIsZUFBUCxLQUEyQixDQUEzQixJQUFnQyxDQUF2QyxFQUEwQztBQUN0QzdCLFlBQU0sQ0FBQ2lDLE1BQVAsQ0FBYyxLQUFkO0FBQ0g7O0FBRUQ7QUFDQSxXQUFPLElBQVAsRUFBYTs7QUFFVCxVQUFJakMsTUFBTSxDQUFDNkIsZUFBUCxNQUE0QkUsY0FBYyxHQUFHLENBQWpELEVBQW9EO0FBQ2hEO0FBQ0g7QUFDRC9CLFlBQU0sQ0FBQzJCLEdBQVAsQ0FBV2hGLElBQVgsRUFBaUIsQ0FBakI7O0FBRUEsVUFBSXFELE1BQU0sQ0FBQzZCLGVBQVAsTUFBNEJFLGNBQWMsR0FBRyxDQUFqRCxFQUFvRDtBQUNoRDtBQUNIO0FBQ0QvQixZQUFNLENBQUMyQixHQUFQLENBQVcvRSxJQUFYLEVBQWlCLENBQWpCO0FBQ0g7O0FBRUQsV0FBT21ELFdBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULENBQWxCO0FBQ0gsR0FwREQ7O0FBc0RBNUMsT0FBSyxDQUFDNkUsT0FBTixHQUFnQixVQUFTNUMsSUFBVCxFQUFlO0FBQzNCLFFBQUk2QyxPQUFPLEdBQUdDLFVBQVUsQ0FBQzlDLElBQUQsQ0FBeEI7QUFDQW5DLGFBQVMsQ0FBQ2tGLElBQVYsQ0FBZUYsT0FBZjtBQUNBakYsY0FBVSxHQUFHLElBQWI7QUFDSCxHQUpEOztBQU1BRyxPQUFLLENBQUNpRixNQUFOLEdBQWUsVUFBUzNFLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUM5QixRQUFJRCxHQUFHLEdBQUcsQ0FBTixJQUFXVixZQUFZLElBQUlVLEdBQTNCLElBQWtDQyxHQUFHLEdBQUcsQ0FBeEMsSUFBNkNYLFlBQVksSUFBSVcsR0FBakUsRUFBc0U7QUFDbEUsWUFBTSxJQUFJb0UsS0FBSixDQUFVckUsR0FBRyxHQUFHLEdBQU4sR0FBWUMsR0FBdEIsQ0FBTjtBQUNIO0FBQ0QsV0FBT1osUUFBUSxDQUFDVyxHQUFELENBQVIsQ0FBY0MsR0FBZCxDQUFQO0FBQ0gsR0FMRDs7QUFPQVAsT0FBSyxDQUFDa0YsY0FBTixHQUF1QixZQUFXO0FBQzlCLFdBQU90RixZQUFQO0FBQ0gsR0FGRDs7QUFJQUksT0FBSyxDQUFDbUYsSUFBTixHQUFhLFlBQVc7QUFDcEJsRixZQUFRLENBQUMsS0FBRCxFQUFRZ0Isa0JBQWtCLEVBQTFCLENBQVI7QUFDSCxHQUZEOztBQUlBakIsT0FBSyxDQUFDb0YsY0FBTixHQUF1QixVQUFTQyxRQUFULEVBQW1CQyxNQUFuQixFQUEyQjs7QUFFOUNELFlBQVEsR0FBR0EsUUFBUSxJQUFJLENBQXZCO0FBQ0FDLFVBQU0sR0FBSSxPQUFPQSxNQUFQLElBQWlCLFdBQWxCLEdBQWdDRCxRQUFRLEdBQUcsQ0FBM0MsR0FBK0NDLE1BQXhEOztBQUVBLFFBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBQSxVQUFNLElBQUksZ0JBQVY7QUFDQUEsVUFBTSxJQUFJLHlDQUFWO0FBQ0FBLFVBQU0sSUFBSSw2QkFBVjtBQUNBQSxVQUFNLElBQUksNEJBQTRCRCxNQUE1QixHQUFxQyxLQUEvQztBQUNBQyxVQUFNLElBQUksSUFBVjtBQUNBQSxVQUFNLElBQUksU0FBVjs7QUFFQSxTQUFLLElBQUl4RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZixLQUFLLENBQUNrRixjQUFOLEVBQXBCLEVBQTRDbkUsQ0FBQyxJQUFJLENBQWpELEVBQW9EOztBQUVoRHdFLFlBQU0sSUFBSSxNQUFWOztBQUVBLFdBQUssSUFBSXZFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdoQixLQUFLLENBQUNrRixjQUFOLEVBQXBCLEVBQTRDbEUsQ0FBQyxJQUFJLENBQWpELEVBQW9EO0FBQ2hEdUUsY0FBTSxJQUFJLGFBQVY7QUFDQUEsY0FBTSxJQUFJLHlDQUFWO0FBQ0FBLGNBQU0sSUFBSSw2QkFBVjtBQUNBQSxjQUFNLElBQUksNkJBQVY7QUFDQUEsY0FBTSxJQUFJLGFBQWFGLFFBQWIsR0FBd0IsS0FBbEM7QUFDQUUsY0FBTSxJQUFJLGNBQWNGLFFBQWQsR0FBeUIsS0FBbkM7QUFDQUUsY0FBTSxJQUFJLHFCQUFWO0FBQ0FBLGNBQU0sSUFBSXZGLEtBQUssQ0FBQ2lGLE1BQU4sQ0FBYWxFLENBQWIsRUFBZ0JDLENBQWhCLElBQW9CLFNBQXBCLEdBQWdDLFNBQTFDO0FBQ0F1RSxjQUFNLElBQUksR0FBVjtBQUNBQSxjQUFNLElBQUksS0FBVjtBQUNIOztBQUVEQSxZQUFNLElBQUksT0FBVjtBQUNIOztBQUVEQSxVQUFNLElBQUksVUFBVjtBQUNBQSxVQUFNLElBQUksVUFBVjs7QUFFQSxXQUFPQSxNQUFQO0FBQ0gsR0F0Q0Q7O0FBd0NBdkYsT0FBSyxDQUFDd0YsWUFBTixHQUFxQixVQUFTSCxRQUFULEVBQW1CQyxNQUFuQixFQUEyQkcsSUFBM0IsRUFBaUM7O0FBRWxESixZQUFRLEdBQUdBLFFBQVEsSUFBSSxDQUF2QjtBQUNBQyxVQUFNLEdBQUksT0FBT0EsTUFBUCxJQUFpQixXQUFsQixHQUFnQ0QsUUFBUSxHQUFHLENBQTNDLEdBQStDQyxNQUF4RDs7QUFFQSxRQUFJSSxHQUFHLEdBQUdKLE1BQVY7QUFDQSxRQUFJaEMsR0FBRyxHQUFHdEQsS0FBSyxDQUFDa0YsY0FBTixLQUF5QkcsUUFBekIsR0FBb0NDLE1BQTlDOztBQUVBLFdBQU9FLFlBQVksQ0FBQ0MsSUFBRCxFQUFPQSxJQUFQLEVBQWEsVUFBU0UsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDM0MsVUFBSUYsR0FBRyxJQUFJQyxDQUFQLElBQVlBLENBQUMsR0FBR3JDLEdBQWhCLElBQXVCb0MsR0FBRyxJQUFJRSxDQUE5QixJQUFtQ0EsQ0FBQyxHQUFHdEMsR0FBM0MsRUFBZ0Q7QUFDNUMsWUFBSXRDLENBQUMsR0FBR2UsSUFBSSxDQUFDQyxLQUFMLENBQVksQ0FBQzJELENBQUMsR0FBR0QsR0FBTCxJQUFZTCxRQUF4QixDQUFSO0FBQ0EsWUFBSXRFLENBQUMsR0FBR2dCLElBQUksQ0FBQ0MsS0FBTCxDQUFZLENBQUM0RCxDQUFDLEdBQUdGLEdBQUwsSUFBWUwsUUFBeEIsQ0FBUjtBQUNBLGVBQU9yRixLQUFLLENBQUNpRixNQUFOLENBQWFsRSxDQUFiLEVBQWdCQyxDQUFoQixJQUFvQixDQUFwQixHQUF3QixDQUEvQjtBQUNILE9BSkQsTUFJTztBQUNILGVBQU8sQ0FBUDtBQUNIO0FBQ0osS0FSa0IsQ0FBbkI7QUFTSCxHQWpCRDs7QUFtQkEsU0FBT2hCLEtBQVA7QUFDSCxDQXRiRDs7QUF3YkE7QUFDQTtBQUNBOztBQUVBYixNQUFNLENBQUMwRyxhQUFQLEdBQXVCLFVBQVNDLENBQVQsRUFBWTtBQUMvQixNQUFJQyxLQUFLLEdBQUcsSUFBSWhHLEtBQUosRUFBWjtBQUNBLE9BQUssSUFBSXFCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwRSxDQUFDLENBQUNwRSxNQUF0QixFQUE4Qk4sQ0FBQyxJQUFJLENBQW5DLEVBQXNDO0FBQ2xDLFFBQUlKLENBQUMsR0FBRzhFLENBQUMsQ0FBQ0UsVUFBRixDQUFhNUUsQ0FBYixDQUFSO0FBQ0EyRSxTQUFLLENBQUNmLElBQU4sQ0FBV2hFLENBQUMsR0FBRyxJQUFmO0FBQ0g7QUFDRCxTQUFPK0UsS0FBUDtBQUNILENBUEQ7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBNUcsTUFBTSxDQUFDOEcsbUJBQVAsR0FBNkIsVUFBU0MsV0FBVCxFQUFzQkMsUUFBdEIsRUFBZ0M7O0FBRXpEOztBQUVBLE1BQUlDLFVBQVUsR0FBRyxZQUFXOztBQUV4QixRQUFJQyxHQUFHLEdBQUdDLHVCQUF1QixDQUFDSixXQUFELENBQWpDO0FBQ0EsUUFBSUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBVztBQUNsQixVQUFJQyxDQUFDLEdBQUdILEdBQUcsQ0FBQ0UsSUFBSixFQUFSO0FBQ0EsVUFBSUMsQ0FBQyxJQUFJLENBQUMsQ0FBVixFQUFhLE1BQU0sSUFBSTdCLEtBQUosRUFBTjtBQUNiLGFBQU82QixDQUFQO0FBQ0gsS0FKRDs7QUFNQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFFBQUlMLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFdBQU8sSUFBUCxFQUFhO0FBQ1QsVUFBSU0sRUFBRSxHQUFHTCxHQUFHLENBQUNFLElBQUosRUFBVDtBQUNBLFVBQUlHLEVBQUUsSUFBSSxDQUFDLENBQVgsRUFBYztBQUNkLFVBQUlDLEVBQUUsR0FBR0osSUFBSSxFQUFiO0FBQ0EsVUFBSUssRUFBRSxHQUFHTCxJQUFJLEVBQWI7QUFDQSxVQUFJTSxFQUFFLEdBQUdOLElBQUksRUFBYjtBQUNBLFVBQUlPLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQXNCTixFQUFFLElBQUksQ0FBUCxHQUFZQyxFQUFqQyxDQUFSO0FBQ0EsVUFBSU0sQ0FBQyxHQUFJTCxFQUFFLElBQUksQ0FBUCxHQUFZQyxFQUFwQjtBQUNBVCxnQkFBVSxDQUFDVSxDQUFELENBQVYsR0FBZ0JHLENBQWhCO0FBQ0FSLFdBQUssSUFBSSxDQUFUO0FBQ0g7QUFDRCxRQUFJQSxLQUFLLElBQUlOLFFBQWIsRUFBdUI7QUFDbkIsWUFBTSxJQUFJeEIsS0FBSixDQUFVOEIsS0FBSyxHQUFHLE1BQVIsR0FBaUJOLFFBQTNCLENBQU47QUFDSDs7QUFFRCxXQUFPQyxVQUFQO0FBQ0gsR0EzQmdCLEVBQWpCOztBQTZCQSxNQUFJYyxXQUFXLEdBQUcsSUFBSWxCLFVBQUosQ0FBZSxDQUFmLENBQWxCOztBQUVBLFNBQU8sVUFBU0YsQ0FBVCxFQUFZO0FBQ2YsUUFBSUMsS0FBSyxHQUFHLElBQUloRyxLQUFKLEVBQVo7QUFDQSxTQUFLLElBQUlxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEUsQ0FBQyxDQUFDcEUsTUFBdEIsRUFBOEJOLENBQUMsSUFBSSxDQUFuQyxFQUFzQztBQUNsQyxVQUFJSixDQUFDLEdBQUc4RSxDQUFDLENBQUNFLFVBQUYsQ0FBYTVFLENBQWIsQ0FBUjtBQUNBLFVBQUlKLENBQUMsR0FBRyxHQUFSLEVBQWE7QUFDVCtFLGFBQUssQ0FBQ2YsSUFBTixDQUFXaEUsQ0FBWDtBQUNILE9BRkQsTUFFTztBQUNILFlBQUl3RixDQUFDLEdBQUdKLFVBQVUsQ0FBQ04sQ0FBQyxDQUFDcUIsTUFBRixDQUFTL0YsQ0FBVCxDQUFELENBQWxCO0FBQ0EsWUFBSSxPQUFPb0YsQ0FBUCxJQUFZLFFBQWhCLEVBQTBCO0FBQ3RCLGNBQUssQ0FBQ0EsQ0FBQyxHQUFHLElBQUwsS0FBY0EsQ0FBbkIsRUFBc0I7QUFDbEI7QUFDQVQsaUJBQUssQ0FBQ2YsSUFBTixDQUFXd0IsQ0FBWDtBQUNILFdBSEQsTUFHTztBQUNIO0FBQ0FULGlCQUFLLENBQUNmLElBQU4sQ0FBV3dCLENBQUMsS0FBSyxDQUFqQjtBQUNBVCxpQkFBSyxDQUFDZixJQUFOLENBQVd3QixDQUFDLEdBQUcsSUFBZjtBQUNIO0FBQ0osU0FURCxNQVNPO0FBQ0hULGVBQUssQ0FBQ2YsSUFBTixDQUFXa0MsV0FBWDtBQUNIO0FBQ0o7QUFDSjtBQUNELFdBQU9uQixLQUFQO0FBQ0gsR0F2QkQ7QUF3QkgsQ0EzREQ7O0FBNkRBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJcUIsTUFBTSxHQUFHO0FBQ1RDLGFBQVcsRUFBa0IsS0FBSyxDQUR6QjtBQUVUQyxnQkFBYyxFQUFXLEtBQUssQ0FGckI7QUFHVEMsZ0JBQWMsRUFBVyxLQUFLLENBSHJCO0FBSVRDLFlBQVUsRUFBa0IsS0FBSyxDQUp4QixFQUFiOzs7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTlILG1CQUFtQixHQUFHO0FBQ3RCK0gsR0FBQyxFQUFHLENBRGtCO0FBRXRCQyxHQUFDLEVBQUcsQ0FGa0I7QUFHdEJDLEdBQUMsRUFBRyxDQUhrQjtBQUl0QkMsR0FBQyxFQUFHLENBSmtCLEVBQTFCOzs7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsYUFBYSxHQUFHO0FBQ2hCQyxZQUFVLEVBQUcsQ0FERztBQUVoQkMsWUFBVSxFQUFHLENBRkc7QUFHaEJDLFlBQVUsRUFBRyxDQUhHO0FBSWhCQyxZQUFVLEVBQUcsQ0FKRztBQUtoQkMsWUFBVSxFQUFHLENBTEc7QUFNaEJDLFlBQVUsRUFBRyxDQU5HO0FBT2hCQyxZQUFVLEVBQUcsQ0FQRztBQVFoQkMsWUFBVSxFQUFHLENBUkcsRUFBcEI7OztBQVdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJL0csTUFBTSxHQUFHLFlBQVc7O0FBRXBCLE1BQUlnSCxzQkFBc0IsR0FBRztBQUN6QixJQUR5QjtBQUV6QixHQUFDLENBQUQsRUFBSSxFQUFKLENBRnlCO0FBR3pCLEdBQUMsQ0FBRCxFQUFJLEVBQUosQ0FIeUI7QUFJekIsR0FBQyxDQUFELEVBQUksRUFBSixDQUp5QjtBQUt6QixHQUFDLENBQUQsRUFBSSxFQUFKLENBTHlCO0FBTXpCLEdBQUMsQ0FBRCxFQUFJLEVBQUosQ0FOeUI7QUFPekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FQeUI7QUFRekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FSeUI7QUFTekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FUeUI7QUFVekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FWeUI7QUFXekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FYeUI7QUFZekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FaeUI7QUFhekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FieUI7QUFjekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBZHlCO0FBZXpCLEdBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixDQWZ5QjtBQWdCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBaEJ5QjtBQWlCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBakJ5QjtBQWtCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBbEJ5QjtBQW1CekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBbkJ5QjtBQW9CekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLENBcEJ5QjtBQXFCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLENBckJ5QjtBQXNCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLENBdEJ5QjtBQXVCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBdkJ5QjtBQXdCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBeEJ5QjtBQXlCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBekJ5QjtBQTBCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBMUJ5QjtBQTJCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBM0J5QjtBQTRCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEdBQXBCLENBNUJ5QjtBQTZCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBN0J5QjtBQThCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBOUJ5QjtBQStCekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBL0J5QjtBQWdDekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBaEN5QjtBQWlDekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBakN5QjtBQWtDekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBbEN5QjtBQW1DekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBbkN5QjtBQW9DekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBcEN5QjtBQXFDekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBckN5QjtBQXNDekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBdEN5QjtBQXVDekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBdkN5QjtBQXdDekIsR0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBeEN5QixDQUE3Qjs7QUEwQ0EsTUFBSUMsR0FBRyxHQUFJLEtBQUssRUFBTixHQUFhLEtBQUssQ0FBbEIsR0FBd0IsS0FBSyxDQUE3QixHQUFtQyxLQUFLLENBQXhDLEdBQThDLEtBQUssQ0FBbkQsR0FBeUQsS0FBSyxDQUE5RCxHQUFvRSxLQUFLLENBQW5GO0FBQ0EsTUFBSUMsR0FBRyxHQUFJLEtBQUssRUFBTixHQUFhLEtBQUssRUFBbEIsR0FBeUIsS0FBSyxFQUE5QixHQUFxQyxLQUFLLENBQTFDLEdBQWdELEtBQUssQ0FBckQsR0FBMkQsS0FBSyxDQUFoRSxHQUFzRSxLQUFLLENBQTNFLEdBQWlGLEtBQUssQ0FBaEc7QUFDQSxNQUFJQyxRQUFRLEdBQUksS0FBSyxFQUFOLEdBQWEsS0FBSyxFQUFsQixHQUF5QixLQUFLLEVBQTlCLEdBQXFDLEtBQUssQ0FBMUMsR0FBZ0QsS0FBSyxDQUFwRTs7QUFFQSxNQUFJekksS0FBSyxHQUFHLEVBQVo7O0FBRUEsTUFBSTBJLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVN6RyxJQUFULEVBQWU7QUFDN0IsUUFBSTBHLEtBQUssR0FBRyxDQUFaO0FBQ0EsV0FBTzFHLElBQUksSUFBSSxDQUFmLEVBQWtCO0FBQ2QwRyxXQUFLLElBQUksQ0FBVDtBQUNBMUcsVUFBSSxNQUFNLENBQVY7QUFDSDtBQUNELFdBQU8wRyxLQUFQO0FBQ0gsR0FQRDs7QUFTQTNJLE9BQUssQ0FBQ2tDLGNBQU4sR0FBdUIsVUFBU0QsSUFBVCxFQUFlO0FBQ2xDLFFBQUkyRyxDQUFDLEdBQUczRyxJQUFJLElBQUksRUFBaEI7QUFDQSxXQUFPeUcsV0FBVyxDQUFDRSxDQUFELENBQVgsR0FBaUJGLFdBQVcsQ0FBQ0gsR0FBRCxDQUE1QixJQUFxQyxDQUE1QyxFQUErQztBQUMzQ0ssT0FBQyxJQUFLTCxHQUFHLElBQUtHLFdBQVcsQ0FBQ0UsQ0FBRCxDQUFYLEdBQWlCRixXQUFXLENBQUNILEdBQUQsQ0FBMUM7QUFDSDtBQUNELFdBQU8sQ0FBR3RHLElBQUksSUFBSSxFQUFULEdBQWUyRyxDQUFqQixJQUFzQkgsUUFBN0I7QUFDSCxHQU5EOztBQVFBekksT0FBSyxDQUFDNkIsZ0JBQU4sR0FBeUIsVUFBU0ksSUFBVCxFQUFlO0FBQ3BDLFFBQUkyRyxDQUFDLEdBQUczRyxJQUFJLElBQUksRUFBaEI7QUFDQSxXQUFPeUcsV0FBVyxDQUFDRSxDQUFELENBQVgsR0FBaUJGLFdBQVcsQ0FBQ0YsR0FBRCxDQUE1QixJQUFxQyxDQUE1QyxFQUErQztBQUMzQ0ksT0FBQyxJQUFLSixHQUFHLElBQUtFLFdBQVcsQ0FBQ0UsQ0FBRCxDQUFYLEdBQWlCRixXQUFXLENBQUNGLEdBQUQsQ0FBMUM7QUFDSDtBQUNELFdBQVF2RyxJQUFJLElBQUksRUFBVCxHQUFlMkcsQ0FBdEI7QUFDSCxHQU5EOztBQVFBNUksT0FBSyxDQUFDeUIsa0JBQU4sR0FBMkIsVUFBU3JDLFVBQVQsRUFBcUI7QUFDNUMsV0FBT2tKLHNCQUFzQixDQUFDbEosVUFBVSxHQUFHLENBQWQsQ0FBN0I7QUFDSCxHQUZEOztBQUlBWSxPQUFLLENBQUN1QyxlQUFOLEdBQXdCLFVBQVNwQyxXQUFULEVBQXNCOztBQUUxQyxZQUFRQSxXQUFSOztBQUVJLFdBQUswSCxhQUFhLENBQUNDLFVBQW5CO0FBQ0ksZUFBTyxVQUFTMUcsQ0FBVCxFQUFZTyxDQUFaLEVBQWUsQ0FBRSxPQUFPLENBQUNQLENBQUMsR0FBR08sQ0FBTCxJQUFVLENBQVYsSUFBZSxDQUF0QixDQUEwQixDQUFsRDtBQUNKLFdBQUtrRyxhQUFhLENBQUNFLFVBQW5CO0FBQ0ksZUFBTyxVQUFTM0csQ0FBVCxFQUFZTyxDQUFaLEVBQWUsQ0FBRSxPQUFPUCxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQWhCLENBQW9CLENBQTVDO0FBQ0osV0FBS3lHLGFBQWEsQ0FBQ0csVUFBbkI7QUFDSSxlQUFPLFVBQVM1RyxDQUFULEVBQVlPLENBQVosRUFBZSxDQUFFLE9BQU9BLENBQUMsR0FBRyxDQUFKLElBQVMsQ0FBaEIsQ0FBb0IsQ0FBNUM7QUFDSixXQUFLa0csYUFBYSxDQUFDSSxVQUFuQjtBQUNJLGVBQU8sVUFBUzdHLENBQVQsRUFBWU8sQ0FBWixFQUFlLENBQUUsT0FBTyxDQUFDUCxDQUFDLEdBQUdPLENBQUwsSUFBVSxDQUFWLElBQWUsQ0FBdEIsQ0FBMEIsQ0FBbEQ7QUFDSixXQUFLa0csYUFBYSxDQUFDSyxVQUFuQjtBQUNJLGVBQU8sVUFBUzlHLENBQVQsRUFBWU8sQ0FBWixFQUFlLENBQUUsT0FBTyxDQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBV1osQ0FBQyxHQUFHLENBQWYsSUFBb0JXLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxDQUFDLEdBQUcsQ0FBZixDQUFyQixJQUEyQyxDQUEzQyxJQUFnRCxDQUF2RCxDQUEyRCxDQUFuRjtBQUNKLFdBQUtrRyxhQUFhLENBQUNNLFVBQW5CO0FBQ0ksZUFBTyxVQUFTL0csQ0FBVCxFQUFZTyxDQUFaLEVBQWUsQ0FBRSxPQUFRUCxDQUFDLEdBQUdPLENBQUwsR0FBVSxDQUFWLEdBQWVQLENBQUMsR0FBR08sQ0FBTCxHQUFVLENBQXhCLElBQTZCLENBQXBDLENBQXdDLENBQWhFO0FBQ0osV0FBS2tHLGFBQWEsQ0FBQ08sVUFBbkI7QUFDSSxlQUFPLFVBQVNoSCxDQUFULEVBQVlPLENBQVosRUFBZSxDQUFFLE9BQU8sQ0FBR1AsQ0FBQyxHQUFHTyxDQUFMLEdBQVUsQ0FBVixHQUFlUCxDQUFDLEdBQUdPLENBQUwsR0FBVSxDQUExQixJQUErQixDQUEvQixJQUFvQyxDQUEzQyxDQUErQyxDQUF2RTtBQUNKLFdBQUtrRyxhQUFhLENBQUNRLFVBQW5CO0FBQ0ksZUFBTyxVQUFTakgsQ0FBVCxFQUFZTyxDQUFaLEVBQWUsQ0FBRSxPQUFPLENBQUdQLENBQUMsR0FBR08sQ0FBTCxHQUFVLENBQVYsR0FBYyxDQUFDUCxDQUFDLEdBQUdPLENBQUwsSUFBVSxDQUExQixJQUErQixDQUEvQixJQUFvQyxDQUEzQyxDQUErQyxDQUF2RTs7QUFFQTtBQUNBLGNBQU0sSUFBSWdELEtBQUosQ0FBVSxxQkFBcUJ4RSxXQUEvQixDQUFOLENBcEJSOztBQXNCSCxHQXhCRDs7QUEwQkFILE9BQUssQ0FBQ3lELHlCQUFOLEdBQWtDLFVBQVNvRixrQkFBVCxFQUE2QjtBQUMzRCxRQUFJQyxDQUFDLEdBQUduRixZQUFZLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBTSxDQUFOLENBQXBCO0FBQ0EsU0FBSyxJQUFJdkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lILGtCQUFwQixFQUF3Q3pILENBQUMsSUFBSSxDQUE3QyxFQUFnRDtBQUM1QzBILE9BQUMsR0FBR0EsQ0FBQyxDQUFDQyxRQUFGLENBQVdwRixZQUFZLENBQUMsQ0FBQyxDQUFELEVBQUlxRixNQUFNLENBQUNDLElBQVAsQ0FBWTdILENBQVosQ0FBSixDQUFELEVBQXNCLENBQXRCLENBQXZCLENBQUo7QUFDSDtBQUNELFdBQU8wSCxDQUFQO0FBQ0gsR0FORDs7QUFRQTlJLE9BQUssQ0FBQ3dFLGVBQU4sR0FBd0IsVUFBUzBFLElBQVQsRUFBZUMsSUFBZixFQUFxQjs7QUFFekMsUUFBSSxLQUFLQSxJQUFMLElBQWFBLElBQUksR0FBRyxFQUF4QixFQUE0Qjs7QUFFeEI7O0FBRUEsY0FBT0QsSUFBUDtBQUNJLGFBQUs5QixNQUFNLENBQUNDLFdBQVosQ0FBa0MsT0FBTyxFQUFQO0FBQ2xDLGFBQUtELE1BQU0sQ0FBQ0UsY0FBWixDQUFxQyxPQUFPLENBQVA7QUFDckMsYUFBS0YsTUFBTSxDQUFDRyxjQUFaLENBQW9DLE9BQU8sQ0FBUDtBQUNwQyxhQUFLSCxNQUFNLENBQUNJLFVBQVosQ0FBd0MsT0FBTyxDQUFQO0FBQ3BDO0FBQ0EsZ0JBQU0sSUFBSTdDLEtBQUosQ0FBVSxVQUFVdUUsSUFBcEIsQ0FBTixDQU5SOzs7QUFTSCxLQWJELE1BYU8sSUFBSUMsSUFBSSxHQUFHLEVBQVgsRUFBZTs7QUFFbEI7O0FBRUEsY0FBT0QsSUFBUDtBQUNJLGFBQUs5QixNQUFNLENBQUNDLFdBQVosQ0FBa0MsT0FBTyxFQUFQO0FBQ2xDLGFBQUtELE1BQU0sQ0FBQ0UsY0FBWixDQUFxQyxPQUFPLEVBQVA7QUFDckMsYUFBS0YsTUFBTSxDQUFDRyxjQUFaLENBQW9DLE9BQU8sRUFBUDtBQUNwQyxhQUFLSCxNQUFNLENBQUNJLFVBQVosQ0FBd0MsT0FBTyxFQUFQO0FBQ3BDO0FBQ0EsZ0JBQU0sSUFBSTdDLEtBQUosQ0FBVSxVQUFVdUUsSUFBcEIsQ0FBTixDQU5SOzs7QUFTSCxLQWJNLE1BYUEsSUFBSUMsSUFBSSxHQUFHLEVBQVgsRUFBZTs7QUFFbEI7O0FBRUEsY0FBT0QsSUFBUDtBQUNJLGFBQUs5QixNQUFNLENBQUNDLFdBQVosQ0FBa0MsT0FBTyxFQUFQO0FBQ2xDLGFBQUtELE1BQU0sQ0FBQ0UsY0FBWixDQUFvQyxPQUFPLEVBQVA7QUFDcEMsYUFBS0YsTUFBTSxDQUFDRyxjQUFaLENBQW9DLE9BQU8sRUFBUDtBQUNwQyxhQUFLSCxNQUFNLENBQUNJLFVBQVosQ0FBd0MsT0FBTyxFQUFQO0FBQ3BDO0FBQ0EsZ0JBQU0sSUFBSTdDLEtBQUosQ0FBVSxVQUFVdUUsSUFBcEIsQ0FBTixDQU5SOzs7QUFTSCxLQWJNLE1BYUE7QUFDSCxZQUFNLElBQUl2RSxLQUFKLENBQVUsVUFBVXdFLElBQXBCLENBQU47QUFDSDtBQUNKLEdBNUNEOztBQThDQW5KLE9BQUssQ0FBQ3VCLFlBQU4sR0FBcUIsVUFBU3BDLE1BQVQsRUFBaUI7O0FBRWxDLFFBQUlpQixXQUFXLEdBQUdqQixNQUFNLENBQUMrRixjQUFQLEVBQWxCOztBQUVBLFFBQUk3RCxTQUFTLEdBQUcsQ0FBaEI7O0FBRUE7O0FBRUEsU0FBSyxJQUFJZixHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHRixXQUF4QixFQUFxQ0UsR0FBRyxJQUFJLENBQTVDLEVBQStDO0FBQzNDLFdBQUssSUFBSUMsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0gsV0FBeEIsRUFBcUNHLEdBQUcsSUFBSSxDQUE1QyxFQUErQzs7QUFFM0MsWUFBSTZJLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFlBQUk1RyxJQUFJLEdBQUdyRCxNQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFkLEVBQW1CQyxHQUFuQixDQUFYOztBQUVBLGFBQUssSUFBSVEsQ0FBQyxHQUFHLENBQUMsQ0FBZCxFQUFpQkEsQ0FBQyxJQUFJLENBQXRCLEVBQXlCQSxDQUFDLElBQUksQ0FBOUIsRUFBaUM7O0FBRTdCLGNBQUlULEdBQUcsR0FBR1MsQ0FBTixHQUFVLENBQVYsSUFBZVgsV0FBVyxJQUFJRSxHQUFHLEdBQUdTLENBQXhDLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBRUQsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFkLEVBQWlCQSxDQUFDLElBQUksQ0FBdEIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QixFQUFpQzs7QUFFN0IsZ0JBQUlULEdBQUcsR0FBR1MsQ0FBTixHQUFVLENBQVYsSUFBZVosV0FBVyxJQUFJRyxHQUFHLEdBQUdTLENBQXhDLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBRUQsZ0JBQUlELENBQUMsSUFBSSxDQUFMLElBQVVDLENBQUMsSUFBSSxDQUFuQixFQUFzQjtBQUNsQjtBQUNIOztBQUVELGdCQUFJd0IsSUFBSSxJQUFJckQsTUFBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBRyxHQUFHUyxDQUFwQixFQUF1QlIsR0FBRyxHQUFHUyxDQUE3QixDQUFaLEVBQThDO0FBQzFDb0ksdUJBQVMsSUFBSSxDQUFiO0FBQ0g7QUFDSjtBQUNKOztBQUVELFlBQUlBLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNmL0gsbUJBQVMsSUFBSyxJQUFJK0gsU0FBSixHQUFnQixDQUE5QjtBQUNIO0FBQ0o7QUFDSjs7QUFFRDs7QUFFQSxTQUFLLElBQUk5SSxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHRixXQUFXLEdBQUcsQ0FBdEMsRUFBeUNFLEdBQUcsSUFBSSxDQUFoRCxFQUFtRDtBQUMvQyxXQUFLLElBQUlDLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdILFdBQVcsR0FBRyxDQUF0QyxFQUF5Q0csR0FBRyxJQUFJLENBQWhELEVBQW1EO0FBQy9DLFlBQUlrRyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFlBQUl0SCxNQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFkLEVBQW1CQyxHQUFuQixDQUFKLEVBQThCa0csS0FBSyxJQUFJLENBQVQ7QUFDOUIsWUFBSXRILE1BQU0sQ0FBQzhGLE1BQVAsQ0FBYzNFLEdBQUcsR0FBRyxDQUFwQixFQUF1QkMsR0FBdkIsQ0FBSixFQUFrQ2tHLEtBQUssSUFBSSxDQUFUO0FBQ2xDLFlBQUl0SCxNQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFkLEVBQW1CQyxHQUFHLEdBQUcsQ0FBekIsQ0FBSixFQUFrQ2tHLEtBQUssSUFBSSxDQUFUO0FBQ2xDLFlBQUl0SCxNQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFHLEdBQUcsQ0FBcEIsRUFBdUJDLEdBQUcsR0FBRyxDQUE3QixDQUFKLEVBQXNDa0csS0FBSyxJQUFJLENBQVQ7QUFDdEMsWUFBSUEsS0FBSyxJQUFJLENBQVQsSUFBY0EsS0FBSyxJQUFJLENBQTNCLEVBQThCO0FBQzFCcEYsbUJBQVMsSUFBSSxDQUFiO0FBQ0g7QUFDSjtBQUNKOztBQUVEOztBQUVBLFNBQUssSUFBSWYsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0YsV0FBeEIsRUFBcUNFLEdBQUcsSUFBSSxDQUE1QyxFQUErQztBQUMzQyxXQUFLLElBQUlDLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdILFdBQVcsR0FBRyxDQUF0QyxFQUF5Q0csR0FBRyxJQUFJLENBQWhELEVBQW1EO0FBQy9DLFlBQUlwQixNQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFkLEVBQW1CQyxHQUFuQjtBQUNHLFNBQUNwQixNQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFkLEVBQW1CQyxHQUFHLEdBQUcsQ0FBekIsQ0FESjtBQUVJcEIsY0FBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBZCxFQUFtQkMsR0FBRyxHQUFHLENBQXpCLENBRko7QUFHSXBCLGNBQU0sQ0FBQzhGLE1BQVAsQ0FBYzNFLEdBQWQsRUFBbUJDLEdBQUcsR0FBRyxDQUF6QixDQUhKO0FBSUlwQixjQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFkLEVBQW1CQyxHQUFHLEdBQUcsQ0FBekIsQ0FKSjtBQUtHLFNBQUNwQixNQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFkLEVBQW1CQyxHQUFHLEdBQUcsQ0FBekIsQ0FMSjtBQU1JcEIsY0FBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBZCxFQUFtQkMsR0FBRyxHQUFHLENBQXpCLENBTlIsRUFNc0M7QUFDbENjLG1CQUFTLElBQUksRUFBYjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFLLElBQUlkLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdILFdBQXhCLEVBQXFDRyxHQUFHLElBQUksQ0FBNUMsRUFBK0M7QUFDM0MsV0FBSyxJQUFJRCxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHRixXQUFXLEdBQUcsQ0FBdEMsRUFBeUNFLEdBQUcsSUFBSSxDQUFoRCxFQUFtRDtBQUMvQyxZQUFJbkIsTUFBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBZCxFQUFtQkMsR0FBbkI7QUFDRyxTQUFDcEIsTUFBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBRyxHQUFHLENBQXBCLEVBQXVCQyxHQUF2QixDQURKO0FBRUlwQixjQUFNLENBQUM4RixNQUFQLENBQWMzRSxHQUFHLEdBQUcsQ0FBcEIsRUFBdUJDLEdBQXZCLENBRko7QUFHSXBCLGNBQU0sQ0FBQzhGLE1BQVAsQ0FBYzNFLEdBQUcsR0FBRyxDQUFwQixFQUF1QkMsR0FBdkIsQ0FISjtBQUlJcEIsY0FBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBRyxHQUFHLENBQXBCLEVBQXVCQyxHQUF2QixDQUpKO0FBS0csU0FBQ3BCLE1BQU0sQ0FBQzhGLE1BQVAsQ0FBYzNFLEdBQUcsR0FBRyxDQUFwQixFQUF1QkMsR0FBdkIsQ0FMSjtBQU1JcEIsY0FBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBRyxHQUFHLENBQXBCLEVBQXVCQyxHQUF2QixDQU5SLEVBTXNDO0FBQ2xDYyxtQkFBUyxJQUFJLEVBQWI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQ7O0FBRUEsUUFBSWdJLFNBQVMsR0FBRyxDQUFoQjs7QUFFQSxTQUFLLElBQUk5SSxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHSCxXQUF4QixFQUFxQ0csR0FBRyxJQUFJLENBQTVDLEVBQStDO0FBQzNDLFdBQUssSUFBSUQsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0YsV0FBeEIsRUFBcUNFLEdBQUcsSUFBSSxDQUE1QyxFQUErQztBQUMzQyxZQUFJbkIsTUFBTSxDQUFDOEYsTUFBUCxDQUFjM0UsR0FBZCxFQUFtQkMsR0FBbkIsQ0FBSixFQUE4QjtBQUMxQjhJLG1CQUFTLElBQUksQ0FBYjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxRQUFJQyxLQUFLLEdBQUd2SCxJQUFJLENBQUN3SCxHQUFMLENBQVMsTUFBTUYsU0FBTixHQUFrQmpKLFdBQWxCLEdBQWdDQSxXQUFoQyxHQUE4QyxFQUF2RCxJQUE2RCxDQUF6RTtBQUNBaUIsYUFBUyxJQUFJaUksS0FBSyxHQUFHLEVBQXJCOztBQUVBLFdBQU9qSSxTQUFQO0FBQ0gsR0F2R0Q7O0FBeUdBLFNBQU9yQixLQUFQO0FBQ0gsQ0F6UVksRUFBYjs7QUEyUUE7QUFDQTtBQUNBOztBQUVBLElBQUlnSixNQUFNLEdBQUcsWUFBVzs7QUFFcEIsTUFBSVEsU0FBUyxHQUFHLElBQUl6SixLQUFKLENBQVUsR0FBVixDQUFoQjtBQUNBLE1BQUkwSixTQUFTLEdBQUcsSUFBSTFKLEtBQUosQ0FBVSxHQUFWLENBQWhCOztBQUVBO0FBQ0EsT0FBSyxJQUFJcUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQzNCb0ksYUFBUyxDQUFDcEksQ0FBRCxDQUFULEdBQWUsS0FBS0EsQ0FBcEI7QUFDSDtBQUNELE9BQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxHQUFwQixFQUF5QkEsQ0FBQyxJQUFJLENBQTlCLEVBQWlDO0FBQzdCb0ksYUFBUyxDQUFDcEksQ0FBRCxDQUFULEdBQWVvSSxTQUFTLENBQUNwSSxDQUFDLEdBQUcsQ0FBTCxDQUFUO0FBQ1RvSSxhQUFTLENBQUNwSSxDQUFDLEdBQUcsQ0FBTCxDQURBO0FBRVRvSSxhQUFTLENBQUNwSSxDQUFDLEdBQUcsQ0FBTCxDQUZBO0FBR1RvSSxhQUFTLENBQUNwSSxDQUFDLEdBQUcsQ0FBTCxDQUhmO0FBSUg7QUFDRCxPQUFLLElBQUlBLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsR0FBcEIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QixFQUFpQztBQUM3QnFJLGFBQVMsQ0FBQ0QsU0FBUyxDQUFDcEksQ0FBRCxDQUFWLENBQVQsR0FBMkJBLENBQTNCO0FBQ0g7O0FBRUQsTUFBSXBCLEtBQUssR0FBRyxFQUFaOztBQUVBQSxPQUFLLENBQUMwSixJQUFOLEdBQWEsVUFBU0MsQ0FBVCxFQUFZOztBQUVyQixRQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1AsWUFBTSxJQUFJaEYsS0FBSixDQUFVLFVBQVVnRixDQUFWLEdBQWMsR0FBeEIsQ0FBTjtBQUNIOztBQUVELFdBQU9GLFNBQVMsQ0FBQ0UsQ0FBRCxDQUFoQjtBQUNILEdBUEQ7O0FBU0EzSixPQUFLLENBQUNpSixJQUFOLEdBQWEsVUFBU1UsQ0FBVCxFQUFZOztBQUVyQixXQUFPQSxDQUFDLEdBQUcsQ0FBWCxFQUFjO0FBQ1ZBLE9BQUMsSUFBSSxHQUFMO0FBQ0g7O0FBRUQsV0FBT0EsQ0FBQyxJQUFJLEdBQVosRUFBaUI7QUFDYkEsT0FBQyxJQUFJLEdBQUw7QUFDSDs7QUFFRCxXQUFPSCxTQUFTLENBQUNHLENBQUQsQ0FBaEI7QUFDSCxHQVhEOztBQWFBLFNBQU8zSixLQUFQO0FBQ0gsQ0E1Q1ksRUFBYjs7QUE4Q0E7QUFDQTtBQUNBOztBQUVBLFNBQVMyRCxZQUFULENBQXNCaUcsR0FBdEIsRUFBMkJDLEtBQTNCLEVBQWtDOztBQUU5QixNQUFJLE9BQU9ELEdBQUcsQ0FBQ2xJLE1BQVgsSUFBcUIsV0FBekIsRUFBc0M7QUFDbEMsVUFBTSxJQUFJaUQsS0FBSixDQUFVaUYsR0FBRyxDQUFDbEksTUFBSixHQUFhLEdBQWIsR0FBbUJtSSxLQUE3QixDQUFOO0FBQ0g7O0FBRUQsTUFBSUMsSUFBSSxHQUFHLFlBQVc7QUFDbEIsUUFBSWpILE1BQU0sR0FBRyxDQUFiO0FBQ0EsV0FBT0EsTUFBTSxHQUFHK0csR0FBRyxDQUFDbEksTUFBYixJQUF1QmtJLEdBQUcsQ0FBQy9HLE1BQUQsQ0FBSCxJQUFlLENBQTdDLEVBQWdEO0FBQzVDQSxZQUFNLElBQUksQ0FBVjtBQUNIO0FBQ0QsUUFBSWlILElBQUksR0FBRyxJQUFJL0osS0FBSixDQUFVNkosR0FBRyxDQUFDbEksTUFBSixHQUFhbUIsTUFBYixHQUFzQmdILEtBQWhDLENBQVg7QUFDQSxTQUFLLElBQUl6SSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd0ksR0FBRyxDQUFDbEksTUFBSixHQUFhbUIsTUFBakMsRUFBeUN6QixDQUFDLElBQUksQ0FBOUMsRUFBaUQ7QUFDN0MwSSxVQUFJLENBQUMxSSxDQUFELENBQUosR0FBVXdJLEdBQUcsQ0FBQ3hJLENBQUMsR0FBR3lCLE1BQUwsQ0FBYjtBQUNIO0FBQ0QsV0FBT2lILElBQVA7QUFDSCxHQVZVLEVBQVg7O0FBWUEsTUFBSTlKLEtBQUssR0FBRyxFQUFaOztBQUVBQSxPQUFLLENBQUMrRCxLQUFOLEdBQWMsVUFBU0UsS0FBVCxFQUFnQjtBQUMxQixXQUFPNkYsSUFBSSxDQUFDN0YsS0FBRCxDQUFYO0FBQ0gsR0FGRDs7QUFJQWpFLE9BQUssQ0FBQzRELFNBQU4sR0FBa0IsWUFBVztBQUN6QixXQUFPa0csSUFBSSxDQUFDcEksTUFBWjtBQUNILEdBRkQ7O0FBSUExQixPQUFLLENBQUMrSSxRQUFOLEdBQWlCLFVBQVNnQixDQUFULEVBQVk7O0FBRXpCLFFBQUlILEdBQUcsR0FBRyxJQUFJN0osS0FBSixDQUFVQyxLQUFLLENBQUM0RCxTQUFOLEtBQW9CbUcsQ0FBQyxDQUFDbkcsU0FBRixFQUFwQixHQUFvQyxDQUE5QyxDQUFWOztBQUVBLFNBQUssSUFBSXhDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwQixLQUFLLENBQUM0RCxTQUFOLEVBQXBCLEVBQXVDeEMsQ0FBQyxJQUFJLENBQTVDLEVBQStDO0FBQzNDLFdBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR29JLENBQUMsQ0FBQ25HLFNBQUYsRUFBcEIsRUFBbUNqQyxDQUFDLElBQUksQ0FBeEMsRUFBMkM7QUFDdkNpSSxXQUFHLENBQUN4SSxDQUFDLEdBQUdPLENBQUwsQ0FBSCxJQUFjcUgsTUFBTSxDQUFDQyxJQUFQLENBQVlELE1BQU0sQ0FBQ1UsSUFBUCxDQUFZMUosS0FBSyxDQUFDK0QsS0FBTixDQUFZM0MsQ0FBWixDQUFaLElBQStCNEgsTUFBTSxDQUFDVSxJQUFQLENBQVlLLENBQUMsQ0FBQ2hHLEtBQUYsQ0FBUXBDLENBQVIsQ0FBWixDQUEzQyxDQUFkO0FBQ0g7QUFDSjs7QUFFRCxXQUFPZ0MsWUFBWSxDQUFDaUcsR0FBRCxFQUFNLENBQU4sQ0FBbkI7QUFDSCxHQVhEOztBQWFBNUosT0FBSyxDQUFDOEIsR0FBTixHQUFZLFVBQVNpSSxDQUFULEVBQVk7O0FBRXBCLFFBQUkvSixLQUFLLENBQUM0RCxTQUFOLEtBQW9CbUcsQ0FBQyxDQUFDbkcsU0FBRixFQUFwQixHQUFvQyxDQUF4QyxFQUEyQztBQUN2QyxhQUFPNUQsS0FBUDtBQUNIOztBQUVELFFBQUlzSixLQUFLLEdBQUdOLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZMUosS0FBSyxDQUFDK0QsS0FBTixDQUFZLENBQVosQ0FBWixJQUErQmlGLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZSyxDQUFDLENBQUNoRyxLQUFGLENBQVEsQ0FBUixDQUFaLENBQTNDOztBQUVBLFFBQUk2RixHQUFHLEdBQUcsSUFBSTdKLEtBQUosQ0FBVUMsS0FBSyxDQUFDNEQsU0FBTixFQUFWLENBQVY7QUFDQSxTQUFLLElBQUl4QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcEIsS0FBSyxDQUFDNEQsU0FBTixFQUFwQixFQUF1Q3hDLENBQUMsSUFBSSxDQUE1QyxFQUErQztBQUMzQ3dJLFNBQUcsQ0FBQ3hJLENBQUQsQ0FBSCxHQUFTcEIsS0FBSyxDQUFDK0QsS0FBTixDQUFZM0MsQ0FBWixDQUFUO0FBQ0g7O0FBRUQsU0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkksQ0FBQyxDQUFDbkcsU0FBRixFQUFwQixFQUFtQ3hDLENBQUMsSUFBSSxDQUF4QyxFQUEyQztBQUN2Q3dJLFNBQUcsQ0FBQ3hJLENBQUQsQ0FBSCxJQUFVNEgsTUFBTSxDQUFDQyxJQUFQLENBQVlELE1BQU0sQ0FBQ1UsSUFBUCxDQUFZSyxDQUFDLENBQUNoRyxLQUFGLENBQVEzQyxDQUFSLENBQVosSUFBMkJrSSxLQUF2QyxDQUFWO0FBQ0g7O0FBRUQ7QUFDQSxXQUFPM0YsWUFBWSxDQUFDaUcsR0FBRCxFQUFNLENBQU4sQ0FBWixDQUFxQjlILEdBQXJCLENBQXlCaUksQ0FBekIsQ0FBUDtBQUNILEdBbkJEOztBQXFCQSxTQUFPL0osS0FBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxJQUFJbUUsU0FBUyxHQUFHLFlBQVc7OztBQUd2QjtBQUNBLE1BQUk2RixjQUFjLEdBQUMsQ0FBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFELEVBQVcsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sQ0FBWCxFQUFxQixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFyQixFQUErQixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sQ0FBTixDQUEvQixFQUF3QyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF4QyxFQUFrRCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFsRCxFQUE0RCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE1RCxFQUFzRSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF0RSxFQUFnRixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFoRixFQUEwRixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUExRixFQUFvRyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFwRyxFQUE4RyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE5RyxFQUF3SCxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sRUFBUCxDQUF4SCxFQUFtSSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFuSSxFQUE2SSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE3SSxFQUF1SixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sQ0FBTixDQUF2SixFQUFnSyxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sR0FBUCxDQUFoSyxFQUE0SyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE1SyxFQUFzTCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF0TCxFQUF3TSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF4TSxFQUEwTixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUExTixFQUFvTyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFwTyxFQUE4TyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE5TyxFQUF3UCxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF4UCxFQUFrUSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUFsUSxFQUE0USxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUE1USxFQUFzUixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF0UixFQUF3UyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF4UyxFQUEwVCxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sRUFBUCxDQUExVCxFQUFxVSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUFyVSxFQUF1VixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF2VixFQUF5VyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF6VyxFQUEyWCxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sR0FBUCxDQUEzWCxFQUF1WSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF2WSxFQUF5WixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUF6WixFQUEyYSxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUEzYSxFQUE2YixDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLENBQVQsRUFBVyxFQUFYLEVBQWMsRUFBZCxDQUE3YixFQUErYyxDQUFD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RSxDQUFDN0osY0FBSCxFQUFSLENBQXZCO0FBQ0EsTUFBSUksTUFBTSxHQUFHNEosUUFBUSxDQUFDLENBQUN6SixJQUFJLEdBQUdzSixFQUFFLENBQUM3SixjQUFILEtBQXNCK0osUUFBOUIsSUFBMEMsQ0FBM0MsQ0FBckI7O0FBRUEsU0FBT0YsRUFBRSxDQUFDdkosWUFBSCxDQUFnQnlKLFFBQWhCLEVBQTBCM0osTUFBMUIsRUFBa0NHLElBQWxDLENBQVA7QUFDSCxDQTdCRDtBQThCQTtBQUNBMEosTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ1RSLGlCQUFlLEVBQUdBLGVBRFQsRUFBakIiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1xyXG4vLyBRUiBDb2RlIEdlbmVyYXRvciBmb3IgSmF2YVNjcmlwdFxyXG4vL1xyXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgS2F6dWhpa28gQXJhc2VcclxuLy9cclxuLy8gVVJMOiBbdXJsPWh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9daHR0cDovL3d3dy5kLXByb2plY3QuY29tL1svdXJsXVxyXG4vL1xyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbi8vICAgICAgICBbdXJsPWh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXWh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwWy91cmxdXHJcbi8vXHJcbi8vIFRoZSB3b3JkICdRUiBDb2RlJyBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxyXG4vLyBERU5TTyBXQVZFIElOQ09SUE9SQVRFRFxyXG4vLyAgICAgICAgW3VybD1odHRwOi8vd3d3LmRlbnNvLXdhdmUuY29tL3FyY29kZS9mYXFwYXRlbnQtZS5odG1sXWh0dHA6Ly93d3cuZGVuc28td2F2ZS5jb20vcXJjb2RlL2ZhcXBhdGVudC1lLmh0bWxbL3VybF1cclxuLy9cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBxcmNvZGVcclxuLy/ku6PnoIHnrKwxNTg46KGM5Li66KGl5YWF5Luj56CBXHJcbi8v5L+u5pS55Lq677yaY2hlbnhpbmdcclxuLy8yMDE3LTAyLTI3IDE2OjIxOjMyXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBcclxuLyoqXHJcbiAqIHFyY29kZVxyXG4gKiBAcGFyYW0gdHlwZU51bWJlciAxIHRvIDQwXHJcbiAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZXZlbCAnTCcsJ00nLCdRJywnSCdcclxuICovXHJcbnZhciBxcmNvZGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gXHJcbiAgICB2YXIgUEFEMCA9IDB4RUM7XHJcbiAgICB2YXIgUEFEMSA9IDB4MTE7XHJcbiBcclxuICAgIHZhciBfdHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcbiAgICB2YXIgX2Vycm9yQ29ycmVjdExldmVsID0gUVJFcnJvckNvcnJlY3RMZXZlbFtlcnJvckNvcnJlY3RMZXZlbF07XHJcbiAgICB2YXIgX21vZHVsZXMgPSBudWxsO1xyXG4gICAgdmFyIF9tb2R1bGVDb3VudCA9IDA7XHJcbiAgICB2YXIgX2RhdGFDYWNoZSA9IG51bGw7XHJcbiAgICB2YXIgX2RhdGFMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiBcclxuICAgIHZhciBfdGhpcyA9IHt9O1xyXG4gXHJcbiAgICB2YXIgbWFrZUltcGwgPSBmdW5jdGlvbih0ZXN0LCBtYXNrUGF0dGVybikge1xyXG4gXHJcbiAgICAgICAgX21vZHVsZUNvdW50ID0gX3R5cGVOdW1iZXIgKiA0ICsgMTc7XHJcbiAgICAgICAgX21vZHVsZXMgPSBmdW5jdGlvbihtb2R1bGVDb3VudCkge1xyXG4gICAgICAgICAgICB2YXIgbW9kdWxlcyA9IG5ldyBBcnJheShtb2R1bGVDb3VudCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3cgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlc1tyb3ddID0gbmV3IEFycmF5KG1vZHVsZUNvdW50KTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXNbcm93XVtjb2xdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlcztcclxuICAgICAgICB9KF9tb2R1bGVDb3VudCk7XHJcbiBcclxuICAgICAgICBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIDApO1xyXG4gICAgICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oX21vZHVsZUNvdW50IC0gNywgMCk7XHJcbiAgICAgICAgc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCBfbW9kdWxlQ291bnQgLSA3KTtcclxuICAgICAgICBzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpO1xyXG4gICAgICAgIHNldHVwVGltaW5nUGF0dGVybigpO1xyXG4gICAgICAgIHNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xyXG4gXHJcbiAgICAgICAgaWYgKF90eXBlTnVtYmVyID49IDcpIHtcclxuICAgICAgICAgICAgc2V0dXBUeXBlTnVtYmVyKHRlc3QpO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIGlmIChfZGF0YUNhY2hlID09IG51bGwpIHtcclxuICAgICAgICAgICAgX2RhdGFDYWNoZSA9IGNyZWF0ZURhdGEoX3R5cGVOdW1iZXIsIF9lcnJvckNvcnJlY3RMZXZlbCwgX2RhdGFMaXN0KTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBtYXBEYXRhKF9kYXRhQ2FjaGUsIG1hc2tQYXR0ZXJuKTtcclxuICAgIH07XHJcbiBcclxuICAgIHZhciBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuID0gZnVuY3Rpb24ocm93LCBjb2wpIHtcclxuIFxyXG4gICAgICAgIGZvciAodmFyIHIgPSAtMTsgciA8PSA3OyByICs9IDEpIHtcclxuIFxyXG4gICAgICAgICAgICBpZiAocm93ICsgciA8PSAtMSB8fCBfbW9kdWxlQ291bnQgPD0gcm93ICsgcikgY29udGludWU7XHJcbiBcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDc7IGMgKz0gMSkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sICsgYyA8PSAtMSB8fCBfbW9kdWxlQ291bnQgPD0gY29sICsgYykgY29udGludWU7XHJcbiBcclxuICAgICAgICAgICAgICAgIGlmICggKDAgPD0gciAmJiByIDw9IDYgJiYgKGMgPT0gMCB8fCBjID09IDYpIClcclxuICAgICAgICAgICAgICAgICAgICAgfHwgKDAgPD0gYyAmJiBjIDw9IDYgJiYgKHIgPT0gMCB8fCByID09IDYpIClcclxuICAgICAgICAgICAgICAgICAgICAgfHwgKDIgPD0gciAmJiByIDw9IDQgJiYgMiA8PSBjICYmIGMgPD0gNCkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuIFxyXG4gICAgdmFyIGdldEJlc3RNYXNrUGF0dGVybiA9IGZ1bmN0aW9uKCkge1xyXG4gXHJcbiAgICAgICAgdmFyIG1pbkxvc3RQb2ludCA9IDA7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAwO1xyXG4gXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpICs9IDEpIHtcclxuIFxyXG4gICAgICAgICAgICBtYWtlSW1wbCh0cnVlLCBpKTtcclxuIFxyXG4gICAgICAgICAgICB2YXIgbG9zdFBvaW50ID0gUVJVdGlsLmdldExvc3RQb2ludChfdGhpcyk7XHJcbiBcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiBsb3N0UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XHJcbiAgICB9O1xyXG4gXHJcbiAgICB2YXIgc2V0dXBUaW1pbmdQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XHJcbiBcclxuICAgICAgICBmb3IgKHZhciByID0gODsgciA8IF9tb2R1bGVDb3VudCAtIDg7IHIgKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoX21vZHVsZXNbcl1bNl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX21vZHVsZXNbcl1bNl0gPSAociAlIDIgPT0gMCk7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgZm9yICh2YXIgYyA9IDg7IGMgPCBfbW9kdWxlQ291bnQgLSA4OyBjICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKF9tb2R1bGVzWzZdW2NdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9tb2R1bGVzWzZdW2NdID0gKGMgJSAyID09IDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiBcclxuICAgIHZhciBzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybiA9IGZ1bmN0aW9uKCkge1xyXG4gXHJcbiAgICAgICAgdmFyIHBvcyA9IFFSVXRpbC5nZXRQYXR0ZXJuUG9zaXRpb24oX3R5cGVOdW1iZXIpO1xyXG4gXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpICs9IDEpIHtcclxuIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvcy5sZW5ndGg7IGogKz0gMSkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gcG9zW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbCA9IHBvc1tqXTtcclxuIFxyXG4gICAgICAgICAgICAgICAgaWYgKF9tb2R1bGVzW3Jvd11bY29sXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAtMjsgciA8PSAyOyByICs9IDEpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAtMjsgYyA8PSAyOyBjICs9IDEpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9PSAtMiB8fCByID09IDIgfHwgYyA9PSAtMiB8fCBjID09IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChyID09IDAgJiYgYyA9PSAwKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gXHJcbiAgICB2YXIgc2V0dXBUeXBlTnVtYmVyID0gZnVuY3Rpb24odGVzdCkge1xyXG4gXHJcbiAgICAgICAgdmFyIGJpdHMgPSBRUlV0aWwuZ2V0QkNIVHlwZU51bWJlcihfdHlwZU51bWJlcik7XHJcbiBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcbiAgICAgICAgICAgIF9tb2R1bGVzW01hdGguZmxvb3IoaSAvIDMpXVtpICUgMyArIF9tb2R1bGVDb3VudCAtIDggLSAzXSA9IG1vZDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcbiAgICAgICAgICAgIF9tb2R1bGVzW2kgJSAzICsgX21vZHVsZUNvdW50IC0gOCAtIDNdW01hdGguZmxvb3IoaSAvIDMpXSA9IG1vZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gXHJcbiAgICB2YXIgc2V0dXBUeXBlSW5mbyA9IGZ1bmN0aW9uKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcbiBcclxuICAgICAgICB2YXIgZGF0YSA9IChfZXJyb3JDb3JyZWN0TGV2ZWwgPDwgMykgfCBtYXNrUGF0dGVybjtcclxuICAgICAgICB2YXIgYml0cyA9IFFSVXRpbC5nZXRCQ0hUeXBlSW5mbyhkYXRhKTtcclxuIFxyXG4gICAgICAgIC8vIHZlcnRpY2FsXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSArPSAxKSB7XHJcbiBcclxuICAgICAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcbiBcclxuICAgICAgICAgICAgaWYgKGkgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICBfbW9kdWxlc1tpXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgX21vZHVsZXNbaSArIDFdWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX21vZHVsZXNbX21vZHVsZUNvdW50IC0gMTUgKyBpXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIC8vIGhvcml6b250YWxcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpICs9IDEpIHtcclxuIFxyXG4gICAgICAgICAgICB2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuIFxyXG4gICAgICAgICAgICBpZiAoaSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIF9tb2R1bGVzWzhdW19tb2R1bGVDb3VudCAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgX21vZHVsZXNbOF1bMTUgLSBpIC0gMSArIDFdID0gbW9kO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX21vZHVsZXNbOF1bMTUgLSBpIC0gMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICAvLyBmaXhlZCBtb2R1bGVcclxuICAgICAgICBfbW9kdWxlc1tfbW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICB2YXIgbWFwRGF0YSA9IGZ1bmN0aW9uKGRhdGEsIG1hc2tQYXR0ZXJuKSB7XHJcbiBcclxuICAgICAgICB2YXIgaW5jID0gLTE7XHJcbiAgICAgICAgdmFyIHJvdyA9IF9tb2R1bGVDb3VudCAtIDE7XHJcbiAgICAgICAgdmFyIGJpdEluZGV4ID0gNztcclxuICAgICAgICB2YXIgYnl0ZUluZGV4ID0gMDtcclxuICAgICAgICB2YXIgbWFza0Z1bmMgPSBRUlV0aWwuZ2V0TWFza0Z1bmN0aW9uKG1hc2tQYXR0ZXJuKTtcclxuIFxyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IF9tb2R1bGVDb3VudCAtIDE7IGNvbCA+IDA7IGNvbCAtPSAyKSB7XHJcbiBcclxuICAgICAgICAgICAgaWYgKGNvbCA9PSA2KSBjb2wgLT0gMTtcclxuIFxyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IDI7IGMgKz0gMSkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9tb2R1bGVzW3Jvd11bY29sIC0gY10gPT0gbnVsbCkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXJrID0gZmFsc2U7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gKCAoIChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2sgPSBtYXNrRnVuYyhyb3csIGNvbCAtIGMpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gIWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbW9kdWxlc1tyb3ddW2NvbCAtIGNdID0gZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXggLT0gMTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0SW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXggPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgICAgICByb3cgKz0gaW5jO1xyXG4gXHJcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCBfbW9kdWxlQ291bnQgPD0gcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93IC09IGluYztcclxuICAgICAgICAgICAgICAgICAgICBpbmMgPSAtaW5jO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuIFxyXG4gICAgdmFyIGNyZWF0ZUJ5dGVzID0gZnVuY3Rpb24oYnVmZmVyLCByc0Jsb2Nrcykge1xyXG4gXHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiBcclxuICAgICAgICB2YXIgbWF4RGNDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIG1heEVjQ291bnQgPSAwO1xyXG4gXHJcbiAgICAgICAgdmFyIGRjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xyXG4gICAgICAgIHZhciBlY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcclxuIFxyXG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByICs9IDEpIHtcclxuIFxyXG4gICAgICAgICAgICB2YXIgZGNDb3VudCA9IHJzQmxvY2tzW3JdLmRhdGFDb3VudDtcclxuICAgICAgICAgICAgdmFyIGVjQ291bnQgPSByc0Jsb2Nrc1tyXS50b3RhbENvdW50IC0gZGNDb3VudDtcclxuIFxyXG4gICAgICAgICAgICBtYXhEY0NvdW50ID0gTWF0aC5tYXgobWF4RGNDb3VudCwgZGNDb3VudCk7XHJcbiAgICAgICAgICAgIG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcclxuIFxyXG4gICAgICAgICAgICBkY2RhdGFbcl0gPSBuZXcgQXJyYXkoZGNDb3VudCk7XHJcbiBcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGRjZGF0YVtyXVtpXSA9IDB4ZmYgJiBidWZmZXIuZ2V0QnVmZmVyKClbaSArIG9mZnNldF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGRjQ291bnQ7XHJcbiBcclxuICAgICAgICAgICAgdmFyIHJzUG9seSA9IFFSVXRpbC5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVjQ291bnQpO1xyXG4gICAgICAgICAgICB2YXIgcmF3UG9seSA9IHFyUG9seW5vbWlhbChkY2RhdGFbcl0sIHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG4gXHJcbiAgICAgICAgICAgIHZhciBtb2RQb2x5ID0gcmF3UG9seS5tb2QocnNQb2x5KTtcclxuICAgICAgICAgICAgZWNkYXRhW3JdID0gbmV3IEFycmF5KHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vZEluZGV4ID0gaSArIG1vZFBvbHkuZ2V0TGVuZ3RoKCkgLSBlY2RhdGFbcl0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZWNkYXRhW3JdW2ldID0gKG1vZEluZGV4ID49IDApPyBtb2RQb2x5LmdldEF0KG1vZEluZGV4KSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICB2YXIgdG90YWxDb2RlQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0udG90YWxDb3VudDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBBcnJheSh0b3RhbENvZGVDb3VudCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4RGNDb3VudDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgZGNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gZGNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgciArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XSA9IGVjZGF0YVtyXVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gXHJcbiAgICB2YXIgY3JlYXRlRGF0YSA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsLCBkYXRhTGlzdCkge1xyXG4gXHJcbiAgICAgICAgdmFyIHJzQmxvY2tzID0gUVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuIFxyXG4gICAgICAgIHZhciBidWZmZXIgPSBxckJpdEJ1ZmZlcigpO1xyXG4gXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IGRhdGFMaXN0W2ldO1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TW9kZSgpLCA0KTtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEuZ2V0TW9kZSgpLCB0eXBlTnVtYmVyKSApO1xyXG4gICAgICAgICAgICBkYXRhLndyaXRlKGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gY2FsYyBudW0gbWF4IGRhdGEuXHJcbiAgICAgICAgdmFyIHRvdGFsRGF0YUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29kZSBsZW5ndGggb3ZlcmZsb3cuICgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdG90YWxEYXRhQ291bnQgKiA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArICcpJyk7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gZW5kIGNvZGVcclxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCgwLCA0KTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICAvLyBwYWRkaW5nXHJcbiAgICAgICAgd2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT0gMCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0Qml0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICAvLyBwYWRkaW5nXHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuIFxyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyLnB1dChQQUQwLCA4KTtcclxuIFxyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyLnB1dChQQUQxLCA4KTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcyk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5hZGREYXRhID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHZhciBuZXdEYXRhID0gcXI4Qml0Qnl0ZShkYXRhKTtcclxuICAgICAgICBfZGF0YUxpc3QucHVzaChuZXdEYXRhKTtcclxuICAgICAgICBfZGF0YUNhY2hlID0gbnVsbDtcclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLmlzRGFyayA9IGZ1bmN0aW9uKHJvdywgY29sKSB7XHJcbiAgICAgICAgaWYgKHJvdyA8IDAgfHwgX21vZHVsZUNvdW50IDw9IHJvdyB8fCBjb2wgPCAwIHx8IF9tb2R1bGVDb3VudCA8PSBjb2wpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJvdyArICcsJyArIGNvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfbW9kdWxlc1tyb3ddW2NvbF07XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXRNb2R1bGVDb3VudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfbW9kdWxlQ291bnQ7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5tYWtlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWFrZUltcGwoZmFsc2UsIGdldEJlc3RNYXNrUGF0dGVybigpICk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5jcmVhdGVUYWJsZVRhZyA9IGZ1bmN0aW9uKGNlbGxTaXplLCBtYXJnaW4pIHtcclxuIFxyXG4gICAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMjtcclxuICAgICAgICBtYXJnaW4gPSAodHlwZW9mIG1hcmdpbiA9PSAndW5kZWZpbmVkJyk/IGNlbGxTaXplICogNCA6IG1hcmdpbjtcclxuIFxyXG4gICAgICAgIHZhciBxckh0bWwgPSAnJztcclxuIFxyXG4gICAgICAgIHFySHRtbCArPSAnPHRhYmxlIHN0eWxlPVwiJztcclxuICAgICAgICBxckh0bWwgKz0gJyBib3JkZXItd2lkdGg6IDBweDsgYm9yZGVyLXN0eWxlOiBub25lOyc7XHJcbiAgICAgICAgcXJIdG1sICs9ICcgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsnO1xyXG4gICAgICAgIHFySHRtbCArPSAnIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAnICsgbWFyZ2luICsgJ3B4Oyc7XHJcbiAgICAgICAgcXJIdG1sICs9ICdcIj4nO1xyXG4gICAgICAgIHFySHRtbCArPSAnPHRib2R5Pic7XHJcbiBcclxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IHIgKz0gMSkge1xyXG4gXHJcbiAgICAgICAgICAgIHFySHRtbCArPSAnPHRyPic7XHJcbiBcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBfdGhpcy5nZXRNb2R1bGVDb3VudCgpOyBjICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIHFySHRtbCArPSAnPHRkIHN0eWxlPVwiJztcclxuICAgICAgICAgICAgICAgIHFySHRtbCArPSAnIGJvcmRlci13aWR0aDogMHB4OyBib3JkZXItc3R5bGU6IG5vbmU7JztcclxuICAgICAgICAgICAgICAgIHFySHRtbCArPSAnIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7JztcclxuICAgICAgICAgICAgICAgIHFySHRtbCArPSAnIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7JztcclxuICAgICAgICAgICAgICAgIHFySHRtbCArPSAnIHdpZHRoOiAnICsgY2VsbFNpemUgKyAncHg7JztcclxuICAgICAgICAgICAgICAgIHFySHRtbCArPSAnIGhlaWdodDogJyArIGNlbGxTaXplICsgJ3B4Oyc7XHJcbiAgICAgICAgICAgICAgICBxckh0bWwgKz0gJyBiYWNrZ3JvdW5kLWNvbG9yOiAnO1xyXG4gICAgICAgICAgICAgICAgcXJIdG1sICs9IF90aGlzLmlzRGFyayhyLCBjKT8gJyMwMDAwMDAnIDogJyNmZmZmZmYnO1xyXG4gICAgICAgICAgICAgICAgcXJIdG1sICs9ICc7JztcclxuICAgICAgICAgICAgICAgIHFySHRtbCArPSAnXCIvPic7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICBxckh0bWwgKz0gJzwvdHI+JztcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBxckh0bWwgKz0gJzwvdGJvZHk+JztcclxuICAgICAgICBxckh0bWwgKz0gJzwvdGFibGU+JztcclxuIFxyXG4gICAgICAgIHJldHVybiBxckh0bWw7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5jcmVhdGVJbWdUYWcgPSBmdW5jdGlvbihjZWxsU2l6ZSwgbWFyZ2luLCBzaXplKSB7XHJcbiBcclxuICAgICAgICBjZWxsU2l6ZSA9IGNlbGxTaXplIHx8IDI7XHJcbiAgICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDQgOiBtYXJnaW47XHJcbiBcclxuICAgICAgICB2YXIgbWluID0gbWFyZ2luO1xyXG4gICAgICAgIHZhciBtYXggPSBfdGhpcy5nZXRNb2R1bGVDb3VudCgpICogY2VsbFNpemUgKyBtYXJnaW47XHJcbiBcclxuICAgICAgICByZXR1cm4gY3JlYXRlSW1nVGFnKHNpemUsIHNpemUsIGZ1bmN0aW9uKHgsIHkpIHtcclxuICAgICAgICAgICAgaWYgKG1pbiA8PSB4ICYmIHggPCBtYXggJiYgbWluIDw9IHkgJiYgeSA8IG1heCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBNYXRoLmZsb29yKCAoeCAtIG1pbikgLyBjZWxsU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoICh5IC0gbWluKSAvIGNlbGxTaXplKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5pc0RhcmsociwgYyk/IDAgOiAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICByZXR1cm4gX3RoaXM7XHJcbn07XHJcbiBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gcXJjb2RlLnN0cmluZ1RvQnl0ZXNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG5xcmNvZGUuc3RyaW5nVG9CeXRlcyA9IGZ1bmN0aW9uKHMpIHtcclxuICAgIHZhciBieXRlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgdmFyIGMgPSBzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgYnl0ZXMucHVzaChjICYgMHhmZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnl0ZXM7XHJcbn07XHJcbiBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gcXJjb2RlLmNyZWF0ZVN0cmluZ1RvQnl0ZXNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG4vKipcclxuICogQHBhcmFtIHVuaWNvZGVEYXRhIGJhc2U2NCBzdHJpbmcgb2YgYnl0ZSBhcnJheS5cclxuICogWzE2Yml0IFVuaWNvZGVdLFsxNmJpdCBCeXRlc10sIC4uLlxyXG4gKiBAcGFyYW0gbnVtQ2hhcnNcclxuICovXHJcbnFyY29kZS5jcmVhdGVTdHJpbmdUb0J5dGVzID0gZnVuY3Rpb24odW5pY29kZURhdGEsIG51bUNoYXJzKSB7XHJcbiBcclxuICAgIC8vIGNyZWF0ZSBjb252ZXJzaW9uIG1hcC5cclxuIFxyXG4gICAgdmFyIHVuaWNvZGVNYXAgPSBmdW5jdGlvbigpIHtcclxuIFxyXG4gICAgICAgIHZhciBiaW4gPSBiYXNlNjREZWNvZGVJbnB1dFN0cmVhbSh1bmljb2RlRGF0YSk7XHJcbiAgICAgICAgdmFyIHJlYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGIgPSBiaW4ucmVhZCgpO1xyXG4gICAgICAgICAgICBpZiAoYiA9PSAtMSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgIH07XHJcbiBcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgIHZhciB1bmljb2RlTWFwID0ge307XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGIwID0gYmluLnJlYWQoKTtcclxuICAgICAgICAgICAgaWYgKGIwID09IC0xKSBicmVhaztcclxuICAgICAgICAgICAgdmFyIGIxID0gcmVhZCgpO1xyXG4gICAgICAgICAgICB2YXIgYjIgPSByZWFkKCk7XHJcbiAgICAgICAgICAgIHZhciBiMyA9IHJlYWQoKTtcclxuICAgICAgICAgICAgdmFyIGsgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCAoYjAgPDwgOCkgfCBiMSk7XHJcbiAgICAgICAgICAgIHZhciB2ID0gKGIyIDw8IDgpIHwgYjM7XHJcbiAgICAgICAgICAgIHVuaWNvZGVNYXBba10gPSB2O1xyXG4gICAgICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY291bnQgIT0gbnVtQ2hhcnMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvdW50ICsgJyAhPSAnICsgbnVtQ2hhcnMpO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiB1bmljb2RlTWFwO1xyXG4gICAgfSgpO1xyXG4gXHJcbiAgICB2YXIgdW5rbm93bkNoYXIgPSAnPycuY2hhckNvZGVBdCgwKTtcclxuIFxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHMpIHtcclxuICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIGMgPSBzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICBieXRlcy5wdXNoKGMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB1bmljb2RlTWFwW3MuY2hhckF0KGkpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYiA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggKGIgJiAweGZmKSA9PSBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDFieXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMmJ5dGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goYiA+Pj4gOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzLnB1c2goYiAmIDB4ZmYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXMucHVzaCh1bmtub3duQ2hhcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ5dGVzO1xyXG4gICAgfTtcclxufTtcclxuIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUk1vZGVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG52YXIgUVJNb2RlID0ge1xyXG4gICAgTU9ERV9OVU1CRVIgOiAgICAgICAgICAgICAgICAxIDw8IDAsXHJcbiAgICBNT0RFX0FMUEhBX05VTSA6ICAgICAgICAgMSA8PCAxLFxyXG4gICAgTU9ERV84QklUX0JZVEUgOiAgICAgICAgIDEgPDwgMixcclxuICAgIE1PREVfS0FOSkkgOiAgICAgICAgICAgICAgICAxIDw8IDNcclxufTtcclxuIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUkVycm9yQ29ycmVjdExldmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBcclxudmFyIFFSRXJyb3JDb3JyZWN0TGV2ZWwgPSB7XHJcbiAgICBMIDogMSxcclxuICAgIE0gOiAwLFxyXG4gICAgUSA6IDMsXHJcbiAgICBIIDogMlxyXG59O1xyXG4gXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSTWFza1BhdHRlcm5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG52YXIgUVJNYXNrUGF0dGVybiA9IHtcclxuICAgIFBBVFRFUk4wMDAgOiAwLFxyXG4gICAgUEFUVEVSTjAwMSA6IDEsXHJcbiAgICBQQVRURVJOMDEwIDogMixcclxuICAgIFBBVFRFUk4wMTEgOiAzLFxyXG4gICAgUEFUVEVSTjEwMCA6IDQsXHJcbiAgICBQQVRURVJOMTAxIDogNSxcclxuICAgIFBBVFRFUk4xMTAgOiA2LFxyXG4gICAgUEFUVEVSTjExMSA6IDdcclxufTtcclxuIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUlV0aWxcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG52YXIgUVJVdGlsID0gZnVuY3Rpb24oKSB7XHJcbiBcclxuICAgIHZhciBQQVRURVJOX1BPU0lUSU9OX1RBQkxFID0gW1xyXG4gICAgICAgIFtdLFxyXG4gICAgICAgIFs2LCAxOF0sXHJcbiAgICAgICAgWzYsIDIyXSxcclxuICAgICAgICBbNiwgMjZdLFxyXG4gICAgICAgIFs2LCAzMF0sXHJcbiAgICAgICAgWzYsIDM0XSxcclxuICAgICAgICBbNiwgMjIsIDM4XSxcclxuICAgICAgICBbNiwgMjQsIDQyXSxcclxuICAgICAgICBbNiwgMjYsIDQ2XSxcclxuICAgICAgICBbNiwgMjgsIDUwXSxcclxuICAgICAgICBbNiwgMzAsIDU0XSxcclxuICAgICAgICBbNiwgMzIsIDU4XSxcclxuICAgICAgICBbNiwgMzQsIDYyXSxcclxuICAgICAgICBbNiwgMjYsIDQ2LCA2Nl0sXHJcbiAgICAgICAgWzYsIDI2LCA0OCwgNzBdLFxyXG4gICAgICAgIFs2LCAyNiwgNTAsIDc0XSxcclxuICAgICAgICBbNiwgMzAsIDU0LCA3OF0sXHJcbiAgICAgICAgWzYsIDMwLCA1NiwgODJdLFxyXG4gICAgICAgIFs2LCAzMCwgNTgsIDg2XSxcclxuICAgICAgICBbNiwgMzQsIDYyLCA5MF0sXHJcbiAgICAgICAgWzYsIDI4LCA1MCwgNzIsIDk0XSxcclxuICAgICAgICBbNiwgMjYsIDUwLCA3NCwgOThdLFxyXG4gICAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDJdLFxyXG4gICAgICAgIFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxyXG4gICAgICAgIFs2LCAzMiwgNTgsIDg0LCAxMTBdLFxyXG4gICAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxyXG4gICAgICAgIFs2LCAzNCwgNjIsIDkwLCAxMThdLFxyXG4gICAgICAgIFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSxcclxuICAgICAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxyXG4gICAgICAgIFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXHJcbiAgICAgICAgWzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcclxuICAgICAgICBbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdLFxyXG4gICAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXHJcbiAgICAgICAgWzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcclxuICAgICAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXHJcbiAgICAgICAgWzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxyXG4gICAgICAgIFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcclxuICAgICAgICBbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXHJcbiAgICAgICAgWzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxyXG4gICAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXVxyXG4gICAgXTtcclxuICAgIHZhciBHMTUgPSAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMCk7XHJcbiAgICB2YXIgRzE4ID0gKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKTtcclxuICAgIHZhciBHMTVfTUFTSyA9ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDQpIHwgKDEgPDwgMSk7XHJcbiBcclxuICAgIHZhciBfdGhpcyA9IHt9O1xyXG4gXHJcbiAgICB2YXIgZ2V0QkNIRGlnaXQgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdmFyIGRpZ2l0ID0gMDtcclxuICAgICAgICB3aGlsZSAoZGF0YSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGRpZ2l0ICs9IDE7XHJcbiAgICAgICAgICAgIGRhdGEgPj4+PSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnaXQ7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXRCQ0hUeXBlSW5mbyA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB2YXIgZCA9IGRhdGEgPDwgMTA7XHJcbiAgICAgICAgd2hpbGUgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE1KSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGQgXj0gKEcxNSA8PCAoZ2V0QkNIRGlnaXQoZCkgLSBnZXRCQ0hEaWdpdChHMTUpICkgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICggKGRhdGEgPDwgMTApIHwgZCkgXiBHMTVfTUFTSztcclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLmdldEJDSFR5cGVOdW1iZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdmFyIGQgPSBkYXRhIDw8IDEyO1xyXG4gICAgICAgIHdoaWxlIChnZXRCQ0hEaWdpdChkKSAtIGdldEJDSERpZ2l0KEcxOCkgPj0gMCkge1xyXG4gICAgICAgICAgICBkIF49IChHMTggPDwgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE4KSApICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoZGF0YSA8PCAxMikgfCBkO1xyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMuZ2V0UGF0dGVyblBvc2l0aW9uID0gZnVuY3Rpb24odHlwZU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBQQVRURVJOX1BPU0lUSU9OX1RBQkxFW3R5cGVOdW1iZXIgLSAxXTtcclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLmdldE1hc2tGdW5jdGlvbiA9IGZ1bmN0aW9uKG1hc2tQYXR0ZXJuKSB7XHJcbiBcclxuICAgICAgICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XHJcbiBcclxuICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDAgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIChpICsgaikgJSAyID09IDA7IH07XHJcbiAgICAgICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAxIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiBpICUgMiA9PSAwOyB9O1xyXG4gICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMCA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gaiAlIDMgPT0gMDsgfTtcclxuICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTEgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIChpICsgaikgJSAzID09IDA7IH07XHJcbiAgICAgICAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAwIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoTWF0aC5mbG9vcihpIC8gMikgKyBNYXRoLmZsb29yKGogLyAzKSApICUgMiA9PSAwOyB9O1xyXG4gICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMSA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PSAwOyB9O1xyXG4gICAgICAgICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMCA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gKCAoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT0gMDsgfTtcclxuICAgICAgICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTEgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuICggKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09IDA7IH07XHJcbiBcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgbWFza1BhdHRlcm46JyArIG1hc2tQYXR0ZXJuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsID0gZnVuY3Rpb24oZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGEgPSBxclBvbHlub21pYWwoWzFdLCAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGEgPSBhLm11bHRpcGx5KHFyUG9seW5vbWlhbChbMSwgUVJNYXRoLmdleHAoaSldLCAwKSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLmdldExlbmd0aEluQml0cyA9IGZ1bmN0aW9uKG1vZGUsIHR5cGUpIHtcclxuIFxyXG4gICAgICAgIGlmICgxIDw9IHR5cGUgJiYgdHlwZSA8IDEwKSB7XHJcbiBcclxuICAgICAgICAgICAgLy8gMSAtIDlcclxuIFxyXG4gICAgICAgICAgICBzd2l0Y2gobW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9OVU1CRVIgICAgICAgICA6IHJldHVybiAxMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNICAgICAgICAgOiByZXR1cm4gOTtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFICAgICAgICA6IHJldHVybiA4O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9LQU5KSSAgICAgICAgICAgICAgICA6IHJldHVybiA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbW9kZTonICsgbW9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA8IDI3KSB7XHJcbiBcclxuICAgICAgICAgICAgLy8gMTAgLSAyNlxyXG4gXHJcbiAgICAgICAgICAgIHN3aXRjaChtb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX05VTUJFUiAgICAgICAgIDogcmV0dXJuIDEyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU0gICAgICAgICA6IHJldHVybiAxMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFICAgICAgICA6IHJldHVybiAxNjtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfS0FOSkkgICAgICAgICAgICAgICAgOiByZXR1cm4gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2RlOicgKyBtb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlIDwgNDEpIHtcclxuIFxyXG4gICAgICAgICAgICAvLyAyNyAtIDQwXHJcbiBcclxuICAgICAgICAgICAgc3dpdGNoKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSICAgICAgICAgOiByZXR1cm4gMTQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTSAgICAgICAgOiByZXR1cm4gMTM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURSAgICAgICAgOiByZXR1cm4gMTY7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICAgICAgICAgICAgICAgIDogcmV0dXJuIDEyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbW9kZTonICsgbW9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndHlwZTonICsgdHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMuZ2V0TG9zdFBvaW50ID0gZnVuY3Rpb24ocXJjb2RlKSB7XHJcbiBcclxuICAgICAgICB2YXIgbW9kdWxlQ291bnQgPSBxcmNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcclxuIFxyXG4gICAgICAgIHZhciBsb3N0UG9pbnQgPSAwO1xyXG4gXHJcbiAgICAgICAgLy8gTEVWRUwxXHJcbiBcclxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93ICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCArPSAxKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgIHZhciBzYW1lQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhcmsgPSBxcmNvZGUuaXNEYXJrKHJvdywgY29sKTtcclxuIFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IC0xOyByIDw9IDE7IHIgKz0gMSkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyArIHIgPCAwIHx8IG1vZHVsZUNvdW50IDw9IHJvdyArIHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDE7IGMgKz0gMSkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBjIDwgMCB8fCBtb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID09IDAgJiYgYyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXJrID09IHFyY29kZS5pc0Rhcmsocm93ICsgciwgY29sICsgYykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICAgICAgaWYgKHNhbWVDb3VudCA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiBcclxuICAgICAgICAvLyBMRVZFTDJcclxuIFxyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gMTsgcm93ICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSAxOyBjb2wgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sKSApIGNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpICkgY291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgMSkgKSBjb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkgKSBjb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IDAgfHwgY291bnQgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gTEVWRUwzXHJcbiBcclxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93ICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSA2OyBjb2wgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgMilcclxuICAgICAgICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3csIGNvbCArIDMpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyA0KVxyXG4gICAgICAgICAgICAgICAgICAgICYmICFxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgNSlcclxuICAgICAgICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3csIGNvbCArIDYpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSA0MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wgKz0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdyArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3csIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhcXJjb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93ICsgMiwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdyArIDMsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyA0LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXFyY29kZS5pc0Rhcmsocm93ICsgNSwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdyArIDYsIGNvbCkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gTEVWRUw0XHJcbiBcclxuICAgICAgICB2YXIgZGFya0NvdW50ID0gMDtcclxuIFxyXG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wgKz0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXJrQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHZhciByYXRpbyA9IE1hdGguYWJzKDEwMCAqIGRhcmtDb3VudCAvIG1vZHVsZUNvdW50IC8gbW9kdWxlQ291bnQgLSA1MCkgLyA1O1xyXG4gICAgICAgIGxvc3RQb2ludCArPSByYXRpbyAqIDEwO1xyXG4gXHJcbiAgICAgICAgcmV0dXJuIGxvc3RQb2ludDtcclxuICAgIH07XHJcbiBcclxuICAgIHJldHVybiBfdGhpcztcclxufSgpO1xyXG4gXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSTWF0aFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gXHJcbnZhciBRUk1hdGggPSBmdW5jdGlvbigpIHtcclxuIFxyXG4gICAgdmFyIEVYUF9UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xyXG4gICAgdmFyIExPR19UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xyXG4gXHJcbiAgICAvLyBpbml0aWFsaXplIHRhYmxlc1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpICs9IDEpIHtcclxuICAgICAgICBFWFBfVEFCTEVbaV0gPSAxIDw8IGk7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gODsgaSA8IDI1NjsgaSArPSAxKSB7XHJcbiAgICAgICAgRVhQX1RBQkxFW2ldID0gRVhQX1RBQkxFW2kgLSA0XVxyXG4gICAgICAgICAgICBeIEVYUF9UQUJMRVtpIC0gNV1cclxuICAgICAgICAgICAgXiBFWFBfVEFCTEVbaSAtIDZdXHJcbiAgICAgICAgICAgIF4gRVhQX1RBQkxFW2kgLSA4XTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU1OyBpICs9IDEpIHtcclxuICAgICAgICBMT0dfVEFCTEVbRVhQX1RBQkxFW2ldIF0gPSBpO1xyXG4gICAgfVxyXG4gXHJcbiAgICB2YXIgX3RoaXMgPSB7fTtcclxuIFxyXG4gICAgX3RoaXMuZ2xvZyA9IGZ1bmN0aW9uKG4pIHtcclxuIFxyXG4gICAgICAgIGlmIChuIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsb2coJyArIG4gKyAnKScpO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiBMT0dfVEFCTEVbbl07XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXhwID0gZnVuY3Rpb24obikge1xyXG4gXHJcbiAgICAgICAgd2hpbGUgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIG4gKz0gMjU1O1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHdoaWxlIChuID49IDI1Nikge1xyXG4gICAgICAgICAgICBuIC09IDI1NTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gRVhQX1RBQkxFW25dO1xyXG4gICAgfTtcclxuIFxyXG4gICAgcmV0dXJuIF90aGlzO1xyXG59KCk7XHJcbiBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gcXJQb2x5bm9taWFsXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBcclxuZnVuY3Rpb24gcXJQb2x5bm9taWFsKG51bSwgc2hpZnQpIHtcclxuIFxyXG4gICAgaWYgKHR5cGVvZiBudW0ubGVuZ3RoID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG51bS5sZW5ndGggKyAnLycgKyBzaGlmdCk7XHJcbiAgICB9XHJcbiBcclxuICAgIHZhciBfbnVtID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IG51bS5sZW5ndGggJiYgbnVtW29mZnNldF0gPT0gMCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9udW0gPSBuZXcgQXJyYXkobnVtLmxlbmd0aCAtIG9mZnNldCArIHNoaWZ0KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGggLSBvZmZzZXQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBfbnVtW2ldID0gbnVtW2kgKyBvZmZzZXRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX251bTtcclxuICAgIH0oKTtcclxuIFxyXG4gICAgdmFyIF90aGlzID0ge307XHJcbiBcclxuICAgIF90aGlzLmdldEF0ID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gX251bVtpbmRleF07XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXRMZW5ndGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX251bS5sZW5ndGg7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5tdWx0aXBseSA9IGZ1bmN0aW9uKGUpIHtcclxuIFxyXG4gICAgICAgIHZhciBudW0gPSBuZXcgQXJyYXkoX3RoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMSk7XHJcbiBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmdldExlbmd0aCgpOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlLmdldExlbmd0aCgpOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIG51bVtpICsgal0gXj0gUVJNYXRoLmdleHAoUVJNYXRoLmdsb2coX3RoaXMuZ2V0QXQoaSkgKSArIFFSTWF0aC5nbG9nKGUuZ2V0QXQoaikgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIHFyUG9seW5vbWlhbChudW0sIDApO1xyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMubW9kID0gZnVuY3Rpb24oZSkge1xyXG4gXHJcbiAgICAgICAgaWYgKF90aGlzLmdldExlbmd0aCgpIC0gZS5nZXRMZW5ndGgoKSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHZhciByYXRpbyA9IFFSTWF0aC5nbG9nKF90aGlzLmdldEF0KDApICkgLSBRUk1hdGguZ2xvZyhlLmdldEF0KDApICk7XHJcbiBcclxuICAgICAgICB2YXIgbnVtID0gbmV3IEFycmF5KF90aGlzLmdldExlbmd0aCgpICk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIG51bVtpXSA9IF90aGlzLmdldEF0KGkpO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIG51bVtpXSBePSBRUk1hdGguZ2V4cChRUk1hdGguZ2xvZyhlLmdldEF0KGkpICkgKyByYXRpbyk7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gcmVjdXJzaXZlIGNhbGxcclxuICAgICAgICByZXR1cm4gcXJQb2x5bm9taWFsKG51bSwgMCkubW9kKGUpO1xyXG4gICAgfTtcclxuIFxyXG4gICAgcmV0dXJuIF90aGlzO1xyXG59O1xyXG4gXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSUlNCbG9ja1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gXHJcbnZhciBRUlJTQmxvY2sgPSBmdW5jdGlvbigpIHtcclxuIFxyXG4gXHJcbiAgICAvLyBbMTogW0wsIE0sIFEsIEhdLCAuLl1cclxuICAgIHZhciBSU19CTE9DS19UQUJMRT1bWzEsMjYsMTldLFsxLDI2LDE2XSxbMSwyNiwxM10sWzEsMjYsOV0sWzEsNDQsMzRdLFsxLDQ0LDI4XSxbMSw0NCwyMl0sWzEsNDQsMTZdLFsxLDcwLDU1XSxbMSw3MCw0NF0sWzIsMzUsMTddLFsyLDM1LDEzXSxbMSwxMDAsODBdLFsyLDUwLDMyXSxbMiw1MCwyNF0sWzQsMjUsOV0sWzEsMTM0LDEwOF0sWzIsNjcsNDNdLFsyLDMzLDE1LDIsMzQsMTZdLFsyLDMzLDExLDIsMzQsMTJdLFsyLDg2LDY4XSxbNCw0MywyN10sWzQsNDMsMTldLFs0LDQzLDE1XSxbMiw5OCw3OF0sWzQsNDksMzFdLFsyLDMyLDE0LDQsMzMsMTVdLFs0LDM5LDEzLDEsNDAsMTRdLFsyLDEyMSw5N10sWzIsNjAsMzgsMiw2MSwzOV0sWzQsNDAsMTgsMiw0MSwxOV0sWzQsNDAsMTQsMiw0MSwxNV0sWzIsMTQ2LDExNl0sWzMsNTgsMzYsMiw1OSwzN10sWzQsMzYsMTYsNCwzNywxN10sWzQsMzYsMTIsNCwzNywxM10sWzIsODYsNjgsMiw4Nyw2OV0sWzQsNjksNDMsMSw3MCw0NF0sWzYsNDMsMTksMiw0NCwyMF0sWzYsNDMsMTUsMiw0NCwxNl0sWzQsMTAxLDgxXSxbMSw4MCw1MCw0LDgxLDUxXSxbNCw1MCwyMiw0LDUxLDIzXSxbMywzNiwxMiw4LDM3LDEzXSxbMiwxMTYsOTIsMiwxMTcsOTNdLFs2LDU4LDM2LDIsNTksMzddLFs0LDQ2LDIwLDYsNDcsMjFdLFs3LDQyLDE0LDQsNDMsMTVdLFs0LDEzMywxMDddLFs4LDU5LDM3LDEsNjAsMzhdLFs4LDQ0LDIwLDQsNDUsMjFdLFsxMiwzMywxMSw0LDM0LDEyXSxbMywxNDUsMTE1LDEsMTQ2LDExNl0sWzQsNjQsNDAsNSw2NSw0MV0sWzExLDM2LDE2LDUsMzcsMTddLFsxMSwzNiwxMiw1LDM3LDEzXSxbNSwxMDksODcsMSwxMTAsODhdLFs1LDY1LDQxLDUsNjYsNDJdLFs1LDU0LDI0LDcsNTUsMjVdLFsxMSwzNiwxMl0sWzUsMTIyLDk4LDEsMTIzLDk5XSxbNyw3Myw0NSwzLDc0LDQ2XSxbMTUsNDMsMTksMiw0NCwyMF0sWzMsNDUsMTUsMTMsNDYsMTZdLFsxLDEzNSwxMDcsNSwxMzYsMTA4XSxbMTAsNzQsNDYsMSw3NSw0N10sWzEsNTAsMjIsMTUsNTEsMjNdLFsyLDQyLDE0LDE3LDQzLDE1XSxbNSwxNTAsMTIwLDEsMTUxLDEyMV0sWzksNjksNDMsNCw3MCw0NF0sWzE3LDUwLDIyLDEsNTEsMjNdLFsyLDQyLDE0LDE5LDQzLDE1XSxbMywxNDEsMTEzLDQsMTQyLDExNF0sWzMsNzAsNDQsMTEsNzEsNDVdLFsxNyw0NywyMSw0LDQ4LDIyXSxbOSwzOSwxMywxNiw0MCwxNF0sWzMsMTM1LDEwNyw1LDEzNiwxMDhdLFszLDY3LDQxLDEzLDY4LDQyXSxbMTUsNTQsMjQsNSw1NSwyNV0sWzE1LDQzLDE1LDEwLDQ0LDE2XSxbNCwxNDQsMTE2LDQsMTQ1LDExN10sWzE3LDY4LDQyXSxbMTcsNTAsMjIsNiw1MSwyM10sWzE5LDQ2LDE2LDYsNDcsMTddLFsyLDEzOSwxMTEsNywxNDAsMTEyXSxbMTcsNzQsNDZdLFs3LDU0LDI0LDE2LDU1LDI1XSxbMzQsMzcsMTNdLFs0LDE1MSwxMjEsNSwxNTIsMTIyXSxbNCw3NSw0NywxNCw3Niw0OF0sWzExLDU0LDI0LDE0LDU1LDI1XSxbMTYsNDUsMTUsMTQsNDYsMTZdLFs2LDE0NywxMTcsNCwxNDgsMTE4XSxbNiw3Myw0NSwxNCw3NCw0Nl0sWzExLDU0LDI0LDE2LDU1LDI1XSxbMzAsNDYsMTYsMiw0NywxN10sWzgsMTMyLDEwNiw0LDEzMywxMDddLFs4LDc1LDQ3LDEzLDc2LDQ4XSxbNyw1NCwyNCwyMiw1NSwyNV0sWzIyLDQ1LDE1LDEzLDQ2LDE2XSxbMTAsMTQyLDExNCwyLDE0MywxMTVdLFsxOSw3NCw0Niw0LDc1LDQ3XSxbMjgsNTAsMjIsNiw1MSwyM10sWzMzLDQ2LDE2LDQsNDcsMTddLFs4LDE1MiwxMjIsNCwxNTMsMTIzXSxbMjIsNzMsNDUsMyw3NCw0Nl0sWzgsNTMsMjMsMjYsNTQsMjRdLFsxMiw0NSwxNSwyOCw0NiwxNl0sWzMsMTQ3LDExNywxMCwxNDgsMTE4XSxbMyw3Myw0NSwyMyw3NCw0Nl0sWzQsNTQsMjQsMzEsNTUsMjVdLFsxMSw0NSwxNSwzMSw0NiwxNl0sWzcsMTQ2LDExNiw3LDE0NywxMTddLFsyMSw3Myw0NSw3LDc0LDQ2XSxbMSw1MywyMywzNyw1NCwyNF0sWzE5LDQ1LDE1LDI2LDQ2LDE2XSxbNSwxNDUsMTE1LDEwLDE0NiwxMTZdLFsxOSw3NSw0NywxMCw3Niw0OF0sWzE1LDU0LDI0LDI1LDU1LDI1XSxbMjMsNDUsMTUsMjUsNDYsMTZdLFsxMywxNDUsMTE1LDMsMTQ2LDExNl0sWzIsNzQsNDYsMjksNzUsNDddLFs0Miw1NCwyNCwxLDU1LDI1XSxbMjMsNDUsMTUsMjgsNDYsMTZdLFsxNywxNDUsMTE1XSxbMTAsNzQsNDYsMjMsNzUsNDddLFsxMCw1NCwyNCwzNSw1NSwyNV0sWzE5LDQ1LDE1LDM1LDQ2LDE2XSxbMTcsMTQ1LDExNSwxLDE0NiwxMTZdLFsxNCw3NCw0NiwyMSw3NSw0N10sWzI5LDU0LDI0LDE5LDU1LDI1XSxbMTEsNDUsMTUsNDYsNDYsMTZdLFsxMywxNDUsMTE1LDYsMTQ2LDExNl0sWzE0LDc0LDQ2LDIzLDc1LDQ3XSxbNDQsNTQsMjQsNyw1NSwyNV0sWzU5LDQ2LDE2LDEsNDcsMTddLFsxMiwxNTEsMTIxLDcsMTUyLDEyMl0sWzEyLDc1LDQ3LDI2LDc2LDQ4XSxbMzksNTQsMjQsMTQsNTUsMjVdLFsyMiw0NSwxNSw0MSw0NiwxNl0sWzYsMTUxLDEyMSwxNCwxNTIsMTIyXSxbNiw3NSw0NywzNCw3Niw0OF0sWzQ2LDU0LDI0LDEwLDU1LDI1XSxbMiw0NSwxNSw2NCw0NiwxNl0sWzE3LDE1MiwxMjIsNCwxNTMsMTIzXSxbMjksNzQsNDYsMTQsNzUsNDddLFs0OSw1NCwyNCwxMCw1NSwyNV0sWzI0LDQ1LDE1LDQ2LDQ2LDE2XSxbNCwxNTIsMTIyLDE4LDE1MywxMjNdLFsxMyw3NCw0NiwzMiw3NSw0N10sWzQ4LDU0LDI0LDE0LDU1LDI1XSxbNDIsNDUsMTUsMzIsNDYsMTZdLFsyMCwxNDcsMTE3LDQsMTQ4LDExOF0sWzQwLDc1LDQ3LDcsNzYsNDhdLFs0Myw1NCwyNCwyMiw1NSwyNV0sWzEwLDQ1LDE1LDY3LDQ2LDE2XSxbMTksMTQ4LDExOCw2LDE0OSwxMTldLFsxOCw3NSw0NywzMSw3Niw0OF0sWzM0LDU0LDI0LDM0LDU1LDI1XSxbMjAsNDUsMTUsNjEsNDYsMTZdXTtcclxuIFxyXG4gICAgdmFyIHFyUlNCbG9jayA9IGZ1bmN0aW9uKHRvdGFsQ291bnQsIGRhdGFDb3VudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHt9O1xyXG4gICAgICAgIF90aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG4gICAgICAgIF90aGlzLmRhdGFDb3VudCA9IGRhdGFDb3VudDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9O1xyXG4gXHJcbiAgICB2YXIgX3RoaXMgPSB7fTtcclxuIFxyXG4gICAgdmFyIGdldFJzQmxvY2tUYWJsZSA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiBcclxuICAgICAgICBzd2l0Y2goZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkwgOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XHJcbiAgICAgICAgICAgIGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5NIDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDFdO1xyXG4gICAgICAgICAgICBjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuUSA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAyXTtcclxuICAgICAgICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkggOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMuZ2V0UlNCbG9ja3MgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gXHJcbiAgICAgICAgdmFyIHJzQmxvY2sgPSBnZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gXHJcbiAgICAgICAgaWYgKHR5cGVvZiByc0Jsb2NrID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIHJzIGJsb2NrIFt1cmw9aG9tZS5waHA/bW9kPXNwYWNlJnVpZD01MzAyXUBbL3VybF0gdHlwZU51bWJlcjonICsgdHlwZU51bWJlciArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2Vycm9yQ29ycmVjdExldmVsOicgKyBlcnJvckNvcnJlY3RMZXZlbCk7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHJzQmxvY2subGVuZ3RoIC8gMztcclxuIFxyXG4gICAgICAgIHZhciBsaXN0ID0gbmV3IEFycmF5KCk7XHJcbiBcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiBcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xyXG4gICAgICAgICAgICB2YXIgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcclxuICAgICAgICAgICAgdmFyIGRhdGFDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAyXTtcclxuIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChxclJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9O1xyXG4gXHJcbiAgICByZXR1cm4gX3RoaXM7XHJcbn0oKTtcclxuIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBxckJpdEJ1ZmZlclxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gXHJcbnZhciBxckJpdEJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xyXG4gXHJcbiAgICB2YXIgX2J1ZmZlciA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIF9sZW5ndGggPSAwO1xyXG4gXHJcbiAgICB2YXIgX3RoaXMgPSB7fTtcclxuIFxyXG4gICAgX3RoaXMuZ2V0QnVmZmVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9idWZmZXI7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXRBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xyXG4gICAgICAgIHJldHVybiAoIChfYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpICkgJiAxKSA9PSAxO1xyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMucHV0ID0gZnVuY3Rpb24obnVtLCBsZW5ndGgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnB1dEJpdCggKCAobnVtID4+PiAobGVuZ3RoIC0gaSAtIDEpICkgJiAxKSA9PSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXRMZW5ndGhJbkJpdHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX2xlbmd0aDtcclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLnB1dEJpdCA9IGZ1bmN0aW9uKGJpdCkge1xyXG4gXHJcbiAgICAgICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihfbGVuZ3RoIC8gOCk7XHJcbiAgICAgICAgaWYgKF9idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XHJcbiAgICAgICAgICAgIF9idWZmZXIucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBpZiAoYml0KSB7XHJcbiAgICAgICAgICAgIF9idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAoX2xlbmd0aCAlIDgpICk7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgX2xlbmd0aCArPSAxO1xyXG4gICAgfTtcclxuIFxyXG4gICAgcmV0dXJuIF90aGlzO1xyXG59O1xyXG4gXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHFyOEJpdEJ5dGVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG52YXIgcXI4Qml0Qnl0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuIFxyXG4gICAgdmFyIF9tb2RlID0gUVJNb2RlLk1PREVfOEJJVF9CWVRFO1xyXG4gICAgdmFyIF9kYXRhID0gZGF0YTtcclxuICAgIHZhciBfcGFyc2VkRGF0YSA9IFtdO1xyXG4gXHJcbiAgICB2YXIgX3RoaXMgPSB7fTtcclxuIFxyXG4gXHJcbiAgICAvLyBBZGRlZCB0byBzdXBwb3J0IFVURi04IENoYXJhY3RlcnNcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGJ5dGVBcnJheSA9IFtdO1xyXG4gICAgICAgIHZhciBjb2RlID0gX2RhdGEuY2hhckNvZGVBdChpKTtcclxuIFxyXG4gICAgICAgIGlmIChjb2RlID4gMHgxMDAwMCkge1xyXG4gICAgICAgICAgICBieXRlQXJyYXlbMF0gPSAweEYwIHwgKChjb2RlICYgMHgxQzAwMDApID4+PiAxOCk7XHJcbiAgICAgICAgICAgIGJ5dGVBcnJheVsxXSA9IDB4ODAgfCAoKGNvZGUgJiAweDNGMDAwKSA+Pj4gMTIpO1xyXG4gICAgICAgICAgICBieXRlQXJyYXlbMl0gPSAweDgwIHwgKChjb2RlICYgMHhGQzApID4+PiA2KTtcclxuICAgICAgICAgICAgYnl0ZUFycmF5WzNdID0gMHg4MCB8IChjb2RlICYgMHgzRik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID4gMHg4MDApIHtcclxuICAgICAgICAgICAgYnl0ZUFycmF5WzBdID0gMHhFMCB8ICgoY29kZSAmIDB4RjAwMCkgPj4+IDEyKTtcclxuICAgICAgICAgICAgYnl0ZUFycmF5WzFdID0gMHg4MCB8ICgoY29kZSAmIDB4RkMwKSA+Pj4gNik7XHJcbiAgICAgICAgICAgIGJ5dGVBcnJheVsyXSA9IDB4ODAgfCAoY29kZSAmIDB4M0YpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA+IDB4ODApIHtcclxuICAgICAgICAgICAgYnl0ZUFycmF5WzBdID0gMHhDMCB8ICgoY29kZSAmIDB4N0MwKSA+Pj4gNik7XHJcbiAgICAgICAgICAgIGJ5dGVBcnJheVsxXSA9IDB4ODAgfCAoY29kZSAmIDB4M0YpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ5dGVBcnJheVswXSA9IGNvZGU7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy8gRml4IFVuaWNvZGUgY29ycnVwdGlvbiBidWdcclxuICAgICAgICBfcGFyc2VkRGF0YS5wdXNoKGJ5dGVBcnJheSk7XHJcbiAgICB9XHJcbiBcclxuICAgIF9wYXJzZWREYXRhID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgX3BhcnNlZERhdGEpO1xyXG4gXHJcbiAgICBpZiAoX3BhcnNlZERhdGEubGVuZ3RoICE9IF9kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIF9wYXJzZWREYXRhLnVuc2hpZnQoMTkxKTtcclxuICAgICAgICBfcGFyc2VkRGF0YS51bnNoaWZ0KDE4Nyk7XHJcbiAgICAgICAgX3BhcnNlZERhdGEudW5zaGlmdCgyMzkpO1xyXG4gICAgfVxyXG4gXHJcbiAgICB2YXIgX2J5dGVzID0gX3BhcnNlZERhdGE7XHJcbiBcclxuICAgIF90aGlzLmdldE1vZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX21vZGU7XHJcbiAgICB9O1xyXG4gXHJcbiAgICBfdGhpcy5nZXRMZW5ndGggPSBmdW5jdGlvbihidWZmZXIpIHtcclxuICAgICAgICByZXR1cm4gX2J5dGVzLmxlbmd0aDtcclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfYnl0ZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dChfYnl0ZXNbaV0sIDgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiBcclxuICAgIHJldHVybiBfdGhpcztcclxufTtcclxuIFxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHSUYgU3VwcG9ydCBldGMuXHJcbi8vXHJcbiBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gYnl0ZUFycmF5T3V0cHV0U3RyZWFtXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBcclxudmFyIGJ5dGVBcnJheU91dHB1dFN0cmVhbSA9IGZ1bmN0aW9uKCkge1xyXG4gXHJcbiAgICB2YXIgX2J5dGVzID0gbmV3IEFycmF5KCk7XHJcbiBcclxuICAgIHZhciBfdGhpcyA9IHt9O1xyXG4gXHJcbiAgICBfdGhpcy53cml0ZUJ5dGUgPSBmdW5jdGlvbihiKSB7XHJcbiAgICAgICAgX2J5dGVzLnB1c2goYiAmIDB4ZmYpO1xyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMud3JpdGVTaG9ydCA9IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICBfdGhpcy53cml0ZUJ5dGUoaSk7XHJcbiAgICAgICAgX3RoaXMud3JpdGVCeXRlKGkgPj4+IDgpO1xyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMud3JpdGVCeXRlcyA9IGZ1bmN0aW9uKGIsIG9mZiwgbGVuKSB7XHJcbiAgICAgICAgb2ZmID0gb2ZmIHx8IDA7XHJcbiAgICAgICAgbGVuID0gbGVuIHx8IGIubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgX3RoaXMud3JpdGVCeXRlKGJbaSArIG9mZl0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLndyaXRlU3RyaW5nID0gZnVuY3Rpb24ocykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBfdGhpcy53cml0ZUJ5dGUocy5jaGFyQ29kZUF0KGkpICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMudG9CeXRlQXJyYXkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX2J5dGVzO1xyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcyA9ICcnO1xyXG4gICAgICAgIHMgKz0gJ1snO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2J5dGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcyArPSAnLCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcyArPSBfYnl0ZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHMgKz0gJ10nO1xyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfTtcclxuIFxyXG4gICAgcmV0dXJuIF90aGlzO1xyXG59O1xyXG4gXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGJhc2U2NEVuY29kZU91dHB1dFN0cmVhbVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gXHJcbnZhciBiYXNlNjRFbmNvZGVPdXRwdXRTdHJlYW0gPSBmdW5jdGlvbigpIHtcclxuIFxyXG4gICAgdmFyIF9idWZmZXIgPSAwO1xyXG4gICAgdmFyIF9idWZsZW4gPSAwO1xyXG4gICAgdmFyIF9sZW5ndGggPSAwO1xyXG4gICAgdmFyIF9iYXNlNjQgPSAnJztcclxuIFxyXG4gICAgdmFyIF90aGlzID0ge307XHJcbiBcclxuICAgIHZhciB3cml0ZUVuY29kZWQgPSBmdW5jdGlvbihiKSB7XHJcbiAgICAgICAgX2Jhc2U2NCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGVuY29kZShiICYgMHgzZikgKTtcclxuICAgIH07XHJcbiBcclxuICAgIHZhciBlbmNvZGUgPSBmdW5jdGlvbihuKSB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIC8vIGVycm9yLlxyXG4gICAgICAgIH0gZWxzZSBpZiAobiA8IDI2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAweDQxICsgbjtcclxuICAgICAgICB9IGVsc2UgaWYgKG4gPCA1Mikge1xyXG4gICAgICAgICAgICByZXR1cm4gMHg2MSArIChuIC0gMjYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobiA8IDYyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAweDMwICsgKG4gLSA1Mik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuID09IDYyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAweDJiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobiA9PSA2Mykge1xyXG4gICAgICAgICAgICByZXR1cm4gMHgyZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduOicgKyBuKTtcclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLndyaXRlQnl0ZSA9IGZ1bmN0aW9uKG4pIHtcclxuIFxyXG4gICAgICAgIF9idWZmZXIgPSAoX2J1ZmZlciA8PCA4KSB8IChuICYgMHhmZik7XHJcbiAgICAgICAgX2J1ZmxlbiArPSA4O1xyXG4gICAgICAgIF9sZW5ndGggKz0gMTtcclxuIFxyXG4gICAgICAgIHdoaWxlIChfYnVmbGVuID49IDYpIHtcclxuICAgICAgICAgICAgd3JpdGVFbmNvZGVkKF9idWZmZXIgPj4+IChfYnVmbGVuIC0gNikgKTtcclxuICAgICAgICAgICAgX2J1ZmxlbiAtPSA2O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLmZsdXNoID0gZnVuY3Rpb24oKSB7XHJcbiBcclxuICAgICAgICBpZiAoX2J1ZmxlbiA+IDApIHtcclxuICAgICAgICAgICAgd3JpdGVFbmNvZGVkKF9idWZmZXIgPDwgKDYgLSBfYnVmbGVuKSApO1xyXG4gICAgICAgICAgICBfYnVmZmVyID0gMDtcclxuICAgICAgICAgICAgX2J1ZmxlbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgaWYgKF9sZW5ndGggJSAzICE9IDApIHtcclxuICAgICAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgICAgICB2YXIgcGFkbGVuID0gMyAtIF9sZW5ndGggJSAzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZGxlbjsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBfYmFzZTY0ICs9ICc9JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiBcclxuICAgIF90aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9iYXNlNjQ7XHJcbiAgICB9O1xyXG4gXHJcbiAgICByZXR1cm4gX3RoaXM7XHJcbn07XHJcbiBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gYmFzZTY0RGVjb2RlSW5wdXRTdHJlYW1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIFxyXG52YXIgYmFzZTY0RGVjb2RlSW5wdXRTdHJlYW0gPSBmdW5jdGlvbihzdHIpIHtcclxuIFxyXG4gICAgdmFyIF9zdHIgPSBzdHI7XHJcbiAgICB2YXIgX3BvcyA9IDA7XHJcbiAgICB2YXIgX2J1ZmZlciA9IDA7XHJcbiAgICB2YXIgX2J1ZmxlbiA9IDA7XHJcbiBcclxuICAgIHZhciBfdGhpcyA9IHt9O1xyXG4gXHJcbiAgICBfdGhpcy5yZWFkID0gZnVuY3Rpb24oKSB7XHJcbiBcclxuICAgICAgICB3aGlsZSAoX2J1ZmxlbiA8IDgpIHtcclxuIFxyXG4gICAgICAgICAgICBpZiAoX3BvcyA+PSBfc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9idWZsZW4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5leHBlY3RlZCBlbmQgb2YgZmlsZS4vJyArIF9idWZsZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgdmFyIGMgPSBfc3RyLmNoYXJBdChfcG9zKTtcclxuICAgICAgICAgICAgX3BvcyArPSAxO1xyXG4gXHJcbiAgICAgICAgICAgIGlmIChjID09ICc9Jykge1xyXG4gICAgICAgICAgICAgICAgX2J1ZmxlbiA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYy5tYXRjaCgvXlxccyQvKSApIHtcclxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBpZiB3aGl0ZXNwYWNlLlxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICBfYnVmZmVyID0gKF9idWZmZXIgPDwgNikgfCBkZWNvZGUoYy5jaGFyQ29kZUF0KDApICk7XHJcbiAgICAgICAgICAgIF9idWZsZW4gKz0gNjtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICB2YXIgbiA9IChfYnVmZmVyID4+PiAoX2J1ZmxlbiAtIDgpICkgJiAweGZmO1xyXG4gICAgICAgIF9idWZsZW4gLT0gODtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH07XHJcbiBcclxuICAgIHZhciBkZWNvZGUgPSBmdW5jdGlvbihjKSB7XHJcbiAgICAgICAgaWYgKDB4NDEgPD0gYyAmJiBjIDw9IDB4NWEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLSAweDQxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoMHg2MSA8PSBjICYmIGMgPD0gMHg3YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYyAtIDB4NjEgKyAyNjtcclxuICAgICAgICB9IGVsc2UgaWYgKDB4MzAgPD0gYyAmJiBjIDw9IDB4MzkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMgLSAweDMwICsgNTI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjID09IDB4MmIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDYyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYyA9PSAweDJmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA2MztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2M6JyArIGMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiBcclxuICAgIHJldHVybiBfdGhpcztcclxufTtcclxuIFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBnaWZJbWFnZSAoQi9XKVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gXHJcbnZhciBnaWZJbWFnZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuIFxyXG4gICAgdmFyIF93aWR0aCA9IHdpZHRoO1xyXG4gICAgdmFyIF9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB2YXIgX2RhdGEgPSBuZXcgQXJyYXkod2lkdGggKiBoZWlnaHQpO1xyXG4gXHJcbiAgICB2YXIgX3RoaXMgPSB7fTtcclxuIFxyXG4gICAgX3RoaXMuc2V0UGl4ZWwgPSBmdW5jdGlvbih4LCB5LCBwaXhlbCkge1xyXG4gICAgICAgIF9kYXRhW3kgKiBfd2lkdGggKyB4XSA9IHBpeGVsO1xyXG4gICAgfTtcclxuIFxyXG4gICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihvdXQpIHtcclxuIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gR0lGIFNpZ25hdHVyZVxyXG4gXHJcbiAgICAgICAgb3V0LndyaXRlU3RyaW5nKCdHSUY4N2EnKTtcclxuIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gU2NyZWVuIERlc2NyaXB0b3JcclxuIFxyXG4gICAgICAgIG91dC53cml0ZVNob3J0KF93aWR0aCk7XHJcbiAgICAgICAgb3V0LndyaXRlU2hvcnQoX2hlaWdodCk7XHJcbiBcclxuICAgICAgICBvdXQud3JpdGVCeXRlKDB4ODApOyAvLyAyYml0XHJcbiAgICAgICAgb3V0LndyaXRlQnl0ZSgwKTtcclxuICAgICAgICBvdXQud3JpdGVCeXRlKDApO1xyXG4gXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBHbG9iYWwgQ29sb3IgTWFwXHJcbiBcclxuICAgICAgICAvLyBibGFja1xyXG4gICAgICAgIG91dC53cml0ZUJ5dGUoMHgwMCk7XHJcbiAgICAgICAgb3V0LndyaXRlQnl0ZSgweDAwKTtcclxuICAgICAgICBvdXQud3JpdGVCeXRlKDB4MDApO1xyXG4gXHJcbiAgICAgICAgLy8gd2hpdGVcclxuICAgICAgICBvdXQud3JpdGVCeXRlKDB4ZmYpO1xyXG4gICAgICAgIG91dC53cml0ZUJ5dGUoMHhmZik7XHJcbiAgICAgICAgb3V0LndyaXRlQnl0ZSgweGZmKTtcclxuIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gSW1hZ2UgRGVzY3JpcHRvclxyXG4gXHJcbiAgICAgICAgb3V0LndyaXRlU3RyaW5nKCcsJyk7XHJcbiAgICAgICAgb3V0LndyaXRlU2hvcnQoMCk7XHJcbiAgICAgICAgb3V0LndyaXRlU2hvcnQoMCk7XHJcbiAgICAgICAgb3V0LndyaXRlU2hvcnQoX3dpZHRoKTtcclxuICAgICAgICBvdXQud3JpdGVTaG9ydChfaGVpZ2h0KTtcclxuICAgICAgICBvdXQud3JpdGVCeXRlKDApO1xyXG4gXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBMb2NhbCBDb2xvciBNYXBcclxuIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gUmFzdGVyIERhdGFcclxuIFxyXG4gICAgICAgIHZhciBsendNaW5Db2RlU2l6ZSA9IDI7XHJcbiAgICAgICAgdmFyIHJhc3RlciA9IGdldExaV1Jhc3RlcihsendNaW5Db2RlU2l6ZSk7XHJcbiBcclxuICAgICAgICBvdXQud3JpdGVCeXRlKGx6d01pbkNvZGVTaXplKTtcclxuIFxyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gXHJcbiAgICAgICAgd2hpbGUgKHJhc3Rlci5sZW5ndGggLSBvZmZzZXQgPiAyNTUpIHtcclxuICAgICAgICAgICAgb3V0LndyaXRlQnl0ZSgyNTUpO1xyXG4gICAgICAgICAgICBvdXQud3JpdGVCeXRlcyhyYXN0ZXIsIG9mZnNldCwgMjU1KTtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDI1NTtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBvdXQud3JpdGVCeXRlKHJhc3Rlci5sZW5ndGggLSBvZmZzZXQpO1xyXG4gICAgICAgIG91dC53cml0ZUJ5dGVzKHJhc3Rlciwgb2Zmc2V0LCByYXN0ZXIubGVuZ3RoIC0gb2Zmc2V0KTtcclxuICAgICAgICBvdXQud3JpdGVCeXRlKDB4MDApO1xyXG4gXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBHSUYgVGVybWluYXRvclxyXG4gICAgICAgIG91dC53cml0ZVN0cmluZygnOycpO1xyXG4gICAgfTtcclxuIFxyXG4gICAgdmFyIGJpdE91dHB1dFN0cmVhbSA9IGZ1bmN0aW9uKG91dCkge1xyXG4gXHJcbiAgICAgICAgdmFyIF9vdXQgPSBvdXQ7XHJcbiAgICAgICAgdmFyIF9iaXRMZW5ndGggPSAwO1xyXG4gICAgICAgIHZhciBfYml0QnVmZmVyID0gMDtcclxuIFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHt9O1xyXG4gXHJcbiAgICAgICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihkYXRhLCBsZW5ndGgpIHtcclxuIFxyXG4gICAgICAgICAgICBpZiAoIChkYXRhID4+PiBsZW5ndGgpICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbGVuZ3RoIG92ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgIHdoaWxlIChfYml0TGVuZ3RoICsgbGVuZ3RoID49IDgpIHtcclxuICAgICAgICAgICAgICAgIF9vdXQud3JpdGVCeXRlKDB4ZmYgJiAoIChkYXRhIDw8IF9iaXRMZW5ndGgpIHwgX2JpdEJ1ZmZlcikgKTtcclxuICAgICAgICAgICAgICAgIGxlbmd0aCAtPSAoOCAtIF9iaXRMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YSA+Pj49ICg4IC0gX2JpdExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBfYml0QnVmZmVyID0gMDtcclxuICAgICAgICAgICAgICAgIF9iaXRMZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgX2JpdEJ1ZmZlciA9IChkYXRhIDw8IF9iaXRMZW5ndGgpIHwgX2JpdEJ1ZmZlcjtcclxuICAgICAgICAgICAgX2JpdExlbmd0aCA9IF9iaXRMZW5ndGggKyBsZW5ndGg7XHJcbiAgICAgICAgfTtcclxuIFxyXG4gICAgICAgIF90aGlzLmZsdXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChfYml0TGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgX291dC53cml0ZUJ5dGUoX2JpdEJ1ZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gXHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfTtcclxuIFxyXG4gICAgdmFyIGdldExaV1Jhc3RlciA9IGZ1bmN0aW9uKGx6d01pbkNvZGVTaXplKSB7XHJcbiBcclxuICAgICAgICB2YXIgY2xlYXJDb2RlID0gMSA8PCBsendNaW5Db2RlU2l6ZTtcclxuICAgICAgICB2YXIgZW5kQ29kZSA9ICgxIDw8IGx6d01pbkNvZGVTaXplKSArIDE7XHJcbiAgICAgICAgdmFyIGJpdExlbmd0aCA9IGx6d01pbkNvZGVTaXplICsgMTtcclxuIFxyXG4gICAgICAgIC8vIFNldHVwIExaV1RhYmxlXHJcbiAgICAgICAgdmFyIHRhYmxlID0gbHp3VGFibGUoKTtcclxuIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xlYXJDb2RlOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdGFibGUuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoY2xlYXJDb2RlKSApO1xyXG4gICAgICAgIHRhYmxlLmFkZChTdHJpbmcuZnJvbUNoYXJDb2RlKGVuZENvZGUpICk7XHJcbiBcclxuICAgICAgICB2YXIgYnl0ZU91dCA9IGJ5dGVBcnJheU91dHB1dFN0cmVhbSgpO1xyXG4gICAgICAgIHZhciBiaXRPdXQgPSBiaXRPdXRwdXRTdHJlYW0oYnl0ZU91dCk7XHJcbiBcclxuICAgICAgICAvLyBjbGVhciBjb2RlXHJcbiAgICAgICAgYml0T3V0LndyaXRlKGNsZWFyQ29kZSwgYml0TGVuZ3RoKTtcclxuIFxyXG4gICAgICAgIHZhciBkYXRhSW5kZXggPSAwO1xyXG4gXHJcbiAgICAgICAgdmFyIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKF9kYXRhW2RhdGFJbmRleF0pO1xyXG4gICAgICAgIGRhdGFJbmRleCArPSAxO1xyXG4gXHJcbiAgICAgICAgd2hpbGUgKGRhdGFJbmRleCA8IF9kYXRhLmxlbmd0aCkge1xyXG4gXHJcbiAgICAgICAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShfZGF0YVtkYXRhSW5kZXhdKTtcclxuICAgICAgICAgICAgZGF0YUluZGV4ICs9IDE7XHJcbiBcclxuICAgICAgICAgICAgaWYgKHRhYmxlLmNvbnRhaW5zKHMgKyBjKSApIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgcyA9IHMgKyBjO1xyXG4gXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiBcclxuICAgICAgICAgICAgICAgIGJpdE91dC53cml0ZSh0YWJsZS5pbmRleE9mKHMpLCBiaXRMZW5ndGgpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICBpZiAodGFibGUuc2l6ZSgpIDwgMHhmZmYpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5zaXplKCkgPT0gKDEgPDwgYml0TGVuZ3RoKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml0TGVuZ3RoICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuYWRkKHMgKyBjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICAgICAgcyA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBiaXRPdXQud3JpdGUodGFibGUuaW5kZXhPZihzKSwgYml0TGVuZ3RoKTtcclxuIFxyXG4gICAgICAgIC8vIGVuZCBjb2RlXHJcbiAgICAgICAgYml0T3V0LndyaXRlKGVuZENvZGUsIGJpdExlbmd0aCk7XHJcbiBcclxuICAgICAgICBiaXRPdXQuZmx1c2goKTtcclxuIFxyXG4gICAgICAgIHJldHVybiBieXRlT3V0LnRvQnl0ZUFycmF5KCk7XHJcbiAgICB9O1xyXG4gXHJcbiAgICB2YXIgbHp3VGFibGUgPSBmdW5jdGlvbigpIHtcclxuIFxyXG4gICAgICAgIHZhciBfbWFwID0ge307XHJcbiAgICAgICAgdmFyIF9zaXplID0gMDtcclxuIFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHt9O1xyXG4gXHJcbiAgICAgICAgX3RoaXMuYWRkID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb250YWlucyhrZXkpICkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkdXAga2V5OicgKyBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9tYXBba2V5XSA9IF9zaXplO1xyXG4gICAgICAgICAgICBfc2l6ZSArPSAxO1xyXG4gICAgICAgIH07XHJcbiBcclxuICAgICAgICBfdGhpcy5zaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfc2l6ZTtcclxuICAgICAgICB9O1xyXG4gXHJcbiAgICAgICAgX3RoaXMuaW5kZXhPZiA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX21hcFtrZXldO1xyXG4gICAgICAgIH07XHJcbiBcclxuICAgICAgICBfdGhpcy5jb250YWlucyA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIF9tYXBba2V5XSAhPSAndW5kZWZpbmVkJztcclxuICAgICAgICB9O1xyXG4gXHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfTtcclxuIFxyXG4gICAgcmV0dXJuIF90aGlzO1xyXG59O1xyXG4gXHJcbnZhciBjcmVhdGVJbWdUYWcgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBnZXRQaXhlbCwgYWx0KSB7XHJcbiBcclxuICAgIHZhciBnaWYgPSBnaWZJbWFnZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5ICs9IDEpIHtcclxuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoOyB4ICs9IDEpIHtcclxuICAgICAgICAgICAgZ2lmLnNldFBpeGVsKHgsIHksIGdldFBpeGVsKHgsIHkpICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICB2YXIgYiA9IGJ5dGVBcnJheU91dHB1dFN0cmVhbSgpO1xyXG4gICAgZ2lmLndyaXRlKGIpO1xyXG4gXHJcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0RW5jb2RlT3V0cHV0U3RyZWFtKCk7XHJcbiAgICB2YXIgYnl0ZXMgPSBiLnRvQnl0ZUFycmF5KCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgYmFzZTY0LndyaXRlQnl0ZShieXRlc1tpXSk7XHJcbiAgICB9XHJcbiAgICBiYXNlNjQuZmx1c2goKTtcclxuIFxyXG4gICAgdmFyIGltZyA9ICcnO1xyXG4gICAgaW1nICs9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsJztcclxuICAgIGltZyArPSBiYXNlNjQ7XHJcbiBcclxuICAgIHJldHVybiBpbWc7XHJcbn07XHJcbiBcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gcmV0dXJucyBxcmNvZGUgZnVuY3Rpb24uXHJcbiBcclxudmFyIGNyZWF0ZVFyQ29kZUltZyA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgdmFyIHR5cGVOdW1iZXIgPSBvcHRpb25zLnR5cGVOdW1iZXIgfHwgNDtcclxuICAgIHZhciBlcnJvckNvcnJlY3RMZXZlbCA9IG9wdGlvbnMuZXJyb3JDb3JyZWN0TGV2ZWwgfHwgJ00nO1xyXG4gICAgdmFyIHNpemUgPSBvcHRpb25zLnNpemUgfHwgNTAwO1xyXG4gXHJcbiAgICB2YXIgcXI7XHJcbiBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcXIgPSBxcmNvZGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwgfHwgJ00nKTtcclxuICAgICAgICBxci5hZGREYXRhKHRleHQpO1xyXG4gICAgICAgIHFyLm1ha2UoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZih0eXBlTnVtYmVyID49IDQwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGV4dCB0b28gbG9uZyB0byBlbmNvZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2VuKHRleHQsIHtcclxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXHJcbiAgICAgICAgICAgICAgICBlcnJvckNvcnJlY3RMZXZlbDogZXJyb3JDb3JyZWN0TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICB0eXBlTnVtYmVyOiB0eXBlTnVtYmVyICsgMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIC8vIGNhbGMgY2VsbHNpemUgYW5kIG1hcmdpblxyXG4gICAgdmFyIGNlbGxzaXplID0gcGFyc2VJbnQoc2l6ZSAvIHFyLmdldE1vZHVsZUNvdW50KCkpO1xyXG4gICAgdmFyIG1hcmdpbiA9IHBhcnNlSW50KChzaXplIC0gcXIuZ2V0TW9kdWxlQ291bnQoKSAqIGNlbGxzaXplKSAvIDIpO1xyXG4gXHJcbiAgICByZXR1cm4gcXIuY3JlYXRlSW1nVGFnKGNlbGxzaXplLCBtYXJnaW4sIHNpemUpO1xyXG59O1xyXG4vLyB2YXIgbW9kdWxlID0ge307IOmcgOimgeazqOmHiui/meS4gOihjO+8jOWQpuWImeW+ruS/oeWwj+eoi+W6j+aXoOazleS9v+eUqFxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBjcmVhdGVRckNvZGVJbWcgOiBjcmVhdGVRckNvZGVJbWdcclxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*************************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_m.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./share_m.vue?vue&type=script&lang=js&mpType=page */ 19);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_m_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThtQixDQUFnQixnbkJBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGFyZV9tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hhcmVfbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_m.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _junyiH5Copy = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n// const jweixin = require('jweixin-module')\nvar _default = {\n  data: function data() {\n    return {\n      buttonList: ['外卖', '商超'], //, '酒店'\n      activeIndex: 0,\n      showtplBtn: false,\n      appid: 'gh_870576f3c6f9',\n      pathOne: '/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3Dab018ac27a2ca837f6982f19abcaf06d%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253Dab018ac27a2ca837f6982f19abcaf06d%253A0005%26sid%3D0005&lch=cps:waimai:5:ab018ac27a2ca837f6982f19abcaf06d:0005&f_token=1&f_userId=1',\n      pathTwo: '',\n      pathThree: '',\n      canvasId: 'testShareType',\n      canvasUrl: '',\n      lists: [] };\n\n\n  },\n  onLoad: function onLoad() {\n    this.getPushUrl();\n    // this.shareFun();\n    this.getQrCode();\n  },\n  methods: {\n    getQrCode: function getQrCode() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$_this$$myRques, res, qrCode;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n\n\n                  _this.$myRquest({\n                    url: \"member/member_info\",\n                    method: \"POST\" }));case 2:_yield$_this$$myRques = _context.sent;res = _yield$_this$$myRques.data;\n\n                qrCode = res.data.invite_code_url;\n                _this.lists = [{\n                  type: 'image',\n                  content: '../../static/img_6.png',\n                  width: 200,\n                  height: 100,\n                  x: 50,\n                  y: 20 },\n\n                {\n                  type: 'qr',\n                  content: qrCode,\n                  width: 100,\n                  height: 100,\n                  x: 0,\n                  y: 200,\n                  arc: true,\n                  arcX: 250,\n                  arcY: 250,\n                  arcR: 50 },\n\n                {\n                  type: 'text',\n                  content: '扫一扫，获取更多信息',\n                  x: 120,\n                  y: 250,\n                  color: '#ff0000',\n                  size: 10\n                  // maxWidth: 100, \n                  // align: 'left', \n                },\n                {\n                  type: 'rect',\n                  width: 1,\n                  height: 100,\n                  x: 0,\n                  y: 10,\n                  color: '#ff0000' }];case 6:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    beginCanvas: function beginCanvas() {\n      this.$refs.mosoweCanvasComponents.createCanvas();\n    },\n    _canvasImage: function _canvasImage(e) {\n      this.canvasUrl = e;\n    },\n    getPushUrl: function getPushUrl() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _yield$_this2$$myRque, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n\n\n                  _this2.$myRquest({\n                    url: \"member/mt_push_url\",\n                    method: \"POST\" }));case 2:_yield$_this2$$myRque = _context2.sent;res = _yield$_this2$$myRque.data;\n\n                __f__(\"log\", res, \" at pages/share/share_m.vue:250\");\n                _this2.appid = res.data.mt_xcx_id;\n                _this2.pathOne = res.data.mt_wm_xcx;\n                _this2.pathTwo = res.data.mt_sg_xcx;\n                _this2.pathThree = res.data.mt_wm_xcx;case 9:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n    // 跳转小程序\n    shareFun: function shareFun() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that, _yield$_this3$$myRque, res, apiList, info;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                that = _this3;_context3.next = 3;return (\n\n\n                  _this3.$myRquest({\n                    url: \"member/get_sign\",\n                    method: \"POST\",\n                    data: {\n                      url: window.location.href } }));case 3:_yield$_this3$$myRque = _context3.sent;res = _yield$_this3$$myRque.data;\n\n\n                apiList = [\n                'onMenuShareAppMessage',\n                'onMenuShareTimeline',\n                'hideOptionMenu',\n                'showOptionMenu',\n                'chooseWXPay',\n                'checkJsApi',\n                'openLocation',\n                'getLocation'];\n\n                info = {\n                  debug: true,\n                  appId: res.data.appId,\n                  nonceStr: res.data.nonceStr,\n                  timestamp: res.data.timestamp,\n                  signature: res.data.signature,\n                  jsApiList: apiList,\n                  openTagList: [\"wx-open-launch-weapp\"] };\n\n                jweixin.config(info);\n                jweixin.error(function (err) {\n                  __f__(\"log\", 'config fail:', err, \" at pages/share/share_m.vue:289\");\n                });\n                jweixin.ready(function (res) {\n                  that.showtplBtn = true;\n                  that.$nextTick(function () {\n                    try {\n                      var btn = document.getElementById('launch-btn');\n                      btn.addEventListener('launch', function (e) {\n                        __f__(\"log\", 'success', \" at pages/share/share_m.vue:297\");\n                        __f__(\"log\", e, \" at pages/share/share_m.vue:298\");\n                      });\n                      btn.addEventListener('error', function (e) {\n                        __f__(\"log\", 'fail', e, \" at pages/share/share_m.vue:301\");\n                      });\n                    } catch (error) {}\n                  });\n                });case 10:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n    changeTab: function changeTab(i) {\n      this.activeIndex = i;\n    },\n    // 触发方法\n    copy: function copy() {\n      var content = '扫码关注-天天省钱拿返利\\n早餐便宜5块！\\n午餐便宜4块！\\n下午茶便宜5块！\\n夜宵便宜10块！\\n别犹豫，别控制！\\n喜欢订餐—越吃越省\\n喜欢买货—越买越省'; // 复制内容，必须字符串，数字需要转换为字符串\n      var result = (0, _junyiH5Copy.default)(content);\n      if (result === false) {\n        uni.showToast({\n          title: '不支持' });\n\n      } else {\n        uni.showToast({\n          title: '复制成功',\n          icon: 'none' });\n\n      }\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2hhcmUvc2hhcmVfbS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUtBLGdJO0FBQ0E7ZUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLDhCQURBLEVBQ0E7QUFDQSxvQkFGQTtBQUdBLHVCQUhBO0FBSUEsOEJBSkE7QUFLQSxrWUFMQTtBQU1BLGlCQU5BO0FBT0EsbUJBUEE7QUFRQSwrQkFSQTtBQVNBLG1CQVRBO0FBVUEsZUFWQTs7O0FBYUEsR0FmQTtBQWdCQSxRQWhCQSxvQkFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXBCQTtBQXFCQTtBQUNBLGFBREEsdUJBQ0E7OztBQUdBO0FBQ0EsNkNBREE7QUFFQSxrQ0FGQSxHQUhBLCtDQUVBLEdBRkEseUJBRUEsSUFGQTs7QUFPQSxzQkFQQSxHQU9BLHdCQVBBO0FBUUE7QUFDQSwrQkFEQTtBQUVBLG1EQUZBO0FBR0EsNEJBSEE7QUFJQSw2QkFKQTtBQUtBLHVCQUxBO0FBTUEsdUJBTkE7O0FBUUE7QUFDQSw0QkFEQTtBQUVBLGlDQUZBO0FBR0EsNEJBSEE7QUFJQSw2QkFKQTtBQUtBLHNCQUxBO0FBTUEsd0JBTkE7QUFPQSwyQkFQQTtBQVFBLDJCQVJBO0FBU0EsMkJBVEE7QUFVQSwwQkFWQSxFQVJBOztBQW9CQTtBQUNBLDhCQURBO0FBRUEsdUNBRkE7QUFHQSx3QkFIQTtBQUlBLHdCQUpBO0FBS0Esa0NBTEE7QUFNQTtBQUNBO0FBQ0E7QUFSQSxpQkFwQkE7QUE4QkE7QUFDQSw4QkFEQTtBQUVBLDBCQUZBO0FBR0EsNkJBSEE7QUFJQSxzQkFKQTtBQUtBLHVCQUxBO0FBTUEsa0NBTkEsRUE5QkEsRUFSQTs7QUE4Q0EsS0EvQ0E7QUFnREEsZUFoREEseUJBZ0RBO0FBQ0E7QUFDQSxLQWxEQTtBQW1EQSxnQkFuREEsd0JBbURBLENBbkRBLEVBbURBO0FBQ0E7QUFDQSxLQXJEQTtBQXNEQSxjQXREQSx3QkFzREE7OztBQUdBO0FBQ0EsNkNBREE7QUFFQSxrQ0FGQSxHQUhBLGdEQUVBLEdBRkEseUJBRUEsSUFGQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQVhBO0FBWUEsS0FsRUE7QUFtRUE7QUFDQSxZQXBFQSxzQkFvRUE7QUFDQSxvQkFEQSxHQUNBLE1BREE7OztBQUlBO0FBQ0EsMENBREE7QUFFQSxrQ0FGQTtBQUdBO0FBQ0EsK0NBREEsRUFIQSxHQUpBLGdEQUdBLEdBSEEseUJBR0EsSUFIQTs7O0FBV0EsdUJBWEEsR0FXQTtBQUNBLHVDQURBO0FBRUEscUNBRkE7QUFHQSxnQ0FIQTtBQUlBLGdDQUpBO0FBS0EsNkJBTEE7QUFNQSw0QkFOQTtBQU9BLDhCQVBBO0FBUUEsNkJBUkEsQ0FYQTs7QUFxQkEsb0JBckJBLEdBcUJBO0FBQ0EsNkJBREE7QUFFQSx1Q0FGQTtBQUdBLDZDQUhBO0FBSUEsK0NBSkE7QUFLQSwrQ0FMQTtBQU1BLG9DQU5BO0FBT0EsdURBUEEsRUFyQkE7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUhBO0FBSUE7QUFDQTtBQUNBLHVCQUZBO0FBR0EscUJBVEEsQ0FTQTtBQUNBLG1CQVhBO0FBWUEsaUJBZEEsRUFsQ0E7QUFpREEsS0FySEE7QUFzSEEsYUF0SEEscUJBc0hBLENBdEhBLEVBc0hBO0FBQ0E7QUFDQSxLQXhIQTtBQXlIQTtBQUNBLFFBMUhBLGtCQTBIQTtBQUNBLHlHQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTs7QUFHQSxPQUpBLE1BSUE7QUFDQTtBQUNBLHVCQURBO0FBRUEsc0JBRkE7O0FBSUE7O0FBRUEsS0F4SUEsRUFyQkEsRSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBpZD1cInNoYXJlTVwiPlxyXG5cdFx0PHVsIGNsYXNzPVwiYnV0dG9uX3dyYXBcIj5cclxuXHRcdFx0PGxpIGNsYXNzPVwiYnV0dG9uX2l0ZW1cIiB2LWZvcj1cIml0ZW0gLCBpbmRleCBpbiBidXR0b25MaXN0XCIgOmNsYXNzPVwie2FjdGl2ZTphY3RpdmVJbmRleCA9PT0gaW5kZXh9XCIgOmtleT1cImluZGV4XCJcclxuXHRcdFx0IEBjbGljaz1cImNoYW5nZVRhYihpbmRleClcIj57e2l0ZW19fTwvbGk+XHJcblx0XHQ8L3VsPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJib3hfb25lXCIgdi1pZj1cImFjdGl2ZUluZGV4ID09PSAwXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmdfd3JhcFwiPlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRfd3JhcFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19vbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ18xLnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuWFiOmihuWIuDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX3R3b1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiQC9zdGF0aWMvaW1nXzEwLnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmdfdGhyZWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ18zLnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuWGjeS4i+WNlTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX2ZvdXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ18xMC5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX2ZpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ180LnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuaLv+i/lOWIqTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaWNsZV9vbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpY2xlX3R3b1wiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJxckNvZGVcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PHd4LW9wZW4tbGF1bmNoLXdlYXBwIGlkPVwibGF1bmNoLWJ0blwiIDp1c2VybmFtZT1cImFwcGlkXCIgOnBhdGg9XCJwYXRoT25lXCIgdi1pZj1cInNob3d0cGxCdG5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L3d4dGFnLXRlbXBsYXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGFiZWwxXCI+6aKG57qi5YyF54K55aSW5Y2WPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9zY3JpcHQ+XHJcblx0XHRcdFx0XHRcdDwvd3gtb3Blbi1sYXVuY2gtd2VhcHA+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudF9idG5fd3JhcFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50X2J0biBjb250ZW50X2J0bl9vbmVcIiBAY2xpY2s9XCJiZWdpbkNhbnZhc1wiPuaIkeeahOa1t+aKpTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9idG4gY29udGVudF9idG5fdHdvXCIgQGNsaWNrPVwiY29weVwiPuWkjeWItuaWh+ahiDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0X3dyYXBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPui/lOWIqeazqOaEj+S6i+mhue+8mjwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPjEu576O5Zui5aSW5Y2W77yM5b+F6aG75L2/55So5bimIDx0ZXh0IGNsYXNzPVwicmVkXCI+44CQ5LiT5Lqr44CRPC90ZXh0PiDmoIforrDnmoTkvJjmg6DliLjmiY3mnInov5TliKnvvJs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj4yLumihuWIuOWQjuWcqOe6ouWMheacieaViOacn+WGheS4i+WNleWdh+aciei/lOWIqe+8mzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPjMu576O5Zui57uR5a6a55qE5omL5py65Y+377yM6ZyA5LiO6aKG5Yi455m76ZmG55qE5omL5py65Y+35LiA6Ie077ybPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJib3hfdHdvXCIgdi1pZj1cImFjdGl2ZUluZGV4ID09PSAxXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmdfd3JhcFwiPlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRfd3JhcFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19vbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ182LnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuWFiOmihuWIuDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX3R3b1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiQC9zdGF0aWMvaW1nXzExLnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmdfdGhyZWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ183LnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuWGjeS4i+WNlTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX2ZvdXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ18xMS5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX2ZpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ184LnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuaLv+i/lOWIqTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaWNsZV9vbmVcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpY2xlX3R3b1wiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90dG9tXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJxckNvZGVcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PHd4LW9wZW4tbGF1bmNoLXdlYXBwIGlkPVwibGF1bmNoLWJ0blwiIDp1c2VybmFtZT1cImFwcGlkXCIgOnBhdGg9XCJwYXRoVHdvXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC93eHRhZy10ZW1wbGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxhYmVsMlwiID7poobnuqLljIXngrnlpJbljZY8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NjcmlwdD5cclxuXHRcdFx0XHRcdFx0PC93eC1vcGVuLWxhdW5jaC13ZWFwcD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50X2J0bl93cmFwXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfYnRuIGNvbnRlbnRfYnRuX29uZVwiIEBjbGljaz1cImJlZ2luQ2FudmFzXCI+5oiR55qE5rW35oqlPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50X2J0biBjb250ZW50X2J0bl90d29cIiBAY2xpY2s9XCJjb3B5XCI+5aSN5Yi25paH5qGIPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRfd3JhcFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+6L+U5Yip5rOo5oSP5LqL6aG577yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+MS7nvo7lm6LlpJbljZbvvIzlv4Xpobvkvb/nlKjluKYgPHRleHQgY2xhc3M9XCJyZWRcIj7jgJDkuJPkuqvjgJE8L3RleHQ+IOagh+iusOeahOS8mOaDoOWIuOaJjeaciei/lOWIqe+8mzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPjIu6aKG5Yi45ZCO5Zyo57qi5YyF5pyJ5pWI5pyf5YaF5LiL5Y2V5Z2H5pyJ6L+U5Yip77ybPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+My7nvo7lm6Lnu5HlrprnmoTmiYvmnLrlj7fvvIzpnIDkuI7poobliLjnmbvpmYbnmoTmiYvmnLrlj7fkuIDoh7TvvJs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJveF90aHJlZVwiIHYtaWY9XCJhY3RpdmVJbmRleCA9PT0gMlwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJnX3dyYXBcIj5cclxuXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50X3dyYXBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmdfb25lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfMS5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7lhYjpoobliLg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ190d29cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ18xMC5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX3RocmVlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfMy5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7lho3kuIvljZU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19mb3VyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfMTAucG5nXCIgYWx0PVwiXCI+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19maXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfNC5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7mi7/ov5TliKk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2ljbGVfb25lXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaWNsZV90d29cIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXJDb2RlXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDx3eC1vcGVuLWxhdW5jaC13ZWFwcCBpZD1cImxhdW5jaC1idG5cIiA6dXNlcm5hbWU9XCJhcHBpZFwiIDpwYXRoPVwicGF0aFRocmVlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNjcmlwdCB0eXBlPVwidGV4dC93eHRhZy10ZW1wbGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxhYmVsMVwiPumihue6ouWMheiuoumFkuW6lzwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvc2NyaXB0PlxyXG5cdFx0XHRcdFx0XHQ8L3d4LW9wZW4tbGF1bmNoLXdlYXBwPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRfYnRuX3dyYXBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9idG4gY29udGVudF9idG5fb25lXCIgQGNsaWNrPVwiYmVnaW5DYW52YXNcIj7miJHnmoTmtbfmiqU8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfYnRuIGNvbnRlbnRfYnRuX3R3b1wiIEBjbGljaz1cImNvcHlcIj7lpI3liLbmlofmoYg8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dF93cmFwXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj7ov5TliKnms6jmhI/kuovpobnvvJo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj4xLue+juWbouWkluWNlu+8jOW/hemhu+S9v+eUqOW4piA8dGV4dCBjbGFzcz1cInJlZFwiPuOAkOS4k+S6q+OAkTwvdGV4dD4g5qCH6K6w55qE5LyY5oOg5Yi45omN5pyJ6L+U5Yip77ybPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+Mi7poobliLjlkI7lnKjnuqLljIXmnInmlYjmnJ/lhoXkuIvljZXlnYfmnInov5TliKnvvJs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj4zLue+juWboue7keWumueahOaJi+acuuWPt++8jOmcgOS4jumihuWIuOeZu+mZhueahOaJi+acuuWPt+S4gOiHtO+8mzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gPGltYWdlIDpzcmM9XCJjYW52YXNVcmxcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPiAtLT5cclxuXHRcdDxtb3Nvd2UtY2FudmFzLWltYWdlIFxyXG5cdFx0XHRyZWY9XCJtb3Nvd2VDYW52YXNDb21wb25lbnRzXCIgXHJcblx0XHRcdEBjYW52YXNJbWFnZT1cIl9jYW52YXNJbWFnZVwiIFxyXG5cdFx0XHQ6bGlzdHM9XCJsaXN0c1wiIFxyXG5cdFx0XHRoZWlnaHQ9XCIzMDBcIiBcclxuXHRcdFx0d2lkdGg9XCIzMDBcIlxyXG5cdFx0XHRzaG93UHJldmlldyAvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGg1Q29weSBmcm9tICdAL2pzX3Nkay9qdW55aS1oNS1jb3B5L2p1bnlpLWg1LWNvcHkvanVueWktaDUtY29weS5qcydcclxuXHQvLyBjb25zdCBqd2VpeGluID0gcmVxdWlyZSgnandlaXhpbi1tb2R1bGUnKVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YnV0dG9uTGlzdDogWyflpJbljZYnLCAn5ZWG6LaFJ10sLy8sICfphZLlupcnXHJcblx0XHRcdFx0YWN0aXZlSW5kZXg6IDAsXHJcblx0XHRcdFx0c2hvd3RwbEJ0bjogZmFsc2UsXHJcblx0XHRcdFx0YXBwaWQ6ICdnaF84NzA1NzZmM2M2ZjknLFxyXG5cdFx0XHRcdHBhdGhPbmU6ICcvaW5kZXgvcGFnZXMvaDUvaDU/d2VidXJsPWh0dHBzJTNBJTJGJTJGcnVuaW9uLm1laXR1YW4uY29tJTJGdXJsJTNGa2V5JTNEYWIwMThhYzI3YTJjYTgzN2Y2OTgyZjE5YWJjYWYwNmQlMjZ1cmwlM0RodHRwcyUyNTNBJTI1MkYlMjUyRmkubWVpdHVhbi5jb20lMjUyRmF3cCUyNTJGaGZlJTI1MkZibG9jayUyNTJGYTEzYjg3OTE5YTlhY2U5Y2ZhYjQlMjUyRjg5NDAwJTI1MkZpbmRleC5odG1sJTI1M0ZhcHBrZXklMjUzRGFiMDE4YWMyN2EyY2E4MzdmNjk4MmYxOWFiY2FmMDZkJTI1M0EwMDA1JTI2c2lkJTNEMDAwNSZsY2g9Y3BzOndhaW1haTo1OmFiMDE4YWMyN2EyY2E4MzdmNjk4MmYxOWFiY2FmMDZkOjAwMDUmZl90b2tlbj0xJmZfdXNlcklkPTEnLFxyXG5cdFx0XHRcdHBhdGhUd286ICcnLFxyXG5cdFx0XHRcdHBhdGhUaHJlZTogJycsXHJcblx0XHRcdFx0Y2FudmFzSWQ6ICd0ZXN0U2hhcmVUeXBlJyxcclxuXHRcdFx0XHRjYW52YXNVcmw6ICcnLFxyXG5cdFx0XHRcdGxpc3RzOiBbXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dGhpcy5nZXRQdXNoVXJsKCk7XHJcblx0XHRcdC8vIHRoaXMuc2hhcmVGdW4oKTtcclxuXHRcdFx0dGhpcy5nZXRRckNvZGUoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFzeW5jIGdldFFyQ29kZSgpe1xyXG5cdFx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRcdGRhdGE6IHJlc1xyXG5cdFx0XHRcdH0gPSBhd2FpdCB0aGlzLiRteVJxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IFwibWVtYmVyL21lbWJlcl9pbmZvXCIsXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc3QgcXJDb2RlID0gcmVzLmRhdGEuaW52aXRlX2NvZGVfdXJsO1xyXG5cdFx0XHRcdHRoaXMubGlzdHMgPSBbe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAnLi4vLi4vc3RhdGljL2ltZ182LnBuZycsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyMDAsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwLFxyXG5cdFx0XHRcdFx0XHR4OiA1MCxcclxuXHRcdFx0XHRcdFx0eTogMjAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAncXInLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBxckNvZGUsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwLFxyXG5cdFx0XHRcdFx0XHR4OiAwLFxyXG5cdFx0XHRcdFx0XHR5OiAyMDAsXHJcblx0XHRcdFx0XHRcdGFyYzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0YXJjWDogMjUwLFxyXG5cdFx0XHRcdFx0XHRhcmNZOiAyNTAsXHJcblx0XHRcdFx0XHRcdGFyY1I6IDUwXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmiavkuIDmiavvvIzojrflj5bmm7TlpJrkv6Hmga8nLFxyXG5cdFx0XHRcdFx0XHR4OiAxMjAsXHJcblx0XHRcdFx0XHRcdHk6IDI1MCxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjZmYwMDAwJyxcclxuXHRcdFx0XHRcdFx0c2l6ZTogMTAsXHJcblx0XHRcdFx0XHRcdC8vIG1heFdpZHRoOiAxMDAsIFxyXG5cdFx0XHRcdFx0XHQvLyBhbGlnbjogJ2xlZnQnLCBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICdyZWN0JyxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwLFxyXG5cdFx0XHRcdFx0XHR4OiAwLFxyXG5cdFx0XHRcdFx0XHR5OiAxMCxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjZmYwMDAwJyxcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdH0sXHJcblx0XHRcdGJlZ2luQ2FudmFzKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMubW9zb3dlQ2FudmFzQ29tcG9uZW50cy5jcmVhdGVDYW52YXMoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0X2NhbnZhc0ltYWdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLmNhbnZhc1VybCA9IGU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldFB1c2hVcmwoKSB7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0ZGF0YTogcmVzXHJcblx0XHRcdFx0fSA9IGF3YWl0IHRoaXMuJG15UnF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogXCJtZW1iZXIvbXRfcHVzaF91cmxcIixcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHR0aGlzLmFwcGlkID0gcmVzLmRhdGEubXRfeGN4X2lkO1xyXG5cdFx0XHRcdHRoaXMucGF0aE9uZSA9IHJlcy5kYXRhLm10X3dtX3hjeDtcclxuXHRcdFx0XHR0aGlzLnBhdGhUd28gPSByZXMuZGF0YS5tdF9zZ194Y3g7XHJcblx0XHRcdFx0dGhpcy5wYXRoVGhyZWUgPSByZXMuZGF0YS5tdF93bV94Y3g7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi3s+i9rOWwj+eoi+W6j1xyXG5cdFx0XHRhc3luYyBzaGFyZUZ1bigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0ZGF0YTogcmVzXHJcblx0XHRcdFx0fSA9IGF3YWl0IHRoaXMuJG15UnF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogXCJtZW1iZXIvZ2V0X3NpZ25cIixcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHVybDogd2luZG93LmxvY2F0aW9uLmhyZWZcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCBhcGlMaXN0ID0gW1xyXG5cdFx0XHRcdFx0J29uTWVudVNoYXJlQXBwTWVzc2FnZScsXHJcblx0XHRcdFx0XHQnb25NZW51U2hhcmVUaW1lbGluZScsXHJcblx0XHRcdFx0XHQnaGlkZU9wdGlvbk1lbnUnLFxyXG5cdFx0XHRcdFx0J3Nob3dPcHRpb25NZW51JyxcclxuXHRcdFx0XHRcdCdjaG9vc2VXWFBheScsXHJcblx0XHRcdFx0XHQnY2hlY2tKc0FwaScsXHJcblx0XHRcdFx0XHQnb3BlbkxvY2F0aW9uJyxcclxuXHRcdFx0XHRcdCdnZXRMb2NhdGlvbidcclxuXHRcdFx0XHRdO1xyXG5cdFx0XHRcdGxldCBpbmZvID0ge1xyXG5cdFx0XHRcdFx0ZGVidWc6IHRydWUsXHJcblx0XHRcdFx0XHRhcHBJZDogcmVzLmRhdGEuYXBwSWQsXHJcblx0XHRcdFx0XHRub25jZVN0cjogcmVzLmRhdGEubm9uY2VTdHIsXHJcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcclxuXHRcdFx0XHRcdHNpZ25hdHVyZTogcmVzLmRhdGEuc2lnbmF0dXJlLFxyXG5cdFx0XHRcdFx0anNBcGlMaXN0OiBhcGlMaXN0LFxyXG5cdFx0XHRcdFx0b3BlblRhZ0xpc3Q6IFtcInd4LW9wZW4tbGF1bmNoLXdlYXBwXCJdLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0andlaXhpbi5jb25maWcoaW5mbyk7XHJcblx0XHRcdFx0andlaXhpbi5lcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2NvbmZpZyBmYWlsOicsIGVycik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0andlaXhpbi5yZWFkeShyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhhdC5zaG93dHBsQnRuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoYXQuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdW5jaC1idG4nKTtcclxuXHRcdFx0XHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignbGF1bmNoJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJywgZSk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VUYWIoaSkge1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlSW5kZXggPSBpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDop6blj5Hmlrnms5VcclxuXHRcdFx0Y29weSgpIHtcclxuXHRcdFx0XHRsZXQgY29udGVudCA9ICfmiavnoIHlhbPms6gt5aSp5aSp55yB6ZKx5ou/6L+U5YipXFxu5pep6aSQ5L6/5a6cNeWdl++8gVxcbuWNiOmkkOS+v+WunDTlnZfvvIFcXG7kuIvljYjojLbkvr/lrpw15Z2X77yBXFxu5aSc5a615L6/5a6cMTDlnZfvvIFcXG7liKvnirnosavvvIzliKvmjqfliLbvvIFcXG7llpzmrKLorqLppJDigJTotorlkIPotornnIFcXG7llpzmrKLkubDotKfigJTotorkubDotornnIEnIC8vIOWkjeWItuWGheWuue+8jOW/hemhu+Wtl+espuS4su+8jOaVsOWtl+mcgOimgei9rOaNouS4uuWtl+espuS4slxyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGg1Q29weShjb250ZW50KVxyXG5cdFx0XHRcdGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfkuI3mlK/mjIEnLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5aSN5Yi25oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0I3NoYXJlTSB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0LmJ1dHRvbl93cmFwIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDIwcnB4O1xyXG5cdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdFx0d2lkdGg6IDM1JTtcclxuXHRcdFx0aGVpZ2h0OiA2MHJweDtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA2MHJweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHJcblx0XHRcdC5idXR0b25faXRlbSB7XHJcblx0XHRcdFx0d2lkdGg6IDQ4JTtcclxuXHRcdFx0XHRoZWlnaHQ6IDU2cnB4O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNTZycHg7XHJcblx0XHRcdFx0bWFyZ2luOiA1cnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjZmRjMzE5O1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cclxuXHRcdFx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMzE5O1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmJveF9vbmUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjljYzFkO1xyXG5cdFx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuXHJcblx0XHRcdC5iZ193cmFwIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9oc20uYXlsendsLmNvbS93bXEvc3RhdGljL2ltZ18xLmpwZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcblx0XHRcdFx0aGVpZ2h0OiAzNDhycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRlbnRfd3JhcCB7XHJcblx0XHRcdHBhZGRpbmc6IDAgMTVweDtcclxuXHJcblx0XHRcdC5jb250ZW50IHtcclxuXHRcdFx0XHRoZWlnaHQ6IDQ2NXJweDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdFx0XHRcdC5ib3R0b20ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cdFx0XHRcdFx0LnFyQ29kZSB7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMjAwcnB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubGFiZWwxIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNGZmY7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMjUwcnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogNjBycHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZlNzAwMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmxhYmVsMiB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjRmZmO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDI1MHJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA2MHJweDtcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMWI3Njg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNpY2xlX29uZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5Y2MxZDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGxlZnQ6IC0yNXJweDtcclxuXHRcdFx0XHRcdHRvcDogMTU4cnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNpY2xlX3R3byB7XHJcblx0XHRcdFx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5Y2MxZDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHJpZ2h0OiAtMjVycHg7XHJcblx0XHRcdFx0XHR0b3A6IDE1OHJweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC50b3Age1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxNjBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmOWNjMWQ7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHJweCA1MHJweDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuXHRcdFx0XHRcdC5iZ19vbmUge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRleHQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuYmdfdHdvIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblxyXG5cdFx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MHJweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDE1cnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmJnX3RocmVlIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdFx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmJnX2ZvdXIge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTVycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuYmdfZml2ZSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuXHRcdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGV4dCB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jb250ZW50X2J0bl93cmFwIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cclxuXHRcdFx0XHQuY29udGVudF9idG4ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMwMHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0XHRcdFx0XHQmLmNvbnRlbnRfYnRuX29uZSB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmMDM0MDg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnRleHRfd3JhcCB7XHJcblx0XHRcdFx0cGFkZGluZzogMjBycHg7XHJcblxyXG5cdFx0XHRcdC50ZXh0IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxMHJweCAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJlZCB7XHJcblx0XHRcdFx0XHRjb2xvcjogI2RkM2IwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuYm94X3R3byB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM1OWRlMjE7XHJcblx0XHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG5cclxuXHRcdFx0LmJnX3dyYXAge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybChodHRwczovL2hzbS5heWx6d2wuY29tL3dtcS9zdGF0aWMvaW1nXzUucG5nKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM0OHJweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jaWNsZV9vbmUge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM1OWRlMjEgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmNpY2xlX3R3byB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzU5ZGUyMSAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQudG9wIHtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1OWRlMjEgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5ib3hfdGhyZWUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzYzNjO1xyXG5cdFx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuXHJcblx0XHRcdC5iZ193cmFwIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9oc20uYXlsendsLmNvbS93bXEvc3RhdGljL2ltZ185LmpwZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcblx0XHRcdFx0aGVpZ2h0OiAzNDhycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuY2ljbGVfb25lIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzYzNjICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jaWNsZV90d28ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZjNjM2MgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnRvcCB7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZmYzYzNjICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jb250ZW50X2J0bl9vbmUge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuXHRcdFx0XHRjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 21);

/***/ }),
/* 21 */
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

module.exports = __webpack_require__(/*! ./runtime */ 22);

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
/* 22 */
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
/* 23 */
/*!*****************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = h5Copy;function h5Copy(content) {\n\n  if (!document.queryCommandSupported('copy')) {\n    // 不支持\n    return false;\n  }\n\n  var textarea = document.createElement(\"textarea\");\n  textarea.value = content;\n  textarea.readOnly = \"readOnly\";\n  document.body.appendChild(textarea);\n  textarea.select(); // 选择对象\n  textarea.setSelectionRange(0, content.length); //核心\n  var result = document.execCommand(\"copy\"); // 执行浏览器复制命令\n  textarea.remove();\n  return result;\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL2p1bnlpLWg1LWNvcHkvanVueWktaDUtY29weS9qdW55aS1oNS1jb3B5LmpzIl0sIm5hbWVzIjpbImg1Q29weSIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCIsInRleHRhcmVhIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwicmVhZE9ubHkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImxlbmd0aCIsInJlc3VsdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoidUZBQWUsU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7O0FBRXRDLE1BQUksQ0FBQ0MsUUFBUSxDQUFDQyxxQkFBVCxDQUErQixNQUEvQixDQUFMLEVBQTZDO0FBQzNDO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZjtBQUNBRCxVQUFRLENBQUNFLEtBQVQsR0FBaUJMLE9BQWpCO0FBQ0FHLFVBQVEsQ0FBQ0csUUFBVCxHQUFvQixVQUFwQjtBQUNBTCxVQUFRLENBQUNNLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsUUFBMUI7QUFDQUEsVUFBUSxDQUFDTSxNQUFULEdBWHNDLENBV3BCO0FBQ2xCTixVQUFRLENBQUNPLGlCQUFULENBQTJCLENBQTNCLEVBQThCVixPQUFPLENBQUNXLE1BQXRDLEVBWnNDLENBWVE7QUFDOUMsTUFBSUMsTUFBTSxHQUFHWCxRQUFRLENBQUNZLFdBQVQsQ0FBcUIsTUFBckIsQ0FBYixDQWJzQyxDQWFJO0FBQzFDVixVQUFRLENBQUNXLE1BQVQ7QUFDQSxTQUFPRixNQUFQOztBQUVEIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaDVDb3B5KGNvbnRlbnQpIHtcclxuICBcclxuICBpZiAoIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCgnY29weScpKSB7XHJcbiAgICAvLyDkuI3mlK/mjIFcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBcclxuICBsZXQgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIilcclxuICB0ZXh0YXJlYS52YWx1ZSA9IGNvbnRlbnRcclxuICB0ZXh0YXJlYS5yZWFkT25seSA9IFwicmVhZE9ubHlcIlxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpXHJcbiAgdGV4dGFyZWEuc2VsZWN0KCkgLy8g6YCJ5oup5a+56LGhXHJcbiAgdGV4dGFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgY29udGVudC5sZW5ndGgpIC8v5qC45b+DXHJcbiAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKSAvLyDmiafooYzmtY/op4jlmajlpI3liLblkb3ku6RcclxuICB0ZXh0YXJlYS5yZW1vdmUoKVxyXG4gIHJldHVybiByZXN1bHRcclxuICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!******************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/node_modules/jweixin-module/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx, __f__) {var __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}!function (e, n) { true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return n(e);}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;}(window, function (o, e) {if (!o.jWeixin) {var _w;var n,c = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", onMenuShareQZone: "menu:share:QZone", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest", openEnterpriseRedPacket: "getRecevieBizHongBaoRequest", startSearchBeacons: "startMonitoringBeacons", stopSearchBeacons: "stopMonitoringBeacons", onSearchBeacons: "onBeaconsInRange", consumeAndShareCard: "consumedShareCard", openAddress: "editAddress" },a = function () {var e = {};for (var n in c) {e[c[n]] = n;}return e;}(),i = o.document,t = i.title,r = navigator.userAgent.toLowerCase(),s = navigator.platform.toLowerCase(),d = !(!s.match("mac") && !s.match("win")),u = -1 != r.indexOf("wxdebugger"),l = -1 != r.indexOf("micromessenger"),p = -1 != r.indexOf("android"),f = -1 != r.indexOf("iphone") || -1 != r.indexOf("ipad"),m = (n = r.match(/micromessenger\/(\d+\.\d+\.\d+)/) || r.match(/micromessenger\/(\d+\.\d+)/)) ? n[1] : "",g = { initStartTime: L(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 },h = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", isPreVerifyOk: 1, systemType: f ? 1 : p ? 2 : -1, clientVersion: m, url: encodeURIComponent(location.href) },v = {},S = { _completes: [] },y = { state: 0, data: {} };O(function () {g.initEndTime = L();});var I = !1,_ = [],w = (_w = { config: function config(e) {B("config", v = e);var t = !1 !== v.check;O(function () {if (t) M(c.config, { verifyJsApiList: C(v.jsApiList), verifyOpenTagList: C(v.openTagList) }, function () {S._complete = function (e) {g.preVerifyEndTime = L(), y.state = 1, y.data = e;}, S.success = function (e) {h.isPreVerifyOk = 0;}, S.fail = function (e) {S._fail ? S._fail(e) : y.state = -1;};var t = S._completes;return t.push(function () {!function () {if (!(d || u || v.debug || m < "6.0.2" || h.systemType < 0)) {var i = new Image();h.appId = v.appId, h.initTime = g.initEndTime - g.initStartTime, h.preVerifyTime = g.preVerifyEndTime - g.preVerifyStartTime, w.getNetworkType({ isInnerInvoke: !0, success: function success(e) {h.networkType = e.networkType;var n = "https://open.weixin.qq.com/sdk/report?v=" + h.version + "&o=" + h.isPreVerifyOk + "&s=" + h.systemType + "&c=" + h.clientVersion + "&a=" + h.appId + "&n=" + h.networkType + "&i=" + h.initTime + "&p=" + h.preVerifyTime + "&u=" + h.url;i.src = n;} });}}();}), S.complete = function (e) {for (var n = 0, i = t.length; n < i; ++n) {t[n]();}S._completes = [];}, S;}()), g.preVerifyStartTime = L();else {y.state = 1;for (var e = S._completes, n = 0, i = e.length; n < i; ++n) {e[n]();}S._completes = [];}}), w.invoke || (w.invoke = function (e, n, i) {o.WeixinJSBridge && WeixinJSBridge.invoke(e, x(n), i);}, w.on = function (e, n) {o.WeixinJSBridge && WeixinJSBridge.on(e, n);});}, ready: function ready(e) {0 != y.state ? e() : (S._completes.push(e), !l && v.debug && e());}, error: function error(e) {m < "6.0.2" || (-1 == y.state ? e(y.data) : S._fail = e);}, checkJsApi: function checkJsApi(e) {M("checkJsApi", { jsApiList: C(e.jsApiList) }, (e._complete = function (e) {if (p) {var n = e.checkResult;n && (e.checkResult = JSON.parse(n));}e = function (e) {var n = e.checkResult;for (var i in n) {var t = a[i];t && (n[t] = n[i], delete n[i]);}return e;}(e);}, e));}, onMenuShareTimeline: function onMenuShareTimeline(e) {P(c.onMenuShareTimeline, { complete: function complete() {M("shareTimeline", { title: e.title || t, desc: e.title || t, img_url: e.imgUrl || "", link: e.link || location.href, type: e.type || "link", data_url: e.dataUrl || "" }, e);} }, e);}, onMenuShareAppMessage: function onMenuShareAppMessage(n) {P(c.onMenuShareAppMessage, { complete: function complete(e) {"favorite" === e.scene ? M("sendAppMessage", { title: n.title || t, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }) : M("sendAppMessage", { title: n.title || t, desc: n.desc || "", link: n.link || location.href, img_url: n.imgUrl || "", type: n.type || "link", data_url: n.dataUrl || "" }, n);} }, n);}, onMenuShareQQ: function onMenuShareQQ(e) {P(c.onMenuShareQQ, { complete: function complete() {M("shareQQ", { title: e.title || t, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareWeibo: function onMenuShareWeibo(e) {P(c.onMenuShareWeibo, { complete: function complete() {M("shareWeiboApp", { title: e.title || t, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, onMenuShareQZone: function onMenuShareQZone(e) {P(c.onMenuShareQZone, { complete: function complete() {M("shareQZone", { title: e.title || t, desc: e.desc || "", img_url: e.imgUrl || "", link: e.link || location.href }, e);} }, e);}, updateTimelineShareData: function updateTimelineShareData(e) {M("updateTimelineShareData", { title: e.title, link: e.link, imgUrl: e.imgUrl }, e);}, updateAppMessageShareData: function updateAppMessageShareData(e) {M("updateAppMessageShareData", { title: e.title, desc: e.desc, link: e.link, imgUrl: e.imgUrl }, e);}, startRecord: function startRecord(e) {M("startRecord", {}, e);}, stopRecord: function stopRecord(e) {M("stopRecord", {}, e);}, onVoiceRecordEnd: function onVoiceRecordEnd(e) {P("onVoiceRecordEnd", e);}, playVoice: function playVoice(e) {M("playVoice", { localId: e.localId }, e);}, pauseVoice: function pauseVoice(e) {M("pauseVoice", { localId: e.localId }, e);}, stopVoice: function stopVoice(e) {M("stopVoice", { localId: e.localId }, e);}, onVoicePlayEnd: function onVoicePlayEnd(e) {P("onVoicePlayEnd", e);}, uploadVoice: function uploadVoice(e) {M("uploadVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadVoice: function downloadVoice(e) {M("downloadVoice", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, translateVoice: function translateVoice(e) {M("translateVoice", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, chooseImage: function chooseImage(e) {M("chooseImage", { scene: "1|2", count: e.count || 9, sizeType: e.sizeType || ["original", "compressed"], sourceType: e.sourceType || ["album", "camera"] }, (e._complete = function (e) {if (p) {var n = e.localIds;try {n && (e.localIds = JSON.parse(n));} catch (e) {}}}, e));}, getLocation: function getLocation(e) {}, previewImage: function previewImage(e) {M(c.previewImage, { current: e.current, urls: e.urls }, e);}, uploadImage: function uploadImage(e) {M("uploadImage", { localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, downloadImage: function downloadImage(e) {M("downloadImage", { serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1 }, e);}, getLocalImgData: function getLocalImgData(e) {!1 === I ? (I = !0, M("getLocalImgData", { localId: e.localId }, (e._complete = function (e) {if (I = !1, 0 < _.length) {var n = _.shift();wx.getLocalImgData(n);}}, e))) : _.push(e);}, getNetworkType: function getNetworkType(e) {M("getNetworkType", {}, (e._complete = function (e) {e = function (e) {var n = e.errMsg;e.errMsg = "getNetworkType:ok";var i = e.subtype;if (delete e.subtype, i) e.networkType = i;else {var t = n.indexOf(":"),o = n.substring(t + 1);switch (o) {case "wifi":case "edge":case "wwan":e.networkType = o;break;default:e.errMsg = "getNetworkType:fail";}}return e;}(e);}, e));}, openLocation: function openLocation(e) {M("openLocation", { latitude: e.latitude, longitude: e.longitude, name: e.name || "", address: e.address || "", scale: e.scale || 28, infoUrl: e.infoUrl || "" }, e);} }, _defineProperty(_w, "getLocation", function getLocation(e) {M(c.getLocation, { type: (e = e || {}).type || "wgs84" }, (e._complete = function (e) {delete e.type;}, e));}), _defineProperty(_w, "hideOptionMenu", function hideOptionMenu(e) {M("hideOptionMenu", {}, e);}), _defineProperty(_w, "showOptionMenu", function showOptionMenu(e) {M("showOptionMenu", {}, e);}), _defineProperty(_w, "closeWindow", function closeWindow(e) {M("closeWindow", {}, e = e || {});}), _defineProperty(_w, "hideMenuItems", function hideMenuItems(e) {M("hideMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_w, "showMenuItems", function showMenuItems(e) {M("showMenuItems", { menuList: e.menuList }, e);}), _defineProperty(_w, "hideAllNonBaseMenuItem", function hideAllNonBaseMenuItem(e) {M("hideAllNonBaseMenuItem", {}, e);}), _defineProperty(_w, "showAllNonBaseMenuItem", function showAllNonBaseMenuItem(e) {M("showAllNonBaseMenuItem", {}, e);}), _defineProperty(_w, "scanQRCode", function scanQRCode(e) {M("scanQRCode", { needResult: (e = e || {}).needResult || 0, scanType: e.scanType || ["qrCode", "barCode"] }, (e._complete = function (e) {if (f) {var n = e.resultStr;if (n) {var i = JSON.parse(n);e.resultStr = i && i.scan_code && i.scan_code.scan_result;}}}, e));}), _defineProperty(_w, "openAddress", function openAddress(e) {M(c.openAddress, {}, (e._complete = function (e) {e = function (e) {return e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo, e;}(e);}, e));}), _defineProperty(_w, "openProductSpecificView", function openProductSpecificView(e) {M(c.openProductSpecificView, { pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo }, e);}), _defineProperty(_w, "addCard", function addCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, card_ext: r.cardExt };i.push(a);}M(c.addCard, { card_list: i }, (e._complete = function (e) {var n = e.card_list;if (n) {for (var i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {var o = n[i];o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ;}e.cardList = n, delete e.card_list;}}, e));}), _defineProperty(_w, "chooseCard", function chooseCard(e) {M("chooseCard", { app_id: v.appId, location_id: e.shopId || "", sign_type: e.signType || "SHA1", card_id: e.cardId || "", card_type: e.cardType || "", card_sign: e.cardSign, time_stamp: e.timestamp + "", nonce_str: e.nonceStr }, (e._complete = function (e) {e.cardList = e.choose_card_info, delete e.choose_card_info;}, e));}), _defineProperty(_w, "openCard", function openCard(e) {for (var n = e.cardList, i = [], t = 0, o = n.length; t < o; ++t) {var r = n[t],a = { card_id: r.cardId, code: r.code };i.push(a);}M(c.openCard, { card_list: i }, e);}), _defineProperty(_w, "consumeAndShareCard", function consumeAndShareCard(e) {M(c.consumeAndShareCard, { consumedCardId: e.cardId, consumedCode: e.code }, e);}), _defineProperty(_w, "chooseWXPay", function chooseWXPay(e) {M(c.chooseWXPay, V(e), e);}), _defineProperty(_w, "openEnterpriseRedPacket", function openEnterpriseRedPacket(e) {M(c.openEnterpriseRedPacket, V(e), e);}), _defineProperty(_w, "startSearchBeacons", function startSearchBeacons(e) {M(c.startSearchBeacons, { ticket: e.ticket }, e);}), _defineProperty(_w, "stopSearchBeacons", function stopSearchBeacons(e) {M(c.stopSearchBeacons, {}, e);}), _defineProperty(_w, "onSearchBeacons", function onSearchBeacons(e) {P(c.onSearchBeacons, e);}), _defineProperty(_w, "openEnterpriseChat", function openEnterpriseChat(e) {M("openEnterpriseChat", { useridlist: e.userIds, chatname: e.groupName }, e);}), _defineProperty(_w, "launchMiniProgram", function launchMiniProgram(e) {M("launchMiniProgram", { targetAppId: e.targetAppId, path: function (e) {if ("string" == typeof e && 0 < e.length) {var n = e.split("?")[0],i = e.split("?")[1];return n += ".html", void 0 !== i ? n + "?" + i : n;}}(e.path), envVersion: e.envVersion }, e);}), _defineProperty(_w, "openBusinessView", function openBusinessView(e) {M("openBusinessView", { businessType: e.businessType, queryString: e.queryString || "", envVersion: e.envVersion }, (e._complete = function (n) {if (p) {var e = n.extraData;if (e) try {n.extraData = JSON.parse(e);} catch (e) {n.extraData = {};}}}, e));}), _defineProperty(_w, "miniProgram", { navigateBack: function navigateBack(e) {e = e || {}, O(function () {M("invokeMiniProgramAPI", { name: "navigateBack", arg: { delta: e.delta || 1 } }, e);});}, navigateTo: function navigateTo(e) {O(function () {M("invokeMiniProgramAPI", { name: "navigateTo", arg: { url: e.url } }, e);});}, redirectTo: function redirectTo(e) {O(function () {M("invokeMiniProgramAPI", { name: "redirectTo", arg: { url: e.url } }, e);});}, switchTab: function switchTab(e) {O(function () {M("invokeMiniProgramAPI", { name: "switchTab", arg: { url: e.url } }, e);});}, reLaunch: function reLaunch(e) {O(function () {M("invokeMiniProgramAPI", { name: "reLaunch", arg: { url: e.url } }, e);});}, postMessage: function postMessage(e) {O(function () {M("invokeMiniProgramAPI", { name: "postMessage", arg: e.data || {} }, e);});}, getEnv: function getEnv(e) {O(function () {e({ miniprogram: "miniprogram" === o.__wxjs_environment });});} }), _w),T = 1,k = {};return i.addEventListener("error", function (e) {if (!p) {var n = e.target,i = n.tagName,t = n.src;if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) if (-1 != t.indexOf("wxlocalresource://")) {e.preventDefault(), e.stopPropagation();var o = n["wx-id"];if (o || (o = T++, n["wx-id"] = o), k[o]) return;k[o] = !0, wx.ready(function () {wx.getLocalImgData({ localId: t, success: function success(e) {n.src = e.localData;} });});}}}, !0), i.addEventListener("load", function (e) {if (!p) {var n = e.target,i = n.tagName;n.src;if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {var t = n["wx-id"];t && (k[t] = !1);}}}, !0), e && (o.wx = o.jWeixin = w), w;}function M(n, e, i) {o.WeixinJSBridge ? WeixinJSBridge.invoke(n, x(e), function (e) {A(n, e, i);}) : B(n, i);}function P(n, i, t) {o.WeixinJSBridge ? WeixinJSBridge.on(n, function (e) {t && t.trigger && t.trigger(e), A(n, e, i);}) : B(n, t || i);}function x(e) {return (e = e || {}).appId = v.appId, e.verifyAppId = v.appId, e.verifySignType = "sha1", e.verifyTimestamp = v.timestamp + "", e.verifyNonceStr = v.nonceStr, e.verifySignature = v.signature, e;}function V(e) {return { timeStamp: e.timestamp + "", nonceStr: e.nonceStr, package: e.package, paySign: e.paySign, signType: e.signType || "SHA1" };}function A(e, n, i) {"openEnterpriseChat" != e && "openBusinessView" !== e || (n.errCode = n.err_code), delete n.err_code, delete n.err_desc, delete n.err_detail;var t = n.errMsg;t || (t = n.err_msg, delete n.err_msg, t = function (e, n) {var i = e,t = a[i];t && (i = t);var o = "ok";if (n) {var r = n.indexOf(":");"confirm" == (o = n.substring(r + 1)) && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"), "config" == i && "function not exist" == o && (o = "ok"), "" == o && (o = "fail");}return n = i + ":" + o;}(e, t), n.errMsg = t), (i = i || {})._complete && (i._complete(n), delete i._complete), t = n.errMsg || "", v.debug && !i.isInnerInvoke && alert(JSON.stringify(n));var o = t.indexOf(":");switch (t.substring(o + 1)) {case "ok":i.success && i.success(n);break;case "cancel":i.cancel && i.cancel(n);break;default:i.fail && i.fail(n);}i.complete && i.complete(n);}function C(e) {if (e) {for (var n = 0, i = e.length; n < i; ++n) {var t = e[n],o = c[t];o && (e[n] = o);}return e;}}function B(e, n) {if (!(!v.debug || n && n.isInnerInvoke)) {var i = a[e];i && (e = i), n && n._complete && delete n._complete, __f__("log", '"' + e + '",', n || "", " at node_modules/jweixin-module/lib/index.js:1");}}function L() {return new Date().getTime();}function O(e) {l && (o.WeixinJSBridge ? e() : i.addEventListener && i.addEventListener("WeixinJSBridgeReady", e, !1));}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 25)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)["default"]))

/***/ }),
/* 25 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 27));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
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

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 26)))

/***/ }),
/* 26 */
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
/* 27 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 28 */
/*!*************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_e.vue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share_e.vue?vue&type=template&id=33bbf2fc&mpType=page */ 29);\n/* harmony import */ var _share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share_e.vue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/share/share_e.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ21MO0FBQ25MLGdCQUFnQix1TEFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NoYXJlX2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYmJmMmZjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaGFyZV9lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGFyZV9lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zaGFyZS9zaGFyZV9lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*******************************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_e.vue?vue&type=template&id=33bbf2fc&mpType=page ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./share_e.vue?vue&type=template&id=33bbf2fc&mpType=page */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_template_id_33bbf2fc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 30 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_e.vue?vue&type=template&id=33bbf2fc&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { attrs: { id: "shareM", _i: 0 } }, [
    _c(
      "ul",
      { staticClass: _vm._$s(1, "sc", "button_wrap"), attrs: { _i: 1 } },
      _vm._l(_vm._$s(2, "f", { forItems: _vm.buttonList }), function(
        item,
        index,
        $20,
        $30
      ) {
        return _c(
          "li",
          {
            key: _vm._$s(2, "f", { forIndex: $20, key: index }),
            staticClass: _vm._$s("2-" + $30, "sc", "button_item"),
            class: _vm._$s("2-" + $30, "c", {
              active: _vm.activeIndex === index
            }),
            attrs: { _i: "2-" + $30 },
            on: {
              click: function($event) {
                return _vm.changeTab(index)
              }
            }
          },
          [_vm._v(_vm._$s("2-" + $30, "t0-0", _vm._s(item)))]
        )
      }),
      0
    ),
    _vm._$s(3, "i", _vm.activeIndex === 0)
      ? _c(
          "view",
          { staticClass: _vm._$s(3, "sc", "box_one"), attrs: { _i: 3 } },
          [
            _c("view", {
              staticClass: _vm._$s(4, "sc", "bg_wrap"),
              attrs: { _i: 4 }
            }),
            _c(
              "view",
              {
                staticClass: _vm._$s(5, "sc", "content_wrap"),
                attrs: { _i: 5 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(6, "sc", "content"),
                    attrs: { _i: 6 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(7, "sc", "top"),
                        attrs: { _i: 7 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(8, "sc", "bg_one"),
                            attrs: { _i: 8 }
                          },
                          [_c("img", {}), _c("text")]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(11, "sc", "bg_two"),
                            attrs: { _i: 11 }
                          },
                          [_c("img", {})]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(13, "sc", "bg_three"),
                            attrs: { _i: 13 }
                          },
                          [_c("img", {}), _c("text")]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(16, "sc", "bg_four"),
                            attrs: { _i: 16 }
                          },
                          [_c("img", {})]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(18, "sc", "bg_five"),
                            attrs: { _i: 18 }
                          },
                          [_c("img", {}), _c("text")]
                        )
                      ]
                    ),
                    _c("view", {
                      staticClass: _vm._$s(21, "sc", "cicle_one"),
                      attrs: { _i: 21 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(22, "sc", "cicle_two"),
                      attrs: { _i: 22 }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(23, "sc", "bottom"),
                        attrs: { _i: 23 }
                      },
                      [
                        _c("div", {
                          staticClass: _vm._$s(24, "sc", "qrCode"),
                          attrs: { _i: 24 }
                        }),
                        _vm._$s(25, "i", _vm.showtplBtn)
                          ? _c(
                              "wx-open-launch-weapp",
                              {
                                attrs: {
                                  id: "launch-btn",
                                  username: _vm.appid,
                                  path: _vm.pathOne,
                                  _i: 25
                                }
                              },
                              [_c("script", {})]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(27, "sc", "content_btn_wrap"),
                    attrs: { _i: 27 }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(
                        28,
                        "sc",
                        "content_btn content_btn_one"
                      ),
                      attrs: { _i: 28 },
                      on: { click: _vm.sharePoster }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(
                        29,
                        "sc",
                        "content_btn content_btn_two"
                      ),
                      attrs: { _i: 29 },
                      on: { click: _vm.copy }
                    })
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(30, "sc", "text_wrap"),
                    attrs: { _i: 30 }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(31, "sc", "text"),
                      attrs: { _i: 31 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(32, "sc", "text"),
                      attrs: { _i: 32 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(33, "sc", "text"),
                      attrs: { _i: 33 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(34, "sc", "text"),
                      attrs: { _i: 34 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(35, "sc", "text"),
                      attrs: { _i: 35 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(36, "sc", "text"),
                      attrs: { _i: 36 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(37, "sc", "text"),
                      attrs: { _i: 37 }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._$s(38, "i", _vm.activeIndex === 1)
      ? _c(
          "view",
          { staticClass: _vm._$s(38, "sc", "box_two"), attrs: { _i: 38 } },
          [
            _c("view", {
              staticClass: _vm._$s(39, "sc", "bg_wrap"),
              attrs: { _i: 39 }
            }),
            _c(
              "view",
              {
                staticClass: _vm._$s(40, "sc", "content_wrap"),
                attrs: { _i: 40 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(41, "sc", "content"),
                    attrs: { _i: 41 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(42, "sc", "top"),
                        attrs: { _i: 42 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(43, "sc", "bg_one"),
                            attrs: { _i: 43 }
                          },
                          [_c("img", {}), _c("text")]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(46, "sc", "bg_two"),
                            attrs: { _i: 46 }
                          },
                          [_c("img", {})]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(48, "sc", "bg_three"),
                            attrs: { _i: 48 }
                          },
                          [_c("img", {}), _c("text")]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(51, "sc", "bg_four"),
                            attrs: { _i: 51 }
                          },
                          [_c("img", {})]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(53, "sc", "bg_five"),
                            attrs: { _i: 53 }
                          },
                          [_c("img", {}), _c("text")]
                        )
                      ]
                    ),
                    _c("view", {
                      staticClass: _vm._$s(56, "sc", "cicle_one"),
                      attrs: { _i: 56 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(57, "sc", "cicle_two"),
                      attrs: { _i: 57 }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(58, "sc", "bottom"),
                        attrs: { _i: 58 }
                      },
                      [
                        _c("div", {
                          staticClass: _vm._$s(59, "sc", "qrCode"),
                          attrs: { _i: 59 }
                        }),
                        _c(
                          "wx-open-launch-weapp",
                          {
                            attrs: {
                              id: "launch-btn",
                              username: _vm.appid,
                              path: _vm.pathTwo,
                              _i: 60
                            }
                          },
                          [_c("script", {})]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(62, "sc", "content_btn_wrap"),
                    attrs: { _i: 62 }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(
                        63,
                        "sc",
                        "content_btn content_btn_one"
                      ),
                      attrs: { _i: 63 },
                      on: { click: _vm.sharePoster }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(
                        64,
                        "sc",
                        "content_btn content_btn_two"
                      ),
                      attrs: { _i: 64 },
                      on: { click: _vm.copy }
                    })
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(65, "sc", "text_wrap"),
                    attrs: { _i: 65 }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(66, "sc", "text"),
                      attrs: { _i: 66 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(67, "sc", "text"),
                      attrs: { _i: 67 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(68, "sc", "text"),
                      attrs: { _i: 68 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(69, "sc", "text"),
                      attrs: { _i: 69 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(70, "sc", "text"),
                      attrs: { _i: 70 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(71, "sc", "text"),
                      attrs: { _i: 71 }
                    }),
                    _c("text", {
                      staticClass: _vm._$s(72, "sc", "text"),
                      attrs: { _i: 72 }
                    })
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 31 */
/*!*************************************************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_e.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./share_e.vue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_share_e_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThtQixDQUFnQixnbkJBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGFyZV9lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hhcmVfZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/pages/share/share_e.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _junyiH5Copy = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar jweixin = __webpack_require__(/*! jweixin-module */ 24);var _default =\n{\n  data: function data() {\n    return {\n      buttonList: ['外卖', '果蔬'],\n      activeIndex: 0,\n      showtplBtn: false,\n      appid: 'gh_870576f3c6f9',\n      pathOne: '/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3Dab018ac27a2ca837f6982f19abcaf06d%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253Dab018ac27a2ca837f6982f19abcaf06d%253A0005%26sid%3D0005&lch=cps:waimai:5:ab018ac27a2ca837f6982f19abcaf06d:0005&f_token=1&f_userId=1',\n      pathTwo: '',\n      pathThree: '',\n      canvasId: 'testShareType' };\n\n  },\n  onLoad: function onLoad() {\n    this.getPushUrl();\n    this.shareFun();\n  },\n  methods: {\n    sharePoster: function sharePoster() {\n\n    },\n    getPushUrl: function getPushUrl() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$_this$$myRques, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n\n\n                  _this.$myRquest({\n                    url: \"member/mt_push_url\",\n                    method: \"POST\" }));case 2:_yield$_this$$myRques = _context.sent;res = _yield$_this$$myRques.data;\n\n                _this.appid = res.data.mt_xcx_id;\n                _this.pathOne = res.data.mt_wm_xcx;\n                _this.pathTwo = res.data.mt_sg_xcx;\n                _this.pathThree = res.data.mt_wm_xcx;case 8:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n    // 跳转小程序\n    shareFun: function shareFun() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that, _yield$_this2$$myRque, res, apiList, info;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                that = _this2;_context2.next = 3;return (\n\n\n                  _this2.$myRquest({\n                    url: \"member/get_sign\",\n                    method: \"POST\",\n                    data: {\n                      url: window.location.href } }));case 3:_yield$_this2$$myRque = _context2.sent;res = _yield$_this2$$myRque.data;\n\n\n                apiList = [\n                'onMenuShareAppMessage',\n                'onMenuShareTimeline',\n                'hideOptionMenu',\n                'showOptionMenu',\n                'chooseWXPay',\n                'checkJsApi',\n                'openLocation',\n                'getLocation'];\n\n                info = {\n                  debug: true,\n                  appId: res.data.appId,\n                  nonceStr: res.data.nonceStr,\n                  timestamp: res.data.timestamp,\n                  signature: res.data.signature,\n                  jsApiList: apiList,\n                  openTagList: [\"wx-open-launch-weapp\"] };\n\n                jweixin.config(info);\n                jweixin.error(function (err) {\n                  __f__(\"log\", 'config fail:', err, \" at pages/share/share_e.vue:184\");\n                });\n                jweixin.ready(function (res) {\n                  that.showtplBtn = true;\n                  that.$nextTick(function () {\n                    try {\n                      var btn = document.getElementById('launch-btn');\n                      btn.addEventListener('launch', function (e) {\n                        __f__(\"log\", 'success', \" at pages/share/share_e.vue:192\");\n                        __f__(\"log\", e, \" at pages/share/share_e.vue:193\");\n                      });\n                      btn.addEventListener('error', function (e) {\n                        __f__(\"log\", 'fail', e, \" at pages/share/share_e.vue:196\");\n                      });\n                    } catch (error) {}\n                  });\n                });case 10:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n    changeTab: function changeTab(i) {\n      this.activeIndex = i;\n    },\n    // 触发方法\n    copy: function copy() {\n      var content = '扫码关注-天天省钱拿返利\\n早餐便宜5块！\\n午餐便宜4块！\\n下午茶便宜5块！\\n夜宵便宜10块！\\n别犹豫，别控制！\\n喜欢订餐—越吃越省\\n喜欢买货—越买越省'; // 复制内容，必须字符串，数字需要转换为字符串\n      var result = (0, _junyiH5Copy.default)(content);\n      if (result === false) {\n        uni.showToast({\n          title: '不支持' });\n\n      } else {\n        uni.showToast({\n          title: '复制成功',\n          icon: 'none' });\n\n      }\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2hhcmUvc2hhcmVfZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1IQSxnSTtBQUNBLDREO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLG9CQUZBO0FBR0EsdUJBSEE7QUFJQSw4QkFKQTtBQUtBLGtZQUxBO0FBTUEsaUJBTkE7QUFPQSxtQkFQQTtBQVFBLCtCQVJBOztBQVVBLEdBWkE7QUFhQSxRQWJBLG9CQWFBO0FBQ0E7QUFDQTtBQUNBLEdBaEJBO0FBaUJBO0FBQ0EsZUFEQSx5QkFDQTs7QUFFQSxLQUhBO0FBSUEsY0FKQSx3QkFJQTs7O0FBR0E7QUFDQSw2Q0FEQTtBQUVBLGtDQUZBLEdBSEEsK0NBRUEsR0FGQSx5QkFFQSxJQUZBOztBQU9BO0FBQ0E7QUFDQTtBQUNBLHFEQVZBO0FBV0EsS0FmQTtBQWdCQTtBQUNBLFlBakJBLHNCQWlCQTtBQUNBLG9CQURBLEdBQ0EsTUFEQTs7O0FBSUE7QUFDQSwwQ0FEQTtBQUVBLGtDQUZBO0FBR0E7QUFDQSwrQ0FEQSxFQUhBLEdBSkEsZ0RBR0EsR0FIQSx5QkFHQSxJQUhBOzs7QUFXQSx1QkFYQSxHQVdBO0FBQ0EsdUNBREE7QUFFQSxxQ0FGQTtBQUdBLGdDQUhBO0FBSUEsZ0NBSkE7QUFLQSw2QkFMQTtBQU1BLDRCQU5BO0FBT0EsOEJBUEE7QUFRQSw2QkFSQSxDQVhBOztBQXFCQSxvQkFyQkEsR0FxQkE7QUFDQSw2QkFEQTtBQUVBLHVDQUZBO0FBR0EsNkNBSEE7QUFJQSwrQ0FKQTtBQUtBLCtDQUxBO0FBTUEsb0NBTkE7QUFPQSx1REFQQSxFQXJCQTs7QUE4QkE7QUFDQTtBQUNBO0FBQ0EsaUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBSEE7QUFJQTtBQUNBO0FBQ0EsdUJBRkE7QUFHQSxxQkFUQSxDQVNBO0FBQ0EsbUJBWEE7QUFZQSxpQkFkQSxFQWxDQTtBQWlEQSxLQWxFQTtBQW1FQSxhQW5FQSxxQkFtRUEsQ0FuRUEsRUFtRUE7QUFDQTtBQUNBLEtBckVBO0FBc0VBO0FBQ0EsUUF2RUEsa0JBdUVBO0FBQ0EseUdBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBOztBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQkFGQTs7QUFJQTs7QUFFQSxLQXJGQSxFQWpCQSxFIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGlkPVwic2hhcmVNXCI+XHJcblx0XHQ8dWwgY2xhc3M9XCJidXR0b25fd3JhcFwiPlxyXG5cdFx0XHQ8bGkgY2xhc3M9XCJidXR0b25faXRlbVwiIHYtZm9yPVwiaXRlbSAsIGluZGV4IGluIGJ1dHRvbkxpc3RcIiA6Y2xhc3M9XCJ7YWN0aXZlOmFjdGl2ZUluZGV4ID09PSBpbmRleH1cIiA6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHQgQGNsaWNrPVwiY2hhbmdlVGFiKGluZGV4KVwiPnt7aXRlbX19PC9saT5cclxuXHRcdDwvdWw+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJveF9vbmVcIiB2LWlmPVwiYWN0aXZlSW5kZXggPT09IDBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiZ193cmFwXCI+XHJcblxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudF93cmFwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX29uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiQC9zdGF0aWMvaW1nXzEzLnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuWFiOmihuWIuDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX3R3b1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiQC9zdGF0aWMvaW1nXzIxLnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmdfdGhyZWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ18xNC5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7lho3kuIvljZU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19mb3VyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfMjEucG5nXCIgYWx0PVwiXCI+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19maXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfMTUucG5nXCIgYWx0PVwiXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+5ou/6L+U5YipPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpY2xlX29uZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2ljbGVfdHdvXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInFyQ29kZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8d3gtb3Blbi1sYXVuY2gtd2VhcHAgaWQ9XCJsYXVuY2gtYnRuXCIgOnVzZXJuYW1lPVwiYXBwaWRcIiA6cGF0aD1cInBhdGhPbmVcIiB2LWlmPVwic2hvd3RwbEJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzY3JpcHQgdHlwZT1cInRleHQvd3h0YWctdGVtcGxhdGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsYWJlbDFcIj7poobnuqLljIXngrnlpJbljZY8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NjcmlwdD5cclxuXHRcdFx0XHRcdFx0PC93eC1vcGVuLWxhdW5jaC13ZWFwcD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50X2J0bl93cmFwXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfYnRuIGNvbnRlbnRfYnRuX29uZVwiIEBjbGljaz1cInNoYXJlUG9zdGVyXCI+5oiR55qE5rW35oqlPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50X2J0biBjb250ZW50X2J0bl90d29cIiBAY2xpY2s9XCJjb3B5XCI+5aSN5Yi25paH5qGIPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRfd3JhcFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+6L+U5Yip5rOo5oSP5LqL6aG577yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+MS7poobliLjkuIvljZXlnYfmnInov5TliKnvvIzov5TliKnmjInnhaforqLljZXlrp7pmYXph5Hpop3kuLrlh4bvvJs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj4yLuW/hemhu+S9v+eUqOacrOmhteiOt+W+l+eahOe6ouWMheeggemihuWIuO+8jOmihuWIuOWQjuS9v+eUqOe6ouWMheS4i+WNleaJjeaciei/lOWIqe+8mzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPjMu6aKG5Yi45ZCO5Zyo57qi5YyF5pyJ5pWI5pyf5YaF5LiL5Y2V5Z2H5pyJ6L+U5Yip77ybPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+NC7ppb/kuobkuYjnu5HlrprnmoTmiYvmnLrlj7fvvIzpnIDkuI7poobliLjnmbvpmYbnmoTmiYvmnLrlj7fkuIDoh7TvvJs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj41LuS4i+WNleWQjjMw5YiG6ZKf5YaF5Lya5pyJ6K6i5Y2V6L+U546w5o+Q6YaS77ybPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+Ni7ml6Dorrrppb/kuobkuYjmlrDogIHlrqLmiLfvvIzmr4/kuKrmiYvmnLrlj7fmr4/lpKnlj6/poobkuIDmrKHvvIznuqLljIXph5Hpop3pmo/mnLrlj5HmlL7vvJs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJveF90d29cIiB2LWlmPVwiYWN0aXZlSW5kZXggPT09IDFcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiZ193cmFwXCI+XHJcblxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudF93cmFwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX29uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiQC9zdGF0aWMvaW1nXzE3LnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0PuWFiOmihuWIuDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJnX3R3b1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiQC9zdGF0aWMvaW1nXzIwLnBuZ1wiIGFsdD1cIlwiPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmdfdGhyZWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIkAvc3RhdGljL2ltZ18xOC5wbmdcIiBhbHQ9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dD7lho3kuIvljZU8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19mb3VyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfMjAucG5nXCIgYWx0PVwiXCI+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiZ19maXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJAL3N0YXRpYy9pbWdfMTkucG5nXCIgYWx0PVwiXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+5ou/6L+U5YipPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpY2xlX29uZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2ljbGVfdHdvXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInFyQ29kZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8d3gtb3Blbi1sYXVuY2gtd2VhcHAgaWQ9XCJsYXVuY2gtYnRuXCIgOnVzZXJuYW1lPVwiYXBwaWRcIiA6cGF0aD1cInBhdGhUd29cIj5cclxuXHRcdFx0XHRcdFx0XHQ8c2NyaXB0IHR5cGU9XCJ0ZXh0L3d4dGFnLXRlbXBsYXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGFiZWwyXCIgPumihue6ouWMheeCueWkluWNljwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvc2NyaXB0PlxyXG5cdFx0XHRcdFx0XHQ8L3d4LW9wZW4tbGF1bmNoLXdlYXBwPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRfYnRuX3dyYXBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY29udGVudF9idG4gY29udGVudF9idG5fb25lXCIgQGNsaWNrPVwic2hhcmVQb3N0ZXJcIj7miJHnmoTmtbfmiqU8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnRfYnRuIGNvbnRlbnRfYnRuX3R3b1wiIEBjbGljaz1cImNvcHlcIj7lpI3liLbmlofmoYg8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dF93cmFwXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj7ov5TliKnms6jmhI/kuovpobnvvJo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj4xLumihuWIuOS4i+WNleWdh+aciei/lOWIqe+8jOi/lOWIqeaMieeFp+iuouWNleWunumZhemHkemineS4uuWHhu+8mzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPjIu5b+F6aG75L2/55So5pys6aG16I635b6X55qE57qi5YyF56CB6aKG5Yi477yM6aKG5Yi45ZCO5L2/55So57qi5YyF5LiL5Y2V5omN5pyJ6L+U5Yip77ybPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+My7poobliLjlkI7lnKjnuqLljIXmnInmlYjmnJ/lhoXkuIvljZXlnYfmnInov5TliKnvvJs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj40Lumlv+S6huS5iOe7keWumueahOaJi+acuuWPt++8jOmcgOS4jumihuWIuOeZu+mZhueahOaJi+acuuWPt+S4gOiHtO+8mzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPjUu5LiL5Y2V5ZCOMzDliIbpkp/lhoXkvJrmnInorqLljZXov5TnjrDmj5DphpLvvJs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj42LuaXoOiuuumlv+S6huS5iOaWsOiAgeWuouaIt++8jOavj+S4quaJi+acuuWPt+avj+WkqeWPr+mihuS4gOasoe+8jOe6ouWMhemHkeminemaj+acuuWPkeaUvu+8mzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGg1Q29weSBmcm9tICdAL2pzX3Nkay9qdW55aS1oNS1jb3B5L2p1bnlpLWg1LWNvcHkvanVueWktaDUtY29weS5qcydcclxuXHRjb25zdCBqd2VpeGluID0gcmVxdWlyZSgnandlaXhpbi1tb2R1bGUnKVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YnV0dG9uTGlzdDogWyflpJbljZYnLCAn5p6c6JSsJ10sXHJcblx0XHRcdFx0YWN0aXZlSW5kZXg6IDAsXHJcblx0XHRcdFx0c2hvd3RwbEJ0bjogZmFsc2UsXHJcblx0XHRcdFx0YXBwaWQ6ICdnaF84NzA1NzZmM2M2ZjknLFxyXG5cdFx0XHRcdHBhdGhPbmU6ICcvaW5kZXgvcGFnZXMvaDUvaDU/d2VidXJsPWh0dHBzJTNBJTJGJTJGcnVuaW9uLm1laXR1YW4uY29tJTJGdXJsJTNGa2V5JTNEYWIwMThhYzI3YTJjYTgzN2Y2OTgyZjE5YWJjYWYwNmQlMjZ1cmwlM0RodHRwcyUyNTNBJTI1MkYlMjUyRmkubWVpdHVhbi5jb20lMjUyRmF3cCUyNTJGaGZlJTI1MkZibG9jayUyNTJGYTEzYjg3OTE5YTlhY2U5Y2ZhYjQlMjUyRjg5NDAwJTI1MkZpbmRleC5odG1sJTI1M0ZhcHBrZXklMjUzRGFiMDE4YWMyN2EyY2E4MzdmNjk4MmYxOWFiY2FmMDZkJTI1M0EwMDA1JTI2c2lkJTNEMDAwNSZsY2g9Y3BzOndhaW1haTo1OmFiMDE4YWMyN2EyY2E4MzdmNjk4MmYxOWFiY2FmMDZkOjAwMDUmZl90b2tlbj0xJmZfdXNlcklkPTEnLFxyXG5cdFx0XHRcdHBhdGhUd286ICcnLFxyXG5cdFx0XHRcdHBhdGhUaHJlZTogJycsXHJcblx0XHRcdFx0Y2FudmFzSWQ6ICd0ZXN0U2hhcmVUeXBlJyxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0UHVzaFVybCgpO1xyXG5cdFx0XHR0aGlzLnNoYXJlRnVuKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRzaGFyZVBvc3RlcigpIHtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldFB1c2hVcmwoKSB7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0ZGF0YTogcmVzXHJcblx0XHRcdFx0fSA9IGF3YWl0IHRoaXMuJG15UnF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogXCJtZW1iZXIvbXRfcHVzaF91cmxcIixcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMuYXBwaWQgPSByZXMuZGF0YS5tdF94Y3hfaWQ7XHJcblx0XHRcdFx0dGhpcy5wYXRoT25lID0gcmVzLmRhdGEubXRfd21feGN4O1xyXG5cdFx0XHRcdHRoaXMucGF0aFR3byA9IHJlcy5kYXRhLm10X3NnX3hjeDtcclxuXHRcdFx0XHR0aGlzLnBhdGhUaHJlZSA9IHJlcy5kYXRhLm10X3dtX3hjeDtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6Lez6L2s5bCP56iL5bqPXHJcblx0XHRcdGFzeW5jIHNoYXJlRnVuKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRkYXRhOiByZXNcclxuXHRcdFx0XHR9ID0gYXdhaXQgdGhpcy4kbXlScXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBcIm1lbWJlci9nZXRfc2lnblwiLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0bGV0IGFwaUxpc3QgPSBbXHJcblx0XHRcdFx0XHQnb25NZW51U2hhcmVBcHBNZXNzYWdlJyxcclxuXHRcdFx0XHRcdCdvbk1lbnVTaGFyZVRpbWVsaW5lJyxcclxuXHRcdFx0XHRcdCdoaWRlT3B0aW9uTWVudScsXHJcblx0XHRcdFx0XHQnc2hvd09wdGlvbk1lbnUnLFxyXG5cdFx0XHRcdFx0J2Nob29zZVdYUGF5JyxcclxuXHRcdFx0XHRcdCdjaGVja0pzQXBpJyxcclxuXHRcdFx0XHRcdCdvcGVuTG9jYXRpb24nLFxyXG5cdFx0XHRcdFx0J2dldExvY2F0aW9uJ1xyXG5cdFx0XHRcdF07XHJcblx0XHRcdFx0bGV0IGluZm8gPSB7XHJcblx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSxcclxuXHRcdFx0XHRcdGFwcElkOiByZXMuZGF0YS5hcHBJZCxcclxuXHRcdFx0XHRcdG5vbmNlU3RyOiByZXMuZGF0YS5ub25jZVN0cixcclxuXHRcdFx0XHRcdHRpbWVzdGFtcDogcmVzLmRhdGEudGltZXN0YW1wLFxyXG5cdFx0XHRcdFx0c2lnbmF0dXJlOiByZXMuZGF0YS5zaWduYXR1cmUsXHJcblx0XHRcdFx0XHRqc0FwaUxpc3Q6IGFwaUxpc3QsXHJcblx0XHRcdFx0XHRvcGVuVGFnTGlzdDogW1wid3gtb3Blbi1sYXVuY2gtd2VhcHBcIl0sXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRqd2VpeGluLmNvbmZpZyhpbmZvKTtcclxuXHRcdFx0XHRqd2VpeGluLmVycm9yKGVyciA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnY29uZmlnIGZhaWw6JywgZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRqd2VpeGluLnJlYWR5KHJlcyA9PiB7XHJcblx0XHRcdFx0XHR0aGF0LnNob3d0cGxCdG4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhhdC4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF1bmNoLWJ0bicpO1xyXG5cdFx0XHRcdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdsYXVuY2gnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWwnLCBlKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge31cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZVRhYihpKSB7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVJbmRleCA9IGk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOinpuWPkeaWueazlVxyXG5cdFx0XHRjb3B5KCkge1xyXG5cdFx0XHRcdGxldCBjb250ZW50ID0gJ+aJq+eggeWFs+azqC3lpKnlpKnnnIHpkrHmi7/ov5TliKlcXG7ml6nppJDkvr/lrpw15Z2X77yBXFxu5Y2I6aSQ5L6/5a6cNOWdl++8gVxcbuS4i+WNiOiMtuS+v+WunDXlnZfvvIFcXG7lpJzlrrXkvr/lrpwxMOWdl++8gVxcbuWIq+eKueixq++8jOWIq+aOp+WItu+8gVxcbuWWnOasouiuoumkkOKAlOi2iuWQg+i2iuecgVxcbuWWnOasouS5sOi0p+KAlOi2iuS5sOi2iuecgScgLy8g5aSN5Yi25YaF5a6577yM5b+F6aG75a2X56ym5Liy77yM5pWw5a2X6ZyA6KaB6L2s5o2i5Li65a2X56ym5LiyXHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gaDVDb3B5KGNvbnRlbnQpXHJcblx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+S4jeaUr+aMgScsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICflpI3liLbmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQjc2hhcmVNIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHQuYnV0dG9uX3dyYXAge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMjBycHg7XHJcblx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0XHR3aWR0aDogMzAlO1xyXG5cdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDYwcnB4O1xyXG5cdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cclxuXHRcdFx0LmJ1dHRvbl9pdGVtIHtcclxuXHRcdFx0XHR3aWR0aDogNDklO1xyXG5cdFx0XHRcdGhlaWdodDogNTZycHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA1NnJweDtcclxuXHRcdFx0XHRtYXJnaW46IDVycHg7XHJcblx0XHRcdFx0Y29sb3I6ICM0NmUwOTk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblxyXG5cdFx0XHRcdCYuYWN0aXZlIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMxMDljZGU7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuYm94X29uZSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwNTdiZGI7XHJcblx0XHRcdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpO1xyXG5cclxuXHRcdFx0LmJnX3dyYXAge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHVybChodHRwczovL2hzbS5heWx6d2wuY29tL3dtcS9zdGF0aWMvaW1nXzEyLmpwZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcblx0XHRcdFx0aGVpZ2h0OiAzNDhycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuY29udGVudF93cmFwIHtcclxuXHRcdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cclxuXHRcdFx0LmNvbnRlbnQge1xyXG5cdFx0XHRcdGhlaWdodDogNDY1cnB4O1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcblx0XHRcdFx0LmJvdHRvbSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcblx0XHRcdFx0XHQucXJDb2RlIHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5sYWJlbDEge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI0ZmZjtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAyNTBycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA2MHJweDtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmU3MDAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubGFiZWwyIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNGZmY7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMjUwcnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogNjBycHg7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMxYjc2ODtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2ljbGVfb25lIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1MHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDU3YmRiO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDogLTI1cnB4O1xyXG5cdFx0XHRcdFx0dG9wOiAxNThycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2ljbGVfdHdvIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1MHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDU3YmRiO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0cmlnaHQ6IC0yNXJweDtcclxuXHRcdFx0XHRcdHRvcDogMTU4cnB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRvcCB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDE2MHJweDtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzA1N2JkYjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcnB4IDUwcnB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdFx0XHRcdFx0LmJnX29uZSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuXHRcdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGV4dCB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5iZ190d28ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAzMHJweDtcclxuXHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTVycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuYmdfdGhyZWUge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcblx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRleHQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuYmdfZm91ciB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cclxuXHRcdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNXJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5iZ19maXZlIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG5cdFx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0ZXh0IHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmNvbnRlbnRfYnRuX3dyYXAge1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDIwcnB4IDA7XHJcblxyXG5cdFx0XHRcdC5jb250ZW50X2J0biB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHR3aWR0aDogMzAwcnB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRcdFx0XHRcdCYuY29udGVudF9idG5fb25lIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwMzQwODtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQudGV4dF93cmFwIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHJcblx0XHRcdFx0LnRleHQge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDEwcnB4IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucmVkIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZGQzYjAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5ib3hfdHdvIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzRjZGNhOTtcclxuXHRcdFx0bWluLWhlaWdodDogY2FsYygxMDB2aCk7XHJcblxyXG5cdFx0XHQuYmdfd3JhcCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaHNtLmF5bHp3bC5jb20vd21xL3N0YXRpYy9pbWdfMTYucG5nKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuXHRcdFx0XHRoZWlnaHQ6IDM0OHJweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmNpY2xlX29uZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzRjZGNhOSAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuY2ljbGVfdHdvIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkY2E5ICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC50b3Age1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzRjZGNhOSAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/App.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 34);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNks7QUFDN0ssZ0JBQWdCLHVMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 35);\n/* harmony import */ var _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVrQixDQUFnQixpbUJBQUcsRUFBQyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/demo/uni-app/codeTwo/干饭外卖券/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!******************************************************!*\
  !*** D:/demo/uni-app/codeTwo/干饭外卖券/utils/request.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.myRquest = void 0;var BASE_URL = '/api';\nvar myRquest = function myRquest(ops) {\n  var token;\n  uni.getStorage({\n    key: 'token',\n    success: function success(res) {\n      token = res.data;\n    } });\n\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: BASE_URL + ops.url,\n      method: ops.method || 'GET',\n      data: ops.data || {},\n      header: {\n        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxIiwiaXNzIjoiIiwiYXVkIjoiIiwiaWF0IjoxNjEwMTEwNTkwLCJuYmYiOjE2MTAxMTA1OTAsImV4cCI6MTYxMDM2OTc5MH0.KEz6hBJuRqSxBD90eOes6Mmj6gzm94S3-Abfy-yRpvM' },\n\n      success: function success(res) {\n        switch (res.data.code) {\n          case 400:\n            getCode();\n            break;\n          case 1:\n            resolve(res);\n            break;\n          default:\n            resolve(res);\n            break;}\n\n      },\n      fail: function fail(err) {\n        reject(err);\n      } });\n\n  });\n};exports.myRquest = myRquest;\nvar getCode = function getCode() {\n  var origin = location.href; //网页授权的回调域名，这里设置的是本地端口\n  var urlNow = encodeURIComponent(origin); //处理域名\n  var scope = \"snsapi_userinfo\"; //弹框显示授权\n  var appid = \"gh_f1ab99b9f5b5\";\n  // 截取code\n  if (!getUrlCode().code) {\n    var url = \"https://open.weixin.qq.com/connect/oauth2/authorize?appid=\".concat(appid, \"&redirect_uri=\").concat(urlNow, \"&response_type=code&scope=\").concat(scope, \"&state=123#wechat_redirect\");\n    window.location.href = url;\n  } else {\n    uni.request({\n      url: BASE_URL + 'member/login',\n      method: 'POST',\n      data: {\n        code: getUrlCode().code },\n\n      success: function success(res) {\n        uni.setStorage({ key: 'token', data: res.data.token });\n      },\n      fail: function fail(err) {\n      } });\n\n  }\n};\nvar getUrlCode = function getUrlCode() {// 截取url中的code方法\n  var url = location.search;\n  var theRequest = new Object();\n  if (url.indexOf(\"?\") != -1) {\n    var str = url.substr(1);\n    var strs = str.split(\"&\");\n    for (var i = 0; i < strs.length; i++) {\n      theRequest[strs[i].split(\"=\")[0]] = strs[i].split(\"=\")[1];\n    }\n  }\n  return theRequest;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsIm15UnF1ZXN0Iiwib3BzIiwidG9rZW4iLCJ1bmkiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJjb2RlIiwiZ2V0Q29kZSIsImZhaWwiLCJlcnIiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImhyZWYiLCJ1cmxOb3ciLCJlbmNvZGVVUklDb21wb25lbnQiLCJzY29wZSIsImFwcGlkIiwiZ2V0VXJsQ29kZSIsIndpbmRvdyIsInNldFN0b3JhZ2UiLCJzZWFyY2giLCJ0aGVSZXF1ZXN0IiwiT2JqZWN0IiwiaW5kZXhPZiIsInN0ciIsInN1YnN0ciIsInN0cnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJ3RkFBQSxJQUFNQSxRQUFRLEdBQUcsTUFBakI7QUFDTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQVM7QUFDaEMsTUFBSUMsS0FBSjtBQUNBQyxLQUFHLENBQUNDLFVBQUosQ0FBZTtBQUNkQyxPQUFHLEVBQUUsT0FEUztBQUVkQyxXQUFPLEVBQUUsaUJBQVVDLEdBQVYsRUFBZTtBQUN2QkwsV0FBSyxHQUFHSyxHQUFHLENBQUNDLElBQVo7QUFDQSxLQUphLEVBQWY7O0FBTUEsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDUixPQUFHLENBQUNTLE9BQUosQ0FBWTtBQUNYQyxTQUFHLEVBQUVkLFFBQVEsR0FBR0UsR0FBRyxDQUFDWSxHQURUO0FBRVhDLFlBQU0sRUFBRWIsR0FBRyxDQUFDYSxNQUFKLElBQWMsS0FGWDtBQUdYTixVQUFJLEVBQUVQLEdBQUcsQ0FBQ08sSUFBSixJQUFZLEVBSFA7QUFJWE8sWUFBTSxFQUFFO0FBQ1AsaUJBQVMsOExBREYsRUFKRzs7QUFPWFQsYUFBTyxFQUFFLGlCQUFDQyxHQUFELEVBQVM7QUFDakIsZ0JBQVFBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTUSxJQUFqQjtBQUNDLGVBQUssR0FBTDtBQUNDQyxtQkFBTztBQUNQO0FBQ0QsZUFBSyxDQUFMO0FBQ0NQLG1CQUFPLENBQUNILEdBQUQsQ0FBUDtBQUNBO0FBQ0Q7QUFDQ0csbUJBQU8sQ0FBQ0gsR0FBRCxDQUFQO0FBQ0Esa0JBVEY7O0FBV0EsT0FuQlU7QUFvQlhXLFVBQUksRUFBQyxjQUFDQyxHQUFELEVBQVE7QUFDWlIsY0FBTSxDQUFDUSxHQUFELENBQU47QUFDQSxPQXRCVSxFQUFaOztBQXdCQSxHQXpCTSxDQUFQO0FBMEJBLENBbENNLEM7QUFtQ1AsSUFBTUYsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNyQixNQUFJRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBdEIsQ0FEcUIsQ0FDTztBQUM1QixNQUFJQyxNQUFNLEdBQUdDLGtCQUFrQixDQUFDSixNQUFELENBQS9CLENBRnFCLENBRW9CO0FBQ3pDLE1BQUlLLEtBQUssR0FBRyxpQkFBWixDQUhxQixDQUdVO0FBQy9CLE1BQUlDLEtBQUssR0FBRyxpQkFBWjtBQUNBO0FBQ0EsTUFBRyxDQUFDQyxVQUFVLEdBQUdYLElBQWpCLEVBQXNCO0FBQ3JCLFFBQUlILEdBQUcsdUVBQStEYSxLQUEvRCwyQkFBcUZILE1BQXJGLHVDQUF3SEUsS0FBeEgsK0JBQVA7QUFDQUcsVUFBTSxDQUFDUCxRQUFQLENBQWdCQyxJQUFoQixHQUF1QlQsR0FBdkI7QUFDQSxHQUhELE1BR007QUFDTFYsT0FBRyxDQUFDUyxPQUFKLENBQVk7QUFDWEMsU0FBRyxFQUFFZCxRQUFRLEdBQUcsY0FETDtBQUVYZSxZQUFNLEVBQUUsTUFGRztBQUdYTixVQUFJLEVBQUU7QUFDTFEsWUFBSSxFQUFDVyxVQUFVLEdBQUdYLElBRGIsRUFISzs7QUFNWFYsYUFBTyxFQUFFLGlCQUFDQyxHQUFELEVBQVM7QUFDakJKLFdBQUcsQ0FBQzBCLFVBQUosQ0FBZSxFQUFDeEIsR0FBRyxFQUFFLE9BQU4sRUFBY0csSUFBSSxFQUFFRCxHQUFHLENBQUNDLElBQUosQ0FBU04sS0FBN0IsRUFBZjtBQUNBLE9BUlU7QUFTWGdCLFVBQUksRUFBQyxjQUFDQyxHQUFELEVBQVE7QUFDWixPQVZVLEVBQVo7O0FBWUE7QUFDRCxDQXZCRDtBQXdCQSxJQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNLENBQUU7QUFDMUIsTUFBSWQsR0FBRyxHQUFHUSxRQUFRLENBQUNTLE1BQW5CO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQUlDLE1BQUosRUFBakI7QUFDQSxNQUFJbkIsR0FBRyxDQUFDb0IsT0FBSixDQUFZLEdBQVosS0FBb0IsQ0FBQyxDQUF6QixFQUE0QjtBQUMzQixRQUFJQyxHQUFHLEdBQUdyQixHQUFHLENBQUNzQixNQUFKLENBQVcsQ0FBWCxDQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVSxHQUFWLENBQVg7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDckNQLGdCQUFVLENBQUNLLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVFELEtBQVIsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQUQsQ0FBVixHQUFxQ0QsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUQsS0FBUixDQUFjLEdBQWQsRUFBbUIsQ0FBbkIsQ0FBckM7QUFDQTtBQUNEO0FBQ0QsU0FBT04sVUFBUDtBQUNBLENBWEQiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX1VSTCA9ICcvYXBpJ1xyXG5leHBvcnQgY29uc3QgbXlScXVlc3QgPSAob3BzKSA9PiB7XHJcblx0bGV0IHRva2VuO1xyXG5cdHVuaS5nZXRTdG9yYWdlKHtcclxuXHRcdGtleTogJ3Rva2VuJyxcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0dG9rZW4gPSByZXMuZGF0YTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmw6IEJBU0VfVVJMICsgb3BzLnVybCxcclxuXHRcdFx0bWV0aG9kOiBvcHMubWV0aG9kIHx8ICdHRVQnLFxyXG5cdFx0XHRkYXRhOiBvcHMuZGF0YSB8fCB7fSxcclxuXHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0J3Rva2VuJzogJ2V5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUoxYVdRaU9pSXhJaXdpYVhOeklqb2lJaXdpWVhWa0lqb2lJaXdpYVdGMElqb3hOakV3TVRFd05Ua3dMQ0p1WW1ZaU9qRTJNVEF4TVRBMU9UQXNJbVY0Y0NJNk1UWXhNRE0yT1RjNU1IMC5LRXo2aEJKdVJxU3hCRDkwZU9lczZNbWo2Z3ptOTRTMy1BYmZ5LXlScHZNJywgXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2ggKHJlcy5kYXRhLmNvZGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgNDAwOlxyXG5cdFx0XHRcdFx0XHRnZXRDb2RlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlcylcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlcylcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOihlcnIpPT4ge1xyXG5cdFx0XHRcdHJlamVjdChlcnIpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5jb25zdCBnZXRDb2RlID0gKCkgPT4ge1xyXG5cdGxldCBvcmlnaW4gPSBsb2NhdGlvbi5ocmVmOyAvL+e9kemhteaOiOadg+eahOWbnuiwg+Wfn+WQje+8jOi/memHjOiuvue9rueahOaYr+acrOWcsOerr+WPo1xyXG5cdGxldCB1cmxOb3cgPSBlbmNvZGVVUklDb21wb25lbnQob3JpZ2luKTsgLy/lpITnkIbln5/lkI1cclxuXHRsZXQgc2NvcGUgPSBcInNuc2FwaV91c2VyaW5mb1wiOyAvL+W8ueahhuaYvuekuuaOiOadg1xyXG5cdGxldCBhcHBpZCA9IFwiZ2hfZjFhYjk5YjlmNWI1XCI7XHJcblx0Ly8g5oiq5Y+WY29kZVxyXG5cdGlmKCFnZXRVcmxDb2RlKCkuY29kZSl7XHJcblx0XHRsZXQgdXJsID1gaHR0cHM6Ly9vcGVuLndlaXhpbi5xcS5jb20vY29ubmVjdC9vYXV0aDIvYXV0aG9yaXplP2FwcGlkPSR7YXBwaWR9JnJlZGlyZWN0X3VyaT0ke3VybE5vd30mcmVzcG9uc2VfdHlwZT1jb2RlJnNjb3BlPSR7c2NvcGV9JnN0YXRlPTEyMyN3ZWNoYXRfcmVkaXJlY3RgO1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fWVsc2Uge1xyXG5cdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmw6IEJBU0VfVVJMICsgJ21lbWJlci9sb2dpbicsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29kZTpnZXRVcmxDb2RlKCkuY29kZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe2tleTogJ3Rva2VuJyxkYXRhOiByZXMuZGF0YS50b2tlbn0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOihlcnIpPT4ge1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5jb25zdCBnZXRVcmxDb2RlID0gKCkgPT4geyAvLyDmiKrlj5Z1cmzkuK3nmoRjb2Rl5pa55rOVXHJcblx0bGV0IHVybCA9IGxvY2F0aW9uLnNlYXJjaFxyXG5cdGxldCB0aGVSZXF1ZXN0ID0gbmV3IE9iamVjdCgpXHJcblx0aWYgKHVybC5pbmRleE9mKFwiP1wiKSAhPSAtMSkge1xyXG5cdFx0bGV0IHN0ciA9IHVybC5zdWJzdHIoMSlcclxuXHRcdGxldCBzdHJzID0gc3RyLnNwbGl0KFwiJlwiKVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoZVJlcXVlc3Rbc3Ryc1tpXS5zcGxpdChcIj1cIilbMF1dID0gKHN0cnNbaV0uc3BsaXQoXCI9XCIpWzFdKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdGhlUmVxdWVzdDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ })
],[[0,"app-config"]]]);