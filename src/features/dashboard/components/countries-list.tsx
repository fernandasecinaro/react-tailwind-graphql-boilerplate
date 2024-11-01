import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Country } from '../types/country';
import CountryModal from './country-modal';
import { GET_COUNTRIES_LIST } from '../graphql/get-countries-list';

const CountriesList = () => {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES_LIST
  );
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-center p-4">Error: {error.message}</div>;

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Countries List</h2>
      <div className="grid gap-4">
        {data?.countries.map((country) => (
          <div
            key={country.code}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => {
              console.log('hola');
              setSelectedCountry(country);
            }}
          >
            <h3 className="font-semibold">{country.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Continent: {country.continent.name}
            </p>
            {country.capital && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Capital: {country.capital}
              </p>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Languages: {country.languages.map((lang) => lang.name).join(', ')}
            </p>
          </div>
        ))}
      </div>

      <CountryModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </div>
  );
};

export default CountriesList;
