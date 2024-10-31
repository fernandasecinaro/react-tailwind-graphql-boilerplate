import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
      capital
    }
  }
`;

const CountriesList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-center p-4">Error: {error.message}</div>;

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Countries List</h2>
      <div className="grid gap-4">
        {data.countries.slice(0, 10).map((country: any) => (
          <div
            key={country.code}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
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
              Languages:{' '}
              {country.languages.map((lang: any) => lang.name).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
