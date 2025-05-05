
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getImageAlt } from '@/utils/imageOptimization';

interface ImageItem {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  category?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  title: string;
  description?: string;
  columns?: 2 | 3 | 4;
  masonry?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  title, 
  description, 
  columns = 3,
  masonry = false
}) => {
  // Preprocess images to ensure they all have sizes if masonry is true
  const processedImages = masonry ? 
    images.map((img, i) => ({
      ...img,
      size: img.size || (['small', 'medium', 'large'][i % 3] as 'small' | 'medium' | 'large')
    })) : 
    images;
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {title && (
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{title}</h2>
            {description && (
              <p className="text-white/70 max-w-2xl mx-auto">{description}</p>
            )}
          </motion.div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
          {processedImages.map((image, index) => {
            // For masonry layout, determine the grid span
            const spanClass = masonry ? 
              image.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
              image.size === 'medium' ? 'md:col-span-1 md:row-span-2' : '' 
              : '';
            
            return (
              <motion.div
                key={index}
                className={spanClass}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-lg shadow-md bg-xera-darkgray/80 h-full">
                  <AspectRatio ratio={masonry ? (image.size === 'large' ? 16/9 : image.size === 'medium' ? 2/3 : 1/1) : 3/2}>
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AspectRatio>
                  
                  {image.category && (
                    <motion.div 
                      className="p-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-sm font-medium text-xera-red">{image.category}</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
