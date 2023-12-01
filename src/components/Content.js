import React from 'react'

const Content = () => {
  
  return (
    <div>
      <div className='flex flex-col mt-40 items-start ml-40'>
       <div className=' text-2xl font-serif font-semibold text-slate-400 mb-[8px]'>Hello!</div>
       <h1 className='text-8xl font-audiowide tracking-wide mb-[6px]'>I'm vardan</h1>
       <p className='text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Software developer with the passion <br/>to get better each and every day
        <br/>and learning new technology everytime!</p>
        <button className='w-[150px] h-[60px] bg-blue-700 rounded-2xl mt-8 font-lg text-white text-xl'>Contact me</button>
      </div>
     </div>
  )
}

export default Content