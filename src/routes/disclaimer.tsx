import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2, P } from "@/components/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer — Mantri Aroha Clinic" },
      {
        name: "description",
        content:
          "Educational, online consultation and emergency disclaimers for the Mantri Aroha Clinic website.",
      },
      { property: "og:title", content: "Medical Disclaimer — Mantri Aroha Clinic" },
      {
        property: "og:description",
        content:
          "Educational, online consultation and emergency disclaimers for the Mantri Aroha Clinic website.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage title="Medical Disclaimer">
      <H2>Educational Purpose</H2>
      <P>
        Information on this website is intended for educational purposes only and is not a
        substitute for professional medical advice, diagnosis or treatment.
      </P>

      <H2>Online Consultation Disclaimer</H2>
      <P>
        Online consultations are useful for initial consultations, second opinions, follow-up care,
        preventive health guidance, review of laboratory or diagnostic reports and general medical
        queries. They may not be appropriate for every medical condition.
      </P>

      <H2>Emergency Disclaimer</H2>
      <P>
        This website is not intended for medical emergencies. For severe chest pain, severe
        breathlessness, stroke symptoms, loss of consciousness, uncontrolled bleeding or other
        emergencies, immediately contact local emergency services or visit the nearest hospital.
      </P>

      <H2>Doctor–Patient Relationship</H2>
      <P>
        Reading educational material does not create a doctor–patient relationship. Such a
        relationship is established only after a consultation has been accepted by the physician.
      </P>

      <H2>Important Notice</H2>
      <P>
        The health information available on this website is intended for educational purposes only
        and should not replace professional medical advice, diagnosis or treatment. Online
        consultations are useful for initial consultations, second opinions, follow-up care,
        preventive health guidance, general medical queries and review of laboratory or diagnostic
        reports. Some medical conditions require physical examination or emergency care. If you
        are experiencing a medical emergency, please visit the nearest hospital or contact your
        local emergency services immediately.
      </P>
    </LegalPage>
  );
}
