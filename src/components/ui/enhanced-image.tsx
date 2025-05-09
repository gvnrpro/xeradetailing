
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface EnhancedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatio?: number | string;
}

export const EnhancedImage = ({ 
  src, 
  alt = '', 
  className, 
  fallbackSrc = '/placeholder.svg',
  aspectRatio,
  ...props 
}: EnhancedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  
  const aspectRatioStyle = aspectRatio 
    ? { aspectRatio: typeof aspectRatio === 'number' ? aspectRatio : aspectRatio } 
    : {};

  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        isLoading && "bg-xera-darkgray animate-pulse",
        className
      )}
      style={aspectRatioStyle}
    >
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default EnhancedImage;
