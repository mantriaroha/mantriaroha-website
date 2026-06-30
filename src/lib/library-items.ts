import libAsthma from "@/assets/lib-asthma.webp";
import libCough from "@/assets/lib-cough.webp";
import libAllergy from "@/assets/lib-allergy.webp";
import libSmoking from "@/assets/lib-smoking.webp";
import libPft from "@/assets/lib-pft.webp";
import libCopd from "@/assets/lib-copd.webp";
import libCopdAsthma from "@/assets/lib-copd_asthma.webp";
import libPollution from "@/assets/lib-pollution.webp";
import libHealthyLungs from "@/assets/lib-healthy_lungs.webp";
import libFamilyDoc from "@/assets/lib-family_doc.webp";
import libChestSpecialist from "@/assets/lib-chest_specialist.webp";
import detailCopd from "@/assets/detail-copd_1_LHL.webp";
import detailAsthma from "@/assets/detail-asthma_1_LHL.webp";
import detailCough from "@/assets/detail-cough_LHL.webp";
import detailAllergy from "@/assets/detail-allergy_LHL.webp";
import detailCopdAsthma from "@/assets/detail-copd_asthma_LHL.webp";
import detailPollution from "@/assets/detail-pollution_LHL.webp";
import detailPft from "@/assets/detail-pft_LHL.webp";
import detailLungs from "@/assets/detail-lungs_LHL.webp";
import detailFamily from "@/assets/detail-fam_health_LHL.webp";
import detailChest from "@/assets/detail-chest_LHL.webp";
import detailAsthma2 from "@/assets/detail-asthma_2_LHL.webp";
import detailCopd2 from "@/assets/detail-copd_2_LHL.webp";
import detailSmoking from "@/assets/detail-smoking_LHL.webp";

export type LibraryItem = { img: string; label: string; details?: string[] };

export const LIBRARY: LibraryItem[] = [
  { img: libCopd, label: "COPD", details: [detailCopd, detailCopd2] },
  { img: libAsthma, label: "Asthma", details: [detailAsthma, detailAsthma2] },
  { img: libCough, label: "Cough", details: [detailCough] },
  { img: libAllergy, label: "Allergy", details: [detailAllergy] },
  { img: libCopdAsthma, label: "COPD & Asthma", details: [detailCopdAsthma] },
  { img: libSmoking, label: "Smoking", details: [detailSmoking] },
  { img: libPollution, label: "Pollution", details: [detailPollution] },
  { img: libPft, label: "PFT", details: [detailPft] },
  { img: libHealthyLungs, label: "Healthy Lungs", details: [detailLungs] },
  { img: libFamilyDoc, label: "Family Doctor", details: [detailFamily] },
  { img: libChestSpecialist, label: "Chest Specialist", details: [detailChest] },
];
