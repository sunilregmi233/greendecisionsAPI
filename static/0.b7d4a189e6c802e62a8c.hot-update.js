webpackHotUpdate(0,{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nheader[data-v-9a9f6144] {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info[data-v-9a9f6144] {\\n    background-color:transparent !important;\\n}\\nb-nav-item[data-v-9a9f6144]:hover {\\n  background: lightgreen;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/components/src/components/TheHeader.vue\"],\"names\":[],\"mappings\":\";AAiHA;EACA,cAAA;EACA,uBAAA;CACA;AACA;IACA,wCAAA;CACA;AACA;EACA,uBAAA;CACA\",\"file\":\"TheHeader.vue\",\"sourcesContent\":[\"<template>\\n  <header>\\n   <b-navbar fixed=\\\"top\\\" class=\\\"box\\\" v-scroll=\\\"handleScroll\\\" toggleable=\\\"lg\\\" variant=\\\"info\\\">\\n    <b-navbar-brand href=\\\"#\\\">GREEN DECISIONS</b-navbar-brand>\\n\\n    <b-navbar-toggle target=\\\"nav-collapse\\\"></b-navbar-toggle>\\n\\n    <b-collapse id=\\\"nav-collapse\\\" is-nav>\\n      <b-navbar-nav>\\n        <b-nav-item href=\\\"#\\\">Link</b-nav-item>\\n        <b-nav-item href=\\\"#\\\" disabled>Disabled</b-nav-item>\\n      </b-navbar-nav>\\n\\n      <!-- Right aligned nav items -->\\n      <b-navbar-nav class=\\\"ml-auto\\\">\\n        <b-nav-form>\\n          <b-form-input size=\\\"sm\\\" class=\\\"mr-sm-2\\\" placeholder=\\\"Search\\\"></b-form-input>\\n          <b-button size=\\\"sm\\\" class=\\\"my-2 my-sm-0\\\" type=\\\"submit\\\">Search</b-button>\\n        </b-nav-form>\\n\\n        <b-nav-item-dropdown text=\\\"Lang\\\" right>\\n          <b-dropdown-item href=\\\"#\\\">EN</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">ES</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">RU</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">FA</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n\\n        <b-nav-item-dropdown right>\\n          <!-- Using 'button-content' slot -->\\n          <template slot=\\\"button-content\\\"><em>User</em></template>\\n          <b-dropdown-item href=\\\"#\\\">Profile</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">Sign Out</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n      </b-navbar-nav>\\n    </b-collapse>\\n  </b-navbar>\\n  <b-carousel\\n      id=\\\"carousel-1\\\"\\n      v-model=\\\"slide\\\"\\n      :interval=\\\"4000\\\"\\n      controls\\n      indicators\\n      background=\\\"#ababab\\\"\\n      img-width=\\\"1024\\\"\\n      img-height=\\\"480\\\"\\n      style=\\\"text-shadow: 1px 1px 2px #333;\\\"\\n      @sliding-start=\\\"onSlideStart\\\"\\n      @sliding-end=\\\"onSlideEnd\\\"\\n    >\\n      <!-- Text slides with image -->\\n      <b-carousel-slide\\n        caption=\\\"First slide\\\"\\n        text=\\\"Nulla vitae elit libero, a pharetra augue mollis interdum.\\\"\\n        img-src=\\\"https://picsum.photos/1024/480/?image=52\\\"\\n      >\\n        <h1>Greendecisions website</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with custom text -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=54\\\">\\n        <h1>Hello world!</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with image only -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=58\\\"></b-carousel-slide>\\n\\n      <!-- Slides with img slot -->\\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\\n      <b-carousel-slide>\\n        <img\\n          slot=\\\"img\\\"\\n          class=\\\"d-block img-fluid w-100\\\"\\n          width=\\\"1024\\\"\\n          height=\\\"480\\\"\\n          src=\\\"https://picsum.photos/1024/480/?image=55\\\"\\n          alt=\\\"image slot\\\"\\n        >\\n      </b-carousel-slide>\\n\\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\\n      <b-carousel-slide caption=\\\"Blank Image\\\" img-blank img-alt=\\\"Blank image\\\">\\n        <p>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n        </p>\\n      </b-carousel-slide>\\n    </b-carousel>\\n  </header>\\n</template>\\n\\n<script>\\n\\nexport default {\\n  el: '.box',\\n  data () {\\n    return {\\n\\n    }\\n  },\\n  methods: {\\n      handleScroll: function (evt, el) {\\n        if (window.scrollY > 100) {\\n          el.setAttribute(\\n            'style',\\n            'opacity: 0; '\\n          )\\n        }\\n        return window.scrollY > 100\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\nheader {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info {\\n    background-color:transparent !important;\\n}\\nb-nav-item:hover {\\n  background: lightgreen;\\n}\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlP2NjODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixrQkFBa0IsMkJBQTJCLEdBQUcsNkJBQTZCLDhDQUE4QyxHQUFHLHFDQUFxQywyQkFBMkIsR0FBRyxZQUFZLCtJQUErSSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxpdkRBQWl2RCx3bERBQXdsRCw0QkFBNEIsY0FBYyxTQUFTLEtBQUssZUFBZSwwQ0FBMEMscUNBQXFDLDRFQUE0RSwwQkFBMEIsNENBQTRDLEtBQUssR0FBRyxxQ0FBcUMsa0JBQWtCLDJCQUEyQixHQUFHLFlBQVksOENBQThDLEdBQUcsb0JBQW9CLDJCQUEyQixHQUFHLGlDQUFpQzs7QUFFcHpJIiwiZmlsZSI6IjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmhlYWRlcltkYXRhLXYtOWE5ZjYxNDRdIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG4uYmctaW5mb1tkYXRhLXYtOWE5ZjYxNDRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG5iLW5hdi1pdGVtW2RhdGEtdi05YTlmNjE0NF06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3N1bmlsL0Rlc2t0b3AvZ292dWUvZ292dWUvYmFja2VuZC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFpSEE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7Q0FDQTtBQUNBO0lBQ0Esd0NBQUE7Q0FDQTtBQUNBO0VBQ0EsdUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVGhlSGVhZGVyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8aGVhZGVyPlxcbiAgIDxiLW5hdmJhciBmaXhlZD1cXFwidG9wXFxcIiBjbGFzcz1cXFwiYm94XFxcIiB2LXNjcm9sbD1cXFwiaGFuZGxlU2Nyb2xsXFxcIiB0b2dnbGVhYmxlPVxcXCJsZ1xcXCIgdmFyaWFudD1cXFwiaW5mb1xcXCI+XFxuICAgIDxiLW5hdmJhci1icmFuZCBocmVmPVxcXCIjXFxcIj5HUkVFTiBERUNJU0lPTlM8L2ItbmF2YmFyLWJyYW5kPlxcblxcbiAgICA8Yi1uYXZiYXItdG9nZ2xlIHRhcmdldD1cXFwibmF2LWNvbGxhcHNlXFxcIj48L2ItbmF2YmFyLXRvZ2dsZT5cXG5cXG4gICAgPGItY29sbGFwc2UgaWQ9XFxcIm5hdi1jb2xsYXBzZVxcXCIgaXMtbmF2PlxcbiAgICAgIDxiLW5hdmJhci1uYXY+XFxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVxcXCIjXFxcIj5MaW5rPC9iLW5hdi1pdGVtPlxcbiAgICAgICAgPGItbmF2LWl0ZW0gaHJlZj1cXFwiI1xcXCIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2ItbmF2LWl0ZW0+XFxuICAgICAgPC9iLW5hdmJhci1uYXY+XFxuXFxuICAgICAgPCEtLSBSaWdodCBhbGlnbmVkIG5hdiBpdGVtcyAtLT5cXG4gICAgICA8Yi1uYXZiYXItbmF2IGNsYXNzPVxcXCJtbC1hdXRvXFxcIj5cXG4gICAgICAgIDxiLW5hdi1mb3JtPlxcbiAgICAgICAgICA8Yi1mb3JtLWlucHV0IHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItc20tMlxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaFxcXCI+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcIm15LTIgbXktc20tMFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5TZWFyY2g8L2ItYnV0dG9uPlxcbiAgICAgICAgPC9iLW5hdi1mb3JtPlxcblxcbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gdGV4dD1cXFwiTGFuZ1xcXCIgcmlnaHQ+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+RU48L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5FUzwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPlJVPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+RkE8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgIDwvYi1uYXYtaXRlbS1kcm9wZG93bj5cXG5cXG4gICAgICAgIDxiLW5hdi1pdGVtLWRyb3Bkb3duIHJpZ2h0PlxcbiAgICAgICAgICA8IS0tIFVzaW5nICdidXR0b24tY29udGVudCcgc2xvdCAtLT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImJ1dHRvbi1jb250ZW50XFxcIj48ZW0+VXNlcjwvZW0+PC90ZW1wbGF0ZT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5Qcm9maWxlPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+U2lnbiBPdXQ8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgIDwvYi1uYXYtaXRlbS1kcm9wZG93bj5cXG4gICAgICA8L2ItbmF2YmFyLW5hdj5cXG4gICAgPC9iLWNvbGxhcHNlPlxcbiAgPC9iLW5hdmJhcj5cXG4gIDxiLWNhcm91c2VsXFxuICAgICAgaWQ9XFxcImNhcm91c2VsLTFcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwic2xpZGVcXFwiXFxuICAgICAgOmludGVydmFsPVxcXCI0MDAwXFxcIlxcbiAgICAgIGNvbnRyb2xzXFxuICAgICAgaW5kaWNhdG9yc1xcbiAgICAgIGJhY2tncm91bmQ9XFxcIiNhYmFiYWJcXFwiXFxuICAgICAgaW1nLXdpZHRoPVxcXCIxMDI0XFxcIlxcbiAgICAgIGltZy1oZWlnaHQ9XFxcIjQ4MFxcXCJcXG4gICAgICBzdHlsZT1cXFwidGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMzMzM7XFxcIlxcbiAgICAgIEBzbGlkaW5nLXN0YXJ0PVxcXCJvblNsaWRlU3RhcnRcXFwiXFxuICAgICAgQHNsaWRpbmctZW5kPVxcXCJvblNsaWRlRW5kXFxcIlxcbiAgICA+XFxuICAgICAgPCEtLSBUZXh0IHNsaWRlcyB3aXRoIGltYWdlIC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlXFxuICAgICAgICBjYXB0aW9uPVxcXCJGaXJzdCBzbGlkZVxcXCJcXG4gICAgICAgIHRleHQ9XFxcIk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS5cXFwiXFxuICAgICAgICBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTUyXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxoMT5HcmVlbmRlY2lzaW9ucyB3ZWJzaXRlPC9oMT5cXG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBjdXN0b20gdGV4dCAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU0XFxcIj5cXG4gICAgICAgIDxoMT5IZWxsbyB3b3JsZCE8L2gxPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG5cXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGltYWdlIG9ubHkgLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGUgaW1nLXNyYz1cXFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01OFxcXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1nIHNsb3QgLS0+XFxuICAgICAgPCEtLSBOb3RlIHRoZSBjbGFzc2VzIC5kLWJsb2NrIGFuZCAuaW1nLWZsdWlkIHRvIHByZXZlbnQgYnJvd3NlciBkZWZhdWx0IGltYWdlIGFsaWdubWVudCAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZT5cXG4gICAgICAgIDxpbWdcXG4gICAgICAgICAgc2xvdD1cXFwiaW1nXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwiZC1ibG9jayBpbWctZmx1aWQgdy0xMDBcXFwiXFxuICAgICAgICAgIHdpZHRoPVxcXCIxMDI0XFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjQ4MFxcXCJcXG4gICAgICAgICAgc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU1XFxcIlxcbiAgICAgICAgICBhbHQ9XFxcImltYWdlIHNsb3RcXFwiXFxuICAgICAgICA+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGUgd2l0aCBibGFuayBmbHVpZCBpbWFnZSB0byBtYWludGFpbiBzbGlkZSBhc3BlY3QgcmF0aW8gLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGUgY2FwdGlvbj1cXFwiQmxhbmsgSW1hZ2VcXFwiIGltZy1ibGFuayBpbWctYWx0PVxcXCJCbGFuayBpbWFnZVxcXCI+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU3VzcGVuZGlzc2UgZXJvcyBmZWxpcywgdGluY2lkdW50XFxuICAgICAgICAgIGEgdGluY2lkdW50IGVnZXQsIGNvbnZhbGxpcyB2ZWwgZXN0LiBVdCBwZWxsZW50ZXNxdWUgdXQgbGFjdXMgdmVsIGludGVyZHVtLlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG4gICAgPC9iLWNhcm91c2VsPlxcbiAgPC9oZWFkZXI+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGVsOiAnLmJveCcsXFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG5cXG4gICAgfVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgICBoYW5kbGVTY3JvbGw6IGZ1bmN0aW9uIChldnQsIGVsKSB7XFxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFxcbiAgICAgICAgICAgICdzdHlsZScsXFxuICAgICAgICAgICAgJ29wYWNpdHk6IDA7ICdcXG4gICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID4gMTAwXFxuICAgIH1cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5iZy1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG5iLW5hdi1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTlhOWY2MTQ0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  el: '.box',\n  data: function data() {\n    return {};\n  },\n\n  methods: {\n    handleScroll: function handleScroll(evt, el) {\n      if (window.scrollY > 100) {\n        el.setAttribute('style', 'opacity: 0; ');\n      }\n      return window.scrollY > 100;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZT9jYzIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEZBO0FBQ0EsWUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUdBLEdBTkE7O0FBT0E7QUFDQTtBQUNBO0FBQ0Esd0JBQ0EsT0FEQSxFQUVBLGNBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVBBIiwiZmlsZSI6Ijk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8aGVhZGVyPlxuICAgPGItbmF2YmFyIGZpeGVkPVwidG9wXCIgY2xhc3M9XCJib3hcIiB2LXNjcm9sbD1cImhhbmRsZVNjcm9sbFwiIHRvZ2dsZWFibGU9XCJsZ1wiIHZhcmlhbnQ9XCJpbmZvXCI+XG4gICAgPGItbmF2YmFyLWJyYW5kIGhyZWY9XCIjXCI+R1JFRU4gREVDSVNJT05TPC9iLW5hdmJhci1icmFuZD5cblxuICAgIDxiLW5hdmJhci10b2dnbGUgdGFyZ2V0PVwibmF2LWNvbGxhcHNlXCI+PC9iLW5hdmJhci10b2dnbGU+XG5cbiAgICA8Yi1jb2xsYXBzZSBpZD1cIm5hdi1jb2xsYXBzZVwiIGlzLW5hdj5cbiAgICAgIDxiLW5hdmJhci1uYXY+XG4gICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XCIjXCI+TGluazwvYi1uYXYtaXRlbT5cbiAgICAgICAgPGItbmF2LWl0ZW0gaHJlZj1cIiNcIiBkaXNhYmxlZD5EaXNhYmxlZDwvYi1uYXYtaXRlbT5cbiAgICAgIDwvYi1uYXZiYXItbmF2PlxuXG4gICAgICA8IS0tIFJpZ2h0IGFsaWduZWQgbmF2IGl0ZW1zIC0tPlxuICAgICAgPGItbmF2YmFyLW5hdiBjbGFzcz1cIm1sLWF1dG9cIj5cbiAgICAgICAgPGItbmF2LWZvcm0+XG4gICAgICAgICAgPGItZm9ybS1pbnB1dCBzaXplPVwic21cIiBjbGFzcz1cIm1yLXNtLTJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgIDxiLWJ1dHRvbiBzaXplPVwic21cIiBjbGFzcz1cIm15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItbmF2LWZvcm0+XG5cbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gdGV4dD1cIkxhbmdcIiByaWdodD5cbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XCIjXCI+RU48L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XCIjXCI+RVM8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XCIjXCI+UlU8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XCIjXCI+RkE8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxuXG4gICAgICAgIDxiLW5hdi1pdGVtLWRyb3Bkb3duIHJpZ2h0PlxuICAgICAgICAgIDwhLS0gVXNpbmcgJ2J1dHRvbi1jb250ZW50JyBzbG90IC0tPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiYnV0dG9uLWNvbnRlbnRcIj48ZW0+VXNlcjwvZW0+PC90ZW1wbGF0ZT5cbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XCIjXCI+UHJvZmlsZTwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cIiNcIj5TaWduIE91dDwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICA8L2ItbmF2LWl0ZW0tZHJvcGRvd24+XG4gICAgICA8L2ItbmF2YmFyLW5hdj5cbiAgICA8L2ItY29sbGFwc2U+XG4gIDwvYi1uYXZiYXI+XG4gIDxiLWNhcm91c2VsXG4gICAgICBpZD1cImNhcm91c2VsLTFcIlxuICAgICAgdi1tb2RlbD1cInNsaWRlXCJcbiAgICAgIDppbnRlcnZhbD1cIjQwMDBcIlxuICAgICAgY29udHJvbHNcbiAgICAgIGluZGljYXRvcnNcbiAgICAgIGJhY2tncm91bmQ9XCIjYWJhYmFiXCJcbiAgICAgIGltZy13aWR0aD1cIjEwMjRcIlxuICAgICAgaW1nLWhlaWdodD1cIjQ4MFwiXG4gICAgICBzdHlsZT1cInRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMzMzO1wiXG4gICAgICBAc2xpZGluZy1zdGFydD1cIm9uU2xpZGVTdGFydFwiXG4gICAgICBAc2xpZGluZy1lbmQ9XCJvblNsaWRlRW5kXCJcbiAgICA+XG4gICAgICA8IS0tIFRleHQgc2xpZGVzIHdpdGggaW1hZ2UgLS0+XG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxuICAgICAgICBjYXB0aW9uPVwiRmlyc3Qgc2xpZGVcIlxuICAgICAgICB0ZXh0PVwiTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLlwiXG4gICAgICAgIGltZy1zcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTUyXCJcbiAgICAgID5cbiAgICAgICAgPGgxPkdyZWVuZGVjaXNpb25zIHdlYnNpdGU8L2gxPlxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxuXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGN1c3RvbSB0ZXh0IC0tPlxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGUgaW1nLXNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcIj5cbiAgICAgICAgPGgxPkhlbGxvIHdvcmxkITwvaDE+XG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG5cbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1hZ2Ugb25seSAtLT5cbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU4XCI+PC9iLWNhcm91c2VsLXNsaWRlPlxuXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGltZyBzbG90IC0tPlxuICAgICAgPCEtLSBOb3RlIHRoZSBjbGFzc2VzIC5kLWJsb2NrIGFuZCAuaW1nLWZsdWlkIHRvIHByZXZlbnQgYnJvd3NlciBkZWZhdWx0IGltYWdlIGFsaWdubWVudCAtLT5cbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc2xvdD1cImltZ1wiXG4gICAgICAgICAgY2xhc3M9XCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDI0XCJcbiAgICAgICAgICBoZWlnaHQ9XCI0ODBcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTVcIlxuICAgICAgICAgIGFsdD1cImltYWdlIHNsb3RcIlxuICAgICAgICA+XG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG5cbiAgICAgIDwhLS0gU2xpZGUgd2l0aCBibGFuayBmbHVpZCBpbWFnZSB0byBtYWludGFpbiBzbGlkZSBhc3BlY3QgcmF0aW8gLS0+XG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBjYXB0aW9uPVwiQmxhbmsgSW1hZ2VcIiBpbWctYmxhbmsgaW1nLWFsdD1cIkJsYW5rIGltYWdlXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGVyb3MgZmVsaXMsIHRpbmNpZHVudFxuICAgICAgICAgIGEgdGluY2lkdW50IGVnZXQsIGNvbnZhbGxpcyB2ZWwgZXN0LiBVdCBwZWxsZW50ZXNxdWUgdXQgbGFjdXMgdmVsIGludGVyZHVtLlxuICAgICAgICA8L3A+XG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG4gICAgPC9iLWNhcm91c2VsPlxuICA8L2hlYWRlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWw6ICcuYm94JyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICAgaGFuZGxlU2Nyb2xsOiBmdW5jdGlvbiAoZXZ0LCBlbCkge1xuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgJ29wYWNpdHk6IDA7ICdcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID4gMTAwXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG5oZWFkZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xufVxuLmJnLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmItbmF2LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xufVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})