export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  features: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
  deliverables: string[];
  recommendedPlan: 'KickStart' | 'Business' | 'Growth' | 'Custom';
}

export interface PricingPlan {
  id: string;
  name: string;
  priceINR: number;
  renewalINR: number;
  period: string;
  tagline: string;
  popular?: boolean;
  pagesCount: string;
  turnaround: string;
  support: string;
  features: {
    name: string;
    included: boolean;
    note?: string;
  }[];
  maintenance: string;
  editsPolicy: string;
  recommendedFor: string;
}

export interface Testimonial {
  author: string;
  role: string;
  organization?: string;
  quote: string;
  location?: string;
  rating?: number;
}

export interface CompanyConfig {
  legalName: string;
  brandName: string;
  cin: string;
  gstin: string;
  email: string;
  domain: string;
  globalWebsiteUrl: string;
  razorpayPaymentUrl: string;
  whatsappNumber: string;
  whatsappLink: string;
  logoUrl: string;
  operatingAddress: {
    building: string;
    doorNo: string;
    estate: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
  };
  stats: {
    yearsInOperation: string;
    projectsDelivered: string;
    specialistsCount: string;
    clientSatisfaction: string;
  };
  turnaroundTime: string;
}

export interface InquiryRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'converted' | 'archived';
  notes?: string;
  createdAt: string;
  updatedAt?: string;
  userAgent?: string;
  ip?: string;
}
