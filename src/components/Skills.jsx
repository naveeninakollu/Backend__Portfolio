import { FaAws, FaJava,FaPython,FaHtml5,FaCss3Alt,FaDocker,FaSalesforce } from "react-icons/fa";
import { RiJavascriptFill,RiReactjsFill } from "react-icons/ri";
import { SiMysql,SiMongodb,SiFirebase,SiFlask,SiSpringboot,SiTailwindcss } from "react-icons/si";
import {APIManagement} from 'azure-react-icons';
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
    const icons=[
        {
            id:1,
            name:"Java",
            icon: <FaJava className="size-14 md:size-20 "/>
        },
        {
            id:2,
            name:"Python",
            icon: <FaPython className="size-14 md:size-20 "/>
        },
        {
            id:3,
            name:"HTML",
            icon: <FaHtml5 className="size-14 md:size-20" color="orange"/>
        },
        {
            id:4,
            name:"CSS",
            icon: <FaCss3Alt className="size-14 md:size-20" color="darkblue"/>
        },
        {
            id:5,
            name:"JavaScript",
            icon: <RiJavascriptFill className="size-14 md:size-20" color=""/>
        },
        {
            id:6,
            name:"MySQL",
            icon: <SiMysql className="size-14 md:size-20"/>
        },
        {
            id:7,
            name:"MongoDB",
            icon: <SiMongodb className="size-14 md:size-20" color="green"/>
        },
        {
            id:8,
            name:"ReactJS",
            icon: <RiReactjsFill className="size-14 md:size-20" color="skyblue"/>
        },
        {
            id:9,
            name:"Docker",
            icon: <FaDocker className="size-14 md:size-20" color="blue"/>
        },        
        {
            id:10,
            name:"Firebase",
            icon: <SiFirebase className="size-14 md:size-20" color="yellow"/>
        },
        {
            id:11,
            name:"Salesforce",
            icon: <FaSalesforce className="size-14 md:size-20" color="lightblue"/>
        },
        {
            id:12,
            name:"Flask",
            icon: <SiFlask className="size-14 md:size-20"/>
        },
        {
            id:13,
            name:"Springboot",
            icon: <SiSpringboot className="size-14 md:size-20"/>
        },
        {
            id:14,
            name:"Tailwind CSS",
            icon: <SiTailwindcss className="size-14 md:size-20" color="skyblue"/>
        },
        {
            id:15,
            name:"Azure Cloud",
            icon: <APIManagement className="size-14 md:size-20"/>
        },
        {
            id:16,
            name:"C Sharp",
            icon: <TbBrandCSharp className="size-14 md:size-20"  />
        },
        
        
        
    

    ]
    
    return (
        <section id="skills" className="bg-white p-12 w-full flex flex-col md:flex-row md:px-16 h-fit space-y-5 md:items-center mx-auto border-b-[1px]">
          <h2 className="text-2xl font-sans font-bold self-center md:self-start md:mt-8 justify-start text-black border-b-4 border-teal-400 mb-3">SKILLS</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-x-8 md:pl-56 lg:gap-8 place-items-center ">
            {icons.map((icon, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 ">
                    <div className="text-6xl">{icon.icon}</div>
                    <p className="text-black">{icon.name}</p>
                </div>
            ))}
          </div>
        </section>
    );
}

export default Skills