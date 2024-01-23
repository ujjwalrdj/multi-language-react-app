import React, { useEffect } from 'react';
import '../style.css';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'fr', lang: 'French' },
  { code: 'hi', lang: 'Hindi' },
  { code: 'ar', lang: 'Arabic' },
  { code: 'he', lang: 'Hebrew' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const languageHandler = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <>
      <div className="btn-container">
        {languages.map((lng) => {
          return (
            <button
              className={lng.code === i18n.language ? 'selected' : ''}
              key={lng.code}
              onClick={() => languageHandler(lng.code)}
            >
              {lng.lang}
            </button>
          );
        })}
      </div>
    </>
  );
}
