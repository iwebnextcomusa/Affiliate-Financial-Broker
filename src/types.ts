export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  eligibility: string[];
  iconName: string;
  slug: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  description: string;
  matchScore: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string[];
  category: string;
  readTime: string;
  date: string;
  author: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
}

export interface LeadInquiry {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Prepopulated static datasets for high fidelity and realistic content
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "personal-loans",
    title: "Personal Loans",
    slug: "personal-loans",
    description: "Compare tailored loan offers for debt consolidation, emergency medical costs, or large personal expenses with simple repayment structures.",
    longDescription: "Our personal loan affiliate network allows you to compare competitive unsecured borrowing solutions from over 15 vetted partner lenders. Whether you are looking to simplify your life by consolidating high-interest credit card debt into a single, low monthly payment, funding a necessary home improvement project, or covering unexpected medical expenses, we help find a structure suited to your income.",
    benefits: [
      "Competitive fixed interest rates starting from 5.99% APR (OAC)",
      "Flexible borrowing limits ranging from $2,000 to $100,000",
      "No prepay penalties—repay early to save on interest costs",
      "Multiple term durations from 24 to 84 months"
    ],
    eligibility: [
      "Minimum 18 years of age and a valid US Resident",
      "Proof of steady monthly income (W2, Paystubs, or Bank statements)",
      "Verifiable bank checking account for fast direct deposit",
      "Credit scores from 580+ (options exist for building credit)"
    ],
    iconName: "Coins"
  },
  {
    id: "business-financing",
    title: "Business Financing",
    slug: "business-financing",
    description: "Unlock business growth with fast, flexible working capital, merchant cash advances, equipment financing, and SBA referrals.",
    longDescription: "Get the capital required to expand your commercial footprint. We bridge the gap between small-to-medium business owners and non-bank institutional lenders. Avoid the red tape of traditional banks and secure working capital, line of credit products, invoice factoring, or equipment financing within 24 to 48 hours to capitalize on immediate inventory or expansion opportunities.",
    benefits: [
      "Funding amounts from $10,000 up to $2,000,000",
      "Minimal documentation requirements with soft credit pulls",
      "Flexible repayment options tied directly to sales volumes",
      "Acquire or lease essential equipment with customized terms"
    ],
    eligibility: [
      "At least 6 months of active business operations",
      "Minimum monthly business revenue of $15,000+",
      "Business bank account with active monthly transaction history",
      "No active bankruptcies within the past 2 years"
    ],
    iconName: "Briefcase"
  },
  {
    id: "credit-solutions",
    title: "Credit Solutions",
    slug: "credit-solutions",
    description: "Connect with certified credit repair counselors and credit building products to restore credit scores and reduce loan interest rates.",
    longDescription: "A higher credit score represents thousands of dollars saved in interest. We affiliate with highly rated, federally compliant credit repair organizations, debt settlement firms, and secured credit builders. If errors on your report or historical setbacks are preventing you from securing optimal mortgage or personal loan terms, our partners analyze, dispute, and restructure reporting errors.",
    benefits: [
      "Direct disputes of inaccurate collections, late payments, and public records",
      "Comprehensive credit health analysis and ongoing score tracking",
      "Strategies to optimize credit utilization ratios",
      "Educational modules on long-term credit maintenance"
    ],
    eligibility: [
      "Applicable to individuals wanting to repair or build credit",
      "Have a copy of a credit report (partners can help retrieve this)",
      "Active commitment to paying current obligations on time",
      "Willingness to review credit file details with a specialist"
    ],
    iconName: "TrendingUp"
  },
  {
    id: "investment-opportunities",
    title: "Investment Opportunities",
    slug: "investment-opportunities",
    description: "Referrals to trusted wealth managers, automated robo-advisors, alternative assets, and customized portfolios.",
    longDescription: "Grow your wealth with precision. Through our curated network of registered investment advisors, multi-asset brokerage options, and top-tier automated advisory platforms, we connect you with tools that align with your risk tolerances. Compare passive index models, retirement planning wrappers (IRAs), and active wealth-building services designed to combat inflation.",
    benefits: [
      "Custom portfolios matched to your exact age, income, and risk tolerance",
      "Referrals to low-fee automated robo-advisory accounts",
      "Vetted alternatives including real estate syndicates and private markets",
      "Dedicated tax-loss harvesting features on partner platforms"
    ],
    eligibility: [
      "Available for both beginner savers and high-net-worth investors",
      "Minimum initial deposit varying from $0 to $10,000 based on partner selected",
      "US citizenship or authorized permanent residency",
      "Commitment to standard long-term financial planning horizons"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "insurance-referrals",
    title: "Insurance Referrals",
    slug: "insurance-referrals",
    description: "Compare multiple quotes for term life, whole life, health, auto, and professional business general liability policies.",
    longDescription: "Protect what matters most. Our insurance referral portal streamlines finding suitable risk-mitigation coverage. We partner with top-tier insurance brokerages and direct carriers to provide immediate comparative quote engines for whole and term life insurance, personal health, disability income protection, commercial liability, and comprehensive auto/home bundles.",
    benefits: [
      "Instant premium quotes comparing multiple competitive national carriers",
      "Personalized policy structures tailored to match family and asset sizes",
      "Referrals to fast-approval policies requiring no medical exams",
      "Special corporate rates for general liability and commercial auto"
    ],
    eligibility: [
      "Valid US identification and current residential address",
      "Basic health profile questionnaires for underwriting comparison",
      "Details on current vehicles, properties, or business structure",
      "No active fraudulent claims history"
    ],
    iconName: "Heart"
  },
  {
    id: "mortgage-referrals",
    title: "Mortgage and Lending Referrals",
    slug: "mortgage-referrals",
    description: "Purchase loans, FHA/VA options, and cash-out refinancing referrals. Secure optimal property purchasing rates.",
    longDescription: "Buying a home is the most significant investment most families make. Our mortgage broker affiliate network links you to competitive wholesale lenders, conforming home purchase brokers, and refinancing specialists. Compare fixed-rate loans, adjustable-rate mortgages (ARMs), FHA programs, VA loans for military members, and Cash-Out Refinancing plans to access home equity.",
    benefits: [
      "Access competitive wholesale lender rates that bypass typical bank markups",
      "Referrals to low down payment options starting from just 3% down",
      "Compare cash-out refinancing options to consolidate high-interest debt",
      "Dedicated help desk for first-time homebuyers navigating escrow"
    ],
    eligibility: [
      "2 years of documented employment history (W2, 1099, or corporate taxes)",
      "Minimum FICO score of 620 for standard FHA lending, 580 for VA",
      "Debt-to-Income (DTI) ratio generally below 43-50%",
      "Available down payment fund proof (can include gift funds)"
    ],
    iconName: "Home"
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  {
    id: "p1",
    name: "Summit Capital Group",
    category: "Personal & Business Lending",
    description: "A leading direct online lending partner specializing in rapid unsecured credit options and flexible consolidation packages.",
    matchScore: "98% Match Rate",
    features: ["Fast same-day ACH deposits", "Soft credit check to view pre-approvals", "APRs from 6.49% to 24.99%"]
  },
  {
    id: "p2",
    name: "Apex Credit Builders",
    category: "Credit Solutions",
    description: "A fully bonded credit restructuring agency that works directly with major credit bureaus to challenge inaccurate negative items.",
    matchScore: "95% Success Rate",
    features: ["No upfront consultation fees", "Monthly progress dashboard", "Average score improvement of 68 points"]
  },
  {
    id: "p3",
    name: "Vanguard Partners Inc",
    category: "Commercial Financing",
    description: "Premier merchant cash advance and equipment financing firm supporting mid-market expansion and commercial acquisitions.",
    matchScore: "92% Approval",
    features: ["Underwriting within 4 hours", "Funds up to $2.5 Million", "Repayments linked to merchant card receipts"]
  },
  {
    id: "p4",
    name: "Horizon Wealth & Advisory",
    category: "Investments & Retirement",
    description: "SEC-registered digital financial manager offering automatic portfolio rebalancing and index fund wealth building.",
    matchScore: "96% Satisfaction",
    features: ["Zero advisory fees under $15,000", "Custom target-date retirement models", "Active tax loss harvesting"]
  },
  {
    id: "p5",
    name: "Veridian Mutual Insurance",
    category: "Insurance & Asset Protection",
    description: "Multi-carrier insurance quote engine supplying direct coverage comparison for life, disability, auto, and general liability.",
    matchScore: "99% Quote Accuracy",
    features: ["Term lengths up to 35 years", "Instant comparative policy reports", "No-exam policies for healthy applicants"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Reynolds",
    role: "CEO, Reynolds Logistics",
    location: "Detroit, MI",
    text: "Working with this affiliate broker was a game-changer. They compared four business financing offers and got us $150,000 in working capital within 36 hours. The personalized gold-standard brokerage saved us hours of bank red tape.",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah Chen",
    role: "First-time Homebuyer",
    location: "Troy, MI",
    text: "I was overwhelmed looking at mortgage options, but their platform matched me with a wholesale mortgage specialist who walked me through the entire FHA process. Highly professional and deeply trustworthy team!",
    rating: 5
  },
  {
    id: "t3",
    name: "David Vance",
    role: "Retired Educator",
    location: "Farmington Hills, MI",
    text: "They referred me to a highly-rated automated robo-advisor that fits my conservative growth requirements perfectly. Their affiliate disclosures are clear, their support is impeccable, and their AI assistant answered all initial questions instantly.",
    rating: 5
  },
  {
    id: "t4",
    name: "Amanda Bradley",
    role: "Small Business Owner",
    location: "Ann Arbor, MI",
    text: "I had some bad credit remarks holding back my loan approvals. They referred me to Apex Credit Builders, and within 4 months, my score climbed by 85 points. I was able to secure a low-interest personal loan right after!",
    rating: 5
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: "b1",
    title: "5 Strategies to Safely Consolidate High-Interest Debt",
    slug: "debt-consolidation-strategies",
    summary: "Discover how consolidating multiple credit card balances into a single, low-interest personal loan can boost your credit and save thousands.",
    content: [
      "High-interest debt is one of the most significant barriers to personal wealth generation. If you find yourself juggling multiple credit card monthly payments with APRs exceeding 20%, you are primarily paying off interest rather than reducing your principal balance.",
      "Debt consolidation involves taking out a single unsecured personal loan at a lower fixed interest rate, using the loan funds to pay off your credit card balances immediately, and then repaying the new loan in predictable monthly installments.",
      "Benefits include a simplified monthly payment schedule, a defined debt payoff date, and a lower overall interest cost. Additionally, lowering your credit utilization ratio on your cards can give your credit score a rapid and noticeable boost.",
      "To qualify for the best personal loan rates, brokers suggest reviewing your credit report for errors, proving steady employment, and maintaining a debt-to-income (DTI) ratio under 40%. Comparing multiple lenders is essential to secure the absolute lowest interest rate."
    ],
    category: "Personal Finance",
    readTime: "4 min read",
    date: "June 12, 2026",
    author: "Financial Editorial Team"
  },
  {
    id: "b2",
    title: "Understanding Business Working Capital Financing",
    slug: "understanding-business-financing",
    summary: "A comprehensive guide on when to use merchant cash advances, lines of credit, and equipment loans to scale your business operations.",
    content: [
      "Operating a growing business requires constant cash flow. Whether you need to order seasonal inventory, cover payroll during slow invoice cycles, or acquire heavy machinery, traditional bank lending might take months—a timeline that can choke expansion.",
      "Alternative business financing partners offer specialized products: working capital loans, revolving lines of credit, and merchant cash advances (MCAs). Unlike traditional loans, MCAs are repaid as a percentage of your daily credit card sales, offering flexibility during slow sales months.",
      "Before applying, gather your last 3 to 6 months of corporate bank statements, ensure your annual revenue is clearly verifiable, and prepare a short summary of how the capital will grow your earnings.",
      "By utilizing an affiliate financial broker, you can submit your details once and have multiple non-bank institutional lenders bid on your application, resulting in better terms and higher approval probabilities."
    ],
    category: "Business Finance",
    readTime: "5 min read",
    date: "May 28, 2026",
    author: "Commercial Advisory Desk"
  },
  {
    id: "b3",
    title: "The First-Time Homebuyer's Credit Score Checklist",
    slug: "homebuyer-credit-score-checklist",
    summary: "Planning to buy a home? Learn which credit actions to take—and which critical mistakes to avoid—in the 12 months leading to a mortgage application.",
    content: [
      "Before you begin attending open houses or speaking with real estate agents, you must inspect your credit report. Lenders use your credit score to determine your mortgage eligibility and calculate your monthly interest rate.",
      "In the 12 months leading up to a home loan application: First, pay every single bill on time without fail. Second, do not open new credit card lines or finance a new vehicle, as hard credit inquiries can depress your score. Third, pay down credit balances to keep utilization under 10%.",
      "Additionally, review your reports from Equifax, Experian, and TransUnion. Credit report inaccuracies represent a common reason home buyers receive unfavorable interest rates or get denied outright.",
      "If you identify errors or historical negative marks, contacting a credit repair partner through a broker network can help expedite disputes and ensure your credit health is optimized before underwriting begins."
    ],
    category: "Mortgages",
    readTime: "6 min read",
    date: "April 15, 2026",
    author: "Mortgage Referral Specialist"
  }
];
