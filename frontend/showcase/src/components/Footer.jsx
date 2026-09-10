import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <>
        <footer class="border-t border-white/10 px-6 md:px-16 py-5  bg-[rgb(10,10,15)]" >

        <section class="flex justify-between items-center px-8">
        <div className='hero-left'>
            <Link to="/home" className="flex items-center gap-3">
                
                <div>
                    <h1 className="text-white font-semibold text-base tracking-wide">Gian Exequiel G. Roxas</h1>
                    <p className='text-purple-500 font-normal text-sm text-base tracking-wide'> Software Engineer</p>
                </div>
            </Link>
        </div>

        <nav className="hero-middle flex gap-9.5 " style={{ paddingRight: "20px" }}>
            <NavLink 
                to="/about" 
                className={({ isActive }) =>
                    isActive
                    ? "text-sm font-medium transition-colors duration-200 text-white"
                    : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"}
                >
                About
            </NavLink>
            <NavLink 
                to="/projects" 
                className={({ isActive }) =>
                    isActive
                    ? "text-sm font-medium transition-colors duration-200 text-white"
                    : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"}
                >
                Projects
            </NavLink>
            <NavLink 
                to="/experience" 
                className={({ isActive }) =>
                    isActive
                    ? "text-sm font-medium transition-colors duration-200 text-white"
                    : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"}
                >
                Experience
            </NavLink>
            
            <NavLink 
                to="/contact" 
                className={({ isActive }) =>
                    isActive
                    ? "text-sm font-medium transition-colors duration-200 text-white"
                    : "text-sm font-medium transition-colors duration-200 text-gray-400 hover:text-white"}
                >
                Contact
            </NavLink>
        </nav>


        <div className="hero-right flex gap-3">
            <a href="https://github.com/yourusername">
                <FontAwesomeIcon icon={faGithub} className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/yourusername">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white" />
            </a>
            <a href="https://facebook.com/yourusername">
                <FontAwesomeIcon icon={faFacebook} className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white" />
            </a>
            <a href="https://instagram.com/yourusername">
                <FontAwesomeIcon icon={faInstagram} className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white" />
            </a>
            <a href="#info">
                <FontAwesomeIcon icon={faInfoCircle} className="text-xl font-medium transition-colors duration-200 text-gray-400 hover:text-white" />
            </a>
        </div>


      </section >

        </footer>

        <section class="px-6 md:px-16 bg-[rgb(10,10,15)]">
            <div class="border-t border-white/10 w-3/4 mx-auto"></div>
            <section>
                <h1 class=" flex justify-center text-xs text-gray-600 py-9 " >© 2026 Gian Exequiel Roxas. Built with React, Spring, and MySQL.</h1>
            </section>
        </section>


        </>


    )


}
export default Footer