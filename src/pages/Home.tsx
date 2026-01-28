import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Beer, Utensils, Truck } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { StepCard } from '../components/StepCard';

export const Home: React.FC = () => {
  return (
    <>
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
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
                Your Favorite<br />
                <span className="text-secondary">Drinks & Eats, Delivered.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                South Africa's premier on-demand delivery service. From a cold Castle to a hot meal, Queless brings the good times to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
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
                    <img src="/logo-removebg.png" alt="Queless App" className="w-40 h-40 object-contain mb-4" />
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Queless?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're bringing the bottle store and the bistro to your doorstep. 
              The fastest way to get your alcohol and food essentials in SA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Beer className="w-8 h-8 text-secondary" />}
              title="Alcohol Delivery"
              description="Wide selection of wines, beers, and spirits delivered cold and fast to your door."
            />
            <FeatureCard 
              icon={<Utensils className="w-8 h-8 text-secondary" />}
              title="Local Flavors"
              description="Order from the best local restaurants and food spots in your area. Mzansi's favorites."
            />
            <FeatureCard 
              icon={<Truck className="w-8 h-8 text-secondary" />}
              title="Fast & Reliable"
              description="Real-time tracking and quick delivery across major South African cities."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From craving to comfort in four simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <StepCard 
              number="1"
              title="Download App"
              description="Get Queless on iOS or Android and create your account."
            />
            <StepCard 
              number="2"
              title="Browse & Select"
              description="Choose from top local liquor stores and restaurants."
            />
            <StepCard 
              number="3"
              title="Order & Pay"
              description="Secure payment and real-time order tracking."
            />
            <StepCard 
              number="4"
              title="Enjoy"
              description="Fast delivery to your door. Sip, eat, and relax."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready for the weekend?</h2>
          <p className="text-xl opacity-90 mb-10">
            Download Queless today and get R50 off your first alcohol or food order.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};
