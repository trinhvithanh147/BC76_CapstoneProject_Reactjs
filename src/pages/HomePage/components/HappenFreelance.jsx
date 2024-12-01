import React from 'react'
import Icon from '../../../components/Icon';
import { Link } from 'react-router-dom';

const HappenFreelance = () => {
  return (
    <section className="container lg:px-0 px-6">
      <div className="py-[40px]">
        <h2 className="text-[40px] leading-[48px] mb-[64px] tracking-[-0.03em]">
          Make it all happen with freelancers
        </h2>
        <div className="grid lg:grid-cols-12 gap-[40px]  mb-[64px]">
          <div className="col-span-3 flex items-start lg:flex-col flex-row lg:gap-3">
            <Icon.categories />
            <p className="w-[232px]">
              Access a pool of top talent across 700 categories
            </p>
          </div>
          <div className="col-span-3 flex items-start lg:flex-col flex-row gap-3">
            <Icon.matching />
            <p className="w-[232px]">
              Enjoy a simple, easy-to-use matching experience
            </p>
          </div>
          <div className="col-span-3 flex items-start lg:flex-col flex-row gap-3">
            <Icon.quickly />
            <p className="w-[232px]">
              Get quality work done quickly and within budget
            </p>
          </div>
          <div className="col-span-3 flex items-start lg:flex-col flex-row gap-3">
            <Icon.happy />
            <p className="w-[232px]">Only pay when you're happy</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link className="bg-[#222325] transition-all duration-75 text-white text-base py-2 px-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#404145] hover:text-white">
            JoIn now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HappenFreelance
