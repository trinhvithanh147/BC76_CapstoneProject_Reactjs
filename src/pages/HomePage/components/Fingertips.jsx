import React from 'react'
import { Link } from 'react-router-dom';

const Fingertips = () => {
  return (
    <section className="container">
      <div className="py-10 flex items-center gap-16 flex-col ">
        <div className="flex items-center flex-col gap-10 rounded-xl py-[48px]  px-0 bg-[#4d1727] w-full">
          <h2 className="text-white tracking-[-1.28px] text-[64px] leading-[64px]  text-center font-normal">
            Freelance services at your{" "}
            <span className="text-[#ff7640] font-normal leading-[66px] ">
              fingertips
            </span>
          </h2>
          <Link className="hover:bg-customWhite hover:transition-all hover:duration-75 outline-none border-transparent bg-white text-[16px] leading-[24px] text-[#222325] rounded-lg py-[8px] px-[16px] font-semibold">
            Join Fiverr
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Fingertips
