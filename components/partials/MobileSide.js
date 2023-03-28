import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgMenuLeftAlt, CgMenuLeft, CgMenuMotion } from "react-icons/cg";

function MobileSide({ open, setOpen }) {
  const clickHandle = () => {
    setOpen(!open);
  };
  return (
    <div className="text-white text-6xl">
      {open ? (
        <CgMenuMotion onClick={clickHandle} />
      ) : (
        <CgMenuLeftAlt onClick={clickHandle} />
      )}
    </div>
  );
}

export default MobileSide;
