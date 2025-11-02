import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'ml'>('en');

  const languages = {
    en: { name: 'English', flag: '🇬🇧' },
    ml: { name: 'മലയാളം', flag: '🇮🇳' }
  };

  const handleLanguageChange = (lang: 'en' | 'ml') => {
    setCurrentLang(lang);
    // Store preference in localStorage
    localStorage.setItem('preferred-language', lang);
    // Add hreflang tag dynamically
    const existingLink = document.querySelector('link[rel="alternate"][hreflang]');
    if (existingLink) {
      existingLink.setAttribute('hreflang', lang);
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
