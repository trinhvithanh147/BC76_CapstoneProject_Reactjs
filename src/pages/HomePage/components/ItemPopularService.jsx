import React from 'react'
import { Link } from 'react-router-dom';

const ItemPopularService = ({content,image,bgcolor}) => {
  return (
    <div className="flex min-w-fit ">
      <div
        className={`w-[200px] h-[266px] pt-[25px] pb-[6px] px-[6px] rounded-2xl mx-1 my-3 shadow-lg transition-all duration-500 hover:opacity-85`}
        style={{backgroundColor: bgcolor}}
      >
        <Link className="flex flex-col justify-between  h-full">
          <div>
            <h3 className="text-[18px] text-white leading-7 px-[10px] font-bold">
              {content}
            </h3>
          </div>
          <div>
            <img src={image} alt="" className="rounded-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ItemPopularService
