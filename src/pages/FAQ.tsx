
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BreadcrumbNav from '@/components/ui/breadcrumb-nav';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { setPageMetadata, generateSchemaMarkup } from '@/utils/seoHelper';
import { trackEvent } from '@/components/tracking/AnalyticsProvider';
import StickyCTA from '@/components/enhanced/StickyCTA';

const FAQ = () => {
  useEffect(() => {
    setPageMetadata(
      "Frequently Asked Questions | XERA Auto Detailing Kerala",
      "Get answers to common questions about ceramic coating, car detailing, paint protection, and automotive care services in Kerala. Expert advice from XERA professionals.",
      "https://xeradetailing.in/faq",
      "https://xeradetailing.in/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
      [
        "ceramic coating faq kerala",
        "car detailing questions palakkad",
        "paint protection answers",
        "auto detailing help",
        "ceramic coating cost kerala",
        "car wash frequency monsoon",
        "paint protection warranty",
        "car care questions kerala"
      ]
    );
    
    trackEvent('view_faq_page');
  }, []);

  const faqData = [
    {
      category: "Ceramic Coating",
      questions: [
        {
          question: "How long does ceramic coating last in Kerala's climate?",
          answer: "Our premium 9H ceramic coating is specifically formulated for Kerala's humid and monsoon conditions. With proper maintenance, it provides 5-7 years of protection against UV rays, acid rain, pollution, and humidity. The hydrophobic properties remain effective even during heavy monsoon seasons."
        },
        {
          question: "What is the cost of ceramic coating in Ottapalam?",
          answer: "Ceramic coating prices range from ₹7,999 to ₹15,999 depending on your vehicle size and coating package. This includes paint correction, professional application, and warranty. We offer transparent pricing with no hidden costs and provide detailed quotes after vehicle inspection."
        },
        {
          question: "Is ceramic coating worth it for daily drivers in Kerala?",
          answer: "Absolutely! Kerala's challenging climate with high humidity, acid rain, and pollution makes ceramic coating essential for daily drivers. It significantly reduces washing frequency, protects against paint damage, maintains resale value, and provides long-term cost savings."
        },
        {
          question: "How should I maintain my ceramic coated car in Kerala?",
          answer: "Wash your ceramic coated car every 2-3 weeks with pH-neutral shampoo. Avoid automatic car washes with harsh chemicals. During monsoon, rinse off salt and pollutants more frequently. Annual inspections help maintain warranty coverage."
        }
      ]
    },
    {
      category: "Car Detailing Services",
      questions: [
        {
          question: "What's included in your premium car detailing service?",
          answer: "Our premium detailing includes exterior wash, clay bar treatment, paint correction, polishing, interior deep cleaning, leather conditioning, engine bay cleaning, tire and rim detailing, and protective treatments. Complete service takes 4-6 hours."
        },
        {
          question: "How often should I get my car detailed in Kerala?",
          answer: "We recommend professional detailing every 3-4 months in Kerala due to high humidity and pollution. During monsoon season, consider additional services like interior sanitization and paint protection maintenance."
        },
        {
          question: "Do you provide mobile detailing services?",
          answer: "Currently, we operate from our professional facility in Ottapalam for quality control and equipment access. However, we serve customers from across Palakkad district including Shoranur, Pattambi, Perinthalmanna, and surrounding areas."
        }
      ]
    },
    {
      category: "Paint Protection",
      questions: [
        {
          question: "What's the difference between PPF and ceramic coating?",
          answer: "Paint Protection Film (PPF) provides physical protection against stone chips and scratches, while ceramic coating offers chemical protection against UV, acid rain, and contamination. For maximum protection in Kerala's conditions, we often recommend combining both treatments."
        },
        {
          question: "Can you apply ceramic coating on a used car?",
          answer: "Yes! We first perform paint correction to address existing swirl marks, scratches, and oxidation. This restoration process ensures the ceramic coating bonds properly and provides optimal protection and gloss enhancement."
        }
      ]
    },
    {
      category: "Interior Services",
      questions: [
        {
          question: "How do you handle interior cleaning during monsoon season?",
          answer: "Our interior cleaning process includes thorough sanitization, dehumidification, and anti-fungal treatments specifically designed for Kerala's monsoon conditions. We use specialized equipment to prevent mold and mildew growth in humid conditions."
        },
        {
          question: "Can you remove pet odors and stains from car interiors?",
          answer: "Yes, we specialize in odor elimination using enzymatic cleaners and ozone treatment. Our deep cleaning process effectively removes pet hair, stains, and odors while sanitizing the interior surfaces."
        }
      ]
    },
    {
      category: "Pricing and Warranty",
      questions: [
        {
          question: "Do you offer warranty on your services?",
          answer: "Yes! We provide comprehensive warranties: 5+ years on ceramic coating, 2 years on paint correction, and satisfaction guarantee on all detailing services. Warranty terms include specific maintenance requirements and annual inspections."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, all major credit/debit cards, UPI payments, and bank transfers. We also offer flexible payment plans for premium services like ceramic coating packages."
        }
      ]
    },
    {
      category: "Booking and Service",
      questions: [
        {
          question: "How do I book an appointment?",
          answer: "Call us at +91 9605858483, WhatsApp, or visit our facility at Opp. NSS College, Palappuram, Ottapalam. We recommend advance booking, especially for ceramic coating services which require dedicated time slots."
        },
        {
          question: "How long does ceramic coating application take?",
          answer: "Complete ceramic coating service takes 1-2 days including paint correction, preparation, application, and curing time. We ensure proper curing in controlled environment for optimal bonding and durability."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BreadcrumbNav currentPage="FAQ" />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Frequently Asked Questions
              </h1>
              <p className="text-white/70 text-lg">
                Get expert answers about ceramic coating, car detailing, and automotive care services in Kerala
              </p>
            </header>

            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-xera-red">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-xera-darkgray border border-white/10 rounded-lg"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:text-xera-red transition-colors">
                        <span className="text-base font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="mt-12 text-center bg-xera-darkgray rounded-lg p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-white/70 mb-6">
                Our automotive care experts are here to help with personalized advice for your vehicle's needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="tel:+919605858483" 
                  className="bg-xera-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Call +91 9605858483
                </a>
                <a 
                  href="https://wa.me/919605858483" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Schema for featured snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateSchemaMarkup('FAQPage', {
              mainEntity: faqData.flatMap(category => 
                category.questions.map(faq => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                  }
                }))
              )
            })
          }}
        />
      </main>
      
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </div>
  );
};

export default FAQ;
