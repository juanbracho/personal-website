import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Import pages
import About from './pages/Home';
import Apps from './pages/Apps';
import AppDetail from './pages/AppDetail';
import AppLegal from './pages/AppLegal';
import AppSupport from './pages/AppSupport';
import Portfolio from './pages/Portfolio';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Books from './pages/Books';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Redirect root ("/") to "/home" */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<About />} />
            <Route path="/apps" element={<Apps />} />
            {/* App detail pages */}
            <Route path="/apps/:appId" element={<AppDetail />} />
            <Route path="/apps/:appId/privacy" element={<AppLegal legalType="privacy" />} />
            <Route path="/apps/:appId/terms" element={<AppLegal legalType="terms" />} />
            <Route path="/apps/:appId/support" element={<AppSupport />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<ArticleDetail />} />
            <Route path="/books" element={<Books />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;