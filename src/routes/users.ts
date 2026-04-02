import { Elysia, t } from 'elysia';
import { db } from '../db/connection';
import { users } from '../db/schema';

export const usersRoute = new Elysia({ prefix: '/api/users' })
  .get('/', async () => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (error) {
      return { error: 'Failed to fetch users' };
    }
  })
  .post('/', async ({ body }) => {
    try {
      const result = await db.insert(users).values(body);
      return { message: 'User created', result };
    } catch (error) {
      return { error: 'Failed to create user' };
    }
  });
