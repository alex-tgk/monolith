# @monolith/web

Example React web application demonstrating the monorepo setup with TypeScript, React, and Tailwind CSS.

## Features

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Uses shared UI components from `@monolith/ui`
- Hot Module Replacement (HMR)
- Path aliases for clean imports

## Getting Started

### Development

```bash
pnpm dev
```

This starts the development server at `http://localhost:3000`.

### Build

```bash
pnpm build
```

Builds the app for production to the `dist` folder.

### Preview

```bash
pnpm preview
```

Preview the production build locally.

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── App.tsx        # Main app component
├── main.tsx       # Entry point
├── index.css      # Global styles with Tailwind directives
└── vite-env.d.ts  # Vite type definitions
```

## Using UI Components

Import components from the shared UI library:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@monolith/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## Tailwind CSS

This app is configured with Tailwind CSS. The configuration includes:

- Content paths for the app and UI package
- PostCSS with autoprefixer
- Prettier plugin for class sorting

### Using Tailwind

```tsx
function Example() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello Tailwind!
      </h1>
    </div>
  );
}
```

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Lint the code |
| `pnpm typecheck` | Type check with TypeScript |
| `pnpm clean` | Clean build artifacts |

## Configuration

- **Vite**: `vite.config.ts`
- **TypeScript**: `tsconfig.json` (extends shared config)
- **Tailwind**: `tailwind.config.js`
- **PostCSS**: `postcss.config.js`

## Path Aliases

The `@` alias is configured to point to the `src` directory:

```tsx
import MyComponent from '@/components/MyComponent';
```
