
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "english" | "telugu" | "tamil";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (content: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Home page translations
  "Connect Drivers with Empty Trucks": {
    english: "Connect Drivers with Empty Trucks",
    telugu: "ఖాళీ ట్రక్కులతో డ్రైవర్లను కనెక్ట్ చేయండి",
    tamil: "காலி லாரிகளுடன் டிரைவர்களை இணைக்கவும்"
  },
  "Save 50% on transportation costs": {
    english: "Save 50% on transportation costs",
    telugu: "రవాణా ఖర్చులపై 50% ఆదా చేయండి",
    tamil: "போக்குவரத்து செலவில் 50% சேமிக்கவும்"
  },
  "Sign Up as Driver": {
    english: "Sign Up as Driver",
    telugu: "డ్రైవర్‌గా సైన్ అప్ చేయండి",
    tamil: "டிரைவராக பதிவு செய்யவும்"
  },
  "Sign Up as Company": {
    english: "Sign Up as Company",
    telugu: "కంపెనీగా సైన్ అప్ చేయండి",
    tamil: "நிறுவனமாக பதிவு செய்யவும்"
  },
  // About page translations
  "About Miles Worth": {
    english: "About Miles Worth",
    telugu: "మైల్స్ వర్త్ గురించి",
    tamil: "மைல்ஸ் வொர்த் பற்றி"
  },
  "Our Mission": {
    english: "Our Mission",
    telugu: "మా లక్ష్యం",
    tamil: "எங்கள் நோக்கம்"
  },
  "Our Vision": {
    english: "Our Vision",
    telugu: "మా దృష్టి",
    tamil: "எங்கள் பார்வை"
  },
  "Our Story": {
    english: "Our Story",
    telugu: "మా కథ",
    tamil: "எங்கள் கதை"
  },
  // Common translations
  "Log In": {
    english: "Log In",
    telugu: "లాగిన్",
    tamil: "உள்நுழைய"
  },
  "Sign Up": {
    english: "Sign Up",
    telugu: "సైన్ అప్",
    tamil: "பதிவு செய்யவும்"
  },
  "Contact Us": {
    english: "Contact Us",
    telugu: "మమ్మల్ని సంప్రదించండి",
    tamil: "எங்களை தொடர்பு கொள்ளவும்"
  },
  // Pricing related text removed as requested
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("english");

  const translate = (content: string): string => {
    if (language === "english") return content;
    
    // Check if we have a translation for this content
    if (translations[content] && translations[content][language]) {
      return translations[content][language];
    }
    
    // If no translation found, return the original content
    return content;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
