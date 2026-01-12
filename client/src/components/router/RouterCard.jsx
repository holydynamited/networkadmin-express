import React from "react";
import routerImg from "../../assets/routerImg.jpg";

const RouterCard = ({
  id,
  name,
  model,
  status,
  price,
  ipAdress,
  location,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="group mx-auto flex h-[320px] w-[450px] flex-col rounded-xl border border-transparent bg-[#1e1f24]/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#dad8d8] hover:shadow-xl">
      <div className="flex items-start gap-4 mb-2">
        <img
          className="h-[60px] w-[80px] shrink-0 rounded-lg object-contain bg-black/20"
          src={routerImg}
          alt="Router"
        />

        <div className="flex flex-col w-full min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h3 className="m-0 text-[20px] font-bold text-white truncate" title={name}>
              {name}
            </h3>

            <div className="shrink-0">
              {status === "active" ? (
                <button className="h-[30px] px-3 rounded-xl bg-green-600 text-white text-sm font-medium">
                  active
                </button>
              ) : (
                <button className="h-[30px] px-3 rounded-xl bg-red-800 text-white text-sm font-medium">
                  unactive
                </button>
              )}
            </div>
          </div>

          <p className="m-0 text-[16px] text-[grey] truncate" title={model}>
            {model}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <p className="text-[20px] font-bold text-green-400 m-0">$ {price}</p>

        <div className="flex">
          <p className="text-[16px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded m-0">
            {ipAdress}
          </p>
        </div>

        <p className="text-[16px] text-[grey] m-0">{location}</p>
      </div>

      <div className="flex justify-between gap-4 mt-auto">
        <button
          onClick={() => onEdit(id)}
          className="flex-1 mt-2 sm:mt-0 inline-flex items-center justify-center rounded-md text-sm font-medium border border-zinc-800 hover:bg-zinc-800 h-9 px-4 py-2 transition-colors text-zinc-50"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(id)}
          className="flex-1 mt-2 sm:mt-0 inline-flex items-center justify-center rounded-md text-sm font-medium border border-zinc-800 hover:bg-zinc-800 h-9 px-4 py-2 transition-colors text-zinc-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RouterCard;