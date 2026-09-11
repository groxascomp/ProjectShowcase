import { useState } from "react";
import Footer from "../Footer";
import Hero from "../Hero";

function ProjectsLoading() {
  const [active, setActive] = useState("ALL");
  const categories = ["ALL", "Full Stack", "FrontEnd", "BackEnd", "IOT"];

  return (
    <>
      <Hero />

      <section className="flex-1">
        <section className=" pt-10 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
              // What I've Built
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Projects
            </h2>
          </div>

          <section>
            <div className="flex flex-wrap gap-2 text-xs">
              {categories.map((tech_project) => (
                <button
                  key={tech_project}
                  onClick={() => setActive(tech_project)}
                  className={`px-4 py-2 font-semibold border tracking-widest uppercase transition-all duration-300
                ${
                  active === tech_project
                    ? "border-purple-500 text-purple-500 bg-purple-500/10"
                    : "border-white/20 text-gray-400 hover:border-purple-500 hover:text-purple-500"
                }`}
                >
                  {tech_project}
                </button>
              ))}
            </div>

            {/*--------------------------------------- */}

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse group flex flex-col border border-white/20 hover:border-purple-600 transition-all duration-300 p-2"
                  style={{ background: "rgb(14, 14, 22)" }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center p-4">
                    <span className="inline-block h-5 w-20 bg-gray-800 rounded"></span>
                    <span className="h-4 w-10 bg-gray-800 rounded"></span>
                  </div>

                  {/* Title */}
                  <div className="px-4">
                    <span className="block h-6 w-32 bg-gray-800 rounded mb-3"></span>
                  </div>

                  {/* Description */}
                  <div className="px-4">
                    <span className="block h-4 w-full bg-gray-800 rounded mb-6"></span>
                    <span className="block h-4 w-3/4 bg-gray-800 rounded mb-6"></span>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-3 px-4">
                    <span className="h-4 w-16 bg-gray-800 rounded"></span>
                    <span className="h-4 w-16 bg-gray-800 rounded"></span>
                    <span className="h-4 w-16 bg-gray-800 rounded"></span>
                  </div>

                  {/* Footer link */}
                  <div className="px-4 pt-9 pb-6">
                    <span className="block h-4 w-24 bg-gray-800 rounded"></span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default ProjectsLoading;
