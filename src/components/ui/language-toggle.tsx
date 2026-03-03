import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const routeMapping: Record<string, string> = {
  '/': '/ml',
  '/about': '/ml/about',
  '/services': '/ml/services',
  '/contact': '/ml/contact',
  '/services/ceramic-coating': '/ml/ceramic-coating-ottapalam',
};

const reverseRouteMapping: Record<string, string> = Object.fromEntries(
  Object.entries(routeMapping).map(([en, ml]) => [ml, en])
);

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMalayalam = location.pathname.startsWith('/ml');

  const languages = {
    en: { name: 'English', flag: '🇬🇧' },
    ml: { name: 'മലയാളം', flag: '🇮🇳' }
  };

  const currentLang = isMalayalam ? 'ml' : 'en';

  const handleLanguageChange = (lang: 'en' | 'ml') => {
    if (lang === currentLang) return;

    localStorage.setItem('preferred-language', lang);

    if (lang === 'ml') {
      const mlRoute = routeMapping[location.pathname] || '/ml';
      navigate(mlRoute);
    } else {
      const enRoute = reverseRouteMapping[location.pathname] || '/';
      navigate(enRoute);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 ${className}`}
          aria-label="Select language"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden md:inline">{languages[currentLang].name}</span>
          <span className="md:hidden">{languages[currentLang].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-xera-darkgray border-white/10">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as 'en' | 'ml')}
            className={`flex items-center gap-2 cursor-pointer ${
              currentLang === code ? 'bg-xera-red/20 text-xera-red' : 'text-white/80'
            }`}
          >
            <span>{flag}</span>
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
