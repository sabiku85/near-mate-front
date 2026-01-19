import { _ as __nuxt_component_0 } from './AppHeader-BD5QWH2x.mjs';
import { _ as _sfc_main$1 } from './Input-Dz3KWK_v.mjs';
import { c as _sfc_main$c, a as _sfc_main$9 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const newMessage = ref("");
    const chatPartner = {
      name: "SM Sylwia Markowska"
    };
    const messages = [
      {
        id: 1,
        text: "Cześć, jesteś już?",
        time: "14:15",
        sent: true
      },
      {
        id: 2,
        text: "Daj mi jeszcze kilka minut na dojazd, zaraz będę.",
        time: "14:16",
        sent: true
      },
      {
        id: 3,
        text: "Czekam na Ciebie przed wejściem :)",
        time: "14:18",
        sent: false
      }
    ];
    const sendMessage = () => {
      if (newMessage.value.trim()) {
        messages.push({
          id: messages.length + 1,
          text: newMessage.value,
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" }),
          sent: true
        });
        newMessage.value = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_UInput = _sfc_main$1;
      const _component_UAvatar = _sfc_main$c;
      const _component_UButton = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto flex flex-col h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, { "show-back": true }, null, _parent));
      _push(`<div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(searchQuery),
        "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
        placeholder: "Szukaj w rozmowie",
        icon: "i-lucide-search",
        size: "sm"
      }, null, _parent));
      _push(`</div><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"><div class="flex items-center space-x-3">`);
      _push(ssrRenderComponent(_component_UAvatar, {
        alt: chatPartner.name,
        size: "md"
      }, null, _parent));
      _push(`<div><h3 class="font-semibold text-gray-900 dark:text-white">${ssrInterpolate(chatPartner.name)}</h3><p class="text-xs text-green-600 dark:text-green-400"> Online </p></div></div></div><div class="flex-1 overflow-y-auto px-4 py-4 space-y-4"><!--[-->`);
      ssrRenderList(messages, (message) => {
        _push(`<div class="${ssrRenderClass([message.sent ? "justify-end" : "justify-start", "flex"])}"><div class="${ssrRenderClass([message.sent ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white", "max-w-[80%] rounded-lg px-4 py-2"])}"><p class="text-sm">${ssrInterpolate(message.text)}</p><p class="${ssrRenderClass([message.sent ? "text-blue-100" : "text-gray-500 dark:text-gray-400", "text-xs mt-1"])}">${ssrInterpolate(message.time)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(newMessage),
        "onUpdate:modelValue": ($event) => isRef(newMessage) ? newMessage.value = $event : null,
        placeholder: "Napisz wiadomość...",
        size: "lg",
        class: "flex-1",
        onKeyup: sendMessage
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "i-lucide-send",
        size: "lg",
        disabled: !unref(newMessage).trim(),
        onClick: sendMessage
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wiadomosci/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BLd41ohl.mjs.map
