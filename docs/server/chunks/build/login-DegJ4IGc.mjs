import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { _ as _sfc_main$2 } from './Form-aHvdyz-h.mjs';
import { _ as _sfc_main$3 } from './Input-Dz3KWK_v.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './Alert-Ct2psuhG.mjs';
import { _ as __nuxt_component_0$1, a as _sfc_main$9, n as navigateTo } from './server.mjs';
import { defineComponent, ref, reactive, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { z } from 'zod';
import { u as useAuth } from './useAuth-Vs_7XGAs.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { login } = useAuth();
    const loading = ref(false);
    const error = ref(null);
    const schema = z.object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters")
    });
    const state = reactive({
      email: "",
      password: "",
      remember: false
    });
    const onSubmit = async () => {
      loading.value = true;
      error.value = null;
      try {
        const result = await login(state.email, state.password);
        if (result.success) {
          await navigateTo("/dashboard");
        } else {
          error.value = result.error || "Login failed";
        }
      } catch (err) {
        error.value = err instanceof Error ? err.message : "An error occurred";
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_UForm = _sfc_main$2;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = _sfc_main$3;
      const _component_UCheckbox = _sfc_main$1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UButton = _sfc_main$9;
      const _component_UAlert = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2"${_scopeId}> Welcome Back </h1><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Sign in to your account to continue </p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, " Welcome Back "),
                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Sign in to your account to continue ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(state),
              schema: unref(schema),
              class: "space-y-4",
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Email",
                    name: "email",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).email,
                          "onUpdate:modelValue": ($event) => unref(state).email = $event,
                          type: "email",
                          placeholder: "you@example.com",
                          size: "lg",
                          icon: "i-lucide-mail"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).email,
                            "onUpdate:modelValue": ($event) => unref(state).email = $event,
                            type: "email",
                            placeholder: "you@example.com",
                            size: "lg",
                            icon: "i-lucide-mail"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Password",
                    name: "password",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).password,
                          "onUpdate:modelValue": ($event) => unref(state).password = $event,
                          type: "password",
                          placeholder: "••••••••",
                          size: "lg",
                          icon: "i-lucide-lock"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).password,
                            "onUpdate:modelValue": ($event) => unref(state).password = $event,
                            type: "password",
                            placeholder: "••••••••",
                            size: "lg",
                            icon: "i-lucide-lock"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: unref(state).remember,
                    "onUpdate:modelValue": ($event) => unref(state).remember = $event,
                    label: "Remember me"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/auth/forgot-password",
                    class: "text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Forgot password? `);
                      } else {
                        return [
                          createTextVNode(" Forgot password? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    block: "",
                    size: "lg",
                    color: "primary",
                    loading: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sign In `);
                      } else {
                        return [
                          createTextVNode(" Sign In ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormGroup, {
                      label: "Email",
                      name: "email",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).email,
                          "onUpdate:modelValue": ($event) => unref(state).email = $event,
                          type: "email",
                          placeholder: "you@example.com",
                          size: "lg",
                          icon: "i-lucide-mail"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Password",
                      name: "password",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).password,
                          "onUpdate:modelValue": ($event) => unref(state).password = $event,
                          type: "password",
                          placeholder: "••••••••",
                          size: "lg",
                          icon: "i-lucide-lock"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(state).remember,
                        "onUpdate:modelValue": ($event) => unref(state).remember = $event,
                        label: "Remember me"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_NuxtLink, {
                        to: "/auth/forgot-password",
                        class: "text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Forgot password? ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UButton, {
                      type: "submit",
                      block: "",
                      size: "lg",
                      color: "primary",
                      loading: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign In ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 text-center"${_scopeId}><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Don&#39;t have an account? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/auth/signup",
              class: "text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign up `);
                } else {
                  return [
                    createTextVNode(" Sign up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
            if (unref(error)) {
              _push2(ssrRenderComponent(_component_UAlert, {
                color: "red",
                variant: "soft",
                title: unref(error),
                class: "mt-4"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_UForm, {
                state: unref(state),
                schema: unref(schema),
                class: "space-y-4",
                onSubmit
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormGroup, {
                    label: "Email",
                    name: "email",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).email,
                        "onUpdate:modelValue": ($event) => unref(state).email = $event,
                        type: "email",
                        placeholder: "you@example.com",
                        size: "lg",
                        icon: "i-lucide-mail"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormGroup, {
                    label: "Password",
                    name: "password",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).password,
                        "onUpdate:modelValue": ($event) => unref(state).password = $event,
                        type: "password",
                        placeholder: "••••••••",
                        size: "lg",
                        icon: "i-lucide-lock"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: unref(state).remember,
                      "onUpdate:modelValue": ($event) => unref(state).remember = $event,
                      label: "Remember me"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_NuxtLink, {
                      to: "/auth/forgot-password",
                      class: "text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Forgot password? ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UButton, {
                    type: "submit",
                    block: "",
                    size: "lg",
                    color: "primary",
                    loading: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign In ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["state", "schema"]),
              createVNode("div", { class: "mt-6 text-center" }, [
                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, [
                  createTextVNode(" Don't have an account? "),
                  createVNode(_component_NuxtLink, {
                    to: "/auth/signup",
                    class: "text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign up ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              unref(error) ? (openBlock(), createBlock(_component_UAlert, {
                key: 0,
                color: "red",
                variant: "soft",
                title: unref(error),
                class: "mt-4"
              }, null, 8, ["title"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DegJ4IGc.mjs.map
