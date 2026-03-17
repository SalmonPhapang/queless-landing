import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Apple, Bell } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[2.5rem] w-full max-w-md p-8 shadow-2xl relative overflow-hidden text-center"
          >
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>
            
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>

            <div className="mt-4 mb-6 inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-3xl text-primary shadow-inner">
              <Apple size={40} />
            </div>

            <h2 className="text-3xl font-extrabold text-primary mb-3">Coming Soon!</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're putting the final touches on our iOS app to ensure you get the most premium Mzansi experience.
            </p>

            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 text-primary font-bold mb-2">
                  <Bell size={20} />
                  <span>Stay Tuned</span>
                </div>
                <p className="text-sm text-gray-500">
                  Follow our socials for the official App Store launch date and exclusive launch promos!
                </p>
              </div>

              <button 
                onClick={onClose}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl transition-all"
              >
                Got it, thanks!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
