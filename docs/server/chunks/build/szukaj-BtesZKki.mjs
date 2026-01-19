import { _ as _sfc_main$1 } from './Input-Dz3KWK_v.mjs';
import { a as _sfc_main$9, c as _sfc_main$c, d as __nuxt_component_1 } from './server.mjs';
import { _ as _sfc_main$2 } from './Card-CHiw-Xxq.mjs';
import { _ as _sfc_main$3 } from './Badge-Dc66ggRY.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "szukaj",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const users = [
      {
        id: 1,
        initials: "SN",
        name: "Sara Nowak",
        age: 40,
        distance: "2km",
        rating: "4.9",
        match: "92",
        description: "Miłośniczka fotografii, szukam osób do wspólnych sesji zdjęciowych i wycieczek.",
        interests: ["Fotografia", "Kawa", "Podróże", "Las"]
      },
      {
        id: 2,
        initials: "ER",
        name: "Emilia Rokicka",
        age: 36,
        distance: "12km",
        rating: "4.9",
        match: "84",
        description: "Zaczynam przygodę z jogą, szukam grupy do wspólnych ćwiczeń.",
        interests: ["Yoga", "Czytanie", "Kawa", "Muzea"]
      },
      {
        id: 3,
        initials: "ER",
        name: "Krystyna Budzisz",
        age: 32,
        distance: "12km",
        rating: "4.9",
        match: "74",
        description: "Chcę zacząć chodzić na siłownię, szukam partnera do treningów.",
        interests: ["Fitness", "Ćwiczenia"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$1;
      const _component_UButton = _sfc_main$9;
      const _component_UCard = _sfc_main$2;
      const _component_UAvatar = _sfc_main$c;
      const _component_Icon = __nuxt_component_1;
      const _component_UBadge = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto px-4 py-6 space-y-4" }, _attrs))}><h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> Poznaj nowych znajomych </h1><div class="flex space-x-2 mb-4">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        placeholder: "Szukaj po nazwie lub zainteresowaniu",
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
      _push(`</div><div class="space-y-4"><!--[-->`);
      ssrRenderList(users, (user) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: user.id,
          class: "hover:shadow-md transition-shadow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-3"${_scopeId}><div class="flex items-start justify-between"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UAvatar, {
                alt: user.name,
                size: "lg"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><h3 class="font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(user.initials)} ${ssrInterpolate(user.name)}, ${ssrInterpolate(user.age)} lat </h3><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(user.distance)}</p></div></div><div class="text-right"${_scopeId}><div class="flex items-center space-x-1 text-yellow-500 mb-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:star",
                class: "w-4 h-4 fill-current"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm font-medium"${_scopeId}>${ssrInterpolate(user.rating)}</span></div><p class="text-sm font-semibold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(user.match)}% dopasowanie </p></div></div><p class="text-sm text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(user.description)}</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(user.interests, (interest) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: interest,
                  color: "neutral",
                  variant: "soft",
                  size: "sm"
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
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                block: "",
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Wyślij zaproszenie `);
                  } else {
                    return [
                      createTextVNode(" Wyślij zaproszenie ")
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
                    createVNode("div", { class: "flex items-center space-x-3" }, [
                      createVNode(_component_UAvatar, {
                        alt: user.name,
                        size: "lg"
                      }, null, 8, ["alt"]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white" }, toDisplayString(user.initials) + " " + toDisplayString(user.name) + ", " + toDisplayString(user.age) + " lat ", 1),
                        createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(user.distance), 1)
                      ])
                    ]),
                    createVNode("div", { class: "text-right" }, [
                      createVNode("div", { class: "flex items-center space-x-1 text-yellow-500 mb-1" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:star",
                          class: "w-4 h-4 fill-current"
                        }),
                        createVNode("span", { class: "text-sm font-medium" }, toDisplayString(user.rating), 1)
                      ]),
                      createVNode("p", { class: "text-sm font-semibold text-blue-600 dark:text-blue-400" }, toDisplayString(user.match) + "% dopasowanie ", 1)
                    ])
                  ]),
                  createVNode("p", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(user.description), 1),
                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(user.interests, (interest) => {
                      return openBlock(), createBlock(_component_UBadge, {
                        key: interest,
                        color: "neutral",
                        variant: "soft",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(interest), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    block: "",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Wyślij zaproszenie ")
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/szukaj.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=szukaj-BtesZKki.mjs.map
