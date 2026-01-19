import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { c as _sfc_main$c, a as _sfc_main$9 } from './server.mjs';
import { _ as _sfc_main$2 } from './Form-aHvdyz-h.mjs';
import { _ as _sfc_main$3 } from './Input-Dz3KWK_v.mjs';
import { _ as _sfc_main$4 } from './Textarea-Bl9m6bBC.mjs';
import { defineComponent, ref, reactive, resolveComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuth();
    const loading = ref(false);
    const profileState = reactive({
      name: user.value?.name || "",
      email: user.value?.email || "",
      bio: ""
    });
    const resetForm = () => {
      profileState.name = user.value?.name || "";
      profileState.email = user.value?.email || "";
      profileState.bio = "";
    };
    const onSubmit = async () => {
      loading.value = true;
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_UAvatar = _sfc_main$c;
      const _component_UButton = _sfc_main$9;
      const _component_UForm = _sfc_main$2;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = _sfc_main$3;
      const _component_UTextarea = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> Profile </h1><p class="text-gray-600 dark:text-gray-400 mt-2"> Manage your profile information </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6">`);
      _push(ssrRenderComponent(_component_UCard, { class: "lg:col-span-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: unref(user)?.avatar,
              alt: unref(user)?.name || "User",
              size: "3xl",
              class: "mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-xl font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(user)?.name || "User")}</h2><p class="text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(user)?.email)}</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "soft",
              class: "mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Change Avatar `);
                } else {
                  return [
                    createTextVNode(" Change Avatar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode(_component_UAvatar, {
                  src: unref(user)?.avatar,
                  alt: unref(user)?.name || "User",
                  size: "3xl",
                  class: "mx-auto mb-4"
                }, null, 8, ["src", "alt"]),
                createVNode("h2", { class: "text-xl font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(user)?.name || "User"), 1),
                createVNode("p", { class: "text-gray-600 dark:text-gray-400" }, toDisplayString(unref(user)?.email), 1),
                createVNode(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  class: "mt-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Change Avatar ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "lg:col-span-2" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Profile Information</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Profile Information")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(profileState),
              class: "space-y-4",
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Full Name",
                    name: "name"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(profileState).name,
                          "onUpdate:modelValue": ($event) => unref(profileState).name = $event,
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(profileState).name,
                            "onUpdate:modelValue": ($event) => unref(profileState).name = $event,
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Email",
                    name: "email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(profileState).email,
                          "onUpdate:modelValue": ($event) => unref(profileState).email = $event,
                          type: "email",
                          size: "lg"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(profileState).email,
                            "onUpdate:modelValue": ($event) => unref(profileState).email = $event,
                            type: "email",
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Bio",
                    name: "bio"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UTextarea, {
                          modelValue: unref(profileState).bio,
                          "onUpdate:modelValue": ($event) => unref(profileState).bio = $event,
                          rows: 4,
                          placeholder: "Tell us about yourself..."
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UTextarea, {
                            modelValue: unref(profileState).bio,
                            "onUpdate:modelValue": ($event) => unref(profileState).bio = $event,
                            rows: 4,
                            placeholder: "Tell us about yourself..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex justify-end space-x-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    onClick: resetForm
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    color: "primary",
                    loading: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Save Changes `);
                      } else {
                        return [
                          createTextVNode(" Save Changes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UFormGroup, {
                      label: "Full Name",
                      name: "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(profileState).name,
                          "onUpdate:modelValue": ($event) => unref(profileState).name = $event,
                          size: "lg"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Email",
                      name: "email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(profileState).email,
                          "onUpdate:modelValue": ($event) => unref(profileState).email = $event,
                          type: "email",
                          size: "lg"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Bio",
                      name: "bio"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: unref(profileState).bio,
                          "onUpdate:modelValue": ($event) => unref(profileState).bio = $event,
                          rows: 4,
                          placeholder: "Tell us about yourself..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex justify-end space-x-3" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        onClick: resetForm
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "primary",
                        loading: unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save Changes ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, {
                state: unref(profileState),
                class: "space-y-4",
                onSubmit
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormGroup, {
                    label: "Full Name",
                    name: "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(profileState).name,
                        "onUpdate:modelValue": ($event) => unref(profileState).name = $event,
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormGroup, {
                    label: "Email",
                    name: "email"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(profileState).email,
                        "onUpdate:modelValue": ($event) => unref(profileState).email = $event,
                        type: "email",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormGroup, {
                    label: "Bio",
                    name: "bio"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: unref(profileState).bio,
                        "onUpdate:modelValue": ($event) => unref(profileState).bio = $event,
                        rows: 4,
                        placeholder: "Tell us about yourself..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex justify-end space-x-3" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      onClick: resetForm
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UButton, {
                      type: "submit",
                      color: "primary",
                      loading: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Save Changes ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                _: 1
              }, 8, ["state"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-DzEhlC8g.mjs.map
