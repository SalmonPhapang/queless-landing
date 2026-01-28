import React from 'react';
import { motion } from 'framer-motion';
import { X, Store, MapPin } from 'lucide-react';

interface PartnerModalProps {
  onClose: () => void;
}

export function PartnerModal({ onClose }: PartnerModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, this will connect to Supabase
    console.log("Partner form submitted");
    alert("Thanks for your interest! We'll be in touch soon.");
    onClose();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-primary">Become a Partner</h2>
            <p className="text-gray-500 text-sm mt-1">Join the Queless network today</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <div className="relative">
              <Store className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                required 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                placeholder="e.g. Joe's Burgers / Sandton Liquors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all">
              <option>Restaurant / Fast Food</option>
              <option>Liquor Store</option>
              <option>Grocery Store</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                placeholder="082 123 4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
              placeholder="partner@business.co.za"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City / Area</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                placeholder="e.g. Cape Town City Bowl"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-secondary hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-secondary/20 transition-all transform hover:scale-[1.02] mt-2"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
