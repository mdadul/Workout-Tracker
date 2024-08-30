import { Context } from "hono";
import { createAccount, login } from "../services/authService";

export const register = async (c: Context) => {
  const body = await c.req.json();
  console.log(body);

  try {
    await createAccount(body);
    return c.json({ success: true, message: "User created successfully" }, 201);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message }, 403);
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};

export const loginWithPassword = async (c: Context) => {
  const body = await c.req.json();
  console.log(body);

  try {
    const result = await login(body);
    return c.json(
      { success: true, message: "Login successful", data: result },
      200
    );
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ success: false, message: error.message });
    }

    return c.json({ success: false, message: "Something went wrong" }, 500);
  }
};
