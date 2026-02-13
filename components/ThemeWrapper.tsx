import { ReactNode, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply theme class to document for consistent application
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <>{children}</>;
}; 