import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import twitterLogo from "@/assets/svg/twitter_logo.svg";
import h from "@/assets/svg/h.svg";
import Shu from "@/assets/team/shu.svg";
import Bill from "@/assets/team/bill.svg";
import Uri from "@/assets/team/uri.svg";
import Sam from "@/assets/team/sam.svg";
import Sandeep from "@/assets/team/sandeep.svg";
import Will from "@/assets/team/will.svg";
import Michael from "@/assets/team/michael.svg";
import Yuze from "@/assets/team/yuze.svg";
import p1 from "@/assets/partners/facebook.svg";
import p2 from "@/assets/partners/whatsapp.svg";
import p3 from "@/assets/partners/3.svg";
import p4 from "@/assets/partners/libra.svg";
import p5 from "@/assets/partners/novi.svg";
import p6 from "@/assets/partners/ecosysystem.svg";
import p7 from "@/assets/partners/nyu.svg";
import p8 from "@/assets/partners/northwestern.svg";
import p9 from "@/assets/partners/2.svg";
import p10 from "@/assets/partners/3.svg";
import p11 from "@/assets/partners/4.svg";
export default function Home() {
 
  return (
    <main className="flex w-full h-screen flex-col items-center justify-start overflow-y-auto">
      {/* header */}
      <header className="bg-black h-[80px] w-[100%] items-center justify-between font-mono text-sm flex flex-shrink-0 md:px-12 border-b border-white md:border-b-0 pl-[32px] pr-[21px]">
        <p className="flex items-center">
          <a href="/">
            <Image
              alt="logo"
              src={logo}
              className="md:w-10 md:h-10 w-[30px] h-[30px]"
            />
          </a>
          <span className="text-white text-[28px] text-[900] ml-4">MIZU</span>
        </p>
        <div className="flex items-end justify-center bg-gradient-to-t dark:from-black dark:via-black">
          {/* <a
            href="https://twitter.com/0xMizuApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="twitter_logo" src={twitterLogo} className="w-12 h-12" />
          </a> */}
        </div>
      </header>
      {/* section */}
      <section className="bg-black flex flex-1 justify-between md:items-center w-full h-full md:pl-[130px] md:pr-[160px] pb-[10%] px-[32px] md:mt-0 flex-col">
        <article className="flex md:flex-row flex-col-reverse md:mt-[60px]">
          <div className="flex flex-col items-center md:items-start w-[100%]">
            <span className="block text-white font-medium md:text-7xl md:leading-[67px] text-[32px] text-left w-[100%]">
              <span className="text-[#06D458] font-medium md:text-7xl md:leading-[80px] block md:inline">
                The First
              </span>{" "}
              Synthetic AI Data Network
            </span>
            <span className="block text-white font-medium text-7xl md:text-[24px] md:leading-[28px] leading-[30px] tracking-[-0.5px] md:mt-14 text-[20px] text-left mt-[24px]">
              Real-world data is expensive, chaotic, limited and not scalable.
              Data is the ultimate bottleneck for AI
            </span>
          </div>
          <div className="block">
            <Image alt="logo" src={h} className="h-[300px]" />
          </div>
        </article>
        <div className="mt-[40px]">
          <h2 className="text-[30px] text-center my-[20px]">
            Why do we need the Mizu synthetic AI data networks ?
          </h2>
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col flex-1 gap-3">
              <span className="text-[24px] mb-[8px] text-[rgb(24, 32, 38)]">
                Data is the ultimate bottleneck for AI,Synthetic Data is the
                future
              </span>
              <span className="text-[#ccc] text-[20px]">
                <span className="mb-[12px] inline-block">
                  Reality(2024): More than 90% of training data of GPT-5 is
                  already synthetic data!
                </span>
                <span>
                  Gartner(2021) predicted that synthetic Data will overshadow
                  real-world data for AI models before 2030.
                </span>
              </span>
            </div>

            <div className="flex flex-col flex-1 gap-3">
              <span className="text-[24px] mb-[8px] text-[rgb(24, 32, 38)]">
                The first decentralized GenAI-driven synthetic data network
              </span>
              <span className="text-[#ccc] text-[20px]">
                <h5 className="text-[24px] text-white">Scalable</h5>
                Build large-scale dataset with our decentralized data infra
                cost-effectively
                <h5 className="text-[24px] text-white">Composable</h5>
                Build workflows on top of other workflows by referencing them
                like using a library
                <h5 className="text-[24px] text-white">
                  Trackable & Verifiable
                </h5>
                Track how the data is generated and verify the execution
                on-chain anytime
                <h5 className="text-[24px] text-white">Privacy Preserving</h5>
                Ensure privacy for sensitive data with our FHE private pool
              </span>
            </div>

            <div className="flex flex-col flex-1 gap-3">
              <span className="text-[24px] mb-[8px] text-[rgb(24, 32, 38)]">
                Scalable, trackable & verifiable data processing
              </span>
              <span className="text-[#ccc] text-[20px]">
                <h5 className="text-[24px] text-white">Bootstrapping</h5>
                Randomly selected MIZU node will initiate the workflow and
                assign tasks to proper mappers
                <h5 className="text-[24px] text-white">Mapping</h5>
                Mapper nodes will pick up tasks dispatched and process them in
                parallel
                <h5 className="text-[24px] text-white">Reducing</h5>
                Randomly selected reducer node will aggregate the data from
                mappers and construct/upload the proof for this step.
              </span>
            </div>
          </div>
        </div>

        {/* partners */}
        <div className="flex flex-row w-[100vw] h-[188px] px-8 py-12">
          {[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11].map((i, idx) => (
            <Image
              src={i}
              key={idx}
              alt="partners"
              className="w-[128px] mr-8"
            />
          ))}
        </div>
        {/* teams */}
        <div className="mt-[30px]">
          <h2></h2>
          <h3 className="text-[30px] text-center mb-[20px]">
            Technical founders that previously built infra serving 2B people
          </h3>
          <div className="grid grid-cols-5 gap-10">
            <div className="flex flex-col items-center">
              <Image alt="logo" src={Shu} className="h-[200px]" />
              <span>Shu</span>
              <span className="text-[#1CBD3F]">Founder</span>
            </div>

            <div className="flex flex-col items-center">
              <Image alt="Bill" src={Bill} className="h-[200px]" />
              <span>Bill</span>
              <span className="text-[#1CBD3F]">Data Architect</span>
            </div>

            <div className="flex flex-col items-center">
              <Image alt="Uri" src={Uri} className="h-[200px]" />
              <span>Uri</span>
              <span className="text-[#1CBD3F] text-center">
                Cryptography & Security Expert
              </span>
            </div>

            <div className="flex flex-col items-center">
              <Image alt="Sam" src={Sam} className="h-[200px]" />
              <span>Sam</span>
              <span className="text-[#1CBD3F]">Cryptographer</span>
            </div>

            {/* advisor */}
            <div className="w-full pt-8">
              <div className="grid grid-row-4 gap-5">
                <div className="flex flex-row items-center">
                  <Image alt="logo" src={Sandeep} className="h-[60px]" />
                  <div>
                    <span>Sandeep</span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <Image alt="logo" src={Will} className="h-[60px]" />
                  <div>
                    <span>Will</span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <Image alt="logo" src={Michael} className="h-[60px]" />
                  <div>
                    <span>Michael</span>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <Image alt="logo" src={Yuze} className="h-[60px]" />
                  <div>
                    <span>Yuze</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between pt-[24px] pb-[70px] w-full">
          <p className="text-base text-[#777E90]">
            @2023 Mizu. All rights reserved
          </p>
          <div className="flex flex-row"></div>
        </div>
      </section>
    </main>
  );
}
