import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";

const iconImages = import.meta.glob("../assets/icons/*.png", {
  eager: true,
  import: "default",
  query: "?url",
});

function Home() {
  const words = ["THINKER", "ENGINEER", "REINVENTOR"];
  const [order, setOrder] = useState(words);
  const [fade, setFade] = useState(true);

  const projects = [
    {
      id_project: 4,
      tech_project: "FULL STACK",
      name_projects: "Enterprise Resource Portal",
      stack_projects: "React, Node.js, PostgreSQ, LAWS",
      year_project: "2024",
      github_projects:
        "https://github.com/groxascomp/PetF_PetFoodManager_React",
      description_projects:
        "A large-scale internal tool for Accenture clients featuring real-time data dashboards, role-based access, and automated reporting pipelines built with React, Node.js, and PostgreSQL.",
    },
    {
      id_project: 2,
      tech_project: "BACKEND",
      name_projects: "DevTrack",
      stack_projects: "React, Node.js, PostgreSQ, LAWS",
      year_project: "2024",
      github_projects:
        "https://github.com/groxascomp/PetF_PetFoodManager_React",
      description_projects:
        "A large-scale internal tool for Accenture clients featuring real-time data dashboards, role-based access, and automated reporting pipelines built with React, Node.js, and PostgreSQL.",
    },
    {
      id_project: 3,
      tech_project: "IOT",
      name_projects: "DevTrack FullStack",
      stack_projects: "React, Node.js, PostgreSQ, LAWS",
      year_project: "2024",
      github_projects:
        "https://github.com/groxascomp/PetF_PetFoodManager_React",
      description_projects:
        "A large-scale internal tool for Accenture clients featuring real-time data dashboards, role-based access, and automated reporting pipelines built with React, Node.js, and PostgreSQL.",
    },
    {
      id_project: 5,
      tech_project: "IOT",
      name_projects: "DevTrAAAAack FullStack",
      stack_projects: "React, Node.js, PostgreSQ, LAWS",
      year_project: "2024",
      github_projects:
        "https://github.com/groxascomp/PetF_PetFoodManager_React",
      description_projects:
        "A large-scale internal tool for Accenture clients featuring real-time data dashboards, role-based access, and automated reporting pipelines built with React, Node.js, and PostgreSQL.",
    },
  ];

  const certBadge = [
    {
      id_cb: 1,
      icon_cb: "fire",
      name_cb: "AWS Certified Developer – Associate",
      company_cb: "Google",
      year_cb: "2024",
    },
    {
      id_cb: 2,
      icon_cb: "computer",
      name_cb: "AWS Certified Developer – Associate",
      company_cb: "Google",
      year_cb: "2024",
    },
    {
      id_cb: 3,
      icon_cb: "fire",
      name_cb: "AWS Certified Developer – Associate",
      company_cb: "Google",
      year_cb: "2024",
    },
    {
      id_cb: 4,
      icon_cb: "fire",
      name_cb: "AWS Certified Developer – Associate",
      company_cb: "Google",
      year_cb: "2024",
    },
    {
      id_cb: 5,
      icon_cb: "fire",
      name_cb: "AWS Certified Developer – Associate",
      company_cb: "Google",
      year_cb: "2024",
    },
    {
      id_cb: 6,
      icon_cb: "fire",
      name_cb: "AWS Certified Developer – Associate",
      company_cb: "Google",
      year_cb: "2024",
    },
  ];

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

  return (
    <>
      <Hero />
      <section>
        <p className="text-gray-400 text-lg mb-4 tracking-widest font-light text-center pt-35">
          Glad you stopped by.
        </p>
      </section>
      <section>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-center">
          I am Gian Exequiel <span className="text-purple-500">Roxas</span>{" "}
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
          25 years old Software Developer at
          <span className="text-purple-500 pl-1.5 pr-1.5 font-semibold tracking-wider uppercase">
            {" "}
            ACCENTURE{" "}
          </span>{" "}
          Philippines
        </h1>
      </section>

      <NavLink
        to="/about"
        className="mx-auto flex leading-relaxed  w-73 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/40"
      >
        LEARN MORE ABOUT ME <span className="text-purple-500">▶</span>
      </NavLink>

      <section>
        <p className="pt-40 flex justify-center text-gray-500 text-xs tracking-widest">
          Scroll for more!
        </p>
        <p className="pt-3 flex justify-center text-gray-500">
          <ChevronDownIcon className="w-6 h-6 text-gray-500 animate-bounce" />
        </p>
      </section>

      {/* Projects */}

      <section className=" pt-24 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Project
          <span className="text-purple-500 pl-5">Showcase</span>
        </h2>
      </section>

      <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-6 pl-60 pr-60 pb-20">
        {projects.map((p) => (
          <div
            key={p.id_project}
            className="group flex flex-col border border-white/20 hover:border-purple-600 transition-all duration-300 p-2 pb-6"
            style={{ background: "rgb(14, 14, 22)" }}
          >
            <div className="flex justify-between items-center  p-4">
              <span className="inline-block text-purple-500 border border-purple-500 text-xs tracking-widest uppercase font-medium px-2 py-1 bg-purple-500/10">
                {p.tech_project}
              </span>
              <span className="text-gray-500 text-xs pb-2">
                {p.year_project}
              </span>
            </div>

            <div>
              <span className="p-4 text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                {p.name_projects}
              </span>
            </div>

            <div>
              <span className="pl-4 pr-4 pt-2.5 block text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                {p.description_projects}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pl-4 pr-4 pt-2.5">
              {p.stack_projects.split(",").map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-900 text-gray-500 font-mono border border-white/10 text-xs px-2"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <NavLink
        to="/projects"
        className="mx-auto leading-relaxed  flex w-73 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/40"
      >
        MORE PROJECT HERE <span className="text-purple-500">▶</span>
      </NavLink>

      <section className="pt-25 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Certification and
          <span className="text-purple-500 pl-5">Badge</span>
        </h2>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pl-60 pr-60 pb-20">
        {certBadge.map((p) => (
          <div
            key={p.id_cb}
            className="group flex flex-col border border-white/20 hover:border-purple-600 transition-all duration-300 p-2"
            style={{ background: "rgb(14, 14, 22)" }}
          >
            <div className="flex p-3 ">
              <div className="w-1/4">
                <span className="inline-block border border-purple-900 text-xs tracking-widest uppercase font-medium px-2 py-1 rounded-lg bg-purple-500/20">
                  <img
                    src={iconImages[`../assets/icons/${p.icon_cb}.png`]}
                    alt={p.icon_cb}
                    className="inline-block w-6 h-6 m-2"
                  />
                </span>
              </div>
              <div className="w-3/4">
                <div className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-purple-200 transition-colors duration-200">
                  {p.name_cb}
                </div>
                <div className="text-xs text-gray-500">{p.company_cb}</div>
                <div className="text-xs font-mono mt-1 text-purple-500">
                  {p.year_cb}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;
