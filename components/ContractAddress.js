"use client";

import React, { useState } from "react";
import { Copy } from "@/components/icons";

import { contractAddress } from "@/constants";

const ContractAddress = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [textToCopy] = useState(contractAddress);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="group relative block">
      <span className="absolute inset-0 bg-duis rounded-xl border-2 border-dashed border-black"></span>

      <div className="relative h-full transform rounded-xl border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
        <div className="rounded-xl relative shadow-lg shadow-gray-700 hover:shadow-none transition duration-300">
          <div className="relative">
            <input
              className="w-full bg-gray-100 p-4 pe-24 text-sm sm:text-base md:text-2xl font-stopbuck font-medium rounded-xl text-ellipsis text-black"
              contentEditable={false}
              defaultValue={textToCopy}
            />

            <button
              onClick={copyText}
              className="absolute end-1 top-1/2 -translate-y-1/2 transition duration-200 font-stopbuck text-2xl rounded-xl px-3.5 py-2.5 font-medium text-duis shadow-2xl bg-gray-700 hover:bg-duis hover:text-gray-800 hover:outline-black outline outline-2 outline-offset-0"
            >
              <Copy />
            </button>
          </div>
        </div>
      </div>
      {copySuccess && (
        <div className="absolute end-20 top-1/2 -translate-y-1/2">
          <p className="text-sm sm:text-base md:text-md text-green-600 font-stopbuck">
            Copied!
          </p>
        </div>
      )}
    </div>
  );
};

export default ContractAddress;
