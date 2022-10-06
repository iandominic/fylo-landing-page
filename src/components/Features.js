import React from "react";
import access from "../icons/icon-access-anywhere.svg";
import security from "../icons/icon-security.svg";
import collab from "../icons/icon-collaboration.svg";
import anyfile from "../icons/icon-any-file.svg";

const featureData = [
  {
    icon: access,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: security,
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: collab,
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: anyfile,
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const Features = () => {
  return (
    <div className="h-full w-full text-white raleway mt-[106px]">
      <div className="w-full flex flex-col text-center items-center mx-auto gap-20">
        {featureData.map((obj, i) => (
          <div key={i} className="flex flex-col items-center">
            <img className="w-[65px]" src={obj.icon} alt="1" />
            <h1 className="font-bold text-lg pt-[30px] pb-[6px]">{obj.title}</h1>
            <p className="px-[22px] text-[0.9rem] leading-[21px]">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
