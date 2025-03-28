const Projects = () => {

  const pro=[
      {
          "title": "Attrition of a company",
          "category": "Attrition classifier with various ML Algorithms",
          "image": "./att.png",
          "url": "https://github.com/naveeninakollu/attrition-of-a-company"
        },
        {
          "title": "Netflix-Clone",
          "category": "Clone Build with ReactJs, firebase and netlify",
          "image": "./netflix.png",
          "url": "https://relaxed-goldwasser-dae2b5.netlify.app"
        },
        {
          "title": "Portfolio",
          "category": "Developed a digital resume using ReactJS",
          "image": "./portfolio.png",
          "url": "https://naveenportfolio.netlify.app/"
        }
  ]
return (
  <section id="projects" className='flex-col bg-[#ebeeee] mx-auto justify-center text-center w-full pt-12 font-bold text-gray-500'>
  <h1>CHECK OUT SOME OF MY WORKS</h1>
  <div className='flex flex-wrap justify-center pt-2 pb-12 items-center'>
    {pro.map((project, index) => (
      <div key={index} className='w-full md:w-auto p-4 flex justify-center'>
        <div className="relative group">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
            <img src={project.image} alt={project.title} className="w-56 -z-10 h-32 object-cover transition-opacity duration-300 group-hover:opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black  opacity-0 group-hover:opacity-65 transition-opacity duration-300">
              <p className="text-white text-sm md:text-sm font-bold transition-all duration-300 ">{project.title}</p>
              <p className="text-white text-xs md:text-xs transition-all duration-300 ">{project.category}</p>
            </div>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
)
}

export default Projects
