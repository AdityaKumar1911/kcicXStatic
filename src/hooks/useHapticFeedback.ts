import { useCallback } from 'react';

type HapticIntensity = 'light' | 'medium' | 'heavy';

export const useHapticFeedback = () => {
  const triggerHaptic = useCallback((intensity: HapticIntensity = 'light') => {
    // Check if vibration API is supported
    if (!navigator.vibrate) return;

    const patterns = {
      light: 10,
      medium: 20,
      heavy: 30,
    };

    navigator.vibrate(patterns[intensity]);
  }, []);

  return { triggerHaptic };
};
