import Footer from "../Footer";
import Hero from "../Hero";

function ProjectError() {
  return (
    <>
      <Hero />

      <section className="flex-1">
        <section className=" pt-10 pb-27 px-6 md:px-16 max-w-6xl mx-auto ">
          <div className="mb-10">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
              // What I've Built
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Projects
            </h2>
          </div>

          <div className="flex-1 px-6 py-20 md:px-16">
            <div className="mx-auto max-w-6xl border border-red-400/30 bg-[#0e0e16] p-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                Oops!
              </p>
              <p className="mt-3 text-gray-400">
                Something went wrong with Projects — but we’ll fix it soon.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default ProjectError;
