import React from 'react'
import Icon from '../../../components/Icon'
import { Link } from 'react-router-dom';

const TryFiverr = () => {
    return (
      <section className="container overflow-hidden lg:px-0 px-6">
        <div className="py-10">
          <div className="flex rounded-xl bg-[#fff6f2] lg:flex-row flex-col py-10 lg:gap-0 gap-10">
            <div className="lg:py-[56px] lg:px-[80px] flex lg:gap-10 gap-4 flex-col flex-1 lg:order-1 order-2  px-[24px]">
              <small>
                <Icon.fiverlogomaker />
              </small>
              <h2 className="lg:text-[48px] text-[32px]  leading-[100%] font-normal tracking-[-.96px]">
                Make an incredible
                <br />
                logo <span className="text-[#fc832b]">in seconds</span>
              </h2>
              <div className="text-[20px] leading-[28px]">
                Pre-designed by top talent. Just add your touch.
              </div>
              <span>
                <Link className="hover:bg-[#404145] transition-all duration-75 hover:text-white border-transparent bg-[#222325] leading-6 text-[16px] font-semibold text-white py-2 px-4 rounded-lg inline-flex items-center justify-center">
                  Try FIverr Logo Maker
                </Link>
              </span>
            </div>
            <div className="flex lg:py-[48px] lg:px-[80px] justify-center items-center flex-1 lg:order-2 order-1 px-[24px]">
              <img src="/logo-maker-lohp.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default TryFiverr
