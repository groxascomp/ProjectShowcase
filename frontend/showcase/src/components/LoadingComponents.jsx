import { useEffect, useState } from "react";
import { Quantum } from "ldrs/react";
import "ldrs/react/Quantum.css";

function LoadingComponents({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500); 
    }, 1500); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`flex justify-center items-center h-screen transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Quantum size="100" speed="1.75" color="white" />
    </div>
  );
}

export default LoadingComponents;
