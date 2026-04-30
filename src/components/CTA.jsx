import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container-wide">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Experience Premium Laundry Service Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of happy customers in Gurugram. Book your first pickup and enjoy
            50% discount with code SHINY50
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-soft-lg transition-all hover:scale-105">
              Book Pickup Now
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 px-10 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Download App
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-12 border-t border-blue-500">
            <div className="text-left">
              <p className="text-blue-100 text-sm">🛡️ 100% Satisfaction</p>
              <p className="text-sm font-semibold">Money Back Guarantee</p>
            </div>
            <div className="w-px h-8 bg-blue-500"></div>
            <div className="text-left">
              <p className="text-blue-100 text-sm">⚡ Quick Service</p>
              <p className="text-sm font-semibold">Next Day or Same Day</p>
            </div>
            <div className="w-px h-8 bg-blue-500"></div>
            <div className="text-left">
              <p className="text-blue-100 text-sm">📱 Easy Tracking</p>
              <p className="text-sm font-semibold">Real-time Updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
