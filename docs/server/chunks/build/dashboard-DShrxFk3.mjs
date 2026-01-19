import { _ as __nuxt_component_0 } from './AppHeader-BD5QWH2x.mjs';
import { C as useRoute, _ as __nuxt_component_0$1, d as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const navigationItems = [
      { to: "/dashboard", label: "Dashboard", icon: "lucide:layout-dashboard" },
      { to: "/dashboard/analytics", label: "Analytics", icon: "lucide:bar-chart" },
      { to: "/dashboard/projects", label: "Projects", icon: "lucide:folder" },
      { to: "/dashboard/team", label: "Team", icon: "lucide:users" },
      { to: "/dashboard/settings", label: "Settings", icon: "lucide:settings" }
    ];
    const isActive = (path) => {
      if (path === "/dashboard") {
        return route.path === "/dashboard";
      }
      return route.path.startsWith(path);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-4rem)] sticky top-16" }, _attrs))}><nav class="p-4 space-y-1"><!--[-->`);
      ssrRenderList(navigationItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: ["flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200", isActive(item.to) ? "bg-blue-50 text-fuchsia-600 dark:bg-fuchsia-900/20 dark:text-fuchsia-400 font-semibold shadow-sm" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "w-5 h-5 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-medium"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: item.icon,
                  class: "w-5 h-5 flex-shrink-0"
                }, null, 8, ["name"]),
                createVNode("span", { class: "font-medium" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "AppSidebar" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const showSidebar = computed(() => {
      return !route.path.startsWith("/auth");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppSidebar = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex">`);
      if (unref(showSidebar)) {
        _push(ssrRenderComponent(_component_AppSidebar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="flex-1 p-6 max-w-7xl mx-auto w-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-DShrxFk3.mjs.map
