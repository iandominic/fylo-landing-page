import React from "react";
import teams from "../img/illustration-stay-productive.png";

const Team = () => {
  return (
    <div className="px-[1.2rem] flex flex-col text-center items-center text-white raleway h-screen w-full mx-auto mt-[10rem]">
      <img className="pb-[49px] mx-auto w-[300px]" src={teams} alt="" />
      <h1 className="tracking-[0.6px] text-lg font-bold pb-[13px]">Stay productive, wherever you are</h1>
      <p className="pb-[13px] text-[0.9rem] text-left px-[0.8rem]">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p className="text-[0.9rem] text-left px-[0.8rem]">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <a className="text-left text-[0.9rem]">See how Fylo works</a>
    </div>
  );
};

export default Team;
