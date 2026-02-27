'use client';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2">
      You are offline. Please check your internet connection.
    </div>
  );
}
