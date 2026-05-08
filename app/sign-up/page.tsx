'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, UserPlus, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      
      <div className="w-full max-w-[380px] flex flex-col">
        {/* Return to home button */}
        <div className="mb-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-transparent hover:bg-white/5 transition-colors text-xs text-white/80 hover:text-white w-max"
          >
            <ArrowLeft size={14} />
            <span>Вернуться на главную</span>
          </Link>
        </div>

        {/* Main Glass Panel */}
        <div className="glass-panel w-full p-8 flex flex-col">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-[#991cf8] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(153,28,248,0.4)]">
              <UserPlus size={24} color="white" />
            </div>
            <h1 className="text-xl font-semibold mb-1">Регистрация</h1>
            <p className="text-xs text-white/60">Создайте новый аккаунт</p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
          
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/80 ml-1">Имя</label>
            <div className="input-field flex items-center px-4 py-3 gap-3">
              <User size={18} className="text-white/50" />
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/80 ml-1">Email</label>
            <div className="input-field flex items-center px-4 py-3 gap-3">
              <Mail size={18} className="text-white/50" />
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/80 ml-1">Пароль</label>
            <div className="input-field flex items-center px-4 py-3 gap-3">
              <Lock size={18} className="text-white/50" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="text-sm flex-1"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="text-white/50 hover:text-white/80 transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-white/80 ml-1">Подтвердите пароль</label>
            <div className="input-field flex items-center px-4 py-3 gap-3">
              <Lock size={18} className="text-white/50" />
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="text-sm flex-1"
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-white/50 hover:text-white/80 transition-colors focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="primary-btn w-full py-3 mt-4 text-sm">
            Зарегистрироваться
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-full flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-xs text-white/40">или</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>
          
          <Link href="/sign-in" className="text-sm text-white/60 hover:text-white transition-colors">
            Уже есть аккаунт?
          </Link>
        </div>

      </div>
    </div>
    </div>
  );
}
