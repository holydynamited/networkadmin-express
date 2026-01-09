import React from 'react'
import RouterCard from './RouterCard'
import { useState } from 'react'
import { routersData } from '../data/routers.js' // Проверь путь к файлу

const RouterList = () => {

    const [routers, setRouters] = useState(routersData)

    const handleDelete = (id) => {
   
    setRouters(routers.filter(router => router._id !== id));
  }




  return (
    <div className='mt-15 mx-auto w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-30 gap-y-20 p-10'>
      {routers.map((router) => ( 
        <RouterCard
          key={router._id}
          id={router._id}           
          name={router.name}         
          model={router.model}       
          status={router.status}
          price={router.price}
          ipAdress={router.ipAddress} 
          location={router.location}
          onDelete={handleDelete}
        />
      ))} 
    </div>
  )
}

export default RouterList