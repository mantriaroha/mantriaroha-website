import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type MouseEvent, type ReactNode } from "react";
import {
  Activity,
  ClipboardList,
  Leaf,
  MapPin,
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
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { LIBRARY } from "@/lib/library-items";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import doctorPhoto from "@/assets/doctor_image.png";
import doctorTransparent from "@/assets/doctor_transparent.png";
import iconLungs from "@/assets/icon-lungs.png";
import contactWhatsapp from "@/assets/contact-whatsapp.png";
import contactCall from "@/assets/contact-call.png";
import contactMaps from "@/assets/contact-maps.png";
import contactTelegram from "@/assets/contact-telegram.png";
import contactGmail from "@/assets/contact-gmail.png";
import contactYoutube from "@/assets/contact-youtube.png";
import iconFamily from "@/assets/icon-family.png";
import iconClipboard from "@/assets/icon-clipboard.png";
import iconQuitSmoking from "@/assets/icon-quit-smoking.png";
import serviceOnline from "@/assets/service-online-v2.png";
import serviceClinic from "@/assets/service-clinic-v2.png";
import servicePft from "@/assets/service-pft.png";
import serviceOnlineDesktop from "@/assets/service-online-desktop.png";
import serviceClinicDesktop from "@/assets/service-clinic-desktop.png";
import servicePftDesktop from "@/assets/service-pft-desktop.png";
import servicePftMobile from "@/assets/service-pft-mobile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Mantri Aroha Clinic | Pulmonologist & Family Doctor — Asthma, COPD, Allergy Care",
      },
      {
        name: "description",
        content:
          "Consult Dr Mantri Vijaya Bhaskar (MBBS, DTCD) for asthma, COPD, chronic cough, allergy, smoking cessation & pulmonary function testing (PFT/Spirometry). Online & in-clinic consultations with a trusted chest physician and family doctor.",
      },
      {
        name: "keywords",
        content:
          "pulmonologist, chest physician, family doctor, asthma treatment, COPD treatment, chronic cough, allergy specialist, pulmonary function test, spirometry, PFT, online consultation, lung specialist, quit smoking, breathlessness, wheezing, Mantri Aroha Clinic, Dr Mantri Vijaya Bhaskar",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Mantri Aroha Clinic | Pulmonologist & Family Doctor — Asthma, COPD, Allergy Care",
      },
      {
        property: "og:description",
        content:
          "Expert respiratory & family care by Dr Mantri Vijaya Bhaskar — asthma, COPD, chronic cough, allergy, PFT/Spirometry. Online & in-clinic consultations. Lung Health Library with easy guides.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mantriaroha.com/" },
      {
        name: "twitter:title",
        content: "Mantri Aroha Clinic | Pulmonologist & Family Doctor — Asthma, COPD, Allergy Care",
      },
      {
        name: "twitter:description",
        content:
          "Trusted chest physician & family doctor. Asthma, COPD, allergy, chronic cough, PFT/Spirometry. Online & in-clinic consultations.",
      },
    ],
    links: [{ rel: "canonical", href: "https://mantriaroha.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalWebPage",
              "@id": "https://mantriaroha.com/#webpage",
              url: "https://mantriaroha.com/",
              name: "Mantri Aroha Clinic | Pulmonologist & Family Doctor — Asthma, COPD, Allergy Care",
              description:
                "Consult Dr Mantri Vijaya Bhaskar (MBBS, DTCD) for asthma, COPD, chronic cough, allergy, smoking cessation and pulmonary function testing (PFT/Spirometry). Online and in-clinic consultations.",
              inLanguage: "en",
              isPartOf: { "@id": "https://mantriaroha.com/#website" },
              about: { "@id": "https://mantriaroha.com/#clinic" },
              mainEntity: { "@id": "https://mantriaroha.com/#clinic" },
              medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
              lastReviewed: "2026-06-29",
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://mantriaroha.com/share-image.webp",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://mantriaroha.com/#website",
              url: "https://mantriaroha.com/",
              name: "Mantri Aroha Clinic",
              inLanguage: "en",
              publisher: { "@id": "https://mantriaroha.com/#clinic" },
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://mantriaroha.com/#clinic",
              name: "Mantri Aroha Clinic",
              alternateName: "Mantri Aroha Respiratory & Family Care",
              description:
                "Respiratory and family care clinic offering treatment for asthma, COPD, chronic cough, allergy, smoking cessation and pulmonary function testing (PFT/Spirometry).",
              url: "https://mantriaroha.com/",
              telephone: "+91-90325-25189",
              email: "mantriaroha@gmail.com",
              image: "https://mantriaroha.com/share-image.webp",
              medicalSpecialty: ["Pulmonary", "FamilyPractice"],
              areaServed: { "@type": "Country", name: "India" },
              availableService: [
                { "@type": "MedicalProcedure", name: "Online Consultation" },
                { "@type": "MedicalProcedure", name: "In-Clinic Consultation" },
                {
                  "@type": "MedicalProcedure",
                  name: "Pulmonary Function Test (PFT / Spirometry)",
                },
                { "@type": "MedicalProcedure", name: "Asthma Management" },
                { "@type": "MedicalProcedure", name: "COPD Management" },
                { "@type": "MedicalProcedure", name: "Allergy Evaluation" },
                { "@type": "MedicalProcedure", name: "Smoking Cessation Counseling" },
              ],
              physician: { "@id": "https://mantriaroha.com/#physician" },
              sameAs: ["https://www.youtube.com/@mantriaroha"],
            },
            {
              "@type": "Physician",
              "@id": "https://mantriaroha.com/#physician",
              name: "Dr Mantri Vijaya Bhaskar",
              medicalSpecialty: ["Pulmonary", "FamilyPractice"],
              description: "MBBS, DTCD — Chest Physician & Family Physician with 12+ years of experience.",
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "MBBS",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "degree",
                  name: "DTCD",
                },
              ],
              worksFor: { "@id": "https://mantriaroha.com/#clinic" },
            },
          ],
        }),
      },
    ],
  }),

  component: HomePage,
});

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=919032525189";
const CALL_URL = "tel:+919032525189";
const EMAIL_URL = "mailto:mantriaroha@gmail.com";
const MAPS_URL = "https://maps.app.goo.gl/AmpGVLWHgNALawMS8?g_st=aw";

const YOUTUBE_URL = "https://www.youtube.com/@mantriaroha";
const TELEGRAM_URL = "https://t.me/+919032525189";
const BOOK_HREF = "https://hplix.in/HPE37498-2";

const NAV = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  // { label: "Services", href: "#services" },
  { label: "Lung Health Library", href: "#library" },
  // { label: "Book Appointment", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const CONDITIONS = ["Asthma", "COPD", "Chronic Cough", "Allergy", "Preventive Lung Health"];

const TRUST = [
  { img: iconLungs, label: "Respiratory care", sub: "for all ages" },
  { img: iconFamily, label: "Family doctor", sub: "you can trust" },
  { img: iconClipboard, label: "Second opinion &", sub: "health queries" },
  { img: iconQuitSmoking, label: "Preventive care", sub: "for a healthier you" },
];

type ServiceItem = {
  image: string;
  imageDesktop: string;
  imageClass?: string;
  imageDesktopClass?: string;
  imageMobile?: string;
  imageMobileClass?: string;
  title: string;
  titleMobile?: ReactNode;
  titleSub?: string;
  titleTe?: string;
  desc: string;
  descMobile?: ReactNode;
};

const SERVICES: ServiceItem[] = [
  {
    image: serviceOnline,
    imageDesktop: serviceOnlineDesktop,
    imageClass: "object-contain",
    imageDesktopClass: "object-cover",
    title: "Online Consultation",
    titleTe: "ఆన్‌లైన్ సంప్రదింపులు",
    desc: "Get expert advice from the comfort of your home.",
    descMobile: (
      <>
        Get expert advice from
        <br className="sm:hidden" />
        the comfort of your home.
        <br className="sm:hidden" />
        Book a video call today.
      </>
    ),
  },
  {
    image: serviceClinic,
    imageDesktop: serviceClinicDesktop,
    imageClass: "object-contain",
    imageDesktopClass: "object-cover",
    title: "In-Clinic Consultation",
    titleTe: "క్లినిక్‌లో సంప్రదింపులు",
    desc: "Personalized evaluation and treatment with advanced diagnostic facilities.",
  },
  {
    image: servicePft,
    imageMobile: servicePftMobile,
    imageDesktop: servicePftDesktop,
    imageClass: "object-cover",
    imageMobileClass: "object-contain",
    imageDesktopClass: "object-cover",
    title: "PFT",
    titleSub: "(Pulmonary Function Test / Spirometry)",
    titleTe: "ఊపిరితిత్తుల పనితీరును పరీక్షించే విధానం",
    desc: "Assess your lung function accurately with advanced spirometry testing.",
  },
];

const SYMPTOMS = ["Persistent cough", "Breathlessness", "Wheezing", "Chest tightness", "Smoking history"];

function DoctorPortrait({ shape = "circle" }: { shape?: "circle" | "square" }) {
  const radius = shape === "circle" ? "rounded-full" : "rounded-[14px]";
  return (
    <div className={`relative mx-auto aspect-square w-full max-w-md overflow-hidden ${radius}`}>
      <img
        src={doctorPhoto}
        alt="Dr Mantri Vijaya Bhaskar"
        className="h-full w-full object-cover object-top"
        loading="eager"
      />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full min-h-[110px] max-sm:min-h-[132px] max-w-sm sm:aspect-square">
      <img
        src={doctorTransparent}
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
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Mobile: top row with tagline (left) + image (right). Desktop: 2-col with text/image side by side. */}
        <div className="grid grid-cols-[1fr_45%] items-center gap-1.5 md:grid-cols-2 md:gap-8">
          <div className="md:order-1">
            <div className="mt-1.5 md:mt-4">
              <p className="text-[14px] font-bold leading-tight text-foreground md:text-3xl">
                Dr. Mantri Vijaya Bhaskar
              </p>
              <p className="text-[9px] mt-1 leading-tight text-foreground/80 md:hidden">
                Chest Physician & Family Physician
                <br />
                M.B.B.S., DTCD (Chest Medicine)
              </p>
              <p className="hidden text-[11px] text-foreground/80 md:text-sm md:block">
                Chest Physician & Family Physician
                <br />
                M.B.B.S., DTCD (Chest Medicine)
              </p>
            </div>
            <h1 className="mt-2 font-script text-[20px] font-semibold leading-[1.05] tracking-tight text-primary md:mt-4 md:text-4xl lg:text-5xl">
              Helping you breathe better every day
            </h1>
            <svg className="mt-1 h-2 w-24 text-primary md:mt-2 md:w-40" viewBox="0 0 100 12" fill="none" aria-hidden>
              <path d="M2 10 Q 50 0, 98 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <p className="mt-1.5 hidden text-[11px] font-medium text-foreground/80 md:mt-3 md:block md:text-sm">
              Evidence-based care for
            </p>
            <ul className="mt-0.5 hidden flex-wrap gap-x-2 gap-y-1 text-[11px] text-foreground md:flex md:text-base">
              {CONDITIONS.map((c, i) => (
                <li key={c} className="flex items-center gap-2">
                  {i > 0 && <span className="text-primary">•</span>}
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 hidden flex-col gap-2 sm:flex sm:flex-row md:mt-5">
              <Button asChild size="lg" className="h-12 rounded-[10px] px-5">
                <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer">
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
                <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer">
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
    <section className="mx-auto max-w-7xl px-4 pb-1.5 md:px-8 md:py-2.5">
      <div className="rounded-[10px] border border-border bg-card p-2 shadow-sm md:p-3">
        {/* Mobile: horizontal scroll single row. Desktop: 4-col grid with dividers. */}
        <ul className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:divide-x md:divide-border">
          {TRUST.map((t) => (
            <li key={t.label} className="flex shrink-0 items-center gap-2 md:shrink md:justify-center md:gap-4 md:px-6">
              <img src={t.img} alt="" className="h-7 w-7 shrink-0 object-contain md:h-12 md:w-12" loading="lazy" />
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
    <section id="services" className="mx-auto max-w-7xl px-4 py-1.5 md:px-8 md:py-2">
      <h2 className="sr-only">Our Services</h2>
      <div className="grid grid-cols-2 gap-2 pb-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-[1fr_1fr_1fr_180px] lg:gap-4">
        {SERVICES.map((s, i) => (
          <Card
            key={s.title}
            className={`flex h-full flex-col gap-1 overflow-hidden rounded-[12px] border-border p-1.5 shadow-sm sm:flex-row sm:gap-3 sm:p-4 lg:flex-row ${i < 3 ? "lg:p-2" : ""}`}
          >
            <div className="h-16 w-full shrink-0 overflow-hidden rounded-[10px] bg-secondary/40 sm:h-40 lg:h-auto lg:w-[42%]">
              <img
                src={s.imageMobile || s.image}
                alt={s.title}
                className={`h-full w-full sm:hidden ${s.imageMobileClass || s.imageClass}`}
                loading="lazy"
              />
              <img
                src={s.imageDesktop}
                alt={s.title}
                className={`hidden h-full w-full sm:block ${s.imageDesktopClass}`}
                loading="lazy"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-between items-center text-center lg:items-start lg:text-left">
              <div>
                <h3 className="font-serif text-[12px] font-semibold leading-tight tracking-tight text-primary sm:text-lg">
                  <span className="sm:hidden">{s.titleMobile || s.title}</span>
                  <span className="hidden sm:inline">{s.title}</span>
                </h3>
                {s.titleSub && (
                  <p className="mt-0.5 text-[10px] leading-snug text-primary/80 sm:text-[11px]">{s.titleSub}</p>
                )}
                <p className="mt-1 text-[11px] leading-snug text-foreground/80 sm:text-[13px]">{s.titleTe}</p>
                <p className="mt-2 text-[11px] leading-snug text-muted-foreground sm:text-[13px]">
                  <span className="sm:hidden">{s.descMobile || s.desc}</span>
                  <span className="hidden sm:inline">{s.desc}</span>
                </p>
              </div>
              <Button
                asChild
                className="hidden mt-2 h-8 rounded-[10px] px-3 text-[10px] font-semibold tracking-[0.14em] sm:flex sm:mt-3 sm:h-9 sm:px-5 sm:text-[11px] lg:mt-2 lg:self-start"
              >
                <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
            </div>
          </Card>
        ))}

        <Card className="relative flex h-full flex-col overflow-hidden rounded-[12px] border-border bg-secondary/60 p-3 shadow-sm sm:w-auto sm:min-w-0 sm:p-4">
          <h3 className="font-serif text-sm font-semibold text-primary sm:text-base">Are you experiencing?</h3>
          <ul className="mt-2 space-y-2 sm:mt-3 sm:space-y-2">
            {SYMPTOMS.map((s) => (
              <li key={s} className="flex items-center gap-2 sm:gap-3">
                <Checkbox
                  id={`sx-${s}`}
                  checked={!!checked[s]}
                  onCheckedChange={(v) => setChecked((p) => ({ ...p, [s]: !!v }))}
                  className="border-primary/40 data-[state=checked]:bg-primary"
                />
                <label htmlFor={`sx-${s}`} className="text-[11px] text-foreground sm:text-xs">
                  {s}
                </label>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-auto h-8 w-full rounded-[10px] text-[11px] sm:h-9 sm:text-xs">
            <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer">Book a consultation</a>
          </Button>
          <Leaf className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 rotate-12 text-primary/15" />
        </Card>
      </div>
    </section>
  );
}

function WeAreHereForYou() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-1 pb-1.5 md:px-8 md:pt-2 md:pb-2">
      <div className="rounded-[12px] border border-border bg-card p-1.5 shadow-sm md:p-3">
        <div className="grid grid-cols-2 gap-3 md:gap-4 md:divide-x md:divide-border">
          {/* Chest Physician */}
          <div className="flex items-center gap-2 md:gap-4 md:px-4">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary md:h-16 md:w-16">
              <img src={iconLungs} alt="" className="h-5 w-5 object-contain md:h-9 md:w-9" loading="lazy" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-semibold text-foreground md:text-base">Chest Physician</h3>
              <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground md:text-xs">
                COPD, asthma, chronic cough, allergies, and smoking cessation.
              </p>
            </div>
          </div>

          {/* Family Physician */}
          <div className="flex items-center gap-2 md:gap-4 md:px-4">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary md:h-16 md:w-16">
              <img src={iconFamily} alt="" className="h-5 w-5 object-contain md:h-9 md:w-9" loading="lazy" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs font-semibold text-foreground md:text-base">Family Physician</h3>
              <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground md:text-xs">
                General consultations, test reports, preventive care & second opinions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LibrarySection() {
  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-2 md:px-8 md:py-3">
      <div className="mb-2 flex items-end justify-between gap-3 md:mb-3">
        <h2 className="font-serif text-[18px] font-semibold leading-tight text-primary md:text-3xl">
          Lung Health Library
        </h2>
        <Link
          to="/library"
          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline md:text-sm"
        >
          View all articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      {/* Mobile: all 11 items in a 2-column grid split into two groups. Desktop: row 1 = 6 items, row 2 = 5 items, each stretched to full width. */}
      <div className="space-y-2 md:space-y-3">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
          {LIBRARY.slice(0, 6).map((l) => {
            const cardClass =
              "group relative flex items-center justify-start gap-3 rounded-[12px] border border-border bg-card p-2 pl-4 pr-6 text-left text-[13px] font-semibold leading-snug text-primary cursor-pointer transition-colors hover:border-primary hover:bg-secondary md:justify-center md:px-2 md:py-1.5 md:pr-5 md:text-sm";
            return (
              <Link key={l.label} to="/library" search={{ item: l.label }} className={cardClass}>
                <img src={l.img} alt="" className="h-10 w-10 shrink-0 object-contain md:h-8 md:w-8" loading="lazy" />
                <span className="md:text-center">{l.label}</span>
                <ChevronRight
                  aria-hidden
                  className="absolute right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-primary/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </Link>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
          {LIBRARY.slice(6).map((l) => {
            const cardClass =
              "group relative flex items-center justify-start gap-3 rounded-[12px] border border-border bg-card p-2 pl-4 pr-6 text-left text-[13px] font-semibold leading-snug text-primary cursor-pointer transition-colors hover:border-primary hover:bg-secondary md:justify-center md:px-2 md:py-1.5 md:pr-5 md:text-sm";
            return (
              <Link key={l.label} to="/library" search={{ item: l.label }} className={cardClass}>
                <img src={l.img} alt="" className="h-10 w-10 shrink-0 object-contain md:h-8 md:w-8" loading="lazy" />
                <span className="md:text-center">{l.label}</span>
                <ChevronRight
                  aria-hidden
                  className="absolute right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-primary/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-2 md:px-8 md:py-2">
      <Card className="grid gap-3 rounded-[12px] border-border p-3 shadow-sm md:grid-cols-[200px_1fr_300px] md:items-center md:gap-4 md:p-4">
        <div className="mx-auto w-40 md:w-full">
          <DoctorPortrait shape="square" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">Dr Mantri Vijaya Bhaskar</h2>
          <p className="mt-2 text-foreground/80">
            Helping patients understand and manage respiratory illnesses through evidence-based care, clear
            communication, and compassionate listening.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">MBBS, DTCD, Chest Physician &amp; Family Physician</p>
          <p className="text-sm text-muted-foreground">20+ years of experience in Respiratory &amp; Family Medicine</p>
        </div>
        <blockquote className="rounded-[10px] border border-border bg-secondary/60 p-4">
          <div className="flex items-center gap-2 text-primary">
            <Quote className="h-5 w-5" />
            <span className="font-serif text-lg font-semibold">Doctor&rsquo;s Promise</span>
          </div>
          <p className="mt-2 text-sm text-foreground/80">
            Every patient deserves to understand their illness before making treatment decisions. This website is my
            commitment to providing simple, evidence-based and compassionate respiratory health information for patients
            and families.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">— Dr Mantri Vijaya Bhaskar</p>
        </blockquote>
      </Card>
    </section>
  );
}

function Footer() {
  const handleContactClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("http")) return;

    try {
      if (window.self !== window.top) {
        event.preventDefault();
        window.open(href, "_top");
      }
    } catch {
      event.preventDefault();
      window.location.href = href;
    }
  };

  const actions = [
    {
      img: contactWhatsapp,
      label: "WhatsApp",
      sub: "Message us",
      href: WHATSAPP_URL,
      mobile: true,
    },
    {
      img: contactCall,
      label: "Call",
      sub: "+91 90325 25189",
      href: CALL_URL,
      mobile: true,
    },
    {
      img: contactMaps,
      label: "Directions",
      sub: "Find us on map",
      href: MAPS_URL,
      mobile: true,
    },
    {
      img: contactTelegram,
      label: "Telegram",
      sub: "Chat on Telegram",
      href: TELEGRAM_URL,
      mobile: true,
    },
    {
      img: contactGmail,
      label: "Email",
      sub: "mantriaroha@gmail.com",
      href: EMAIL_URL,
      mobile: false,
    },
    {
      img: contactYoutube,
      label: "YouTube",
      sub: "Health talks & more",
      href: YOUTUBE_URL,
      mobile: true,
    },
  ];
  return (
    <footer
      id="contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:static md:shadow-none md:mt-2"
    >
      <div className="mx-auto max-w-7xl px-2 py-0.5 md:px-8 md:py-3">
        <ul className="grid grid-cols-5 gap-1 md:grid-cols-6 md:gap-0 md:divide-x md:divide-border">
          {actions.map((a) => (
            <li key={a.label} className={a.mobile ? "" : "hidden md:list-item"}>
              <a
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : "_self"}
                rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={handleContactClick(a.href)}
                className="flex flex-col items-center gap-1 rounded-[10px] p-1 text-center transition-colors hover:bg-secondary md:flex-row md:gap-3 md:p-2 md:px-4 md:text-left"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center md:h-10 md:w-10">
                  <img src={a.img} alt="" className="h-7 w-7 object-contain md:h-10 md:w-10" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold leading-tight text-foreground md:text-sm">
                    {a.label}
                  </span>
                  <span className="hidden truncate text-xs text-muted-foreground md:block">{a.sub}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-xs md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Mantri Aroha Clinic. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 opacity-90">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms &amp; Conditions
            </Link>
            <Link to="/disclaimer" className="hover:underline">
              Medical Disclaimer
            </Link>
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
        <div className="flex flex-col">
          <div className="order-1 md:order-1">
            <WeAreHereForYou />
          </div>
          <div className="order-3 md:order-2">
            <TrustStrip />
          </div>
          <div className="order-2 md:order-3">
            <Services />
          </div>
        </div>
        <LibrarySection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
