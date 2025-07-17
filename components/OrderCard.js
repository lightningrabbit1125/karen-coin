import React from "react";

const OrderCard = ({ children, order, title, style }) => {
  return (
    <div className={`group relative block min-h-60 w-full ${style} transition-transform	hover:scale-110`}>
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative h-full transform p-2 border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 shadow-lg shadow-gray-500">
        <div className="absolute -left-5 -top-5 border border-black text-red-500 rounded-full w-20 h-20 flex justify-center items-center text-4xl font-semibold font-stopbuck bg-duis">
          <span className="text-center">{order}</span>
        </div>

        <div className="p-4 transition-opacity relative opacity-100 sm:p-6 lg:p-8 font-mono">
          <h3 className="mt-1 text-2xl text-center font-medium sm:text-2xl uppercase font-stopbuck text-[#3d332b] group-hover:underline group-hover:decoration-duis">
            {title}
          </h3>

          <p className="mt-4 text-lg text-justify flex justify-center text-black">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
