
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { trackEvent } from '../tracking/AnalyticsProvider';
import { useToast } from '@/hooks/use-toast';

interface LeadMagnetFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  downloadUrl?: string;
  redirectToWhatsapp?: boolean;
  whatsappMessage?: string;
  className?: string;
}

const LeadMagnetForm = ({
  title = "Free Car Care Checklist for Kerala Drivers",
  description = "Get our exclusive guide to keeping your car looking showroom-fresh in Kerala's challenging climate.",
  buttonText = "Download Now",
  downloadUrl = "/assets/XERA-Car-Care-Checklist.pdf", // This would be your actual PDF
  redirectToWhatsapp = true,
  whatsappMessage = "Hi XERA, I downloaded the free car care checklist – I'd like to learn more about ceramic coating options for my car.",
  className
}: LeadMagnetFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Track the lead capture event
      trackEvent('lead_magnet_download', {
        email: email,
        name: name,
        lead_magnet: title
      });
      
      // Here you could add logic to:
      // 1. Store lead data in Airtable/Google Sheets/CRM
      // 2. Send data to your backend
      // For now, we'll simulate a request with setTimeout
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Success toast
      toast({
        title: "Success!",
        description: "Your checklist is ready to download.",
      });
      
      // Trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.target = '_blank';
      link.download = 'XERA-Car-Care-Checklist.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Redirect to WhatsApp if enabled
      if (redirectToWhatsapp) {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/919605858483?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab after a short delay
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1000);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setEmail('');
      setName('');
    }
  };
  
  return (
    <div className={`bg-gradient-to-b from-xera-darkgray to-black border border-xera-lightgray rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold mb-3 text-gradient">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input 
            id="name" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-xera-lightgray border-xera-lightgray"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-xera-lightgray border-xera-lightgray"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-xera-red hover:bg-red-700 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : buttonText}
        </Button>
        
        <p className="text-xs text-white/50 text-center mt-2">
          By submitting, you agree to receive occasional emails about our services. 
          You can unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default LeadMagnetForm;
