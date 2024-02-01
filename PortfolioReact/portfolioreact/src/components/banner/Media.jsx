import React from 'react'
import { FaBootstrap, FaLinkedinIn, FaReact, } from "react-icons/fa";
import { SiGithub,SiGmail,SiHtml5,SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/yonx44" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:sanderlawrence@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/dion-eliot-ect-650249211/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST WEB STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media