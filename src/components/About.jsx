/* eslint-disable react/prop-types */
import { FaDownload } from 'react-icons/fa';

function About({ list }) {
  return (
    <section
      id="about"
      className="bg-[#2B2B2B] items-start py-24 px-16 w-full flex flex-col md:flex-row md:justify-between space-y-10 md:space-x-6"
    >
      <div className="w-full md:w-2/3 items-center text-justify">
        <h1 className="text-white text-3xl w-fit font-bold mb-3 border-b-4 border-teal-400">
          About Me
        </h1>
        <p className="text-gray-300 leading-7">
          {/* You can also fetch description from backend if you add a "bio" field */}
          Full Stack Developer with 3+ years of experience building scalable, high-performance applications using Java, Spring Boot, React.js, and Azure. With a Master’s in Computer Science from SUNY Buffalo, I’ve worked at Wells Fargo to optimize real-time payments, enhance security, and boost API performance. At TCS, I built microservices for Western Union, improving system efficiency by 20%, and automated Salesforce flows at Bajaj Finserv Health. I take end-to-end ownership — from gathering requirements to production support — and I’m known for clean code and reliable documentation. When systems break, I step up early, raise issues transparently, and help drive resolution. I recently led a performance fix for a platform with 10K+ concurrent users, achieving 99.9% message reliability. I don’t just code — I take initiative, prioritize smartly, and follow through. Certified in Azure (AZ-204, AZ-900), I’m passionate about building secure, cloud-native systems that solve real problems.

I value teamwork and collaboration, and I thrive in fast-paced environments where clear communication drives progress. I believe in documenting as I go — not just for others, but to improve my own clarity. Outside work, I love exploring tech trends, mentoring juniors, and building side projects that challenge my thinking. </p>
      </div>

      <div className="w-full md:w-1/3 items-center self-start text-justify">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-3">
          Contact Details
        </h1>
        <p className="text-gray-300 leading-7">
          {list.name}
          <br />
          {list.address1}
          <br />
          {list.address2}
          <br />
          {list.phone}
          <br />
          {list.email}
        </p>
        <a
          href={list.resume}
          target="_blank"
          rel="noreferrer"
          className="px-4 mt-8 py-2 w-fit bg-gray-600 text-white font-bold rounded hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
        >
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </div>
    </section>
  );
}

export default About;
