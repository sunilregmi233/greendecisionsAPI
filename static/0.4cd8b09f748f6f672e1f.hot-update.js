webpackHotUpdate(0,{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"header\",\n    [\n      _c(\n        \"b-navbar\",\n        {\n          staticClass: \"fixed-top\",\n          attrs: { fixed: \"top\", toggleable: \"lg\", variant: \"info\" }\n        },\n        [\n          _c(\"b-navbar-brand\", { attrs: { href: \"#\" } }, [\n            _vm._v(\"GREEN DECISIONS\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"b-navbar-toggle\", { attrs: { target: \"nav-collapse\" } }),\n          _vm._v(\" \"),\n          _c(\n            \"b-collapse\",\n            { attrs: { id: \"nav-collapse\", \"is-nav\": \"\" } },\n            [\n              _c(\n                \"b-navbar-nav\",\n                [\n                  _c(\"b-nav-item\", { attrs: { href: \"#\" } }, [_vm._v(\"Link\")]),\n                  _vm._v(\" \"),\n                  _c(\"b-nav-item\", { attrs: { href: \"#\", disabled: \"\" } }, [\n                    _vm._v(\"Disabled\")\n                  ])\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"b-navbar-nav\",\n                { staticClass: \"ml-auto\" },\n                [\n                  _c(\n                    \"b-nav-form\",\n                    [\n                      _c(\"b-form-input\", {\n                        staticClass: \"mr-sm-2\",\n                        attrs: { size: \"sm\", placeholder: \"Search\" }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\n                        \"b-button\",\n                        {\n                          staticClass: \"my-2 my-sm-0\",\n                          attrs: { size: \"sm\", type: \"submit\" }\n                        },\n                        [_vm._v(\"Search\")]\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { text: \"Lang\", right: \"\" } },\n                    [\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"EN\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"ES\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"RU\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"FA\")\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { right: \"\" } },\n                    [\n                      _c(\"template\", { slot: \"button-content\" }, [\n                        _c(\"em\", [_vm._v(\"User\")])\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Profile\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Sign Out\")\n                      ])\n                    ],\n                    2\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"b-carousel\",\n        {\n          staticStyle: { \"text-shadow\": \"1px 1px 2px #333\" },\n          attrs: {\n            id: \"carousel-1\",\n            interval: 4000,\n            controls: \"\",\n            indicators: \"\",\n            background: \"#ababab\",\n            \"img-width\": \"1024\",\n            \"img-height\": \"480\"\n          },\n          on: {\n            \"sliding-start\": _vm.onSlideStart,\n            \"sliding-end\": _vm.onSlideEnd\n          },\n          model: {\n            value: _vm.slide,\n            callback: function($$v) {\n              _vm.slide = $$v\n            },\n            expression: \"slide\"\n          }\n        },\n        [\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: {\n                caption: \"First slide\",\n                text:\n                  \"Nulla vitae elit libero, a pharetra augue mollis interdum.\",\n                \"img-src\": \"https://picsum.photos/1024/480/?image=52\"\n              }\n            },\n            [_c(\"h1\", [_vm._v(\"Greendecisions website\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=54\" }\n            },\n            [_c(\"h1\", [_vm._v(\"Hello world!\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", {\n            attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=58\" }\n          }),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", [\n            _c(\"img\", {\n              staticClass: \"d-block img-fluid w-100\",\n              attrs: {\n                slot: \"img\",\n                width: \"1024\",\n                height: \"480\",\n                src: \"https://picsum.photos/1024/480/?image=55\",\n                alt: \"image slot\"\n              },\n              slot: \"img\"\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: {\n                caption: \"Blank Image\",\n                \"img-blank\": \"\",\n                \"img-alt\": \"Blank image\"\n              }\n            },\n            [\n              _c(\"p\", [\n                _vm._v(\n                  \"\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n      \"\n                )\n              ])\n            ]\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(24)      .rerender(\"data-v-9a9f6144\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlPzRlNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQSxnQ0FBZ0MsU0FBUyxZQUFZLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMseUJBQXlCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLG1DQUFtQyxFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsWUFBWSxFQUFFO0FBQzNEO0FBQ0Esb0NBQW9DLFNBQVMsMEJBQTBCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsMEJBQTBCLEVBQUU7QUFDMUQ7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLFlBQVksRUFBRTtBQUM1QztBQUNBLHNDQUFzQyx5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0NBQW9DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQSxJQUFJLG1CQUFPLENBQUMsRUFBb0I7QUFDaEM7QUFDQSIsImZpbGUiOiIyNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaGVhZGVyXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYi1uYXZiYXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpeGVkLXRvcFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZpeGVkOiBcInRvcFwiLCB0b2dnbGVhYmxlOiBcImxnXCIsIHZhcmlhbnQ6IFwiaW5mb1wiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1uYXZiYXItYnJhbmRcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkdSRUVOIERFQ0lTSU9OU1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLW5hdmJhci10b2dnbGVcIiwgeyBhdHRyczogeyB0YXJnZXQ6IFwibmF2LWNvbGxhcHNlXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbGxhcHNlXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcIm5hdi1jb2xsYXBzZVwiLCBcImlzLW5hdlwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtfdm0uX3YoXCJMaW5rXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIsIGRpc2FibGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLXNtLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwic21cIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm15LTIgbXktc20tMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcInNtXCIsIHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWFyY2hcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW0tZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0ZXh0OiBcIkxhbmdcIiwgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVOXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRVNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSVVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZBXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwiYnV0dG9uLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9maWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2lnbiBPdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItY2Fyb3VzZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1zaGFkb3dcIjogXCIxcHggMXB4IDJweCAjMzMzXCIgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiY2Fyb3VzZWwtMVwiLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDQwMDAsXG4gICAgICAgICAgICBjb250cm9sczogXCJcIixcbiAgICAgICAgICAgIGluZGljYXRvcnM6IFwiXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNhYmFiYWJcIixcbiAgICAgICAgICAgIFwiaW1nLXdpZHRoXCI6IFwiMTAyNFwiLFxuICAgICAgICAgICAgXCJpbWctaGVpZ2h0XCI6IFwiNDgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInNsaWRpbmctc3RhcnRcIjogX3ZtLm9uU2xpZGVTdGFydCxcbiAgICAgICAgICAgIFwic2xpZGluZy1lbmRcIjogX3ZtLm9uU2xpZGVFbmRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNsaWRlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2xpZGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNsaWRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jYXJvdXNlbC1zbGlkZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNhcHRpb246IFwiRmlyc3Qgc2xpZGVcIixcbiAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgXCJOdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01MlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJoMVwiLCBbX3ZtLl92KFwiR3JlZW5kZWNpc2lvbnMgd2Vic2l0ZVwiKV0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jYXJvdXNlbC1zbGlkZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImltZy1zcmNcIjogXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU0XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImgxXCIsIFtfdm0uX3YoXCJIZWxsbyB3b3JsZCFcIildKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW1nLXNyY1wiOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NThcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW1nXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAyNFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0ODBcIixcbiAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01NVwiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJpbWFnZSBzbG90XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJpbWdcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCJCbGFuayBJbWFnZVwiLFxuICAgICAgICAgICAgICAgIFwiaW1nLWJsYW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctYWx0XCI6IFwiQmxhbmsgaW1hZ2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcXG4gICAgICAgIGEgdGluY2lkdW50IGVnZXQsIGNvbnZhbGxpcyB2ZWwgZXN0LiBVdCBwZWxsZW50ZXNxdWUgdXQgbGFjdXMgdmVsIGludGVyZHVtLlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi05YTlmNjE0NFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTlhOWY2MTQ0XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///264\n");

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nheader[data-v-9a9f6144] {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info[data-v-9a9f6144] {\\n    background-color:transparent !important;\\n}\\nb-nav-item[data-v-9a9f6144]:hover {\\n  background: lightgreen;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/components/src/components/TheHeader.vue\"],\"names\":[],\"mappings\":\";AAkHA;EACA,cAAA;EACA,uBAAA;CACA;AACA;IACA,wCAAA;CACA;AACA;EACA,uBAAA;CACA\",\"file\":\"TheHeader.vue\",\"sourcesContent\":[\"<template>\\n  <header>\\n   <b-navbar fixed=\\\"top\\\" class=\\\"fixed-top\\\" toggleable=\\\"lg\\\" variant=\\\"info\\\">\\n    <b-navbar-brand href=\\\"#\\\">GREEN DECISIONS</b-navbar-brand>\\n\\n    <b-navbar-toggle target=\\\"nav-collapse\\\"></b-navbar-toggle>\\n\\n    <b-collapse id=\\\"nav-collapse\\\" is-nav>\\n      <b-navbar-nav>\\n        <b-nav-item href=\\\"#\\\">Link</b-nav-item>\\n        <b-nav-item href=\\\"#\\\" disabled>Disabled</b-nav-item>\\n      </b-navbar-nav>\\n\\n      <!-- Right aligned nav items -->\\n      <b-navbar-nav class=\\\"ml-auto\\\">\\n        <b-nav-form>\\n          <b-form-input size=\\\"sm\\\" class=\\\"mr-sm-2\\\" placeholder=\\\"Search\\\"></b-form-input>\\n          <b-button size=\\\"sm\\\" class=\\\"my-2 my-sm-0\\\" type=\\\"submit\\\">Search</b-button>\\n        </b-nav-form>\\n\\n        <b-nav-item-dropdown text=\\\"Lang\\\" right>\\n          <b-dropdown-item href=\\\"#\\\">EN</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">ES</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">RU</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">FA</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n\\n        <b-nav-item-dropdown right>\\n          <!-- Using 'button-content' slot -->\\n          <template slot=\\\"button-content\\\"><em>User</em></template>\\n          <b-dropdown-item href=\\\"#\\\">Profile</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">Sign Out</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n      </b-navbar-nav>\\n    </b-collapse>\\n  </b-navbar>\\n  <b-carousel\\n      id=\\\"carousel-1\\\"\\n      v-model=\\\"slide\\\"\\n      :interval=\\\"4000\\\"\\n      controls\\n      indicators\\n      background=\\\"#ababab\\\"\\n      img-width=\\\"1024\\\"\\n      img-height=\\\"480\\\"\\n      style=\\\"text-shadow: 1px 1px 2px #333;\\\"\\n      @sliding-start=\\\"onSlideStart\\\"\\n      @sliding-end=\\\"onSlideEnd\\\"\\n    >\\n      <!-- Text slides with image -->\\n      <b-carousel-slide\\n        caption=\\\"First slide\\\"\\n        text=\\\"Nulla vitae elit libero, a pharetra augue mollis interdum.\\\"\\n        img-src=\\\"https://picsum.photos/1024/480/?image=52\\\"\\n      >\\n        <h1>Greendecisions website</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with custom text -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=54\\\">\\n        <h1>Hello world!</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with image only -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=58\\\"></b-carousel-slide>\\n\\n      <!-- Slides with img slot -->\\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\\n      <b-carousel-slide>\\n        <img\\n          slot=\\\"img\\\"\\n          class=\\\"d-block img-fluid w-100\\\"\\n          width=\\\"1024\\\"\\n          height=\\\"480\\\"\\n          src=\\\"https://picsum.photos/1024/480/?image=55\\\"\\n          alt=\\\"image slot\\\"\\n        >\\n      </b-carousel-slide>\\n\\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\\n      <b-carousel-slide caption=\\\"Blank Image\\\" img-blank img-alt=\\\"Blank image\\\">\\n        <p>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n        </p>\\n      </b-carousel-slide>\\n    </b-carousel>\\n  </header>\\n</template>\\n\\n<script>\\n\\nexport default {\\n  data () {\\n    return {\\n\\n    }\\n  },\\n  methods: {\\n    onScroll() {\\n       $(window).scroll(function(){\\n        var scroll = $(window).scrollTop();\\n        if(scroll < 300){\\n            $('.fixed-top').css('background', 'transparent');\\n        } else{\\n            $('.fixed-top').css('background', 'rgba(23, 162, 184, 0.9)');\\n        }\\n    });\\n\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\nheader {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info {\\n    background-color:transparent !important;\\n}\\nb-nav-item:hover {\\n  background: lightgreen;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlP2NjODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixrQkFBa0IsMkJBQTJCLEdBQUcsNkJBQTZCLDhDQUE4QyxHQUFHLHFDQUFxQywyQkFBMkIsR0FBRyxVQUFVLCtJQUErSSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyw2dERBQTZ0RCx3bERBQXdsRCxhQUFhLGNBQWMsU0FBUyxLQUFLLGVBQWUsa0JBQWtCLHFDQUFxQyw2Q0FBNkMsMkJBQTJCLCtEQUErRCxXQUFXLE1BQU0sMkVBQTJFLFdBQVcsT0FBTyxFQUFFLFNBQVMsS0FBSyxHQUFHLHFDQUFxQyxrQkFBa0IsMkJBQTJCLEdBQUcsWUFBWSw4Q0FBOEMsR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcsK0JBQStCOztBQUVuMkkiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaGVhZGVyW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5iZy1pbmZvW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbmItbmF2LWl0ZW1bZGF0YS12LTlhOWY2MTQ0XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc3VuaWwvRGVza3RvcC9nb3Z1ZS9nb3Z1ZS9iYWNrZW5kL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWtIQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtDQUNBO0FBQ0E7SUFDQSx3Q0FBQTtDQUNBO0FBQ0E7RUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJUaGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxoZWFkZXI+XFxuICAgPGItbmF2YmFyIGZpeGVkPVxcXCJ0b3BcXFwiIGNsYXNzPVxcXCJmaXhlZC10b3BcXFwiIHRvZ2dsZWFibGU9XFxcImxnXFxcIiB2YXJpYW50PVxcXCJpbmZvXFxcIj5cXG4gICAgPGItbmF2YmFyLWJyYW5kIGhyZWY9XFxcIiNcXFwiPkdSRUVOIERFQ0lTSU9OUzwvYi1uYXZiYXItYnJhbmQ+XFxuXFxuICAgIDxiLW5hdmJhci10b2dnbGUgdGFyZ2V0PVxcXCJuYXYtY29sbGFwc2VcXFwiPjwvYi1uYXZiYXItdG9nZ2xlPlxcblxcbiAgICA8Yi1jb2xsYXBzZSBpZD1cXFwibmF2LWNvbGxhcHNlXFxcIiBpcy1uYXY+XFxuICAgICAgPGItbmF2YmFyLW5hdj5cXG4gICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XFxcIiNcXFwiPkxpbms8L2ItbmF2LWl0ZW0+XFxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVxcXCIjXFxcIiBkaXNhYmxlZD5EaXNhYmxlZDwvYi1uYXYtaXRlbT5cXG4gICAgICA8L2ItbmF2YmFyLW5hdj5cXG5cXG4gICAgICA8IS0tIFJpZ2h0IGFsaWduZWQgbmF2IGl0ZW1zIC0tPlxcbiAgICAgIDxiLW5hdmJhci1uYXYgY2xhc3M9XFxcIm1sLWF1dG9cXFwiPlxcbiAgICAgICAgPGItbmF2LWZvcm0+XFxuICAgICAgICAgIDxiLWZvcm0taW5wdXQgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJtci1zbS0yXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgPGItYnV0dG9uIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXktMiBteS1zbS0wXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlNlYXJjaDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItbmF2LWZvcm0+XFxuXFxuICAgICAgICA8Yi1uYXYtaXRlbS1kcm9wZG93biB0ZXh0PVxcXCJMYW5nXFxcIiByaWdodD5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5FTjwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPkVTPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+UlU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5GQTwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcblxcbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gcmlnaHQ+XFxuICAgICAgICAgIDwhLS0gVXNpbmcgJ2J1dHRvbi1jb250ZW50JyBzbG90IC0tPlxcbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYnV0dG9uLWNvbnRlbnRcXFwiPjxlbT5Vc2VyPC9lbT48L3RlbXBsYXRlPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPlByb2ZpbGU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5TaWduIE91dDwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcbiAgICAgIDwvYi1uYXZiYXItbmF2PlxcbiAgICA8L2ItY29sbGFwc2U+XFxuICA8L2ItbmF2YmFyPlxcbiAgPGItY2Fyb3VzZWxcXG4gICAgICBpZD1cXFwiY2Fyb3VzZWwtMVxcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJzbGlkZVxcXCJcXG4gICAgICA6aW50ZXJ2YWw9XFxcIjQwMDBcXFwiXFxuICAgICAgY29udHJvbHNcXG4gICAgICBpbmRpY2F0b3JzXFxuICAgICAgYmFja2dyb3VuZD1cXFwiI2FiYWJhYlxcXCJcXG4gICAgICBpbWctd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgaW1nLWhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzMzMztcXFwiXFxuICAgICAgQHNsaWRpbmctc3RhcnQ9XFxcIm9uU2xpZGVTdGFydFxcXCJcXG4gICAgICBAc2xpZGluZy1lbmQ9XFxcIm9uU2xpZGVFbmRcXFwiXFxuICAgID5cXG4gICAgICA8IS0tIFRleHQgc2xpZGVzIHdpdGggaW1hZ2UgLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcXG4gICAgICAgIGNhcHRpb249XFxcIkZpcnN0IHNsaWRlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLlxcXCJcXG4gICAgICAgIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTJcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGgxPkdyZWVuZGVjaXNpb25zIHdlYnNpdGU8L2gxPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG5cXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGN1c3RvbSB0ZXh0IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcXFwiPlxcbiAgICAgICAgPGgxPkhlbGxvIHdvcmxkITwvaDE+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1hZ2Ugb25seSAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU4XFxcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBpbWcgc2xvdCAtLT5cXG4gICAgICA8IS0tIE5vdGUgdGhlIGNsYXNzZXMgLmQtYmxvY2sgYW5kIC5pbWctZmx1aWQgdG8gcHJldmVudCBicm93c2VyIGRlZmF1bHQgaW1hZ2UgYWxpZ25tZW50IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlPlxcbiAgICAgICAgPGltZ1xcbiAgICAgICAgICBzbG90PVxcXCJpbWdcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFxcXCJcXG4gICAgICAgICAgd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgICAgIGhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTVcXFwiXFxuICAgICAgICAgIGFsdD1cXFwiaW1hZ2Ugc2xvdFxcXCJcXG4gICAgICAgID5cXG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZSB3aXRoIGJsYW5rIGZsdWlkIGltYWdlIHRvIG1haW50YWluIHNsaWRlIGFzcGVjdCByYXRpbyAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBjYXB0aW9uPVxcXCJCbGFuayBJbWFnZVxcXCIgaW1nLWJsYW5rIGltZy1hbHQ9XFxcIkJsYW5rIGltYWdlXFxcIj5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcXG4gICAgICAgICAgYSB0aW5jaWR1bnQgZWdldCwgY29udmFsbGlzIHZlbCBlc3QuIFV0IHBlbGxlbnRlc3F1ZSB1dCBsYWN1cyB2ZWwgaW50ZXJkdW0uXFxuICAgICAgICA8L3A+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcbiAgICA8L2ItY2Fyb3VzZWw+XFxuICA8L2hlYWRlcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuXFxuICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIG9uU2Nyb2xsKCkge1xcbiAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XFxuICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xcbiAgICAgICAgaWYoc2Nyb2xsIDwgMzAwKXtcXG4gICAgICAgICAgICAkKCcuZml4ZWQtdG9wJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3RyYW5zcGFyZW50Jyk7XFxuICAgICAgICB9IGVsc2V7XFxuICAgICAgICAgICAgJCgnLmZpeGVkLXRvcCcpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIzLCAxNjIsIDE4NCwgMC45KScpO1xcbiAgICAgICAgfVxcbiAgICB9KTtcXG5cXG4gICAgfVxcbiAgfVxcbn1cXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuLmJnLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbmItbmF2LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOWE5ZjYxNDRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///52\n");

/***/ })

})