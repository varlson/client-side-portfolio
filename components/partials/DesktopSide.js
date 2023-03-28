import React from "react";
import Media from "../partials/Media";
import { Aboutico, Contactico, Homeico, Serviceico } from "./Icons";
export default function DesktopSide() {
  return (
    <div className="flex text-2xl gap-4 flex-col ">
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
  );
}
