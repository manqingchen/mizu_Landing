import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import twitterLogo from "@/assets/svg/twitter_logo.svg";
export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col items-center justify-start overflow-y-auto">
      {/* header */}
      <header className="bg-black h-[80px] w-[100%] items-center justify-between font-mono text-sm flex flex-shrink-0 md:px-12 border-b border-white md:border-b-0 pl-[32px] pr-[21px]">
        <p className="flex items-center">
          <a href="/">
            <Image alt="logo" src={logo} className="md:w-10 md:h-10 w-[30px] h-[30px]" />
          </a>
          <span className="text-white text-[28px] text-[900] ml-4">MIZU</span>
        </p>
        <div className="flex items-end justify-center bg-gradient-to-t dark:from-black dark:via-black">
          <a
            href="https://twitter.com/0xMizuApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="twitter_logo" src={twitterLogo} className="w-12 h-12" />
          </a>
        </div>
      </header>
      {/* section */}
      <section className="bg-black flex flex-1 justify-between md:items-center w-full h-full md:pl-[130px] md:pr-[160px] pb-[10%] px-[32px] mt-[57px] md:mt-0">
        <article className="flex flex-col items-center md:items-start w-[100%]">
          <span className="inline-block text-white font-medium md:text-7xl md:leading-[67px] text-[32px] text-center">
            Meet The First{" "}
            <span className="text-[#06D458] font-medium md:text-7xl md:leading-[80px] block md:inline">
              Truly Global
            </span>
          </span>{" "}
          <span className="block text-white font-medium md:text-7xl md:leading-[67px] text-[32px]">
            Social Payment App.
          </span>
          <span className="block text-white font-medium text-7xl md:text-[24px] md:leading-[28px] leading-[30px] tracking-[-0.5px] md:mt-14 text-[20px] text-center mt-[24px]">
            Reimagine your consumer payments experience in Web3.
          </span>
          <div className="block md:hidden flex-shrink-0">
            <Image
              alt="logo"
              src={logo}
              className="w-[200px] h-[200px] mt-[57px]"
            />
          </div>
          <div className="flex mt-[88px] flex-col md:flex-row items-center">
            <button className="flex justify-center items-center w-[241px] h-[64px] p-[14px_38px] gap-[10px] flex-shrink-0 rounded-full bg-[#06D458] md:mr-9 font-medium text-lg leading-6 mb-[24px] md:mb-0">
              Join Waitlist
            </button>
            <a
              href="http://app.mizu.social"
              target="_blank"
              className="flex justify-center items-center w-[241px] h-[64px] p-[14px_38px] gap-[10px] flex-shrink-0 rounded-full border-[2px] text-white border-[#FFF] text-lg font-medium leading-6"
            >
              Enter App
            </a>
          </div>
        </article>
        <div className="md:block hidden flex-shrink-0">
          <Image alt="logo" src={logo} className="w-[313px] h-[340px]" />
        </div>
      </section>
    </main>
  );
}
