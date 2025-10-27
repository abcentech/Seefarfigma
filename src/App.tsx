import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { OfflineIndicator } from './components/shared/OfflineIndicator';
import { HomePage } from './pages/HomePage';
import { InfoHubPage } from './pages/InfoHubPage';
import { CampaignLibraryPage } from './pages/CampaignLibraryPage';
import { TrainingPage } from './pages/TrainingPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { FacilitatorDashboardPage } from './pages/FacilitatorDashboardPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simple client-side routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update all hrefs to use hash routing
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        if (url.origin === window.location.origin) {
          e.preventDefault();
          const path = url.pathname === '/' ? 'home' : url.pathname.slice(1);
          window.location.hash = path;
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'info-hub':
        return <InfoHubPage />;
      case 'campaigns':
        return <CampaignLibraryPage />;
      case 'training':
        return <TrainingPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'facilitator':
        return <FacilitatorDashboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-white">
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
          >
            Skip to main content
          </a>

          <Header
            onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            isMobileMenuOpen={isMobileMenuOpen}
          />

          <main id="main-content" className="flex-1">
            {renderPage()}
          </main>

          <Footer />

          {/* Offline Indicator */}
          <OfflineIndicator />

          {/* Toast Notifications */}
          <Toaster position="bottom-right" />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}
