import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white">SAFE-MIT</span>
                <span className="text-xs">Digital Platform</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering safe and informed migration decisions through accessible information and training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/info-hub" className="hover:text-white transition-colors">
                  {t.navigation.infoHub}
                </a>
              </li>
              <li>
                <a href="/campaigns" className="hover:text-white transition-colors">
                  {t.navigation.campaigns}
                </a>
              </li>
              <li>
                <a href="/training" className="hover:text-white transition-colors">
                  {t.navigation.training}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/info-hub#faq" className="hover:text-white transition-colors">
                  {t.infoHub.faq}
                </a>
              </li>
              <li>
                <a href="/data-governance/consent" className="hover:text-white transition-colors">
                  {t.dataGovernance.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@safe-mit.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+234 800 SAFE MIT</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Regional offices in Nigeria, Senegal, Morocco, and Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} SAFE-MIT Digital Platform. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/data-governance/consent" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
