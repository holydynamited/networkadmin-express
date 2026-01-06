import React from 'react'

const StatsBar = () => {
  return (
    <div className='mt-10 w-00 h-20 bg-[#1e1f24]/80 rounded-xl  mx-auto max-w-7xl flex items-center  '>
        <div className='ml-20 flex gap-5 text-white  text-lg '>
            <p>Total: 12</p> 
            <p>Value: $2228</p>
            <p>Active: 8</p>

        </div>
     
    </div>
  )
}

export default StatsBar
