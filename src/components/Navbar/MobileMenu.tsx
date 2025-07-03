
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'en' | 'pt';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
}

const MobileMenu = ({ isMobileMenuOpen }: MobileMenuProps) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home'), icon: 'fas fa-home' },
    { path: '/consultation', label: t('nav.consultation'), icon: 'fas fa-comments' },
  ];

  const infoItems = [
    { path: '/about', label: t('nav.about'), icon: 'fas fa-info-circle' },
    { path: '/contact', label: t('nav.contact'), icon: 'fas fa-envelope' },
    { path: '/manifest', label: 'Manifest', icon: 'fas fa-scroll' },
  ];

  const resourceItems = [
    { path: '/blog', label: t('nav.blog'), icon: 'fas fa-blog' },
    { path: '/scientific-evidence', label: t('nav.scientificevidence'), icon: 'fas fa-flask' },
  ];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
      isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div className="py-4 space-y-2 border-t border-white/20">
        {/* Mobile Navigation Links */}
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              location.pathname === item.path
                ? 'bg-accent/20 text-accent'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <i className={`${item.icon} text-sm`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
        
        {/* Mobile Info Section */}
        <div className="pt-2 border-t border-white/20 mt-4">
          <div className="px-4 py-2 text-white/70 font-medium text-sm uppercase tracking-wide flex items-center space-x-2">
            <i className="fas fa-info text-xs"></i>
            <span>Info</span>
          </div>
          {infoItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-6 py-2 ml-4 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === item.path
                  ? 'bg-accent/20 text-accent'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <i className={`${item.icon} text-sm`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Resources Section */}
        <div className="pt-2 border-t border-white/20 mt-4">
          <div className="px-4 py-2 text-white/70 font-medium text-sm uppercase tracking-wide flex items-center space-x-2">
            <i className="fas fa-book text-xs"></i>
            <span>{t('nav.resources')}</span>
          </div>
          {resourceItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-6 py-2 ml-4 rounded-lg transition-all duration-300 font-medium ${
                location.pathname === item.path
                  ? 'bg-accent/20 text-accent'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <i className={`${item.icon} text-sm`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Language Switcher */}
        <div className="border-t border-white/20 pt-4 mt-4">
          <div className="px-4 py-2 text-white/70 font-medium text-sm uppercase tracking-wide">
            Language
          </div>
          <div className="flex space-x-2 px-4">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                language === 'en' ? 'bg-accent/20 text-accent' : 'text-white hover:bg-white/10'
              }`}
            >
              <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="w-5 h-4" />
              <span>EN</span>
            </button>
            <button
              onClick={() => handleLanguageChange('pt')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                language === 'pt' ? 'bg-accent/20 text-accent' : 'text-white hover:bg-white/10'
              }`}
            >
              <img src="https://flagcdn.com/w20/br.png" alt="Brazil Flag" className="w-5 h-4" />
              <span>PT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
