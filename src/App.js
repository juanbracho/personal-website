import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

import Home         from './pages/Home';
import Apps         from './pages/Apps';
import AppDetail    from './pages/AppDetail';
import AppLegal     from './pages/AppLegal';
import AppSupport   from './pages/AppSupport';
import Writing      from './pages/Writing';
import ArticleDetail from './pages/ArticleDetail';
import About        from './pages/About';
import Contact      from './pages/Contact';
import Study        from './pages/Study';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/"        element={<Navigate to="/home" replace />} />
          <Route path="/home"    element={<Home />} />
          <Route path="/apps"    element={<Apps />} />
          <Route path="/apps/:appId"             element={<AppDetail />} />
          <Route path="/apps/:appId/privacy"     element={<AppLegal legalType="privacy" />} />
          <Route path="/apps/:appId/terms"       element={<AppLegal legalType="terms" />} />
          <Route path="/apps/:appId/support"     element={<AppSupport />} />
          <Route path="/writing"                 element={<Writing />} />
          <Route path="/writing/:articleId"      element={<ArticleDetail />} />
          <Route path="/about"                   element={<About />} />
          <Route path="/contact"                 element={<Contact />} />
          <Route path="/study"                   element={<Study />} />
          {/* Legacy redirects */}
          <Route path="/articles"               element={<Navigate to="/writing" replace />} />
          <Route path="/articles/:id"           element={<Navigate to="/writing" replace />} />
          <Route path="/books"                  element={<Navigate to="/study" replace />} />
          <Route path="/portfolio"              element={<Navigate to="/study" replace />} />
          <Route path="/resume"                 element={<Navigate to="/study" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
