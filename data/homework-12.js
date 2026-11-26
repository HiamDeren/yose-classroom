/* Bài tập Buổi 12 — theo tài liệu "Lesson 12 – Job – Work – Career P2" (có đáp án) */
YOSE.addHomework(12, [
  {
    type: "match",
    title: "Matching – Nối từ với định nghĩa",
    intro: "Match each word (1–10) with its English definition (A–J). / Nối từ (1–10) với định nghĩa tiếng Anh (A–J).",
    options: [
      { k: "A", t: "To find and fix problems in a system or machine." },
      { k: "B", t: "The total amount of money that a person or company spends." },
      { k: "C", t: "To give part of your work or responsibilities to someone else." },
      { k: "D", t: "To recognize and name an illness by examining someone." },
      { k: "E", t: "Working sometimes in the office and sometimes from home using the internet." },
      { k: "F", t: "To give a particular amount of money or resources for a purpose." },
      { k: "G", t: "The ability to change and learn new things in new situations." },
      { k: "H", t: "To watch and organize an activity to make sure it is done correctly." },
      { k: "I", t: "To provide what someone needs or asks for." },
      { k: "J", t: "To protect something from harm or damage." }
    ],
    items: [
      { q: "delegate", a: "C" },
      { q: "troubleshoot", a: "A" },
      { q: "diagnose", a: "D" },
      { q: "allocate", a: "F" },
      { q: "oversee", a: "H" },
      { q: "safeguard", a: "J" },
      { q: "accommodate", a: "I" },
      { q: "expenditure", a: "B" },
      { q: "hybrid", a: "E" },
      { q: "adaptability", a: "G" }
    ]
  },
  {
    type: "tf",
    label: "Phân loại ngành",
    labels: ["ED", "FIN", "BUS", "IT", "HC", "HOS", "SAL", "MKT"],
    title: "Classification – Nhiệm vụ thuộc ngành nào?",
    intro: "Choose the field for each duty: **ED** (Education), **FIN** (Finance & Accounting), **BUS** (Business & Administration), **IT** (Technology & IT), **HC** (Healthcare), **HOS** (Hospitality & Tourism), **SAL** (Sales & Customer Service), **MKT** (Marketing & Media).",
    items: [
      { q: "mark exam papers", a: "ED", explain: "Education: assess students’ performance." },
      { q: "check daily bills and spending", a: "FIN", explain: "Finance: monitor expenditure." },
      { q: "assign tasks to team members", a: "BUS", explain: "Business: delegate responsibilities." },
      { q: "find software bugs and errors", a: "IT", explain: "IT: troubleshoot technical issues." },
      { q: "give pills or injections", a: "HC", explain: "Healthcare: administer medication." },
      { q: "answer booking phone calls", a: "HOS", explain: "Hospitality: manage guest reservations." },
      { q: "calm down angry customers", a: "SAL", explain: "Sales: resolve customer complaints." },
      { q: "film videos and take product photos", a: "MKT", explain: "Marketing: create engaging content." },
      { q: "set passwords and security shields", a: "IT", explain: "IT: safeguard sensitive information." },
      { q: "check tax rules and legal papers", a: "FIN", explain: "Finance: ensure regulatory compliance." }
    ]
  },
  {
    type: "mcq",
    title: "Multiple choice – Chọn đáp án đúng",
    intro: "Choose the correct answer A, B, C or D. / Chọn đáp án đúng.",
    items: [
      { q: "I am responsible ___ developing lesson plans.", options: ["for", "of", "with", "to"], a: 0, explain: "be responsible for." },
      { q: "She is in charge ___ the marketing team.", options: ["for", "of", "on", "at"], a: 1, explain: "be in charge of." },
      { q: "I am in charge of ___ new staff.", options: ["train", "training", "trained", "to train"], a: 1, explain: "in charge of + V-ing." },
      { q: "Nurses ___ medication to patients.", options: ["administer", "diagnose", "allocate", "delegate"], a: 0, explain: "administer medication." },
      { q: "A good manager knows how to ___ responsibilities to team members.", options: ["delegate", "diagnose", "evaluate", "troubleshoot"], a: 0, explain: "delegate responsibilities." },
      { q: "IT staff ___ technical issues such as broken computers.", options: ["troubleshoot", "accommodate", "promote", "assess"], a: 0, explain: "troubleshoot technical issues." },
      { q: "Hotel staff try hard to ___ guests’ needs.", options: ["accommodate", "diagnose", "allocate", "implement"], a: 0, explain: "accommodate guests’ needs." },
      { q: "Teachers should give ___ feedback to help students improve.", options: ["constructive", "construction", "construct", "constructively"], a: 0, explain: "Tính từ đứng trước danh từ “feedback”." },
      { q: "Accountants prepare financial ___ every month.", options: ["statements", "campaigns", "complaints", "emergencies"], a: 0, explain: "prepare financial statements." },
      { q: "I go to the office three days a week and work from home two days. My job is ___.", options: ["hybrid", "manual", "permanent", "freelance"], a: 0, explain: "Vừa ở văn phòng vừa ở nhà." },
      { q: "He is between ___ at the moment, so he is looking for a new one.", options: ["jobs", "works", "careers", "duties"], a: 0, explain: "be between jobs (idiom)." },
      { q: "Critical thinking means thinking ___.", options: ["logic", "logical", "logically", "logician"], a: 2, explain: "Trạng từ bổ nghĩa cho “thinking”." }
    ]
  },
  {
    type: "gap",
    title: "Gap fill – Điền từ vào chỗ trống",
    intro: "Complete the sentences with the words in the box. Each word is used once. / Điền từ trong khung, mỗi từ dùng một lần.",
    bank: ["market trends", "daily operations", "lesson plans", "sales targets", "sensitive information", "brand awareness", "medical emergencies", "guest reservations", "customer loyalty", "regulatory compliance"],
    items: [
      { q: "Before class, teachers develop ___ and prepare slides.", a: ["lesson plans"], explain: "develop lesson plans." },
      { q: "The finance team ensures ___ by following government laws.", a: ["regulatory compliance"], explain: "ensure regulatory compliance." },
      { q: "As an office manager, she oversees ___ and checks deadlines.", a: ["daily operations"], explain: "oversee daily operations." },
      { q: "IT staff safeguard ___ from hackers.", a: ["sensitive information"], explain: "safeguard sensitive information." },
      { q: "Doctors and nurses must respond quickly to ___.", a: ["medical emergencies"], explain: "respond to medical emergencies." },
      { q: "Receptionists manage ___ and arrange check-in dates.", a: ["guest reservations"], explain: "manage guest reservations." },
      { q: "The sales team works hard to meet monthly ___.", a: ["sales targets"], explain: "meet sales targets." },
      { q: "Membership cards and rewards help build ___.", a: ["customer loyalty"], explain: "build customer loyalty." },
      { q: "Marketers study customer data to analyse ___.", a: ["market trends"], explain: "analyse market trends." },
      { q: "A catchy logo helps enhance ___.", a: ["brand awareness"], explain: "enhance brand awareness." }
    ]
  },
  {
    type: "gap",
    title: "Word forms – Dạng đúng của từ",
    intro: "Write the correct form of the word in brackets. / Viết dạng đúng của từ trong ngoặc.",
    items: [
      { q: "I am ___ for checking the company’s expenses.", hint: "RESPONSIBILITY", a: ["responsible"], explain: "be responsible for (tính từ)." },
      { q: "Good teachers deliver ___ lessons to keep students interested.", hint: "ENGAGE", a: ["engaging"], explain: "Tính từ -ing đứng trước “lessons”." },
      { q: "Doctors ___ medical conditions by checking test results.", hint: "DIAGNOSIS", a: ["diagnose"], explain: "Động từ chính sau chủ ngữ “Doctors”." },
      { q: "The hotel wants to ensure guest ___.", hint: "SATISFY", a: ["satisfaction"], explain: "guest satisfaction (danh từ)." },
      { q: "He gave me some ___ feedback on my presentation.", hint: "CONSTRUCT", a: ["constructive"], explain: "Tính từ đứng trước “feedback”." },
      { q: "Managers need to be good at ___ problem-solving.", hint: "COMPLEXITY", a: ["complex"], explain: "complex problem-solving." },
      { q: "___ is important when you have to learn new things quickly.", hint: "ADAPT", a: ["Adaptability"], explain: "Danh từ làm chủ ngữ." },
      { q: "She handles ___ tasks such as signing papers.", hint: "ADMINISTRATION", a: ["administrative"], explain: "Tính từ đứng trước “tasks”." },
      { q: "Our IT team ___ new system upgrades every month.", hint: "IMPLEMENTATION", a: ["implements"], explain: "Chủ ngữ số ít “Our IT team”, hiện tại đơn." },
      { q: "He prefers to work ___ because he doesn’t like working in a team.", hint: "INDEPENDENT", a: ["independently"], explain: "Trạng từ bổ nghĩa cho “work”." }
    ]
  },
  {
    type: "error",
    title: "Error correction – Tìm và sửa lỗi sai",
    intro: "Each sentence has ONE mistake. Find and correct it. / Mỗi câu có MỘT lỗi sai — gõ phần đã sửa hoặc cả câu đúng.",
    items: [
      { q: "I am responsible of managing guest reservations.", a: ["for", "responsible for"], show: "of → for", fixed: "I am responsible for managing guest reservations.", explain: "be responsible for." },
      { q: "She is in charge for the sales team.", a: ["of", "in charge of", "charge of"], show: "for → of", fixed: "She is in charge of the sales team.", explain: "be in charge of." },
      { q: "I am in charge of check the company’s costs.", a: ["checking", "of checking"], show: "check → checking", fixed: "I am in charge of checking the company’s costs.", explain: "in charge of + V-ing." },
      { q: "He enjoys to work with machines.", a: ["working", "enjoys working"], show: "to work → working", fixed: "He enjoys working with machines.", explain: "enjoy + V-ing." },
      { q: "She is afraid that her colleagues is toxic.", a: ["are", "colleagues are", "are toxic"], show: "is → are", fixed: "She is afraid that her colleagues are toxic.", explain: "Chủ ngữ số nhiều “her colleagues”." },
      { q: "I prefer mental work than manual work.", a: ["to", "to manual work", "work to manual work"], show: "than → to", fixed: "I prefer mental work to manual work.", explain: "prefer A to B." },
      { q: "He doesn’t mind to work overtime.", a: ["working", "mind working"], show: "to work → working", fixed: "He doesn’t mind working overtime.", explain: "mind + V-ing." },
      { q: "She is willing working night shifts.", a: ["to work", "willing to work"], show: "working → to work", fixed: "She is willing to work night shifts.", explain: "be willing to + V." }
    ]
  },
  {
    type: "tf",
    label: "Phân loại kỹ năng",
    labels: ["COM", "THI", "SEL", "TEA"],
    title: "Classification – Kỹ năng thuộc nhóm nào?",
    intro: "Choose **COM** (Communication), **THI** (Thinking), **SEL** (Self-management) or **TEA** (Teamwork & leadership). / Kỹ năng thuộc nhóm nào?",
    items: [
      { q: "active listening", a: "COM", explain: "Communication skills." },
      { q: "decision making", a: "THI", explain: "Thinking skills." },
      { q: "stress resilience", a: "SEL", explain: "Self-management skills." },
      { q: "conflict resolution", a: "TEA", explain: "Teamwork & leadership skills." },
      { q: "negotiation & persuasion", a: "COM", explain: "Communication skills." },
      { q: "prioritization", a: "SEL", explain: "Self-management skills." },
      { q: "creative thinking", a: "THI", explain: "Thinking skills." },
      { q: "delegation", a: "TEA", explain: "Teamwork & leadership skills." },
      { q: "adaptability", a: "SEL", explain: "Self-management skills." },
      { q: "emotional intelligence (EQ)", a: "TEA", explain: "Teamwork & leadership skills." }
    ]
  },
  {
    type: "gap",
    title: "Dialogue completion – Find someone who…",
    intro: "Complete the interview with the words in the box. / Điền từ trong khung vào bài phỏng vấn.",
    bank: ["permanent", "enjoy", "mind", "hybrid", "prefer", "willing", "independently"],
    items: [
      { who: "A", q: "Do you ___ working indoors?", a: ["prefer"], explain: "Do you prefer working indoors?" },
      { who: "B", q: "Yes. I don’t like hot weather." },
      { who: "A", q: "Do you ___ working overtime?", a: ["mind"], explain: "Do you mind + V-ing?" },
      { who: "B", q: "No, I don’t. I can earn more money." },
      { who: "A", q: "Are you ___ to work night shifts?", a: ["willing"], explain: "be willing to + V." },
      { who: "B", q: "Not really. I need enough sleep." },
      { who: "A", q: "Would you like a ___ job or a freelance job?", a: ["permanent"], explain: "permanent job ≠ freelance job." },
      { who: "B", q: "A permanent job, because I want job security." },
      { who: "A", q: "Do you like ___ work?", a: ["hybrid"], explain: "hybrid work = văn phòng + ở nhà." },
      { who: "B", q: "Yes. I can go to the office three days a week and work from home on the other days." },
      { who: "A", q: "Do you want to work ___?", a: ["independently"], explain: "work independently = làm việc độc lập." },
      { who: "B", q: "No. I ___ working in a team because I can learn from my teammates.", a: ["enjoy"], explain: "enjoy + V-ing." }
    ]
  },
  {
    type: "writing",
    title: "Speaking / Writing – My job profile",
    intro: "Write a job profile (120–160 words) for yourself or someone you know. Follow the 4 parts in “Job profile” and explain at least TWO important factors. / Viết job profile (120–160 từ) theo 4 phần, giải thích ít nhất HAI yếu tố.",
    words: [120, 160],
    target: 8,
    steps: [
      "Basic information: name, age, occupation",
      "Types of work: office-based / manual, indoor / outdoor, full-time / part-time, remote / hybrid / on-site",
      "Responsibilities: I am responsible for… / I am in charge of…",
      "Important factors: career prospects, working environment, salary and benefits"
    ],
    criteria: [
      "Đủ 4 phần",
      "Dùng “responsible for / in charge of + V-ing” đúng",
      "Giải thích ≥ 2 yếu tố",
      "Dùng ≥ 8 từ/cụm từ của bài"
    ],
    sample: {
      en: "I am 26 years old, and I work as a web developer in the R&D department of a manufacturing company. My job is **office-based** and mostly mental work. It is a full-time, **permanent** and on-site job, so I work at my desk every day. I am **responsible for developing software applications** for other departments. I am also **in charge of troubleshooting technical issues**, maintaining the systems and **safeguarding sensitive information**. Every day, I **coordinate with different departments** to understand what they need. I chose this job for two main reasons. First, it offers good **career prospects** because I can learn new technologies and get promoted. Second, the **working environment** is comfortable and my colleagues are friendly. Thanks to this job, I can improve my **complex problem-solving** and **time management** skills.",
      vi: "Bài mẫu – web developer. Bản dịch có ở phần Bài nói mẫu."
    }
  }
]);
