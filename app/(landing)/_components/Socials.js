import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.co/sIMueX2XTQ",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://x.com/KAREN0XC",
    title: "x",
    icon: "X",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
