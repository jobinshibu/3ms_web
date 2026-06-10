import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import Features from './pages/Features';
import Schosys from './pages/Schosys';

// Placeholder components for other pages
import UserGuide from './pages/UserGuide';
import ModuleDetail from './pages/ModuleDetail';
import Contact from './pages/Contact';
import ApplyNow from './pages/ApplyNow';
import GetApp from './pages/GetApp';
import { PrivacyPolicy, TermsConditions, RefundPolicy } from './pages/Legal';
import AppRedirect from './pages/AppRedirect';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/schosys" element={<Schosys />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/user-guide/:moduleId" element={<ModuleDetail />} />
        <Route path="/get-app" element={<GetApp />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

        {/* Deep Link Redirection Routes */}
        <Route path="/invite/*" element={<AppRedirect />} />
        <Route path="/referral/*" element={<AppRedirect />} />
        <Route path="/CharityInvitePage/*" element={<AppRedirect />} />
        <Route path="/ChitInvitePage/*" element={<AppRedirect />} />
        <Route path="/affiliate/*" element={<AppRedirect />} />
        <Route path="/store/*" element={<AppRedirect />} />
        <Route path="/service/*" element={<AppRedirect />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();
  const isRedirectPage = [
    '/invite', '/referral', '/CharityInvitePage', '/ChitInvitePage',
    '/affiliate', '/store', '/service'
  ].some(path => location.pathname.startsWith(path));

  return (
    <div className="app-wrapper">
      {!isRedirectPage && <Header />}
      <main style={{ minHeight: isRedirectPage ? '100vh' : 'calc(100vh - 400px)' }}>
        <AnimatedRoutes />
      </main>
      {!isRedirectPage && <Footer />}
    </div>
  );
}

export default App;
