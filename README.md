# Belajar Vibe - API Project

A modern web API built with **Bun**, **ElysiaJS**, **Drizzle ORM**, and **MySQL**.

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime
- **Web Framework**: [ElysiaJS](https://elysiajs.com/) - Fast, lightweight, and type-safe web framework
- **ORM**: [Drizzle](https://orm.drizzle.team/) - Lightweight and performant ORM
- **Database**: MySQL

## Project Structure

```
src/
├── index.ts           # Main application entry point
├── routes/            # API route handlers
│   └── users.ts      # Users endpoint
├── models/            # Business logic (to be extended)
└── db/
    ├── connection.ts  # Database connection setup
    └── schema.ts      # Database schema definitions
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.0.0 or higher
- MySQL 5.7 or higher

### Installation

1. Clone or navigate to this repository
2. Install dependencies:
   ```bash
   bun install
   ```

### Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=your_password
DATABASE_NAME=belajar_vibe
NODE_ENV=development
```

### Database Setup

1. Create MySQL database:
   ```sql
   CREATE DATABASE belajar_vibe;
   ```

2. Generate and run migrations:
   ```bash
   bun run db:generate
   bun run db:push
   ```

## Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run start` - Start production server
- `bun run build` - Build for production
- `bun run db:generate` - Generate database migrations
- `bun run db:push` - Push migrations to database
- `bun run db:migrate` - Run database migrations

## API Endpoints

### Health Check

```
GET /health
```

Response:
```json
{
  "status": "ok"
}
```

### Users

- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

## Next Steps

- [ ] Implement authentication
- [ ] Add validation middleware
- [ ] Add error handling middleware
- [ ] Create additional routes and models
- [ ] Add unit tests
- [ ] Setup Docker configuration
- [ ] Deploy to production

## Development

Start the development server:

```bash
bun run dev
```

The server will run at `http://localhost:3000`

## License

MIT
