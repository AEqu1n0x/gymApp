// src/shared/LanguageSwitch.tsx
import { useLanguage } from "@/context/LanguageContext";
import { LanguageIcon } from "@heroicons/react/24/solid";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => setLanguage(language === "en" ? "ru" : "en");

  return (
    <button onClick={toggleLanguage} className="flex items-center gap-2 p-2">
      <LanguageIcon className="h-6 w-6" />
      {language === "en" ? "RU" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
