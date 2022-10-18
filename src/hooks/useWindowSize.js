import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  // const [size, setSize] = useState({
  //     height: window.innerHeight,
  //     width: window.innerWidth
  // })

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return width;
}
