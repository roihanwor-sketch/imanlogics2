export interface NavItem {
  title: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  mainNav: NavItem[];
  links: {
    twitter?: string;
    github?: string;
    email?: string;
  };
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  id: string;
  title: string;
  description: string;
  stepNumber: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductConfig {
  slug: string;
  name: string;
  badge: string;
  status: string;
  icon: string;
  logoImage?: string;
  showcaseImages?: string[];
  description?: string;
  hero: {
    title: string;
    description: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
  };
  trustBar?: string[];
  problems?: {
    title: string;
    subtitle: string;
    items: ProblemItem[];
    highlightedItem: ProblemItem;
  };
  solution?: {
    title: string;
    description: string[];
    quote: string;
    cta: { text: string; href: string };
  };
  howItWorks?: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  benefits?: {
    title: string;
    items: BenefitItem[];
    highlightedItem: BenefitItem;
  };
  pricing?: {
    title: string;
    subtitle: string;
    originalPrice: string;
    currentPrice: string;
    features: string[];
    bonuses?: string[];
    cta: { text: string; href: string };
  };
  faq?: {
    title: string;
    items: FaqItem[];
  };
}
