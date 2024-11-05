'use client';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default Layout;
