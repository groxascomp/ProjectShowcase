import Footer from '../components/Footer'
import Hero from '../components/Hero'
import profileImage from '../assets/1x1/1x1.JPG'

function About() {
  return (
    <>
      <Hero />

      <section className="flex-1">
        <section className="min-h-screen pt-10 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">// who i am</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">About Me</h2>
          </div>

          <div className="flex gap-8 justify-center">
            <div className="w-1/2 ">
                <img
                    src={profileImage}
                    alt="Gian Exequiel Roxas"
                    className="w-75 h-75 md:w-45 md:h-45 object-cover rounded-full border-[3px] border-purple-500 ]"
                />
                <div class="space-y-4 text-gray-300 leading-relaxed pt-6">
                    <p> Hi! I'm
                        <span class="text-white font-semibold"> Gian Exequiel Roxas</span> , a 25-year-old Software Engineer based in the Philippines. I currently work at 
                        <span class="font-semibold text-purple-500"> Accenture Philippines </span>Accenture Philippines, where I build scalable software solutions for enterprise clients.</p>
                    <p> I'm passionate about creating elegant, performant web applications that solve real problems. When I'm not writing code, I'm exploring new technologies, contributing to open-source, and thinking about how software can better serve people.</p>
                    <p> I believe great software is both functional and beautiful — and I work hard to deliver both.</p>


                </div>

                
              
            </div>



            <div className="w-1/2 space-y-4">
              <div class="flex items-start gap-4 border-b border-white/10 pb-4">
                <span class="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">Full Name</span>
                <span class="text-white text-sm">Gian Exequiel G Roxas</span>
              </div>

              <div class="flex items-start gap-4 border-b border-white/10 pb-4">
                <span class="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">Age</span>
                <span class="text-white text-sm">25 Years Old</span>
              </div>

              <div class="flex items-start gap-4 border-b border-white/10 pb-4">
                <span class="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">Location</span>
                <span class="text-white text-sm">Pasig City, Metro Manila</span>
              </div>

              <div class="flex items-start gap-4 border-b border-white/10 pb-4">
                <span class="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">Current Role</span>
                <span class="text-white text-sm">Software Engineer @ Accenture</span>
              </div>

              <div class="flex items-start gap-4 border-b border-white/10 pb-4">
                <span class="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">Education</span>
                <span class="text-white text-sm">Bachelor of Science in Computer Engineering</span>
              </div>

              <div class="flex items-start gap-4 border-b border-white/10 pb-4">
                <span class="text-xs tracking-widest uppercase font-medium w-32 shrink-0 mt-0.5 text-purple-500">Availability</span>
                <span class="text-white text-sm">Actively contributing at Accenture</span>
              </div>

                <div class="flex justify-center">
                <a
                    href="https://drive.google.com/file/d/1lRM10ykJYqQi5UbvixQZ8Fimc1LNQm7N/view?usp=sharing"
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
                <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">// who i am</p>
                <h3 class="text-3xl font-bold text-white mb-10">Skills & Tools</h3>
            </div>

            <div className='flex gap-5'>
                <div className="w-1/4 bg-[rgb(17,17,24)] border border-white/10 p-5 hover:border-purple-700 transition-colors duration-200">
                    <h3 className="text-purple-500 text-sm font-semibold tracking-[0.15em]">LANGUAGES</h3>
                    <p className="list-disc list-inside text-gray-300 ">
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>TypeScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>JavaScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Python</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Java</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>SQL</p>
                    </p>
                </div>
                
                <div className="w-1/4 bg-[rgb(17,17,24)] border border-white/10 p-5 hover:border-purple-700 transition-colors duration-200">
                    <h3 className="text-purple-500 text-sm font-semibold tracking-[0.15em]">FRONTEND</h3>
                    <p className="list-disc list-inside text-gray-300 ">
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>TypeScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>JavaScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Python</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Java</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>SQL</p>
                    </p>
                </div>

                <div className="w-1/4 bg-[rgb(17,17,24)] border border-white/10 p-5 hover:border-purple-700 transition-colors duration-200">
                    <h3 className="text-purple-500 text-sm font-semibold tracking-[0.15em]">BACKEND</h3>
                    <p className="list-disc list-inside text-gray-300 ">
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>TypeScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>JavaScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Python</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Java</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>SQL</p>
                    </p>
                </div>

                <div className="w-1/4 bg-[rgb(17,17,24)] border border-white/10 p-5 hover:border-purple-700 transition-colors duration-200">
                    <h3 className="text-purple-500 text-sm font-semibold tracking-[0.15em]">TOOLS</h3>
                    <p className="list-disc list-inside text-gray-300 ">
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>TypeScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>JavaScript</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Python</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>Java</p>
                        <p className='pt-2 text-sm'><span className='text-purple-500 pr-2' >•</span>SQL</p>
                    </p>
                </div>

            </div>




        </section>


        <section>
            <div className="mb-10 mt-20">
                <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">// my credentials</p>
                <h3 class="text-3xl font-bold text-white mb-10">Certification and Badge</h3>
            </div>
        </section>




        </section>
      </section>

      <Footer />
    </>
  )
}

export default About
