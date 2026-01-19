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

const signup_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, password } = body;
  if (name && email && password) {
    return {
      user: {
        id: "1",
        name,
        email,
        avatar: ""
      },
      token: "mock-jwt-token-" + Date.now()
    };
  }
  throw createError({
    statusCode: 400,
    message: "Invalid signup data"
  });
});

export { signup_post as default };
//# sourceMappingURL=signup.post.mjs.map
