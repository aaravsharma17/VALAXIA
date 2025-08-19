import React, { ReactNode, useState } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const GlassmorphicCard = ({ children, className = '', delay = 0, hover = true }: GlassmorphicCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent
        border border-white/20 rounded-2xl shadow-2xl
        transition-all duration-500 ease-out
        ${hover ? 'hover:scale-105 hover:shadow-gray-500/20' : ''}
        ${isHovered ? 'shadow-gray-500/30' : ''}
        ${className}
      `}
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(255, 255, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `,
        transform: isHovered && hover ? 'translateY(-10px) rotateX(5deg) rotateY(5deg)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <div 
        className={`
          absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-500/20 via-transparent to-white/20 
          transition-opacity duration-500 blur-xl -z-10
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} 
      />
      
      {/* Inner glow */}
      <div 
        className={`
          absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-500/10 via-transparent to-white/5
          transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
};

export default GlassmorphicCard;