import React, { createContext, useState } from "react";

export const Utilities = createContext();

export default function UtilContext({ children }) {
  const [Modal, setUtil] = useState({ default: false });

  const setModal = (name, value) => {
    setUtil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const values = { Modal, setModal };
  return <Utilities.Provider value={values}>{children}</Utilities.Provider>;
}
