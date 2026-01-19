import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { a as _sfc_main$9, b as _sfc_main$e, _ as __nuxt_component_0$1, c as _sfc_main$c } from './server.mjs';
import { _ as _sfc_main$2 } from './Badge-Dc66ggRY.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
    const upcomingActivities = [
      {
        id: 1,
        title: "Weekend Planszówek",
        date: "Jutro",
        time: "9:00",
        location: 'Kawiarnia "Pożegnanie z Afryką"',
        participants: "6 osób",
        status: "confirmed"
      },
      {
        id: 2,
        title: "Wspólny wypad na siłownię",
        date: "Niedziela 21.08.2025",
        time: "14:00",
        location: "Siłownia Olimpia",
        participants: "4 osoby",
        status: "pending"
      }
    ];
    const newInvitations = [
      {
        id: 1,
        name: "Aleksandra Jarr",
        mutualFriends: "3 wspólnych znajomych",
        interests: ["Fotografia", "Podróżowanie"]
      },
      {
        id: 2,
        name: "Paulina Kowalska",
        mutualFriends: "10 wspólnych znajomych",
        interests: ["Gotowanie", "Książki"]
      }
    ];
    const suggestedActivities = [
      {
        id: 1,
        title: "Nocne fotografowanie",
        spots: "3 wolne miejsca",
        date: "14.05.2025",
        location: "Park przy zoo"
      },
      {
        id: 2,
        title: "Partyjka squasha",
        spots: "1 wolne miejsce",
        date: "13.09.2025",
        location: "Squash AGHS"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_UButton = _sfc_main$9;
      const _component_UIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UBadge = _sfc_main$2;
      const _component_UAvatar = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto px-4 py-6 space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, {
        as: "section",
        class: "bg-radial-[at_90%_40%] from-white to-zinc-200 to-85%"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="py-3 sm:py-6 text-lg font-semibold"${_scopeId}> Dzień dobry, Karolina! 👋 </h1><p class="text-sm"${_scopeId}>Jesteś gotowa na nowe znajomości?</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Szukaj nowych znajomych",
              to: "/szukaj",
              class: "w-full justify-center mt-2 mb-3 sm:mt-4 sm:mb-6 font-normal"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "py-3 sm:py-6 text-lg font-semibold" }, " Dzień dobry, Karolina! 👋 "),
              createVNode("p", { class: "text-sm" }, "Jesteś gotowa na nowe znajomości?"),
              createVNode(_component_UButton, {
                label: "Szukaj nowych znajomych",
                to: "/szukaj",
                class: "w-full justify-center mt-2 mb-3 sm:mt-4 sm:mb-6 font-normal"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, {
        as: "section",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between mb-3"${_scopeId}><h2 class="flex items-center text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "lucide:calendar",
              class: "w-5 h-5 mr-2"
            }, null, _parent2, _scopeId));
            _push2(` Nadchodzące aktywności </h2>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/aktywnosci",
              class: "text-sm text-slate-600 dark:text-slate-400 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Zobacz `);
                } else {
                  return [
                    createTextVNode(" Zobacz ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(upcomingActivities, (activity) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: activity.id,
                class: "hover:shadow-md transition-shadow"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-start justify-between"${_scopeId2}><div class="flex-1"${_scopeId2}><div class="flex items-center justify-between space-x-2 mb-2"${_scopeId2}><h3 class="font-semibold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(activity.title)}</h3>`);
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: activity.status === "confirmed" ? "success" : "primary",
                      size: "xs"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(activity.status === "confirmed" ? "potwierdzono" : "oczekuje")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(activity.status === "confirmed" ? "potwierdzono" : "oczekuje"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><p class="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "lucide:calendar",
                      class: "w-4 h-4 mr-1"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(activity.date)}, ${ssrInterpolate(activity.time)}</p><p class="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "lucide:map-pin",
                      class: "w-4 h-4 mr-1"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(activity.location)}</p><p class="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-500"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "lucide:users",
                      class: "w-4 h-4 mr-1"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(activity.participants)}</p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-start justify-between" }, [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("div", { class: "flex items-center justify-between space-x-2 mb-2" }, [
                            createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white" }, toDisplayString(activity.title), 1),
                            createVNode(_component_UBadge, {
                              color: activity.status === "confirmed" ? "success" : "primary",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(activity.status === "confirmed" ? "potwierdzono" : "oczekuje"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("p", { class: "flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1" }, [
                            createVNode(_component_UIcon, {
                              name: "lucide:calendar",
                              class: "w-4 h-4 mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(activity.date) + ", " + toDisplayString(activity.time), 1)
                          ]),
                          createVNode("p", { class: "flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1" }, [
                            createVNode(_component_UIcon, {
                              name: "lucide:map-pin",
                              class: "w-4 h-4 mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(activity.location), 1)
                          ]),
                          createVNode("p", { class: "flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-500" }, [
                            createVNode(_component_UIcon, {
                              name: "lucide:users",
                              class: "w-4 h-4 mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(activity.participants), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                createVNode("h2", { class: "flex items-center text-lg font-semibold text-gray-900 dark:text-white" }, [
                  createVNode(_component_UIcon, {
                    name: "lucide:calendar",
                    class: "w-5 h-5 mr-2"
                  }),
                  createTextVNode(" Nadchodzące aktywności ")
                ]),
                createVNode(_component_NuxtLink, {
                  to: "/aktywnosci",
                  class: "text-sm text-slate-600 dark:text-slate-400 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Zobacz ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "space-y-3" }, [
                (openBlock(), createBlock(Fragment, null, renderList(upcomingActivities, (activity) => {
                  return createVNode(_component_UCard, {
                    key: activity.id,
                    class: "hover:shadow-md transition-shadow"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-start justify-between" }, [
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("div", { class: "flex items-center justify-between space-x-2 mb-2" }, [
                            createVNode("h3", { class: "font-semibold text-gray-900 dark:text-white" }, toDisplayString(activity.title), 1),
                            createVNode(_component_UBadge, {
                              color: activity.status === "confirmed" ? "success" : "primary",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(activity.status === "confirmed" ? "potwierdzono" : "oczekuje"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("p", { class: "flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1" }, [
                            createVNode(_component_UIcon, {
                              name: "lucide:calendar",
                              class: "w-4 h-4 mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(activity.date) + ", " + toDisplayString(activity.time), 1)
                          ]),
                          createVNode("p", { class: "flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1" }, [
                            createVNode(_component_UIcon, {
                              name: "lucide:map-pin",
                              class: "w-4 h-4 mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(activity.location), 1)
                          ]),
                          createVNode("p", { class: "flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-500" }, [
                            createVNode(_component_UIcon, {
                              name: "lucide:users",
                              class: "w-4 h-4 mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(activity.participants), 1)
                          ])
                        ])
                      ])
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
      _push(ssrRenderComponent(_component_UCard, {
        as: "section",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between mb-3"${_scopeId}><h2 class="font-semibold text-gray-900 dark:text-white"${_scopeId}> Nowe zaproszenia </h2>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/wiadomosci?tab=zaproszenia",
              class: "text-sm text-slate-600 dark:text-slate-400 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Zobacz wszystko `);
                } else {
                  return [
                    createTextVNode(" Zobacz wszystko ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(newInvitations, (invitation) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: invitation.id,
                class: "hover:shadow-md transition-shadow"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-start space-x-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UAvatar, {
                      alt: invitation.name,
                      size: "md",
                      class: "shrink-0"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="flex-1"${_scopeId2}><h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1"${_scopeId2}>${ssrInterpolate(invitation.name)}</h3><p class="text-sm text-gray-600 dark:text-gray-400 mb-2"${_scopeId2}>${ssrInterpolate(invitation.mutualFriends)}</p><div class="flex flex-wrap gap-2 mb-3"${_scopeId2}><!--[-->`);
                    ssrRenderList(invitation.interests, (interest) => {
                      _push3(ssrRenderComponent(_component_UBadge, {
                        key: interest,
                        color: "neutral",
                        variant: "outline",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(interest)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(interest), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div><div class="flex space-x-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "error",
                      variant: "outline",
                      size: "sm",
                      block: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Odrzuć `);
                        } else {
                          return [
                            createTextVNode(" Odrzuć ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "primary",
                      size: "sm",
                      block: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Akceptuj `);
                        } else {
                          return [
                            createTextVNode(" Akceptuj ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-start space-x-3" }, [
                        createVNode(_component_UAvatar, {
                          alt: invitation.name,
                          size: "md",
                          class: "shrink-0"
                        }, null, 8, ["alt"]),
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-1" }, toDisplayString(invitation.name), 1),
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, toDisplayString(invitation.mutualFriends), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2 mb-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(invitation.interests, (interest) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: interest,
                                color: "neutral",
                                variant: "outline",
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(interest), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex space-x-2" }, [
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "outline",
                              size: "sm",
                              block: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Odrzuć ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UButton, {
                              color: "primary",
                              size: "sm",
                              block: ""
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                createVNode("h2", { class: "font-semibold text-gray-900 dark:text-white" }, " Nowe zaproszenia "),
                createVNode(_component_NuxtLink, {
                  to: "/wiadomosci?tab=zaproszenia",
                  class: "text-sm text-slate-600 dark:text-slate-400 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Zobacz wszystko ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "space-y-3" }, [
                (openBlock(), createBlock(Fragment, null, renderList(newInvitations, (invitation) => {
                  return createVNode(_component_UCard, {
                    key: invitation.id,
                    class: "hover:shadow-md transition-shadow"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-start space-x-3" }, [
                        createVNode(_component_UAvatar, {
                          alt: invitation.name,
                          size: "md",
                          class: "shrink-0"
                        }, null, 8, ["alt"]),
                        createVNode("div", { class: "flex-1" }, [
                          createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white mb-1" }, toDisplayString(invitation.name), 1),
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, toDisplayString(invitation.mutualFriends), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2 mb-3" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(invitation.interests, (interest) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: interest,
                                color: "neutral",
                                variant: "outline",
                                size: "sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(interest), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex space-x-2" }, [
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "outline",
                              size: "sm",
                              block: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Odrzuć ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UButton, {
                              color: "primary",
                              size: "sm",
                              block: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Akceptuj ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
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
      _push(ssrRenderComponent(_component_UCard, {
        as: "section",
        class: "mt-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-gray-900 dark:text-white mb-3"${_scopeId}> Aktywności proponowane dla Ciebie </h2><div class="space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(suggestedActivities, (activity) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: activity.id,
                class: "hover:shadow-md transition-shadow"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}><h3 class="flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-white mb-2"${_scopeId2}>${ssrInterpolate(activity.title)} `);
                    _push3(ssrRenderComponent(_component_UBadge, {
                      size: "sm",
                      variant: "outline",
                      color: "neutral"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(activity.spots)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(activity.spots), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h3><div class="space-y-1 mb-3"${_scopeId2}><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(activity.date)}</p><p class="text-sm text-gray-600 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(activity.location)}</p></div>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "primary",
                      size: "sm",
                      block: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Dołącz do aktywności `);
                        } else {
                          return [
                            createTextVNode(" Dołącz do aktywności ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("h3", { class: "flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-white mb-2" }, [
                          createTextVNode(toDisplayString(activity.title) + " ", 1),
                          createVNode(_component_UBadge, {
                            size: "sm",
                            variant: "outline",
                            color: "neutral"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(activity.spots), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "space-y-1 mb-3" }, [
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(activity.date), 1),
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(activity.location), 1)
                        ]),
                        createVNode(_component_UButton, {
                          color: "primary",
                          size: "sm",
                          block: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Dołącz do aktywności ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-gray-900 dark:text-white mb-3" }, " Aktywności proponowane dla Ciebie "),
              createVNode("div", { class: "space-y-3" }, [
                (openBlock(), createBlock(Fragment, null, renderList(suggestedActivities, (activity) => {
                  return createVNode(_component_UCard, {
                    key: activity.id,
                    class: "hover:shadow-md transition-shadow"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("h3", { class: "flex items-center justify-between text-sm font-semibold text-gray-900 dark:text-white mb-2" }, [
                          createTextVNode(toDisplayString(activity.title) + " ", 1),
                          createVNode(_component_UBadge, {
                            size: "sm",
                            variant: "outline",
                            color: "neutral"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(activity.spots), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "space-y-1 mb-3" }, [
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(activity.date), 1),
                          createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(activity.location), 1)
                        ]),
                        createVNode(_component_UButton, {
                          color: "primary",
                          size: "sm",
                          block: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Dołącz do aktywności ")
                          ]),
                          _: 1
                        })
                      ])
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D0wbnjD8.mjs.map
