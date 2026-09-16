'use client';

import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6 md:p-8',
        hover && 'hover:transform hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
