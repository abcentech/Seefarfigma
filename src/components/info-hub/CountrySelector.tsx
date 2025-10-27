import { COUNTRIES } from '../../lib/constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui/card';
import { MapPin } from 'lucide-react';
import type { Country } from '../../types';

interface CountrySelectorProps {
  onCountrySelect: (country: Country) => void;
  selectedCountry?: Country;
}

export function CountrySelector({ onCountrySelect, selectedCountry }: CountrySelectorProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2>{t.infoHub.selectCountry}</h2>
        <p className="text-gray-600">{t.infoHub.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.values(COUNTRIES).map((country) => (
          <Card
            key={country.code}
            className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
              selectedCountry === country.code
                ? 'ring-2 ring-blue-600 bg-blue-50'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onCountrySelect(country.code)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onCountrySelect(country.code);
              }
            }}
            aria-pressed={selectedCountry === country.code}
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="text-5xl">{country.flag}</div>
              <h3 className="text-gray-900">{country.name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="h-3 w-3" />
                <span>{country.language.toUpperCase()}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
