import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface EnhancedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatio?: number | string;
  onLoadingComplete?: () => void;
  priority?: boolean;
  useWebp?: boolean;
  optimized?: boolean;
}

export const EnhancedImage = ({ 
  src, 
  alt = '', 
  className, 
  fallbackSrc = '/placeholder.svg',
  aspectRatio,
  onLoadingComplete,
  priority = false,
  useWebp = true,
  optimized = true,
  ...props 
}: EnhancedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const handleLoad = () => {
    setIsLoading(false);
    if (onLoadingComplete) {
      onLoadingComplete();
    }
  };
  
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    console.warn(`Image failed to load: ${src}, using fallback: ${fallbackSrc}`);
  };
  
  const aspectRatioStyle = aspectRatio 
    ? { aspectRatio: typeof aspectRatio === 'number' ? aspectRatio : aspectRatio } 
    : {};

  // Determine which source to use
  const imageSource = hasError ? fallbackSrc : src;

  // Get webp version if enabled and available
  const getWebpUrl = (url: string | undefined) => {
    if (!url || !useWebp) return url;
    // Only try to convert if it's a jpg/png
    if (url.match(/\.(jpg|jpeg|png)($|\?)/i)) {
      // Check if it's already a webp
      if (!url.match(/\.webp($|\?)/i)) {
        // If URL contains a query parameter, add webp format
        if (url.includes('?')) {
          return `${url}&format=webp`;
        }
        // Otherwise replace the extension
        return url.replace(/\.(jpg|jpeg|png)($|\?)/i, '.webp$2');
      }
    }
    return url;
  };

  const webpSource = getWebpUrl(imageSource);

  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        isLoading && "bg-xera-darkgray animate-pulse",
        className
      )}
      style={aspectRatioStyle}
    >
      {priority && (
        <link
          rel="preload"
          as="image"
          href={imageSource || ''}
          imageSrcSet={webpSource}
        />
      )}
      
      {useWebp && webpSource !== imageSource ? (
        <picture>
          <source srcSet={webpSource} type="image/webp" />
          <img
            src={imageSource}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            loading={priority ? "eager" : "lazy"}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </picture>
      ) : (
        <img
          src={imageSource}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default EnhancedImage;
