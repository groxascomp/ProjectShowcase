


import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </>
  )
}

export default Hero