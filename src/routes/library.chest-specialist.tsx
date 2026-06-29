import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, CheckCircle2 } from "lucide-react";
import detailChest from "@/assets/detail-chest_LHL.webp.asset.json";
import logoFull from "@/assets/logo-full.png.asset.json";

export const Route = createFileRoute("/library/chest-specialist")({
  head: () => {
    const url =
      "https://m-a-c.lovable.app/library/chest-specialist";
    const title =
      "Chest Specialist (Pulmonologist) in Hyderabad — When to Consult | Mantri Aroha Clinic";
    const description =
      "When to see a chest physician: chronic cough, breathlessness, wheezing, asthma, COPD, allergy and sleep apnea. Spirometry / PFT, asthma & COPD plans, smoking cessation and online consultations at Mantri Aroha Clinic.";
    const image = `https://m-a-c.lovable.app${detailChest.url}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content:
            "chest specialist, pulmonologist, chest physician, asthma doctor, COPD specialist, chronic cough, breathlessness, spirometry, PFT, lung function test, smoking cessation, sleep apnea, allergy, Mantri Aroha Clinic",
        },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: "Chest specialist care at Mantri Aroha Clinic" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: title,
            description,
            url,
            inLanguage: "en",
            image,
            about: [
              { "@type": "MedicalCondition", name: "Asthma" },
              { "@type": "MedicalCondition", name: "Chronic Obstructive Pulmonary Disease" },
              { "@type": "MedicalCondition", name: "Chronic Cough" },
              { "@type": "MedicalCondition", name: "Allergy" },
              { "@type": "MedicalCondition", name: "Sleep Apnea" },
            ],
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Mantri Aroha Clinic",
              url: "https://m-a-c.lovable.app/",
              medicalSpecialty: "Pulmonary",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://m-a-c.lovable.app/" },
                { "@type": "ListItem", position: 2, name: "Lung Health Library", item: "https://m-a-c.lovable.app/#library" },
                { "@type": "ListItem", position: 3, name: "Chest Specialist", item: url },
              ],
            },
          }),
        },
      ],
    };
  },
  component: ChestSpecialistArticle,
});


function ChestSpecialistArticle() {
  return (
    <div className="min-h-screen bg-background">
      {/* Slim header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 md:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <img src={logoFull.url} alt="Mantri Aroha Clinic" className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        {/* Article meta */}
        <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary/70">
          <span>Lung Health Library</span>
          <span aria-hidden>•</span>
          <span>Chest Specialist</span>
        </div>

        <h1 className="font-serif text-3xl font-bold leading-tight text-primary md:text-5xl">
          Your Lungs. Our Expertise.
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          What a Chest Physician (Pulmonologist) does, when to consult one, and
          how specialist lung care helps you breathe — and live — better.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-y border-border py-3 text-xs text-muted-foreground md:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              MA
            </span>
            Mantri Aroha Clinic
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" /> Updated June 2026
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> 4 min read
          </span>
        </div>

        {/* Hero poster */}
        <figure className="mt-8">
          <img
            src={detailChest.url}
            alt="Infographic: When to consult a chest physician, conditions managed, services offered, and benefits of lung specialist care."
            className="w-full rounded-lg border border-border"
            loading="eager"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            A quick visual guide to chest specialist care at Mantri Aroha Clinic.
          </figcaption>
        </figure>

        {/* Body */}
        <div className="prose-article mt-10 space-y-6 text-base leading-relaxed text-foreground md:text-lg">
          <p>
            A <strong>Chest Physician</strong>, also called a{" "}
            <em>Pulmonologist</em>, specializes in preventing, diagnosing and
            treating all conditions related to your lungs and breathing. From
            everyday concerns like a stubborn cough to long-term conditions like
            asthma and COPD, a pulmonologist is the doctor trained to look after
            the full picture of your respiratory health.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            When to Consult a Chest Physician
          </h2>
          <p>
            Some respiratory symptoms quietly settle in over weeks or months.
            Others arrive suddenly. Either way, these are the signs that it is
            worth seeing a specialist rather than waiting it out:
          </p>
          <ul className="space-y-2">
            {[
              "Chronic cough that lasts more than 3 weeks",
              "Breathlessness on routine activity or at rest",
              "Wheezing or a whistling sound while breathing",
              "Smoking-related concerns or trouble quitting",
              "Known COPD or asthma with worsening symptoms",
              "Frequent exposure to dust, smoke or air pollution",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Conditions We Manage
          </h2>
          <p>
            The lungs and airways are involved in a wide range of conditions.
            A chest specialist evaluates and treats:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "Asthma",
              "COPD (Chronic Obstructive Pulmonary Disease)",
              "Allergy & Rhinitis",
              "Sleep Apnea",
              "Emphysema",
              "Interstitial Lung Disease",
              "Recurrent chest infections",
              "Smoking-related lung damage",
            ].map((c) => (
              <li
                key={c}
                className="rounded-md border border-border bg-card px-3 py-2 text-sm md:text-base"
              >
                {c}
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Services Offered
          </h2>
          <p>
            Diagnosis and ongoing care work best when they are joined up. At
            Mantri Aroha Clinic the chest care program includes:
          </p>
          <ul className="space-y-2">
            {[
              "Pulmonary Function Test (Spirometry / PFT) to measure how well your lungs work",
              "Chest X-ray and imaging guidance",
              "Asthma & COPD management with personalised plans",
              "Smoking cessation support",
              "Vaccination guidance (Flu, Pneumonia, COVID)",
              "Home & online consultations",
              "Long-term follow-up and lifestyle / breathing advice",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            The Benefits of Lung Specialist Care
          </h2>
          <p>
            Seeing a chest specialist early changes the trajectory of most
            respiratory conditions. The day-to-day benefits show up as:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "Early detection of lung issues",
              "Accurate, focused diagnosis",
              "Personalised treatment plans",
              "Improved lung function",
              "Better quality of life",
              "Longer, healthier living",
            ].map((b) => (
              <li
                key={b}
                className="rounded-md border border-border bg-secondary px-3 py-2 text-sm md:text-base"
              >
                {b}
              </li>
            ))}
          </ul>

          <blockquote className="border-l-4 border-primary bg-secondary/50 px-5 py-4 font-serif text-xl italic text-primary md:text-2xl">
            Breathe Better. Live Better.
          </blockquote>

          <p>
            Whether you prefer an <strong>in-clinic visit</strong> in a safe
            environment or an <strong>online consultation</strong> from
            anywhere, the goal is the same — know your lungs and take control
            today.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center shadow-sm">
          <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">
            Ready to consult a chest specialist?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Book an online consultation or visit Mantri Aroha Clinic.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919032525189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Book Now
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-secondary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
