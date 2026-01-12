import React from "react";

const StatsBar = ({ total, active, value, toggleModal }) => {
  return (
    <div
      className="
      mt-10 h-20 mx-auto max-w-7xl rounded-xl
      bg-[#1e1f24]/80 backdrop-blur-sm
      border border-transparent hover:border-[#dad8d8]
      flex items-center justify-between px-10  /* <--- ГЛАВНЫЕ ИЗМЕНЕНИЯ */
      transition-all duration-300
    "
    >
      <div className="flex gap-8 text-white text-lg font-medium">
        <p className="flex gap-2">
          <span className="text-gray-400">Total:</span> {total}
        </p>
        <p className="flex gap-2">
          <span className="text-gray-400">Value:</span> ${value}
        </p>
        <p className="flex gap-2">
          <span className="text-gray-400">Active:</span>
          <span className="text-green-400">{active}</span>
        </p>

        <button
          className="
            bg-white text-black 
            px-5 py-2 rounded-lg font-semibold text-sm
            hover:bg-gray-200 transition-colors
        "
          onClick={toggleModal}
        >
          Create Router
        </button>
      </div>

      <div class="mt-2 flex gap-2">
        <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
          <input
            placeholder="Find router"
            className="col-span-3 flex h-9 w-full rounded-md border border-zinc-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-0"
          />
        </div>

        <button
          className="
            bg-white text-black 
            px-5 py-2 rounded-lg font-semibold text-sm
            hover:bg-gray-200 transition-colors
        "
        >
          Find Router
        </button>
      </div>
    </div>
  );
};

export default StatsBar;
