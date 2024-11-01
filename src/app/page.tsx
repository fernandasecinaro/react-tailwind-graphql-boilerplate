'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';
import Sidebar from '@/components/ui/molecules/sidebar';
import CountriesList from '@/features/dashboard/components/countries-list';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <ApolloProvider client={client}>
      <div className="flex min-h-screen">
        <Sidebar activeRoute={pathname} />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Countries Dashboard</h1>
            <div className="grid gap-8">
              <CountriesList />
            </div>
          </div>
        </main>
      </div>
    </ApolloProvider>
  );
}
