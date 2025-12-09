import React from 'react';

const WorkVisaExperienceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-6">
                Post-Study Work Rights Guaranteed
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Graduates receive <span className="font-bold text-[#0B1B3A]">2 years of work visa abroad</span> after completing their degree (subject to meeting graduation requirements).
              </p>
              <p className="text-lg text-gray-700">
                This provides valuable international work experience and a pathway to permanent settlement.
              </p>
            </div>
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762587280709_2efbb619.webp" 
                alt="Graduate receiving work permit" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] p-8 rounded-lg border-2 border-[#B99750]">
            <h3 className="text-2xl font-bold text-white mb-4">Work While Studying at KCIC</h3>
            <p className="text-gray-300 mb-4">
              KCIC follows an applied learning model similar to Finland. Students study on campus 2.5 days per week and gain industry experience for the remaining time.
            </p>
            <p className="text-gray-300">
              This experience gives them a competitive advantage internationally.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] p-8 rounded-lg border-2 border-[#B99750]">
            <h3 className="text-2xl font-bold text-white mb-4">Part-Time Work Abroad</h3>
            <p className="text-gray-300 mb-4">
              Because KCIC students already have skill certifications and experience, they secure better part-time roles abroad.
            </p>
            <p className="text-gray-300">
              This advantage sets them apart from students who go directly after Class 12.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkVisaExperienceSection;
