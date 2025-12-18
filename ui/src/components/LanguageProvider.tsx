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

  // Services section
  servicesTitle: string;
  servicesSubtitle: string;
  recommended: string;

  // Services
  service1Name: string;
  service1Desc: string;
  service1Benefits: string;

  service2Name: string;
  service2Desc: string;
  service2Benefits: string;

  service3Name: string;
  service3Desc: string;
  service3Benefits: string;

  service4Name: string;
  service4Desc: string;
  service4Benefits: string;

  service5Name: string;
  service5Desc: string;
  service5Benefits: string;

  service6Name: string;
  service6Desc: string;
  service6Benefits: string;

  service7Name: string;
  service7Desc: string;
  service7Benefits: string;

  service8Name: string;
  service8Desc: string;
  service8Benefits: string;

  // Reviews section
  reviewsTitle: string;
  reviewsSubtitle: string;
  reviewsCount: string;
  viewAllReviews: string;

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
    heroTitle: "Arta Relaxării Asiatice",
    heroSubtitle: "Arta Relaxării Asiatice",
    heroDescription:
      "Experimentează arta autentică a masajului asiatic într-un sanctuar de liniște și relaxare profundă. Lasă-te purtat într-o călătorie senzorială care îți va revitaliza corpul și sufletul.",

    // Team section
    teamTitle: "Echipa Noastră",
    teamSubtitle: "Profesionist balinez cu experiență în tehnici tradiționale",
    yearsExperience: "ani experiență",
    specialties: "Specialități",

    // Team members
    team1Name: "Terapeut Balinez",
    team1Role: "Specialist Masaj Tradițional",
    team1Bio:
      "Profesionist balinez originar din Denpasar, cu 13 ani de experiență în tehnici tradiționale de masaj și relaxare. Aduce autenticitatea și arta masajului balinezian direct din inima Baliului.",
    team1Specialties:
      "Masaj Balinezian Tradițional, Masaj Thailandez, Masaj cu Pietre Calde, Lomi-Lomi Hawaiian",

    // Services section
    servicesTitle: "Meniul Nostru",
    servicesSubtitle: "Tratamente inspirate din tradițiile Asiei",
    recommended: "Recomandat",

    // Services
    service1Name: "Masaj Balinez",
    service1Desc:
      "Masaj tradițional din Bali, cu mișcări fluide, presiuni blânde și ritm învăluitor, creat pentru relaxare profundă și armonie interioară.",
    service1Benefits:
      "Relaxare profundă, Echilibru emoțional, Detensionare musculară, Reducerea stresului, Circulație îmbunătățită",

    service2Name: "Masaj Thailandez",
    service2Desc:
      "Tehnică asiatică bazată pe presopunctură și stretching pasiv, ideală pentru eliberarea tensiunii din corp și creșterea amplitudinii articulare.",
    service2Benefits:
      "Flexibilitate articulară, Detensionare profundă, Revitalizare corporală, Echilibru energetic, Claritate mentală",

    service3Name: "Masaj Sportiv",
    service3Desc:
      "Masaj activ, destinat persoanelor active, sau după efort fizic, pentru recuperare, reducerea febrei musculare și creșterea performanței musculare.",
    service3Benefits:
      "Recuperare musculară, Reducerea durerilor, Elasticitate musculară, Performanță fizică, Mobilitate crescută",

    service4Name: "Masaj cu Pietre Calde",
    service4Desc:
      "Pietre vulcanice încălzite, aplicate strategic, combinate cu masaj manual pentru relaxarea mușchilor în profunzime și detensionare continuă.",
    service4Benefits:
      "Relaxare profundă, Eliminarea tensiunilor, Circulație activată, Calm interior, Somn odihnitor, Echilibru",

    service5Name: "Masaj Lomi-Lomi Hawaiian",
    service5Desc:
      "Masaj fluid, realizat cu antebrațele și mișcări ample, pentru armonizarea corpului și restabilirea echilibrului emoțional.",
    service5Benefits:
      "Eliberare emoțională, Relaxare generală, Echilibru interior, Circulație îmbunătățită, Stare de bine",

    service6Name: "Masaj Limfatic - Anticelulitic",
    service6Desc:
      "Activează drenajul limfatic, reduce retenția de apă, îmbunătățește tonusul pielii și diminuează vizibil aspectul celulitei.",
    service6Benefits:
      "Reducere celulită, Detoxifiere, Fermitate corporală, Eliminarea retenției de apă, Stimularea metabolismului",

    service7Name: "Masaj Cap, Gât și Umeri",
    service7Desc:
      "Masaj dedicat zonelor afectate de stres, migrene sau postură incorectă, pentru relaxare rapidă și claritate mentală.",
    service7Benefits:
      "Reducerea migrenelor, Relaxare cervicală, Claritate mentală, Calm interior, Reducerea oboselii",

    service8Name: "Abonament Lunar",
    service8Desc:
      "Pachet cu 4 masaje din meniu, alegerea clientului, cu flexibilitate în programare și acces la toate beneficiile terapiilor Idyla Spa.",
    service8Benefits:
      "Economie, Experiență completă, Flexibilitate, Îngrijire constantă, Echilibru corp-minte",

    // Reviews section
    reviewsTitle: "Ce Spun Clienții Noștri",
    reviewsSubtitle: "Recenzii",
    reviewsCount: "recenzii",
    viewAllReviews: "Vezi toate recenziile",

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
    heroTitle: "The Art of Asian Relaxation",
    heroSubtitle: "The Art of Asian Relaxation",
    heroDescription:
      "Experience the authentic art of asian massage in a sanctuary of peace and deep relaxation. Let yourself be carried on a sensory journey that will revitalize your body and soul.",

    // Team section
    teamTitle: "Our Team",
    teamSubtitle:
      "Balinese professional with experience in traditional techniques",
    yearsExperience: "years experience",
    specialties: "Specialties",

    // Team members
    team1Name: "Balinese Therapist",
    team1Role: "Traditional Massage Specialist",
    team1Bio:
      "Balinese professional from Denpasar with 13 years of experience in traditional massage and relaxation techniques. Brings the authenticity and art of Balinese massage directly from the heart of Bali.",
    team1Specialties:
      "Traditional Balinese Massage, Thai Massage, Hot Stone Massage, Lomi-Lomi Hawaiian",

    // Services section
    servicesTitle: "Our Menu",
    servicesSubtitle: "Treatments inspired by Asian traditions",
    recommended: "Recommended",

    // Services
    service1Name: "Balinese Massage",
    service1Desc:
      "Traditional Balinese massage with fluid movements, gentle pressure, and an enveloping rhythm, designed for deep relaxation and inner harmony.",
    service1Benefits:
      "Deep relaxation, Emotional balance, Muscle tension relief, Stress reduction, Improved circulation",

    service2Name: "Thai Massage",
    service2Desc:
      "Asian technique based on acupressure and passive stretching, ideal for releasing body tension and increasing joint mobility.",
    service2Benefits:
      "Joint flexibility, Deep tension release, Body revitalization, Energy balance, Mental clarity",

    service3Name: "Sports Massage",
    service3Desc:
      "Active massage designed for active individuals, or after physical effort, for recovery, reducing muscle soreness, and enhancing performance.",
    service3Benefits:
      "Muscle recovery, Pain reduction, Muscle elasticity, Physical performance, Increased mobility",

    service4Name: "Hot Stone Massage",
    service4Desc:
      "Heated volcanic stones strategically applied, combined with manual massage for deep muscle relaxation and continuous tension relief.",
    service4Benefits:
      "Deep relaxation, Tension elimination, Activated circulation, Inner calm, Restful sleep, Balance",

    service5Name: "Lomi-Lomi Hawaiian Massage",
    service5Desc:
      "Fluid massage performed with forearms and sweeping movements, for body harmonization and restoring emotional balance.",
    service5Benefits:
      "Emotional release, General relaxation, Inner balance, Improved circulation, Wellbeing",

    service6Name: "Lymphatic - Anti-Cellulite Massage",
    service6Desc:
      "Activates lymphatic drainage, reduces water retention, improves skin tone, and visibly diminishes the appearance of cellulite.",
    service6Benefits:
      "Cellulite reduction, Detoxification, Body firmness, Water retention elimination, Metabolism boost",

    service7Name: "Head, Neck & Shoulders Massage",
    service7Desc:
      "Massage dedicated to areas affected by stress, migraines, or poor posture, for quick relaxation and mental clarity.",
    service7Benefits:
      "Migraine relief, Cervical relaxation, Mental clarity, Inner calm, Fatigue reduction",

    service8Name: "Monthly Subscription",
    service8Desc:
      "Package of 4 massages from the menu, client's choice, with scheduling flexibility and access to all Idyla Spa therapy benefits.",
    service8Benefits:
      "Savings, Complete experience, Flexibility, Constant care, Body-mind balance",

    // Reviews section
    reviewsTitle: "What Our Clients Say",
    reviewsSubtitle: "Reviews",
    reviewsCount: "reviews",
    viewAllReviews: "View all reviews",

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
