export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  color: string;
  gradientFrom: string;
  features: string[];
  role: string;
  duration: string;
  github: string;
  live: string;
  image: string;          // path under /public/projects/
  mockupType: "browser" | "phone" | "dashboard" | "phone-light";
  mockupUrl?: string;     // shown in browser chrome
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  color: string;
  highlight: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    id: "rhino-camp",
    number: "01",
    title: "Rhino Camp",
    subtitle: "Full-Stack Camp Booking Platform",
    shortDesc:
      "End-to-end camp booking system with LINE OA integration, LIFF micro-frontend, and LINE Login authentication. Deployed and live.",
    longDesc:
      "A complete glamping resort booking platform built for real business deployment. Guests discover the resort through LINE OA, book via an embedded LIFF app, and authenticate with LINE Login. The admin dashboard gives full control over room inventory, reservations, and automated guest messaging — all in one cohesive system.",
    tags: ["Next.js", "LINE OA", "LIFF", "LINE Login", "Tailwind CSS", "REST API", "Prisma"],
    color: "#4ade80",
    gradientFrom: "rgba(74,222,128,0.18)",
    features: [
      "LINE OA chatbot for booking inquiries & confirmations",
      "LIFF-embedded booking web app inside LINE",
      "LINE Login OAuth — zero friction authentication",
      "Admin dashboard: room inventory & reservation management",
      "Real-time availability calendar",
      "Automated booking confirmation & reminder messages",
    ],
    role: "Full-Stack Developer",
    duration: "1 months",
    github: "https://github.com/Kcinzaa/rhino-camp",
    live: "https://rhino-camp.vercel.app/booking",
    image: "/projects/rhino.png",
    mockupType: "browser",
    mockupUrl: "rhino-camp.vercel.app/booking",
  },
  {
    id: "tawng-bia-mae",
    number: "02",
    title: "ทวงเบี้ยแม่",
    subtitle: "AI-Powered Personal Finance App",
    shortDesc:
      'Mobile-first debt tracker with a Google Gemini "Wealth Advisor" AI that analyzes your spending and delivers personalized financial advice.',
    longDesc:
      'A mobile app that makes personal finance management intuitive and intelligent. The Gemini-powered Wealth Advisor reads your transaction history and spending patterns, then delivers contextual financial advice — like having a CFO in your pocket. Whether you\'re overspending on food or accumulating debt too fast, the AI responds with specific, actionable guidance.',
    tags: ["Google Apps Script", "Google Gemini", "LINE OA", "JavaScript", "Google Sheets", "REST API"],
    color: "#60a5fa",
    gradientFrom: "rgba(96,165,250,0.18)",
    features: [
      "Debt tracking with smart categorization",
      "Gemini AI-powered Wealth Advisor chatbot",
      "Spending pattern analysis & visualization",
      "Personalized financial advice based on history",
      "Push notification payment reminders",
      "Charts: spending breakdown, debt progress",
    ],
    role: "Developer",
    duration: "2 months",
    github: "https://script.google.com/home/projects/1leuFCD7NF3QDsa-4HjYBEh_lXpTd6n5HW-kIK4YyIPWTTLx2GMIbWycD/edit",
    live: "https://script.google.com/macros/s/AKfycbwSQ3qcU4hbUQNPWf0DH6uA0I2ty4bRcibVmrw6xje0JPGBAp4wS5HUk4Fs8j1M0qhv7w/exec",
    image: "/projects/tong.png",
    mockupType: "browser",
    mockupUrl: "script.google.com · Apps Script",
  },
  {
    id: "olist-dashboard",
    number: "03",
    title: "Olist E-Commerce Dashboard",
    subtitle: "Advanced Power BI Analytics",
    shortDesc:
      "Dual-layer BI dashboard cleanly separating descriptive and predictive analytics on the Olist Brazilian e-commerce dataset.",
    longDesc:
      "A sophisticated Power BI report built on the Olist dataset (9 tables, 100k+ orders). The dashboard separates two analytical layers: descriptive analytics to understand what happened historically and predictive analytics to forecast delivery times, demand, and customer churn risk.",
    tags: ["Power BI", "DAX", "Star Schema", "Python", "SQL", "Predictive Analytics", "Data Modeling"],
    color: "#c084fc",
    gradientFrom: "rgba(192,132,252,0.18)",
    features: [
      "Star schema data model with 9 fact/dimension tables",
      "RFM customer segmentation (Recency, Frequency, Monetary)",
      "Multi-week delivery time forecasting model",
      "Geographic sales heatmap across Brazilian states",
      "Product category & seller performance analysis",
      "Cohort analysis for customer retention tracking",
    ],
    role: "Data Analyst",
    duration: "6 weeks",
    github: "#",
    live: "#",
    image: "/projects/olist.png",
    mockupType: "dashboard",
    mockupUrl: "Olist Store Dataset · Power BI",
  },
  {
    id: "burgermaikub",
    number: "04",
    title: "Burger Mai Kub",
    subtitle: "Food Ordering App · Custom UI/UX",
    shortDesc:
      "A polished mobile food ordering app with a premium custom UI built for a real local burger restaurant.",
    longDesc:
      "Burger Mai Kub is a food-ordering app built specifically for a local Hat Yai burger restaurant. The focus was on delivering an exceptionally smooth, premium UX — intuitive menu browsing, snappy cart management, animated transitions, and a clean checkout flow. Every screen was custom-designed to match the restaurant's bold brand identity.",
    tags: ["Flutter", "Dart", "Firebase", "Custom UI/UX", "Mobile", "REST API"],
    color: "#fb923c",
    gradientFrom: "rgba(251,146,60,0.18)",
    features: [
      "Custom UI design matching brand identity",
      "Category-based menu browsing with filters",
      "Real-time cart management with smooth animations",
      "Order tracking & status updates",
      "User profile & order history",
      "Admin order management panel",
    ],
    role: "Mobile Developer + UI/UX Designer",
    duration: "1 months",
    github: "#",
    live: "#",
    image: "/projects/burger.png",
    mockupType: "phone-light",
  },
  {
    id: "gorilla-resort",
    number: "05",
    title: "Gorilla Resort",
    subtitle: "Full-Stack Resort Booking Platform",
    shortDesc:
      "Nature Stay & Private Retreat booking platform with LINE OA integration, real-time availability, and full admin management. Live in production.",
    longDesc:
      "A complete resort booking system for Gorilla Resort — a nature stay and private retreat in Kamphaeng Saen. Guests browse room types and availability, book directly via the web app authenticated through LINE Login, and receive automated confirmations via LINE OA. The admin panel provides full control over inventory, reservations, and guest communications.",
    tags: ["Next.js", "LINE OA", "LIFF", "LINE Login", "Tailwind CSS", "Prisma", "REST API"],
    color: "#34d399",
    gradientFrom: "rgba(52,211,153,0.18)",
    features: [
      "Real-time room availability calendar",
      "LINE Login OAuth authentication",
      "LIFF-embedded booking flow inside LINE",
      "Admin dashboard: rooms, bookings & guest management",
      "Automated booking confirmations via LINE OA",
      "Contact & resort information page",
    ],
    role: "Full-Stack Developer",
    duration: "1 months",
    github: "https://github.com/Kcinzaa/gorilla-resort",
    live: "https://gorilla-resort.vercel.app/rooms",
    image: "/projects/gorilla.png",
    mockupType: "browser",
    mockupUrl: "gorilla-resort.vercel.app/rooms",
  },
];

export const experiences: Experience[] = [
  {
    role: "IT Support Intern",
    company: "Hatyai Hospital",
    type: "Internship",
    period: "2024",
    location: "Hat Yai, Thailand",
    color: "#4ade80",
    highlight: "Mission-critical hospital infrastructure",
    bullets: [
      "Maintained critical LAN infrastructure across ICU and ER — zero downtime tolerance environment",
      "Managed Hospital Information System (HIS) serving hundreds of medical staff daily",
      "Performed UPS maintenance, hardware replacements, and emergency network troubleshooting",
      "Documented full infrastructure topology for IT audit and future handover",
    ],
  },
  {
    role: "Hall Support Staff",
    company: "Diamond Brains · ICC Hat Yai",
    type: "Event",
    period: "2023",
    location: "Hat Yai, Thailand",
    color: "#60a5fa",
    highlight: "Large-scale academic competition",
    bullets: [
      "Coordinated crowd control and logistics for a major regional academic competition",
      "Collaborated cross-functionally with organizers and volunteers for smooth execution",
      "Managed participant registration, check-in flow, and orientation",
    ],
  },
  {
    role: "Operations Support",
    company: "SITE 2026 Charity Concert",
    type: "Event Operations",
    period: "2025",
    location: "Hat Yai, Thailand",
    color: "#c084fc",
    highlight: "Large-scale charity concert",
    bullets: [
      "Managed ticketing systems and gate operations for a major charity concert event",
      "Coordinated real-time logistics with operations, security, and volunteer teams",
      "Resolved attendee issues under pressure and maintained event protocol compliance",
    ],
  },
];
