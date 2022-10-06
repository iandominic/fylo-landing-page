import React from "react";
import intro from "../img/illustration-intro.png";

const Body = () => {
  return (
    <div className="raleway py-[1.6rem] flex flex-col text-white text-center w-full h-full mx-auto items-center">
      <img className="w-[300px]" src={intro} alt="" />
      <h1 className="text-2xl font-bold px-6 pt-[2.1rem] leading-[2.3rem]">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-[0.9rem] px-10 py-3 pb-8">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="blue-btn px-[77px] py-[13px] rounded-full text-[0.9rem] font-semibold">Get Started</button>
    </div>
  );
};

export default Body;
