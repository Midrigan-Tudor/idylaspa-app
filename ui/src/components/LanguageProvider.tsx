import { createContext, useContext, useMemo, useState } from "react";

type Language = "ro" | "en";

// Translation types
interface Translations {
  // Header
  bookAppointment: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;

  // Team section
  teamTitle: string;
  teamSubtitle: string;
  yearsExperience: string;
  specialties: string;

  // Team members
  team1Name: string;
  team1Role: string;
  team1Bio: string;
  team1Specialties: string;

  team2Name: string;
  team2Role: string;
  team2Bio: string;
  team2Specialties: string;

  team3Name: string;
  team3Role: string;
  team3Bio: string;
  team3Specialties: string;

  // Services section
  servicesTitle: string;
  servicesSubtitle: string;
  duration: string;
  minutes: string;

  // Services
  service1Name: string;
  service1Desc: string;

  service2Name: string;
  service2Desc: string;

  service3Name: string;
  service3Desc: string;

  service4Name: string;
  service4Desc: string;

  service5Name: string;
  service5Desc: string;

  service6Name: string;
  service6Desc: string;

  // Footer
  location: string;
  contactUs: string;
  followUs: string;
  allRightsReserved: string;
}

const translations: Record<Language, Translations> = {
  ro: {
    // Header
    bookAppointment: "Programare",

    // Hero
    heroTitle: "Descoperă Armonia Interioară",
    heroSubtitle: "IDYLA SPA",
    heroDescription:
      "Experimentează arta autentică a masajului balinezian într-un sanctuar de liniște și relaxare profundă. Lasă-te purtat într-o călătorie senzorială care îți va revitaliza corpul și sufletul.",

    // Team section
    teamTitle: "Echipa Noastră",
    teamSubtitle:
      "Terapeuți certificați cu experiență în tehnici tradiționale balineziene",
    yearsExperience: "ani experiență",
    specialties: "Specialități",

    // Team members
    team1Name: "Maria Ionescu",
    team1Role: "Terapeut Principal",
    team1Bio:
      "Cu o pasiune pentru vindecarea holistică, Maria aduce tehnici tradiționale balineziene combinate cu metode moderne de relaxare.",
    team1Specialties: "Masaj Balinezian, Aromaterapie, Reflexologie",

    team2Name: "Elena Popescu",
    team2Role: "Specialist Masaj Terapeutic",
    team2Bio:
      "Elena s-a specializat în tehnici de eliberare a tensiunii musculare și recuperare, oferind tratamente personalizate pentru fiecare client.",
    team2Specialties: "Masaj cu Pietre Calde, Deep Tissue, Shiatsu",

    team3Name: "Ana Vasilescu",
    team3Role: "Terapeut Wellness",
    team3Bio:
      "Ana creează experiențe senzoriale unice, combinând ritualuri tradiționale cu ingrediente naturale din Bali.",
    team3Specialties: "Ritual Tropical, Scrub Corporal, Masaj Relaxant",

    // Services section
    servicesTitle: "Meniul Nostru",
    servicesSubtitle:
      "Tratamente inspirate din tradițiile milenare ale insulei Bali",
    duration: "Durată",
    minutes: "minute",

    // Services
    service1Name: "Masaj Balinezian Tradițional",
    service1Desc:
      "O combinație armonioasă de tehnici de presopunctură, stretching și aromaterapie pentru o relaxare profundă.",

    service2Name: "Ritual cu Pietre Calde",
    service2Desc:
      "Pietre vulcanice încălzite plasate strategic pe corp pentru a elibera tensiunea și a restabili energia.",

    service3Name: "Masaj Deep Tissue",
    service3Desc:
      "Tehnici intensive care vizează straturile profunde ale mușchilor pentru eliberarea tensiunilor cronice.",

    service4Name: "Aromaterapie Tropicală",
    service4Desc:
      "Uleiuri esențiale exotice din Bali combinate cu mișcări lente și fluide pentru o experiență senzorială completă.",

    service5Name: "Reflexologie Plantară",
    service5Desc:
      "Stimularea punctelor reflexe ale picioarelor pentru a restabili echilibrul întregului organism.",

    service6Name: "Ritual Regal Balinezian",
    service6Desc:
      "Experiența noastră supremă: scrub corporal, masaj complet, și tratament facial cu ingrediente naturale.",

    // Footer
    location: "Locație",
    contactUs: "Contact",
    followUs: "Urmărește-ne",
    allRightsReserved: "Toate drepturile rezervate",
  },
  en: {
    // Header
    bookAppointment: "Booking",

    // Hero
    heroTitle: "Discover Inner Harmony",
    heroSubtitle: "IDYLA SPA",
    heroDescription:
      "Experience the authentic art of Balinese massage in a sanctuary of peace and deep relaxation. Let yourself be carried on a sensory journey that will revitalize your body and soul.",

    // Team section
    teamTitle: "Our Team",
    teamSubtitle:
      "Certified therapists with experience in traditional Balinese techniques",
    yearsExperience: "years experience",
    specialties: "Specialties",

    // Team members
    team1Name: "Maria Ionescu",
    team1Role: "Lead Therapist",
    team1Bio:
      "With a passion for holistic healing, Maria brings traditional Balinese techniques combined with modern relaxation methods.",
    team1Specialties: "Balinese Massage, Aromatherapy, Reflexology",

    team2Name: "Elena Popescu",
    team2Role: "Therapeutic Massage Specialist",
    team2Bio:
      "Elena specializes in muscle tension release and recovery techniques, offering personalized treatments for each client.",
    team2Specialties: "Hot Stone Massage, Deep Tissue, Shiatsu",

    team3Name: "Ana Vasilescu",
    team3Role: "Wellness Therapist",
    team3Bio:
      "Ana creates unique sensory experiences, combining traditional rituals with natural ingredients from Bali.",
    team3Specialties: "Tropical Ritual, Body Scrub, Relaxation Massage",

    // Services section
    servicesTitle: "Our Menu",
    servicesSubtitle:
      "Treatments inspired by the ancient traditions of Bali island",
    duration: "Duration",
    minutes: "minutes",

    // Services
    service1Name: "Traditional Balinese Massage",
    service1Desc:
      "A harmonious combination of acupressure, stretching, and aromatherapy techniques for deep relaxation.",

    service2Name: "Hot Stone Ritual",
    service2Desc:
      "Heated volcanic stones strategically placed on the body to release tension and restore energy.",

    service3Name: "Deep Tissue Massage",
    service3Desc:
      "Intensive techniques targeting deep muscle layers to release chronic tension.",

    service4Name: "Tropical Aromatherapy",
    service4Desc:
      "Exotic essential oils from Bali combined with slow, fluid movements for a complete sensory experience.",

    service5Name: "Foot Reflexology",
    service5Desc:
      "Stimulation of foot reflex points to restore balance throughout the entire body.",

    service6Name: "Royal Balinese Ritual",
    service6Desc:
      "Our ultimate experience: body scrub, full massage, and facial treatment with natural ingredients.",

    // Footer
    location: "Location",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("ro");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ro" ? "en" : "ro"));
  };

  const t = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
