import { Context } from "hono";
import { verify } from "hono/jwt";

import { jwtSecret } from "../constant/variable";

export const authMiddleware = async (c: Context, next: Function) => {
  try {
    const authorization = c.req.header("Authorization");
    const token = authorization?.split(" ")[1];

    if (!token) {
      throw new Error("Unauthorized");
    }

    const decodedPayload = await verify(token, jwtSecret);

    console.log(decodedPayload);

    if (!decodedPayload) {
      throw new Error("Invalid token");
    }

    if (decodedPayload.exp && decodedPayload.exp < Date.now() / 1000) {
      throw new Error("Token expired");
    }


    await next();
  } catch (error) {
    if (error instanceof Error) {
      return c.json(
        {
          status: false,
          message: error.message,
        },
        401
      );
    }

    return c.json(
      {
        status: false,
        message: "Unauthorized",
      },
      401
    );
  }
};
