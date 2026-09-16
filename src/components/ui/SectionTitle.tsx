'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ subtitle, title, description, align = 'center' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      {subtitle && (
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary-light mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-muted-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
