webpackHotUpdate(0,{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(51);\n\n\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */]);\n\nvar testData = [];\n\nfor (var i = 1; i <= 10; i++) {\n    testData.push({\n        id: i, name: 'Product #' + i, category: 'Category ' + i % 3,\n        description: 'This is Product #' + i, price: i * 50\n    });\n}\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__[\"a\" /* default */].Store({\n    strict: true,\n    state: {\n        products: testData,\n        productsTotal: testData.length,\n        currentPage: 1,\n        pageSize: 4,\n        currentCategory: \"ALL\"\n    },\n    getters: {\n        productsFilteredCategory: function productsFilteredCategory(state) {\n            return state.products.filter(function (p) {\n                return state.currentCategory == \"ALL\" || p.category == state.currentCategory;\n            });\n        },\n        processedProducts: function processedProducts(state) {\n            var index = (state.currentPage - 1) * state.pageSize;\n            return state.products.slice(index, index + state.pageSize);\n        },\n        pageCount: function pageCount(state) {\n            return Math.ceil(state.productsTotal / state.pageSize);\n        }\n    },\n    mutations: {\n        setCurrentPage: function setCurrentPage(state, page) {\n            state.currentPage = page;\n        },\n        setPageSize: function setPageSize(state, size) {\n            state.pageSize = size;\n            state.currentPage = 1;\n        }\n    }\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/MjFjOSJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwidGVzdERhdGEiLCJpIiwicHVzaCIsImlkIiwibmFtZSIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIlN0b3JlIiwic3RyaWN0Iiwic3RhdGUiLCJwcm9kdWN0cyIsInByb2R1Y3RzVG90YWwiLCJsZW5ndGgiLCJjdXJyZW50UGFnZSIsInBhZ2VTaXplIiwiY3VycmVudENhdGVnb3J5IiwiZ2V0dGVycyIsInByb2R1Y3RzRmlsdGVyZWRDYXRlZ29yeSIsImZpbHRlciIsInAiLCJwcm9jZXNzZWRQcm9kdWN0cyIsImluZGV4Iiwic2xpY2UiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsIm11dGF0aW9ucyIsInNldEN1cnJlbnRQYWdlIiwicGFnZSIsInNldFBhZ2VTaXplIiwic2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUFBLDRDQUFHQSxDQUFDQyxHQUFKLENBQVFDLHFEQUFSOztBQUVBLElBQU1DLFdBQVcsRUFBakI7O0FBRUEsS0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLEtBQUssRUFBckIsRUFBeUJBLEdBQXpCLEVBQThCO0FBQzVCRCxhQUFTRSxJQUFULENBQWM7QUFDVkMsWUFBSUYsQ0FETSxFQUNIRyxvQkFBa0JILENBRGYsRUFDb0JJLHdCQUFzQkosSUFBSSxDQUQ5QztBQUVWSywyQ0FBaUNMLENBRnZCLEVBRTRCTSxPQUFPTixJQUFJO0FBRnZDLEtBQWQ7QUFJRDtBQUNjLDZEQUFJRixxREFBSUEsQ0FBQ1MsS0FBVCxDQUFlO0FBQzVCQyxZQUFRLElBRG9CO0FBRTVCQyxXQUFPO0FBQ0hDLGtCQUFVWCxRQURQO0FBRUhZLHVCQUFlWixTQUFTYSxNQUZyQjtBQUdIQyxxQkFBYSxDQUhWO0FBSUhDLGtCQUFVLENBSlA7QUFLSEMseUJBQWlCO0FBTGQsS0FGcUI7QUFTNUJDLGFBQVM7QUFDUEMsa0NBQTBCO0FBQUEsbUJBQVNSLE1BQU1DLFFBQU4sQ0FBZVEsTUFBZixDQUFzQjtBQUFBLHVCQUFLVCxNQUFNTSxlQUFOLElBQXlCLEtBQXpCLElBQ0RJLEVBQUVmLFFBQUYsSUFBY0ssTUFBTU0sZUFEeEI7QUFBQSxhQUF0QixDQUFUO0FBQUEsU0FEbkI7QUFHTEssMkJBQW1CLGtDQUFTO0FBQ3hCLGdCQUFJQyxRQUFRLENBQUNaLE1BQU1JLFdBQU4sR0FBbUIsQ0FBcEIsSUFBeUJKLE1BQU1LLFFBQTNDO0FBQ0EsbUJBQU9MLE1BQU1DLFFBQU4sQ0FBZVksS0FBZixDQUFxQkQsS0FBckIsRUFBNEJBLFFBQVFaLE1BQU1LLFFBQTFDLENBQVA7QUFDSCxTQU5JO0FBT0xTLG1CQUFXO0FBQUEsbUJBQVNDLEtBQUtDLElBQUwsQ0FBVWhCLE1BQU1FLGFBQU4sR0FBc0JGLE1BQU1LLFFBQXRDLENBQVQ7QUFBQTtBQVBOLEtBVG1CO0FBa0I1QlksZUFBVztBQUNQQyxzQkFETywwQkFDUWxCLEtBRFIsRUFDZW1CLElBRGYsRUFDcUI7QUFDeEJuQixrQkFBTUksV0FBTixHQUFvQmUsSUFBcEI7QUFDSCxTQUhNO0FBSVBDLG1CQUpPLHVCQUlLcEIsS0FKTCxFQUlZcUIsSUFKWixFQUlrQjtBQUNyQnJCLGtCQUFNSyxRQUFOLEdBQWlCZ0IsSUFBakI7QUFDQXJCLGtCQUFNSSxXQUFOLEdBQW9CLENBQXBCO0FBQ0g7QUFQTTtBQWxCaUIsQ0FBZixDQUFmIiwiZmlsZSI6IjI4Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5jb25zdCB0ZXN0RGF0YSA9IFtdXG5cbmZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgdGVzdERhdGEucHVzaCh7XG4gICAgICBpZDogaSwgbmFtZTogYFByb2R1Y3QgIyR7aX1gLCBjYXRlZ29yeTogYENhdGVnb3J5ICR7aSAlIDN9YCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgVGhpcyBpcyBQcm9kdWN0ICMke2l9YCwgcHJpY2U6IGkgKiA1MFxuICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdHJpY3Q6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgICBwcm9kdWN0czogdGVzdERhdGEsXG4gICAgICBwcm9kdWN0c1RvdGFsOiB0ZXN0RGF0YS5sZW5ndGgsXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIHBhZ2VTaXplOiA0LFxuICAgICAgY3VycmVudENhdGVnb3J5OiBcIkFMTFwiXG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBwcm9kdWN0c0ZpbHRlcmVkQ2F0ZWdvcnk6IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzLmZpbHRlcihwID0+IHN0YXRlLmN1cnJlbnRDYXRlZ29yeSA9PSBcIkFMTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHAuY2F0ZWdvcnkgPT0gc3RhdGUuY3VycmVudENhdGVnb3J5KSxcbiAgICAgIHByb2Nlc3NlZFByb2R1Y3RzOiBzdGF0ZSA9PiB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gKHN0YXRlLmN1cnJlbnRQYWdlIC0xKSAqIHN0YXRlLnBhZ2VTaXplO1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5wcm9kdWN0cy5zbGljZShpbmRleCwgaW5kZXggKyBzdGF0ZS5wYWdlU2l6ZSk7XG4gICAgICB9LFxuICAgICAgcGFnZUNvdW50OiBzdGF0ZSA9PiBNYXRoLmNlaWwoc3RhdGUucHJvZHVjdHNUb3RhbCAvIHN0YXRlLnBhZ2VTaXplKVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICAgIHNldEN1cnJlbnRQYWdlKHN0YXRlLCBwYWdlKSB7XG4gICAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgfSxcbiAgICAgIHNldFBhZ2VTaXplKHN0YXRlLCBzaXplKSB7XG4gICAgICAgICAgc3RhdGUucGFnZVNpemUgPSBzaXplO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgIH1cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///287\n");

/***/ })

})