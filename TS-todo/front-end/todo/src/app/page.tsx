import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex bg-white text-black min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
    </main>
  );
}