webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data: function data() {\n    return {\n      info: [],\n      loading: true,\n      errored: false\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://127.0.0.1:8000/api/v1/').then(function (response) {\n      _this.info = response.data;\n    }).catch(function (error) {\n      console.log(error);\n      _this.errored = true;\n    }).finally(function () {\n      return _this.loading = false;\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWU/ZWE5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsbUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FQQTtBQVFBLFNBUkEscUJBUUE7QUFBQTs7QUFDQSxJQUFJLDZDQUFLLENBQ1QsR0FEQSxDQUNBLCtCQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQSxLQUpBLEVBS0EsS0FMQSxDQUtBO0FBQ0E7QUFDQTtBQUNBLEtBUkEsRUFTQSxPQVRBLENBU0E7QUFBQTtBQUFBLEtBVEE7QUFVQTtBQW5CQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgIDxoMT5Qb3N0cyBMaXN0PC9oMT5cbiAgICAgPGRpdj5cbiAgICAgICA8b2w+XG4gICAgICAgICA8bGkgdi1mb3I9XCJwb3N0IGluIGluZm9cIiB2LWJpbmQ6a2V5PVwicG9zdC5pZFwiPnt7IHBvc3QudGl0bGUgfX08L2xpPlxuICAgICAgIDwvb2w+XG4gICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5mbzogW10sXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgZXJyb3JlZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdjEvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pbmZvID0gcmVzcG9uc2UuZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB0aGlzLmVycm9yZWQgPSB0cnVlXG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9BcHAudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })

})