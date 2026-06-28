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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import doctorPhoto from "@/assets/doctor_image.png.asset.json";
import doctorTransparent from "@/assets/doctor_transparent.png.asset.json";
import logoFull from "@/assets/logo-full.png.asset.json";
import iconLungs from "@/assets/icon-lungs.png.asset.json";
import iconFamily from "@/assets/icon-family.png.asset.json";
import iconClipboard from "@/assets/icon-clipboard.png.asset.json";
import iconQuitSmoking from "@/assets/icon-quit-smoking.png.asset.json";
import serviceOnline from "@/assets/service-online-v2.png.asset.json";
import serviceClinic from "@/assets/service-clinic-v2.png.asset.json";
import servicePft from "@/assets/service-pft.png.asset.json";
import libAsthma from "@/assets/lib-asthma.png.asset.json";
import libCopd from "@/assets/lib-copd.png.asset.json";
import libCough from "@/assets/lib-cough.png.asset.json";
import libAllergy from "@/assets/lib-allergy.png.asset.json";
import libSmoking from "@/assets/lib-smoking.png.asset.json";
import libPft from "@/assets/lib-pft.png.asset.json";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Mantri Aroha Clinic",
          description:
            "Respiratory and family care by Dr Mantri Vijaya Bhaskar — Asthma, COPD, chronic cough, allergy and preventive lung health.",
          url: "https://m-a-c.lovable.app/",
          telephone: "+91 98765 43210",
          email: "hello@mantriarohaclinic.in",
          medicalSpecialty: ["Pulmonary", "FamilyPractice"],
          physician: {
            "@type": "Physician",
            name: "Dr Mantri Vijaya Bhaskar",
          },
        }),
      },
    ],
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
  { img: iconLungs.url, label: "Respiratory care", sub: "for all ages" },
  { img: iconFamily.url, label: "Family doctor", sub: "you can trust" },
  { img: iconClipboard.url, label: "Second opinion &", sub: "health queries" },
  { img: iconQuitSmoking.url, label: "Preventive care", sub: "for a healthier you" },
];

const SERVICES = [
  {
    image: serviceOnline.url,
    imageClass: "object-contain",
    title: "Online Consultation",
    titleTe: "ఆన్‌లైన్ సంప్రదింపులు",
    desc: "Get expert advice from the comfort of your home.",
  },
  {
    image: serviceClinic.url,
    imageClass: "object-contain",
    title: "In-Clinic Consultation",
    titleTe: "క్లినిక్‌లో సంప్రదింపులు",
    desc: "Personalized evaluation and treatment with advanced diagnostic facilities.",
  },
  {
    image: servicePft.url,
    imageClass: "object-cover",
    title: "PFT",
    titleSub: "(Pulmonary Function Test / Spirometry)",
    titleTe: "ఊపిరితిత్తుల పనితీరును పరీక్షించే విధానం",
    desc: "Assess your lung function accurately with advanced spirometry testing.",
  },
];

const LIBRARY = [
  { img: libAsthma.url, label: "What is Asthma?" },
  { img: libCopd.url, label: "What is COPD?" },
  { img: libCough.url, label: "Chronic Cough" },
  { img: libAllergy.url, label: "Allergy & Breathing Problems" },
  { img: libSmoking.url, label: "Quit Smoking" },
  { img: libPft.url, label: "Pulmonary Function Test" },
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
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
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

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-0 md:flex md:gap-6 md:px-8 md:py-2">
        <a href="#" className="flex min-w-0 items-center gap-1 md:gap-2">
          <img
            src={logoFull.url}
            alt="Mantri Aroha Clinic"
            className="h-[72px] w-auto shrink-0 md:h-24"
            loading="eager"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-foreground md:text-base">
              Mantri Aroha Clinic
            </span>
            <span className="block truncate text-[11px] italic text-muted-foreground md:text-sm">
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

        <div className="flex items-center gap-1 md:gap-2">
          <Button asChild className="h-9 rounded-[10px] px-3 text-xs md:h-10 md:px-5 md:text-sm">
            <a href={BOOK_HREF}>Book a visit</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" aria-label="Open menu">
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

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-sm sm:aspect-[4/3]">
      <div className="absolute inset-0 grid place-items-center" aria-hidden>
        <div className="h-[92%] w-[92%] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.primary/15)_0%,theme(colors.primary/8)_55%,transparent_72%)]" />
      </div>
      <div className="absolute inset-2 grid place-items-center" aria-hidden>
        <div className="h-full w-full rounded-full border border-primary/15" />
      </div>
      <img
        src={doctorTransparent.url}
        alt="Dr Mantri Vijaya Bhaskar"
        className="relative h-full w-full object-contain object-center"
        loading="eager"
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-5 md:px-8 md:py-10">

        {/* Mobile: top row with tagline (left) + image (right). Desktop: 2-col with text/image side by side. */}
        <div className="grid grid-cols-[1fr_46%] items-center gap-3 md:grid-cols-2 md:gap-8">
          <div className="md:order-1">
            <div className="flex items-center gap-2 text-primary">
              <LungMark className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-xs font-medium md:text-sm">A practice built on compassion</span>
            </div>
            <h1 className="mt-3 font-serif text-[26px] font-semibold leading-[1.05] tracking-tight text-foreground md:mt-4 md:text-4xl lg:text-5xl">
              Helping you breathe better every day
            </h1>
            <p className="mt-3 text-[13px] font-medium text-foreground/80 md:mt-4 md:text-sm">
              Evidence-based care for
            </p>
            <ul className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-[13px] text-foreground md:text-base">
              {CONDITIONS.map((c, i) => (
                <li key={c} className="flex items-center gap-2">
                  {i > 0 && <span className="text-primary">•</span>}
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 hidden flex-col gap-2 sm:flex sm:flex-row md:mt-5">
              <Button asChild size="lg" className="h-12 rounded-[10px] px-5">
                <a href={BOOK_HREF}>
                  <Video className="mr-2 h-4 w-4" />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-semibold">Online Consultation</span>
                    <span className="text-[11px] opacity-90">ఆన్‌లైన్ సంప్రదింపులు</span>
                  </span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-[10px] border-primary px-5 text-primary hover:bg-secondary"
              >
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

          <div className="md:order-2">
            <HeroVisual />
          </div>
        </div>

      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-5">
      <div className="rounded-[10px] border border-border bg-card p-2 shadow-sm md:p-6">
        {/* Mobile: horizontal scroll single row. Desktop: 4-col grid with dividers. */}
        <ul className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:divide-x md:divide-border">

          {TRUST.map((t) => (
            <li
              key={t.label}
              className="flex shrink-0 items-center gap-2 md:shrink md:justify-center md:gap-4 md:px-6"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-secondary/60 ring-1 ring-primary/15 md:h-14 md:w-14">
                <img
                  src={t.img}
                  alt=""
                  className="h-7 w-7 object-contain md:h-12 md:w-12"
                  loading="lazy"
                />
              </span>
              <span className="min-w-0 whitespace-nowrap text-[10px] leading-tight text-foreground md:whitespace-normal md:text-[15px]">
                <span className="block font-medium">{t.label}</span>
                <span className="block font-medium">{t.sub}</span>
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
    <section id="services" className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-6">
      <h2 className="sr-only">Our Services</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-[1fr_1fr_1fr_300px] lg:gap-5">
        {SERVICES.map((s) => (
          <Card
            key={s.title}
            className="flex w-[40vw] min-w-[150px] shrink-0 flex-col gap-2 overflow-hidden rounded-[12px] border-border p-2 shadow-sm sm:w-auto sm:min-w-0 sm:gap-3 sm:p-4 lg:flex-row lg:gap-4"
          >
            <div className="h-24 w-full shrink-0 overflow-hidden rounded-[10px] bg-secondary/40 sm:h-40 lg:h-auto lg:w-[42%]">
              <img
                src={s.image}
                alt={s.title}
                className={`h-full w-full ${s.imageClass}`}
                loading="lazy"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-between items-center text-center lg:items-start lg:text-left">
              <div>
                <h3 className="font-serif text-sm font-semibold leading-tight text-primary sm:text-lg">
                  {s.title}
                </h3>
                {s.titleSub && (
                  <p className="mt-0.5 text-[10px] leading-snug text-primary/80 sm:text-[11px]">{s.titleSub}</p>
                )}
                <p className="mt-1 text-[11px] leading-snug text-foreground/80 sm:text-[13px]">{s.titleTe}</p>
                <p className="mt-2 text-[11px] leading-snug text-muted-foreground sm:text-[13px]">{s.desc}</p>
              </div>
              <Button
                asChild
                className="mt-2 h-8 rounded-[10px] px-3 text-[10px] font-semibold tracking-[0.14em] sm:mt-3 sm:h-9 sm:px-5 sm:text-[11px] lg:mt-2 lg:self-start"
              >
                <a href={BOOK_HREF}>BOOK NOW</a>
              </Button>
            </div>
          </Card>
        ))}

        <Card className="relative w-[40vw] min-w-[150px] shrink-0 flex flex-col overflow-hidden rounded-[12px] border-border bg-secondary/60 p-3 shadow-sm sm:w-auto sm:min-w-0 sm:p-6">
          <h3 className="font-serif text-base font-semibold text-primary sm:text-xl">Are you experiencing?</h3>
          <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
            {SYMPTOMS.map((s) => (
              <li key={s} className="flex items-center gap-2 sm:gap-3">
                <Checkbox
                  id={`sx-${s}`}
                  checked={!!checked[s]}
                  onCheckedChange={(v) => setChecked((p) => ({ ...p, [s]: !!v }))}
                  className="border-primary/40 data-[state=checked]:bg-primary"
                />
                <label htmlFor={`sx-${s}`} className="text-xs text-foreground sm:text-sm">
                  {s}
                </label>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-auto h-9 w-full rounded-[10px] text-xs sm:h-11 sm:text-sm">
            <a href={BOOK_HREF}>
              <CalendarCheck className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
    <section id="library" className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-6">
      <div className="mb-3 flex items-end justify-between gap-4 md:mb-4">

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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {LIBRARY.map((l) => (
          <a
            key={l.label}
            href="#library"
            className="flex items-center gap-4 rounded-[12px] border border-border bg-card p-4 text-[14px] font-semibold leading-snug text-primary transition-colors hover:border-primary hover:bg-secondary"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-secondary/60 ring-1 ring-primary/15">
              <img src={l.img} alt="" className="h-12 w-12 object-contain" loading="lazy" />
            </span>
            <span>{l.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-3 md:px-8 md:py-6 md:pb-10">
      <Card className="grid gap-5 rounded-[12px] border-border p-5 shadow-sm md:grid-cols-[240px_1fr_320px] md:items-center md:gap-6 md:p-8">

        <div className="mx-auto w-44 md:w-full">
          <DoctorPortrait shape="square" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            About Dr Mantri Vijaya Bhaskar
          </h2>
          <p className="mt-3 text-foreground/80">
            Helping patients understand and manage respiratory illnesses through evidence-based
            care, clear communication, and compassionate listening.
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
            Every patient deserves to understand their illness before making treatment decisions.
            This website is my commitment to providing simple, evidence-based and compassionate
            respiratory health information for patients and families.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">— Dr Mantri Vijaya Bhaskar</p>
        </blockquote>
      </Card>
    </section>
  );
}

function Footer() {
  const actions = [
    {
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5.01L2 22l5.07-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 14.13c-.19.55-.98 1.02-1.36 1.08-.38.07-.72.19-2.41-.5-2.04-.8-3.35-2.91-3.45-3.05-.1-.14-.83-1.1-.83-2.1 0-1 .52-1.49.7-1.69.19-.2.42-.25.56-.25.14 0 .28 0 .4.01.13.01.3-.05.47.36.17.41.55 1.42.6 1.52.05.1.08.22.02.35-.06.13-.1.22-.19.33-.1.11-.2.22-.29.3-.1.08-.2.17-.09.34.11.17.49.82 1.05 1.33.72.65 1.33.85 1.53.95.19.09.32.08.44-.05.12-.13.51-.59.65-.79.14-.21.28-.17.47-.1.19.08 1.22.58 1.43.68.21.1.35.15.4.23.06.09.04.52-.14 1.07z" />
        </svg>
      ),
      color: "#25D366",
      label: "WhatsApp",
      sub: "Message us",
      href: WHATSAPP_URL,
    },
    {
      icon: (props: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
            fill="#4285F4"
          />
          <path d="M12 2c3.87 0 7 3.13 7 7 0 5.25-7 13-7 13V2z" fill="#34A853" />
          <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13V2z" fill="#FBBC05" />
          <circle cx="12" cy="9" r="2.5" fill="#EA4335" />
        </svg>
      ),
      color: "transparent",
      label: "Directions",
      sub: "Find us on map",
      href: MAPS_URL,
    },
    {
      icon: (props: { className?: string }) => <Phone className={props.className} />,
      color: "#0F766E",
      label: "Call",
      sub: "+91 98765 43210",
      href: CALL_URL,
    },
    {
      icon: (props: { className?: string }) => <Mail className={props.className} />,
      color: "#DC2626",
      label: "Email",
      sub: "hello@mantriarohaclinic.in",
      href: EMAIL_URL,
    },
    {
      icon: (props: { className?: string }) => <Youtube className={props.className} />,
      color: "#FF0000",
      label: "YouTube",
      sub: "Health talks & more",
      href: YOUTUBE_URL,
    },
  ];
  return (
    <footer
      id="contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:static md:shadow-none"
    >
      <div className="mx-auto max-w-7xl px-2 py-2 md:px-8 md:py-4">
        <ul className="grid grid-cols-4 gap-1 md:grid-cols-5 md:gap-0 md:divide-x md:divide-border">
          {actions.map((a) => (
            <li
              key={a.label}
              className={a.label === "Email" ? "hidden md:list-item" : ""}
            >
              <a
                href={a.href}
                className="flex flex-col items-center gap-1 rounded-[10px] p-1 text-center transition-colors hover:bg-secondary md:flex-row md:gap-3 md:p-2 md:px-4 md:text-left"
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full md:h-11 md:w-11"
                  style={
                    a.color === "transparent"
                      ? undefined
                      : { backgroundColor: a.color, color: "#fff" }
                  }
                >
                  <a.icon className="h-5 w-5 md:h-6 md:w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold leading-tight text-foreground md:text-sm">
                    {a.label}
                  </span>
                  <span className="hidden truncate text-xs text-muted-foreground md:block">
                    {a.sub}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-xs md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2024 Mantri Aroha Clinic. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 opacity-90">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:underline">
              Disclaimer
            </a>
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
      <main className="pb-24 md:pb-0">
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
