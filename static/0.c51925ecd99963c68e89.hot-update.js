webpackHotUpdate(0,{

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(55)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nform input {\\n  display: block\\n}\\n.error {\\n  color: crimson;\\n  font-size: 12px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/greenSITE/govue/govue/backend/frontend/src/views/src/views/Register.vue\"],\"names\":[],\"mappings\":\";AAoEA;EACA,cAAA;CACA;AAEA;EACA,eAAA;EACA,gBAAA;CACA\",\"file\":\"Register.vue\",\"sourcesContent\":[\"<template>\\n  <div id=\\\"register-view\\\">\\n    <h1>Create Account</h1>\\n    <template v-if=\\\"registrationLoading\\\">\\n      loading...\\n    </template>\\n    <template v-else-if=\\\"!registrationCompleted\\\">\\n      <form @submit.prevent=\\\"submit\\\">\\n        <input v-model=\\\"inputs.username\\\" type=\\\"text\\\" id=\\\"username\\\" placeholder=\\\"username\\\">\\n        <input v-model=\\\"inputs.password1\\\" type=\\\"password\\\" id=\\\"password1\\\" placeholder=\\\"password\\\">\\n        <input v-model=\\\"inputs.password2\\\" type=\\\"password\\\" id=\\\"password2\\\"\\n          placeholder=\\\"confirm password\\\">\\n        <input v-model=\\\"inputs.email\\\" type=\\\"email\\\" id=\\\"email\\\" placeholder=\\\"email\\\">\\n      </form>\\n      <button @click=\\\"createAccount(inputs)\\\">\\n        create account\\n      </button>\\n      <span class=\\\"error\\\" v-show=\\\"registrationError\\\">\\n        An error occured while processing your request.\\n      </span>\\n      <div>\\n        Already have an account?\\n        <router-link to=\\\"/login\\\">login</router-link>\\n        <router-link to=\\\"/password_reset\\\">reset password</router-link>\\n      </div>\\n    </template>\\n    <template v-else>\\n      <div>\\n        Registration complete. You should receive an email shortly with instructions on how to\\n        activate your account.\\n      </div>\\n      <div>\\n        <router-link to=\\\"/login\\\">return to login page</router-link>\\n      </div>\\n    </template>\\n  </div>\\n</template>\\n\\n<script>\\nimport { mapActions, mapState } from 'vuex';\\n\\nexport default {\\n  data() {\\n    return {\\n      inputs: {\\n        username: '',\\n        password1: '',\\n        password2: '',\\n        email: '',\\n      },\\n    };\\n  },\\n  computed: mapState('signup', [\\n    'registrationCompleted',\\n    'registrationError',\\n    'registrationLoading',\\n  ]),\\n  methods: {\\n    createAccount({ username, password1, password2, email }) {\\n      this.$store.dispatch('signup/createAccount', { username, password1, password2, email })\\n        .then(() => this.$router.push('/login'));\\n    },\\n  },\\n\\n};\\n</script>\\n\\n<style>\\nform input {\\n  display: block\\n}\\n\\n.error {\\n  color: crimson;\\n  font-size: 12px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUmVnaXN0ZXIudnVlPzBkMTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQixxQkFBcUIsVUFBVSxtQkFBbUIsb0JBQW9CLEdBQUcsVUFBVSw4SUFBOEksTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsdTlDQUF1OUMsdUJBQXVCLGFBQWEsb0JBQW9CLFlBQVksY0FBYyxpQkFBaUIsb0dBQW9HLFNBQVMsS0FBSyw0SUFBNEkscUJBQXFCLHdDQUF3QyxHQUFHLHNEQUFzRCx3Q0FBd0Msb0RBQW9ELE9BQU8sTUFBTSxPQUFPLG9DQUFvQyxxQkFBcUIsWUFBWSxtQkFBbUIsb0JBQW9CLEdBQUcsK0JBQStCOztBQUVwK0UiLCJmaWxlIjoiMTg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmZvcm0gaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2tcXG59XFxuLmVycm9yIHtcXG4gIGNvbG9yOiBjcmltc29uO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc3VuaWwvRGVza3RvcC9ncmVlblNJVEUvZ292dWUvZ292dWUvYmFja2VuZC9mcm9udGVuZC9zcmMvdmlld3Mvc3JjL3ZpZXdzL1JlZ2lzdGVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0VBO0VBQ0EsY0FBQTtDQUNBO0FBRUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUmVnaXN0ZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgaWQ9XFxcInJlZ2lzdGVyLXZpZXdcXFwiPlxcbiAgICA8aDE+Q3JlYXRlIEFjY291bnQ8L2gxPlxcbiAgICA8dGVtcGxhdGUgdi1pZj1cXFwicmVnaXN0cmF0aW9uTG9hZGluZ1xcXCI+XFxuICAgICAgbG9hZGluZy4uLlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVxcXCIhcmVnaXN0cmF0aW9uQ29tcGxldGVkXFxcIj5cXG4gICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XFxcInN1Ym1pdFxcXCI+XFxuICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiaW5wdXRzLnVzZXJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJ1c2VybmFtZVxcXCI+XFxuICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiaW5wdXRzLnBhc3N3b3JkMVxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZDFcXFwiIHBsYWNlaG9sZGVyPVxcXCJwYXNzd29yZFxcXCI+XFxuICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiaW5wdXRzLnBhc3N3b3JkMlxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZDJcXFwiXFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJjb25maXJtIHBhc3N3b3JkXFxcIj5cXG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJpbnB1dHMuZW1haWxcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBpZD1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJlbWFpbFxcXCI+XFxuICAgICAgPC9mb3JtPlxcbiAgICAgIDxidXR0b24gQGNsaWNrPVxcXCJjcmVhdGVBY2NvdW50KGlucHV0cylcXFwiPlxcbiAgICAgICAgY3JlYXRlIGFjY291bnRcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiIHYtc2hvdz1cXFwicmVnaXN0cmF0aW9uRXJyb3JcXFwiPlxcbiAgICAgICAgQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC5cXG4gICAgICA8L3NwYW4+XFxuICAgICAgPGRpdj5cXG4gICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1xcbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVxcXCIvbG9naW5cXFwiPmxvZ2luPC9yb3V0ZXItbGluaz5cXG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cXFwiL3Bhc3N3b3JkX3Jlc2V0XFxcIj5yZXNldCBwYXNzd29yZDwvcm91dGVyLWxpbms+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvdGVtcGxhdGU+XFxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxuICAgICAgPGRpdj5cXG4gICAgICAgIFJlZ2lzdHJhdGlvbiBjb21wbGV0ZS4gWW91IHNob3VsZCByZWNlaXZlIGFuIGVtYWlsIHNob3J0bHkgd2l0aCBpbnN0cnVjdGlvbnMgb24gaG93IHRvXFxuICAgICAgICBhY3RpdmF0ZSB5b3VyIGFjY291bnQuXFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cXFwiL2xvZ2luXFxcIj5yZXR1cm4gdG8gbG9naW4gcGFnZTwvcm91dGVyLWxpbms+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGlucHV0czoge1xcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxcbiAgICAgICAgcGFzc3dvcmQxOiAnJyxcXG4gICAgICAgIHBhc3N3b3JkMjogJycsXFxuICAgICAgICBlbWFpbDogJycsXFxuICAgICAgfSxcXG4gICAgfTtcXG4gIH0sXFxuICBjb21wdXRlZDogbWFwU3RhdGUoJ3NpZ251cCcsIFtcXG4gICAgJ3JlZ2lzdHJhdGlvbkNvbXBsZXRlZCcsXFxuICAgICdyZWdpc3RyYXRpb25FcnJvcicsXFxuICAgICdyZWdpc3RyYXRpb25Mb2FkaW5nJyxcXG4gIF0pLFxcbiAgbWV0aG9kczoge1xcbiAgICBjcmVhdGVBY2NvdW50KHsgdXNlcm5hbWUsIHBhc3N3b3JkMSwgcGFzc3dvcmQyLCBlbWFpbCB9KSB7XFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3NpZ251cC9jcmVhdGVBY2NvdW50JywgeyB1c2VybmFtZSwgcGFzc3dvcmQxLCBwYXNzd29yZDIsIGVtYWlsIH0pXFxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJykpO1xcbiAgICB9LFxcbiAgfSxcXG5cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5mb3JtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrXFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjNhZTkxNDZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvUmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///188\n");

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(76);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data: function data() {\n    return {\n      inputs: {\n        username: '',\n        password1: '',\n        password2: '',\n        email: ''\n      }\n    };\n  },\n\n  computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__[\"d\" /* mapState */])('signup', ['registrationCompleted', 'registrationError', 'registrationLoading']),\n  methods: {\n    createAccount: function createAccount(_ref) {\n      var _this = this;\n\n      var username = _ref.username,\n          password1 = _ref.password1,\n          password2 = _ref.password2,\n          email = _ref.email;\n\n      this.$store.dispatch('signup/createAccount', { username: username, password1: password1, password2: password2, email: email }).then(function () {\n        return _this.$router.push('/login');\n      });\n    }\n  }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL1JlZ2lzdGVyLnZ1ZT83YTBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7O0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEscUJBRkE7QUFHQSxxQkFIQTtBQUlBO0FBSkE7QUFEQTtBQVFBLEdBVkE7O0FBV0Esc0ZBQ0EsdUJBREEsRUFFQSxtQkFGQSxFQUdBLHFCQUhBLEVBWEE7QUFnQkE7QUFDQSxpQkFEQSwrQkFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBLHFJQUNBLElBREEsQ0FDQTtBQUFBO0FBQUEsT0FEQTtBQUVBO0FBSkE7O0FBaEJBIiwiZmlsZSI6IjM2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cInJlZ2lzdGVyLXZpZXdcIj5cbiAgICA8aDE+Q3JlYXRlIEFjY291bnQ8L2gxPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwicmVnaXN0cmF0aW9uTG9hZGluZ1wiPlxuICAgICAgbG9hZGluZy4uLlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cIiFyZWdpc3RyYXRpb25Db21wbGV0ZWRcIj5cbiAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImlucHV0cy51c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIj5cbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJpbnB1dHMucGFzc3dvcmQxXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZDFcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiaW5wdXRzLnBhc3N3b3JkMlwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmQyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIj5cbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJpbnB1dHMuZW1haWxcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjcmVhdGVBY2NvdW50KGlucHV0cylcIj5cbiAgICAgICAgY3JlYXRlIGFjY291bnRcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiIHYtc2hvdz1cInJlZ2lzdHJhdGlvbkVycm9yXCI+XG4gICAgICAgIEFuIGVycm9yIG9jY3VyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuXG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2PlxuICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2xvZ2luXCI+bG9naW48L3JvdXRlci1saW5rPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvcGFzc3dvcmRfcmVzZXRcIj5yZXNldCBwYXNzd29yZDwvcm91dGVyLWxpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICA8ZGl2PlxuICAgICAgICBSZWdpc3RyYXRpb24gY29tcGxldGUuIFlvdSBzaG91bGQgcmVjZWl2ZSBhbiBlbWFpbCBzaG9ydGx5IHdpdGggaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xuICAgICAgICBhY3RpdmF0ZSB5b3VyIGFjY291bnQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPnJldHVybiB0byBsb2dpbiBwYWdlPC9yb3V0ZXItbGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRzOiB7XG4gICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgcGFzc3dvcmQxOiAnJyxcbiAgICAgICAgcGFzc3dvcmQyOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDogbWFwU3RhdGUoJ3NpZ251cCcsIFtcbiAgICAncmVnaXN0cmF0aW9uQ29tcGxldGVkJyxcbiAgICAncmVnaXN0cmF0aW9uRXJyb3InLFxuICAgICdyZWdpc3RyYXRpb25Mb2FkaW5nJyxcbiAgXSksXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVBY2NvdW50KHsgdXNlcm5hbWUsIHBhc3N3b3JkMSwgcGFzc3dvcmQyLCBlbWFpbCB9KSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnc2lnbnVwL2NyZWF0ZUFjY291bnQnLCB7IHVzZXJuYW1lLCBwYXNzd29yZDEsIHBhc3N3b3JkMiwgZW1haWwgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy4kcm91dGVyLnB1c2goJy9sb2dpbicpKTtcbiAgICB9LFxuICB9LFxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbmZvcm0gaW5wdXQge1xuICBkaXNwbGF5OiBibG9ja1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogY3JpbXNvbjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdmlld3MvUmVnaXN0ZXIudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///364\n");

/***/ })

})