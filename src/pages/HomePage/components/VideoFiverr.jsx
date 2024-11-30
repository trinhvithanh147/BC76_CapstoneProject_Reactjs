import React from 'react'
import { Link } from 'react-router-dom';

const VideoFiverr = () => {
  return (
    <>
      <section className="container ">
        <div className="py-[40px]">
          <div className="title">
            <div className=" text-[48px] leading-[105%]  tracking-[-1.44px] font-normal text-[#404145] mb-4">
              What success on Fiverr looks like
            </div>
            <p className="mb-[40px] text-[#62646a] font-normal">
              Vontélle Eyewear turns to Fiverr freelancers to bring their vision
              to life.
            </p>
          </div>
          <div className="video-container  ">
            <video
              className="w-full h-[598px] object-cover rounded-2xl"
              muted
              autoPlay
              controls
            >
              <source
                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <div className="container">
        <h3 className="text-[28px] mb-[32px] text-[#222325] leading-[36px] font-normal">
          Vontélle's go-to services
        </h3>
        <div>
          <div className="flex ">
            <div className="min-w-fit py-[12px] px-[14px]">
              <Link
                className="hover:!shadow-custom-hover min-w-[257px] h-[180px] bg-white  flex items-center flex-col gap-4 px-[16px] pt-[20px] pb-[16px] rounded-2xl"
                style={{
                  boxShadow:
                    "0 0.14px 2.29266px rgba(0,0,0,0.032), 0 0.37px 4.42626px rgba(0,0,0,0.048), 0 3px 7px rgba(0,0,0,0.09)",
                }}
              >
                <img
                  src="./../../../../public/3D-Industrial-Design_2x.png"
                  alt=""
                />
                <p>3D Industrial Design</p>
              </Link>
            </div>
            <div className="min-w-fit py-[12px] px-[14px]">
              <Link
                className="hover:!shadow-custom-hover min-w-[257px] h-[180px] bg-white  flex items-center flex-col gap-4 px-[16px] pt-[20px] pb-[16px] rounded-2xl"
                style={{
                  boxShadow:
                    "0 0.14px 2.29266px rgba(0,0,0,0.032), 0 0.37px 4.42626px rgba(0,0,0,0.048), 0 3px 7px rgba(0,0,0,0.09)",
                }}
              >
                <img
                  src="./../../../../public/E-commerce-Website-Development_2x.png"
                  alt=""
                />
                <p className="text-center">
                  E-commerce <br />
                  Website Development
                </p>
              </Link>
            </div>
            <div className="min-w-fit py-[12px] px-[14px]">
              <Link
                className="hover:!shadow-custom-hover min-w-[257px] h-[180px] bg-white  flex items-center flex-col gap-4 px-[16px] pt-[20px] pb-[16px] rounded-2xl"
                style={{
                  boxShadow:
                    "0 0.14px 2.29266px rgba(0,0,0,0.032), 0 0.37px 4.42626px rgba(0,0,0,0.048), 0 3px 7px rgba(0,0,0,0.09)",
                }}
              >
                <img src="./../../../../public/Email-Marketing_2x.png" alt="" />
                <p>Email Marketing</p>
              </Link>
            </div>
            <div className="min-w-fit py-[12px] px-[14px]">
              <Link
                className="hover:!shadow-custom-hover min-w-[257px] h-[180px] bg-white  flex items-center flex-col gap-4 px-[16px] pt-[20px] pb-[16px] rounded-2xl"
                style={{
                  boxShadow:
                    "0 0.14px 2.29266px rgba(0,0,0,0.032), 0 0.37px 4.42626px rgba(0,0,0,0.048), 0 3px 7px rgba(0,0,0,0.09)",
                }}
              >
                <img src="./../../../../public/Press-Releases_2x.png" alt="" />
                <p>Press Releases</p>
              </Link>
            </div>
            <div className="min-w-fit py-[12px] px-[14px]">
              <Link
                className="hover:!shadow-custom-hover min-w-[257px] h-[180px] bg-white  flex items-center flex-col gap-4 px-[16px] pt-[20px] pb-[16px] rounded-2xl"
                style={{
                  boxShadow:
                    "0 0.14px 2.29266px rgba(0,0,0,0.032), 0 0.37px 4.42626px rgba(0,0,0,0.048), 0 3px 7px rgba(0,0,0,0.09)",
                }}
              >
                <img src="./../../../../public/Logo-Design_2x.png" alt="" />
                <p>Logo Design</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoFiverr
