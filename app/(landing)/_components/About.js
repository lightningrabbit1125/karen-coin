import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div
        id="about"
        className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto slide-in-left bg-white dark:bg-[#18181b] rounded-2xl shadow-xl transition-colors"
      >
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14 dark:text-duis">
            About Karen Coin
          </h2>
         
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] dark:text-gray-100 tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">$KAREN</span>, affectionately
                known as the{" "}
                <span className="font-semibold italic">{'"meme dog"'}</span>{" "}
                captured the hearts of millions worldwide with his one-of-a-kind
                appearance and hilariously expressive face.{" "}
              </p>
              <p className="indent-12 mt-3">
                His photos first went viral in early 2020, became an instant
                internet sensation. People adored his quirky expressions, which
                seemed to perfectly match countless relatable moods, turning{" "}
                <span className=" italic font-bold">Dui</span> into a staple of
                internet humor.
              </p>
              <p className="indent-12 mt-3">
                His lovable nature brought joy and laughter to a global audience
                during challenging times, making him a symbol of light-hearted
                fun.

              </p>
              
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] dark:text-gray-100 tracking-widest text-center">
          
          <h3>
                Karen found out about memecoins.. and she's DEMANDING liquidity.<br/>
                <br/>
                @KAREN drops July 19 on Solana<br/>
                💵  $500 in $KRN to 10 winners!<br/>
                <br/>
                To enter:<br/>
                TR, follow @KARENOXC. and tag 3 friends<br/>
                <br/>
                Outrage is bullish. Karen is watching 👀
              </h3>
          <p className="text-4xl p-10">
            But now{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              $KAREN
            </span>{" "}
            is forever on{" "}
            <span className="text-5xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
