webpackHotUpdate(0,{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nheader[data-v-9a9f6144] {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info[data-v-9a9f6144] {\\n    background-color:transparent !important;\\n}\\nb-nav-item[data-v-9a9f6144]:hover {\\n  background: lightgreen;\\n}\\nbody[data-v-9a9f6144] {\\n  font-family: 'Abhaya Libre', Times, serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  background: #000;\\n  color: #fff;\\n  overflow-x: hidden;\\n}\\nh1[data-v-9a9f6144],\\nh2[data-v-9a9f6144],\\nh3[data-v-9a9f6144],\\nh4[data-v-9a9f6144] {\\n  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;\\n  font-weight: 800;\\n}\\n.centered[data-v-9a9f6144] {\\n  margin: 0 auto;\\n  display: table;\\n  font-size: 60px;\\n  margin-top: 100px;\\n}\\n.box[data-v-9a9f6144] {\\n  border: 1px solid rgba(255, 255, 255, 0.5);\\n  padding: 8px 20px;\\n  line-height: 1.3em;\\n  opacity: 0;\\n  color: white;\\n  width: 200px;\\n  margin: 0 auto;\\n  margin-top: 30px;\\n  transform: translateZ(0);\\n  perspective: 1000px;\\n  backface-visibility: hidden;\\n  background: rgba(255, 255, 255, 0.1);\\n  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n#app[data-v-9a9f6144] {\\n  height: 2000px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/components/src/components/TheHeader.vue\"],\"names\":[],\"mappings\":\";AAoHA;EACA,cAAA;EACA,uBAAA;CACA;AACA;IACA,wCAAA;CACA;AACA;EACA,uBAAA;CACA;AACA;EACA,0CAAA;EACA,oCAAA;EACA,mCAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;CACA;AAEA;;;;EAIA,uDAAA;EACA,iBAAA;CACA;AAEA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,2CAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,oBAAA;EACA,4BAAA;EACA,qCAAA;EACA,yDAAA;CACA;AAEA;EACA,eAAA;CACA\",\"file\":\"TheHeader.vue\",\"sourcesContent\":[\"<template>\\n  <header>\\n    <h1 class=\\\"centered\\\">Scroll me</h1>\\n        <div class=\\\"box\\\" v-scroll=\\\"handleScroll\\\">\\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque amet harum aut ab veritatis earum porro praesentium ut corporis. Quasi provident dolorem officia iure fugiat, eius mollitia sequi quisquam.</p>\\n        </div>\\n   <b-navbar fixed=\\\"top\\\" toggleable=\\\"lg\\\" variant=\\\"info\\\">\\n    <b-navbar-brand href=\\\"#\\\">GREEN DECISIONS</b-navbar-brand>\\n\\n    <b-navbar-toggle target=\\\"nav-collapse\\\"></b-navbar-toggle>\\n\\n    <b-collapse id=\\\"nav-collapse\\\" is-nav>\\n      <b-navbar-nav>\\n        <b-nav-item href=\\\"#\\\">Link</b-nav-item>\\n        <b-nav-item href=\\\"#\\\" disabled>Disabled</b-nav-item>\\n      </b-navbar-nav>\\n\\n      <!-- Right aligned nav items -->\\n      <b-navbar-nav class=\\\"ml-auto\\\">\\n        <b-nav-form>\\n          <b-form-input size=\\\"sm\\\" class=\\\"mr-sm-2\\\" placeholder=\\\"Search\\\"></b-form-input>\\n          <b-button size=\\\"sm\\\" class=\\\"my-2 my-sm-0\\\" type=\\\"submit\\\">Search</b-button>\\n        </b-nav-form>\\n\\n        <b-nav-item-dropdown text=\\\"Lang\\\" right>\\n          <b-dropdown-item href=\\\"#\\\">EN</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">ES</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">RU</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">FA</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n\\n        <b-nav-item-dropdown right>\\n          <!-- Using 'button-content' slot -->\\n          <template slot=\\\"button-content\\\"><em>User</em></template>\\n          <b-dropdown-item href=\\\"#\\\">Profile</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">Sign Out</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n      </b-navbar-nav>\\n    </b-collapse>\\n  </b-navbar>\\n  <b-carousel\\n      id=\\\"carousel-1\\\"\\n      v-model=\\\"slide\\\"\\n      :interval=\\\"4000\\\"\\n      controls\\n      indicators\\n      background=\\\"#ababab\\\"\\n      img-width=\\\"1024\\\"\\n      img-height=\\\"480\\\"\\n      style=\\\"text-shadow: 1px 1px 2px #333;\\\"\\n      @sliding-start=\\\"onSlideStart\\\"\\n      @sliding-end=\\\"onSlideEnd\\\"\\n    >\\n      <!-- Text slides with image -->\\n      <b-carousel-slide\\n        caption=\\\"First slide\\\"\\n        text=\\\"Nulla vitae elit libero, a pharetra augue mollis interdum.\\\"\\n        img-src=\\\"https://picsum.photos/1024/480/?image=52\\\"\\n      >\\n        <h1>Greendecisions website</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with custom text -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=54\\\">\\n        <h1>Hello world!</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with image only -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=58\\\"></b-carousel-slide>\\n\\n      <!-- Slides with img slot -->\\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\\n      <b-carousel-slide>\\n        <img\\n          slot=\\\"img\\\"\\n          class=\\\"d-block img-fluid w-100\\\"\\n          width=\\\"1024\\\"\\n          height=\\\"480\\\"\\n          src=\\\"https://picsum.photos/1024/480/?image=55\\\"\\n          alt=\\\"image slot\\\"\\n        >\\n      </b-carousel-slide>\\n\\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\\n      <b-carousel-slide caption=\\\"Blank Image\\\" img-blank img-alt=\\\"Blank image\\\">\\n        <p>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n        </p>\\n      </b-carousel-slide>\\n    </b-carousel>\\n  </header>\\n</template>\\n\\n<script>\\n\\nexport default {\\n  data () {\\n    return {\\n\\n    }\\n  },\\n  methods: {\\n      handleScroll: function (evt, el) {\\n        if (window.scrollY > 100) {\\n          el.setAttribute(\\n            'style',\\n            'opacity: 1; transform: translate3d(0, -10px, 0)'\\n          )\\n        }\\n        return window.scrollY > 100\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\nheader {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info {\\n    background-color:transparent !important;\\n}\\nb-nav-item:hover {\\n  background: lightgreen;\\n}\\nbody {\\n  font-family: 'Abhaya Libre', Times, serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  background: #000;\\n  color: #fff;\\n  overflow-x: hidden;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4 {\\n  font-family: 'Fira Sans', Helvetica, Arial, sans-serif;\\n  font-weight: 800;\\n}\\n\\n.centered {\\n  margin: 0 auto;\\n  display: table;\\n  font-size: 60px;\\n  margin-top: 100px;\\n}\\n\\n.box {\\n  border: 1px solid rgba(255, 255, 255, 0.5);\\n  padding: 8px 20px;\\n  line-height: 1.3em;\\n  opacity: 0;\\n  color: white;\\n  width: 200px;\\n  margin: 0 auto;\\n  margin-top: 30px;\\n  transform: translateZ(0);\\n  perspective: 1000px;\\n  backface-visibility: hidden;\\n  background: rgba(255, 255, 255, 0.1);\\n  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);\\n}\\n\\n#app {\\n  height: 2000px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlP2NjODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixrQkFBa0IsMkJBQTJCLEdBQUcsNkJBQTZCLDhDQUE4QyxHQUFHLHFDQUFxQywyQkFBMkIsR0FBRyx5QkFBeUIsOENBQThDLHdDQUF3Qyx1Q0FBdUMscUJBQXFCLGdCQUFnQix1QkFBdUIsR0FBRyx5RkFBeUYsMkRBQTJELHFCQUFxQixHQUFHLDhCQUE4QixtQkFBbUIsbUJBQW1CLG9CQUFvQixzQkFBc0IsR0FBRyx5QkFBeUIsK0NBQStDLHNCQUFzQix1QkFBdUIsZUFBZSxpQkFBaUIsaUJBQWlCLG1CQUFtQixxQkFBcUIsNkJBQTZCLHdCQUF3QixnQ0FBZ0MseUNBQXlDLDZEQUE2RCxHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxVQUFVLCtJQUErSSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxRQUFRLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSwyaEVBQTJoRSx3bERBQXdsRCxhQUFhLGNBQWMsU0FBUyxLQUFLLGVBQWUsMENBQTBDLHFDQUFxQyw0RUFBNEUsNkRBQTZELDRDQUE0QyxLQUFLLEdBQUcscUNBQXFDLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLDhDQUE4QyxHQUFHLG9CQUFvQiwyQkFBMkIsR0FBRyxRQUFRLDhDQUE4Qyx3Q0FBd0MsdUNBQXVDLHFCQUFxQixnQkFBZ0IsdUJBQXVCLEdBQUcsdUJBQXVCLDJEQUEyRCxxQkFBcUIsR0FBRyxlQUFlLG1CQUFtQixtQkFBbUIsb0JBQW9CLHNCQUFzQixHQUFHLFVBQVUsK0NBQStDLHNCQUFzQix1QkFBdUIsZUFBZSxpQkFBaUIsaUJBQWlCLG1CQUFtQixxQkFBcUIsNkJBQTZCLHdCQUF3QixnQ0FBZ0MseUNBQXlDLDZEQUE2RCxHQUFHLFVBQVUsbUJBQW1CLEdBQUcsK0JBQStCOztBQUVucE4iLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaGVhZGVyW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5iZy1pbmZvW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbmItbmF2LWl0ZW1bZGF0YS12LTlhOWY2MTQ0XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5ib2R5W2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBUaW1lcywgc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbmgxW2RhdGEtdi05YTlmNjE0NF0sXFxuaDJbZGF0YS12LTlhOWY2MTQ0XSxcXG5oM1tkYXRhLXYtOWE5ZjYxNDRdLFxcbmg0W2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmNlbnRlcmVkW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG4uYm94W2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zZW07XFxuICBvcGFjaXR5OiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIHRyYW5zaXRpb246IDEuNXMgYWxsIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbn1cXG4jYXBwW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgaGVpZ2h0OiAyMDAwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zdW5pbC9EZXNrdG9wL2dvdnVlL2dvdnVlL2JhY2tlbmQvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0hBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0NBQ0E7QUFDQTtJQUNBLHdDQUFBO0NBQ0E7QUFDQTtFQUNBLHVCQUFBO0NBQ0E7QUFDQTtFQUNBLDBDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0NBQ0E7QUFFQTs7OztFQUlBLHVEQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EseURBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJUaGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxoZWFkZXI+XFxuICAgIDxoMSBjbGFzcz1cXFwiY2VudGVyZWRcXFwiPlNjcm9sbCBtZTwvaDE+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiIHYtc2Nyb2xsPVxcXCJoYW5kbGVTY3JvbGxcXFwiPlxcbiAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQSBhdHF1ZSBhbWV0IGhhcnVtIGF1dCBhYiB2ZXJpdGF0aXMgZWFydW0gcG9ycm8gcHJhZXNlbnRpdW0gdXQgY29ycG9yaXMuIFF1YXNpIHByb3ZpZGVudCBkb2xvcmVtIG9mZmljaWEgaXVyZSBmdWdpYXQsIGVpdXMgbW9sbGl0aWEgc2VxdWkgcXVpc3F1YW0uPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgPGItbmF2YmFyIGZpeGVkPVxcXCJ0b3BcXFwiIHRvZ2dsZWFibGU9XFxcImxnXFxcIiB2YXJpYW50PVxcXCJpbmZvXFxcIj5cXG4gICAgPGItbmF2YmFyLWJyYW5kIGhyZWY9XFxcIiNcXFwiPkdSRUVOIERFQ0lTSU9OUzwvYi1uYXZiYXItYnJhbmQ+XFxuXFxuICAgIDxiLW5hdmJhci10b2dnbGUgdGFyZ2V0PVxcXCJuYXYtY29sbGFwc2VcXFwiPjwvYi1uYXZiYXItdG9nZ2xlPlxcblxcbiAgICA8Yi1jb2xsYXBzZSBpZD1cXFwibmF2LWNvbGxhcHNlXFxcIiBpcy1uYXY+XFxuICAgICAgPGItbmF2YmFyLW5hdj5cXG4gICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XFxcIiNcXFwiPkxpbms8L2ItbmF2LWl0ZW0+XFxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVxcXCIjXFxcIiBkaXNhYmxlZD5EaXNhYmxlZDwvYi1uYXYtaXRlbT5cXG4gICAgICA8L2ItbmF2YmFyLW5hdj5cXG5cXG4gICAgICA8IS0tIFJpZ2h0IGFsaWduZWQgbmF2IGl0ZW1zIC0tPlxcbiAgICAgIDxiLW5hdmJhci1uYXYgY2xhc3M9XFxcIm1sLWF1dG9cXFwiPlxcbiAgICAgICAgPGItbmF2LWZvcm0+XFxuICAgICAgICAgIDxiLWZvcm0taW5wdXQgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJtci1zbS0yXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgPGItYnV0dG9uIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXktMiBteS1zbS0wXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlNlYXJjaDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItbmF2LWZvcm0+XFxuXFxuICAgICAgICA8Yi1uYXYtaXRlbS1kcm9wZG93biB0ZXh0PVxcXCJMYW5nXFxcIiByaWdodD5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5FTjwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPkVTPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+UlU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5GQTwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcblxcbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gcmlnaHQ+XFxuICAgICAgICAgIDwhLS0gVXNpbmcgJ2J1dHRvbi1jb250ZW50JyBzbG90IC0tPlxcbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYnV0dG9uLWNvbnRlbnRcXFwiPjxlbT5Vc2VyPC9lbT48L3RlbXBsYXRlPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPlByb2ZpbGU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5TaWduIE91dDwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcbiAgICAgIDwvYi1uYXZiYXItbmF2PlxcbiAgICA8L2ItY29sbGFwc2U+XFxuICA8L2ItbmF2YmFyPlxcbiAgPGItY2Fyb3VzZWxcXG4gICAgICBpZD1cXFwiY2Fyb3VzZWwtMVxcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJzbGlkZVxcXCJcXG4gICAgICA6aW50ZXJ2YWw9XFxcIjQwMDBcXFwiXFxuICAgICAgY29udHJvbHNcXG4gICAgICBpbmRpY2F0b3JzXFxuICAgICAgYmFja2dyb3VuZD1cXFwiI2FiYWJhYlxcXCJcXG4gICAgICBpbWctd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgaW1nLWhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzMzMztcXFwiXFxuICAgICAgQHNsaWRpbmctc3RhcnQ9XFxcIm9uU2xpZGVTdGFydFxcXCJcXG4gICAgICBAc2xpZGluZy1lbmQ9XFxcIm9uU2xpZGVFbmRcXFwiXFxuICAgID5cXG4gICAgICA8IS0tIFRleHQgc2xpZGVzIHdpdGggaW1hZ2UgLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcXG4gICAgICAgIGNhcHRpb249XFxcIkZpcnN0IHNsaWRlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLlxcXCJcXG4gICAgICAgIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTJcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGgxPkdyZWVuZGVjaXNpb25zIHdlYnNpdGU8L2gxPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG5cXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGN1c3RvbSB0ZXh0IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcXFwiPlxcbiAgICAgICAgPGgxPkhlbGxvIHdvcmxkITwvaDE+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1hZ2Ugb25seSAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU4XFxcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBpbWcgc2xvdCAtLT5cXG4gICAgICA8IS0tIE5vdGUgdGhlIGNsYXNzZXMgLmQtYmxvY2sgYW5kIC5pbWctZmx1aWQgdG8gcHJldmVudCBicm93c2VyIGRlZmF1bHQgaW1hZ2UgYWxpZ25tZW50IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlPlxcbiAgICAgICAgPGltZ1xcbiAgICAgICAgICBzbG90PVxcXCJpbWdcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFxcXCJcXG4gICAgICAgICAgd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgICAgIGhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTVcXFwiXFxuICAgICAgICAgIGFsdD1cXFwiaW1hZ2Ugc2xvdFxcXCJcXG4gICAgICAgID5cXG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZSB3aXRoIGJsYW5rIGZsdWlkIGltYWdlIHRvIG1haW50YWluIHNsaWRlIGFzcGVjdCByYXRpbyAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBjYXB0aW9uPVxcXCJCbGFuayBJbWFnZVxcXCIgaW1nLWJsYW5rIGltZy1hbHQ9XFxcIkJsYW5rIGltYWdlXFxcIj5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcXG4gICAgICAgICAgYSB0aW5jaWR1bnQgZWdldCwgY29udmFsbGlzIHZlbCBlc3QuIFV0IHBlbGxlbnRlc3F1ZSB1dCBsYWN1cyB2ZWwgaW50ZXJkdW0uXFxuICAgICAgICA8L3A+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcbiAgICA8L2ItY2Fyb3VzZWw+XFxuICA8L2hlYWRlcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuXFxuICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgICAgaGFuZGxlU2Nyb2xsOiBmdW5jdGlvbiAoZXZ0LCBlbCkge1xcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XFxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcXG4gICAgICAgICAgICAnc3R5bGUnLFxcbiAgICAgICAgICAgICdvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSdcXG4gICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID4gMTAwXFxuICAgIH1cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5iZy1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG5iLW5hdi1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBUaW1lcywgc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5jZW50ZXJlZCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5ib3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgcGFkZGluZzogOHB4IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMS4zZW07XFxuICBvcGFjaXR5OiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gIHRyYW5zaXRpb246IDEuNXMgYWxsIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGhlaWdodDogMjAwMHB4O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05YTlmNjE0NFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n");

/***/ })

})