webpackHotUpdate(0,{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nheader[data-v-9a9f6144] {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.box[data-v-9a9f6144] {\\n    background-color: transparent;\\n}\\nb-nav-item[data-v-9a9f6144]:hover {\\n  background: lightgreen;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/components/src/components/TheHeader.vue\"],\"names\":[],\"mappings\":\";AAsHA;EACA,cAAA;EACA,uBAAA;CACA;AACA;IACA,8BAAA;CACA;AACA;EACA,uBAAA;CACA\",\"file\":\"TheHeader.vue\",\"sourcesContent\":[\"<template>\\n  <header>\\n   <b-navbar fixed=\\\"top\\\" class=\\\"box\\\" v-scroll=\\\"handleScroll\\\" toggleable=\\\"lg\\\" variant=\\\"info\\\">\\n    <b-navbar-brand href=\\\"#\\\">GREEN DECISIONS</b-navbar-brand>\\n\\n    <b-navbar-toggle target=\\\"nav-collapse\\\"></b-navbar-toggle>\\n\\n    <b-collapse id=\\\"nav-collapse\\\" is-nav>\\n      <b-navbar-nav>\\n        <b-nav-item href=\\\"#\\\">Link</b-nav-item>\\n        <b-nav-item href=\\\"#\\\" disabled>Disabled</b-nav-item>\\n      </b-navbar-nav>\\n\\n      <!-- Right aligned nav items -->\\n      <b-navbar-nav class=\\\"ml-auto\\\">\\n        <b-nav-form>\\n          <b-form-input size=\\\"sm\\\" class=\\\"mr-sm-2\\\" placeholder=\\\"Search\\\"></b-form-input>\\n          <b-button size=\\\"sm\\\" class=\\\"my-2 my-sm-0\\\" type=\\\"submit\\\">Search</b-button>\\n        </b-nav-form>\\n\\n        <b-nav-item-dropdown text=\\\"Lang\\\" right>\\n          <b-dropdown-item href=\\\"#\\\">EN</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">ES</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">RU</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">FA</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n\\n        <b-nav-item-dropdown right>\\n          <!-- Using 'button-content' slot -->\\n          <template slot=\\\"button-content\\\"><em>User</em></template>\\n          <b-dropdown-item href=\\\"#\\\">Profile</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">Sign Out</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n      </b-navbar-nav>\\n    </b-collapse>\\n  </b-navbar>\\n  <b-carousel\\n      id=\\\"carousel-1\\\"\\n      v-model=\\\"slide\\\"\\n      :interval=\\\"4000\\\"\\n      controls\\n      indicators\\n      background=\\\"#ababab\\\"\\n      img-width=\\\"1024\\\"\\n      img-height=\\\"480\\\"\\n      style=\\\"text-shadow: 1px 1px 2px #333;\\\"\\n      @sliding-start=\\\"onSlideStart\\\"\\n      @sliding-end=\\\"onSlideEnd\\\"\\n    >\\n      <!-- Text slides with image -->\\n      <b-carousel-slide\\n        caption=\\\"First slide\\\"\\n        text=\\\"Nulla vitae elit libero, a pharetra augue mollis interdum.\\\"\\n        img-src=\\\"https://picsum.photos/1024/480/?image=52\\\"\\n      >\\n        <h1>Greendecisions website</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with custom text -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=54\\\">\\n        <h1>Hello world!</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with image only -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=58\\\"></b-carousel-slide>\\n\\n      <!-- Slides with img slot -->\\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\\n      <b-carousel-slide>\\n        <img\\n          slot=\\\"img\\\"\\n          class=\\\"d-block img-fluid w-100\\\"\\n          width=\\\"1024\\\"\\n          height=\\\"480\\\"\\n          src=\\\"https://picsum.photos/1024/480/?image=55\\\"\\n          alt=\\\"image slot\\\"\\n        >\\n      </b-carousel-slide>\\n\\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\\n      <b-carousel-slide caption=\\\"Blank Image\\\" img-blank img-alt=\\\"Blank image\\\">\\n        <p>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n        </p>\\n      </b-carousel-slide>\\n    </b-carousel>\\n  </header>\\n</template>\\n\\n<script>\\n\\nexport default {\\n  el: '.box',\\n  data () {\\n    return {\\n\\n    }\\n  },\\n  methods: {\\n      handleScroll: function (evt, el) {\\n        if (window.scrollY > 400) {\\n          el.setAttribute(\\n            'style',\\n            'opacity: 0; '\\n          )\\n        }\\n        else {\\n           el.setAttribute(\\n            'style',\\n            'opacity: 1; '\\n          )\\n        }\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\nheader {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.box {\\n    background-color: transparent;\\n}\\nb-nav-item:hover {\\n  background: lightgreen;\\n}\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlP2NjODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixrQkFBa0IsMkJBQTJCLEdBQUcseUJBQXlCLG9DQUFvQyxHQUFHLHFDQUFxQywyQkFBMkIsR0FBRyxZQUFZLCtJQUErSSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxpdkRBQWl2RCx3bERBQXdsRCw0QkFBNEIsY0FBYyxTQUFTLEtBQUssZUFBZSwwQ0FBMEMscUNBQXFDLDRFQUE0RSwwQkFBMEIsZ0JBQWdCLDZFQUE2RSwwQkFBMEIsT0FBTyxLQUFLLEdBQUcscUNBQXFDLGtCQUFrQiwyQkFBMkIsR0FBRyxRQUFRLG9DQUFvQyxHQUFHLG9CQUFvQiwyQkFBMkIsR0FBRyxpQ0FBaUM7O0FBRTEySSIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5oZWFkZXJbZGF0YS12LTlhOWY2MTQ0XSB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuLmJveFtkYXRhLXYtOWE5ZjYxNDRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbmItbmF2LWl0ZW1bZGF0YS12LTlhOWY2MTQ0XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc3VuaWwvRGVza3RvcC9nb3Z1ZS9nb3Z1ZS9iYWNrZW5kL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNIQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtDQUNBO0FBQ0E7SUFDQSw4QkFBQTtDQUNBO0FBQ0E7RUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJUaGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxoZWFkZXI+XFxuICAgPGItbmF2YmFyIGZpeGVkPVxcXCJ0b3BcXFwiIGNsYXNzPVxcXCJib3hcXFwiIHYtc2Nyb2xsPVxcXCJoYW5kbGVTY3JvbGxcXFwiIHRvZ2dsZWFibGU9XFxcImxnXFxcIiB2YXJpYW50PVxcXCJpbmZvXFxcIj5cXG4gICAgPGItbmF2YmFyLWJyYW5kIGhyZWY9XFxcIiNcXFwiPkdSRUVOIERFQ0lTSU9OUzwvYi1uYXZiYXItYnJhbmQ+XFxuXFxuICAgIDxiLW5hdmJhci10b2dnbGUgdGFyZ2V0PVxcXCJuYXYtY29sbGFwc2VcXFwiPjwvYi1uYXZiYXItdG9nZ2xlPlxcblxcbiAgICA8Yi1jb2xsYXBzZSBpZD1cXFwibmF2LWNvbGxhcHNlXFxcIiBpcy1uYXY+XFxuICAgICAgPGItbmF2YmFyLW5hdj5cXG4gICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XFxcIiNcXFwiPkxpbms8L2ItbmF2LWl0ZW0+XFxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVxcXCIjXFxcIiBkaXNhYmxlZD5EaXNhYmxlZDwvYi1uYXYtaXRlbT5cXG4gICAgICA8L2ItbmF2YmFyLW5hdj5cXG5cXG4gICAgICA8IS0tIFJpZ2h0IGFsaWduZWQgbmF2IGl0ZW1zIC0tPlxcbiAgICAgIDxiLW5hdmJhci1uYXYgY2xhc3M9XFxcIm1sLWF1dG9cXFwiPlxcbiAgICAgICAgPGItbmF2LWZvcm0+XFxuICAgICAgICAgIDxiLWZvcm0taW5wdXQgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJtci1zbS0yXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgPGItYnV0dG9uIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXktMiBteS1zbS0wXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlNlYXJjaDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItbmF2LWZvcm0+XFxuXFxuICAgICAgICA8Yi1uYXYtaXRlbS1kcm9wZG93biB0ZXh0PVxcXCJMYW5nXFxcIiByaWdodD5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5FTjwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPkVTPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+UlU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5GQTwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcblxcbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gcmlnaHQ+XFxuICAgICAgICAgIDwhLS0gVXNpbmcgJ2J1dHRvbi1jb250ZW50JyBzbG90IC0tPlxcbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYnV0dG9uLWNvbnRlbnRcXFwiPjxlbT5Vc2VyPC9lbT48L3RlbXBsYXRlPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPlByb2ZpbGU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5TaWduIE91dDwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcbiAgICAgIDwvYi1uYXZiYXItbmF2PlxcbiAgICA8L2ItY29sbGFwc2U+XFxuICA8L2ItbmF2YmFyPlxcbiAgPGItY2Fyb3VzZWxcXG4gICAgICBpZD1cXFwiY2Fyb3VzZWwtMVxcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJzbGlkZVxcXCJcXG4gICAgICA6aW50ZXJ2YWw9XFxcIjQwMDBcXFwiXFxuICAgICAgY29udHJvbHNcXG4gICAgICBpbmRpY2F0b3JzXFxuICAgICAgYmFja2dyb3VuZD1cXFwiI2FiYWJhYlxcXCJcXG4gICAgICBpbWctd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgaW1nLWhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzMzMztcXFwiXFxuICAgICAgQHNsaWRpbmctc3RhcnQ9XFxcIm9uU2xpZGVTdGFydFxcXCJcXG4gICAgICBAc2xpZGluZy1lbmQ9XFxcIm9uU2xpZGVFbmRcXFwiXFxuICAgID5cXG4gICAgICA8IS0tIFRleHQgc2xpZGVzIHdpdGggaW1hZ2UgLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcXG4gICAgICAgIGNhcHRpb249XFxcIkZpcnN0IHNsaWRlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLlxcXCJcXG4gICAgICAgIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTJcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGgxPkdyZWVuZGVjaXNpb25zIHdlYnNpdGU8L2gxPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG5cXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGN1c3RvbSB0ZXh0IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcXFwiPlxcbiAgICAgICAgPGgxPkhlbGxvIHdvcmxkITwvaDE+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1hZ2Ugb25seSAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU4XFxcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBpbWcgc2xvdCAtLT5cXG4gICAgICA8IS0tIE5vdGUgdGhlIGNsYXNzZXMgLmQtYmxvY2sgYW5kIC5pbWctZmx1aWQgdG8gcHJldmVudCBicm93c2VyIGRlZmF1bHQgaW1hZ2UgYWxpZ25tZW50IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlPlxcbiAgICAgICAgPGltZ1xcbiAgICAgICAgICBzbG90PVxcXCJpbWdcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFxcXCJcXG4gICAgICAgICAgd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgICAgIGhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTVcXFwiXFxuICAgICAgICAgIGFsdD1cXFwiaW1hZ2Ugc2xvdFxcXCJcXG4gICAgICAgID5cXG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZSB3aXRoIGJsYW5rIGZsdWlkIGltYWdlIHRvIG1haW50YWluIHNsaWRlIGFzcGVjdCByYXRpbyAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBjYXB0aW9uPVxcXCJCbGFuayBJbWFnZVxcXCIgaW1nLWJsYW5rIGltZy1hbHQ9XFxcIkJsYW5rIGltYWdlXFxcIj5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcXG4gICAgICAgICAgYSB0aW5jaWR1bnQgZWdldCwgY29udmFsbGlzIHZlbCBlc3QuIFV0IHBlbGxlbnRlc3F1ZSB1dCBsYWN1cyB2ZWwgaW50ZXJkdW0uXFxuICAgICAgICA8L3A+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcbiAgICA8L2ItY2Fyb3VzZWw+XFxuICA8L2hlYWRlcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZWw6ICcuYm94JyxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcblxcbiAgICB9XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICAgIGhhbmRsZVNjcm9sbDogZnVuY3Rpb24gKGV2dCwgZWwpIHtcXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDQwMCkge1xcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXFxuICAgICAgICAgICAgJ3N0eWxlJyxcXG4gICAgICAgICAgICAnb3BhY2l0eTogMDsgJ1xcbiAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcXG4gICAgICAgICAgICAnc3R5bGUnLFxcbiAgICAgICAgICAgICdvcGFjaXR5OiAxOyAnXFxuICAgICAgICAgIClcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuLmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5iLW5hdi1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTlhOWY2MTQ0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ })

})