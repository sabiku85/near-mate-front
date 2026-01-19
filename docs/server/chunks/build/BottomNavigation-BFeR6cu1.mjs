import { C as useRoute, _ as __nuxt_component_0$1, d as __nuxt_component_1$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './Badge-Dc66ggRY.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BottomNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const navItems = [
      { to: "/", label: "Home", icon: "lucide:home" },
      { to: "/szukaj", label: "Szukaj", icon: "lucide:search" },
      { to: "/aktywnosci", label: "Aktywności", icon: "lucide:calendar" },
      { to: "/wiadomosci", label: "Wiadomości", icon: "lucide:message-circle", badge: null },
      { to: "/profil", label: "Profil", icon: "lucide:user" }
    ];
    const isActive = (path) => {
      if (path === "/") {
        return route.path === "/";
      }
      return route.path.startsWith(path);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      const _component_UBadge = _sfc_main$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50" }, _attrs))}><div class="flex justify-around items-center h-20 py-2"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: ["flex flex-col items-center justify-center flex-1 h-full transition-colors rounded-lg", isActive(item.to) ? "text-slate-200 bg-slate-800 dark:text-slate-800 dark:bg-slate-200" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              if (item.badge) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  value: item.badge,
                  color: "error",
                  size: "xs",
                  class: "absolute -top-2 -right-2"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><span class="text-xs mt-1 font-medium"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode("div", { class: "relative" }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "w-6 h-6"
                  }, null, 8, ["name"]),
                  item.badge ? (openBlock(), createBlock(_component_UBadge, {
                    key: 0,
                    value: item.badge,
                    color: "error",
                    size: "xs",
                    class: "absolute -top-2 -right-2"
                  }, null, 8, ["value"])) : createCommentVNode("", true)
                ]),
                createVNode("span", { class: "text-xs mt-1 font-medium" }, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BottomNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "BottomNavigation" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=BottomNavigation-BFeR6cu1.mjs.map
