import React, { useState, useRef, useEffect } from 'react';
import FlagIcon from './flags/FlagIcon';

const cityToCountry = {
  'Madrid': 'ES',
  'Barcelona': 'ES',
  'Valencia': 'ES',
  'Sevilla': 'ES',
  'Bilbao': 'ES',
  'París': 'FR',
  'Berlín': 'DE',
  'Hamburgo': 'DE',
  'Roma': 'IT',
  'Milán': 'IT',
  'Ámsterdam': 'NL',
  'Londres': 'GB'
};

const CustomSelect = ({ value, onChange, options, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    onChange({ target: { value: option } });
    setIsOpen(false);
  };

  const getCountryCode = (city) => cityToCountry[city];

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} flex items-center justify-between w-full text-left`}
      >
        <div className="flex items-center gap-2">
          {value && getCountryCode(value) && (
            <FlagIcon country={getCountryCode(value)} size="xs" />
          )}
          <span>{value || placeholder}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-600 flex items-center gap-2 first:rounded-t-xl last:rounded-b-xl"
            >
              {getCountryCode(option) && (
                <FlagIcon country={getCountryCode(option)} size="xs" />
              )}
              <span>{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
