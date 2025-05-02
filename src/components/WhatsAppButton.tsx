
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const WhatsAppButton = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay to show the button for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isVisible) return null;
  
  const whatsappUrl = "https://wa.me/919605858483?text=Hi%20XERA%2C%20I%E2%80%99d%20like%20to%20book%20a%20car%20wash%20or%20detailing%20appointment.";
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with XERA on WhatsApp"
      className={`
        fixed z-50 flex items-center justify-center
        rounded-full shadow-lg transition-all duration-300
        ${isMobile ? 'bottom-4 right-4 h-14 w-14' : 'bottom-6 right-6 h-16 w-16'}
        bg-gradient-to-r from-gray-200 to-white
        hover:scale-110 hover:shadow-xl
        animate-pulse hover:animate-none
      `}
      style={{
        animationDuration: '10s',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
      }}
    >
      <svg width="60%" height="60%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M34.101 13.855C31.4784 11.227 27.9641 9.77803 24.2815 9.77803C16.6089 9.77803 10.3685 16.0184 10.3685 23.6911C10.3685 26.0977 10.9932 28.4352 12.18 30.5039L10.25 37.7781L17.6907 35.8924C19.6881 36.9685 21.9601 37.5358 24.2751 37.5358H24.2815C31.9477 37.5358 38.25 31.2954 38.25 23.6226C38.25 19.9464 36.7216 16.4834 34.101 13.855ZM24.2815 35.1285C22.1999 35.1285 20.1645 34.5866 18.4063 33.5612L17.9977 33.321L13.6451 34.4738L14.8106 30.2442L14.5386 29.8164C13.4066 27.9889 12.8072 25.8691 12.8072 23.6911C12.8072 17.3671 17.9529 12.2214 24.2878 12.2214C27.335 12.2214 30.1994 13.4183 32.3064 15.5317C34.4134 17.645 35.8177 20.5093 35.8113 23.6226C35.8113 29.953 30.6085 35.1285 24.2815 35.1285ZM30.4236 26.6461C29.9766 26.4233 28.2249 25.5647 27.8099 25.4163C27.395 25.2679 27.0852 25.1902 26.769 25.6372C26.4528 26.0842 25.7758 26.869 25.4981 27.1851C25.2268 27.495 24.9491 27.5339 24.502 27.3111C22.2559 26.1877 20.7919 25.302 19.3214 22.7435C18.9064 22.0665 19.6685 22.1184 20.3713 20.7129C20.5197 20.3966 20.442 20.1204 20.3196 19.8765C20.1973 19.6326 19.4553 17.881 19.0661 16.9805C18.6898 16.1058 18.3007 16.2217 18.0166 16.2088C17.7454 16.1958 17.4356 16.1958 17.1194 16.1958C16.8031 16.1958 16.3109 16.3181 15.8959 16.7651C15.481 17.2121 14.5546 18.0707 14.5546 19.8223C14.5546 21.5738 15.8572 23.2614 16.0315 23.5776C16.2121 23.8938 19.4424 28.8606 24.3794 30.8905C27.4848 32.1554 28.7112 32.2389 30.2814 31.9745C31.2207 31.8133 32.6588 31.063 33.048 30.0117C33.4371 28.9604 33.4371 28.0599 33.3148 27.8546C33.1989 27.63 32.8827 27.5006 32.4357 27.2715C31.9887 27.0487 30.8779 26.669 30.4236 26.6461Z" 
          fill="#25D366"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
