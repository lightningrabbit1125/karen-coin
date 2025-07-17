import React from "react";
import * as Icon from "@/components/icons";

const LinkCardCircle = ({ props: { link, icon } }) => {
  const IconComponent = Icon[icon];

  return (
    <a href={link} target="_blank" className="group">
      <div className="aspect-square text-lg sm:text-2xl md:text-4xl bg-[#3d332b] border-4 border-duis w-fit rounded-full p-2 sm:p-4 text-center text-white flex flex-col gap-5 group-hover:bg-duis group-hover:border-[#3d332b] group-hover:scale-125">
        <div className="flex justify-center group-hover:text-[#3d332b]">
          <IconComponent />
        </div>
      </div>
    </a>
  );
};

export default LinkCardCircle;
