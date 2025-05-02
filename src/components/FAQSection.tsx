
import React from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the difference between a normal car wash and full detailing?",
    answer: "A standard wash removes surface dirt, while detailing includes deep interior cleaning, polishing, and protective coating — restoring near-showroom condition."
  },
  {
    question: "How long does ceramic coating last on Kerala roads?",
    answer: "Up to 2–3 years when maintained well — especially effective against Kerala's UV, dust, and monsoon damage."
  },
  {
    question: "Is XERA's foam wash safe for ceramic-coated vehicles?",
    answer: "Yes. We use pH-balanced, non-abrasive foam specifically designed for coated surfaces."
  },
  {
    question: "Do you offer detailing for two-wheelers?",
    answer: "Absolutely. Scooters and bikes get our same expert attention — including degreasing, polish, and engine cleaning."
  },
  {
    question: "What's included in interior detailing?",
    answer: "Fabric shampoo, dashboard conditioning, AC vent cleaning, seat and carpet vacuuming, and odor removal — designed for Kerala's humid climate."
  },
  {
    question: "Can swirl marks and light scratches be fixed?",
    answer: "Yes, with our multi-stage paint correction process using machine polishers and professional-grade compounds."
  },
  {
    question: "Do you offer underbody anti-rust treatment?",
    answer: "Yes, we apply long-lasting coatings ideal for Kerala's moisture-heavy roads and coastal salt exposure."
  },
  {
    question: "When should I get headlight restoration done?",
    answer: "If your lights are foggy, yellow, or dim at night — they likely need UV restoration and polishing."
  },
  {
    question: "Do you provide pick-up and drop service?",
    answer: "Yes, within Ottapalam, Palappuram, and nearby areas (subject to availability and service type)."
  },
  {
    question: "ഡീറ്റെയിലിംഗ് എത്ര സമയം എടുക്കും?",
    answer: "സാധാരണയായി 3 മുതൽ 6 മണിക്കൂർ വരെ, സേവന തരം അനുസരിച്ച്."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-xera-darkgray" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5">
                  <h3 className="text-xl font-semibold text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/80">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ Schema - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
