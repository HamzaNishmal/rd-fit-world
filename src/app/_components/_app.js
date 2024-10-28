import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className={`${theme}`}>
      <Header />
      <Component {...pageProps} toggleTheme={toggleTheme} />
      <Footer /> 
    </div>
  );
}

export default MyApp;
