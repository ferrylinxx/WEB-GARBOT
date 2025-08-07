import React from 'react';

const cityToCountry = {
  'Madrid': { code: 'ES', flag: '🇪🇸' },
  'Barcelona': { code: 'ES', flag: '🇪🇸' },
  'Valencia': { code: 'ES', flag: '🇪🇸' },
  'Sevilla': { code: 'ES', flag: '🇪🇸' },
  'Bilbao': { code: 'ES', flag: '🇪🇸' },
  'París': { code: 'FR', flag: '🇫🇷' },
  'Berlín': { code: 'DE', flag: '🇩🇪' },
  'Hamburgo': { code: 'DE', flag: '🇩🇪' },
  'Roma': { code: 'IT', flag: '🇮🇹' },
  'Milán': { code: 'IT', flag: '🇮🇹' },
  'Ámsterdam': { code: 'NL', flag: '🇳🇱' },
  'Londres': { code: 'GB', flag: '🇬🇧' }
};

// Simple FlagIcon component using emoji flags
const FlagIcon = ({ country, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  // Find the flag by country code
  const countryData = Object.values(cityToCountry).find(c => c.code === country);
  const flag = countryData ? countryData.flag : '🏳️';

  return (
    <span className={`${sizeClasses[size]} inline-block`}>
      {flag}
    </span>
  );
};

const CityWithFlag = ({ city, size = 'sm', className = '' }) => {
  const countryData = cityToCountry[city];

  if (!countryData) {
    return <span className={className}>{city}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <FlagIcon country={countryData.code} size={size} />
      <span>{city}</span>
    </span>
  );
};

const RouteWithFlags = ({ origin, destination, size = 'sm', className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <CityWithFlag city={origin} size={size} />
      <span className="text-slate-400">→</span>
      <CityWithFlag city={destination} size={size} />
    </span>
  );
};

export { CityWithFlag, RouteWithFlags };
export default RouteWithFlags;
