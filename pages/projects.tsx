import { Card } from "../components";
import { useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import type { NextPage } from "next";
import { Section } from "../components";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Head from 'next/head'
import { Layout } from "../components/Layout";

// Add interfaces for the project types
interface Project {
  title: string;
  link: string;
  body: string[];
  technologies: string[];
}

interface TableauProject {
  title: string;
  link: string;
  img: string;
}

interface CaseStudy {
  title: string;
  link?: string;
  subtitle?: string;
  scenario?: string;
  objectives?: string[];
  productStudied?: string;
  steps?: string[];
  body?: string[];
  analysis?: string[];
  businessGoals?: string[];
}

const PROJECTS: Project[] = [
  {
    title: "E-Commerce Customer Segmentation & Behavior Analysis",
    link: "https://github.com/LISAPATEL98/EcommerceCustomers",
    body: [
      "Predicted product recommendations depending on past 259k customer transactions; used K-means Clustering to aggregate frequently bought items together, which lead to a strategy for promoting market basket sales improving revenue on retail",
      "Performed RFM Analysis, to segment customers based on value from past transactions and Trend analysis to find purchase patterns over time",
    ],
    technologies: ["Python", "Machine Learning", "K-means", "RFM Analysis"]
  },

  {
    title: "ARTICULATE : Article Summarizer",
    link: "https://github.com/LISAPATEL98/Articlesummarizer",
    body: [
      "Web-Scraped data using Selenium to fetch articles from NY Times, summarized article lengths using techniques like TextRank, Similarity matrix",
      "Classified the comments on articles to positive/negative and truthful/deceptive using Sentimental analysis and Text analysis",
      "Predicted NYT's best pick comment using Logistic regression with 72% ROC; built an automatic comment generator using Tensorflow and LSTM",
    ],
    technologies: ["NLP", "Machine Learning", "Python", "Tensorflow"]
  },

  {
    title: "Moderation System for Hate Speech Detection",
    link: "https://github.com/LISAPATEL98/HateSpeech-moderationSystem",
    body: [
      "Designed an interface that identifies abusive content which alerts users, and provides a timer to rethink before publishing hate content using BERT",
      "Performed data cleaning using Lemmatization, Stemming and did feature extraction with techniques like TF-IDF vectors, Lime Text Explainer",
      "Used oversampling- SMOTE and RandomOversampling on the imbalance data to achieve the accuracy of 95%",
    ],
    technologies: ["BERT", "NLP", "Python", "Machine Learning"]
  },

  {
    title: "A/B test on Mobile Game Players",
    link: "https://github.com/LISAPATEL98/AB_testing-",
    body: [
      "Conducted A/B test on mobile game data with ~90k players to determine the intensity of obstacles in-game level to increase player retention",
      "Implemented the hypothesis testing using statistical techniques like Chi-Square test, degree of freedom, p-value",
    ],
    technologies: ["Statistical Analysis", "Python", "A/B Testing", "Chi-Square"]
  },
  {
    title: "HR Employee Management",
    link: "",
    body: [
      "Applied HR Analytics using ML on IBM's dataset, created a strategic plan for employee churn model & retention rate",
      "Reduced attrition rate by determining KPI's & flagging employees at risk; Logistic regression, SVM with 82% accuracy",
    ],
    technologies: ["Machine Learning", "Python", "Logistic Regression", "SVM"]
  },

  {
    title: "LinkedIn Messages & Connection Analysis",
    link: "https://github.com/LISAPATEL98/LinkdeIn-Analysis",
    body: [
      "Performed analysis on my current LinkedIn Messages and connections for detecting language & to determine the tone of msgs I've been getting.",
    ],
    technologies: ["Data Analysis", "Python", "NLP"]
  },
];

const TABLEAU_PROJECTS: TableauProject[] = [
  {
    title: "The Earth is heating up, What are you doing for saving the Planet?",
    link: "https://public.tableau.com/views/TheEarthisheatingupWhatareyoudoingforsavingthePlanet/TheEarthisgettingwarmer?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Th/TheEarthisheatingupWhatareyoudoingforsavingthePlanet/TheEarthisgettingwarmer/4_3.png",
  },
  {
    title: "Perceived Obstacles to Gender Equality",
    link: "https://public.tableau.com/views/PerceivedObstaclestoGenderEquality_16128250632890/PerceivedObstaclestoGenderEquality?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Pe/PerceivedObstaclestoGenderEquality_16128250632890/PerceivedObstaclestoGenderEquality/4_3.png",
  },
  {
    title: "The Race Towards Sustainability",
    link: "https://public.tableau.com/views/TheRaceTowardsSustainability/RenewablesovertakeFossils?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Th/TheRaceTowardsSustainability/RenewablesovertakeFossils/4_3.png",
  },
  {
    title: "Coal Production in India",
    link: "https://public.tableau.com/views/CoalProductioninIndia_16116160336180/CoalProductioninIndia?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Co/CoalProductioninIndia_16116160336180/CoalProductioninIndia/4_3.png",
  },
  {
    title: "Gender Inequality and HIV-AIDS among Adolescents",
    link: "https://public.tableau.com/views/GenderInequalityandHIV-AIDSamongAdolescents/GenderInequalityandHIVAIDS?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Ge/GenderInequalityandHIV-AIDSamongAdolescents/GenderInequalityandHIVAIDS/4_3.png",
  },
  {
    title: "San Francisco's Airbnb Listings Analysis",
    link: "https://public.tableau.com/views/SanFranciscosAirbnbListingsAnalysis/Airbnb?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Sa/SanFranciscosAirbnbListingsAnalysis/Airbnb/4_3.png",
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "BioTech Companies Comparison | Finance Analysis",
    link: "https://github.com/LISAPATEL98/BioTechCompaniesComparision",
    subtitle: "BioGen Vs Bristol Myers Squibb",
    body: [
      "Conducted a comparative study by performing quantitative and qualitative analysis of both companies. Here, the two companies are chosen from the Pharmaceutical market segment. This analysis was conducted on the following elements:",
    ],
    analysis: [
      "Key competitors & key drivers/challenges",
      "Most recent Earnings call, latest SEC filing & executive compensation structure",
      "Horizontal & Vertical Analysis",
      "Key ratios that are formative for each company",
      "Based on the analysis, each company was valued for investors. Used data visualization tools for in-depth analysis."
    ]
  },
  {
    title: "Virtualization adoption in Retail Sector | Digital Strategy Consulting",
    link: "https://github.com/LISAPATEL98/CaseStudies-/blob/main/Virtualization%20In%20Retail%20Compaines.pdf",
    scenario: "The CIO of Abacus(hypothetical online retail store) has decided that the company will adopt common virtualization across all of its data centers.",
    objectives: [
      "To reduce overall capital equipment and operating expenses",
      "To improve IT responsiveness to its internal customers"
    ],
    productStudied: "VMware vSphere & Microsoft Hyper-v",
    steps: [
      "Identified challenges faced in the current state of IT Infrastructure for a hypothetical retail company called Abacus Inc.",
      "Evaluated Microsoft & VMware cloud services based on their ecosystem, feature comparison, cost structure, ROI, TCO, and risk factors",
      "Delivered virtualization implementation strategy, business benefits, and future state of the company"
    ]
  },
  {
    title: "Ebay's Digital Strategy & Transformation: HelpBot | Digital Strategy Consulting",
    link: "https://github.com/LISAPATEL98/CaseStudies-/blob/main/eBay'%20digital%20transformation%20-%20Helpbot.pdf",
    body: [
      "Analyzed the current user experience of eBay for understanding user pain points. Did User Surveys, and Affinity Mapping to come up with MVP features that would keep eBay updated in terms of the offer's in comparison to e-commerce like Amazon"
    ],
    steps: [
      "Formulated digital capabilities leveraging AI and Automation that helped drive the strategy and deliver value (Improved CX, Efficiency, Retention, and Loyalty, etc.)",
      "Performed capability assessment of current State (AI & automation capabilities), GAP Analysis, SWOT Analysis",
      "Designed Future State Design – customer journey maps, process map, digital systems/architecture, roadmap",
      "Laid out risks involved in undertaking this initiative and recommended mitigation of these risk"
    ],
    businessGoals: [
      "Ease in Customer Service",
      "Customer Retention"
    ]
  },
  {
    title: "Hassle-Free Travel Planner | New Product Development",
    body: [
      "Creating scheduler syncing calendars for group travels, providing plan recommendations upon the user selections",
      "Conducting user interviews, journey mapping & affinity mapping; deducing problems from user pain points"
    ]
  }
];

type ProjectCategory = "data-science" | "tableau" | "case-studies";

const Projects: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("data-science");
  const { theme } = useTheme();
  
  // More refined typography, Notion-inspired
  const renderToggleButtons = () => (
    <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
      <button
        onClick={() => setActiveCategory("data-science")}
        className={`px-3 py-1 rounded transition-all ${
          activeCategory === "data-science"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-sm"
        }`}
      >
        Data Science
      </button>
      <button
        onClick={() => setActiveCategory("tableau")}
        className={`px-3 py-1 rounded transition-all ${
          activeCategory === "tableau"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        Visualizations
      </button>
      <button
        onClick={() => setActiveCategory("case-studies")}
        className={`px-3 py-1 rounded transition-all ${
          activeCategory === "case-studies"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        Case Studies
      </button>
    </div>
  );

  // Refined card design with more elegant typography
  const renderDataScienceProjects = () => (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
      {PROJECTS.map((p: Project) => (
        <Card 
          key={p.title} 
          className="card p-5 sm:p-7 mb-8 hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-base font-medium mb-4 leading-snug">
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover"
              >
                {p.title}
              </a>
            ) : (
              p.title
            )}
          </h3>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            {p.body.map((b, i) => (
              <li key={i} className="leading-normal">{b}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-auto">
            {p.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );

  const renderTableauProjects = () => (
    <>
      <h3 className="container text-xl text-center font-bold my-4">
        You can find all the vizzes in my{" "}
        <a
          href="https://public.tableau.com/app/profile/lisa7954#!/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-${theme === 'dark' ? 'blue-400' : 'yellow-400'}`}
        >
          Tableau Gallery.
        </a>
      </h3>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {TABLEAU_PROJECTS.map((p) => (
          <Card 
            key={p.title} 
            className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} rounded-lg shadow-lg overflow-hidden mb-8`}
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-center">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                    className={`hover:text-${theme === 'dark' ? 'blue-400' : 'blue-600'}`}
                >
                  {p.title}
                </a>
              ) : (
                <>{p.title}</>
              )}
            </h3>
            </div>
          </Card>
        ))}
      </div>
    </>
  );

  const renderCaseStudies = () => (
    <div className="grid grid-cols-1 gap-16">
      {CASE_STUDIES.map((study) => (
        <Card 
          key={study.title} 
          className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} rounded-lg shadow-lg p-8 mb-8`}
        >
          <h3 className="text-2xl font-bold mb-4">
            {study.link ? (
              <a
                href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                className={`hover:text-${theme === 'dark' ? 'blue-400' : 'blue-600'}`}
                >
                {study.title}
                </a>
              ) : (
              study.title
              )}
            </h3>

          {study.subtitle && <p className="mb-4 text-gray-600">{study.subtitle}</p>}

          {study.scenario && (
            <div className="mb-4">
              <span className="font-bold">Scenario: </span>
              <span className="text-gray-600">{study.scenario}</span>
            </div>
          )}

          {study.objectives && (
            <div className="mb-4">
              <p className="font-bold mb-2">Objectives:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
          )}

          {study.productStudied && (
            <div className="mb-4">
              <span className="font-bold">Product Studied: </span>
              <span className="text-gray-600">{study.productStudied}</span>
            </div>
          )}

          {study.body && (
            <div className="mb-4">
              {study.body.map((text, i) => (
                <p key={i} className="text-gray-600 mb-2">{text}</p>
              ))}
            </div>
          )}

          {study.steps && (
            <div className="mb-4">
              <p className="font-bold mb-2">Steps:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {study.analysis && (
            <div className="mb-4">
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.analysis.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {study.businessGoals && (
            <div className="mb-4">
              <p className="font-bold mb-2">Business Goals:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.businessGoals.map((goal, i) => (
                  <li key={i}>{goal}</li>
              ))}
            </ul>
            </div>
          )}
          </Card>
        ))}
      </div>
  );

  return (
    <Layout title="Projects - Lisa Patel">
      <main className="container-custom">
        <h1 className="text-3xl font-semibold tracking-tight mb-8 text-center">
          Projects + Explorations
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">Exploration & Creativity</h2>
          
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6 max-w-3xl">
            This is where I&apos;ll be sharing some of my latest experiments, creative projects, and cool finds!
          </p>

          <div className="mb-6">
            <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">How I Built My Resume</h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-3 max-w-3xl">
              If you&apos;ve reviewed my resume or are reviewing it now, you&apos;ll know I&apos;ve always hated fighting with templates. So I decided to build my own. In this article, I walk through how I created a clean, LaTeX-style, ATS-friendly resume using React, Cursor, and AI tools.
            </p>
            <a 
              href="https://lisaapatel.medium.com/how-i-built-my-own-resume-template-with-react-cursor-and-ai-2b8e0f464678?postPublishedType=initial" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm group font-medium hover:underline"
            >
              <span>Read: How I Built My Resume</span>
              <FiArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">How I Built a 0-to-1 Web App with Cursor</h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-3 max-w-3xl">
              I wanted to see how fast I could go from idea to working product, so I used Cursor to build a web app from scratch in just a couple of hours.
            </p>
            <a 
              href="https://lisaapatel.medium.com/building-a-0to1-web-app-with-cursor-product-spectogo-live-in-2hrs-5de4c9fc03c7" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm group font-medium hover:underline"
            >
              <span>Read: Building a 0to1 Web App with Cursor</span>
              <FiArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
            Previous Projects
          </h2>
          
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mb-6">
            Here&apos; a collection of projects I worked on during grad school, organized into three sections: Data Science, Data Visualization, and Case Studies. It's a mix of hands-on work and creative problem-solving from that time!
          </p>
          
          {renderToggleButtons()}
        
          <h3 className="text-lg font-medium mb-6 text-center text-blue-600 dark:text-blue-400">
            {activeCategory === "data-science" && "Data Science Projects"}
            {activeCategory === "tableau" && "Data Visualization Projects"}
            {activeCategory === "case-studies" && "Case Studies"}
          </h3>

          {activeCategory === "data-science" && renderDataScienceProjects()}
          {activeCategory === "tableau" && renderTableauProjects()}
          {activeCategory === "case-studies" && renderCaseStudies()}
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
