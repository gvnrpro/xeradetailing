
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const GoogleReviewInvite = () => {
  return (
    <section className="py-16 bg-xera-darkgray">
      <div className="container mx-auto px-4">
        <div className="glass-card max-w-4xl mx-auto p-8 rounded-xl bg-gradient-to-br from-xera-lightgray to-black border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gradient">
            Loved Your Shine? Give Us 5 Stars on Google ✨
          </h2>
          
          <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">
            We obsess over every shine and swirl because your trust drives us. If we've earned it, your 
            <span className="inline-flex mx-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              ))}
            </span> 
            review helps others find detailing they can count on.
          </p>
          
          <div className="mb-8 max-w-md mx-auto glass-card p-4 rounded-lg border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                A
              </div>
              <div className="flex-1">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-white/80 mb-1">"XERA brought my SUV back to life. 5 stars. No doubt."</p>
                <p className="text-sm text-white/60">– Adil, Palakkad</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://g.page/r/CfNPuh8d4DNAEAI/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                className="relative bg-gradient-to-r from-gray-300 to-white text-black hover:from-gray-200 hover:to-gray-100 text-lg px-10 py-6 h-auto shadow-lg overflow-hidden transition-all duration-300 group-hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Leave a Review on Google
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 group-hover:animate-pulse" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewInvite;
