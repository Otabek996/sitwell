import Navbar from '@/components/Navbar';

export default function DeliveryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold">Delivery</h1>
      </main>
    </div>
  );
}
