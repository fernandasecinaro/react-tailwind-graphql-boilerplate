import LaunchesList from '@/features/dashboard/components/LaunchesList';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8 ">SpaceX Dashboard</h1>
      <div className="grid gap-8">
        <LaunchesList />
      </div>
    </div>
  );
}
