import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <footer className="bg-primary text-white font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold">CharacterCoach</h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">{t('footer.quicklinks')}</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base py-1">
                {t('nav.home')}
              </Link>
              <Link to="/consultation" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base py-1">
                Consultation
              </Link>
              <Link to="/scientific-evidence" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base py-1">
                Resources
              </Link>
              <Link to="/about" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base py-1">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block text-gray-200 hover:text-white transition-colors text-sm sm:text-base py-1">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold">{t('footer.connect')}</h4>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
              <a 
                href="#" 
                className="text-gray-200 hover:text-white transition-colors hover:scale-110 transform duration-200 p-2 hover:bg-white/10 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-200 hover:text-white transition-colors hover:scale-110 transform duration-200 p-2 hover:bg-white/10 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a 
                href="mailto:contact@charactercoach.com" 
                className="text-gray-200 hover:text-white transition-colors hover:scale-110 transform duration-200 p-2 hover:bg-white/10 rounded-lg"
                aria-label="Email"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors hover:scale-110 transform duration-200 p-2 hover:bg-white/10 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-200 text-xs sm:text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
