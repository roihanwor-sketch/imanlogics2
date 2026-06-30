import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FadeIn } from '@/components/shared/FadeIn';
import berandaData from '@/data/beranda.json';
import roadmapData from '@/data/roadmap.json';
import { BadgeConfig } from '@/lib/ui-configs';
import Link from 'next/link';
import { FolderGit2, Package, Cpu, Globe, Database, Zap } from 'lucide-react';

export default function Home() {
  const { hero, fokus, tentang, alur, cta } = berandaData;

  return (
    <>
      <div className="fixed w-[600px] h-[600px] bg-cyan-900/20 top-[-200px] left-[-200px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-violet-900/20 top-[20%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />
      
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section id="beranda" className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient-subtle">
                {hero.title} <br className="hidden md:block" /> <span className="text-gradient">{hero.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
                <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-cyan-50 btn-primary flex items-center justify-center">
                  {hero.btn_primary}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                <Link href="/products" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center">
                  {hero.btn_secondary}
                </Link>
              </div>
            </FadeIn>

            {/* Abstract AI Ecosystem Visual */}
            <FadeIn delay={0.2} className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10"></div>
              <div className="glass-card p-4 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex items-center space-x-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-95 hover:opacity-100 transition-opacity duration-500 text-slate-300">
                  {/* Slot 1: Project Inventory Metrics */}
                  <div className="h-40 rounded-lg bg-[#0B0F19]/60 border border-cyan-500/20 p-4 flex flex-col justify-between text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">Inventory Lab</span>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Live Production:</span>
                        <span className="font-mono font-bold text-white">1 Proyek</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Development:</span>
                        <span className="font-mono font-bold text-cyan-400">2 Proyek</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Research & Concept:</span>
                        <span className="font-mono font-bold text-violet-400">4 Proyek</span>
                      </div>
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 border-t border-white/5 pt-2">
                      DATABASE: 7 ITEMS SYNCED
                    </div>
                  </div>

                  {/* Slot 2: Architecture Pipeline */}
                  <div className="col-span-1 md:col-span-2 h-40 rounded-lg bg-[#0B0F19]/60 border border-violet-500/20 p-4 flex flex-col justify-between text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-violet-400 uppercase tracking-wider font-bold">Architecture Pipeline</span>
                      <span className="text-[9px] font-mono text-slate-500">STATIC SITE (SSG)</span>
                    </div>
                    <div className="flex items-center justify-around py-2 text-center text-[10px] md:text-xs font-mono">
                      <div className="px-2.5 py-1.5 rounded bg-white/5 border border-white/10">
                        <div className="text-cyan-400 font-bold">Decap CMS</div>
                        <div className="text-[8px] text-slate-500">Content (Git)</div>
                      </div>
                      <span className="text-slate-600">➔</span>
                      <div className="px-2.5 py-1.5 rounded bg-white/5 border border-white/10">
                        <div className="text-violet-400 font-bold">Next.js 15</div>
                        <div className="text-[8px] text-slate-500">Engine</div>
                      </div>
                      <span className="text-slate-600">➔</span>
                      <div className="px-2.5 py-1.5 rounded bg-white/5 border border-white/10">
                        <div className="text-emerald-400 font-bold">GitHub Pages</div>
                        <div className="text-[8px] text-slate-500">CDN Host</div>
                      </div>
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 border-t border-white/5 pt-2">
                      STACK: REACT 19 • TYPESCRIPT • TAILWIND V4
                    </div>
                  </div>

                  {/* Slot 3: Build & Security Audit Log */}
                  <div className="col-span-1 md:col-span-3 h-48 rounded-lg bg-[#0B0F19]/80 border border-white/5 p-4 font-mono text-left text-xs leading-relaxed overflow-hidden relative flex flex-col">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-2">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Security & Build Audit Log</span>
                      <span className="text-[10px] text-emerald-400">audit@imanlogics:~#</span>
                    </div>
                    <div className="flex-grow space-y-1 text-slate-400 text-[10px] md:text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">[SECURE]</span>
                        <span>Content-Security-Policy (CSP) & Subresource Integrity (SRI) active</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">[PATCH]</span>
                        <span>PostCSS updated to v8.5.10 (CVE-2024-qx2v-qp2m resolved)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">[ISOLATE]</span>
                        <span>Admin CMS interface removed from production static export</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">[OPTIMIZE]</span>
                        <span>Shared JS bundle size: 103 kB • Static Routing: 21 Pages</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded text-[10px] font-bold">
                      BUILD: SUCCESS
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. Fokus Utama */}
        <section className="py-16 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.02] via-transparent to-violet-500/[0.02] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest text-center mb-10">{fokus.title}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {fokus.items.map((item, index) => {
                  const icons = [FolderGit2, Package, Cpu, Globe, Database, Zap];
                  const Icon = icons[index] || Zap;
                  
                  return (
                    <div key={index} className="text-center p-6 rounded-2xl bg-[#0B0F19]/50 border border-white/5 hover:border-cyan-500/20 hover:bg-[#0B0F19]/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between min-h-[140px]">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-slate-300 font-bold text-xs md:text-sm group-hover:text-white transition-colors leading-snug mt-auto">{item}</div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. Tentang */}
        <section id="tentang" className="pt-24 pb-12 px-6 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                {tentang.title} <br/><span className="text-gradient">{tentang.highlight}</span>
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                {tentang.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 blur-3xl rounded-full"></div>
              <div className="glass-card rounded-2xl p-8 aspect-square flex flex-col justify-between border border-white/10 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{tentang.badge.sys}</span>
                </div>

                {/* SVG Circuit Board Schematic */}
                <div className="my-auto py-6 flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
                  <svg className="w-full max-w-[520px] h-56" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="circuit-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="circuit-grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.2" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Central Chip */}
                    <rect x="130" y="45" width="60" height="30" rx="6" fill="#0B0F19" stroke="#22d3ee" strokeWidth="1.8" filter="url(#glow)" />
                    <text x="160" y="62" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">IMAN</text>
                    <text x="160" y="71" fill="#a855f7" fontSize="6.5" fontFamily="monospace" textAnchor="middle">SYS.CORE</text>

                    {/* Left Node 1: Logic */}
                    <circle cx="30" cy="30" r="4" fill="#22d3ee" />
                    <text x="30" y="20" fill="#22d3ee" fontSize="8" fontFamily="monospace" textAnchor="middle">LOGIC</text>
                    <path d="M34 30 H70 L95 50 H130" stroke="url(#circuit-grad-cyan)" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Left Node 2: Cognitive */}
                    <circle cx="30" cy="90" r="4" fill="#a855f7" />
                    <text x="30" y="102" fill="#a855f7" fontSize="8" fontFamily="monospace" textAnchor="middle">COGNITIVE</text>
                    <path d="M34 90 H70 L95 70 H130" stroke="url(#circuit-grad-violet)" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Right Node: System */}
                    <circle cx="290" cy="60" r="4" fill="#22d3ee" />
                    <text x="290" y="50" fill="#22d3ee" fontSize="8" fontFamily="monospace" textAnchor="middle">SYSTEM</text>
                    <path d="M286 60 H240 L220 70 H190" stroke="url(#circuit-grad-cyan)" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Micro Pulses */}
                    <circle cx="75" cy="40" r="2" fill="#22d3ee" className="animate-ping" />
                    <circle cx="210" cy="70" r="2" fill="#a855f7" className="animate-ping" />
                  </svg>
                </div>

                <div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-cyan-400 mb-1">
                        <span>Context Window</span>
                        <span>92% (118k / 128k)</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 w-[92%] animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-violet-400 mb-1">
                        <span>Model Temperature</span>
                        <span>0.7 (Balanced)</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-500 w-[70%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-mono text-blue-400 mb-1">
                        <span>Response Latency</span>
                        <span>142ms</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[83%]"></div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    {tentang.badge.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{tentang.badge.subtitle}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. Cara Kerja (Alur Logika) */}
        <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white">{alur.title}</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">{alur.subtitle}</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 pointer-events-none"></div>
              {alur.items.map((item, index) => {
                const borderColors = ['border-white/10', 'border-cyan-500/30', 'border-violet-500/30'];
                const textColors = ['text-white', 'text-cyan-400', 'text-violet-400'];
                const shadows = ['shadow-[0_0_15px_rgba(255,255,255,0.05)]', 'shadow-[0_0_15px_rgba(34,211,238,0.1)]', 'shadow-[0_0_15px_rgba(168,85,247,0.1)]'];
                
                return (
                  <FadeIn key={index} delay={0.2 * index} className="glass-card p-8 rounded-2xl relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-[#0B0F19] border ${borderColors[index]} flex items-center justify-center mb-6 ${textColors[index]} font-bold font-mono text-lg ${shadows[index]}`}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Roadmap Section */}
        <section id="roadmap" className="py-24 px-6 relative border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-white">🗺️ Roadmap <span className="text-gradient">Pengembangan</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Rencana pengembangan proyek dan eksperimen sistem digital ke depan.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Garis penghubung timeline di belakang kartu pada desktop */}
              <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent pointer-events-none z-0"></div>

              {roadmapData.items.map((item, index) => {
                const accentClasses: Record<string, string> = {
                  inprogress: 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
                  prototype: 'hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
                  research: 'hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
                  concept: 'hover:border-zinc-500/50 hover:shadow-[0_0_20px_rgba(113,113,122,0.15)]'
                };
                const hoverAccent = accentClasses[item.status.toLowerCase()] || accentClasses.concept;

                return (
                  <FadeIn key={index} delay={0.1 * index} className="group relative z-10 h-full">
                    <div className={`glass-card p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 ${hoverAccent}`}>
                      {/* Watermark penomoran fase */}
                      <span className="absolute top-4 right-6 text-7xl font-bold font-mono text-white/[0.02] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none">
                        0{index + 1}
                      </span>
                      
                      <div className="mb-6 relative">
                        <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300 pr-4">{item.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between">
                        <BadgeConfig status={item.status} />
                        <span className="text-[10px] font-mono text-slate-500 tracking-wider">PHASE 0{index + 1}</span>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. CTA Penutup */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">
                {cta.title} <br className="hidden md:block" /> <span className="text-gradient">{cta.highlight}</span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10 text-lg">{cta.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-cyan-50 btn-primary">
                  {cta.btn_primary}
                </Link>
                <Link href="/products" className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                  {cta.btn_secondary}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
