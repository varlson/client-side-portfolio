import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import MobileSide from "../partials/MobileSide";
import { Aboutico, Contactico, Homeico, Serviceico } from "../partials/Icons";
function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    var side = document.getElementById("side");
    if (open) {
      side.style.left = 0 + "px";
    } else {
      side.style.left = -70 + "px";
    }
  }, [open]);

  return (
    <div className="grid grid-cols-12 h-screen bg-slate-400">
      <div className="md:hidden z-20 left-0.5 mt-5 w-1/12 fixed">
        <MobileSide open={open} setOpen={setOpen} />
      </div>

      <div
        id="side"
        className="transition-all ease-in-out delay-150 md:hidden z-20 w-16 h-[calc(100%-160px)] rounded-tr-md rounded-br-md bg-black fixed mt-20"
      >
        <div className="bg-red-40 h-full grid gap-4 content-center">
          <a href="#home_page">
            <Homeico />
          </a>

          <a href="#about">
            <Aboutico />
          </a>

          <a href="#contact">
            <Contactico />
          </a>

          <a href="#services">
            <Serviceico />
          </a>
        </div>
      </div>

      <div className="hidden md:block bg-red-400 md:bg-transparent col-span-6  relative">
        <div className="transparent absolute top-0 left-0 right-0 bottom-0"></div>

        <div className="h-full font-Jura grid">
          <div className=" text-center place-self-center transparent10 rounded-md p-4 text-white">
            <p className="text-xl">Olá, eu sou</p>
            <p className="text-6xl">SULEIMANE</p>
          </div>
        </div>
      </div>

      <div className="grid  col-span-12  md:col-span-6  relative">
        <div className="z-10 transparent absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="md:hidden z-0 absolute top-0 right-0 left-0 bottom-0 m-auto ">
          <div className="z-0 grid h-full text-center place-self-center  rounded-md p-4 text-white">
            <div className="place-self-center transparent10 p-4 rounded-md">
              <p className="text-xl">Olá, eu sou</p>
              <p className="text-6xl">SULEIMANE</p>
            </div>
          </div>
        </div>
        <img
          className="object-cover self-center m-auto w-9/12"
          src="welcome.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
