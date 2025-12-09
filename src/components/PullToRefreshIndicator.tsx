import { RefreshCw } from 'lucide-react';

interface PullToRefreshIndicatorProps {
  pullDistance: number;
  isRefreshing: boolean;
}

export default function PullToRefreshIndicator({ pullDistance, isRefreshing }: PullToRefreshIndicatorProps) {
  const opacity = Math.min(pullDistance / 60, 1);
  const rotation = (pullDistance / 60) * 360;

  if (pullDistance === 0 && !isRefreshing) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none"
      style={{ opacity }}
    >
      <div className="bg-white rounded-full p-3 shadow-lg">
        <RefreshCw 
          className={`w-6 h-6 text-[#B99750] ${isRefreshing ? 'animate-spin' : ''}`}
          style={{ transform: isRefreshing ? undefined : `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
}

