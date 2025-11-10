import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { translations } from '@/data/translations';

export const MalayalamBookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: ''
  });

  const t = translations.ml;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `പുതിയ ബുക്കിംഗ്:
പേര്: ${formData.name}
ഫോൺ: ${formData.phone}
വാഹനം: ${formData.vehicle}
സേവനം: ${formData.service}`;

    const whatsappUrl = `https://wa.me/917559999366?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('WhatsApp-ലേക്ക് റീഡയറക്ട് ചെയ്യുന്നു...');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-xera-darkgray p-8 rounded-lg border border-xera-lightgray">
      <div>
        <Label htmlFor="name" className="text-white mb-2 block">{t.form.name}</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
          className="bg-black/30 border-xera-lightgray text-white"
          placeholder="നിങ്ങളുടെ പേര്"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-white mb-2 block">{t.form.phone}</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
          className="bg-black/30 border-xera-lightgray text-white"
          placeholder="+91 9876543210"
        />
      </div>

      <div>
        <Label htmlFor="vehicle" className="text-white mb-2 block">{t.form.vehicle}</Label>
        <Select value={formData.vehicle} onValueChange={(value) => setFormData({...formData, vehicle: value})}>
          <SelectTrigger className="bg-black/30 border-xera-lightgray text-white">
            <SelectValue placeholder={t.form.selectVehicle} />
          </SelectTrigger>
          <SelectContent className="bg-xera-darkgray border-xera-lightgray">
            <SelectItem value="hatchback">{t.vehicles.hatchback}</SelectItem>
            <SelectItem value="sedan">{t.vehicles.sedan}</SelectItem>
            <SelectItem value="suv">{t.vehicles.suv}</SelectItem>
            <SelectItem value="luxury">{t.vehicles.luxury}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="service" className="text-white mb-2 block">{t.form.service}</Label>
        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
          <SelectTrigger className="bg-black/30 border-xera-lightgray text-white">
            <SelectValue placeholder={t.form.selectService} />
          </SelectTrigger>
          <SelectContent className="bg-xera-darkgray border-xera-lightgray">
            <SelectItem value="ceramic-coating">{t.services.ceramicCoating}</SelectItem>
            <SelectItem value="car-wash">{t.services.carWash}</SelectItem>
            <SelectItem value="interior-cleaning">{t.services.interiorCleaning}</SelectItem>
            <SelectItem value="paint-correction">{t.services.paintCorrection}</SelectItem>
            <SelectItem value="engine-cleaning">{t.services.engineCleaning}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-xera-red hover:bg-xera-red/90 text-white">
        {t.form.submit}
      </Button>
    </form>
  );
};
