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
  image: string;
  mockupType: "browser" | "phone" | "dashboard" | "phone-light";
  mockupUrl?: string;
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
      "ระบบจองแคมป์แบบครบวงจรด้วย LINE OA, LIFF และ LINE Login พร้อม Admin Dashboard — ใช้งานจริงแล้ว",
    longDesc:
      "แพลตฟอร์มจองรีสอร์ทแคมป์ที่สร้างขึ้นเพื่อธุรกิจจริง ลูกค้าค้นพบรีสอร์ทผ่าน LINE OA จองผ่าน LIFF web app ที่ฝังอยู่ใน LINE และยืนยันตัวตนด้วย LINE Login แผงควบคุม Admin ให้จัดการห้องพัก การจอง และข้อความอัตโนมัติได้ทั้งหมดในระบบเดียว",
    tags: ["Next.js", "LINE OA", "LIFF", "LINE Login", "Tailwind CSS", "REST API", "Prisma"],
    color: "#4ade80",
    gradientFrom: "rgba(74,222,128,0.18)",
    features: [
      "LINE OA Chatbot รับสอบถามและยืนยันการจองอัตโนมัติ",
      "LIFF Web App ฝังอยู่ใน LINE สำหรับจองห้องพัก",
      "LINE Login OAuth — ยืนยันตัวตนไม่ต้องสมัครสมาชิกใหม่",
      "Admin Dashboard จัดการห้องพัก การจอง และข้อมูลลูกค้า",
      "ปฏิทินแสดงห้องว่างแบบ Real-time",
      "ส่งข้อความยืนยันและแจ้งเตือนการจองอัตโนมัติ",
    ],
    role: "Full-Stack Developer",
    duration: "1 เดือน",
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
    subtitle: "แอปติดตามหนี้พลัง AI",
    shortDesc:
      "เว็บแอปติดตามหนี้และค่าใช้จ่าย พร้อม AI Wealth Advisor จาก Google Gemini ที่วิเคราะห์การใช้จ่ายและให้คำแนะนำทางการเงินแบบ Personalized",
    longDesc:
      "เว็บแอปจัดการการเงินส่วนตัวที่เข้าใจง่ายและชาญฉลาด Gemini AI จะอ่านประวัติธุรกรรมและรูปแบบการใช้จ่ายของคุณ แล้วให้คำแนะนำทางการเงินที่ตรงจุด — เหมือนมี CFO ส่วนตัวอยู่ในมือ ไม่ว่าจะใช้จ่ายเกิน สะสมหนี้เร็วเกินไป หรือออมได้ดี AI จะตอบสนองด้วยคำแนะนำที่เป็นประโยชน์",
    tags: ["Google Apps Script", "Google Gemini", "LINE OA", "JavaScript", "Google Sheets", "REST API"],
    color: "#60a5fa",
    gradientFrom: "rgba(96,165,250,0.18)",
    features: [
      "บันทึกและติดตามหนี้พร้อมจัดหมวดหมู่อัจฉริยะ",
      "AI Wealth Advisor พลัง Gemini ให้คำปรึกษาทางการเงิน",
      "วิเคราะห์รูปแบบการใช้จ่ายและแสดงผลด้วยกราฟ",
      "คำแนะนำทางการเงิน Personalized ตามประวัติของคุณ",
      "แจ้งเตือน Push Notification เตือนกำหนดชำระ",
      "กราฟแสดงยอดหนี้และรายจ่ายแยกประเภท",
    ],
    role: "Developer",
    duration: "2 เดือน",
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
    subtitle: "Power BI Analytics ขั้นสูง",
    shortDesc:
      "BI Dashboard แบบ Dual-layer แยก Descriptive และ Predictive Analytics บนชุดข้อมูล E-Commerce จาก Olist ประเทศบราซิล",
    longDesc:
      "Power BI Report ที่สร้างบนชุดข้อมูล Olist (9 ตาราง, 100k+ คำสั่งซื้อ) แบ่งการวิเคราะห์เป็น 2 ชั้น: Descriptive Analytics สำหรับทำความเข้าใจสิ่งที่เกิดขึ้นในอดีต และ Predictive Analytics สำหรับพยากรณ์เวลาจัดส่ง ความต้องการสินค้า และความเสี่ยงที่ลูกค้าจะเลิกใช้บริการ",
    tags: ["Power BI", "DAX", "Star Schema", "Python", "SQL", "Predictive Analytics", "Data Modeling"],
    color: "#c084fc",
    gradientFrom: "rgba(192,132,252,0.18)",
    features: [
      "Star Schema Data Model เชื่อม 9 ตารางข้อมูล",
      "การแบ่งกลุ่มลูกค้าด้วย RFM (Recency, Frequency, Monetary)",
      "พยากรณ์เวลาจัดส่งล่วงหน้าหลายสัปดาห์",
      "Heatmap แสดงยอดขายรายรัฐทั่วประเทศบราซิล",
      "วิเคราะห์ประสิทธิภาพหมวดสินค้าและผู้ขาย",
      "Cohort Analysis ติดตามการรักษาฐานลูกค้า",
    ],
    role: "Data Analyst",
    duration: "6 สัปดาห์",
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
    subtitle: "แอปสั่งอาหาร · Custom UI/UX",
    shortDesc:
      "แอปสั่งอาหาร Mobile ที่มี UI/UX ระดับ Premium สร้างขึ้นสำหรับร้านเบอร์เกอร์ท้องถิ่นใน Hat Yai",
    longDesc:
      "แอปสั่งอาหารที่สร้างขึ้นโดยเฉพาะสำหรับร้านเบอร์เกอร์ใน Hat Yai โดยเน้นที่ UX ที่ลื่นไหลและสวยงาม — เรียกดูเมนูแบบ Category ได้ง่าย จัดการตะกร้าได้ฉับไว มี Animation ที่ smooth และขั้นตอน Checkout ที่เรียบง่าย ทุก Screen ถูก Design ให้ตรงกับ Brand Identity ของร้าน",
    tags: ["Flutter", "Dart", "Firebase", "Custom UI/UX", "Mobile", "REST API"],
    color: "#fb923c",
    gradientFrom: "rgba(251,146,60,0.18)",
    features: [
      "UI Design ที่ตรงกับ Brand Identity ของร้าน",
      "เรียกดูเมนูแบบหมวดหมู่พร้อมตัวกรอง",
      "จัดการตะกร้าสินค้า Real-time พร้อม Animation ลื่นไหล",
      "ติดตามสถานะออร์เดอร์แบบ Real-time",
      "ประวัติการสั่งและ Profile ผู้ใช้",
      "แผงจัดการออร์เดอร์สำหรับ Admin",
    ],
    role: "Mobile Developer + UI/UX Designer",
    duration: "2 เดือน",
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
      "ระบบจองรีสอร์ท Nature Stay & Private Retreat พร้อม LINE OA, ห้องว่าง Real-time และ Admin ครบครัน — ใช้งานจริงแล้ว",
    longDesc:
      "ระบบจองรีสอร์ทครบวงจรสำหรับ Gorilla Resort — รีสอร์ทธรรมชาติใน Kamphaeng Saen ลูกค้าดูประเภทห้องและความพร้อมใช้งาน จองผ่านเว็บด้วย LINE Login และรับยืนยันอัตโนมัติผ่าน LINE OA แผง Admin ให้ควบคุม Inventory การจอง และการสื่อสารกับแขกได้ทั้งหมด",
    tags: ["Next.js", "LINE OA", "LIFF", "LINE Login", "Tailwind CSS", "Prisma", "REST API"],
    color: "#34d399",
    gradientFrom: "rgba(52,211,153,0.18)",
    features: [
      "ปฏิทินแสดงห้องว่างแบบ Real-time",
      "ยืนยันตัวตนด้วย LINE Login OAuth",
      "LIFF Web App ฝังใน LINE สำหรับจองห้องพัก",
      "Admin Dashboard จัดการห้อง การจอง และข้อมูลแขก",
      "ส่งข้อความยืนยันการจองอัตโนมัติผ่าน LINE OA",
      "หน้าข้อมูลติดต่อและรายละเอียดรีสอร์ท",
    ],
    role: "Full-Stack Developer",
    duration: "1 เดือน",
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
    company: "โรงพยาบาลหาดใหญ่",
    type: "ฝึกงาน",
    period: "2567",
    location: "หาดใหญ่, สงขลา",
    color: "#4ade80",
    highlight: "โครงสร้างพื้นฐาน IT ในโรงพยาบาล",
    bullets: [
      "Hardware Maintenance — ตรวจสอบ ซ่อมแซมเครื่องคอมพิวเตอร์ เครื่องพิมพ์ และแบตเตอรี่สำรองไฟ (UPS) ให้อยู่ในสภาพพร้อมใช้งานอยู่เสมอ",
      "Network Infrastructure — สนับสนุนการเดินสายระบบเครือข่าย (LAN) ตั้งค่า IP Address และการเชื่อมต่อในพื้นที่ปฏิบัติงานต่างๆ",
      "HIS Support — สนับสนุนและแก้ไขปัญหาการใช้งานระบบสารสนเทศโรงพยาบาล (Software) เพื่อให้แพทย์บันทึกข้อมูลได้อย่างราบรื่น",
      "On-site Helpdesk — รับแจ้งปัญหา ลงพื้นที่แก้ไขหน้างานอย่างทันท่วงที และให้คำแนะนำการใช้งานแก่บุคลากรวิชาชีพอื่นๆ",
    ],
  },
  {
    role: "Hall Support Staff",
    company: "Diamond Brains · ICC หาดใหญ่",
    type: "งาน Event",
    period: "2566",
    location: "หาดใหญ่, สงขลา",
    color: "#60a5fa",
    highlight: "การแข่งขันวิชาการขนาดใหญ่",
    bullets: [
      "ประสานงานควบคุมฝูงชนและ Logistics สำหรับงานแข่งขันวิชาการระดับภูมิภาค",
      "ทำงานร่วมกับทีมผู้จัดงานและอาสาสมัครเพื่อให้งานดำเนินไปอย่างราบรื่น",
      "จัดการลงทะเบียน Check-in และปฐมนิเทศผู้เข้าร่วมงาน",
    ],
  },
  {
    role: "Operations Support",
    company: "SITE 2026 Charity Concert",
    type: "Event Operations",
    period: "2568",
    location: "หาดใหญ่, สงขลา",
    color: "#c084fc",
    highlight: "คอนเสิร์ตการกุศลขนาดใหญ่",
    bullets: [
      "จัดการระบบจำหน่ายบัตรและประตูทางเข้าสำหรับคอนเสิร์ตการกุศลขนาดใหญ่",
      "ประสานงาน Logistics แบบ Real-time กับทีม Operations ความปลอดภัย และอาสาสมัคร",
      "แก้ไขปัญหาผู้เข้าชมแบบทันทีและดูแลให้งานเป็นไปตามโปรโตคอลที่กำหนด",
    ],
  },
];
