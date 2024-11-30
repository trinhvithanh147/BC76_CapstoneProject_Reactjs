import React from 'react'
import Icon from '../../../components/Icon'
import { Link } from 'react-router-dom';

const TryFiverr = () => {
    return (
      <section className="container">
        <div className="py-10">
          <div className="flex rounded-xl bg-[#fff6f2] flex-row">
            <div className="py-[56px] px-[80px] flex gap-10 flex-col flex-1 ">
              <small>
                <Icon.fiverlogomaker />
              </small>
              <h2 className="text-[48px] leading-[100%] font-normal tracking-[-.96px]">
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
            <div className="flex py-[48px] px-[80px] justify-center items-center flex-1">
              <img
                src="./../../../../../public/logo-maker-lohp.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default TryFiverr
