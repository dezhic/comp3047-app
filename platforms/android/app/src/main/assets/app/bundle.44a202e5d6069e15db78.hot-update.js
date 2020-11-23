webpackHotUpdate("bundle",{

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
              title: yield res.json(),
              okButtonText: "OK"
            });
          }
        }
      })();
    },

    onAddressTap: function onAddressTap() {
      var mallObj = global.mallLoc.filter(function (m) {
        return m.mall = this.tappedQpon.mall;
      }.bind(this))[0];
      this.$navigateTo(_MapPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          qponMall: mallObj
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTtBQUNBLHVCQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLCtCQURBO0FBRUEsMkNBRkE7QUFHQSw2QkFIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbEJBO0FBbUJBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLENBRUEsSUFGQSxDQUVBLElBRkEsR0FFQSxDQUZBO0FBR0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFoQ0EsR0FIQTs7QUFzQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUExQ0EsRyIsImZpbGUiOiJidW5kbGUuNDRhMjAyZTVkNjA2OWUxNWRiNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPEltYWdlIDpzcmM9XCJ0YXBwZWRRcG9uLmltYWdlXCIgaGVpZ2h0PVwiMzAwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxyXG5cclxuICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibS0xMFwiPlxyXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDFcIiA6dGV4dD1cInRhcHBlZFFwb24udGl0bGVcIiAvPlxyXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiYm9keVwiIDp0ZXh0PVwidGFwcGVkUXBvbi5kZXRhaWxcIiAvPlxyXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIj5cclxuICAgICAgICAgICAgPFNwYW4gdGV4dD1cIk1hbGw6IFwiIC8+XHJcbiAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5tYWxsXCIgLz5cclxuICAgICAgICAgICAgPFNwYW4gdGV4dD1cIiwgQ29pbnM6IFwiIC8+XHJcbiAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5jb2luc1wiIC8+XHJcbiAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cclxuICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkV4cGlyeSBEYXRlOiBcIiAvPlxyXG4gICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24uZXhwaXJlXCIgLz5cclxuICAgICAgICAgIDwvTGFiZWw+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgdGV4dD1cIlJlZGVlbVwiXHJcbiAgICAgICAgICAgIEB0YXA9XCJvblJlZGVlbVRhcFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgdGV4dD1cIkFkZHJlc3NcIlxyXG4gICAgICAgICAgICBAdGFwPVwib25BZGRyZXNzVGFwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgTWFwUGFnZSBmcm9tIFwiLi9NYXBQYWdlLnZ1ZVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcInRhcHBlZFFwb25cIl0sIC8vIEluc3RhbmNlIHByb3BlcnR5XHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIG9uUmVkZWVtVGFwKCkge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XHJcbiAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlXCIsXHJcbiAgICAgICAgbWVzc2FnZTogXCJUbyByZWRlZW0gdGhpcyBjb3Vwb24/XCIsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxyXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwgKyBcIi9xcG9uL1wiICsgdGhpcy50YXBwZWRRcG9uLmlkLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIGFsZXJ0KHsgdGl0bGU6IFwiUmVkZWVtIHN1Y2Nlc3NmdWxseVwiLCBva0J1dHRvblRleHQ6IFwiT0tcIiB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXMgPT0gNDAzKSB7XHJcbiAgICAgICAgICBhbGVydCh7IHRpdGxlOiBcIlBsZWFzZSBsb2dpblwiLCBva0J1dHRvblRleHQ6IFwiT0tcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoeyB0aXRsZTogYXdhaXQgcmVzLmpzb24oKSwgb2tCdXR0b25UZXh0OiBcIk9LXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQWRkcmVzc1RhcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBtYWxsT2JqID0gZ2xvYmFsLm1hbGxMb2MuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcclxuICAgICAgICAgIHJldHVybiBtLm1hbGwgPSB0aGlzLnRhcHBlZFFwb24ubWFsbDtcclxuICAgICAgfS5iaW5kKHRoaXMpKVswXTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhNYXBQYWdlLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHFwb25NYWxsOiBtYWxsT2JqXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZXh0RmllbGRWYWx1ZTogdGhpcy50YXBwZWRRcG9uLnF1YW50aXR5IHx8IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=