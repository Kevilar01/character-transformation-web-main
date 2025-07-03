
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ResourcesDropdown = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const resourceItems = [
    { path: '/blog', label: t('nav.blog'), icon: 'fas fa-blog' },
    { path: '/scientific-evidence', label: t('nav.scientificevidence'), icon: 'fas fa-flask' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center space-x-2 px-3 py-2 rounded-md font-medium transition-all duration-300 relative group outline-none ${
        resourceItems.some(item => location.pathname === item.path)
          ? 'text-accent'
          : 'text-white hover:text-secondary'
      }`}>
        <i className="fas fa-book text-sm"></i>
        <span>{t('nav.resources')}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ${
          resourceItems.some(item => location.pathname === item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden mt-2 min-w-[200px] z-50">
        {resourceItems.map((item) => (
          <DropdownMenuItem key={item.path} asChild>
            <Link 
              to={item.path} 
              className={`flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary cursor-pointer transition-all duration-300 font-medium ${
                location.pathname === item.path ? 'bg-primary/10 text-primary' : ''
              }`}
            >
              <i className={`${item.icon} text-sm`}></i>
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResourcesDropdown;
