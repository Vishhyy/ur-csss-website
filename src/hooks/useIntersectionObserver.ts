import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.current?.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (element) {
      observer.current.observe(element);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [element, options]);

  return [setElement, isVisible];
};