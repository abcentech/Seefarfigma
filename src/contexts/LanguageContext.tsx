import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language } from '../types';
import { getTranslations, isRTL, type Translations } from '../lib/i18n';
import { STORAGE_KEYS } from '../lib/constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>(getTranslations('en'));
  const [rtl, setRtl] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
    if (savedLanguage && ['en', 'fr', 'ar', 'sw'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      setTranslations(getTranslations(savedLanguage));
      setRtl(isRTL(savedLanguage));
    }
  }, []);

  // Update translations and RTL when language changes
  useEffect(() => {
    setTranslations(getTranslations(language));
    setRtl(isRTL(language));
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations,
        isRTL: rtl,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
