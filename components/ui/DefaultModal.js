import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Utilities } from "../../context/UtilContext";

export default function DefaultModal({ show, children }) {
  const [Ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!Ready) return null;

  const content = (
    <div className="fixed top-0 left-0 right-0 bottom-0 transparent grid place-items-center">
      <div
        id="mod"
        className="modal-out md:w-8/12 rounded-lg m-auto bg-slate-600 p-2 h-[calc(100vh-20vh)] max-h-[calc(100vh-20vh)] overflow-scroll md:overflow-hidden"
      >
        {children}
      </div>
    </div>
  );

  const modal = show ? content : null;

  return createPortal(modal, document.getElementById("modal"));
}
