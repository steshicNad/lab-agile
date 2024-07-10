import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from './en/component';
import ruTranslation from './ru/component';

export const supportedLngs = {
  en: "English",
  ru: "Russian",
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation }
    },
    fallbackLng: "en",
      supportedLngs: Object.keys(supportedLngs),
      interpolation: {
        escapeValue: false,
      },
  });

export default i18n;
