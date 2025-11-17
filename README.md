# Monolith

A modern monorepo optimized for TypeScript + React + Tailwind CSS development, powered by pnpm workspaces and Turborepo.

## Features

- **TypeScript**: Full type safety across all packages with shared configurations
- **React**: Modern React 18+ with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **pnpm Workspaces**: Efficient package management with workspace protocol
- **Turborepo**: High-performance build system for monorepos
- **ESLint + Prettier**: Consistent code quality and formatting
- **Vite**: Lightning-fast development server and build tool

## Project Structure

```
monolith/
├── apps/
│   └── web/                    # React web application with Vite
├── packages/
│   └── ui/                     # Shared UI component library
├── tooling/
│   └── typescript-config/      # Shared TypeScript configurations
├── .eslintrc.json             # ESLint configuration
├── .prettierrc.json           # Prettier configuration
├── package.json               # Root package.json with scripts
├── pnpm-workspace.yaml        # Workspace definition
├── tsconfig.json              # Base TypeScript config
└── turbo.json                 # Turborepo configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

Install pnpm globally if you haven't already:

```bash
npm install -g pnpm@8.11.0
```

Install dependencies:

```bash
pnpm install
```

### Development

Run all apps and packages in development mode:

```bash
pnpm dev
```

Run a specific app:

```bash
cd apps/web
pnpm dev
```

### Building

Build all packages and apps:

```bash
pnpm build
```

### Testing

Run tests across all packages:

```bash
pnpm test
```

### Linting

Lint all packages:

```bash
pnpm lint
```

Format code with Prettier:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

### Type Checking

Run TypeScript type checking across all packages:

```bash
pnpm typecheck
```

## Packages

### @monolith/web

Example React web application built with Vite and Tailwind CSS. Demonstrates the usage of shared UI components.

**Location**: `apps/web`

**Tech Stack**:
- React 18
- Vite
- Tailwind CSS
- TypeScript

**Scripts**:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

### @monolith/ui

Shared UI component library with reusable React components styled with Tailwind CSS.

**Location**: `packages/ui`

**Components**:
- Button
- Card (with Header, Title, Content)

**Scripts**:
- `pnpm dev` - Build in watch mode
- `pnpm build` - Build the library

### @monolith/typescript-config

Shared TypeScript configurations for consistent type checking across the monorepo.

**Location**: `tooling/typescript-config`

**Configs**:
- `base.json` - Base TypeScript configuration
- `react.json` - React-specific configuration
- `nextjs.json` - Next.js-specific configuration

## Adding New Packages

### Create a New App

```bash
mkdir -p apps/my-app
cd apps/my-app
pnpm init
```

### Create a New Package

```bash
mkdir -p packages/my-package
cd packages/my-package
pnpm init
```

Make sure to add the package name with the `@monolith/` scope and mark it as private if needed.

## Workspace Dependencies

To add a workspace package as a dependency:

```bash
pnpm add @monolith/ui --filter @monolith/web
```

To add an external dependency to a specific package:

```bash
pnpm add lodash --filter @monolith/web
```

To add a dev dependency to the root:

```bash
pnpm add -D -w eslint
```

## Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm dev` | Run all apps in development mode |
| `pnpm build` | Build all packages and apps |
| `pnpm test` | Run tests across all packages |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm typecheck` | Type check all packages |
| `pnpm clean` | Clean all build artifacts and node_modules |

## Turborepo Pipeline

The monorepo uses Turborepo for efficient task orchestration. The pipeline is configured in `turbo.json`:

- **build**: Builds packages with dependency awareness
- **dev**: Runs development servers (not cached)
- **test**: Runs tests with build dependencies
- **lint**: Lints code with build dependencies
- **typecheck**: Type checks with build dependencies

## Configuration Files

### TypeScript

- Root config: `tsconfig.json`
- Shared configs: `tooling/typescript-config/`
- Per-package configs extend from shared configs

### ESLint

- Root config: `.eslintrc.json`
- Configured for TypeScript and React
- Integrates with Prettier

### Prettier

- Config: `.prettierrc.json`
- Includes Tailwind CSS plugin for class sorting
- Ignore patterns: `.prettierignore`

## Best Practices

1. **Use workspace protocol**: When referencing workspace packages, use `workspace:*` in package.json
2. **Shared configs**: Extend from shared TypeScript and ESLint configs for consistency
3. **Atomic commits**: Keep commits focused and well-described
4. **Type safety**: Leverage TypeScript's type system - avoid `any` when possible
5. **Component library**: Add reusable components to `@monolith/ui` package
6. **Code formatting**: Run `pnpm format` before committing

## AI Development Tips

This monorepo is optimized for AI-assisted development:

1. **Clear Structure**: Organized directory structure makes it easy to locate files
2. **Type Safety**: Strong typing helps AI understand code relationships
3. **Consistent Configs**: Shared configurations ensure consistency across packages
4. **Modern Tools**: Vite, Turborepo, and pnpm provide fast feedback loops
5. **Component Library**: Reusable components reduce duplication

## License

Private monorepo - not for public distribution.

## Contributing

When contributing to this monorepo:

1. Create a new branch for your feature/fix
2. Make your changes following the coding standards
3. Run `pnpm lint` and `pnpm typecheck` to ensure code quality
4. Format code with `pnpm format`
5. Test your changes with `pnpm test`
6. Submit a pull request with a clear description

## Troubleshooting

### pnpm install fails

- Make sure you're using pnpm >= 8.0.0
- Delete `node_modules` and `pnpm-lock.yaml`, then run `pnpm install` again

### TypeScript errors in IDE

- Run `pnpm install` to ensure all dependencies are installed
- Restart your IDE/TypeScript server
- Check that your IDE is using the workspace TypeScript version

### Turborepo cache issues

- Clear the cache: `rm -rf .turbo`
- Run `pnpm clean` to remove all build artifacts

## Resources

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
