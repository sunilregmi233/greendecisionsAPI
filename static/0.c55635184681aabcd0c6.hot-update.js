webpackHotUpdate(0,{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"header\",\n    [\n      _c(\n        \"b-navbar\",\n        { attrs: { fixed: \"top\", toggleable: \"lg\", variant: \"info\" } },\n        [\n          _c(\"b-navbar-brand\", { attrs: { href: \"#\" } }, [\n            _vm._v(\"GREEN DECISIONS\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"b-navbar-toggle\", { attrs: { target: \"nav-collapse\" } }),\n          _vm._v(\" \"),\n          _c(\n            \"b-collapse\",\n            { attrs: { id: \"nav-collapse\", \"is-nav\": \"\" } },\n            [\n              _c(\n                \"b-navbar-nav\",\n                [\n                  _c(\"b-nav-item\", { attrs: { href: \"#\" } }, [_vm._v(\"Link\")]),\n                  _vm._v(\" \"),\n                  _c(\"b-nav-item\", { attrs: { href: \"#\", disabled: \"\" } }, [\n                    _vm._v(\"Disabled\")\n                  ])\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"b-navbar-nav\",\n                { staticClass: \"ml-auto\" },\n                [\n                  _c(\n                    \"b-nav-form\",\n                    [\n                      _c(\"b-form-input\", {\n                        staticClass: \"mr-sm-2\",\n                        attrs: { size: \"sm\", placeholder: \"Search\" }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\n                        \"b-button\",\n                        {\n                          staticClass: \"my-2 my-sm-0\",\n                          attrs: { size: \"sm\", type: \"submit\" }\n                        },\n                        [_vm._v(\"Search\")]\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { text: \"Lang\", right: \"\" } },\n                    [\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"EN\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"ES\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"RU\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"FA\")\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-nav-item-dropdown\",\n                    { attrs: { right: \"\" } },\n                    [\n                      _c(\"template\", { slot: \"button-content\" }, [\n                        _c(\"em\", [_vm._v(\"User\")])\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Profile\")\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"b-dropdown-item\", { attrs: { href: \"#\" } }, [\n                        _vm._v(\"Sign Out\")\n                      ])\n                    ],\n                    2\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"b-carousel\",\n        {\n          staticStyle: { \"text-shadow\": \"1px 1px 2px #333\" },\n          attrs: {\n            id: \"carousel-1\",\n            interval: 4000,\n            controls: \"\",\n            indicators: \"\",\n            background: \"#ababab\",\n            \"img-width\": \"1024\",\n            \"img-height\": \"480\"\n          },\n          on: {\n            \"sliding-start\": _vm.onSlideStart,\n            \"sliding-end\": _vm.onSlideEnd\n          },\n          model: {\n            value: _vm.slide,\n            callback: function($$v) {\n              _vm.slide = $$v\n            },\n            expression: \"slide\"\n          }\n        },\n        [\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: {\n                caption: \"First slide\",\n                text:\n                  \"Nulla vitae elit libero, a pharetra augue mollis interdum.\",\n                \"img-src\": \"https://picsum.photos/1024/480/?image=52\"\n              }\n            },\n            [_c(\"h1\", [_vm._v(\"Greendecisions website\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=54\" }\n            },\n            [_c(\"h1\", [_vm._v(\"Hello world!\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", {\n            attrs: { \"img-src\": \"https://picsum.photos/1024/480/?image=58\" }\n          }),\n          _vm._v(\" \"),\n          _c(\"b-carousel-slide\", [\n            _c(\"img\", {\n              staticClass: \"d-block img-fluid w-100\",\n              attrs: {\n                slot: \"img\",\n                width: \"1024\",\n                height: \"480\",\n                src: \"https://picsum.photos/1024/480/?image=55\",\n                alt: \"image slot\"\n              },\n              slot: \"img\"\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"b-carousel-slide\",\n            {\n              attrs: {\n                caption: \"Blank Image\",\n                \"img-blank\": \"\",\n                \"img-alt\": \"Blank image\"\n              }\n            },\n            [\n              _c(\"p\", [\n                _vm._v(\n                  \"\\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n        a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n      \"\n                )\n              ])\n            ]\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(24)      .rerender(\"data-v-9a9f6144\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlPzRlNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGtEQUFrRCxFQUFFO0FBQ3RFO0FBQ0EsZ0NBQWdDLFNBQVMsWUFBWSxFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxtQ0FBbUMsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLFlBQVksRUFBRTtBQUMzRDtBQUNBLG9DQUFvQyxTQUFTLDBCQUEwQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLDBCQUEwQixFQUFFO0FBQzFEO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyxZQUFZLEVBQUU7QUFDNUM7QUFDQSxzQ0FBc0MseUJBQXlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLFlBQVksRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUyxZQUFZLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDRixrRUFBUztBQUN4QixJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0EsSUFBSSxtQkFBTyxDQUFDLEVBQW9CO0FBQ2hDO0FBQ0EiLCJmaWxlIjoiMjY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImhlYWRlclwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItbmF2YmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZml4ZWQ6IFwidG9wXCIsIHRvZ2dsZWFibGU6IFwibGdcIiwgdmFyaWFudDogXCJpbmZvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJiLW5hdmJhci1icmFuZFwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiR1JFRU4gREVDSVNJT05TXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItbmF2YmFyLXRvZ2dsZVwiLCB7IGF0dHJzOiB7IHRhcmdldDogXCJuYXYtY29sbGFwc2VcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sbGFwc2VcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwibmF2LWNvbGxhcHNlXCIsIFwiaXMtbmF2XCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItbmF2YmFyLW5hdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW192bS5fdihcIkxpbmtcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiwgZGlzYWJsZWQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRpc2FibGVkXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItbmF2YmFyLW5hdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWwtYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItc20tMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJzbVwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2hcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXktMiBteS1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwic21cIiwgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlYXJjaFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbS1kcm9wZG93blwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRleHQ6IFwiTGFuZ1wiLCByaWdodDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRU5cIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFU1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJVXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZHJvcGRvd24taXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRkFcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW0tZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByaWdodDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJidXR0b24tY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcIlVzZXJcIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlByb2ZpbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTaWduIE91dFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1jYXJvdXNlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LXNoYWRvd1wiOiBcIjFweCAxcHggMnB4ICMzMzNcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJjYXJvdXNlbC0xXCIsXG4gICAgICAgICAgICBpbnRlcnZhbDogNDAwMCxcbiAgICAgICAgICAgIGNvbnRyb2xzOiBcIlwiLFxuICAgICAgICAgICAgaW5kaWNhdG9yczogXCJcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2FiYWJhYlwiLFxuICAgICAgICAgICAgXCJpbWctd2lkdGhcIjogXCIxMDI0XCIsXG4gICAgICAgICAgICBcImltZy1oZWlnaHRcIjogXCI0ODBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwic2xpZGluZy1zdGFydFwiOiBfdm0ub25TbGlkZVN0YXJ0LFxuICAgICAgICAgICAgXCJzbGlkaW5nLWVuZFwiOiBfdm0ub25TbGlkZUVuZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2xpZGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zbGlkZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2xpZGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCJGaXJzdCBzbGlkZVwiLFxuICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICBcIk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS5cIixcbiAgICAgICAgICAgICAgICBcImltZy1zcmNcIjogXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTUyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImgxXCIsIFtfdm0uX3YoXCJHcmVlbmRlY2lzaW9ucyB3ZWJzaXRlXCIpXSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW1nLXNyY1wiOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaDFcIiwgW192bS5fdihcIkhlbGxvIHdvcmxkIVwiKV0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJpbWctc3JjXCI6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01OFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtYmxvY2sgaW1nLWZsdWlkIHctMTAwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc2xvdDogXCJpbWdcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDI0XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ4MFwiLFxuICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU1XCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcImltYWdlIHNsb3RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzbG90OiBcImltZ1wiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY2Fyb3VzZWwtc2xpZGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBcIkJsYW5rIEltYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctYmxhbmtcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImltZy1hbHRcIjogXCJCbGFuayBpbWFnZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGVyb3MgZmVsaXMsIHRpbmNpZHVudFxcbiAgICAgICAgYSB0aW5jaWR1bnQgZWdldCwgY29udmFsbGlzIHZlbCBlc3QuIFV0IHBlbGxlbnRlc3F1ZSB1dCBsYWN1cyB2ZWwgaW50ZXJkdW0uXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTlhOWY2MTQ0XCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOWE5ZjYxNDRcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///264\n");

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(25)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nheader[data-v-9a9f6144] {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info[data-v-9a9f6144] {\\n    background-color:transparent !important;\\n}\\nb-nav-item[data-v-9a9f6144]:hover {\\n  background: lightgreen;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/sunil/Desktop/govue/govue/backend/frontend/src/components/src/components/TheHeader.vue\"],\"names\":[],\"mappings\":\";AA0GA;EACA,cAAA;EACA,uBAAA;CACA;AACA;IACA,wCAAA;CACA;AACA;EACA,uBAAA;CACA\",\"file\":\"TheHeader.vue\",\"sourcesContent\":[\"<template>\\n  <header>\\n   <b-navbar fixed=\\\"top\\\" toggleable=\\\"lg\\\" variant=\\\"info\\\">\\n    <b-navbar-brand href=\\\"#\\\">GREEN DECISIONS</b-navbar-brand>\\n\\n    <b-navbar-toggle target=\\\"nav-collapse\\\"></b-navbar-toggle>\\n\\n    <b-collapse id=\\\"nav-collapse\\\" is-nav>\\n      <b-navbar-nav>\\n        <b-nav-item href=\\\"#\\\">Link</b-nav-item>\\n        <b-nav-item href=\\\"#\\\" disabled>Disabled</b-nav-item>\\n      </b-navbar-nav>\\n\\n      <!-- Right aligned nav items -->\\n      <b-navbar-nav class=\\\"ml-auto\\\">\\n        <b-nav-form>\\n          <b-form-input size=\\\"sm\\\" class=\\\"mr-sm-2\\\" placeholder=\\\"Search\\\"></b-form-input>\\n          <b-button size=\\\"sm\\\" class=\\\"my-2 my-sm-0\\\" type=\\\"submit\\\">Search</b-button>\\n        </b-nav-form>\\n\\n        <b-nav-item-dropdown text=\\\"Lang\\\" right>\\n          <b-dropdown-item href=\\\"#\\\">EN</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">ES</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">RU</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">FA</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n\\n        <b-nav-item-dropdown right>\\n          <!-- Using 'button-content' slot -->\\n          <template slot=\\\"button-content\\\"><em>User</em></template>\\n          <b-dropdown-item href=\\\"#\\\">Profile</b-dropdown-item>\\n          <b-dropdown-item href=\\\"#\\\">Sign Out</b-dropdown-item>\\n        </b-nav-item-dropdown>\\n      </b-navbar-nav>\\n    </b-collapse>\\n  </b-navbar>\\n  <b-carousel\\n      id=\\\"carousel-1\\\"\\n      v-model=\\\"slide\\\"\\n      :interval=\\\"4000\\\"\\n      controls\\n      indicators\\n      background=\\\"#ababab\\\"\\n      img-width=\\\"1024\\\"\\n      img-height=\\\"480\\\"\\n      style=\\\"text-shadow: 1px 1px 2px #333;\\\"\\n      @sliding-start=\\\"onSlideStart\\\"\\n      @sliding-end=\\\"onSlideEnd\\\"\\n    >\\n      <!-- Text slides with image -->\\n      <b-carousel-slide\\n        caption=\\\"First slide\\\"\\n        text=\\\"Nulla vitae elit libero, a pharetra augue mollis interdum.\\\"\\n        img-src=\\\"https://picsum.photos/1024/480/?image=52\\\"\\n      >\\n        <h1>Greendecisions website</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with custom text -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=54\\\">\\n        <h1>Hello world!</h1>\\n      </b-carousel-slide>\\n\\n      <!-- Slides with image only -->\\n      <b-carousel-slide img-src=\\\"https://picsum.photos/1024/480/?image=58\\\"></b-carousel-slide>\\n\\n      <!-- Slides with img slot -->\\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\\n      <b-carousel-slide>\\n        <img\\n          slot=\\\"img\\\"\\n          class=\\\"d-block img-fluid w-100\\\"\\n          width=\\\"1024\\\"\\n          height=\\\"480\\\"\\n          src=\\\"https://picsum.photos/1024/480/?image=55\\\"\\n          alt=\\\"image slot\\\"\\n        >\\n      </b-carousel-slide>\\n\\n      <!-- Slide with blank fluid image to maintain slide aspect ratio -->\\n      <b-carousel-slide caption=\\\"Blank Image\\\" img-blank img-alt=\\\"Blank image\\\">\\n        <p>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\\n          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\\n        </p>\\n      </b-carousel-slide>\\n    </b-carousel>\\n  </header>\\n</template>\\n\\n<script>\\n\\nexport default {\\n  data () {\\n    return {\\n\\n    }\\n  },\\n  methods: {\\n    onScroll() {\\n\\n    }\\n  }\\n}\\n</script>\\n<style scoped>\\nheader {\\n  height: 500px;\\n  background: lightgreen;\\n}\\n.bg-info {\\n    background-color:transparent !important;\\n}\\nb-nav-item:hover {\\n  background: lightgreen;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaGVIZWFkZXIudnVlP2NjODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixrQkFBa0IsMkJBQTJCLEdBQUcsNkJBQTZCLDhDQUE4QyxHQUFHLHFDQUFxQywyQkFBMkIsR0FBRyxVQUFVLCtJQUErSSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyx5c0RBQXlzRCx3bERBQXdsRCxhQUFhLGNBQWMsU0FBUyxLQUFLLGVBQWUsa0JBQWtCLFNBQVMsS0FBSyxHQUFHLHFDQUFxQyxrQkFBa0IsMkJBQTJCLEdBQUcsWUFBWSw4Q0FBOEMsR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcsK0JBQStCOztBQUVuakkiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaGVhZGVyW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcbi5iZy1pbmZvW2RhdGEtdi05YTlmNjE0NF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbmItbmF2LWl0ZW1bZGF0YS12LTlhOWY2MTQ0XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc3VuaWwvRGVza3RvcC9nb3Z1ZS9nb3Z1ZS9iYWNrZW5kL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL1RoZUhlYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTBHQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtDQUNBO0FBQ0E7SUFDQSx3Q0FBQTtDQUNBO0FBQ0E7RUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJUaGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxoZWFkZXI+XFxuICAgPGItbmF2YmFyIGZpeGVkPVxcXCJ0b3BcXFwiIHRvZ2dsZWFibGU9XFxcImxnXFxcIiB2YXJpYW50PVxcXCJpbmZvXFxcIj5cXG4gICAgPGItbmF2YmFyLWJyYW5kIGhyZWY9XFxcIiNcXFwiPkdSRUVOIERFQ0lTSU9OUzwvYi1uYXZiYXItYnJhbmQ+XFxuXFxuICAgIDxiLW5hdmJhci10b2dnbGUgdGFyZ2V0PVxcXCJuYXYtY29sbGFwc2VcXFwiPjwvYi1uYXZiYXItdG9nZ2xlPlxcblxcbiAgICA8Yi1jb2xsYXBzZSBpZD1cXFwibmF2LWNvbGxhcHNlXFxcIiBpcy1uYXY+XFxuICAgICAgPGItbmF2YmFyLW5hdj5cXG4gICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XFxcIiNcXFwiPkxpbms8L2ItbmF2LWl0ZW0+XFxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVxcXCIjXFxcIiBkaXNhYmxlZD5EaXNhYmxlZDwvYi1uYXYtaXRlbT5cXG4gICAgICA8L2ItbmF2YmFyLW5hdj5cXG5cXG4gICAgICA8IS0tIFJpZ2h0IGFsaWduZWQgbmF2IGl0ZW1zIC0tPlxcbiAgICAgIDxiLW5hdmJhci1uYXYgY2xhc3M9XFxcIm1sLWF1dG9cXFwiPlxcbiAgICAgICAgPGItbmF2LWZvcm0+XFxuICAgICAgICAgIDxiLWZvcm0taW5wdXQgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJtci1zbS0yXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIj48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgPGItYnV0dG9uIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXktMiBteS1zbS0wXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPlNlYXJjaDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItbmF2LWZvcm0+XFxuXFxuICAgICAgICA8Yi1uYXYtaXRlbS1kcm9wZG93biB0ZXh0PVxcXCJMYW5nXFxcIiByaWdodD5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5FTjwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPkVTPC9iLWRyb3Bkb3duLWl0ZW0+XFxuICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW0gaHJlZj1cXFwiI1xcXCI+UlU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5GQTwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcblxcbiAgICAgICAgPGItbmF2LWl0ZW0tZHJvcGRvd24gcmlnaHQ+XFxuICAgICAgICAgIDwhLS0gVXNpbmcgJ2J1dHRvbi1jb250ZW50JyBzbG90IC0tPlxcbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwiYnV0dG9uLWNvbnRlbnRcXFwiPjxlbT5Vc2VyPC9lbT48L3RlbXBsYXRlPlxcbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XFxcIiNcXFwiPlByb2ZpbGU8L2ItZHJvcGRvd24taXRlbT5cXG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVxcXCIjXFxcIj5TaWduIE91dDwvYi1kcm9wZG93bi1pdGVtPlxcbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxcbiAgICAgIDwvYi1uYXZiYXItbmF2PlxcbiAgICA8L2ItY29sbGFwc2U+XFxuICA8L2ItbmF2YmFyPlxcbiAgPGItY2Fyb3VzZWxcXG4gICAgICBpZD1cXFwiY2Fyb3VzZWwtMVxcXCJcXG4gICAgICB2LW1vZGVsPVxcXCJzbGlkZVxcXCJcXG4gICAgICA6aW50ZXJ2YWw9XFxcIjQwMDBcXFwiXFxuICAgICAgY29udHJvbHNcXG4gICAgICBpbmRpY2F0b3JzXFxuICAgICAgYmFja2dyb3VuZD1cXFwiI2FiYWJhYlxcXCJcXG4gICAgICBpbWctd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgaW1nLWhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzMzMztcXFwiXFxuICAgICAgQHNsaWRpbmctc3RhcnQ9XFxcIm9uU2xpZGVTdGFydFxcXCJcXG4gICAgICBAc2xpZGluZy1lbmQ9XFxcIm9uU2xpZGVFbmRcXFwiXFxuICAgID5cXG4gICAgICA8IS0tIFRleHQgc2xpZGVzIHdpdGggaW1hZ2UgLS0+XFxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcXG4gICAgICAgIGNhcHRpb249XFxcIkZpcnN0IHNsaWRlXFxcIlxcbiAgICAgICAgdGV4dD1cXFwiTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUgbW9sbGlzIGludGVyZHVtLlxcXCJcXG4gICAgICAgIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTJcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGgxPkdyZWVuZGVjaXNpb25zIHdlYnNpdGU8L2gxPlxcbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cXG5cXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGN1c3RvbSB0ZXh0IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTRcXFwiPlxcbiAgICAgICAgPGgxPkhlbGxvIHdvcmxkITwvaDE+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcblxcbiAgICAgIDwhLS0gU2xpZGVzIHdpdGggaW1hZ2Ugb25seSAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVxcXCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU4XFxcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBpbWcgc2xvdCAtLT5cXG4gICAgICA8IS0tIE5vdGUgdGhlIGNsYXNzZXMgLmQtYmxvY2sgYW5kIC5pbWctZmx1aWQgdG8gcHJldmVudCBicm93c2VyIGRlZmF1bHQgaW1hZ2UgYWxpZ25tZW50IC0tPlxcbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlPlxcbiAgICAgICAgPGltZ1xcbiAgICAgICAgICBzbG90PVxcXCJpbWdcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJkLWJsb2NrIGltZy1mbHVpZCB3LTEwMFxcXCJcXG4gICAgICAgICAgd2lkdGg9XFxcIjEwMjRcXFwiXFxuICAgICAgICAgIGhlaWdodD1cXFwiNDgwXFxcIlxcbiAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vcGljc3VtLnBob3Rvcy8xMDI0LzQ4MC8/aW1hZ2U9NTVcXFwiXFxuICAgICAgICAgIGFsdD1cXFwiaW1hZ2Ugc2xvdFxcXCJcXG4gICAgICAgID5cXG4gICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XFxuXFxuICAgICAgPCEtLSBTbGlkZSB3aXRoIGJsYW5rIGZsdWlkIGltYWdlIHRvIG1haW50YWluIHNsaWRlIGFzcGVjdCByYXRpbyAtLT5cXG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBjYXB0aW9uPVxcXCJCbGFuayBJbWFnZVxcXCIgaW1nLWJsYW5rIGltZy1hbHQ9XFxcIkJsYW5rIGltYWdlXFxcIj5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcXG4gICAgICAgICAgYSB0aW5jaWR1bnQgZWdldCwgY29udmFsbGlzIHZlbCBlc3QuIFV0IHBlbGxlbnRlc3F1ZSB1dCBsYWN1cyB2ZWwgaW50ZXJkdW0uXFxuICAgICAgICA8L3A+XFxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxcbiAgICA8L2ItY2Fyb3VzZWw+XFxuICA8L2hlYWRlcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuXFxuICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIG9uU2Nyb2xsKCkge1xcblxcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcbjxzdHlsZSBzY29wZWQ+XFxuaGVhZGVyIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG4uYmctaW5mbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuYi1uYXYtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05YTlmNjE0NFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///52\n");

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data: function data() {\n    return {};\n  },\n\n  methods: {\n    onScroll: function onScroll() {}\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZT9jYzIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEZBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBR0EsR0FMQTs7QUFNQTtBQUNBLFlBREEsc0JBQ0EsQ0FFQTtBQUhBO0FBTkEiLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxoZWFkZXI+XG4gICA8Yi1uYXZiYXIgZml4ZWQ9XCJ0b3BcIiB0b2dnbGVhYmxlPVwibGdcIiB2YXJpYW50PVwiaW5mb1wiPlxuICAgIDxiLW5hdmJhci1icmFuZCBocmVmPVwiI1wiPkdSRUVOIERFQ0lTSU9OUzwvYi1uYXZiYXItYnJhbmQ+XG5cbiAgICA8Yi1uYXZiYXItdG9nZ2xlIHRhcmdldD1cIm5hdi1jb2xsYXBzZVwiPjwvYi1uYXZiYXItdG9nZ2xlPlxuXG4gICAgPGItY29sbGFwc2UgaWQ9XCJuYXYtY29sbGFwc2VcIiBpcy1uYXY+XG4gICAgICA8Yi1uYXZiYXItbmF2PlxuICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVwiI1wiPkxpbms8L2ItbmF2LWl0ZW0+XG4gICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XCIjXCIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2ItbmF2LWl0ZW0+XG4gICAgICA8L2ItbmF2YmFyLW5hdj5cblxuICAgICAgPCEtLSBSaWdodCBhbGlnbmVkIG5hdiBpdGVtcyAtLT5cbiAgICAgIDxiLW5hdmJhci1uYXYgY2xhc3M9XCJtbC1hdXRvXCI+XG4gICAgICAgIDxiLW5hdi1mb3JtPlxuICAgICAgICAgIDxiLWZvcm0taW5wdXQgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci1zbS0yXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIj48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgY2xhc3M9XCJteS0yIG15LXNtLTBcIiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLW5hdi1mb3JtPlxuXG4gICAgICAgIDxiLW5hdi1pdGVtLWRyb3Bkb3duIHRleHQ9XCJMYW5nXCIgcmlnaHQ+XG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVwiI1wiPkVOPC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVwiI1wiPkVTPC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVwiI1wiPlJVPC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVwiI1wiPkZBPC9iLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgIDwvYi1uYXYtaXRlbS1kcm9wZG93bj5cblxuICAgICAgICA8Yi1uYXYtaXRlbS1kcm9wZG93biByaWdodD5cbiAgICAgICAgICA8IS0tIFVzaW5nICdidXR0b24tY29udGVudCcgc2xvdCAtLT5cbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImJ1dHRvbi1jb250ZW50XCI+PGVtPlVzZXI8L2VtPjwvdGVtcGxhdGU+XG4gICAgICAgICAgPGItZHJvcGRvd24taXRlbSBocmVmPVwiI1wiPlByb2ZpbGU8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgICA8Yi1kcm9wZG93bi1pdGVtIGhyZWY9XCIjXCI+U2lnbiBPdXQ8L2ItZHJvcGRvd24taXRlbT5cbiAgICAgICAgPC9iLW5hdi1pdGVtLWRyb3Bkb3duPlxuICAgICAgPC9iLW5hdmJhci1uYXY+XG4gICAgPC9iLWNvbGxhcHNlPlxuICA8L2ItbmF2YmFyPlxuICA8Yi1jYXJvdXNlbFxuICAgICAgaWQ9XCJjYXJvdXNlbC0xXCJcbiAgICAgIHYtbW9kZWw9XCJzbGlkZVwiXG4gICAgICA6aW50ZXJ2YWw9XCI0MDAwXCJcbiAgICAgIGNvbnRyb2xzXG4gICAgICBpbmRpY2F0b3JzXG4gICAgICBiYWNrZ3JvdW5kPVwiI2FiYWJhYlwiXG4gICAgICBpbWctd2lkdGg9XCIxMDI0XCJcbiAgICAgIGltZy1oZWlnaHQ9XCI0ODBcIlxuICAgICAgc3R5bGU9XCJ0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzMzMztcIlxuICAgICAgQHNsaWRpbmctc3RhcnQ9XCJvblNsaWRlU3RhcnRcIlxuICAgICAgQHNsaWRpbmctZW5kPVwib25TbGlkZUVuZFwiXG4gICAgPlxuICAgICAgPCEtLSBUZXh0IHNsaWRlcyB3aXRoIGltYWdlIC0tPlxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcbiAgICAgICAgY2FwdGlvbj1cIkZpcnN0IHNsaWRlXCJcbiAgICAgICAgdGV4dD1cIk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS5cIlxuICAgICAgICBpbWctc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01MlwiXG4gICAgICA+XG4gICAgICAgIDxoMT5HcmVlbmRlY2lzaW9ucyB3ZWJzaXRlPC9oMT5cbiAgICAgIDwvYi1jYXJvdXNlbC1zbGlkZT5cblxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBjdXN0b20gdGV4dCAtLT5cbiAgICAgIDxiLWNhcm91c2VsLXNsaWRlIGltZy1zcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU0XCI+XG4gICAgICAgIDxoMT5IZWxsbyB3b3JsZCE8L2gxPlxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxuXG4gICAgICA8IS0tIFNsaWRlcyB3aXRoIGltYWdlIG9ubHkgLS0+XG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZSBpbWctc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEwMjQvNDgwLz9pbWFnZT01OFwiPjwvYi1jYXJvdXNlbC1zbGlkZT5cblxuICAgICAgPCEtLSBTbGlkZXMgd2l0aCBpbWcgc2xvdCAtLT5cbiAgICAgIDwhLS0gTm90ZSB0aGUgY2xhc3NlcyAuZC1ibG9jayBhbmQgLmltZy1mbHVpZCB0byBwcmV2ZW50IGJyb3dzZXIgZGVmYXVsdCBpbWFnZSBhbGlnbm1lbnQgLS0+XG4gICAgICA8Yi1jYXJvdXNlbC1zbGlkZT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNsb3Q9XCJpbWdcIlxuICAgICAgICAgIGNsYXNzPVwiZC1ibG9jayBpbWctZmx1aWQgdy0xMDBcIlxuICAgICAgICAgIHdpZHRoPVwiMTAyNFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDgwXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTAyNC80ODAvP2ltYWdlPTU1XCJcbiAgICAgICAgICBhbHQ9XCJpbWFnZSBzbG90XCJcbiAgICAgICAgPlxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxuXG4gICAgICA8IS0tIFNsaWRlIHdpdGggYmxhbmsgZmx1aWQgaW1hZ2UgdG8gbWFpbnRhaW4gc2xpZGUgYXNwZWN0IHJhdGlvIC0tPlxuICAgICAgPGItY2Fyb3VzZWwtc2xpZGUgY2FwdGlvbj1cIkJsYW5rIEltYWdlXCIgaW1nLWJsYW5rIGltZy1hbHQ9XCJCbGFuayBpbWFnZVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBlcm9zIGZlbGlzLCB0aW5jaWR1bnRcbiAgICAgICAgICBhIHRpbmNpZHVudCBlZ2V0LCBjb252YWxsaXMgdmVsIGVzdC4gVXQgcGVsbGVudGVzcXVlIHV0IGxhY3VzIHZlbCBpbnRlcmR1bS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9iLWNhcm91c2VsLXNsaWRlPlxuICAgIDwvYi1jYXJvdXNlbD5cbiAgPC9oZWFkZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG5cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNjcm9sbCgpIHtcblxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbn1cbi5iZy1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5iLW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvVGhlSGVhZGVyLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})