import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  CalendarCheck,
  ClipboardList,
  Leaf,

  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Stethoscope,
  User as UserIcon,
  Users,
  Video,
  Wind,
  Youtube,
  Mail,
  Cigarette,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import doctorPhoto from "@/assets/doctor_image.png.asset.json";
import doctorTransparent from "@/assets/doctor_transparent.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mantri Aroha Clinic — Care with Compassion" },
      {
        name: "description",
        content:
          "Evidence-based respiratory and family care by Dr Mantri Vijaya Bhaskar. Asthma, COPD, chronic cough, allergy and preventive lung health in a compassionate clinic.",
      },
      { property: "og:title", content: "Mantri Aroha Clinic — Care with Compassion" },
      {
        property: "og:description",
        content:
          "Chest physician & family physician. Online and in-clinic consultations, pulmonary function testing, and a lung health library.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const WHATSAPP_URL = "https://wa.me/919876543210";
const CALL_URL = "tel:+919876543210";
const EMAIL_URL = "mailto:hello@mantriarohaclinic.in";
const MAPS_URL = "https://maps.google.com/?q=Mantri+Aroha+Clinic";
const YOUTUBE_URL = "#";
const BOOK_HREF = "#book";

const NAV = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Lung Health Library", href: "#library" },
  { label: "Book Appointment", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const CONDITIONS = ["Asthma", "COPD", "Chronic Cough", "Allergy", "Preventive Lung Health"];

const TRUST = [
  { icon: LungMark, label: "Respiratory care", sub: "for all ages" },
  { icon: Users, label: "Family doctor", sub: "you can trust" },
  { icon: ClipboardList, label: "Second opinion", sub: "& health queries" },
  { icon: ShieldCheck, label: "Preventive care", sub: "for a healthier you" },
];

const SERVICES = [
  {
    icon: Video,
    title: "Online Consultation",
    titleTe: "ఆన్‌లైన్ సంప్రదింపులు",
    desc: "Get expert advice from the comfort of your home.",
  },
  {
    icon: Stethoscope,
    title: "In-Clinic Consultation",
    titleTe: "క్లినిక్‌లో సంప్రదింపులు",
    desc: "Personalized evaluation and treatment with advanced diagnostic facilities.",
  },
  {
    icon: Activity,
    title: "PFT",
    titleSub: "(Pulmonary Function Test / Spirometry)",
    titleTe: "ఊపిరితిత్తుల పనితీరును పరీక్షించే విధానం",
    desc: "Assess your lung function accurately with advanced spirometry testing.",
  },
];

const LIBRARY = [
  { icon: Wind, label: "What is Asthma?" },
  { icon: Wind, label: "What is COPD?" },
  { icon: UserIcon, label: "Chronic Cough" },
  { icon: Leaf, label: "Allergy & Breathing Problems" },
  { icon: Cigarette, label: "Quit Smoking" },
  { icon: Activity, label: "Pulmonary Function Test" },
];

const SYMPTOMS = [
  "Persistent cough",
  "Breathlessness",
  "Wheezing",
  "Chest tightness",
  "Smoking history",
];

function LungMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M32 14v22" />
      <path d="M28 22c-2 6-8 8-12 8-2 8 0 18 8 20 4 1 8-2 8-6V22z" />
      <path d="M36 22c2 6 8 8 12 8 2 8 0 18-8 20-4 1-8-2-8-6V22z" />
      <path d="M30 18c0-2 1-3 2-3s2 1 2 3" />
    </svg>
  );
}

function DoctorPortrait({ shape = "circle" }: { shape?: "circle" | "square" }) {
  const radius = shape === "circle" ? "rounded-full" : "rounded-[14px]";
  return (
    <div
      className={`relative mx-auto aspect-square w-full max-w-md overflow-hidden border-4 border-background bg-secondary shadow-xl ${radius}`}
    >
      <img
        src={doctorPhoto.url}
        alt="Dr Mantri Vijaya Bhaskar"
        className="h-full w-full object-cover object-top"
        loading="eager"
      />
    </div>
  );
}

function ServiceIllustration({ Icon }: { Icon: typeof Video }) {
  return (
    <div className="grid aspect-square w-full place-items-center rounded-[12px] bg-secondary text-primary">
      <Icon className="h-16 w-16" strokeWidth={1.4} />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 md:flex md:gap-6 md:px-8 md:py-4">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
            <LungMark className="h-6 w-6" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-xl font-semibold leading-tight text-primary md:text-2xl">
              Mantri Aroha
            </span>
            <span className="block truncate text-xs italic text-muted-foreground md:text-sm">
              Care with Compassion
            </span>
            <span className="hidden text-[11px] text-muted-foreground md:block">
              Respiratory &amp; Family Care | Lung Health Library
            </span>
          </span>
        </a>

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

        <div className="flex items-center gap-2">
          <Button asChild className="h-10 rounded-[10px] px-5">
            <a href={BOOK_HREF}>Book a visit</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
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

function Hero() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-5 md:grid-cols-2 md:items-center md:gap-8 md:px-8 md:py-6">
        <div className="order-2 md:order-1">
          <div className="mb-3 flex items-center gap-2 text-primary">
            <LungMark className="h-6 w-6" />
            <span className="text-sm font-medium">A practice built on compassion</span>
          </div>
          <h1 className="font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Helping you breathe<br className="hidden sm:block" /> better every day
          </h1>
          <p className="mt-4 text-sm font-medium text-foreground/80">Evidence-based care for</p>
          <ul className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-sm text-foreground md:text-base">
            {CONDITIONS.map((c, i) => (
              <li key={c} className="flex items-center gap-2">
                {i > 0 && <span className="text-primary">•</span>}
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-[10px] px-5">
              <a href={BOOK_HREF}>
                <Video className="mr-2 h-4 w-4" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-sm font-semibold">Online Consultation</span>
                  <span className="text-[11px] opacity-90">ఆన్‌లైన్ సంప్రదింపులు</span>
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-[10px] border-primary px-5 text-primary hover:bg-secondary">
              <a href={BOOK_HREF}>
                <Stethoscope className="mr-2 h-4 w-4" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-sm font-semibold">Book Clinic Visit</span>
                  <span className="text-[11px] opacity-90">క్లినిక్‌లో సంప్రదింపులు</span>
                </span>
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm">
            {/* Soft circular backdrop pattern */}
            <div className="absolute inset-0 grid place-items-center" aria-hidden>
              <div className="h-[88%] w-[88%] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.primary/15)_0%,theme(colors.primary/8)_55%,transparent_72%)]" />
            </div>
            <div className="absolute inset-x-6 bottom-2 top-6 grid place-items-center" aria-hidden>
              <div className="h-full w-full rounded-full border border-primary/15" />
            </div>
            <img
              src={doctorTransparent.url}
              alt="Dr Mantri Vijaya Bhaskar"
              className="relative h-full w-full object-contain object-bottom"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-4">
      <div className="rounded-[10px] border border-border bg-card p-5 shadow-sm md:p-6">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border">
          {TRUST.map((t) => (
            <li key={t.label} className="flex items-center justify-center gap-3 md:px-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <t.icon className="h-6 w-6" />
              </span>
              <span className="min-w-0 text-sm leading-tight text-foreground">
                <span className="block font-medium">{t.label}</span>
                <span className="block text-muted-foreground">{t.sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


function Services() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 pb-8 md:px-8 md:pb-10">
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_320px] lg:gap-6">
        {SERVICES.map((s) => (
          <Card
            key={s.title}
            className="flex flex-col gap-4 rounded-[12px] border-border p-5 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-[140px_1fr] lg:grid-cols-1">
              <ServiceIllustration Icon={s.icon} />
              <div className="flex flex-col">
                <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">
                  {s.title}
                  {s.titleSub && (
                    <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                      {s.titleSub}
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-sm text-foreground/80">{s.titleTe}</p>
                <Button asChild className="mt-3 h-11 rounded-[10px] text-xs font-semibold tracking-[0.12em]">
                  <a href={BOOK_HREF}>BOOK NOW</a>
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </Card>
        ))}

        <Card className="relative flex flex-col overflow-hidden rounded-[12px] border-border bg-secondary/60 p-6 shadow-sm">
          <h3 className="font-serif text-xl font-semibold text-primary">Are you experiencing?</h3>
          <ul className="mt-4 space-y-3">
            {SYMPTOMS.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <Checkbox
                  id={`sx-${s}`}
                  checked={!!checked[s]}
                  onCheckedChange={(v) => setChecked((p) => ({ ...p, [s]: !!v }))}
                  className="border-primary/40 data-[state=checked]:bg-primary"
                />
                <label htmlFor={`sx-${s}`} className="text-sm text-foreground">
                  {s}
                </label>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-auto h-11 w-full rounded-[10px]">
            <a href={BOOK_HREF}>
              <CalendarCheck className="mr-2 h-5 w-5" />
              Book a consultation
            </a>
          </Button>
          <Leaf className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 rotate-12 text-primary/15" />
        </Card>
      </div>
    </section>
  );
}

function LibrarySection() {
  return (
    <section id="library" className="mx-auto max-w-7xl px-4 pb-10 md:px-8 md:pb-14">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
          Lung Health Library
        </h2>
        <a
          href="#library"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View all articles <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {LIBRARY.map((l) => (
          <a
            key={l.label}
            href="#library"
            className="flex flex-col items-start gap-3 rounded-[12px] border border-border bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-secondary"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-secondary text-primary">
              <l.icon className="h-5 w-5" />
            </span>
            <span className="leading-tight">{l.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 pb-12 md:px-8 md:pb-16">
      <Card className="grid gap-6 rounded-[12px] border-border p-6 shadow-sm md:grid-cols-[240px_1fr_320px] md:items-center md:p-8">
        <div className="mx-auto w-44 md:w-full">
          <DoctorPortrait shape="square" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            About Dr Mantri Vijaya Bhaskar
          </h2>
          <p className="mt-3 text-foreground/80">
            Helping patients understand and manage respiratory illnesses through evidence-based care,
            clear communication, and compassionate listening.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">
            MBBS, DTCD, Chest Physician &amp; Family Physician
          </p>
          <p className="text-sm text-muted-foreground">
            12+ years of experience in Respiratory &amp; Family Medicine
          </p>
        </div>
        <blockquote className="rounded-[10px] border border-border bg-secondary/60 p-5">
          <div className="flex items-center gap-2 text-primary">
            <Quote className="h-5 w-5" />
            <span className="font-serif text-lg font-semibold">Doctor&rsquo;s Promise</span>
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            Every patient deserves to understand their illness before making treatment decisions. This
            website is my commitment to providing simple, evidence-based and compassionate respiratory
            health information for patients and families.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">— Dr Mantri Vijaya Bhaskar</p>
        </blockquote>
      </Card>
    </section>
  );
}

function Footer() {
  const actions = [
    { icon: MessageCircle, label: "WhatsApp", sub: "Message us", href: WHATSAPP_URL },
    { icon: MapPin, label: "Directions", sub: "Find us on map", href: MAPS_URL },
    { icon: Phone, label: "Call", sub: "+91 98765 43210", href: CALL_URL },
    { icon: Mail, label: "Email", sub: "hello@mantriarohaclinic.in", href: EMAIL_URL },
    { icon: Youtube, label: "YouTube", sub: "Health talks & more", href: YOUTUBE_URL },
  ];
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        <ul className="grid grid-cols-4 gap-3 md:grid-cols-5 md:gap-6">
          {actions.map((a) => (
            <li key={a.label}>
              <a
                href={a.href}
                className="flex flex-col items-center gap-2 rounded-[10px] p-2 text-center transition-colors hover:bg-secondary md:flex-row md:text-left"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <a.icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{a.label}</span>
                  <span className="hidden truncate text-xs text-muted-foreground md:block">{a.sub}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Mantri Aroha Clinic. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 opacity-90">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            <a href="#" className="hover:underline">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <LibrarySection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
