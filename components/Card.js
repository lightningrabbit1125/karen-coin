import React from "react";
import Image from "next/image";

const Card = ({ props: { img, title, desc } }) => {
  return (
    <div className="group relative block h-80 sm:h-96 max-w-80">
      <span className="absolute inset-0 bg-duis rounded-xl border-2 border-dashed border-black"></span>

      <div className="relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
        <div className="h-full transition-opacity grid grid-rows-4">
          <div className="row-span-3 flex justify-center items-center border-b-2 rounded-b-xl border-black">
            <Image
              src={`/${img}`}
              alt={title}
              width={500}
              height={500}
              unoptimized
              className="h-full object-cover"
            />
          </div>

          <div className="py-3 text-center font-stopbuck">
            <h2 className="text-2xl font-medium uppercase text-duis">
              {title}
            </h2>
            <p className="text-lg sm:text-2xl font-thin text-black">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
