import React from 'react'
import RouterCard from './RouterCard'


const RouterList = ({routers, onDelete,onEdit}) => {

   



  return (
    <div className='mt-10 mx-auto w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-30 gap-y-20 p-10'>
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
          onDelete={onDelete}
          onEdit={() => onEdit(router)}
        />
      ))} 
    </div>
  )
}

export default RouterList