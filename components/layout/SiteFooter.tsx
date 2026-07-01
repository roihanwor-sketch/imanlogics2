import Link from 'next/link';
import Image from 'next/image';
import { globalData } from '@/lib/data';

export function SiteFooter() {
  return (
    <footer id="kontak" className="border-t border-white/5 bg-[#0B0F19] pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2.5 mb-4">
            <Image src="/logo.png" alt="Iman Logics" width={32} height={32} className="rounded-md" />
            <span>
              {globalData.footer.brand_prefix} <span className="text-slate-400">{globalData.footer.brand_suffix}</span>
            </span>
          </Link>
          <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
            {globalData.footer.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-self-end">
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Navigasi</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {globalData.footer.nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.link} className="hover:text-cyan-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Kontak</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {globalData.footer.socials.map((item) => (
                <li key={item.label}>
                  <a href={item.link} className="hover:text-cyan-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>{globalData.footer.copyright}</p>
        <p className="mt-2 md:mt-0">{globalData.footer.built_with}</p>
      </div>
    </footer>
  );
}

