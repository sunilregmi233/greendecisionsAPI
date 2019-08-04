webpackHotUpdate(0,{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(300);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\nvar baseUrl = \"http://127.0.0.1:8000\";\nvar productUrl = baseUrl + '/api/v1/products/product/';\nvar categoriesUrl = baseUrl + '/api/v1/products/category/';\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n    strict: true,\n    state: {\n        products: testData,\n        productsTotal: testData.length,\n        currentPage: 1,\n        pageSize: 4,\n        currentCategory: \"ALL\"\n    },\n    getters: {\n        productsFilteredByCategory: function productsFilteredByCategory(state) {\n            return state.products.filter(function (p) {\n                return state.currentCategory == \"ALL\" || p.category == state.currentCategory;\n            });\n        },\n        processedProducts: function processedProducts(state, getters) {\n            var index = (state.currentPage - 1) * state.pageSize;\n            return getters.productsFilteredByCategory.slice(index, index + state.pageSize);\n        },\n        pageCount: function pageCount(state, getters) {\n            return Math.ceil(getters.productsFilteredByCategory.length / state.pageSize);\n        },\n        categories: function categories(state) {\n            return [\"ALL\"].concat(_toConsumableArray(new Set(state.products.map(function (p) {\n                return p.category;\n            }).sort())));\n        }\n    },\n    mutations: {\n        setCurrentPage: function setCurrentPage(state, page) {\n            state.currentPage = page;\n        },\n        setPageSize: function setPageSize(state, size) {\n            state.pageSize = size;\n            state.currentPage = 1;\n        },\n        setCurrentCategory: function setCurrentCategory(state, category) {\n            state.currentCategory = category;\n            state.currentPage = 1;\n        }\n    }\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/MjFjOSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiYmFzZVVybCIsInByb2R1Y3RVcmwiLCJjYXRlZ29yaWVzVXJsIiwiU3RvcmUiLCJzdHJpY3QiLCJzdGF0ZSIsInByb2R1Y3RzIiwidGVzdERhdGEiLCJwcm9kdWN0c1RvdGFsIiwibGVuZ3RoIiwiY3VycmVudFBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRDYXRlZ29yeSIsImdldHRlcnMiLCJwcm9kdWN0c0ZpbHRlcmVkQnlDYXRlZ29yeSIsImZpbHRlciIsInAiLCJjYXRlZ29yeSIsInByb2Nlc3NlZFByb2R1Y3RzIiwiaW5kZXgiLCJzbGljZSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwiY2F0ZWdvcmllcyIsIlNldCIsIm1hcCIsInNvcnQiLCJtdXRhdGlvbnMiLCJzZXRDdXJyZW50UGFnZSIsInBhZ2UiLCJzZXRQYWdlU2l6ZSIsInNpemUiLCJzZXRDdXJyZW50Q2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQUEsNENBQUdBLENBQUNDLEdBQUosQ0FBUUMscURBQVI7O0FBRUEsSUFBTUMsVUFBVSx1QkFBaEI7QUFDQSxJQUFNQyxhQUFnQkQsT0FBaEIsOEJBQU47QUFDQSxJQUFNRSxnQkFBbUJGLE9BQW5CLCtCQUFOOztBQUdlLDZEQUFJRCxxREFBSUEsQ0FBQ0ksS0FBVCxDQUFlO0FBQzVCQyxZQUFRLElBRG9CO0FBRTVCQyxXQUFPO0FBQ0hDLGtCQUFVQyxRQURQO0FBRUhDLHVCQUFlRCxTQUFTRSxNQUZyQjtBQUdIQyxxQkFBYSxDQUhWO0FBSUhDLGtCQUFVLENBSlA7QUFLSEMseUJBQWlCO0FBTGQsS0FGcUI7QUFTNUJDLGFBQVM7QUFDUEMsb0NBQTRCO0FBQUEsbUJBQVNULE1BQU1DLFFBQU4sQ0FBZVMsTUFBZixDQUFzQjtBQUFBLHVCQUFLVixNQUFNTyxlQUFOLElBQXlCLEtBQXpCLElBQ0hJLEVBQUVDLFFBQUYsSUFBY1osTUFBTU8sZUFEdEI7QUFBQSxhQUF0QixDQUFUO0FBQUEsU0FEckI7QUFHUE0sMkJBQW1CLDJCQUFDYixLQUFELEVBQVFRLE9BQVIsRUFBb0I7QUFDbkMsZ0JBQUlNLFFBQVEsQ0FBQ2QsTUFBTUssV0FBTixHQUFtQixDQUFwQixJQUF5QkwsTUFBTU0sUUFBM0M7QUFDQSxtQkFBT0UsUUFBUUMsMEJBQVIsQ0FBbUNNLEtBQW5DLENBQXlDRCxLQUF6QyxFQUFnREEsUUFBUWQsTUFBTU0sUUFBOUQsQ0FBUDtBQUNILFNBTk07QUFPUFUsbUJBQVcsbUJBQUNoQixLQUFELEVBQVFRLE9BQVI7QUFBQSxtQkFDSFMsS0FBS0MsSUFBTCxDQUFVVixRQUFRQywwQkFBUixDQUFtQ0wsTUFBbkMsR0FBNENKLE1BQU1NLFFBQTVELENBREc7QUFBQSxTQVBKO0FBU1BhLG9CQUFZO0FBQUEsb0JBQVUsS0FBViw0QkFDSyxJQUFJQyxHQUFKLENBQVFwQixNQUFNQyxRQUFOLENBQWVvQixHQUFmLENBQW1CO0FBQUEsdUJBQUtWLEVBQUVDLFFBQVA7QUFBQSxhQUFuQixFQUFvQ1UsSUFBcEMsRUFBUixDQURMO0FBQUE7QUFUTCxLQVRtQjtBQXFCNUJDLGVBQVc7QUFDUEMsc0JBRE8sMEJBQ1F4QixLQURSLEVBQ2V5QixJQURmLEVBQ3FCO0FBQ3hCekIsa0JBQU1LLFdBQU4sR0FBb0JvQixJQUFwQjtBQUNILFNBSE07QUFJUEMsbUJBSk8sdUJBSUsxQixLQUpMLEVBSVkyQixJQUpaLEVBSWtCO0FBQ3JCM0Isa0JBQU1NLFFBQU4sR0FBaUJxQixJQUFqQjtBQUNBM0Isa0JBQU1LLFdBQU4sR0FBb0IsQ0FBcEI7QUFDSCxTQVBNO0FBUVB1QiwwQkFSTyw4QkFRWTVCLEtBUlosRUFRbUJZLFFBUm5CLEVBUTZCO0FBQ2xDWixrQkFBTU8sZUFBTixHQUF3QkssUUFBeEI7QUFDQVosa0JBQU1LLFdBQU4sR0FBb0IsQ0FBcEI7QUFDRDtBQVhNO0FBckJpQixDQUFmLENBQWYiLCJmaWxlIjoiMjkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMFwiXG5jb25zdCBwcm9kdWN0VXJsID0gYCR7YmFzZVVybH0vYXBpL3YxL3Byb2R1Y3RzL3Byb2R1Y3QvYDtcbmNvbnN0IGNhdGVnb3JpZXNVcmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvcHJvZHVjdHMvY2F0ZWdvcnkvYDtcblxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIHN0cmljdDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICAgIHByb2R1Y3RzOiB0ZXN0RGF0YSxcbiAgICAgIHByb2R1Y3RzVG90YWw6IHRlc3REYXRhLmxlbmd0aCxcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgcGFnZVNpemU6IDQsXG4gICAgICBjdXJyZW50Q2F0ZWdvcnk6IFwiQUxMXCJcbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIHByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5OiBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIocCA9PiBzdGF0ZS5jdXJyZW50Q2F0ZWdvcnkgPT0gXCJBTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBwLmNhdGVnb3J5ID09IHN0YXRlLmN1cnJlbnRDYXRlZ29yeSksXG4gICAgcHJvY2Vzc2VkUHJvZHVjdHM6IChzdGF0ZSwgZ2V0dGVycykgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSAoc3RhdGUuY3VycmVudFBhZ2UgLTEpICogc3RhdGUucGFnZVNpemU7XG4gICAgICAgIHJldHVybiBnZXR0ZXJzLnByb2R1Y3RzRmlsdGVyZWRCeUNhdGVnb3J5LnNsaWNlKGluZGV4LCBpbmRleCArIHN0YXRlLnBhZ2VTaXplKTtcbiAgICB9LFxuICAgIHBhZ2VDb3VudDogKHN0YXRlLCBnZXR0ZXJzKSA9PlxuICAgICAgICAgICAgTWF0aC5jZWlsKGdldHRlcnMucHJvZHVjdHNGaWx0ZXJlZEJ5Q2F0ZWdvcnkubGVuZ3RoIC8gc3RhdGUucGFnZVNpemUpLFxuICAgIGNhdGVnb3JpZXM6IHN0YXRlID0+IFtcIkFMTFwiLFxuICAgICAgICAgICAgICAgICAgLi4ubmV3IFNldChzdGF0ZS5wcm9kdWN0cy5tYXAocCA9PiBwLmNhdGVnb3J5KS5zb3J0KCkpXVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICAgIHNldEN1cnJlbnRQYWdlKHN0YXRlLCBwYWdlKSB7XG4gICAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgfSxcbiAgICAgIHNldFBhZ2VTaXplKHN0YXRlLCBzaXplKSB7XG4gICAgICAgICAgc3RhdGUucGFnZVNpemUgPSBzaXplO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIH0sXG4gICAgICBzZXRDdXJyZW50Q2F0ZWdvcnkoc3RhdGUsIGNhdGVnb3J5KSB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICBzdGF0ZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICB9XG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///290\n");

/***/ })

})