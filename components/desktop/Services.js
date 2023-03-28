import React from "react";

export default function Services() {
  return (
    <div className="place-items-center grid grid-cols-12 bg-fuchsia-400 h-screen">
      <div className="bg-blue-400 w-full col-span-6 ">1</div>
      <div className="bg-yellow-400 w-full col-span-6 ">2</div>
      <div className="col-start-7 bg-orange-400 w-full col-span-6 ">3</div>
      <div className="col-start-1 row-start-2 bg-cyan-400 w-full col-span-6 ">
        4
      </div>
    </div>
  );
}
