import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Projects() {
  const [active, setActive] = useState("ALL");

  const categories = ["ALL", "FULL STACK", "FRONTEND", "BACKEND", "IOT"];
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

  const filteredProjects =
    active === "ALL"
      ? projects
      : projects.filter((p) => p.tech_project === active);

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

          {/*--------------------------------------- */}

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
              {filteredProjects.map((p) => (
                <div
                  key={p.id_project}
                  className="group flex flex-col border border-white/20 hover:border-purple-600 transition-all duration-300 p-2"
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

                  <div>
                    <a
                      href={p.github_projects}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pl-4 pt-9 pb-6 inline-flex items-center text-purple-500 font-semibold uppercase tracking-widest text-xs hover:text-purple-400 transition-colors duration-300"
                    >
                      View Project →
                    </a>
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

export default Projects;
