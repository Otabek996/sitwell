import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#991cf8] drop-shadow-md">
          Добро пожаловать в SITWELL
        </h1>
        <p className="text-white/70 max-w-lg">
          Навигационная панель теперь добавлена на главную страницу для предварительного просмотра.
        </p>
      </main>
    </div>
  );
}
