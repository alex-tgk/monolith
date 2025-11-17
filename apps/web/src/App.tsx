import { Button, Card, CardHeader, CardTitle, CardContent } from '@monolith/ui';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Welcome to Monolith
          </h1>
          <p className="text-xl text-gray-600">
            A monorepo optimized for TypeScript + React + Tailwind CSS development
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Fully typed codebase with shared TypeScript configurations for consistency across
                packages.
              </p>
              <Button variant="primary" size="md">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>React Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Shared UI component library with reusable, accessible components built with React.
              </p>
              <Button variant="secondary" size="md">
                View Components
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Utility-first CSS framework configured for rapid UI development with consistent
                styling.
              </p>
              <Button variant="outline" size="md">
                Documentation
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">1. Install Dependencies</h4>
                  <code className="block rounded bg-gray-100 p-3 font-mono text-sm">
                    pnpm install
                  </code>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">2. Start Development Server</h4>
                  <code className="block rounded bg-gray-100 p-3 font-mono text-sm">
                    pnpm dev
                  </code>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">3. Build for Production</h4>
                  <code className="block rounded bg-gray-100 p-3 font-mono text-sm">
                    pnpm build
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
