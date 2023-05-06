import { LegacyRef, useEffect, useRef } from 'react';

const useOutsideAlerter = (callback: () => void): LegacyRef<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideAlerter;
