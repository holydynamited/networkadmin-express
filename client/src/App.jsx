import Header from './components/Header'

import './App.css'
import { useState} from 'react'
import { routersData } from './data/routers'
import StatsBar from './components/StatsBar'
import RouterCard from './components/RouterCard'
import RouterList from './components/RouterList'
import RouterModal from './components/RouterModal'
function App() {

  
  const [routers, setRouters] = useState(routersData)
  
      const handleDelete = (id) => {
     
      setRouters(routers.filter(router => router._id !== id));
    }
  const total = routers.length;
  const active = routers.filter(r => r.status === 'active').length;
  const value = routers.reduce((sum, r) => sum + Number(r.price), 0)

  const [selectedRouter, setSelectedRouter] = useState(null)

 const handleEditClick = (router) => {
    setSelectedRouter(router) 
  }

  
  const handleCloseModal = () => {
    setSelectedRouter(null)
  }

  return (
    <>
     <Header/>
     
      <StatsBar
      total={total}
      active={active}
      value={value}/>
    <RouterList
        routers={routers}
        onDelete={handleDelete}
        onEdit={handleEditClick} 
      />
      {selectedRouter && (
        <RouterModal 
           active={!!selectedRouter}
           setActive={handleCloseModal}
           router={selectedRouter}  
        />
      )}
     
    </>
  )
}

export default App
