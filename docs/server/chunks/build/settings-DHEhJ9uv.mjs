import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { _ as _sfc_main$2 } from './Input-Dz3KWK_v.mjs';
import { a as _sfc_main$9 } from './server.mjs';
import { _ as _sfc_main$3 } from './Modal-Br2hsqbk.mjs';
import { defineComponent, reactive, ref, resolveComponent, withCtx, unref, createVNode, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const settings = reactive({
      emailNotifications: true,
      pushNotifications: false,
      marketingEmails: false
    });
    const passwordForm = reactive({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const passwordLoading = ref(false);
    const showDeleteModal = ref(false);
    const updatePassword = async () => {
      passwordLoading.value = true;
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      passwordLoading.value = false;
    };
    const deleteAccount = async () => {
      showDeleteModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UToggle = resolveComponent("UToggle");
      const _component_UInput = _sfc_main$2;
      const _component_UButton = _sfc_main$9;
      const _component_UModal = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> Settings </h1><p class="text-gray-600 dark:text-gray-400 mt-2"> Manage your account settings and preferences </p></div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Account Settings</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Account Settings")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Email Notifications",
              name: "emailNotifications"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UToggle, {
                    modelValue: unref(settings).emailNotifications,
                    "onUpdate:modelValue": ($event) => unref(settings).emailNotifications = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UToggle, {
                      modelValue: unref(settings).emailNotifications,
                      "onUpdate:modelValue": ($event) => unref(settings).emailNotifications = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Push Notifications",
              name: "pushNotifications"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UToggle, {
                    modelValue: unref(settings).pushNotifications,
                    "onUpdate:modelValue": ($event) => unref(settings).pushNotifications = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UToggle, {
                      modelValue: unref(settings).pushNotifications,
                      "onUpdate:modelValue": ($event) => unref(settings).pushNotifications = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Marketing Emails",
              name: "marketingEmails"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UToggle, {
                    modelValue: unref(settings).marketingEmails,
                    "onUpdate:modelValue": ($event) => unref(settings).marketingEmails = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UToggle, {
                      modelValue: unref(settings).marketingEmails,
                      "onUpdate:modelValue": ($event) => unref(settings).marketingEmails = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_UFormGroup, {
                  label: "Email Notifications",
                  name: "emailNotifications"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UToggle, {
                      modelValue: unref(settings).emailNotifications,
                      "onUpdate:modelValue": ($event) => unref(settings).emailNotifications = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "Push Notifications",
                  name: "pushNotifications"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UToggle, {
                      modelValue: unref(settings).pushNotifications,
                      "onUpdate:modelValue": ($event) => unref(settings).pushNotifications = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "Marketing Emails",
                  name: "marketingEmails"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UToggle, {
                      modelValue: unref(settings).marketingEmails,
                      "onUpdate:modelValue": ($event) => unref(settings).marketingEmails = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Security</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Security")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Current Password",
              name: "currentPassword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(passwordForm).currentPassword,
                    "onUpdate:modelValue": ($event) => unref(passwordForm).currentPassword = $event,
                    type: "password",
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(passwordForm).currentPassword,
                      "onUpdate:modelValue": ($event) => unref(passwordForm).currentPassword = $event,
                      type: "password",
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "New Password",
              name: "newPassword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(passwordForm).newPassword,
                    "onUpdate:modelValue": ($event) => unref(passwordForm).newPassword = $event,
                    type: "password",
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(passwordForm).newPassword,
                      "onUpdate:modelValue": ($event) => unref(passwordForm).newPassword = $event,
                      type: "password",
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Confirm New Password",
              name: "confirmPassword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(passwordForm).confirmPassword,
                    "onUpdate:modelValue": ($event) => unref(passwordForm).confirmPassword = $event,
                    type: "password",
                    size: "lg"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(passwordForm).confirmPassword,
                      "onUpdate:modelValue": ($event) => unref(passwordForm).confirmPassword = $event,
                      type: "password",
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: unref(passwordLoading),
              onClick: updatePassword
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update Password `);
                } else {
                  return [
                    createTextVNode(" Update Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_UFormGroup, {
                  label: "Current Password",
                  name: "currentPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(passwordForm).currentPassword,
                      "onUpdate:modelValue": ($event) => unref(passwordForm).currentPassword = $event,
                      type: "password",
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "New Password",
                  name: "newPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(passwordForm).newPassword,
                      "onUpdate:modelValue": ($event) => unref(passwordForm).newPassword = $event,
                      type: "password",
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, {
                  label: "Confirm New Password",
                  name: "confirmPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: unref(passwordForm).confirmPassword,
                      "onUpdate:modelValue": ($event) => unref(passwordForm).confirmPassword = $event,
                      type: "password",
                      size: "lg"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UButton, {
                  color: "primary",
                  loading: unref(passwordLoading),
                  onClick: updatePassword
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Update Password ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Danger Zone</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Danger Zone")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"${_scopeId}><div${_scopeId}><h3 class="font-semibold text-red-900 dark:text-red-400"${_scopeId}> Delete Account </h3><p class="text-sm text-red-700 dark:text-red-300"${_scopeId}> Once you delete your account, there is no going back. Please be certain. </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "red",
              variant: "soft",
              onClick: ($event) => showDeleteModal.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "font-semibold text-red-900 dark:text-red-400" }, " Delete Account "),
                    createVNode("p", { class: "text-sm text-red-700 dark:text-red-300" }, " Once you delete your account, there is no going back. Please be certain. ")
                  ]),
                  createVNode(_component_UButton, {
                    color: "red",
                    variant: "soft",
                    onClick: ($event) => showDeleteModal.value = true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(showDeleteModal),
        "onUpdate:modelValue": ($event) => isRef(showDeleteModal) ? showDeleteModal.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-lg font-semibold"${_scopeId2}>Delete Account</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Delete Account")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-4"${_scopeId2}> Are you sure you want to delete your account? This action cannot be undone. </p><div class="flex justify-end space-x-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    onClick: ($event) => showDeleteModal.value = false
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
                    color: "red",
                    onClick: deleteAccount
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete Account `);
                      } else {
                        return [
                          createTextVNode(" Delete Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("p", { class: "mb-4" }, " Are you sure you want to delete your account? This action cannot be undone. "),
                    createVNode("div", { class: "flex justify-end space-x-3" }, [
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        onClick: ($event) => showDeleteModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        color: "red",
                        onClick: deleteAccount
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Delete Account ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("h3", { class: "text-lg font-semibold" }, "Delete Account")
                ]),
                default: withCtx(() => [
                  createVNode("p", { class: "mb-4" }, " Are you sure you want to delete your account? This action cannot be undone. "),
                  createVNode("div", { class: "flex justify-end space-x-3" }, [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      onClick: ($event) => showDeleteModal.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "red",
                      onClick: deleteAccount
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Delete Account ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-DHEhJ9uv.mjs.map
