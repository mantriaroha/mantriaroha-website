import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Mantri Aroha Clinic" },
      {
        name: "description",
        content:
          "Terms governing appointments, online consultations, payments, and use of the Mantri Aroha Clinic website.",
      },
      { property: "og:title", content: "Terms & Conditions — Mantri Aroha Clinic" },
      {
        property: "og:description",
        content:
          "Terms governing appointments, online consultations, payments, and use of the Mantri Aroha Clinic website.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <H2>Medical Services</H2>
      <P>
        The website provides online consultations, in-clinic appointments, follow-up consultations,
        preventive health guidance, general health information and educational articles.
      </P>

      <H2>Appointments</H2>
      <P>
        Appointments are subject to availability and may occasionally change due to emergencies or
        unavoidable circumstances.
      </P>

      <H2>Online Consultations</H2>
      <P>
        Online consultations are intended for initial medical guidance, second opinions, follow-up
        consultations, review of laboratory and imaging reports, preventive healthcare advice and
        general medical queries. Certain conditions require an in-person consultation or emergency
        care.
      </P>

      <H2>Payments</H2>
      <P>
        Consultation fees are payable before consultation unless otherwise specified. Payments may
        be non-refundable except at the treating doctor's discretion.
      </P>

      <H2>Patient Responsibilities</H2>
      <P>
        Patients should provide accurate information, share complete medical history, upload clear
        reports, follow prescribed treatment responsibly and seek emergency care when required.
      </P>

      <H2>Intellectual Property</H2>
      <P>
        All content, graphics, logos and educational material remain the property of Mantri Aroha
        unless otherwise stated.
      </P>

      <H2>Limitation of Liability</H2>
      <P>
        Reasonable efforts are made to provide accurate information; however, no liability is
        accepted for indirect or consequential damages arising from website use.
      </P>

      <H2>Governing Law</H2>
      <P>
        These Terms are governed by the laws of India. Jurisdiction shall lie with the courts of
        Hyderabad, Telangana.
      </P>
    </LegalPage>
  );
}
