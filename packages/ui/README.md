# @monolith/ui

Shared UI component library for the monolith monorepo.

## Components

- **Button**: A customizable button component with multiple variants and sizes
- **Card**: A card component with header, title, and content subcomponents

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@monolith/ui';

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
        <Button variant="primary" size="md">
          Click me
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Development

- `pnpm dev`: Build in watch mode
- `pnpm build`: Build the library
- `pnpm lint`: Lint the code
- `pnpm typecheck`: Type check the code
