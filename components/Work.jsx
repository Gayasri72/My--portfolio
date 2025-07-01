import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Work = ({isDarkMode}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? workData : workData.slice(0, 4);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-my-20">
      <h4 className="text-center mb-2 text-lg font-Ovo ">
        My Portfolio
      </h4>
      <h2 className="text-center text-5xl font-Ovo ">
        My Latest Works
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ">
        I specialize in creating dynamic and responsive web applications using
        the latest technologies. My services include:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          >
            <div className="bg-white  w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 ">
                  {project.description}
                </p>
              </div>
              <div className="border rounded-full border-black  w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]  group-hover:bg-lime-300  transition">
                <Image src={assets.send_icon} alt="send-icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && workData.length > 4 && (
        <button
          onClick={handleShowMore}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Show More{" "}
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt=""
            className="w-4"
          />
        
        </button>
      )}

      {showAll && workData.length > 4 && (
        <button
          onClick={handleShowLess}
          className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-300 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 dark:hover:bg-gray-800 duration-500"
        >
          Show Less{" "}
          <Image
            src={assets.right_arrow_bold}
            alt=""
            className="w-4 dark:hidden rotate-180"
          />
          <Image
            src={assets.right_arrow_bold_dark}
            alt=""
            className="w-4 hidden dark:block rotate-180"
          />
        </button>
      )}
    </div>
  );
};

export default Work;
