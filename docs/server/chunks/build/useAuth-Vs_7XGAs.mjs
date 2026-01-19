import { B as useState, n as navigateTo, z as useNuxtApp, A as useRequestEvent } from './server.mjs';
import { computed, readonly, ref } from 'vue';
import { h as destr, m as klona, G as parse, H as getRequestHeader, x as isEqual, I as setCookie, J as getCookie, K as deleteCookie } from '../nitro/nitro.mjs';

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ??= (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? opts.default?.());
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies ||= {};
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useAuth = () => {
  const user = useState("user", () => null);
  const token = useState("token", () => null);
  const isAuthenticated = computed(() => !!token.value && !!user.value);
  const login = async (email, password) => {
    try {
      const response = await $fetch("/api/auth/login", {
        method: "POST",
        body: { email, password }
      });
      token.value = response.token;
      user.value = response.user;
      const tokenCookie = useCookie("auth-token", {
        maxAge: 60 * 60 * 24 * 7,
        // 7 days
        secure: true,
        sameSite: "strict"
      });
      tokenCookie.value = response.token;
      return { success: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed";
      return { success: false, error: message };
    }
  };
  const signup = async (name, email, password) => {
    try {
      const response = await $fetch("/api/auth/signup", {
        method: "POST",
        body: { name, email, password }
      });
      token.value = response.token;
      user.value = response.user;
      const tokenCookie = useCookie("auth-token", {
        maxAge: 60 * 60 * 24 * 7,
        secure: true,
        sameSite: "strict"
      });
      tokenCookie.value = response.token;
      return { success: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Signup failed";
      return { success: false, error: message };
    }
  };
  const logout = () => {
    user.value = null;
    token.value = null;
    const tokenCookie = useCookie("auth-token");
    tokenCookie.value = null;
    navigateTo("/auth/login");
  };
  const checkAuth = async () => {
    const tokenCookie = useCookie("auth-token");
    if (tokenCookie.value && !token.value) {
      token.value = tokenCookie.value;
    }
  };
  return {
    user: readonly(user),
    token: readonly(token),
    isAuthenticated,
    login,
    signup,
    logout,
    checkAuth
  };
};

export { useAuth as u };
//# sourceMappingURL=useAuth-Vs_7XGAs.mjs.map
