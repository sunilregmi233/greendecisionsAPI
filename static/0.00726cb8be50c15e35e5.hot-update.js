webpackHotUpdate(0,{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_auth__ = __webpack_require__(189);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(190);\nvar _mutations;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  namespaced: true,\n  state: {\n    activationCompleted: false,\n    activationError: false,\n    activationLoading: false,\n    registrationCompleted: false,\n    registrationError: false,\n    registrationLoading: false\n  },\n  actions: {\n    createAccount: function createAccount(_ref, _ref2) {\n      var commit = _ref.commit;\n      var username = _ref2.username,\n          email = _ref2.email,\n          password1 = _ref2.password1,\n          password2 = _ref2.password2;\n\n      commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"q\" /* REGISTRATION_BEGIN */]);\n      return __WEBPACK_IMPORTED_MODULE_0__api_auth__[\"a\" /* default */].createAccount(username, email, password1, password2).then(function (_ref3) {\n        var data = _ref3.data;\n        return commit(SET_TOKEN, data.key);\n      }).then(function () {\n        return commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"t\" /* REGISTRATION_SUCCESS */]);\n      }).catch(function () {\n        return commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"s\" /* REGISTRATION_FAILURE */]);\n      });\n    },\n    activateAccount: function activateAccount(_ref4, _ref5) {\n      var commit = _ref4.commit;\n      var key = _ref5.key;\n\n      commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"a\" /* ACTIVATION_BEGIN */]);\n      return __WEBPACK_IMPORTED_MODULE_0__api_auth__[\"a\" /* default */].verifyAccountEmail(key).then(function () {\n        return commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"d\" /* ACTIVATION_SUCCESS */]);\n      }).catch(function () {\n        return commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"c\" /* ACTIVATION_FAILURE */]);\n      });\n    },\n    clearRegistrationStatus: function clearRegistrationStatus(_ref6) {\n      var commit = _ref6.commit;\n\n      commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"r\" /* REGISTRATION_CLEAR */]);\n    },\n    clearActivationStatus: function clearActivationStatus(_ref7) {\n      var commit = _ref7.commit;\n\n      commit(__WEBPACK_IMPORTED_MODULE_1__types__[\"b\" /* ACTIVATION_CLEAR */]);\n    }\n  },\n  mutations: (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"a\" /* ACTIVATION_BEGIN */], function (state) {\n    state.activationLoading = true;\n  }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"b\" /* ACTIVATION_CLEAR */], function (state) {\n    state.activationCompleted = false;\n    state.activationError = false;\n    state.activationLoading = false;\n  }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"c\" /* ACTIVATION_FAILURE */], function (state) {\n    state.activationError = true;\n    state.activationLoading = false;\n  }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"d\" /* ACTIVATION_SUCCESS */], function (state) {\n    state.activationCompleted = true;\n    state.activationError = false;\n    state.activationLoading = false;\n  }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"q\" /* REGISTRATION_BEGIN */], function (state) {\n    state.registrationLoading = true;\n  }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"r\" /* REGISTRATION_CLEAR */], function (state) {\n    state.registrationCompleted = false;\n    state.registrationError = false;\n    state.registrationLoading = false;\n  }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"s\" /* REGISTRATION_FAILURE */], function (state) {\n    state.registrationError = true;\n    state.registrationLoading = false;\n  }), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_1__types__[\"t\" /* REGISTRATION_SUCCESS */], function (state) {\n    state.registrationCompleted = true;\n    state.registrationError = false;\n    state.registrationLoading = false;\n  }), _mutations)\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2lnbnVwLmpzPzI2MGMiXSwibmFtZXMiOlsibmFtZXNwYWNlZCIsInN0YXRlIiwiYWN0aXZhdGlvbkNvbXBsZXRlZCIsImFjdGl2YXRpb25FcnJvciIsImFjdGl2YXRpb25Mb2FkaW5nIiwicmVnaXN0cmF0aW9uQ29tcGxldGVkIiwicmVnaXN0cmF0aW9uRXJyb3IiLCJyZWdpc3RyYXRpb25Mb2FkaW5nIiwiYWN0aW9ucyIsImNyZWF0ZUFjY291bnQiLCJjb21taXQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQxIiwicGFzc3dvcmQyIiwiUkVHSVNUUkFUSU9OX0JFR0lOIiwiYXV0aCIsInRoZW4iLCJkYXRhIiwiU0VUX1RPS0VOIiwia2V5IiwiUkVHSVNUUkFUSU9OX1NVQ0NFU1MiLCJjYXRjaCIsIlJFR0lTVFJBVElPTl9GQUlMVVJFIiwiYWN0aXZhdGVBY2NvdW50IiwiQUNUSVZBVElPTl9CRUdJTiIsInZlcmlmeUFjY291bnRFbWFpbCIsIkFDVElWQVRJT05fU1VDQ0VTUyIsIkFDVElWQVRJT05fRkFJTFVSRSIsImNsZWFyUmVnaXN0cmF0aW9uU3RhdHVzIiwiUkVHSVNUUkFUSU9OX0NMRUFSIiwiY2xlYXJBY3RpdmF0aW9uU3RhdHVzIiwiQUNUSVZBVElPTl9DTEVBUiIsIm11dGF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7O0FBV2U7QUFDYkEsY0FBWSxJQURDO0FBRWJDLFNBQU87QUFDTEMseUJBQXFCLEtBRGhCO0FBRUxDLHFCQUFpQixLQUZaO0FBR0xDLHVCQUFtQixLQUhkO0FBSUxDLDJCQUF1QixLQUpsQjtBQUtMQyx1QkFBbUIsS0FMZDtBQU1MQyx5QkFBcUI7QUFOaEIsR0FGTTtBQVViQyxXQUFTO0FBQ1BDLGlCQURPLHNDQUM4RDtBQUFBLFVBQXJEQyxNQUFxRCxRQUFyREEsTUFBcUQ7QUFBQSxVQUF6Q0MsUUFBeUMsU0FBekNBLFFBQXlDO0FBQUEsVUFBL0JDLEtB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ImltcG9ydCBhdXRoIGZyb20gJy4uL2FwaS9hdXRoJztcblxuaW1wb3J0IHtcbiAgQUNUSVZBVElPTl9CRUdJTixcbiAgQUNUSVZBVElPTl9DTEVBUixcbiAgQUNUSVZBVElPTl9GQUlMVVJFLFxuICBBQ1RJVkFUSU9OX1NVQ0NFU1MsXG4gIFJFR0lTVFJBVElPTl9CRUdJTixcbiAgUkVHSVNUUkFUSU9OX0NMRUFSLFxuICBSRUdJU1RSQVRJT05fRkFJTFVSRSxcbiAgUkVHSVNUUkFUSU9OX1NVQ0NFU1MsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgYWN0aXZhdGlvbkNvbXBsZXRlZDogZmFsc2UsXG4gICAgYWN0aXZhdGlvbkVycm9yOiBmYWxzZSxcbiAgICBhY3RpdmF0aW9uTG9hZGluZzogZmFsc2UsXG4gICAgcmVnaXN0cmF0aW9uQ29tcGxldGVkOiBmYWxzZSxcbiAgICByZWdpc3RyYXRpb25FcnJvcjogZmFsc2UsXG4gICAgcmVnaXN0cmF0aW9uTG9hZGluZzogZmFsc2UsXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBjcmVhdGVBY2NvdW50KHsgY29tbWl0IH0sIHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZDEsIHBhc3N3b3JkMiB9KSB7XG4gICAgICBjb21taXQoUkVHSVNUUkFUSU9OX0JFR0lOKTtcbiAgICAgIHJldHVybiBhdXRoLmNyZWF0ZUFjY291bnQodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZDEsIHBhc3N3b3JkMilcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBjb21taXQoU0VUX1RPS0VOLCBkYXRhLmtleSkpXG4gICAgICAgIC50aGVuKCgpID0+IGNvbW1pdChSRUdJU1RSQVRJT05fU1VDQ0VTUykpXG4gICAgICAgIC5jYXRjaCgoKSA9PiBjb21taXQoUkVHSVNUUkFUSU9OX0ZBSUxVUkUpKTtcbiAgICB9LFxuICAgIGFjdGl2YXRlQWNjb3VudCh7IGNvbW1pdCB9LCB7IGtleSB9KSB7XG4gICAgICBjb21taXQoQUNUSVZBVElPTl9CRUdJTik7XG4gICAgICByZXR1cm4gYXV0aC52ZXJpZnlBY2NvdW50RW1haWwoa2V5KVxuICAgICAgICAudGhlbigoKSA9PiBjb21taXQoQUNUSVZBVElPTl9TVUNDRVNTKSlcbiAgICAgICAgLmNhdGNoKCgpID0+IGNvbW1pdChBQ1RJVkFUSU9OX0ZBSUxVUkUpKTtcbiAgICB9LFxuICAgIGNsZWFyUmVnaXN0cmF0aW9uU3RhdHVzKHsgY29tbWl0IH0pIHtcbiAgICAgIGNvbW1pdChSRUdJU1RSQVRJT05fQ0xFQVIpO1xuICAgIH0sXG4gICAgY2xlYXJBY3RpdmF0aW9uU3RhdHVzKHsgY29tbWl0IH0pIHtcbiAgICAgIGNvbW1pdChBQ1RJVkFUSU9OX0NMRUFSKTtcbiAgICB9LFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBbQUNUSVZBVElPTl9CRUdJTl0oc3RhdGUpIHtcbiAgICAgIHN0YXRlLmFjdGl2YXRpb25Mb2FkaW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIFtBQ1RJVkFUSU9OX0NMRUFSXShzdGF0ZSkge1xuICAgICAgc3RhdGUuYWN0aXZhdGlvbkNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUuYWN0aXZhdGlvbkVycm9yID0gZmFsc2U7XG4gICAgICBzdGF0ZS5hY3RpdmF0aW9uTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgW0FDVElWQVRJT05fRkFJTFVSRV0oc3RhdGUpIHtcbiAgICAgIHN0YXRlLmFjdGl2YXRpb25FcnJvciA9IHRydWU7XG4gICAgICBzdGF0ZS5hY3RpdmF0aW9uTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgW0FDVElWQVRJT05fU1VDQ0VTU10oc3RhdGUpIHtcbiAgICAgIHN0YXRlLmFjdGl2YXRpb25Db21wbGV0ZWQgPSB0cnVlO1xuICAgICAgc3RhdGUuYWN0aXZhdGlvbkVycm9yID0gZmFsc2U7XG4gICAgICBzdGF0ZS5hY3RpdmF0aW9uTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgW1JFR0lTVFJBVElPTl9CRUdJTl0oc3RhdGUpIHtcbiAgICAgIHN0YXRlLnJlZ2lzdHJhdGlvbkxvYWRpbmcgPSB0cnVlO1xuICAgIH0sXG4gICAgW1JFR0lTVFJBVElPTl9DTEVBUl0oc3RhdGUpIHtcbiAgICAgIHN0YXRlLnJlZ2lzdHJhdGlvbkNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUucmVnaXN0cmF0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnJlZ2lzdHJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFtSRUdJU1RSQVRJT05fRkFJTFVSRV0oc3RhdGUpIHtcbiAgICAgIHN0YXRlLnJlZ2lzdHJhdGlvbkVycm9yID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnJlZ2lzdHJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFtSRUdJU1RSQVRJT05fU1VDQ0VTU10oc3RhdGUpIHtcbiAgICAgIHN0YXRlLnJlZ2lzdHJhdGlvbkNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBzdGF0ZS5yZWdpc3RyYXRpb25FcnJvciA9IGZhbHNlO1xuICAgICAgc3RhdGUucmVnaXN0cmF0aW9uTG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL3NpZ251cC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///681\n");

/***/ })

})