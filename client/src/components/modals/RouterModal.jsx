import React from 'react'

const RouterModal = ({ active, setActive }) => {
  if (!active) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setActive(false)}
    >
      <div 
        className="z-50 w-full max-w-lg gap-4 border border-zinc-800 bg-[#1e1f24] p-6 shadow-lg sm:rounded-xl text-zinc-50 animate-zoom-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight">Edit Router</h2>
          <p className="text-sm text-zinc-400">Enter new details for the router.</p>
        </div>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium text-zinc-400">Name</label>
            <input 
              placeholder="Enter new name"
              className="col-span-3 flex h-9 w-full rounded-md border border-zinc-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium text-zinc-400">Model</label>
            <input 
              placeholder="Enter new model"
              className="col-span-3 flex h-9 w-full rounded-md border border-zinc-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium text-zinc-400">IP</label>
            <input 
              placeholder="Enter new IP address"
              className="col-span-3 flex h-9 w-full rounded-md border border-zinc-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium text-zinc-400">Price</label>
            <input 
              type="number"
              placeholder="Enter new price"
              className="col-span-3 flex h-9 w-full rounded-md border border-zinc-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            />
          </div>
        </div>
      
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button 
            onClick={() => setActive(false)}
            className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-md text-sm font-medium border border-zinc-800 hover:bg-zinc-800 h-9 px-4 py-2 transition-colors"
          >
            Cancel
          </button>
          
          <button 
            onClick={() => setActive(false)} 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-zinc-50 text-zinc-900 hover:bg-zinc-200 h-9 px-4 py-2 transition-colors"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default RouterModal