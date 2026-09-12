import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import { useAppData } from "../context/AppDataContext";






function Hero() {

  const {
  abouts = [],
  links = [],
  } = useAppData();

  const about = abouts[0] || {};
  const link = links[0] || {};

  


  return (
    <>
      <header className="flex justify-between items-center px-8 py-6 bg-transparent rounded-xl">
        <div className="hero-left">
          <Link to="/home" className="flex items-center gap-3">
            <div>
              <h1 className="text-white font-semibold text-base tracking-wide">
                {about.firstname_about} {about.lastname_about}
              </h1>
              <p className="text-purple-500 font-normal text-sm tracking-wide">
                {" "}
                {about.currentrole_about}
              </p>
            </div>
          </Link>
        </div>

        <nav className="hero-middle flex gap-9.5 tracking-widest">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium transition-colors duration-200 text-white"
                : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium transition-colors duration-200 text-white"
                : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium transition-colors duration-200 text-white"
                : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            }
          >
            Experience
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-sm font-medium transition-colors duration-200 text-white"
                : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hero-right flex gap-3">
          <a href={link.github_links} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            />
          </a>
          <a href={link.linkedin_links} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            />
          </a>
          <a href={link.facebook_links} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            />
          </a>
          <a href={link.instagram_links} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            />
          </a>
          <a href="#info">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white"
            />
          </a>
        </div>
      </header>
    </>
  );
}

export default Hero;
