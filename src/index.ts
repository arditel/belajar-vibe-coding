import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => ({
    message: 'Welcome to Belajar Vibe API',
    version: '1.0.0',
  }))
  .get('/health', () => ({
    status: 'ok',
  }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
