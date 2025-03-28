const Cert = () => {
  const certDetails = [
    {
      Name: 'Microsoft Certified',
      description: "Azure Fundamentals (AZ-900)",
      date: 'December 2024',
      link: "https://learn.microsoft.com/en-us/users/naveeninakollu-1818/credentials/d88165052cd08ce1",
    },
    {
      Name: 'Hewlett Packard Enterprise:',
      description: "Software Engineering Job Simulation",
      date: 'January 2025',
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_KFjMDW4SvaTDikN2C_1738605060830_completion_certificate.pdf",
    },
    {
      Name: 'Microsoft Certified',
      description: "Azure Associate Developer (AZ-204)",
      date: 'March 2025',
      link: "https://learn.microsoft.com/en-us/users/naveensaitejainakollu-5935/credentials/1e347518e2d82ef4?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
  ];

  return (
    <section
      id="certification"
      className="bg-white p-12 w-full flex flex-col md:flex-row md:px-16 h-fit space-y-8 md:items-center md:justify-around mx-auto border-b-[1px]"
    >
      <h2 className="text-2xl font-sans font-bold self-center md:self-start md:mt-8 justify-start text-black border-b-4 border-teal-400 mb-3">
        CERTIFICATIONS
      </h2>
      <div className="flex-1 flex-col md:pl-44 items-center self-start justify-center space-y-4">
        {certDetails.map((cert, index) => (
          <div key={index} className="flex flex-col space-y-5">
            <h3 className="text-2xl text-black font-bold">{cert.Name}</h3>
            <p className="text-black text-opacity-60 italic">
              {cert.description}, {cert.date}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200 w-fit text-center"
            >
              Click to View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cert;
