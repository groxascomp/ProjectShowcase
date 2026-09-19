import "./styles/global/Global.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Sorry from "./pages/secondarypage/Sorry";
import TestLoading from "./pages/TestLoading";
import Intro from "./pages/secondarypage/Intro";
import MaintenancePage from "./pages/secondarypage/MaintenancePage";
import Whyyouhere from "./pages/secondarypage/Whyyouhere";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/sorry" element={<Sorry />} />
      <Route path="/testloading" element={<TestLoading />} />
      <Route path="/maintenancepage" element={<MaintenancePage/>} />
      <Route path="*" element={<Whyyouhere/>} />
      
    </Routes>
  );
}

export default App;
