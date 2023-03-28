import { useEffect, useState } from "react";
import UtilContext from "../context/UtilContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;
  return (
    <UtilContext>
      <Component {...pageProps} />
    </UtilContext>
  );
}
