
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const SectionContainer = ({ 
  children, 
  className, 
  id,
  fullWidth = false
}: SectionContainerProps) => {
  return (
    <section id={id} className={cn('w-full py-16', className)}>
      <div className={cn(
        'mx-auto px-4 sm:px-6 md:px-8', 
        fullWidth ? 'w-full' : 'max-w-7xl'
      )}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
