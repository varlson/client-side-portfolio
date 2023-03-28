import { data } from "../../test/data";
import React, { useContext } from "react";
import { Utilities } from "../../context/UtilContext";
import DefaultModal from "../ui/DefaultModal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Contacts() {
  const { setModal } = useContext(Utilities);
  const openHandle = () => {
    setModal("default", true);
  };

  const closeHandler = () => {
    setModal("default", false);
  };
  return (
    <div className="px-2 bg-slate-400 h-screen">
      <div className="grid">
        <p className="justify-self-end md:justify-self-start text-right text-xl px-2 pt-2 font-Jura border-b  border-white text-white">
          Contato
        </p>
      </div>

      <div className="my-5 p-3 grid ">
        <div className="w-full p-2 md:p-3 md:w-6/12 m-auto shadow-lg grid grid-cols-12">
          <form className=" gap-2 col-span-12 grid grid-cols-12">
            <input
              placeholder="seu nome"
              className="placeholder:font-Jura my-1 col-span-12 py-2 text-center rounded-md"
              type="text"
              name=""
              id=""
            />

            <input
              placeholder="exemple@email.com"
              className=" placeholder:font-Jura my-1 col-span-12 py-2 text-center rounded-md"
              type="email"
              name=""
              id=""
            />
            <input
              placeholder="assunto"
              className="placeholder:font-Jura my-1 col-span-12 py-2 text-center rounded-md"
              type="email"
              name=""
              id=""
            />

            <textarea
              className="text-justify p-2 font-Jura rounded-md my-1 col-span-12"
              name=""
              id=""
              rows="5"
            ></textarea>
            <div className="col-span-12 flex flex-col">
              <button className="self-end rounded-md text-slate-200 px-4 bg-slate-500 py-1">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="my-10 p-3 grid ">
        <div className="p-3 w-full md:w-6/12 m-auto shadow-lg grid grid-cols-12 justify-center">
          <div className="items-center flex font-Jura col-span-12 md:col-span-6">
            <span className="p-1 text-xl">
              <BsTelephone />
            </span>
            <span className="p-1">+55 31 994204345</span>
          </div>

          <div className="items-center flex  col-span-12 md:col-span-6">
            <span className="p-1 text-xl">
              <MdAlternateEmail />
            </span>
            <span className="p-1">varlson@samania.com</span>
          </div>
          <div className="items-center flex  col-span-12 md:col-span-6">
            <span className="p-1 text-xl">
              <FaInstagram />
            </span>
            <span className="p-1">@varlson</span>
          </div>
          <div className="items-center flex  col-span-12 md:col-span-6">
            <span className="p-1 text-xl">
              <CiFacebook />
            </span>
            <span className="p-1">facebook.com/varlson</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
