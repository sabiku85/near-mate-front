# nearMate - Frontend Application

A modern frontend application built with Nuxt 4, featuring authentication flows and a comprehensive dashboard.

## Tech Stack

- **Framework**: Nuxt 4.2.1
- **UI Library**: Nuxt UI 4.2.1 (Tailwind CSS based)
- **Icons**: Lucide Icons via @nuxt/icon
- **Language**: TypeScript
- **Node Version**: v24.11.1 (see .nvmrc)

## Project Structure

```
app/
├── components/     # Reusable Vue components
├── layouts/        # Layout components (default, auth, dashboard)
├── pages/          # File-based routing
│   ├── auth/       # Flow 1: Authentication pages
│   └── dashboard/  # Flow 2: Main application pages
├── composables/   # Composable functions (useAuth, etc.)
├── middleware/     # Route middleware
└── plugins/        # Nuxt plugins

server/
└── api/            # Server API routes (if needed)

assets/
└── css/            # Global styles
```

## Getting Started

### Prerequisites

- Node.js v24.11.1 (use `nvm use` to switch versions)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run generate` - Generate static site
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Features

### Flow 1: Authentication
- Login page (`/auth/login`)
- Sign up page (`/auth/signup`)
- Protected routes with middleware
- Session management

### Flow 2: Dashboard
- Main dashboard (`/dashboard`)
- Profile management (`/dashboard/profile`)
- Settings (`/dashboard/settings`)
- Analytics (`/dashboard/analytics`)
- Projects (`/dashboard/projects`)
- Team management (`/dashboard/team`)

## Configuration

- `nuxt.config.ts` - Nuxt configuration
- `.npmrc` - npm configuration
- `.nvmrc` - Node version specification

## Development

The project uses:
- TypeScript for type safety
- ESLint for code quality
- Nuxt UI for component library
- Tailwind CSS for styling

## Notes

- API endpoints are currently mocked and need to be connected to backend
- Authentication state is managed via composables and cookies
- All dashboard routes are protected by authentication middleware
