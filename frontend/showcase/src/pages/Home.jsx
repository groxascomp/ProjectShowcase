import { useEffect, useState } from "react";
import Hero from "../components/Hero"
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";





function Home() {
    const words = ["THINKER", "ENGINEER", "REINVENTOR"];
    const [order, setOrder] = useState(words);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

        setTimeout(() => {
                setOrder(prev => [...prev.slice(1), prev[0]]);
                setFade(true);
            },300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);



  return (
    <>
        <Hero />
        <section><p class="text-gray-400 text-lg mb-4 tracking-widest font-light text-center pt-35">Glad you stopped by.</p></section>
        <section><h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 text-center">I am Gian Exequiel <span className="text-purple-500">Roxas</span> </h1></section>
        
        
        <div className="flex justify-center gap-4 mb-6 text-sm md:text-base tracking-[0.3em] font-semibold text-white uppercase">
            <span className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
                {order[0]}
            </span>
            <span className="text-purple-500">▶</span>
            <span className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                {order[1]}
            </span>
            <span className="text-purple-500">▶</span>
            <span className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                {order[2]}
            </span>
        </div>






        <section>
            <h1 className="text-gray-400 text-base mb-12 flex justify-center">
                25 years old Software Developer at
                <span className="text-purple-500 pl-1.5 pr-1.5 uppercase"> ACCENTURE </span> Philippines
            </h1>
        </section>
        

        <NavLink
          to="/about"
          className="mx-auto flex w-80 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/40"
        >
          LEARN MORE ABOUT ME <span className="text-purple-500">▶</span>
        </NavLink>
        
          
        <section >
            <p className="pt-40 flex justify-center text-gray-500 text-xs tracking-widest">Scroll for more!</p>
            <p className="pt-3 flex justify-center text-gray-500">
                <ChevronDownIcon className="w-6 h-6 text-gray-500 animate-bounce"  />
            </p>
        </section>



        {/* Projects */}


        <section class="py-24 px-6 md:px-16 max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-14">
                Project 
                <span className="text-purple-500 pl-5">Showcase</span>
            </h2>


        </section>


        <NavLink
          to="/projects"
          className="mx-auto flex w-80 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/40"
        >
          MORE PROJECT HERE <span className="text-purple-500">▶</span>
        </NavLink>

        <section class="py-24 px-6 md:px-16 max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-14">
                Certification and 
                <span className="text-purple-500 pl-5">Badge</span>
            </h2>


        </section>


        <Footer/>
        
    </>
  )
}

export default Home


