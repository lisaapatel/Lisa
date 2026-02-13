import React, { useEffect, useState } from 'react';
import { Navigation } from './Navigation/Navigation';
import { useTheme } from '../contexts/ThemeContext';
import Head from 'next/head';

const links = [
  {
    text: "About",
    link: "",
  },
  {
    text: "Experience",
    link: "experience",
  },

  {
    text: "Projects + Explorations",
    link: "projects",
  },
  {
    text: "Travel",
    link: "travel",
  },
  {
    text: "Contact",
    link: "contact",
  },
];

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title = 'Lisa Patel' }) => {
  const { theme } = useTheme();
  
  const bgColor = theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg';
  const textColor = theme === 'dark' ? 'text-gray-50' : 'text-gray-900';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation links={links} title="Lisa Patel" />
      
      <div className={`${textColor}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
