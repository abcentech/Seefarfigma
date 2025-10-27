import { WifiOff, Wifi } from 'lucide-react';
import { useOffline } from '../../hooks/useOffline';
import { Alert, AlertDescription } from '../ui/alert';

export function OfflineIndicator() {
  const { isOffline, isSlowConnection } = useOffline();

  if (!isOffline && !isSlowConnection) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <Alert className={isOffline ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}>
        <div className="flex items-center gap-3">
          {isOffline ? (
            <WifiOff className="h-5 w-5 text-red-600" />
          ) : (
            <Wifi className="h-5 w-5 text-yellow-600" />
          )}
          <AlertDescription className="text-sm">
            {isOffline ? (
              <>
                <strong className="block">You are offline</strong>
                <span className="text-xs">Viewing cached content. Some features may be limited.</span>
              </>
            ) : (
              <>
                <strong className="block">Slow connection detected</strong>
                <span className="text-xs">Content may load slowly. Consider enabling offline mode.</span>
              </>
            )}
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
}
