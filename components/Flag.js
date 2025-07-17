import React from "react";
import * as flags from "@/components/flags";

const Flag = ({ props: { flag, title, link } }) => {
  const FlagComponent = flags[flag];

  return (
    <a href={link} target="_blank">
      <div className={`relative group flex justify-center`}>
        <div>
          <FlagComponent />
        </div>
        <div className=" transition-opacity duration-300 absolute opacity-0 group-hover:block group-hover:opacity-100 bg-duis text-white text-shadow rounded-2xl py-5 px-9 bg-opacity-75 flex justify-center w-fit ">
          <h3 className="font-stopbuck text-3xl">{title}</h3>
        </div>
      </div>
    </a>
  );
};

export default Flag;
