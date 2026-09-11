import Footer from "../Footer"
import Hero from "../Hero"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";


function ContactLoading (){
    return (
        <>
            <Hero />
            <section className="flex">
                <section className=" pt-10 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
                <div className="">
                    <p className="text-sm tracking-[0.3em] uppercase mb-2 text-purple-500">
                    // let's connect
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                    Contact
                    </h2>
                    <div>
                    <p className="text-gray-400 leading-relaxed mb-12 pt-10">
                        I'm always open to new opportunities, collaborations, and
                        interesting conversations. Whether you have a project in mind or
                        just want to say hi — reach out through any of the channels
                        below.
                    </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pl-30 pr-30 ">
                    <a
                        
                        className="flex items-center border border-white/20 bg-[#0b0d18]/90 p-4 md:p-5 h-25 transition-all duration-300 hover:border-purple-500"
                    >
                        <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[#07080e] text-purple-400 text-xl shrink-0">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </div>

                        <div className="ml-4 md:ml-5 min-w-0 flex-1">
                        <div className="text-xs tracking-widest uppercase text-gray-500 mb-0.5">
                            EMAIL
                        </div>
                        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>

                        </div>
                    </a>

                    {/* LINKED */}
                    <a
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-white/20 bg-[#0b0d18]/90 p-4 md:p-5 h-25 transition-all duration-300 hover:border-purple-500"
                    >
                        <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[#07080e] text-purple-400 text-xl shrink-0">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </div>

                        <div className="ml-4 md:ml-5 min-w-0 flex-1">
                        <div className="text-xs tracking-widest uppercase text-gray-500 mb-0.5">
                            LINKEDIN
                        </div>
                        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                        </div>
                    </a>

                    {/* GITHUB */}
                    <a
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-white/20 bg-[#0b0d18]/90 p-4 md:p-5 h-25 transition-all duration-300 hover:border-purple-500"
                    >
                        <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[#07080e] text-purple-400 text-xl shrink-0">
                        <FontAwesomeIcon icon={faGithub} />
                        </div>

                        <div className="ml-4 md:ml-5 min-w-0 flex-1">
                        <div className="text-xs tracking-widest uppercase text-gray-500 mb-0.5">
                            GITHUB
                        </div>
                        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                        </div>
                    </a>

                    {/* Facebook */}
                    <a
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-white/20 bg-[#0b0d18]/90 p-4 md:p-5 h-25 transition-all duration-300 hover:border-purple-500"
                    >
                        <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[#07080e] text-purple-400 text-xl shrink-0">
                        <FontAwesomeIcon icon={faFacebook} />
                        </div>

                        <div className="ml-4 md:ml-5 min-w-0 flex-1">
                        <div className="text-xs tracking-widest uppercase text-gray-500 mb-0.5">
                            FACEBOOK
                        </div>
                        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                        </div>
                    </a>

                    {/* Instgram */}
                    <a
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-white/20 bg-[#0b0d18]/90 p-4 md:p-5 h-25 transition-all duration-300 hover:border-purple-500"
                    >
                        <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[#07080e] text-purple-400 text-xl shrink-0">
                        <FontAwesomeIcon icon={faInstagram} />
                        </div>

                        <div className="ml-4 md:ml-5 min-w-0 flex-1">
                        <div className="text-xs tracking-widest uppercase text-gray-500 mb-0.5">
                            INSTAGRAM
                        </div>
                        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                        </div>
                    </a>

                    {/* Location */}
                    <a
                    
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-white/20 bg-[#0b0d18]/90 p-4 md:p-5 h-25 transition-all duration-300 hover:border-purple-500"
                    >
                        <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[#07080e] text-purple-400 text-xl shrink-0">
                        <FontAwesomeIcon icon={faLocationDot} />
                        </div>

                        <div className="ml-4 md:ml-5 min-w-0 flex-1">
                        <div className="text-xs tracking-widest uppercase text-gray-500 mb-0.5">
                            LOCATION
                        </div>
                        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse"></div>
                        </div>
                    </a>
                    </div>
                </div>
                </section>
            </section>

      <Footer />
        </>
    )
}

export default ContactLoading