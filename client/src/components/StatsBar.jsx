import React from 'react'

const StatsBar = ({total, active,value}) => {
  return (
    <div className='
     mt-10  h-20  bg-[#1e1f24]/80 rounded-xl  mx-auto max-w-7xl flex items-center
      transition-all duration-300 border border-transparent hover:border-[#dad8d8]  '>
        
        <div className='ml-20 flex gap-5 text-white  text-lg '>
            <p>Total: {total}</p> 
            <p>Value: ${value}</p>
            <p>Active: {active}</p>

        </div>
     
    </div>
  )
}

export default StatsBar
