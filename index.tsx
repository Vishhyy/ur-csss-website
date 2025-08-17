import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './src/App';
import URHacksPage from './src/pages/URHacksPage';
import PastTeamsPage from './src/pages/PastTeamsPage'; // 1. Make sure this line is present
import ScrollToTop from './src/components/ScrollToTop';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/urhacks" element={<URHacksPage />} />
        {/* 2. This is the missing route that caused the blank page */}
        <Route path="/past-teams" element={<PastTeamsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);