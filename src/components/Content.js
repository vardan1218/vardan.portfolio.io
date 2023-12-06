import React from 'react';

const Content = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mt-10 md:mt-15'>
      <div className='flex flex-col items-start w-full md:w-1/2 px-4'>
        <div className='text-2xl font-serif font-semibold text-slate-400 mb-2'>Hello!</div>
        <h1 className='text-4xl md:text-8xl font-audiowide tracking-wide mb-4'>I'm Vardan</h1>
        <p className='text-xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
          Software developer with the passion to get better each and every day and learning new technology every time!
        </p>
        <button className='w-36 h-12 md:w-40 md:h-16 bg-blue-700 rounded-2xl mt-8 text-lg md:text-xl text-white'>Contact me</button>
      </div>

      <div className='w-full md:w-1/2 h-auto mt-4 md:mt-0'>
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 1 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(238, 205, 163)' }}></stop>
            <stop offset="100%" style={{ stopColor: 'rgb(239, 98, 159)' }}></stop>
          </linearGradient>
        </defs>
        
        <path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z"></animate>
        </path>
        
        </svg>
      </div>
    </div>
  )
}

export default Content;
