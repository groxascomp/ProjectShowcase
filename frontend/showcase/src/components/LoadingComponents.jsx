import { useEffect, useState } from "react";
import { Quantum } from "ldrs/react";
import "ldrs/react/Quantum.css";

function LoadingComponents({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // trigger fade-out before unmount
    const timer = setTimeout(() => {
      setFadeOut(true);
      // wait for animation to finish before calling onFinish
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500); // match transition duration
    }, 1500); // keep loader visible for 2s

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
