// ==========================================
// TS GLOBAL ACADEMY DATA STORE
// ==========================================

export const DIPLOMA_COURSES = [
  {
    id: "aiml",
    code: "TSGA·AIML",
    title: "Diploma in AI & Machine Learning",
    duration: "6 Months",
    blurb: "Master deep learning, neural networks, predictive modeling, and scalable machine learning pipelines from raw data to cloud deployment.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in AI & Machine Learning (TSGA·AIML).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "Bachelor's degree or final-year students in CS/STEM fields, or basic proficiency in Python and High School Mathematics.",
    levels: [
      {
        level: "Level 1: Fundamentals & Math for ML",
        topics: ["Linear Algebra & Matrix Operations", "Python for Data Analysis (NumPy/Pandas)", "Exploratory Data Analysis & Visualization"]
      },
      {
        level: "Level 2: Supervised & Unsupervised Learning",
        topics: ["Regression & Decision Trees", "Support Vector Machines & Random Forests", "Clustering & Dimensionality Reduction"]
      },
      {
        level: "Level 3: Deep Learning & Production MLOps",
        topics: ["Neural Networks with PyTorch & TensorFlow", "Computer Vision & Natural Language Processing", "Containerized API Deployment (FastAPI & Docker)"]
      }
    ],
    topicsCovered: ["Statistical Learning", "Neural Network Architecture", "Feature Engineering", "Hyperparameter Tuning", "MLOps Pipelines"],
    toolsCovered: ["Python", "PyTorch", "Scikit-Learn", "TensorFlow", "FastAPI", "Docker", "Git"]
  },
  {
    id: "arch",
    code: "TSGA·ARCH",
    title: "Diploma in Architecture",
    duration: "12 Months",
    blurb: "Comprehensive architectural drafting, parametric 3D modeling, building information modeling (BIM), and sustainable design principles.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in Architecture (TSGA·ARCH).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "Open to High School graduates, Diploma holders, or Civil Engineering/Design students seeking professional architectural mastery.",
    levels: [
      {
        level: "Level 1: Drafting & Spatial Fundamentals",
        topics: ["Architectural Graphics & Freehand Sketching", "Technical Drawing Standards & Geometry", "Spatial Planning & Ergonomic Design"]
      },
      {
        level: "Level 2: 3D BIM & Parametric Design",
        topics: ["Revit Architecture & BIM Workflows", "Rhino 3D & Grasshopper Parametric Scripts", "Photorealistic Rendering & Lighting Techniques"]
      },
      {
        level: "Level 3: Working Drawings & Site Practice",
        topics: ["Structural Detail Documentation", "Building Codes, Safety & Permits", "Sustainable Materials & Climate-Responsive Architecture"]
      }
    ],
    topicsCovered: ["Architectural Graphics", "BIM Management", "Building Services", "Parametric Modeling", "Construction Documentation"],
    toolsCovered: ["AutoCAD", "Revit", "Rhino 3D", "V-Ray", "Sketchup", "Lumion"]
  },
  {
    id: "peng",
    code: "TSGA·PENG",
    title: "Diploma in Prompt Engineering",
    duration: "8 Weeks",
    blurb: "Accelerated mastery of Large Language Model orchestration, advanced prompt patterns, context window optimization, and AI workflow automation.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in Prompt Engineering (TSGA·PENG).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "No coding background required. Open to professionals, creators, and managers looking to leverage GenAI for enterprise productivity.",
    levels: [
      {
        level: "Level 1: LLM Mechanics & Core Prompting",
        topics: ["Transformer Architecture Fundamentals", "Zero-Shot, Few-Shot & Chain-of-Thought", "Role-Based & Instruction Tuning Design"]
      },
      {
        level: "Level 2: Enterprise Automation & RAG",
        topics: ["Retrieval-Augmented Generation (RAG) Concepts", "Prompt Chaining & System Persona Tuning", "Context Window Management & Compression"]
      },
      {
        level: "Level 3: Multi-Agent Systems & Evaluation",
        topics: ["Autonomous AI Agent Frameworks", "Function Calling & API Integration", "Prompt Security, Injection Defense & Benchmarking"]
      }
    ],
    topicsCovered: ["Prompt Patterns", "Context Engineering", "Autonomous Agents", "RAG Integration", "Safety & Guardrails"],
    toolsCovered: ["ChatGPT Plus", "Claude 3.5 Sonnet", "LangChain", "CrewAI", "Make.com", "Zapier AI"]
  },
  {
    id: "robo",
    code: "TSGA·ROBO",
    title: "Diploma in Robotics",
    duration: "6 Months",
    blurb: "Build hardware-software integrated robotic systems, microcontroller programming, autonomous kinematics, ROS2, and sensor fusion.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in Robotics (TSGA·ROBO).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "Undergraduates or graduates in Engineering, Electronics, Computer Science, or hardware hobbyists with basic coding interest.",
    levels: [
      {
        level: "Level 1: Circuitry & Embedded Microcontrollers",
        topics: ["Electronic Circuit Analysis & PCB Basics", "Embedded C++ for Arduino & ESP32", "Sensor Interfacing & Actuator Control"]
      },
      {
        level: "Level 2: Kinematics & Autonomous ROS2",
        topics: ["Robot Operating System 2 (ROS2) Nodes", "Forward & Inverse Kinematics", "Gazebo Physics Simulation & URDF Models"]
      },
      {
        level: "Level 3: Computer Vision & Motion Planning",
        topics: ["LiDAR SLAM & Autonomous Navigation", "OpenCV Vision for Object Tracking", "Industrial Robotic Arm Automation"]
      }
    ],
    topicsCovered: ["Embedded C++", "ROS2 Architecture", "Kinematics & Dynamics", "SLAM Navigation", "Sensor Fusion"],
    toolsCovered: ["ROS2", "Python", "Embedded C++", "Arduino/ESP32", "Gazebo", "OpenCV", "KiCad"]
  },
  {
    id: "gst",
    code: "TSGA·GST",
    title: "Diploma in GST & Taxation",
    duration: "4 Months",
    blurb: "Practical Indian & Global Goods and Services Tax compliance, corporate tax return filing, e-way bills, audit preparation, and Tally Prime.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in GST & Taxation (TSGA·GST).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "Commerce graduates, accounting professionals, business owners, or anyone pursuing a career in tax consultation and compliance.",
    levels: [
      {
        level: "Level 1: Statutory Framework & Tax Mechanics",
        topics: ["GST Act Framework & Taxable Event Criteria", "CGST, SGST, IGST & UTGST Allocation", "Registration Procedures & HSN/SAC Codes"]
      },
      {
        level: "Level 2: Input Tax Credit & Filing Returns",
        topics: ["Input Tax Credit (ITC) Rules & Reconciliations", "Filing GSTR-1, GSTR-3B & GSTR-9 Returns", "E-Way Bill Generation & E-Invoicing Systems"]
      },
      {
        level: "Level 3: Tax Audits, Assessment & Tally Prime",
        topics: ["GST Assessments & Notice Response Handling", "Corporate Income Tax Filing Basics", "Complete Practical Accounting in Tally Prime"]
      }
    ],
    topicsCovered: ["GST Law & Registration", "ITC Reconciliation", "Return Filing (GSTR-1/3B)", "E-Invoicing", "Tally ERP Accounting"],
    toolsCovered: ["Tally Prime", "GST Portal", "ClearTax", "Excel Financial Modeling", "Winman Tax"]
  },
  {
    id: "dgmk",
    code: "TSGA·DGMK",
    title: "Diploma in Digital Marketing",
    duration: "4 Months",
    blurb: "Performance marketing, SEO strategies, Meta/Google ad campaigns, conversion rate optimization, and data-driven marketing analytics.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in Digital Marketing (TSGA·DGMK).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "Open to graduates, marketing executives, entrepreneurs, and career switchers looking to lead digital growth campaigns.",
    levels: [
      {
        level: "Level 1: SEO, Copywriting & Brand Strategy",
        topics: ["On-Page & Off-Page SEO Optimization", "Content Strategy & Copywriting", "Keyword Research & Competitor Analysis"]
      },
      {
        level: "Level 2: Performance Paid Advertising",
        topics: ["Meta Ads Manager (Facebook & Instagram)", "Google Search, Display & Performance Max Ads", "Budget Optimization & ROAS Targeting"]
      },
      {
        level: "Level 3: Analytics, CRO & Funnel Automation",
        topics: ["Google Analytics 4 (GA4) Custom Dashboards", "Conversion Rate Optimization (CRO) & A/B Testing", "Email Marketing & Marketing Automation Funnels"]
      }
    ],
    topicsCovered: ["Search Engine Optimization", "Paid Performance Media", "Conversion Funnels", "Web Analytics", "Social Media Growth"],
    toolsCovered: ["Google Analytics 4", "Meta Ads Manager", "SEMrush", "Google Ads", "HubSpot", "Mailchimp"]
  },
  {
    id: "dsci",
    code: "TSGA·DSCI",
    title: "Diploma in Data Science",
    duration: "6 Months",
    blurb: "End-to-end data engineering, statistical inference, predictive analytics, SQL databases, and interactive Tableau/PowerBI business dashboards.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in Data Science (TSGA·DSCI).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "Graduates or professionals with an analytical mindset, basic math skills, or interest in working with business data.",
    levels: [
      {
        level: "Level 1: SQL Databases & Python Analytics",
        topics: ["Relational Database Queries & Complex SQL Joins", "Python Data Manipulation with Pandas & NumPy", "Data Cleaning & Imputation Techniques"]
      },
      {
        level: "Level 2: Applied Statistics & Machine Learning",
        topics: ["Hypothesis Testing & Statistical Inference", "Predictive Modeling & Time Series Forecasting", "Feature Engineering & Dimensionality Reduction"]
      },
      {
        level: "Level 3: Data Visualization & Business BI",
        topics: ["Interactive Dashboard Creation in Power BI", "Storytelling with Data & Executive Dashboards", "Big Data Basics & Cloud Warehouse Integration"]
      }
    ],
    topicsCovered: ["SQL Data Wrangling", "Statistical Testing", "Predictive Analytics", "Business Intelligence", "Time-Series Forecasting"],
    toolsCovered: ["Python", "PostgreSQL", "Pandas", "Power BI", "Tableau", "Jupyter", "Git"]
  },
  {
    id: "csec",
    code: "TSGA·CSEC",
    title: "Diploma in Cyber Security Architecture",
    duration: "6 Months",
    blurb: "Advanced enterprise defensive architecture, zero-trust network security, ethical penetration testing, cryptography, and ISO 27001/NIST security compliance.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in Cyber Security Architecture (TSGA·CSEC).",
    fee: "To be confirmed",
    eligibility: "Engineering or IT students, network administrators, or technical professionals aiming to master enterprise cybersecurity and security operations.",
    levels: [
      {
        level: "Level 1: Network Defense & Applied Cryptography",
        topics: ["TCP/IP Security, Firewalls & IDS/IPS Architecture", "Symmetric & Asymmetric Cryptography (PKI/OpenSSL)", "Network Protocol Analysis with Wireshark & Nmap"]
      },
      {
        level: "Level 2: Ethical Penetration Testing & Vulnerability Assessment",
        topics: ["OWASP Top 10 Web Application Security Exploitation", "Network Penetration Testing with Kali Linux & Metasploit", "Red Team Tactics, Social Engineering & Exploit Mitigation"]
      },
      {
        level: "Level 3: Zero-Trust Architecture & SOC SIEM Operations",
        topics: ["Zero-Trust Network Access (ZTNA) Enterprise Design", "SIEM Log Analysis & Threat Hunting with Splunk", "ISO 27001, NIST Compliance & Security Incident Response"]
      }
    ],
    topicsCovered: ["Zero-Trust Architecture", "Penetration Testing", "Threat Intelligence", "SIEM & SOC Operations", "NIST & ISO 27001 Compliance"],
    toolsCovered: ["Wireshark", "Burp Suite", "Kali Linux", "Metasploit", "Splunk SIEM", "Nmap", "OpenSSL"]
  },
  {
    id: "ifrs",
    code: "TSGA·IFRS",
    title: "Diploma in International Financial Reporting (IFRS)",
    duration: "12 Weeks (3 Months)",
    blurb: "Master the world’s most widely adopted financial reporting standards through practical case studies, real company financial statements, and hands-on applications. Develop the skills to prepare, analyze, and interpret IFRS-compliant financial statements for global business environments.",
    whatsappMessage: "Hello TS Global Academy, I am inquiring about the Diploma in International Financial Reporting (IFRS) (TSGA·IFRS).",
    // PLACEHOLDER: Course fee amount (currently "To be confirmed")
    fee: "To be confirmed",
    eligibility: "B.Com / BBA / M.Com Students, MBA Students, ACCA Aspirants, CA/CMA Foundation Students, Finance Professionals, Accountants & Auditors, Business Owners. No prior IFRS experience required.",
    levels: [
      {
        level: "Level 1: IFRS Foundations",
        topics: ["Introduction to Financial Reporting", "IFRS Conceptual Framework", "IAS 1 – Presentation of Financial Statements", "IAS 8 – Accounting Policies, Estimates & Errors", "IAS 10 – Events After the Reporting Period"]
      },
      {
        level: "Level 2: Recognition & Measurement",
        topics: ["IAS 2 – Inventories", "IAS 16 – Property, Plant & Equipment", "IAS 38 – Intangible Assets", "IAS 36 – Impairment of Assets", "IAS 37 – Provisions & Contingent Liabilities", "IAS 21 – Foreign Exchange", "IAS 7 – Statement of Cash Flows"]
      },
      {
        level: "Level 3: Advanced IFRS & Application",
        topics: ["IFRS 15 – Revenue Recognition", "IFRS 16 – Leases", "IFRS 9 – Financial Instruments (Fundamentals)", "Introduction to Group Accounting", "Reading Real Annual Reports", "Financial Statement Analysis", "IFRS Case Studies & Capstone Project"]
      }
    ],
    topicsCovered: ["IFRS Conceptual Framework", "IAS & IFRS Standards", "Financial Statement Preparation", "Revenue Recognition", "Lease Accounting", "Asset Accounting", "Inventory Accounting", "Cash Flow Statements", "Financial Statement Analysis", "Annual Report Interpretation", "Professional Ethics in Financial Reporting"],
    toolsCovered: ["Microsoft Excel", "Microsoft PowerPoint", "IFRS Digital Standards", "Annual Reports", "AI Research Tools (ChatGPT, Copilot)", "Financial Ratio Templates"]
  }
];

export const FLAGSHIP_CURRICULA = [
  {
    id: "genai",
    title: "Master Certification in Generative AI & Applications",
    duration: "8 Weeks",
    totalPhases: 4,
    defaultOpen: true,
    prerequisites: "No prerequisites",
    description: "An intensive 8-week program taking you from core AI foundations to building custom GenAI applications and capstone portfolio projects.",
    phases: [
      {
        phaseNumber: "01",
        title: "Phase 1 (Weeks 1-2) — Foundational AI & Prompt Engineering",
        weeks: "Weeks 1–2",
        topics: [
          "LLMs and diffusion models overview, AI ethics/limitations, dev environment setup (Colab/VS Code)",
          "System prompts, few-shot prompting, chain-of-thought, automating workplace tasks",
          "Project — AI automation persona for a business niche"
        ]
      },
      {
        phaseNumber: "02",
        title: "Phase 2 (Weeks 3-4) — Python for AI & Data Foundations",
        weeks: "Weeks 3–4",
        topics: [
          "Python variables/loops/functions/data structures, NumPy/Pandas",
          "Data cleaning, EDA with Matplotlib/Seaborn",
          "Project — Clean and analyze a corporate dataset"
        ]
      },
      {
        phaseNumber: "03",
        title: "Phase 3 (Weeks 5-6) — Building Custom AI Applications",
        weeks: "Weeks 5–6",
        topics: [
          "API integration with OpenAI/Anthropic/Gemini, Hugging Face open-source models",
          "Streamlit/Gradio interfaces, intro to vector databases and RAG",
          "Project — Chatbot answering from a company's internal PDFs"
        ]
      },
      {
        phaseNumber: "04",
        title: "Phase 4 (Weeks 7-8) — Capstone & Career Launchpad",
        weeks: "Weeks 7–8",
        topics: [
          "End-to-end capstone application",
          "Packaging projects for GitHub/LinkedIn",
          "Freelancing on Upwork/Fiverr, resume building, mock interviews"
        ]
      }
    ]
  },
  {
    id: "aiml-adv",
    title: "Advanced Certification in AI & Machine Learning",
    duration: "12 Weeks",
    totalPhases: 4,
    defaultOpen: false,
    prerequisites: "Basic maths / programming logic helpful",
    description: "A comprehensive 12-week exploration covering data foundations, classical machine learning algorithms, deep learning, and MLOps deployment.",
    phases: [
      {
        phaseNumber: "01",
        title: "Phase 1 (Weeks 1-3) — Data Foundations & Maths Essentials",
        weeks: "Weeks 1–3",
        topics: [
          "Linear algebra, calculus/optimization, probability/statistics",
          "OOP in Python, EDA and feature engineering",
          "Project — Data audit & preprocessing pipeline on a housing dataset"
        ]
      },
      {
        phaseNumber: "02",
        title: "Phase 2 (Weeks 4-7) — Classical Machine Learning",
        weeks: "Weeks 4–7",
        topics: [
          "Regression/classification/SVM/KNN, tree-based models & ensembles, K-Means/hierarchical clustering, PCA",
          "Project — Customer segmentation & credit-risk model"
        ]
      },
      {
        phaseNumber: "03",
        title: "Phase 3 (Weeks 8-10) — Deep Learning Foundations",
        weeks: "Weeks 8–10",
        topics: [
          "Neural networks/activation functions/backprop, CNNs for computer vision, RNNs/LSTMs for NLP",
          "Project — Image or text classifier from scratch"
        ]
      },
      {
        phaseNumber: "04",
        title: "Phase 4 (Weeks 11-12) — MLOps & Capstone",
        weeks: "Weeks 11–12",
        topics: [
          "Model serialization, FastAPI/Flask APIs, Docker basics, deployment to AWS/GCP/Render",
          "Deliverable — A live working URL"
        ]
      }
    ]
  }
];

export const WHY_US_PILLARS = [
  {
    number: "01",
    title: "Live + Recorded Hybrid Delivery",
    description: "Attend interactive live weekend masterclasses with active industry practitioners and domain specialists. Access studio-grade HD recordings, lecture transcripts, and project resources 24/7 with lifetime access."
  },
  {
    number: "02",
    title: "Projects Over Slides",
    description: "We throw out passive slide presentations in favor of practical project execution. Graduate with a production-grade portfolio of real-world deliverables that demonstrate exactly what you can build."
  },
  {
    number: "03",
    title: "Private Cohort Community",
    description: "Learn alongside motivated peers in small, selective cohorts. Gain access to private Discord/Slack discussion channels, peer project collaboration, and direct 1-on-1 project reviews with expert mentors."
  }
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What is the format and weekly schedule of the diploma classes?",
    answer: "Our diploma programmes follow a flexible, hybrid delivery model designed for both full-time students and working professionals. Live interactive masterclasses take place on weekends (Saturday & Sunday), while weekday hands-on projects, assignments, and office hours are available asynchronously with 24/7 access to all recorded sessions and portfolio resources."
  },
  {
    id: "faq-2",
    question: "Are there any academic or technical prerequisites before enrolling?",
    answer: "Prerequisites depend on the specific diploma program. Introductory diplomas such as Digital Marketing, Prompt Engineering, and GST & Taxation require no prior technical experience. Advanced engineering programs (AI & Machine Learning, Data Science, Robotics) recommend basic quantitative logic or prior exposure to any programming language."
  },
  {
    id: "faq-3",
    question: "How do I enrol in a diploma programme?",
    answer: "We purposefully do not use long, impersonal application forms. Enrollment is done directly via WhatsApp or Email! Click any 'Enquire via WhatsApp' or 'Email Admissions' button on this site to connect directly with an Admissions Officer who will answer your questions, review course requirements, and guide you through registration."
  },
  {
    id: "faq-4",
    question: "Is the TS Global Academy certification industry recognized?",
    answer: "TS Global Academy diplomas are skill-based certificates of completion awarded upon rigorous evaluation of real-world capstone projects. As a newly established institute (est. 2026), our focus is on building a verified portfolio of practical work that demonstrates your capabilities to potential employers, rather than formal university or government accreditation."
  }
];
