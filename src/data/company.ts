import { CompanyConfig, PricingPlan, ServiceItem, Testimonial } from '../types';

// Centralized configuration variables for easy updating
export const RAZORPAY_PAYMENT_URL = 'https://rzp.io/rzp/usecodify';
export const RAZORPAY_SHOP_URL = 'https://pages.razorpay.com/stores/st_S4499zSYUdsQ2W';
export const GLOBAL_WEBSITE_URL = 'https://usecodify.com/';
export const GLOBAL_PORTFOLIO_URL = 'https://usecodify.com/portfolio-prob/';
export const GLOBAL_CAREERS_URL = 'https://usecodify.com/career/';
export const GLOBAL_NEWS_URL = 'https://usecodify.com/news/';
export const GLOBAL_AWARDS_URL = 'https://usecodify.com/award-recognitions/';
export const WHATSAPP_NUMBER = '+91 93611 45190';
export const WHATSAPP_DESTINATION = '919361145190';
export const WHATSAPP_LINK = 'https://wa.me/919361145190';
export const OFFICIAL_LOGO_URL = '/assets/usecodifyindia.png';

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/usecodify', platform: 'linkedin' },
  { name: 'X / Twitter', url: 'https://x.com/usecodify', platform: 'twitter' },
  { name: 'Instagram', url: 'https://instagram.com/usecodify', platform: 'instagram' },
  { name: 'GitHub', url: 'https://github.com/usecodify', platform: 'github' },
];

export interface MarqueeBadge {
  id: string;
  category: 'recognition' | 'registration' | 'infrastructure' | 'partnership';
  title: string;
  subtitle: string;
  code?: string;
  iconType: 'startup_india' | 'startup_tn' | 'mca' | 'gst' | 'razorpay' | 'cloud' | 'speed' | 'quality';
}

export const marqueeBadges: MarqueeBadge[] = [
  {
    id: 'startup-india',
    category: 'recognition',
    title: 'Startup India',
    subtitle: 'DPIIT Recognized Startup',
    code: 'DIPP182390',
    iconType: 'startup_india',
  },
  {
    id: 'startup-tn',
    category: 'recognition',
    title: 'StartupTN',
    subtitle: 'Tamil Nadu State Mission',
    code: 'TN-GOV-REG',
    iconType: 'startup_tn',
  },
  {
    id: 'mca-registered',
    category: 'registration',
    title: 'MCA Registered',
    subtitle: 'Ministry of Corporate Affairs',
    code: 'U62013TN2025OPC180906',
    iconType: 'mca',
  },
  {
    id: 'gst-verified',
    category: 'registration',
    title: 'GST Verified',
    subtitle: 'Govt. of India Tax Entity',
    code: '33AADCU8528M1ZW',
    iconType: 'gst',
  },
  {
    id: 'razorpay-partner',
    category: 'partnership',
    title: 'Razorpay Partner',
    subtitle: 'Verified Merchant Gateway',
    code: 'Direct UPI & Cards',
    iconType: 'razorpay',
  },
  {
    id: 'cloud-infra',
    category: 'infrastructure',
    title: 'Edge Infrastructure',
    subtitle: 'High-Speed Cloud Delivery',
    code: '99.98% SLA Uptime',
    iconType: 'cloud',
  },
  {
    id: 'core-web-vitals',
    category: 'infrastructure',
    title: 'Core Web Vitals',
    subtitle: 'Grade A Performance Score',
    code: 'PageSpeed 98+',
    iconType: 'speed',
  },
  {
    id: 'iso-quality',
    category: 'recognition',
    title: 'Quality Process',
    subtitle: 'Structured Sprint Standards',
    code: 'Agile 72h Delivery',
    iconType: 'quality',
  },
];

export const companyConfig: CompanyConfig = {
  legalName: 'UseCodify India (OPC) Private Limited',
  brandName: 'UseCodify',
  cin: 'U62013TN2025OPC180906',
  gstin: '33AADCU8528M1ZW',
  email: 'hello@usecodify.com',
  domain: 'https://usecodify.in',
  globalWebsiteUrl: GLOBAL_WEBSITE_URL,
  razorpayPaymentUrl: RAZORPAY_PAYMENT_URL,
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappLink: WHATSAPP_LINK,
  logoUrl: OFFICIAL_LOGO_URL,
  operatingAddress: {
    building: 'Primus Building, Ground Floor',
    doorNo: 'SP–7A',
    estate: 'Guindy Industrial Estate, SIDCO Industrial Estate',
    locality: 'Guindy',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600032',
    country: 'India',
    formatted: 'Ground Floor, Primus Building, Door No. SP–7A, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032, India',
  },
  stats: {
    yearsInOperation: '2+',
    projectsDelivered: '70+',
    specialistsCount: '10+',
    clientSatisfaction: '98%',
  },
  turnaroundTime: '72 Hours',
};


export const testimonialsData: Testimonial[] = [
  {
    author: "Dr. James O'Kelly",
    role: "Medical Practitioner & Clinic Founder",
    organization: "Specialist Health Services",
    quote: "The team at UseCodify made this process incredibly smooth. The website is professional, user-friendly, and perfectly reflects the kind of care I strive to give. It's already helped several new patients find me easily online.",
    rating: 5,
  },
  {
    author: "Eden Gardern Team",
    role: "Operations & Brand Lead",
    organization: "Eden Garden Landscapes",
    quote: "The site looks fresh and peaceful, just like a garden should. It's super simple to browse through the services and everything works great on mobile too. You really brought out the right vibe and made it all come together nicely.",
    rating: 5,
  },
  {
    author: "Daniel",
    role: "Product & Engineering Director",
    organization: "International Client Venture",
    quote: "If you're looking for a professional company developing web for international clients - this is it. Plus awesome team.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'kickstart',
    name: 'KickStart',
    priceINR: 5999,
    renewalINR: 2000,
    period: 'one-time setup',
    tagline: 'Simple, fast, and budget-friendly online launch for emerging businesses and local shops.',
    pagesCount: '3 Pages (Home, About, Contact)',
    turnaround: '72-Hour Turnaround',
    support: '24/7 Support',
    maintenance: '1 Month Free Maintenance included',
    editsPolicy: 'Handled via WhatsApp within 24 hours',
    recommendedFor: 'Solo founders, freelance professionals, and local trade services needing their first digital storefront.',
    features: [
      { name: '3 Custom Pages (Home, About, Contact)', included: true },
      { name: 'Responsive mobile-friendly design', included: true },
      { name: 'WhatsApp direct chat integration', included: true },
      { name: 'Interactive contact form', included: true },
      { name: '1-Year .in or .co.in domain registration', included: true },
      { name: '1-Year High-speed SSD hosting & SSL', included: true },
      { name: '1 Month of post-launch maintenance', included: true },
      { name: 'Edits via WhatsApp (within 24 hours)', included: true },
      { name: '24/7 Technical support assistance', included: true },
      { name: 'Basic search engine optimization (SEO)', included: false, note: 'Available in Business tier' },
      { name: 'Professional business email address', included: false, note: 'Available in Business tier' },
      { name: 'Admin CMS self-editing portal', included: false, note: 'Managed updates only' },
      { name: 'Annual renewal charge', included: true, note: '₹2,000 / year' },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    priceINR: 7999,
    renewalINR: 2999,
    period: 'one-time setup',
    popular: true,
    tagline: 'A comprehensive, trust-building digital asset engineered to convert visitors into qualified inquiries.',
    pagesCount: '6 Pages (Home, About, Services, Gallery, Contact + 1 custom page)',
    turnaround: '72-Hour Turnaround',
    support: '24/7 Dedicated Support',
    maintenance: '1 Month Free Maintenance included',
    editsPolicy: 'Handled by UseCodify specialists without client admin burden',
    recommendedFor: 'Established small businesses, clinics, legal & consulting practices, and growing brands.',
    features: [
      { name: '6 Custom Pages (Home, About, Services, Gallery, Contact, Custom)', included: true },
      { name: 'High-conversion responsive design', included: true },
      { name: 'WhatsApp chat & interactive contact form', included: true },
      { name: 'Basic SEO setup & metadata configuration', included: true },
      { name: 'Social media profile integration', included: true },
      { name: '1 Professional business email (info@yourdomain.in)', included: true },
      { name: '1-Year Domain, fast hosting & SSL certificate', included: true },
      { name: '1 Month of post-launch maintenance', included: true },
      { name: 'Updates executed within 24h by UseCodify team', included: true },
      { name: '24/7 Dedicated support assistance', included: true },
      { name: 'Admin CMS self-editing portal', included: false, note: 'Managed by UseCodify for zero maintenance hassle' },
      { name: 'Google Business Profile setup support', included: false, note: 'Available in Growth tier' },
      { name: 'Annual renewal charge', included: true, note: '₹2,999 / year' },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    priceINR: 9999,
    renewalINR: 3499,
    period: 'one-time setup',
    tagline: 'An editable, scalable digital headquarters with full CMS admin access and content marketing capabilities.',
    pagesCount: '10 Editable Pages',
    turnaround: '72-Hour Turnaround',
    support: '24/7 Dedicated Support',
    maintenance: '1 Month Free Maintenance included',
    editsPolicy: 'Full Admin CMS access for direct edits + 24h support',
    recommendedFor: 'Growing enterprises, agencies, and companies actively publishing blogs and expanding services.',
    features: [
      { name: '10 Fully editable responsive pages', included: true },
      { name: 'Full Admin CMS access (self-manage anytime)', included: true },
      { name: 'Built-in blog setup for organic traffic & SEO', included: true },
      { name: '2 Professional business emails', included: true },
      { name: 'WhatsApp chat & auto-reply contact form', included: true },
      { name: 'Basic SEO setup, OpenGraph & social links', included: true },
      { name: 'Google Business Profile setup guidance', included: true },
      { name: '1-Year .in or .co.in domain, hosting & SSL', included: true },
      { name: '1 Month of post-launch maintenance', included: true },
      { name: '24/7 Dedicated technical support', included: true },
      { name: 'CMS user training & documentation', included: true },
      { name: 'Annual renewal charge', included: true, note: '₹3,499 / year' },
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development & Design',
    badge: 'Core Competency',
    shortDescription: 'Conversion-focused, high-performance websites engineered for speed, responsiveness, and customer trust.',
    fullDescription: 'We build fast, secure, SEO-ready, and conversion-focused websites tailored to startups, growing local businesses, and established enterprises. From clean editorial layouts to dynamic digital products, our engineering prioritizes low latency, clean codebases, and seamless experiences across all device form factors.',
    features: [
      'Responsive, mobile-first design systems',
      'Ultra-fast page loads optimized for Core Web Vitals',
      'Technical SEO architecture with clean semantic markup',
      'Integrated conversion touchpoints (WhatsApp, booking, forms)',
      'Secure hosting configuration with SSL encryption',
      'Scalable modular codebases ready for future upgrades',
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', description: 'Analyze your target audience, competitors, and key conversion paths to map out the page architecture.' },
      { step: '02', title: 'Visual & UI Design', description: 'Craft responsive mockups aligning with your brand identity, typographic balance, and color hierarchy.' },
      { step: '03', title: 'Front-End Engineering', description: 'Develop lightweight, high-performance code adhering to modern web standards and accessibility.' },
      { step: '04', title: 'QA & Deployment', description: 'Comprehensive cross-browser testing, mobile verification, and DNS deployment within our 72-hour delivery pipeline.' },
    ],
    benefits: [
      'Substantially higher conversion rates from visitors to qualified leads',
      'Zero bloated dependencies or slow template scripts',
      'Flawless rendering on everything from 320px smartphones to 4K monitors',
    ],
    deliverables: [
      'Production-ready website files',
      'Domain & DNS configuration',
      'SSL certificate activation',
      '1 Month complimentary technical maintenance',
    ],
    recommendedPlan: 'Business',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-Commerce Solutions',
    badge: 'Revenue Architecture',
    shortDescription: 'Custom online storefronts with frictionless checkout flows, secure payment gateways, and inventory systems.',
    fullDescription: 'Turn catalog visitors into loyal paying customers. We engineer robust e-commerce solutions that combine compelling merchandising design with rock-solid payment processing, inventory tracking, order management, and automated customer communication.',
    features: [
      'Custom catalog and product presentation layouts',
      'Indian & international payment gateway integration (Razorpay, UPI, Stripe)',
      'Frictionless 1-click mobile checkout funnels',
      'Automated WhatsApp and email order notifications',
      'Inventory management and SKU tracking setup',
      'Cart abandonment recovery mechanisms',
    ],
    process: [
      { step: '01', title: 'Store Architecture', description: 'Structure product taxonomies, variant matrices, pricing, and shipping zones.' },
      { step: '02', title: 'Catalog & UX Design', description: 'Build intuitive search, filtering, and high-impact product detail pages.' },
      { step: '03', title: 'Gateway & Logistics Integration', description: 'Connect trusted payment processors, tax calculations, and shipping partner webhooks.' },
      { step: '04', title: 'Store Launch & Testing', description: 'Conduct end-to-end sandbox transactions and real-world checkout speed verification.' },
    ],
    benefits: [
      'Reduced checkout drop-offs through native UPI and mobile payment flows',
      'Safe, PCI-compliant infrastructure protecting customer data',
      'Scalable architecture capable of handling peak promotional traffic',
    ],
    deliverables: [
      'Fully configured digital storefront',
      'Payment gateway verification',
      'Order dispatch email & WhatsApp notification triggers',
    ],
    recommendedPlan: 'Growth',
  },
  {
    id: 'mobile-development',
    slug: 'mobile-development',
    title: 'Mobile App Development',
    badge: 'Native & Cross-Platform',
    shortDescription: 'Native and hybrid mobile applications built for fluid user engagement, fast boot times, and scalable architecture.',
    fullDescription: 'Custom mobile app solutions engineered for performance, scalability, and cross-platform compatibility across iOS and Android. We bridge business objectives with user expectations through intuitive touch interfaces, reliable offline capabilities, and seamless backend API synchronization.',
    features: [
      'Cross-platform development for unified iOS and Android release',
      'Smooth 60fps gesture-driven user interfaces',
      'Offline data caching and background sync',
      'Secure biometric authentication and token storage',
      'Targeted push notification infrastructure',
      'App Store and Google Play Store submission management',
    ],
    process: [
      { step: '01', title: 'Product Discovery & Flow Mapping', description: 'Define user journeys, device permissions, and technical architecture.' },
      { step: '02', title: 'Interactive Prototyping', description: 'Create high-fidelity mobile prototypes validated against platform design guidelines.' },
      { step: '03', title: 'Agile App Engineering', description: 'Write modular client applications integrated with REST/GraphQL backend services.' },
      { step: '04', title: 'Store Release & Monitoring', description: 'Prepare metadata, compliance certificates, and publish to app marketplaces.' },
    ],
    benefits: [
      'Unified codebase lowering long-term maintenance overhead by up to 40%',
      'Exceptional app responsiveness with zero battery drainage penalties',
      'Direct customer retention channel via targeted push notifications',
    ],
    deliverables: [
      'Compiled iOS and Android production binaries',
      'App store asset pack (screenshots, icons, privacy labels)',
      'Backend API documentation',
    ],
    recommendedPlan: 'Custom',
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    badge: 'Human-Centered Systems',
    shortDescription: 'Strategic user interface design, information architecture, wireframing, and interactive design systems.',
    fullDescription: 'Design is not decoration—it is the operational logic of your digital product. We combine user behavioral research, usability principles, and visual restraint to craft intuitive digital experiences that reduce cognitive friction and elevate brand prestige.',
    features: [
      'User journey mapping and informational architecture',
      'High-fidelity wireframing and clickable prototypes',
      'Comprehensive design systems with reusable token libraries',
      'Accessibility auditing compliant with WCAG 2.2 AA standards',
      'Micro-interaction and motion choreography specifications',
      'Complete design-to-engineering handoff packages',
    ],
    process: [
      { step: '01', title: 'User Research & Insights', description: 'Investigate user pain points, workflow bottlenecks, and mental models.' },
      { step: '02', title: 'Low-Fi Wireframing', description: 'Test structural hierarchy and content prioritization before visual styling.' },
      { step: '03', title: 'Design System & UI Craft', description: 'Build component systems with deliberate typography, color, and state rules.' },
      { step: '04', title: 'Validation & Handoff', description: 'Conduct usability walk-throughs and deliver production-ready design tokens.' },
    ],
    benefits: [
      'Clear, self-explanatory product interfaces that slash user onboarding time',
      'Consistent design language across web, mobile, and marketing touchpoints',
      'Predictable development cycles through complete tokenized component specs',
    ],
    deliverables: [
      'Complete Figma design workspace',
      'Component library & style token sheet',
      'Clickable user validation prototype',
    ],
    recommendedPlan: 'Business',
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'SEO Services',
    badge: 'Organic Search Growth',
    shortDescription: 'Technical search optimization, on-page content alignment, and authority building for sustainable search rankings.',
    fullDescription: 'Data-driven search engine optimization strategies engineered to establish sustainable organic search visibility. Rather than chasing short-lived algorithmic loopholes, we optimize Core Web Vitals, structure semantic schema markups, align high-intent keywords, and build authentic domain authority.',
    features: [
      'Comprehensive technical site audit and crawl error remediation',
      'High-intent commercial keyword research and mapping',
      'On-page title, meta, schema, and heading hierarchy optimization',
      'Core Web Vitals tuning for Largest Contentful Paint (LCP) and CLS',
      'Local SEO and Google Business Profile optimization',
      'Clear, jargon-free monthly ranking and organic traffic reporting',
    ],
    process: [
      { step: '01', title: 'Technical Audit & Diagnostics', description: 'Identify crawl blockers, indexing gaps, mobile issues, and page speed bottlenecks.' },
      { step: '02', title: 'Keyword & Content Strategy', description: 'Prioritize commercial keywords that bring actual customers rather than vanity clicks.' },
      { step: '03', title: 'On-Page & Schema Execution', description: 'Implement structured data, optimized tags, internal link clusters, and copy refinements.' },
      { step: '04', title: 'Tracking & Continuous Improvement', description: 'Monitor Search Console metrics, search ranking trends, and conversion funnels.' },
    ],
    benefits: [
      'Consistent compounding inbound customer inquiries without ongoing ad spend',
      'Authoritative ranking in Google local map packs and organic results',
      'Faster site performance and superior user experience',
    ],
    deliverables: [
      'Technical audit scorecard',
      'Optimized sitemap.xml and robots.txt',
      'JSON-LD structured data implementation',
      'Monthly performance progress dashboard',
    ],
    recommendedPlan: 'Growth',
  },
  {
    id: 'teams-on-demand',
    slug: 'teams-on-demand',
    title: 'Teams On Demand',
    badge: 'Specialist Staffing',
    shortDescription: 'Instant access to pre-vetted engineers, UI/UX designers, and project managers integrated into your workflow.',
    fullDescription: 'Scale your engineering and product design capacity on your terms. UseCodify Teams On Demand provides businesses, startups, and agencies with dedicated, senior-level developers and designers who integrate seamlessly into your existing Git workflows, Slack channels, and sprint cycles.',
    features: [
      'Pre-vetted senior front-end, back-end, and full-stack developers',
      'Dedicated UI/UX product designers and QA engineers',
      'Zero recruitment overhead, agency markups, or long-term lock-ins',
      'Direct daily communication via Slack, Teams, and video standups',
      'Flexible month-to-month scalability based on sprint requirements',
      'Rigorous IP protection and mutual NDA agreements',
    ],
    process: [
      { step: '01', title: 'Needs Assessment', description: 'Clarify required technical stacks, seniority levels, and project timelines.' },
      { step: '02', title: 'Specialist Selection', description: 'Match matched talent from our core team in Chennai with relevant domain experience.' },
      { step: '03', title: 'Rapid Onboarding', description: 'Set up repository access, communication channels, and initial sprint deliverables within 48 hours.' },
      { step: '04', title: 'Continuous Delivery', description: 'Daily commits, weekly progress demos, and transparent time/milestone tracking.' },
    ],
    benefits: [
      'Add specialized engineering capacity in days instead of spending months recruiting',
      'Cost-efficient talent deployment with predictable monthly commitments',
      'Retain complete ownership of all created source code and intellectual property',
    ],
    deliverables: [
      'Dedicated developer/designer allocation',
      'Weekly sprint burndown reports',
      'Continuous Git code delivery',
    ],
    recommendedPlan: 'Custom',
  },
  {
    id: 'website-maintenance',
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    badge: 'Reliability & Uptime',
    shortDescription: 'Proactive security patching, daily backups, speed monitoring, and fast turnaround content updates.',
    fullDescription: 'Your website is a business-critical revenue channel. Our maintenance service ensures your digital infrastructure remains fast, secure, updated, and completely free of downtime or broken links. We handle technical upkeep so you can focus exclusively on running your business.',
    features: [
      'Continuous security monitoring and vulnerability patching',
      'Automated cloud backups with 1-click restore capability',
      'Fast turnaround for content, image, and pricing updates (within 24 hours)',
      'SSL certificate renewal and domain expiry management',
      'Broken link detection and 404 redirect management',
      'Core Web Vitals and uptime health checks',
    ],
    process: [
      { step: '01', title: 'Initial Site Health Audit', description: 'Examine server configurations, database health, security headers, and dependencies.' },
      { step: '02', title: 'Automated Backup Setup', description: 'Establish scheduled off-site snapshots stored redundantly across cloud regions.' },
      { step: '03', title: 'Ongoing Updates & Edits', description: 'Submit content tweaks anytime via WhatsApp or email with guaranteed 24-hour turnaround.' },
      { step: '04', title: 'Proactive Health Monitoring', description: 'Automated alerts for downtime, SSL renewal deadlines, and performance degradation.' },
    ],
    benefits: [
      'Eliminate unexpected downtime and costly emergency developer repairs',
      'Guaranteed quick response for routine copy, image, and promotional updates',
      'Full peace of mind knowing your digital presence is constantly safeguarded',
    ],
    deliverables: [
      'Routine maintenance changelog',
      'Offsite backup archives',
      'Direct WhatsApp priority edit access',
    ],
    recommendedPlan: 'KickStart',
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    badge: 'Performance Growth',
    shortDescription: 'Targeted pay-per-click campaigns, multi-channel lead generation, and measurable customer acquisition funnels.',
    fullDescription: 'Generate qualified customer inquiries with measurable return on ad spend. We develop and execute performance marketing campaigns across Google Search, Meta (Instagram/Facebook), and LinkedIn, pairing precise demographic targeting with dedicated conversion landing pages.',
    features: [
      'Google Ads search campaigns targeting high-intent commercial buyers',
      'Meta visual ad campaigns designed for local brand awareness',
      'Conversion-optimized custom landing page design and A/B testing',
      'Accurate pixel and conversion tracking setup (Google Tag Manager, Meta CAPI)',
      'Retargeting funnels to re-engage past website visitors',
      'Transparent weekly ad spend and cost-per-lead reporting',
    ],
    process: [
      { step: '01', title: 'Audience & Offer Research', description: 'Define target customer personas, competitive positioning, and unique value propositions.' },
      { step: '02', title: 'Creative & Landing Page Setup', description: 'Write compelling ad copy, design visual assets, and build high-converting landing pages.' },
      { step: '03', title: 'Campaign Launch & Tracking', description: 'Deploy campaigns with negative keywords, geographic geo-fencing, and event tracking.' },
      { step: '04', title: 'Optimization & Scaling', description: 'Shift budget into winning ad sets, lower cost per lead, and scale verified campaigns.' },
    ],
    benefits: [
      'Predictable flow of qualified customer leads ready to purchase',
      'Transparent tracking showing exact revenue generated per rupee spent',
      'No wasted budget on unqualified clicks or irrelevant impressions',
    ],
    deliverables: [
      'Configured ad accounts & conversion tracking',
      'Creative ad copy and banner assets',
      'Weekly performance metrics dashboard',
    ],
    recommendedPlan: 'Growth',
  },
  {
    id: 'consulting-strategy',
    slug: 'consulting-strategy',
    title: 'Consulting & Strategy',
    badge: 'Executive Advisory',
    shortDescription: 'Technology roadmap planning, digital transformation advisory, and technical feasibility assessments.',
    fullDescription: 'Make informed technology decisions that accelerate business growth and prevent costly missteps. We advise founders, business owners, and corporate leaders on software stack selection, digital transformation roadmaps, vendor evaluations, and scalable system architectures.',
    features: [
      'Digital roadmap planning aligned with commercial business objectives',
      'Technology stack evaluation (React, Next.js, Node.js, cloud infrastructure)',
      'Digital transformation guidance for legacy paper and manual processes',
      'Cost optimization audits for cloud hosting, SaaS subscriptions, and software',
      'Architecture reviews for security, performance, and scalability',
      'Actionable executive summaries and vendor selection criteria',
    ],
    process: [
      { step: '01', title: 'Strategic Discovery', description: 'In-depth consultation to understand business goals, existing bottlenecks, and constraints.' },
      { step: '02', title: 'Technical Assessment', description: 'Analyze existing software, workflows, data flows, and operational costs.' },
      { step: '03', title: 'Roadmap Blueprint', description: 'Formulate a phased, step-by-step digital roadmap with clear milestones and budget forecasts.' },
      { step: '04', title: 'Executive Debrief & Guidance', description: 'Present findings, answer stakeholder questions, and guide initial implementation steps.' },
    ],
    benefits: [
      'Avoid expensive technical debt and investments in ill-fitting platforms',
      'Clarity on exact investment requirements, timelines, and expected ROI',
      'Objective, vendor-neutral engineering advice tailored to your market',
    ],
    deliverables: [
      'Executive Technology Strategy Document',
      'Phased Implementation Roadmap',
      'Recommended Architecture Specification',
    ],
    recommendedPlan: 'Custom',
  },
];

export const workflowSteps = [
  {
    step: '01',
    title: 'Understanding Your Goals',
    tagline: 'Deep commercial alignment',
    description: 'We begin by thoroughly understanding your business model, target audience, core offerings, and key conversion metrics. We listen first to ensure every technical and design decision supports tangible business outcomes.',
  },
  {
    step: '02',
    title: 'Planning the Right Approach',
    tagline: 'Precision architecture',
    description: 'We formulate the optimal technology stack, content hierarchy, wireframes, and delivery roadmap. Every detail is structured to maximize speed, security, and effortless maintenance.',
  },
  {
    step: '03',
    title: 'Design, Build and Refine',
    tagline: 'World-class craftsmanship',
    description: 'Our specialists craft responsive interfaces, write clean modular code, optimize Core Web Vitals, and configure integrations. We review the build iteratively with your direct input.',
  },
  {
    step: '04',
    title: 'Launch and Continued Support',
    tagline: 'Seamless deployment & care',
    description: 'We configure your domain, deploy SSL security, verify forms and analytics, and take your product live within our standard 72-hour turnaround. We remain by your side with ongoing maintenance.',
  },
];

export const faqItems = [
  {
    q: 'How does the 72-hour turnaround time work?',
    a: 'For our KickStart, Business, and Growth website packages, once we receive your core business details, logo, and preferred color preferences, our dedicated engineering team delivers your fully functioning website preview within 72 hours.',
  },
  {
    q: 'What is included in the annual renewal cost?',
    a: 'Annual renewals (₹2,000 for KickStart, ₹2,999 for Business, ₹3,499 for Growth) cover ongoing high-speed cloud hosting, continuous SSL security certificate renewal, domain name renewal, and routine server updates.',
  },
  {
    q: 'How do I submit website edits after launch?',
    a: 'For KickStart and Business plans, you simply message our dedicated support team via WhatsApp or email with your text or image changes, and our team updates your live site within 24 hours. For Growth plans, you also have full administrative CMS access to make instant updates yourself.',
  },
  {
    q: 'What are your payment terms and refund policies?',
    a: 'We offer full upfront payment as well as a flexible 40/60 milestone payment plan. Under the 40/60 structure, an initial 40% deposit initiates design and development, and the remaining 60% is due upon presentation of your completed website preview.',
  },
  {
    q: 'Can I upgrade my plan as my business expands?',
    a: 'Absolutely. All websites engineered by UseCodify are built with clean, modular architectures. You can seamlessly scale from KickStart to Business or Growth, or add custom e-commerce and mobile capabilities at any time.',
  },
];
