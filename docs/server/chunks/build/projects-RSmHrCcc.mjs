import { a as _sfc_main$9, d as __nuxt_component_1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { _ as _sfc_main$2 } from './Badge-Dc66ggRY.mjs';
import { _ as _sfc_main$3 } from './Modal-Br2hsqbk.mjs';
import { _ as _sfc_main$4 } from './Form-aHvdyz-h.mjs';
import { _ as _sfc_main$5 } from './Input-Dz3KWK_v.mjs';
import { _ as _sfc_main$6 } from './Textarea-Bl9m6bBC.mjs';
import { defineComponent, ref, reactive, resolveComponent, withCtx, createVNode, createTextVNode, unref, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const showCreateModal = ref(false);
    const projectForm = reactive({
      name: "",
      description: ""
    });
    const projects = ref([
      {
        id: 1,
        name: "Project Alpha",
        description: "Main project description",
        status: "active",
        tasks: 5,
        dueDate: "2024-12-31"
      },
      {
        id: 2,
        name: "Project Beta",
        description: "Secondary project",
        status: "active",
        tasks: 3,
        dueDate: "2024-12-15"
      },
      {
        id: 3,
        name: "Project Gamma",
        description: "Completed project",
        status: "completed",
        tasks: 8,
        dueDate: "2024-11-30"
      }
    ]);
    const createProject = async () => {
      showCreateModal.value = false;
      projectForm.name = "";
      projectForm.description = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$9;
      const _component_Icon = __nuxt_component_1;
      const _component_UCard = _sfc_main$1;
      const _component_UBadge = _sfc_main$2;
      const _component_UModal = _sfc_main$3;
      const _component_UForm = _sfc_main$4;
      const _component_UFormGroup = resolveComponent("UFormGroup");
      const _component_UInput = _sfc_main$5;
      const _component_UTextarea = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex justify-between items-center"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> Projects </h1><p class="text-gray-600 dark:text-gray-400 mt-2"> Manage your projects and tasks </p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        size: "lg",
        onClick: ($event) => showCreateModal.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "w-5 h-5 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` New Project `);
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
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(ssrRenderComponent(_component_UCard, {
          key: project.id,
          class: "hover:shadow-lg transition-shadow cursor-pointer"
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><h3 class="text-lg font-semibold"${_scopeId}>${ssrInterpolate(project.name)}</h3>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: project.status === "active" ? "green" : "gray"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(project.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(project.status), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(project.name), 1),
                  createVNode(_component_UBadge, {
                    color: project.status === "active" ? "green" : "gray"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(project.status), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-gray-600 dark:text-gray-400 mb-4"${_scopeId}>${ssrInterpolate(project.description)}</p><div class="flex items-center justify-between text-sm text-gray-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(project.tasks)} tasks</span><span${_scopeId}>${ssrInterpolate(project.dueDate)}</span></div>`);
            } else {
              return [
                createVNode("p", { class: "text-gray-600 dark:text-gray-400 mb-4" }, toDisplayString(project.description), 1),
                createVNode("div", { class: "flex items-center justify-between text-sm text-gray-500" }, [
                  createVNode("span", null, toDisplayString(project.tasks) + " tasks", 1),
                  createVNode("span", null, toDisplayString(project.dueDate), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(showCreateModal),
        "onUpdate:modelValue": ($event) => isRef(showCreateModal) ? showCreateModal.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-lg font-semibold"${_scopeId2}>Create New Project</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Create New Project")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    state: unref(projectForm),
                    class: "space-y-4",
                    onSubmit: createProject
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Project Name",
                          name: "name",
                          required: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(projectForm).name,
                                "onUpdate:modelValue": ($event) => unref(projectForm).name = $event,
                                size: "lg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(projectForm).name,
                                  "onUpdate:modelValue": ($event) => unref(projectForm).name = $event,
                                  size: "lg"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Description",
                          name: "description"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UTextarea, {
                                modelValue: unref(projectForm).description,
                                "onUpdate:modelValue": ($event) => unref(projectForm).description = $event,
                                rows: 3
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UTextarea, {
                                  modelValue: unref(projectForm).description,
                                  "onUpdate:modelValue": ($event) => unref(projectForm).description = $event,
                                  rows: 3
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex justify-end space-x-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          color: "gray",
                          variant: "ghost",
                          onClick: ($event) => showCreateModal.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          color: "primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Create `);
                            } else {
                              return [
                                createTextVNode(" Create ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            label: "Project Name",
                            name: "name",
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(projectForm).name,
                                "onUpdate:modelValue": ($event) => unref(projectForm).name = $event,
                                size: "lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Description",
                            name: "description"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(projectForm).description,
                                "onUpdate:modelValue": ($event) => unref(projectForm).description = $event,
                                rows: 3
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex justify-end space-x-3" }, [
                            createVNode(_component_UButton, {
                              color: "gray",
                              variant: "ghost",
                              onClick: ($event) => showCreateModal.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              type: "submit",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Create ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      state: unref(projectForm),
                      class: "space-y-4",
                      onSubmit: createProject
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          label: "Project Name",
                          name: "name",
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(projectForm).name,
                              "onUpdate:modelValue": ($event) => unref(projectForm).name = $event,
                              size: "lg"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Description",
                          name: "description"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UTextarea, {
                              modelValue: unref(projectForm).description,
                              "onUpdate:modelValue": ($event) => unref(projectForm).description = $event,
                              rows: 3
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex justify-end space-x-3" }, [
                          createVNode(_component_UButton, {
                            color: "gray",
                            variant: "ghost",
                            onClick: ($event) => showCreateModal.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            type: "submit",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Create ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["state"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("h3", { class: "text-lg font-semibold" }, "Create New Project")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    state: unref(projectForm),
                    class: "space-y-4",
                    onSubmit: createProject
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        label: "Project Name",
                        name: "name",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(projectForm).name,
                            "onUpdate:modelValue": ($event) => unref(projectForm).name = $event,
                            size: "lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Description",
                        name: "description"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            modelValue: unref(projectForm).description,
                            "onUpdate:modelValue": ($event) => unref(projectForm).description = $event,
                            rows: 3
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex justify-end space-x-3" }, [
                        createVNode(_component_UButton, {
                          color: "gray",
                          variant: "ghost",
                          onClick: ($event) => showCreateModal.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          type: "submit",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["state"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-RSmHrCcc.mjs.map
