
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Meet the Team Behind Kerala's Cleanest Cars
          </h2>
          
          <p className="text-lg text-white/80 mb-6">
            We're XERA — where detailing is an art and customer trust is everything. We blend cutting-edge tools with deep automotive experience to deliver results that not only shine, but last.
          </p>
          
          <p className="text-xl font-rajdhani font-semibold italic text-xera-red">
            "We don't clean cars. We redefine them."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
