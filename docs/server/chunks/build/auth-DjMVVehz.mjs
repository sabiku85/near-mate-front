import { y as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useAuth } from './useAuth-Vs_7XGAs.mjs';
import 'vue';
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
import 'vue/server-renderer';
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

const auth = defineNuxtRouteMiddleware((to, _from) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated.value && to.path.startsWith("/dashboard")) {
    return navigateTo("/auth/login");
  }
  if (isAuthenticated.value && to.path.startsWith("/auth")) {
    return navigateTo("/dashboard");
  }
});

export { auth as default };
//# sourceMappingURL=auth-DjMVVehz.mjs.map
