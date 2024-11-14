// src/hooks/useWindowSize.ts
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  });

  // Define the handleResize function outside of the useEffect
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    // Only add the event listener if window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Call handler right away to set initial size
      handleResize();

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}
