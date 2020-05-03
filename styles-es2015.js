(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nhtml {\n    line-height: 1.5;\n    font-family: \"Roboto\",sans-serif;\n    font-weight: normal;\n    color: rgba(0,0,0,0.87);\n}\nbody {\n    margin: 0px;\n    font-size: 16px;\n}\nbody::after {\n    content: \"\";\n    background: url('/assets/bg2.png');\n    background-repeat: repeat;\n    opacity: 0.10;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    z-index: -1;   \n  }\nfooter  {\n    background-color: #007BD7;\n    height: 70px;\n}\nfooter p {\n    margin: auto;\n    padding: 20px;\n    text-align: center;\n    text-transform: uppercase;\n}\nnav  {\n    min-height: calc(100vh - 70px);    \n    background-color: #fafafa;\n    float:left;\n    width:190px;\n    z-index: 999;\n}\n.container {\n    position: fixed;\n    overflow:hidden;\n    width:100%;\n    height:100vh;\n}\n.main  {\n    min-height: calc(100vh - 145px);\n    padding-left: 190px;    \n}\n.text-middle {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.text-blue {\n    color: #007BD7;\n}\n.text-white {\n    color:#ffffff;\n}\n.text-wine {\n    color: #e25d28;\n}\n.text-brown {\n    color: #795548;\n}\n.brand {\n    border-bottom: 3px solid #ddd;\n    box-sizing: content-box;\n    min-height: 90px;\n    margin-top: -20px;\n    /* padding: 20px 20px 30px 20px; */\n}\n.brand .header-row {\n    height: 70px;\n    background-color: #007BD7;\n}\n.header-row h1 {\n    padding-top: 10px;\n}\n.header-row h1 span{\n    margin-left: 45px;\n}\n.brand .header-row .collapse-btn {     \n    font-weight: 200;\n    font-size: 1.9rem;\n    margin: 0px 0px 0px 20px;\n}\n.brand .name {\n    font-size: 1.7rem;\n    line-height: 2.212rem; \n    font-weight: 200;\n    margin-top: 10px;\n    text-align: center;\n}\n.brand .profile  {\n    font-size: 1.0rem;\n    font-weight: 300;\n    line-height: 1.2rem;\n    -webkit-margin-before: 0.5rem;\n            margin-block-start: 0.5rem;\n    -webkit-margin-after: 0.5rem;\n            margin-block-end: 0.5rem;\n}\nnav ul.side-nav {\n    list-style-type: none;\n    -webkit-padding-start: 0px;\n            padding-inline-start: 0px;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-before: 0px;\n            margin-block-start: 0px;\n}\nnav ul.side-nav li {\n    list-style-type: none;\n    padding:0px;\n    line-height: 50px;\n}\nnav ul.side-nav li:hover {\n    background-color: #dddddd;\n}\nnav ul.side-nav li a {\n    box-sizing: content-box;\n    display: block;\n    padding: 10px 10px 12px 10px;\n    font-weight: 500;\n}\nnav ul.side-nav li a:hover {\n    background-color: #fafafa;\n    border-left: 3px solid;\n    border-bottom: 3px solid;\n}\nnav ul.side-nav li a span {\n    color: #333333 !important;\n}\nnav ul.side-nav li a.active {\n    background-color: #fafafa;\n    font-weight:700;\n    border-bottom: 3px solid;\n}\nnav ul.side-nav li a fa-icon{\n    padding: 0 15px;\n    position: relative;\n    font-size: 1.2rem;\n}\n.waves-effect {\n    position: relative;\n    cursor: pointer;\n    display: inline-block;\n    overflow: hidden;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    vertical-align: middle;\n    z-index: 1;\n    will-change: opacity,transform;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n}\n.visible {\n    display: block;\n}\n.invisible {\n    display: none;\n}\n.detail  {  \n    margin-left: 0px;\n}\n.header {\n    background-color: #007BD7;\n    min-height: 40px;\n    height: 70px;\n    text-transform: uppercase;    \n    padding: 0px 10px 0px 10px;\n    position: absolute;\n    top:0;\n    left:190px;\n    right:0;\n}\n.header h1  {\n    font-weight: 200;\n    font-size: 1.5rem;\n    margin-top: 17px;\n}\n.content {\n    min-height: 60px;\n    margin-left:20px;\n    margin-top: 75px;\n}\n.profile-list {\n    list-style: none;\n}\n.profile-list .profile {\n    line-height: 60px;\n}\n.profile-list .profile fa-icon {    \n    font-weight: 200;\n    font-size: 1.5rem;\n}\n.profile-list .profile span {\n    margin-left:10px;\n    font-weight: 200;\n    font-size: 1.3rem;\n}", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\workspace\rachittyagi.github.io\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);