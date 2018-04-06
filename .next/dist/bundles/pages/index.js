module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_SearchBar__ = __webpack_require__("./components/Header/SearchBar.js");
var _jsxFileName = '/home/jacek/dev/js/rplay/components/Header.js';





var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'header',
    {
      className: 'jsx-2436494273',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
      { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        {
          className: 'jsx-2436494273',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        'LOGO HERE'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header_SearchBar__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2436494273',
      css: 'header.jsx-2436494273{padding:15px 60px 15px 120px;width:100%;max-width:1200px;height:100px;position:fixed;z-index:1;top:0;left:0;background-color:transparent;overflow-y:hidden;box-sizing:border-box;}a.jsx-2436494273{display:inline-block;float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQixBQUdzQyxBQWFSLHFCQUNWLFFBYkEsR0FjYixRQWJtQixpQkFDSixhQUNFLGVBQ0wsVUFDSixNQUNDLE9BQ3NCLDZCQUNYLGtCQUNJLHNCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYWNlay9kZXYvanMvcnBsYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vSGVhZGVyL1NlYXJjaEJhcidcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YT5MT0dPIEhFUkU8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxTZWFyY2hCYXIgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDYwcHggMTVweCAxMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=components/Header.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Header/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchForm__ = __webpack_require__("./components/Header/SearchForm.js");
var _jsxFileName = '/home/jacek/dev/js/rplay/components/Header/SearchBar.js';




var SearchBar = function SearchBar() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-647592292' + ' ' + 'searchBar',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchForm__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '647592292',
      css: '.searchBar.jsx-647592292{float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL1NlYXJjaEJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFHcUIsWUFDZCIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci9TZWFyY2hCYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamFjZWsvZGV2L2pzL3JwbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9TZWFyY2hGb3JtJ1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2hCYXInPlxuICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNlYXJjaEJhciB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcbiJdfQ== */\n/*@ sourceURL=components/Header/SearchBar.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./components/Header/SearchForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/jacek/dev/js/rplay/components/Header/SearchForm.js";


var SearchForm = function SearchForm() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "form",
    { method: "post", className: "jsx-1102379837",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "button",
      { title: "Search", value: "S", type: "submit", className: "jsx-1102379837",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        className: "jsx-1102379837" + " " + "fa fa-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", { type: "text", placeholder: "What do you want to see?", className: "jsx-1102379837" + " " + "textbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "1102379837",
      css: "form.jsx-1102379837{outline:0;float:left;box-shadow:0 1px 8px rgba(209,209,209,0.3),0 1px 8px rgba(209,209,209,0.3);border-radius:1px;}input.textbox.jsx-1102379837{font-family:'Ubuntu Condensed',sans-serif;outline:0;height:66px;width:650px;line-height:66px;padding:0 16px;background-color:rgba(255,255,255,0.8);color:#B9B9B9;border:0;float:left;border-radius:0 1px 1px 0;font-size:30px;}input.textbox.jsx-1102379837::-webkit-input-placeholder{color:#B9B9B9;font-family:'Ubuntu Condensed',sans-serif;line-height:66px;font-size:30px;}input.textbox.jsx-1102379837::-moz-placeholder{color:#B9B9B9;font-family:'Ubuntu Condensed',sans-serif;line-height:66px;font-size:30px;}input.textbox.jsx-1102379837:-ms-input-placeholder{color:#B9B9B9;font-family:'Ubuntu Condensed',sans-serif;line-height:66px;font-size:30px;}input.textbox.jsx-1102379837::placeholder{color:#B9B9B9;font-family:'Ubuntu Condensed',sans-serif;line-height:66px;font-size:30px;}button.jsx-1102379837{outline:0;border:0;background-color:rgba(255,255,255,0.8);float:left;height:66px;width:42px;text-align:center;line-height:66px;color:#B9B9B9;font-size:30px;text-rendering:auto;border-radius:1px 0 0 1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL1NlYXJjaEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWdCLEFBR21CLEFBTWlDLEFBYzdCLEFBT0osVUExQkMsQUEyQkYsSUFQa0MsS0FRRCxFQTNCd0MscUJBS3hFLFVBQ0UsSUFjSyxFQVFOLE1BckJDLEtBc0JBLElBUkcsR0FiRSxLQXNCTixPQVJiLElBU29CLENBdEJILEdBUkcsWUFTd0IsRUFzQnpCLElBOUJuQixhQStCZ0IsY0FDQyxNQXZCRCxTQXdCTSxLQXZCWCxTQUNFLE1BdUJlLEtBdEJBLHFCQXVCNUIsS0F0QmlCLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyL1NlYXJjaEZvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamFjZWsvZGV2L2pzL3JwbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VhcmNoRm9ybSA9ICgpID0+IChcbiAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgIDxidXR0b24gdGl0bGU9XCJTZWFyY2hcIiB2YWx1ZT1cIlNcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWx0ZXJcIj48L2k+XG4gICAgPC9idXR0b24+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidGV4dGJveFwiIHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3Ugd2FudCB0byBzZWU/XCIgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBmb3JtIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDIwOSwgMjA5LCAyMDksIDAuMyksIDAgMXB4IDhweCByZ2JhKDIwOSwgMjA5LCAyMDksIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgIH1cbiAgICAgIGlucHV0LnRleHRib3gge1xuICAgICAgICBmb250LWZhbWlseTogJ1VidW50dSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgIHdpZHRoOiA2NTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY2cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBjb2xvcjogI0I5QjlCOTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxcHggMXB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cbiAgICAgIGlucHV0LnRleHRib3g6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICNCOUI5Qjk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NnB4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogNjZweDtcbiAgICAgICAgY29sb3I6ICNCOUI5Qjk7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweCAwIDAgMXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9mb3JtPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGb3JtXG4iXX0= */\n/*@ sourceURL=components/Header/SearchForm.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SearchForm);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Sidebar__ = __webpack_require__("./components/Sidebar.js");
var _jsxFileName = '/home/jacek/dev/js/rplay/components/Layout.js';






var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-1881806884',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Condensed', rel: 'stylesheet', className: 'jsx-1881806884',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous', className: 'jsx-1881806884',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Sidebar__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'main',
      {
        className: 'jsx-1881806884',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2478087851',
      css: 'main.jsx-1881806884{padding-left:100px;padding-top:100px;max-width:1200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUc0QixtQkFDRCxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamFjZWsvZGV2L2pzL3JwbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcidcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dXxVYnVudHUrQ29uZGVuc2VkXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGludGVncml0eT1cInNoYTM4NC13dmZYcHFwWlpWUUdLNlRBaDVQVmxHT2ZRTkhTb0QyeGJFK1FrUHhDQUZsTkVldm9FSDNTbDBzaWJWY09RVm5OXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8U2lkZWJhciAvPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8bWFpbj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L21haW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3420154278',
      css: 'body{background-color:#EBEBEB;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCdUIsQUFHa0MseUJBQzNCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2phY2VrL2Rldi9qcy9ycGxheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHV8VWJ1bnR1K0NvbmRlbnNlZFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd3ZmWHBxcFpaVlFHSzZUQWg1UFZsR09mUU5IU29EMnhiRStRa1B4Q0FGbE5FZXZvRUgzU2wwc2liVmNPUVZuTlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFNpZGViYXIgLz5cbiAgICA8SGVhZGVyIC8+XG4gICAgPG1haW4+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9tYWluPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=components/Layout.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sidebar_Item__ = __webpack_require__("./components/Sidebar/Item.js");
var _jsxFileName = "/home/jacek/dev/js/rplay/components/Sidebar.js";




var Sidebar = function Sidebar(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "nav",
    {
      className: "jsx-4131411691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-4131411691" + " " + "navburger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        className: "jsx-4131411691" + " " + "fa fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "ul",
      {
        className: "jsx-4131411691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Sidebar_Item__["a" /* default */], { href: "/", icon: "tag", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Sidebar_Item__["a" /* default */], { href: "/", icon: "filter", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Sidebar_Item__["a" /* default */], { href: "/", icon: "calendar", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Sidebar_Item__["a" /* default */], { href: "/", icon: "code", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "4131411691",
      css: "nav.jsx-4131411691{width:60px;height:100%;position:fixed;z-index:2;top:0;left:0;background-color:#2E2E2E;overflow-x:hidden;padding-top:20px;box-shadow:3px 0 5px rgba(0,0,0,0.6),3px 0 5px rgba(0,0,0,0.6);}.navburger.jsx-4131411691{text-align:center;color:#a2a2a2;font-size:1.5em;}.navburger.jsx-4131411691 i.fa.jsx-4131411691{font-weight:300;}ul.jsx-4131411691{margin:0;padding:0;display:block;list-style:none;width:100%;margin-top:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHb0IsQUFZTyxBQUtGLEFBR1AsU0FDQyxFQXBCRSxLQWlCZCxFQUxnQixDQVNBLElBcEJDLFNBWUMsQ0FTQSxLQXBCTixVQUNKLEFBV1IsQ0FTYSxLQW5CSixNQW9CVSxDQW5CUSxnQkFvQjNCLFNBbkJvQixrQkFDRCxpQkFDcUQsK0RBQ3hFIiwiZmlsZSI6ImNvbXBvbmVudHMvU2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYWNlay9kZXYvanMvcnBsYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lkZWJhckl0ZW0gZnJvbSAnLi9TaWRlYmFyL0l0ZW0nXG5cbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IChcbiAgPG5hdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJ1cmdlclwiPlxuICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8dWw+XG4gICAgICA8U2lkZWJhckl0ZW0gaHJlZj1cIi9cIiBpY29uPVwidGFnXCIgLz5cbiAgICAgIDxTaWRlYmFySXRlbSBocmVmPVwiL1wiIGljb249XCJmaWx0ZXJcIiAvPlxuICAgICAgPFNpZGViYXJJdGVtIGhyZWY9XCIvXCIgaWNvbj1cImNhbGVuZGFyXCIgLz5cbiAgICAgIDxTaWRlYmFySXRlbSBocmVmPVwiL1wiIGljb249XCJjb2RlXCIgLz5cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyRTJFO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjYpLCAzcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgfVxuICAgICAgLm5hdmJ1cmdlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNhMmEyYTI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICB9XG4gICAgICAubmF2YnVyZ2VyIGkuZmEge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxuIl19 */\n/*@ sourceURL=components/Sidebar.js */"
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ "./components/Sidebar/Item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = '/home/jacek/dev/js/rplay/components/Sidebar/Item.js';




var Item = function Item(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'li',
    {
      className: 'jsx-4149543817',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
      { href: props.href, __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        {
          className: 'jsx-4149543817',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', {
          className: 'jsx-4149543817' + ' ' + ('fa fa-' + props.icon),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4149543817',
      css: 'li.jsx-4149543817{text-align:center;padding:10px 0;clear:both;display:block;font-size:1.5em;}a.jsx-4149543817{color:#a2a2a2;}a.jsx-4149543817 i.fa.jsx-4149543817{font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci9JdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUcyQixBQU9KLEFBR0UsY0FGbEIsRUFHQSxFQVZpQixlQUNKLFdBQ0csY0FDRSxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9TaWRlYmFyL0l0ZW0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamFjZWsvZGV2L2pzL3JwbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBJdGVtID0gKHByb3BzKSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBocmVmPXtwcm9wcy5ocmVmfT5cbiAgICAgIDxhPjxpIGNsYXNzTmFtZT17YGZhIGZhLSR7cHJvcHMuaWNvbn1gfT48L2k+PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNhMmEyYTI7XG4gICAgICB9XG4gICAgICBhIGkuZmEge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgSXRlbVxuIl19 */\n/*@ sourceURL=components/Sidebar/Item.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);

var _jsxFileName = '/home/jacek/dev/js/rplay/pages/index.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      'Batman TV Shows'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'ul',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      props.shows.map(function (_ref) {
        var show = _ref.show;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { key: show.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
            { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              show.name
            )
          )
        );
      })
    )
  );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;


          console.log('Show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map