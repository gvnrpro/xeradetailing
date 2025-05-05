
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getImageAlt } from '@/utils/imageOptimization';

// Blog content for each post
const blogContents = {
  "why-kerala-cars-need-ceramic-coating": {
    title: "5 Reasons Kerala Cars Need Ceramic Coating",
    date: "May 1, 2024",
    readTime: "4 min read",
    imageUrl: "/lovable-uploads/cc7ff58c-370a-4c28-affe-248f3bce2fb5.png",
    content: `
      <p class="mb-6">Owning a car in Kerala means dealing with blazing sun, heavy rain, muddy roads, and humidity — all of which can ruin your vehicle's paint. That's where ceramic coating comes in.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">1. 🌞 UV Protection for Hot Days</h2>
      <p class="mb-6">Kerala's sun can fade your car's paint fast. A ceramic layer blocks UV rays, keeping your paint vibrant for years.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">2. 🌧️ Monsoon Armor</h2>
      <p class="mb-6">Ceramic coatings create a hydrophobic shield. Rainwater beads off instantly, reducing stains and rust buildup during Kerala's wet season.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">3. 💎 Showroom Shine</h2>
      <p class="mb-6">It gives your car that glassy, mirror-like finish. Friends and passersby will ask, "Did you just buy a new car?"</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">4. 🧽 Easy to Clean</h2>
      <p class="mb-6">Kerala dust, mud, and bird droppings won't stick as easily. Just rinse with water and your car is ready to roll.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">5. 💰 Higher Resale Value</h2>
      <p class="mb-6">Buyers love a well-kept car. Ceramic protection boosts resale by preserving original paint quality.</p>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Want a finish that stays flawless through Kerala's seasons?</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Book your ceramic coating appointment with XERA today.</a>
      </div>
    `
  },
  "car-wash-frequency-kerala": {
    title: "How Often Should You Get a Car Wash in Kerala?",
    date: "May 1, 2024",
    readTime: "3 min read",
    imageUrl: "/assets/express-wash-after.jpg",
    content: `
      <p class="mb-6">With our tropical climate and traffic-packed roads, cars in Kerala get dirty fast. But how often should you actually wash your vehicle?</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Daily Use = Weekly Wash</h2>
      <p class="mb-6">If you use your car daily in dusty areas or near construction, a weekly wash keeps paint safe.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Rural & Rainy Zones = Twice a Week</h2>
      <p class="mb-6">Muddy rural roads and monsoon mess? Wash more often to avoid grime buildup and rust.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Coastal Areas = Be Cautious</h2>
      <p class="mb-6">Salt in the air can corrode paint. Rinse off salt mist often — especially after beach trips.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Tip: Watch for These Signs</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Water spots or dull finish</li>
        <li class="mb-2">Brown stains on wheels or trim</li>
        <li class="mb-2">Bird droppings left too long</li>
      </ul>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">For safe, effective foam washing</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Visit XERA — Ottapalam's car care experts.</a>
      </div>
    `
  },
  "bike-detailing-kerala-monsoon": {
    title: "Bike Detailing Checklist for Monsoon Season",
    date: "May 1, 2024",
    readTime: "5 min read",
    imageUrl: "/lovable-uploads/588a7319-b8dc-4e0c-99dd-909134350e51.png",
    content: `
      <p class="mb-6">Rainy season in Kerala is beautiful — but for your bike, it's a nightmare. Follow this checklist to keep your ride rust-free and shiny.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">✅ Pre-Monsoon Prep</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Chain lube</li>
        <li class="mb-2">Brake inspection</li>
        <li class="mb-2">Surface polish</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">✅ During Monsoon</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Foam wash weekly</li>
        <li class="mb-2">Dry wipe after each ride</li>
        <li class="mb-2">Rust blocker spray on metal parts</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">✅ Post-Monsoon</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Full detailing (engine degrease, polish)</li>
        <li class="mb-2">Touch-up wax</li>
        <li class="mb-2">Anti-corrosion check</li>
      </ul>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">XERA's Tip:</p>
        <p class="mb-2">Bikes deserve detailing too.</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Book our 2-wheeler monsoon detailing for ultimate protection.</a>
      </div>
    `
  },
  "ceramic-coating-care-tips": {
    title: "5 Mistakes to Avoid After Ceramic Coating",
    date: "May 1, 2024",
    readTime: "4 min read",
    imageUrl: "/assets/ceramic-after.jpg",
    content: `
      <p class="mb-6">You've invested in ceramic coating — great! But don't let a few small mistakes ruin its performance.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">1. ❌ Washing Too Soon</h2>
      <p class="mb-6">Wait 5–7 days before your first wash. Let the coating cure completely.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">2. ❌ Using Harsh Soaps</h2>
      <p class="mb-6">Only use pH-neutral shampoos. Detergents strip protection.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">3. ❌ Letting Bird Droppings Sit</h2>
      <p class="mb-6">Wipe them off immediately to avoid etching.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">4. ❌ No Maintenance Top-Up</h2>
      <p class="mb-6">Reinforce the layer every 6 months with a maintenance spray.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">5. ❌ Touching the Car with Dirty Cloths</h2>
      <p class="mb-6">Always use microfiber cloths. Dirt = micro-scratches.</p>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Want to keep your ceramic coat lasting 3+ years?</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">XERA's aftercare plans make it easy.</a>
      </div>
    `
  },
  "underbody-coating-palakkad-value": {
    title: "Is Anti-Rust Underbody Coating Worth It in Palakkad?",
    date: "May 1, 2024",
    readTime: "3 min read",
    imageUrl: "/lovable-uploads/49381c24-91d9-49f2-a106-6853ba6c134d.png",
    content: `
      <p class="mb-6">Short answer: YES. Kerala's roads are full of moisture, mud, and salt — the perfect recipe for underbody rust.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Why It's a Must in Palakkad:</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Frequent rain & floods</li>
        <li class="mb-2">Roads with pooled water</li>
        <li class="mb-2">Salt exposure from hilly terrain</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">What Underbody Coating Does:</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Seals your chassis</li>
        <li class="mb-2">Adds abrasion resistance</li>
        <li class="mb-2">Prevents corrosion before it starts</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">How Long It Lasts:</h2>
      <p class="mb-6">Up to 2 years with proper care — and XERA offers annual touch-ups.</p>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Protect what you can't see.</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Book XERA's underbody anti-rust treatment today.</a>
      </div>
    `
  },
  "foam-vs-pressure-wash-kerala": {
    title: "Foam Wash vs Pressure Wash: What's Better for Your Car in Kerala?",
    date: "May 1, 2024",
    readTime: "3 min read",
    imageUrl: "/assets/express-wash-before.jpg",
    content: `
      <p class="mb-6">Both clean your car — but they're not the same. Which one should you choose?</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Foam Wash ✅</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Gentle</li>
        <li class="mb-2">pH-balanced</li>
        <li class="mb-2">Safe for coatings and trims</li>
        <li class="mb-2">Best for weekly maintenance</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Pressure Wash ⚠️</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">High force can strip wax</li>
        <li class="mb-2">Risky near seals & sensors</li>
        <li class="mb-2">Not ideal for frequent use</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">XERA's Method: The Hybrid</h2>
      <p class="mb-6">We use foam first to loosen dirt, followed by targeted pressure to rinse. The safest combo for Kerala roads.</p>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Don't let pressure ruin your paint.</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Book a precision foam wash with XERA today.</a>
      </div>
    `
  },
  "paint-protection-comparison": {
    title: "Ceramic vs PPF vs Wax: Complete Paint Protection Comparison",
    date: "May 3, 2024",
    readTime: "6 min read",
    imageUrl: "/lovable-uploads/87afb816-e5f6-4de8-a0e4-bc33d80b3cd1.png",
    content: `
      <p class="mb-6">With so many paint protection options available, which one should you choose? Let's compare ceramic coating, paint protection film (PPF), and traditional waxes.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Ceramic Coating: The Modern Shield</h2>
      <p class="mb-6">Ceramic coating creates a semi-permanent bond with your paint that can last 2-5 years when properly maintained.</p>
      <p class="mb-6">✅ <strong>Pros:</strong> Exceptional gloss, hydrophobic properties, UV protection, chemical resistance</p>
      <p class="mb-6">⚠️ <strong>Cons:</strong> Higher upfront cost, professional application required, no physical impact protection</p>
      <p class="mb-6"><strong>Best for:</strong> Daily drivers wanting low maintenance and high shine in Kerala's challenging climate</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">PPF (Paint Protection Film): The Physical Barrier</h2>
      <p class="mb-6">PPF is a clear urethane film that's physically applied to your car's paint, providing the highest level of protection.</p>
      <p class="mb-6">✅ <strong>Pros:</strong> Self-healing properties, impact protection from rocks and debris, prevents scratches</p>
      <p class="mb-6">⚠️ <strong>Cons:</strong> Highest cost, potential for yellowing over time if low quality film is used</p>
      <p class="mb-6"><strong>Best for:</strong> Luxury vehicles, cars driven on highways or construction areas with flying debris</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Traditional Wax: The Classic Choice</h2>
      <p class="mb-6">Carnauba or synthetic wax provides temporary protection that needs frequent reapplication.</p>
      <p class="mb-6">✅ <strong>Pros:</strong> Affordable, DIY-friendly, gentle on paint, subtle shine</p>
      <p class="mb-6">⚠️ <strong>Cons:</strong> Short lifespan (1-3 months), limited protection, requires frequent reapplication</p>
      <p class="mb-6"><strong>Best for:</strong> Vintage cars, weekend vehicles, tight budgets</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">XERA's Recommendation</h2>
      <p class="mb-6">For most Kerala drivers, our premium ceramic coating offers the best balance of protection, longevity, and value. For ultimate protection, consider our ceramic + PPF combo package for high-impact areas.</p>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Not sure which protection is right for your vehicle?</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Book a free consultation with our protection specialists today.</a>
      </div>
    `
  },
  "interior-detailing-benefits": {
    title: "Why Professional Interior Detailing Is Worth Every Rupee",
    date: "May 5, 2024",
    readTime: "5 min read", 
    imageUrl: "/assets/interior-after.jpg",
    content: `
      <p class="mb-6">Your car's interior is where you spend most of your time. Here's why professional interior detailing is an investment in both your vehicle and your health.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Beyond What You Can See</h2>
      <p class="mb-6">While DIY cleaning might remove visible dirt, professional detailing tackles what you can't see: bacteria, allergens, and deep-seated grime that accumulates in Kerala's humid climate.</p>
      
      <div class="mb-8">
        <img src="/assets/interior-before.jpg" alt="Car interior before professional detailing showing dirt and stains in Kerala vehicle" class="rounded-lg mb-2 w-full" loading="lazy" />
        <p class="text-sm text-center text-white/70">Before: Accumulated dirt and stains that regular cleaning misses</p>
      </div>
      
      <div class="mb-8">
        <img src="/assets/interior-after.jpg" alt="Car interior after XERA professional detailing looking fresh and sanitized" class="rounded-lg mb-2 w-full" loading="lazy" />
        <p class="text-sm text-center text-white/70">After: Clean, sanitized, and protected surfaces</p>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Health Benefits You Can't Ignore</h2>
      <p class="mb-6">Kerala's high humidity creates the perfect environment for mold and mildew growth in your car. Professional detailing includes:</p>
      
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">HVAC system cleaning to remove mold spores and improve air quality</li>
        <li class="mb-2">Antimicrobial treatments for all surfaces</li>
        <li class="mb-2">Deep extraction of allergens from upholstery and carpets</li>
        <li class="mb-2">Treatment of hidden areas where moisture accumulates</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">Preserving Value</h2>
      <p class="mb-6">Regular interior detailing preserves your car's resale value by preventing permanent staining, fading, and material deterioration that's common in Kerala's intense sun and humidity.</p>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Breathe easier and drive in a cleaner environment.</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Book XERA's professional interior detailing service today.</a>
      </div>
    `
  },
  "headlight-restoration-guide": {
    title: "Headlight Restoration: Improving Night Visibility and Safety",
    date: "May 7, 2024",
    readTime: "4 min read",
    imageUrl: "/assets/headlight-after.jpg",  
    content: `
      <p class="mb-6">Yellowed, foggy headlights aren't just unsightly—they're dangerous. Here's why headlight restoration is essential for safe driving in Kerala.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">The Danger of Degraded Headlights</h2>
      <p class="mb-6">Over time, UV rays and Kerala's weather conditions cause headlight lenses to oxidize and yellow, reducing light output by up to 70%. This significantly impairs your night visibility and reaction time.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <img src="/assets/headlight-before.jpg" alt="Yellowed and oxidized headlight before professional restoration in Kerala" class="rounded-lg mb-2 w-full h-auto" loading="lazy" />
          <p class="text-sm text-center text-white/70">Before: Severely oxidized headlight with limited light output</p>
        </div>
        <div>
          <img src="/assets/headlight-after.jpg" alt="Crystal clear headlight after professional restoration by XERA detailing" class="rounded-lg mb-2 w-full h-auto" loading="lazy" />
          <p class="text-sm text-center text-white/70">After: Restored clarity for maximum visibility</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">The XERA Restoration Process</h2>
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2"><strong>Surface cleaning</strong> - Removing all dirt and contaminants</li>
        <li class="mb-2"><strong>Multi-stage sanding</strong> - Progressive removal of the damaged layer</li>
        <li class="mb-2"><strong>Polishing</strong> - Machine polishing to restore clarity</li>
        <li class="mb-2"><strong>UV sealant application</strong> - Protection from future damage</li>
      </ol>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">When to Restore Your Headlights</h2>
      <p class="mb-6">Consider professional headlight restoration if:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Your headlights appear yellow, cloudy, or hazy</li>
        <li class="mb-2">Night visibility seems reduced compared to when your car was new</li>
        <li class="mb-2">Your headlights look dull even after washing</li>
        <li class="mb-2">Your vehicle is more than 3 years old (especially if parked outdoors)</li>
      </ul>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Don't compromise on safety during Kerala's monsoon nights.</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Schedule your headlight restoration at XERA today.</a>
      </div>
    `
  },
  "engine-bay-cleaning-benefits": {
    title: "Engine Bay Detailing: The Maintenance Most Kerala Drivers Overlook",
    date: "May 9, 2024",
    readTime: "5 min read",
    imageUrl: "/assets/engine-after.jpg",
    content: `
      <p class="mb-6">A clean engine bay isn't just about aesthetics—it's about preventing costly repairs and making maintenance easier. Here's why engine bay cleaning should be part of your car care routine in Kerala.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">The Hidden Problems of a Dirty Engine</h2>
      <p class="mb-6">Kerala's combination of high humidity, frequent rain, and dusty conditions creates a perfect storm for engine bay contamination. Oil, grime, and mud accumulate and can cause:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Overheating due to trapped heat</li>
        <li class="mb-2">Electrical issues from moisture and corrosion</li>
        <li class="mb-2">Faster deterioration of rubber hoses and belts</li>
        <li class="mb-2">Difficulty identifying fluid leaks</li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <img src="/assets/engine-before.jpg" alt="Engine bay before professional cleaning showing dirt and grime buildup in Kerala humidity" class="rounded-lg mb-2 w-full h-auto" loading="lazy" />
          <p class="text-sm text-center text-white/70">Before: Accumulated dirt masks potential issues</p>
        </div>
        <div>
          <img src="/assets/engine-after.jpg" alt="Engine bay after professional cleaning by XERA detailing showing spotless components" class="rounded-lg mb-2 w-full h-auto" loading="lazy" />
          <p class="text-sm text-center text-white/70">After: Clean components for better performance and easier maintenance</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">The XERA Difference</h2>
      <p class="mb-6">Our engine bay detailing isn't just a simple wash. We use specialized equipment and techniques:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Low-pressure steam cleaning for sensitive components</li>
        <li class="mb-2">Biodegradable degreasers safe for all engine components</li>
        <li class="mb-2">Careful protection of electrical components</li>
        <li class="mb-2">Silicone-free dressing for hoses and plastics that won't attract dust</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">More Than Just Clean</h2>
      <p class="mb-6">A professionally detailed engine bay makes regular maintenance easier and more effective. Your mechanic will thank you, and small issues can be spotted before they become expensive repairs.</p>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Protect your engine from Kerala's harsh elements.</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Book XERA's professional engine bay detailing today.</a>
      </div>
    `
  },
  "paint-correction-explained": {
    title: "Paint Correction: Restoring Your Car's Perfect Finish",
    date: "May 10, 2024",
    readTime: "6 min read",
    imageUrl: "/assets/paint-correction-after.jpg",
    content: `
      <p class="mb-6">Even new vehicles often have imperfections in their paint. Paint correction is the transformative process that restores your car's finish to better-than-showroom condition.</p>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">What Is Paint Correction?</h2>
      <p class="mb-6">Paint correction is a multi-stage polishing process that removes surface imperfections from your vehicle's clear coat and paint, including:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Swirl marks from improper washing</li>
        <li class="mb-2">Fine scratches from everyday use</li>
        <li class="mb-2">Water spots and etching</li>
        <li class="mb-2">Oxidation and fading from sun exposure</li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <img src="/assets/paint-correction-before.jpg" alt="Car paint before correction showing swirl marks and scratches from improper washing in Kerala" class="rounded-lg mb-2 w-full h-auto" loading="lazy" />
          <p class="text-sm text-center text-white/70">Before: Swirl marks and minor scratches visible under light</p>
        </div>
        <div>
          <img src="/assets/paint-correction-after.jpg" alt="Car paint after professional correction by XERA detailing showing flawless mirror finish" class="rounded-lg mb-2 w-full h-auto" loading="lazy" />
          <p class="text-sm text-center text-white/70">After: Flawless, mirror-like finish</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">The XERA Paint Correction Process</h2>
      <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2"><strong>Paint assessment</strong> - Measuring paint thickness and identifying imperfections</li>
        <li class="mb-2"><strong>Thorough decontamination</strong> - Removing bonded contaminants</li>
        <li class="mb-2"><strong>Multi-stage correction</strong> - Progressive polishing with diminishing abrasives</li>
        <li class="mb-2"><strong>Refinement polishing</strong> - Creating maximum gloss and clarity</li>
        <li class="mb-2"><strong>Protection application</strong> - Sealing with ceramic coating or premium wax</li>
      </ol>
      
      <h2 class="text-2xl font-bold mb-4 text-gradient">When to Consider Paint Correction</h2>
      <p class="mb-6">Paint correction is ideal before applying any long-term protection like ceramic coating. It's also beneficial if:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Your car's paint looks dull despite regular washing</li>
        <li class="mb-2">You notice swirl marks under direct sunlight</li>
        <li class="mb-2">You've purchased a used vehicle</li>
        <li class="mb-2">You want to restore your vehicle's original luster</li>
      </ul>
      
      <div class="bg-xera-darkgray/30 p-6 rounded-lg border border-white/10 mt-8">
        <p class="font-bold mb-2">Ready to see your car's true potential?</p>
        <a href="/contact" class="inline-block text-xera-red font-semibold hover:underline">Schedule a paint correction consultation at XERA today.</a>
      </div>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContents[id as keyof typeof blogContents] : null;
  
  // Update document title for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | XERA Auto Detailing Blog`;
      
      // Add meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      // Use the first paragraph as description
      const description = post.content
        .split('</p>')[0]
        .replace(/<p class="mb-6">/, '')
        .slice(0, 155) + '...';
      metaDescription.setAttribute('content', description);
      
      // Add canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', `https://xeradetailing.in/blog/${id}`);
    }
  }, [post, id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog" className="text-xera-red hover:underline flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 flex-grow">
        <div className="bg-xera-darkgray py-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">{post.title}</h1>
            <div className="flex flex-wrap items-center text-white/70 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" /> {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" /> {post.readTime}
              </div>
              <button 
                onClick={() => {
                  navigator.share({
                    title: post.title,
                    url: window.location.href
                  }).catch(() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('URL copied to clipboard!');
                  });
                }}
                className="flex items-center hover:text-white transition-colors"
              >
                <Share2 className="h-4 w-4 mr-2" /> Share
              </button>
            </div>
          </div>
        </div>
        
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10 rounded-xl overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-4">Share This Article</h3>
                <div className="flex gap-4">
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                    aria-label="Share on Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`, '_blank')}
                    className="bg-[#25D366] text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                    aria-label="Share on WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('URL copied to clipboard!');
                    }}
                    className="bg-gray-700 text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                    aria-label="Copy URL"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* BlogPosting schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": post.imageUrl,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "XERA Car Wash & Auto Detailing"
              },
              "publisher": {
                "@type": "Organization",
                "name": "XERA Car Wash & Auto Detailing",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://xeradetailing.in/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://xeradetailing.in/blog/${id}`
              }
            })
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
