import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './guidesGrow.scss'
import CustomPrevArrow from '../../../components/arrow/CustomPrevArrow';
import CustomeNextArrow from '../../../components/arrow/CustomeNextArrow';
const GuidesGrow = () => {
  const guidesSlide = {
    dots: false, // Hiển thị dấu chấm điều hướng
    infinite: true, // Lặp lại các slides
    speed: 500, // Tốc độ chuyển slide (ms)
    slidesToShow: 3, // Số slides hiển thị cùng lúc
    slidesToScroll: 1, // Số slides cuộn mỗi lần
    autoplay: false, // Tự động chuyển slide
    autoplaySpeed: 2000, // Thời gian giữa các lần chuyển slide (ms)
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomeNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="container  xl:px-0 lg:px-8  px-6">
      <div className="py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-[48px] tracking-[-1.44px] leading-[105%] max-w-[720px]">
            Guides to help you grow
          </h2>
          <Link className="text-[#222325] hover:underline lg:block hidden">
            See more
          </Link>
        </div>
        <div className="guides_slide mt-[32px]">
          <Slider {...guidesSlide}>
            <div>
              <Link className="guide_item">
                <div className="mb-4 block  ">
                  <img
                    className="min-w-[100%] min-h-[319.19px] rounded object-cover w-full"
                    src="/side hustle.jpeg"
                    alt=""
                  />
                </div>
                <h3 className="text-[18px] leading-[140%] font-bold text-[#404145]">
                  Start a side business
                </h3>
              </Link>
              <Link className="text-[#222325] hover:underline lg:hidden block">
                See more
              </Link>
            </div>
            <div>
              <Link className="guide_item">
                <div className="mb-4 block overflow-hidden">
                  <img
                    className="min-w-[100%] min-h-[319.19px] rounded object-cover w-full"
                    src="/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg"
                    alt=""
                  />
                </div>
                <h3 className="text-[18px] leading-[140%] font-bold text-[#404145]">
                  Ecommerce business Ideas
                </h3>
              </Link>
              <Link className="text-[#222325] hover:underline lg:hidden block">
                See more
              </Link>
            </div>
            <div>
              <Link className="guide_item">
                <div className="mb-4">
                  <img
                    className="min-w-[100%] min-h-[319.19px] rounded object-cover w-full"
                    src="/home based online business-fiverr.jpg"
                    alt=""
                  />
                </div>
                <h3 className="text-[18px] leading-[140%] font-bold text-[#404145]">
                  Start an online business and work from home
                </h3>
              </Link>
              <Link className="text-[#222325] hover:underline lg:hidden block">
                See more
              </Link>
            </div>
            <div>
              <Link className="guide_item">
                <div className="mb-4">
                  <img
                    className=" min-w-[100%] min-h-[319.19px] rounded object-cover w-full"
                    src="/1682363178357-Howtobuildawebsitefromscratch.jpg"
                    alt=""
                  />
                </div>
                <h3 className="text-[18px] leading-[140%] font-bold text-[#404145]">
                  Build a website from scratch
                </h3>
              </Link>
              <Link className="text-[#222325] hover:underline lg:hidden block">
                See more
              </Link>
            </div>
            <div>
              <Link className="guide_item">
                <div className="mb-4">
                  <img
                    className="min-w-[100%] min-h-[319.19px] rounded object-cover w-full"
                    src="/05 - Article Cover.jpg"
                    alt=""
                  />
                </div>
                <h3 className="text-[18px] leading-[140%] font-bold text-[#404145]">
                  Grow your business with AI
                </h3>
              </Link>
              <Link className="text-[#222325] hover:underline lg:hidden block">
                See more
              </Link>
            </div>
            <div>
              <Link className="guide_item">
                <div className="mb-4">
                  <img
                    className="min-w-[100%] min-h-[319.19px] rounded object-cover w-full"
                    src="/business logo design-fiverr guide.jpg"
                    alt=""
                  />
                </div>
                <h3 className="text-[18px] leading-[140%] font-bold text-[#404145]">
                  Create a logo for your business
                </h3>
              </Link>
              <Link className="text-[#222325] hover:underline lg:hidden block">
                See more
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default GuidesGrow
