import { a as _sfc_main$9, d as __nuxt_component_1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Input-Dz3KWK_v.mjs';
import { _ as _sfc_main$2 } from './Tabs-D0J7IOIu.mjs';
import { _ as _sfc_main$3 } from './Card-CHiw-Xxq.mjs';
import { _ as _sfc_main$4 } from './Badge-Dc66ggRY.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import 'reka-ui';
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
  __name: "aktywnosci",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedTab = ref(0);
    const tabs = [
      { label: "Wszystkie aktywności", value: "all" },
      { label: "Grupy", value: "groups" },
      { label: "Zapisane", value: "saved" }
    ];
    const activities = [
      {
        id: 1,
        title: "Weekendowy spacer po lesie",
        status: "Otwarte",
        category: "Outdoor",
        description: "Relaksujący spacer po lesie, połączony z obserwacją przyrody.",
        date: "30.09.2024 g. 9:00",
        location: "Centralny Park",
        participants: "6/8 uczestników",
        organizer: "SM Sylwia Malinowska",
        price: "Za darmo"
      },
      {
        id: 2,
        title: "Coffee & Planszówki",
        status: "Otwarte",
        category: "Social",
        description: "Spotkanie przy planszówkach i dobrej kawie.",
        date: "1.10.2024 g. 14:00",
        location: "Bonjour Café",
        participants: "4/6 uczestników",
        organizer: "MT Michał Trocki",
        price: "10 zł na kawę"
      },
      {
        id: 3,
        title: "Fotograficzny spacer",
        status: "Ostatnie miejsca",
        category: "Kreatywne",
        description: "Wspólne fotografowanie w plenerze.",
        date: "1.10.2024 g. 14:00",
        location: "",
        participants: "4/6 uczestników",
        organizer: "ED Emilia Dudzik",
        price: "Za darmo"
      },
      {
        id: 4,
        title: "Włoska szkoła gotowania",
        status: "Brak miejsc",
        category: "Nauka",
        description: "Nauka gotowania tradycyjnych włoskich potraw.",
        date: "3.10.2024 g. 18:00",
        location: "Współkuchnia",
        participants: "12/12 uczestników",
        organizer: "MR Marek Rol",
        price: "45 zł za osobę"
      }
    ];
    const getStatusColor = (status) => {
      if (status === "Otwarte") return "success";
      if (status === "Ostatnie miejsca") return "warning";
      if (status === "Brak miejsc") return "error";
      return "primary";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$9;
      const _component_UInput = _sfc_main$1;
      const _component_UTabs = _sfc_main$2;
      const _component_UCard = _sfc_main$3;
      const _component_UBadge = _sfc_main$4;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto px-4 py-6 space-y-4" }, _attrs))}><div class="flex items-center justify-between mb-4"><div><h1 class="text-2xl font-bold text-gray-900 dark:text-white"> Aktywności </h1><p class="text-sm text-gray-600 dark:text-gray-400 mt-1"> Przeglądaj dostępne aktywności, grupy. Stwórz własne </p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "i-lucide-plus",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create `);
          } else {
            return [
              createTextVNode(" Create ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex space-x-2 mb-4">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        placeholder: "Szukaj",
        icon: "i-lucide-search",
        size: "lg",
        class: "flex-1"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "outline",
        icon: "i-lucide-filter"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Filtruj `);
          } else {
            return [
              createTextVNode(" Filtruj ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "gray",
        variant: "outline",
        icon: "i-lucide-arrow-up-down"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sortuj `);
          } else {
            return [
              createTextVNode(" Sortuj ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        modelValue: unref(selectedTab),
        "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null,
        items: tabs,
        class: "mb-4"
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
          } else {
            return [
              createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-4"><!--[-->`);
      ssrRenderList(activities, (activity) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: activity.id,
          class: "hover:shadow-md transition-shadow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-3"${_scopeId}><div class="flex items-start justify-between"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-2 mb-2"${_scopeId}><h3 class="font-semibold text-gray-900 dark:text-white text-lg"${_scopeId}>${ssrInterpolate(activity.title)}</h3>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: getStatusColor(activity.status),
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(activity.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(activity.status), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "soft",
                size: "sm",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(activity.category)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(activity.category), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div><p class="text-sm text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(activity.description)}</p><div class="space-y-1 text-sm text-gray-600 dark:text-gray-400"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:calendar",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(activity.date)}</span></div><div class="flex items-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:map-pin",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(activity.location)}</span></div><div class="flex items-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:users",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(activity.participants)}</span></div><div class="flex items-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:user",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(activity.organizer)}</span></div><div class="flex items-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:tag",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(activity.price)}</span></div></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                disabled: activity.status === "Brak miejsc",
                color: activity.status === "Brak miejsc" ? "neutral" : "primary",
                block: "",
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(activity.status === "Brak miejsc" ? "Zarezerwowane" : "Dołącz")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(activity.status === "Brak miejsc" ? "Zarezerwowane" : "Dołącz"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("div", { class: "flex items-start justify-between" }, [
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-2 mb-2" }, [
                        createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white text-lg" }, toDisplayString(activity.title), 1),
                        createVNode(_component_UBadge, {
                          color: getStatusColor(activity.status),
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(activity.status), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      createVNode(_component_UBadge, {
                        color: "neutral",
                        variant: "soft",
                        size: "sm",
                        class: "mb-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(activity.category), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  createVNode("p", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(activity.description), 1),
                  createVNode("div", { class: "space-y-1 text-sm text-gray-600 dark:text-gray-400" }, [
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:calendar",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(activity.date), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:map-pin",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(activity.location), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:users",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(activity.participants), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:user",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(activity.organizer), 1)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:tag",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(activity.price), 1)
                    ])
                  ]),
                  createVNode(_component_UButton, {
                    disabled: activity.status === "Brak miejsc",
                    color: activity.status === "Brak miejsc" ? "neutral" : "primary",
                    block: "",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(activity.status === "Brak miejsc" ? "Zarezerwowane" : "Dołącz"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "color"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aktywnosci.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=aktywnosci-CT5gEeCk.mjs.map
