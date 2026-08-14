import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import EquipmentPage from './pages/EquipmentPage';
import GalleryPage from './pages/GalleryPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import ApprenticeProgramPage from './pages/ApprenticeProgramPage';
import JobDetailPage from './pages/JobDetailPage';
import EquipmentDetailPage from './pages/EquipmentDetailPage';
import PartnersPage from './pages/PartnersPage';
import LeaveReviewPage from './pages/LeaveReviewPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/equipment/:slug" element={<EquipmentDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/apprentice-program" element={<ApprenticeProgramPage />} />
            <Route path="/careers/jobs/:slug" element={<JobDetailPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/leave-a-review" element={<LeaveReviewPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
