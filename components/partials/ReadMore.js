import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Utilities } from "../../context/UtilContext";
import DefaultModal from "../ui/DefaultModal";

export default function ReadMore({ data }) {
  const { setModal } = useContext(Utilities);
  const openHandle = () => {
    setModal("default", true);
  };

  const closeHandler = () => {
    setModal("default", false);
  };
  return (
    <div>
      <DefaultModal>
        <div className="p-1 ">
          <div className="flex flex-col text-3xl cursor-pointer text-red-400">
            <AiOutlineCloseCircle onClick={closeHandler} className="self-end" />
          </div>

          <fieldset className="border-stone-400 border p-2 ">
            <legend className="p-1 ">Título:</legend>
            <p className="uppercase font-bold font-Jura text-xl text-center p-2 my-1">
              {data.title}
            </p>
          </fieldset>

          <fieldset className="border-stone-400 border p-2 ">
            <legend className="p-1 ">Resume:</legend>

            <p className="font-Jura text-justify text-lg font-medium">
              {data.resume}
            </p>
          </fieldset>

          <fieldset className="border-stone-400 border p-2 ">
            <legend className="p-1 ">Periodo:</legend>
            <p className="p-2 font-Jura text-justify text-lg font-medium">
              {data.year}
            </p>
          </fieldset>
        </div>
      </DefaultModal>
    </div>
  );
}
