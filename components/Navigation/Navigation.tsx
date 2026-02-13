/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import { useState, useEffect, useRef } from "react";

export interface NavLinks {
  text: string;
  link: string;
}

export interface UiProps {
  links: NavLinks[];
  title?: string;
}

export function Navigation({ links, title }: UiProps) {
  const { asPath } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return asPath === `/${path}` 
      ? "font-medium text-blue-600 dark:text-blue-400" 
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [asPath]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    console.log('Navigation component mounted');
    return () => {
      console.log('Navigation component unmounted');
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            {title || "Lisa Patel"}
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {links?.map((navLink) => {
              const { text, link } = navLink;
              const href = `/${link}`;
              
              return (
                <Link key={text} href={href} className={`text-sm transition-colors duration-200 ${isActive(link)}`}>
                  {text}
                </Link>
              );
            })}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? 
                <FiSun size={20} className="text-gray-300" /> : 
                <FiMoon size={20} className="text-gray-700" />
              }
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? 
                <FiSun size={20} className="text-gray-300" /> : 
                <FiMoon size={20} className="text-gray-700" />
              }
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FiX size={24} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu size={24} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
      
      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-dark-bg z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
          <ul className="space-y-6">
            {links?.map((navLink) => {
              const { text, link } = navLink;
              const href = `/${link}`;
              
              return (
                <li key={text}>
                  <Link href={href} className={`block text-lg py-2 ${isActive(link)}`}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="mt-auto pt-8">
            <div className="pb-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                © {new Date().getFullYear()} Lisa Patel
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
