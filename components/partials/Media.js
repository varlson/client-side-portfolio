import React from "react";
import { ImGithub } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
export default function Media() {
  return (
    <div className="flex text-white gap-3">
      <a href="https://github.com/varlson" target="_blank">
        <ImGithub className="cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/varlson95/" target="_blank">
        <SiInstagram className="cursor-pointer" />
      </a>
    </div>
  );
}
