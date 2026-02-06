import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-BKK6VW65MG';

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

    const page_path = `${location.pathname}${location.search}${location.hash}`;
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path,
      page_title: document.title,
      page_location: window.location.href
    });
  }, [location.hash, location.pathname, location.search]);

  return null;
}
