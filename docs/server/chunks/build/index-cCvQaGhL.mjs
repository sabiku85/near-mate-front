import { _ as _sfc_main$1 } from './Tabs-D0J7IOIu.mjs';
import { _ as _sfc_main$2 } from './Badge-Dc66ggRY.mjs';
import { _ as _sfc_main$3 } from './Input-Dz3KWK_v.mjs';
import { _ as _sfc_main$4 } from './Card-CHiw-Xxq.mjs';
import { n as navigateTo, c as _sfc_main$c, a as _sfc_main$9 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, createTextVNode, useSSRContext } from 'vue';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const selectedTab = ref(0);
    const tabs = [
      { label: "Rozmowy", value: "conversations" },
      { label: "Zaproszenia", value: "invitations", badge: 2 }
    ];
    const conversations = [
      {
        id: 1,
        name: "SM Sylwia Markowska",
        lastMessage: "Czekam na Ciebie przed wejściem",
        time: "10:40",
        unread: 2
      },
      {
        id: 2,
        name: "DC Dorota Czajkowska",
        lastMessage: "Świetna jest właśnie planszówka!",
        time: "13:15",
        unread: null
      },
      {
        id: 3,
        name: "GR Grupa fotograficzna",
        lastMessage: "Maria: Pamiętajcie, aby zabrać wodę!",
        time: "Wczoraj",
        unread: 3
      },
      {
        id: 4,
        name: "ER Emilia Rosińska",
        lastMessage: "Dzięki za wczoraj, do usłyszenia",
        time: "12.12.2024 12:45",
        unread: null
      }
    ];
    const invitations = [
      {
        id: 1,
        name: "Aleksandra Jarr",
        message: "Chce dołączyć do Twojej aktywności"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = _sfc_main$1;
      const _component_UBadge = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_UCard = _sfc_main$4;
      const _component_UAvatar = _sfc_main$c;
      const _component_UButton = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto px-4 py-6 space-y-4" }, _attrs))}><h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4"> Wiadomości </h1>`);
      _push(ssrRenderComponent(_component_UTabs, {
        modelValue: unref(selectedTab),
        "onUpdate:modelValue": ($event) => isRef(selectedTab) ? selectedTab.value = $event : null,
        items: tabs,
        class: "mb-4"
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-2"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            if (item.badge) {
              _push2(ssrRenderComponent(_component_UBadge, {
                value: item.badge,
                color: "red",
                size: "xs"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-2" }, [
                createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1),
                item.badge ? (openBlock(), createBlock(_component_UBadge, {
                  key: 0,
                  value: item.badge,
                  color: "red",
                  size: "xs"
                }, null, 8, ["value"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        placeholder: "Szukaj",
        icon: "i-lucide-search",
        size: "lg",
        class: "mb-4"
      }, null, _parent));
      if (unref(selectedTab) === 0) {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(conversations, (conversation) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: conversation.id,
            class: "hover:shadow-md transition-shadow cursor-pointer",
            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/wiadomosci/${conversation.id}`)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center space-x-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UAvatar, {
                  alt: conversation.name,
                  size: "md"
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex-1 min-w-0"${_scopeId}><div class="flex items-center justify-between mb-1"${_scopeId}><h3 class="font-semibold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(conversation.name)}</h3><span class="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2"${_scopeId}>${ssrInterpolate(conversation.time)}</span></div><p class="text-sm text-gray-600 dark:text-gray-400 truncate"${_scopeId}>${ssrInterpolate(conversation.lastMessage)}</p></div>`);
                if (conversation.unread) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    value: conversation.unread,
                    color: "red",
                    size: "sm",
                    class: "flex-shrink-0"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center space-x-3" }, [
                    createVNode(_component_UAvatar, {
                      alt: conversation.name,
                      size: "md"
                    }, null, 8, ["alt"]),
                    createVNode("div", { class: "flex-1 min-w-0" }, [
                      createVNode("div", { class: "flex items-center justify-between mb-1" }, [
                        createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white truncate" }, toDisplayString(conversation.name), 1),
                        createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2" }, toDisplayString(conversation.time), 1)
                      ]),
                      createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 truncate" }, toDisplayString(conversation.lastMessage), 1)
                    ]),
                    conversation.unread ? (openBlock(), createBlock(_component_UBadge, {
                      key: 0,
                      value: conversation.unread,
                      color: "red",
                      size: "sm",
                      class: "flex-shrink-0"
                    }, null, 8, ["value"])) : createCommentVNode("", true)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="space-y-2"><!--[-->`);
        ssrRenderList(invitations, (invitation) => {
          _push(ssrRenderComponent(_component_UCard, {
            key: invitation.id,
            class: "hover:shadow-md transition-shadow"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center space-x-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UAvatar, {
                  alt: invitation.name,
                  size: "md"
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex-1"${_scopeId}><h3 class="font-semibold text-gray-900 dark:text-white mb-1"${_scopeId}>${ssrInterpolate(invitation.name)}</h3><p class="text-sm text-gray-600 dark:text-gray-400 mb-2"${_scopeId}>${ssrInterpolate(invitation.message)}</p><div class="flex space-x-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "error",
                  variant: "outline",
                  size: "sm"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Odrzuć `);
                    } else {
                      return [
                        createTextVNode(" Odrzuć ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  size: "sm"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Akceptuj `);
                    } else {
                      return [
                        createTextVNode(" Akceptuj ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center space-x-3" }, [
                    createVNode(_component_UAvatar, {
                      alt: invitation.name,
                      size: "md"
                    }, null, 8, ["alt"]),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white mb-1" }, toDisplayString(invitation.name), 1),
                      createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, toDisplayString(invitation.message), 1),
                      createVNode("div", { class: "flex space-x-2" }, [
                        createVNode(_component_UButton, {
                          color: "error",
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Odrzuć ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          color: "primary",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Akceptuj ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wiadomosci/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cCvQaGhL.mjs.map
