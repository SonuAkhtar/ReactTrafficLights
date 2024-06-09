import { useState } from "react";
import "./lights.css";
import { useEffect } from "react";

const Lights = () => {
  const [colorNumber, setColorNumber] = useState(0);

  useEffect(() => {
    let colorTime = setInterval(() => {
      if (colorNumber < 3) {
        setColorNumber((prev) => prev + 1);
      } else {
        setColorNumber(0);
      }
    }, 1000);

    return () => {
      clearInterval(colorTime);
    };
  }, [colorNumber]);

  return (
    <div className="light__container">
      <span className={`${colorNumber === 0 && "green"}`}>Green</span>
      <span className={`${colorNumber === 1 && "yellow"}`}>Yellow</span>
      <span className={`${colorNumber === 2 && "red"}`}>Red</span>
    </div>
  );
};

export default Lights;
