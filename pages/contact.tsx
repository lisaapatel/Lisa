import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head';
import { FiMail, FiLinkedin, FiGithub, FiFileText } from "react-icons/fi";
import { SiMedium } from "react-icons/si";

const Contact: NextPage = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  
  return (
    <Layout title="Contact - Lisa Patel">
      <Head>
        <title>Contact - Lisa Patel</title>
        <meta name="description" content="Get in touch with Lisa Patel" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-10">
          Contact Me
        </h1>
        
        <p className="text-base sm:text-lg mb-12 max-w-2xl">
          I enjoy meeting new people and collaborating or even just talking over some good coffee, so please feel free to reach out!
        </p>
        
        <div className="flex justify-center items-center space-x-8 mb-12">
          <a 
            href="mailto:contact@lisapatel.com" 
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-8 h-8" />
          </a>
          
          <a 
            href="https://github.com/LISAAPATEL" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-8 h-8" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/lisaapatel/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-8 h-8" />
          </a>
          
          <a 
            href="https://public.tableau.com/app/profile/lisa7954#!/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Tableau"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.2399 7.76001L14.1199 14.12L7.75994 16.24L9.87994 9.88001L16.2399 7.76001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <a 
            href="https://lisaapatel.medium.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Medium"
          >
            <SiMedium className="w-8 h-8" />
          </a>
          
          <a 
            href="https://drive.google.com/file/d/1DgNjCX2A4Rf0XWq68-352GqQ8sIYrefD/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Resume"
          >
            <FiFileText className="w-8 h-8" />
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
