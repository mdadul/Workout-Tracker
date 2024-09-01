import { eq } from "drizzle-orm";
import { SelectUser, usersTable } from "../schema/users";
import { db } from "../config/db";

export async function getuserById(id: SelectUser["id"]): Promise<
  Array<{
    id: SelectUser["id"];
    name: SelectUser["name"];
    email: SelectUser["email"];
    created_at: SelectUser["created_at"];
    updatedAt: SelectUser["updatedAt"];
  }>
> {
  try {
    const result = db.select().from(usersTable).where(eq(usersTable.id, id));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getuserByEmail(email: SelectUser["email"]): Promise<
  Array<{
    id: SelectUser["id"];
    name: SelectUser["name"];
    email: SelectUser["email"];
    created_at: SelectUser["created_at"];
    updatedAt: SelectUser["updatedAt"];
  }>
> {
  try {
    const result = db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
