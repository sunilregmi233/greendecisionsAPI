webpackHotUpdate(0,{

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(55)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nform input {\\n  display: block\\n}\\n.error {\\n  color: crimson;\\n  font-size: 12px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/greenSITE/govue/govue/backend/frontend/src/views/src/views/Register.vue\"],\"names\":[],\"mappings\":\";AAwEA;EACA,cAAA;CACA;AAEA;EACA,eAAA;EACA,gBAAA;CACA\",\"file\":\"Register.vue\",\"sourcesContent\":[\"<template>\\n  <div id=\\\"register-view\\\">\\n    <h1>Create Account</h1>\\n    <template v-if=\\\"registrationLoading\\\">\\n      loading...\\n    </template>\\n    <template v-else-if=\\\"!registrationCompleted\\\">\\n      <form @submit.prevent=\\\"submit\\\">\\n        <input v-model=\\\"inputs.username\\\" type=\\\"text\\\" id=\\\"username\\\" placeholder=\\\"username\\\">\\n        <input v-model=\\\"inputs.password1\\\" type=\\\"password\\\" id=\\\"password1\\\" placeholder=\\\"password\\\">\\n        <input v-model=\\\"inputs.password2\\\" type=\\\"password\\\" id=\\\"password2\\\"\\n          placeholder=\\\"confirm password\\\">\\n        <input v-model=\\\"inputs.email\\\" type=\\\"email\\\" id=\\\"email\\\" placeholder=\\\"email\\\">\\n      </form>\\n      <BaseButton @click=\\\"createAccount(inputs)\\\">\\n        create account\\n      </BaseButton>\\n      <span class=\\\"error\\\" v-show=\\\"registrationError\\\">\\n        An error occured while processing your request.\\n      </span>\\n      <div>\\n        Already have an account?\\n        <router-link to=\\\"/login\\\">login</router-link>\\n        <router-link to=\\\"/password_reset\\\">reset password</router-link>\\n      </div>\\n    </template>\\n    <template v-else>\\n      <div>\\n        Registration complete. You should receive an email shortly with instructions on how to\\n        activate your account.\\n      </div>\\n      <div>\\n        <router-link to=\\\"/login\\\">return to login page</router-link>\\n      </div>\\n    </template>\\n  </div>\\n</template>\\n\\n<script>\\nimport { mapActions, mapState } from 'vuex';\\n\\nexport default {\\n  data() {\\n    return {\\n      inputs: {\\n        username: '',\\n        password1: '',\\n        password2: '',\\n        email: '',\\n      },\\n    }\\n  },\\n  components: {\\n    BaseButton,\\n  },\\n  computed: mapState('signup', [\\n    'registrationCompleted',\\n    'registrationError',\\n    'registrationLoading',\\n  ]),\\n  methods: mapActions('signup', [\\n    'createAccount',\\n    'clearRegistrationStatus',\\n  ]),\\n  beforeRouteLeave(to, from, next) {\\n    this.clearRegistrationStatus();\\n    next();\\n  },\\n};\\n</script>\\n\\n<style>\\nform input {\\n  display: block\\n}\\n\\n.error {\\n  color: crimson;\\n  font-size: 12px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvUmVnaXN0ZXIudnVlPzBkMTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQixxQkFBcUIsVUFBVSxtQkFBbUIsb0JBQW9CLEdBQUcsVUFBVSw4SUFBOEksTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsKzlDQUErOUMsdUJBQXVCLGFBQWEsb0JBQW9CLFlBQVksY0FBYyxpQkFBaUIsb0dBQW9HLFFBQVEsS0FBSyxrQkFBa0Isc0JBQXNCLG9RQUFvUSxxQ0FBcUMsYUFBYSxLQUFLLEtBQUssb0NBQW9DLHFCQUFxQixZQUFZLG1CQUFtQixvQkFBb0IsR0FBRywrQkFBK0I7O0FBRWorRSIsImZpbGUiOiIxODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZm9ybSBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9ja1xcbn1cXG4uZXJyb3Ige1xcbiAgY29sb3I6IGNyaW1zb247XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zdW5pbC9EZXNrdG9wL2dyZWVuU0lURS9nb3Z1ZS9nb3Z1ZS9iYWNrZW5kL2Zyb250ZW5kL3NyYy92aWV3cy9zcmMvdmlld3MvUmVnaXN0ZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF3RUE7RUFDQSxjQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJSZWdpc3Rlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBpZD1cXFwicmVnaXN0ZXItdmlld1xcXCI+XFxuICAgIDxoMT5DcmVhdGUgQWNjb3VudDwvaDE+XFxuICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJyZWdpc3RyYXRpb25Mb2FkaW5nXFxcIj5cXG4gICAgICBsb2FkaW5nLi4uXFxuICAgIDwvdGVtcGxhdGU+XFxuICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XFxcIiFyZWdpc3RyYXRpb25Db21wbGV0ZWRcXFwiPlxcbiAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cXFwic3VibWl0XFxcIj5cXG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJpbnB1dHMudXNlcm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJ1c2VybmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcInVzZXJuYW1lXFxcIj5cXG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJpbnB1dHMucGFzc3dvcmQxXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkMVxcXCIgcGxhY2Vob2xkZXI9XFxcInBhc3N3b3JkXFxcIj5cXG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJpbnB1dHMucGFzc3dvcmQyXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkMlxcXCJcXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XFxcImNvbmZpcm0gcGFzc3dvcmRcXFwiPlxcbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImlucHV0cy5lbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcImVtYWlsXFxcIj5cXG4gICAgICA8L2Zvcm0+XFxuICAgICAgPEJhc2VCdXR0b24gQGNsaWNrPVxcXCJjcmVhdGVBY2NvdW50KGlucHV0cylcXFwiPlxcbiAgICAgICAgY3JlYXRlIGFjY291bnRcXG4gICAgICA8L0Jhc2VCdXR0b24+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIiB2LXNob3c9XFxcInJlZ2lzdHJhdGlvbkVycm9yXFxcIj5cXG4gICAgICAgIEFuIGVycm9yIG9jY3VyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuXFxuICAgICAgPC9zcGFuPlxcbiAgICAgIDxkaXY+XFxuICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cXG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cXFwiL2xvZ2luXFxcIj5sb2dpbjwvcm91dGVyLWxpbms+XFxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9wYXNzd29yZF9yZXNldFxcXCI+cmVzZXQgcGFzc3dvcmQ8L3JvdXRlci1saW5rPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxcbiAgICAgIDxkaXY+XFxuICAgICAgICBSZWdpc3RyYXRpb24gY29tcGxldGUuIFlvdSBzaG91bGQgcmVjZWl2ZSBhbiBlbWFpbCBzaG9ydGx5IHdpdGggaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0b1xcbiAgICAgICAgYWN0aXZhdGUgeW91ciBhY2NvdW50LlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XFxcIi9sb2dpblxcXCI+cmV0dXJuIHRvIGxvZ2luIHBhZ2U8L3JvdXRlci1saW5rPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpbnB1dHM6IHtcXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcXG4gICAgICAgIHBhc3N3b3JkMTogJycsXFxuICAgICAgICBwYXNzd29yZDI6ICcnLFxcbiAgICAgICAgZW1haWw6ICcnLFxcbiAgICAgIH0sXFxuICAgIH1cXG4gIH0sXFxuICBjb21wb25lbnRzOiB7XFxuICAgIEJhc2VCdXR0b24sXFxuICB9LFxcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKCdzaWdudXAnLCBbXFxuICAgICdyZWdpc3RyYXRpb25Db21wbGV0ZWQnLFxcbiAgICAncmVnaXN0cmF0aW9uRXJyb3InLFxcbiAgICAncmVnaXN0cmF0aW9uTG9hZGluZycsXFxuICBdKSxcXG4gIG1ldGhvZHM6IG1hcEFjdGlvbnMoJ3NpZ251cCcsIFtcXG4gICAgJ2NyZWF0ZUFjY291bnQnLFxcbiAgICAnY2xlYXJSZWdpc3RyYXRpb25TdGF0dXMnLFxcbiAgXSksXFxuICBiZWZvcmVSb3V0ZUxlYXZlKHRvLCBmcm9tLCBuZXh0KSB7XFxuICAgIHRoaXMuY2xlYXJSZWdpc3RyYXRpb25TdGF0dXMoKTtcXG4gICAgbmV4dCgpO1xcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5mb3JtIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrXFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogY3JpbXNvbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNjNhZTkxNDZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvUmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///188\n");

/***/ })

})