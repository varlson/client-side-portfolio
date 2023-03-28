import React from "react";

export default function collapse() {
  const collapseHandle = () => {
    var content = document.getElementById("content");
    content.classList.toggle("hidden");
    content.classList.toggle("teste");
  };
  return (
    <div className="">
      <div className=" sm:hidden">xs devices</div>
      <div className="hidden sm:block md:hidden">devices</div>
      <div className="hidden md:block lg:hidden">Ipads</div>
      <div className="hidden lg:block xl:hidden">small desktop screen</div>
      <div className="hidden xl:block ">desktop screen</div>
    </div>
  );
}
