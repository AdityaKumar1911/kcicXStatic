import React from 'react';

const SafeTransitionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762587278379_ad133d2d.webp" 
              alt="Students traveling abroad together" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-6">
              Students Travel Abroad Together as a Group
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              When students transfer overseas, they travel as a class group. This ensures safety, comfort, and emotional support during the transition.
            </p>
            <p className="text-lg text-gray-700">
              They start their international life with familiar friends, making the journey enjoyable and stress-free for both students and parents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeTransitionSection;
