import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/shared/locales";

// Уточняем тип language как 'en' | 'ru'
export const useTranslation = () => {
  const { language } = useLanguage(); // language будет иметь тип 'en' | 'ru'

  const translate = (key: keyof typeof translations.en) => {
    return translations[language as keyof typeof translations][key] || key;
  };

  return { translate };
};
