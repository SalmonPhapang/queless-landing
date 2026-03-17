import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Beer, Utensils, ShieldCheck, Zap, CreditCard, Clock, MapPin } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { StepCard } from '../components/StepCard';
import { ComingSoonModal } from '../components/ComingSoonModal';

export const Home: React.FC = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const ctaSectionRef = useRef<HTMLElement>(null);

  const googlePlayLink = "https://lxsvydiyzeavdqbjxkpp.supabase.co/storage/v1/object/public/releases/queless-arm64-release.apk";

  const scrollToCTA = () => {
    ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const vaalSuburbs = [
    "Vanderbijlpark", "Vereeniging", "Sasolburg", "Meyerton", 
    "Sharpeville", "Sebokeng", "Boipatong", "Evaton",
    "Three Rivers", "Arcon Park", "Falcon Ridge", "Bedworth Park"
  ];

  return (
    <>
      <ComingSoonModal isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 lg:pr-12 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight mb-6">
                Skip the line.<br />
                <span className="text-secondary">Bring the party home.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Premium alcohol and local food favorites delivered cold and fast. From a cold one with the gents to Mzansi's finest flavors, Queless delivers the good times to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToCTA}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  Get the App
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 mt-16 lg:mt-0 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto w-72 h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                {/* Screen Content Placeholder */}
                <div className="bg-black h-full w-full overflow-hidden relative flex items-center justify-center p-8">
                  <div className="flex flex-col items-center">
                    <img src="/logo-removebg.png" alt="Queless App" className="w-40 h-40 object-contain mb-4 animate-pulse" />
                    <div className="text-white font-bold text-xl tracking-widest uppercase">QueLess</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 -right-12 lg:-right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 -left-12 lg:-left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Premium Mzansi Delivery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We've partnered with the best local spots and top-tier brands to bring you a world-class on-demand experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Beer className="w-8 h-8 text-secondary" />}
              title="Cold Ones, On Demand"
              description="From Castle and Black Label to KWV and Nederburg. Delivered cold, fast, and 100% legal."
            />
            <FeatureCard 
              icon={<Utensils className="w-8 h-8 text-secondary" />}
              title="Local Flavors & Hidden Gems"
              description="Craving the best local food? We partner with Mzansi's favorite restaurants and neighborhood spots."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-secondary" />}
              title="Secure Local Payments"
              description="Safe and easy checkout with Ozow Instant EFT and Paystack. Your security is our priority."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Get what you love in four simple, secure steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <StepCard 
              number="1"
              title="Download & Verify"
              description="Get the app and verify your age. We strictly follow provincial liquor laws."
            />
            <StepCard 
              number="2"
              title="Pick Your Favorites"
              description="Browse a wide selection of beers, wines, spirits, and local food favorites."
            />
            <StepCard 
              number="3"
              title="Secure Checkout"
              description="Pay instantly and safely via Ozow or Paystack. No cash needed."
            />
            <StepCard 
              number="4"
              title="Rapid Delivery"
              description="Track your order in real-time as we bring the party to your doorstep."
            />
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Now Serving the Vaal Triangle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're rapidly expanding to bring the party to your doorstep across the Vaal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {vaalSuburbs.map((suburb) => (
              <div key={suburb} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-secondary/5 transition-colors border border-transparent hover:border-secondary/20">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="font-semibold text-gray-700">{suburb}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-bold text-2xl">Fast</div>
              <div className="text-gray-500 text-sm">Rapid delivery</div>
            </div>
            <div>
              <CreditCard className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-bold text-2xl">Secure</div>
              <div className="text-gray-500 text-sm">Local EFT & Card</div>
            </div>
            <div>
              <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-bold text-2xl">18+</div>
              <div className="text-gray-500 text-sm">Legal compliance</div>
            </div>
            <div>
              <Smartphone className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-bold text-2xl">Mzansi</div>
              <div className="text-gray-500 text-sm">100% Local focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to skip the line?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join the Queless community today and enjoy premium delivery that's built for Mzansi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setIsComingSoonOpen(true)}
              className="bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Get on App Store
            </button>
            <a 
              href={googlePlayLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl hover:scale-105"
            >
              Download APK
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
