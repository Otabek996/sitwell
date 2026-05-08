'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Armchair, 
  Phone, 
  User, 
  LayoutGrid, 
  Search, 
  ShoppingBag, 
  ArrowLeftRight, 
  Globe 
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/delivery', label: 'Доставка' },
    { href: '/contacts', label: 'Позвоните нам' },
    { href: '/about', label: 'О нас' },
    { href: '/basket', label: 'Корзина' },
  ];

  return (
    <nav className="w-full flex flex-col gap-4 py-4 px-6 md:px-12 z-50">
      
      {/* Top Row */}
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
          <Armchair size={28} className="text-[#991cf8]" />
          <span className="text-xl font-bold tracking-widest">SITWELL</span>
        </Link>

        {/* Main Navigation */}
        <div className="hidden lg:flex items-center bg-[#3a164c] rounded-full p-1 border border-white/5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-white text-[#140a1e]' 
                    : 'text-white hover:text-[#991cf8]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Top Right Actions */}
        <div className="flex items-center gap-3">
          <a href="tel:+998946670777" className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3a164c] border border-white/5 hover:bg-[#4a215e] transition-colors text-white text-sm">
            <Phone size={16} className="text-white/70" />
            <span>+998 94 667 07 77</span>
          </a>
          <Link href="/sign-in" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3a164c] border border-white/5 hover:bg-[#4a215e] transition-colors text-white text-sm">
            <User size={16} className="text-white/70" />
            <span>Sign in</span>
          </Link>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center gap-3 w-full">
        
        {/* Catalog Button */}
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#991cf8] hover:bg-[#af40ff] transition-colors text-white text-sm font-medium shrink-0">
          <LayoutGrid size={18} />
          <span>Каталог</span>
        </button>

        {/* Search Bar */}
        <div className="flex-1 flex items-center bg-[#3a164c] rounded-full px-5 py-3 border border-white/5 focus-within:border-[#991cf8] transition-colors">
          <input 
            type="text" 
            placeholder="Поиск" 
            className="w-full bg-transparent border-none outline-none text-white text-sm placeholder:text-white/40"
          />
          <button className="text-white/50 hover:text-white transition-colors ml-2">
            <Search size={18} />
          </button>
        </div>

        {/* Bottom Right Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link href="/basket" className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#991cf8] hover:bg-[#af40ff] transition-colors text-white text-sm font-medium">
            <ShoppingBag size={18} />
            <span>Мои заказы</span>
          </Link>
          
          <Link href="/compare" className="flex items-center justify-center w-11 h-11 rounded-full bg-[#3a164c] border border-white/5 hover:bg-[#4a215e] transition-colors text-white">
            <ArrowLeftRight size={18} />
          </Link>
          
          <button className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#3a164c] border border-white/5 hover:bg-[#4a215e] transition-colors text-white text-sm">
            <Globe size={18} className="text-white/70" />
            <span>Ru</span>
          </button>
        </div>

      </div>

    </nav>
  );
}
