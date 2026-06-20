export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  service?: string;
  language?: string;
  origin?: string;
  created_at?: string;
}

export type Locale = "pt" | "en";

export interface Translation {
  nav: {
    services: string;
    portfolio: string;
    pricing: string;
    testimonials: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  benefits: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  pricing: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    popularLabel: string;
    monthly: string;
    plans: Array<{
      name: string;
      price: string;
      priceUsd: string;
      description: string;
      features: string[];
      cta: string;
    }>;
  };
  portfolio: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      title: string;
      category: string;
      metric: string;
      metricLabel: string;
    }>;
  };
  howItWorks: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    steps: Array<{ title: string; description: string }>;
  };
  testimonials: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      name: string;
      role: string;
      company: string;
      text: string;
    }>;
  };
  faq: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{ question: string; answer: string }>;
  };
  contact: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    urgency: string;
    trustItems: string[];
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      serviceOptions: Array<{ value: string; label: string }>;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
    };
  };
  footer: {
    description: string;
    links: string;
    linksItems: Array<{ label: string; href: string }>;
    services: string;
    servicesItems: string[];
    contact: string;
    rights: string;
  };
}
