webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data: function data() {\n    return {\n      info: null,\n      loading: true,\n      errored: false\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('https://api.coindesk.com/api/v1/').then(function (response) {\n      _this.info = response.data.bpi;\n    }).catch(function (error) {\n      console.log(error);\n      _this.errored = true;\n    }).finally(function () {\n      return _this.loading = false;\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWU/ZWE5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxtQkFGQTtBQUdBO0FBSEE7QUFLQSxHQVBBO0FBUUEsU0FSQSxxQkFRQTtBQUFBOztBQUNBLElBQUksNkNBQUssQ0FDVCxHQURBLENBQ0Esa0NBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBLEtBSkEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBO0FBQ0EsS0FSQSxFQVNBLE9BVEEsQ0FTQTtBQUFBO0FBQUEsS0FUQTtBQVVBO0FBbkJBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICAgPGgxPkJpdGNvaW4gUHJpY2UgSW5kZXg8L2gxPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5mbzogbnVsbCxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBlcnJvcmVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS9hcGkvdjEvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pbmZvID0gcmVzcG9uc2UuZGF0YS5icGlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgdGhpcy5lcnJvcmVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMubG9hZGluZyA9IGZhbHNlKVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4jYXBwIHtcbiAgZm9udC1mYW1pbHk6ICdBdmVuaXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuaDEsIGgyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNDJiOTgzO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQXBwLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })

})