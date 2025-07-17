import React from "react";
import Card from "@/components/Card";

const cards = [
  {
    img: "max-supply.gif",
    title: "Max Supply",
    desc: "1.000.000.000",
  },
  {
    img: "tax.gif",
    title: "Tax",
    desc: "0%",
  },
  {
    img: "burn.gif",
    title: "Liquidity",
    desc: "Burnt",
  },
  {
    img: "solana.gif",
    title: "Network",
    desc: "Solana",
  },
];

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Tokenomics
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black dark:text-white">
          {`It's Moonshot tokenomics!`}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-flow-col gap-5 gap-y-20 justify-center justify-items-center">
        {cards.map((card, idx) => (
          <div key={idx} className="shrink-0">
            <Card props={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
