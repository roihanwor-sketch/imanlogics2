import { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FadeIn } from '@/components/shared/FadeIn';
import { getProductItems } from '@/lib/products';
import Link from 'next/link';
import { BadgeConfig, IconConfig } from '@/lib/ui-configs';

export const metadata: Metadata = {
  title: 'Etalase Produk Digital',
  description: 'Koleksi alat bantu, panduan, dan sistem siap pakai yang sedang dan telah dibangun.',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  const items = getProductItems();

  return (
    <>
      <div className="fixed w-[600px] h-[600px] bg-cyan-900/20 top-[-200px] left-[-200px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-violet-900/20 top-[20%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />
      
      <main className="flex-grow pt-32 pb-24 px-6 relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Etalase <span className="text-gradient">Produk Digital</span></h2>
              <p className="text-slate-400 text-lg">Koleksi alat bantu, panduan, dan sistem siap pakai yang sedang dan telah dibangun.</p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item, index) => (
              <FadeIn key={item.slug} delay={0.1 * index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col">
                <div className="glass-card rounded-2xl p-5 flex flex-col hover:border-purple-500/30 group h-full w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`rounded-xl bg-white/5 text-slate-300 w-12 h-12 flex items-center justify-center overflow-hidden ${!item.logoImage ? 'p-3' : ''}`}>
                      {item.logoImage ? (
                        <img src={`/assets/uploads/${item.logoImage}`} alt="Logo" className="w-full h-full object-cover" />
                      ) : (
                        <IconConfig name={item.icon} className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                  <div className="mb-4 flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-purple-400 block">{item.badge}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold tracking-wide uppercase scale-90 origin-left">Gemini Gem</span>
                    </div>
                    <Link href={`/products/${item.slug}`}>
                      <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">{item.name}</h3>
                    </Link>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                    <BadgeConfig status={item.status} />
                    <Link href={`/products/${item.slug}`} className="text-slate-500 hover:text-cyan-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>
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
