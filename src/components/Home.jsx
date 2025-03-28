/* eslint-disable react/prop-types */

import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

const Home = ({ list }) => {
  const typewriterPhrases = [
    `Hi, I am <${list.name}>`,
    "Full Stack Developer",
    "❤️ Problem Solving and Web Apps",
  ];

  return (
    <section id="home" className="bg-black bg-opacity-50 w-full h-screen items-center">
      <img
        className="w-full h-screen object-cover absolute -z-20"
        src="./about.png"
        alt="Background"
      />

      <div className="flex mx-auto flex-col md:flex-row pt-40 md:pt-1 px-10 items-center max-w-4xl h-full space-y-6 md:space-x-10">
        <img
          src="./profile.png"
          alt="Profile"
          className="w-36 h-36 md:w-52 md:h-52 lg:w-60 lg:h-64 rounded-full object-cover mx-auto"
        />

        <div className="flex-1 w-full items-center justify-center space-y-6">
          <div className="text-center text-lg md:text-2xl font-serif text-white">
            <Typewriter
              words={typewriterPhrases}
              loop={true}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <p className="text-center w-full px-10 leading-6 font-serif text-gray-400">
            Full Stack Developer with over 3 years of experience in Java, Spring, React.js, Azure and MySQL. Skilled in building software
            solutions that meet client requirements. Proficient in both development and design, delivering reliable and efficient results. Works
            well with cross-functional teams and communicates effectively with stakeholders. Committed to improving skills and staying updated
            with industry trends.
          </p>

          <div className="flex justify-center space-x-3 w-full mx-auto">
            <SocialIcon url='https://github.com/naveeninakollu' className="w-14 h-14" target="_blank" />
            <SocialIcon url='https://www.linkedin.com/in/naveeninakollu/' className="w-14 h-14" target="_blank" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
