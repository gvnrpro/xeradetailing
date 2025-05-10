
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">XERA</span>
            </Link>
            <p className="text-white/70 mb-4">
              Kerala's leading car care studio offering expert ceramic coating, detailing, and interior cleaning.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://www.justdial.com/Ottapalam/Xera-Car-Wash-Auto-Detailing-Opposite-NSS-College-Palappuram/9999PX466-X466-220511172236-E4Y1_BZDET" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-xera-red transition-colors"
              >
                <img 
                  src="/assets/justdial-badge.png" 
                  alt="Listed on JustDial" 
                  className="h-6 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://assets.justdial.com/images/jdlogo.png";
                    e.currentTarget.style.height = "20px";
                  }}
                />
                <span className="text-xs">Listed on JustDial</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-white/70 hover:text-xera-red transition-colors">Home</Link>
              <Link to="/services" className="text-white/70 hover:text-xera-red transition-colors">Services</Link>
              <Link to="/blog" className="text-white/70 hover:text-xera-red transition-colors">Blog</Link>
              <Link to="/car-care-tips" className="text-white/70 hover:text-xera-red transition-colors">Car Care Tips</Link>
              <Link to="/about" className="text-white/70 hover:text-xera-red transition-colors">About Us</Link>
              <Link to="/contact" className="text-white/70 hover:text-xera-red transition-colors">Contact</Link>
              <Link to="/terms" className="text-white/70 hover:text-xera-red transition-colors">Terms</Link>
              <a 
                href="https://g.page/r/CfNPuh8d4DNAEAI/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-xera-red transition-colors"
              >
                Leave a Review
              </a>
            </div>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-white/70 mb-2">
              Opp. NSS College, Palappuram, Ottapalam, Kerala – 679103
            </p>
            <p className="text-white/70 mb-2">
              Phone: <a href="tel:+917559999366" className="hover:text-xera-red transition-colors">+91 75599 99366</a>
            </p>
            <p className="text-white/70">
              Open Daily: 9:00 AM – 7:00 PM
            </p>
          </div>
        </div>
        
        {/* SEO Footer Text */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm mb-4">
            XERA Car Wash & Auto Detailing is Kerala's leading car care studio offering expert ceramic coating, detailing, and interior cleaning in Ottapalam, Palappuram, and Palakkad.
          </p>
          
          {/* Copyright */}
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} XERA Car Wash & Auto Detailing. All rights reserved.
          </p>
          <p className="text-white/30 text-xs mt-1">
            Now listed on Justdial – explore verified reviews and listings.
          </p>
        </div>

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Car Wash & Auto Detailing",
            "image": "https://xeradetailing.in/logo.png",
            "url": "https://xeradetailing.in",
            "telephone": "+917559999366",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Opp. NSS College, Palappuram",
              "addressLocality": "Ottapalam",
              "postalCode": "679103",
              "addressRegion": "Kerala",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 10.980150076997278,
              "longitude": 76.37854502536776
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.facebook.com/xeradetailing",
              "https://www.instagram.com/xeradetailing",
              "https://www.justdial.com/Ottapalam/Xera-Car-Wash-Auto-Detailing-Opposite-NSS-College-Palappuram/9999PX466-X466-220511172236-E4Y1_BZDET"
            ]
          }
        ` }} />
      </div>
    </footer>
  );
};

export default Footer;
