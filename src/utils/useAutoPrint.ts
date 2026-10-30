import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Hook to automatically trigger window.print() after a slight delay
 * and handle navigation on the `afterprint` event:
 * - If running in standalone mode (PWA) or opened in a new window (window.opener), window.close()
 * - Otherwise navigate(-1) back using the router
 */
export function useAutoPrint(delay = 500) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAfterPrint = () => {
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true;

      if (isStandalone || window.opener) {
        window.close();
      } else {
        navigate(-1);
      }
    };

    window.addEventListener('afterprint', handleAfterPrint);

    const timer = setTimeout(() => {
      window.print();
    }, delay);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [navigate, delay]);
}

