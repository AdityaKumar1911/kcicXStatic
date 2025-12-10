"use client";

import React, { useEffect, useRef } from 'react';
const partners = [{
  name: 'Pearson UK',
  logo: '/images/Universities logo/Pearson_Logo (1).jpg'
}, {
  name: 'ATHE UK',
  logo: '/images/Universities logo/ATHE Logo.png'
}, {
  name: 'RMIT',
  logo: '/images/Universities logo/RMIT.png'
}, {
  name: 'UTS',
  logo: '/images/Universities logo/UTS.png'
}, {
  name: 'University of Essex',
  logo: '/images/Universities logo/essex-logo (1).png'
}, {
  name: 'University of Sunderland',
  logo: '/images/Universities logo/sunderland.png'
}, {
  name: 'Ulster University',
  logo: '/images/Universities logo/Ulster.png'
}, {
  name: 'Weltec Whitireia',
  logo: '/images/Universities logo/Whiteria black and white.png'
}, {
//   name: 'Sheffield Hallam',
//   logo: '/images/Universities logo/university-logo_white.png'
// }, {
  name: 'Oxford Brookes',
  logo: '/images/Universities logo/Colour.png'
}, {
  name: 'Elmhurst University',
  logo: '/images/Universities logo/elmhurst-logo.png'
}, {
  name: 'Lewis University',
  logo: '/images/Universities logo/Lewis University Logo.png'
}];
export default function PartnersScrollSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let scrollInterval: NodeJS.Timeout;
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 20);
    };
    startScroll();
    return () => clearInterval(scrollInterval);
  }, []);
  return <section className="py-8 bg-gradient-to-br from-[#FAF3E0] to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1B3A] mb-2">Our Collaboration & Partnerships</h2>

          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Partnering with world-renowned institutions to deliver internationally recognized qualifications
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="overflow-x-hidden scrollbar-hide pb-4">
            <div className="flex gap-6 px-4" style={{
            width: 'max-content'
          }}>
              {[...partners, ...partners].map((partner, idx) => <div key={`${partner.name}-${idx}`} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center flex-shrink-0" style={{
              width: '200px',
              height: '120px'
            }}>

                  <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}