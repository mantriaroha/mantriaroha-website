import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Activity,
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
import contactWhatsapp from "@/assets/contact-whatsapp.png.asset.json";
import contactCall from "@/assets/contact-call.png.asset.json";
import contactMaps from "@/assets/contact-maps.png.asset.json";
import contactTelegram from "@/assets/contact-telegram.png.asset.json";
import contactGmail from "@/assets/contact-gmail.png.asset.json";
import contactYoutube from "@/assets/contact-youtube.png.asset.json";
import iconFamily from "@/assets/icon-family.png.asset.json";
import iconClipboard from "@/assets/icon-clipboard.png.asset.json";
import iconQuitSmoking from "@/assets/icon-quit-smoking.png.asset.json";
import serviceOnline from "@/assets/service-online-v2.png.asset.json";
import serviceClinic from "@/assets/service-clinic-v2.png.asset.json";
import servicePft from "@/assets/service-pft.png.asset.json";
import serviceOnlineDesktop from "@/assets/service-online-desktop.png.asset.json";
import serviceClinicDesktop from "@/assets/service-clinic-desktop.png.asset.json";
import servicePftDesktop from "@/assets/service-pft-desktop.png.asset.json";
import servicePftMobile from "@/assets/service-pft-mobile.png.asset.json";
import libAsthma from "@/assets/lib-asthma.webp.asset.json";
import libCough from "@/assets/lib-cough.webp.asset.json";
import libAllergy from "@/assets/lib-allergy.webp.asset.json";
import libSmoking from "@/assets/lib-smoking.webp.asset.json";
import libPft from "@/assets/lib-pft.webp.asset.json";
import libCopd from "@/assets/lib-copd.webp.asset.json";
import libCopdAsthma from "@/assets/lib-copd_asthma.webp.asset.json";
import libPollution from "@/assets/lib-pollution.webp.asset.json";
import libHealthyLungs from "@/assets/lib-healthy_lungs.webp.asset.json";
import libFamilyDoc from "@/assets/lib-family_doc.webp.asset.json";
import libChestSpecialist from "@/assets/lib-chest_specialist.webp.asset.json";
import detailCopd from "@/assets/detail-copd_1_LHL.webp.asset.json";
import detailAsthma from "@/assets/detail-asthma_1_LHL.webp.asset.json";
import detailCough from "@/assets/detail-cough_LHL.webp.asset.json";
import detailAllergy from "@/assets/detail-allergy_LHL.webp.asset.json";
import detailCopdAsthma from "@/assets/detail-copd_asthma_LHL.webp.asset.json";
import detailPollution from "@/assets/detail-pollution_LHL.webp.asset.json";
import detailPft from "@/assets/detail-pft_LHL.webp.asset.json";
import detailLungs from "@/assets/detail-lungs_LHL.webp.asset.json";
import detailFamily from "@/assets/detail-fam_health_LHL.webp.asset.json";
import detailChest from "@/assets/detail-chest_LHL.webp.asset.json";
import detailAsthma2 from "@/assets/detail-asthma_2_LHL.webp.asset.json";
import detailCopd2 from "@/assets/detail-copd_2_LHL.webp.asset.json";
import detailSmoking from "@/assets/detail-smoking_LHL.webp.asset.json";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Mantri Aroha Clinic | Pulmonologist & Family Doctor — Asthma, COPD, Allergy Care",
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
        content:
          "Mantri Aroha Clinic | Pulmonologist & Family Doctor — Asthma, COPD, Allergy Care",
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
        content:
          "Mantri Aroha Clinic | Pulmonologist & Family Doctor — Asthma, COPD, Allergy Care",
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
                url: "https://mantriaroha.com/__l5e/assets-v1/4f0c9ab7-68e9-4d91-adca-d74d62ef4076/share-image.webp",
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
              image:
                "https://mantriaroha.com/__l5e/assets-v1/4f0c9ab7-68e9-4d91-adca-d74d62ef4076/share-image.webp",
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
              description:
                "MBBS, DTCD — Chest Physician & Family Physician with 12+ years of experience.",
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

const WHATSAPP_URL = "https://wa.me/919032525189";
const CALL_URL = "tel:+919032525189";
const EMAIL_URL = "mailto:mantriaroha@gmail.com";
const MAPS_URL = "https://maps.app.goo.gl/AmpGVLWHgNALawMS8?g_st=aw";
const YOUTUBE_URL = "https://www.youtube.com/@mantriaroha";
const TELEGRAM_URL = "https://t.me/+919032525189";
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
    image: serviceOnline.url,
    imageDesktop: serviceOnlineDesktop.url,
    imageClass: "object-contain",
    imageDesktopClass: "object-cover",
    title: "Online Consultation",
    titleMobile: (
      <>
        Online
        <br className="sm:hidden" /> Consultation
      </>
    ),
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
    image: serviceClinic.url,
    imageDesktop: serviceClinicDesktop.url,
    imageClass: "object-contain",
    imageDesktopClass: "object-cover",
    title: "In-Clinic Consultation",
    titleTe: "క్లినిక్‌లో సంప్రదింపులు",
    desc: "Personalized evaluation and treatment with advanced diagnostic facilities.",
  },
  {
    image: servicePft.url,
    imageMobile: servicePftMobile.url,
    imageDesktop: servicePftDesktop.url,
    imageClass: "object-cover",
    imageMobileClass: "object-contain",
    imageDesktopClass: "object-cover",
    title: "PFT",
    titleSub: "(Pulmonary Function Test / Spirometry)",
    titleTe: "ఊపిరితిత్తుల పనితీరును పరీక్షించే విధానం",
    desc: "Assess your lung function accurately with advanced spirometry testing.",
  },
];

const LIBRARY: { img: string; label: string; details?: string[] }[] = [
  { img: libCopd.url, label: "COPD", details: [detailCopd.url, detailCopd2.url] },
  { img: libAsthma.url, label: "Asthma", details: [detailAsthma.url, detailAsthma2.url] },
  { img: libCough.url, label: "Cough", details: [detailCough.url] },
  { img: libAllergy.url, label: "Allergy", details: [detailAllergy.url] },
  { img: libCopdAsthma.url, label: "COPD & Asthma", details: [detailCopdAsthma.url] },
  { img: libSmoking.url, label: "Smoking", details: [detailSmoking.url] },
  { img: libPollution.url, label: "Pollution", details: [detailPollution.url] },
  { img: libPft.url, label: "PFT", details: [detailPft.url] },
  { img: libHealthyLungs.url, label: "Healthy Lungs", details: [detailLungs.url] },
  { img: libFamilyDoc.url, label: "Family Doctor", details: [detailFamily.url] },
  { img: libChestSpecialist.url, label: "Chest Specialist", details: [detailChest.url] },
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
    <div className={`relative mx-auto aspect-square w-full max-w-md overflow-hidden ${radius}`}>
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
            className="h-[50px] w-auto shrink-0 md:h-[72px]"
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
          <Button asChild className="h-8 rounded-[10px] px-3 text-xs md:h-10 md:px-5 md:text-sm">
            <a href={BOOK_HREF}>Book a visit</a>
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

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-sm sm:aspect-[4/3]">
      {/* Background halo + ring — desktop only */}
      <div className="absolute inset-0 hidden place-items-center sm:grid" aria-hidden>
        <div className="h-[92%] w-[92%] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.primary/15)_0%,theme(colors.primary/8)_55%,transparent_72%)]" />
      </div>
      <div className="absolute inset-2 hidden place-items-center sm:grid" aria-hidden>
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
      <div className="mx-auto max-w-7xl px-4 py-1.5 md:px-8 md:py-10">

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
    <section className="mx-auto max-w-7xl px-4 pb-1.5 pt-3 md:px-8 md:py-2.5">
      <div className="rounded-[10px] border border-border bg-card p-2 shadow-sm md:p-3">
        {/* Mobile: horizontal scroll single row. Desktop: 4-col grid with dividers. */}
        <ul className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:divide-x md:divide-border">

          {TRUST.map((t) => (
            <li
              key={t.label}
              className="flex shrink-0 items-center gap-2 md:shrink md:justify-center md:gap-4 md:px-6"
            >
              <img
                src={t.img}
                alt=""
                className="h-7 w-7 shrink-0 object-contain md:h-12 md:w-12"
                loading="lazy"
              />
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
    <section id="services" className="mx-auto max-w-7xl px-4 pt-1.5 pb-3 md:px-8 md:py-6">
      <h2 className="sr-only">Our Services</h2>
<div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible lg:grid-cols-[1fr_1fr_1fr_180px] lg:gap-4">
        {SERVICES.map((s, i) => (
          <Card
            key={s.title}
            className={`flex w-[40vw] min-w-[150px] shrink-0 flex-col gap-2 overflow-hidden rounded-[12px] border-border p-2 shadow-sm sm:w-auto sm:min-w-0 sm:gap-3 sm:p-4 lg:flex-row ${i < 3 ? "lg:p-2" : ""}`}
          >
            <div className="h-24 w-full shrink-0 overflow-hidden rounded-[10px] bg-secondary/40 sm:h-40 lg:h-auto lg:w-[42%]">
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
                <h3 className="font-serif text-sm font-semibold leading-tight text-primary sm:text-lg">
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
                className="mt-2 h-8 rounded-[10px] px-3 text-[10px] font-semibold tracking-[0.14em] sm:mt-3 sm:h-9 sm:px-5 sm:text-[11px] lg:mt-2 lg:self-start"
              >
                <a href={BOOK_HREF}>Book Now</a>
              </Button>
            </div>
          </Card>
        ))}

        <Card className="relative w-[40vw] min-w-[150px] shrink-0 flex flex-col overflow-hidden rounded-[12px] border-border bg-secondary/60 p-3 shadow-sm sm:w-auto sm:min-w-0 sm:p-4">
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
            <a href={BOOK_HREF}>Book a consultation</a>
          </Button>
          <Leaf className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 rotate-12 text-primary/15" />
        </Card>
      </div>
    </section>
  );
}

function LibrarySection() {
  const [openItem, setOpenItem] = useState<typeof LIBRARY[number] | null>(null);
  const [idx, setIdx] = useState(0);
  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-2 md:px-8 md:py-3">
      <div className="mb-2 flex items-end justify-between gap-3 md:mb-3">
        <h2 className="font-serif text-[18px] font-semibold leading-tight text-primary md:text-3xl">
          Lung Health Library
        </h2>
        <a
          href="#library"
          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline md:text-sm"
        >
          View all articles <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2 md:flex md:gap-3 md:overflow-x-auto md:pb-2 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden">
        {LIBRARY.map((l) => {
          const cardClass =
            "flex items-center justify-start gap-3 rounded-[12px] border border-border bg-card p-2 pl-4 text-left text-[13px] font-semibold leading-snug text-primary transition-colors hover:border-primary hover:bg-secondary md:w-28 md:shrink-0 md:gap-2 md:p-2 md:justify-center md:text-sm";
          const inner = (
            <>
              <img src={l.img} alt="" className="h-10 w-10 shrink-0 object-contain md:h-8 md:w-8" loading="lazy" />
              <span className="md:text-center">{l.label}</span>
            </>
          );
          if (l.label === "Chest Specialist") {
            return (
              <Link key={l.label} to="/library/chest-specialist" className={cardClass}>
                {inner}
              </Link>
            );
          }
          return (
            <button
              key={l.label}
              type="button"
              onClick={() => {
                if (l.details && l.details.length > 0) {
                  setIdx(0);
                  setOpenItem(l);
                }
              }}
              className={cardClass}
            >
              {inner}
            </button>
          );
        })}
      </div>
      <Dialog open={!!openItem} onOpenChange={(o) => !o && setOpenItem(null)}>
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto p-2 sm:p-4">
          <VisuallyHidden asChild>
            <DialogTitle>{openItem?.label ?? "Lung Health"}</DialogTitle>
          </VisuallyHidden>
          {openItem?.details && (
            <div className="flex flex-col items-center gap-3">
              <img
                src={openItem.details[idx]}
                alt={openItem.label}
                className="h-auto w-full rounded-md object-contain"
              />
              {openItem.details.length > 1 && (
                <div className="flex items-center gap-2">
                  {openItem.details.map((_, i) => (
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
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-2 md:px-8 md:py-4">
      <Card className="grid gap-3 rounded-[12px] border-border p-3 shadow-sm md:grid-cols-[200px_1fr_300px] md:items-center md:gap-4 md:p-4">

        <div className="mx-auto w-40 md:w-full">
          <DoctorPortrait shape="square" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            About Dr Mantri Vijaya Bhaskar
          </h2>
          <p className="mt-2 text-foreground/80">
            Helping patients understand and manage respiratory illnesses through evidence-based
            care, clear communication, and compassionate listening.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            MBBS, DTCD, Chest Physician &amp; Family Physician
          </p>
          <p className="text-sm text-muted-foreground">
            12+ years of experience in Respiratory &amp; Family Medicine
          </p>
        </div>
        <blockquote className="rounded-[10px] border border-border bg-secondary/60 p-4">
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
      img: contactWhatsapp.url,
      label: "WhatsApp",
      sub: "Message us",
      href: WHATSAPP_URL,
      mobile: true,
    },
    {
      img: contactCall.url,
      label: "Call",
      sub: "+91 90325 25189",
      href: CALL_URL,
      mobile: true,
    },
    {
      img: contactMaps.url,
      label: "Directions",
      sub: "Find us on map",
      href: MAPS_URL,
      mobile: true,
    },
    {
      img: contactTelegram.url,
      label: "Telegram",
      sub: "Chat on Telegram",
      href: TELEGRAM_URL,
      mobile: true,
    },
    {
      img: contactGmail.url,
      label: "Email",
      sub: "mantriaroha@gmail.com",
      href: EMAIL_URL,
      mobile: false,
    },
    {
      img: contactYoutube.url,
      label: "YouTube",
      sub: "Health talks & more",
      href: YOUTUBE_URL,
      mobile: true,
    },
  ];
  return (
    <footer
      id="contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:static md:shadow-none"
    >
      <div className="mx-auto max-w-7xl px-2 py-0.5 md:px-8 md:py-3">
        <ul className="grid grid-cols-5 gap-1 md:grid-cols-6 md:gap-0 md:divide-x md:divide-border">
          {actions.map((a) => (
            <li key={a.label} className={a.mobile ? "" : "hidden md:list-item"}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 rounded-[10px] p-1 text-center transition-colors hover:bg-secondary md:flex-row md:gap-3 md:p-2 md:px-4 md:text-left"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center md:h-10 md:w-10">
                  <img
                    src={a.img}
                    alt=""
                    className="h-7 w-7 object-contain md:h-10 md:w-10"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold leading-tight text-foreground md:text-sm">
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
          <p>© 2026 Mantri Aroha Clinic. All rights reserved.</p>
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
