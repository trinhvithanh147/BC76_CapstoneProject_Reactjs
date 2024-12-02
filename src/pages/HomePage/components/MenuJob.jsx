import React from 'react'
import { Link } from 'react-router-dom';
import './menuJob.scss'
const MenuJob = ({icon,content}) => {
    return (
      <div className="col-span-1 flex justify-center  gap-3 p-[6px] ">
        <Link className="w-[129px] lg:h-[129px] flex flex-col gap-1   lg:justify-between py-[16px] px-[12px] rounded-2xl border-solid border-white bg-white !shadow-[0_0_0.88px_rgba(0,0,0,0.029),_0_0_2.29px_rgba(0,0,0,0.03),_0_0_5.52px_rgba(0,0,0,0.054),_0_0_11px_rgba(0,0,0,0.09)] menu_link">
          <div className="flex items-center lg:justify-start justify-center ">{icon}</div>
          <p className="h-[48px] text-[14px] leading-[22px] font-semibold z-10 lg:text-left text-center mt-2">
            {content}
          </p>
        </Link>
      </div>
    );
}

export default MenuJob
