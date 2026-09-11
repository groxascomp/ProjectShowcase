import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 md:px-16 py-6 pl-10 bg-[rgb(10,10,15)]">
        <section className="flex justify-between items-center px-36">
          <div className="hero-left">
            <Link to="/home" className="flex items-center gap-3">
              <div>
                <h1 className="text-white font-semibold text-sm tracking-wide">
                  Gian Exequiel G. Roxas
                </h1>
                <p className="text-purple-500 font-normal text-xs tracking-wide">
                  {" "}
                  Software Engineer
                </p>
              </div>
            </Link>
          </div>

          <nav className="hero-middle flex gap-9.5 uppercase tracking-widest">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-xs font-medium transition-colors duration-200 text-white"
                  : "text-xs font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-xs font-medium transition-colors duration-200 text-white"
                  : "text-xs font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? "text-xs font-medium transition-colors duration-200 text-white"
                  : "text-xs font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              }
            >
              Experience
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-xs font-medium transition-colors duration-200 text-white"
                  : "text-xs font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="hero-right flex gap-3">
            <a href="https://github.com/yourusername">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-lg font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              />
            </a>
            <a href="https://linkedin.com/in/yourusername">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-lg font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              />
            </a>
            <a href="https://facebook.com/yourusername">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-lg font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              />
            </a>
            <a href="https://instagram.com/yourusername">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-lg font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              />
            </a>
            <a href="#info">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-lg font-medium transition-colors duration-200 text-gray-400 hover:text-white"
              />
            </a>
          </div>
        </section>
      </footer>

      <section className="px-6 md:px-16 bg-[rgb(10,10,15)]">
        <div className="border-t border-white/10 w-8/10 mx-auto"></div>
        <section>
          <h1 className=" flex justify-center text-xs text-gray-600 py-9 ">
            © 2026 Gian Exequiel Roxas. Built with React, Spring, and MySQL.
          </h1>
        </section>
      </section>
    </>
  );
}
export default Footer;
