import React from "react";
import Image from "next/image";
import Socials from "./Socials";

import { contractAddress } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="text-center font-stopbuck mt-16 pb-5 border-t border-gray-100 pt-8">
        <div className="my-5 mb-10">
          <Socials />
        </div>
        <div>
          <p className="text-md/relaxed text-gray-500 dark:text-gray-300 pb-50">
            © &nbsp; <span className="text-duis text-shadow">KAREN</span>{" "}
            community 2025.
            <br />
            <span className="underline decoration-duis">
              {"All cutes reserved for duis's dawgs."}
            </span>
          </p>
          <p className="text-black dark:text-gray-100 mt-4 px-3 text-base sm:text-lg md:text-2xl opacity-30 break-words">
            {contractAddress}
          </p>
        </div>
      </div>
      <div className="overflow-hidden relative h-24">
        <img className="absolute bottom-0 w-full" src="grass.svg" alt="grass" />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-center items-center gap-4 pb-4">
          <span className="font-stopbuck text-5xl uppercase text-duis text-shadow">$KAREN</span>
          <Image
            className="inline-block align-middle"
            src="/collection/1.png"
            width={100}
            height={100}
            alt="dui 1"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
