import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ChevronRight, Loader2 } from "lucide-react";
import { Header } from "@/components/Header";
import { LIBRARY, type LibraryItem } from "@/lib/library-items";

type LibrarySearch = { item?: string };

export const Route = createFileRoute("/library/")({
  validateSearch: (search: Record<string, unknown>): LibrarySearch => ({
    item: typeof search.item === "string" ? search.item : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Lung Health Library | Mantri Aroha Clinic" },
      {
        name: "description",
        content:
          "Browse easy-to-understand guides on asthma, COPD, allergy, chronic cough, smoking, pollution, PFT/Spirometry and more from Mantri Aroha Clinic.",
      },
      { property: "og:title", content: "Lung Health Library | Mantri Aroha Clinic" },
      {
        property: "og:description",
        content:
          "Patient education on asthma, COPD, allergy, chronic cough, smoking, pollution, PFT/Spirometry and more.",
      },
      { property: "og:url", content: "https://mantriaroha.com/library" },
    ],
    links: [{ rel: "canonical", href: "https://mantriaroha.com/library" }],
  }),
  component: LibraryIndex,
});

function LibraryIndex() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const initial = useMemo<LibraryItem>(() => {
    if (search.item) {
      const match = LIBRARY.find((l) => l.label === search.item);
      if (match) return match;
    }
    return LIBRARY[0];
  }, [search.item]);

  const [selected, setSelected] = useState<LibraryItem>(initial);
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setSelected(initial);
    setIdx(0);
  }, [initial]);

  const half = Math.ceil(LIBRARY.length / 2);
  const rows = [LIBRARY.slice(0, half), LIBRARY.slice(half)];

  const handleSelect = (item: LibraryItem) => {
    setSelected(item);
    setIdx(0);
    navigate({ search: { item: item.label }, replace: true });
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        document.getElementById("library-viewer")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const currentSrc = selected.details?.[idx];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 md:py-6">
          <Link
            to="/"
            className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <h1 className="font-serif text-2xl font-semibold text-primary md:text-4xl">Lung Health Library</h1>
          <p className="mt-1 text-sm text-muted-foreground md:text-base">
            Tap any topic below to view the guide.
          </p>

          <div className="mt-4 space-y-2">
          {rows.map((row, rIdx) => (
            <div key={rIdx} className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {row.map((l) => {
                const isActive = selected.label === l.label;
                if (l.label === "Chest Specialist") {
                  return (
                    <Link
                      key={l.label}
                      to="/library/chest-specialist"
                      className="group relative flex w-32 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[12px] border border-border bg-card p-2 pr-5 text-center text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-secondary md:w-36"
                    >
                      <img src={l.img} alt="" className="h-8 w-8 shrink-0 object-contain" loading="lazy" />
                      <span>{l.label}</span>
                      <ChevronRight aria-hidden className="absolute right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-primary/60" />
                    </Link>
                  );
                }
                return (
                  <button
                    key={l.label}
                    type="button"
                    onClick={() => handleSelect(l)}
                    className={`group relative flex w-32 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[12px] border bg-card p-2 pr-5 text-center text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-secondary md:w-36 ${
                      isActive ? "border-primary bg-secondary" : "border-border"
                    }`}
                  >
                    <img src={l.img} alt="" className="h-8 w-8 shrink-0 object-contain" loading="lazy" />
                    <span>{l.label}</span>
                    <ChevronRight aria-hidden className="absolute right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-primary/60" />
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div id="library-viewer" className="mt-5 scroll-mt-4">
          <div className="rounded-[12px] border border-border bg-card p-3 md:p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-serif text-lg font-semibold text-primary md:text-2xl">{selected.label}</h2>
              {selected.details && selected.details.length > 1 && (
                <div className="flex items-center gap-2">
                  {selected.details.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIdx(i)}
                      className={`h-2 w-2 rounded-full ${i === idx ? "bg-primary" : "bg-muted-foreground/40"}`}
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="relative flex min-h-[300px] items-center justify-center md:min-h-[500px]">
              {currentSrc && !loaded[currentSrc] && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-primary">
                  <Loader2 className="h-8 w-8 animate-spin" />
                  <span className="text-xs text-muted-foreground">Loading…</span>
                </div>
              )}
              {currentSrc && (
                <img
                  key={currentSrc}
                  src={currentSrc}
                  alt={selected.label}
                  onLoad={() => setLoaded((p) => ({ ...p, [currentSrc]: true }))}
                  className={`h-auto w-full max-w-3xl rounded-md object-contain transition-opacity duration-300 ${
                    loaded[currentSrc] ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
