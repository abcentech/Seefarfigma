import { useState, useEffect } from 'react';

interface OfflineState {
  isOffline: boolean;
  isSlowConnection: boolean;
  effectiveType: string;
}

export function useOffline(): OfflineState {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [effectiveType, setEffectiveType] = useState('4g');

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check connection quality if available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const updateConnectionInfo = () => {
        const effectiveType = connection.effectiveType || '4g';
        setEffectiveType(effectiveType);
        setIsSlowConnection(['slow-2g', '2g', '3g'].includes(effectiveType));
      };

      updateConnectionInfo();
      connection.addEventListener('change', updateConnectionInfo);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        connection.removeEventListener('change', updateConnectionInfo);
      };
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOffline, isSlowConnection, effectiveType };
}
