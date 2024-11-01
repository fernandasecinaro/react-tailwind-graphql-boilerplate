import { Country } from '../types/country';

interface CountryModalProps {
  country: Country | null;
  onClose: () => void;
}

const CountryModal = ({ country, onClose }: CountryModalProps) => {
  console.log(country, 'country');
  if (!country) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{country.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Country Code:</span> {country.code}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Continent:</span>{' '}
            {country.continent.name}
          </p>
          {country.capital && (
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          )}
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Languages:</span>{' '}
            {country.languages.map((lang) => lang.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
