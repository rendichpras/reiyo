import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from './schema.js';
import { eq } from 'drizzle-orm';

const queryClient = postgres(process.env.DATABASE_URL);
export const db = drizzle(queryClient);

/**
 * Mendapatkan user berdasarkan senderId, buat baru jika belum ada.
 * @param {string} senderId
 * @param {string} [senderLid]
 */
export const getUser = async (senderId, senderLid) => {
  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.senderId, senderId))
    .limit(1);

  if (existingUser) {
    if (senderLid && existingUser.senderLid !== senderLid) {
      await db
        .update(users)
        .set({ senderLid })
        .where(eq(users.senderId, senderId));
    }
    return existingUser;
  }

  const [newUser] = await db
    .insert(users)
    .values({
      senderId,
      senderLid,
    })
    .returning();

  return newUser;
};

/**
 * Update status premium user
 * @param {string} senderId
 * @param {boolean} status
 */
export const updatePremium = async (senderId, status) => {
  const [updatedUser] = await db
    .update(users)
    .set({ premium: status })
    .where(eq(users.senderId, senderId))
    .returning();
  return updatedUser;
};

/**
 * Update status banned user
 * @param {string} senderId
 * @param {boolean} status
 */
export const updateBan = async (senderId, status) => {
  const [updatedUser] = await db
    .update(users)
    .set({ banned: status })
    .where(eq(users.senderId, senderId))
    .returning();
  return updatedUser;
};
