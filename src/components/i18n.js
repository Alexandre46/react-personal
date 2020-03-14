import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/en.json";
import fr from "../locales/fr/fr.json";
import pt from "../locales/pt/pt.json";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      en,
      fr,
      pt
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    react: {
      wait: true,
      useSuspense: false
    },
  });

export default i18n;