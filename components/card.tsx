import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;  // Make className optional
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}