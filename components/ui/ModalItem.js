import React, { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ModalItem({ setClose, data }) {
  const closeHandle = () => {
    const mod = document.getElementById("mod");
    mod.classList.remove("modal-in");
    mod.classList.add("modal-out");
    setTimeout(() => {
      setClose((prev) => ({ ...prev, ["second"]: false }));
      setClose((prev) => ({ ...prev, ["prime"]: false }));
    }, 400);
  };

  return (
    <div className="flex flex-col font-Jura ">
      <div className="self-end text-2xl text-red-400">
        <AiOutlineCloseCircle
          className="cursor-pointer"
          onClick={closeHandle}
        />
      </div>
      <fieldset className="my-1 border border-slate-400 p-2">
        <legend>Titulo</legend>
        <p className="font-bold text-xl text-center text-slate-300 ">
          {data.title}
        </p>
      </fieldset>

      <fieldset className="my-1 border border-slate-400 p-2 text-justify">
        <legend>Resume</legend>
        <p className="text-slate-300 font-medium">{data.resume}</p>
      </fieldset>
      <fieldset className="my-1 border border-slate-400 p-2">
        <legend>Ano</legend>
        <p className="text-slate-300 font-medium">{data.year}</p>
      </fieldset>
    </div>
  );
}
