import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-yellow-500 text-black">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
