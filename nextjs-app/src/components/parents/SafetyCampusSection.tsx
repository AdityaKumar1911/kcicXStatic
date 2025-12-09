export default function SafetyCampusSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-6">
              A Safe and Supportive Campus Environment
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              KCIC admits only 200–250 students each year, forming a focused and well-guided learning community. Students come from respectful family backgrounds and share similar values.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The campus is monitored 24/7 by professional security staff. We maintain a <span className="font-bold text-[#0B1B3A]">zero-tolerance</span> policy for bullying, harassment, or abuse.
            </p>
            <p className="text-lg text-gray-700">
              Your child&apos;s safety and wellbeing are our top priorities.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762587277592_987992bc.webp" 
              alt="Security monitoring campus" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
