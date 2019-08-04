webpackHotUpdate(0,{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(300);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\nvar baseUrl = \"http://127.0.0.1:8000\";\nvar productsUrl = baseUrl + '/api/v1/products/product/';\nvar categoriesUrl = baseUrl + '/api/v1/products/category/';\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n    strict: true,\n    state: {\n        products: [],\n        categoriesData: [],\n        productsTotal: 0,\n        currentPage: 1,\n        pageSize: 4,\n        currentCategory: \"ALL\"\n    },\n    getters: {\n        productsFilteredByCategory: function productsFilteredByCategory(state) {\n            return state.products.filter(function (p) {\n                return state.currentCategory == \"ALL\" || p.category == state.currentCategory;\n            });\n        },\n        processedProducts: function processedProducts(state, getters) {\n            var index = (state.currentPage - 1) * state.pageSize;\n            return getters.productsFilteredByCategory.slice(index, index + state.pageSize);\n        },\n        pageCount: function pageCount(state, getters) {\n            return Math.ceil(getters.productsFilteredByCategory.length / state.pageSize);\n        },\n        categories: function categories(state) {\n            return [\"ALL\"].concat(_toConsumableArray(state.categoriesData));\n        }\n    },\n    mutations: {\n        setCurrentPage: function setCurrentPage(state, page) {\n            state.currentPage = page;\n        },\n        setPageSize: function setPageSize(state, size) {\n            state.pageSize = size;\n            state.currentPage = 1;\n        },\n        setCurrentCategory: function setCurrentCategory(state, category) {\n            state.currentCategory = category;\n            state.currentPage = 1;\n        },\n        setData: function setData(state, data) {\n            state.products = data.pdata;\n            state.productsTotal = data.pdata.length;\n            state.categoriesData = data.cdata.sort();\n        }\n    },\n    actions: {\n        getData: function getData(context) {\n            var _this = this;\n\n            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var pdata, cdata;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                setTimeout(function () {\n                                    return \"Crisbal\";\n                                }, 1000);\n                                _context.next = 3;\n                                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(productsUrl);\n\n                            case 3:\n                                pdata = _context.sent.data;\n                                _context.next = 6;\n                                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(categoriesUrl);\n\n                            case 6:\n                                cdata = _context.sent.data;\n\n                                context.commit(\"setData\", { pdata: pdata, cdata: cdata });\n\n                            case 8:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, _this);\n            }))();\n        }\n    }\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/MjFjOSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiYmFzZVVybCIsInByb2R1Y3RzVXJsIiwiY2F0ZWdvcmllc1VybCIsIlN0b3JlIiwic3RyaWN0Iiwic3RhdGUiLCJwcm9kdWN0cyIsImNhdGVnb3JpZXNEYXRhIiwicHJvZHVjdHNUb3RhbCIsImN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJjdXJyZW50Q2F0ZWdvcnkiLCJnZXR0ZXJzIiwicHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnkiLCJmaWx0ZXIiLCJwIiwiY2F0ZWdvcnkiLCJwcm9jZXNzZWRQcm9kdWN0cyIsImluZGV4Iiwic2xpY2UiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImNhdGVnb3JpZXMiLCJtdXRhdGlvbnMiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2UiLCJzZXRQYWdlU2l6ZSIsInNpemUiLCJzZXRDdXJyZW50Q2F0ZWdvcnkiLCJzZXREYXRhIiwiZGF0YSIsInBkYXRhIiwiY2RhdGEiLCJzb3J0IiwiYWN0aW9ucyIsImdldERhdGEiLCJjb250ZXh0Iiwic2V0VGltZW91dCIsIkF4aW9zIiwiZ2V0IiwiY29tbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQUEsNENBQUdBLENBQUNDLEdBQUosQ0FBUUMscURBQVI7O0FBRUEsSUFBTUMsVUFBVSx1QkFBaEI7QUFDQSxJQUFNQyxjQUFpQkQsT0FBakIsOEJBQU47QUFDQSxJQUFNRSxnQkFBbUJGLE9BQW5CLCtCQUFOOztBQUdlLDZEQUFJRCxxREFBSUEsQ0FBQ0ksS0FBVCxDQUFlO0FBQzVCQyxZQUFRLElBRG9CO0FBRTVCQyxXQUFPO0FBQ0hDLGtCQUFVLEVBRFA7QUFFSEMsd0JBQWdCLEVBRmI7QUFHSEMsdUJBQWUsQ0FIWjtBQUlIQyxxQkFBYSxDQUpWO0FBS0hDLGtCQUFVLENBTFA7QUFNSEMseUJBQWlCO0FBTmQsS0FGcUI7QUFVNUJDLGFBQVM7QUFDUEMsb0NBQTRCO0FBQUEsbUJBQVNSLE1BQU1DLFFBQU4sQ0FBZVEsTUFBZixDQUFzQjtBQUFBLHVCQUFLVCxNQUFNTSxlQUFOLElBQXlCLEtBQXpCLElBQ0hJLEVBQUVDLFFBQUYsSUFBY1gsTUFBTU0sZUFEdEI7QUFBQSxhQUF0QixDQUFUO0FBQUEsU0FEckI7QUFHUE0sMkJBQW1CLDJCQUFDWixLQUFELEVBQVFPLE9BQVIsRUFBb0I7QUFDbkMsZ0JBQUlNLFFBQVEsQ0FBQ2IsTUFBTUksV0FBTixHQUFtQixDQUFwQixJQUF5QkosTUFBTUssUUFBM0M7QUFDQSxtQkFBT0UsUUFBUUMsMEJBQVIsQ0FBbUNNLEtBQW5DLENBQXlDRCxLQUF6QyxFQUFnREEsUUFBUWIsTUFBTUssUUFBOUQsQ0FBUDtBQUNILFNBTk07QUFPUFUsbUJBQVcsbUJBQUNmLEtBQUQsRUFBUU8sT0FBUjtBQUFBLG1CQUNIUyxLQUFLQyxJQUFMLENBQVVWLFFBQVFDLDBCQUFSLENBQW1DVSxNQUFuQyxHQUE0Q2xCLE1BQU1LLFFBQTVELENBREc7QUFBQSxTQVBKO0FBU1BjLG9CQUFZO0FBQUEsb0JBQVUsS0FBViw0QkFDS25CLE1BQU1FLGNBRFg7QUFBQTtBQVRMLEtBVm1CO0FBc0I1QmtCLGVBQVc7QUFDUEMsc0JBRE8sMEJBQ1FyQixLQURSLEVBQ2VzQixJQURmLEVBQ3FCO0FBQ3hCdEIsa0JBQU1JLFdBQU4sR0FBb0JrQixJQUFwQjtBQUNILFNBSE07QUFJUEMsbUJBSk8sdUJBSUt2QixLQUpMLEVBSVl3QixJQUpaLEVBSWtCO0FBQ3JCeEIsa0JBQU1LLFFBQU4sR0FBaUJtQixJQUFqQjtBQUNBeEIsa0JBQU1JLFdBQU4sR0FBb0IsQ0FBcEI7QUFDSCxTQVBNO0FBUVBxQiwwQkFSTyw4QkFRWXpCLEtBUlosRUFRbUJXLFFBUm5CLEVBUTZCO0FBQ2xDWCxrQkFBTU0sZUFBTixHQUF3QkssUUFBeEI7QUFDQVgsa0JBQU1JLFdBQU4sR0FBb0IsQ0FBcEI7QUFDRCxTQVhNO0FBWVBzQixlQVpPLG1CQVlDMUIsS0FaRCxFQVlRMkIsSUFaUixFQVljO0FBQ2pCM0Isa0JBQU1DLFFBQU4sR0FBaUIwQixLQUFLQyxLQUF0QjtBQUNBNUIsa0JBQU1HLGFBQU4sR0FBc0J3QixLQUFLQyxLQUFMLENBQVdWLE1BQWpDO0FBQ0FsQixrQkFBTUUsY0FBTixHQUF1QnlCLEtBQUtFLEtBQUwsQ0FBV0MsSUFBWCxFQUF2QjtBQUNIO0FBaEJNLEtBdEJpQjtBQXdDNUJDLGFBQVM7QUFDREMsZUFEQyxtQkFDT0MsT0FEUCxFQUNnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMsMkNBQVk7QUFBQSwyQ0FBTSxTQUFOO0FBQUEsaUNBQVosRUFBNkIsSUFBN0I7QUFEbUI7QUFBQSx1Q0FFQUMsNkNBQUtBLENBQUNDLEdBQU4sQ0FBVXhDLFdBQVYsQ0FGQTs7QUFBQTtBQUVmZ0MscUNBRmUsaUJBRXdCRCxJQUZ4QjtBQUFBO0FBQUEsdUNBR0FRLDZDQUFLQSxDQUFDQyxHQUFOLENBQVV2QyxhQUFWLENBSEE7O0FBQUE7QUFHZmdDLHFDQUhlLGlCQUcwQkYsSUFIMUI7O0FBSW5CTSx3Q0FBUUksTUFBUixDQUFlLFNBQWYsRUFBMEIsRUFBRVQsWUFBRixFQUFTQyxZQUFULEVBQTFCOztBQUptQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUt0QjtBQU5NO0FBeENtQixDQUFmLENBQWYiLCJmaWxlIjoiMjkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMFwiXG5jb25zdCBwcm9kdWN0c1VybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9wcm9kdWN0cy9wcm9kdWN0L2A7XG5jb25zdCBjYXRlZ29yaWVzVXJsID0gYCR7YmFzZVVybH0vYXBpL3YxL3Byb2R1Y3RzL2NhdGVnb3J5L2A7XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdHJpY3Q6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBjYXRlZ29yaWVzRGF0YTogW10sXG4gICAgICBwcm9kdWN0c1RvdGFsOiAwLFxuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICBwYWdlU2l6ZTogNCxcbiAgICAgIGN1cnJlbnRDYXRlZ29yeTogXCJBTExcIlxuICB9LFxuICBnZXR0ZXJzOiB7XG4gICAgcHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnk6IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzLmZpbHRlcihwID0+IHN0YXRlLmN1cnJlbnRDYXRlZ29yeSA9PSBcIkFMTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHAuY2F0ZWdvcnkgPT0gc3RhdGUuY3VycmVudENhdGVnb3J5KSxcbiAgICBwcm9jZXNzZWRQcm9kdWN0czogKHN0YXRlLCBnZXR0ZXJzKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IChzdGF0ZS5jdXJyZW50UGFnZSAtMSkgKiBzdGF0ZS5wYWdlU2l6ZTtcbiAgICAgICAgcmV0dXJuIGdldHRlcnMucHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnkuc2xpY2UoaW5kZXgsIGluZGV4ICsgc3RhdGUucGFnZVNpemUpO1xuICAgIH0sXG4gICAgcGFnZUNvdW50OiAoc3RhdGUsIGdldHRlcnMpID0+XG4gICAgICAgICAgICBNYXRoLmNlaWwoZ2V0dGVycy5wcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeS5sZW5ndGggLyBzdGF0ZS5wYWdlU2l6ZSksXG4gICAgY2F0ZWdvcmllczogc3RhdGUgPT4gW1wiQUxMXCIsXG4gICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yaWVzRGF0YV1cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgICBzZXRDdXJyZW50UGFnZShzdGF0ZSwgcGFnZSkge1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgIH0sXG4gICAgICBzZXRQYWdlU2l6ZShzdGF0ZSwgc2l6ZSkge1xuICAgICAgICAgIHN0YXRlLnBhZ2VTaXplID0gc2l6ZTtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICB9LFxuICAgICAgc2V0Q3VycmVudENhdGVnb3J5KHN0YXRlLCBjYXRlZ29yeSkge1xuICAgICAgICBzdGF0ZS5jdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgfSxcbiAgICAgIHNldERhdGEoc3RhdGUsIGRhdGEpIHtcbiAgICAgICAgICBzdGF0ZS5wcm9kdWN0cyA9IGRhdGEucGRhdGE7XG4gICAgICAgICAgc3RhdGUucHJvZHVjdHNUb3RhbCA9IGRhdGEucGRhdGEubGVuZ3RoO1xuICAgICAgICAgIHN0YXRlLmNhdGVnb3JpZXNEYXRhID0gZGF0YS5jZGF0YS5zb3J0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgYWN0aW9uczoge1xuICAgIGFzeW5jIGdldERhdGEoY29udGV4dCkge1xuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiBcIkNyaXNiYWxcIiwgMTAwMCk7XG4gICAgICAgIGxldCBwZGF0YSA9IChhd2FpdCBBeGlvcy5nZXQocHJvZHVjdHNVcmwpKS5kYXRhO1xuICAgICAgICBsZXQgY2RhdGEgPSAoYXdhaXQgQXhpb3MuZ2V0KGNhdGVnb3JpZXNVcmwpKS5kYXRhO1xuICAgICAgICBjb250ZXh0LmNvbW1pdChcInNldERhdGFcIiwgeyBwZGF0YSwgY2RhdGF9ICk7XG4gICAgfVxufVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///290\n");

/***/ })

})