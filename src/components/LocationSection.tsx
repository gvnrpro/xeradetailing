
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-xera-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Visit Us or Book from Nearby
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="h-[400px] bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.007084445248!2d76.37854502536776!3d10.980150076997278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cf7590639d5d%3A0xcc996c3b7d7dabd1!2sNSS%20College%2C%20Ottapalam!5e0!3m2!1sen!2sin!4v1714627507978!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XERA Car Wash & Auto Detailing Location"
              aria-label="Map showing XERA Car Wash & Auto Detailing location in Ottapalam, Kerala"
            ></iframe>
          </div>
          
          {/* Contact Info */}
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-xera-red mr-4 mt-1" />
                <div>
                  <p className="font-medium">Our Address</p>
                  <p className="text-white/70">Opp. NSS College, Palappuram, Ottapalam, Kerala – 679103</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium">Working Hours</p>
                <p className="text-white/70">Open Daily 9:00 AM – 7:00 PM</p>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-xera-red mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919605858483" className="text-white/70 hover:text-white">+91 9605858483</a>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">We Service These Areas:</p>
                <p className="text-white/70">Ottapalam, Palappuram, Shoranur, Palakkad, Pattambi, Perinthalmanna, Cherpulassery, Mannarkkad</p>
              </div>
              
              <div>
                <p className="font-medium mb-3">Connect With Us:</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-xera-lightgray rounded-full hover:bg-xera-red transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-xera-lightgray rounded-full hover:bg-xera-red transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://wa.me/919605858483" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-xera-lightgray rounded-full hover:bg-xera-red transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <Button className="w-full bg-xera-red hover:bg-red-700 text-white font-medium">
                Book An Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
