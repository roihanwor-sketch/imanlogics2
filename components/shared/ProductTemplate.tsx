import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { HowItWorksSection } from '@/components/sections/HowItWorks';
import { BenefitsGrid } from '@/components/sections/BenefitsGrid';
import { FaqSection } from '@/components/sections/FaqSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { ProductConfig } from '@/types';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProductTemplateProps {
  product: ProductConfig;
  backUrl: string;
  backLabel: string;
}

export function ProductTemplate({ product, backUrl, backLabel }: ProductTemplateProps) {
  return (
    <>
      <div className="fixed w-[800px] h-[800px] bg-emerald-900/20 top-[-300px] left-1/2 -translate-x-1/2 rounded-full blur-[100px] z-[-1] pointer-events-none"></div>
      <div className="fixed w-[500px] h-[500px] bg-amber-900/10 bottom-[10%] right-[-100px] rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

      <SiteHeader />
      
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 flex flex-col items-center min-h-[70vh]">
        <div className="w-full max-w-5xl mx-auto flex-col">
          
          <Link 
            href={backUrl} 
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-8 relative z-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel}
          </Link>

          <div className="glass-card rounded-[2.5rem] p-6 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-emerald-500/10 to-amber-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <HeroSection hero={product.hero} badge={product.badge} status={product.status} logoImage={product.logoImage} />
            {product.trustBar && product.trustBar.length > 0 && <TrustBar items={product.trustBar} />}
            {product.showcaseImages && <ShowcaseSection images={product.showcaseImages} />}
            {product.problems && <ProblemSection problems={product.problems} />}
            {product.solution && <SolutionSection solution={product.solution} />}
            {product.howItWorks && <HowItWorksSection howItWorks={product.howItWorks} />}
            {product.benefits && <BenefitsGrid benefits={product.benefits} />}
            
            {product.hero && (
              <div className="mt-12 text-center flex justify-center mb-12 relative z-10 border-b border-white/5 pb-16">
                  <a
                    href={product.hero.primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-emerald-50 btn-primary inline-flex items-center justify-center shadow-lg shadow-emerald-500/20"
                  >
                    Amankan Akses {product.name}
                  </a>
              </div>
            )}

            {product.faq && <FaqSection faq={product.faq} />}
            {product.pricing && <PricingSection pricing={product.pricing} />}
            
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
