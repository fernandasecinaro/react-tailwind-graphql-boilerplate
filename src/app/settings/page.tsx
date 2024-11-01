'use client';

import Sidebar from '@/components/ui/molecules/sidebar';
import { usePathname } from 'next/navigation';

export default function Settings() {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <Sidebar activeRoute={pathname} />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Settings</h1>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <p>Settings content goes here</p>
          </div>
        </div>
      </main>
    </div>
  );
}
