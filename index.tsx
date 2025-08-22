import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 1. Import the provider
import App from './src/App';
import URHacksPage from './src/pages/URHacksPage';
import PastTeamsPage from './src/pages/PastTeamsPage';
import ScrollToTop from './src/components/ScrollToTop';
import './src/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* 2. Wrap your app with the provider */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/urhacks" element={<URHacksPage />} />
          <Route path="/past-teams" element={<PastTeamsPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);