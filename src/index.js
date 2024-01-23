import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import './i18n.js';
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </StrictMode>
);
