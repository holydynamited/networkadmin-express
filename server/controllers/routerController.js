const Router = require('../models/Router')


const getAllRouters = async (req, res)=>{
    try{
        const routers = await Router.find()
        res.status(200).json({routers})

    } catch(error){
        res.status(500).json({message:error.message})
    }
}


const addRouter = async (req, res)=>{
    const router = new Router(req.body);
    try{
        await router.save();
        res.status(201).json({router})
    } catch (error){
        res.status(400).json({message:error.message})
    }
}

const updateRouter = async (req, res)=>{
   try{
    const { id: routerID } = req.params;
    const router = await Router.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!router) {
            return res.status(404).json({ message: `Router with ${id} is not found` });
        }

        res.status(200).json({ router });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteRouter = async (req, res)=>{
    const { id: routerID } = req.params;
    try{
        await Router.findOneAndDelete({ _id: routerID })
        res.status(200).json({ message: "Router deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports={
    getAllRouters,
    addRouter,
    deleteRouter,
    updateRouter
}