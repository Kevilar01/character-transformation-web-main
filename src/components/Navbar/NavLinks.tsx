
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const NavLinks = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home'), icon: 'fas fa-home' },
    { path: '/consultation', label: t('nav.consultation'), icon: 'fas fa-comments' },
  ];

  return (
    <div className="flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md font-medium transition-all duration-300 relative group ${
            location.pathname === item.path
              ? 'text-accent'
              : 'text-white hover:text-secondary'
          }`}
        >
          <i className={`${item.icon} text-sm`}></i>
          <span>{item.label}</span>
          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ${
            location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}></div>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
