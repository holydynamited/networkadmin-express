import React from 'react'
import routerImg from '../assets/routerImg.jpg'

const RouterCard = ({id,name, model,status, price, ipAdress, location, onDelete}) => {
  return (
    <div className=" mx-auto flex h-[430px] w-[300px] flex-col gap-[16px] rounded-xl border border-transparent bg-[#1e1f24]/80 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#dad8d8]">
      <img
        className="mx-auto h-[80px] w-[90px] rounded-lg object-contain"
        src={routerImg}
        alt="Router"
      />

      <p className="m-0 text-[16px] font-bold text-white">
        {name}
      </p>

      <p className="m-0 text-[16px] text-[grey]">
        {model}
      </p>

      {status === 'active' ?(
        <button className="ml-0 h-[30px] w-[80px] rounded-xl bg-green-600 text-white">
        active
      </button>
      ):(
        <button className="ml-0 h-[30px] w-[80px] rounded-xl bg-red-800 text-white">
        unactive
      </button>
          )}
          
      <p className="text-[16px] text-green-300">
        $ {price}
      </p>

      <button className="w-[95px] rounded-xl bg-[#565656] text-[16px] text-gray-300">
        {ipAdress}
      </button>

      <p className="text-[16px] font-bold text-white">
        {location}
      </p>

      <div className="flex justify-between">
        <button className="cursor-pointer rounded-[8px] bg-[#34353c] p-[7px] text-gray-300 transition-all duration-300 hover:bg-[#41424b]">
          Edit
        </button>

        <button onClick={()=>onDelete(id)} className="cursor-pointer rounded-[8px] bg-[#34353c] p-[7px] text-gray-300 transition-all duration-300 hover:bg-[#41424b]">
          Delete
        </button>
      </div>
    </div>
  )
}

export default RouterCard 