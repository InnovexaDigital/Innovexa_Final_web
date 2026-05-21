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
  Code2,
  Compass,
  FileText,
  Film,
  Gauge,
  Globe2,
  Instagram,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Search,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
  Zap
} from "lucide-react";

export type Service = {
  title: string;
  icon: LucideIcon;
  detail: string;
};

export type PortfolioProject = {
  title: string;
  type: string;
  category: string;
  url?: string;
  status?: string;
  description: string;
  features: string[];
  gradient: string;
};

export const company = {
  name: "INNOVEXA DIGITAL",
  tagline: "BUILD. AUTOMATE. SCALE.",
  description:
    "Innovexa Digital transforms businesses through technology, automation, AI, and creative digital experiences.",
  phone: "+91 95660 61075",
  email: "innovexa.digitalservices@gmail.com",
  location: "Chennai, India",
  whatsapp: "+91 95660 61075",
  instagram: "innovexa_digital",
  website: "innovexa.digital"
};

export const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

export const heroMetrics = [
  { label: "Projects Delivered", value: "25+" },
  { label: "AI Automations", value: "10+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Support", value: "24/7" }
];

export const stats = [
  { label: "Launch-ready websites, apps, and systems", value: "25+" },
  { label: "Services across tech, AI, growth, and content", value: "13" },
  { label: "Built from Chennai for local and global brands", value: "IN" },
  { label: "Business-first execution model", value: "ROI" }
];

export const services: Service[] = [
  { title: "Website Development", icon: Globe2, detail: "Premium business websites and web platforms engineered for trust, speed, SEO, and conversion." },
  { title: "Mobile App Development", icon: Smartphone, detail: "Modern mobile experiences for booking, commerce, operations, and customer workflows." },
  { title: "Billing Software Development", icon: BarChart3, detail: "Custom billing, invoice, inventory, customer, and reporting systems for growing businesses." },
  { title: "AI Automation", icon: Workflow, detail: "Automation systems that remove repetitive work across sales, support, marketing, and operations." },
  { title: "Agentic AI Products", icon: BrainCircuit, detail: "AI agents that can qualify leads, trigger workflows, summarize data, and assist teams." },
  { title: "Google Ads", icon: Target, detail: "Search and performance campaigns connected to landing pages, analytics, and lead quality." },
  { title: "Meta Ads", icon: Megaphone, detail: "Creative-led paid social campaigns for awareness, inquiries, retargeting, and growth." },
  { title: "SEO", icon: Search, detail: "Technical SEO, content structure, local discovery, and long-term organic visibility." },
  { title: "Social Media Management", icon: Share2, detail: "Content calendars, creative direction, publishing, campaign ideas, and performance rhythm." },
  { title: "Poster Design", icon: Brush, detail: "Premium posters, launch creatives, campaign visuals, and brand communication assets." },
  { title: "Video Editing", icon: Film, detail: "High-retention edits for reels, launches, ads, testimonials, and business storytelling." },
  { title: "Video Shooting", icon: Camera, detail: "On-ground business, product, event, and brand shoots planned for usable marketing output." },
  { title: "Content Writing", icon: PenTool, detail: "Website copy, ad messaging, SEO content, captions, scripts, and premium brand storytelling." }
];

export const aiSolutions = [
  { title: "AI Workflow Automation", icon: Workflow, detail: "Connect lead forms, sheets, CRM, emails, WhatsApp, and internal tasks into one reliable flow." },
  { title: "Lead Qualification Bots", icon: Bot, detail: "Capture intent, segment inquiries, score prospects, and route high-value leads faster." },
  { title: "WhatsApp Automation", icon: MessageCircle, detail: "Automated responses, quote flows, booking prompts, reminders, and sales follow-ups." },
  { title: "CRM Automation", icon: BriefcaseBusiness, detail: "Move customer records, deal stages, reminders, and follow-ups without manual drag." },
  { title: "Content Automation", icon: Sparkles, detail: "Turn campaign ideas into reusable content pipelines for posts, ads, emails, and reports." },
  { title: "Reporting Dashboards", icon: Gauge, detail: "Live visibility into inquiries, ad spend, campaign results, operations, and growth metrics." },
  { title: "Agentic AI Systems", icon: BrainCircuit, detail: "Custom AI assistants that reason over business context and execute approved workflows." }
];

export const portfolio: PortfolioProject[] = [
  {
    title: "KL Stall App",
    type: "Business Management Platform",
    category: "Web App",
    url: "https://k-lstall-app.vercel.app/",
    description: "Digital platform for stall booking and event business management.",
    features: ["Event booking", "Management dashboard", "Booking workflows"],
    gradient: "from-cyan-400 via-blue-600 to-violet-800"
  },
  {
    title: "Siva Sakthi Printers",
    type: "Printing Business Website",
    category: "Website",
    url: "https://sivasakthiprinters.netlify.app/",
    description: "Professional website for printing services and customer engagement.",
    features: ["Service pages", "Quote flow", "Contact integration"],
    gradient: "from-fuchsia-500 via-violet-700 to-slate-950"
  },
  {
    title: "Export Demo Site",
    type: "Export Business Website",
    category: "Export",
    url: "https://exportdemosite.netlify.app/",
    description: "Corporate export-focused website built for product showcasing and inquiries.",
    features: ["Product showcase", "Inquiry forms", "International focus"],
    gradient: "from-amber-300 via-emerald-600 to-slate-950"
  },
  {
    title: "Danny Stationary Shop",
    type: "E-Commerce Storefront",
    category: "Commerce",
    url: "https://danny-stationary-shop.netlify.app/",
    description: "Online shopping website for stationery products and retail sales.",
    features: ["Product catalog", "Cart flow", "Checkout"],
    gradient: "from-pink-400 via-purple-600 to-blue-950"
  },
  {
    title: "Galaxy Beauty Academy",
    type: "Education / Academy Website",
    category: "Website",
    url: "https://www.galaxybeautyacademy.com/",
    description: "Professional academy website for beauty training programs and admissions.",
    features: ["Course listings", "Admissions", "Program details"],
    gradient: "from-rose-300 via-fuchsia-700 to-slate-950"
  }
];

export const processSteps = [
  { title: "Discovery", icon: Compass, detail: "We map the business model, audience, workflows, constraints, and growth goal." },
  { title: "Strategy", icon: ClipboardCheck, detail: "We define the offer, architecture, conversion flow, automation plan, and launch priorities." },
  { title: "Design", icon: Brush, detail: "We create a premium interface system with motion, hierarchy, accessibility, and trust." },
  { title: "Development", icon: Code2, detail: "We build scalable websites, apps, dashboards, automations, and integrations." },
  { title: "Automation", icon: Bot, detail: "We connect AI, WhatsApp, CRM, reporting, and operational workflows." },
  { title: "Launch", icon: Rocket, detail: "We optimize performance, SEO, tracking, forms, testing, and production deployment." },
  { title: "Scale", icon: BarChart3, detail: "We improve campaigns, content, data, and automation based on measurable outcomes." }
];

export const reasons = [
  { title: "Business-focused technology", icon: BriefcaseBusiness, detail: "Every build is tied to inquiries, speed, operations, trust, or revenue." },
  { title: "Creative + engineering team", icon: MonitorSmartphone, detail: "Design, content, software, automation, and marketing work as one delivery system." },
  { title: "AI-first solutions", icon: BrainCircuit, detail: "We use automation and intelligent workflows where they create real leverage." },
  { title: "Measurable ROI mindset", icon: BadgeCheck, detail: "We care about what the website, app, campaign, or system changes for the business." },
  { title: "Scalable architecture", icon: ShieldCheck, detail: "Clean, maintainable foundations that can grow as the company grows." },
  { title: "Rapid execution", icon: Zap, detail: "A focused process that turns clarity into polished production output quickly." }
];

export const testimonials = [
  {
    quote: "Client stories coming soon.",
    name: "Innovexa Digital",
    role: "Verified project feedback will be added after launch"
  }
];

export const pricing = [
  { name: "Website Launch", price: "Custom", detail: "Premium website strategy, design, development, SEO foundations, and lead capture.", features: ["Responsive website", "Performance setup", "Contact flow", "Launch support"] },
  { name: "Automation System", price: "Custom", detail: "AI and workflow automation for leads, WhatsApp, CRM, content, and reporting.", features: ["Workflow map", "AI automation", "Integration setup", "Dashboard support"], featured: true },
  { name: "Growth Partner", price: "Custom", detail: "Ongoing website, ads, content, SEO, automation, and creative execution.", features: ["Campaign support", "Creative assets", "SEO rhythm", "Monthly optimization"] }
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
  "Google Ads",
  "Meta Ads",
  "SEO",
  "Social Media Management",
  "Poster Design",
  "Video Editing",
  "Video Shooting",
  "Content Writing"
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/innovexa_digital", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/919566061075", icon: MessageCircle },
  { label: "Email", href: "mailto:innovexa.digitalservices@gmail.com", icon: FileText }
];
