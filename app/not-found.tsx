import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      
      {/* Huge 404 Text */}
      <h1 className="text-8xl md:text-9xl font-bold text-[#991cf8] tracking-wider mb-6 drop-shadow-[0_0_40px_rgba(153,28,248,0.3)]">
        404
      </h1>
      
      {/* Main Title */}
      <h2 className="text-xl md:text-2xl font-semibold mb-3">
        Страница не найдена
      </h2>
      
      {/* Subtitle */}
      <p className="text-xs md:text-sm text-white/60 mb-8 max-w-sm">
        Извините, запрашиваемая страница не существует
      </p>
      
      {/* Return to Home Button */}
      <Link 
        href="/" 
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#6a2a8b] hover:bg-[#7b36a1] transition-colors text-xs md:text-sm text-white shadow-lg shadow-[#6a2a8b]/20"
      >
        <Home size={16} />
        <span>Вернуться на главную</span>
      </Link>
      
    </div>
  );
}
