import Image from "next/image";

import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import HowToBuy from "./_components/HowToBuy";
import WallOfLove from "./_components/WallOfLove";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <div className="bg-[var(--background)]">
        <About />
        <Exchanges />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <Image
                className=""
                src="/collection/5.png"
                width={300}
                height={300}
                alt="dui-5"
              />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <Tokenomics />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-duis"></span>
            <div>
              <Image
                className=""
                src="/collection/7.png"
                width={300}
                height={300}
                alt="dui-7"
              />
            </div>
            <span className="h-[3px] flex-1 bg-duis"></span>
          </span>
        </div>

        <HowToBuy />
        
        {/* <WallOfLove /> */}
        <Footer />
      </div>
    </>
  );
}
