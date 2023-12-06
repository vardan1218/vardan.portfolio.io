import React from 'react';

const WhyHireMeSection = () => {
  return (
    <div className='flex md:flex-row flex-col mb-[500px] justify-around'>
       <div className='flex flex-col'>
         <div className='text-4xl font-extrabold mt-[100px]'>Why Hire Me?</div>
         <p className='mt-10 text-slate-500 font-sans w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse luctus mi. consectetur 
           <br />laoreet tortor non, 
          semper arcu. Duis sit amet mi.</p>
          <button className='w-28 h-12 bg-blue-700 mt-10 rounded-lg text-white'>Hire Me</button>
       </div>

       <div className='flex flex-col'>
         
           <div className='mt-[150px] w-5 h-5 bg-blue-700 rounded-full'></div>
         
       </div>
    </div>
  );
};

export default WhyHireMeSection;
