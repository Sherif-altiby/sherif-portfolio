import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Nav from "./components/navbar/Nav"
import Projects from "./components/projects/Projects"
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const App = () => {
  return (
    <div className="font-poppins bg-[#fafaff] relative overflow-hidden" >
      <Nav />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <div className=" absolute bottom-[100px] sm:bottom-[150px] left-[40%] md:fixed md:left-5 md:top-[40%] flex gap-5 md:flex-col" >
        <a href="https://www.linkedin.com/in/sherif-altiby-38b350229/" className="text-4xl cursor-pointer md:block text-dark  hover:text-btnColor duration-200  "><FaLinkedin /></a>
        <a href="https://github.com/Sherif-altiby" className="text-4xl cursor-pointer md:block text-dark  hover:text-btnColor duration-200  "><IoLogoGithub /></a>
      </div>
    </div>
  )
}

export default App