import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head';

const EXPERIENCES = [
  // Upgrade PM2
  {
    company: "Upgrade, Inc.",
    url: "https://www.upgrade.com",
    title: "Product Manager 2",
    timePeriod: "June 2025 – Present",
    location: "San Francisco, CA",
    description: [
      "Cross-Sell Strategy & Monetization: Co-led a company-wide initiative presenting ~2M Personal Loan and BNPL customers with Home Improvement Loan offers by defining eligibility across credit and risk signals. Partnered with internal teams to deliver targeted offers and route qualified customers to partners, unlocking a potential new revenue stream",
      "OCR-Driven Application Optimization: Led OCR integration in the loan application funnel to reduce borrower friction and manual entry errors, processing ~85K applications. Reduced application completion time and downstream verification steps, while improving data accuracy",
      "Channel Expansion – Apply by Phone: Owned development of an apply-by-phone experience, expanding assisted application reach by ~5% for less tech-savvy customers",
      "Bidirectional SMS Decisioning: Delivered a secure bidirectional SMS flow enabling customers to approve or decline offers via text, reducing funnel abandonment while enforcing fraud checks and eligibility controls",
      "Loan Cancellation Flow: Built end-to-end loan cancellation workflow supporting ~200 cancellations per month, improving customer experience while maintaining operational integrity",
      "Roadmap & Executive Collaboration: Influenced shared roadmap planning by prioritizing high-impact initiatives across growth, risk, and UX. Presented progress and tradeoffs to VP-level stakeholders and drove end-to-end delivery"
    ],
    
  },
  // Upgrade PM1
  {
    company: "Upgrade, Inc.",
    url: "https://www.upgrade.com",
    title: "Product Manager 1",
    timePeriod: "Jan 2024 – June 2025",
    location: "San Francisco, CA",
    description: [
      "Internal Customer Support Tools: Delivered internal tooling for support teams to manage hardship enrollments, payment updates, autopay, and post-dispute billing, improving resolution across ~1.5K monthly inquiries and reducing operational ambiguity",
      "Disputes & Statement Management: Led 0→1 delivery of borrower-facing dispute resolution workflows, including automated emails, post-dispute statement updates, and audit logs, supporting ~500 monthly disputes while significantly reducing resolution time and operational ambiguity",
      "Streamlined Authentication Flow: For onboarding flow, eliminated redundant verification steps, resulting in 35% faster signups",
      "Risk-Based Fraud Detection: Partnered with data science to implement intelligent fraud rules, reducing fraud losses while preserving a frictionless experience for trusted customers",
      "Cross-Functional Product Execution: Drove alignment across engineering, design, legal, compliance, operations, and sales to execute product initiatives efficiently"
    ],
  },
  // Upgrade APM
  {
    company: "Upgrade, Inc.",
    url: "https://www.upgrade.com",
    title: "APM / Product Analyst",
    timePeriod: "Aug 2022 – Jan 2024",
    location: "San Francisco, CA",
    description: [
      "Pre-Launch Product: Partnered with engineering through blitz testing and iterative releases; translated user feedback into product changes. Built KPI frameworks used by executives to track product health for a B2B2C business scaling to ~$2B in revenue",
      "Merchant Servicing Platform: Developed an internal merchant servicing center supporting ~2K merchants, enabling case-by-case configuration and operational oversight",
      "Analytics & Feedback Loops: Led data collection, analysis, and reporting to inform product decisions and improve user experience"
    ],
  },
  // Blitz App
  {
    company: "Blitz App, Inc.",
    url: "#",
    title: "Product Data Analyst",
    timePeriod: "Sept 2021 – July 2022",
    location: "San Francisco, CA",
    description: [
      "Cohort Analysis & Retention: Analyzed acquisition and behavioral cohorts to identify early retention risks and churn drivers, enabling targeted interventions that improved engagement",
      "Subscription Analytics: Automated MRR, LTV, CAC, and churn reporting, empowering pricing and lifecycle optimization that increased customer lifetime value",
      "Revenue/Data Infrastructure: Built pipelines processing ~100M rows/day, partnered with product to analyze pro vs non-pro behavior, increasing pro-tier conversion",
      "Ad Revenue Optimization & Dashboards: Defined KPIs linking ad revenue to user journeys and built executive-facing dashboards for growth and revenue visibility"
    ],
  },
  // Okta
  {
    company: "Okta, Inc.",
    url: "#",
    title: "Data Science Analyst, Intern",
    timePeriod: "Mar 2021 - Sept 2021",
    location: "San Francisco, CA",
    description: [
      "Generated comprehensive reports and dashboards analyzing user search behaviors and product engagement patterns using machine learning models and product analytics tools, identifying content gaps and shaping product strategy",
      "Implemented efficient pipelines for data cleaning and manipulation using Python and SQL, enabling high-value ad-hoc analyses that uncovered actionable business insights",
      "Supported successful feature launches by developing real-time Tableau analytics dashboards that captured internal and customer interactions, providing visibility into adoption metrics and enabling rapid optimization"
    ],
  },
  // Gilead
  {
    company: "Gilead Sciences, Inc.",
    url: "#",
    title: "Data Scientist, Intern",
    timePeriod: "Apr 2020 - Dec 2020",
    location: "Foster City, CA",
    description: [
      "Collaborated with data engineers to develop ETL workflows in Azure Data Factory to analyze over 2 million patient health claims",
      "Built machine learning models to identify target patients likely to switch to a new drug and predict drug market potential",
      "Created data visualization dashboards with Tableau and Matplotlib providing business insights to the sales team for product promotion strategies"
    ],
  },
  // BioMarin
  {
    company: "BioMarin Pharmaceutical, Inc.",
    url: "#",
    title: "Data Science Analyst, Intern",
    timePeriod: "Jun 2020 - Sept 2020",
    location: "San Rafael, CA",
    description: [
      "Led cleaning and processing of data with SQL and Python from multiple sources to a data warehouse",
      "Implemented PowerBI dashboards to advise leadership on promotions, workforce diversity, employee engagement, office capacity planning, and attrition",
      "Designed KPIs on operational metrics to analyze gender and ethnicity pay gaps"
    ],
  },
];

const EDUCATION = [
  {
    institution: "Santa Clara University, Leavey School of Business",
    degree: "Master of Science in Information Systems",
    timePeriod: "2021",
    location: "Santa Clara, CA",
    description: [
      "Coursework: Data Science with Python, Machine Learning, NLP, Database Management, Cloud Computing, Info. Systems Analysis & Design, Object Oriented Analysis -Java, Database Analysis & Modeling, Data Warehousing, Digital Strategies & Policies, Software Project Management, Women in Leadership",
      "Activities: Grace Hopper Celebration, Rewriting the Code, Women In Product, Product Buds"
    ],
  },
  {
    institution: "Gujarat Technological University",
    degree: "Bachelor of Engineering in Information and Communication Technology",
    timePeriod: "2019",
    location: "Gujarat, India",
    description: [
      "Coursework: Software Engineering, Adv. Computer Networks, Data Structures, Operating Systems",
      "Activities: Lumina, LJ Prayas, LJ Tech fest"
    ],
  },
  {
    institution: "Product School",
    degree: "Product Analytics",
    timePeriod: "",
    location: "",
    description: [
      "Coursework: Web Analytics, Intro to SQL, Advance SQL, Data Visualization, Understanding Data & Statistics, Intro to Machine Learning, Data Visualization & Big Data, Capstone"
    ],
  }
];

const Experience: NextPage = () => {
  const { theme } = useTheme();
  const textColorSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <Layout title="Experience - Lisa Patel">
      <Head>
        <title>Experience - Lisa Patel</title>
        <meta name="description" content="Lisa Patel's professional experience" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight mb-10">
          Experience
        </h1>

        <h2 className="text-xl font-medium text-center mb-12">
          Work Experience
        </h2>

        {/* Upgrade Summary */}
        <div className="mb-12 bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
          <p className={`text-sm leading-relaxed mb-3 ${textColorSecondary}`}>
            I have spent the last four years at Upgrade, growing from Product Analyst to Product Manager 2,
            driving initiatives across onboarding, cross-sell, fraud, and customer experience in lending products.
          </p>
          <p className={`text-sm leading-relaxed ${textColorSecondary}`}>
            Key highlights include leading a company-wide CrossSell initiative, implementing OCR and SMS flows to reduce friction, 
            and scaling customer servicing, disputes, and fraud workflows.
          </p>
        </div>

        {/* Full Experiences */}
        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">{experience.title}</h3>
                  <a 
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium"
                  >
                    {experience.company}
                  </a>
                </div>
                <p className="text-sm mt-2 md:mt-0 md:text-right">
                  {experience.timePeriod} • {experience.location}
                </p>
              </div>

              <ul className="space-y-4 text-sm leading-relaxed ml-5 list-disc">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-medium text-center my-12">
          Education
        </h2>

        <div className="space-y-12">
          {EDUCATION.map((education, index) => (
            <div key={index} className="bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">{education.degree}</h3>
                  <p className="font-medium">{education.institution}</p>
                </div>
                <p className="text-sm mt-2 md:mt-0 md:text-right">
                  {education.timePeriod} • {education.location}
                </p>
              </div>

              <ul className="space-y-4 text-sm leading-relaxed ml-5 list-disc">
                {education.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Experience;

