import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top" className="text-3xl  cursor-pointer mr-14">
          Gayasri .
        </a>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail-icon" className="w-6" />
          gayasripethum1@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Gayasri Pethum.All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Gayasri72" className="text-gray-500 hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/gayasri-pethum-123456789/" className="text-gray-500 hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://medium.com/@gayasripethum1" className="text-gray-500 hover:underline">
              Medium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
