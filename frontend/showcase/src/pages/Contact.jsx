import Hero from "../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { getAbouts, getLinks } from "../services/api";
import { useEffect, useState } from "react";
import ContactError from "../components/errorpage/ContactError";
import ContactLoading from "../components/loading/ContactLoading";

function Contact() {
  const [links, setLinks] = useState(null);
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getLinks(), getAbouts()])
      .then(([linkData, aboutData]) => {
        setLinks(linkData[0] || {});
        setAbout(aboutData[0] || {});
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <ContactLoading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <ContactError />
      </>
    );
  }

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

            <div className="grid grid-cols-2 gap-4 pl-30 pr-30">
              <a
                href={`mailto:${about.email_about}`}
                className="flex items-center border border-white/20 bg-[#0b0d18]/90 p-4 md:p-5 h-25 transition-all duration-300 hover:border-purple-500"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[#07080e] text-purple-400 text-xl shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className="ml-4 md:ml-5 min-w-0 flex-1">
                  <div className="text-xs tracking-widest uppercase text-gray-500 mb-0.5">
                    EMAIL
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                    {about.email_about}
                  </div>
                </div>
              </a>

              {/* LINKED */}
              <a
                href={links.linkedin_links}
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
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                    {links.linkedin_links}
                  </div>
                </div>
              </a>

              {/* GITHUB */}
              <a
                href={links.github_links}
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
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                    {links.github_links}
                  </div>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={links.facebook_links}
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
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                    {links.facebook_links}
                  </div>
                </div>
              </a>

              {/* Instgram */}
              <a
                href={links.instagram_links}
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
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                    {links.instagram_links}
                  </div>
                </div>
              </a>

              {/* Location */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(about.location_about || "")}`}
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
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                    {about.location_about}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
