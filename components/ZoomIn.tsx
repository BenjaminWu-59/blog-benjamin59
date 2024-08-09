import { useState, useEffect, useRef } from 'react';

const ZoomIn = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold });

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  return [isVisible, elementRef] as const;
};

export default ZoomIn;