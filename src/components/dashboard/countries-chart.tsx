import { useQuery, gql } from '@apollo/client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`;

const CountriesChart = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-center p-4">Error: {error.message}</div>;

  // Process data for visualization
  const continentData = data.countries.reduce((acc: any, country: any) => {
    const continent = country.continent.name;
    acc[continent] = (acc[continent] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(continentData).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <div className="w-full h-[400px] bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Countries by Continent</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CountriesChart;
