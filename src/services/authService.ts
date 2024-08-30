import { eq } from "drizzle-orm";
import { db } from "../config/db";
import { usersTable } from "../schema";
import { InsertUser } from "../schema/users";
import { LoginWithPasswordType } from "../types";
import { sign } from "hono/jwt";
import { jwtSecret } from "../constant/variable";

export async function createAccount(user: InsertUser) {
  console.log(user);
  try {
    const data = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user.email));

    if (data.length > 0) {
      throw new Error("User already exists");
    }

    const hasedPassword = await Bun.password.hash(user.password);
    user.password = hasedPassword;

    const result = await db.insert(usersTable).values(user);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login({ email, password }: LoginWithPasswordType) {
  try {
    const data = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (data.length === 0) {
      throw new Error("User not found");
    }

    const user = data[0];
    const isPasswordMatch = await Bun.password.verify(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid password");
    }

    const payload = {
      id: user.id,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 1 week
    };

    const secret = jwtSecret;

    const token = await sign(payload, secret);

    console.info(token);

    const userInfo = {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.created_at,
      updatedAt: user.updatedAt,
      token,
    };

    return userInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
