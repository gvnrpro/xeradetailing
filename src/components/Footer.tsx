
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
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-white/70 hover:text-xera-red transition-colors">Home</Link>
              <Link to="/services" className="text-white/70 hover:text-xera-red transition-colors">Services</Link>
              <Link to="/about" className="text-white/70 hover:text-xera-red transition-colors">About Us</Link>
              <Link to="/contact" className="text-white/70 hover:text-xera-red transition-colors">Contact</Link>
              <Link to="/blog" className="text-white/70 hover:text-xera-red transition-colors">Blog</Link>
              <Link to="/terms" className="text-white/70 hover:text-xera-red transition-colors">Terms</Link>
            </div>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-white/70 mb-2">
              Opp. NSS College, Palappuram, Ottapalam, Kerala – 679103
            </p>
            <p className="text-white/70 mb-2">
              Phone: <a href="tel:+919605858483" className="hover:text-xera-red transition-colors">+91 9605858483</a>
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
        </div>

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "XERA Car Wash & Auto Detailing",
            "image": "https://xeradetailing.in/logo.png",
            "url": "https://xeradetailing.in",
            "telephone": "+919605858483",
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
              "https://www.instagram.com/xeradetailing"
            ]
          }
        ` }} />
      </div>
    </footer>
  );
};

export default Footer;
