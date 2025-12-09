import Layout from './Layout';

const partners = [
  { name: 'Pearson UK', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624136677_b20c8609.webp' },
  { name: 'ATHE UK', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624137521_a32181c7.webp' },
  { name: 'TAFE NSW', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624138306_77bd0c05.webp' },
  { name: 'RMIT', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624139236_39f55dd9.webp' },
  { name: 'UTS', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624140119_a91ead00.webp' },
  { name: 'University of Essex', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624147425_93ed43ed.webp' },
  { name: 'University of Sunderland', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624148177_fc12169b.webp' },
  { name: 'Haaga Helia', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624148934_b4fa2b4a.webp' },
  { name: 'Metropolia', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624149696_b86e6cfe.webp' },
  { name: 'Ulster University', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624150458_aa1c204e.webp' },
  { name: 'Weltec Whitireia', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624158838_115d7665.webp' },
  { name: 'Sheffield Hallam', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624159657_362c5032.webp' },
  { name: 'Oxford Brookes', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624160763_8de8f240.webp' },
  { name: 'Elmhurst University', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624161678_515a8b00.webp' },
  { name: 'Lewis University', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760624162482_ee3cb3d8.webp' }
];

export default function PartnersScrollSection() {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-[#FAF3E0] to-white overflow-hidden">
      <Layout>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-2">
            Our Collaboration & Partnerships
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
            Partnering with world-renowned institutions to deliver internationally recognized qualifications
          </p>
        </div>
      </Layout>

      {/* Full-width scrolling section */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-infinite">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={`${partner.name}-${idx}`} className="flex-shrink-0 w-48 sm:w-56 md:w-64 mx-3 sm:mx-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-24 sm:h-28 md:h-32">
                <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-16 sm:h-18 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
