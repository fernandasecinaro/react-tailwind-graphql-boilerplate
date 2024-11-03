'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Launch } from '../types/launch';
import { GET_LAUNCHES } from '../api/get-launches';
import LaunchModal from './LaunchModal';
import Image from 'next/image';

const LaunchesList = () => {
  const { loading, error, data } = useQuery<{ launches: Launch[] }>(
    GET_LAUNCHES
  );
  const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error)
    return <div className="text-center p-4">Error: {error.message}</div>;

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Launches</h2>
      <div className="grid gap-4">
        {data?.launches.map((launch) => (
          <div
            key={launch.id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setSelectedLaunch(launch)}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{launch.mission_name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(launch.launch_date_utc).toLocaleDateString()}
                </p>
              </div>
              {launch.links.mission_patch && (
                <Image
                  src={launch.links.mission_patch}
                  alt={`${launch.mission_name} patch`}
                  className="w-12 h-12 object-contain"
                />
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Rocket: {launch.rocket.rocket_name} ({launch.rocket.rocket_type})
            </p>
            {launch.details && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                {launch.details}
              </p>
            )}
          </div>
        ))}
      </div>

      <LaunchModal
        launch={selectedLaunch}
        onClose={() => setSelectedLaunch(null)}
      />
    </div>
  );
};

export default LaunchesList;
