/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "./Button";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div
      className="relative flex text-center flex-col md:text-left md:flex-row max-w-7xl
       px-10 h-screen justify-evenly overflow-hidden   mx-auto items-center space-y-10 "
    >
      <h3 className="absolute top-40 lg:top-16 text-3xl mb-5 xl:text-3xl md:text-4xl md:mb-[6rem] font-semibold
       uppercase tracking-[10px] text-gray-500">
        Get In Touch
      </h3>
      <div className="flex flex-col items-center justify-center text-center max-w-3xl tracking-widest 
       font-normal xl:font-semibold m">
         <p className="text-sm xl:mb-16">
         Ready to take your web projects to the next <span className="underline decoration-black decoration-2">level</span>? <br/> Let's collaborate and create exceptional 
         user experiences together.
         <br/> Contact me now and let's discuss 
         how I can contribute to your frontend development needs. Reach out and let's build something amazing!
         </p>
            <Button title="Say Hello" />
            <div className="absolute bottom-10 space-x-4">
      <SocialIcon
          network="github"
          bgColor="transparent"
          fgColor="#464646"
          url="https://github.com/deji-ice"
          target="_blank"
          className="h-2 w-2  hover:text-black hover:animate-pulse transition duration-200 ease-in-out rounded-full border-spacing-10 "
        />
      <SocialIcon
          network="twitter"
          bgColor="transparent"
          fgColor="#1DA1F2"
          url="https://twitter.com/DEJIxICE"
          target="_blank"
          className="h-2 w-2 filter grayscale  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
        <SocialIcon
          network="linkedin"
          bgColor="transparent"
          fgColor="#0077b5"
          url="https://www.linkedin.com/in/ayodeji-atanda/"
          target="_blank"
          className="h-2 w-2 filter grayscale  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
        <SocialIcon
          network="instagram"
          bgColor="transparent"
          fgColor="#e91578"
          url="https://www.instagram.com/deji_ice/"
          target="_blank"
          className="h-2 w-2 filter grayscale  hover:filter-none hover:animate-pulse transition duration-200 ease-in-out"
        />
      </div>
      <p className="text-xs absolute bottom-5 tracking-wide font-normal">Created by twitter user @dejixice @2023</p>
      </div>
     
    </div>
  );
};

export default ContactMe;
