'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix, label, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = value * eased;

      // Handle decimal values
      if (value % 1 !== 0) {
        setDisplayValue(Math.round(current * 10) / 10);
      } else {
        setDisplayValue(Math.round(current));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-2">
        {displayValue}
        <span className="text-3xl md:text-4xl">{suffix}</span>
      </div>
      <div className="text-muted-light text-sm md:text-base tracking-wide">{label}</div>
    </motion.div>
  );
}
