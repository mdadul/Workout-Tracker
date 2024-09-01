import { eq } from "drizzle-orm";
import { SelectUser, usersTable } from "../schema/users";
import { db } from "../config/db";

export async function getuserById(id: SelectUser["id"]) {
  try {
    const result =await db
      .select({
        id: usersTable.id,
        name: usersTable.name,
        email: usersTable.email,
        created_at: usersTable.created_at,
        updatedAt: usersTable.updatedAt,
      })
      .from(usersTable)
      .where(eq(usersTable.id, id));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
