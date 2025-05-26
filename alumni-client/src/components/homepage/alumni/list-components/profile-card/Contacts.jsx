import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaGlobe } from "react-icons/fa";

function Contacts({ item }) {
  return (
    <div className="flex justify-left w-full">
      <div className="flex gap-4 items-center text-xl dark:text-gray-300">
        {item?.github && (
          <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-xl text-black dark:hover:text-white">
            <FaGithub />
          </a>
        )}
        {item?.facebook && (
          <a href={item.facebook} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-500">
            <FaFacebook />
          </a>
        )}
        {item?.linkedin && (
          <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-800">
            <FaLinkedin />
          </a>
        )}
        {item?.portfolio && (
          <a href={item.portfolio} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-500">
            <FaGlobe />
          </a>
        )}
      </div>
    </div>
  );
}

export default Contacts;
