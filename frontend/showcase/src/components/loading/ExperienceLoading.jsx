import Footer from "../Footer";
import Hero from "../Hero";

function ExperienceLoading() {
  return (
    <>
      <Hero />

      <section className="flex-1">
        <section className=" pt-10 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
              // where i've been
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Experience
            </h2>
          </div>

          <section>
            {/*--------------------------------------- */}

            <div className="relative mt-12 pl-10 md:pl-12">
              <div
                aria-hidden="true"
                className="absolute bottom-3 left-2 top-3 w-px bg-white/10"
              />

              {Array.from({ length: 2 }).map((_, index) => (
                <article
                  key={index}
                  className="relative pb-16 last:pb-0 animate-pulse"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-8 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-500 ring-4 ring-[#10081d] md:-left-10"
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="sm:w-1/2 space-y-2">
                      <div className="h-6 w-48 bg-gray-800 rounded"></div>
                      <div className="h-5 w-32 bg-gray-800 rounded"></div>
                    </div>
                    <div className="sm:w-1/2 sm:text-right space-y-2">
                      <div className="h-4 w-24 bg-gray-800 rounded ml-auto"></div>
                      <div className="h-5 w-16 bg-gray-800 rounded ml-auto"></div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="h-4 w-full bg-gray-800 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-800 rounded"></div>
                  </div>

                  <div className="flex flex-wrap gap-3 pr-4 mt-4">
                    <span className="h-4 w-16 bg-gray-800 rounded"></span>
                    <span className="h-4 w-16 bg-gray-800 rounded"></span>
                  </div>
                </article>
              ))}
            </div>

            {/*--------------------- EDUCAITON --------------- */}

            {/*------------------------------------------------ */}
          </section>
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

            {Array.from({ length: 2 }).map((_, index) => (
              <article
                key={index}
                className="relative pb-12 last:pb-0 animate-pulse"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-500 ring-4 ring-[#10081d] md:-left-10"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="sm:w-3/4 space-y-2">
                    <div className="h-5 w-40 bg-gray-800 rounded"></div>
                    <div className="h-4 w-28 bg-gray-800 rounded"></div>
                  </div>
                  <div className="sm:w-1/4 sm:text-right space-y-2">
                    <div className="h-4 w-24 bg-gray-800 rounded ml-auto"></div>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <div className="h-4 w-full bg-gray-800 rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
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

export default ExperienceLoading;
