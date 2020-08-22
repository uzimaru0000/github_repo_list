// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../rust/Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__wbindgen_closure_wrapper366 = exports.__wbindgen_closure_wrapper476 = exports.__wbindgen_throw = exports.__wbindgen_debug_string = exports.__wbindgen_string_get = exports.__wbg_set_afe54b1eeb1aa77c = exports.__wbg_global_62ea2619f58bf94d = exports.__wbg_globalThis_8ebfea75c2dd63ee = exports.__wbg_window_492cfe63a6e41dfa = exports.__wbg_self_179e8c2a5a4c73a3 = exports.__wbg_then_021fcdc7f0350b58 = exports.__wbg_then_ffb6e71f7a6735ad = exports.__wbg_resolve_4df26938859b92e3 = exports.__wbg_new_8172f4fed77fdb7c = exports.__wbg_is_a2bc492e20d950cf = exports.__wbg_newnoargs_e2fdfe2af14a2323 = exports.__wbg_toString_ba4cf417026bc514 = exports.__wbg_push_7114ccbf1c58e41f = exports.__wbg_from_c205b0d4f5dc1441 = exports.__wbg_new_17534eac4df3cd22 = exports.__wbg_call_e9f0ce4da840ab94 = exports.__wbg_get_2e96a823c1c5a5bd = exports.__wbg_iterator_fe2907a0b53cd987 = exports.__wbg_value_5b6409ce10298b82 = exports.__wbg_done_deb5f896b3ea14eb = exports.__wbg_next_610093e8f95067a4 = exports.__wbg_next_ff567d625ac44e49 = exports.__wbindgen_is_object = exports.__wbindgen_is_function = exports.__wbg_get_9ca243f6a0c3698a = exports.__wbg_newwithstrsequencesequence_75bc7764de43e9d4 = exports.__wbg_removeChild_be8cb6ec13799e04 = exports.__wbg_insertBefore_9eecc8d5bbe722b5 = exports.__wbg_appendChild_8658f795c44d1316 = exports.__wbg_textContent_f236fda2771c2599 = exports.__wbg_setnodeValue_b246d98e9aea8713 = exports.__wbg_lastChild_b7825410c31c6d62 = exports.__wbg_fetch_f11dbb4402760452 = exports.__wbg_log_61ea781bd002cc41 = exports.__wbg_setAttribute_156f15ecfed9f628 = exports.__wbg_removeAttribute_3ae98ff009f689b3 = exports.__wbg_namespaceURI_36cdaf4b00c65482 = exports.__wbg_removeEventListener_ccf115bbfa1fb019 = exports.__wbg_addEventListener_27eb43df29303d67 = exports.__wbg_abort_45f593994718ecfd = exports.__wbg_new_ab30a50b386fe26d = exports.__wbg_signal_75d48461b733f3a1 = exports.__wbg_setvalue_dc3cce23da13c2e9 = exports.__wbg_value_6d2605b80cdcbc03 = exports.__wbg_settype_d3d5022d7fd1ef0d = exports.__wbg_setchecked_4c76d21b2d916833 = exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = exports.__wbg_settype_b026aad6dfe74b9d = exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = exports.__wbg_text_e038bae70fd539db = exports.__wbg_arrayBuffer_b6591b9332fe79c7 = exports.__wbg_headers_92ef5ede430593c6 = exports.__wbg_status_647fdfe1d68fa680 = exports.__wbg_newwithstrandinit_b18f1bd8ba76e760 = exports.__wbg_setvalue_fc815a91d9a4dec3 = exports.__wbg_value_036b553531ffb781 = exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = exports.__wbg_querySelector_e0528b8b8b25e9be = exports.__wbg_createTextNode_b7dc170e5271d075 = exports.__wbg_createElementNS_8f6ff05d30034b4f = exports.__wbg_createElement_d00b8e24838e36e1 = exports.__wbg_fetch_39dfad16fe04318d = exports.__wbg_document_d3b6d86af1c5d199 = exports.__wbg_instanceof_Window_e8f84259147dce74 = exports.__wbindgen_string_new = exports.__wbg_WorkerGlobalScope_67f1db380a5f80e1 = exports.__wbindgen_is_undefined = exports.__wbg_Window_2b331ff7d706970d = exports.__wbindgen_object_clone_ref = exports.__wbindgen_cb_drop = exports.__wbindgen_object_drop_ref = exports.run_app = exports.default = void 0;

var _yew_app_bg = _interopRequireDefault(require("./pkg/yew_app_bg.wasm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _yew_app_bg.default;
exports.default = _default;
var run_app = _yew_app_bg.default.run_app;
exports.run_app = run_app;
var __wbindgen_object_drop_ref = _yew_app_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbindgen_cb_drop = _yew_app_bg.default.__wbindgen_cb_drop;
exports.__wbindgen_cb_drop = __wbindgen_cb_drop;
var __wbindgen_object_clone_ref = _yew_app_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbg_Window_2b331ff7d706970d = _yew_app_bg.default.__wbg_Window_2b331ff7d706970d;
exports.__wbg_Window_2b331ff7d706970d = __wbg_Window_2b331ff7d706970d;
var __wbindgen_is_undefined = _yew_app_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbg_WorkerGlobalScope_67f1db380a5f80e1 = _yew_app_bg.default.__wbg_WorkerGlobalScope_67f1db380a5f80e1;
exports.__wbg_WorkerGlobalScope_67f1db380a5f80e1 = __wbg_WorkerGlobalScope_67f1db380a5f80e1;
var __wbindgen_string_new = _yew_app_bg.default.__wbindgen_string_new;
exports.__wbindgen_string_new = __wbindgen_string_new;
var __wbg_instanceof_Window_e8f84259147dce74 = _yew_app_bg.default.__wbg_instanceof_Window_e8f84259147dce74;
exports.__wbg_instanceof_Window_e8f84259147dce74 = __wbg_instanceof_Window_e8f84259147dce74;
var __wbg_document_d3b6d86af1c5d199 = _yew_app_bg.default.__wbg_document_d3b6d86af1c5d199;
exports.__wbg_document_d3b6d86af1c5d199 = __wbg_document_d3b6d86af1c5d199;
var __wbg_fetch_39dfad16fe04318d = _yew_app_bg.default.__wbg_fetch_39dfad16fe04318d;
exports.__wbg_fetch_39dfad16fe04318d = __wbg_fetch_39dfad16fe04318d;
var __wbg_createElement_d00b8e24838e36e1 = _yew_app_bg.default.__wbg_createElement_d00b8e24838e36e1;
exports.__wbg_createElement_d00b8e24838e36e1 = __wbg_createElement_d00b8e24838e36e1;
var __wbg_createElementNS_8f6ff05d30034b4f = _yew_app_bg.default.__wbg_createElementNS_8f6ff05d30034b4f;
exports.__wbg_createElementNS_8f6ff05d30034b4f = __wbg_createElementNS_8f6ff05d30034b4f;
var __wbg_createTextNode_b7dc170e5271d075 = _yew_app_bg.default.__wbg_createTextNode_b7dc170e5271d075;
exports.__wbg_createTextNode_b7dc170e5271d075 = __wbg_createTextNode_b7dc170e5271d075;
var __wbg_querySelector_e0528b8b8b25e9be = _yew_app_bg.default.__wbg_querySelector_e0528b8b8b25e9be;
exports.__wbg_querySelector_e0528b8b8b25e9be = __wbg_querySelector_e0528b8b8b25e9be;
var __wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = _yew_app_bg.default.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f;
exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = __wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f;
var __wbg_value_036b553531ffb781 = _yew_app_bg.default.__wbg_value_036b553531ffb781;
exports.__wbg_value_036b553531ffb781 = __wbg_value_036b553531ffb781;
var __wbg_setvalue_fc815a91d9a4dec3 = _yew_app_bg.default.__wbg_setvalue_fc815a91d9a4dec3;
exports.__wbg_setvalue_fc815a91d9a4dec3 = __wbg_setvalue_fc815a91d9a4dec3;
var __wbg_newwithstrandinit_b18f1bd8ba76e760 = _yew_app_bg.default.__wbg_newwithstrandinit_b18f1bd8ba76e760;
exports.__wbg_newwithstrandinit_b18f1bd8ba76e760 = __wbg_newwithstrandinit_b18f1bd8ba76e760;
var __wbg_status_647fdfe1d68fa680 = _yew_app_bg.default.__wbg_status_647fdfe1d68fa680;
exports.__wbg_status_647fdfe1d68fa680 = __wbg_status_647fdfe1d68fa680;
var __wbg_headers_92ef5ede430593c6 = _yew_app_bg.default.__wbg_headers_92ef5ede430593c6;
exports.__wbg_headers_92ef5ede430593c6 = __wbg_headers_92ef5ede430593c6;
var __wbg_arrayBuffer_b6591b9332fe79c7 = _yew_app_bg.default.__wbg_arrayBuffer_b6591b9332fe79c7;
exports.__wbg_arrayBuffer_b6591b9332fe79c7 = __wbg_arrayBuffer_b6591b9332fe79c7;
var __wbg_text_e038bae70fd539db = _yew_app_bg.default.__wbg_text_e038bae70fd539db;
exports.__wbg_text_e038bae70fd539db = __wbg_text_e038bae70fd539db;
var __wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = _yew_app_bg.default.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655;
exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = __wbg_instanceof_HtmlButtonElement_f5c73c981d727655;
var __wbg_settype_b026aad6dfe74b9d = _yew_app_bg.default.__wbg_settype_b026aad6dfe74b9d;
exports.__wbg_settype_b026aad6dfe74b9d = __wbg_settype_b026aad6dfe74b9d;
var __wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = _yew_app_bg.default.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78;
exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = __wbg_instanceof_HtmlInputElement_aae90057bd26cb78;
var __wbg_setchecked_4c76d21b2d916833 = _yew_app_bg.default.__wbg_setchecked_4c76d21b2d916833;
exports.__wbg_setchecked_4c76d21b2d916833 = __wbg_setchecked_4c76d21b2d916833;
var __wbg_settype_d3d5022d7fd1ef0d = _yew_app_bg.default.__wbg_settype_d3d5022d7fd1ef0d;
exports.__wbg_settype_d3d5022d7fd1ef0d = __wbg_settype_d3d5022d7fd1ef0d;
var __wbg_value_6d2605b80cdcbc03 = _yew_app_bg.default.__wbg_value_6d2605b80cdcbc03;
exports.__wbg_value_6d2605b80cdcbc03 = __wbg_value_6d2605b80cdcbc03;
var __wbg_setvalue_dc3cce23da13c2e9 = _yew_app_bg.default.__wbg_setvalue_dc3cce23da13c2e9;
exports.__wbg_setvalue_dc3cce23da13c2e9 = __wbg_setvalue_dc3cce23da13c2e9;
var __wbg_signal_75d48461b733f3a1 = _yew_app_bg.default.__wbg_signal_75d48461b733f3a1;
exports.__wbg_signal_75d48461b733f3a1 = __wbg_signal_75d48461b733f3a1;
var __wbg_new_ab30a50b386fe26d = _yew_app_bg.default.__wbg_new_ab30a50b386fe26d;
exports.__wbg_new_ab30a50b386fe26d = __wbg_new_ab30a50b386fe26d;
var __wbg_abort_45f593994718ecfd = _yew_app_bg.default.__wbg_abort_45f593994718ecfd;
exports.__wbg_abort_45f593994718ecfd = __wbg_abort_45f593994718ecfd;
var __wbg_addEventListener_27eb43df29303d67 = _yew_app_bg.default.__wbg_addEventListener_27eb43df29303d67;
exports.__wbg_addEventListener_27eb43df29303d67 = __wbg_addEventListener_27eb43df29303d67;
var __wbg_removeEventListener_ccf115bbfa1fb019 = _yew_app_bg.default.__wbg_removeEventListener_ccf115bbfa1fb019;
exports.__wbg_removeEventListener_ccf115bbfa1fb019 = __wbg_removeEventListener_ccf115bbfa1fb019;
var __wbg_namespaceURI_36cdaf4b00c65482 = _yew_app_bg.default.__wbg_namespaceURI_36cdaf4b00c65482;
exports.__wbg_namespaceURI_36cdaf4b00c65482 = __wbg_namespaceURI_36cdaf4b00c65482;
var __wbg_removeAttribute_3ae98ff009f689b3 = _yew_app_bg.default.__wbg_removeAttribute_3ae98ff009f689b3;
exports.__wbg_removeAttribute_3ae98ff009f689b3 = __wbg_removeAttribute_3ae98ff009f689b3;
var __wbg_setAttribute_156f15ecfed9f628 = _yew_app_bg.default.__wbg_setAttribute_156f15ecfed9f628;
exports.__wbg_setAttribute_156f15ecfed9f628 = __wbg_setAttribute_156f15ecfed9f628;
var __wbg_log_61ea781bd002cc41 = _yew_app_bg.default.__wbg_log_61ea781bd002cc41;
exports.__wbg_log_61ea781bd002cc41 = __wbg_log_61ea781bd002cc41;
var __wbg_fetch_f11dbb4402760452 = _yew_app_bg.default.__wbg_fetch_f11dbb4402760452;
exports.__wbg_fetch_f11dbb4402760452 = __wbg_fetch_f11dbb4402760452;
var __wbg_lastChild_b7825410c31c6d62 = _yew_app_bg.default.__wbg_lastChild_b7825410c31c6d62;
exports.__wbg_lastChild_b7825410c31c6d62 = __wbg_lastChild_b7825410c31c6d62;
var __wbg_setnodeValue_b246d98e9aea8713 = _yew_app_bg.default.__wbg_setnodeValue_b246d98e9aea8713;
exports.__wbg_setnodeValue_b246d98e9aea8713 = __wbg_setnodeValue_b246d98e9aea8713;
var __wbg_textContent_f236fda2771c2599 = _yew_app_bg.default.__wbg_textContent_f236fda2771c2599;
exports.__wbg_textContent_f236fda2771c2599 = __wbg_textContent_f236fda2771c2599;
var __wbg_appendChild_8658f795c44d1316 = _yew_app_bg.default.__wbg_appendChild_8658f795c44d1316;
exports.__wbg_appendChild_8658f795c44d1316 = __wbg_appendChild_8658f795c44d1316;
var __wbg_insertBefore_9eecc8d5bbe722b5 = _yew_app_bg.default.__wbg_insertBefore_9eecc8d5bbe722b5;
exports.__wbg_insertBefore_9eecc8d5bbe722b5 = __wbg_insertBefore_9eecc8d5bbe722b5;
var __wbg_removeChild_be8cb6ec13799e04 = _yew_app_bg.default.__wbg_removeChild_be8cb6ec13799e04;
exports.__wbg_removeChild_be8cb6ec13799e04 = __wbg_removeChild_be8cb6ec13799e04;
var __wbg_newwithstrsequencesequence_75bc7764de43e9d4 = _yew_app_bg.default.__wbg_newwithstrsequencesequence_75bc7764de43e9d4;
exports.__wbg_newwithstrsequencesequence_75bc7764de43e9d4 = __wbg_newwithstrsequencesequence_75bc7764de43e9d4;
var __wbg_get_9ca243f6a0c3698a = _yew_app_bg.default.__wbg_get_9ca243f6a0c3698a;
exports.__wbg_get_9ca243f6a0c3698a = __wbg_get_9ca243f6a0c3698a;
var __wbindgen_is_function = _yew_app_bg.default.__wbindgen_is_function;
exports.__wbindgen_is_function = __wbindgen_is_function;
var __wbindgen_is_object = _yew_app_bg.default.__wbindgen_is_object;
exports.__wbindgen_is_object = __wbindgen_is_object;
var __wbg_next_ff567d625ac44e49 = _yew_app_bg.default.__wbg_next_ff567d625ac44e49;
exports.__wbg_next_ff567d625ac44e49 = __wbg_next_ff567d625ac44e49;
var __wbg_next_610093e8f95067a4 = _yew_app_bg.default.__wbg_next_610093e8f95067a4;
exports.__wbg_next_610093e8f95067a4 = __wbg_next_610093e8f95067a4;
var __wbg_done_deb5f896b3ea14eb = _yew_app_bg.default.__wbg_done_deb5f896b3ea14eb;
exports.__wbg_done_deb5f896b3ea14eb = __wbg_done_deb5f896b3ea14eb;
var __wbg_value_5b6409ce10298b82 = _yew_app_bg.default.__wbg_value_5b6409ce10298b82;
exports.__wbg_value_5b6409ce10298b82 = __wbg_value_5b6409ce10298b82;
var __wbg_iterator_fe2907a0b53cd987 = _yew_app_bg.default.__wbg_iterator_fe2907a0b53cd987;
exports.__wbg_iterator_fe2907a0b53cd987 = __wbg_iterator_fe2907a0b53cd987;
var __wbg_get_2e96a823c1c5a5bd = _yew_app_bg.default.__wbg_get_2e96a823c1c5a5bd;
exports.__wbg_get_2e96a823c1c5a5bd = __wbg_get_2e96a823c1c5a5bd;
var __wbg_call_e9f0ce4da840ab94 = _yew_app_bg.default.__wbg_call_e9f0ce4da840ab94;
exports.__wbg_call_e9f0ce4da840ab94 = __wbg_call_e9f0ce4da840ab94;
var __wbg_new_17534eac4df3cd22 = _yew_app_bg.default.__wbg_new_17534eac4df3cd22;
exports.__wbg_new_17534eac4df3cd22 = __wbg_new_17534eac4df3cd22;
var __wbg_from_c205b0d4f5dc1441 = _yew_app_bg.default.__wbg_from_c205b0d4f5dc1441;
exports.__wbg_from_c205b0d4f5dc1441 = __wbg_from_c205b0d4f5dc1441;
var __wbg_push_7114ccbf1c58e41f = _yew_app_bg.default.__wbg_push_7114ccbf1c58e41f;
exports.__wbg_push_7114ccbf1c58e41f = __wbg_push_7114ccbf1c58e41f;
var __wbg_toString_ba4cf417026bc514 = _yew_app_bg.default.__wbg_toString_ba4cf417026bc514;
exports.__wbg_toString_ba4cf417026bc514 = __wbg_toString_ba4cf417026bc514;
var __wbg_newnoargs_e2fdfe2af14a2323 = _yew_app_bg.default.__wbg_newnoargs_e2fdfe2af14a2323;
exports.__wbg_newnoargs_e2fdfe2af14a2323 = __wbg_newnoargs_e2fdfe2af14a2323;
var __wbg_is_a2bc492e20d950cf = _yew_app_bg.default.__wbg_is_a2bc492e20d950cf;
exports.__wbg_is_a2bc492e20d950cf = __wbg_is_a2bc492e20d950cf;
var __wbg_new_8172f4fed77fdb7c = _yew_app_bg.default.__wbg_new_8172f4fed77fdb7c;
exports.__wbg_new_8172f4fed77fdb7c = __wbg_new_8172f4fed77fdb7c;
var __wbg_resolve_4df26938859b92e3 = _yew_app_bg.default.__wbg_resolve_4df26938859b92e3;
exports.__wbg_resolve_4df26938859b92e3 = __wbg_resolve_4df26938859b92e3;
var __wbg_then_ffb6e71f7a6735ad = _yew_app_bg.default.__wbg_then_ffb6e71f7a6735ad;
exports.__wbg_then_ffb6e71f7a6735ad = __wbg_then_ffb6e71f7a6735ad;
var __wbg_then_021fcdc7f0350b58 = _yew_app_bg.default.__wbg_then_021fcdc7f0350b58;
exports.__wbg_then_021fcdc7f0350b58 = __wbg_then_021fcdc7f0350b58;
var __wbg_self_179e8c2a5a4c73a3 = _yew_app_bg.default.__wbg_self_179e8c2a5a4c73a3;
exports.__wbg_self_179e8c2a5a4c73a3 = __wbg_self_179e8c2a5a4c73a3;
var __wbg_window_492cfe63a6e41dfa = _yew_app_bg.default.__wbg_window_492cfe63a6e41dfa;
exports.__wbg_window_492cfe63a6e41dfa = __wbg_window_492cfe63a6e41dfa;
var __wbg_globalThis_8ebfea75c2dd63ee = _yew_app_bg.default.__wbg_globalThis_8ebfea75c2dd63ee;
exports.__wbg_globalThis_8ebfea75c2dd63ee = __wbg_globalThis_8ebfea75c2dd63ee;
var __wbg_global_62ea2619f58bf94d = _yew_app_bg.default.__wbg_global_62ea2619f58bf94d;
exports.__wbg_global_62ea2619f58bf94d = __wbg_global_62ea2619f58bf94d;
var __wbg_set_afe54b1eeb1aa77c = _yew_app_bg.default.__wbg_set_afe54b1eeb1aa77c;
exports.__wbg_set_afe54b1eeb1aa77c = __wbg_set_afe54b1eeb1aa77c;
var __wbindgen_string_get = _yew_app_bg.default.__wbindgen_string_get;
exports.__wbindgen_string_get = __wbindgen_string_get;
var __wbindgen_debug_string = _yew_app_bg.default.__wbindgen_debug_string;
exports.__wbindgen_debug_string = __wbindgen_debug_string;
var __wbindgen_throw = _yew_app_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_closure_wrapper476 = _yew_app_bg.default.__wbindgen_closure_wrapper476;
exports.__wbindgen_closure_wrapper476 = __wbindgen_closure_wrapper476;
var __wbindgen_closure_wrapper366 = _yew_app_bg.default.__wbindgen_closure_wrapper366;
exports.__wbindgen_closure_wrapper366 = __wbindgen_closure_wrapper366;
},{"./pkg/yew_app_bg.wasm":"../rust/pkg/yew_app_bg.wasm"}],"main.js":[function(require,module,exports) {
"use strict";

var _Cargo = require("../rust/Cargo.toml");

(0, _Cargo.run_app)();
},{"../rust/Cargo.toml":"../rust/Cargo.toml"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64105" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/Users/uzimaru/Documents/rust/github_repo_list/node_modules/parcel-plugin-wasm.rs";
var wasm;const __exports = {};

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_22(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h764d74a9058a7c27(arg0, arg1, addHeapObject(arg2));
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
function __wbg_adapter_25(arg0, arg1, arg2) {
    try {
        wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h364f6a6a1177d890(arg0, arg1, addBorrowedObject(arg2));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
*/
__exports. run_app = function() {
    wasm.run_app();
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

__exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

__exports.__wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    return ret;
};

__exports.__wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

__exports.__wbg_Window_2b331ff7d706970d = function(arg0) {
    var ret = getObject(arg0).Window;
    return addHeapObject(ret);
};

__exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

__exports.__wbg_WorkerGlobalScope_67f1db380a5f80e1 = function(arg0) {
    var ret = getObject(arg0).WorkerGlobalScope;
    return addHeapObject(ret);
};

__exports.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

__exports.__wbg_instanceof_Window_e8f84259147dce74 = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

__exports.__wbg_document_d3b6d86af1c5d199 = function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

__exports.__wbg_fetch_39dfad16fe04318d = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).fetch(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

__exports.__wbg_createElement_d00b8e24838e36e1 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

__exports.__wbg_createElementNS_8f6ff05d30034b4f = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    var ret = getObject(arg0).createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    return addHeapObject(ret);
});

__exports.__wbg_createTextNode_b7dc170e5271d075 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createTextNode(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
};

__exports.__wbg_querySelector_e0528b8b8b25e9be = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

__exports.__wbg_instanceof_HtmlTextAreaElement_2be5c0dd95f91e2f = function(arg0) {
    var ret = getObject(arg0) instanceof HTMLTextAreaElement;
    return ret;
};

__exports.__wbg_value_036b553531ffb781 = function(arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbg_setvalue_fc815a91d9a4dec3 = function(arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
};

__exports.__wbg_newwithstrandinit_b18f1bd8ba76e760 = handleError(function(arg0, arg1, arg2) {
    var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
    return addHeapObject(ret);
});

__exports.__wbg_status_647fdfe1d68fa680 = function(arg0) {
    var ret = getObject(arg0).status;
    return ret;
};

__exports.__wbg_headers_92ef5ede430593c6 = function(arg0) {
    var ret = getObject(arg0).headers;
    return addHeapObject(ret);
};

__exports.__wbg_arrayBuffer_b6591b9332fe79c7 = handleError(function(arg0) {
    var ret = getObject(arg0).arrayBuffer();
    return addHeapObject(ret);
});

__exports.__wbg_text_e038bae70fd539db = handleError(function(arg0) {
    var ret = getObject(arg0).text();
    return addHeapObject(ret);
});

__exports.__wbg_instanceof_HtmlButtonElement_f5c73c981d727655 = function(arg0) {
    var ret = getObject(arg0) instanceof HTMLButtonElement;
    return ret;
};

__exports.__wbg_settype_b026aad6dfe74b9d = function(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
};

__exports.__wbg_instanceof_HtmlInputElement_aae90057bd26cb78 = function(arg0) {
    var ret = getObject(arg0) instanceof HTMLInputElement;
    return ret;
};

__exports.__wbg_setchecked_4c76d21b2d916833 = function(arg0, arg1) {
    getObject(arg0).checked = arg1 !== 0;
};

__exports.__wbg_settype_d3d5022d7fd1ef0d = function(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
};

__exports.__wbg_value_6d2605b80cdcbc03 = function(arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbg_setvalue_dc3cce23da13c2e9 = function(arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
};

__exports.__wbg_signal_75d48461b733f3a1 = function(arg0) {
    var ret = getObject(arg0).signal;
    return addHeapObject(ret);
};

__exports.__wbg_new_ab30a50b386fe26d = handleError(function() {
    var ret = new AbortController();
    return addHeapObject(ret);
});

__exports.__wbg_abort_45f593994718ecfd = function(arg0) {
    getObject(arg0).abort();
};

__exports.__wbg_addEventListener_27eb43df29303d67 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
});

__exports.__wbg_removeEventListener_ccf115bbfa1fb019 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), arg4 !== 0);
});

__exports.__wbg_namespaceURI_36cdaf4b00c65482 = function(arg0, arg1) {
    var ret = getObject(arg1).namespaceURI;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbg_removeAttribute_3ae98ff009f689b3 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).removeAttribute(getStringFromWasm0(arg1, arg2));
});

__exports.__wbg_setAttribute_156f15ecfed9f628 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

__exports.__wbg_log_61ea781bd002cc41 = function(arg0) {
    console.log(getObject(arg0));
};

__exports.__wbg_fetch_f11dbb4402760452 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).fetch(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

__exports.__wbg_lastChild_b7825410c31c6d62 = function(arg0) {
    var ret = getObject(arg0).lastChild;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

__exports.__wbg_setnodeValue_b246d98e9aea8713 = function(arg0, arg1, arg2) {
    getObject(arg0).nodeValue = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
};

__exports.__wbg_textContent_f236fda2771c2599 = function(arg0, arg1) {
    var ret = getObject(arg1).textContent;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbg_appendChild_8658f795c44d1316 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_insertBefore_9eecc8d5bbe722b5 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).insertBefore(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

__exports.__wbg_removeChild_be8cb6ec13799e04 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).removeChild(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_newwithstrsequencesequence_75bc7764de43e9d4 = handleError(function(arg0) {
    var ret = new Headers(getObject(arg0));
    return addHeapObject(ret);
});

__exports.__wbg_get_9ca243f6a0c3698a = function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
};

__exports.__wbindgen_is_function = function(arg0) {
    var ret = typeof(getObject(arg0)) === 'function';
    return ret;
};

__exports.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    var ret = typeof(val) === 'object' && val !== null;
    return ret;
};

__exports.__wbg_next_ff567d625ac44e49 = function(arg0) {
    var ret = getObject(arg0).next;
    return addHeapObject(ret);
};

__exports.__wbg_next_610093e8f95067a4 = handleError(function(arg0) {
    var ret = getObject(arg0).next();
    return addHeapObject(ret);
});

__exports.__wbg_done_deb5f896b3ea14eb = function(arg0) {
    var ret = getObject(arg0).done;
    return ret;
};

__exports.__wbg_value_5b6409ce10298b82 = function(arg0) {
    var ret = getObject(arg0).value;
    return addHeapObject(ret);
};

__exports.__wbg_iterator_fe2907a0b53cd987 = function() {
    var ret = Symbol.iterator;
    return addHeapObject(ret);
};

__exports.__wbg_get_2e96a823c1c5a5bd = handleError(function(arg0, arg1) {
    var ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_call_e9f0ce4da840ab94 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

__exports.__wbg_new_17534eac4df3cd22 = function() {
    var ret = new Array();
    return addHeapObject(ret);
};

__exports.__wbg_from_c205b0d4f5dc1441 = function(arg0) {
    var ret = Array.from(getObject(arg0));
    return addHeapObject(ret);
};

__exports.__wbg_push_7114ccbf1c58e41f = function(arg0, arg1) {
    var ret = getObject(arg0).push(getObject(arg1));
    return ret;
};

__exports.__wbg_toString_ba4cf417026bc514 = function(arg0) {
    var ret = getObject(arg0).toString();
    return addHeapObject(ret);
};

__exports.__wbg_newnoargs_e2fdfe2af14a2323 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

__exports.__wbg_is_a2bc492e20d950cf = function(arg0, arg1) {
    var ret = Object.is(getObject(arg0), getObject(arg1));
    return ret;
};

__exports.__wbg_new_8172f4fed77fdb7c = function() {
    var ret = new Object();
    return addHeapObject(ret);
};

__exports.__wbg_resolve_4df26938859b92e3 = function(arg0) {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
};

__exports.__wbg_then_ffb6e71f7a6735ad = function(arg0, arg1) {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
};

__exports.__wbg_then_021fcdc7f0350b58 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
};

__exports.__wbg_self_179e8c2a5a4c73a3 = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

__exports.__wbg_window_492cfe63a6e41dfa = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

__exports.__wbg_globalThis_8ebfea75c2dd63ee = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

__exports.__wbg_global_62ea2619f58bf94d = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

__exports.__wbg_set_afe54b1eeb1aa77c = handleError(function(arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
});

__exports.__wbindgen_string_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports.__wbindgen_closure_wrapper476 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 180, __wbg_adapter_22);
    return addHeapObject(ret);
};

__exports.__wbindgen_closure_wrapper366 = function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 134, __wbg_adapter_25);
    return addHeapObject(ret);
};



      function init(wasm_path) {
          const fetchPromise = fetch(wasm_path);
          let resultPromise;
          if (typeof WebAssembly.instantiateStreaming === 'function') {
              resultPromise = WebAssembly.instantiateStreaming(fetchPromise, { './yew_app_bg.js': __exports });
          } else {
              resultPromise = fetchPromise
              .then(response => response.arrayBuffer())
              .then(buffer => WebAssembly.instantiate(buffer, { './yew_app_bg.js': __exports }));
          }
          return resultPromise.then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      };
      function init_node(wasm_path) {
          const fs = require('fs');
          return new Promise(function(resolve, reject) {
              fs.readFile(__dirname + wasm_path, function(err, data) {
                  if (err) {
                      reject(err);
                  } else {
                      resolve(data.buffer);
                  }
              });
          })
          .then(data => WebAssembly.instantiate(data, { './yew_app_bg': __exports }))
          .then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      }
      const wasm_bindgen = Object.assign(false ? init_node : init, __exports);
      module.exports = function loadWASMBundle(bundle) {
            return wasm_bindgen(bundle).then(() => __exports)
      }
    
},{"fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["yew_app_bg.7e967060.wasm","../rust/pkg/yew_app_bg.wasm"]]).then(function(){require("main.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/main.1f19ae8e.js.map