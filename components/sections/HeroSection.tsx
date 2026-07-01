import { ProductConfig } from '@/types';
import Link from 'next/link';
import { ArrowRight, Bot } from 'lucide-react';
import { FadeIn } from '../shared/FadeIn';
import { BadgeConfig } from '@/lib/ui-configs';

interface HeroSectionProps {
  hero: ProductConfig['hero'];
  badge: string;
  status: string;
  logoImage?: string;
}

export function HeroSection({ hero, badge, status, logoImage }: HeroSectionProps) {
  return (
    <section className="relative z-10 flex flex-col items-center text-center mb-16 pt-12 md:pt-20">
      <FadeIn delay={0.1}>
        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-[#0B0F19]/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.15)] mb-8 mx-auto overflow-hidden relative ${!logoImage ? 'p-5' : ''}`}>
          {logoImage ? (
            <img src={`/assets/uploads/${logoImage}`} alt="Logo" className="w-full h-full object-cover" />
          ) : (
            <Bot className="w-full h-full" />
          )}
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{badge}</span>
        <BadgeConfig status={status} />
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold tracking-wider uppercase">Powered by Gemini Gem</span>
      </FadeIn>

      <FadeIn delay={0.3}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight max-w-4xl mx-auto">
          {hero.title}
        </h1>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p className="text-slate-300 text-base md:text-lg leading-loose mb-10 max-w-2xl mx-auto">
          {hero.description}
        </p>
      </FadeIn>

      <FadeIn delay={0.5} className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full">
        {hero.primaryCta.href.startsWith('/') && !hero.primaryCta.href.startsWith('http') ? (
          <Link
            href={hero.primaryCta.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/20"
          >
            {hero.primaryCta.text}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        ) : (
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/20"
          >
            {hero.primaryCta.text}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        )}
        <Link
          href={hero.secondaryCta.href}
          className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-300 btn-glass inline-flex items-center justify-center"
        >
          {hero.secondaryCta.text}
        </Link>
      </FadeIn>
    </section>
  );
}
