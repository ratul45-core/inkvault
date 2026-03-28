import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | InkVault</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-9xl font-display font-bold text-primary">404</h1>
          <h2 className="text-2xl font-display font-semibold mt-4 mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
