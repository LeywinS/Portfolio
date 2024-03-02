import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute z-[20] right-0  px-[5px]">
      <div className=" text-[20px] font-medium text-center bg-white text-gray-300">
        <a
          className="text-white cursor-pointer"
          target="_blank"
          href="https://github.com/LeywinS"
        >
          <Image
            className="z-20 text-white"
            src={"/github-142-svgrepo-com.svg"}
            alt="github"
            width={25}
            height={25}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
