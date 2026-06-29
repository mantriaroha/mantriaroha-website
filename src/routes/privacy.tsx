import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P, UL } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Mantri Aroha Clinic" },
      {
        name: "description",
        content:
          "How Mantri Aroha Clinic collects, uses and protects your personal and medical information.",
      },
      { property: "og:title", content: "Privacy Policy — Mantri Aroha Clinic" },
      {
        property: "og:description",
        content:
          "How Mantri Aroha Clinic collects, uses and protects your personal and medical information.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <P>
        Welcome to Mantri Aroha ("Website", "we", "our", or "us"). We respect your privacy and are
        committed to protecting the personal information you share with us.
      </P>

      <H2>Information We Collect</H2>
      <UL>
        <li>Name</li>
        <li>Age</li>
        <li>Gender</li>
        <li>Mobile number</li>
        <li>Email address</li>
        <li>Appointment details</li>
        <li>Medical history voluntarily shared</li>
        <li>Uploaded reports and prescriptions</li>
        <li>Payment information (processed through secure third-party payment gateways)</li>
        <li>Device and browser information</li>
      </UL>

      <H2>How We Use Your Information</H2>
      <P>
        Your information is used to schedule appointments, provide consultations, maintain medical
        records, respond to enquiries, improve patient care, send reminders and comply with
        applicable legal requirements.
      </P>

      <H2>Data Protection</H2>
      <P>
        We use reasonable administrative and technical safeguards to protect your information.
        However, no internet-based system can guarantee absolute security.
      </P>

      <H2>Sharing of Information</H2>
      <P>
        We do not sell or rent personal information. Information may be shared only when required
        by law, with laboratories or diagnostic centres upon your request or consent, or with
        secure technology service providers supporting the website.
      </P>

      <H2>Cookies</H2>
      <P>This website may use cookies to improve user experience and functionality.</P>

      <H2>Third-Party Links</H2>
      <P>
        We are not responsible for the privacy practices of external websites linked from this
        site.
      </P>

      <H2>Children's Privacy</H2>
      <P>
        Parents or legal guardians should provide information for patients below 18 years of age.
      </P>

      <H2>Changes</H2>
      <P>This policy may be updated periodically without prior notice.</P>
    </LegalPage>
  );
}
