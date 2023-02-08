import { useEffect, useState, useCallback } from 'react';

export const useMediaQuery = (breakpoint) => {
  const [breakpointReached, setBreakpointReached] = useState(false);

  const updateWidth = useCallback((e) => {
    if (e.matches) {
      setBreakpointReached(true);
    } else {
      setBreakpointReached(false);
    }
  }, []);

  useEffect(() => {
    const width = window.matchMedia(`(max-width: ${breakpoint}px)`);
    width.addEventListener('change', updateWidth);

    // Check on mount (callback is not called until a change occurs)
    if (width.matches) {
      setBreakpointReached(true);
    }

    return () => width.removeEventListener('change', updateWidth);
  }, []);

  return { isBreakpoint: breakpointReached };
};
