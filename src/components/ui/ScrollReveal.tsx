"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

const delayMap = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
  4: "reveal-delay-4",
};

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${delayMap[delay]} ${className}`}>
      {children}
    </div>
  );
}
