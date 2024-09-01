import { Context } from "hono";
import { getuserById } from "../services/userService";

export const getMyInfo = async (c: Context) => {
  const userId = c.get("userId");
  try {
    const user = await getuserById(userId);
    if (user.length === 0) {
      return c.json(
        {
          success: false,
          message: "User not found",
        },
        404
      );
    }

    return c.json(
      {
        success: true,
        data: user[0],
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) {
      return c.json({
        success: false,
        message: error.message,
      });
    }

    return c.json(
      {
        success: false,
        message: "Something went wrong",
      },
      500
    );
  }
};
