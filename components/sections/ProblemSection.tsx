import { ProductConfig, ProblemItem } from '@/types';
import { IconConfig } from '@/lib/ui-configs';
import { FadeIn } from '../shared/FadeIn';

interface ProblemSectionProps {
  problems: NonNullable<ProductConfig['problems']>;
}

export function ProblemSection({ problems }: ProblemSectionProps) {
  return (
    <section id="masalah" className="relative z-10 pt-4 mb-16">
      <FadeIn>
        <div className="text-center mb-12">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-4 inline-block">
            {problems.subtitle}
          </span>
          <h2 className="text-3xl font-bold text-white">{problems.title}</h2>
        </div>
      </FadeIn>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
        {problems.items.map((item, i) => (
          <FadeIn key={item.id} delay={0.1 * (i + 1)} className="w-full md:w-[calc(50%-12px)]">
            <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group h-full">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
                <IconConfig name={item.icon} className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          </FadeIn>
        ))}

        {/* Highlighted item spanning full width on md */}
        <FadeIn delay={0.5} className="w-full md:w-[calc(50%-12px)]">
          <div className="bg-[#0B0F19] border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group h-full">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-all">
              <IconConfig name={problems.highlightedItem.icon} className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">{problems.highlightedItem.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
              {problems.highlightedItem.description}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
