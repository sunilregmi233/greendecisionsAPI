webpackHotUpdate(0,{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"header\",\n    [\n      _c(\n        \"b-navbar\",\n        { attrs: { toggleable: \"lg\", type: \"dark\", variant: \"info\" } },\n        [\n          _c(\"b-navbar-brand\", { attrs: { href: \"#\" } }, [\n            _vm._v(\"GREEN DECISIONS\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"b-navbar-toggle\", { attrs: { target: \"nav-collapse\" } }),\n          _vm._v(\" \"),\n          _c(\n            \"b-collapse\",\n            { attrs: { id: \"nav-collapse\", \"is-nav\": \"\" } },\n            [\n              _c(\n                \"b-navbar-nav\",\n                [\n                  _c(\"b-nav-item\", { attrs: { href: \"#\" } }, [_vm._v(\"Link\")]),\n                  _vm._v(\" \"),\n                  _c(\"b-nav-item\", { attrs: { href: \"#\", disabled: \"\" } }, [\n                    _vm._v(\"Disabled\")\n                  ])\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"b-navbar-nav\",\n                { staticClass: \"ml-auto\" },\n                [\n                  _c(\n                    \"b-nav-form\",\n                    [\n                      _c(\"b-form-input\", {\n                        staticClass: \"mr-sm-2\",\n                        attrs: { size: \"sm\", placeholder: \"Search\" }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\n                        \"b-button\",\n                        {\n                          staticClass: \"my-2 my-sm-0\",\n                          attrs: { size: \"sm\", type: \"submit\" }\n                        },\n                        [_vm._v(\"Search\")]\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { text: \"Lang\", right: \"\" } },\n                    [\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"EN\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"ES\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"RU\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"FA\")\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { right: \"\" } },\n                    [\n                      _c(\"template\", { slot: \"button-content\" }, [\n                        _c(\"em\", [_vm._v(\"User\")])\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Profile\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Sign Out\")\n                      ])\n                    ],\n                    2\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"b-carousel\",\n        {\n          staticStyle: { \"text-shadow\": \"1px 1px 2px #333\" },\n          attrs: {\n            id: \"carousel-1\",\n            interval: 4000,\n            controls: \"\",\n            indicators: \"\",\n            background: \"#ababab\",\n            \"img-width\": \"1024\",\n            \"img-height\": \"480\"\n          },\n          on: {\n            \"sliding-start\": _vm.onSlideStart,\n            \"sliding-end\": _vm.onSlideEnd\n          },\n          model: {\n            value: _vm.slide,\n            callback: function($$v) {\n              _vm.slide = $$v\n            },\n            expression: \"slide\"\n          }\n        },\n        [\n          _c(\"b-carousel-slide\", {\n            attrs: {\n              caption: \"First slide\",\n              text:\n                \"Nulla vitae elit libero, a pharetra augue mollis interdum.\",\n              \"img-src\": \"https://picsum.photos/1024/480/?image=52\"\n            }\n          }),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=54\" }\n            },\n            [_c(\"h1\", [_vm._v(\"Hello world!\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", {\n            attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=58\" }\n          }),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", [\n            _c(\"img\", {\n              staticClass: \"d-block img-fluid w-100\",\n              attrs: {\n                slot: \"img\",\n                width: \"1024\",\n                height: \"480\",\n                src: \"https://picsum.photos/1024/480/?image=55\",\n                alt: \"image slot\"\n              },\n              slot: \"img\"\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: {\n                caption: \"Blank Image\",\n                \"img-blank\": \"\",\n                \"img-alt\": \"Blank image\"\n              }\n            },\n            [\n              _c(\"p\", [\n                _vm._v(\n                  \"\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n      \"\n                )\n              ])\n            ]\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(24)      .rerender(\"data-v-9a9f6144\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlPzRlNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGtEQUFrRCxFQUFFO0FBQ3RFO0FBQ0EsZ0NBQWdDLFNBQVMsWUFBWSxFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxtQ0FBbUMsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLFlBQVksRUFBRTtBQUMzRDtBQUNBLG9DQUFvQyxTQUFTLDBCQUEwQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLDBCQUEwQixFQUFFO0FBQzFEO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyxZQUFZLEVBQUU7QUFDNUM7QUFDQSxzQ0FBc0MseUJBQXlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ0Ysa0VBQVM7QUFDeEIsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyxFQUFvQjtBQUNoQztBQUNBIiwiZmlsZSI6IjI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJoZWFkZXJcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLW5hdmJhclwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvZ2dsZWFibGU6IFwibGdcIiwgdHlwZTogXCJkYXJrXCIsIHZhcmlhbnQ6IFwiaW5mb1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1uYXZiYXItYnJhbmRcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkdSRUVOIERFQ0lTSU9OU1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLW5hdmJhci10b2dnbGVcIiwgeyBhdHRyczogeyB0YXJnZXQ6IFwibmF2LWNvbGxhcHNlXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbGxhcHNlXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcIm5hdi1jb2xsYXBzZVwiLCBcImlzLW5hdlwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtfdm0uX3YoXCJMaW5rXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIsIGRpc2FibGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLXNtLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwic21cIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm15LTIgbXktc20tMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcInNtXCIsIHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWFyY2hcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW0tZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0ZXh0OiBcIkxhbmdcIiwgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVOXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRVNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSVVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZBXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwiYnV0dG9uLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm9maWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2lnbiBPdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItY2Fyb3VzZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1zaGFkb3dcIjogXCIxcHggMXB4IDJweCAjMzMzXCIgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiY2Fyb3VzZWwtMVwiLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDQwMDAsXG4gICAgICAgICAgICBjb250cm9sczogXCJcIixcbiAgICAgICAgICAgIGluZGljYXRvcnM6IFwiXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNhYmFiYWJcIixcbiAgICAgICAgICAgIFwiaW1nLXdpZHRoXCI6IFwiMTAyNFwiLFxuICAgICAgICAgICAgXCJpbWctaGVpZ2h0XCI6IFwiNDgwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInNsaWRpbmctc3RhcnRcIjogX3ZtLm9uU2xpZGVTdGFydCxcbiAgICAgICAgICAgIFwic2xpZGluZy1lbmRcIjogX3ZtLm9uU2xpZGVFbmRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNsaWRlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2xpZGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNsaWRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY2FwdGlvbjogXCJGaXJzdCBzbGlkZVwiLFxuICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgIFwiTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLlwiLFxuICAgICAgICAgICAgICBcImltZy1zcmNcIjogXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTUyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW1nLXNyY1wiOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaDFcIiwgW192bS5fdihcIkhlbGxvIHdvcmxkIVwiKV0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpbWctc3JjXCI6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01OFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtYmxvY2sgaW1nLWZsdWlkIHctMTAwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc2xvdDogXCJpbWdcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDI0XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ4MFwiLFxuICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU1XCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcImltYWdlIHNsb3RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzbG90OiBcImltZ1wiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY2Fyb3VzZWwtc2xpZGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBcIkJsYW5rIEltYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctYmxhbmtcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImltZy1hbHRcIjogXCJCbGFuayBpbWFnZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGVyb3MgZmVsaXMsIHRpbmNpZHVudFxcbiAgICAgICAgYSB0aW5jaWR1bnQgZWdldCwgY29udmFsbGlzIHZlbCBlc3QuIFV0IHBlbGxlbnRlc3F1ZSB1dCBsYWN1cyB2ZWwgaW50ZXJkdW0uXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTlhOWY2MTQ0XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOWE5ZjYxNDRcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///264\n");

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nheader[data-v-9a9f6144] {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info[data-v-9a9f6144] {\\n    background-color: #90ee90 !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/components/src/components/TheHeader.vue\"],\"names\":[],\"mappings\":\";AAuGA;EACA,cAAA;EACA,uBAAA;CACA;AACA;IACA,qCAAA;CACA\",\"file\":\"TheHeader.vue\",\"sourcesContent\":[\"<template>\\n  <header>\\n   <b-navbar toggleable=\\\"lg\\\" type=\\\"dark\\\" variant=\\\"info\\\">\\n    <b-navbar-brand href=\\\"#\\\">GREEN DECISIONS</b-navbar-brand>\\n\\n    <b-navbar-toggle target=\\\"nav-collapse\\\"></b-navbar-toggle>\\n\\n    <b-collapse id=\\\"nav-collapse\\\" is-nav>\\n      <b-navbar-nav>\\n        <b-nav-item href=\\\"#\\\">Link</b-nav-item>\\n        <b-nav-item href=\\\"#\\\" disabled>Disabled</b-nav-item>\\n      </b-navbar-nav>\\n\\n      <!-- Right aligned nav items -->\\n      <b-navbar-nav class=\\\"ml-auto\\\">\\n        <b-nav-form>\\n          <b-form-input size=\\\"sm\\\" class=\\\"mr-sm-2\\\" placeholder=\\\"Search\\\"></b-form-input>\\n          <b-button size=\\\"sm\\\" class=\\\"my-2 my-sm-0\\\" type=\\\"submit\\\">Search</b-button>\\n        </b-nav-form>\\n\\n        <b-nav-item-dropdown text=\\\"Lang\\\" right>\\n          <b-dropdown-item href=\\\"#\\\">EN</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">ES</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">RU</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">FA</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n\\n        <b-nav-item-dropdown right>\\n          <!-- Using 'button-content' slot -->\\n          <template slot=\\\"button-content\\\"><em>User</em></template>\\n          <b-dropdown-item href=\\\"#\\\">Profile</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">Sign Out</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n      </b-navbar-nav>\\n    </b-collapse>\\n  </b-navbar>\\n  <b-carousel\\n      id=\\\"carousel-1\\\"\\n      v-model=\\\"slide\\\"\\n      :interval=\\\"4000\\\"\\n      controls\\n      indicators\\n      background=\\\"#ababab\\\"\\n      img-width=\\\"1024\\\"\\n      img-height=\\\"480\\\"\\n      style=\\\"text-shadow: 1px 1px 2px #333;\\\"\\n      @sliding-start=\\\"onSlideStart\\\"\\n      @sliding-end=\\\"onSlideEnd\\\"\\n    >\\n      <!-- Text slides with image -->\\n      <b-carousel-slide\\n        caption=\\\"First slide\\\"\\n        text=\\\"Nulla vitae elit libero, a pharetra augue mollis interdum.\\\"\\n        img-src=\\\"https://picsum.photos/1024/480/?image=52\\\"\\n      ></b-carousel-slide>\\n\\n      <!-- Slides with custom text -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=54\\\">\\n        <h1>Hello world!</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with image only -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=58\\\"></b-carousel-slide>\\n\\n      <!-- Slides with img slot -->\\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\\n      <b-carousel-slide>\\n        <img\\n          slot=\\\"img\\\"\\n          class=\\\"d-block img-fluid w-100\\\"\\n          width=\\\"1024\\\"\\n          height=\\\"480\\\"\\n          src=\\\"https://picsum.photos/1024/480/?image=55\\\"\\n          alt=\\\"image slot\\\"\\n        >\\n      </b-carousel-slide>\\n\\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\\n      <b-carousel-slide caption=\\\"Blank Image\\\" img-blank img-alt=\\\"Blank image\\\">\\n        <p>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n        </p>\\n      </b-carousel-slide>\\n    </b-carousel>\\n  </header>\\n</template>\\n\\n<script>\\n\\nexport default {\\n  data () {\\n    return {\\n      title: 'Ne site'\\n    }\\n  }\\n}\\n</script>\\nheader {\\n  background: lightgreen;\\n  padding: 10px 0;\\n}\\n<style scoped>\\nheader {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info {\\n    background-color: #90ee90 !important;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlP2NjODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixrQkFBa0IsMkJBQTJCLEdBQUcsNkJBQTZCLDJDQUEyQyxHQUFHLFVBQVUsK0lBQStJLE1BQU0sVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLHlzREFBeXNELHVpREFBdWlELGFBQWEsY0FBYywrQkFBK0IsS0FBSyxHQUFHLHFCQUFxQiwyQkFBMkIsb0JBQW9CLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLDJDQUEyQyxHQUFHLCtCQUErQjs7QUFFcjVIIiwiZmlsZSI6IjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmhlYWRlcltkYXRhLXYtOWE5ZjYxNDRdIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG4uYmctaW5mb1tkYXRhLXYtOWE5ZjYxNDRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZWU5MCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc3VuaWwvRGVza3RvcC9nb3Z1ZS9nb3Z1ZS9iYWNrZW5kL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVHQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtDQUNBO0FBQ0E7SUFDQSxxQ0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJUaGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxoZWFkZXI+XFxuICAgPGItbmF2YmFyIHRvZ2dsZWFibGU9XFxcImxnXFxcIiB0eXBlPVxcXCJkYXJrXFxcIiB2YXJpYW50PVxcXCJpbmZvXFxcIj5cXG4gICAgPGItbmF2YmFyLWJyYW5kIGhyZWY9XFxcIiNcXFwiPkdSRUVOIERFQ0lTSU9OUzwvYi1uYXZiYXItYnJhbmQ+XFxuXFxuICAgIDxiLW5hdmJhci10b2dnbGUgdGFyZ2V0PVxcXCJuYXYtY29sbGFwc2VcXFwiPjwvYi1uYXZiYXItdG9nZ2xlPlxcblxcbiAgICA8Yi1jb2xsYXBzZSBpZD1cXFwibmF2LWNvbGxhcHNlXFxcIiBpcy1uYXY+XFxuICAgICAgPGItbmF2YmFyLW5hdj5cXG4gICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XFxcIiNcXFwiPkxpbms8L2ItbmF2LWl0ZW0+XFxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVxcXCIjXFxcIiBkaXNhYmxlZD5EaXNhYmxlZDwvYi1uYXYtaXRlbT5cXG4gICAgICA8L2ItbmF2YmFyLW5hdj5cXG5cXG4gICAgICA8IS0tIFJpZ2h0IGFsaWduZWQgbmF2IGl0ZW1zIC0tPlxcbiAgICAgIDxiLW5hdmJhci1uYXYgY2xhc3M9XFxcIm1sLWF1dG9cXFwiPlxcbiAgICAgICAgPGItbmF2LWZvcm0+XFxuICAgICAgICAgIDxiLWZvcm0taW5wdXQgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJtci1zbS0yXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgPGItYnV0dG9uIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXktMiBteS1zbS0wXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlNlYXJjaDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItbmF2LWZvcm0+XFxuXFxuICAgICAgICA8Yi1uYXYtaXRlbS1kcm9wZG93biB0ZXh0PVxcXCJMYW5nXFxcIiByaWdodD5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5FTjwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPkVTPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+UlU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5GQTwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcblxcbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gcmlnaHQ+XFxuICAgICAgICAgIDwhLS0gVXNpbmcgJ2J1dHRvbi1jb250ZW50JyBzbG90IC0tPlxcbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYnV0dG9uLWNvbnRlbnRcXFwiPjxlbT5Vc2VyPC9lbT48L3RlbXBsYXRlPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPlByb2ZpbGU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5TaWduIE91dDwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcbiAgICAgIDwvYi1uYXZiYXItbmF2PlxcbiAgICA8L2ItY29sbGFwc2U+XFxuICA8L2ItbmF2YmFyPlxcbiAgPGItY2Fyb3VzZWxcXG4gICAgICBpZD1cXFwiY2Fyb3VzZWwtMVxcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJzbGlkZVxcXCJcXG4gICAgICA6aW50ZXJ2YWw9XFxcIjQwMDBcXFwiXFxuICAgICAgY29udHJvbHNcXG4gICAgICBpbmRpY2F0b3JzXFxuICAgICAgYmFja2dyb3VuZD1cXFwiI2FiYWJhYlxcXCJcXG4gICAgICBpbWctd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgaW1nLWhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzMzMztcXFwiXFxuICAgICAgQHNsaWRpbmctc3RhcnQ9XFxcIm9uU2xpZGVTdGFydFxcXCJcXG4gICAgICBAc2xpZGluZy1lbmQ9XFxcIm9uU2xpZGVFbmRcXFwiXFxuICAgID5cXG4gICAgICA8IS0tIFRleHQgc2xpZGVzIHdpdGggaW1hZ2UgLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcXG4gICAgICAgIGNhcHRpb249XFxcIkZpcnN0IHNsaWRlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLlxcXCJcXG4gICAgICAgIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTJcXFwiXFxuICAgICAgPjwvYi1jYXJvdXNlbC1zbGlkZT5cXG5cXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGN1c3RvbSB0ZXh0IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcXFwiPlxcbiAgICAgICAgPGgxPkhlbGxvIHdvcmxkITwvaDE+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1hZ2Ugb25seSAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU4XFxcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBpbWcgc2xvdCAtLT5cXG4gICAgICA8IS0tIE5vdGUgdGhlIGNsYXNzZXMgLmQtYmxvY2sgYW5kIC5pbWctZmx1aWQgdG8gcHJldmVudCBicm93c2VyIGRlZmF1bHQgaW1hZ2UgYWxpZ25tZW50IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlPlxcbiAgICAgICAgPGltZ1xcbiAgICAgICAgICBzbG90PVxcXCJpbWdcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFxcXCJcXG4gICAgICAgICAgd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgICAgIGhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTVcXFwiXFxuICAgICAgICAgIGFsdD1cXFwiaW1hZ2Ugc2xvdFxcXCJcXG4gICAgICAgID5cXG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZSB3aXRoIGJsYW5rIGZsdWlkIGltYWdlIHRvIG1haW50YWluIHNsaWRlIGFzcGVjdCByYXRpbyAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBjYXB0aW9uPVxcXCJCbGFuayBJbWFnZVxcXCIgaW1nLWJsYW5rIGltZy1hbHQ9XFxcIkJsYW5rIGltYWdlXFxcIj5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcXG4gICAgICAgICAgYSB0aW5jaWR1bnQgZWdldCwgY29udmFsbGlzIHZlbCBlc3QuIFV0IHBlbGxlbnRlc3F1ZSB1dCBsYWN1cyB2ZWwgaW50ZXJkdW0uXFxuICAgICAgICA8L3A+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcbiAgICA8L2ItY2Fyb3VzZWw+XFxuICA8L2hlYWRlcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgdGl0bGU6ICdOZSBzaXRlJ1xcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG48c3R5bGUgc2NvcGVkPlxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuLmJnLWluZm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlZTkwICFpbXBvcnRhbnQ7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTlhOWY2MTQ0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data: function data() {\n    return {\n      title: 'Ne site'\n    };\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZT9jYzIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBGQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBIiwiZmlsZSI6Ijk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8aGVhZGVyPlxuICAgPGItbmF2YmFyIHRvZ2dsZWFibGU9XCJsZ1wiIHR5cGU9XCJkYXJrXCIgdmFyaWFudD1cImluZm9cIj5cbiAgICA8Yi1uYXZiYXItYnJhbmQgaHJlZj1cIiNcIj5HUkVFTiBERUNJU0lPTlM8L2ItbmF2YmFyLWJyYW5kPlxuXG4gICAgPGItbmF2YmFyLXRvZ2dsZSB0YXJnZXQ9XCJuYXYtY29sbGFwc2VcIj48L2ItbmF2YmFyLXRvZ2dsZT5cblxuICAgIDxiLWNvbGxhcHNlIGlkPVwibmF2LWNvbGxhcHNlXCIgaXMtbmF2PlxuICAgICAgPGItbmF2YmFyLW5hdj5cbiAgICAgICAgPGItbmF2LWl0ZW0gaHJlZj1cIiNcIj5MaW5rPC9iLW5hdi1pdGVtPlxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVwiI1wiIGRpc2FibGVkPkRpc2FibGVkPC9iLW5hdi1pdGVtPlxuICAgICAgPC9iLW5hdmJhci1uYXY+XG5cbiAgICAgIDwhLS0gUmlnaHQgYWxpZ25lZCBuYXYgaXRlbXMgLS0+XG4gICAgICA8Yi1uYXZiYXItbmF2IGNsYXNzPVwibWwtYXV0b1wiPlxuICAgICAgICA8Yi1uYXYtZm9ybT5cbiAgICAgICAgICA8Yi1mb3JtLWlucHV0IHNpemU9XCJzbVwiIGNsYXNzPVwibXItc20tMlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCI+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIGNsYXNzPVwibXktMiBteS1zbS0wXCIgdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYi1idXR0b24+XG4gICAgICAgIDwvYi1uYXYtZm9ybT5cblxuICAgICAgICA8Yi1uYXYtaXRlbS1kcm9wZG93biB0ZXh0PVwiTGFuZ1wiIHJpZ2h0PlxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cIiNcIj5FTjwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cIiNcIj5FUzwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cIiNcIj5SVTwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cIiNcIj5GQTwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICA8L2ItbmF2LWl0ZW0tZHJvcGRvd24+XG5cbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gcmlnaHQ+XG4gICAgICAgICAgPCEtLSBVc2luZyAnYnV0dG9uLWNvbnRlbnQnIHNsb3QgLS0+XG4gICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJidXR0b24tY29udGVudFwiPjxlbT5Vc2VyPC9lbT48L3RlbXBsYXRlPlxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cIiNcIj5Qcm9maWxlPC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVwiI1wiPlNpZ24gT3V0PC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgIDwvYi1uYXYtaXRlbS1kcm9wZG93bj5cbiAgICAgIDwvYi1uYXZiYXItbmF2PlxuICAgIDwvYi1jb2xsYXBzZT5cbiAgPC9iLW5hdmJhcj5cbiAgPGItY2Fyb3VzZWxcbiAgICAgIGlkPVwiY2Fyb3VzZWwtMVwiXG4gICAgICB2LW1vZGVsPVwic2xpZGVcIlxuICAgICAgOmludGVydmFsPVwiNDAwMFwiXG4gICAgICBjb250cm9sc1xuICAgICAgaW5kaWNhdG9yc1xuICAgICAgYmFja2dyb3VuZD1cIiNhYmFiYWJcIlxuICAgICAgaW1nLXdpZHRoPVwiMTAyNFwiXG4gICAgICBpbWctaGVpZ2h0PVwiNDgwXCJcbiAgICAgIHN0eWxlPVwidGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMzMzM7XCJcbiAgICAgIEBzbGlkaW5nLXN0YXJ0PVwib25TbGlkZVN0YXJ0XCJcbiAgICAgIEBzbGlkaW5nLWVuZD1cIm9uU2xpZGVFbmRcIlxuICAgID5cbiAgICAgIDwhLS0gVGV4dCBzbGlkZXMgd2l0aCBpbWFnZSAtLT5cbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlXG4gICAgICAgIGNhcHRpb249XCJGaXJzdCBzbGlkZVwiXG4gICAgICAgIHRleHQ9XCJOdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uXCJcbiAgICAgICAgaW1nLXNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTJcIlxuICAgICAgPjwvYi1jYXJvdXNlbC1zbGlkZT5cblxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBjdXN0b20gdGV4dCAtLT5cbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU0XCI+XG4gICAgICAgIDxoMT5IZWxsbyB3b3JsZCE8L2gxPlxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxuXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGltYWdlIG9ubHkgLS0+XG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01OFwiPjwvYi1jYXJvdXNlbC1zbGlkZT5cblxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBpbWcgc2xvdCAtLT5cbiAgICAgIDwhLS0gTm90ZSB0aGUgY2xhc3NlcyAuZC1ibG9jayBhbmQgLmltZy1mbHVpZCB0byBwcmV2ZW50IGJyb3dzZXIgZGVmYXVsdCBpbWFnZSBhbGlnbm1lbnQgLS0+XG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNsb3Q9XCJpbWdcIlxuICAgICAgICAgIGNsYXNzPVwiZC1ibG9jayBpbWctZmx1aWQgdy0xMDBcIlxuICAgICAgICAgIHdpZHRoPVwiMTAyNFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDgwXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU1XCJcbiAgICAgICAgICBhbHQ9XCJpbWFnZSBzbG90XCJcbiAgICAgICAgPlxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxuXG4gICAgICA8IS0tIFNsaWRlIHdpdGggYmxhbmsgZmx1aWQgaW1hZ2UgdG8gbWFpbnRhaW4gc2xpZGUgYXNwZWN0IHJhdGlvIC0tPlxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGUgY2FwdGlvbj1cIkJsYW5rIEltYWdlXCIgaW1nLWJsYW5rIGltZy1hbHQ9XCJCbGFuayBpbWFnZVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcbiAgICAgICAgICBhIHRpbmNpZHVudCBlZ2V0LCBjb252YWxsaXMgdmVsIGVzdC4gVXQgcGVsbGVudGVzcXVlIHV0IGxhY3VzIHZlbCBpbnRlcmR1bS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxuICAgIDwvYi1jYXJvdXNlbD5cbiAgPC9oZWFkZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ05lIHNpdGUnXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjxzdHlsZSBzY29wZWQ+XG5oZWFkZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xufVxuLmJnLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGVlOTAgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})