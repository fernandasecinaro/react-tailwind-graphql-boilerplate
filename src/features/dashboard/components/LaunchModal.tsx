import { Launch } from '../types/launch';
import Image from 'next/image';

interface LaunchModalProps {
  launch: Launch | null;
  onClose: () => void;
}

const LaunchModal = ({ launch, onClose }: LaunchModalProps) => {
  if (!launch) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full m-4"
        onClick={handleContentClick}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{launch.mission_name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close modal"
          >
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

        <div className="space-y-4">
          {launch.links.mission_patch && (
            <Image
              src={launch.links.mission_patch}
              alt={`${launch.mission_name} patch`}
              className="w-32 h-32 object-contain mx-auto"
            />
          )}

          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Launch Date:</span>{' '}
            {new Date(launch.launch_date_utc).toLocaleString()}
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Rocket:</span>{' '}
            {launch.rocket.rocket_name} ({launch.rocket.rocket_type})
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Launch Site:</span>{' '}
            {launch.launch_site?.site_name_long || 'Unknown'}
          </p>

          {launch.details && (
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Details:</span> {launch.details}
            </p>
          )}

          <div className="flex gap-4 mt-4">
            {launch.links.video_link && (
              <a
                href={launch.links.video_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                Watch Video
              </a>
            )}
            {launch.links.article_link && (
              <a
                href={launch.links.article_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
              >
                Read Article
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchModal;
