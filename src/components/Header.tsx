import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logoFull from "@/assets/logo-full.png";

const BOOK_HREF = "https://hplix.in/HPE37498-2";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Lung Health Library", href: "/library" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-0 md:flex md:gap-6 md:px-8 md:py-2">
        <Link to="/" className="flex min-w-0 items-center gap-1 md:gap-2">
          <img
            src={logoFull}
            alt="Mantri Aroha Clinic"
            className="h-[50px] w-auto shrink-0 md:h-[72px]"
            loading="eager"
          />
          <span className="min-w-0">
            <span className="block truncate text-[14px] font-semibold text-foreground md:text-[22px] md:leading-tight">
              Mantri Aroha Clinic
            </span>
            <span className="block truncate text-[10px] italic text-muted-foreground md:text-[11px]">
              Care with Compassion
            </span>
            <span className="hidden text-[11px] text-muted-foreground md:block">
              Chest Physician &amp; Family Physician
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <Button asChild className="h-8 rounded-[10px] px-3 text-xs md:h-10 md:px-5 md:text-sm">
            <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer">Book a visit</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-serif text-primary">Mantri Aroha</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
