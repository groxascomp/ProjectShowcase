import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Experience() {
  const exp = [
    {
      id_exp: 1,
      role_exp: "Full Stack Developer",
      company_exp: "Accenture Philippines",
      responsibility_exp:
        "A software engineer designs, builds, tests, and maintains software systems — their work goes far beyond just writing code. They solve problems, collaborate with teams, and ensure applications are scalable, secure, and user-friendly. Developing enterprise-grade web applications for financial services and telecommunications clients. Leading front-end architecture decisions and collaborating with cross-functional teams across Manila and Singapore.",
      stack_exp: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
      start_exp: "2024",
      end_exp: "2026",
      type_exp: "Full-time",
    },
    {
      id_exp: 2,
      role_exp: "Call Center",
      company_exp: "Foundever Philippines",
      responsibility_exp:
        "Developing enterprise-grade web applications for financial services and telecommunications clients. Leading front-end architecture decisions and collaborating with cross-functional teams across Manila and Singapore.",
      stack_exp: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
      start_exp: "2024",
      end_exp: "2026",
      type_exp: "Full-time",
    },
    {
      id_exp: 3,
      role_exp: "Call Center",
      company_exp: "Foundever Philippines",
      responsibility_exp:
        "Developing enterprise-grade web applications for financial services and telecommunications clients. Leading front-end architecture decisions and collaborating with cross-functional teams across Manila and Singapore.",
      stack_exp: "React.js, Node.js, Express.js, MongoDB, TailwindCSS",
      start_exp: "2024",
      end_exp: "2026",
      type_exp: "Full-time",
    },
  ];

  const edu = [
    {
      id_edu: 1,
      course_edu: "Bachelor of Science in Computer Engineering",
      school_edu: "Polytechnic University of the Philippines – Sta. Mesa",
      proudof_edu: "Dean’s List, GWA 1.75",
      start_edu: "2019",
      end_edu: "2023",
    },
    {
      id_edu: 2,
      course_edu: "Information Computer Technology",
      school_edu: "Arellano University – Pasig",
      proudof_edu: "Graduate with Honors and some awards",
      start_edu: "2019",
      end_edu: "2023",
    },
  ];

  return (
    <>
      <Hero />
      <section className="flex-1">
        <section className=" pt-10 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
          <div className="">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
              // where i've been
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Experience
            </h2>
          </div>
          <div className="relative mt-12 pl-10 md:pl-12">
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-2 top-3 w-px bg-white/10"
            />

            {exp.map((p) => (
              <article key={p.id_exp} className="relative pb-16 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-500 ring-4 ring-[#10081d] md:-left-10"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="sm:w-1/2">
                    <div className="text-xl font-bold text-white">
                      {p.role_exp}
                    </div>
                    <div className="font-semibold text-purple-500">
                      {p.company_exp}
                    </div>
                  </div>
                  <div className="sm:w-1/2 sm:text-right">
                    <div className="text-sm text-gray-400 font-mono">
                      {p.start_exp} - {p.end_exp}
                    </div>
                    <div className="inline-block text-purple-500 border border-purple-500 text-xs tracking-widest uppercase font-medium px-2 py-1 bg-purple-500/10">
                      {p.type_exp}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-gray-400 text-sm leading-relaxed mb-4">
                  {p.responsibility_exp}
                </div>
                <div className="flex flex-wrap gap-3 pr-4">
                  {p.stack_exp.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-900 text-gray-500 font-mono border border-white/10 text-xs px-2"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="flex-1">
        <section className=" pt-10 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
          <div className="">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
              // where i've been
            </p>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="relative mt-12 pl-10 md:pl-12">
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-2 top-3 w-px bg-white/10"
            />

            {edu.map((p) => (
              <article key={p.id_edu} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-500 ring-4 ring-[#10081d] md:-left-10"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="sm:w-3/4">
                    <div className="text-lg font-bold text-white">
                      {p.course_edu}
                    </div>
                    <div className="font-semibold text-purple-500">
                      {p.school_edu}
                    </div>
                  </div>
                  <div className="sm:w-1/4 sm:text-right text-sm text-gray-400 font-mono">
                    {p.start_edu} - {p.end_edu}
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-400">
                  {p.proudof_edu}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Experience;
