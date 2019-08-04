webpackHotUpdate(0,{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(300);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\nvar baseUrl = \"http://127.0.0.1:8000\";\nvar productsUrl = baseUrl + '/api/v1/products/product';\nvar categoriesUrl = baseUrl + '/api/v1/products/category/';\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n    strict: true,\n    state: {\n        products: [],\n        categoriesData: [],\n        productsTotal: 0,\n        currentPage: 1,\n        pageSize: 4,\n        currentCategory: \"ALL\"\n    },\n    getters: {\n        productsFilteredByCategory: function productsFilteredByCategory(state) {\n            return state.products.filter(function (p) {\n                return state.currentCategory == \"ALL\" || p.category == state.currentCategory;\n            });\n        },\n        processedProducts: function processedProducts(state, getters) {\n            var index = (state.currentPage - 1) * state.pageSize;\n            return getters.productsFilteredByCategory.slice(index, index + state.pageSize);\n        },\n        pageCount: function pageCount(state, getters) {\n            return Math.ceil(getters.productsFilteredByCategory.length / state.pageSize);\n        },\n        categories: function categories(state) {\n            return [\"ALL\"].concat(_toConsumableArray(state.categoriesData));\n        }\n    },\n    mutations: {\n        setCurrentPage: function setCurrentPage(state, page) {\n            state.currentPage = page;\n        },\n        setPageSize: function setPageSize(state, size) {\n            state.pageSize = size;\n            state.currentPage = 1;\n        },\n        setCurrentCategory: function setCurrentCategory(state, category) {\n            state.currentCategory = category;\n            state.currentPage = 1;\n        },\n        setData: function setData(state, data) {\n            state.products = data.pdata;\n            state.productsTotal = data.pdata.length;\n            state.categoriesData = data.cdata.sort();\n        }\n    },\n    actions: {\n        getData: function getData(context) {\n            var _this = this;\n\n            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var pdata, cdata;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                _context.next = 2;\n                                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(productsUrl);\n\n                            case 2:\n                                pdata = _context.sent.data;\n                                _context.next = 5;\n                                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(categoriesUrl);\n\n                            case 5:\n                                cdata = _context.sent.data;\n\n                                context.commit(\"setData\", { pdata: pdata, cdata: cdata });\n\n                            case 7:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, _this);\n            }))();\n        }\n    }\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/MjFjOSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiYmFzZVVybCIsInByb2R1Y3RzVXJsIiwiY2F0ZWdvcmllc1VybCIsIlN0b3JlIiwic3RyaWN0Iiwic3RhdGUiLCJwcm9kdWN0cyIsImNhdGVnb3JpZXNEYXRhIiwicHJvZHVjdHNUb3RhbCIsImN1cnJlbnRQYWdlIiwicGFnZVNpemUiLCJjdXJyZW50Q2F0ZWdvcnkiLCJnZXR0ZXJzIiwicHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnkiLCJmaWx0ZXIiLCJwIiwiY2F0ZWdvcnkiLCJwcm9jZXNzZWRQcm9kdWN0cyIsImluZGV4Iiwic2xpY2UiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImNhdGVnb3JpZXMiLCJtdXRhdGlvbnMiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2UiLCJzZXRQYWdlU2l6ZSIsInNpemUiLCJzZXRDdXJyZW50Q2F0ZWdvcnkiLCJzZXREYXRhIiwiZGF0YSIsInBkYXRhIiwiY2RhdGEiLCJzb3J0IiwiYWN0aW9ucyIsImdldERhdGEiLCJjb250ZXh0IiwiQXhpb3MiLCJnZXQiLCJjb21taXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBQSw0Q0FBR0EsQ0FBQ0MsR0FBSixDQUFRQyxxREFBUjs7QUFFQSxJQUFNQyxVQUFVLHVCQUFoQjtBQUNBLElBQU1DLGNBQWlCRCxPQUFqQiw2QkFBTjtBQUNBLElBQU1FLGdCQUFtQkYsT0FBbkIsK0JBQU47O0FBR2UsNkRBQUlELHFEQUFJQSxDQUFDSSxLQUFULENBQWU7QUFDNUJDLFlBQVEsSUFEb0I7QUFFNUJDLFdBQU87QUFDSEMsa0JBQVUsRUFEUDtBQUVIQyx3QkFBZ0IsRUFGYjtBQUdIQyx1QkFBZSxDQUhaO0FBSUhDLHFCQUFhLENBSlY7QUFLSEMsa0JBQVUsQ0FMUDtBQU1IQyx5QkFBaUI7QUFOZCxLQUZxQjtBQVU1QkMsYUFBUztBQUNQQyxvQ0FBNEI7QUFBQSxtQkFBU1IsTUFBTUMsUUFBTixDQUFlUSxNQUFmLENBQXNCO0FBQUEsdUJBQUtULE1BQU1NLGVBQU4sSUFBeUIsS0FBekIsSUFDSEksRUFBRUMsUUFBRixJQUFjWCxNQUFNTSxlQUR0QjtBQUFBLGFBQXRCLENBQVQ7QUFBQSxTQURyQjtBQUdQTSwyQkFBbUIsMkJBQUNaLEtBQUQsRUFBUU8sT0FBUixFQUFvQjtBQUNuQyxnQkFBSU0sUUFBUSxDQUFDYixNQUFNSSxXQUFOLEdBQW1CLENBQXBCLElBQXlCSixNQUFNSyxRQUEzQztBQUNBLG1CQUFPRSxRQUFRQywwQkFBUixDQUFtQ00sS0FBbkMsQ0FBeUNELEtBQXpDLEVBQWdEQSxRQUFRYixNQUFNSyxRQUE5RCxDQUFQO0FBQ0gsU0FOTTtBQU9QVSxtQkFBVyxtQkFBQ2YsS0FBRCxFQUFRTyxPQUFSO0FBQUEsbUJBQ0hTLEtBQUtDLElBQUwsQ0FBVVYsUUFBUUMsMEJBQVIsQ0FBbUNVLE1BQW5DLEdBQTRDbEIsTUFBTUssUUFBNUQsQ0FERztBQUFBLFNBUEo7QUFTUGMsb0JBQVk7QUFBQSxvQkFBVSxLQUFWLDRCQUNLbkIsTUFBTUUsY0FEWDtBQUFBO0FBVEwsS0FWbUI7QUFzQjVCa0IsZUFBVztBQUNQQyxzQkFETywwQkFDUXJCLEtBRFIsRUFDZXNCLElBRGYsRUFDcUI7QUFDeEJ0QixrQkFBTUksV0FBTixHQUFvQmtCLElBQXBCO0FBQ0gsU0FITTtBQUlQQyxtQkFKTyx1QkFJS3ZCLEtBSkwsRUFJWXdCLElBSlosRUFJa0I7QUFDckJ4QixrQkFBTUssUUFBTixHQUFpQm1CLElBQWpCO0FBQ0F4QixrQkFBTUksV0FBTixHQUFvQixDQUFwQjtBQUNILFNBUE07QUFRUHFCLDBCQVJPLDhCQVFZekIsS0FSWixFQVFtQlcsUUFSbkIsRUFRNkI7QUFDbENYLGtCQUFNTSxlQUFOLEdBQXdCSyxRQUF4QjtBQUNBWCxrQkFBTUksV0FBTixHQUFvQixDQUFwQjtBQUNELFNBWE07QUFZUHNCLGVBWk8sbUJBWUMxQixLQVpELEVBWVEyQixJQVpSLEVBWWM7QUFDakIzQixrQkFBTUMsUUFBTixHQUFpQjBCLEtBQUtDLEtBQXRCO0FBQ0E1QixrQkFBTUcsYUFBTixHQUFzQndCLEtBQUtDLEtBQUwsQ0FBV1YsTUFBakM7QUFDQWxCLGtCQUFNRSxjQUFOLEdBQXVCeUIsS0FBS0UsS0FBTCxDQUFXQyxJQUFYLEVBQXZCO0FBQ0g7QUFoQk0sS0F0QmlCO0FBd0M1QkMsYUFBUztBQUNEQyxlQURDLG1CQUNPQyxPQURQLEVBQ2dCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FDQUMsNkNBQUtBLENBQUNDLEdBQU4sQ0FBVXZDLFdBQVYsQ0FEQTs7QUFBQTtBQUNmZ0MscUNBRGUsaUJBQ3dCRCxJQUR4QjtBQUFBO0FBQUEsdUNBRUFPLDZDQUFLQSxDQUFDQyxHQUFOLENBQVV0QyxhQUFWLENBRkE7O0FBQUE7QUFFZmdDLHFDQUZlLGlCQUUwQkYsSUFGMUI7O0FBR25CTSx3Q0FBUUcsTUFBUixDQUFlLFNBQWYsRUFBMEIsRUFBRVIsWUFBRixFQUFTQyxZQUFULEVBQTFCOztBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUl0QjtBQUxNO0FBeENtQixDQUFmLENBQWYiLCJmaWxlIjoiMjkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMFwiXG5jb25zdCBwcm9kdWN0c1VybCA9IGAke2Jhc2VVcmx9L2FwaS92MS9wcm9kdWN0cy9wcm9kdWN0YDtcbmNvbnN0IGNhdGVnb3JpZXNVcmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvcHJvZHVjdHMvY2F0ZWdvcnkvYDtcblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIHN0cmljdDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgIGNhdGVnb3JpZXNEYXRhOiBbXSxcbiAgICAgIHByb2R1Y3RzVG90YWw6IDAsXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIHBhZ2VTaXplOiA0LFxuICAgICAgY3VycmVudENhdGVnb3J5OiBcIkFMTFwiXG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBwcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeTogc3RhdGUgPT4gc3RhdGUucHJvZHVjdHMuZmlsdGVyKHAgPT4gc3RhdGUuY3VycmVudENhdGVnb3J5ID09IFwiQUxMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgcC5jYXRlZ29yeSA9PSBzdGF0ZS5jdXJyZW50Q2F0ZWdvcnkpLFxuICAgIHByb2Nlc3NlZFByb2R1Y3RzOiAoc3RhdGUsIGdldHRlcnMpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gKHN0YXRlLmN1cnJlbnRQYWdlIC0xKSAqIHN0YXRlLnBhZ2VTaXplO1xuICAgICAgICByZXR1cm4gZ2V0dGVycy5wcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeS5zbGljZShpbmRleCwgaW5kZXggKyBzdGF0ZS5wYWdlU2l6ZSk7XG4gICAgfSxcbiAgICBwYWdlQ291bnQ6IChzdGF0ZSwgZ2V0dGVycykgPT5cbiAgICAgICAgICAgIE1hdGguY2VpbChnZXR0ZXJzLnByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5Lmxlbmd0aCAvIHN0YXRlLnBhZ2VTaXplKSxcbiAgICBjYXRlZ29yaWVzOiBzdGF0ZSA9PiBbXCJBTExcIixcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3JpZXNEYXRhXVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICAgIHNldEN1cnJlbnRQYWdlKHN0YXRlLCBwYWdlKSB7XG4gICAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgfSxcbiAgICAgIHNldFBhZ2VTaXplKHN0YXRlLCBzaXplKSB7XG4gICAgICAgICAgc3RhdGUucGFnZVNpemUgPSBzaXplO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIH0sXG4gICAgICBzZXRDdXJyZW50Q2F0ZWdvcnkoc3RhdGUsIGNhdGVnb3J5KSB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICBzdGF0ZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICB9LFxuICAgICAgc2V0RGF0YShzdGF0ZSwgZGF0YSkge1xuICAgICAgICAgIHN0YXRlLnByb2R1Y3RzID0gZGF0YS5wZGF0YTtcbiAgICAgICAgICBzdGF0ZS5wcm9kdWN0c1RvdGFsID0gZGF0YS5wZGF0YS5sZW5ndGg7XG4gICAgICAgICAgc3RhdGUuY2F0ZWdvcmllc0RhdGEgPSBkYXRhLmNkYXRhLnNvcnQoKTtcbiAgICAgIH1cbiAgICB9LFxuICBhY3Rpb25zOiB7XG4gICAgYXN5bmMgZ2V0RGF0YShjb250ZXh0KSB7XG4gICAgICAgIGxldCBwZGF0YSA9IChhd2FpdCBBeGlvcy5nZXQocHJvZHVjdHNVcmwpKS5kYXRhO1xuICAgICAgICBsZXQgY2RhdGEgPSAoYXdhaXQgQXhpb3MuZ2V0KGNhdGVnb3JpZXNVcmwpKS5kYXRhO1xuICAgICAgICBjb250ZXh0LmNvbW1pdChcInNldERhdGFcIiwgeyBwZGF0YSwgY2RhdGF9ICk7XG4gICAgfVxufVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///290\n");

/***/ })

})