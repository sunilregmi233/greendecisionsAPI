webpackHotUpdate(0,{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"header\",\n    [\n      _c(\n        \"b-navbar\",\n        {\n          class: _vm.fixed - _vm.top,\n          attrs: { fixed: \"top\", toggleable: \"lg\", variant: \"info\" }\n        },\n        [\n          _c(\"b-navbar-brand\", { attrs: { href: \"#\" } }, [\n            _vm._v(\"GREEN DECISIONS\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"b-navbar-toggle\", { attrs: { target: \"nav-collapse\" } }),\n          _vm._v(\" \"),\n          _c(\n            \"b-collapse\",\n            { attrs: { id: \"nav-collapse\", \"is-nav\": \"\" } },\n            [\n              _c(\n                \"b-navbar-nav\",\n                [\n                  _c(\"b-nav-item\", { attrs: { href: \"#\" } }, [_vm._v(\"Link\")]),\n                  _vm._v(\" \"),\n                  _c(\"b-nav-item\", { attrs: { href: \"#\", disabled: \"\" } }, [\n                    _vm._v(\"Disabled\")\n                  ])\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"b-navbar-nav\",\n                { staticClass: \"ml-auto\" },\n                [\n                  _c(\n                    \"b-nav-form\",\n                    [\n                      _c(\"b-form-input\", {\n                        staticClass: \"mr-sm-2\",\n                        attrs: { size: \"sm\", placeholder: \"Search\" }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\n                        \"b-button\",\n                        {\n                          staticClass: \"my-2 my-sm-0\",\n                          attrs: { size: \"sm\", type: \"submit\" }\n                        },\n                        [_vm._v(\"Search\")]\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { text: \"Lang\", right: \"\" } },\n                    [\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"EN\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"ES\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"RU\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"FA\")\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { right: \"\" } },\n                    [\n                      _c(\"template\", { slot: \"button-content\" }, [\n                        _c(\"em\", [_vm._v(\"User\")])\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Profile\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Sign Out\")\n                      ])\n                    ],\n                    2\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"b-carousel\",\n        {\n          staticStyle: { \"text-shadow\": \"1px 1px 2px #333\" },\n          attrs: {\n            id: \"carousel-1\",\n            interval: 4000,\n            controls: \"\",\n            indicators: \"\",\n            background: \"#ababab\",\n            \"img-width\": \"1024\",\n            \"img-height\": \"480\"\n          },\n          on: {\n            \"sliding-start\": _vm.onSlideStart,\n            \"sliding-end\": _vm.onSlideEnd\n          },\n          model: {\n            value: _vm.slide,\n            callback: function($$v) {\n              _vm.slide = $$v\n            },\n            expression: \"slide\"\n          }\n        },\n        [\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: {\n                caption: \"First slide\",\n                text:\n                  \"Nulla vitae elit libero, a pharetra augue mollis interdum.\",\n                \"img-src\": \"https://picsum.photos/1024/480/?image=52\"\n              }\n            },\n            [_c(\"h1\", [_vm._v(\"Greendecisions website\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=54\" }\n            },\n            [_c(\"h1\", [_vm._v(\"Hello world!\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", {\n            attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=58\" }\n          }),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", [\n            _c(\"img\", {\n              staticClass: \"d-block img-fluid w-100\",\n              attrs: {\n                slot: \"img\",\n                width: \"1024\",\n                height: \"480\",\n                src: \"https://picsum.photos/1024/480/?image=55\",\n                alt: \"image slot\"\n              },\n              slot: \"img\"\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: {\n                caption: \"Blank Image\",\n                \"img-blank\": \"\",\n                \"img-alt\": \"Blank image\"\n              }\n            },\n            [\n              _c(\"p\", [\n                _vm._v(\n                  \"\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n      \"\n                )\n              ])\n            ]\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(24)      .rerender(\"data-v-9a9f6144\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlPzRlNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQSxnQ0FBZ0MsU0FBUyxZQUFZLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMseUJBQXlCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLG1DQUFtQyxFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsWUFBWSxFQUFFO0FBQzNEO0FBQ0Esb0NBQW9DLFNBQVMsMEJBQTBCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsMEJBQTBCLEVBQUU7QUFDMUQ7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLFlBQVksRUFBRTtBQUM1QztBQUNBLHNDQUFzQyx5QkFBeUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0NBQW9DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNGLGtFQUFTO0FBQ3hCLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQSxJQUFJLG1CQUFPLENBQUMsRUFBb0I7QUFDaEM7QUFDQSIsImZpbGUiOiIyNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaGVhZGVyXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYi1uYXZiYXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBfdm0uZml4ZWQgLSBfdm0udG9wLFxuICAgICAgICAgIGF0dHJzOiB7IGZpeGVkOiBcInRvcFwiLCB0b2dnbGVhYmxlOiBcImxnXCIsIHZhcmlhbnQ6IFwiaW5mb1wiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1uYXZiYXItYnJhbmRcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkdSRUVOIERFQ0lTSU9OU1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLW5hdmJhci10b2dnbGVcIiwgeyBhdHRyczogeyB0YXJnZXQ6IFwibmF2LWNvbGxhcHNlXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbGxhcHNlXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcIm5hdi1jb2xsYXBzZVwiLCBcImlzLW5hdlwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtfdm0uX3YoXCJMaW5rXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIsIGRpc2FibGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLXNtLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwic21cIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm15LTIgbXktc20tMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcInNtXCIsIHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWFyY2hcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW0tZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0ZXh0OiBcIkxhbmdcIiwgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVOXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRVNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSVVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZBXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwiYnV0dG9uLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9maWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2lnbiBPdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItY2Fyb3VzZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1zaGFkb3dcIjogXCIxcHggMXB4IDJweCAjMzMzXCIgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiY2Fyb3VzZWwtMVwiLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDQwMDAsXG4gICAgICAgICAgICBjb250cm9sczogXCJcIixcbiAgICAgICAgICAgIGluZGljYXRvcnM6IFwiXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNhYmFiYWJcIixcbiAgICAgICAgICAgIFwiaW1nLXdpZHRoXCI6IFwiMTAyNFwiLFxuICAgICAgICAgICAgXCJpbWctaGVpZ2h0XCI6IFwiNDgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInNsaWRpbmctc3RhcnRcIjogX3ZtLm9uU2xpZGVTdGFydCxcbiAgICAgICAgICAgIFwic2xpZGluZy1lbmRcIjogX3ZtLm9uU2xpZGVFbmRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNsaWRlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2xpZGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNsaWRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jYXJvdXNlbC1zbGlkZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNhcHRpb246IFwiRmlyc3Qgc2xpZGVcIixcbiAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgXCJOdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01MlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJoMVwiLCBbX3ZtLl92KFwiR3JlZW5kZWNpc2lvbnMgd2Vic2l0ZVwiKV0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jYXJvdXNlbC1zbGlkZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBcImltZy1zcmNcIjogXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU0XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImgxXCIsIFtfdm0uX3YoXCJIZWxsbyB3b3JsZCFcIildKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiaW1nLXNyY1wiOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NThcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNsb3Q6IFwiaW1nXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAyNFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0ODBcIixcbiAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01NVwiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJpbWFnZSBzbG90XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJpbWdcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCJCbGFuayBJbWFnZVwiLFxuICAgICAgICAgICAgICAgIFwiaW1nLWJsYW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctYWx0XCI6IFwiQmxhbmsgaW1hZ2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcXG4gICAgICAgIGEgdGluY2lkdW50IGVnZXQsIGNvbnZhbGxpcyB2ZWwgZXN0LiBVdCBwZWxsZW50ZXNxdWUgdXQgbGFjdXMgdmVsIGludGVyZHVtLlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi05YTlmNjE0NFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTlhOWY2MTQ0XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///264\n");

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nheader[data-v-9a9f6144] {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info[data-v-9a9f6144] {\\n    background-color:transparent !important;\\n}\\nb-nav-item[data-v-9a9f6144]:hover {\\n  background: lightgreen;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/components/src/components/TheHeader.vue\"],\"names\":[],\"mappings\":\";AAkHA;EACA,cAAA;EACA,uBAAA;CACA;AACA;IACA,wCAAA;CACA;AACA;EACA,uBAAA;CACA\",\"file\":\"TheHeader.vue\",\"sourcesContent\":[\"<template>\\n  <header>\\n   <b-navbar fixed=\\\"top\\\" v-bind:class=\\\"fixed-top\\\" toggleable=\\\"lg\\\" variant=\\\"info\\\">\\n    <b-navbar-brand href=\\\"#\\\">GREEN DECISIONS</b-navbar-brand>\\n\\n    <b-navbar-toggle target=\\\"nav-collapse\\\"></b-navbar-toggle>\\n\\n    <b-collapse id=\\\"nav-collapse\\\" is-nav>\\n      <b-navbar-nav>\\n        <b-nav-item href=\\\"#\\\">Link</b-nav-item>\\n        <b-nav-item href=\\\"#\\\" disabled>Disabled</b-nav-item>\\n      </b-navbar-nav>\\n\\n      <!-- Right aligned nav items -->\\n      <b-navbar-nav class=\\\"ml-auto\\\">\\n        <b-nav-form>\\n          <b-form-input size=\\\"sm\\\" class=\\\"mr-sm-2\\\" placeholder=\\\"Search\\\"></b-form-input>\\n          <b-button size=\\\"sm\\\" class=\\\"my-2 my-sm-0\\\" type=\\\"submit\\\">Search</b-button>\\n        </b-nav-form>\\n\\n        <b-nav-item-dropdown text=\\\"Lang\\\" right>\\n          <b-dropdown-item href=\\\"#\\\">EN</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">ES</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">RU</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">FA</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n\\n        <b-nav-item-dropdown right>\\n          <!-- Using 'button-content' slot -->\\n          <template slot=\\\"button-content\\\"><em>User</em></template>\\n          <b-dropdown-item href=\\\"#\\\">Profile</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">Sign Out</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n      </b-navbar-nav>\\n    </b-collapse>\\n  </b-navbar>\\n  <b-carousel\\n      id=\\\"carousel-1\\\"\\n      v-model=\\\"slide\\\"\\n      :interval=\\\"4000\\\"\\n      controls\\n      indicators\\n      background=\\\"#ababab\\\"\\n      img-width=\\\"1024\\\"\\n      img-height=\\\"480\\\"\\n      style=\\\"text-shadow: 1px 1px 2px #333;\\\"\\n      @sliding-start=\\\"onSlideStart\\\"\\n      @sliding-end=\\\"onSlideEnd\\\"\\n    >\\n      <!-- Text slides with image -->\\n      <b-carousel-slide\\n        caption=\\\"First slide\\\"\\n        text=\\\"Nulla vitae elit libero, a pharetra augue mollis interdum.\\\"\\n        img-src=\\\"https://picsum.photos/1024/480/?image=52\\\"\\n      >\\n        <h1>Greendecisions website</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with custom text -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=54\\\">\\n        <h1>Hello world!</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with image only -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=58\\\"></b-carousel-slide>\\n\\n      <!-- Slides with img slot -->\\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\\n      <b-carousel-slide>\\n        <img\\n          slot=\\\"img\\\"\\n          class=\\\"d-block img-fluid w-100\\\"\\n          width=\\\"1024\\\"\\n          height=\\\"480\\\"\\n          src=\\\"https://picsum.photos/1024/480/?image=55\\\"\\n          alt=\\\"image slot\\\"\\n        >\\n      </b-carousel-slide>\\n\\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\\n      <b-carousel-slide caption=\\\"Blank Image\\\" img-blank img-alt=\\\"Blank image\\\">\\n        <p>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n        </p>\\n      </b-carousel-slide>\\n    </b-carousel>\\n  </header>\\n</template>\\n\\n<script>\\n\\nexport default {\\n  data () {\\n    return {\\n\\n    }\\n  },\\n  methods: {\\n    onScroll() {\\n       $(window).scroll(function(){\\n        var scroll = $(window).scrollTop();\\n        if(scroll < 300){\\n            $('.fixed-top').css('background', 'transparent');\\n        } else{\\n            $('.fixed-top').css('background', 'rgba(23, 162, 184, 0.9)');\\n        }\\n    });\\n\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\nheader {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info {\\n    background-color:transparent !important;\\n}\\nb-nav-item:hover {\\n  background: lightgreen;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlP2NjODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixrQkFBa0IsMkJBQTJCLEdBQUcsNkJBQTZCLDhDQUE4QyxHQUFHLHFDQUFxQywyQkFBMkIsR0FBRyxVQUFVLCtJQUErSSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxvdURBQW91RCx3bERBQXdsRCxhQUFhLGNBQWMsU0FBUyxLQUFLLGVBQWUsa0JBQWtCLHFDQUFxQyw2Q0FBNkMsMkJBQTJCLCtEQUErRCxXQUFXLE1BQU0sMkVBQTJFLFdBQVcsT0FBTyxFQUFFLFNBQVMsS0FBSyxHQUFHLHFDQUFxQyxrQkFBa0IsMkJBQTJCLEdBQUcsWUFBWSw4Q0FBOEMsR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcsK0JBQStCOztBQUUxMkkiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaGVhZGVyW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5iZy1pbmZvW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbmItbmF2LWl0ZW1bZGF0YS12LTlhOWY2MTQ0XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc3VuaWwvRGVza3RvcC9nb3Z1ZS9nb3Z1ZS9iYWNrZW5kL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWtIQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtDQUNBO0FBQ0E7SUFDQSx3Q0FBQTtDQUNBO0FBQ0E7RUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJUaGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxoZWFkZXI+XFxuICAgPGItbmF2YmFyIGZpeGVkPVxcXCJ0b3BcXFwiIHYtYmluZDpjbGFzcz1cXFwiZml4ZWQtdG9wXFxcIiB0b2dnbGVhYmxlPVxcXCJsZ1xcXCIgdmFyaWFudD1cXFwiaW5mb1xcXCI+XFxuICAgIDxiLW5hdmJhci1icmFuZCBocmVmPVxcXCIjXFxcIj5HUkVFTiBERUNJU0lPTlM8L2ItbmF2YmFyLWJyYW5kPlxcblxcbiAgICA8Yi1uYXZiYXItdG9nZ2xlIHRhcmdldD1cXFwibmF2LWNvbGxhcHNlXFxcIj48L2ItbmF2YmFyLXRvZ2dsZT5cXG5cXG4gICAgPGItY29sbGFwc2UgaWQ9XFxcIm5hdi1jb2xsYXBzZVxcXCIgaXMtbmF2PlxcbiAgICAgIDxiLW5hdmJhci1uYXY+XFxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVxcXCIjXFxcIj5MaW5rPC9iLW5hdi1pdGVtPlxcbiAgICAgICAgPGItbmF2LWl0ZW0gaHJlZj1cXFwiI1xcXCIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2ItbmF2LWl0ZW0+XFxuICAgICAgPC9iLW5hdmJhci1uYXY+XFxuXFxuICAgICAgPCEtLSBSaWdodCBhbGlnbmVkIG5hdiBpdGVtcyAtLT5cXG4gICAgICA8Yi1uYXZiYXItbmF2IGNsYXNzPVxcXCJtbC1hdXRvXFxcIj5cXG4gICAgICAgIDxiLW5hdi1mb3JtPlxcbiAgICAgICAgICA8Yi1mb3JtLWlucHV0IHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItc20tMlxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaFxcXCI+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcIm15LTIgbXktc20tMFxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5TZWFyY2g8L2ItYnV0dG9uPlxcbiAgICAgICAgPC9iLW5hdi1mb3JtPlxcblxcbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gdGV4dD1cXFwiTGFuZ1xcXCIgcmlnaHQ+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+RU48L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5FUzwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPlJVPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+RkE8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgIDwvYi1uYXYtaXRlbS1kcm9wZG93bj5cXG5cXG4gICAgICAgIDxiLW5hdi1pdGVtLWRyb3Bkb3duIHJpZ2h0PlxcbiAgICAgICAgICA8IS0tIFVzaW5nICdidXR0b24tY29udGVudCcgc2xvdCAtLT5cXG4gICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcImJ1dHRvbi1jb250ZW50XFxcIj48ZW0+VXNlcjwvZW0+PC90ZW1wbGF0ZT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5Qcm9maWxlPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+U2lnbiBPdXQ8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgIDwvYi1uYXYtaXRlbS1kcm9wZG93bj5cXG4gICAgICA8L2ItbmF2YmFyLW5hdj5cXG4gICAgPC9iLWNvbGxhcHNlPlxcbiAgPC9iLW5hdmJhcj5cXG4gIDxiLWNhcm91c2VsXFxuICAgICAgaWQ9XFxcImNhcm91c2VsLTFcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwic2xpZGVcXFwiXFxuICAgICAgOmludGVydmFsPVxcXCI0MDAwXFxcIlxcbiAgICAgIGNvbnRyb2xzXFxuICAgICAgaW5kaWNhdG9yc1xcbiAgICAgIGJhY2tncm91bmQ9XFxcIiNhYmFiYWJcXFwiXFxuICAgICAgaW1nLXdpZHRoPVxcXCIxMDI0XFxcIlxcbiAgICAgIGltZy1oZWlnaHQ9XFxcIjQ4MFxcXCJcXG4gICAgICBzdHlsZT1cXFwidGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMzMzM7XFxcIlxcbiAgICAgIEBzbGlkaW5nLXN0YXJ0PVxcXCJvblNsaWRlU3RhcnRcXFwiXFxuICAgICAgQHNsaWRpbmctZW5kPVxcXCJvblNsaWRlRW5kXFxcIlxcbiAgICA+XFxuICAgICAgPCEtLSBUZXh0IHNsaWRlcyB3aXRoIGltYWdlIC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlXFxuICAgICAgICBjYXB0aW9uPVxcXCJGaXJzdCBzbGlkZVxcXCJcXG4gICAgICAgIHRleHQ9XFxcIk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS5cXFwiXFxuICAgICAgICBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTUyXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxoMT5HcmVlbmRlY2lzaW9ucyB3ZWJzaXRlPC9oMT5cXG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBjdXN0b20gdGV4dCAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU0XFxcIj5cXG4gICAgICAgIDxoMT5IZWxsbyB3b3JsZCE8L2gxPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG5cXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGltYWdlIG9ubHkgLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGUgaW1nLXNyYz1cXFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01OFxcXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1nIHNsb3QgLS0+XFxuICAgICAgPCEtLSBOb3RlIHRoZSBjbGFzc2VzIC5kLWJsb2NrIGFuZCAuaW1nLWZsdWlkIHRvIHByZXZlbnQgYnJvd3NlciBkZWZhdWx0IGltYWdlIGFsaWdubWVudCAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZT5cXG4gICAgICAgIDxpbWdcXG4gICAgICAgICAgc2xvdD1cXFwiaW1nXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwiZC1ibG9jayBpbWctZmx1aWQgdy0xMDBcXFwiXFxuICAgICAgICAgIHdpZHRoPVxcXCIxMDI0XFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjQ4MFxcXCJcXG4gICAgICAgICAgc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU1XFxcIlxcbiAgICAgICAgICBhbHQ9XFxcImltYWdlIHNsb3RcXFwiXFxuICAgICAgICA+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGUgd2l0aCBibGFuayBmbHVpZCBpbWFnZSB0byBtYWludGFpbiBzbGlkZSBhc3BlY3QgcmF0aW8gLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGUgY2FwdGlvbj1cXFwiQmxhbmsgSW1hZ2VcXFwiIGltZy1ibGFuayBpbWctYWx0PVxcXCJCbGFuayBpbWFnZVxcXCI+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU3VzcGVuZGlzc2UgZXJvcyBmZWxpcywgdGluY2lkdW50XFxuICAgICAgICAgIGEgdGluY2lkdW50IGVnZXQsIGNvbnZhbGxpcyB2ZWwgZXN0LiBVdCBwZWxsZW50ZXNxdWUgdXQgbGFjdXMgdmVsIGludGVyZHVtLlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG4gICAgPC9iLWNhcm91c2VsPlxcbiAgPC9oZWFkZXI+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcblxcbiAgICB9XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBvblNjcm9sbCgpIHtcXG4gICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcXG4gICAgICAgIGlmKHNjcm9sbCA8IDMwMCl7XFxuICAgICAgICAgICAgJCgnLmZpeGVkLXRvcCcpLmNzcygnYmFja2dyb3VuZCcsICd0cmFuc3BhcmVudCcpO1xcbiAgICAgICAgfSBlbHNle1xcbiAgICAgICAgICAgICQoJy5maXhlZC10b3AnKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMywgMTYyLCAxODQsIDAuOSknKTtcXG4gICAgICAgIH1cXG4gICAgfSk7XFxuXFxuICAgIH1cXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG5oZWFkZXIge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5iZy1pbmZvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG5iLW5hdi1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTlhOWY2MTQ0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ })

})