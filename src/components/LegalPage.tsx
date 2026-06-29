import { Link } from "@tanstack/react-router";
import { Header } from "./Header";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
        <nav className="mb-4 text-sm">
          <Link to="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </nav>
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{title}</h1>
        {updated && (
          <p className="mt-2 text-sm text-muted-foreground">Last Updated: {updated}</p>
        )}
        <article className="legal-content mt-6 space-y-5 text-[15px] leading-relaxed text-foreground/90">
          {children}
        </article>
        <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-6 text-sm">
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-primary hover:underline">
            Terms &amp; Conditions
          </Link>
          <Link to="/disclaimer" className="text-primary hover:underline">
            Medical Disclaimer
          </Link>
        </div>
      </main>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-6 font-serif text-xl font-semibold text-foreground md:text-2xl">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-inside list-disc space-y-1 pl-2">{children}</ul>;
}
