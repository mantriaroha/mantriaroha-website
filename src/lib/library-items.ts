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

export type LibraryItem = { img: string; label: string; details?: string[] };

export const LIBRARY: LibraryItem[] = [
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
