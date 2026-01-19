import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { _ as _sfc_main$2 } from './Form-aHvdyz-h.mjs';
import { _ as _sfc_main$3 } from './Input-Dz3KWK_v.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4 } from './Alert-Ct2psuhG.mjs';
import { a as _sfc_main$9, _ as __nuxt_component_0$1, n as navigateTo } from './server.mjs';
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
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const { signup } = useAuth();
    const loading = ref(false);
    const error = ref(null);
    const schema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string(),
      terms: z.boolean().refine((val) => val === true, "You must agree to the terms")
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"]
    });
    const state = reactive({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    });
    const onSubmit = async () => {
      loading.value = true;
      error.value = null;
      try {
        const result = await signup(state.name, state.email, state.password);
        if (result.success) {
          await navigateTo("/dashboard");
        } else {
          error.value = result.error || "Signup failed";
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
      const _component_UButton = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UAlert = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2"${_scopeId}> Create Account </h1><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Sign up to get started with Let&#39;s Go </p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("h1", { class: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, " Create Account "),
                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, " Sign up to get started with Let's Go ")
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
                    label: "Full Name",
                    name: "name",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).name,
                          "onUpdate:modelValue": ($event) => unref(state).name = $event,
                          type: "text",
                          placeholder: "John Doe",
                          size: "lg",
                          icon: "i-lucide-user"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).name,
                            "onUpdate:modelValue": ($event) => unref(state).name = $event,
                            type: "text",
                            placeholder: "John Doe",
                            size: "lg",
                            icon: "i-lucide-user"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Confirm Password",
                    name: "confirmPassword",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).confirmPassword,
                          "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                          type: "password",
                          placeholder: "••••••••",
                          size: "lg",
                          icon: "i-lucide-lock"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).confirmPassword,
                            "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
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
                  _push3(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: unref(state).terms,
                    "onUpdate:modelValue": ($event) => unref(state).terms = $event,
                    label: "I agree to the Terms and Conditions",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    block: "",
                    size: "lg",
                    color: "primary",
                    loading: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Create Account `);
                      } else {
                        return [
                          createTextVNode(" Create Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormGroup, {
                      label: "Full Name",
                      name: "name",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).name,
                          "onUpdate:modelValue": ($event) => unref(state).name = $event,
                          type: "text",
                          placeholder: "John Doe",
                          size: "lg",
                          icon: "i-lucide-user"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
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
                    createVNode(_component_UFormGroup, {
                      label: "Confirm Password",
                      name: "confirmPassword",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).confirmPassword,
                          "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                          type: "password",
                          placeholder: "••••••••",
                          size: "lg",
                          icon: "i-lucide-lock"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UCheckbox, {
                      modelValue: unref(state).terms,
                      "onUpdate:modelValue": ($event) => unref(state).terms = $event,
                      label: "I agree to the Terms and Conditions",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_UButton, {
                      type: "submit",
                      block: "",
                      size: "lg",
                      color: "primary",
                      loading: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create Account ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 text-center"${_scopeId}><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Already have an account? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/auth/login",
              class: "text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign in `);
                } else {
                  return [
                    createTextVNode(" Sign in ")
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
                    label: "Full Name",
                    name: "name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).name,
                        "onUpdate:modelValue": ($event) => unref(state).name = $event,
                        type: "text",
                        placeholder: "John Doe",
                        size: "lg",
                        icon: "i-lucide-user"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
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
                  createVNode(_component_UFormGroup, {
                    label: "Confirm Password",
                    name: "confirmPassword",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).confirmPassword,
                        "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                        type: "password",
                        placeholder: "••••••••",
                        size: "lg",
                        icon: "i-lucide-lock"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UCheckbox, {
                    modelValue: unref(state).terms,
                    "onUpdate:modelValue": ($event) => unref(state).terms = $event,
                    label: "I agree to the Terms and Conditions",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UButton, {
                    type: "submit",
                    block: "",
                    size: "lg",
                    color: "primary",
                    loading: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Create Account ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["state", "schema"]),
              createVNode("div", { class: "mt-6 text-center" }, [
                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, [
                  createTextVNode(" Already have an account? "),
                  createVNode(_component_NuxtLink, {
                    to: "/auth/login",
                    class: "text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign in ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signup-BW3FTJt2.mjs.map
