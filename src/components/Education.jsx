
const Education = () => {
    const educationDetails = [
        {
          school: 'University at Buffalo',
          degree: "Master's Degree, Computer Science",
          date: 'January 2023 - June 2024',
          gpa: '3.60',
        },
        {
          school: 'VIT AP University',
          degree: "Bachelor's Degree, Computer Science",
          date: 'July 2018 - May 2022',
          gpa: '8.99',
        },
        // ... add more if needed
      ];
    
      return (
        <section id="education" className="bg-white p-20 w-full flex flex-col md:flex-row md:px-16 h-fit space-y-8 md:items-center md:justify-around mx-auto border-b-[1px]">
          <h2 className="text-2xl font-sans font-bold self-center md:self-start md:mt-8 justify-start text-black border-b-4 border-teal-400 mb-3">EDUCATION</h2>
          {/* <div className="border-t-4 border-teal-400 w-16 mb-6 flex"></div> */}
          <div className="flex-1 flex-col md:pl-44 items-center self-start justify-center space-y-4">
            {educationDetails.map((edu, index) => (
              <div key={index} className="flex flex-col space-y-5">
                <h3 className="text-2xl text-black font-bold ">{edu.school}</h3>
                <p className="text-black text-opacity-60 italic">{edu.degree}, {edu.date}</p>
                <p className="text-black text-opacity-60 italic">GPA - {edu.gpa}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Education