
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Language = 'en' | 'pt';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 outline-none">
        <img 
          src={`https://flagcdn.com/w20/${language === 'en' ? 'us' : 'br'}.png`} 
          alt={language === 'en' ? 'US Flag' : 'Brazil Flag'}
          className="w-5 h-4"
        />
        <span className="text-white font-medium text-sm uppercase">{language}</span>
        <ChevronDown className="h-4 w-4 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden mt-2 min-w-[120px] z-50">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          className={`flex items-center space-x-3 px-4 py-3 cursor-pointer transition-all duration-300 ${
            language === 'en' ? 'bg-accent/10 text-accent font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
          }`}
        >
          <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="w-5 h-4" />
          <span>EN</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('pt')}
          className={`flex items-center space-x-3 px-4 py-3 cursor-pointer transition-all duration-300 ${
            language === 'pt' ? 'bg-accent/10 text-accent font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
          }`}
        >
          <img src="https://flagcdn.com/w20/br.png" alt="Brazil Flag" className="w-5 h-4" />
          <span>PT</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
