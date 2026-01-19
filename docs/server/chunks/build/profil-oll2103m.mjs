import { _ as __nuxt_component_0 } from './AppHeader-BD5QWH2x.mjs';
import { _ as _sfc_main$1 } from './Tabs-D0J7IOIu.mjs';
import { c as _sfc_main$c, a as _sfc_main$9 } from './server.mjs';
import { _ as _sfc_main$2 } from './Card-CHiw-Xxq.mjs';
import { _ as _sfc_main$3 } from './Badge-Dc66ggRY.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'reka-ui';
import '@vueuse/core';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profil",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTab = ref(0);
    const tabs = [
      { label: "Profil", value: "profile" },
      { label: "Aktywności", value: "activities" },
      { label: "Ustawienia", value: "settings" }
    ];
    const interests = [
      "Fitness",
      "Fotografia",
      "Kawa",
      "Podróże",
      "Gry planszowe",
      "Gotowanie"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_UTabs = _sfc_main$1;
      const _component_UAvatar = _sfc_main$c;
      const _component_UButton = _sfc_main$9;
      const _component_UCard = _sfc_main$2;
      const _component_UBadge = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto px-4 py-6 space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, { "show-edit": true }, null, _parent));
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
      if (unref(selectedTab) === 0) {
        _push(`<div class="space-y-6"><div class="text-center"><div class="relative inline-block mb-4">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          initials: "JK",
          size: "3xl",
          class: "mx-auto"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          color: "gray",
          variant: "outline",
          size: "sm",
          class: "absolute bottom-0 right-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Zmień zdjęcie `);
            } else {
              return [
                createTextVNode(" Zmień zdjęcie ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-1"> Joanna Kowalewska, 29 </h2><p class="text-gray-600 dark:text-gray-400 mb-4"> Warszawa </p><p class="text-sm text-gray-700 dark:text-gray-300 max-w-md mx-auto"> Singielka, miłośniczka dobrej kawy. Szukam grupy do wspólnych ćwiczeń. </p></div>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="font-semibold text-gray-900 dark:text-white"${_scopeId}>Dostępność</h3>`);
            } else {
              return [
                createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white" }, "Dostępność")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-gray-700 dark:text-gray-300"${_scopeId}> Pon-Pt 17:00-20:00 </p>`);
            } else {
              return [
                createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, " Pon-Pt 17:00-20:00 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="grid grid-cols-2 gap-4">`);
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><p class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>42</p><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}>Znajomi</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("p", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, "42"),
                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, "Znajomi")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><p class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>3</p><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}>Moje aktywności</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("p", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, "3"),
                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, "Moje aktywności")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><p class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>5</p><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}>Stworzone aktywności</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("p", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, "5"),
                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, "Stworzone aktywności")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><p class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>4.8</p><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}>Ocena</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("p", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, "4.8"),
                  createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, "Ocena")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UCard, null, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="font-semibold text-gray-900 dark:text-white"${_scopeId}>Zainteresowania</h3>`);
            } else {
              return [
                createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white" }, "Zainteresowania")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(interests, (interest) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: interest,
                  color: "blue",
                  variant: "soft",
                  size: "lg"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(interest)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(interest), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(interests, (interest) => {
                    return createVNode(_component_UBadge, {
                      key: interest,
                      color: "blue",
                      variant: "soft",
                      size: "lg"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(interest), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedTab) === 1) {
        _push(`<div><p class="text-gray-600 dark:text-gray-400 text-center py-8"> Twoje aktywności będą tutaj </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedTab) === 2) {
        _push(`<div><p class="text-gray-600 dark:text-gray-400 text-center py-8"> Ustawienia będą tutaj </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profil.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profil-oll2103m.mjs.map
