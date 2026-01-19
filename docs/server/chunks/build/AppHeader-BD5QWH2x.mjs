import { a as _sfc_main$9 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    showEdit: { type: Boolean, default: false },
    showBack: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$9;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40" }, _attrs))}><div class="px-4 py-3"><div class="flex items-center justify-between"><div class="flex items-center space-x-2"><span class="text-lg font-semibold text-gray-900 dark:text-white">Logo | Nazwa aplikacji</span></div>`);
      if (__props.showEdit) {
        _push(ssrRenderComponent(_component_UButton, {
          variant: "ghost",
          size: "sm",
          icon: "i-lucide-edit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edytuj `);
            } else {
              return [
                createTextVNode(" Edytuj ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.showBack) {
        _push(ssrRenderComponent(_component_UButton, {
          variant: "ghost",
          size: "sm",
          icon: "i-lucide-arrow-left",
          onClick: ($event) => _ctx.$router.back()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Powrót `);
            } else {
              return [
                createTextVNode(" Powrót ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "AppHeader" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=AppHeader-BD5QWH2x.mjs.map
