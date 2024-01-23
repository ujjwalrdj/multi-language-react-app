import React from 'react';
import './style.css';
import { useTranslation, Trans } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
export default function App() {
  const { t } = useTranslation();

  const greeting = t('greeting');
  const { line1, line2 } = t('description', {
    website: 'StackBlitz',
  });
  return (
    <>
      <div className="container">
        <LanguageSelector />
        <h1>{greeting}</h1>
        <span>
          <Trans i18nKey={line1} components={{ 1: <b /> }} />
        </span>
        {/* <h3>{line1}</h3> */}
        <p>{line2}</p>
      </div>
    </>
  );
}
