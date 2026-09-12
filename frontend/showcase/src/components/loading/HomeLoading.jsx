import { useEffect, useState } from "react";
import Hero from "../Hero";
import Footer from "../Footer";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


function HomeLoading(){
    const words = ["THINKER", "ENGINEER", "REINVENTOR"];
      const [order, setOrder] = useState(words);
      const [fade, setFade] = useState(true);
      const [visible, setVisible] = useState(false);


      useEffect(() => {
          const interval = setInterval(() => {
            setFade(false);
      
            setTimeout(() => {
              setOrder((prev) => [...prev.slice(1), prev[0]]);
              setFade(true);
            }, 300);
          }, 3000);
          return () => clearInterval(interval);
        }, []);


    return(
        <>
        <Hero />
      <section>
        <p className="text-gray-400 text-lg mb-4 tracking-widest font-light text-center pt-35">
          Glad you stopped by.
        </p>
      </section>
      <section>
        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 flex justify-center text-center"
            >
                <div className="h-22.5 w-250 bg-gray-800/20 rounded animate-pulse"></div>
          
        </h1>
      </section>

      <div className="flex justify-center gap-4 mb-6 text-sm md:text-base tracking-[0.3em] font-semibold text-white uppercase">
        <span
          className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {order[0]}
        </span>
        <span className="text-purple-500">▶</span>
        <span
          className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {order[1]}
        </span>
        <span className="text-purple-500">▶</span>
        <span
          className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          {order[2]}
        </span>
      </div>

      <section>
        <h1 className="text-gray-400 text-base mb-12 flex justify-center">
          <div className="h-6 w-150 bg-gray-800/20 rounded animate-pulse"></div>
          
        </h1>
      </section>

      <a
        to="/about"
        className="mx-auto flex leading-relaxed  w-73 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/40"
      >
        LEARN MORE ABOUT ME <span className="text-purple-500">▶</span>
      </a>

      <section className="pb-20" >
        <p className="pt-40 flex justify-center text-gray-500 text-xs tracking-widest">
          Scroll for more!
        </p>
        <p className="pt-3 flex justify-center text-gray-500">
          <ChevronDownIcon className="w-6 h-6 text-gray-500 animate-bounce" />
        </p>
      </section>
      <Footer />
        
        </>
    )
}

export default HomeLoading