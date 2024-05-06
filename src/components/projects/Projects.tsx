import img1 from "../../assets/images/mymind-responsive.png";
import img2 from "../../assets/images/pokedex-responsive.png";
import img3 from "../../assets/images/renr-responsive.png";

import { FaArrowRight } from "react-icons/fa6";

import { ProjectsType } from "../Types";

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const projects: ProjectsType = [
    {
        id: 1,
        title: "Quran App",
        description: "An App where you can read any surah of holly quran and you can also to listen to it",
        img: img1,
        skills: ["HTML", "SASS", "React",],
        link: "https://sherif-altiby.github.io/quran/"
    },
    {
        id: 2,
        title: "Book Store",
        description: "An app show you a list of beautiful books and you can searc about waht you need",
        img: img2,
        skills: ['HTML', "SASS", "React"],
        link: "https://sherif-altiby.github.io/bookstore/"
    },
    {
        id: 3,
        title: "Food Cafe",
        description: "An food website diplays alot of good meals and you can choose waht you love and buy it ",
        img: img3,
        skills: ["HTML", "CSS", "JS"],
        link: "https://sherif-altiby.github.io/foodres.github.io/"
    },
]

const Projects = () => {
  
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="pb-12" id = "projects" >
        <div className="container ml-auto mr-auto">
          <h1 className="text-pColor ml-auto mr-auto mb-14 w-fit" data-aos="fade-right" data-aos-duration="1500">Projects</h1>
          <div className="lg:pl-14 lg:pr14 flex flex-col justify-center items-center gap-14" >
            {
               projects.map((project) => (
                <div key={project.id} className="flex gap-0 flex-col lg:flex-row w-[95%] md:w-auto" data-aos="fade-left" data-aos-duration="1500" >
                     <div className=" h-[250px] sm:h-[300px] lg:w-[450px] " ><img className="w-full h-full rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl lg:rounded-tr-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]" src={project.img} alt="project_img" /></div>
                     <div className="p-3 sm:p-10  sm:h-[300px] text-center lg:text-left lg:w-[500px] rounded-br-md lg:rounded-tr-md rounded-bl-xl lg:rounded-bl-none bord shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] pl-5 flex flex-col justify-center	" >
                        <h1 className="ms:text-3xl text-xl" > {project.title} </h1>
                        <p className="sm:mt-3 text-pColor text-dark text-lg sm:text-xl" > {project.description} </p>
                        <div className="flex my-2 ms:my-4 gap-2 sm:gap-5 justify-center lg:justify-start" >
                            { project.skills.map(skill => ( <div className="bg-gray-200 shadow-md py-3 px-6 rounded-md text-dark" key={skill}  data-aos="flip-left" data-aos-duration="1500" > {skill} </div> )) }
                        </div>
                        <div className=" bg-btnColor w-fit text-light cursor-pointer hover:bg-[#126ffa] duration-200 rounded-md py-3 px-4 m-auto lg:m-0" data-aos="zoom-in" data-aos-duration="1500" > <a href={project.link} className="no-underline text-light flex items-center gap-2" > <div className="font-bold" > Demo</div> <div className="mt-1"> <FaArrowRight /> </div> </a> </div>
                     </div>
                </div>
               ))
            }
          </div>
        </div>
    </div>
  )
}

export default Projects