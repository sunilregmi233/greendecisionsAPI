webpackHotUpdate(0,{

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nbody {\\n  font-family: 'Abhaya Libre', Times, serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  background: #000;\\n  color: #fff;\\n  overflow-x: hidden;\\n}\\nh1,\\nh2,\\nh3,\\nh4 {\\n  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;\\n  font-weight: 800;\\n}\\n.centered {\\n  margin: 0 auto;\\n  display: table;\\n  font-size: 60px;\\n  margin-top: 100px;\\n}\\n.box {\\n  border: 1px solid rgba(255, 255, 255, 0.5);\\n  padding: 8px 20px;\\n  line-height: 1.3em;\\n  opacity: 0;\\n  color: white;\\n  width: 200px;\\n  margin: 0 auto;\\n  margin-top: 30px;\\n  transform: translateZ(0);\\n  perspective: 1000px;\\n  backface-visibility: hidden;\\n  background: rgba(255, 255, 255, 0.1);\\n  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n#app {\\n  height: 2000px;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/src/App.vue\"],\"names\":[],\"mappings\":\";AA6BA;EACA,0CAAA;EACA,oCAAA;EACA,mCAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;CACA;AAEA;;;;EAIA,uDAAA;EACA,iBAAA;CACA;AAEA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,2CAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,oBAAA;EACA,4BAAA;EACA,qCAAA;EACA,yDAAA;CACA;AAEA;EACA,eAAA;CACA\",\"file\":\"App.vue\",\"sourcesContent\":[\"<template>\\n  <div id=\\\"app\\\">\\n     <the-header></the-header>\\n     <the-body></the-body>\\n\\n  </div>\\n</template>\\n\\n<script>\\nimport TheHeader from './components/TheHeader';\\nimport TheBody from './components/TheBody';\\n\\n\\n\\nimport axios from 'axios';\\nexport default {\\n  el: \\\"#app\\\",\\n  components: {\\n    'the-header': TheHeader,\\n    'the-body': TheBody\\n  },\\n  data () {\\n    return {\\n    }\\n  }\\n}\\n</script>\\n\\n<style>\\nbody {\\n  font-family: 'Abhaya Libre', Times, serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  background: #000;\\n  color: #fff;\\n  overflow-x: hidden;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4 {\\n  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;\\n  font-weight: 800;\\n}\\n\\n.centered {\\n  margin: 0 auto;\\n  display: table;\\n  font-size: 60px;\\n  margin-top: 100px;\\n}\\n\\n.box {\\n  border: 1px solid rgba(255, 255, 255, 0.5);\\n  padding: 8px 20px;\\n  line-height: 1.3em;\\n  opacity: 0;\\n  color: white;\\n  width: 200px;\\n  margin: 0 auto;\\n  margin-top: 30px;\\n  transform: translateZ(0);\\n  perspective: 1000px;\\n  backface-visibility: hidden;\\n  background: rgba(255, 255, 255, 0.1);\\n  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n\\n#app {\\n  height: 2000px;\\n}\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT8wMzI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQixtQkFBTyxDQUFDLEVBQTRDO0FBQy9FOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxXQUFXLDhDQUE4Qyx3Q0FBd0MsdUNBQXVDLHFCQUFxQixnQkFBZ0IsdUJBQXVCLEdBQUcscUJBQXFCLDJEQUEyRCxxQkFBcUIsR0FBRyxhQUFhLG1CQUFtQixtQkFBbUIsb0JBQW9CLHNCQUFzQixHQUFHLFFBQVEsK0NBQStDLHNCQUFzQix1QkFBdUIsZUFBZSxpQkFBaUIsaUJBQWlCLG1CQUFtQixxQkFBcUIsNkJBQTZCLHdCQUF3QixnQ0FBZ0MseUNBQXlDLDZEQUE2RCxHQUFHLFFBQVEsbUJBQW1CLEdBQUcsWUFBWSxtSEFBbUgsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLFFBQVEsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLDBOQUEwTiw2Q0FBNkMsa0NBQWtDLGtCQUFrQixrQ0FBa0MsNERBQTRELGNBQWMsY0FBYyxPQUFPLEtBQUssR0FBRyw4QkFBOEIsOENBQThDLHdDQUF3Qyx1Q0FBdUMscUJBQXFCLGdCQUFnQix1QkFBdUIsR0FBRyx1QkFBdUIsMkRBQTJELHFCQUFxQixHQUFHLGVBQWUsbUJBQW1CLG1CQUFtQixvQkFBb0Isc0JBQXNCLEdBQUcsVUFBVSwrQ0FBK0Msc0JBQXNCLHVCQUF1QixlQUFlLGlCQUFpQixpQkFBaUIsbUJBQW1CLHFCQUFxQiw2QkFBNkIsd0JBQXdCLGdDQUFnQyx5Q0FBeUMsNkRBQTZELEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxpQ0FBaUM7O0FBRTdpRiIsImZpbGUiOiIzMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0FiaGF5YSBMaWJyZScsIFRpbWVzLCBzZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQge1xcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmNlbnRlcmVkIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuLmJveCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBwYWRkaW5nOiA4cHggMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgdHJhbnNpdGlvbjogMS41cyBhbGwgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcbiNhcHAge1xcbiAgaGVpZ2h0OiAyMDAwcHg7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zdW5pbC9EZXNrdG9wL2dvdnVlL2dvdnVlL2JhY2tlbmQvZnJvbnRlbmQvc3JjL3NyYy9BcHAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2QkE7RUFDQSwwQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtDQUNBO0FBRUE7Ozs7RUFJQSx1REFBQTtFQUNBLGlCQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtDQUNBO0FBRUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlEQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQXBwLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGlkPVxcXCJhcHBcXFwiPlxcbiAgICAgPHRoZS1oZWFkZXI+PC90aGUtaGVhZGVyPlxcbiAgICAgPHRoZS1ib2R5PjwvdGhlLWJvZHk+XFxuXFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IFRoZUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvVGhlSGVhZGVyJztcXG5pbXBvcnQgVGhlQm9keSBmcm9tICcuL2NvbXBvbmVudHMvVGhlQm9keSc7XFxuXFxuXFxuXFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5leHBvcnQgZGVmYXVsdCB7XFxuICBlbDogXFxcIiNhcHBcXFwiLFxcbiAgY29tcG9uZW50czoge1xcbiAgICAndGhlLWhlYWRlcic6IFRoZUhlYWRlcixcXG4gICAgJ3RoZS1ib2R5JzogVGhlQm9keVxcbiAgfSxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgVGltZXMsIHNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uY2VudGVyZWQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4uYm94IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xcbiAgb3BhY2l0eTogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICB0cmFuc2l0aW9uOiAxLjVzIGFsbCBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcXG59XFxuXFxuI2FwcCB7XFxuICBoZWlnaHQ6IDIwMDBweDtcXG59XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2JhNWJkOTBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///313\n");

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TheHeader__ = __webpack_require__(262);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TheBody__ = __webpack_require__(265);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(97);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  el: \"#app\",\n  components: {\n    'the-header': __WEBPACK_IMPORTED_MODULE_0__components_TheHeader__[\"a\" /* default */],\n    'the-body': __WEBPACK_IMPORTED_MODULE_1__components_TheBody__[\"a\" /* default */]\n  },\n  data: function data() {\n    return {};\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0FwcC52dWU/ZWE5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0EsWUFEQTtBQUVBO0FBQ0Esd0ZBREE7QUFFQTtBQUZBLEdBRkE7QUFNQSxNQU5BLGtCQU1BO0FBQ0E7QUFFQTtBQVRBIiwiZmlsZSI6Ijk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGlkPVwiYXBwXCI+XG4gICAgIDx0aGUtaGVhZGVyPjwvdGhlLWhlYWRlcj5cbiAgICAgPHRoZS1ib2R5PjwvdGhlLWJvZHk+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRoZUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvVGhlSGVhZGVyJztcbmltcG9ydCBUaGVCb2R5IGZyb20gJy4vY29tcG9uZW50cy9UaGVCb2R5JztcblxuXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGVsOiBcIiNhcHBcIixcbiAgY29tcG9uZW50czoge1xuICAgICd0aGUtaGVhZGVyJzogVGhlSGVhZGVyLFxuICAgICd0aGUtYm9keSc6IFRoZUJvZHlcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBUaW1lcywgc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNlbnRlcmVkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBmb250LXNpemU6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHRyYW5zaXRpb246IDEuNXMgYWxsIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xufVxuXG4jYXBwIHtcbiAgaGVpZ2h0OiAyMDAwcHg7XG59XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0FwcC52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})