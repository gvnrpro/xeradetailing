
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Droplet {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

interface WaterDropEffectProps {
  count?: number;
  containerClassName?: string;
}

const WaterDropEffect = ({ count = 15, containerClassName = "" }: WaterDropEffectProps) => {
  const [droplets, setDroplets] = useState<Droplet[]>([]);
  
  useEffect(() => {
    // Generate random droplets
    const newDroplets = Array.from({ length: count }).map((_, index) => ({
      id: index,
      size: Math.random() * 20 + 5, // 5-25px
      top: Math.random() * 100, // 0-100%
      left: Math.random() * 100, // 0-100%
      delay: Math.random() * 2, // 0-2s delay
      duration: Math.random() * 3 + 2 // 2-5s duration
    }));
    
    setDroplets(newDroplets);
  }, [count]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${containerClassName}`}>
      {droplets.map((droplet) => (
        <motion.div
          key={droplet.id}
          className="water-droplet"
          style={{
            width: `${droplet.size}px`,
            height: `${droplet.size}px`,
            top: `${droplet.top}%`,
            left: `${droplet.left}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.1, 1],
            opacity: [0, 0.7, 0.5, 0],
            y: [0, droplet.size * 2]
          }}
          transition={{
            duration: droplet.duration,
            delay: droplet.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 2
          }}
        />
      ))}
    </div>
  );
};

export default WaterDropEffect;
