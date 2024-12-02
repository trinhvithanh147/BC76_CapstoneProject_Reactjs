import React from 'react'
import Icon from '../../../components/Icon'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const PremiumFreelance = () => {
    return (
      <section className="container overflow-hidden xl:px-0 lg:px-8  px-6">
        <div className="  bg-[#e8faf4] rounded-2xl lg:py-[56px] lg:pl-[80px] lg:pr-[32px] px-[24px] py-[32px] ">
          <div className="grid grid-cols-12 items-start flex-col">
            <div className="xl:col-span-6 col-span-12  ">
              <div className="mb-[32px]">
                <Icon.fiverr_pro />
              </div>
              <h2 className="text-[#222325] tracking-[-.04em] text-[48px] leading-[56px] mb-[32px]">
                The{" "}
                <span className="text-[#1dbf73] text-[50px] leading-[60px] font-normal">
                  premium
                </span>{" "}
                freelance solution for businesses
              </h2>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-[40px]">
                <div className="col-span-1">
                  <div className="flex items-start gap-3 lg:flex-col flex-row">
                    <Icon.tick />
                    <h6 className="text-[18px] leading-[25px] font-bold">
                      Dedicated hiring experts
                    </h6>
                  </div>
                  <p>
                    Count on an account manager to find you the right talent and
                    see to your project’s every need.
                  </p>
                </div>
                <div className="col-span-1">
                  <div className="flex items-start gap-3 lg:flex-col flex-row">
                    <Icon.tick />
                    <h6 className="text-[18px] leading-[25px] font-bold">
                      Satisfaction guarantee
                    </h6>
                  </div>
                  <p>
                    Order confidently, with guaranteed refunds for
                    less-than-satisfactory deliveries.
                  </p>
                </div>
                <div className="col-span-1">
                  <div className="flex items-start gap-3 lg:flex-col flex-row">
                    <Icon.tick />
                    <h6 className="text-[18px] leading-[25px] font-bold">
                      Advanced management tools
                    </h6>
                  </div>
                  <p>
                    Seamlessly integrate freelancers into your team and
                    projects.
                  </p>
                </div>
                <div className="col-span-1">
                  <div className="flex items-start gap-3 lg:flex-col flex-row">
                    <Icon.tick />
                    <h6 className="text-[18px] leading-[25px] font-bold">
                      Flexible payment models
                    </h6>
                  </div>
                  <p>
                    Pay per project or opt for hourly rates to facilitate
                    longer-term collaboration.
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-start justify-center">
                <Link className="transition-all duration-75 py-[10px] px-[20px] text-[16px] bg-[#222325] text-white rounded-lg border-transparent font-semibold hover:bg-[#404145] hover:text-white ">
                  Try Now
                </Link>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12  h-full lg:hidden xl:flex items-center justify-center  hidden">
              <span>
                <img
                  src="/fiverr-pro.png"
                  alt=""
                  className="max-w-[603.95px] h-auto"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default PremiumFreelance
