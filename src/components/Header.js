import React from 'react'

//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//
//Personal portfolio access token//

const Header = () => {
  return (
    <div>
        <div className=' flex items-center justify-start mt-5 font-serif text-lg font-semibold text-slate-500'> 
        <img src={process.env.PUBLIC_URL + '/logo.jpeg'}  className='w-24 h-24'/>
            <a href='#' className='mx-7 px-10 hover:text-slate-400'>Home </a>
            <a href='#' className='mx-7 px-10 hover:text-slate-400'>About </a>
            <a href='#' className='mx-7 px-10 hover:text-slate-400'>Portfolio </a>
            <a href='https://medium.com/@vardanwadhwa72' target='_blank' className='mx-7 px-10 hover:text-slate-400'>Blog </a>
        </div>
        
    </div>
  )
}

export default Header