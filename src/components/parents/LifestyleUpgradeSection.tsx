import React from 'react';

const LifestyleUpgradeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762587279925_b60dba97.webp" 
              alt="Successful graduate with home" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-6">
              A Better Life, Higher Earnings, Greater Stability
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              KCIC graduates typically earn <span className="font-bold text-[#B99750]">up to 10x higher salaries</span> compared to the Indian graduate average.
            </p>
            <p className="text-lg text-gray-700">
              Many progress to long-term settlement overseas, with improved lifestyle, home ownership, and financial independence. See your child build a successful future abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleUpgradeSection;
