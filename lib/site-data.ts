import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Brush,
  Camera,
  ClipboardCheck,
  Clock,
  Code2,
  Compass,
  Film,
  Gauge,
  Globe2,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export type Service = {
  title: string;
  icon: LucideIcon;
  detail: string;
};

export type PortfolioProject = {
  title: string;
  type: string;
  category: string;
  logo?: string;
  logoLabel: string;
  url?: string;
  status?: string;
  description: string;
  features: string[];
  gradient: string;
};

export type TrustStat = {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const company = {
  name: "INNOVEXA DIGITAL",
  tagline: "BUILD. AUTOMATE. SCALE.",
  description:
    "Innovexa Digital transforms businesses through technology, automation, AI, and creative digital experiences.",
  phone: "+91 95660 61075",
  email: "innovexa.digitalservices@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  whatsapp: "+91 95660 61075",
  instagram: "innovexa_digital",
  linkedin: "innovexa-digital",
  github: "innovexa-digital",
  website: "innovexa.digital"
};

export const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

export const heroMetrics = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Support", value: "24/7" }
];

export const stats: TrustStat[] = [
  { label: "Projects Delivered", value: 50, suffix: "+", icon: Rocket },
  { label: "Happy Clients", value: 20, suffix: "+", icon: Users },
  { label: "Client Satisfaction", value: 98, suffix: "%", icon: BadgeCheck },
  { label: "Support", value: 24, suffix: "/7", icon: Clock }
];

export const services: Service[] = [
  { title: "Website Development", icon: Globe2, detail: "Premium business websites and web platforms engineered for trust, speed, SEO, and conversion." },
  { title: "Mobile App Development", icon: Smartphone, detail: "Modern mobile experiences for booking, commerce, operations, and customer workflows." },
  { title: "Billing Software Development", icon: BarChart3, detail: "Custom billing, invoice, inventory, customer, and reporting systems for growing businesses." },
  { title: "AI Automation", icon: Workflow, detail: "Automation systems that remove repetitive work across sales, support, marketing, and operations." },
  { title: "Agentic AI Products", icon: BrainCircuit, detail: "AI agents that can qualify leads, trigger workflows, summarize data, and assist teams." },
  { title: "Meta Ads", icon: Megaphone, detail: "Creative-led paid social campaigns for awareness, inquiries, retargeting, and growth." },
  { title: "SEO", icon: Search, detail: "Technical SEO, content structure, local discovery, and long-term organic visibility." },
  { title: "Performance Strategy", icon: Target, detail: "Cross-channel performance planning that aligns paid campaigns, landing pages, and lead quality." },
  { title: "Poster Design", icon: Brush, detail: "Premium posters, launch creatives, campaign visuals, and brand communication assets." },
  { title: "Video Editing", icon: Film, detail: "High-retention edits for reels, launches, ads, testimonials, and business storytelling." },
  { title: "Video Shooting", icon: Camera, detail: "On-ground business, product, event, and brand shoots planned for usable marketing output." },
  { title: "Content Writing", icon: PenTool, detail: "Website copy, ad messaging, SEO content, captions, scripts, and premium brand storytelling." }
];

export const aiSolutions = [
  { title: "AI Workflow Automation", icon: Workflow, detail: "Connect lead forms, sheets, CRM, emails, WhatsApp, and internal tasks into one reliable flow." },
  { title: "Lead Qualification Bots", icon: Bot, detail: "Capture intent, segment inquiries, score prospects, and route high-value leads faster." },
  { title: "WhatsApp Automation", icon: MessageCircle, detail: "Automated responses, quote flows, booking prompts, reminders, and sales follow-ups." },
  { title: "Content Automation", icon: Sparkles, detail: "Turn campaign ideas into reusable content pipelines for posts, ads, emails, and reports." },
  { title: "Reporting Dashboards", icon: Gauge, detail: "Live visibility into inquiries, ad spend, campaign results, operations, and growth metrics." },
  { title: "Agentic AI Systems", icon: BrainCircuit, detail: "Custom AI assistants that reason over business context and execute approved workflows." }
];

export const portfolio: PortfolioProject[] = [
  {
    title: "KL Stall App",
    type: "Business Management Platform",
    category: "Web App",
    logo: "https://k-lstall-app.vercel.app/favicon.ico",
    logoLabel: "KL",
    url: "https://k-lstall-app.vercel.app/",
    description: "Digital platform for stall booking and event business management.",
    features: ["Event booking", "Management dashboard", "Booking workflows"],
    gradient: "from-cyan-400 via-blue-600 to-violet-800"
  },
  {
    title: "Siva Sakthi Printers",
    type: "Printing Business Website",
    category: "Website",
    logoLabel: "SSP",
    url: "https://sivasakthiprinters.netlify.app/",
    description: "Professional website for printing services and customer engagement.",
    features: ["Service pages", "Quote flow", "Contact integration"],
    gradient: "from-fuchsia-500 via-violet-700 to-slate-950"
  },
  {
    title: "Export Demo Site",
    type: "Export Business Website",
    category: "Export",
    logo: "https://exportdemosite.netlify.app/Gemini_Generated_Image_f4mrmbf4mrmbf4mr-removebg-preview.png",
    logoLabel: "EX",
    url: "https://exportdemosite.netlify.app/",
    description: "Corporate export-focused website built for product showcasing and inquiries.",
    features: ["Product showcase", "Inquiry forms", "International focus"],
    gradient: "from-amber-300 via-emerald-600 to-slate-950"
  },
  {
    title: "Danny Stationary Shop",
    type: "E-Commerce Storefront",
    category: "Commerce",
    logo: "https://danny-stationary-shop.netlify.app/logo.jpg",
    logoLabel: "DS",
    url: "https://danny-stationary-shop.netlify.app/",
    description: "Online shopping website for stationery products and retail sales.",
    features: ["Product catalog", "Cart flow", "Checkout"],
    gradient: "from-pink-400 via-purple-600 to-blue-950"
  },
  {
    title: "Galaxy Beauty Academy",
    type: "Education / Academy Website",
    category: "Website",
    logo: "https://www.galaxybeautyacademy.com/favicon.png",
    logoLabel: "GBA",
    url: "https://www.galaxybeautyacademy.com/",
    description: "Professional academy website for beauty training programs and admissions.",
    features: ["Course listings", "Admissions", "Program details"],
    gradient: "from-rose-300 via-fuchsia-700 to-slate-950"
  },
  {
    title: "Mr. Fish Kitchen",
    type: "Mobile App",
    category: "Mobile App",
    logoLabel: "MF",
    status: "Coming Soon",
    description: "A seamless food ordering experience for a local kitchen brand. Launching soon.",
    features: ["Food ordering", "Mobile-first UX", "Kitchen workflow"],
    gradient: "from-orange-300 via-rose-500 to-slate-950"
  }
];

export const processSteps = [
  {
    title: "Discover",
    icon: Compass,
    detail: "We map your business goals, target audience, competitive landscape, and constraints to define exactly what to build."
  },
  {
    title: "Design",
    icon: Brush,
    detail: "We create premium UI systems, motion design, conversion-focused layouts, and brand experiences that build trust."
  },
  {
    title: "Develop",
    icon: Code2,
    detail: "We build scalable websites, mobile apps, AI automations, and integrations with clean production-ready code."
  },
  {
    title: "Launch",
    icon: Rocket,
    detail: "We optimize performance, SEO, analytics, and deploy polished production systems ready for real business growth."
  }
];

export const reasons = [
  { title: "Business-focused technology", icon: BriefcaseBusiness, detail: "Every build is tied to inquiries, speed, operations, trust, or revenue." },
  { title: "Creative + engineering team", icon: MonitorSmartphone, detail: "Design, content, software, automation, and marketing work as one delivery system." },
  { title: "AI-first solutions", icon: BrainCircuit, detail: "We use automation and intelligent workflows where they create real leverage." },
  { title: "Measurable ROI mindset", icon: BadgeCheck, detail: "We care about what the website, app, campaign, or system changes for the business." },
  { title: "Scalable architecture", icon: ShieldCheck, detail: "Clean, maintainable foundations that can grow as the company grows." },
  { title: "Rapid execution", icon: Zap, detail: "A focused process that turns clarity into polished production output quickly." }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Innovexa built us a stunning website that immediately elevated our brand. Inquiries increased significantly within the first few weeks of going live.",
    name: "Arun Kumar",
    role: "Director",
    company: "Galaxy Beauty Academy",
    rating: 5
  },
  {
    quote: "The stall booking platform they delivered was exactly what we envisioned — fast, clean, and ready for real users on launch day. Outstanding work.",
    name: "Kamal R.",
    role: "Founder",
    company: "KL Stall",
    rating: 5
  },
  {
    quote: "Professional team, clear communication, and delivered exactly on time. Our printing business now has a world-class online presence we're proud of.",
    name: "Rajan M.",
    role: "Owner",
    company: "Siva Sakthi Printers",
    rating: 5
  }
];

export const pricing = [
  {
    name: "Starter",
    price: "Custom",
    detail: "Premium website strategy, design, development, SEO foundations, and lead capture for growing businesses.",
    features: ["Responsive website", "Performance setup", "Contact & lead flow", "Launch support"]
  },
  {
    name: "Business",
    price: "Custom",
    detail: "AI and workflow automation for leads, WhatsApp, CRM, content, and reporting — built for scale.",
    features: ["Workflow map", "AI automation", "Integration setup", "Analytics dashboard", "Priority support"],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    detail: "Ongoing website, ads, content, SEO, automation, and creative execution as a full growth partner.",
    features: ["Campaign support", "Creative assets", "SEO rhythm", "Monthly optimization", "Dedicated team"]
  }
];

export const posts = [
  { tag: "AI", title: "How practical AI automation can reduce repetitive business work", read: "5 min" },
  { tag: "Web", title: "Why premium business websites need speed, trust, and conversion clarity", read: "4 min" },
  { tag: "Growth", title: "Connecting ads, WhatsApp, CRM, and reporting into one growth system", read: "6 min" }
];

export const faqs = [
  {
    question: "What does Innovexa Digital build?",
    answer:
      "We build websites, mobile apps, business software, AI automation systems, ad campaigns, SEO systems, content, and creative assets for growth-focused businesses."
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Yes. Strategy, UI design, copy, development, automation, launch, and growth support can be handled under one process."
  },
  {
    question: "Do you work with local businesses?",
    answer:
      "Yes. We help local businesses modernize booking, inquiries, WhatsApp flows, billing, content, ads, and online presence."
  },
  {
    question: "Can you integrate AI into an existing business?",
    answer:
      "Yes. We can start with practical automations like lead routing, follow-ups, CRM updates, reporting dashboards, and content workflows."
  }
];

export const contactServices = [
  "Website Development",
  "Mobile App Development",
  "Billing Software Development",
  "AI Automation",
  "Agentic AI Products",
  "Meta Ads",
  "SEO",
  "Performance Strategy",
  "Poster Design",
  "Video Editing",
  "Video Shooting",
  "Content Writing"
];

export const socialLinks: SocialLink[] = [
  { label: "WhatsApp", href: "https://wa.me/919566061075", icon: FaWhatsapp },
  { label: "Instagram", href: "https://instagram.com/innovexa_digital", icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/innovexa-digital", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/innovexa-digital", icon: FaGithub }
];
