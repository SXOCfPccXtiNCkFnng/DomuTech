
export interface Service {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    features: string[];
    price: string;
    image: string;
    backgroundImage: string;
  }
  
  export interface ComplementaryService {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    items: string[];
  }

  export interface ServiceDetail {
    whyChoose: string;
    benefits: {
      title: string;
      description: string;
    }[];
    process: {
      title: string;
      description: string;
    }[];
  }

  export interface Metric {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
  }

  export interface Value {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }

  export interface Project {
    tag: string;
    title: string;
    description: string;
    image: string;
    stats?: {
      icon: React.ComponentType<{ className?: string }>;
      value: string;
    }[];
    isFeatured?: boolean;
  }

  export interface FAQItem {
    question: string;
    answer: string;
  }