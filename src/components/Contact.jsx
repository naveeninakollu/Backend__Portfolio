/* eslint-disable react/prop-types */
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = ({ list }) => {
  return (
    <section id='contact' className="bg-[#2B2B2B] shadow-lg p-8 text-white">
      <div className="flex justify-start items-center">
        <h2 className="text-2xl text-white font-semibold border-b-4 border-teal-400 mb-3">CONTACT</h2>
      </div>
      <p className="mb-8">Get in Touch: I'd love to hear from you</p>
      
      <div className="space-y-5">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-2" />
          <span>Location: {list.address1}, {list.address2}</span>
        </div>

        <div className="flex items-center">
          <FaEnvelope className="text-blue-500 mr-2" />
          <span>Email: {list.email}</span>
        </div>

        <div className="flex items-center">
          <FaPhone className="text-blue-500 mr-2" />
          <span>Call: {list.phone}</span>
        </div>

        <div className="flex items-center">
          <FaLinkedin className="text-blue-500 mr-2" />
          <a
            href="https://www.linkedin.com/in/naveeninakollu/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            LinkedIn: naveen-inakollu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
