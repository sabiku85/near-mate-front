import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (email && password) {
    return {
      user: {
        id: "1",
        name: "John Doe",
        email,
        avatar: ""
      },
      token: "mock-jwt-token-" + Date.now()
    };
  }
  throw createError({
    statusCode: 401,
    message: "Invalid credentials"
  });
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
