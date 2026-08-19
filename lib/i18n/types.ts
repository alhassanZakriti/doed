export const locales = ["en", "nl", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const rtlLocales: Locale[] = ["ar"];

export type ServiceItem = {
  title: string;
  description: string;
};

export type BulletItem = {
  label: string;
  description: string;
};

export type StepItem = {
  title: string;
  caption: string;
};

export type Dictionary = {
  slogan: string;
  metaDescription: string;
  nav: {
    services: string;
    about: string;
    expertise: string;
    tools: string;
    openMenu: string;
    closeMenu: string;
  };
  lang: {
    label: string;
    en: string;
    nl: string;
    fr: string;
    ar: string;
  };
  buttons: {
    exploreExpertise: string;
    bookConsultation: string;
    sendMessage: string;
    exploreServices: string;
  };
  footer: {
    sections: string;
    helpCenter: string;
    informations: string;
    social: string;
    home: string;
    ourServices: string;
    blog: string;
    contact: string;
    portfolio: string;
    help: string;
    privacy: string;
    terms: string;
    cookies: string;
    netherlands: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroBody: string;
    winTitle: string;
    winIntro: string;
    winBullets: BulletItem[];
    moroccanExpertise: string;
    dutchLeadership: string;
    synergy: string;
    servicesTitle: string;
    servicesIntro: string;
    collaborateTitle: string;
    collaborateIntro: string;
    steps: StepItem[];
    technologiesTitle: string;
    contactTitle: string;
    contactBody: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    sectionTitle: string;
    sectionBody: string;
    netherlandsLabel: string;
    netherlandsValue: string;
    phoneLabel: string;
    emailLabel: string;
    formSent: string;
  };
  form: {
    nameCompany: string;
    email: string;
    challenge: string;
    challengePlaceholder: string;
    challenges: {
      ai: string;
      data: string;
      cloud: string;
      security: string;
    };
    message: string;
  };
  services: ServiceItem[];
  cta: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  servicesPage: {
    badge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    gridTitle: string;
    gridIntro: string;
    winSourcing: string;
  };
  about: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    intro: string;
    netherlands: string;
    morocco: string;
    advantageTitle: string;
    advantageIntro: string;
    strategicGovernanceTitle: string;
    strategicGovernanceBody: string;
    governanceBullets: string[];
    seamlessSynergyTitle: string;
    seamlessSynergyBody: string;
    structureTitle: string;
    governanceSteps: BulletItem[];
    heroAlt: string;
    governanceMainAlt: string;
    governanceSecondaryAlt: string;
  };
  expertise: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    intro: string;
    exploreCapabilities: string;
    cloudTitle: string;
    cloudIntro: string;
    migrationGuide: string;
    cloudCards: { title: string; description: string }[];
    devopsTitleWhite: string;
    devopsTitleAccent: string;
    devopsIntro: string;
    uptimeLabel: string;
    mttrLabel: string;
    requestAudit: string;
    heroAlt: string;
    categories: {
      tabs: string[];
      softwareTitle: string;
      softwareBody: string;
      caseHighlightLabel: string;
      caseHighlightBody: string;
      techStackTitle: string;
      capabilitiesTitle: string;
      capabilityBullets: string[];
      startAiProject: string;
    };
  };
  tools: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    intro: string;
    technologiesTitle: string;
    technologiesIntro: string;
    softwareStackTitle: string;
    softwareStackTech: string;
    devopsTitleWhite: string;
    devopsTitleAccent: string;
  };
  help: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    intro: string;
    faqs: { q: string; a: string }[];
  };
  blog: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    intro: string;
    posts: { badge: string; title: string; excerpt: string; alt: string }[];
  };
  portfolio: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    intro: string;
    exploreLink: string;
    items: { title: string; excerpt: string; alt: string }[];
  };
  bookConsultationPage: {
    badge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    name: string;
    email: string;
    company: string;
    phone: string;
    phoneOptional: string;
    preferredTime: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  getStartedPage: {
    badge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    name: string;
    email: string;
    company: string;
    service: string;
    servicePlaceholder: string;
    services: {
      aiProject: string;
      pipelineAudit: string;
      cloudMigration: string;
      generalInquiry: string;
    };
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
};
