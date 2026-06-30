'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { globalData } from '@/lib/data';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2.5 relative z-[60]">
          <Image src="/imanlogics2/logo.png" alt="Iman Logics" width={36} height={36} className="rounded-md" />
          {globalData.footer.brand_prefix}<span className="text-slate-400 font-normal">{globalData.footer.brand_suffix}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          {globalData.footer.nav.slice(0, 5).map((item) => (
            <Link key={item.label} href={item.link} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/products"
          className="hidden md:inline-flex px-5 py-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
        >
          Jelajahi Produk
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 text-slate-400 hover:text-white transition-colors relative z-[60] focus:outline-none"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-[#0B0F19] z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 px-6 items-center ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg font-medium text-slate-300 w-full mt-4">
          {globalData.footer.nav.slice(0, 5).map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="w-full max-w-[250px] text-center py-4 mt-6 text-base font-bold text-cyan-50 bg-white/5 border border-white/10 rounded-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Jelajahi Produk
          </Link>
        </nav>
      </div>
    </header>
  );
}

