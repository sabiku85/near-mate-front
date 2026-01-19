import { _ as _sfc_main$1 } from './Card-CHiw-Xxq.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6"><h1 class="text-3xl font-bold text-gray-900 dark:text-white"> Analytics </h1><p class="text-gray-600 dark:text-gray-400 mt-2"> View your performance metrics and insights </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Performance Overview</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Performance Overview")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-64 flex items-center justify-center text-gray-400"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:bar-chart",
              class: "w-16 h-16 mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Chart visualization will be here</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-64 flex items-center justify-center text-gray-400" }, [
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:bar-chart",
                    class: "w-16 h-16 mx-auto mb-4"
                  }),
                  createVNode("p", null, "Chart visualization will be here")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Recent Trends</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Recent Trends")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-64 flex items-center justify-center text-gray-400"${_scopeId}><div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "w-16 h-16 mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Trend chart will be here</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "h-64 flex items-center justify-center text-gray-400" }, [
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:trending-up",
                    class: "w-16 h-16 mx-auto mb-4"
                  }),
                  createVNode("p", null, "Trend chart will be here")
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=analytics-CA9bakZ6.mjs.map
