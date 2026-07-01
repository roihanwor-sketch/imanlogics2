import { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FadeIn } from '@/components/shared/FadeIn';
import { getPortfolioItems } from '@/lib/portfolio';
import Link from 'next/link';
import { BadgeConfig, IconConfig } from '@/lib/ui-configs';

export const metadata: Metadata = {
  title: 'Portofolio & Eksperimen',
  description: 'Proyek sistem, AI, dan platform yang sedang dan telah dibangun.',
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioPage() {
  const items = getPortfolioItems();

  return (
    <>
      <div className="fixed w-[600px] h-[600px] bg-cyan-900/20 top-[-200px] left-[-200px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-violet-900/20 top-[20%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Portofolio & Eksperimen</h2>
              <p className="text-slate-400 text-lg">Proyek sistem, AI, dan platform yang sedang dan telah dibangun.</p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item, index) => (
              <FadeIn key={item.slug} delay={0.1 * index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col">
                <div className="glass-card p-6 rounded-2xl flex flex-col h-full group w-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`rounded-xl bg-white/5 text-slate-300 w-12 h-12 flex items-center justify-center overflow-hidden ${!item.logoImage ? 'p-3' : ''}`}>
                      {item.logoImage ? (
                        <img src={`/assets/uploads/${item.logoImage}`} alt="Logo" className="w-full h-full object-cover" />
                      ) : (
                        <IconConfig name={item.icon} className="w-6 h-6" />
                      )}
                    </div>
                    <BadgeConfig status={item.status} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-cyan-500">{item.badge}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold tracking-wide uppercase scale-90 origin-left">Gemini Gem</span>
                    </div>
                    <Link href={`/portfolio/${item.slug}`} className="hover:text-cyan-400 transition-colors">
                      <h3 className="text-lg font-bold text-white hover:text-cyan-400 transition-colors mb-3">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">{item.description}</p>
                  </div>
                  <Link href={`/portfolio/${item.slug}`} className="inline-flex items-center text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors mt-auto pt-4">
                    Lihat Detail 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
