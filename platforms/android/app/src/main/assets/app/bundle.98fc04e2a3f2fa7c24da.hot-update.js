webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MapPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["qponMall"],

  // Instance property
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _MapPage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MapPage.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tappedQpon"],
  // Instance property
  methods: {
    onRedeemTap() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var result = yield confirm({
          title: "Are you sure",
          message: "To redeem this coupon?",
          okButtonText: "Yes",
          cancelButtonText: "No"
        });

        if (result) {
          var res = yield fetch(global.baseUrl + "/qpon/" + _this.tappedQpon.id, {
            method: "POST"
          });

          if (res.ok) {
            alert({
              title: "Redeem successfully",
              okButtonText: "OK"
            });
          } else if (res.status == 403) {
            alert({
              title: "Please login",
              okButtonText: "OK"
            });
          } else {
            alert({
              title: res.body,
              okButtonText: "OK"
            });
          }
        }
      })();
    },

    onAddressTap() {
      console.log(this.qponMall);
      var mallObj = global.mallLoc.filter(function (m) {
        return m.mall = qponMall;
      });
      console.log(mallObj);
      this.$navigateTo(_MapPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          qponMall: this.tappedQpon.mall
        }
      });
    }

  },

  data() {
    return {
      textFieldValue: this.tappedQpon.quantity || ""
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NYXBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBLHFCQURBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEJBO0FBQ0E7QUFDQSx1QkFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDJDQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWxCQTtBQW1CQSxLQXBCQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQTs7QUFqQ0EsR0FIQTs7QUF1Q0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUEzQ0EsRyIsImZpbGUiOiJidW5kbGUuOThmYzA0ZTJhM2YyZmE3YzI0ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxXZWJWaWV3XHJcbiAgICAgIGlkPVwibWFwXCIgc3JjPVwiaHR0cHM6Ly9sZWFmbGV0LWFwaS52ZXJjZWwuYXBwP2NlbnRlcj0yMi4zNCwxMTQuMTgmem9vbT0xNyZtYXJrZXI9QUMlMjBIYWxsJTdDMjIuMzQxMDcyLDExNC4xNzk2NDUmc2Vuc29yPVwiXHJcbiAgICAvPlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wicXBvbk1hbGxcIl0sIC8vIEluc3RhbmNlIHByb3BlcnR5XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG5cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICA8SW1hZ2UgOnNyYz1cInRhcHBlZFFwb24uaW1hZ2VcIiBoZWlnaHQ9XCIzMDBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XHJcblxyXG4gICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtLTEwXCI+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMVwiIDp0ZXh0PVwidGFwcGVkUXBvbi50aXRsZVwiIC8+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2R5XCIgOnRleHQ9XCJ0YXBwZWRRcG9uLmRldGFpbFwiIC8+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiPlxyXG4gICAgICAgICAgICA8U3BhbiB0ZXh0PVwiTWFsbDogXCIgLz5cclxuICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLm1hbGxcIiAvPlxyXG4gICAgICAgICAgICA8U3BhbiB0ZXh0PVwiLCBDb2luczogXCIgLz5cclxuICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLmNvaW5zXCIgLz5cclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxyXG4gICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRXhwaXJ5IERhdGU6IFwiIC8+XHJcbiAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5leHBpcmVcIiAvPlxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICB0ZXh0PVwiUmVkZWVtXCJcclxuICAgICAgICAgICAgQHRhcD1cIm9uUmVkZWVtVGFwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICB0ZXh0PVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIEB0YXA9XCJvbkFkZHJlc3NUYXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBNYXBQYWdlIGZyb20gXCIuL01hcFBhZ2UudnVlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1widGFwcGVkUXBvblwiXSwgLy8gSW5zdGFuY2UgcHJvcGVydHlcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgb25SZWRlZW1UYXAoKSB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcclxuICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmVcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlRvIHJlZGVlbSB0aGlzIGNvdXBvbj9cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCArIFwiL3Fwb24vXCIgKyB0aGlzLnRhcHBlZFFwb24uaWQsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgYWxlcnQoeyB0aXRsZTogXCJSZWRlZW0gc3VjY2Vzc2Z1bGx5XCIsIG9rQnV0dG9uVGV4dDogXCJPS1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PSA0MDMpIHtcclxuICAgICAgICAgIGFsZXJ0KHsgdGl0bGU6IFwiUGxlYXNlIGxvZ2luXCIsIG9rQnV0dG9uVGV4dDogXCJPS1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCh7IHRpdGxlOiByZXMuYm9keSwgb2tCdXR0b25UZXh0OiBcIk9LXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25BZGRyZXNzVGFwKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnFwb25NYWxsKTtcclxuICAgICAgdmFyIG1hbGxPYmogPSBnbG9iYWwubWFsbExvYy5maWx0ZXIoZnVuY3Rpb24obSkge1xyXG4gICAgICAgICAgcmV0dXJuIG0ubWFsbCA9IHFwb25NYWxsO1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhtYWxsT2JqKTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhNYXBQYWdlLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHFwb25NYWxsOiB0aGlzLnRhcHBlZFFwb24ubWFsbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRleHRGaWVsZFZhbHVlOiB0aGlzLnRhcHBlZFFwb24ucXVhbnRpdHkgfHwgXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==