import React, { useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { VoiceSearchQuery, generateVoiceSearchFAQSchema } from '@/data/voiceSearchQueries';
import { addMalayalamSchemaToDocument } from '@/utils/malayalamSEO';

interface VoiceSearchFAQProps {
  queries: VoiceSearchQuery[];
  className?: string;
}

export const VoiceSearchFAQ: React.FC<VoiceSearchFAQProps> = ({ queries, className = '' }) => {
  useEffect(() => {
    // Add FAQ schema for voice search optimization
    const schema = generateVoiceSearchFAQSchema(queries);
    addMalayalamSchemaToDocument(schema);
  }, [queries]);

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {queries.map((query, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-xera-darkgray border border-xera-lightgray rounded-lg px-6"
          >
            <AccordionTrigger className="text-left text-white hover:text-xera-red">
              {query.question}
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pt-4">
              {query.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
