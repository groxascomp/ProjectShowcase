import Footer from "../Footer";
import Hero from "../Hero";


function AboutLoading(){
    return(
        <>
            <Hero />

      <section className="flex-1">
        <section className="min-h-screen pt-10 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
              // who i am
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              About Me
            </h2>
          </div>

          <div className="flex gap-8 justify-center">
            <div className="w-1/2 ">
              <div className="flex justify-center items-center">
                <img
                 
                  className=" w-40 h-40 object-cover rounded-full border-[3px] border-purple-500 ]"
                />
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed pt-6 text-justify ">
                <p>
                  <div className="h-5 w-120 mb-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-5 w-120 mb-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-5 w-120 mb-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-5 w-120 mb-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-5 w-120 mb-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-5 w-120 mb-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-5 w-120 mb-4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-5 w-120 bg-gray-800 rounded animate-pulse"></div>
                  
                  
               
                </p>
              </div>
            </div>

            <div className="w-1/2 space-y-4">
              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">
                  Full Name
                </span>
                <span className="text-white text-sm">
                  <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                </span>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">
                  Age
                </span>
                <span className="text-white text-sm"><div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div></span>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">
                  Location
                </span>
                <span className="text-white text-sm">
                  <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                </span>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">
                  Current Role
                </span>
                <span className="text-white text-sm">
                  <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                </span>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">
                  Education
                </span>
                <span className="text-white text-sm">
                  <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                </span>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                <span className="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">
                  Availability
                </span>
                <span className="text-white text-sm">
                  <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                </span>
              </div>

              <div className="flex justify-center">
                <a
                  
                  target="_blank"
                  className=" mt-12 flex w-80 items-center justify-center gap-3 border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-950/40"
                >
                  DOWNLOAD CV <span className="text-purple-500">▶</span>
                </a>
              </div>
            </div>
          </div>

          <section>
            <div className="mb-10 mt-20">
              <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
                // what I use
              </p>
              <h3 className="text-3xl font-bold text-white mb-10">
                Skills & Tools
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              
                <div
                  
                  className="border border-white/10 bg-[rgb(17,17,24)] p-5 transition-colors duration-200 hover:border-purple-700"
                >
                  <h3 className="text-sm font-semibold tracking-[0.15em] text-purple-500">
                    <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                  </h3>
                  <div className="list-disc list-inside text-gray-300">
                    
                      <p  className="pt-2 text-sm">
                        <span className="pr-2 text-purple-500">•</span>
                        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                      </p>
                    
                  </div>
                </div>
             
            </div>
          </section>

          <section>
            <div className="mb-10 mt-20">
              <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
                // my credentials
              </p>
              <h3 className="text-3xl font-bold text-white mb-10">
                Certification and <span className="text-purple-500">Badge</span>
              </h3>
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            
              <div
                
                className="group flex flex-col border border-white/20 hover:border-purple-600 transition-all duration-300 p-2"
                style={{ background: "rgb(14, 14, 22)" }}
              >
                <div className="flex p-3 ">
                  <div className="w-1/4">
                    <span className="inline-block border border-purple-900 text-xs tracking-widest uppercase font-medium px-2 py-1 rounded-lg bg-purple-500/20">
                      <img
                        
                       
                        className="inline-block w-6 h-6 m-2"
                      />
                    </span>
                  </div>
                  <div className="w-3/4">
                    <div className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-purple-200 transition-colors duration-200">
                      <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                    <div className="text-xs text-gray-500"><div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div></div>
                    <div className="text-xs font-mono mt-1 text-purple-500">
                      <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </section>
      </section>

      <Footer />






        </>
    )
}

export default AboutLoading;