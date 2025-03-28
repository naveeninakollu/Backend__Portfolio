/* eslint-disable no-unused-vars */

const Exp = () => {
    const expDetails = [
      {
        company: 'Wells Fargo',
        desig: "Full Stack Developer",
        date: 'November 2023 - Present',
        des: 'As a software engineer, I developed and maintained a high-performance Payments Microservice using Spring Boot, Java, React, and Azure, enhancing real-time transaction processing and reducing payment failures by 20%. By optimizing API response times through strategic caching, I achieved a 25% reduction in latency, significantly improving the speed of high-volume financial transactions. On the front end, I leveraged React and advanced state management to boost performance, ensuring seamless user interactions with financial dashboards. Security was a key focus—I implemented OAuth2 and JWT authentication, cutting unauthorized access by 40% while maintaining compliance with financial regulations. To ensure reliability, I automated testing with JUnit, Mockito, and Cypress, achieving 95% test coverage and reducing critical defects by 35%. Additionally, I streamlined deployments by automating CI/CD pipelines with Azure DevOps and Kubernetes, slashing deployment cycles by 50% while maintaining 99.9% uptime for mission-critical financial applications.',
      },
        {
          company: 'Tata Consultancy Services Limited',
          desig: "Full Stack Developer",
          date: 'August 2022 - December 2022',
          des: 'Specialized in leveraging Java and Spring Boot for crafting robust systems; pivotal in the design, implementation, and maintenance of RESTAPIs with CRUD operations, culminating in a significant 20% improvement in system efficiency and reliability. Deepened expertise in Java programming through hands-on development of scalable and efficient backend solutions, contributing to the advancement of system capabilities and performance.',
        },
        {
          company: 'Bajaj Finserv Health Limited',
          desig: "Software Developer",
          date: 'August 2021 - July 2022',
          des: 'Leveraged Java programming skills for Salesforce development, focusing on Apex code that mirrors Java syntax for scalable solutions. Developed and deployed over 15 Apex classes and triggers, directly contributing to a 25% improvement in application performance and scalability within Salesforce environments.nManaged the task of turning complex business processes into practical Salesforce setups, using Apex for logic on the server side, along with Visualforce and Lightning Web Components to make the user interface interactive. Streamlined operations through declarative customization options, including workflows and process automation leading to a 40% reduction in manual processes. Additionally, gained experience in Vlocity, developing tailored solutions for the insurance and financial services domain.',
        }
       
      ];
    
      return (
    <section id="experience" className="bg-white p-12 w-full flex flex-col md:flex-row md:px-16 h-fit space-y-8 md:items-center md:justify-around mx-auto border-b-[1px]">
          <h2 className="text-2xl font-sans font-bold self-center md:self-start md:mt-8 justify-start text-black border-b-4 border-teal-400 mb-3">WORK</h2>
       
          <div className="flex-1 flex-col md:pl-60 items-center self-start justify-center space-y-8">
            {expDetails.map((ex, index) => (
              <div key={index} className="flex flex-col space-y-3 ">
                <h3 className="text-2xl text-black font-bold ">{ex.company}</h3>
                <p className="text-black text-opacity-60 italic">{ex.desig}</p>
                <p className="text-black text-opacity-60 italic">{ex.date}</p>
                <p className="text-black text-opacity-60 italic text-justify">Description  - {ex.des}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Exp