import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import RouterCard from "./components/router/RouterCard";
import RouterList from "./components/router/RouterList";
import RouterModal from "./components/modals/RouterModal";
import CreateModal from "./components/modals/CreateModal";

import { useEffect, useState } from "react";

import "./App.css";

import {
  fetchRouters,
  createRouter,
  deleteRouter,
  updateRouter,
} from "./api/routers";

function App() {
  const [routers, setRouters] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const total = routers.length;
  const active = routers.filter((r) => r.status === "active").length;
  const value = routers.reduce((sum, r) => sum + Number(r.price), 0);


  
  const toggleModal = () => {
    setCreateModalOpen(true);
  };

  const handleEditClick = (router) => {
    setSelectedRouter(router);
  };

  const handleCloseModal = () => {
    setSelectedRouter(null);
  };

  const [selectedRouter, setSelectedRouter] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

 

  const loadData = async () => {
    try {
      setLoading(true);

      const data = await fetchRouters();

      setRouters(data.routers || []);
    } catch (error) {
      console.error("Failed to load routers: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


const handleCreate = async (newRouterData) => {
    try {
      const response = await createRouter(newRouterData)

      const newRouter = response.router
      setCreateModalOpen(false)

      setRouters ((prev)=>[...prev, newRouter])
    } catch (error) {
      console.error('Problem with router creating ',error)
      alert('Problem with router creating')
    }
    
  }


  const handleUpdate = async (id ,newRouterData) => {
    try {
      const response = await updateRouter(id,newRouterData)

      const newRouter = response.router
      handleCloseModal(null)

      setRouters((prevRouters) => 
        prevRouters.map((r) => (r._id === id ? newRouter : r))
      );
    } catch (error) {
      console.error('Problem with router updating ',error)
      alert('Problem with router updating')
    }
    
  }


  const handleDelete = async (id) => {
    try {
      await deleteRouter(id);
      
      setRouters((prevRouters) =>
        prevRouters.filter((router) => router._id !== id)
      );
    } catch (error) {
     console.error('Problem with router deleting ', error ) 
     alert('Problem with router deleting ')
    }
  }

  


  return (
    <div className="min-h-screen pb-60">
      <Header />

      <StatsBar
        total={total}
        active={active}
        value={value}
        toggleModal={toggleModal}
      />
      <RouterList
        routers={routers}
        onDelete={handleDelete}
        onEdit={handleEditClick}
      />
      {selectedRouter && (
        <RouterModal
          key={selectedRouter._id}
          active={!!selectedRouter}
          setActive={handleCloseModal}
          router={selectedRouter}
         handleUpdate={handleUpdate}
        />
      )}

      {isCreateModalOpen && <CreateModal setActive={setCreateModalOpen}
      handleCreate={handleCreate} />}
    </div>
  );
}

export default App;
