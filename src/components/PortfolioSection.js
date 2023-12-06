import React from 'react';

const PortfolioSection = () => {
  return (
    <section className="bg-black py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12 font-audiowide">Portfolio</h2>
        <div className="flex flex-col items-center justify-center">
          
          {/* Project Card */}
          <div className="w-full bg-blue-100 rounded-lg overflow-hidden shadow-lg">
            <img className="w-full object-cover" src={process.env.PUBLIC_URL + '/project.png'} alt="Project Name" style={{ height: '500px' }}/>
            <div className="flex flex-col justify-center p-6 bg-white">
              <h3 className="text-xl font-bold">Cycle By SOS</h3>
              <p className="text-gray-600 mt-2">
                An e-commerce project that i worked for as an intern in the company Novvum.io
              </p>
              <div className='flex justify-center'>
              <a href="https://www.cyclebysos.com/" target='_blank' className="inline-flex items-center justify-center w-28 h-12 rounded-lg inline-block bg-black mt-4 text-white">View Project</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
