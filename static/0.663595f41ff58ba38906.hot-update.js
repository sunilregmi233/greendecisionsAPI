webpackHotUpdate(0,{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(51);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(97);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(631);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\n__WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.xsrfCookieName = 'csrftoken';\n__WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.xsrfHeaderName = 'X-CSRFToken';\n\nvar baseUrl = \"http://127.0.0.1:8000\";\nvar productsUrl = baseUrl + '/api/v1/';\nvar categoriesUrl = baseUrl + '/api/v1/';\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n    strict: true,\n    state: {\n        products: [],\n        categoriesData: [],\n        productsTotal: 0,\n        currentPage: 1,\n        pageSize: 4,\n        currentCategory: \"ALL\"\n    },\n    getters: {\n        productsFilteredByCategory: function productsFilteredByCategory(state) {\n            return state.products.filter(function (p) {\n                return state.currentCategory == \"ALL\" || p.category == state.currentCategory;\n            });\n        },\n        processedProducts: function processedProducts(state, getters) {\n            var index = (state.currentPage - 1) * state.pageSize;\n            return getters.productsFilteredByCategory.slice(index, index + state.pageSize);\n        },\n        pageCount: function pageCount(state, getters) {\n            return Math.ceil(getters.productsFilteredByCategory.length / state.pageSize);\n        },\n        categories: function categories(state) {\n            return [\"ALL\"].concat(_toConsumableArray(state.categoriesData));\n        }\n    },\n    mutations: {\n        setCurrentPage: function setCurrentPage(state, page) {\n            state.currentPage = page;\n        },\n        setPageSize: function setPageSize(state, size) {\n            state.pageSize = size;\n            state.currentPage = 1;\n        },\n        setCurrentCategory: function setCurrentCategory(state, category) {\n            state.currentCategory = category;\n            state.currentPage = 1;\n        },\n        setData: function setData(state, data) {\n            state.products = data.pdata;\n            console.log(data.pdata);\n            state.productsTotal = data.pdata.length;\n            state.categoriesData = data.cdata.sort();\n        }\n    },\n    actions: {\n        getData: function getData(context) {\n            var _this = this;\n\n            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var pdata, cdata;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                _context.next = 2;\n                                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(productsUrl);\n\n                            case 2:\n                                pdata = _context.sent.data;\n                                _context.next = 5;\n                                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(categoriesUrl);\n\n                            case 5:\n                                cdata = _context.sent.data;\n\n                                context.commit(\"setData\", { pdata: pdata, cdata: cdata });\n\n                            case 7:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, _this);\n            }))();\n        }\n    }\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/MjFjOSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiQXhpb3MiLCJkZWZhdWx0cyIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJiYXNlVXJsIiwicHJvZHVjdHNVcmwiLCJjYXRlZ29yaWVzVXJsIiwiU3RvcmUiLCJzdHJpY3QiLCJzdGF0ZSIsInByb2R1Y3RzIiwiY2F0ZWdvcmllc0RhdGEiLCJwcm9kdWN0c1RvdGFsIiwiY3VycmVudFBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRDYXRlZ29yeSIsImdldHRlcnMiLCJwcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeSIsImZpbHRlciIsInAiLCJjYXRlZ29yeSIsInByb2Nlc3NlZFByb2R1Y3RzIiwiaW5kZXgiLCJzbGljZSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiY2F0ZWdvcmllcyIsIm11dGF0aW9ucyIsInNldEN1cnJlbnRQYWdlIiwicGFnZSIsInNldFBhZ2VTaXplIiwic2l6ZSIsInNldEN1cnJlbnRDYXRlZ29yeSIsInNldERhdGEiLCJkYXRhIiwicGRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2RhdGEiLCJzb3J0IiwiYWN0aW9ucyIsImdldERhdGEiLCJjb250ZXh0IiwiZ2V0IiwiY29tbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQUEsNENBQUdBLENBQUNDLEdBQUosQ0FBUUMscURBQVI7O0FBRUFDLDZDQUFLQSxDQUFDQyxRQUFOLENBQWVDLGNBQWYsR0FBZ0MsV0FBaEM7QUFDQUYsNkNBQUtBLENBQUNDLFFBQU4sQ0FBZUUsY0FBZixHQUFnQyxhQUFoQzs7QUFFQSxJQUFNQyxVQUFVLHVCQUFoQjtBQUNBLElBQU1DLGNBQWlCRCxPQUFqQixhQUFOO0FBQ0EsSUFBTUUsZ0JBQW1CRixPQUFuQixhQUFOOztBQUdlLDZEQUFJTCxxREFBSUEsQ0FBQ1EsS0FBVCxDQUFlO0FBQzVCQyxZQUFRLElBRG9CO0FBRTVCQyxXQUFPO0FBQ0hDLGtCQUFVLEVBRFA7QUFFSEMsd0JBQWdCLEVBRmI7QUFHSEMsdUJBQWUsQ0FIWjtBQUlIQyxxQkFBYSxDQUpWO0FBS0hDLGtCQUFVLENBTFA7QUFNSEMseUJBQWlCO0FBTmQsS0FGcUI7QUFVNUJDLGFBQVM7QUFDUEMsb0NBQTRCO0FBQUEsbUJBQVNSLE1BQU1DLFFBQU4sQ0FBZVEsTUFBZixDQUFzQjtBQUFBLHVCQUFLVCxNQUFNTSxlQUFOLElBQXlCLEtBQXpCLElBQ0hJLEVBQUVDLFFBQUYsSUFBY1gsTUFBTU0sZUFEdEI7QUFBQSxhQUF0QixDQUFUO0FBQUEsU0FEckI7QUFHUE0sMkJBQW1CLDJCQUFDWixLQUFELEVBQVFPLE9BQVIsRUFBb0I7QUFDbkMsZ0JBQUlNLFFBQVEsQ0FBQ2IsTUFBTUksV0FBTixHQUFtQixDQUFwQixJQUF5QkosTUFBTUssUUFBM0M7QUFDQSxtQkFBT0UsUUFBUUMsMEJBQVIsQ0FBbUNNLEtBQW5DLENBQXlDRCxLQUF6QyxFQUFnREEsUUFBUWIsTUFBTUssUUFBOUQsQ0FBUDtBQUNILFNBTk07QUFPUFUsbUJBQVcsbUJBQUNmLEtBQUQsRUFBUU8sT0FBUjtBQUFBLG1CQUNIUyxLQUFLQyxJQUFMLENBQVVWLFFBQVFDLDBCQUFSLENBQW1DVSxNQUFuQyxHQUE0Q2xCLE1BQU1LLFFBQTVELENBREc7QUFBQSxTQVBKO0FBU1BjLG9CQUFZO0FBQUEsb0JBQVUsS0FBViw0QkFDS25CLE1BQU1FLGNBRFg7QUFBQTtBQVRMLEtBVm1CO0FBc0I1QmtCLGVBQVc7QUFDUEMsc0JBRE8sMEJBQ1FyQixLQURSLEVBQ2VzQixJQURmLEVBQ3FCO0FBQ3hCdEIsa0JBQU1JLFdBQU4sR0FBb0JrQixJQUFwQjtBQUNILFNBSE07QUFJUEMsbUJBSk8sdUJBSUt2QixLQUpMLEVBSVl3QixJQUpaLEVBSWtCO0FBQ3JCeEIsa0JBQU1LLFFBQU4sR0FBaUJtQixJQUFqQjtBQUNBeEIsa0JBQU1JLFdBQU4sR0FBb0IsQ0FBcEI7QUFDSCxTQVBNO0FBUVBxQiwwQkFSTyw4QkFRWXpCLEtBUlosRUFRbUJXLFFBUm5CLEVBUTZCO0FBQ2xDWCxrQkFBTU0sZUFBTixHQUF3QkssUUFBeEI7QUFDQVgsa0JBQU1JLFdBQU4sR0FBb0IsQ0FBcEI7QUFDRCxTQVhNO0FBWVBzQixlQVpPLG1CQVlDMUIsS0FaRCxFQVlRMkIsSUFaUixFQVljO0FBQ2pCM0Isa0JBQU1DLFFBQU4sR0FBaUIwQixLQUFLQyxLQUF0QjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZSCxLQUFLQyxLQUFqQjtBQUNBNUIsa0JBQU1HLGFBQU4sR0FBc0J3QixLQUFLQyxLQUFMLENBQVdWLE1BQWpDO0FBQ0FsQixrQkFBTUUsY0FBTixHQUF1QnlCLEtBQUtJLEtBQUwsQ0FBV0MsSUFBWCxFQUF2QjtBQUNIO0FBakJNLEtBdEJpQjtBQXlDNUJDLGFBQVM7QUFDREMsZUFEQyxtQkFDT0MsT0FEUCxFQUNnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQ0E1Qyw2Q0FBS0EsQ0FBQzZDLEdBQU4sQ0FBVXhDLFdBQVYsQ0FEQTs7QUFBQTtBQUNmZ0MscUNBRGUsaUJBQ3dCRCxJQUR4QjtBQUFBO0FBQUEsdUNBRUFwQyw2Q0FBS0EsQ0FBQzZDLEdBQU4sQ0FBVXZDLGFBQVYsQ0FGQTs7QUFBQTtBQUVma0MscUNBRmUsaUJBRTBCSixJQUYxQjs7QUFHbkJRLHdDQUFRRSxNQUFSLENBQWUsU0FBZixFQUEwQixFQUFFVCxZQUFGLEVBQVNHLFlBQVQsRUFBMUI7O0FBSG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXRCO0FBTE07QUF6Q21CLENBQWYsQ0FBZiIsImZpbGUiOiI2MjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuVnVlLnVzZShWdWV4KTtcblxuQXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJ1xuQXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nXG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMFwiXG5jb25zdCBwcm9kdWN0c1VybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9gO1xuY29uc3QgY2F0ZWdvcmllc1VybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RyaWN0OiB0cnVlLFxuICBzdGF0ZToge1xuICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgY2F0ZWdvcmllc0RhdGE6IFtdLFxuICAgICAgcHJvZHVjdHNUb3RhbDogMCxcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgcGFnZVNpemU6IDQsXG4gICAgICBjdXJyZW50Q2F0ZWdvcnk6IFwiQUxMXCJcbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIHByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5OiBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIocCA9PiBzdGF0ZS5jdXJyZW50Q2F0ZWdvcnkgPT0gXCJBTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBwLmNhdGVnb3J5ID09IHN0YXRlLmN1cnJlbnRDYXRlZ29yeSksXG4gICAgcHJvY2Vzc2VkUHJvZHVjdHM6IChzdGF0ZSwgZ2V0dGVycykgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAoc3RhdGUuY3VycmVudFBhZ2UgLTEpICogc3RhdGUucGFnZVNpemU7XG4gICAgICAgIHJldHVybiBnZXR0ZXJzLnByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5LnNsaWNlKGluZGV4LCBpbmRleCArIHN0YXRlLnBhZ2VTaXplKTtcbiAgICB9LFxuICAgIHBhZ2VDb3VudDogKHN0YXRlLCBnZXR0ZXJzKSA9PlxuICAgICAgICAgICAgTWF0aC5jZWlsKGdldHRlcnMucHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnkubGVuZ3RoIC8gc3RhdGUucGFnZVNpemUpLFxuICAgIGNhdGVnb3JpZXM6IHN0YXRlID0+IFtcIkFMTFwiLFxuICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcmllc0RhdGFdXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgICAgc2V0Q3VycmVudFBhZ2Uoc3RhdGUsIHBhZ2UpIHtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICB9LFxuICAgICAgc2V0UGFnZVNpemUoc3RhdGUsIHNpemUpIHtcbiAgICAgICAgICBzdGF0ZS5wYWdlU2l6ZSA9IHNpemU7XG4gICAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgfSxcbiAgICAgIHNldEN1cnJlbnRDYXRlZ29yeShzdGF0ZSwgY2F0ZWdvcnkpIHtcbiAgICAgICAgc3RhdGUuY3VycmVudENhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIH0sXG4gICAgICBzZXREYXRhKHN0YXRlLCBkYXRhKSB7XG4gICAgICAgICAgc3RhdGUucHJvZHVjdHMgPSBkYXRhLnBkYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEucGRhdGEpO1xuICAgICAgICAgIHN0YXRlLnByb2R1Y3RzVG90YWwgPSBkYXRhLnBkYXRhLmxlbmd0aDtcbiAgICAgICAgICBzdGF0ZS5jYXRlZ29yaWVzRGF0YSA9IGRhdGEuY2RhdGEuc29ydCgpO1xuICAgICAgfVxuICAgIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBhc3luYyBnZXREYXRhKGNvbnRleHQpIHtcbiAgICAgICAgbGV0IHBkYXRhID0gKGF3YWl0IEF4aW9zLmdldChwcm9kdWN0c1VybCkpLmRhdGE7XG4gICAgICAgIGxldCBjZGF0YSA9IChhd2FpdCBBeGlvcy5nZXQoY2F0ZWdvcmllc1VybCkpLmRhdGE7XG4gICAgICAgIGNvbnRleHQuY29tbWl0KFwic2V0RGF0YVwiLCB7IHBkYXRhLCBjZGF0YX0gKTtcbiAgICB9XG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///621\n");

/***/ })

})