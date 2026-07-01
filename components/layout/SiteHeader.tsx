'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { globalData } from '@/lib/data';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = globalData.footer.nav.filter(item => item.label !== "Jelajahi Produk");
  const mobileMenuItems = [
    ...navItems,
    { label: "Jelajahi Produk", link: "/products", isPrimary: true }
  ];
  const isTotalOdd = mobileMenuItems.length % 2 !== 0;

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-[#0B0F19]/45 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-2xl border-b border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_8px_32px_0_rgba(0,0,0,0.37)] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2.5 relative z-[60]">
            <Image src="/logo.png" alt="Iman Logics" width={36} height={36} className="rounded-md" />
            <span>
              {globalData.footer.brand_prefix} <span className="text-slate-400">{globalData.footer.brand_suffix}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            {globalData.footer.nav.map((item) => (
              <Link key={item.label} href={item.link} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/products"
            className="hidden md:inline-flex px-5 py-2 text-sm font-medium text-white btn-glass rounded-lg flex items-center justify-center"
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
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-x-0 top-0 z-40 transform transition-all duration-300 ease-in-out md:hidden flex flex-col pt-24 pb-8 px-6 items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border-b border-white/10 bg-[#0B0F19]/25 backdrop-blur-md ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] mt-2">
          {mobileMenuItems.map((item, idx) => {
            const isLast = idx === mobileMenuItems.length - 1;
            const isCentered = isLast && isTotalOdd;
            const isPrimary = 'isPrimary' in item && item.isPrimary;
            const btnClass = isPrimary ? 'btn-primary' : 'btn-glass';
            
            return (
              <Link
                key={item.label}
                href={item.link}
                className={`text-center py-3 text-sm font-semibold rounded-xl flex items-center justify-center transition-all ${btnClass} ${
                  isPrimary ? 'text-cyan-50 font-bold' : 'text-slate-200'
                } ${
                  isCentered ? 'col-span-2 justify-self-center w-[calc(50%-6px)]' : 'w-full'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Backdrop detector click to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

