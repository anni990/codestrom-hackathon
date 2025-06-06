
import React from 'react';

interface CodingLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CodingLoader: React.FC<CodingLoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 border-2 border-vibe-green rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-1 border border-vibe-green rounded-full border-b-transparent animate-spin animate-reverse"></div>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-vibe-green rounded-full animate-bounce"></div>
        <div className="w-1 h-1 bg-vibe-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-1 h-1 bg-vibe-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default CodingLoader;
