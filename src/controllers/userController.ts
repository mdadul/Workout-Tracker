import { Context } from "hono";

export const getUser = async (c: Context) => {
    return c.json({ message: "Get user"  });
};
