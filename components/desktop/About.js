import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../test/data";
import { textSplitter } from "../../src/util";
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";
import ReadMore from "../partials/ReadMore";
import { Utilities } from "../../context/UtilContext";
import DefaultModal from "../ui/DefaultModal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ModalItem from "../ui/ModalItem";
function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [Open, setOpen] = useState({ prime: false, second: false });
  const [spand, setSpand] = useState({ prime: false, second: false });

  const openHandle = (option) => {
    if (option == 2) {
      setOpen((prev) => ({ ...prev, ["second"]: true }));
    } else {
      // setOpen(true);
      setOpen((prev) => ({ ...prev, ["prime"]: true }));
    }
    setTimeout(() => {
      var mod = document.getElementById("mod");
      mod.classList.remove("modal-out");
      mod.classList.add("modal-in");
    }, 100);
  };

  const [windowState, setWindow] = useState(false);
  const primeHandler = (option) => {
    var content = null;
    if (option == 1) {
      content = document.getElementById("prime");
    } else {
      content = document.getElementById("second");
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;

      if (option == 1) {
        setSpand((prev) => ({ ...prev, ["prime"]: false }));
      } else {
        setSpand((prev) => ({ ...prev, ["second"]: false }));
      }
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      if (option == 1) {
        setSpand((prev) => ({ ...prev, ["prime"]: true }));
      } else {
        setSpand((prev) => ({ ...prev, ["second"]: true }));
      }
    }
  };

  useEffect(() => {
    setWindow(true);
  }, []);

  return (
    <div className="px-2 bg-slate-400 h-screen overflow-hidden">
      <div className="grid">
        <p className="justify-self-end md:justify-self-start text-right text-xl px-2 pt-2 font-Jura border-b  border-white text-white">
          Sobre
        </p>
      </div>

      <div className="md:w-9/12 m-auto">
        <div className="font-Jura pb-10 pt-2 px-10 border-b border-slate-300">
          <div>
            <h2 className="text-center uppercase mb-2 text-xl md:text-2xl">
              {" "}
              {data.name}{" "}
            </h2>
            {windowState && (
              <Slider {...settings}>
                {data.info.map((item, index) => (
                  <div>
                    <p className="text-justify md:text-xl">{item}</p>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
        <div className="mt-6 grid grid-cols-12">
          <div className="font-Jura shadow-md shadow-slate-500 p-2 mb-5 bg-slate-400 col-span-12 md:col-span-9 rounded-md md:col-start-3">
            <p className="p-2 my-1 font-medium uppercase md:text-xl">
              Áreas de Interesses
            </p>

            <ul className=" list-inside">
              {data.interest.map((item, index) => (
                <li className="px-4 font-small md:text-justify my-1">{item}</li>
              ))}
            </ul>
          </div>

          <div className="font-Jura p-2 shadow-md shadow-slate-500 col-span-12 md:col-span-9 rounded-md">
            <p className="border-b border-slate-300 my-1 text-end font-medium uppercase md:text-xl">
              Sobre as Pesquisas
            </p>
            <div className=" my-1">
              <p className="my-1 font-bold md:font-medium md:text-lg">
                {data.search[0].title}
              </p>

              <button
                onClick={(e) => {
                  openHandle(1);
                }}
                className=" md:hidden px-4 rounded-md py-1 bg-slate-500 text-white shadow-md"
              >
                Ver Mais
              </button>

              <div id="prime" className="hidden md:block content">
                <p className="md:text-justify">
                  {textSplitter(data.search[0].resume, 200)}
                </p>
                <button
                  onClick={(e) => {
                    openHandle(1);
                  }}
                  className="px-4 rounded-md py-1 bg-slate-500 text-white shadow-md"
                >
                  Ver Mais
                </button>
              </div>
              {!spand.prime ? (
                <MdOutlineExpandMore
                  onClick={(e) => {
                    primeHandler(1);
                  }}
                  className="hidden md:block cursor-pointer text-3xl"
                />
              ) : (
                <MdExpandLess
                  onClick={(e) => {
                    primeHandler(1);
                  }}
                  className="hidden md:block cursor-pointer text-3xl"
                />
              )}

              <DefaultModal show={Open.prime}>
                <ModalItem setClose={setOpen} data={data.search[0]} />
              </DefaultModal>
            </div>
            {/* -----------------------------------------------------------------------  */}
            <div className="">
              <p className="my-1 font-medium text-lg">{data.search[1].title}</p>
              <button
                onClick={(e) => {
                  openHandle(2);
                }}
                className=" md:hidden px-4 rounded-md py-1 bg-slate-500 text-white shadow-md"
              >
                Ver Mais
              </button>

              <div id="second" className=" hidden md:block content">
                <p className="text-justify">
                  {textSplitter(data.search[1].resume, 200)}
                </p>
                <button
                  onClick={(e) => {
                    openHandle(2);
                  }}
                  className="px-4 rounded-md py-1 bg-slate-500 text-white shadow-md"
                >
                  Ver Mais
                </button>
              </div>
              {!spand.second ? (
                <MdOutlineExpandMore
                  onClick={(e) => {
                    primeHandler(2);
                  }}
                  className="hidden md:block cursor-pointer text-3xl"
                />
              ) : (
                <MdExpandLess
                  onClick={(e) => {
                    primeHandler(2);
                  }}
                  className="hidden md:block cursor-pointer text-3xl"
                />
              )}

              <DefaultModal show={Open.second}>
                <ModalItem setClose={setOpen} data={data.search[1]} />
              </DefaultModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
