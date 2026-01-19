import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { d as __nuxt_component_1, a as _sfc_main$9 } from './server.mjs';
import { defineComponent, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-Vs_7XGAs.mjs';
import 'reka-ui';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    const recentActivities = [
      {
        id: 1,
        title: "New project created",
        time: "2 hours ago",
        icon: "lucide:folder-plus"
      },
      {
        id: 2,
        title: "Task completed",
        time: "4 hours ago",
        icon: "lucide:check-circle"
      },
      {
        id: 3,
        title: "Team member added",
        time: "1 day ago",
        icon: "lucide:user-plus"
      },
      {
        id: 4,
        title: "Settings updated",
        time: "2 days ago",
        icon: "lucide:settings"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_UButton = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> Dashboard </h1><p class="text-gray-600 dark:text-gray-400 mt-2"> Welcome back, ${ssrInterpolate(unref(user)?.name || "User")}! </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">`);
      _push(ssrRenderComponent(_component_UCard, { class: "hover:shadow-lg transition-shadow" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"${_scopeId}>Total Projects</p><p class="text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>12</p><p class="text-xs text-green-600 dark:text-green-400 mt-1"${_scopeId}>+2 from last month</p></div><div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:folder",
              class: "w-6 h-6 text-blue-600 dark:text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1" }, "Total Projects"),
                  createVNode("p", { class: "text-3xl font-bold text-gray-900 dark:text-white" }, "12"),
                  createVNode("p", { class: "text-xs text-green-600 dark:text-green-400 mt-1" }, "+2 from last month")
                ]),
                createVNode("div", { class: "w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:folder",
                    class: "w-6 h-6 text-blue-600 dark:text-blue-400"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "hover:shadow-lg transition-shadow" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"${_scopeId}>Active Tasks</p><p class="text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>8</p><p class="text-xs text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>In progress</p></div><div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:check-circle",
              class: "w-6 h-6 text-green-600 dark:text-green-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1" }, "Active Tasks"),
                  createVNode("p", { class: "text-3xl font-bold text-gray-900 dark:text-white" }, "8"),
                  createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, "In progress")
                ]),
                createVNode("div", { class: "w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:check-circle",
                    class: "w-6 h-6 text-green-600 dark:text-green-400"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "hover:shadow-lg transition-shadow" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"${_scopeId}>Team Members</p><p class="text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>5</p><p class="text-xs text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>Active members</p></div><div class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:users",
              class: "w-6 h-6 text-purple-600 dark:text-purple-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1" }, "Team Members"),
                  createVNode("p", { class: "text-3xl font-bold text-gray-900 dark:text-white" }, "5"),
                  createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, "Active members")
                ]),
                createVNode("div", { class: "w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:users",
                    class: "w-6 h-6 text-purple-600 dark:text-purple-400"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "hover:shadow-lg transition-shadow" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"${_scopeId}>Completed</p><p class="text-3xl font-bold text-gray-900 dark:text-white"${_scopeId}>24</p><p class="text-xs text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>This month</p></div><div class="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trophy",
              class: "w-6 h-6 text-yellow-600 dark:text-yellow-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1" }, "Completed"),
                  createVNode("p", { class: "text-3xl font-bold text-gray-900 dark:text-white" }, "24"),
                  createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1" }, "This month")
                ]),
                createVNode("div", { class: "w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:trophy",
                    class: "w-6 h-6 text-yellow-600 dark:text-yellow-400"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Recent Activity</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Recent Activity")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(recentActivities, (activity) => {
              _push2(`<div class="flex items-start space-x-3"${_scopeId}><div class="flex-shrink-0"${_scopeId}><div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: activity.icon,
                class: "w-5 h-5 text-blue-600 dark:text-blue-400"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex-1"${_scopeId}><p class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(activity.title)}</p><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(activity.time)}</p></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                (openBlock(), createBlock(Fragment, null, renderList(recentActivities, (activity) => {
                  return createVNode("div", {
                    key: activity.id,
                    class: "flex items-start space-x-3"
                  }, [
                    createVNode("div", { class: "flex-shrink-0" }, [
                      createVNode("div", { class: "w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: activity.icon,
                          class: "w-5 h-5 text-blue-600 dark:text-blue-400"
                        }, null, 8, ["name"])
                      ])
                    ]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(activity.title), 1),
                      createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(activity.time), 1)
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Quick Actions</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Quick Actions")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-2 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/dashboard/projects",
              block: "",
              color: "primary",
              variant: "soft",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "w-5 h-5 mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` New Project `);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" New Project ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/dashboard/team",
              block: "",
              color: "gray",
              variant: "soft",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:user-plus",
                    class: "w-5 h-5 mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Add Member `);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:user-plus",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" Add Member ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/dashboard/analytics",
              block: "",
              color: "green",
              variant: "soft",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:bar-chart",
                    class: "w-5 h-5 mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` View Analytics `);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:bar-chart",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" View Analytics ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/dashboard/settings",
              block: "",
              color: "purple",
              variant: "soft",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:settings",
                    class: "w-5 h-5 mr-2"
                  }, null, _parent3, _scopeId2));
                  _push3(` Settings `);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:settings",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" Settings ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                createVNode(_component_UButton, {
                  to: "/dashboard/projects",
                  block: "",
                  color: "primary",
                  variant: "soft",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" New Project ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  to: "/dashboard/team",
                  block: "",
                  color: "gray",
                  variant: "soft",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:user-plus",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" Add Member ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  to: "/dashboard/analytics",
                  block: "",
                  color: "green",
                  variant: "soft",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:bar-chart",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" View Analytics ")
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  to: "/dashboard/settings",
                  block: "",
                  color: "purple",
                  variant: "soft",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:settings",
                      class: "w-5 h-5 mr-2"
                    }),
                    createTextVNode(" Settings ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D1w4766T.mjs.map
